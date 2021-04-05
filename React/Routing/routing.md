# Routing- React Routing

Routing allows us to navigate to particular pages or parts of a page within our application

We have 3 router packages with our application:
1.  react-router
2.  react-router-dom
3.  react-router-native

React router is a collection of navigational components that compose declaratively with the application.

It provides an application the ability to switch the view between components without the need to refresh the application.  It keeps the UI in sync with the endpoints.

Example: If you have a <Dog /> component and a <Cat /> and you want to switch based on the users' actions, React Router makes it so that when the user clicks ont he Cat option in the Nav bar, the URL's endpoint in the browser changes to reflect that by ending in  /cat and shows the user the <Cat /> component>

in essence, you can make a cpowerful applications that switches between different component while never having to leave the original page

## Code Stuff
```
<Route path='/foo' component={Bar} />
// If the URL shows /foo, render the component Bar


//You can also use Route in a switch case:

<Router>
  <Route path="/cat" component={CatComponent}/>
  <Route path="/dog" component={DogCompnent}/>
  <Route path="/gerbil" component={GerbilComponent}/>
</ Router>


// If you have cases of props that sound alike (User/Users/CreateUser/CreateUsers, etc), you can use 'exact' to grab the exact component
<Route exact path='/users">
<User />
</Route>

// If you want to change the URL, you use <Link /> instead of <a>

```

## Route Render Methods:

###1. Rendering with Component Name:
```
<Route path="/foo" component={Bar} />
```
 Benefits / Drawbacks:
It can magically pass down the route-related props, but it does not allow you to pass down your own props

###2. Rendering with InlineRender
```
 <Route path="/foo" component={ props => <Bar myprop="yay" {...props} /> } />
 ```
 This allows for inline rendering and wrapping without the remounting.  The benefit is you can send your own props, unfortunately, to do so you have to manually pass the route-related props via {...props}

###3. Rendering with the Children prop:
```
<Route
  path={to}
  children={({ match }) => (
    <li className={match ? "active" : ""}>
      <Link to={to} {...rest} />
    </li>
  )}
/>
```
This method makes use of the children prop and a function with the format ({match) =>{...} , destructuring a match in its declaration.  If the route does not match the URL, match will evaluate to null.  This is the preferred rendering method as it allows you to handle mismatches, unfortunately, the function you write to pass in will be more complicated/longer than for either of the preceding methods.

## Code example:
```
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
```
