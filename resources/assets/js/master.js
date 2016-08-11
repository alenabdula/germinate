/**
 * jQuery.
 */
window.$ = window.jQuery = require('jquery');

/**
 * Example component.
 */
import Germinate from './components/Germinate';

/**
 * jQuery on document ready.
 */
$(document).ready( () => {
    Germinate.ready();
});

/**
 * jQuery on window resize.
 */
Germinate.onResize( () => {
    Germinate.resize();
});
