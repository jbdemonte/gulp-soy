# gulp-soy [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][depstat-image]][depstat-url]

[Buy author a beer](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=WCUX27CFV79S2)

## Usage

First, install `gulp-soy` as a development dependency:

```shell
npm install --save-dev gulp-soy
```

## Example

```javascript
var soy = require("gulp-soy"),
    concat = require('gulp-concat');

gulp.src('./templates/*.soy')
  .pipe(soy())
  .pipe(concat("main.js"))
  .pipe(gulp.dest('./dist/'));
```


## LICENSE

(MIT License)

Copyright (c) 2014 Jean-Baptiste DEMONTE <jbdemonte@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


[npm-url]: https://npmjs.org/package/gulp-soy
[npm-image]: https://badge.fury.io/js/gulp-soy.png

[travis-url]: http://travis-ci.org/jbdemonte/gulp-soy
[travis-image]: https://secure.travis-ci.org/jbdemonte/gulp-soy.png?branch=master

[depstat-url]: https://david-dm.org/jbdemonte/gulp-soy
[depstat-image]: https://david-dm.org/jbdemonte/gulp-soy.png