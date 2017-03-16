/**
 * jQuery.
 */
window.$ = window.jQuery = require('jquery');

/**
 * Example component.
 */
import Germinate from './components/Germinate';

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