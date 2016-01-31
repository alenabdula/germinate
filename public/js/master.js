console.log("%c3rd Party Scripts!", "color: #A4CE39; font-size: 2rem;");
(function($) {

  /* https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript */
  var Germinate = {

    width : $(window).width(),
    height : $(window).height(),

    /* https://github.com/louisremi/jquery-smartresize#minimalist-standalone-version */
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
    },

    load: function() {
      console.log("%cWindow Loaded!", "color: #A4CE39; font-size: 2rem;");
    },

  };

  /* Document Ready, DOM constructed but images not fully downloaded!  */
  $(document).ready(function() {
    Germinate.ready();
  });

  /* Document Loaded including images! */
  $(window).load(function(){
    Germinate.load();
  });

  /* Window Resize */
  Germinate.onResize(function() {
    Germinate.resize();
  });

})(window.jQuery);