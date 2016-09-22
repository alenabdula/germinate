/**
 * jQuery.
 */
window.$ = window.jQuery = require('jquery');

/**
 * Example component.
 */
import Germinate from './components/Germinate';

/**
 * Application entry point.
 */
if ( document.documentElement.className.match(/\has-js\b/) ) {
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
}