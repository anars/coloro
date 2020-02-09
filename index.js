/* eslint-disable max-statements */
class Coloro {
    // eslint-disable-next-line complexity
    constructor(value) {
        let error = "";
        if (typeof value === "object") {
            if ((typeof value.r !== "undefined" || typeof value.red !== "undefined") &&
                (typeof value.g !== "undefined" || typeof value.green !== "undefined") &&
                (typeof value.b !== "undefined" || typeof value.blue !== "undefined")) {
                this.red = Number.parseInt(value.r || value.red, 10);
                this.green = Number.parseInt(value.g || value.green, 10);
                this.blue = Number.parseInt(value.b || value.blue, 10);
                if (typeof value.a !== "undefined" || typeof value.alpha !== "undefined") {
                    this.alpha = Number.parseFloat(value.a || value.alpha);
                    this.model = "RGBA";
                }
                // eslint-disable-next-line no-magic-numbers
                if (this.red < 0 || this.red > 255) {
                    error += "'red'";
                }
                // eslint-disable-next-line no-magic-numbers
                if (this.green < 0 || this.green > 255) {
                    error += `${error === "" ? "" : ", "}'green'`;
                }
                // eslint-disable-next-line no-magic-numbers
                if (this.blue < 0 || this.blue > 255) {
                    error += `${error === "" ? "" : ", "}'blue'`;
                }
                if (error !== "") {
                    error += " should be greater than or equal to 0 and less than or equal to 255";
                }
                // eslint-disable-next-line no-magic-numbers
                if (typeof this.alpha !== "undefined" && (this.alpha < 0 || this.alpha > 1)) {
                    error += `${error === "" ? "" : " and "}'alpha' should be greater than or equal to 0 and less than or equal to 1`;
                }
            }
        }
        // Else if (typeof value === "string") {}
        if (error !== "") {
            throw new Error(`${error}.`);
        }
    }
}

(module || {}).exports = Coloro;
