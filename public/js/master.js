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
   *  VueJS example, external resource
   */
  const vm = new Vue({
    el: 'body',
    ready() {
      console.log('ready');
    }
  });

  /**
   *  jQuery example, external resource
   */
  const Germinate = {
    width: $(window).width(),
    height: $(window).height(),
    onResize: function (a, b) {
      onresize = function () {
        clearTimeout(b);
        b = setTimeout(a, 100);
      };
      return a;
    },
    resize: function () {
      this.width = $(window).width();
      this.height = $(window).height();
      console.log("%cResized!", "color: #A4CE39; font-size: 2rem;");
      console.info('Width: ' + this.width);
      console.info('Height: ' + this.height);
    },
    ready: function () {
      console.log("%cDocument Ready!", "color: #A4CE39; font-size: 2rem;");
      console.info('Width: ' + this.width);
      console.info('Height: ' + this.height);
    }
  };

  $(document).ready(function () {
    Germinate.ready();
  });
  Germinate.onResize(function () {
    Germinate.resize();
  });

  /**
   *  Test.js, local module
   */
  let foo = new Test();
  console.log(foo.init());

}));