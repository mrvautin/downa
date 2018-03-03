const downa = require('../index');

const md = `
# Title

And *now* [a link](http://www.google.com) to **follow** and [another](http://yahoo.com/).

* One
* Two
* Three

## Subhead

![test image](http://via.placeholder.com/350x150)

One **two** three **four** five.

\`
some code
\`


\`\`\`
some block code
\`\`\`

One __two__ three _four_ five __six__ seven _eight_.

1. One
2. Two
3. Three

More text with sample.

> A block quote
> across two lines.

More text...`;

console.log(downa.render(md));
