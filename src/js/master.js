import $ from 'jquery';
import Germinate from './modules/Germinate';

$(document).ready( () => { Germinate.ready(); });
Germinate.onResize( () => { Germinate.resize(); });