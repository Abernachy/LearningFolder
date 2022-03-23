# Semantic vs non-semantic HTML
The meaning of an html element

You could name a class A but that would not convey the class' meaning or purpose to another developer, or future you.

Each HTML element has a distinct meaning, like ,p> being paragraph text
 
 # Non-Semantic eleemnts
 <div> or <span>

 Poorly written HTML is forgiving
 <div> is neutral.  Can be bad if used thoughtlessly, but can also be a tool. Like injecting Javascript into a page

 # Why?

Search Engine Optimization
Accessibility for screen readers
Readability for you and other developers
Better on mobile(lighter on file size)

# How?
HTML should not be coded to represent the data that will be displayed, not because of a default styling.

<h1> is a top level heading.  Some browsers might render it bigger that <p> text but that should't be the reason you sue an <h1> tag.

Styling is the job of css

Roughtly 100 elements available from HTMl 5

## article vs section tags

1.  Would the content make sense all by itself in an RSS feed reader that is streaming content from your site?  If so, use **article**  
2.  Is the content related to other content on the page? If so, use **section**  
3.  And if there isn't any semantic relationship with the containers, user **div**


## Attributes 
Attributes are key value paris.
They provide additional ways to access or identify differnet HTML elemetns

Use quotes for the value
Spaces in between key/values
<article class="someclass">

## Forms

