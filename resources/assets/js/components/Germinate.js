import $ from 'jquery';

const Germinate = {

    /**
     * Run things on window ready event.
     */
    ready() {
        this.print('Ready!');
        this.buttonSayHallo();
    },

    /**
     * Run things on window resize event.
     */
    resized() {
        this.print('Resized!', true);
    },

    /**
     * Click button to say Hello.
     */
    buttonSayHallo() {
        this.button.on('click', () => {
            this.print('Hello');
        });
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
     * Logs information to browsers console.
     */
    print(text, withSize = false) {
        let style = "color: #A4CE39; font-size: 1.2rem;";
        if ( withSize ) {
            console.log(`%cWidth: ${this.width}px`, style);
            console.log(`%cHeight: ${this.height}px`, style);
        }
        console.log(`%c${text}`, style);
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
    },

    /**
     * Component button.
     */
    get button() {
        return $('#js-button');
    }

};

export default Germinate;