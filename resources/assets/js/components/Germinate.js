import $ from 'jquery';

const Germinate = {
  width: $(window).width(),
  height: $(window).height(),
  button: $('.example button'),
  body: $('body'),
  onResize: (a, b) =>  {
    onresize = () => {
      clearTimeout(b);
      b = setTimeout(a, 100);
    };
    return a;
  },
  consoleReport: function(type) {
    console.log(`%c${type}`, "color: #A4CE39; font-size: 2rem;");
    console.info(`Width: ${this.width} and Height: ${this.height}`);
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
    let self = this;
    this.button.on('click', (event) => {
      event.preventDefault;
      self.changeBackgroundColor('inherit');
    } );
  },
  changeBackgroundColor: function(val = 'red') {
    this.body.css('backgroundColor', val);
  }
};

export default Germinate;