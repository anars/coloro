/* eslint-disable max-lines, max-statements, max-lines-per-function */
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
                this.model = "RGB";
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
        } else if (typeof value === "string") {
            const css1 = {
                "aqua": {
                    "b": 255,
                    "g": 255,
                    "r": 0
                },
                "black": {
                    "b": 0,
                    "g": 0,
                    "r": 0
                },
                "blue": {
                    "b": 255,
                    "g": 0,
                    "r": 0
                },
                "fuchsia": {
                    "b": 255,
                    "g": 0,
                    "r": 255
                },
                "gray": {
                    "b": 128,
                    "g": 128,
                    "r": 128
                },
                "green": {
                    "b": 0,
                    "g": 128,
                    "r": 0
                },
                "lime": {
                    "b": 0,
                    "g": 255,
                    "r": 0
                },
                "maroon": {
                    "b": 0,
                    "g": 0,
                    "r": 128
                },
                "navy": {
                    "b": 128,
                    "g": 0,
                    "r": 0
                },
                "olive": {
                    "b": 0,
                    "g": 128,
                    "r": 128
                },
                "purple": {
                    "b": 128,
                    "g": 0,
                    "r": 128
                },
                "red": {
                    "b": 0,
                    "g": 0,
                    "r": 255
                },
                "silver": {
                    "b": 192,
                    "g": 192,
                    "r": 192
                },
                "teal": {
                    "b": 128,
                    "g": 128,
                    "r": 0
                },
                "white": {
                    "b": 255,
                    "g": 255,
                    "r": 255
                },
                "yellow": {
                    "b": 0,
                    "g": 255,
                    "r": 255
                }
            };

            const css2 = {
                "orange": {
                    "b": 0,
                    "g": 165,
                    "r": 255
                }
            };

            const css3 = {
                "aliceblue": {
                    "b": 255,
                    "g": 248,
                    "r": 240
                },
                "antiquewhite": {
                    "b": 215,
                    "g": 235,
                    "r": 250
                },
                "aquamarine": {
                    "b": 212,
                    "g": 255,
                    "r": 127
                },
                "azure": {
                    "b": 255,
                    "g": 255,
                    "r": 240
                },
                "beige": {
                    "b": 220,
                    "g": 245,
                    "r": 245
                },
                "bisque": {
                    "b": 196,
                    "g": 228,
                    "r": 255
                },
                "blanchedalmond": {
                    "b": 205,
                    "g": 235,
                    "r": 255
                },
                "blueviolet": {
                    "b": 226,
                    "g": 43,
                    "r": 138
                },
                "brown": {
                    "b": 42,
                    "g": 42,
                    "r": 165
                },
                "burlywood": {
                    "b": 135,
                    "g": 184,
                    "r": 222
                },
                "cadetblue": {
                    "b": 160,
                    "g": 158,
                    "r": 95
                },
                "chartreuse": {
                    "b": 0,
                    "g": 255,
                    "r": 127
                },
                "chocolate": {
                    "b": 30,
                    "g": 105,
                    "r": 210
                },
                "coral": {
                    "b": 80,
                    "g": 127,
                    "r": 255
                },
                "cornflowerblue": {
                    "b": 237,
                    "g": 149,
                    "r": 100
                },
                "cornsilk": {
                    "b": 220,
                    "g": 248,
                    "r": 255
                },
                "crimson": {
                    "b": 60,
                    "g": 20,
                    "r": 220
                },
                "cyan": {
                    "b": 255,
                    "g": 255,
                    "r": 0
                },
                "darkblue": {
                    "b": 139,
                    "g": 0,
                    "r": 0
                },
                "darkcyan": {
                    "b": 139,
                    "g": 139,
                    "r": 0
                },
                "darkgoldenrod": {
                    "b": 11,
                    "g": 134,
                    "r": 184
                },
                "darkgray": {
                    "b": 169,
                    "g": 169,
                    "r": 169
                },
                "darkgreen": {
                    "b": 0,
                    "g": 100,
                    "r": 0
                },
                "darkgrey": {
                    "b": 169,
                    "g": 169,
                    "r": 169
                },
                "darkkhaki": {
                    "b": 107,
                    "g": 183,
                    "r": 189
                },
                "darkmagenta": {
                    "b": 139,
                    "g": 0,
                    "r": 139
                },
                "darkolivegreen": {
                    "b": 47,
                    "g": 107,
                    "r": 85
                },
                "darkorange": {
                    "b": 0,
                    "g": 140,
                    "r": 255
                },
                "darkorchid": {
                    "b": 204,
                    "g": 50,
                    "r": 153
                },
                "darkred": {
                    "b": 0,
                    "g": 0,
                    "r": 139
                },
                "darksalmon": {
                    "b": 122,
                    "g": 150,
                    "r": 233
                },
                "darkseagreen": {
                    "b": 143,
                    "g": 188,
                    "r": 143
                },
                "darkslateblue": {
                    "b": 139,
                    "g": 61,
                    "r": 72
                },
                "darkslategray": {
                    "b": 79,
                    "g": 79,
                    "r": 47
                },
                "darkslategrey": {
                    "b": 79,
                    "g": 79,
                    "r": 47
                },
                "darkturquoise": {
                    "b": 209,
                    "g": 206,
                    "r": 0
                },
                "darkviolet": {
                    "b": 211,
                    "g": 0,
                    "r": 148
                },
                "deeppink": {
                    "b": 147,
                    "g": 20,
                    "r": 255
                },
                "deepskyblue": {
                    "b": 255,
                    "g": 191,
                    "r": 0
                },
                "dimgray": {
                    "b": 105,
                    "g": 105,
                    "r": 105
                },
                "dimgrey": {
                    "b": 105,
                    "g": 105,
                    "r": 105
                },
                "dodgerblue": {
                    "b": 255,
                    "g": 144,
                    "r": 30
                },
                "firebrick": {
                    "b": 34,
                    "g": 34,
                    "r": 178
                },
                "floralwhite": {
                    "b": 240,
                    "g": 250,
                    "r": 255
                },
                "forestgreen": {
                    "b": 34,
                    "g": 139,
                    "r": 34
                },
                "gainsboro": {
                    "b": 220,
                    "g": 220,
                    "r": 220
                },
                "ghostwhite": {
                    "b": 255,
                    "g": 248,
                    "r": 248
                },
                "gold": {
                    "b": 0,
                    "g": 215,
                    "r": 255
                },
                "goldenrod": {
                    "b": 32,
                    "g": 165,
                    "r": 218
                },
                "greenyellow": {
                    "b": 47,
                    "g": 255,
                    "r": 173
                },
                "grey": {
                    "b": 128,
                    "g": 128,
                    "r": 128
                },
                "honeydew": {
                    "b": 240,
                    "g": 255,
                    "r": 240
                },
                "hotpink": {
                    "b": 180,
                    "g": 105,
                    "r": 255
                },
                "indianred": {
                    "b": 92,
                    "g": 92,
                    "r": 205
                },
                "indigo": {
                    "b": 130,
                    "g": 0,
                    "r": 75
                },
                "ivory": {
                    "b": 240,
                    "g": 255,
                    "r": 255
                },
                "khaki": {
                    "b": 140,
                    "g": 230,
                    "r": 240
                },
                "lavender": {
                    "b": 250,
                    "g": 230,
                    "r": 230
                },
                "lavenderblush": {
                    "b": 245,
                    "g": 240,
                    "r": 255
                },
                "lawngreen": {
                    "b": 0,
                    "g": 252,
                    "r": 124
                },
                "lemonchiffon": {
                    "b": 205,
                    "g": 250,
                    "r": 255
                },
                "lightblue": {
                    "b": 230,
                    "g": 216,
                    "r": 173
                },
                "lightcoral": {
                    "b": 128,
                    "g": 128,
                    "r": 240
                },
                "lightcyan": {
                    "b": 255,
                    "g": 255,
                    "r": 224
                },
                "lightgoldenrodyellow": {
                    "b": 210,
                    "g": 250,
                    "r": 250
                },
                "lightgray": {
                    "b": 211,
                    "g": 211,
                    "r": 211
                },
                "lightgreen": {
                    "b": 144,
                    "g": 238,
                    "r": 144
                },
                "lightgrey": {
                    "b": 211,
                    "g": 211,
                    "r": 211
                },
                "lightpink": {
                    "b": 193,
                    "g": 182,
                    "r": 255
                },
                "lightsalmon": {
                    "b": 122,
                    "g": 160,
                    "r": 255
                },
                "lightseagreen": {
                    "b": 170,
                    "g": 178,
                    "r": 32
                },
                "lightskyblue": {
                    "b": 250,
                    "g": 206,
                    "r": 135
                },
                "lightslategray": {
                    "b": 153,
                    "g": 136,
                    "r": 119
                },
                "lightslategrey": {
                    "b": 153,
                    "g": 136,
                    "r": 119
                },
                "lightsteelblue": {
                    "b": 222,
                    "g": 196,
                    "r": 176
                },
                "lightyellow": {
                    "b": 224,
                    "g": 255,
                    "r": 255
                },
                "limegreen": {
                    "b": 50,
                    "g": 205,
                    "r": 50
                },
                "linen": {
                    "b": 230,
                    "g": 240,
                    "r": 250
                },
                "magenta": {
                    "b": 255,
                    "g": 0,
                    "r": 255
                },
                "mediumaquamarine": {
                    "b": 170,
                    "g": 205,
                    "r": 102
                },
                "mediumblue": {
                    "b": 205,
                    "g": 0,
                    "r": 0
                },
                "mediumorchid": {
                    "b": 211,
                    "g": 85,
                    "r": 186
                },
                "mediumpurple": {
                    "b": 219,
                    "g": 112,
                    "r": 147
                },
                "mediumseagreen": {
                    "b": 113,
                    "g": 179,
                    "r": 60
                },
                "mediumslateblue": {
                    "b": 238,
                    "g": 104,
                    "r": 123
                },
                "mediumspringgreen": {
                    "b": 154,
                    "g": 250,
                    "r": 0
                },
                "mediumturquoise": {
                    "b": 204,
                    "g": 209,
                    "r": 72
                },
                "mediumvioletred": {
                    "b": 133,
                    "g": 21,
                    "r": 199
                },
                "midnightblue": {
                    "b": 112,
                    "g": 25,
                    "r": 25
                },
                "mintcream": {
                    "b": 250,
                    "g": 255,
                    "r": 245
                },
                "mistyrose": {
                    "b": 225,
                    "g": 228,
                    "r": 255
                },
                "moccasin": {
                    "b": 181,
                    "g": 228,
                    "r": 255
                },
                "navajowhite": {
                    "b": 173,
                    "g": 222,
                    "r": 255
                },
                "oldlace": {
                    "b": 230,
                    "g": 245,
                    "r": 253
                },
                "olivedrab": {
                    "b": 35,
                    "g": 142,
                    "r": 107
                },
                "orangered": {
                    "b": 0,
                    "g": 69,
                    "r": 255
                },
                "orchid": {
                    "b": 214,
                    "g": 112,
                    "r": 218
                },
                "palegoldenrod": {
                    "b": 170,
                    "g": 232,
                    "r": 238
                },
                "palegreen": {
                    "b": 152,
                    "g": 251,
                    "r": 152
                },
                "paleturquoise": {
                    "b": 238,
                    "g": 238,
                    "r": 175
                },
                "palevioletred": {
                    "b": 147,
                    "g": 112,
                    "r": 219
                },
                "papayawhip": {
                    "b": 213,
                    "g": 239,
                    "r": 255
                },
                "peachpuff": {
                    "b": 185,
                    "g": 218,
                    "r": 255
                },
                "peru": {
                    "b": 63,
                    "g": 133,
                    "r": 205
                },
                "pink": {
                    "b": 203,
                    "g": 192,
                    "r": 255
                },
                "plum": {
                    "b": 221,
                    "g": 160,
                    "r": 221
                },
                "powderblue": {
                    "b": 230,
                    "g": 224,
                    "r": 176
                },
                "rosybrown": {
                    "b": 143,
                    "g": 143,
                    "r": 188
                },
                "royalblue": {
                    "b": 225,
                    "g": 105,
                    "r": 65
                },
                "saddlebrown": {
                    "b": 19,
                    "g": 69,
                    "r": 139
                },
                "salmon": {
                    "b": 114,
                    "g": 128,
                    "r": 250
                },
                "sandybrown": {
                    "b": 96,
                    "g": 164,
                    "r": 244
                },
                "seagreen": {
                    "b": 87,
                    "g": 139,
                    "r": 46
                },
                "seashell": {
                    "b": 238,
                    "g": 245,
                    "r": 255
                },
                "sienna": {
                    "b": 45,
                    "g": 82,
                    "r": 160
                },
                "skyblue": {
                    "b": 235,
                    "g": 206,
                    "r": 135
                },
                "slateblue": {
                    "b": 205,
                    "g": 90,
                    "r": 106
                },
                "slategray": {
                    "b": 144,
                    "g": 128,
                    "r": 112
                },
                "slategrey": {
                    "b": 144,
                    "g": 128,
                    "r": 112
                },
                "snow": {
                    "b": 250,
                    "g": 250,
                    "r": 255
                },
                "springgreen": {
                    "b": 127,
                    "g": 255,
                    "r": 0
                },
                "steelblue": {
                    "b": 180,
                    "g": 130,
                    "r": 70
                },
                "tan": {
                    "b": 140,
                    "g": 180,
                    "r": 210
                },
                "thistle": {
                    "b": 216,
                    "g": 191,
                    "r": 216
                },
                "tomato": {
                    "b": 71,
                    "g": 99,
                    "r": 255
                },
                "turquoise": {
                    "b": 208,
                    "g": 224,
                    "r": 64
                },
                "violet": {
                    "b": 238,
                    "g": 130,
                    "r": 238
                },
                "wheat": {
                    "b": 179,
                    "g": 222,
                    "r": 245
                },
                "whitesmoke": {
                    "b": 245,
                    "g": 245,
                    "r": 245
                },
                "yellowgreen": {
                    "b": 50,
                    "g": 205,
                    "r": 154
                }
            };

            const css4 = {
                "rebeccapurple": {
                    "b": 153,
                    "g": 51,
                    "r": 102
                }
            };
        }
        if (error !== "") {
            throw new Error(`${error}.`);
        }
    }
}

(module || {}).exports = Coloro;
