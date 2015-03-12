##Germinate##

Project Boilerplate, under development.

###Getting Started###

**Tools & Requirements**

In order to use Gulp, our build system/script, you will need to install following dependencies:

+ [NodeJS](http://nodejs.org), Also see [Installing Node.js via package manager](https://github.com/joyent/node/wiki/installing-node.js-via-package-manager)
+ Ruby ([Windows](http://rubyinstaller.org), [Linux/Mac](http://rvm.io))
  + Install [Sass Ruby Gem](https://rubygems.org/gems/sass) via terminal: `gem install sass -N` __'-N'__ flag is for no-documentation
+ Next, from root folder run following commands
  + `npm install -g gulp` installs Gulp globally
  + `npm install` installs our development dependencies from `composer.json` [file](https://github.com/alenabdula/germinate/blob/master/package.json#L10).
  + And finally run `gulp` to start [default Gulp task](https://github.com/alenabdula/germinate/blob/master/Gulpfile.js#L118)
  + To run Gulp tasks individually you would run `gulp <task name>` ex. `gulp images` would take all images from `src/images` folder, compressing and copying the minified version to our publicly accessible folder. In this case `public/img` folder. [See Gulp images task definition in Gulpfile.js](https://github.com/alenabdula/germinate/blob/master/Gulpfile.js#L90).

###Inspired & Attributed###

- [Normalize.css](http://necolas.github.io/normalize.css)
- [Rock Hammer](https://github.com/malarkey/Rock-Hammer)
- [Lea Verou, Folded Corners Mixin](http://codepen.io/leaverou/pen/raGaN)
- [Micro Clearfix by Nicolas Gallagher](http://nicolasgallagher.com/micro-clearfix-hack)
- [inuit.css by Harry Roberts](https://github.com/csswizardry/inuit.css)
