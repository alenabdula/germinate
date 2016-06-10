(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (factory(global.$));
}(this, function ($) { 'use strict';

  $ = 'default' in $ ? $['default'] : $;

  var Germinate = {
    width: $(window).width(),
    height: $(window).height(),
    onResize: function(a, b) {
      onresize = function() {
        clearTimeout(b);
        b = setTimeout(a, 100);
      };
      return a;
    },
    resize: function() {
      this.width = $(window).width();
      this.height = $(window).height();
      console.log("%cResized!", "color: #A4CE39; font-size: 2rem;");
      console.info('Width: ' + this.width);
      console.info('Height: ' + this.height);
    },
    ready: function() {
      console.log("%cDocument Ready!", "color: #A4CE39; font-size: 2rem;");
      console.info('Width: ' + this.width);
      console.info('Height: ' + this.height);
    }
  };

  $(document).ready( function () { Germinate.ready(); });
  Germinate.onResize( function () { Germinate.resize(); });

}));