(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (factory(global.$));
}(this, function ($) { 'use strict';

  $ = 'default' in $ ? $['default'] : $;

  var Germinate = {
    width: $(window).width(),
    height: $(window).height(),
    button: $('.example button'),
    body: $('body'),
    onResize: function (a, b) {
      onresize = function () {
        clearTimeout(b);
        b = setTimeout(a, 100);
      };
      return a;
    },
    consoleReport: function(type) {
      console.log(("%c" + type), "color: #A4CE39; font-size: 2rem;");
      console.info(("Width: " + (this.width) + " and Height: " + (this.height)));
    },
    resize: function() {
      this.width = $(window).width();
      this.height = $(window).height();
      this.consoleReport('Resized');
    },
    ready: function() {
      this.changeBackgroundColor();
      this.interactiveButton();
      this.consoleReport('Ready');
    },
    interactiveButton: function() {
      var self = this;
      this.button.on('click', function (event) {
        event.preventDefault;
        self.changeBackgroundColor('inherit');
      } );
    },
    changeBackgroundColor: function(val) {
      if ( val === void 0 ) val = 'red';

      this.body.css('backgroundColor', val);
    }
  };

  $(document).ready( function () { Germinate.ready(); });
  Germinate.onResize( function () { Germinate.resize(); });

}));
//# sourceMappingURL=master.js.map