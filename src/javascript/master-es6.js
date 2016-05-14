import Vue from 'vue';
import $ from 'jquery';
import { Test } from './modules/Test';

/**
 *  VueJS, external resource
 */
const vm = new Vue({
  el: 'body',
  ready() {
    console.log('ready');
  }
});

/**
 *  jQuery, external resource
 */
let $body = $('body');
console.log($body);

/**
 *  Test.js, local module
 */
let foo = new Test;
console.log(foo.init());