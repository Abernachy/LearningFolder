# Routing - Creating Routes

To create route you just simply use a <Route /> component

As long as it is in side the router instance, you can put it as deeply nested as you like and it basically acts as a conditional renderer that is based on the url in the address bar.


## Props and Examples

### exact
```
// exact - will catch ALL of the requests that contain this pattern of letters
<Route path="/example" component={Example} />

// If we ONLY want to render this route if it exactly  /example, we can use:
<Route exact path="/example" component={Example} />

// The most commonly used index route is:
<Route exact path="/" component={Home} />

### component
```
// component is a prop that takes the instance of a component as an argument and will render that specific component.  
// The example Route contains a component prop that will take the Home component as an argument and will only render that particular component
<Route exact path="/" component={Home} />

```
###render
```
///the final prop - render is a class component or a functional component in of itself.
<Route path="/example" render={props => <Example {...props} />} />

// The component prop will not pass the Router instance props into the route component by default, you have to do it manually.
```
### Switch

```
//Another way of rendering a route.  You can use Switch component.  It doesnt take any props, it just wraps all of t he main Route components
// It will only render the FIrst url pattern that it matches
<Switch>
  <Route path="/example" component={Example} />
  <Route path="/example/1" component={Example} />
  <Route path="/example/2" component={Example}  />
</Switch>

// In the example above, the 2nd and 3rd route would not render due to the pattern of the URLs containing the same letter pattern as the first route.
```

## using Route components as a conditional
You can use Route component as a deeply nested inside within components of the app as you like, as long as it is within a Router instance(component)

Example use case is inside a Nav bar where you wnat to switch the nav button from a signup button to a login button

```
<Switch>
  <Route
    path="/signup"
    render={() => <a href="/login" className="nav-link">Login</a>}
  />
  <Route
    path="/login"
    render={() => <a href="/signup" className="nav-link">Signup</a>}
  />
</Switch>
```
The above says if the user is on a signup page, render an achor tag to take them back to the login page, and if the user is on a login page, render an achor tag to take them back to the signup page.  

## Using Redirect
React router gives a component that will automatically redirect to another route, called Redirect. 
```
<Route
  path="/some-url"
  render={ () => <Redirect to="/some-other-url" /> }
/>
```