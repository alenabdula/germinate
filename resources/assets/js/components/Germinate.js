import $ from 'jquery';

const Germinate = {

    /**
     * Run things on window ready event.
     */
    ready() {
        console.log('Ready!', `Width:${this.width}`, `Height:${this.height}`);
    },

    /**
     * Run things on window resize event.
     */
    resized() {
        console.log('Resized!', `Width:${this.width}`,`Height:${this.height}`);
    },

    /**
     * Debounced and throttled resize events.
     */
    resize(a, b) {
        onresize = () => {
            clearTimeout(b);
            b = setTimeout(a, 100);
        };
        return a;
    },

    /**
     * Getter for window width.
     */
    get width() {
        return $(window).width();
    },

    /**
     * Getter for window height.
     */
    get height() {
        return $(window).height();
    }

};

export default Germinate;