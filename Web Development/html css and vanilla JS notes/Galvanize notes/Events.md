# Events

When a user clicks on a button on the page, we can use event listeners to caputre that event, so we can make something happen.

The event listener is basicall code that will run when a particular event happens in a place (like clicking a button).  

Event handlers are proerties on certain DOM elements that mnage how that element reacts to events.  

## Types

Some common event types in the browser are:

click 
keypress
focus
blur

shitload more: https://developer.mozilla.org/en-US/docs/Web/Events


## Coding
```
// addEventListener() - adds an event listener to the entire window object
window.addEventListener("click", function(){
  alert("You clicked on te page!")
})

// Every DOM element has its own addEventListener

var button = document.querySelector("button")
button.addEventListener("click", function(){
  alert("Someone clicked the button!!")
})