# downa

> A teeny tiny Markdown to HTML renderer which works in Node and the browser.

## Installation:

`downa` works in the browser and Node.js.

`npm i downa --save`

### Browser:

`<script src='./node_modules/downa/dist/downa.min.js'></script>`

> Note: no other dependencies are required. See: test.html for example

## Usage:

### Node:

``` javascript
const downa = require('downa');

const md = `
# Title

And *now* [a link](http://www.google.com) to **follow** and [another](http://yahoo.com/).

* One
* Two
* Three

## Subhead`;

const html = downa.render(md);
console.log('HTML', html);
```

### Browser:

``` javascript
<script src='../dist/downa.min.js'></script>
<script>
document.addEventListener("DOMContentLoaded", function() {
    var markdown = `
        # Title

        And *now* [a link](http://www.google.com) to **follow** and [another](http://yahoo.com/).

        * One
        * Two
        * Three

        ## Subhead`;
    var html = downa.render(markdown);
    console.log('HTML', html);
});
</script>
```