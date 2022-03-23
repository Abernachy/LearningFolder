# Router Types

We have 2 types of routers:
1.  BrowserRouter - used when you have a server that will handle dynamic request (knows how to respond to any possible URL request)
2. HashRouter - should be used for static websites (can only respond to requests for files that i knows about)

* Most of the time we will use BrowserRouter, but if its hosted on a server that just serves static files, HashRouter works better.

Route URLS:

// BrowserRouter:
http://example.com/about

// HashRouter
http://example.com/#/about

## BrowserRouter:
A Router (instance of a router) that uses the HTML5 history API (pushState,replaceSTate, and popState events) to keep your UI in sync with the URL."

These instances are typically used within either App or index.JS


```
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import About from './About'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)
```

## HashRouter
A Router instance that uses the hash portion of the URL(window.location.hash) to keep your UI in sync with the URL.

```
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';

const App = () => (
  <HashRouter>
    <App />
  </HashRouter>
);
```
