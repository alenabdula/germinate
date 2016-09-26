/**
 * jQuery.
 */
window.$ = window.jQuery = require('jquery');

/**
 * Example component.
 */
import Germinate from './components/Germinate';

/**
 * Check availability of JavaScript in the browser and execute application code.
 */
if ( document.documentElement.className.match(/\has-js\b/) ) {

    /**
     * Document ready event.
     */
    Germinate.ready();

    /**
     * Window resize event.
     */
    Germinate.resize( () => {
        Germinate.resized();
    });

}