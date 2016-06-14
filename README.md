# Germinate

Project Boilerplate

**Table of Content**

1. [Getting Started](#getting-started)
2. [Inspired & Attributed](#inspired--attributed)

## Getting Started

**Tools & Requirements**

In order to use Gulp, our build system/script, you will need to install following dependencies:

+ [NodeJS](http://nodejs.org), Also see [installing Node.js via package manager](https://github.com/joyent/node/wiki/installing-node.js-via-package-manager)
+ From root folder run following commands:
  + `npm install -g gulp` installs Gulp globally
  + `npm install` installs our development dependencies from `composer.json` file.
  + And finally run `gulp` to start default Gulp task
  + To run Gulp tasks individually you would run `gulp <task name>` ex. `gulp scss` or `gulp rollup`.
+ installing latest: `npm install --save-dev browser-sync gulp gulp-autoprefixer gulp-changed gulp-imagemin gulp-rename gulp-sass gulp-sourcemaps imagemin-pngquant rollup rollup-plugin-buble`

## Inspired & Attributed

Much of the code and thinking is inspired by and attributed to:

+ Harry Roberts - [Managing CSS Projects with ITCSS, YouTube](https://youtu.be/1OKZOV-iLj4?t=7m25s)
+ jQuery SmartResize - [Minimalist Standalone Version](https://github.com/louisremi/jquery-smartresize#minimalist-standalone-version)
+ A new micro clearfix hack by Nicolas Gallagher - [clearfix](http://nicolasgallagher.com/micro-clearfix-hack)
+ normalize.css - project by [Nicolas Gallagher](http://nicolasgallagher.com), co-created with [Jonathan Neal](http://music.thewikies.com/jonneal).
+ HTML5 Boilerplate - [Front-end Template](https://html5boilerplate.com)