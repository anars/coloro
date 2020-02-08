/* eslint-disable max-statements */

// eslint-disable-next-line no-unused-vars
class Color {
    // eslint-disable-next-line complexity
    constructor (value) {
        this.red = 0;
        this.green = 0;
        this.blue = 0;
        this.alpha = null;
        this.model = "RGB";
        if (typeof value === "object") {
            if ((typeof value.r !== "undefined" || typeof value.red !== "undefined") &&
                (typeof value.g !== "undefined" || typeof value.green !== "undefined") &&
                (typeof value.b !== "undefined" || typeof value.blue !== "undefined")) {
                this.red = value.r || value.red;
                this.green = value.g || value.green;
                this.blue = value.b || value.blue;
            } else if ((typeof value.r !== "undefined" || typeof value.red !== "undefined") &&
                (typeof value.g !== "undefined" || typeof value.green !== "undefined") &&
                (typeof value.b !== "undefined" || typeof value.blue !== "undefined") &&
                (typeof value.a !== "undefined" || typeof value.alpha !== "undefined")) {
                this.red = value.r || value.red;
                this.green = value.g || value.green;
                this.blue = value.b || value.blue;
                this.alpha = value.a || value.alpha;
                this.model = "RGBA";
            }
        }
    }
}