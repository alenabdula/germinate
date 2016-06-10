import $ from 'jquery';

const Germinate = {
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

export default Germinate;