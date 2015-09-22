(function($) {
  var AppName = {
    width : $(window).width(),
    height : $(window).height(),
    resize: function(a, b) {
      onresize = function() {
        clearTimeout(b);
        b = setTimeout(a, 100);
      };
      return a;
    },
    resized : function() {
      this.width = $(window).width();
      this.height = $(window).height();
      this.equalHeight();
      console.log('resized');
    },
    equalHeight: function() {
      var rows = $('.row');
      if ( !rows.length ) return false;
      rows.each(function(){
        var equalItems = $(this).find('.equal-heights');
        var itemsHeight = [];
        equalItems.each(function(){
          itemsHeight.push($(this).height());
        });
        var maxSize = Math.max.apply( Math, itemsHeight );
        equalItems.height(maxSize);
      });
    },
    init : function() {
      this.equalHeight();
      console.log('init');
    },
  };
  /* Initialize */
  AppName.init();
  /* Window Resize */
  AppName.resize(function() {
    AppName.resized();
  });
})(window.jQuery);