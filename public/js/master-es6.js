(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('vue'), require('jquery')) :
  typeof define === 'function' && define.amd ? define(['vue', 'jquery'], factory) :
  (factory(global.Vue,global.$));
}(this, function (Vue,$) { 'use strict';

  Vue = 'default' in Vue ? Vue['default'] : Vue;
  $ = 'default' in $ ? $['default'] : $;

  class Test {
    init() {
      return 'Opa!!';
    }
  }

  /**
   *  VueJS
   */
  const vm = new Vue({
    el: 'body',
    ready() {
      console.log('ready');
    }
  });

  /**
   *  jQuery
   */
  let $body = $('body');
  console.log($body);

  /**
   *  Test module
   */
  let foo = new Test();
  console.log(foo.init());

}));