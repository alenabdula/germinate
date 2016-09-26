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
        if ( withSize ) {
            console.info(`Width: ${this.width} and Height: ${this.height}`);
        }
        console.log(`%c${text}`, "color: #A4CE39; font-size: 2rem;");
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