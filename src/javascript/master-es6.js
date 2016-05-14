import Vue from 'vue';
import $ from 'jquery';
import { Test } from './modules/Test';

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

$(document).ready( function() { Germinate.ready(); });
Germinate.onResize( function() { Germinate.resize(); });

/**
 *  Test.js, local module
 */
let foo = new Test;
console.log(foo.init());