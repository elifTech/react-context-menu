# React.js Context-Menu


## Demo & Examples

Live demo: [elifTech.github.io/react-context-menu](http://elifTech.github.io/react-context-menu/)


## Installation

The easiest way to use react-menu is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

You can also use the standalone build by including `dist/react-menu.js` in your page. If you use this, make sure you have already included React, and it is available as a global variable.

```
npm install react-menu --save
```


## Usage

__EXPLAIN USAGE HERE__

```
var ContextMenu = require('react-context-menu');

let data = {
    selector: 'context-menu',
    className: 'well',
    callback: function(e) {
        e.preventDefault();
        console.log(e.target.textContent);
        alert("Clicked on " + e.target.textContent);
    },
    items: [
        {name: "Edit", icon: "edit"},
        {name: "Cut", icon: "cut"},
        {name: "Copy", icon: "copy"},
        {name: "Paste", icon: "paste"},
        {name: "Delete", icon: "delete"},
        {name: "", icon: ""},
        {name: "Quit", icon: "quit"}
    ]
};


React.render(
    <ContextMenu options={data} />,
    document.getElementById(data.selector)
);

```

### Properties

* __DOCUMENT PROPERTIES HERE__

### Notes

__ADDITIONAL USAGE NOTES__

## License

__PUT LICENSE HERE__

Copyright (c) 2016 ElifTech.
