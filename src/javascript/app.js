
(function($) {
  
  var AppName = {
    
    width : $(window).width(),
    
    height : $(window).height(),
    
    /* https://github.com/louisremi/jquery-smartresize */
    resize: function(a, b) {
      onresize = function() {
        clearTimeout(b);
        b = setTimeout(a, 100);
      };
      return a;
    },
    
    on_resize : function() {
      this.width = $(window).width();
      this.height = $(window).height();
      console.log('Resized!!!', 'Width: ' + this.width, 'Height: ' + this.height);
    },
    
    init : function() {
      console.log('Initialized!!!', 'Width: ' + this.width, 'Height: ' + this.height);
    },
    
  };
  
  /* Document Ready  */
  $(document).on('ready', function() {
    
    AppName.init();
    
  });
  
  /* Window Resize */
  AppName.resize(function() {
    
    AppName.on_resize();
    
  });
  
})(window.jQuery);
