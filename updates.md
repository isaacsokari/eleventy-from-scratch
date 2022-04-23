# This is a record of errors due to breaking changes that I found while completing the `eleventy-from-scratch` course

## 1. `gulp-sass`

```sh
> eleventy-from-scratch@1.0.0 start
> npx gulp && concurrently "npx gulp watch" "npx eleventy --serve"

[22:07:38] Using gulpfile ~/learn/eleventy-from-scratch/gulpfile.js
[22:07:38] Starting 'default'...
[22:07:38] Starting 'fonts'...
[22:07:38] Starting 'images'...
[22:07:38] Starting 'sass'...
Error in plugin "gulp-sass"
Message:

gulp-sass no longer has a default Sass compiler; please set one yourself.
Both the "sass" and "node-sass" packages are permitted.
For example, in your gulpfile:

  const sass = require('gulp-sass')(require('sass'));

[22:07:39] The following tasks did not complete: default, fonts, images, sass
[22:07:39] Did you forget to signal async completion?
```

Fix: change line 3 of `<rootdir>/gulp-tasks/sass` to

```diff
  - const sassProcessor = require('gulp-sass');
  + const sassProcessor = require('gulp-sass')(require('sass'));
```

Here we're setting dart sass as the processor

## 2. `gulp-imagemin`

```sh

> eleventy-from-scratch@1.0.0 start
> npx gulp && concurrently "npx gulp watch" "npx eleventy --serve"

Error [ERR_REQUIRE_ESM]: require() of ES Module /home/ts/learn/eleventy-from-scratch/node_modules/gulp-imagemin/index.js from /home/ts/learn/eleventy-from-scratch/gulp-tasks/images.js not supported.
Instead change the require of index.js in /home/ts/learn/eleventy-from-scratch/gulp-tasks/images.js to a dynamic import() which is available in all CommonJS modules.
    at Object.<anonymous> (/home/ts/learn/eleventy-from-scratch/gulp-tasks/images.js:2:18)
    at Object.<anonymous> (/home/ts/learn/eleventy-from-scratch/gulpfile.js:5:16)
    at async Promise.all (index 0) {
  code: 'ERR_REQUIRE_ESM'
}
```

To fix this error above, downgrade to `gulp-imagemin@7.1.0`, replace the installation command with 

```
npm install gulp-imagemin@7.1.0
```