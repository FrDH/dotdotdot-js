jQuery.dotdotdot
================

A jQuery plugin for advanced cross-browser ellipsis on multiple line content.<br />
Demo's and documentation: http://dotdotdot.frebsite.nl

*Note:*<br />
Because its performance can not be improved, this plugin is no longer actively maintained.<br />
Feel free to use it and submit pull requests though.


<img src="http://dotdotdot.frebsite.nl/img/preview.png" width="100%" border="0" />


## How to use the plugin
### Integration to your page

Include all necessary .js-files inside the head-tag of the page.

```html
<head>
    <script src="jquery.js" type="text/javascript"></script>
    <script src="jquery.dotdotdot.js" type="text/javascript"></script>
</head>
```

### How it finds and activates

By default the script run on the page is:

```javascript
$.fn.dotdotdot.maker();
```

On creating new elements on the page such as Modals, Panels etc you can actually call a dot-ellipsis search on a jQuery object directly

```javascript
$Modal.dotdotdot.maker();
//or
$('#navBar').dotdotdot.maker();
```

Important, only for the data attribute option.  You can also globally override any data attributes within a jQuery object for extra control with:

```javascript
$('.element').dotdotdot.maker({
    watch: false,
    ellipsis: "<<< "
    // and any other params
});
```



Then you can use either CSS, Data Attribute or JS approach or use them both.

### CSS approach
You can add one or several CSS classes to HTML elements to automatically invoke "jQuery.dotdotdot functionality" and some extra features. It allows to use jQuery.dotdotdot only by adding appropriate CSS classes without JS programming.

Available classes and their description:
* dot-ellipsis - automatically invoke jQuery.dotdotdot to this element. This class must be included if you plan to use other classes below.
* dot-resize-update - automatically update if window resize event occurs. It's equivalent to option `watch:'window'`.
* dot-timer-update - automatically update if window resize event occurs. It's equivalent to option `watch:true`.
* dot-load-update - automatically update after the window has beem completely rendered. Can be useful if your content is generated dynamically using JS and, hence, jQuery.dotdotdot can't correctly detect the height of the element before it's rendered completely.
* dot-height-XXX - available height of content area in pixels, where XXX is a number, e.g. can be `dot-height-35` if you want to set maximum height for 35 pixels. It's equivalent to option `height:'XXX'`.

*Examples*

Adding jQuery.dotdotdot to element:

```html
<div class="dot-ellipsis">
	<p>Lorem Ipsum is simply dummy text.</p>
</div>
```

Adding jQuery.dotdotdot to element with update on window resize:
    
```html
<div class="dot-ellipsis dot-resize-update">
	<p>Lorem Ipsum is simply dummy text.</p>
</div>
```
	
Adding jQuery.dotdotdot to element with predefined height of 50px:
    
```html
<div class="dot-ellipsis dot-height-50">
	<p>Lorem Ipsum is simply dummy text.</p>
</div>
```

## Element attribute approach
For if you prefer to apply control on the dom element whilst keeping your styling classes separate.

Adding jQuery.dotdotdot default to element:

```html
<div data-dot-ellipsis>
	<p>Lorem Ipsum is simply dummy text.</p>
</div>
```

Adding jQuery.dotdotdot to element as data attribute with example parameters:

```html
<div data-dot-ellipsis='{"watch": false, "ellipsis": "<<< "}'>
	<p>Lorem Ipsum is simply dummy text.</p>
</div>
```


## Javascript approach
Create a DOM element and put some text and other HTML markup in this "wrapper".

```html
<div id="wrapper">
    <p>Lorem Ipsum is simply dummy text.</p>
</div>
```

Fire the plugin onDocumentReady using the wrapper-selector.

```javascript
$(document).ready(function() {
    $("#wrapper").dotdotdot({
        // configuration goes here
    });
});
```

### Authors and Contributors
* [Fred Heusschen](https://github.com/FrDH) is the author of the jQuery.dotdotdot
* [Ramil Valitov](https://github.com/rvalitov) added the "CSS approach" functionality

### More info
Please visit http://dotdotdot.frebsite.nl

### Licence
The jQuery.dotdotdot plugin is licensed under the MIT license:
http://en.wikipedia.org/wiki/MIT_License
