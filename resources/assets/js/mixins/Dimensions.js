export default {
    data() {
        return {
            dimensions: {
                window: {x: false, y: false,},
                document: {x: false, y: false,},
            }
        }
    },
    emits: ['dimensions'],
    methods: {
        runDimensions() {
            this.getDimensions().then((data) => {
                // this.dimensions.window = data.window;
                // this.dimensions.document = data.document;
                this.Event.emit('dimensions', data);
            });
        },
        getDimensions() {
            return new Promise((resolve, reject) => {
                let w = window,
                    d = document,
                    e = d.documentElement,
                    b = d.getElementsByTagName('body')[0],
                    dx = w.innerWidth || e.clientWidth,
                    dy = w.innerHeight|| e.clientHeight,
                    wx = b.clientWidth,
                    wy = b.clientHeight;
                let response = {
                    window: { x: wx + 'px', y: wy + 'px' },
                    document: { x: dx + 'px', y: dy + 'px' }
                };
                resolve(response);
            } );
        },
        resizedDimensions(a, b) {
            window.onresize = () => {
                window.clearTimeout(b);
                b = window.setTimeout(a, 100);
            };
            return a;
        },
    },
    mounted() {
        this.runDimensions();
        this.resizedDimensions(() => {
            this.runDimensions();
        });
        this.Event.on('dimensions', (response) => {
            this.dimensions.window = response.window;
            this.dimensions.document = response.document;
        });
    },
}
