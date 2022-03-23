# Routing - Navigating Routes

In React router there are 2 diff ways that you navigate your routes:
1.  Link Components
2.  Using the history methods on the props object
   
## Link Components
Link components are like anchor tags in that they reidrect you from one location to another, however; keep in mind that this is all SPA routing.  You are not navigating to a whole different route, you are just conditionally rendering some component and manipulating the url using JS.
```
<Link to="/login">Login</Link>
```

## using history methods
You have a lot of options when using props.history, but the most commonly used method is push.  The push method will redirect you to another route.
```
const Example = ({ history }) => (
  <button onClick={() => history.push('/home')}>Go Home</button>
)
```
