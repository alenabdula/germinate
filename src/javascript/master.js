(function($) {

  /* https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript */
  var Germinate = {

    width : $(window).width(),
    height : $(window).height(),

    /* https://github.com/louisremi/jquery-smartresize#minimalist-standalone-version */
    resize: function(a, b) {
      onresize = function() {
        clearTimeout(b);
        b = setTimeout(a, 100);
      };
      return a;
    },

    onResize: function() {
      this.width = $(window).width();
      this.height = $(window).height();
      console.log('Resized!', 'Width: ' + this.width, 'Height: ' + this.height);
    },

    ready: function() {
      console.log('Document Ready!', 'Width: ' + this.width, 'Height: ' + this.height);
    },

  };

  /* Document Ready, DOM constructed but images not fully downloaded!  */
  $(document).ready(function() {
    Germinate.ready();
  });

  /* Document Loaded including images! */
  $(window).load(function(){
    console.log('Window Loaded!');
  });

  /* Window Resize */
  Germinate.resize(function() {
    Germinate.onResize();
  });

})(window.jQuery);