# Germinate

Project Boilerplate

## Getting Started

**Tools & Requirements**

In order to use Gulp, our build system/script, you will need to install following dependencies:

+ [NodeJS](http://nodejs.org), Also see [Installing Node.js via package manager](https://github.com/joyent/node/wiki/installing-node.js-via-package-manager)
+ From root folder run following commands:
  + `npm install -g gulp` installs Gulp globally
  + `npm install` installs our development dependencies from `composer.json` file.
  + And finally run `gulp` to start default Gulp task
  + To run Gulp tasks individually you would run `gulp <task name>` ex. `gulp scss` or `gulp javascript`.

## Snippets

Helpful **Sublime Snippet** for using Media Queries.

```xml
<snippet>
<content>
<![CDATA[
@include mq(\$from: ${1:sm}${2:, \$until: ${3:md}}) {
  ${4:// do magic }
}
]]>
</content>
  <tabTrigger>mq</tabTrigger>
  <scope>source.scss</scope>
  <description>Germinate: Custom Media Query</description>
</snippet>
```

Use as:

```scss
.component {
  // default mobile-first breakpoint
  background-color: rebeccapurple;
  @include mq($from: sm) {
    // breakpoint sm: 34em
    background-color: #999;
  }
  @include mq($from: md) {
    // breakpoint md: 48em
    background-color: #666;
  }
  @include mq($from: lg) {
    // breakpoint lg: 62em
    background-color: #222;
  }
  @include mq($from: xl) {
    // breakpoint xl: 75em
    background-color: #000;
  }
}
```

Will produce following:

```css
/* default mobile */
.component {
  background-color: rebeccapurple;
}
/* sm */
@media (min-width: 34em) {
  .component {
    background-color: #999;
  }
}
/* md */
@media (min-width: 48em) {
  .component {
    background-color: #666;
  }
}
/* lg */
@media (min-width: 62em) {
  .component {
    background-color: #222;
  }
}
/* xl */
@media (min-width: 75em) {
  .component {
    background-color: #000;
  }
}
```