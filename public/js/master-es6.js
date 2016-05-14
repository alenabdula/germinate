(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('vue')) :
  typeof define === 'function' && define.amd ? define(['vue'], factory) :
  (factory(global.vue));
}(this, function (vue) { 'use strict';

  new vue.Vue({
    el: 'body',
    ready() {
      console.log('ready');
    }
  });

}));