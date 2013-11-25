jQuery.dotdotdot
================

A jQuery plugin for advanced cross-browser ellipsis on multiple line content.<br />
Demo's and documentation: http://dotdotdot.frebsite.nl

<img src="http://dotdotdot.frebsite.nl/img/preview.png" width="100%" border="0" />

### How to use the plugin
Include all nessesary .js-files inside the head-tag of the page.

```html
<head>
    <script src="jquery.js" type="text/javascript"></script>
    <script src="jquery.dotdotdot.js" type="text/javascript"></script>
</head>
```

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

### More info
Please visit http://dotdotdot.frebsite.nl

### Licence
The jQuery.dotdotdot plugin is dual licensed under the MIT and GPL licenses:
+ http://en.wikipedia.org/wiki/MIT_License
+ http://en.wikipedia.org/wiki/GNU_General_Public_License