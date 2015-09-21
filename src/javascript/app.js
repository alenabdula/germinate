
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
      this.equalHeight();
    },
    
    equalHeight : function() {
      var $col = $('.equal-height-column');
      var maxHeight = [];
      var rows = [];
      var rowTop = 0;
      var rowIndex = 0;
      
      $col.each(function() {
        $el = $(this);
        $el.css('height', '');
        
        if ( $el.offset().top > rowTop ) {
            rowIndex++;
            rows[rowIndex] = [];
            rowTop = $el.offset().top;
            maxHeight[rowIndex] = 0;
        }

        if ( $el.height() > maxHeight[rowIndex] ) {
            maxHeight[rowIndex] = $el.height();
        }

        rows[rowIndex].push($el);

      });
      
      for ( row = 1; row <= rowIndex; row++ ) {
        for ( i = 0; i <= rows[row].length; i++ ) {
            $(rows[row][i]).height(maxHeight[row]);
        }
      }
    },
    
  };
  /* Initialize */
  AppName.init();
  /* Window Resize */
  AppName.resize(function() {
    AppName.on_resize();
  });
})(window.jQuery);
