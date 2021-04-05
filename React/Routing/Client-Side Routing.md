#React Routing - Client Side Routing

Client-side routing is a type of routing where as a user navigates around the application, no full-page reloads take place, even if t he URL changes.  A client-side route is handled internally by the Javascript code that has been loaded on the page.

When a user clicks on a link, for example, in the nav bar, the URL changes but there is no request to the server.  Rather, the JS code changes the URL and changes the state of the application, resulting in the render of another view of the app.  If , you click on a a About Us page, the url of the site you're on would have an endpoint like /about and you would see the page you expect upon clicking the link.  However; there has been no request or reload of the page!

Client side works especially well with Single Page Applications.  With an SPA, multiple pages don't need to load, just the original request with the initial HTML.  Client-side routing is used to mimic an SPA experience while keeping the routes organized and uniform, allowing the user to navigate throughout the application without there needing to be multiple server requests.