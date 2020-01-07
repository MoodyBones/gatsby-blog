# Elevator Pitch site

[Gatsby Starter](https://github.com/greglobinski/gatsby-themes/blob/master/packages/gatsby-theme-elevator-pitch/README.md#folders-structure)

### Start
Start the server:
```
gatsby develop
```

### Add Elevator Pitch to your Gatsby.js blog as a standard page
The above describe how to install the theme as a standalone one page website. If you want, you can add it to your Gatsby.js blog as a standard page.

For example, I have a blog built with the official `gatsby-starter-blog`. If you don't, install it now.
```
gatsby new gatsby-blog https://github.com/gatsbyjs/gatsby-starter-blog
```

Now, go to the newly created folder and install the theme

```
$ cd gatsby-blog`
yarn add gatsby-theme-elevator-pitch
```

Then, open gatsby-config.js and setup the theme.
```
module.exports = {
  ...

  __experimentalThemes: ['gatsby-theme-elevator-pitch'],

  ...
  ```

Create a new page inside src/pages, with code like below. Let's call it pitch.js.

```
// src/pages/pitch.js

import React from 'react';
import { Viewer } from 'gatsby-theme-elevator-pitch';

const PitchPage = props => <Viewer />;

export default PitchPage;
```

Run `dev` server

```
$ gatsby develop
```

And open http://localhost:8000/pitch in your browser.

That's it!

However, there is an issue we have to fix.

If you open http://localhost8000 you will see that the starter renders the theme's screens as blog posts. And that is not what we want, right? To fix that we have to add filters to the GraphQl queries in gatsby-node.js and index.js.
```
// src/pages/index.js

...

  allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {

...
```

```
// gatsby-node.js

...

  allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1000
    ) {

...
```


Voila!

License
The MIT License (MIT)

Copyright (c) 2018 greglobinski

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


