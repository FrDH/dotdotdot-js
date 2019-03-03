dotdotdot
================

Dotdotdot is a javascript plugin for truncating multiple line content on a webpage. 
It uses an ellipsis to indicate that there is more text than currently visible. 
Optionally, the plugin can keep a "read more" anchor visible at the end of the content, after the ellipsis.

[Demo](http://dotdotdot.frebsite.nl)

When using dotdotdot to truncate HTML, you don't need to worry about your HTML markup, the plugin knows its way around most elements. 
It's responsive, so when resizing the browser, the ellipsis will update on the fly.

Need help? Have a look at [the documentation](http://dotdotdot.frebsite.nl).

<img src="http://dotdotdot.frebsite.nl/preview.png" width="100%" border="0" />

### Licence
The dotdotdot javascript plugin is licensed under the [CC-BY-NC-4.0 license](http://creativecommons.org/licenses/by-nc/4.0/).<br />
You can [purchase a license](http://dotdotdot.frebsite.nl#download) if you want to use it in a commercial project.

### Browser support
The dotdotdot javascript plugin targets modern browsers that support ES5, meaning Internet Explorer 10 and earlier are not supported. 
For Internet Explorer 11, you''ll need [some polyfills](https://polyfill.io/v3/polyfill.min.js?features=default%2CElement.prototype.append%2CElement.prototype.prepend%2CElement.prototype.remove%2CElement.prototype.replaceWith%2CElement.prototype.classList%2CElement.prototype.cloneNode%2CElement.prototype.matches).
If you need support for Internet Explorer 9 or 10, use the legacy (jQuery) version: [version 3.2.3](https://github.com/FrDH/dotdotdot-JS/releases/tag/v3.2.3).

### Development
This project uses [Gulp(4)](http://gulpjs.com/) to minify the JS file.
If you are unfamiliar with Gulp, check [this tutorial](https://travismaynard.com/writing/getting-started-with-gulp) on how to get started.<br />
Run `gulp watch` in the command-line to put a watch on the files and run all scripts immediately after saving your changes.
