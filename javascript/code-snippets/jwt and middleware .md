# JWT Tokens and authentication

JWT tokens are another method that you can set up middleware for your application. The codes from this snippet come from the ProShop repo: Abernachy/ProShop

## Set up and configuration

1.  Get your .env file set up with your jwt secret:

```
JWT_SECRET = abc123
```

2.  Then get your token generator set up on your back end
    ./backend/utils/generateToken.js

```
import jwt from 'jsonwebtoken'
//Generate the token object
const generateToken = (id) => {
	return jwt.sign({ id }, process.env.JWT_SECRET, {
		expiresIn: '30d',
	})
}

export default generateToken

```

3.  Add in your authentication in your userController.

```
//@description  Authenitcate the user, and get the token
//@route  POST  /api/users/login
//@acces  Pulic
const authUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body
	//authenticate the user and return a token object based on their user ID
	const user = await User.findOne({ email })
	if (user && (await user.matchPassword(password))) {
		res.json({
			_id: user._id,
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin,
			token: generateToken(user._id),
		})
	} else {
		res.status(401)
		throw new Error('Invalid email or password')
	}
})


//@description  GET user profile
//@route  GET  /api/users/profile
//@acces  Private
const getUserProfile = asyncHandler(async (req, res) => {
	const user = await User.findById(req.user._id)

	if (user) {
		res.json({
			_id: user._id,
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin,
		})
	} else {
		res.status(404)
		throw new Error('User not found')
	}
})


```

This will authenticate the user for his log in and generate his authorization token, which will last for 30 days based on the utility above.

4.  Get your back end set up for your authorization middleware:
    ./backend/middleware/authMiddleWare.js

```
import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'

const protect = asyncHandler(async (req, res, next) => {
	let token

	if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
		try {
			token = req.headers.authorization.split(' ')[1]
			const decoded = jwt.verify(token, process.env.JWT_SECRET)
			req.user = await User.findById(decoded.id).select('-password')
			next()
		} catch (error) {
			console.error(error)
			res.status(401)
			throw new Error('Not authorized, token failed')
		}
	}

	if (!token) {
		res.status(401)
		throw new Error('Not Authorized, no token')
	}
})

const admin = (req, res, next) => {
	if (req.user && req.user.isAdmin) {
		next()
	} else {
		res.status(401)
		throw new Error('Not an authorized admin')
	}
}

export { protect, admin }

```

Then we also want to get our

Some things from above:

jsonwebtoken is our main jwt package. User from our model. AsyncHandler allows you to use async/await with express, so you don't have to deal with .then syntax from promises.

When a request is made, in the headers there is a key/value set called 'Authorization: Bearer <token>' with a value representing the random token generated. When the token is decoded using the jwt secret, it'll have the userID associated with that user.

5.  Now we can apply our protect and/or admin to our routes as additional objects sent by axios.

```
import express from 'express'
const router = express.Router()
import * as user from '../controllers/userController.js'
import { protect, admin } from '../middleware/authMiddleWare.js'

router.route('/').post(user.registerUser).get(protect, admin, user.getUsers)
router.post('/login', user.authUser)
router
	.route('/profile')
	.get(protect, user.getUserProfile)
	.put(protect, user.updateUserProfile)

router
	.route('/:id')
	.delete(protect, admin, user.deleteUser)
	.get(protect, admin, user.getUserById)
	.put(protect, admin, user.updateUser)

export default router

```

## Usermodel code

Usermodel.js code, so you can see what that is just in case.

```
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		isAdmin: { type: Boolean, required: true, default: false },
	},
	{
		timestamps: true,
	}
)

userSchema.methods.matchPassword = async function (enteredPassword) {
	return await bcrypt.compare(enteredPassword, this.password)
}

userSchema.pre('save', async function (next) {
	if (!this.isModified('password')) {
		next()
	}
	const salt = await bcrypt.genSalt(10)
	this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model('User', userSchema)
export default User
```

## Front end

1. Now that the back end route is created, we can create our front end that interacts with the backend route.

```
export const login = (email, password) => async (dispatch) => {
	try {
		dispatch({
			type: USER_LOGIN_REQUEST,
		})

		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		}
		const { data } = await axios.post('/api/users/login', { email, password }, config)

		dispatch({
			type: USER_LOGIN_SUCCESS,
			payload: data,
		})
		localStorage.setItem('userInfo', JSON.stringify(data))
	} catch (error) {
		dispatch({
			type: USER_LOGIN_FAIL,
			payload: error.response && error.response.data.message ? error.response.data.message : error.message,
		})
	}
}

```

So, from the frontend we send a post request to our /users/login route (the /login route from above) , which logs into the system with our email and password, and generates a token of our userID. The login information is then saved in our local storage (this is called in our store.js file in the redux notes), so that it retains the user's login status.

Now that the token is saved, when the user wants to go to to their profile, the route /users/profile =>, its protected and requires a token, otherwise they get a token failed error.
