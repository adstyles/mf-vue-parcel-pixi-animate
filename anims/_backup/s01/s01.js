import { EventBus } from '../../src/main';

(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Sprite = PIXI.Sprite;
    var fromFrame = PIXI.Texture.fromFrame;
    var Graphics = PIXI.Graphics;
    var shapes = PIXI.animate.ShapesCache;

    var Graphic295 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 186, loop: false });
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[2]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[1]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[0]);
        this.addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic296 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 186, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[3]);
        this.addTimedChild(instance1);
    });

    var Graphic25 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 89, loop: false });
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[14])
            .setTransform(-3.45, -28.35);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[13])
            .setTransform(17.2, 0.1, 1, 1, 0.714);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[12])
            .setTransform(10.85, -42.1, 1, 1, -0.069);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[11])
            .setTransform(0.55, -37.45);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[10])
            .setTransform(-3.45, -28.35);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[9])
            .setTransform(-3.45, -28.35);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[8])
            .setTransform(11.05, 34.75, 1, 1, 1.207);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[7])
            .setTransform(-3.45, -28.35);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[6])
            .setTransform(-3.45, -28.35);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[5])
            .setTransform(-3.45, -28.35);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[4])
            .setTransform(-3.45, -28.35);
        this.addTimedChild(instance11)
            .addTimedChild(instance10)
            .addTimedChild(instance9)
            .addTimedChild(instance8)
            .addTimedChild(instance7)
            .addTimedChild(instance6)
            .addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic3 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 6, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[17])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic14 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 41, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[17])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic16 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 13, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[17])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic18 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 31, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[17])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic20 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 39, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[17])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic4 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 6, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[17])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic15 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 41, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[17])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic17 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 13, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[17])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic19 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 31, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[17])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic21 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 39, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[17])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic5 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 136, loop: false });
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[21]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[20]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[18]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[18]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[19]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[18]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[18]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[19]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[18]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[18]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[19]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[18]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[18]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[19]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[18])
            .setTransform(-1289.25, -221.05);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[18])
            .setTransform(-1263.8, -221.2);
        this.addTimedChild(instance4, 0, 136, {
                "0": {
                    x: -1289.25,
                    y: -221.05
                },
                "6": {
                    y: -220.85
                },
                "8": {
                    y: -221.05
                },
                "49": {
                    y: -220.85
                },
                "50": {
                    y: -221.05
                },
                "63": {
                    y: -220.85
                },
                "64": {
                    y: -221.05
                },
                "95": {
                    y: -220.85
                },
                "97": {
                    y: -221.05
                }
            })
            .addTimedChild(instance3, 0, 136, {
                "0": {
                    x: -1289.25,
                    y: -221.05
                },
                "6": {
                    y: -220.85
                },
                "8": {
                    y: -221.05
                },
                "49": {
                    y: -220.85
                },
                "50": {
                    y: -221.05
                },
                "63": {
                    y: -220.85
                },
                "64": {
                    y: -221.05
                },
                "95": {
                    y: -220.85
                },
                "97": {
                    y: -221.05
                }
            })
            .addTimedChild(instance2, 0, 6, {
                "0": {
                    x: -1289.25,
                    y: -221.05
                }
            })
            .addTimedChild(instance1, 0, 6, {
                "0": {
                    x: -1263.8,
                    y: -221.2
                }
            })
            .addTimedChild(instance5, 6, 2)
            .addTimedChild(instance7, 8, 41, {
                "8": {
                    x: -1289.25,
                    y: -221.05
                }
            })
            .addTimedChild(instance6, 8, 41, {
                "8": {
                    x: -1263.8,
                    y: -221.2
                }
            })
            .addTimedChild(instance8, 49, 1)
            .addTimedChild(instance10, 50, 13, {
                "50": {
                    x: -1289.25,
                    y: -221.05
                }
            })
            .addTimedChild(instance9, 50, 13, {
                "50": {
                    x: -1263.8,
                    y: -221.2
                }
            })
            .addTimedChild(instance11, 63, 1)
            .addTimedChild(instance13, 64, 31, {
                "64": {
                    x: -1289.25,
                    y: -221.05
                }
            })
            .addTimedChild(instance12, 64, 31, {
                "64": {
                    x: -1263.8,
                    y: -221.2
                }
            })
            .addTimedChild(instance14, 95, 2)
            .addTimedChild(instance16, 97, 39)
            .addTimedChild(instance15, 97, 39);
    });

    var Graphic6 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 136, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[22])
            .setTransform(-1303.95, -197.85);
        this.addTimedChild(instance1);
    });

    var Graphic7 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 136, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[23])
            .setTransform(-1268.05, -199.05);
        this.addTimedChild(instance1);
    });

    var Graphic1 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 136, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[24]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[42]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[36]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[32]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[25]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[42]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[36]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[32]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[29]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[27]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[26]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[30]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[43]);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[37]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[33]);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[29]);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[27]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[26]);
        var instance21 = new Graphics()
            .drawCommands(shapes.s01[30]);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[31]);
        var instance26 = new Graphics()
            .drawCommands(shapes.s01[29]);
        var instance25 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance24 = new Graphics()
            .drawCommands(shapes.s01[27]);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[26]);
        var instance27 = new Graphics()
            .drawCommands(shapes.s01[24]);
        var instance30 = new Graphics()
            .drawCommands(shapes.s01[44]);
        var instance29 = new Graphics()
            .drawCommands(shapes.s01[41]);
        var instance28 = new Graphics()
            .drawCommands(shapes.s01[38]);
        var instance33 = new Graphics()
            .drawCommands(shapes.s01[42]);
        var instance32 = new Graphics()
            .drawCommands(shapes.s01[36]);
        var instance31 = new Graphics()
            .drawCommands(shapes.s01[32]);
        var instance37 = new Graphics()
            .drawCommands(shapes.s01[29]);
        var instance36 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance35 = new Graphics()
            .drawCommands(shapes.s01[27]);
        var instance34 = new Graphics()
            .drawCommands(shapes.s01[26]);
        var instance40 = new Graphics()
            .drawCommands(shapes.s01[44]);
        var instance39 = new Graphics()
            .drawCommands(shapes.s01[41]);
        var instance38 = new Graphics()
            .drawCommands(shapes.s01[38]);
        var instance43 = new Graphics()
            .drawCommands(shapes.s01[42]);
        var instance42 = new Graphics()
            .drawCommands(shapes.s01[36]);
        var instance41 = new Graphics()
            .drawCommands(shapes.s01[32]);
        var instance47 = new Graphics()
            .drawCommands(shapes.s01[29]);
        var instance46 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance45 = new Graphics()
            .drawCommands(shapes.s01[27]);
        var instance44 = new Graphics()
            .drawCommands(shapes.s01[26]);
        var instance48 = new Graphics()
            .drawCommands(shapes.s01[31]);
        var instance49 = new Graphics()
            .drawCommands(shapes.s01[30]);
        var instance50 = new Graphics()
            .drawCommands(shapes.s01[24]);
        var instance51 = new Graphics()
            .drawCommands(shapes.s01[25]);
        var instance52 = new Graphics()
            .drawCommands(shapes.s01[24]);
        var instance55 = new Graphics()
            .drawCommands(shapes.s01[42]);
        var instance54 = new Graphics()
            .drawCommands(shapes.s01[36]);
        var instance53 = new Graphics()
            .drawCommands(shapes.s01[32]);
        var instance58 = new Graphics()
            .drawCommands(shapes.s01[43]);
        var instance57 = new Graphics()
            .drawCommands(shapes.s01[37]);
        var instance56 = new Graphics()
            .drawCommands(shapes.s01[33]);
        var instance62 = new Graphics()
            .drawCommands(shapes.s01[29]);
        var instance61 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance60 = new Graphics()
            .drawCommands(shapes.s01[27]);
        var instance59 = new Graphics()
            .drawCommands(shapes.s01[26]);
        var instance63 = new Graphics()
            .drawCommands(shapes.s01[24]);
        var instance64 = new Graphics()
            .drawCommands(shapes.s01[31]);
        var instance67 = new Graphics()
            .drawCommands(shapes.s01[43]);
        var instance66 = new Graphics()
            .drawCommands(shapes.s01[37]);
        var instance65 = new Graphics()
            .drawCommands(shapes.s01[33]);
        var instance70 = new Graphics()
            .drawCommands(shapes.s01[44]);
        var instance69 = new Graphics()
            .drawCommands(shapes.s01[41]);
        var instance68 = new Graphics()
            .drawCommands(shapes.s01[38]);
        var instance71 = new Graphics()
            .drawCommands(shapes.s01[31]);
        var instance72 = new Graphics()
            .drawCommands(shapes.s01[25]);
        var instance73 = new Graphics()
            .drawCommands(shapes.s01[24]);
        var instance74 = new Graphics()
            .drawCommands(shapes.s01[25]);
        var instance77 = new Graphics()
            .drawCommands(shapes.s01[45]);
        var instance76 = new Graphics()
            .drawCommands(shapes.s01[39]);
        var instance75 = new Graphics()
            .drawCommands(shapes.s01[34]);
        var instance78 = new Graphics()
            .drawCommands(shapes.s01[31]);
        var instance81 = new Graphics()
            .drawCommands(shapes.s01[42]);
        var instance80 = new Graphics()
            .drawCommands(shapes.s01[36]);
        var instance79 = new Graphics()
            .drawCommands(shapes.s01[32]);
        var instance84 = new Graphics()
            .drawCommands(shapes.s01[44]);
        var instance83 = new Graphics()
            .drawCommands(shapes.s01[41]);
        var instance82 = new Graphics()
            .drawCommands(shapes.s01[38]);
        var instance87 = new Graphics()
            .drawCommands(shapes.s01[42]);
        var instance86 = new Graphics()
            .drawCommands(shapes.s01[36]);
        var instance85 = new Graphics()
            .drawCommands(shapes.s01[32]);
        var instance91 = new Graphics()
            .drawCommands(shapes.s01[29]);
        var instance90 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance89 = new Graphics()
            .drawCommands(shapes.s01[27]);
        var instance88 = new Graphics()
            .drawCommands(shapes.s01[26]);
        var instance92 = new Graphics()
            .drawCommands(shapes.s01[31]);
        var instance95 = new Graphics()
            .drawCommands(shapes.s01[42]);
        var instance94 = new Graphics()
            .drawCommands(shapes.s01[36]);
        var instance93 = new Graphics()
            .drawCommands(shapes.s01[32]);
        var instance96 = new Graphics()
            .drawCommands(shapes.s01[25]);
        var instance100 = new Graphics()
            .drawCommands(shapes.s01[29]);
        var instance99 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance98 = new Graphics()
            .drawCommands(shapes.s01[27]);
        var instance97 = new Graphics()
            .drawCommands(shapes.s01[26]);
        var instance101 = new Graphics()
            .drawCommands(shapes.s01[31]);
        var instance104 = new Graphics()
            .drawCommands(shapes.s01[43]);
        var instance103 = new Graphics()
            .drawCommands(shapes.s01[37]);
        var instance102 = new Graphics()
            .drawCommands(shapes.s01[33]);
        var instance107 = new Graphics()
            .drawCommands(shapes.s01[46]);
        var instance106 = new Graphics()
            .drawCommands(shapes.s01[40]);
        var instance105 = new Graphics()
            .drawCommands(shapes.s01[35]);
        var instance110 = new Graphics()
            .drawCommands(shapes.s01[43]);
        var instance109 = new Graphics()
            .drawCommands(shapes.s01[37]);
        var instance108 = new Graphics()
            .drawCommands(shapes.s01[33]);
        var instance113 = new Graphics()
            .drawCommands(shapes.s01[45]);
        var instance112 = new Graphics()
            .drawCommands(shapes.s01[39]);
        var instance111 = new Graphics()
            .drawCommands(shapes.s01[34]);
        var instance117 = new Graphics()
            .drawCommands(shapes.s01[29]);
        var instance116 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance115 = new Graphics()
            .drawCommands(shapes.s01[27]);
        var instance114 = new Graphics()
            .drawCommands(shapes.s01[26]);
        var instance120 = new Graphics()
            .drawCommands(shapes.s01[42]);
        var instance119 = new Graphics()
            .drawCommands(shapes.s01[36]);
        var instance118 = new Graphics()
            .drawCommands(shapes.s01[32]);
        var instance121 = new Graphics()
            .drawCommands(shapes.s01[25]);
        var instance125 = new Graphics()
            .drawCommands(shapes.s01[29]);
        var instance124 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance123 = new Graphics()
            .drawCommands(shapes.s01[27]);
        var instance122 = new Graphics()
            .drawCommands(shapes.s01[26]);
        var instance128 = new Graphics()
            .drawCommands(shapes.s01[42]);
        var instance127 = new Graphics()
            .drawCommands(shapes.s01[36]);
        var instance126 = new Graphics()
            .drawCommands(shapes.s01[32]);
        var instance131 = new Graphics()
            .drawCommands(shapes.s01[43]);
        var instance130 = new Graphics()
            .drawCommands(shapes.s01[37])
            .setTransform(-5.8, 24);
        var instance129 = new Graphics()
            .drawCommands(shapes.s01[33])
            .setTransform(-5.8, 24);
        this.addTimedChild(instance1, 0, 26, {
                "0": {
                    x: -5.8,
                    y: 28.5,
                    kx: 3.142
                }
            })
            .addTimedChild(instance4, 26, 1)
            .addTimedChild(instance3, 26, 1, {
                "26": {
                    x: -5.8,
                    y: 24.2
                }
            })
            .addTimedChild(instance2, 26, 1, {
                "26": {
                    x: -5.8,
                    y: 24.2
                }
            })
            .addTimedChild(instance5, 27, 1, {
                "27": {
                    x: -5.8,
                    y: 25
                }
            })
            .addTimedChild(instance8, 28, 1)
            .addTimedChild(instance7, 28, 1, {
                "28": {
                    x: -5.8,
                    y: 24.2
                }
            })
            .addTimedChild(instance6, 28, 1, {
                "28": {
                    x: -5.8,
                    y: 24.2
                }
            })
            .addTimedChild(instance12, 29, 1, {
                "29": {
                    x: -484.2,
                    y: 573.15,
                    kx: 3.142
                }
            })
            .addTimedChild(instance11, 29, 1, {
                "29": {
                    x: -4.55,
                    y: 44.8,
                    kx: 3.142
                }
            })
            .addTimedChild(instance10, 29, 1, {
                "29": {
                    x: -5.05,
                    y: 25.2
                }
            })
            .addTimedChild(instance9, 29, 1, {
                "29": {
                    x: -484.2,
                    y: 573.15,
                    kx: 3.142
                }
            })
            .addTimedChild(instance13, 30, 1)
            .addTimedChild(instance16, 31, 1)
            .addTimedChild(instance15, 31, 1, {
                "31": {
                    x: -5.8,
                    y: 24
                }
            })
            .addTimedChild(instance14, 31, 1, {
                "31": {
                    x: -5.8,
                    y: 24
                }
            })
            .addTimedChild(instance20, 32, 1, {
                "32": {
                    x: -484.2,
                    y: 573.15,
                    kx: 3.142
                }
            })
            .addTimedChild(instance19, 32, 1, {
                "32": {
                    x: -4.55,
                    y: 44.8,
                    kx: 3.142
                }
            })
            .addTimedChild(instance18, 32, 1, {
                "32": {
                    x: -5.05,
                    y: 25.2
                }
            })
            .addTimedChild(instance17, 32, 1, {
                "32": {
                    x: -484.2,
                    y: 573.15,
                    kx: 3.142
                }
            })
            .addTimedChild(instance21, 33, 1)
            .addTimedChild(instance22, 34, 1)
            .addTimedChild(instance26, 35, 1, {
                "35": {
                    x: -484.2,
                    y: 573.15,
                    kx: 3.142
                }
            })
            .addTimedChild(instance25, 35, 1, {
                "35": {
                    x: -4.55,
                    y: 44.8,
                    kx: 3.142
                }
            })
            .addTimedChild(instance24, 35, 1, {
                "35": {
                    x: -5.05,
                    y: 25.2
                }
            })
            .addTimedChild(instance23, 35, 1, {
                "35": {
                    x: -484.2,
                    y: 573.15,
                    kx: 3.142
                }
            })
            .addTimedChild(instance27, 36, 1, {
                "36": {
                    x: -5.8,
                    y: 28.5,
                    kx: 3.142
                }
            })
            .addTimedChild(instance30, 37, 1)
            .addTimedChild(instance29, 37, 1, {
                "37": {
                    x: -5.8,
                    y: 24.4
                }
            })
            .addTimedChild(instance28, 37, 1, {
                "37": {
                    x: -5.8,
                    y: 24.4
                }
            })
            .addTimedChild(instance33, 38, 2)
            .addTimedChild(instance32, 38, 2, {
                "38": {
                    x: -5.8,
                    y: 24.2
                }
            })
            .addTimedChild(instance31, 38, 2, {
                "38": {
                    x: -5.8,
                    y: 24.2
                }
            })
            .addTimedChild(instance37, 40, 6, {
                "40": {
                    x: -484.2,
                    y: 573.15,
                    kx: 3.142
                }
            })
            .addTimedChild(instance36, 40, 6, {
                "40": {
                    x: -4.55,
                    y: 44.8,
                    kx: 3.142
                }
            })
            .addTimedChild(instance35, 40, 6, {
                "40": {
                    x: -5.05,
                    y: 25.2
                }
            })
            .addTimedChild(instance34, 40, 6, {
                "40": {
                    x: -484.2,
                    y: 573.15,
                    kx: 3.142
                }
            })
            .addTimedChild(instance40, 46, 1)
            .addTimedChild(instance39, 46, 1, {
                "46": {
                    x: -5.8,
                    y: 24.4
                }
            })
            .addTimedChild(instance38, 46, 1, {
                "46": {
                    x: -5.8,
                    y: 24.4
                }
            })
            .addTimedChild(instance43, 47, 1)
            .addTimedChild(instance42, 47, 1, {
                "47": {
                    x: -5.8,
                    y: 24.2
                }
            })
            .addTimedChild(instance41, 47, 1, {
                "47": {
                    x: -5.8,
                    y: 24.2
                }
            })
            .addTimedChild(instance47, 48, 1, {
                "48": {
                    x: -484.2,
                    y: 573.15,
                    kx: 3.142
                }
            })
            .addTimedChild(instance46, 48, 1, {
                "48": {
                    x: -4.55,
                    y: 44.8,
                    kx: 3.142
                }
            })
            .addTimedChild(instance45, 48, 1, {
                "48": {
                    x: -5.05,
                    y: 25.2
                }
            })
            .addTimedChild(instance44, 48, 1, {
                "48": {
                    x: -484.2,
                    y: 573.15,
                    kx: 3.142
                }
            })
            .addTimedChild(instance48, 49, 1)
            .addTimedChild(instance49, 50, 1)
            .addTimedChild(instance50, 51, 1, {
                "51": {
                    x: -5.8,
                    y: 28.5,
                    kx: 3.142
                }
            })
            .addTimedChild(instance51, 52, 1, {
                "52": {
                    x: -5.8,
                    y: 25
                }
            })
            .addTimedChild(instance52, 53, 1, {
                "53": {
                    x: -5.8,
                    y: 28.5,
                    kx: 3.142
                }
            })
            .addTimedChild(instance55, 54, 1)
            .addTimedChild(instance54, 54, 1, {
                "54": {
                    x: -5.8,
                    y: 24.2
                }
            })
            .addTimedChild(instance53, 54, 1, {
                "54": {
                    x: -5.8,
                    y: 24.2
                }
            })
            .addTimedChild(instance58, 55, 1)
            .addTimedChild(instance57, 55, 1, {
                "55": {
                    x: -5.8,
                    y: 24
                }
            })
            .addTimedChild(instance56, 55, 1, {
                "55": {
                    x: -5.8,
                    y: 24
                }
            })
            .addTimedChild(instance62, 56, 9, {
                "56": {
                    x: -484.2,
                    y: 573.15,
                    kx: 3.142
                }
            })
            .addTimedChild(instance61, 56, 9, {
                "56": {
                    x: -4.55,
                    y: 44.8,
                    kx: 3.142
                }
            })
            .addTimedChild(instance60, 56, 9, {
                "56": {
                    x: -5.05,
                    y: 25.2
                }
            })
            .addTimedChild(instance59, 56, 9, {
                "56": {
                    x: -484.2,
                    y: 573.15,
                    kx: 3.142
                }
            })
            .addTimedChild(instance63, 65, 13, {
                "65": {
                    x: -5.8,
                    y: 28.5,
                    kx: 3.142
                }
            })
            .addTimedChild(instance64, 78, 1)
            .addTimedChild(instance67, 79, 1)
            .addTimedChild(instance66, 79, 1, {
                "79": {
                    x: -5.8,
                    y: 24
                }
            })
            .addTimedChild(instance65, 79, 1, {
                "79": {
                    x: -5.8,
                    y: 24
                }
            })
            .addTimedChild(instance70, 80, 3)
            .addTimedChild(instance69, 80, 3, {
                "80": {
                    x: -5.8,
                    y: 24.4
                }
            })
            .addTimedChild(instance68, 80, 3, {
                "80": {
                    x: -5.8,
                    y: 24.4
                }
            })
            .addTimedChild(instance71, 83, 2)
            .addTimedChild(instance72, 85, 1, {
                "85": {
                    x: -5.8,
                    y: 25
                }
            })
            .addTimedChild(instance73, 86, 6, {
                "86": {
                    x: -5.8,
                    y: 28.5,
                    kx: 3.142
                }
            })
            .addTimedChild(instance74, 92, 1, {
                "92": {
                    x: -5.8,
                    y: 25
                }
            })
            .addTimedChild(instance77, 93, 1)
            .addTimedChild(instance76, 93, 1, {
                "93": {
                    x: -5.8,
                    y: 23.4
                }
            })
            .addTimedChild(instance75, 93, 1, {
                "93": {
                    x: -5.8,
                    y: 23.4
                }
            })
            .addTimedChild(instance78, 94, 3)
            .addTimedChild(instance81, 97, 1)
            .addTimedChild(instance80, 97, 1, {
                "97": {
                    x: -5.8,
                    y: 24.2
                }
            })
            .addTimedChild(instance79, 97, 1, {
                "97": {
                    x: -5.8,
                    y: 24.2
                }
            })
            .addTimedChild(instance84, 98, 1)
            .addTimedChild(instance83, 98, 1, {
                "98": {
                    x: -5.8,
                    y: 24.4
                }
            })
            .addTimedChild(instance82, 98, 1, {
                "98": {
                    x: -5.8,
                    y: 24.4
                }
            })
            .addTimedChild(instance87, 99, 1)
            .addTimedChild(instance86, 99, 1, {
                "99": {
                    x: -5.8,
                    y: 24.2
                }
            })
            .addTimedChild(instance85, 99, 1, {
                "99": {
                    x: -5.8,
                    y: 24.2
                }
            })
            .addTimedChild(instance91, 100, 2, {
                "100": {
                    x: -484.2,
                    y: 573.15,
                    kx: 3.142
                }
            })
            .addTimedChild(instance90, 100, 2, {
                "100": {
                    x: -4.55,
                    y: 44.8,
                    kx: 3.142
                }
            })
            .addTimedChild(instance89, 100, 2, {
                "100": {
                    x: -5.05,
                    y: 25.2
                }
            })
            .addTimedChild(instance88, 100, 2, {
                "100": {
                    x: -484.2,
                    y: 573.15,
                    kx: 3.142
                }
            })
            .addTimedChild(instance92, 102, 2)
            .addTimedChild(instance95, 104, 1)
            .addTimedChild(instance94, 104, 1, {
                "104": {
                    x: -5.8,
                    y: 24.2
                }
            })
            .addTimedChild(instance93, 104, 1, {
                "104": {
                    x: -5.8,
                    y: 24.2
                }
            })
            .addTimedChild(instance96, 105, 6, {
                "105": {
                    x: -5.8,
                    y: 25
                }
            })
            .addTimedChild(instance100, 111, 1, {
                "111": {
                    x: -484.2,
                    y: 573.15,
                    kx: 3.142
                }
            })
            .addTimedChild(instance99, 111, 1, {
                "111": {
                    x: -4.55,
                    y: 44.8,
                    kx: 3.142
                }
            })
            .addTimedChild(instance98, 111, 1, {
                "111": {
                    x: -5.05,
                    y: 25.2
                }
            })
            .addTimedChild(instance97, 111, 1, {
                "111": {
                    x: -484.2,
                    y: 573.15,
                    kx: 3.142
                }
            })
            .addTimedChild(instance101, 112, 2)
            .addTimedChild(instance104, 114, 1)
            .addTimedChild(instance103, 114, 1, {
                "114": {
                    x: -5.8,
                    y: 24
                }
            })
            .addTimedChild(instance102, 114, 1, {
                "114": {
                    x: -5.8,
                    y: 24
                }
            })
            .addTimedChild(instance107, 115, 1)
            .addTimedChild(instance106, 115, 1, {
                "115": {
                    x: -5.8,
                    y: 23.6
                }
            })
            .addTimedChild(instance105, 115, 1, {
                "115": {
                    x: -5.8,
                    y: 23.6
                }
            })
            .addTimedChild(instance110, 116, 1)
            .addTimedChild(instance109, 116, 1, {
                "116": {
                    x: -5.8,
                    y: 24
                }
            })
            .addTimedChild(instance108, 116, 1, {
                "116": {
                    x: -5.8,
                    y: 24
                }
            })
            .addTimedChild(instance113, 117, 1)
            .addTimedChild(instance112, 117, 1, {
                "117": {
                    x: -5.8,
                    y: 23.4
                }
            })
            .addTimedChild(instance111, 117, 1, {
                "117": {
                    x: -5.8,
                    y: 23.4
                }
            })
            .addTimedChild(instance117, 118, 1, {
                "118": {
                    x: -484.2,
                    y: 573.15,
                    kx: 3.142
                }
            })
            .addTimedChild(instance116, 118, 1, {
                "118": {
                    x: -4.55,
                    y: 44.8,
                    kx: 3.142
                }
            })
            .addTimedChild(instance115, 118, 1, {
                "118": {
                    x: -5.05,
                    y: 25.2
                }
            })
            .addTimedChild(instance114, 118, 1, {
                "118": {
                    x: -484.2,
                    y: 573.15,
                    kx: 3.142
                }
            })
            .addTimedChild(instance120, 119, 1)
            .addTimedChild(instance119, 119, 1, {
                "119": {
                    x: -5.8,
                    y: 24.2
                }
            })
            .addTimedChild(instance118, 119, 1, {
                "119": {
                    x: -5.8,
                    y: 24.2
                }
            })
            .addTimedChild(instance121, 120, 1, {
                "120": {
                    x: -5.8,
                    y: 25
                }
            })
            .addTimedChild(instance125, 121, 1, {
                "121": {
                    x: -484.2,
                    y: 573.15,
                    kx: 3.142
                }
            })
            .addTimedChild(instance124, 121, 1, {
                "121": {
                    x: -4.55,
                    y: 44.8,
                    kx: 3.142
                }
            })
            .addTimedChild(instance123, 121, 1, {
                "121": {
                    x: -5.05,
                    y: 25.2
                }
            })
            .addTimedChild(instance122, 121, 1, {
                "121": {
                    x: -484.2,
                    y: 573.15,
                    kx: 3.142
                }
            })
            .addTimedChild(instance128, 122, 1)
            .addTimedChild(instance127, 122, 1, {
                "122": {
                    x: -5.8,
                    y: 24.2
                }
            })
            .addTimedChild(instance126, 122, 1, {
                "122": {
                    x: -5.8,
                    y: 24.2
                }
            })
            .addTimedChild(instance131, 123, 13)
            .addTimedChild(instance130, 123, 13)
            .addTimedChild(instance129, 123, 13);
    });

    var Graphic8 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 136, loop: false });
        var instance1 = new Graphic1(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 136, {
            "0": {
                x: -0.05,
                y: -26.1,
                sx: 1,
                sy: 1
            },
            "29": {
                x: 0.05,
                y: -26.05
            },
            "30": {
                x: -0.05,
                y: -21.85,
                sx: 0.538,
                sy: 0.839
            },
            "31": {
                y: -26.1,
                sx: 1,
                sy: 1
            },
            "37": {
                y: -29.8,
                sx: 0.782,
                sy: 1.147
            },
            "38": {
                y: -25.95,
                sx: 1,
                sy: 1
            },
            "40": {
                x: 0,
                y: -26.05
            },
            "46": {
                x: -0.05,
                y: -34.65,
                sx: 0.957,
                sy: 1.329
            },
            "47": {
                y: -26.05,
                sx: 1,
                sy: 1
            },
            "49": {
                x: -0.1,
                y: -11.9,
                sx: 0.6,
                sy: 0.459
            },
            "50": {
                y: -25.75,
                sx: 1,
                sy: 1
            },
            "52": {
                y: -19.05,
                sx: 0.854,
                sy: 0.737
            },
            "53": {
                x: -0.05,
                y: -22.65,
                sx: 0.909,
                sy: 0.88
            },
            "54": {
                y: -25.55,
                sx: 1,
                sy: 1
            },
            "55": {
                x: 0,
                y: -25.65
            },
            "56": {
                y: -25.75
            },
            "78": {
                x: -0.05,
                y: -19.2,
                sx: 0.7,
                sy: 0.736
            },
            "79": {
                y: -26.1,
                sx: 1,
                sy: 1
            },
            "81": {
                y: -23.3,
                sx: 1.018,
                sy: 0.893
            },
            "83": {
                x: -0.15,
                y: -16.7,
                sx: 0.672,
                sy: 0.64
            },
            "84": {
                x: -0.05,
                y: -21.65,
                sx: 0.784,
                sy: 0.831
            },
            "85": {
                y: -26.1,
                sx: 1,
                sy: 1
            },
            "94": {
                y: -17.85,
                sx: 0.684,
                sy: 0.684
            },
            "95": {
                y: -13.2,
                sx: 0.506,
                sy: 0.506
            },
            "96": {
                y: -12.45,
                sx: 0.478,
                sy: 0.478
            },
            "97": {
                y: -26.1,
                sx: 1,
                sy: 1
            },
            "99": {
                y: -20.1,
                sx: 1.108,
                sy: 0.771
            },
            "100": {
                x: -0.1,
                y: -26,
                sx: 1,
                sy: 1
            },
            "102": {
                x: -0.15,
                y: -16.2,
                sx: 0.534,
                sy: 0.625
            },
            "103": {
                y: -15.4,
                sx: 0.509,
                sy: 0.596
            },
            "104": {
                x: -0.05,
                y: -23.6,
                sx: 1,
                sy: 0.906
            },
            "105": {
                y: -26.1,
                sy: 1
            },
            "106": {
                y: -22.1,
                sx: 1.02,
                sy: 0.848
            },
            "107": {
                y: -21.1,
                sx: 1.034,
                sy: 0.811
            },
            "111": {
                y: -26.1,
                sx: 1,
                sy: 1
            },
            "113": {
                y: -18.15,
                sx: 0.698,
                sy: 0.698
            },
            "117": {
                y: -10.65,
                sx: 0.797,
                sy: 0.411
            },
            "118": {
                y: -26.1,
                sx: 1,
                sy: 1
            },
            "121": {
                y: -26
            },
            "122": {
                y: -26.1
            },
            "123": {
                y: -14,
                sx: 1.131,
                sy: 0.54
            },
            "124": {
                y: -12.5,
                sx: 1.172,
                sy: 0.483
            }
        });
    });

    var Graphic9 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 136, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[47]);
        this.addTimedChild(instance1);
    });

    var Graphic10 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 136, loop: false });
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[51])
            .setTransform(-1336.85, -168.4, 1.033, 1.033);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[51])
            .setTransform(-1357.3, -164.4, 1.033, 1.033);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[51])
            .setTransform(-1317.25, -167, 1.033, 1.033);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[51])
            .setTransform(-1316.95, -139.1, 0.978, 0.978);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[51])
            .setTransform(-1265.9, -139.25, 1.033, 1.033);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[51])
            .setTransform(-1170.45, -142.3, 0.948, 0.948);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[51])
            .setTransform(-1185.7, -149.8, 0.948, 0.948);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[51])
            .setTransform(-1177.25, -135.65, 0.881, 0.881);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[51])
            .setTransform(-1201.55, -112.45, 0.881, 0.881);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[51])
            .setTransform(-1213, -97.9, 0.881, 0.881);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[51])
            .setTransform(-1255.65, -125.65, 1.033, 1.033);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[50]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[49]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[48])
            .setTransform(-1294.65, -163.3);
        this.addTimedChild(instance14)
            .addTimedChild(instance13)
            .addTimedChild(instance12)
            .addTimedChild(instance11)
            .addTimedChild(instance10)
            .addTimedChild(instance9)
            .addTimedChild(instance8)
            .addTimedChild(instance7)
            .addTimedChild(instance6)
            .addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic2 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 136, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[53])
            .setTransform(-1294.55, -252.5);
        this.addTimedChild(instance1);
    });

    var Graphic11 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 136, loop: false });
        var instance2 = new Graphic2(MovieClip.SYNCHED)
            .setTransform(6.55, -82.85);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[52]);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic12 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 136, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[55]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[54]);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic13 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 136, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[57]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[56]);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic22 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 136, loop: false });
        var instance11 = new Graphic13(MovieClip.SYNCHED)
            .setTransform(-61.6, -103.3);
        var instance10 = new Graphic12(MovieClip.SYNCHED)
            .setTransform(80.9, -103);
        var instance9 = new Graphic11(MovieClip.SYNCHED)
            .setTransform(-0.1, 0.55);
        var instance8 = new Graphic10(MovieClip.SYNCHED)
            .setTransform(6.55, -171.5);
        var instance7 = new Graphic9(MovieClip.SYNCHED)
            .setTransform(-6.5, -91.2);
        var instance6 = new Graphic8(MovieClip.SYNCHED)
            .setTransform(-2.75, -68.2);
        var instance5 = new Graphic7(MovieClip.SYNCHED);
        var instance4 = new Graphic6(MovieClip.SYNCHED);
        var instance3 = new Graphic5(MovieClip.SYNCHED);
        var instance2 = new Graphic4(MovieClip.SYNCHED);
        var instance1 = new Graphic3(MovieClip.SYNCHED);
        var instance13 = new Graphic15(MovieClip.SYNCHED);
        var instance12 = new Graphic14(MovieClip.SYNCHED);
        var instance15 = new Graphic17(MovieClip.SYNCHED);
        var instance14 = new Graphic16(MovieClip.SYNCHED);
        var instance17 = new Graphic19(MovieClip.SYNCHED);
        var instance16 = new Graphic18(MovieClip.SYNCHED);
        var instance19 = new Graphic21(MovieClip.SYNCHED)
            .setTransform(-17.45, -112.3);
        var instance18 = new Graphic20(MovieClip.SYNCHED)
            .setTransform(7.95, -112.5);
        this.addTimedChild(instance11)
            .addTimedChild(instance10)
            .addTimedChild(instance9)
            .addTimedChild(instance8)
            .addTimedChild(instance7)
            .addTimedChild(instance6)
            .addTimedChild(instance5, 0, 136, {
                "0": {
                    x: -20.05,
                    y: -135.75,
                    r: 0
                },
                "6": {
                    y: -135.05
                },
                "8": {
                    x: -20.1,
                    y: -134.05
                },
                "32": {
                    x: -20.05,
                    y: -135
                },
                "33": {
                    y: -135.55
                },
                "34": {
                    y: -135.75
                },
                "39": {
                    x: -20,
                    y: -135.5
                },
                "40": {
                    x: -19.45,
                    y: -130.9
                },
                "41": {
                    y: -130.8
                },
                "48": {
                    y: -130.5,
                    r: -0.03
                },
                "49": {
                    x: -19.05,
                    y: -128.55,
                    r: -0.257
                },
                "50": {
                    y: -130.6,
                    r: -0.296
                },
                "63": {
                    x: -18.95,
                    y: -128.55
                },
                "64": {
                    x: -19.05,
                    y: -130.6
                },
                "76": {
                    x: -18.95,
                    y: -130.3,
                    r: -0.271
                },
                "77": {
                    x: -18.3,
                    y: -128.8,
                    r: -0.17
                },
                "78": {
                    x: -17.8,
                    y: -127.75,
                    r: -0.095
                },
                "79": {
                    x: -17.65,
                    y: -127.45,
                    r: -0.07
                },
                "95": {
                    x: -17.75,
                    y: -126.3
                },
                "96": {
                    x: -17.4,
                    y: -128.4,
                    r: -0.056
                },
                "97": {
                    y: -129.65,
                    r: -0.044
                }
            })
            .addTimedChild(instance4, 0, 136, {
                "0": {
                    x: 15.85,
                    y: -136.95,
                    r: 0
                },
                "6": {
                    y: -136.25
                },
                "8": {
                    x: 15.8,
                    y: -135.25
                },
                "32": {
                    x: 15.85,
                    y: -136.2
                },
                "33": {
                    y: -136.75
                },
                "34": {
                    y: -136.95
                },
                "39": {
                    y: -136.8
                },
                "40": {
                    x: 16.4,
                    y: -132.2
                },
                "41": {
                    x: 16.45,
                    y: -132
                },
                "48": {
                    y: -131.7,
                    r: 0.034
                },
                "49": {
                    x: 16.6,
                    y: -129.9,
                    r: 0.326
                },
                "50": {
                    x: 16.45,
                    y: -132,
                    r: 0.353
                },
                "63": {
                    x: 16.55,
                    y: -129.95
                },
                "64": {
                    x: 16.45,
                    y: -132
                },
                "76": {
                    x: 16.4,
                    y: -131.45,
                    r: 0.328
                },
                "77": {
                    x: 15.8,
                    y: -130.2,
                    r: 0.2
                },
                "78": {
                    x: 15.45,
                    y: -129.1,
                    r: 0.109
                },
                "79": {
                    x: 15.4,
                    y: -128.65,
                    r: 0.079
                },
                "95": {
                    x: 15.25,
                    y: -127.45
                },
                "96": {
                    x: 15.4,
                    y: -129.4
                },
                "97": {
                    x: 15.55,
                    y: -130.55,
                    r: 0.062
                }
            })
            .addTimedChild(instance3, 0, 136, {
                "0": {
                    x: 1.15,
                    y: -113.75
                }
            })
            .addTimedChild(instance2, 0, 6, {
                "0": {
                    x: -16.65,
                    y: -114.55
                }
            })
            .addTimedChild(instance1, 0, 6, {
                "0": {
                    x: 8.75,
                    y: -114.75
                }
            })
            .addTimedChild(instance13, 8, 41, {
                "8": {
                    x: -16.65,
                    y: -114.55
                },
                "39": {
                    x: -17,
                    y: -114.5
                },
                "40": {
                    x: -15.7,
                    y: -111.35
                },
                "41": {
                    x: -15.35,
                    y: -111.15
                }
            })
            .addTimedChild(instance12, 8, 41, {
                "8": {
                    x: 8.75,
                    y: -114.75
                },
                "39": {
                    x: 8.45,
                    y: -114.6
                },
                "40": {
                    x: 9.7,
                    y: -111.55
                },
                "41": {
                    x: 10.05,
                    y: -111.35
                }
            })
            .addTimedChild(instance15, 50, 13, {
                "50": {
                    x: -10.05,
                    y: -111.25
                }
            })
            .addTimedChild(instance14, 50, 13, {
                "50": {
                    x: 15.35,
                    y: -110.95
                }
            })
            .addTimedChild(instance17, 64, 31, {
                "64": {
                    x: -16.85,
                    y: -114.15
                }
            })
            .addTimedChild(instance16, 64, 31, {
                "64": {
                    x: 8.55,
                    y: -114.35
                }
            })
            .addTimedChild(instance19, 97, 39)
            .addTimedChild(instance18, 97, 39);
    });

    var Graphic23 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 136, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[58])
            .setTransform(-1222.8, -397.15, 0.95);
        this.addTimedChild(instance1);
    });

    var Graphic24 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 2, loop: false });
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[65]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[12]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[11]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[10]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[9]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[60]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[59]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[64]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[63])
            .setTransform(-1.65, -2.05);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[62])
            .setTransform(21.3, -1.55, 1, 1, 0.393);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[61])
            .setTransform(3.2, 1.2, 1, 1, 0.065);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[61])
            .setTransform(-15.2, -6.05, 1, 1, 0.065);
        this.addTimedChild(instance7)
            .addTimedChild(instance6, 0, 1, {
                "0": {
                    x: 14.3,
                    y: -13.75,
                    r: -0.069
                }
            })
            .addTimedChild(instance5, 0, 1, {
                "0": {
                    x: 4,
                    y: -9.1
                }
            })
            .addTimedChild(instance4, 0, 1)
            .addTimedChild(instance3, 0, 1)
            .addTimedChild(instance2, 0, 1)
            .addTimedChild(instance1, 0, 1)
            .addTimedChild(instance12, 1, 1)
            .addTimedChild(instance11, 1, 1)
            .addTimedChild(instance10, 1, 1)
            .addTimedChild(instance9, 1, 1)
            .addTimedChild(instance8, 1, 1);
    });

    var Graphic26 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 6, loop: false });
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[65]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[64]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[63])
            .setTransform(-1.65, -2.05);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[62])
            .setTransform(21.3, -1.55, 1, 1, 0.393);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[61])
            .setTransform(3.2, 1.2, 1, 1, 0.065);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[9]);
        this.addTimedChild(instance6)
            .addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic297 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 136, loop: false });
        var instance5 = new Graphic24(MovieClip.SYNCHED);
        var instance7 = new Graphic26(MovieClip.SYNCHED);
        var instance4 = new Graphic23(MovieClip.SYNCHED);
        var instance3 = new Graphic22(MovieClip.SYNCHED);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[16]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[15]);
        var instance6 = new Graphic25(MovieClip.SYNCHED);
        this.addTimedChild(instance5, 23, 2, {
                "23": {
                    x: -7.85,
                    y: -449.1,
                    r: 1.326
                },
                "24": {
                    x: -37.35,
                    y: -453
                }
            })
            .addTimedChild(instance7, 114, 6, {
                "114": {
                    x: -46.25,
                    y: -526.75,
                    kx: 4.427,
                    ky: 1.857
                },
                "115": {
                    x: -22.386,
                    y: -516.709,
                    kx: 4.264,
                    ky: 2.019
                },
                "116": {
                    x: -3.982,
                    y: -508.969,
                    kx: 4.139,
                    ky: 2.145
                },
                "117": {
                    x: 9.14,
                    y: -503.491,
                    kx: 4.05,
                    ky: 2.234
                },
                "118": {
                    x: 17.001,
                    y: -500.135,
                    kx: 3.996,
                    ky: 2.287
                },
                "119": {
                    x: 19.65,
                    y: -499,
                    kx: 3.978,
                    ky: 2.305
                }
            })
            .addTimedChild(instance4, 0, 136, {
                "0": {
                    x: 70.7,
                    y: -505.25,
                    r: -0.156
                },
                "23": {
                    x: -0.35,
                    y: -520.15,
                    r: -0.671
                },
                "24": {
                    x: -16.2,
                    y: -524.65,
                    r: -0.615
                },
                "25": {
                    x: -27.45,
                    y: -527.85,
                    r: -0.576
                },
                "26": {
                    x: -34.2,
                    y: -529.8,
                    r: -0.552
                },
                "27": {
                    x: -36.5,
                    y: -530.4,
                    r: -0.544
                },
                "44": {
                    x: -36.6,
                    y: -530.45,
                    r: -0.547
                },
                "45": {
                    x: -36.7,
                    y: -530.7,
                    r: -0.557
                },
                "46": {
                    x: -36.95,
                    y: -530.95,
                    r: -0.572
                },
                "47": {
                    x: -37.35,
                    y: -531.2,
                    r: -0.594
                },
                "48": {
                    x: -37.8,
                    y: -531.6,
                    r: -0.622
                },
                "49": {
                    x: -38.4,
                    y: -532.05,
                    r: -0.656
                },
                "56": {
                    x: -38.35,
                    r: -0.655
                },
                "57": {
                    x: -38.25,
                    y: -531.95,
                    r: -0.65
                },
                "58": {
                    x: -38.1,
                    y: -531.8,
                    r: -0.64
                },
                "59": {
                    x: -37.25,
                    y: -531.1,
                    r: -0.591
                },
                "60": {
                    x: -36.95,
                    y: -530.85,
                    r: -0.574
                },
                "61": {
                    x: -36.6,
                    y: -530.6,
                    r: -0.56
                },
                "62": {
                    x: -36.4,
                    y: -530.4,
                    r: -0.551
                },
                "63": {
                    x: -36.25,
                    y: -530.3,
                    r: -0.546
                },
                "64": {
                    x: -36.5,
                    y: -530.4,
                    r: -0.544
                },
                "93": {
                    x: -36.599,
                    y: -530.092
                },
                "94": {
                    y: -528.992
                },
                "95": {
                    y: -527.342
                },
                "96": {
                    y: -526.242
                },
                "97": {
                    x: -36.5,
                    y: -525.85
                },
                "110": {
                    x: -32.41,
                    y: -526.168,
                    r: -0.531
                },
                "111": {
                    x: -20.251,
                    y: -526.969,
                    r: -0.492
                },
                "112": {
                    x: 0.205,
                    y: -528.404,
                    r: -0.428
                },
                "113": {
                    x: 29,
                    y: -530.3,
                    r: -0.336
                }
            })
            .addTimedChild(instance3, 0, 136, {
                "0": {
                    x: 51.2,
                    y: -560,
                    sx: 1.1,
                    sy: 1.1,
                    r: -0.061
                },
                "23": {
                    x: -20.15,
                    y: -559.05,
                    sx: 1.098,
                    sy: 1.098,
                    r: -0.678
                },
                "24": {
                    x: -47.25,
                    y: -564.25,
                    r: -0.577
                },
                "25": {
                    x: -66.55,
                    y: -567.75,
                    r: -0.507
                },
                "26": {
                    x: -78,
                    y: -570,
                    sx: 1.099,
                    sy: 1.099,
                    r: -0.463
                },
                "27": {
                    x: -82,
                    y: -570.9,
                    r: -0.447
                },
                "38": {
                    x: -81.95,
                    y: -570.95,
                    sx: 1.098,
                    sy: 1.098,
                    r: -0.499
                },
                "39": {
                    x: -81.9,
                    y: -571.05,
                    r: -0.538
                },
                "40": {
                    x: -81.85,
                    y: -571,
                    r: -0.56
                },
                "41": {
                    x: -81.95,
                    y: -570.9,
                    r: -0.565
                },
                "44": {
                    x: -81.5,
                    y: -569,
                    r: -0.573
                },
                "45": {
                    x: -81.4,
                    y: -565.35,
                    r: -0.591
                },
                "46": {
                    x: -79.55,
                    y: -560.55,
                    r: -0.621
                },
                "47": {
                    x: -83.35,
                    y: -566.75,
                    r: -0.7
                },
                "48": {
                    x: -85.9,
                    y: -572.95,
                    r: -0.77
                },
                "49": {
                    x: -85.75,
                    y: -575,
                    r: -0.792
                },
                "50": {
                    x: -85.7,
                    y: -575.6
                },
                "55": {
                    x: -89.55,
                    y: -575.55
                },
                "56": {
                    x: -91.2,
                    y: -576.75,
                    r: -0.787
                },
                "57": {
                    x: -94.1,
                    y: -578.5,
                    r: -0.766
                },
                "58": {
                    x: -93.1,
                    y: -581.35,
                    r: -0.735
                },
                "59": {
                    x: -91.7,
                    y: -580.85,
                    r: -0.565
                },
                "60": {
                    x: -84.65,
                    y: -579.9,
                    r: -0.507
                },
                "61": {
                    x: -84.6,
                    y: -577.6,
                    r: -0.46
                },
                "62": {
                    x: -82.2,
                    y: -570.85,
                    sx: 1.099,
                    sy: 1.099,
                    r: -0.429
                },
                "63": {
                    x: -82.05,
                    y: -570.6,
                    r: -0.411
                },
                "64": {
                    x: -82.25,
                    y: -570.9,
                    r: -0.403
                },
                "93": {
                    x: -81.93,
                    y: -570.59,
                    r: -0.412
                },
                "94": {
                    x: -80.809,
                    y: -569.483,
                    r: -0.441
                },
                "95": {
                    x: -79.162,
                    y: -567.887,
                    sx: 1.098,
                    sy: 1.098,
                    r: -0.483
                },
                "96": {
                    x: -78.054,
                    y: -566.782,
                    r: -0.512
                },
                "97": {
                    x: -77.65,
                    y: -566.35,
                    r: -0.521
                },
                "110": {
                    x: -68.477,
                    y: -567.881,
                    r: -0.503
                },
                "111": {
                    x: -40.988,
                    y: -572.467,
                    sx: 1.099,
                    sy: 1.099,
                    r: -0.451
                },
                "112": {
                    x: 4.848,
                    y: -579.977,
                    r: -0.364
                },
                "113": {
                    x: 69.65,
                    y: -590.6,
                    r: -0.24
                }
            })
            .addTimedChild(instance2)
            .addTimedChild(instance1)
            .addTimedChild(instance6, 25, 89, {
                "25": {
                    x: -86.8,
                    y: -437.8,
                    kx: 1.508,
                    ky: 1.633
                },
                "26": {
                    x: -83.7,
                    y: -438.1
                },
                "27": {
                    x: -83.3
                },
                "111": {
                    x: -83.9,
                    y: -437.15
                },
                "112": {
                    x: -87.45,
                    y: -434.35
                },
                "113": {
                    x: -102.6,
                    y: -436.25
                }
            });
    });

    var Graphic73 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 22, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[67]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[66]);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic74 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 22, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[69])
            .setTransform(-657.05, -461.95);
        this.addTimedChild(instance1);
    });

    var Graphic75 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 22, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[70]);
        this.addTimedChild(instance1);
    });

    var Graphic76 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 22, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[76]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[77]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[78]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[79]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[75]);
        this.addTimedChild(instance2, 0, 2)
            .addTimedChild(instance3, 2, 1)
            .addTimedChild(instance4, 3, 1)
            .addTimedChild(instance5, 4, 18)
            .addTimedChild(instance1);
    });

    var Graphic61 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 77, loop: false });
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[107])
            .setTransform(9.85, 31.2, 1.3, 1.3);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[106])
            .setTransform(9.85, 31.2, 1.3, 1.3);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[105])
            .setTransform(9.85, 31.2, 1.3, 1.3);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[104])
            .setTransform(9.85, 31.2, 1.3, 1.3);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[103])
            .setTransform(9.7, 31.2, 1.3, 1.3);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[102])
            .setTransform(-801.7, -1038.95, 1.3, 1.3);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[101])
            .setTransform(-801.7, -1038.95, 1.3, 1.3);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[100])
            .setTransform(-801.7, -1038.95, 1.3, 1.3);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[99])
            .setTransform(-801.7, -1038.95, 1.3, 1.3);
        this.addTimedChild(instance9)
            .addTimedChild(instance8)
            .addTimedChild(instance7)
            .addTimedChild(instance6)
            .addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic72 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 7, loop: false });
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[115])
            .setTransform(-0.6, 2.45, 1, 1, 0, 0.484, 2.657);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[114])
            .setTransform(-4.3, 1.95, 1, 1, 0, 0.618, 2.523);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[113])
            .setTransform(4.25, 33.75, 1.12, 1.056, -0.238);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[112])
            .setTransform(5.75, 34.95, 1, 1, 0.01);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[111])
            .setTransform(6.05, 34.9, 1, 1, 0.257);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[110])
            .setTransform(1.05, 40.25, 1, 1, 0.344);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[109])
            .setTransform(34.1, -985.65, 1, 1, 0.684);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[102])
            .setTransform(-464.95, -886.85, 1, 1, 0.178);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[101])
            .setTransform(-538.25, -842.15, 1, 1, 0.091);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[100])
            .setTransform(-668.55, -792.3, 1.087);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[108])
            .setTransform(-13.45, 17.25, 1, 1, -0.388);
        this.addTimedChild(instance11)
            .addTimedChild(instance10)
            .addTimedChild(instance9)
            .addTimedChild(instance8)
            .addTimedChild(instance7)
            .addTimedChild(instance6)
            .addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic62 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 77, loop: false });
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[123]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[122]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[121]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[120]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[119]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[118]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[117])
            .setTransform(-0.25, -0.5);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[116]);
        this.addTimedChild(instance8)
            .addTimedChild(instance7)
            .addTimedChild(instance6)
            .addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic77 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 11, loop: false });
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[123]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[122]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[121]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[120]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[119]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[118]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[117])
            .setTransform(-0.25, -0.5);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[116]);
        this.addTimedChild(instance8)
            .addTimedChild(instance7)
            .addTimedChild(instance6)
            .addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic27 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 77, loop: false });
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[136])
            .setTransform(-3.75, 14.9);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[135])
            .setTransform(-3.75, 14.9);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[134])
            .setTransform(-3.75, 14.9);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[133])
            .setTransform(-3.75, 14.9);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[132]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[131])
            .setTransform(6.5, 27.85, 1, 1, 0, 0, -0.027);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[130])
            .setTransform(7.1, 44.6, 1, 1, 0, 0, -0.027);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[129]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[127])
            .setTransform(8.15, 166.15, 1.044, 1.151, 0, 0, 0.001);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[128])
            .setTransform(10.1, 68.55, 0.907, 1, 0, 0, 0.001);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[127])
            .setTransform(27.05, 177.2, 0.907, 1, 0, 0, 0.001);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[127])
            .setTransform(11.5, 211.3, 1.044, 1.151, 0, 0, 0.001);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[126])
            .setTransform(10.1, 68.6, 0.907, 1, 0, 0, 0.001);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[125]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[124]);
        this.addTimedChild(instance15)
            .addTimedChild(instance14)
            .addTimedChild(instance13)
            .addTimedChild(instance12)
            .addTimedChild(instance11)
            .addTimedChild(instance10)
            .addTimedChild(instance9)
            .addTimedChild(instance8)
            .addTimedChild(instance7)
            .addTimedChild(instance6)
            .addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic63 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 77, loop: false });
        var instance1 = new Graphic27(MovieClip.SYNCHED)
            .setTransform(3.75, -14.9);
        this.addTimedChild(instance1);
    });

    var Graphic47 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 31, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[69])
            .setTransform(-657.05, -461.95);
        this.addTimedChild(instance1);
    });

    var Graphic48 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 31, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[70]);
        this.addTimedChild(instance1);
    });

    var Graphic42 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 109, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[147]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[146])
            .setTransform(-585.65, -483.25);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic29 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 186, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[148]);
        this.addTimedChild(instance1);
    });

    var Graphic30 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 186, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[149])
            .setTransform(-466.8, -453.85);
        this.addTimedChild(instance1);
    });

    var Graphic31 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 186, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[150])
            .setTransform(-504.35, -453.65);
        this.addTimedChild(instance1);
    });

    var Graphic32 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 110, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[151])
            .setTransform(-458.45, -480.9, 0.972);
        this.addTimedChild(instance1);
    });

    var Graphic43 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 23, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[151])
            .setTransform(-458.45, -480.9, 0.972);
        this.addTimedChild(instance1);
    });

    var Graphic45 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 24, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[151])
            .setTransform(-458.45, -480.9, 0.972);
        this.addTimedChild(instance1);
    });

    var Graphic49 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 11, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[151])
            .setTransform(-458.45, -480.9, 0.972);
        this.addTimedChild(instance1);
    });

    var Graphic33 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 110, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[151])
            .setTransform(-458.45, -480.9, 0.972);
        this.addTimedChild(instance1);
    });

    var Graphic44 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 23, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[151])
            .setTransform(-458.45, -480.9, 0.972);
        this.addTimedChild(instance1);
    });

    var Graphic46 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 24, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[151])
            .setTransform(-458.45, -480.9, 0.972);
        this.addTimedChild(instance1);
    });

    var Graphic50 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 11, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[151])
            .setTransform(-458.45, -480.9, 0.972);
        this.addTimedChild(instance1);
    });

    var Graphic34 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 186, loop: false });
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[157]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[156]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[155]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[154]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[153]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[152]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[161]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[160]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[159]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[158]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[157]);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[156]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[155]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[154]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[153]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[152]);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[167]);
        var instance21 = new Graphics()
            .drawCommands(shapes.s01[166]);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[165]);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[164]);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[163]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[162]);
        var instance28 = new Graphics()
            .drawCommands(shapes.s01[157]);
        var instance27 = new Graphics()
            .drawCommands(shapes.s01[156]);
        var instance26 = new Graphics()
            .drawCommands(shapes.s01[155]);
        var instance25 = new Graphics()
            .drawCommands(shapes.s01[154]);
        var instance24 = new Graphics()
            .drawCommands(shapes.s01[153]);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[152]);
        var instance34 = new Graphics()
            .drawCommands(shapes.s01[167]);
        var instance33 = new Graphics()
            .drawCommands(shapes.s01[166]);
        var instance32 = new Graphics()
            .drawCommands(shapes.s01[165]);
        var instance31 = new Graphics()
            .drawCommands(shapes.s01[164]);
        var instance30 = new Graphics()
            .drawCommands(shapes.s01[163]);
        var instance29 = new Graphics()
            .drawCommands(shapes.s01[162]);
        var instance40 = new Graphics()
            .drawCommands(shapes.s01[157])
            .setTransform(-386.35, -557.05, 1, 1, 0.174);
        var instance39 = new Graphics()
            .drawCommands(shapes.s01[156])
            .setTransform(-385.25, -559.2, 1, 1, 0.174);
        var instance38 = new Graphics()
            .drawCommands(shapes.s01[155])
            .setTransform(-486.6, -478.35);
        var instance37 = new Graphics()
            .drawCommands(shapes.s01[154])
            .setTransform(-455.15, -505.5, 1, 1, 0.06);
        var instance36 = new Graphics()
            .drawCommands(shapes.s01[153])
            .setTransform(-588.15, -407.35, 1.216, 0.851);
        var instance35 = new Graphics()
            .drawCommands(shapes.s01[152])
            .setTransform(-596.45, -406.55, 1.239, 0.851);
        this.addTimedChild(instance6, 0, 110, {
                "0": {
                    x: -386.35,
                    y: -557.05,
                    r: 0.174
                }
            })
            .addTimedChild(instance5, 0, 110, {
                "0": {
                    x: -385.25,
                    y: -559.2,
                    r: 0.174
                }
            })
            .addTimedChild(instance4, 0, 110, {
                "0": {
                    x: -486.6,
                    y: -478.35
                }
            })
            .addTimedChild(instance3, 0, 110, {
                "0": {
                    x: -455.15,
                    y: -505.5,
                    r: 0.06
                }
            })
            .addTimedChild(instance2, 0, 110, {
                "0": {
                    x: -588.15,
                    y: -407.35,
                    sx: 1.216,
                    sy: 0.851
                }
            })
            .addTimedChild(instance1, 0, 110, {
                "0": {
                    x: -596.45,
                    y: -406.55,
                    sx: 1.239,
                    sy: 0.851
                }
            })
            .addTimedChild(instance10, 110, 2, {
                "110": {
                    x: 6.1,
                    y: 3.6,
                    sx: 1.25
                }
            })
            .addTimedChild(instance9, 110, 2, {
                "110": {
                    x: 6.1,
                    y: 3.6,
                    sx: 1.25
                }
            })
            .addTimedChild(instance8, 110, 2, {
                "110": {
                    x: -9.5,
                    y: 4,
                    sx: 1.25
                }
            })
            .addTimedChild(instance7, 110, 2, {
                "110": {
                    x: -6,
                    y: -0.4
                }
            })
            .addTimedChild(instance16, 112, 23, {
                "112": {
                    x: -386.35,
                    y: -557.05,
                    r: 0.174
                }
            })
            .addTimedChild(instance15, 112, 23, {
                "112": {
                    x: -385.25,
                    y: -559.2,
                    r: 0.174
                }
            })
            .addTimedChild(instance14, 112, 23, {
                "112": {
                    x: -486.6,
                    y: -478.35
                }
            })
            .addTimedChild(instance13, 112, 23, {
                "112": {
                    x: -455.15,
                    y: -505.5,
                    r: 0.06
                }
            })
            .addTimedChild(instance12, 112, 23, {
                "112": {
                    x: -588.15,
                    y: -407.35,
                    sx: 1.216,
                    sy: 0.851
                }
            })
            .addTimedChild(instance11, 112, 23, {
                "112": {
                    x: -596.45,
                    y: -406.55,
                    sx: 1.239,
                    sy: 0.851
                }
            })
            .addTimedChild(instance22, 135, 4, {
                "135": {
                    x: -2.45,
                    y: 1.7,
                    sx: 1.289,
                    sy: 0.827
                }
            })
            .addTimedChild(instance21, 135, 4, {
                "135": {
                    x: -0.05,
                    y: 1.8,
                    sx: 1.289,
                    sy: 0.827
                }
            })
            .addTimedChild(instance20, 135, 4, {
                "135": {
                    x: 6.85,
                    y: 1.9,
                    sx: 0.95,
                    sy: 0.95
                }
            })
            .addTimedChild(instance19, 135, 4, {
                "135": {
                    x: 1.1,
                    sx: 0.95,
                    sy: 0.95
                }
            })
            .addTimedChild(instance18, 135, 4, {
                "135": {
                    x: -9.25,
                    y: -1.15,
                    sx: 0.95,
                    sy: 0.95
                }
            })
            .addTimedChild(instance17, 135, 4, {
                "135": {
                    x: -0.25,
                    y: -0.15,
                    sx: 0.95,
                    sy: 0.95
                }
            })
            .addTimedChild(instance28, 139, 24, {
                "139": {
                    x: -386.35,
                    y: -557.05,
                    r: 0.174
                }
            })
            .addTimedChild(instance27, 139, 24, {
                "139": {
                    x: -385.25,
                    y: -559.2,
                    r: 0.174
                }
            })
            .addTimedChild(instance26, 139, 24, {
                "139": {
                    x: -486.6,
                    y: -478.35
                }
            })
            .addTimedChild(instance25, 139, 24, {
                "139": {
                    x: -455.15,
                    y: -505.5,
                    r: 0.06
                }
            })
            .addTimedChild(instance24, 139, 24, {
                "139": {
                    x: -588.15,
                    y: -407.35,
                    sx: 1.216,
                    sy: 0.851
                }
            })
            .addTimedChild(instance23, 139, 24, {
                "139": {
                    x: -596.45,
                    y: -406.55,
                    sx: 1.239,
                    sy: 0.851
                }
            })
            .addTimedChild(instance34, 163, 12, {
                "163": {
                    x: -2.45,
                    y: 1.7,
                    sx: 1.289,
                    sy: 0.827
                }
            })
            .addTimedChild(instance33, 163, 12, {
                "163": {
                    x: -0.05,
                    y: 1.8,
                    sx: 1.289,
                    sy: 0.827
                }
            })
            .addTimedChild(instance32, 163, 12, {
                "163": {
                    x: 6.85,
                    y: 1.9,
                    sx: 0.95,
                    sy: 0.95
                }
            })
            .addTimedChild(instance31, 163, 12, {
                "163": {
                    x: 1.1,
                    sx: 0.95,
                    sy: 0.95
                }
            })
            .addTimedChild(instance30, 163, 12, {
                "163": {
                    x: -9.25,
                    y: -1.15,
                    sx: 0.95,
                    sy: 0.95
                }
            })
            .addTimedChild(instance29, 163, 12, {
                "163": {
                    x: -0.25,
                    y: -0.15,
                    sx: 0.95,
                    sy: 0.95
                }
            })
            .addTimedChild(instance40, 175, 11)
            .addTimedChild(instance39, 175, 11)
            .addTimedChild(instance38, 175, 11)
            .addTimedChild(instance37, 175, 11)
            .addTimedChild(instance36, 175, 11)
            .addTimedChild(instance35, 175, 11);
    });

    var Graphic28 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 186, loop: false });
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[172]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[36]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[32]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[173]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[37]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[33]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[172]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[36]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[32]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[174]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[39]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[34]);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[175]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[40]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[35]);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[29]);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[27]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[26]);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[168]);
        var instance21 = new Graphics()
            .drawCommands(shapes.s01[169]);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[168]);
        var instance26 = new Graphics()
            .drawCommands(shapes.s01[29]);
        var instance25 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance24 = new Graphics()
            .drawCommands(shapes.s01[27]);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[26]);
        var instance29 = new Graphics()
            .drawCommands(shapes.s01[174]);
        var instance28 = new Graphics()
            .drawCommands(shapes.s01[39]);
        var instance27 = new Graphics()
            .drawCommands(shapes.s01[34]);
        var instance30 = new Graphics()
            .drawCommands(shapes.s01[169]);
        var instance34 = new Graphics()
            .drawCommands(shapes.s01[29]);
        var instance33 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance32 = new Graphics()
            .drawCommands(shapes.s01[27]);
        var instance31 = new Graphics()
            .drawCommands(shapes.s01[26]);
        var instance37 = new Graphics()
            .drawCommands(shapes.s01[175]);
        var instance36 = new Graphics()
            .drawCommands(shapes.s01[40]);
        var instance35 = new Graphics()
            .drawCommands(shapes.s01[35]);
        var instance40 = new Graphics()
            .drawCommands(shapes.s01[172]);
        var instance39 = new Graphics()
            .drawCommands(shapes.s01[36]);
        var instance38 = new Graphics()
            .drawCommands(shapes.s01[32]);
        var instance44 = new Graphics()
            .drawCommands(shapes.s01[29]);
        var instance43 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance42 = new Graphics()
            .drawCommands(shapes.s01[27]);
        var instance41 = new Graphics()
            .drawCommands(shapes.s01[26]);
        var instance45 = new Graphics()
            .drawCommands(shapes.s01[169]);
        var instance46 = new Graphics()
            .drawCommands(shapes.s01[24]);
        var instance47 = new Graphics()
            .drawCommands(shapes.s01[170]);
        var instance48 = new Graphics()
            .drawCommands(shapes.s01[168]);
        var instance49 = new Graphics()
            .drawCommands(shapes.s01[24]);
        var instance53 = new Graphics()
            .drawCommands(shapes.s01[176]);
        var instance52 = new Graphics()
            .drawCommands(shapes.s01[41]);
        var instance51 = new Graphics()
            .drawCommands(shapes.s01[38]);
        var instance50 = new Graphics()
            .drawCommands(shapes.s01[171]);
        var instance56 = new Graphics()
            .drawCommands(shapes.s01[172]);
        var instance55 = new Graphics()
            .drawCommands(shapes.s01[36]);
        var instance54 = new Graphics()
            .drawCommands(shapes.s01[32]);
        var instance57 = new Graphics()
            .drawCommands(shapes.s01[24]);
        var instance60 = new Graphics()
            .drawCommands(shapes.s01[172]);
        var instance59 = new Graphics()
            .drawCommands(shapes.s01[36]);
        var instance58 = new Graphics()
            .drawCommands(shapes.s01[32]);
        var instance63 = new Graphics()
            .drawCommands(shapes.s01[175]);
        var instance62 = new Graphics()
            .drawCommands(shapes.s01[40]);
        var instance61 = new Graphics()
            .drawCommands(shapes.s01[35]);
        var instance66 = new Graphics()
            .drawCommands(shapes.s01[174]);
        var instance65 = new Graphics()
            .drawCommands(shapes.s01[39]);
        var instance64 = new Graphics()
            .drawCommands(shapes.s01[34]);
        var instance69 = new Graphics()
            .drawCommands(shapes.s01[175]);
        var instance68 = new Graphics()
            .drawCommands(shapes.s01[40]);
        var instance67 = new Graphics()
            .drawCommands(shapes.s01[35]);
        var instance72 = new Graphics()
            .drawCommands(shapes.s01[173]);
        var instance71 = new Graphics()
            .drawCommands(shapes.s01[37]);
        var instance70 = new Graphics()
            .drawCommands(shapes.s01[33]);
        var instance76 = new Graphics()
            .drawCommands(shapes.s01[29]);
        var instance75 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance74 = new Graphics()
            .drawCommands(shapes.s01[27]);
        var instance73 = new Graphics()
            .drawCommands(shapes.s01[26]);
        var instance79 = new Graphics()
            .drawCommands(shapes.s01[172]);
        var instance78 = new Graphics()
            .drawCommands(shapes.s01[36]);
        var instance77 = new Graphics()
            .drawCommands(shapes.s01[32]);
        var instance83 = new Graphics()
            .drawCommands(shapes.s01[29]);
        var instance82 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance81 = new Graphics()
            .drawCommands(shapes.s01[27]);
        var instance80 = new Graphics()
            .drawCommands(shapes.s01[26]);
        var instance84 = new Graphics()
            .drawCommands(shapes.s01[170]);
        var instance88 = new Graphics()
            .drawCommands(shapes.s01[29]);
        var instance87 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance86 = new Graphics()
            .drawCommands(shapes.s01[27]);
        var instance85 = new Graphics()
            .drawCommands(shapes.s01[26]);
        var instance91 = new Graphics()
            .drawCommands(shapes.s01[175]);
        var instance90 = new Graphics()
            .drawCommands(shapes.s01[40]);
        var instance89 = new Graphics()
            .drawCommands(shapes.s01[35]);
        var instance94 = new Graphics()
            .drawCommands(shapes.s01[172]);
        var instance93 = new Graphics()
            .drawCommands(shapes.s01[36]);
        var instance92 = new Graphics()
            .drawCommands(shapes.s01[32]);
        var instance98 = new Graphics()
            .drawCommands(shapes.s01[29]);
        var instance97 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance96 = new Graphics()
            .drawCommands(shapes.s01[27]);
        var instance95 = new Graphics()
            .drawCommands(shapes.s01[26]);
        var instance101 = new Graphics()
            .drawCommands(shapes.s01[175]);
        var instance100 = new Graphics()
            .drawCommands(shapes.s01[40]);
        var instance99 = new Graphics()
            .drawCommands(shapes.s01[35]);
        var instance104 = new Graphics()
            .drawCommands(shapes.s01[174]);
        var instance103 = new Graphics()
            .drawCommands(shapes.s01[39]);
        var instance102 = new Graphics()
            .drawCommands(shapes.s01[34]);
        var instance108 = new Graphics()
            .drawCommands(shapes.s01[29]);
        var instance107 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance106 = new Graphics()
            .drawCommands(shapes.s01[27]);
        var instance105 = new Graphics()
            .drawCommands(shapes.s01[26]);
        var instance111 = new Graphics()
            .drawCommands(shapes.s01[175]);
        var instance110 = new Graphics()
            .drawCommands(shapes.s01[40]);
        var instance109 = new Graphics()
            .drawCommands(shapes.s01[35]);
        var instance115 = new Graphics()
            .drawCommands(shapes.s01[176]);
        var instance114 = new Graphics()
            .drawCommands(shapes.s01[41]);
        var instance113 = new Graphics()
            .drawCommands(shapes.s01[38]);
        var instance112 = new Graphics()
            .drawCommands(shapes.s01[171]);
        var instance116 = new Graphics()
            .drawCommands(shapes.s01[24]);
        var instance117 = new Graphics()
            .drawCommands(shapes.s01[168]);
        var instance118 = new Graphics()
            .drawCommands(shapes.s01[169]);
        var instance119 = new Graphics()
            .drawCommands(shapes.s01[168]);
        var instance122 = new Graphics()
            .drawCommands(shapes.s01[172]);
        var instance121 = new Graphics()
            .drawCommands(shapes.s01[36]);
        var instance120 = new Graphics()
            .drawCommands(shapes.s01[32]);
        this.addTimedChild(instance3, 0, 62)
            .addTimedChild(instance2, 0, 62)
            .addTimedChild(instance1, 0, 62)
            .addTimedChild(instance6, 62, 1)
            .addTimedChild(instance5, 62, 1)
            .addTimedChild(instance4, 62, 1)
            .addTimedChild(instance9, 63, 2)
            .addTimedChild(instance8, 63, 2)
            .addTimedChild(instance7, 63, 2)
            .addTimedChild(instance12, 65, 1)
            .addTimedChild(instance11, 65, 1)
            .addTimedChild(instance10, 65, 1)
            .addTimedChild(instance15, 66, 1)
            .addTimedChild(instance14, 66, 1)
            .addTimedChild(instance13, 66, 1)
            .addTimedChild(instance19, 67, 5, {
                "67": {
                    x: -478.4,
                    y: 548.95,
                    kx: 3.142
                }
            })
            .addTimedChild(instance18, 67, 5, {
                "67": {
                    x: 1.25,
                    y: 20.6,
                    kx: 3.142
                }
            })
            .addTimedChild(instance17, 67, 5, {
                "67": {
                    x: 0.75,
                    y: 1
                }
            })
            .addTimedChild(instance16, 67, 5, {
                "67": {
                    x: -478.4,
                    y: 548.95,
                    kx: 3.142
                }
            })
            .addTimedChild(instance20, 72, 1)
            .addTimedChild(instance21, 73, 2)
            .addTimedChild(instance22, 75, 1)
            .addTimedChild(instance26, 76, 29, {
                "76": {
                    x: -478.4,
                    y: 548.95,
                    kx: 3.142
                }
            })
            .addTimedChild(instance25, 76, 29, {
                "76": {
                    x: 1.25,
                    y: 20.6,
                    kx: 3.142
                }
            })
            .addTimedChild(instance24, 76, 29, {
                "76": {
                    x: 0.75,
                    y: 1
                }
            })
            .addTimedChild(instance23, 76, 29, {
                "76": {
                    x: -478.4,
                    y: 548.95,
                    kx: 3.142
                }
            })
            .addTimedChild(instance29, 105, 1)
            .addTimedChild(instance28, 105, 1)
            .addTimedChild(instance27, 105, 1)
            .addTimedChild(instance30, 106, 2)
            .addTimedChild(instance34, 108, 1, {
                "108": {
                    x: -478.4,
                    y: 548.95,
                    kx: 3.142
                }
            })
            .addTimedChild(instance33, 108, 1, {
                "108": {
                    x: 1.25,
                    y: 20.6,
                    kx: 3.142
                }
            })
            .addTimedChild(instance32, 108, 1, {
                "108": {
                    x: 0.75,
                    y: 1
                }
            })
            .addTimedChild(instance31, 108, 1, {
                "108": {
                    x: -478.4,
                    y: 548.95,
                    kx: 3.142
                }
            })
            .addTimedChild(instance37, 109, 1)
            .addTimedChild(instance36, 109, 1)
            .addTimedChild(instance35, 109, 1)
            .addTimedChild(instance40, 110, 10)
            .addTimedChild(instance39, 110, 10)
            .addTimedChild(instance38, 110, 10)
            .addTimedChild(instance44, 120, 1, {
                "120": {
                    x: -478.4,
                    y: 548.95,
                    kx: 3.142
                }
            })
            .addTimedChild(instance43, 120, 1, {
                "120": {
                    x: 1.25,
                    y: 20.6,
                    kx: 3.142
                }
            })
            .addTimedChild(instance42, 120, 1, {
                "120": {
                    x: 0.75,
                    y: 1
                }
            })
            .addTimedChild(instance41, 120, 1, {
                "120": {
                    x: -478.4,
                    y: 548.95,
                    kx: 3.142
                }
            })
            .addTimedChild(instance45, 121, 3)
            .addTimedChild(instance46, 124, 2, {
                "124": {
                    y: 3.5,
                    kx: 3.142
                }
            })
            .addTimedChild(instance47, 126, 1)
            .addTimedChild(instance48, 127, 1)
            .addTimedChild(instance49, 128, 1, {
                "128": {
                    y: 3.5,
                    kx: 3.142
                }
            })
            .addTimedChild(instance53, 129, 1)
            .addTimedChild(instance52, 129, 1)
            .addTimedChild(instance51, 129, 1)
            .addTimedChild(instance50, 129, 1)
            .addTimedChild(instance56, 130, 1)
            .addTimedChild(instance55, 130, 1)
            .addTimedChild(instance54, 130, 1)
            .addTimedChild(instance57, 131, 8, {
                "131": {
                    y: 3.5,
                    kx: 3.142
                }
            })
            .addTimedChild(instance60, 139, 1)
            .addTimedChild(instance59, 139, 1)
            .addTimedChild(instance58, 139, 1)
            .addTimedChild(instance63, 140, 1)
            .addTimedChild(instance62, 140, 1)
            .addTimedChild(instance61, 140, 1)
            .addTimedChild(instance66, 141, 4)
            .addTimedChild(instance65, 141, 4)
            .addTimedChild(instance64, 141, 4)
            .addTimedChild(instance69, 145, 1)
            .addTimedChild(instance68, 145, 1)
            .addTimedChild(instance67, 145, 1)
            .addTimedChild(instance72, 146, 15)
            .addTimedChild(instance71, 146, 15)
            .addTimedChild(instance70, 146, 15)
            .addTimedChild(instance76, 161, 5, {
                "161": {
                    x: -478.4,
                    y: 548.95,
                    kx: 3.142
                }
            })
            .addTimedChild(instance75, 161, 5, {
                "161": {
                    x: 1.25,
                    y: 20.6,
                    kx: 3.142
                }
            })
            .addTimedChild(instance74, 161, 5, {
                "161": {
                    x: 0.75,
                    y: 1
                }
            })
            .addTimedChild(instance73, 161, 5, {
                "161": {
                    x: -478.4,
                    y: 548.95,
                    kx: 3.142
                }
            })
            .addTimedChild(instance79, 166, 1)
            .addTimedChild(instance78, 166, 1)
            .addTimedChild(instance77, 166, 1)
            .addTimedChild(instance83, 167, 1, {
                "167": {
                    x: -478.4,
                    y: 548.95,
                    kx: 3.142
                }
            })
            .addTimedChild(instance82, 167, 1, {
                "167": {
                    x: 1.25,
                    y: 20.6,
                    kx: 3.142
                }
            })
            .addTimedChild(instance81, 167, 1, {
                "167": {
                    x: 0.75,
                    y: 1
                }
            })
            .addTimedChild(instance80, 167, 1, {
                "167": {
                    x: -478.4,
                    y: 548.95,
                    kx: 3.142
                }
            })
            .addTimedChild(instance84, 168, 1)
            .addTimedChild(instance88, 169, 1, {
                "169": {
                    x: -478.4,
                    y: 548.95,
                    kx: 3.142
                }
            })
            .addTimedChild(instance87, 169, 1, {
                "169": {
                    x: 1.25,
                    y: 20.6,
                    kx: 3.142
                }
            })
            .addTimedChild(instance86, 169, 1, {
                "169": {
                    x: 0.75,
                    y: 1
                }
            })
            .addTimedChild(instance85, 169, 1, {
                "169": {
                    x: -478.4,
                    y: 548.95,
                    kx: 3.142
                }
            })
            .addTimedChild(instance91, 170, 1)
            .addTimedChild(instance90, 170, 1)
            .addTimedChild(instance89, 170, 1)
            .addTimedChild(instance94, 171, 1)
            .addTimedChild(instance93, 171, 1)
            .addTimedChild(instance92, 171, 1)
            .addTimedChild(instance98, 172, 2, {
                "172": {
                    x: -478.4,
                    y: 548.95,
                    kx: 3.142
                }
            })
            .addTimedChild(instance97, 172, 2, {
                "172": {
                    x: 1.25,
                    y: 20.6,
                    kx: 3.142
                }
            })
            .addTimedChild(instance96, 172, 2, {
                "172": {
                    x: 0.75,
                    y: 1
                }
            })
            .addTimedChild(instance95, 172, 2, {
                "172": {
                    x: -478.4,
                    y: 548.95,
                    kx: 3.142
                }
            })
            .addTimedChild(instance101, 174, 1)
            .addTimedChild(instance100, 174, 1)
            .addTimedChild(instance99, 174, 1)
            .addTimedChild(instance104, 175, 1)
            .addTimedChild(instance103, 175, 1)
            .addTimedChild(instance102, 175, 1)
            .addTimedChild(instance108, 176, 1, {
                "176": {
                    x: -478.4,
                    y: 548.95,
                    kx: 3.142
                }
            })
            .addTimedChild(instance107, 176, 1, {
                "176": {
                    x: 1.25,
                    y: 20.6,
                    kx: 3.142
                }
            })
            .addTimedChild(instance106, 176, 1, {
                "176": {
                    x: 0.75,
                    y: 1
                }
            })
            .addTimedChild(instance105, 176, 1, {
                "176": {
                    x: -478.4,
                    y: 548.95,
                    kx: 3.142
                }
            })
            .addTimedChild(instance111, 177, 1)
            .addTimedChild(instance110, 177, 1)
            .addTimedChild(instance109, 177, 1)
            .addTimedChild(instance115, 178, 1)
            .addTimedChild(instance114, 178, 1)
            .addTimedChild(instance113, 178, 1)
            .addTimedChild(instance112, 178, 1)
            .addTimedChild(instance116, 179, 2, {
                "179": {
                    y: 3.5,
                    kx: 3.142
                }
            })
            .addTimedChild(instance117, 181, 1)
            .addTimedChild(instance118, 182, 2)
            .addTimedChild(instance119, 184, 1)
            .addTimedChild(instance122, 185, 1)
            .addTimedChild(instance121, 185, 1)
            .addTimedChild(instance120, 185, 1);
    });

    var Graphic35 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 186, loop: false });
        var instance1 = new Graphic28(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 186, {
            "0": {
                x: -6.45,
                y: -1.7,
                sx: 1,
                sy: 1
            },
            "63": {
                sx: 1.302,
                sy: 0.556
            },
            "64": {
                sx: 1.334,
                sy: 0.48
            },
            "65": {
                x: -6.5,
                y: -1.65,
                sx: 1.185,
                sy: 1.047
            },
            "68": {
                y: -1.7,
                sx: 1.43,
                sy: 0.805
            },
            "69": {
                x: -6.55,
                sx: 1.387,
                sy: 0.854
            },
            "70": {
                x: -6.5,
                sx: 1.43,
                sy: 0.805
            },
            "71": {
                x: -6.55,
                sx: 1.387,
                sy: 0.854
            },
            "72": {
                x: -6.65,
                sx: 1,
                sy: 1
            },
            "73": {
                x: -6.7,
                y: -1.75
            },
            "75": {
                y: -1.65
            },
            "76": {
                x: -6.75,
                y: -1.8,
                sx: 1.213,
                sy: 0.763
            },
            "77": {
                x: -6.65,
                y: -1.85,
                sx: 1.393,
                sy: 0.612
            },
            "105": {
                x: -7.05,
                y: -1.75,
                sx: 0.804,
                sy: 0.98
            },
            "107": {
                x: -7.2,
                y: -1.8,
                sx: 0.564,
                sy: 0.86
            },
            "108": {
                x: -6.75,
                y: -1.75,
                sx: 1.088,
                sy: 0.944
            },
            "110": {
                x: -6.8,
                y: -1.8,
                sx: 1.111,
                sy: 0.814
            },
            "111": {
                x: -6.65,
                y: -1.9,
                sx: 1.266,
                sy: 0.716
            },
            "120": {
                x: -6.55,
                y: -2.05,
                sx: 1.398,
                sy: 0.593
            },
            "121": {
                y: -1.9,
                sy: 0.72
            },
            "122": {
                x: -7.2,
                y: -1.6,
                sx: 0.748,
                sy: 0.973
            },
            "124": {
                x: -6.95,
                y: -1.55,
                sx: 1,
                sy: 1
            },
            "139": {
                x: -7,
                y: -1.65,
                sx: 0.952,
                sy: 0.861
            },
            "161": {
                x: -6.45,
                y: -1.7,
                sx: 1,
                sy: 1
            },
            "179": {
                y: 1.3
            },
            "180": {
                y: 0.85,
                sx: 0.944,
                sy: 1.34
            },
            "181": {
                y: -1.7,
                sx: 1,
                sy: 1
            }
        });
    });

    var Graphic36 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 186, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[177]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[178]);
        this.addTimedChild(instance1, 0, 77)
            .addTimedChild(instance2, 77, 109);
    });

    var Graphic37 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 186, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[180])
            .setTransform(-368.7, -483.9, 0.959);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[179])
            .setTransform(-383.8, -485.3);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic38 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 77, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[147]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[146])
            .setTransform(-585.65, -483.25);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic39 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 155, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[70]);
        this.addTimedChild(instance1);
    });

    var Graphic40 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 155, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[69])
            .setTransform(-657.05, -461.95);
        this.addTimedChild(instance1);
    });

    var Graphic41 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 186, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[184])
            .setTransform(-497.15, -407.2);
        this.addTimedChild(instance1);
    });

    var Graphic64 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 186, loop: false });
        var instance14 = new Graphic41(MovieClip.SYNCHED);
        var instance13 = new Graphic40(MovieClip.SYNCHED);
        var instance12 = new Graphic39(MovieClip.SYNCHED);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[181]);
        var instance10 = new Graphic38(MovieClip.SYNCHED);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[182]);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[183]);
        var instance9 = new Graphic37(MovieClip.SYNCHED);
        var instance8 = new Graphic36(MovieClip.SYNCHED)
            .setTransform(4.15, -0.3);
        var instance7 = new Graphic35(MovieClip.SYNCHED);
        var instance6 = new Graphic34(MovieClip.SYNCHED);
        var instance5 = new Graphic33(MovieClip.SYNCHED);
        var instance4 = new Graphic32(MovieClip.SYNCHED);
        var instance17 = new Graphic44(MovieClip.SYNCHED);
        var instance16 = new Graphic43(MovieClip.SYNCHED);
        var instance19 = new Graphic46(MovieClip.SYNCHED);
        var instance18 = new Graphic45(MovieClip.SYNCHED);
        var instance33 = new Graphic50(MovieClip.SYNCHED);
        var instance32 = new Graphic49(MovieClip.SYNCHED);
        var instance3 = new Graphic31(MovieClip.SYNCHED);
        var instance2 = new Graphic30(MovieClip.SYNCHED);
        var instance1 = new Graphic29(MovieClip.SYNCHED);
        var instance15 = new Graphic42(MovieClip.SYNCHED);
        var instance21 = new Graphic48(MovieClip.SYNCHED);
        var instance20 = new Graphic47(MovieClip.SYNCHED);
        var instance24 = new Graphics()
            .drawCommands(shapes.s01[137]);
        var instance25 = new Graphics()
            .drawCommands(shapes.s01[138]);
        var instance26 = new Graphics()
            .drawCommands(shapes.s01[139]);
        var instance27 = new Graphics()
            .drawCommands(shapes.s01[140]);
        var instance28 = new Graphics()
            .drawCommands(shapes.s01[141]);
        var instance29 = new Graphics()
            .drawCommands(shapes.s01[142]);
        var instance30 = new Graphics()
            .drawCommands(shapes.s01[143]);
        var instance31 = new Graphics()
            .drawCommands(shapes.s01[144]);
        var instance34 = new Graphics()
            .drawCommands(shapes.s01[145]);
        this.addTimedChild(instance14, 0, 186, {
                "0": {
                    x: 17,
                    y: -197.8
                }
            })
            .addTimedChild(instance13, 0, 155, {
                "0": {
                    x: 176.9,
                    y: -143.05
                }
            })
            .addTimedChild(instance12, 0, 155, {
                "0": {
                    x: 177.15,
                    y: -118
                }
            })
            .addTimedChild(instance11, 0, 155)
            .addTimedChild(instance10, 0, 77, {
                "0": {
                    x: 105.5,
                    y: -122.2
                }
            })
            .addTimedChild(instance22, 155, 1)
            .addTimedChild(instance23, 156, 1)
            .addTimedChild(instance9, 0, 186, {
                "0": {
                    x: -96.35,
                    y: -120.15
                },
                "77": {
                    x: -85.25
                }
            })
            .addTimedChild(instance8)
            .addTimedChild(instance7, 0, 186, {
                "0": {
                    x: -6.85,
                    y: -75.4
                },
                "77": {
                    x: -18.05
                }
            })
            .addTimedChild(instance6, 0, 186, {
                "0": {
                    x: -11.3,
                    y: -127.5
                },
                "77": {
                    x: -22.5
                }
            })
            .addTimedChild(instance5, 0, 110, {
                "0": {
                    x: 6.2,
                    y: -125.95
                },
                "57": {
                    x: 8.8,
                    y: -128.05
                },
                "70": {
                    x: 19.1,
                    y: -128.3
                },
                "77": {
                    x: -10.9,
                    y: -126.95
                }
            })
            .addTimedChild(instance4, 0, 110, {
                "0": {
                    x: -34.25,
                    y: -125.1
                },
                "57": {
                    x: -31.4,
                    y: -128.5
                },
                "70": {
                    x: -21.35,
                    y: -127.45
                },
                "77": {
                    x: -51.35,
                    y: -126.1
                }
            })
            .addTimedChild(instance17, 112, 23, {
                "112": {
                    x: -10.9,
                    y: -126.95
                },
                "118": {
                    x: -11.1,
                    y: -124.5
                },
                "122": {
                    x: -10.9,
                    y: -126.95
                }
            })
            .addTimedChild(instance16, 112, 23, {
                "112": {
                    x: -51.35,
                    y: -126.1
                },
                "118": {
                    x: -51.55,
                    y: -123.65
                },
                "122": {
                    x: -51.35,
                    y: -126.1
                }
            })
            .addTimedChild(instance19, 139, 24, {
                "139": {
                    x: 12.2,
                    y: -128.4
                },
                "140": {
                    x: 3.65,
                    y: -133.1
                },
                "141": {
                    x: -0.55,
                    y: -133.25
                },
                "158": {
                    x: 2.9,
                    y: -133.55
                }
            })
            .addTimedChild(instance18, 139, 24, {
                "139": {
                    x: -28.25,
                    y: -127.55
                },
                "140": {
                    x: -36.8,
                    y: -132.25
                },
                "141": {
                    x: -41,
                    y: -132.4
                },
                "158": {
                    x: -37.55,
                    y: -132.7
                }
            })
            .addTimedChild(instance33, 175, 11, {
                "175": {
                    x: -12.4,
                    y: -122.45
                },
                "181": {
                    x: -11.95,
                    y: -124.05
                },
                "182": {
                    x: -10.8,
                    y: -128
                },
                "183": {
                    x: -10.35,
                    y: -129.6
                }
            })
            .addTimedChild(instance32, 175, 11, {
                "175": {
                    x: -52.85,
                    y: -121.6
                },
                "181": {
                    x: -52.4,
                    y: -123.2
                },
                "182": {
                    x: -51.25,
                    y: -127.15
                },
                "183": {
                    x: -50.8,
                    y: -128.75
                }
            })
            .addTimedChild(instance3, 0, 186, {
                "0": {
                    x: 8.55,
                    y: -151.8,
                    r: 0
                },
                "57": {
                    x: 8.1,
                    y: -148.6,
                    r: -0.387
                },
                "77": {
                    x: -2.55,
                    y: -148.4,
                    r: -0.262
                },
                "135": {
                    x: -5.1,
                    y: -139.65
                },
                "138": {
                    x: -5.2,
                    y: -140.25
                },
                "139": {
                    x: -2.55,
                    y: -148.4
                },
                "140": {
                    x: -2.25,
                    y: -151.348
                },
                "141": {
                    x: -2.15,
                    y: -152.3
                },
                "142": {
                    x: -2.2,
                    y: -151.548
                },
                "143": {
                    y: -151.048
                },
                "144": {
                    x: -2.15,
                    y: -150.85
                },
                "155": {
                    x: -2.55,
                    y: -148.4
                },
                "162": {
                    x: -2.6,
                    y: -147.7
                },
                "163": {
                    x: 0.55,
                    y: -140.3,
                    r: 0.039
                },
                "164": {
                    x: 0.6,
                    y: -139.7
                },
                "174": {
                    x: 0.55,
                    y: -140.25
                },
                "175": {
                    x: -3.5,
                    y: -144.3,
                    r: -0.214
                },
                "176": {
                    x: -3.65,
                    y: -145,
                    r: -0.262
                },
                "181": {
                    x: -3.6,
                    y: -145.648
                },
                "182": {
                    x: -3.5,
                    y: -147.048
                },
                "183": {
                    x: -3.45,
                    y: -147.6
                }
            })
            .addTimedChild(instance2, 0, 186, {
                "0": {
                    x: -26.4,
                    y: -151.8,
                    r: 0
                },
                "57": {
                    x: -24.75,
                    y: -148.6,
                    r: 0.553
                },
                "70": {
                    r: 0.44
                },
                "77": {
                    x: -35.45,
                    r: 0.487
                },
                "135": {
                    x: -38,
                    y: -139.85
                },
                "138": {
                    x: -38.1,
                    y: -140.45
                },
                "139": {
                    x: -35.45,
                    y: -148.6
                },
                "140": {
                    x: -35.199,
                    y: -151.595
                },
                "141": {
                    x: -35.05,
                    y: -152.5
                },
                "142": {
                    x: -35.099,
                    y: -151.795
                },
                "143": {
                    y: -151.295
                },
                "144": {
                    x: -35.05,
                    y: -151.05
                },
                "155": {
                    x: -35.45,
                    y: -148.6
                },
                "162": {
                    x: -35.5,
                    y: -147.9
                },
                "163": {
                    x: -41.7,
                    y: -138.45,
                    r: 0.034
                },
                "164": {
                    x: -41.65,
                    y: -137.85
                },
                "174": {
                    x: -41.7,
                    y: -138.4
                },
                "175": {
                    x: -36.6,
                    y: -144.65,
                    r: 0.444
                },
                "176": {
                    x: -36.55,
                    y: -145.2,
                    r: 0.487
                },
                "181": {
                    x: -36.499,
                    y: -145.896
                },
                "182": {
                    x: -36.399,
                    y: -147.296
                },
                "183": {
                    x: -36.35,
                    y: -147.8
                }
            })
            .addTimedChild(instance1, 0, 186, {
                "0": {
                    x: -13.15,
                    y: -100.3
                },
                "77": {
                    x: -24.25
                }
            })
            .addTimedChild(instance15, 77, 109, {
                "77": {
                    x: 86.85,
                    y: -120.95
                }
            })
            .addTimedChild(instance21, 155, 31, {
                "155": {
                    x: 157.65,
                    y: -114.4,
                    r: 0.349
                },
                "156": {
                    x: 145.55,
                    y: -114.45,
                    r: 0.81
                },
                "157": {
                    x: 91.55,
                    y: -101.35,
                    r: 1.193
                },
                "158": {
                    x: 88.65,
                    y: -101.05,
                    r: 1.315
                },
                "166": {
                    x: 169.15,
                    y: -119.15,
                    r: 0.309
                },
                "167": {
                    x: 175.8,
                    y: -120.6,
                    r: -0.146
                },
                "168": {
                    x: 177.15,
                    y: -118,
                    r: -0.039
                },
                "169": {
                    r: 0
                }
            })
            .addTimedChild(instance20, 155, 31, {
                "155": {
                    x: 164.5,
                    y: -136.1,
                    r: 0
                },
                "156": {
                    x: 152.65,
                    y: -135.9,
                    r: -0.004
                },
                "157": {
                    x: 108.9,
                    y: -119.4,
                    r: 0.776
                },
                "158": {
                    x: 106.7,
                    y: -118.5,
                    r: 0.811
                },
                "166": {
                    x: 177.05,
                    y: -143.05,
                    r: 0.278
                },
                "167": {
                    x: 188.25,
                    y: -142.55,
                    r: 0.477
                },
                "168": {
                    x: 176.9,
                    y: -143.05,
                    r: 0
                }
            })
            .addTimedChild(instance24, 157, 1)
            .addTimedChild(instance25, 158, 8)
            .addTimedChild(instance26, 166, 1)
            .addTimedChild(instance27, 167, 1)
            .addTimedChild(instance28, 168, 1)
            .addTimedChild(instance29, 169, 5)
            .addTimedChild(instance30, 174, 1)
            .addTimedChild(instance31, 175, 1)
            .addTimedChild(instance34, 176, 10);
    });

    var Graphic51 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 186, loop: false });
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[188]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[189]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[188]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[189]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[187]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[186]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[185]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[190]);
        this.addTimedChild(instance4, 0, 77, {
                "0": {
                    x: -17.65,
                    y: 14.8,
                    sx: 0.95
                }
            })
            .addTimedChild(instance5, 77, 59)
            .addTimedChild(instance6, 136, 20, {
                "136": {
                    x: -17.65,
                    y: 14.8,
                    sx: 0.95
                }
            })
            .addTimedChild(instance7, 156, 7)
            .addTimedChild(instance3, 0, 163, {
                "0": {
                    x: -470,
                    y: -630.85,
                    sx: 0.95
                }
            })
            .addTimedChild(instance2, 0, 163, {
                "0": {
                    x: -470,
                    y: -630.85,
                    sx: 0.95
                }
            })
            .addTimedChild(instance1, 0, 163, {
                "0": {
                    x: -470,
                    y: -630.85,
                    sx: 0.95
                }
            })
            .addTimedChild(instance8, 163, 23);
    });

    var Graphic52 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 186, loop: false });
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[193]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[194]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[193]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[194]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[192]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[191]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[195]);
        this.addTimedChild(instance3, 0, 77, {
                "0": {
                    x: 14.05,
                    y: 13.35,
                    sx: 0.95
                }
            })
            .addTimedChild(instance4, 77, 59)
            .addTimedChild(instance5, 136, 20, {
                "136": {
                    x: 14.05,
                    y: 13.35,
                    sx: 0.95
                }
            })
            .addTimedChild(instance6, 156, 7)
            .addTimedChild(instance2, 0, 163, {
                "0": {
                    x: -438.25,
                    y: -629.9,
                    sx: 0.95,
                    ky: 0
                },
                "77": {
                    x: 438.25,
                    ky: 3.142
                },
                "136": {
                    x: -438.25,
                    ky: 0
                },
                "156": {
                    x: 438.25,
                    ky: 3.142
                }
            })
            .addTimedChild(instance1, 0, 163, {
                "0": {
                    x: -438.25,
                    y: -629.9,
                    sx: 0.95,
                    ky: 0
                },
                "77": {
                    x: 438.25,
                    ky: 3.142
                },
                "136": {
                    x: -438.25,
                    ky: 0
                },
                "156": {
                    x: 438.25,
                    ky: 3.142
                }
            })
            .addTimedChild(instance7, 163, 23);
    });

    var Graphic65 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 186, loop: false });
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[196]);
        var instance2 = new Graphic52(MovieClip.SYNCHED);
        var instance1 = new Graphic51(MovieClip.SYNCHED);
        this.addTimedChild(instance3)
            .addTimedChild(instance2, 0, 186, {
                "0": {
                    x: -9.2,
                    y: -101.15,
                    kx: 0,
                    ky: 0
                },
                "77": {
                    x: -24.6,
                    ky: 3.142
                },
                "136": {
                    x: -9.2,
                    ky: 0
                },
                "156": {
                    x: -24.6,
                    ky: 3.142
                },
                "163": {
                    x: -45.9,
                    y: -98.9,
                    kx: -0.087,
                    ky: -3.055
                }
            })
            .addTimedChild(instance1, 0, 186, {
                "0": {
                    x: 22.55,
                    y: -100.2,
                    r: 0
                },
                "77": {
                    x: 7.15
                },
                "136": {
                    x: 22.55
                },
                "156": {
                    x: 7.15
                },
                "163": {
                    x: -14.15,
                    y: -99.75,
                    r: -0.069
                }
            });
    });

    var Graphic66 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 186, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[197])
            .setTransform(-461.15, -639, 0.96);
        this.addTimedChild(instance1);
    });

    var Graphic67 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 186, loop: false });
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[202]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[200]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[199]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[198]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[201])
            .setTransform(-39.65, 0.95);
        this.addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2, 0, 163)
            .addTimedChild(instance1, 0, 163)
            .addTimedChild(instance5, 163, 23);
    });

    var Graphic70 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 81, loop: false });
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[115]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[218]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[114]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[113]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[112]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[111]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[110]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[109]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[102]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[101]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[100]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[108]);
        this.addTimedChild(instance11, 0, 59, {
                "0": {
                    x: -0.6,
                    y: 2.45,
                    kx: 0.484,
                    ky: 2.657
                }
            })
            .addTimedChild(instance12, 59, 22)
            .addTimedChild(instance10, 0, 81, {
                "0": {
                    x: -4.3,
                    y: 1.95,
                    kx: 0.618,
                    ky: 2.523,
                    r: 0
                },
                "59": {
                    x: 3.1,
                    y: -2.15,
                    kx: 0,
                    ky: 0,
                    r: 0.134
                }
            })
            .addTimedChild(instance9, 0, 81, {
                "0": {
                    x: 4.25,
                    y: 33.75,
                    sx: 1.12,
                    sy: 1.056,
                    kx: 0,
                    ky: 0,
                    r: -0.238
                },
                "59": {
                    x: 10.35,
                    y: 30.05,
                    kx: 0.246,
                    ky: 2.895,
                    r: 0
                }
            })
            .addTimedChild(instance8, 0, 81, {
                "0": {
                    x: 5.75,
                    y: 34.95,
                    kx: 0,
                    ky: 0,
                    r: 0.01
                },
                "59": {
                    x: 9.55,
                    y: 31.8,
                    kx: 0.494,
                    ky: 2.648,
                    r: 0
                }
            })
            .addTimedChild(instance7, 0, 81, {
                "0": {
                    x: 6.05,
                    y: 34.9,
                    kx: 0,
                    ky: 0,
                    r: 0.257
                },
                "59": {
                    x: 9.3,
                    y: 31.9,
                    kx: 0.741,
                    ky: 2.401,
                    r: 0
                }
            })
            .addTimedChild(instance6, 0, 81, {
                "0": {
                    x: 1.05,
                    y: 40.25,
                    kx: 0,
                    ky: 0,
                    r: 0.344
                },
                "59": {
                    x: 16.15,
                    y: 34.3,
                    kx: 0.828,
                    ky: 2.314,
                    r: 0
                }
            })
            .addTimedChild(instance5, 0, 59, {
                "0": {
                    x: 34.1,
                    y: -985.65,
                    r: 0.684
                }
            })
            .addTimedChild(instance4, 0, 59, {
                "0": {
                    x: -464.95,
                    y: -886.85,
                    r: 0.178
                }
            })
            .addTimedChild(instance3, 0, 59, {
                "0": {
                    x: -538.25,
                    y: -842.15,
                    r: 0.091
                }
            })
            .addTimedChild(instance2, 0, 59, {
                "0": {
                    x: -668.55,
                    y: -792.3,
                    sx: 1.087
                }
            })
            .addTimedChild(instance1, 0, 59, {
                "0": {
                    x: -13.45,
                    y: 17.25,
                    r: -0.388
                }
            });
    });

    var Graphic78 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 11, loop: false });
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[219])
            .setTransform(10.35, 32.6);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[106])
            .setTransform(10.35, 32.6);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[105])
            .setTransform(10.35, 32.6);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[104])
            .setTransform(10.35, 32.6);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[103])
            .setTransform(10.25, 32.6);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[102])
            .setTransform(-613.95, -790.65);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[101])
            .setTransform(-613.95, -790.65);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[100])
            .setTransform(-613.95, -790.65);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[99])
            .setTransform(-613.95, -790.65);
        this.addTimedChild(instance9)
            .addTimedChild(instance8)
            .addTimedChild(instance7)
            .addTimedChild(instance6)
            .addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic79 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 11, loop: false });
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[223])
            .setTransform(14.05, -0.4);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[223]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[220]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[222]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[221]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[220]);
        this.addTimedChild(instance6)
            .addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic71 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 88, loop: false });
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[218]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[115]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[218]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[114]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[113]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[112]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[111]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[110]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[109]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[102]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[101]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[100]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[108]);
        this.addTimedChild(instance6, 0, 24)
            .addTimedChild(instance12, 24, 35, {
                "24": {
                    x: -0.6,
                    y: 2.45,
                    kx: 0.484,
                    ky: 2.657
                }
            })
            .addTimedChild(instance13, 59, 29)
            .addTimedChild(instance5, 0, 88, {
                "0": {
                    x: 3.1,
                    y: -2.15,
                    kx: 0,
                    ky: 0,
                    r: 0.134
                },
                "24": {
                    x: -4.3,
                    y: 1.95,
                    kx: 0.618,
                    ky: 2.523,
                    r: 0
                },
                "59": {
                    x: 3.1,
                    y: -2.15,
                    kx: 0,
                    ky: 0,
                    r: 0.134
                }
            })
            .addTimedChild(instance4, 0, 88, {
                "0": {
                    x: 10.35,
                    y: 30.05,
                    sx: 1.12,
                    sy: 1.056,
                    kx: 0.246,
                    ky: 2.895,
                    r: 0
                },
                "24": {
                    x: 4.25,
                    y: 33.75,
                    kx: 0,
                    ky: 0,
                    r: -0.238
                },
                "59": {
                    x: 10.35,
                    y: 30.05,
                    kx: 0.246,
                    ky: 2.895,
                    r: 0
                }
            })
            .addTimedChild(instance3, 0, 88, {
                "0": {
                    x: 9.55,
                    y: 31.8,
                    kx: 0.494,
                    ky: 2.648,
                    r: 0
                },
                "24": {
                    x: 5.75,
                    y: 34.95,
                    kx: 0,
                    ky: 0,
                    r: 0.01
                },
                "59": {
                    x: 9.55,
                    y: 31.8,
                    kx: 0.494,
                    ky: 2.648,
                    r: 0
                }
            })
            .addTimedChild(instance2, 0, 88, {
                "0": {
                    x: 9.3,
                    y: 31.9,
                    kx: 0.741,
                    ky: 2.401,
                    r: 0
                },
                "24": {
                    x: 6.05,
                    y: 34.9,
                    kx: 0,
                    ky: 0,
                    r: 0.257
                },
                "59": {
                    x: 9.3,
                    y: 31.9,
                    kx: 0.741,
                    ky: 2.401,
                    r: 0
                }
            })
            .addTimedChild(instance1, 0, 88, {
                "0": {
                    x: 16.15,
                    y: 34.3,
                    kx: 0.828,
                    ky: 2.314,
                    r: 0
                },
                "24": {
                    x: 1.05,
                    y: 40.25,
                    kx: 0,
                    ky: 0,
                    r: 0.344
                },
                "59": {
                    x: 16.15,
                    y: 34.3,
                    kx: 0.828,
                    ky: 2.314,
                    r: 0
                }
            })
            .addTimedChild(instance11, 24, 35, {
                "24": {
                    x: 34.1,
                    y: -985.65,
                    r: 0.684
                }
            })
            .addTimedChild(instance10, 24, 35, {
                "24": {
                    x: -464.95,
                    y: -886.85,
                    r: 0.178
                }
            })
            .addTimedChild(instance9, 24, 35, {
                "24": {
                    x: -538.25,
                    y: -842.15,
                    r: 0.091
                }
            })
            .addTimedChild(instance8, 24, 35, {
                "24": {
                    x: -668.55,
                    y: -792.3,
                    sx: 1.087
                }
            })
            .addTimedChild(instance7, 24, 35, {
                "24": {
                    x: -13.45,
                    y: 17.25,
                    r: -0.388
                }
            });
    });

    var Graphic53 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 186, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[256]);
        this.addTimedChild(instance1);
    });

    var Graphic54 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 186, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[256]);
        this.addTimedChild(instance1);
    });

    var Graphic55 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 186, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[256]);
        this.addTimedChild(instance1);
    });

    var Graphic56 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 186, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[256]);
        this.addTimedChild(instance1);
    });

    var Graphic68 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 186, loop: false });
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[257]);
        var instance4 = new Graphic56(MovieClip.SYNCHED)
            .setTransform(-54.7, -18.8, 1, 1, 0.117);
        var instance3 = new Graphic55(MovieClip.SYNCHED)
            .setTransform(-49.6, -8.1, 1, 1, 0.117);
        var instance2 = new Graphic54(MovieClip.SYNCHED)
            .setTransform(-77.75, -9.3, 1, 1, 0.117);
        var instance1 = new Graphic53(MovieClip.SYNCHED)
            .setTransform(-89, -7.25, 1, 1, 0.117);
        this.addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic57 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 186, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[256]);
        this.addTimedChild(instance1);
    });

    var Graphic58 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 186, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[256]);
        this.addTimedChild(instance1);
    });

    var Graphic59 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 186, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[256]);
        this.addTimedChild(instance1);
    });

    var Graphic60 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 186, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[256]);
        this.addTimedChild(instance1);
    });

    var Graphic69 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 186, loop: false });
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[257]);
        var instance4 = new Graphic60(MovieClip.SYNCHED)
            .setTransform(-54.7, -18.8, 1, 1, 0.117);
        var instance3 = new Graphic59(MovieClip.SYNCHED)
            .setTransform(-49.6, -8.1, 1, 1, 0.117);
        var instance2 = new Graphic58(MovieClip.SYNCHED)
            .setTransform(-77.75, -9.3, 1, 1, 0.117);
        var instance1 = new Graphic57(MovieClip.SYNCHED)
            .setTransform(-89, -7.25, 1, 1, 0.117);
        this.addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic298 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 186, loop: false });
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[291]);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[292]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[293]);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[294]);
        var instance21 = new Graphics()
            .drawCommands(shapes.s01[295]);
        var instance25 = new Graphics()
            .drawCommands(shapes.s01[296]);
        var instance29 = new Graphics()
            .drawCommands(shapes.s01[297]);
        var instance33 = new Graphics()
            .drawCommands(shapes.s01[298]);
        var instance37 = new Graphics()
            .drawCommands(shapes.s01[299]);
        var instance41 = new Graphics()
            .drawCommands(shapes.s01[300]);
        var instance45 = new Graphics()
            .drawCommands(shapes.s01[301]);
        var instance47 = new Graphics()
            .drawCommands(shapes.s01[302]);
        var instance49 = new Graphics()
            .drawCommands(shapes.s01[303]);
        var instance55 = new Graphics()
            .drawCommands(shapes.s01[304]);
        var instance90 = new Graphics()
            .drawCommands(shapes.s01[305]);
        var instance94 = new Graphics()
            .drawCommands(shapes.s01[306]);
        var instance98 = new Graphics()
            .drawCommands(shapes.s01[307]);
        var instance103 = new Graphics()
            .drawCommands(shapes.s01[308]);
        var instance106 = new Graphics()
            .drawCommands(shapes.s01[309]);
        var instance109 = new Graphics()
            .drawCommands(shapes.s01[310]);
        var instance112 = new Graphics()
            .drawCommands(shapes.s01[311]);
        var instance115 = new Graphics()
            .drawCommands(shapes.s01[312]);
        var instance118 = new Graphics()
            .drawCommands(shapes.s01[313]);
        var instance125 = new Graphics()
            .drawCommands(shapes.s01[314]);
        var instance128 = new Graphics()
            .drawCommands(shapes.s01[315]);
        var instance131 = new Graphics()
            .drawCommands(shapes.s01[316]);
        var instance135 = new Graphics()
            .drawCommands(shapes.s01[317]);
        var instance139 = new Graphics()
            .drawCommands(shapes.s01[318]);
        var instance143 = new Graphics()
            .drawCommands(shapes.s01[319]);
        var instance150 = new Graphics()
            .drawCommands(shapes.s01[320]);
        var instance154 = new Graphics()
            .drawCommands(shapes.s01[321]);
        var instance157 = new Graphics()
            .drawCommands(shapes.s01[322]);
        var instance159 = new Graphics()
            .drawCommands(shapes.s01[323]);
        var instance12 = new Graphic69(MovieClip.SYNCHED);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[258]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[259]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[260]);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[261]);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[262]);
        var instance24 = new Graphics()
            .drawCommands(shapes.s01[263]);
        var instance28 = new Graphics()
            .drawCommands(shapes.s01[264]);
        var instance32 = new Graphics()
            .drawCommands(shapes.s01[265]);
        var instance36 = new Graphics()
            .drawCommands(shapes.s01[266]);
        var instance40 = new Graphics()
            .drawCommands(shapes.s01[267]);
        var instance44 = new Graphics()
            .drawCommands(shapes.s01[268]);
        var instance46 = new Graphics()
            .drawCommands(shapes.s01[269]);
        var instance48 = new Graphics()
            .drawCommands(shapes.s01[270]);
        var instance54 = new Graphics()
            .drawCommands(shapes.s01[271]);
        var instance89 = new Graphics()
            .drawCommands(shapes.s01[272]);
        var instance93 = new Graphics()
            .drawCommands(shapes.s01[273]);
        var instance97 = new Graphics()
            .drawCommands(shapes.s01[274]);
        var instance102 = new Graphics()
            .drawCommands(shapes.s01[275]);
        var instance105 = new Graphics()
            .drawCommands(shapes.s01[276]);
        var instance108 = new Graphics()
            .drawCommands(shapes.s01[277]);
        var instance111 = new Graphics()
            .drawCommands(shapes.s01[278]);
        var instance114 = new Graphics()
            .drawCommands(shapes.s01[279]);
        var instance117 = new Graphics()
            .drawCommands(shapes.s01[280]);
        var instance124 = new Graphics()
            .drawCommands(shapes.s01[281]);
        var instance127 = new Graphics()
            .drawCommands(shapes.s01[282]);
        var instance130 = new Graphics()
            .drawCommands(shapes.s01[283]);
        var instance134 = new Graphics()
            .drawCommands(shapes.s01[284]);
        var instance138 = new Graphics()
            .drawCommands(shapes.s01[285]);
        var instance142 = new Graphics()
            .drawCommands(shapes.s01[286]);
        var instance149 = new Graphics()
            .drawCommands(shapes.s01[287]);
        var instance153 = new Graphics()
            .drawCommands(shapes.s01[288]);
        var instance156 = new Graphics()
            .drawCommands(shapes.s01[289]);
        var instance158 = new Graphics()
            .drawCommands(shapes.s01[290]);
        var instance10 = new Graphic68(MovieClip.SYNCHED);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[224]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[203]);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[225]);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[204]);
        var instance27 = new Graphics()
            .drawCommands(shapes.s01[226]);
        var instance26 = new Graphics()
            .drawCommands(shapes.s01[205]);
        var instance31 = new Graphics()
            .drawCommands(shapes.s01[227]);
        var instance30 = new Graphics()
            .drawCommands(shapes.s01[206]);
        var instance35 = new Graphics()
            .drawCommands(shapes.s01[228]);
        var instance34 = new Graphics()
            .drawCommands(shapes.s01[207]);
        var instance39 = new Graphics()
            .drawCommands(shapes.s01[229]);
        var instance38 = new Graphics()
            .drawCommands(shapes.s01[208]);
        var instance43 = new Graphics()
            .drawCommands(shapes.s01[230]);
        var instance42 = new Graphics()
            .drawCommands(shapes.s01[209]);
        var instance53 = new Graphic71(MovieClip.SYNCHED);
        var instance52 = new Graphics()
            .drawCommands(shapes.s01[231]);
        var instance58 = new Graphics()
            .drawCommands(shapes.s01[232]);
        var instance60 = new Graphics()
            .drawCommands(shapes.s01[233]);
        var instance62 = new Graphics()
            .drawCommands(shapes.s01[234]);
        var instance64 = new Graphics()
            .drawCommands(shapes.s01[235]);
        var instance66 = new Graphics()
            .drawCommands(shapes.s01[236]);
        var instance68 = new Graphics()
            .drawCommands(shapes.s01[237]);
        var instance70 = new Graphics()
            .drawCommands(shapes.s01[238]);
        var instance72 = new Graphics()
            .drawCommands(shapes.s01[239]);
        var instance74 = new Graphics()
            .drawCommands(shapes.s01[240]);
        var instance76 = new Graphics()
            .drawCommands(shapes.s01[241]);
        var instance78 = new Graphics()
            .drawCommands(shapes.s01[242]);
        var instance80 = new Graphics()
            .drawCommands(shapes.s01[243]);
        var instance82 = new Graphics()
            .drawCommands(shapes.s01[244]);
        var instance84 = new Graphics()
            .drawCommands(shapes.s01[245]);
        var instance86 = new Graphics()
            .drawCommands(shapes.s01[246]);
        var instance88 = new Graphics()
            .drawCommands(shapes.s01[247]);
        var instance92 = new Graphics()
            .drawCommands(shapes.s01[246]);
        var instance96 = new Graphics()
            .drawCommands(shapes.s01[248]);
        var instance51 = new Graphic70(MovieClip.SYNCHED);
        var instance77 = new Graphics()
            .drawCommands(shapes.s01[210]);
        var instance79 = new Graphics()
            .drawCommands(shapes.s01[211]);
        var instance81 = new Graphics()
            .drawCommands(shapes.s01[212]);
        var instance83 = new Graphics()
            .drawCommands(shapes.s01[213]);
        var instance85 = new Graphics()
            .drawCommands(shapes.s01[214]);
        var instance87 = new Graphics()
            .drawCommands(shapes.s01[215]);
        var instance91 = new Graphics()
            .drawCommands(shapes.s01[216]);
        var instance95 = new Graphics()
            .drawCommands(shapes.s01[217]);
        var instance101 = new Graphics()
            .drawCommands(shapes.s01[249]);
        var instance104 = new Graphics()
            .drawCommands(shapes.s01[250]);
        var instance107 = new Graphics()
            .drawCommands(shapes.s01[246]);
        var instance110 = new Graphics()
            .drawCommands(shapes.s01[251]);
        var instance113 = new Graphics()
            .drawCommands(shapes.s01[252]);
        var instance116 = new Graphics()
            .drawCommands(shapes.s01[246]);
        var instance148 = new Graphics()
            .drawCommands(shapes.s01[253]);
        var instance152 = new Graphics()
            .drawCommands(shapes.s01[254]);
        var instance155 = new Graphics()
            .drawCommands(shapes.s01[255]);
        var instance147 = new Graphic79(MovieClip.SYNCHED);
        var instance146 = new Graphic78(MovieClip.SYNCHED);
        var instance7 = new Graphic67(MovieClip.SYNCHED);
        var instance6 = new Graphic66(MovieClip.SYNCHED);
        var instance5 = new Graphic65(MovieClip.SYNCHED);
        var instance4 = new Graphic64(MovieClip.SYNCHED);
        var instance3 = new Graphic63(MovieClip.SYNCHED);
        var instance2 = new Graphic62(MovieClip.SYNCHED);
        var instance1 = new Graphic61(MovieClip.SYNCHED);
        var instance50 = new Graphics()
            .drawCommands(shapes.s01[80]);
        var instance56 = new Graphics()
            .drawCommands(shapes.s01[81]);
        var instance57 = new Graphics()
            .drawCommands(shapes.s01[82]);
        var instance59 = new Graphics()
            .drawCommands(shapes.s01[83]);
        var instance61 = new Graphics()
            .drawCommands(shapes.s01[84]);
        var instance63 = new Graphics()
            .drawCommands(shapes.s01[85]);
        var instance65 = new Graphics()
            .drawCommands(shapes.s01[86]);
        var instance67 = new Graphics()
            .drawCommands(shapes.s01[87]);
        var instance69 = new Graphics()
            .drawCommands(shapes.s01[88]);
        var instance71 = new Graphics()
            .drawCommands(shapes.s01[89]);
        var instance73 = new Graphics()
            .drawCommands(shapes.s01[90]);
        var instance75 = new Graphics()
            .drawCommands(shapes.s01[91]);
        var instance100 = new Graphic72(MovieClip.SYNCHED);
        var instance99 = new Graphics()
            .drawCommands(shapes.s01[92]);
        var instance126 = new Graphics()
            .drawCommands(shapes.s01[93]);
        var instance133 = new Graphics()
            .drawCommands(shapes.s01[94]);
        var instance137 = new Graphics()
            .drawCommands(shapes.s01[95]);
        var instance141 = new Graphics()
            .drawCommands(shapes.s01[96]);
        var instance145 = new Graphic77(MovieClip.SYNCHED);
        var instance144 = new Graphics()
            .drawCommands(shapes.s01[97]);
        var instance151 = new Graphics()
            .drawCommands(shapes.s01[98]);
        var instance123 = new Graphic76(MovieClip.SYNCHED);
        var instance122 = new Graphic75(MovieClip.SYNCHED);
        var instance121 = new Graphic74(MovieClip.SYNCHED);
        var instance120 = new Graphics()
            .drawCommands(shapes.s01[68]);
        var instance129 = new Graphics()
            .drawCommands(shapes.s01[71]);
        var instance132 = new Graphics()
            .drawCommands(shapes.s01[72]);
        var instance136 = new Graphics()
            .drawCommands(shapes.s01[73]);
        var instance140 = new Graphics()
            .drawCommands(shapes.s01[74]);
        var instance119 = new Graphic73(MovieClip.SYNCHED);
        this.addTimedChild(instance13, 0, 56)
            .addTimedChild(instance15, 56, 1)
            .addTimedChild(instance17, 57, 1)
            .addTimedChild(instance19, 58, 1)
            .addTimedChild(instance21, 59, 1)
            .addTimedChild(instance25, 60, 1)
            .addTimedChild(instance29, 61, 1)
            .addTimedChild(instance33, 62, 1)
            .addTimedChild(instance37, 63, 1)
            .addTimedChild(instance41, 64, 1)
            .addTimedChild(instance45, 65, 4)
            .addTimedChild(instance47, 69, 1)
            .addTimedChild(instance49, 70, 7)
            .addTimedChild(instance55, 77, 78)
            .addTimedChild(instance90, 155, 1)
            .addTimedChild(instance94, 156, 1)
            .addTimedChild(instance98, 157, 1)
            .addTimedChild(instance103, 158, 1)
            .addTimedChild(instance106, 159, 1)
            .addTimedChild(instance109, 160, 1)
            .addTimedChild(instance112, 161, 1)
            .addTimedChild(instance115, 162, 1)
            .addTimedChild(instance118, 163, 1)
            .addTimedChild(instance125, 164, 1)
            .addTimedChild(instance128, 165, 1)
            .addTimedChild(instance131, 166, 1)
            .addTimedChild(instance135, 167, 1)
            .addTimedChild(instance139, 168, 6)
            .addTimedChild(instance143, 174, 1)
            .addTimedChild(instance150, 175, 1)
            .addTimedChild(instance154, 176, 1)
            .addTimedChild(instance157, 177, 1)
            .addTimedChild(instance159, 178, 8)
            .addTimedChild(instance12, 0, 186, {
                "0": {
                    x: -15.2,
                    y: -149.75,
                    kx: 0,
                    ky: 0,
                    r: -1.213
                },
                "57": {
                    x: -22.05,
                    y: -151.7,
                    r: -1.16
                },
                "58": {
                    x: -26,
                    y: -152.9,
                    r: -1.129
                },
                "59": {
                    x: -27.35,
                    y: -153.25,
                    r: -1.118
                },
                "60": {
                    x: -27.05,
                    y: -153.15,
                    r: -1.109
                },
                "61": {
                    x: -26.2,
                    y: -152.7,
                    r: -1.082
                },
                "62": {
                    x: -24.8,
                    y: -151.85,
                    r: -1.038
                },
                "63": {
                    x: -22.75,
                    y: -150.65,
                    r: -0.974
                },
                "77": {
                    x: -2.85,
                    y: -33.2,
                    r: -0.122
                },
                "155": {
                    x: -39.2,
                    y: -61.9,
                    r: -0.047
                },
                "156": {
                    x: -51.25,
                    y: -71.3,
                    r: -0.021
                },
                "157": {
                    x: -39.5,
                    y: -118.75,
                    r: 0.217
                },
                "158": {
                    x: -31.2,
                    y: -152.2,
                    r: 0.385
                },
                "159": {
                    x: -26.2,
                    y: -172.35,
                    r: 0.486
                },
                "160": {
                    x: -24.45,
                    y: -179,
                    r: 0.519
                },
                "161": {
                    x: 45.2,
                    y: -186.7,
                    r: 1.152
                },
                "162": {
                    x: 86.65,
                    y: -191.25,
                    r: 1.528
                },
                "163": {
                    x: 100.3,
                    y: -192.45,
                    kx: 4.63,
                    ky: 1.654,
                    r: 0
                },
                "164": {
                    x: 107.4,
                    y: -173.75,
                    kx: 4.513,
                    ky: 1.77
                },
                "165": {
                    x: 144.65,
                    y: -55.5,
                    kx: 0,
                    ky: 0,
                    r: 1.17
                },
                "166": {
                    y: -57.8
                },
                "167": {
                    x: 141.3,
                    y: -73.3,
                    r: 1.395
                },
                "168": {
                    x: 140.25,
                    y: -78.5,
                    r: 1.47
                },
                "175": {
                    x: 140.8,
                    y: -85.25,
                    r: 1.517
                }
            })
            .addTimedChild(instance11, 0, 56)
            .addTimedChild(instance14, 56, 1)
            .addTimedChild(instance16, 57, 1)
            .addTimedChild(instance18, 58, 1)
            .addTimedChild(instance20, 59, 1)
            .addTimedChild(instance24, 60, 1)
            .addTimedChild(instance28, 61, 1)
            .addTimedChild(instance32, 62, 1)
            .addTimedChild(instance36, 63, 1)
            .addTimedChild(instance40, 64, 1)
            .addTimedChild(instance44, 65, 4)
            .addTimedChild(instance46, 69, 1)
            .addTimedChild(instance48, 70, 7)
            .addTimedChild(instance54, 77, 78, {
                "77": {
                    x: 0
                },
                "78": {
                    x: -13.8
                }
            })
            .addTimedChild(instance89, 155, 1)
            .addTimedChild(instance93, 156, 1)
            .addTimedChild(instance97, 157, 1)
            .addTimedChild(instance102, 158, 1)
            .addTimedChild(instance105, 159, 1)
            .addTimedChild(instance108, 160, 1)
            .addTimedChild(instance111, 161, 1)
            .addTimedChild(instance114, 162, 1)
            .addTimedChild(instance117, 163, 1)
            .addTimedChild(instance124, 164, 1)
            .addTimedChild(instance127, 165, 1)
            .addTimedChild(instance130, 166, 1)
            .addTimedChild(instance134, 167, 1)
            .addTimedChild(instance138, 168, 6)
            .addTimedChild(instance142, 174, 1)
            .addTimedChild(instance149, 175, 1)
            .addTimedChild(instance153, 176, 1)
            .addTimedChild(instance156, 177, 1)
            .addTimedChild(instance158, 178, 8)
            .addTimedChild(instance10, 0, 186, {
                "0": {
                    x: 75.95,
                    y: -98.6,
                    kx: 0,
                    ky: 0,
                    r: -1.053
                },
                "57": {
                    x: 66.55,
                    y: -99.9,
                    r: -0.951
                },
                "58": {
                    x: 60.85,
                    y: -100.7,
                    r: -0.89
                },
                "59": {
                    x: 58.85,
                    y: -100.9,
                    r: -0.87
                },
                "60": {
                    x: 59.1,
                    y: -100.95,
                    r: -0.865
                },
                "61": {
                    x: 60,
                    y: -101,
                    r: -0.85
                },
                "62": {
                    x: 61.35,
                    r: -0.826
                },
                "63": {
                    x: 63.5,
                    y: -100.9,
                    r: -0.792
                },
                "77": {
                    x: 95.15,
                    y: -27.2,
                    r: -0.122
                },
                "78": {
                    x: 81.35
                },
                "157": {
                    x: 83.1,
                    y: -25.25,
                    r: 0.117
                },
                "158": {
                    x: 84.3,
                    y: -23.9,
                    r: 0.286
                },
                "159": {
                    x: 85,
                    y: -23.05,
                    r: 0.387
                },
                "160": {
                    x: 85.25,
                    y: -22.7,
                    r: 0.421
                },
                "161": {
                    x: 94.8,
                    y: -59.4,
                    r: 0.945
                },
                "162": {
                    x: 100.35,
                    y: -81.25,
                    r: 1.256
                },
                "163": {
                    x: 102.2,
                    y: -88.5,
                    r: 1.36
                },
                "164": {
                    x: 110.45,
                    y: -103.25,
                    kx: 4.358,
                    ky: 1.925,
                    r: 0
                },
                "165": {
                    x: 121.65,
                    y: 19.1,
                    kx: 0,
                    ky: 0,
                    r: 1.178
                },
                "166": {
                    y: 16.8
                },
                "167": {
                    x: 120.95,
                    y: 7.3,
                    r: 1.341
                },
                "168": {
                    x: 120.7,
                    y: 4.2,
                    r: 1.395
                },
                "175": {
                    x: 120.2,
                    y: 1.35,
                    r: 1.408
                }
            })
            .addTimedChild(instance9, 0, 60, {
                "0": {
                    x: 0,
                    y: 0
                },
                "57": {
                    x: 0.7,
                    y: -0.5
                },
                "58": {
                    x: 2.75,
                    y: -2.05
                },
                "59": {
                    x: 6.2,
                    y: -4.6
                }
            })
            .addTimedChild(instance8, 0, 60, {
                "0": {
                    x: 0.9,
                    y: -1.8
                }
            })
            .addTimedChild(instance23, 60, 1)
            .addTimedChild(instance22, 60, 1)
            .addTimedChild(instance27, 61, 1)
            .addTimedChild(instance26, 61, 1)
            .addTimedChild(instance31, 62, 1)
            .addTimedChild(instance30, 62, 1)
            .addTimedChild(instance35, 63, 1)
            .addTimedChild(instance34, 63, 1, {
                "63": {
                    x: 0.9,
                    y: -1.8
                }
            })
            .addTimedChild(instance39, 64, 1)
            .addTimedChild(instance38, 64, 1)
            .addTimedChild(instance43, 65, 12)
            .addTimedChild(instance42, 65, 12, {
                "65": {
                    x: 0.9,
                    y: -1.8
                }
            })
            .addTimedChild(instance53, 77, 88, {
                "77": {
                    x: -151.85,
                    y: -424.4,
                    kx: 3.778,
                    ky: -0.636
                },
                "98": {
                    x: -153.678,
                    y: -435.62,
                    kx: 3.769,
                    ky: -0.627
                },
                "99": {
                    x: -159.591,
                    y: -470.752,
                    kx: 3.741,
                    ky: -0.599
                },
                "100": {
                    x: -165.539,
                    y: -505.961,
                    kx: 3.713,
                    ky: -0.571
                },
                "101": {
                    x: -167.4,
                    y: -517.15,
                    kx: 3.704,
                    ky: -0.562
                },
                "110": {
                    x: -169.85,
                    y: -510.4,
                    kx: 3.678,
                    ky: -0.536
                },
                "111": {
                    x: -163.6,
                    y: -503.7,
                    kx: 3.704,
                    ky: -0.562
                },
                "112": {
                    x: -199.2,
                    y: -525.2,
                    kx: 3.877,
                    ky: -0.736
                },
                "113": {
                    x: -203.2,
                    y: -526.15,
                    kx: 3.899,
                    ky: -0.757
                },
                "134": {
                    x: -201.25,
                    y: -510.25,
                    kx: 3.954,
                    ky: -0.813
                },
                "135": {
                    x: -195.6,
                    y: -462.7,
                    kx: 4.12,
                    ky: -0.979
                },
                "136": {
                    x: -185.85,
                    y: -382.15,
                    kx: 4.4,
                    ky: -1.259
                },
                "137": {
                    x: -183.6,
                    y: -414.85,
                    kx: 4.193,
                    ky: -1.052
                },
                "138": {
                    x: -181.95,
                    y: -437.95,
                    kx: 4.047,
                    ky: -0.906
                },
                "139": {
                    x: -180.95,
                    y: -451.6,
                    kx: 3.96,
                    ky: -0.818
                },
                "140": {
                    x: -180.8,
                    y: -456.45,
                    kx: 3.93,
                    ky: -0.789
                },
                "155": {
                    x: -74.2,
                    y: -499.2,
                    kx: 3.933,
                    ky: -0.791
                },
                "156": {
                    x: -39.05,
                    y: -513.15,
                    ky: -0.792
                },
                "157": {
                    x: 54.15,
                    y: -537.6,
                    kx: 3.805,
                    ky: -0.663
                },
                "158": {
                    x: 119.95,
                    y: -554.9,
                    kx: 3.714,
                    ky: -0.572
                },
                "159": {
                    x: 159.4,
                    y: -565.3,
                    kx: 3.659,
                    ky: -0.518
                },
                "160": {
                    x: 172.7,
                    y: -568.55,
                    kx: 3.641,
                    ky: -0.499
                },
                "161": {
                    x: 242.1,
                    y: -408.9,
                    kx: 3.651,
                    ky: -0.509
                },
                "162": {
                    x: 283.25,
                    y: -314.05,
                    kx: 3.657,
                    ky: -0.515
                },
                "163": {
                    x: 297.05,
                    y: -282.25,
                    kx: 3.659,
                    ky: -0.517
                },
                "164": {
                    x: 314.85,
                    y: -235,
                    kx: 3.56,
                    ky: -0.418
                }
            })
            .addTimedChild(instance52, 77, 21)
            .addTimedChild(instance58, 98, 1)
            .addTimedChild(instance60, 99, 1)
            .addTimedChild(instance62, 100, 1)
            .addTimedChild(instance64, 101, 9, {
                "101": {
                    x: 2.8,
                    y: -45.85
                }
            })
            .addTimedChild(instance66, 110, 1, {
                "110": {
                    x: 2.8,
                    y: -45.85
                }
            })
            .addTimedChild(instance68, 111, 1, {
                "111": {
                    x: 2.8,
                    y: -45.85
                }
            })
            .addTimedChild(instance70, 112, 1)
            .addTimedChild(instance72, 113, 21)
            .addTimedChild(instance74, 134, 1)
            .addTimedChild(instance76, 135, 1)
            .addTimedChild(instance78, 136, 1, {
                "136": {
                    x: 1.05,
                    y: -188.15,
                    r: -0.204
                }
            })
            .addTimedChild(instance80, 137, 1)
            .addTimedChild(instance82, 138, 1)
            .addTimedChild(instance84, 139, 1)
            .addTimedChild(instance86, 140, 15, {
                "140": {
                    x: 1.1,
                    y: -192.7,
                    r: -0.191
                }
            })
            .addTimedChild(instance88, 155, 1)
            .addTimedChild(instance92, 156, 1, {
                "156": {
                    x: 5.15,
                    y: -195.25,
                    r: 0.241
                }
            })
            .addTimedChild(instance96, 157, 1)
            .addTimedChild(instance51, 77, 81, {
                "77": {
                    x: -91.95,
                    y: -373.95,
                    kx: 3.333,
                    ky: 2.95,
                    r: 0
                },
                "98": {
                    x: -102.531,
                    y: -381.572,
                    kx: 3.442,
                    ky: 2.841
                },
                "99": {
                    x: -135.703,
                    y: -405.409,
                    kx: 3.787,
                    ky: 2.496
                },
                "100": {
                    x: -168.893,
                    y: -429.357,
                    kx: 4.131,
                    ky: 2.152
                },
                "101": {
                    x: -179.3,
                    y: -436.9,
                    kx: 4.24,
                    ky: 2.043
                },
                "110": {
                    x: -178.8,
                    y: -433.1,
                    kx: 4.193,
                    ky: 2.09
                },
                "111": {
                    x: -164.95,
                    y: -423.4,
                    kx: 3.839,
                    ky: 2.444
                },
                "112": {
                    x: -226.3,
                    y: -435.15,
                    kx: 4.414,
                    ky: 1.869
                },
                "113": {
                    x: -232.15,
                    y: -434.85,
                    kx: 4.435,
                    ky: 1.848
                },
                "134": {
                    x: -234.1,
                    y: -429.1,
                    kx: 4.391,
                    ky: 1.892
                },
                "135": {
                    x: -218.2,
                    y: -335.4,
                    kx: 4.218,
                    ky: 2.065
                },
                "136": {
                    x: 225.3,
                    y: -395.5,
                    kx: 0,
                    ky: 0,
                    r: -2.047
                },
                "137": {
                    x: 216.75,
                    y: -431.7,
                    r: -2.216
                },
                "138": {
                    x: 200.1,
                    y: -459.8,
                    r: -2.335
                },
                "139": {
                    x: 193.85,
                    y: -475.65,
                    r: -2.407
                },
                "140": {
                    x: 187.55,
                    y: -480.7,
                    r: -2.431
                },
                "155": {
                    x: 272.15,
                    y: -402.4,
                    r: -2.21
                },
                "156": {
                    x: 300,
                    y: -376.35,
                    r: -2.085
                },
                "157": {
                    x: 332.75,
                    y: -389.8,
                    r: -2.021
                }
            })
            .addTimedChild(instance77, 136, 1, {
                "136": {
                    x: 62.45,
                    y: -194.9,
                    r: -0.143
                }
            })
            .addTimedChild(instance79, 137, 1)
            .addTimedChild(instance81, 138, 1)
            .addTimedChild(instance83, 139, 1)
            .addTimedChild(instance85, 140, 15)
            .addTimedChild(instance87, 155, 1)
            .addTimedChild(instance91, 156, 1, {
                "156": {
                    x: 43.3,
                    y: -180.05,
                    r: 0.432
                }
            })
            .addTimedChild(instance95, 157, 1)
            .addTimedChild(instance101, 158, 1)
            .addTimedChild(instance104, 159, 1)
            .addTimedChild(instance107, 160, 1, {
                "160": {
                    x: 123.45,
                    y: -251.4,
                    r: 0.534
                }
            })
            .addTimedChild(instance110, 161, 1)
            .addTimedChild(instance113, 162, 1)
            .addTimedChild(instance116, 163, 2, {
                "163": {
                    x: 396,
                    y: 25.3,
                    r: 0.089
                },
                "164": {
                    x: 382.95,
                    y: 80.75,
                    r: 0.188
                }
            })
            .addTimedChild(instance148, 175, 1, {
                "175": {
                    x: 363.8,
                    y: -110,
                    r: -0.28
                }
            })
            .addTimedChild(instance152, 176, 1, {
                "176": {
                    x: 363.8,
                    y: -110,
                    r: -0.28
                }
            })
            .addTimedChild(instance155, 177, 9, {
                "177": {
                    x: 362.6,
                    y: -111.4,
                    r: -0.292
                },
                "178": {
                    x: 363.8,
                    y: -110,
                    r: -0.28
                }
            })
            .addTimedChild(instance147, 175, 11, {
                "175": {
                    x: 323.25,
                    y: -246.55,
                    sx: 0.455,
                    sy: 0.453,
                    r: 1.006
                },
                "176": {
                    x: 427.2,
                    y: -279.9,
                    r: 1.437
                },
                "177": {
                    x: 432.25,
                    y: -274.95,
                    r: 1.494
                },
                "178": {
                    x: 435.45,
                    y: -272.65,
                    r: 1.506
                }
            })
            .addTimedChild(instance146, 175, 11, {
                "175": {
                    x: 361.25,
                    y: -185.55,
                    kx: 3.758,
                    ky: 2.526
                },
                "176": {
                    x: 423.85,
                    y: -209.05,
                    kx: 3.186,
                    ky: 3.097
                },
                "177": {
                    x: 424.8,
                    y: -203.6,
                    kx: 3.16,
                    ky: 3.123
                },
                "178": {
                    x: 427.15,
                    y: -201.4,
                    kx: 3.147,
                    ky: 3.136
                }
            })
            .addTimedChild(instance7, 0, 186, {
                "0": {
                    x: 59.05,
                    y: -301.75,
                    sx: 1,
                    sy: 1.008,
                    kx: -0.547,
                    ky: 0.419,
                    r: 0
                },
                "60": {
                    x: 58.95,
                    y: -301.7,
                    kx: -0.549,
                    ky: 0.421
                },
                "61": {
                    x: 58.8,
                    y: -301.35,
                    kx: -0.555,
                    ky: 0.427
                },
                "62": {
                    x: 58.5,
                    y: -300.8,
                    kx: -0.566,
                    ky: 0.438
                },
                "63": {
                    x: 58.15,
                    y: -299.95,
                    kx: -0.581,
                    ky: 0.453
                },
                "77": {
                    x: 18.05,
                    y: -308.3,
                    sy: 1,
                    kx: 0,
                    ky: 0
                },
                "112": {
                    x: 5.75,
                    y: -308.35,
                    r: -0.073
                },
                "113": {
                    x: 4.2,
                    y: -308.3,
                    r: -0.082
                },
                "136": {
                    x: 18.05,
                    y: -311.75,
                    r: 0
                },
                "155": {
                    x: 58.85,
                    y: -303.1,
                    r: 0.325
                },
                "156": {
                    x: 72.2,
                    y: -300,
                    r: 0.432
                },
                "157": {
                    x: 133.2,
                    y: -317.7,
                    kx: -0.621,
                    ky: 0.622,
                    r: 0
                },
                "158": {
                    x: 176.3,
                    y: -330.15,
                    kx: -0.754,
                    ky: 0.757
                },
                "159": {
                    x: 202.15,
                    y: -337.6,
                    kx: -0.834,
                    ky: 0.837
                },
                "160": {
                    x: 210.9,
                    y: -339.95,
                    kx: -0.861,
                    ky: 0.864
                },
                "161": {
                    x: 304.65,
                    y: -209.9,
                    sx: 0.991,
                    kx: -1.238,
                    ky: 1.239
                },
                "162": {
                    x: 360.25,
                    y: -132.7,
                    sx: 0.986,
                    kx: 0,
                    ky: 0,
                    r: 1.461
                },
                "163": {
                    x: 379.2,
                    y: -106.75,
                    sx: 0.985,
                    r: 1.536
                },
                "164": {
                    x: 379.25,
                    y: -52.25,
                    kx: 4.648,
                    ky: 1.635,
                    r: 0
                },
                "165": {
                    x: 382.95,
                    y: -40.3,
                    sx: 0.927,
                    sy: 1.033,
                    kx: 4.632,
                    ky: 1.609
                },
                "166": {
                    y: -42.6
                },
                "167": {
                    x: 383.7,
                    y: -39.75,
                    sx: 0.97,
                    sy: 1.008,
                    kx: 4.635,
                    ky: 1.638
                },
                "168": {
                    x: 383.95,
                    y: -39.05,
                    sx: 0.985,
                    sy: 1,
                    kx: 4.636,
                    ky: 1.648
                },
                "175": {
                    x: 384,
                    y: -38.6,
                    kx: 4.623,
                    ky: 1.66
                }
            })
            .addTimedChild(instance6, 0, 186, {
                "0": {
                    x: 66.25,
                    y: -395.6,
                    r: 0.283
                },
                "60": {
                    x: 66.6
                },
                "61": {
                    x: 67.5
                },
                "62": {
                    x: 69.2
                },
                "63": {
                    x: 71.65
                },
                "77": {
                    x: 23.75,
                    r: -0.039
                },
                "98": {
                    x: 24.396,
                    y: -395.649,
                    r: -0.025
                },
                "99": {
                    x: 26.187,
                    y: -395.641,
                    r: 0.018
                },
                "100": {
                    x: 28.048,
                    y: -395.611,
                    r: 0.06
                },
                "101": {
                    x: 28.65,
                    y: -395.6,
                    r: 0.074
                },
                "110": {
                    x: 27.15,
                    y: -397.35,
                    r: 0.062
                },
                "111": {
                    x: 20.85,
                    y: -381.05,
                    r: 0.044
                },
                "112": {
                    x: -5.55,
                    y: -404.5,
                    r: -0.235
                },
                "113": {
                    x: -9.8,
                    y: -405.55,
                    r: -0.273
                },
                "136": {
                    x: 19.2,
                    y: -398.45,
                    r: -0.004
                },
                "137": {
                    x: 20.45,
                    y: -400.4,
                    r: 0.002
                },
                "138": {
                    x: 21.35,
                    y: -401.75,
                    r: 0.006
                },
                "139": {
                    x: 21.75,
                    y: -402.55,
                    r: 0.008
                },
                "140": {
                    x: 22.05,
                    y: -402.75,
                    r: 0.009
                },
                "155": {
                    x: 88.25,
                    y: -383.25,
                    r: 0.406
                },
                "156": {
                    x: 110.15,
                    y: -376.75,
                    r: 0.537
                },
                "157": {
                    x: 183.85,
                    y: -384.2,
                    r: 0.633
                },
                "158": {
                    x: 235.9,
                    y: -389.55,
                    r: 0.701
                },
                "159": {
                    x: 267.1,
                    y: -392.65,
                    r: 0.742
                },
                "160": {
                    x: 277.6,
                    y: -393.75,
                    r: 0.755
                },
                "161": {
                    x: 380.8,
                    y: -247.95,
                    r: 0.941
                },
                "162": {
                    x: 442.1,
                    y: -161.35,
                    r: 1.051
                },
                "163": {
                    x: 462.7,
                    y: -131.9,
                    r: 1.088
                },
                "164": {
                    x: 464.85,
                    y: -69,
                    r: 1.187
                },
                "165": {
                    x: 474.5,
                    y: -50.7,
                    r: 1.39
                },
                "166": {
                    y: -53
                },
                "167": {
                    x: 473.4,
                    y: -54,
                    r: 1.332
                },
                "168": {
                    x: 473.05,
                    y: -54.4,
                    r: 1.313
                },
                "175": {
                    x: 472.7,
                    y: -55.45,
                    r: 1.248
                }
            })
            .addTimedChild(instance5, 0, 186, {
                "0": {
                    x: 42.45,
                    y: -303.6,
                    sx: 1,
                    sy: 1,
                    r: 0.178
                },
                "77": {
                    x: 19.95,
                    r: 0.018
                },
                "98": {
                    x: 19.988,
                    y: -303.686,
                    r: 0.023
                },
                "99": {
                    x: 19.996,
                    y: -303.687,
                    r: 0.039
                },
                "100": {
                    x: 19.899,
                    y: -303.615,
                    r: 0.056
                },
                "101": {
                    x: 19.95,
                    y: -303.6,
                    r: 0.061
                },
                "111": {
                    r: 0.009
                },
                "112": {
                    x: 6,
                    y: -309.55,
                    r: -0.112
                },
                "113": {
                    x: 4.3,
                    y: -310.15,
                    r: -0.134
                },
                "136": {
                    x: 18.35,
                    y: -306.9,
                    r: -0.013
                },
                "137": {
                    x: 19.1,
                    y: -308.75,
                    r: -0.007
                },
                "138": {
                    x: 19.5,
                    y: -310,
                    r: -0.003
                },
                "139": {
                    x: 19.8,
                    y: -310.8,
                    r: -0.001
                },
                "140": {
                    x: 19.95,
                    y: -311.2,
                    r: 0
                },
                "155": {
                    x: 59.15,
                    y: -299.1,
                    r: 0.325
                },
                "156": {
                    x: 71.95,
                    y: -295,
                    r: 0.432
                },
                "157": {
                    x: 132.1,
                    y: -312.85,
                    r: 0.622
                },
                "158": {
                    x: 174.6,
                    y: -325.5,
                    r: 0.757
                },
                "159": {
                    x: 200,
                    y: -332.95,
                    r: 0.837
                },
                "160": {
                    x: 208.65,
                    y: -335.45,
                    r: 0.864
                },
                "161": {
                    x: 300,
                    y: -208.3,
                    r: 1.195
                },
                "162": {
                    x: 354.1,
                    y: -132.85,
                    r: 1.392
                },
                "163": {
                    x: 372.25,
                    y: -107.45,
                    r: 1.458
                },
                "164": {
                    x: 372.4,
                    y: -53.6,
                    r: 1.557
                },
                "165": {
                    x: 379.55,
                    y: -39.35,
                    sx: 0.953,
                    sy: 1.003,
                    r: 1.569
                },
                "166": {
                    y: -41.65
                },
                "167": {
                    x: 377.7,
                    y: -40.75,
                    sx: 0.988,
                    sy: 1.001
                },
                "168": {
                    x: 377.1,
                    y: -40.5,
                    sx: 1,
                    sy: 1
                }
            })
            .addTimedChild(instance4, 0, 186, {
                "0": {
                    x: 76,
                    y: -335.95,
                    kx: 0,
                    ky: 0,
                    r: 0
                },
                "43": {
                    x: 75.2,
                    y: -335.4
                },
                "44": {
                    x: 74.45,
                    y: -330.9
                },
                "45": {
                    x: 74.2,
                    y: -330
                },
                "46": {
                    x: 73.95,
                    y: -329.25
                },
                "57": {
                    x: 71.65,
                    y: -323.8,
                    r: -0.021
                },
                "58": {
                    x: 70.3,
                    y: -320.55,
                    r: -0.034
                },
                "59": {
                    x: 69.8,
                    y: -319.45,
                    r: -0.038
                },
                "60": {
                    x: 70.5,
                    y: -326.05,
                    r: -0.016
                },
                "61": {
                    x: 72.55,
                    y: -345.75,
                    r: 0.049
                },
                "62": {
                    x: 76.1,
                    y: -378.7,
                    r: 0.158
                },
                "63": {
                    x: 81,
                    y: -425.2,
                    r: 0.312
                },
                "64": {
                    x: 82.55,
                    y: -428.25,
                    r: 0.329
                },
                "65": {
                    x: 83.35,
                    y: -419.05,
                    r: 0.312
                },
                "66": {
                    x: 84.1,
                    y: -416.95
                },
                "69": {
                    y: -416.9,
                    r: 0.222
                },
                "70": {
                    y: -416.95,
                    r: 0.209
                },
                "77": {
                    x: 14,
                    y: -425.55,
                    r: 0
                },
                "98": {
                    x: 14.954,
                    y: -425.616,
                    r: 0.015
                },
                "99": {
                    x: 17.847,
                    y: -425.529,
                    r: 0.065
                },
                "100": {
                    x: 20.741,
                    y: -425.492,
                    r: 0.114
                },
                "101": {
                    x: 21.65,
                    y: -425.5,
                    r: 0.13
                },
                "110": {
                    x: 19.75,
                    y: -427.15,
                    r: 0.084
                },
                "111": {
                    x: 12.9,
                    y: -410.7,
                    r: -0.209
                },
                "112": {
                    x: -53.45,
                    y: -444.4,
                    r: 0.288
                },
                "113": {
                    x: -62.7,
                    y: -446.65,
                    r: 0.308
                },
                "134": {
                    x: -55.95,
                    y: -436.15,
                    r: 0.173
                },
                "135": {
                    x: -16.45,
                    y: -415,
                    r: -0.398
                },
                "136": {
                    x: 23.6,
                    y: -396.25,
                    kx: 0.121,
                    ky: 3.021,
                    r: 0
                },
                "137": {
                    x: 22.55,
                    y: -406.7,
                    kx: 0.042,
                    ky: 3.1
                },
                "138": {
                    x: 24.8,
                    y: -430.7,
                    kx: 0.081,
                    ky: 3.06
                },
                "139": {
                    x: 25.5,
                    y: -434.7,
                    kx: 0.105,
                    ky: 3.037
                },
                "140": {
                    x: 25.9,
                    y: -436.1,
                    kx: 0.113,
                    ky: 3.029
                },
                "155": {
                    x: 106.2,
                    y: -407.35
                },
                "156": {
                    x: 125.9,
                    y: -406.4,
                    kx: 0,
                    ky: 0,
                    r: 0.219
                },
                "157": {
                    x: 203.35,
                    y: -412.35,
                    r: 0.342
                },
                "158": {
                    x: 258.05,
                    y: -416.55,
                    r: 0.428
                },
                "159": {
                    x: 290.75,
                    y: -419.1,
                    r: 0.48
                },
                "160": {
                    x: 301.8,
                    y: -419.95,
                    r: 0.498
                },
                "161": {
                    x: 404.15,
                    y: -274.75,
                    r: 0.808
                },
                "162": {
                    x: 464.85,
                    y: -188.55,
                    r: 0.991
                },
                "163": {
                    x: 485,
                    y: -159.6,
                    r: 1.053
                },
                "164": {
                    x: 489.8,
                    y: -94.4,
                    r: 1.152
                },
                "165": {
                    x: 497.25,
                    y: -76.5,
                    r: 1.49
                },
                "166": {
                    y: -78.8
                },
                "167": {
                    x: 495.4,
                    y: -79.7,
                    r: 1.393
                },
                "168": {
                    x: 494.9,
                    y: -79.9,
                    r: 1.36
                },
                "174": {
                    x: 491.05,
                    y: -78.9,
                    r: 1.309
                },
                "175": {
                    x: 488.8,
                    y: -73.9,
                    r: 1.263
                },
                "176": {
                    r: 1.256
                }
            })
            .addTimedChild(instance3, 0, 77, {
                "0": {
                    x: 43.05,
                    y: -351.25,
                    r: 0.213
                },
                "57": {
                    x: 43.4,
                    y: -353.2
                },
                "58": {
                    x: 44.45,
                    y: -358.85
                },
                "59": {
                    x: 46.1,
                    y: -368.4
                },
                "60": {
                    x: 41.5,
                    y: -340.95,
                    r: 0.235
                },
                "61": {
                    x: 37.85,
                    y: -318.7,
                    r: 0.252
                },
                "62": {
                    x: 34.95,
                    y: -301.35,
                    r: 0.266
                },
                "63": {
                    x: 32.9,
                    y: -288.95,
                    r: 0.275
                },
                "64": {
                    x: 31.6,
                    y: -281.5,
                    r: 0.281
                },
                "65": {
                    x: 31.35,
                    y: -279,
                    r: 0.283
                }
            })
            .addTimedChild(instance2, 0, 77, {
                "0": {
                    x: -67.65,
                    y: -407.95,
                    kx: -1.389,
                    ky: -1.752
                },
                "57": {
                    x: -67.4,
                    y: -408.85
                },
                "58": {
                    x: -66.85,
                    y: -411.45
                },
                "59": {
                    x: -66.1,
                    y: -415.7
                },
                "60": {
                    x: -68.8,
                    y: -393.5,
                    kx: -1.411,
                    ky: -1.731
                },
                "61": {
                    x: -71.05,
                    y: -375.4,
                    kx: -1.428,
                    ky: -1.714
                },
                "62": {
                    x: -72.8,
                    y: -361.45,
                    kx: -1.442,
                    ky: -1.7
                },
                "63": {
                    x: -74.05,
                    y: -351.35,
                    kx: -1.451,
                    ky: -1.69
                },
                "64": {
                    x: -74.7,
                    y: -345.3,
                    kx: -1.457,
                    ky: -1.685
                },
                "65": {
                    x: -74.95,
                    y: -343.25,
                    kx: -1.459,
                    ky: -1.683
                }
            })
            .addTimedChild(instance1, 0, 77, {
                "0": {
                    x: 236,
                    y: -344.65,
                    kx: 4.565,
                    ky: 1.718
                },
                "57": {
                    x: 236.2,
                    y: -345.65,
                    kx: 4.562,
                    ky: 1.721
                },
                "58": {
                    x: 236.75,
                    y: -348.55,
                    kx: 4.554,
                    ky: 1.73
                },
                "59": {
                    x: 237.5,
                    y: -353.4,
                    kx: 4.539,
                    ky: 1.744
                },
                "60": {
                    x: 232.9,
                    y: -324.4,
                    kx: 4.507,
                    ky: 1.776
                },
                "61": {
                    x: 229.15,
                    y: -300.95,
                    kx: 4.481,
                    ky: 1.802
                },
                "62": {
                    x: 226.25,
                    y: -282.75,
                    kx: 4.461,
                    ky: 1.822
                },
                "63": {
                    x: 224.15,
                    y: -269.7,
                    kx: 4.446,
                    ky: 1.837
                },
                "64": {
                    x: 222.85,
                    y: -261.9,
                    kx: 4.438,
                    ky: 1.845
                },
                "65": {
                    x: 222.35,
                    y: -259.25,
                    kx: 4.435,
                    ky: 1.848
                }
            })
            .addTimedChild(instance50, 77, 20, {
                "77": {
                    x: -177.5,
                    y: 593.5,
                    r: 0.223
                }
            })
            .addTimedChild(instance56, 97, 1)
            .addTimedChild(instance57, 98, 1)
            .addTimedChild(instance59, 99, 1)
            .addTimedChild(instance61, 100, 1)
            .addTimedChild(instance63, 101, 9, {
                "101": {
                    x: -177.5,
                    y: 593.5,
                    r: 0.223
                }
            })
            .addTimedChild(instance65, 110, 1, {
                "110": {
                    x: -177.5,
                    y: 593.5,
                    r: 0.223
                }
            })
            .addTimedChild(instance67, 111, 1, {
                "111": {
                    x: -177.5,
                    y: 593.5,
                    r: 0.223
                }
            })
            .addTimedChild(instance69, 112, 1)
            .addTimedChild(instance71, 113, 21, {
                "113": {
                    x: -32.7,
                    y: 606.65,
                    r: 0.028
                }
            })
            .addTimedChild(instance73, 134, 1)
            .addTimedChild(instance75, 135, 1)
            .addTimedChild(instance100, 158, 7, {
                "158": {
                    x: 277.05,
                    y: -542.3,
                    r: -1.899
                },
                "159": {
                    x: 236.65,
                    y: -548.55,
                    r: -2.248
                },
                "160": {
                    x: 225.3,
                    y: -552.6,
                    r: -2.347
                },
                "161": {
                    x: 322.95,
                    y: -400.5,
                    r: -2.339
                },
                "162": {
                    x: 391.85,
                    y: -317.5,
                    r: -2.268
                },
                "163": {
                    x: 351.5,
                    y: -258,
                    r: -2.53
                },
                "164": {
                    x: 296.6,
                    y: -155.4,
                    r: -2.936
                }
            })
            .addTimedChild(instance99, 158, 7, {
                "158": {
                    x: -724.85,
                    y: -220.4,
                    r: 1.396
                },
                "159": {
                    x: -594.9,
                    y: 96.3,
                    r: 1.047
                },
                "160": {
                    x: -538.45,
                    y: 171.3,
                    r: 0.948
                },
                "161": {
                    x: -445.95,
                    y: 317.8,
                    r: 0.956
                },
                "162": {
                    x: -426.65,
                    y: 343.65,
                    r: 1.027
                },
                "163": {
                    x: -267.8,
                    y: 592.9,
                    r: 0.765
                },
                "164": {
                    x: 63.95,
                    y: 870.7,
                    r: 0.359
                }
            })
            .addTimedChild(instance126, 165, 2, {
                "165": {
                    x: 188.85,
                    y: 940.05,
                    r: 0.223
                },
                "166": {
                    y: 937.75
                }
            })
            .addTimedChild(instance133, 167, 1)
            .addTimedChild(instance137, 168, 6, {
                "168": {
                    x: 188.85,
                    y: 938.3,
                    r: 0.223
                }
            })
            .addTimedChild(instance141, 174, 1, {
                "174": {
                    x: 188.85,
                    y: 938.3,
                    r: 0.223
                }
            })
            .addTimedChild(instance145, 175, 11, {
                "175": {
                    x: 313.65,
                    y: -250.85,
                    kx: 4.011,
                    ky: -0.869
                },
                "176": {
                    x: 428.3,
                    y: -287,
                    kx: 3.508,
                    ky: -0.366
                },
                "177": {
                    x: 433.75,
                    y: -281.95,
                    kx: 3.451,
                    ky: -0.309
                },
                "178": {
                    x: 437.05,
                    y: -279.65,
                    kx: 3.439,
                    ky: -0.297
                }
            })
            .addTimedChild(instance144, 175, 1, {
                "175": {
                    x: 94.9,
                    y: -21.4
                }
            })
            .addTimedChild(instance151, 176, 10, {
                "176": {
                    x: 92.5,
                    y: -31.95,
                    r: 0
                },
                "177": {
                    x: 94.8,
                    y: -19.5,
                    r: -0.012
                },
                "178": {
                    x: 94.9,
                    y: -21.4,
                    r: 0
                }
            })
            .addTimedChild(instance123, 164, 22, {
                "164": {
                    x: 49.05,
                    y: -223.05,
                    sx: 1.197,
                    sy: 1.197,
                    r: 0
                },
                "165": {
                    x: 55.25,
                    y: -236.5,
                    r: 0.021
                },
                "166": {
                    x: 53.2,
                    y: -231.9,
                    r: 0.014
                },
                "167": {
                    x: 51.1,
                    y: -227.4,
                    r: 0.007
                },
                "168": {
                    x: 49.05,
                    y: -223.05,
                    r: 0
                }
            })
            .addTimedChild(instance122, 164, 22, {
                "164": {
                    x: 618.1,
                    y: -54.5,
                    kx: 3.816,
                    ky: 2.467,
                    r: 0
                },
                "165": {
                    x: 605.1,
                    y: 3.65,
                    kx: 3.478,
                    ky: 2.805
                },
                "166": {
                    x: 629.65,
                    y: 80.1,
                    kx: 4.485,
                    ky: 1.798
                },
                "167": {
                    x: 645.2,
                    y: 71.9,
                    kx: 0,
                    ky: 0,
                    r: 1.246
                },
                "168": {
                    x: 647.25,
                    y: 68.65,
                    r: 1.321
                },
                "169": {
                    r: 1.36
                },
                "174": {
                    x: 650.85,
                    y: 61.6,
                    r: 1.309
                },
                "175": {
                    x: 654.8,
                    y: 59.2,
                    r: 1.263
                },
                "176": {
                    x: 655.85,
                    y: 57.9,
                    r: 1.256
                }
            })
            .addTimedChild(instance121, 164, 22, {
                "164": {
                    x: 641.4,
                    y: -45.1,
                    kx: 4.321,
                    ky: 1.962,
                    r: 0
                },
                "165": {
                    x: 623.95,
                    y: 20.2,
                    kx: 3.983,
                    ky: 2.3
                },
                "166": {
                    x: 654.15,
                    y: 86.05,
                    kx: 4.516,
                    ky: 1.767
                },
                "167": {
                    x: 669,
                    y: 80.25,
                    kx: 4.413,
                    ky: 1.87
                },
                "168": {
                    x: 671.7,
                    y: 63.2,
                    kx: 0,
                    ky: 0,
                    r: 1.36
                },
                "174": {
                    x: 675,
                    y: 54.9,
                    r: 1.309
                },
                "175": {
                    x: 678.6,
                    y: 51.4,
                    r: 1.263
                },
                "176": {
                    x: 679.6,
                    y: 49.9,
                    r: 1.256
                }
            })
            .addTimedChild(instance120, 164, 2, {
                "164": {
                    x: 453.8,
                    y: -180.15,
                    r: 1.152
                },
                "165": {
                    x: 491.75,
                    y: -169.3,
                    r: 1.49
                }
            })
            .addTimedChild(instance129, 166, 1, {
                "166": {
                    x: 491.75,
                    y: -171.6,
                    r: 1.49
                }
            })
            .addTimedChild(instance132, 167, 1, {
                "167": {
                    x: 480.9,
                    y: -171.55,
                    r: 1.393
                }
            })
            .addTimedChild(instance136, 168, 1, {
                "168": {
                    x: 477.45,
                    y: -171.25,
                    r: 1.36
                }
            })
            .addTimedChild(instance140, 169, 17, {
                "169": {
                    x: 477.45,
                    y: -171.25,
                    r: 1.36
                },
                "174": {
                    x: 468.95,
                    y: -169.2,
                    r: 1.309
                },
                "175": {
                    x: 462.6,
                    y: -163.1,
                    r: 1.263
                },
                "176": {
                    x: 461.9,
                    y: -162.9,
                    r: 1.256
                }
            })
            .addTimedChild(instance119, 164, 22, {
                "164": {
                    x: 49.05,
                    y: -223.05,
                    sx: 1.197,
                    sy: 1.197,
                    r: 0
                },
                "165": {
                    x: 39.25,
                    y: -219.8,
                    r: -0.03
                },
                "166": {
                    x: 42.5,
                    y: -220.85,
                    r: -0.02
                },
                "167": {
                    x: 45.65,
                    y: -221.95,
                    r: -0.01
                },
                "168": {
                    x: 49.05,
                    y: -223.05,
                    r: 0
                }
            });
    });

    var Graphic299 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 186, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[324]);
        this.addTimedChild(instance1);
    });

    var Graphic117 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 22, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[67]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[66]);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic118 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 22, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[69])
            .setTransform(-657.05, -461.95);
        this.addTimedChild(instance1);
    });

    var Graphic119 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 22, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[70]);
        this.addTimedChild(instance1);
    });

    var Graphic120 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 22, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[76]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[77]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[78]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[79]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[75]);
        this.addTimedChild(instance2, 0, 2)
            .addTimedChild(instance3, 2, 1)
            .addTimedChild(instance4, 3, 1)
            .addTimedChild(instance5, 4, 18)
            .addTimedChild(instance1);
    });

    var Graphic116 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 7, loop: false });
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[115])
            .setTransform(-0.6, 2.45, 1, 1, 0, 0.484, 2.657);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[114])
            .setTransform(-4.3, 1.95, 1, 1, 0, 0.618, 2.523);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[113])
            .setTransform(4.25, 33.75, 1.12, 1.056, -0.238);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[112])
            .setTransform(5.75, 34.95, 1, 1, 0.01);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[111])
            .setTransform(6.05, 34.9, 1, 1, 0.257);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[110])
            .setTransform(1.05, 40.25, 1, 1, 0.344);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[109])
            .setTransform(34.1, -985.65, 1, 1, 0.684);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[102])
            .setTransform(-464.95, -886.85, 1, 1, 0.178);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[101])
            .setTransform(-538.25, -842.15, 1, 1, 0.091);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[100])
            .setTransform(-668.55, -792.3, 1.087);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[108])
            .setTransform(-13.45, 17.25, 1, 1, -0.388);
        this.addTimedChild(instance11)
            .addTimedChild(instance10)
            .addTimedChild(instance9)
            .addTimedChild(instance8)
            .addTimedChild(instance7)
            .addTimedChild(instance6)
            .addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic121 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 11, loop: false });
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[123]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[122]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[121]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[120]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[119]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[118]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[117])
            .setTransform(-0.25, -0.5);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[116]);
        this.addTimedChild(instance8)
            .addTimedChild(instance7)
            .addTimedChild(instance6)
            .addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic94 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 31, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[69])
            .setTransform(-657.05, -461.95);
        this.addTimedChild(instance1);
    });

    var Graphic95 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 31, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[70]);
        this.addTimedChild(instance1);
    });

    var Graphic81 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[147]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[146])
            .setTransform(-585.65, -483.25);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic82 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[148]);
        this.addTimedChild(instance1);
    });

    var Graphic83 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[149])
            .setTransform(-466.8, -453.85);
        this.addTimedChild(instance1);
    });

    var Graphic84 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[150])
            .setTransform(-504.35, -453.65);
        this.addTimedChild(instance1);
    });

    var Graphic92 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 24, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[151])
            .setTransform(-458.45, -480.9, 0.972);
        this.addTimedChild(instance1);
    });

    var Graphic96 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 11, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[151])
            .setTransform(-458.45, -480.9, 0.972);
        this.addTimedChild(instance1);
    });

    var Graphic93 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 24, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[151])
            .setTransform(-458.45, -480.9, 0.972);
        this.addTimedChild(instance1);
    });

    var Graphic97 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 11, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[151])
            .setTransform(-458.45, -480.9, 0.972);
        this.addTimedChild(instance1);
    });

    var Graphic85 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[167]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[166]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[165]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[164]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[163]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[162]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[157]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[156]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[155]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[154]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[153]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[152]);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[167]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[166]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[165]);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[164]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[163]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[162]);
        var instance24 = new Graphics()
            .drawCommands(shapes.s01[157])
            .setTransform(-386.35, -557.05, 1, 1, 0.174);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[156])
            .setTransform(-385.25, -559.2, 1, 1, 0.174);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[155])
            .setTransform(-486.6, -478.35);
        var instance21 = new Graphics()
            .drawCommands(shapes.s01[154])
            .setTransform(-455.15, -505.5, 1, 1, 0.06);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[153])
            .setTransform(-588.15, -407.35, 1.216, 0.851);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[152])
            .setTransform(-596.45, -406.55, 1.239, 0.851);
        this.addTimedChild(instance6, 0, 3, {
                "0": {
                    x: -2.45,
                    y: 1.7,
                    sx: 1.289,
                    sy: 0.827
                }
            })
            .addTimedChild(instance5, 0, 3, {
                "0": {
                    x: -0.05,
                    y: 1.8,
                    sx: 1.289,
                    sy: 0.827
                }
            })
            .addTimedChild(instance4, 0, 3, {
                "0": {
                    x: 6.85,
                    y: 1.9,
                    sx: 0.95,
                    sy: 0.95
                }
            })
            .addTimedChild(instance3, 0, 3, {
                "0": {
                    x: 1.1,
                    sx: 0.95,
                    sy: 0.95
                }
            })
            .addTimedChild(instance2, 0, 3, {
                "0": {
                    x: -9.25,
                    y: -1.15,
                    sx: 0.95,
                    sy: 0.95
                }
            })
            .addTimedChild(instance1, 0, 3, {
                "0": {
                    x: -0.25,
                    y: -0.15,
                    sx: 0.95,
                    sy: 0.95
                }
            })
            .addTimedChild(instance12, 3, 24, {
                "3": {
                    x: -386.35,
                    y: -557.05,
                    r: 0.174
                }
            })
            .addTimedChild(instance11, 3, 24, {
                "3": {
                    x: -385.25,
                    y: -559.2,
                    r: 0.174
                }
            })
            .addTimedChild(instance10, 3, 24, {
                "3": {
                    x: -486.6,
                    y: -478.35
                }
            })
            .addTimedChild(instance9, 3, 24, {
                "3": {
                    x: -455.15,
                    y: -505.5,
                    r: 0.06
                }
            })
            .addTimedChild(instance8, 3, 24, {
                "3": {
                    x: -588.15,
                    y: -407.35,
                    sx: 1.216,
                    sy: 0.851
                }
            })
            .addTimedChild(instance7, 3, 24, {
                "3": {
                    x: -596.45,
                    y: -406.55,
                    sx: 1.239,
                    sy: 0.851
                }
            })
            .addTimedChild(instance18, 27, 12, {
                "27": {
                    x: -2.45,
                    y: 1.7,
                    sx: 1.289,
                    sy: 0.827
                }
            })
            .addTimedChild(instance17, 27, 12, {
                "27": {
                    x: -0.05,
                    y: 1.8,
                    sx: 1.289,
                    sy: 0.827
                }
            })
            .addTimedChild(instance16, 27, 12, {
                "27": {
                    x: 6.85,
                    y: 1.9,
                    sx: 0.95,
                    sy: 0.95
                }
            })
            .addTimedChild(instance15, 27, 12, {
                "27": {
                    x: 1.1,
                    sx: 0.95,
                    sy: 0.95
                }
            })
            .addTimedChild(instance14, 27, 12, {
                "27": {
                    x: -9.25,
                    y: -1.15,
                    sx: 0.95,
                    sy: 0.95
                }
            })
            .addTimedChild(instance13, 27, 12, {
                "27": {
                    x: -0.25,
                    y: -0.15,
                    sx: 0.95,
                    sy: 0.95
                }
            })
            .addTimedChild(instance24, 39, 11)
            .addTimedChild(instance23, 39, 11)
            .addTimedChild(instance22, 39, 11)
            .addTimedChild(instance21, 39, 11)
            .addTimedChild(instance20, 39, 11)
            .addTimedChild(instance19, 39, 11);
    });

    var Graphic80 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[24]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[172]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[36]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[32]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[175]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[40]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[35]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[174]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[39]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[34]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[175]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[40]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[35]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[173]);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[37]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[33]);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[29]);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[27]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[26]);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[172]);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[36]);
        var instance21 = new Graphics()
            .drawCommands(shapes.s01[32]);
        var instance27 = new Graphics()
            .drawCommands(shapes.s01[29]);
        var instance26 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance25 = new Graphics()
            .drawCommands(shapes.s01[27]);
        var instance24 = new Graphics()
            .drawCommands(shapes.s01[26]);
        var instance28 = new Graphics()
            .drawCommands(shapes.s01[170]);
        var instance32 = new Graphics()
            .drawCommands(shapes.s01[29]);
        var instance31 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance30 = new Graphics()
            .drawCommands(shapes.s01[27]);
        var instance29 = new Graphics()
            .drawCommands(shapes.s01[26]);
        var instance35 = new Graphics()
            .drawCommands(shapes.s01[175]);
        var instance34 = new Graphics()
            .drawCommands(shapes.s01[40]);
        var instance33 = new Graphics()
            .drawCommands(shapes.s01[35]);
        var instance38 = new Graphics()
            .drawCommands(shapes.s01[172]);
        var instance37 = new Graphics()
            .drawCommands(shapes.s01[36]);
        var instance36 = new Graphics()
            .drawCommands(shapes.s01[32]);
        var instance42 = new Graphics()
            .drawCommands(shapes.s01[29]);
        var instance41 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance40 = new Graphics()
            .drawCommands(shapes.s01[27]);
        var instance39 = new Graphics()
            .drawCommands(shapes.s01[26]);
        var instance45 = new Graphics()
            .drawCommands(shapes.s01[175]);
        var instance44 = new Graphics()
            .drawCommands(shapes.s01[40]);
        var instance43 = new Graphics()
            .drawCommands(shapes.s01[35]);
        var instance48 = new Graphics()
            .drawCommands(shapes.s01[174]);
        var instance47 = new Graphics()
            .drawCommands(shapes.s01[39]);
        var instance46 = new Graphics()
            .drawCommands(shapes.s01[34]);
        var instance52 = new Graphics()
            .drawCommands(shapes.s01[29]);
        var instance51 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance50 = new Graphics()
            .drawCommands(shapes.s01[27]);
        var instance49 = new Graphics()
            .drawCommands(shapes.s01[26]);
        var instance55 = new Graphics()
            .drawCommands(shapes.s01[175]);
        var instance54 = new Graphics()
            .drawCommands(shapes.s01[40]);
        var instance53 = new Graphics()
            .drawCommands(shapes.s01[35]);
        var instance59 = new Graphics()
            .drawCommands(shapes.s01[176]);
        var instance58 = new Graphics()
            .drawCommands(shapes.s01[41]);
        var instance57 = new Graphics()
            .drawCommands(shapes.s01[38]);
        var instance56 = new Graphics()
            .drawCommands(shapes.s01[171]);
        var instance60 = new Graphics()
            .drawCommands(shapes.s01[24]);
        var instance61 = new Graphics()
            .drawCommands(shapes.s01[168]);
        var instance62 = new Graphics()
            .drawCommands(shapes.s01[169]);
        var instance63 = new Graphics()
            .drawCommands(shapes.s01[168]);
        var instance66 = new Graphics()
            .drawCommands(shapes.s01[172]);
        var instance65 = new Graphics()
            .drawCommands(shapes.s01[36]);
        var instance64 = new Graphics()
            .drawCommands(shapes.s01[32]);
        this.addTimedChild(instance1, 0, 3, {
                "0": {
                    y: 3.5,
                    kx: 3.142
                }
            })
            .addTimedChild(instance4, 3, 1)
            .addTimedChild(instance3, 3, 1)
            .addTimedChild(instance2, 3, 1)
            .addTimedChild(instance7, 4, 1)
            .addTimedChild(instance6, 4, 1)
            .addTimedChild(instance5, 4, 1)
            .addTimedChild(instance10, 5, 4)
            .addTimedChild(instance9, 5, 4)
            .addTimedChild(instance8, 5, 4)
            .addTimedChild(instance13, 9, 1)
            .addTimedChild(instance12, 9, 1)
            .addTimedChild(instance11, 9, 1)
            .addTimedChild(instance16, 10, 15)
            .addTimedChild(instance15, 10, 15)
            .addTimedChild(instance14, 10, 15)
            .addTimedChild(instance20, 25, 5, {
                "25": {
                    x: -478.4,
                    y: 548.95,
                    kx: 3.142
                }
            })
            .addTimedChild(instance19, 25, 5, {
                "25": {
                    x: 1.25,
                    y: 20.6,
                    kx: 3.142
                }
            })
            .addTimedChild(instance18, 25, 5, {
                "25": {
                    x: 0.75,
                    y: 1
                }
            })
            .addTimedChild(instance17, 25, 5, {
                "25": {
                    x: -478.4,
                    y: 548.95,
                    kx: 3.142
                }
            })
            .addTimedChild(instance23, 30, 1)
            .addTimedChild(instance22, 30, 1)
            .addTimedChild(instance21, 30, 1)
            .addTimedChild(instance27, 31, 1, {
                "31": {
                    x: -478.4,
                    y: 548.95,
                    kx: 3.142
                }
            })
            .addTimedChild(instance26, 31, 1, {
                "31": {
                    x: 1.25,
                    y: 20.6,
                    kx: 3.142
                }
            })
            .addTimedChild(instance25, 31, 1, {
                "31": {
                    x: 0.75,
                    y: 1
                }
            })
            .addTimedChild(instance24, 31, 1, {
                "31": {
                    x: -478.4,
                    y: 548.95,
                    kx: 3.142
                }
            })
            .addTimedChild(instance28, 32, 1)
            .addTimedChild(instance32, 33, 1, {
                "33": {
                    x: -478.4,
                    y: 548.95,
                    kx: 3.142
                }
            })
            .addTimedChild(instance31, 33, 1, {
                "33": {
                    x: 1.25,
                    y: 20.6,
                    kx: 3.142
                }
            })
            .addTimedChild(instance30, 33, 1, {
                "33": {
                    x: 0.75,
                    y: 1
                }
            })
            .addTimedChild(instance29, 33, 1, {
                "33": {
                    x: -478.4,
                    y: 548.95,
                    kx: 3.142
                }
            })
            .addTimedChild(instance35, 34, 1)
            .addTimedChild(instance34, 34, 1)
            .addTimedChild(instance33, 34, 1)
            .addTimedChild(instance38, 35, 1)
            .addTimedChild(instance37, 35, 1)
            .addTimedChild(instance36, 35, 1)
            .addTimedChild(instance42, 36, 2, {
                "36": {
                    x: -478.4,
                    y: 548.95,
                    kx: 3.142
                }
            })
            .addTimedChild(instance41, 36, 2, {
                "36": {
                    x: 1.25,
                    y: 20.6,
                    kx: 3.142
                }
            })
            .addTimedChild(instance40, 36, 2, {
                "36": {
                    x: 0.75,
                    y: 1
                }
            })
            .addTimedChild(instance39, 36, 2, {
                "36": {
                    x: -478.4,
                    y: 548.95,
                    kx: 3.142
                }
            })
            .addTimedChild(instance45, 38, 1)
            .addTimedChild(instance44, 38, 1)
            .addTimedChild(instance43, 38, 1)
            .addTimedChild(instance48, 39, 1)
            .addTimedChild(instance47, 39, 1)
            .addTimedChild(instance46, 39, 1)
            .addTimedChild(instance52, 40, 1, {
                "40": {
                    x: -478.4,
                    y: 548.95,
                    kx: 3.142
                }
            })
            .addTimedChild(instance51, 40, 1, {
                "40": {
                    x: 1.25,
                    y: 20.6,
                    kx: 3.142
                }
            })
            .addTimedChild(instance50, 40, 1, {
                "40": {
                    x: 0.75,
                    y: 1
                }
            })
            .addTimedChild(instance49, 40, 1, {
                "40": {
                    x: -478.4,
                    y: 548.95,
                    kx: 3.142
                }
            })
            .addTimedChild(instance55, 41, 1)
            .addTimedChild(instance54, 41, 1)
            .addTimedChild(instance53, 41, 1)
            .addTimedChild(instance59, 42, 1)
            .addTimedChild(instance58, 42, 1)
            .addTimedChild(instance57, 42, 1)
            .addTimedChild(instance56, 42, 1)
            .addTimedChild(instance60, 43, 2, {
                "43": {
                    y: 3.5,
                    kx: 3.142
                }
            })
            .addTimedChild(instance61, 45, 1)
            .addTimedChild(instance62, 46, 2)
            .addTimedChild(instance63, 48, 1)
            .addTimedChild(instance66, 49, 1)
            .addTimedChild(instance65, 49, 1)
            .addTimedChild(instance64, 49, 1);
    });

    var Graphic86 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance1 = new Graphic80(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 50, {
            "0": {
                x: -6.95,
                y: -1.55,
                sx: 1,
                sy: 1
            },
            "3": {
                x: -7,
                y: -1.65,
                sx: 0.952,
                sy: 0.861
            },
            "25": {
                x: -6.45,
                y: -1.7,
                sx: 1,
                sy: 1
            },
            "43": {
                y: 1.3
            },
            "44": {
                y: 0.85,
                sx: 0.944,
                sy: 1.34
            },
            "45": {
                y: -1.7,
                sx: 1,
                sy: 1
            }
        });
    });

    var Graphic87 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[178]);
        this.addTimedChild(instance1);
    });

    var Graphic88 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[180])
            .setTransform(-368.7, -483.9, 0.959);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[179])
            .setTransform(-383.8, -485.3);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic89 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 19, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[70]);
        this.addTimedChild(instance1);
    });

    var Graphic90 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 19, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[69])
            .setTransform(-657.05, -461.95);
        this.addTimedChild(instance1);
    });

    var Graphic91 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[184])
            .setTransform(-497.15, -407.2);
        this.addTimedChild(instance1);
    });

    var Graphic108 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance12 = new Graphic91(MovieClip.SYNCHED);
        var instance11 = new Graphic90(MovieClip.SYNCHED);
        var instance10 = new Graphic89(MovieClip.SYNCHED);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[181]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[182]);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[183]);
        var instance8 = new Graphic88(MovieClip.SYNCHED)
            .setTransform(-85.25, -120.15);
        var instance7 = new Graphic87(MovieClip.SYNCHED)
            .setTransform(4.15, -0.3);
        var instance6 = new Graphic86(MovieClip.SYNCHED)
            .setTransform(-18.05, -75.4);
        var instance5 = new Graphic85(MovieClip.SYNCHED);
        var instance14 = new Graphic93(MovieClip.SYNCHED);
        var instance13 = new Graphic92(MovieClip.SYNCHED);
        var instance28 = new Graphic97(MovieClip.SYNCHED);
        var instance27 = new Graphic96(MovieClip.SYNCHED);
        var instance4 = new Graphic84(MovieClip.SYNCHED);
        var instance3 = new Graphic83(MovieClip.SYNCHED);
        var instance2 = new Graphic82(MovieClip.SYNCHED)
            .setTransform(-24.25, -100.3);
        var instance1 = new Graphic81(MovieClip.SYNCHED);
        var instance16 = new Graphic95(MovieClip.SYNCHED);
        var instance15 = new Graphic94(MovieClip.SYNCHED);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[137]);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[138]);
        var instance21 = new Graphics()
            .drawCommands(shapes.s01[139]);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[140]);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[141]);
        var instance24 = new Graphics()
            .drawCommands(shapes.s01[142]);
        var instance25 = new Graphics()
            .drawCommands(shapes.s01[143]);
        var instance26 = new Graphics()
            .drawCommands(shapes.s01[144]);
        var instance29 = new Graphics()
            .drawCommands(shapes.s01[145]);
        this.addTimedChild(instance12, 0, 50, {
                "0": {
                    x: 17,
                    y: -197.8
                }
            })
            .addTimedChild(instance11, 0, 19, {
                "0": {
                    x: 176.9,
                    y: -143.05
                }
            })
            .addTimedChild(instance10, 0, 19, {
                "0": {
                    x: 177.15,
                    y: -118
                }
            })
            .addTimedChild(instance9, 0, 19)
            .addTimedChild(instance17, 19, 1)
            .addTimedChild(instance18, 20, 1)
            .addTimedChild(instance8)
            .addTimedChild(instance7)
            .addTimedChild(instance6)
            .addTimedChild(instance5, 0, 50, {
                "0": {
                    x: -22.5,
                    y: -127.5
                }
            })
            .addTimedChild(instance14, 3, 24, {
                "3": {
                    x: 12.2,
                    y: -128.4
                },
                "4": {
                    x: 3.65,
                    y: -133.1
                },
                "5": {
                    x: -0.55,
                    y: -133.25
                },
                "22": {
                    x: 2.9,
                    y: -133.55
                }
            })
            .addTimedChild(instance13, 3, 24, {
                "3": {
                    x: -28.25,
                    y: -127.55
                },
                "4": {
                    x: -36.8,
                    y: -132.25
                },
                "5": {
                    x: -41,
                    y: -132.4
                },
                "22": {
                    x: -37.55,
                    y: -132.7
                }
            })
            .addTimedChild(instance28, 39, 11, {
                "39": {
                    x: -12.4,
                    y: -122.45
                },
                "45": {
                    x: -11.95,
                    y: -124.05
                },
                "46": {
                    x: -10.8,
                    y: -128
                },
                "47": {
                    x: -10.35,
                    y: -129.6
                }
            })
            .addTimedChild(instance27, 39, 11, {
                "39": {
                    x: -52.85,
                    y: -121.6
                },
                "45": {
                    x: -52.4,
                    y: -123.2
                },
                "46": {
                    x: -51.25,
                    y: -127.15
                },
                "47": {
                    x: -50.8,
                    y: -128.75
                }
            })
            .addTimedChild(instance4, 0, 50, {
                "0": {
                    x: -5.1,
                    y: -139.65,
                    r: -0.262
                },
                "2": {
                    x: -5.2,
                    y: -140.25
                },
                "3": {
                    x: -2.55,
                    y: -148.4
                },
                "4": {
                    x: -2.25,
                    y: -151.348
                },
                "5": {
                    x: -2.15,
                    y: -152.3
                },
                "6": {
                    x: -2.2,
                    y: -151.548
                },
                "7": {
                    y: -151.048
                },
                "8": {
                    x: -2.15,
                    y: -150.85
                },
                "19": {
                    x: -2.55,
                    y: -148.4
                },
                "26": {
                    x: -2.6,
                    y: -147.7
                },
                "27": {
                    x: 0.55,
                    y: -140.3,
                    r: 0.039
                },
                "28": {
                    x: 0.6,
                    y: -139.7
                },
                "38": {
                    x: 0.55,
                    y: -140.25
                },
                "39": {
                    x: -3.5,
                    y: -144.3,
                    r: -0.214
                },
                "40": {
                    x: -3.65,
                    y: -145,
                    r: -0.262
                },
                "45": {
                    x: -3.6,
                    y: -145.648
                },
                "46": {
                    x: -3.5,
                    y: -147.048
                },
                "47": {
                    x: -3.45,
                    y: -147.6
                }
            })
            .addTimedChild(instance3, 0, 50, {
                "0": {
                    x: -38,
                    y: -139.85,
                    r: 0.487
                },
                "2": {
                    x: -38.1,
                    y: -140.45
                },
                "3": {
                    x: -35.45,
                    y: -148.6
                },
                "4": {
                    x: -35.199,
                    y: -151.595
                },
                "5": {
                    x: -35.05,
                    y: -152.5
                },
                "6": {
                    x: -35.099,
                    y: -151.795
                },
                "7": {
                    y: -151.295
                },
                "8": {
                    x: -35.05,
                    y: -151.05
                },
                "19": {
                    x: -35.45,
                    y: -148.6
                },
                "26": {
                    x: -35.5,
                    y: -147.9
                },
                "27": {
                    x: -41.7,
                    y: -138.45,
                    r: 0.034
                },
                "28": {
                    x: -41.65,
                    y: -137.85
                },
                "38": {
                    x: -41.7,
                    y: -138.4
                },
                "39": {
                    x: -36.6,
                    y: -144.65,
                    r: 0.444
                },
                "40": {
                    x: -36.55,
                    y: -145.2,
                    r: 0.487
                },
                "45": {
                    x: -36.499,
                    y: -145.896
                },
                "46": {
                    x: -36.399,
                    y: -147.296
                },
                "47": {
                    x: -36.35,
                    y: -147.8
                }
            })
            .addTimedChild(instance2)
            .addTimedChild(instance1, 0, 50, {
                "0": {
                    x: 86.85,
                    y: -120.95
                }
            })
            .addTimedChild(instance16, 19, 31, {
                "19": {
                    x: 157.65,
                    y: -114.4,
                    r: 0.349
                },
                "20": {
                    x: 145.55,
                    y: -114.45,
                    r: 0.81
                },
                "21": {
                    x: 91.55,
                    y: -101.35,
                    r: 1.193
                },
                "22": {
                    x: 88.65,
                    y: -101.05,
                    r: 1.315
                },
                "30": {
                    x: 169.15,
                    y: -119.15,
                    r: 0.309
                },
                "31": {
                    x: 175.8,
                    y: -120.6,
                    r: -0.146
                },
                "32": {
                    x: 177.15,
                    y: -118,
                    r: -0.039
                },
                "33": {
                    r: 0
                }
            })
            .addTimedChild(instance15, 19, 31, {
                "19": {
                    x: 164.5,
                    y: -136.1,
                    r: 0
                },
                "20": {
                    x: 152.65,
                    y: -135.9,
                    r: -0.004
                },
                "21": {
                    x: 108.9,
                    y: -119.4,
                    r: 0.776
                },
                "22": {
                    x: 106.7,
                    y: -118.5,
                    r: 0.811
                },
                "30": {
                    x: 177.05,
                    y: -143.05,
                    r: 0.278
                },
                "31": {
                    x: 188.25,
                    y: -142.55,
                    r: 0.477
                },
                "32": {
                    x: 176.9,
                    y: -143.05,
                    r: 0
                }
            })
            .addTimedChild(instance19, 21, 1)
            .addTimedChild(instance20, 22, 8)
            .addTimedChild(instance21, 30, 1)
            .addTimedChild(instance22, 31, 1)
            .addTimedChild(instance23, 32, 1)
            .addTimedChild(instance24, 33, 5)
            .addTimedChild(instance25, 38, 1)
            .addTimedChild(instance26, 39, 1)
            .addTimedChild(instance29, 40, 10);
    });

    var Graphic98 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[188]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[189]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[187]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[186]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[185]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[190]);
        this.addTimedChild(instance4, 0, 20, {
                "0": {
                    x: -17.65,
                    y: 14.8,
                    sx: 0.95
                }
            })
            .addTimedChild(instance5, 20, 7)
            .addTimedChild(instance3, 0, 27, {
                "0": {
                    x: -470,
                    y: -630.85,
                    sx: 0.95
                }
            })
            .addTimedChild(instance2, 0, 27, {
                "0": {
                    x: -470,
                    y: -630.85,
                    sx: 0.95
                }
            })
            .addTimedChild(instance1, 0, 27, {
                "0": {
                    x: -470,
                    y: -630.85,
                    sx: 0.95
                }
            })
            .addTimedChild(instance6, 27, 23);
    });

    var Graphic99 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[193]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[194]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[192]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[191]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[195]);
        this.addTimedChild(instance3, 0, 20, {
                "0": {
                    x: 14.05,
                    y: 13.35,
                    sx: 0.95
                }
            })
            .addTimedChild(instance4, 20, 7)
            .addTimedChild(instance2, 0, 27, {
                "0": {
                    x: -438.25,
                    y: -629.9,
                    sx: 0.95,
                    ky: 0
                },
                "20": {
                    x: 438.25,
                    ky: 3.142
                }
            })
            .addTimedChild(instance1, 0, 27, {
                "0": {
                    x: -438.25,
                    y: -629.9,
                    sx: 0.95,
                    ky: 0
                },
                "20": {
                    x: 438.25,
                    ky: 3.142
                }
            })
            .addTimedChild(instance5, 27, 23);
    });

    var Graphic109 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[196]);
        var instance2 = new Graphic99(MovieClip.SYNCHED);
        var instance1 = new Graphic98(MovieClip.SYNCHED);
        this.addTimedChild(instance3)
            .addTimedChild(instance2, 0, 50, {
                "0": {
                    x: -9.2,
                    y: -101.15,
                    kx: 0,
                    ky: 0
                },
                "20": {
                    x: -24.6,
                    ky: 3.142
                },
                "27": {
                    x: -45.9,
                    y: -98.9,
                    kx: -0.087,
                    ky: -3.055
                }
            })
            .addTimedChild(instance1, 0, 50, {
                "0": {
                    x: 22.55,
                    y: -100.2,
                    r: 0
                },
                "20": {
                    x: 7.15
                },
                "27": {
                    x: -14.15,
                    y: -99.75,
                    r: -0.069
                }
            });
    });

    var Graphic110 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[197])
            .setTransform(-461.15, -639, 0.96);
        this.addTimedChild(instance1);
    });

    var Graphic111 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[202]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[200]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[199]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[198]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[201])
            .setTransform(-39.65, 0.95);
        this.addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2, 0, 27)
            .addTimedChild(instance1, 0, 27)
            .addTimedChild(instance5, 27, 23);
    });

    var Graphic112 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 22, loop: false });
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[218]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[114])
            .setTransform(3.1, -2.15, 1, 1, 0.134);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[113])
            .setTransform(10.35, 30.05, 1.12, 1.056, 0, 0.246, 2.895);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[112])
            .setTransform(9.55, 31.8, 1, 1, 0, 0.494, 2.648);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[111])
            .setTransform(9.3, 31.9, 1, 1, 0, 0.741, 2.401);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[110])
            .setTransform(16.15, 34.3, 1, 1, 0, 0.828, 2.314);
        this.addTimedChild(instance6)
            .addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic122 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 11, loop: false });
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[219])
            .setTransform(10.35, 32.6);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[106])
            .setTransform(10.35, 32.6);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[105])
            .setTransform(10.35, 32.6);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[104])
            .setTransform(10.35, 32.6);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[103])
            .setTransform(10.25, 32.6);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[102])
            .setTransform(-613.95, -790.65);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[101])
            .setTransform(-613.95, -790.65);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[100])
            .setTransform(-613.95, -790.65);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[99])
            .setTransform(-613.95, -790.65);
        this.addTimedChild(instance9)
            .addTimedChild(instance8)
            .addTimedChild(instance7)
            .addTimedChild(instance6)
            .addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic123 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 11, loop: false });
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[223])
            .setTransform(14.05, -0.4);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[223]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[220]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[222]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[221]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[220]);
        this.addTimedChild(instance6)
            .addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic113 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 29, loop: false });
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[218]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[114])
            .setTransform(3.1, -2.15, 1, 1, 0.134);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[113])
            .setTransform(10.35, 30.05, 1.12, 1.056, 0, 0.246, 2.895);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[112])
            .setTransform(9.55, 31.8, 1, 1, 0, 0.494, 2.648);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[111])
            .setTransform(9.3, 31.9, 1, 1, 0, 0.741, 2.401);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[110])
            .setTransform(16.15, 34.3, 1, 1, 0, 0.828, 2.314);
        this.addTimedChild(instance6)
            .addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic100 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[256]);
        this.addTimedChild(instance1);
    });

    var Graphic101 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[256]);
        this.addTimedChild(instance1);
    });

    var Graphic102 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[256]);
        this.addTimedChild(instance1);
    });

    var Graphic103 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[256]);
        this.addTimedChild(instance1);
    });

    var Graphic114 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[257]);
        var instance4 = new Graphic103(MovieClip.SYNCHED)
            .setTransform(-54.7, -18.8, 1, 1, 0.117);
        var instance3 = new Graphic102(MovieClip.SYNCHED)
            .setTransform(-49.6, -8.1, 1, 1, 0.117);
        var instance2 = new Graphic101(MovieClip.SYNCHED)
            .setTransform(-77.75, -9.3, 1, 1, 0.117);
        var instance1 = new Graphic100(MovieClip.SYNCHED)
            .setTransform(-89, -7.25, 1, 1, 0.117);
        this.addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic104 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[256]);
        this.addTimedChild(instance1);
    });

    var Graphic105 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[256]);
        this.addTimedChild(instance1);
    });

    var Graphic106 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[256]);
        this.addTimedChild(instance1);
    });

    var Graphic107 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[256]);
        this.addTimedChild(instance1);
    });

    var Graphic115 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[257]);
        var instance4 = new Graphic107(MovieClip.SYNCHED)
            .setTransform(-54.7, -18.8, 1, 1, 0.117);
        var instance3 = new Graphic106(MovieClip.SYNCHED)
            .setTransform(-49.6, -8.1, 1, 1, 0.117);
        var instance2 = new Graphic105(MovieClip.SYNCHED)
            .setTransform(-77.75, -9.3, 1, 1, 0.117);
        var instance1 = new Graphic104(MovieClip.SYNCHED)
            .setTransform(-89, -7.25, 1, 1, 0.117);
        this.addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic300 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[304]);
        var instance24 = new Graphics()
            .drawCommands(shapes.s01[305]);
        var instance28 = new Graphics()
            .drawCommands(shapes.s01[306]);
        var instance32 = new Graphics()
            .drawCommands(shapes.s01[307]);
        var instance37 = new Graphics()
            .drawCommands(shapes.s01[308]);
        var instance40 = new Graphics()
            .drawCommands(shapes.s01[309]);
        var instance43 = new Graphics()
            .drawCommands(shapes.s01[310]);
        var instance46 = new Graphics()
            .drawCommands(shapes.s01[311]);
        var instance49 = new Graphics()
            .drawCommands(shapes.s01[312]);
        var instance52 = new Graphics()
            .drawCommands(shapes.s01[313]);
        var instance59 = new Graphics()
            .drawCommands(shapes.s01[314]);
        var instance62 = new Graphics()
            .drawCommands(shapes.s01[315]);
        var instance65 = new Graphics()
            .drawCommands(shapes.s01[316]);
        var instance69 = new Graphics()
            .drawCommands(shapes.s01[317]);
        var instance73 = new Graphics()
            .drawCommands(shapes.s01[318]);
        var instance77 = new Graphics()
            .drawCommands(shapes.s01[319]);
        var instance84 = new Graphics()
            .drawCommands(shapes.s01[320]);
        var instance88 = new Graphics()
            .drawCommands(shapes.s01[321]);
        var instance91 = new Graphics()
            .drawCommands(shapes.s01[322]);
        var instance93 = new Graphics()
            .drawCommands(shapes.s01[323]);
        var instance11 = new Graphic115(MovieClip.SYNCHED);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[271]);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[272]);
        var instance27 = new Graphics()
            .drawCommands(shapes.s01[273]);
        var instance31 = new Graphics()
            .drawCommands(shapes.s01[274]);
        var instance36 = new Graphics()
            .drawCommands(shapes.s01[275]);
        var instance39 = new Graphics()
            .drawCommands(shapes.s01[276]);
        var instance42 = new Graphics()
            .drawCommands(shapes.s01[277]);
        var instance45 = new Graphics()
            .drawCommands(shapes.s01[278]);
        var instance48 = new Graphics()
            .drawCommands(shapes.s01[279]);
        var instance51 = new Graphics()
            .drawCommands(shapes.s01[280]);
        var instance58 = new Graphics()
            .drawCommands(shapes.s01[281]);
        var instance61 = new Graphics()
            .drawCommands(shapes.s01[282]);
        var instance64 = new Graphics()
            .drawCommands(shapes.s01[283]);
        var instance68 = new Graphics()
            .drawCommands(shapes.s01[284]);
        var instance72 = new Graphics()
            .drawCommands(shapes.s01[285]);
        var instance76 = new Graphics()
            .drawCommands(shapes.s01[286]);
        var instance83 = new Graphics()
            .drawCommands(shapes.s01[287]);
        var instance87 = new Graphics()
            .drawCommands(shapes.s01[288]);
        var instance90 = new Graphics()
            .drawCommands(shapes.s01[289]);
        var instance92 = new Graphics()
            .drawCommands(shapes.s01[290]);
        var instance9 = new Graphic114(MovieClip.SYNCHED);
        var instance8 = new Graphic113(MovieClip.SYNCHED);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[242]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[243]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[244]);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[245]);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[246]);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[247]);
        var instance26 = new Graphics()
            .drawCommands(shapes.s01[246]);
        var instance30 = new Graphics()
            .drawCommands(shapes.s01[248]);
        var instance6 = new Graphic112(MovieClip.SYNCHED);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[210]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[211]);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[212]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[213]);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[214]);
        var instance21 = new Graphics()
            .drawCommands(shapes.s01[215]);
        var instance25 = new Graphics()
            .drawCommands(shapes.s01[216]);
        var instance29 = new Graphics()
            .drawCommands(shapes.s01[217]);
        var instance35 = new Graphics()
            .drawCommands(shapes.s01[249]);
        var instance38 = new Graphics()
            .drawCommands(shapes.s01[250]);
        var instance41 = new Graphics()
            .drawCommands(shapes.s01[246]);
        var instance44 = new Graphics()
            .drawCommands(shapes.s01[251]);
        var instance47 = new Graphics()
            .drawCommands(shapes.s01[252]);
        var instance50 = new Graphics()
            .drawCommands(shapes.s01[246]);
        var instance82 = new Graphics()
            .drawCommands(shapes.s01[253]);
        var instance86 = new Graphics()
            .drawCommands(shapes.s01[254]);
        var instance89 = new Graphics()
            .drawCommands(shapes.s01[255]);
        var instance81 = new Graphic123(MovieClip.SYNCHED);
        var instance80 = new Graphic122(MovieClip.SYNCHED);
        var instance4 = new Graphic111(MovieClip.SYNCHED);
        var instance3 = new Graphic110(MovieClip.SYNCHED);
        var instance2 = new Graphic109(MovieClip.SYNCHED);
        var instance1 = new Graphic108(MovieClip.SYNCHED);
        var instance34 = new Graphic116(MovieClip.SYNCHED);
        var instance33 = new Graphics()
            .drawCommands(shapes.s01[92]);
        var instance60 = new Graphics()
            .drawCommands(shapes.s01[93]);
        var instance67 = new Graphics()
            .drawCommands(shapes.s01[94]);
        var instance71 = new Graphics()
            .drawCommands(shapes.s01[95]);
        var instance75 = new Graphics()
            .drawCommands(shapes.s01[96]);
        var instance79 = new Graphic121(MovieClip.SYNCHED);
        var instance78 = new Graphics()
            .drawCommands(shapes.s01[97]);
        var instance85 = new Graphics()
            .drawCommands(shapes.s01[98]);
        var instance57 = new Graphic120(MovieClip.SYNCHED);
        var instance56 = new Graphic119(MovieClip.SYNCHED);
        var instance55 = new Graphic118(MovieClip.SYNCHED);
        var instance54 = new Graphics()
            .drawCommands(shapes.s01[68]);
        var instance63 = new Graphics()
            .drawCommands(shapes.s01[71]);
        var instance66 = new Graphics()
            .drawCommands(shapes.s01[72]);
        var instance70 = new Graphics()
            .drawCommands(shapes.s01[73]);
        var instance74 = new Graphics()
            .drawCommands(shapes.s01[74]);
        var instance53 = new Graphic117(MovieClip.SYNCHED);
        this.addTimedChild(instance12, 0, 19)
            .addTimedChild(instance24, 19, 1)
            .addTimedChild(instance28, 20, 1)
            .addTimedChild(instance32, 21, 1)
            .addTimedChild(instance37, 22, 1)
            .addTimedChild(instance40, 23, 1)
            .addTimedChild(instance43, 24, 1)
            .addTimedChild(instance46, 25, 1)
            .addTimedChild(instance49, 26, 1)
            .addTimedChild(instance52, 27, 1)
            .addTimedChild(instance59, 28, 1)
            .addTimedChild(instance62, 29, 1)
            .addTimedChild(instance65, 30, 1)
            .addTimedChild(instance69, 31, 1)
            .addTimedChild(instance73, 32, 6)
            .addTimedChild(instance77, 38, 1)
            .addTimedChild(instance84, 39, 1)
            .addTimedChild(instance88, 40, 1)
            .addTimedChild(instance91, 41, 1)
            .addTimedChild(instance93, 42, 8)
            .addTimedChild(instance11, 0, 50, {
                "0": {
                    x: -2.85,
                    y: -33.2,
                    kx: 0,
                    ky: 0,
                    r: -0.122
                },
                "19": {
                    x: -39.2,
                    y: -61.9,
                    r: -0.047
                },
                "20": {
                    x: -51.25,
                    y: -71.3,
                    r: -0.021
                },
                "21": {
                    x: -39.5,
                    y: -118.75,
                    r: 0.217
                },
                "22": {
                    x: -31.2,
                    y: -152.2,
                    r: 0.385
                },
                "23": {
                    x: -26.2,
                    y: -172.35,
                    r: 0.486
                },
                "24": {
                    x: -24.45,
                    y: -179,
                    r: 0.519
                },
                "25": {
                    x: 45.2,
                    y: -186.7,
                    r: 1.152
                },
                "26": {
                    x: 86.65,
                    y: -191.25,
                    r: 1.528
                },
                "27": {
                    x: 100.3,
                    y: -192.45,
                    kx: 4.63,
                    ky: 1.654,
                    r: 0
                },
                "28": {
                    x: 107.4,
                    y: -173.75,
                    kx: 4.513,
                    ky: 1.77
                },
                "29": {
                    x: 144.65,
                    y: -55.5,
                    kx: 0,
                    ky: 0,
                    r: 1.17
                },
                "30": {
                    y: -57.8
                },
                "31": {
                    x: 141.3,
                    y: -73.3,
                    r: 1.395
                },
                "32": {
                    x: 140.25,
                    y: -78.5,
                    r: 1.47
                },
                "39": {
                    x: 140.8,
                    y: -85.25,
                    r: 1.517
                }
            })
            .addTimedChild(instance10, 0, 19, {
                "0": {
                    x: -13.8
                }
            })
            .addTimedChild(instance23, 19, 1)
            .addTimedChild(instance27, 20, 1)
            .addTimedChild(instance31, 21, 1)
            .addTimedChild(instance36, 22, 1)
            .addTimedChild(instance39, 23, 1)
            .addTimedChild(instance42, 24, 1)
            .addTimedChild(instance45, 25, 1)
            .addTimedChild(instance48, 26, 1)
            .addTimedChild(instance51, 27, 1)
            .addTimedChild(instance58, 28, 1)
            .addTimedChild(instance61, 29, 1)
            .addTimedChild(instance64, 30, 1)
            .addTimedChild(instance68, 31, 1)
            .addTimedChild(instance72, 32, 6)
            .addTimedChild(instance76, 38, 1)
            .addTimedChild(instance83, 39, 1)
            .addTimedChild(instance87, 40, 1)
            .addTimedChild(instance90, 41, 1)
            .addTimedChild(instance92, 42, 8)
            .addTimedChild(instance9, 0, 50, {
                "0": {
                    x: 81.35,
                    y: -27.2,
                    kx: 0,
                    ky: 0,
                    r: -0.122
                },
                "21": {
                    x: 83.1,
                    y: -25.25,
                    r: 0.117
                },
                "22": {
                    x: 84.3,
                    y: -23.9,
                    r: 0.286
                },
                "23": {
                    x: 85,
                    y: -23.05,
                    r: 0.387
                },
                "24": {
                    x: 85.25,
                    y: -22.7,
                    r: 0.421
                },
                "25": {
                    x: 94.8,
                    y: -59.4,
                    r: 0.945
                },
                "26": {
                    x: 100.35,
                    y: -81.25,
                    r: 1.256
                },
                "27": {
                    x: 102.2,
                    y: -88.5,
                    r: 1.36
                },
                "28": {
                    x: 110.45,
                    y: -103.25,
                    kx: 4.358,
                    ky: 1.925,
                    r: 0
                },
                "29": {
                    x: 121.65,
                    y: 19.1,
                    kx: 0,
                    ky: 0,
                    r: 1.178
                },
                "30": {
                    y: 16.8
                },
                "31": {
                    x: 120.95,
                    y: 7.3,
                    r: 1.341
                },
                "32": {
                    x: 120.7,
                    y: 4.2,
                    r: 1.395
                },
                "39": {
                    x: 120.2,
                    y: 1.35,
                    r: 1.408
                }
            })
            .addTimedChild(instance8, 0, 29, {
                "0": {
                    x: -185.85,
                    y: -382.15,
                    kx: 4.4,
                    ky: -1.259
                },
                "1": {
                    x: -183.6,
                    y: -414.85,
                    kx: 4.193,
                    ky: -1.052
                },
                "2": {
                    x: -181.95,
                    y: -437.95,
                    kx: 4.047,
                    ky: -0.906
                },
                "3": {
                    x: -180.95,
                    y: -451.6,
                    kx: 3.96,
                    ky: -0.818
                },
                "4": {
                    x: -180.8,
                    y: -456.45,
                    kx: 3.93,
                    ky: -0.789
                },
                "19": {
                    x: -74.2,
                    y: -499.2,
                    kx: 3.933,
                    ky: -0.791
                },
                "20": {
                    x: -39.05,
                    y: -513.15,
                    ky: -0.792
                },
                "21": {
                    x: 54.15,
                    y: -537.6,
                    kx: 3.805,
                    ky: -0.663
                },
                "22": {
                    x: 119.95,
                    y: -554.9,
                    kx: 3.714,
                    ky: -0.572
                },
                "23": {
                    x: 159.4,
                    y: -565.3,
                    kx: 3.659,
                    ky: -0.518
                },
                "24": {
                    x: 172.7,
                    y: -568.55,
                    kx: 3.641,
                    ky: -0.499
                },
                "25": {
                    x: 242.1,
                    y: -408.9,
                    kx: 3.651,
                    ky: -0.509
                },
                "26": {
                    x: 283.25,
                    y: -314.05,
                    kx: 3.657,
                    ky: -0.515
                },
                "27": {
                    x: 297.05,
                    y: -282.25,
                    kx: 3.659,
                    ky: -0.517
                },
                "28": {
                    x: 314.85,
                    y: -235,
                    kx: 3.56,
                    ky: -0.418
                }
            })
            .addTimedChild(instance7, 0, 1, {
                "0": {
                    x: 1.05,
                    y: -188.15,
                    r: -0.204
                }
            })
            .addTimedChild(instance14, 1, 1)
            .addTimedChild(instance16, 2, 1)
            .addTimedChild(instance18, 3, 1)
            .addTimedChild(instance20, 4, 15, {
                "4": {
                    x: 1.1,
                    y: -192.7,
                    r: -0.191
                }
            })
            .addTimedChild(instance22, 19, 1)
            .addTimedChild(instance26, 20, 1, {
                "20": {
                    x: 5.15,
                    y: -195.25,
                    r: 0.241
                }
            })
            .addTimedChild(instance30, 21, 1)
            .addTimedChild(instance6, 0, 22, {
                "0": {
                    x: 225.3,
                    y: -395.5,
                    r: -2.047
                },
                "1": {
                    x: 216.75,
                    y: -431.7,
                    r: -2.216
                },
                "2": {
                    x: 200.1,
                    y: -459.8,
                    r: -2.335
                },
                "3": {
                    x: 193.85,
                    y: -475.65,
                    r: -2.407
                },
                "4": {
                    x: 187.55,
                    y: -480.7,
                    r: -2.431
                },
                "19": {
                    x: 272.15,
                    y: -402.4,
                    r: -2.21
                },
                "20": {
                    x: 300,
                    y: -376.35,
                    r: -2.085
                },
                "21": {
                    x: 332.75,
                    y: -389.8,
                    r: -2.021
                }
            })
            .addTimedChild(instance5, 0, 1, {
                "0": {
                    x: 62.45,
                    y: -194.9,
                    r: -0.143
                }
            })
            .addTimedChild(instance13, 1, 1)
            .addTimedChild(instance15, 2, 1)
            .addTimedChild(instance17, 3, 1)
            .addTimedChild(instance19, 4, 15)
            .addTimedChild(instance21, 19, 1)
            .addTimedChild(instance25, 20, 1, {
                "20": {
                    x: 43.3,
                    y: -180.05,
                    r: 0.432
                }
            })
            .addTimedChild(instance29, 21, 1)
            .addTimedChild(instance35, 22, 1)
            .addTimedChild(instance38, 23, 1)
            .addTimedChild(instance41, 24, 1, {
                "24": {
                    x: 123.45,
                    y: -251.4,
                    r: 0.534
                }
            })
            .addTimedChild(instance44, 25, 1)
            .addTimedChild(instance47, 26, 1)
            .addTimedChild(instance50, 27, 2, {
                "27": {
                    x: 396,
                    y: 25.3,
                    r: 0.089
                },
                "28": {
                    x: 382.95,
                    y: 80.75,
                    r: 0.188
                }
            })
            .addTimedChild(instance82, 39, 1, {
                "39": {
                    x: 363.8,
                    y: -110,
                    r: -0.28
                }
            })
            .addTimedChild(instance86, 40, 1, {
                "40": {
                    x: 363.8,
                    y: -110,
                    r: -0.28
                }
            })
            .addTimedChild(instance89, 41, 9, {
                "41": {
                    x: 362.6,
                    y: -111.4,
                    r: -0.292
                },
                "42": {
                    x: 363.8,
                    y: -110,
                    r: -0.28
                }
            })
            .addTimedChild(instance81, 39, 11, {
                "39": {
                    x: 323.25,
                    y: -246.55,
                    sx: 0.455,
                    sy: 0.453,
                    r: 1.006
                },
                "40": {
                    x: 427.2,
                    y: -279.9,
                    r: 1.437
                },
                "41": {
                    x: 432.25,
                    y: -274.95,
                    r: 1.494
                },
                "42": {
                    x: 435.45,
                    y: -272.65,
                    r: 1.506
                }
            })
            .addTimedChild(instance80, 39, 11, {
                "39": {
                    x: 361.25,
                    y: -185.55,
                    kx: 3.758,
                    ky: 2.526
                },
                "40": {
                    x: 423.85,
                    y: -209.05,
                    kx: 3.186,
                    ky: 3.097
                },
                "41": {
                    x: 424.8,
                    y: -203.6,
                    kx: 3.16,
                    ky: 3.123
                },
                "42": {
                    x: 427.15,
                    y: -201.4,
                    kx: 3.147,
                    ky: 3.136
                }
            })
            .addTimedChild(instance4, 0, 50, {
                "0": {
                    x: 18.05,
                    y: -311.75,
                    sx: 1,
                    sy: 1,
                    kx: 0,
                    ky: 0,
                    r: 0
                },
                "19": {
                    x: 58.85,
                    y: -303.1,
                    r: 0.325
                },
                "20": {
                    x: 72.2,
                    y: -300,
                    r: 0.432
                },
                "21": {
                    x: 133.2,
                    y: -317.7,
                    kx: -0.621,
                    ky: 0.622,
                    r: 0
                },
                "22": {
                    x: 176.3,
                    y: -330.15,
                    kx: -0.754,
                    ky: 0.757
                },
                "23": {
                    x: 202.15,
                    y: -337.6,
                    kx: -0.834,
                    ky: 0.837
                },
                "24": {
                    x: 210.9,
                    y: -339.95,
                    kx: -0.861,
                    ky: 0.864
                },
                "25": {
                    x: 304.65,
                    y: -209.9,
                    sx: 0.991,
                    kx: -1.238,
                    ky: 1.239
                },
                "26": {
                    x: 360.25,
                    y: -132.7,
                    sx: 0.986,
                    kx: 0,
                    ky: 0,
                    r: 1.461
                },
                "27": {
                    x: 379.2,
                    y: -106.75,
                    sx: 0.985,
                    r: 1.536
                },
                "28": {
                    x: 379.25,
                    y: -52.25,
                    kx: 4.648,
                    ky: 1.635,
                    r: 0
                },
                "29": {
                    x: 382.95,
                    y: -40.3,
                    sx: 0.927,
                    sy: 1.033,
                    kx: 4.632,
                    ky: 1.609
                },
                "30": {
                    y: -42.6
                },
                "31": {
                    x: 383.7,
                    y: -39.75,
                    sx: 0.97,
                    sy: 1.008,
                    kx: 4.635,
                    ky: 1.638
                },
                "32": {
                    x: 383.95,
                    y: -39.05,
                    sx: 0.985,
                    sy: 1,
                    kx: 4.636,
                    ky: 1.648
                },
                "39": {
                    x: 384,
                    y: -38.6,
                    kx: 4.623,
                    ky: 1.66
                }
            })
            .addTimedChild(instance3, 0, 50, {
                "0": {
                    x: 19.2,
                    y: -398.45,
                    r: -0.004
                },
                "1": {
                    x: 20.45,
                    y: -400.4,
                    r: 0.002
                },
                "2": {
                    x: 21.35,
                    y: -401.75,
                    r: 0.006
                },
                "3": {
                    x: 21.75,
                    y: -402.55,
                    r: 0.008
                },
                "4": {
                    x: 22.05,
                    y: -402.75,
                    r: 0.009
                },
                "19": {
                    x: 88.25,
                    y: -383.25,
                    r: 0.406
                },
                "20": {
                    x: 110.15,
                    y: -376.75,
                    r: 0.537
                },
                "21": {
                    x: 183.85,
                    y: -384.2,
                    r: 0.633
                },
                "22": {
                    x: 235.9,
                    y: -389.55,
                    r: 0.701
                },
                "23": {
                    x: 267.1,
                    y: -392.65,
                    r: 0.742
                },
                "24": {
                    x: 277.6,
                    y: -393.75,
                    r: 0.755
                },
                "25": {
                    x: 380.8,
                    y: -247.95,
                    r: 0.941
                },
                "26": {
                    x: 442.1,
                    y: -161.35,
                    r: 1.051
                },
                "27": {
                    x: 462.7,
                    y: -131.9,
                    r: 1.088
                },
                "28": {
                    x: 464.85,
                    y: -69,
                    r: 1.187
                },
                "29": {
                    x: 474.5,
                    y: -50.7,
                    r: 1.39
                },
                "30": {
                    y: -53
                },
                "31": {
                    x: 473.4,
                    y: -54,
                    r: 1.332
                },
                "32": {
                    x: 473.05,
                    y: -54.4,
                    r: 1.313
                },
                "39": {
                    x: 472.7,
                    y: -55.45,
                    r: 1.248
                }
            })
            .addTimedChild(instance2, 0, 50, {
                "0": {
                    x: 18.35,
                    y: -306.9,
                    sx: 1,
                    sy: 1,
                    r: -0.013
                },
                "1": {
                    x: 19.1,
                    y: -308.75,
                    r: -0.007
                },
                "2": {
                    x: 19.5,
                    y: -310,
                    r: -0.003
                },
                "3": {
                    x: 19.8,
                    y: -310.8,
                    r: -0.001
                },
                "4": {
                    x: 19.95,
                    y: -311.2,
                    r: 0
                },
                "19": {
                    x: 59.15,
                    y: -299.1,
                    r: 0.325
                },
                "20": {
                    x: 71.95,
                    y: -295,
                    r: 0.432
                },
                "21": {
                    x: 132.1,
                    y: -312.85,
                    r: 0.622
                },
                "22": {
                    x: 174.6,
                    y: -325.5,
                    r: 0.757
                },
                "23": {
                    x: 200,
                    y: -332.95,
                    r: 0.837
                },
                "24": {
                    x: 208.65,
                    y: -335.45,
                    r: 0.864
                },
                "25": {
                    x: 300,
                    y: -208.3,
                    r: 1.195
                },
                "26": {
                    x: 354.1,
                    y: -132.85,
                    r: 1.392
                },
                "27": {
                    x: 372.25,
                    y: -107.45,
                    r: 1.458
                },
                "28": {
                    x: 372.4,
                    y: -53.6,
                    r: 1.557
                },
                "29": {
                    x: 379.55,
                    y: -39.35,
                    sx: 0.953,
                    sy: 1.003,
                    r: 1.569
                },
                "30": {
                    y: -41.65
                },
                "31": {
                    x: 377.7,
                    y: -40.75,
                    sx: 0.988,
                    sy: 1.001
                },
                "32": {
                    x: 377.1,
                    y: -40.5,
                    sx: 1,
                    sy: 1
                }
            })
            .addTimedChild(instance1, 0, 50, {
                "0": {
                    x: 23.6,
                    y: -396.25,
                    kx: 0.121,
                    ky: 3.021,
                    r: 0
                },
                "1": {
                    x: 22.55,
                    y: -406.7,
                    kx: 0.042,
                    ky: 3.1
                },
                "2": {
                    x: 24.8,
                    y: -430.7,
                    kx: 0.081,
                    ky: 3.06
                },
                "3": {
                    x: 25.5,
                    y: -434.7,
                    kx: 0.105,
                    ky: 3.037
                },
                "4": {
                    x: 25.9,
                    y: -436.1,
                    kx: 0.113,
                    ky: 3.029
                },
                "19": {
                    x: 106.2,
                    y: -407.35
                },
                "20": {
                    x: 125.9,
                    y: -406.4,
                    kx: 0,
                    ky: 0,
                    r: 0.219
                },
                "21": {
                    x: 203.35,
                    y: -412.35,
                    r: 0.342
                },
                "22": {
                    x: 258.05,
                    y: -416.55,
                    r: 0.428
                },
                "23": {
                    x: 290.75,
                    y: -419.1,
                    r: 0.48
                },
                "24": {
                    x: 301.8,
                    y: -419.95,
                    r: 0.498
                },
                "25": {
                    x: 404.15,
                    y: -274.75,
                    r: 0.808
                },
                "26": {
                    x: 464.85,
                    y: -188.55,
                    r: 0.991
                },
                "27": {
                    x: 485,
                    y: -159.6,
                    r: 1.053
                },
                "28": {
                    x: 489.8,
                    y: -94.4,
                    r: 1.152
                },
                "29": {
                    x: 497.25,
                    y: -76.5,
                    r: 1.49
                },
                "30": {
                    y: -78.8
                },
                "31": {
                    x: 495.4,
                    y: -79.7,
                    r: 1.393
                },
                "32": {
                    x: 494.9,
                    y: -79.9,
                    r: 1.36
                },
                "38": {
                    x: 491.05,
                    y: -78.9,
                    r: 1.309
                },
                "39": {
                    x: 488.8,
                    y: -73.9,
                    r: 1.263
                },
                "40": {
                    r: 1.256
                }
            })
            .addTimedChild(instance34, 22, 7, {
                "22": {
                    x: 277.05,
                    y: -542.3,
                    r: -1.899
                },
                "23": {
                    x: 236.65,
                    y: -548.55,
                    r: -2.248
                },
                "24": {
                    x: 225.3,
                    y: -552.6,
                    r: -2.347
                },
                "25": {
                    x: 322.95,
                    y: -400.5,
                    r: -2.339
                },
                "26": {
                    x: 391.85,
                    y: -317.5,
                    r: -2.268
                },
                "27": {
                    x: 351.5,
                    y: -258,
                    r: -2.53
                },
                "28": {
                    x: 296.6,
                    y: -155.4,
                    r: -2.936
                }
            })
            .addTimedChild(instance33, 22, 7, {
                "22": {
                    x: -724.85,
                    y: -220.4,
                    r: 1.396
                },
                "23": {
                    x: -594.9,
                    y: 96.3,
                    r: 1.047
                },
                "24": {
                    x: -538.45,
                    y: 171.3,
                    r: 0.948
                },
                "25": {
                    x: -445.95,
                    y: 317.8,
                    r: 0.956
                },
                "26": {
                    x: -426.65,
                    y: 343.65,
                    r: 1.027
                },
                "27": {
                    x: -267.8,
                    y: 592.9,
                    r: 0.765
                },
                "28": {
                    x: 63.95,
                    y: 870.7,
                    r: 0.359
                }
            })
            .addTimedChild(instance60, 29, 2, {
                "29": {
                    x: 188.85,
                    y: 940.05,
                    r: 0.223
                },
                "30": {
                    y: 937.75
                }
            })
            .addTimedChild(instance67, 31, 1)
            .addTimedChild(instance71, 32, 6, {
                "32": {
                    x: 188.85,
                    y: 938.3,
                    r: 0.223
                }
            })
            .addTimedChild(instance75, 38, 1, {
                "38": {
                    x: 188.85,
                    y: 938.3,
                    r: 0.223
                }
            })
            .addTimedChild(instance79, 39, 11, {
                "39": {
                    x: 313.65,
                    y: -250.85,
                    kx: 4.011,
                    ky: -0.869
                },
                "40": {
                    x: 428.3,
                    y: -287,
                    kx: 3.508,
                    ky: -0.366
                },
                "41": {
                    x: 433.75,
                    y: -281.95,
                    kx: 3.451,
                    ky: -0.309
                },
                "42": {
                    x: 437.05,
                    y: -279.65,
                    kx: 3.439,
                    ky: -0.297
                }
            })
            .addTimedChild(instance78, 39, 1, {
                "39": {
                    x: 94.9,
                    y: -21.4
                }
            })
            .addTimedChild(instance85, 40, 10, {
                "40": {
                    x: 92.5,
                    y: -31.95,
                    r: 0
                },
                "41": {
                    x: 94.8,
                    y: -19.5,
                    r: -0.012
                },
                "42": {
                    x: 94.9,
                    y: -21.4,
                    r: 0
                }
            })
            .addTimedChild(instance57, 28, 22, {
                "28": {
                    x: 49.05,
                    y: -223.05,
                    sx: 1.197,
                    sy: 1.197,
                    r: 0
                },
                "29": {
                    x: 55.25,
                    y: -236.5,
                    r: 0.021
                },
                "30": {
                    x: 53.2,
                    y: -231.9,
                    r: 0.014
                },
                "31": {
                    x: 51.1,
                    y: -227.4,
                    r: 0.007
                },
                "32": {
                    x: 49.05,
                    y: -223.05,
                    r: 0
                }
            })
            .addTimedChild(instance56, 28, 22, {
                "28": {
                    x: 618.1,
                    y: -54.5,
                    kx: 3.816,
                    ky: 2.467,
                    r: 0
                },
                "29": {
                    x: 605.1,
                    y: 3.65,
                    kx: 3.478,
                    ky: 2.805
                },
                "30": {
                    x: 629.65,
                    y: 80.1,
                    kx: 4.485,
                    ky: 1.798
                },
                "31": {
                    x: 645.2,
                    y: 71.9,
                    kx: 0,
                    ky: 0,
                    r: 1.246
                },
                "32": {
                    x: 647.25,
                    y: 68.65,
                    r: 1.321
                },
                "33": {
                    r: 1.36
                },
                "38": {
                    x: 650.85,
                    y: 61.6,
                    r: 1.309
                },
                "39": {
                    x: 654.8,
                    y: 59.2,
                    r: 1.263
                },
                "40": {
                    x: 655.85,
                    y: 57.9,
                    r: 1.256
                }
            })
            .addTimedChild(instance55, 28, 22, {
                "28": {
                    x: 641.4,
                    y: -45.1,
                    kx: 4.321,
                    ky: 1.962,
                    r: 0
                },
                "29": {
                    x: 623.95,
                    y: 20.2,
                    kx: 3.983,
                    ky: 2.3
                },
                "30": {
                    x: 654.15,
                    y: 86.05,
                    kx: 4.516,
                    ky: 1.767
                },
                "31": {
                    x: 669,
                    y: 80.25,
                    kx: 4.413,
                    ky: 1.87
                },
                "32": {
                    x: 671.7,
                    y: 63.2,
                    kx: 0,
                    ky: 0,
                    r: 1.36
                },
                "38": {
                    x: 675,
                    y: 54.9,
                    r: 1.309
                },
                "39": {
                    x: 678.6,
                    y: 51.4,
                    r: 1.263
                },
                "40": {
                    x: 679.6,
                    y: 49.9,
                    r: 1.256
                }
            })
            .addTimedChild(instance54, 28, 2, {
                "28": {
                    x: 453.8,
                    y: -180.15,
                    r: 1.152
                },
                "29": {
                    x: 491.75,
                    y: -169.3,
                    r: 1.49
                }
            })
            .addTimedChild(instance63, 30, 1, {
                "30": {
                    x: 491.75,
                    y: -171.6,
                    r: 1.49
                }
            })
            .addTimedChild(instance66, 31, 1, {
                "31": {
                    x: 480.9,
                    y: -171.55,
                    r: 1.393
                }
            })
            .addTimedChild(instance70, 32, 1, {
                "32": {
                    x: 477.45,
                    y: -171.25,
                    r: 1.36
                }
            })
            .addTimedChild(instance74, 33, 17, {
                "33": {
                    x: 477.45,
                    y: -171.25,
                    r: 1.36
                },
                "38": {
                    x: 468.95,
                    y: -169.2,
                    r: 1.309
                },
                "39": {
                    x: 462.6,
                    y: -163.1,
                    r: 1.263
                },
                "40": {
                    x: 461.9,
                    y: -162.9,
                    r: 1.256
                }
            })
            .addTimedChild(instance53, 28, 22, {
                "28": {
                    x: 49.05,
                    y: -223.05,
                    sx: 1.197,
                    sy: 1.197,
                    r: 0
                },
                "29": {
                    x: 39.25,
                    y: -219.8,
                    r: -0.03
                },
                "30": {
                    x: 42.5,
                    y: -220.85,
                    r: -0.02
                },
                "31": {
                    x: 45.65,
                    y: -221.95,
                    r: -0.01
                },
                "32": {
                    x: 49.05,
                    y: -223.05,
                    r: 0
                }
            });
    });

    var Graphic126 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[17])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic127 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[17])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic128 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[21])
            .setTransform(-1289.25, -221.05);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[20])
            .setTransform(-1289.25, -221.05);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[18])
            .setTransform(-1289.25, -221.05);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[18])
            .setTransform(-1263.8, -221.2);
        this.addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic129 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[22])
            .setTransform(-1303.95, -197.85);
        this.addTimedChild(instance1);
    });

    var Graphic130 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[23])
            .setTransform(-1268.05, -199.05);
        this.addTimedChild(instance1);
    });

    var Graphic124 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[43]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[37])
            .setTransform(-5.8, 24);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[33])
            .setTransform(-5.8, 24);
        this.addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic131 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance1 = new Graphic124(MovieClip.SYNCHED)
            .setTransform(-0.05, -12.5, 1.172, 0.483);
        this.addTimedChild(instance1);
    });

    var Graphic132 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[47]);
        this.addTimedChild(instance1);
    });

    var Graphic133 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[51])
            .setTransform(-1336.85, -168.4, 1.033, 1.033);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[51])
            .setTransform(-1357.3, -164.4, 1.033, 1.033);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[51])
            .setTransform(-1317.25, -167, 1.033, 1.033);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[51])
            .setTransform(-1316.95, -139.1, 0.978, 0.978);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[51])
            .setTransform(-1265.9, -139.25, 1.033, 1.033);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[51])
            .setTransform(-1170.45, -142.3, 0.948, 0.948);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[51])
            .setTransform(-1185.7, -149.8, 0.948, 0.948);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[51])
            .setTransform(-1177.25, -135.65, 0.881, 0.881);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[51])
            .setTransform(-1201.55, -112.45, 0.881, 0.881);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[51])
            .setTransform(-1213, -97.9, 0.881, 0.881);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[51])
            .setTransform(-1255.65, -125.65, 1.033, 1.033);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[50]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[49]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[48])
            .setTransform(-1294.65, -163.3);
        this.addTimedChild(instance14)
            .addTimedChild(instance13)
            .addTimedChild(instance12)
            .addTimedChild(instance11)
            .addTimedChild(instance10)
            .addTimedChild(instance9)
            .addTimedChild(instance8)
            .addTimedChild(instance7)
            .addTimedChild(instance6)
            .addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic125 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[53])
            .setTransform(-1294.55, -252.5);
        this.addTimedChild(instance1);
    });

    var Graphic134 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance2 = new Graphic125(MovieClip.SYNCHED)
            .setTransform(6.55, -82.85);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[52]);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic135 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[55]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[54]);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic136 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[57]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[56]);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic137 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance11 = new Graphic136(MovieClip.SYNCHED)
            .setTransform(-61.6, -103.3);
        var instance10 = new Graphic135(MovieClip.SYNCHED)
            .setTransform(80.9, -103);
        var instance9 = new Graphic134(MovieClip.SYNCHED)
            .setTransform(-0.1, 0.55);
        var instance8 = new Graphic133(MovieClip.SYNCHED)
            .setTransform(6.55, -171.5);
        var instance7 = new Graphic132(MovieClip.SYNCHED)
            .setTransform(-6.5, -91.2);
        var instance6 = new Graphic131(MovieClip.SYNCHED)
            .setTransform(-2.75, -68.2);
        var instance5 = new Graphic130(MovieClip.SYNCHED)
            .setTransform(-17.4, -129.65, 1, 1, -0.044);
        var instance4 = new Graphic129(MovieClip.SYNCHED)
            .setTransform(15.55, -130.55, 1, 1, 0.062);
        var instance3 = new Graphic128(MovieClip.SYNCHED)
            .setTransform(1.15, -113.75);
        var instance2 = new Graphic127(MovieClip.SYNCHED)
            .setTransform(-17.45, -112.3);
        var instance1 = new Graphic126(MovieClip.SYNCHED)
            .setTransform(7.95, -112.5);
        this.addTimedChild(instance11)
            .addTimedChild(instance10)
            .addTimedChild(instance9)
            .addTimedChild(instance8)
            .addTimedChild(instance7)
            .addTimedChild(instance6)
            .addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic138 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[58])
            .setTransform(-1222.8, -397.15, 0.95);
        this.addTimedChild(instance1);
    });

    var Graphic301 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance4 = new Graphic138(MovieClip.SYNCHED)
            .setTransform(29, -530.3, 1, 1, -0.336);
        var instance3 = new Graphic137(MovieClip.SYNCHED)
            .setTransform(69.65, -590.6, 1.099, 1.099, -0.24);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[16]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[15]);
        this.addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic161 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 60, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[325]);
        this.addTimedChild(instance1);
    });

    var Graphic162 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 60, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[325]);
        this.addTimedChild(instance1);
    });

    var Graphic139 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 60, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[326])
            .setTransform(-1433.5, -449.85);
        this.addTimedChild(instance1);
    });

    var Graphic142 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 60, loop: false });
        var instance1 = new Graphic139(MovieClip.SYNCHED)
            .setTransform(-3);
        this.addTimedChild(instance1);
    });

    var Graphic143 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 60, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[327])
            .setTransform(-1438, -429.8);
        this.addTimedChild(instance1);
    });

    var Graphic144 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 60, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[328])
            .setTransform(-1462.95, -379.25);
        this.addTimedChild(instance1);
    });

    var Graphic145 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 60, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[329]);
        this.addTimedChild(instance1);
    });

    var Graphic146 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 60, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[330]);
        this.addTimedChild(instance1);
    });

    var Graphic147 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 60, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[330]);
        this.addTimedChild(instance1);
    });

    var Graphic148 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 60, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[332])
            .setTransform(-1442.85, -399.9);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[331])
            .setTransform(-1442.85, -399.9);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic140 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 60, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[334]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[333]);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic141 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 60, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[337])
            .setTransform(-1452.05, -513.3);
        this.addTimedChild(instance1);
    });

    var Graphic149 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 60, loop: false });
        var instance4 = new Graphic141(MovieClip.SYNCHED);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[336]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[335]);
        var instance1 = new Graphic140(MovieClip.SYNCHED)
            .setTransform(2.25, -140.45);
        this.addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic163 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 60, loop: false });
        var instance8 = new Graphic149(MovieClip.SYNCHED)
            .setTransform(1.55, -0.35);
        var instance7 = new Graphic148(MovieClip.SYNCHED)
            .setTransform(-7.65, -113.75);
        var instance6 = new Graphic147(MovieClip.SYNCHED)
            .setTransform(-21.25, -114.85);
        var instance5 = new Graphic146(MovieClip.SYNCHED)
            .setTransform(4.85, -114.6);
        var instance4 = new Graphic145(MovieClip.SYNCHED)
            .setTransform(-24.25, -133.75);
        var instance3 = new Graphic144(MovieClip.SYNCHED)
            .setTransform(12.45, -134.4);
        var instance2 = new Graphic143(MovieClip.SYNCHED)
            .setTransform(-12.5, -83.85);
        var instance1 = new Graphic142(MovieClip.SYNCHED)
            .setTransform(-9.8, -63.8);
        this.addTimedChild(instance8)
            .addTimedChild(instance7)
            .addTimedChild(instance6)
            .addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic164 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 52, loop: false });
        var instance1 = new Sprite(fromFrame("REPLACE_EMOJI_SAD"))
            .setTransform(0, 0, 0.5, 0.5);
        this.addTimedChild(instance1);
    });

    var Graphic165 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 52, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[340])
            .setTransform(-640.5, -212.85);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[339])
            .setTransform(-640.5, -212.85);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic168 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 18, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[342]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[341]);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic166 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 11, loop: false });
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[348]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[347]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[343]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[344]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[345]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[346]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[343]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[344]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[345]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[346]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[343]);
        this.addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1, 0, 1)
            .addTimedChild(instance4, 1, 1)
            .addTimedChild(instance5, 2, 1)
            .addTimedChild(instance6, 3, 1)
            .addTimedChild(instance7, 4, 3)
            .addTimedChild(instance8, 7, 1)
            .addTimedChild(instance9, 8, 1)
            .addTimedChild(instance10, 9, 1)
            .addTimedChild(instance11, 10, 1);
    });

    var Graphic169 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 18, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[349]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[347]);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic150 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 29, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[326])
            .setTransform(-1433.5, -449.85);
        this.addTimedChild(instance1);
    });

    var Graphic153 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 29, loop: false });
        var instance1 = new Graphic150(MovieClip.SYNCHED)
            .setTransform(-3);
        this.addTimedChild(instance1);
    });

    var Graphic154 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 29, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[327])
            .setTransform(-1438, -429.8);
        this.addTimedChild(instance1);
    });

    var Graphic155 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 29, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[328])
            .setTransform(-1462.95, -379.25);
        this.addTimedChild(instance1);
    });

    var Graphic156 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 29, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[329]);
        this.addTimedChild(instance1);
    });

    var Graphic157 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 29, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[330]);
        this.addTimedChild(instance1);
    });

    var Graphic158 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 29, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[330]);
        this.addTimedChild(instance1);
    });

    var Graphic159 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 29, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[332])
            .setTransform(-1442.85, -399.9);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[331])
            .setTransform(-1442.85, -399.9);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic151 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 29, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[334]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[333]);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic152 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 29, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[337])
            .setTransform(-1452.05, -513.3);
        this.addTimedChild(instance1);
    });

    var Graphic160 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 29, loop: false });
        var instance4 = new Graphic152(MovieClip.SYNCHED);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[336]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[335]);
        var instance1 = new Graphic151(MovieClip.SYNCHED)
            .setTransform(2.25, -140.45);
        this.addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic167 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 29, loop: false });
        var instance8 = new Graphic160(MovieClip.SYNCHED)
            .setTransform(1.55, -0.35);
        var instance7 = new Graphic159(MovieClip.SYNCHED)
            .setTransform(-7.65, -113.75);
        var instance6 = new Graphic158(MovieClip.SYNCHED)
            .setTransform(-21.25, -114.85);
        var instance5 = new Graphic157(MovieClip.SYNCHED)
            .setTransform(4.85, -114.6);
        var instance4 = new Graphic156(MovieClip.SYNCHED)
            .setTransform(-24.25, -133.75);
        var instance3 = new Graphic155(MovieClip.SYNCHED)
            .setTransform(12.45, -134.4);
        var instance2 = new Graphic154(MovieClip.SYNCHED)
            .setTransform(-12.5, -83.85);
        var instance1 = new Graphic153(MovieClip.SYNCHED)
            .setTransform(-9.8, -63.8);
        this.addTimedChild(instance8)
            .addTimedChild(instance7)
            .addTimedChild(instance6)
            .addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic302 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 60, loop: false });
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[350]);
        var instance9 = new Graphic167(MovieClip.SYNCHED);
        var instance8 = new Graphic166(MovieClip.SYNCHED);
        var instance11 = new Graphic169(MovieClip.SYNCHED);
        var instance10 = new Graphic168(MovieClip.SYNCHED);
        var instance7 = new Graphic165(MovieClip.SYNCHED);
        var instance6 = new Graphic164(MovieClip.SYNCHED);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[338]);
        var instance3 = new Graphic163(MovieClip.SYNCHED)
            .setTransform(-16.15, -88.8, 0.577, 0.577);
        var instance2 = new Graphic162(MovieClip.SYNCHED)
            .setTransform(-514.25, 626.9, 1, 1, 0.294);
        var instance1 = new Graphic161(MovieClip.SYNCHED);
        this.addTimedChild(instance5)
            .addTimedChild(instance9, 31, 29, {
                "31": {
                    x: -337.7,
                    y: 445.95,
                    sx: 0.223,
                    sy: 0.223
                },
                "32": {
                    y: 438.6
                }
            })
            .addTimedChild(instance8, 31, 11, {
                "31": {
                    x: -92.9,
                    y: 209.65,
                    sx: 0.752,
                    sy: 0.752,
                    ky: 3.142
                },
                "32": {
                    y: 202.45
                }
            })
            .addTimedChild(instance11, 42, 18, {
                "42": {
                    x: -29,
                    y: 125.75,
                    sx: 1.018,
                    sy: 1.018,
                    ky: 3.142
                },
                "43": {
                    y: 122.55
                }
            })
            .addTimedChild(instance10, 42, 18, {
                "42": {
                    x: -279.3,
                    y: 150.1,
                    sx: 1.635,
                    sy: 1.635
                },
                "43": {
                    y: 149.1
                }
            })
            .addTimedChild(instance7, 8, 52, {
                "8": {
                    x: 35.05,
                    y: 239.85,
                    sx: 0.836,
                    sy: 0.836
                },
                "9": {
                    x: 12.95,
                    y: 219.8,
                    sx: 0.993,
                    sy: 0.993
                },
                "10": {
                    x: 9.4,
                    y: 216.6,
                    sx: 1.018,
                    sy: 1.018
                },
                "31": {
                    y: 208.65
                },
                "32": {
                    y: -9.35
                },
                "33": {
                    y: -17.3
                }
            })
            .addTimedChild(instance6, 8, 52, {
                "8": {
                    x: 50.05,
                    y: 259.35,
                    sx: 1.347,
                    sy: 1.347
                },
                "9": {
                    x: 26.95,
                    y: 239.4,
                    sx: 1.68,
                    sy: 1.68
                },
                "10": {
                    x: 26,
                    y: 238.5,
                    sx: 1.694,
                    sy: 1.694
                },
                "31": {
                    y: 228.2
                },
                "32": {
                    y: 10.9
                },
                "33": {
                    y: 4
                }
            })
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1, 0, 60, {
                "0": {
                    x: 445.75,
                    y: 619.45,
                    kx: 0.194,
                    ky: 2.947
                },
                "4": {
                    y: 619.5,
                    kx: 0.321,
                    ky: 2.82
                },
                "5": {
                    x: 447.35,
                    y: 639.9,
                    kx: 1.282,
                    ky: 1.86
                },
                "6": {
                    x: 441.9,
                    y: 645.45,
                    kx: 1.276,
                    ky: 1.865
                },
                "8": {
                    x: 445.65,
                    y: 619.35,
                    kx: 0.255,
                    ky: 2.886
                },
                "9": {
                    x: 445.8,
                    y: 619.45,
                    kx: 0.108,
                    ky: 3.034
                }
            });
    });

    var Graphic223 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 10, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[148]);
        this.addTimedChild(instance1);
    });

    var Graphic210 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 42, loop: false });
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[107])
            .setTransform(9.85, 31.2, 1.3, 1.3);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[106])
            .setTransform(9.85, 31.2, 1.3, 1.3);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[105])
            .setTransform(9.85, 31.2, 1.3, 1.3);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[104])
            .setTransform(9.85, 31.2, 1.3, 1.3);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[103])
            .setTransform(9.7, 31.2, 1.3, 1.3);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[102])
            .setTransform(-801.7, -1038.95, 1.3, 1.3);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[101])
            .setTransform(-801.7, -1038.95, 1.3, 1.3);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[100])
            .setTransform(-801.7, -1038.95, 1.3, 1.3);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[99])
            .setTransform(-801.7, -1038.95, 1.3, 1.3);
        this.addTimedChild(instance9)
            .addTimedChild(instance8)
            .addTimedChild(instance7)
            .addTimedChild(instance6)
            .addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic211 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 42, loop: false });
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[107])
            .setTransform(9.85, 31.2, 1.3, 1.3);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[106])
            .setTransform(9.85, 31.2, 1.3, 1.3);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[105])
            .setTransform(9.85, 31.2, 1.3, 1.3);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[104])
            .setTransform(9.85, 31.2, 1.3, 1.3);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[103])
            .setTransform(9.7, 31.2, 1.3, 1.3);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[102])
            .setTransform(-801.7, -1038.95, 1.3, 1.3);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[101])
            .setTransform(-801.7, -1038.95, 1.3, 1.3);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[100])
            .setTransform(-801.7, -1038.95, 1.3, 1.3);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[99])
            .setTransform(-801.7, -1038.95, 1.3, 1.3);
        this.addTimedChild(instance9)
            .addTimedChild(instance8)
            .addTimedChild(instance7)
            .addTimedChild(instance6)
            .addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic212 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 45, loop: false });
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[357]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[356]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[351]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[355]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[354]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[353]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[352]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[351]);
        this.addTimedChild(instance8)
            .addTimedChild(instance7)
            .addTimedChild(instance6)
            .addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic221 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 14, loop: false });
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[367])
            .setTransform(-6.95, -0.3, 1, 1, 0, 0.472, 2.67);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[366]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[365]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[364]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[363]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[362]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[101])
            .setTransform(584.2, -901.35, 1.166, 1.031, 0, 0.149, 3.014);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[361]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[360]);
        this.addTimedChild(instance9)
            .addTimedChild(instance8)
            .addTimedChild(instance7)
            .addTimedChild(instance6)
            .addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic222 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 14, loop: false });
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[367])
            .setTransform(-6.95, -0.3, 1, 1, 0, 0.472, 2.67);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[366]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[365]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[364]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[363]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[362]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[101])
            .setTransform(584.2, -901.35, 1.166, 1.031, 0, 0.149, 3.014);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[361]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[360]);
        this.addTimedChild(instance9)
            .addTimedChild(instance8)
            .addTimedChild(instance7)
            .addTimedChild(instance6)
            .addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic220 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 15, loop: false });
        var instance1 = new Sprite(fromFrame("REPLACE_HEADSET"))
            .setTransform(-4.55, 30.5, 0.476, 0.476);
        this.addTimedChild(instance1);
    });

    var Graphic213 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 45, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[368]);
        this.addTimedChild(instance1);
    });

    var Graphic214 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 45, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[368]);
        this.addTimedChild(instance1);
    });

    var Graphic170 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[188])
            .setTransform(-17.65, 14.8, 0.95);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[187])
            .setTransform(-470, -630.85, 0.95);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[186])
            .setTransform(-470, -630.85, 0.95);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[185])
            .setTransform(-470, -630.85, 0.95);
        this.addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic171 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[193])
            .setTransform(14.05, 13.35, 0.95);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[192])
            .setTransform(-438.25, -629.9, 0.95);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[191])
            .setTransform(-438.25, -629.9, 0.95);
        this.addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic215 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[196]);
        var instance2 = new Graphic171(MovieClip.SYNCHED)
            .setTransform(-9.2, -101.15);
        var instance1 = new Graphic170(MovieClip.SYNCHED)
            .setTransform(22.55, -100.2);
        this.addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic181 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 4, loop: false });
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[383]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[382]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[381]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[380]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[379]);
        this.addTimedChild(instance5, 0, 2, {
                "0": {
                    x: -0.25,
                    y: 2.55
                },
                "1": {
                    x: -1.15,
                    y: 2.3
                }
            })
            .addTimedChild(instance4, 0, 2, {
                "0": {
                    x: 0,
                    y: 0
                },
                "1": {
                    x: -0.1,
                    y: -0.65
                }
            })
            .addTimedChild(instance3, 0, 2, {
                "0": {
                    x: -0.15,
                    y: 0.45
                },
                "1": {
                    x: 0.35,
                    y: 0
                }
            })
            .addTimedChild(instance2, 0, 2, {
                "0": {
                    x: 0,
                    y: 0
                },
                "1": {
                    x: 0.25,
                    y: 0.5
                }
            })
            .addTimedChild(instance1, 0, 2, {
                "0": {
                    x: -0.7,
                    y: 1.6
                },
                "1": {
                    x: -1.2,
                    y: 2.1
                }
            });
    });

    var Graphic179 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 5, loop: false });
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[383]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[382]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[381]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[380]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[379]);
        this.addTimedChild(instance5, 0, 2, {
                "0": {
                    x: -0.25,
                    y: 2.55
                },
                "1": {
                    x: -1.15,
                    y: 2.3
                }
            })
            .addTimedChild(instance4, 0, 2, {
                "0": {
                    x: 0,
                    y: 0
                },
                "1": {
                    x: -0.1,
                    y: -0.65
                }
            })
            .addTimedChild(instance3, 0, 2, {
                "0": {
                    x: -0.15,
                    y: 0.45
                },
                "1": {
                    x: 0.35,
                    y: 0
                }
            })
            .addTimedChild(instance2, 0, 2, {
                "0": {
                    x: 0,
                    y: 0
                },
                "1": {
                    x: 0.25,
                    y: 0.5
                }
            })
            .addTimedChild(instance1, 0, 2, {
                "0": {
                    x: -0.7,
                    y: 1.6
                },
                "1": {
                    x: -1.2,
                    y: 2.1
                }
            });
    });

    var Graphic180 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 5, loop: false });
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[383]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[382]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[381]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[380]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[379]);
        this.addTimedChild(instance5, 0, 2, {
                "0": {
                    x: -0.25,
                    y: 2.55
                },
                "1": {
                    x: -1.15,
                    y: 2.3
                }
            })
            .addTimedChild(instance4, 0, 2, {
                "0": {
                    x: 0,
                    y: 0
                },
                "1": {
                    x: -0.1,
                    y: -0.65
                }
            })
            .addTimedChild(instance3, 0, 2, {
                "0": {
                    x: -0.15,
                    y: 0.45
                },
                "1": {
                    x: 0.35,
                    y: 0
                }
            })
            .addTimedChild(instance2, 0, 2, {
                "0": {
                    x: 0,
                    y: 0
                },
                "1": {
                    x: 0.25,
                    y: 0.5
                }
            })
            .addTimedChild(instance1, 0, 2, {
                "0": {
                    x: -0.7,
                    y: 1.6
                },
                "1": {
                    x: -1.2,
                    y: 2.1
                }
            });
    });

    var Graphic176 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 6, loop: false });
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[383]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[382]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[381]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[380]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[379]);
        this.addTimedChild(instance5, 0, 2, {
                "0": {
                    x: -0.25,
                    y: 2.55
                },
                "1": {
                    x: -1.15,
                    y: 2.3
                }
            })
            .addTimedChild(instance4, 0, 2, {
                "0": {
                    x: 0,
                    y: 0
                },
                "1": {
                    x: -0.1,
                    y: -0.65
                }
            })
            .addTimedChild(instance3, 0, 2, {
                "0": {
                    x: -0.15,
                    y: 0.45
                },
                "1": {
                    x: 0.35,
                    y: 0
                }
            })
            .addTimedChild(instance2, 0, 2, {
                "0": {
                    x: 0,
                    y: 0
                },
                "1": {
                    x: 0.25,
                    y: 0.5
                }
            })
            .addTimedChild(instance1, 0, 2, {
                "0": {
                    x: -0.7,
                    y: 1.6
                },
                "1": {
                    x: -1.2,
                    y: 2.1
                }
            });
    });

    var Graphic177 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 6, loop: false });
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[383]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[382]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[381]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[380]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[379]);
        this.addTimedChild(instance5, 0, 2, {
                "0": {
                    x: -0.25,
                    y: 2.55
                },
                "1": {
                    x: -1.15,
                    y: 2.3
                }
            })
            .addTimedChild(instance4, 0, 2, {
                "0": {
                    x: 0,
                    y: 0
                },
                "1": {
                    x: -0.1,
                    y: -0.65
                }
            })
            .addTimedChild(instance3, 0, 2, {
                "0": {
                    x: -0.15,
                    y: 0.45
                },
                "1": {
                    x: 0.35,
                    y: 0
                }
            })
            .addTimedChild(instance2, 0, 2, {
                "0": {
                    x: 0,
                    y: 0
                },
                "1": {
                    x: 0.25,
                    y: 0.5
                }
            })
            .addTimedChild(instance1, 0, 2, {
                "0": {
                    x: -0.7,
                    y: 1.6
                },
                "1": {
                    x: -1.2,
                    y: 2.1
                }
            });
    });

    var Graphic178 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 6, loop: false });
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[383]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[382]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[381]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[380]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[379]);
        this.addTimedChild(instance5, 0, 2, {
                "0": {
                    x: -0.25,
                    y: 2.55
                },
                "1": {
                    x: -1.15,
                    y: 2.3
                }
            })
            .addTimedChild(instance4, 0, 2, {
                "0": {
                    x: 0,
                    y: 0
                },
                "1": {
                    x: -0.1,
                    y: -0.65
                }
            })
            .addTimedChild(instance3, 0, 2, {
                "0": {
                    x: -0.15,
                    y: 0.45
                },
                "1": {
                    x: 0.35,
                    y: 0
                }
            })
            .addTimedChild(instance2, 0, 2, {
                "0": {
                    x: 0,
                    y: 0
                },
                "1": {
                    x: 0.25,
                    y: 0.5
                }
            })
            .addTimedChild(instance1, 0, 2, {
                "0": {
                    x: -0.7,
                    y: 1.6
                },
                "1": {
                    x: -1.2,
                    y: 2.1
                }
            });
    });

    var Graphic172 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 7, loop: false });
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[383]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[382]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[381]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[380]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[379]);
        this.addTimedChild(instance5, 0, 2, {
                "0": {
                    x: -0.25,
                    y: 2.55
                },
                "1": {
                    x: -1.15,
                    y: 2.3
                }
            })
            .addTimedChild(instance4, 0, 2, {
                "0": {
                    x: 0,
                    y: 0
                },
                "1": {
                    x: -0.1,
                    y: -0.65
                }
            })
            .addTimedChild(instance3, 0, 2, {
                "0": {
                    x: -0.15,
                    y: 0.45
                },
                "1": {
                    x: 0.35,
                    y: 0
                }
            })
            .addTimedChild(instance2, 0, 2, {
                "0": {
                    x: 0,
                    y: 0
                },
                "1": {
                    x: 0.25,
                    y: 0.5
                }
            })
            .addTimedChild(instance1, 0, 2, {
                "0": {
                    x: -0.7,
                    y: 1.6
                },
                "1": {
                    x: -1.2,
                    y: 2.1
                }
            });
    });

    var Graphic173 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 7, loop: false });
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[383]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[382]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[381]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[380]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[379]);
        this.addTimedChild(instance5, 0, 2, {
                "0": {
                    x: -0.25,
                    y: 2.55
                },
                "1": {
                    x: -1.15,
                    y: 2.3
                }
            })
            .addTimedChild(instance4, 0, 2, {
                "0": {
                    x: 0,
                    y: 0
                },
                "1": {
                    x: -0.1,
                    y: -0.65
                }
            })
            .addTimedChild(instance3, 0, 2, {
                "0": {
                    x: -0.15,
                    y: 0.45
                },
                "1": {
                    x: 0.35,
                    y: 0
                }
            })
            .addTimedChild(instance2, 0, 2, {
                "0": {
                    x: 0,
                    y: 0
                },
                "1": {
                    x: 0.25,
                    y: 0.5
                }
            })
            .addTimedChild(instance1, 0, 2, {
                "0": {
                    x: -0.7,
                    y: 1.6
                },
                "1": {
                    x: -1.2,
                    y: 2.1
                }
            });
    });

    var Graphic174 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 7, loop: false });
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[383]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[382]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[381]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[380]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[379]);
        this.addTimedChild(instance5, 0, 2, {
                "0": {
                    x: -0.25,
                    y: 2.55
                },
                "1": {
                    x: -1.15,
                    y: 2.3
                }
            })
            .addTimedChild(instance4, 0, 2, {
                "0": {
                    x: 0,
                    y: 0
                },
                "1": {
                    x: -0.1,
                    y: -0.65
                }
            })
            .addTimedChild(instance3, 0, 2, {
                "0": {
                    x: -0.15,
                    y: 0.45
                },
                "1": {
                    x: 0.35,
                    y: 0
                }
            })
            .addTimedChild(instance2, 0, 2, {
                "0": {
                    x: 0,
                    y: 0
                },
                "1": {
                    x: 0.25,
                    y: 0.5
                }
            })
            .addTimedChild(instance1, 0, 2, {
                "0": {
                    x: -0.7,
                    y: 1.6
                },
                "1": {
                    x: -1.2,
                    y: 2.1
                }
            });
    });

    var Graphic175 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 7, loop: false });
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[383]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[382]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[381]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[380]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[379]);
        this.addTimedChild(instance5, 0, 2, {
                "0": {
                    x: -0.25,
                    y: 2.55
                },
                "1": {
                    x: -1.15,
                    y: 2.3
                }
            })
            .addTimedChild(instance4, 0, 2, {
                "0": {
                    x: 0,
                    y: 0
                },
                "1": {
                    x: -0.1,
                    y: -0.65
                }
            })
            .addTimedChild(instance3, 0, 2, {
                "0": {
                    x: -0.15,
                    y: 0.45
                },
                "1": {
                    x: 0.35,
                    y: 0
                }
            })
            .addTimedChild(instance2, 0, 2, {
                "0": {
                    x: 0,
                    y: 0
                },
                "1": {
                    x: 0.25,
                    y: 0.5
                }
            })
            .addTimedChild(instance1, 0, 2, {
                "0": {
                    x: -0.7,
                    y: 1.6
                },
                "1": {
                    x: -1.2,
                    y: 2.1
                }
            });
    });

    var Graphic219 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 7, loop: false });
        var instance4 = new Graphic175(MovieClip.SYNCHED)
            .setTransform(-139.45, -98.1);
        var instance3 = new Graphic174(MovieClip.SYNCHED)
            .setTransform(-187.95, 43);
        var instance2 = new Graphic173(MovieClip.SYNCHED)
            .setTransform(144.55, 75.75);
        var instance1 = new Graphic172(MovieClip.SYNCHED);
        var instance7 = new Graphic178(MovieClip.SYNCHED)
            .setTransform(201, 48.65);
        var instance6 = new Graphic177(MovieClip.SYNCHED)
            .setTransform(79.65, -98.7);
        var instance5 = new Graphic176(MovieClip.SYNCHED);
        var instance9 = new Graphic180(MovieClip.SYNCHED)
            .setTransform(171.05, -15.65);
        var instance8 = new Graphic179(MovieClip.SYNCHED);
        var instance10 = new Graphic181(MovieClip.SYNCHED)
            .setTransform(-191.95, -21.4);
        this.addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1, 0, 7, {
                "0": {
                    x: 124.8,
                    y: -58.6
                }
            })
            .addTimedChild(instance7, 1, 6)
            .addTimedChild(instance6, 1, 6)
            .addTimedChild(instance5, 1, 6, {
                "1": {
                    x: -167.6,
                    y: 100.05
                }
            })
            .addTimedChild(instance9, 2, 5)
            .addTimedChild(instance8, 2, 5, {
                "2": {
                    x: -70.55,
                    y: -102.55
                }
            })
            .addTimedChild(instance10, 3, 4);
    });

    var Graphic187 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 8, loop: false });
        var instance1 = new Sprite(fromFrame("REPLACE_EMOJI_HAPPY"));
        this.addTimedChild(instance1);
    });

    var Graphic191 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 8, loop: false });
        var instance1 = new Sprite(fromFrame("REPLACE_EMOJI_HAPPY"));
        this.addTimedChild(instance1);
    });

    var Graphic188 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 7, loop: false });
        var instance1 = new Sprite(fromFrame("REPLACE_EMOJI_HAPPY"));
        this.addTimedChild(instance1);
    });

    var Graphic186 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 8, loop: false });
        var instance1 = new Sprite(fromFrame("REPLACE_EMOJI_HAPPY"));
        this.addTimedChild(instance1);
    });

    var Graphic189 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 8, loop: false });
        var instance1 = new Sprite(fromFrame("REPLACE_EMOJI_HAPPY"));
        this.addTimedChild(instance1);
    });

    var Graphic190 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 8, loop: false });
        var instance1 = new Sprite(fromFrame("REPLACE_EMOJI_HAPPY"));
        this.addTimedChild(instance1);
    });

    var Graphic182 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 8, loop: false });
        var instance1 = new Sprite(fromFrame("REPLACE_EMOJI_HAPPY"));
        this.addTimedChild(instance1);
    });

    var Graphic183 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 8, loop: false });
        var instance1 = new Sprite(fromFrame("REPLACE_EMOJI_HAPPY"));
        this.addTimedChild(instance1);
    });

    var Graphic184 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 8, loop: false });
        var instance1 = new Sprite(fromFrame("REPLACE_EMOJI_HAPPY"));
        this.addTimedChild(instance1);
    });

    var Graphic185 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 8, loop: false });
        var instance1 = new Sprite(fromFrame("REPLACE_EMOJI_HAPPY"));
        this.addTimedChild(instance1);
    });

    var Graphic216 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance4 = new Graphic185(MovieClip.SYNCHED);
        var instance3 = new Graphic184(MovieClip.SYNCHED);
        var instance2 = new Graphic183(MovieClip.SYNCHED);
        var instance1 = new Graphic182(MovieClip.SYNCHED);
        var instance9 = new Graphic190(MovieClip.SYNCHED);
        var instance8 = new Graphic189(MovieClip.SYNCHED);
        var instance5 = new Graphic186(MovieClip.SYNCHED);
        var instance7 = new Graphic188(MovieClip.SYNCHED);
        var instance10 = new Graphic191(MovieClip.SYNCHED);
        var instance6 = new Graphic187(MovieClip.SYNCHED);
        this.addTimedChild(instance4, 23, 8, {
                "23": {
                    x: 937.05,
                    y: 974.25,
                    sx: 0.317,
                    sy: 0.317,
                    r: -0.079
                },
                "24": {
                    x: 968.282,
                    y: 947.745,
                    r: 0.149
                },
                "25": {
                    x: 996.085,
                    y: 926.923,
                    r: 0.34
                },
                "26": {
                    x: 1019.624,
                    y: 911.143,
                    r: 0.495
                },
                "27": {
                    x: 1038.257,
                    y: 899.661,
                    r: 0.615
                },
                "28": {
                    x: 1051.757,
                    y: 891.928,
                    r: 0.702
                },
                "29": {
                    x: 1059.969,
                    y: 887.441,
                    r: 0.753
                },
                "30": {
                    x: 1062.7,
                    y: 885.85,
                    r: 0.771
                }
            })
            .addTimedChild(instance3, 23, 8, {
                "23": {
                    x: 937.05,
                    y: 974.25,
                    sx: 0.317,
                    sy: 0.317,
                    r: -0.079
                },
                "24": {
                    x: 870.839,
                    y: 964.687,
                    r: -0.379
                },
                "25": {
                    x: 818.93,
                    y: 957.476,
                    r: -0.631
                },
                "26": {
                    x: 779.245,
                    y: 951.452,
                    r: -0.837
                },
                "27": {
                    x: 749.938,
                    y: 946.451,
                    r: -0.996
                },
                "28": {
                    x: 729.784,
                    y: 942.528,
                    r: -1.11
                },
                "29": {
                    x: 717.939,
                    y: 940.021,
                    r: -1.178
                },
                "30": {
                    x: 714,
                    y: 939.1,
                    r: -1.201
                }
            })
            .addTimedChild(instance2, 23, 8, {
                "23": {
                    x: 937.05,
                    y: 974.25,
                    sx: 0.317,
                    sy: 0.317,
                    r: -0.079
                },
                "24": {
                    x: 957.976,
                    y: 928.236,
                    sx: 0.309,
                    sy: 0.309,
                    r: 0.076
                },
                "25": {
                    x: 977.045,
                    y: 888.337,
                    sx: 0.301,
                    sy: 0.301,
                    r: 0.213
                },
                "26": {
                    x: 994.079,
                    y: 854.236,
                    sx: 0.294,
                    sy: 0.294,
                    r: 0.333
                },
                "27": {
                    x: 1008.921,
                    y: 825.511,
                    sx: 0.288,
                    sy: 0.288,
                    r: 0.436
                },
                "28": {
                    x: 1021.411,
                    y: 801.782,
                    sx: 0.284,
                    sy: 0.284,
                    r: 0.522
                },
                "29": {
                    x: 1031.64,
                    y: 782.883,
                    sx: 0.28,
                    sy: 0.28,
                    r: 0.593
                },
                "30": {
                    x: 1039.4,
                    y: 768.45,
                    sx: 0.277,
                    sy: 0.277,
                    r: 0.646
                }
            })
            .addTimedChild(instance1, 23, 8, {
                "23": {
                    x: 937.05,
                    y: 974.25,
                    sx: 0.317,
                    sy: 0.317,
                    r: -0.079
                },
                "24": {
                    x: 884.977,
                    y: 921.951,
                    r: -0.263
                },
                "25": {
                    x: 842.649,
                    y: 878.559,
                    r: -0.417
                },
                "26": {
                    x: 809.086,
                    y: 843.431,
                    r: -0.542
                },
                "27": {
                    x: 783.587,
                    y: 816.148,
                    r: -0.64
                },
                "28": {
                    x: 765.738,
                    y: 796.651,
                    r: -0.709
                },
                "29": {
                    x: 755.135,
                    y: 784.878,
                    r: -0.751
                },
                "30": {
                    x: 751.55,
                    y: 780.85,
                    r: -0.765
                }
            })
            .addTimedChild(instance9, 25, 8, {
                "25": {
                    x: 937.05,
                    y: 974.25,
                    sx: 0.317,
                    sy: 0.317,
                    r: -0.079
                },
                "26": {
                    x: 968.281,
                    y: 933.79,
                    r: 0.109
                },
                "27": {
                    x: 997.127,
                    y: 898.907,
                    r: 0.276
                },
                "28": {
                    x: 1023.195,
                    y: 869.384,
                    r: 0.421
                },
                "29": {
                    x: 1046.123,
                    y: 844.713,
                    r: 0.546
                },
                "30": {
                    x: 1065.608,
                    y: 824.653,
                    r: 0.651
                },
                "31": {
                    x: 1081.604,
                    y: 808.706,
                    r: 0.737
                },
                "32": {
                    x: 1093.9,
                    y: 796.75,
                    r: 0.802
                }
            })
            .addTimedChild(instance8, 25, 8, {
                "25": {
                    x: 937.05,
                    y: 974.25,
                    sx: 0.317,
                    sy: 0.317,
                    r: -0.079
                },
                "26": {
                    x: 908.697,
                    y: 920.893,
                    r: -0.127
                },
                "27": {
                    x: 884.294,
                    y: 874.857,
                    r: -0.168
                },
                "28": {
                    x: 863.692,
                    y: 836.023,
                    r: -0.204
                },
                "29": {
                    x: 846.876,
                    y: 804.204,
                    r: -0.232
                },
                "30": {
                    x: 833.68,
                    y: 779.165,
                    r: -0.255
                },
                "31": {
                    x: 824.087,
                    y: 760.958,
                    r: -0.272
                },
                "32": {
                    x: 818,
                    y: 749.5,
                    r: -0.282
                }
            })
            .addTimedChild(instance5, 24, 8, {
                "24": {
                    x: 930.05,
                    y: 931.05,
                    sx: 0.317,
                    sy: 0.317,
                    r: 0.258
                },
                "25": {
                    x: 943.372,
                    y: 876.182,
                    r: 0.268
                },
                "26": {
                    x: 954.666,
                    y: 829.703,
                    r: 0.277
                },
                "27": {
                    x: 963.952,
                    y: 791.555,
                    r: 0.283
                },
                "28": {
                    x: 971.145,
                    y: 761.908,
                    r: 0.289
                },
                "29": {
                    x: 976.294,
                    y: 740.578,
                    r: 0.293
                },
                "30": {
                    x: 979.406,
                    y: 727.822,
                    r: 0.295
                },
                "31": {
                    x: 980.4,
                    y: 723.55,
                    r: 0.296
                }
            })
            .addTimedChild(instance7, 25, 7, {
                "25": {
                    x: 943.7,
                    y: 1007.95,
                    sx: 0.317,
                    sy: 0.317,
                    r: -0.373
                },
                "26": {
                    x: 986.587,
                    y: 969.619,
                    r: 0.083
                },
                "27": {
                    x: 1029.927,
                    y: 942.199,
                    r: 0.471
                },
                "28": {
                    x: 1069.033,
                    y: 924.758,
                    r: 0.791
                },
                "29": {
                    x: 1100.662,
                    y: 914.805,
                    r: 1.043
                },
                "30": {
                    x: 1123.723,
                    y: 909.763,
                    r: 1.228
                },
                "31": {
                    x: 1138,
                    y: 907.35,
                    r: 1.344
                }
            })
            .addTimedChild(instance10, 26, 8, {
                "26": {
                    x: 893,
                    y: 964.6,
                    sx: 0.317,
                    sy: 0.317,
                    r: 0.054
                },
                "27": {
                    x: 862.551,
                    y: 950.442,
                    r: -0.11
                },
                "28": {
                    x: 833.383,
                    y: 936.964,
                    r: -0.274
                },
                "29": {
                    x: 805.681,
                    y: 923.862,
                    r: -0.438
                },
                "30": {
                    x: 779.348,
                    y: 910.997,
                    r: -0.601
                },
                "31": {
                    x: 754.529,
                    y: 898.001,
                    r: -0.765
                },
                "32": {
                    x: 731.128,
                    y: 884.862,
                    r: -0.929
                },
                "33": {
                    x: 709.1,
                    y: 871.15,
                    r: -1.093
                }
            })
            .addTimedChild(instance6, 25, 8, {
                "25": {
                    x: 900,
                    y: 999.5,
                    sx: 0.317,
                    sy: 0.317,
                    r: 0.183
                },
                "26": {
                    x: 871.761,
                    y: 992.206,
                    r: -0.198
                },
                "27": {
                    x: 847.153,
                    y: 985.759,
                    r: -0.53
                },
                "28": {
                    x: 826.294,
                    y: 980.22,
                    r: -0.812
                },
                "29": {
                    x: 809.044,
                    y: 975.677,
                    r: -1.045
                },
                "30": {
                    x: 795.492,
                    y: 972.092,
                    r: -1.228
                },
                "31": {
                    x: 785.616,
                    y: 969.491,
                    r: -1.362
                },
                "32": {
                    x: 779.4,
                    y: 967.85,
                    r: -1.445
                }
            });
    });

    var Graphic193 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 49, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[148]);
        this.addTimedChild(instance1);
    });

    var Graphic194 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[149])
            .setTransform(-466.8, -453.85);
        this.addTimedChild(instance1);
    });

    var Graphic195 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[150])
            .setTransform(-504.35, -453.65);
        this.addTimedChild(instance1);
    });

    var Graphic196 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 16, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[151])
            .setTransform(-458.45, -480.9, 0.972);
        this.addTimedChild(instance1);
    });

    var Graphic206 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 17, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[151])
            .setTransform(-458.45, -480.9, 0.972);
        this.addTimedChild(instance1);
    });

    var Graphic208 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[151])
            .setTransform(-458.45, -480.9, 0.972);
        this.addTimedChild(instance1);
    });

    var Graphic197 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 16, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[151])
            .setTransform(-458.45, -480.9, 0.972);
        this.addTimedChild(instance1);
    });

    var Graphic207 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 17, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[151])
            .setTransform(-458.45, -480.9, 0.972);
        this.addTimedChild(instance1);
    });

    var Graphic209 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[151])
            .setTransform(-458.45, -480.9, 0.972);
        this.addTimedChild(instance1);
    });

    var Graphic198 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[157]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[156]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[155]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[154]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[153]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[152]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[167]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[166]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[165]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[164]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[163]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[162]);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[157]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[156]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[155]);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[154]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[153]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[152]);
        var instance24 = new Graphics()
            .drawCommands(shapes.s01[167]);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[166]);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[165]);
        var instance21 = new Graphics()
            .drawCommands(shapes.s01[164]);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[163]);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[162]);
        var instance30 = new Graphics()
            .drawCommands(shapes.s01[157]);
        var instance29 = new Graphics()
            .drawCommands(shapes.s01[156]);
        var instance28 = new Graphics()
            .drawCommands(shapes.s01[155]);
        var instance27 = new Graphics()
            .drawCommands(shapes.s01[154]);
        var instance26 = new Graphics()
            .drawCommands(shapes.s01[153]);
        var instance25 = new Graphics()
            .drawCommands(shapes.s01[152]);
        var instance36 = new Graphics()
            .drawCommands(shapes.s01[167])
            .setTransform(-2.45, 1.7, 1.289, 0.827);
        var instance35 = new Graphics()
            .drawCommands(shapes.s01[166])
            .setTransform(-0.05, 1.8, 1.289, 0.827);
        var instance34 = new Graphics()
            .drawCommands(shapes.s01[165])
            .setTransform(6.85, 1.9, 0.95, 0.95);
        var instance33 = new Graphics()
            .drawCommands(shapes.s01[164])
            .setTransform(1.1, 0, 0.95, 0.95);
        var instance32 = new Graphics()
            .drawCommands(shapes.s01[163])
            .setTransform(-9.25, -1.15, 0.95, 0.95);
        var instance31 = new Graphics()
            .drawCommands(shapes.s01[162])
            .setTransform(-0.25, -0.15, 0.95, 0.95);
        this.addTimedChild(instance6, 0, 16, {
                "0": {
                    x: -386.35,
                    y: -557.05,
                    r: 0.174
                }
            })
            .addTimedChild(instance5, 0, 16, {
                "0": {
                    x: -385.25,
                    y: -559.2,
                    r: 0.174
                }
            })
            .addTimedChild(instance4, 0, 16, {
                "0": {
                    x: -486.6,
                    y: -478.35
                }
            })
            .addTimedChild(instance3, 0, 16, {
                "0": {
                    x: -455.15,
                    y: -505.5,
                    r: 0.06
                }
            })
            .addTimedChild(instance2, 0, 16, {
                "0": {
                    x: -588.15,
                    y: -407.35,
                    sx: 1.216,
                    sy: 0.851
                }
            })
            .addTimedChild(instance1, 0, 16, {
                "0": {
                    x: -596.45,
                    y: -406.55,
                    sx: 1.239,
                    sy: 0.851
                }
            })
            .addTimedChild(instance12, 16, 1, {
                "16": {
                    x: -2.45,
                    y: 1.7,
                    sx: 1.289,
                    sy: 0.827
                }
            })
            .addTimedChild(instance11, 16, 1, {
                "16": {
                    x: -0.05,
                    y: 1.8,
                    sx: 1.289,
                    sy: 0.827
                }
            })
            .addTimedChild(instance10, 16, 1, {
                "16": {
                    x: 6.85,
                    y: 1.9,
                    sx: 0.95,
                    sy: 0.95
                }
            })
            .addTimedChild(instance9, 16, 1, {
                "16": {
                    x: 1.1,
                    sx: 0.95,
                    sy: 0.95
                }
            })
            .addTimedChild(instance8, 16, 1, {
                "16": {
                    x: -9.25,
                    y: -1.15,
                    sx: 0.95,
                    sy: 0.95
                }
            })
            .addTimedChild(instance7, 16, 1, {
                "16": {
                    x: -0.25,
                    y: -0.15,
                    sx: 0.95,
                    sy: 0.95
                }
            })
            .addTimedChild(instance18, 17, 17, {
                "17": {
                    x: -386.35,
                    y: -557.05,
                    r: 0.174
                }
            })
            .addTimedChild(instance17, 17, 17, {
                "17": {
                    x: -385.25,
                    y: -559.2,
                    r: 0.174
                }
            })
            .addTimedChild(instance16, 17, 17, {
                "17": {
                    x: -486.6,
                    y: -478.35
                }
            })
            .addTimedChild(instance15, 17, 17, {
                "17": {
                    x: -455.15,
                    y: -505.5,
                    r: 0.06
                }
            })
            .addTimedChild(instance14, 17, 17, {
                "17": {
                    x: -588.15,
                    y: -407.35,
                    sx: 1.216,
                    sy: 0.851
                }
            })
            .addTimedChild(instance13, 17, 17, {
                "17": {
                    x: -596.45,
                    y: -406.55,
                    sx: 1.239,
                    sy: 0.851
                }
            })
            .addTimedChild(instance24, 34, 2, {
                "34": {
                    x: -2.45,
                    y: 1.7,
                    sx: 1.289,
                    sy: 0.827
                }
            })
            .addTimedChild(instance23, 34, 2, {
                "34": {
                    x: -0.05,
                    y: 1.8,
                    sx: 1.289,
                    sy: 0.827
                }
            })
            .addTimedChild(instance22, 34, 2, {
                "34": {
                    x: 6.85,
                    y: 1.9,
                    sx: 0.95,
                    sy: 0.95
                }
            })
            .addTimedChild(instance21, 34, 2, {
                "34": {
                    x: 1.1,
                    sx: 0.95,
                    sy: 0.95
                }
            })
            .addTimedChild(instance20, 34, 2, {
                "34": {
                    x: -9.25,
                    y: -1.15,
                    sx: 0.95,
                    sy: 0.95
                }
            })
            .addTimedChild(instance19, 34, 2, {
                "34": {
                    x: -0.25,
                    y: -0.15,
                    sx: 0.95,
                    sy: 0.95
                }
            })
            .addTimedChild(instance30, 36, 9, {
                "36": {
                    x: -386.35,
                    y: -557.05,
                    r: 0.174
                }
            })
            .addTimedChild(instance29, 36, 9, {
                "36": {
                    x: -385.25,
                    y: -559.2,
                    r: 0.174
                }
            })
            .addTimedChild(instance28, 36, 9, {
                "36": {
                    x: -486.6,
                    y: -478.35
                }
            })
            .addTimedChild(instance27, 36, 9, {
                "36": {
                    x: -455.15,
                    y: -505.5,
                    r: 0.06
                }
            })
            .addTimedChild(instance26, 36, 9, {
                "36": {
                    x: -588.15,
                    y: -407.35,
                    sx: 1.216,
                    sy: 0.851
                }
            })
            .addTimedChild(instance25, 36, 9, {
                "36": {
                    x: -596.45,
                    y: -406.55,
                    sx: 1.239,
                    sy: 0.851
                }
            })
            .addTimedChild(instance36, 45, 14)
            .addTimedChild(instance35, 45, 14)
            .addTimedChild(instance34, 45, 14)
            .addTimedChild(instance33, 45, 14)
            .addTimedChild(instance32, 45, 14)
            .addTimedChild(instance31, 45, 14);
    });

    var Graphic192 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[24]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[398]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[392]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[384]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[399]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[393]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[385]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[170]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[24]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[400]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[394]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[386]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[170]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[398]);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[392]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[384]);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[29]);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[387]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[26]);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[401]);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[395]);
        var instance21 = new Graphics()
            .drawCommands(shapes.s01[388]);
        var instance26 = new Graphics()
            .drawCommands(shapes.s01[399]);
        var instance25 = new Graphics()
            .drawCommands(shapes.s01[393]);
        var instance24 = new Graphics()
            .drawCommands(shapes.s01[385]);
        var instance27 = new Graphics()
            .drawCommands(shapes.s01[24]);
        var instance31 = new Graphics()
            .drawCommands(shapes.s01[29]);
        var instance30 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance29 = new Graphics()
            .drawCommands(shapes.s01[387]);
        var instance28 = new Graphics()
            .drawCommands(shapes.s01[26]);
        var instance32 = new Graphics()
            .drawCommands(shapes.s01[170]);
        var instance35 = new Graphics()
            .drawCommands(shapes.s01[400]);
        var instance34 = new Graphics()
            .drawCommands(shapes.s01[394]);
        var instance33 = new Graphics()
            .drawCommands(shapes.s01[386]);
        var instance36 = new Graphics()
            .drawCommands(shapes.s01[389]);
        var instance40 = new Graphics()
            .drawCommands(shapes.s01[402]);
        var instance39 = new Graphics()
            .drawCommands(shapes.s01[397]);
        var instance38 = new Graphics()
            .drawCommands(shapes.s01[396]);
        var instance37 = new Graphics()
            .drawCommands(shapes.s01[390]);
        var instance44 = new Graphics()
            .drawCommands(shapes.s01[29]);
        var instance43 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance42 = new Graphics()
            .drawCommands(shapes.s01[387]);
        var instance41 = new Graphics()
            .drawCommands(shapes.s01[26]);
        var instance47 = new Graphics()
            .drawCommands(shapes.s01[398]);
        var instance46 = new Graphics()
            .drawCommands(shapes.s01[392]);
        var instance45 = new Graphics()
            .drawCommands(shapes.s01[384]);
        var instance51 = new Graphics()
            .drawCommands(shapes.s01[29]);
        var instance50 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance49 = new Graphics()
            .drawCommands(shapes.s01[387]);
        var instance48 = new Graphics()
            .drawCommands(shapes.s01[26]);
        var instance54 = new Graphics()
            .drawCommands(shapes.s01[401]);
        var instance53 = new Graphics()
            .drawCommands(shapes.s01[395]);
        var instance52 = new Graphics()
            .drawCommands(shapes.s01[388]);
        var instance57 = new Graphics()
            .drawCommands(shapes.s01[399]);
        var instance56 = new Graphics()
            .drawCommands(shapes.s01[393]);
        var instance55 = new Graphics()
            .drawCommands(shapes.s01[385]);
        var instance60 = new Graphics()
            .drawCommands(shapes.s01[401]);
        var instance59 = new Graphics()
            .drawCommands(shapes.s01[395]);
        var instance58 = new Graphics()
            .drawCommands(shapes.s01[388]);
        var instance61 = new Graphics()
            .drawCommands(shapes.s01[391]);
        var instance62 = new Graphics()
            .drawCommands(shapes.s01[169]);
        this.addTimedChild(instance1, 0, 1)
            .addTimedChild(instance4, 1, 1)
            .addTimedChild(instance3, 1, 1)
            .addTimedChild(instance2, 1, 1)
            .addTimedChild(instance7, 2, 1)
            .addTimedChild(instance6, 2, 1)
            .addTimedChild(instance5, 2, 1)
            .addTimedChild(instance8, 3, 1)
            .addTimedChild(instance9, 4, 1)
            .addTimedChild(instance12, 5, 1)
            .addTimedChild(instance11, 5, 1)
            .addTimedChild(instance10, 5, 1)
            .addTimedChild(instance13, 6, 1)
            .addTimedChild(instance16, 7, 1)
            .addTimedChild(instance15, 7, 1)
            .addTimedChild(instance14, 7, 1)
            .addTimedChild(instance20, 8, 1, {
                "8": {
                    x: -478.4,
                    y: -525.85
                }
            })
            .addTimedChild(instance19, 8, 1, {
                "8": {
                    y: 2.5
                }
            })
            .addTimedChild(instance18, 8, 1, {
                "8": {
                    x: -478.4,
                    y: -525.85
                }
            })
            .addTimedChild(instance17, 8, 1, {
                "8": {
                    x: -478.4,
                    y: -525.85
                }
            })
            .addTimedChild(instance23, 9, 1)
            .addTimedChild(instance22, 9, 1)
            .addTimedChild(instance21, 9, 1)
            .addTimedChild(instance26, 10, 1)
            .addTimedChild(instance25, 10, 1)
            .addTimedChild(instance24, 10, 1)
            .addTimedChild(instance27, 11, 1)
            .addTimedChild(instance31, 12, 1, {
                "12": {
                    x: -478.4,
                    y: -525.85
                }
            })
            .addTimedChild(instance30, 12, 1, {
                "12": {
                    y: 2.5
                }
            })
            .addTimedChild(instance29, 12, 1, {
                "12": {
                    x: -478.4,
                    y: -525.85
                }
            })
            .addTimedChild(instance28, 12, 1, {
                "12": {
                    x: -478.4,
                    y: -525.85
                }
            })
            .addTimedChild(instance32, 13, 1)
            .addTimedChild(instance35, 14, 1)
            .addTimedChild(instance34, 14, 1)
            .addTimedChild(instance33, 14, 1)
            .addTimedChild(instance36, 15, 1)
            .addTimedChild(instance40, 16, 1)
            .addTimedChild(instance39, 16, 1)
            .addTimedChild(instance38, 16, 1)
            .addTimedChild(instance37, 16, 1)
            .addTimedChild(instance44, 17, 1, {
                "17": {
                    x: -478.4,
                    y: -525.85
                }
            })
            .addTimedChild(instance43, 17, 1, {
                "17": {
                    y: 2.5
                }
            })
            .addTimedChild(instance42, 17, 1, {
                "17": {
                    x: -478.4,
                    y: -525.85
                }
            })
            .addTimedChild(instance41, 17, 1, {
                "17": {
                    x: -478.4,
                    y: -525.85
                }
            })
            .addTimedChild(instance47, 18, 1)
            .addTimedChild(instance46, 18, 1)
            .addTimedChild(instance45, 18, 1)
            .addTimedChild(instance51, 19, 2, {
                "19": {
                    x: -478.4,
                    y: -525.85
                }
            })
            .addTimedChild(instance50, 19, 2, {
                "19": {
                    y: 2.5
                }
            })
            .addTimedChild(instance49, 19, 2, {
                "19": {
                    x: -478.4,
                    y: -525.85
                }
            })
            .addTimedChild(instance48, 19, 2, {
                "19": {
                    x: -478.4,
                    y: -525.85
                }
            })
            .addTimedChild(instance54, 21, 1)
            .addTimedChild(instance53, 21, 1)
            .addTimedChild(instance52, 21, 1)
            .addTimedChild(instance57, 22, 1)
            .addTimedChild(instance56, 22, 1)
            .addTimedChild(instance55, 22, 1)
            .addTimedChild(instance60, 23, 1)
            .addTimedChild(instance59, 23, 1)
            .addTimedChild(instance58, 23, 1)
            .addTimedChild(instance61, 24, 26)
            .addTimedChild(instance62, 50, 9);
    });

    var Graphic199 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance1 = new Graphic192(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 59, {
            "0": {
                x: -6.45,
                y: -1.7,
                sx: 1,
                sy: 1
            },
            "50": {
                sx: 0.855,
                sy: 0.724
            },
            "51": {
                x: -6.408,
                y: -1.61,
                sx: 0.935,
                sy: 0.877
            },
            "52": {
                x: -6.423,
                y: -1.527,
                sx: 0.984,
                sy: 0.969
            },
            "53": {
                x: -6.45,
                y: -1.7,
                sx: 1,
                sy: 1
            },
            "56": {
                x: -6.454,
                y: -1.708,
                sx: 0.915,
                sy: 0.887
            },
            "57": {
                x: -6.45,
                y: -1.7,
                sx: 0.831,
                sy: 0.774
            }
        });
    });

    var Graphic200 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[177]);
        this.addTimedChild(instance1);
    });

    var Graphic201 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[180])
            .setTransform(-368.7, -483.9, 0.959);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[179])
            .setTransform(-383.8, -485.3);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic202 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[147]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[146])
            .setTransform(-585.65, -483.25);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic203 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[70]);
        this.addTimedChild(instance1);
    });

    var Graphic204 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[69])
            .setTransform(-657.05, -461.95);
        this.addTimedChild(instance1);
    });

    var Graphic205 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[184])
            .setTransform(-497.15, -407.2);
        this.addTimedChild(instance1);
    });

    var Graphic217 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance14 = new Graphic205(MovieClip.SYNCHED)
            .setTransform(17, -197.8);
        var instance13 = new Graphic204(MovieClip.SYNCHED);
        var instance12 = new Graphic203(MovieClip.SYNCHED);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[403]);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[404]);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[405]);
        var instance21 = new Graphics()
            .drawCommands(shapes.s01[406]);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[407]);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[408]);
        var instance24 = new Graphics()
            .drawCommands(shapes.s01[409]);
        var instance25 = new Graphics()
            .drawCommands(shapes.s01[410]);
        var instance26 = new Graphics()
            .drawCommands(shapes.s01[411]);
        var instance10 = new Graphic202(MovieClip.SYNCHED)
            .setTransform(105.5, -122.2);
        var instance9 = new Graphic201(MovieClip.SYNCHED)
            .setTransform(-96.35, -120.15);
        var instance8 = new Graphic200(MovieClip.SYNCHED)
            .setTransform(4.15, -0.3);
        var instance7 = new Graphic199(MovieClip.SYNCHED)
            .setTransform(-6.85, -75.4);
        var instance6 = new Graphic198(MovieClip.SYNCHED);
        var instance5 = new Graphic197(MovieClip.SYNCHED);
        var instance4 = new Graphic196(MovieClip.SYNCHED);
        var instance16 = new Graphic207(MovieClip.SYNCHED);
        var instance15 = new Graphic206(MovieClip.SYNCHED);
        var instance18 = new Graphic209(MovieClip.SYNCHED);
        var instance17 = new Graphic208(MovieClip.SYNCHED);
        var instance3 = new Graphic195(MovieClip.SYNCHED);
        var instance2 = new Graphic194(MovieClip.SYNCHED);
        var instance1 = new Graphic193(MovieClip.SYNCHED);
        this.addTimedChild(instance14)
            .addTimedChild(instance13, 0, 59, {
                "0": {
                    x: 176.9,
                    y: -143.05,
                    r: 0
                },
                "45": {
                    x: 137.2,
                    y: -115.15
                },
                "46": {
                    x: 118.55,
                    y: -119.65
                },
                "47": {
                    x: 117.9,
                    y: -118.4,
                    r: 0.069
                },
                "49": {
                    x: 190.5,
                    y: -152.05,
                    r: 0
                },
                "50": {
                    x: 193.35,
                    y: -154.3
                },
                "51": {
                    x: 174.5,
                    y: -146.65,
                    r: 0.126
                },
                "52": {
                    x: 181.95,
                    y: -149.55,
                    r: 0
                },
                "53": {
                    x: 182.6,
                    y: -151.75
                }
            })
            .addTimedChild(instance12, 0, 59, {
                "0": {
                    x: 177.15,
                    y: -118,
                    r: 0
                },
                "45": {
                    x: 133.55,
                    y: -92.7,
                    r: 1.093
                },
                "46": {
                    x: 114.9,
                    y: -97.2
                },
                "47": {
                    x: 112.7,
                    y: -96.25,
                    r: 1.163
                },
                "49": {
                    x: 190.75,
                    y: -127,
                    r: -0.453
                },
                "50": {
                    x: 194.7,
                    y: -129.85,
                    r: -0.566
                },
                "51": {
                    x: 171.6,
                    y: -121.75,
                    r: 0.178
                },
                "52": {
                    x: 182.2,
                    y: -124.5,
                    r: 0.052
                },
                "53": {
                    x: 182.85,
                    y: -127.1
                }
            })
            .addTimedChild(instance11, 0, 45)
            .addTimedChild(instance19, 45, 1)
            .addTimedChild(instance20, 46, 1)
            .addTimedChild(instance21, 47, 2)
            .addTimedChild(instance22, 49, 1)
            .addTimedChild(instance23, 50, 1)
            .addTimedChild(instance24, 51, 1)
            .addTimedChild(instance25, 52, 1)
            .addTimedChild(instance26, 53, 6)
            .addTimedChild(instance10)
            .addTimedChild(instance9)
            .addTimedChild(instance8)
            .addTimedChild(instance7)
            .addTimedChild(instance6, 0, 59, {
                "0": {
                    x: -11.3,
                    y: -127.5
                }
            })
            .addTimedChild(instance5, 0, 16, {
                "0": {
                    x: 12.7,
                    y: -121.3
                },
                "3": {
                    x: 12.45
                },
                "7": {
                    x: 12.7
                },
                "9": {
                    x: 12.35,
                    y: -121.25
                },
                "14": {
                    x: 12.6
                }
            })
            .addTimedChild(instance4, 0, 16, {
                "0": {
                    x: -27.75,
                    y: -120.45
                },
                "3": {
                    x: -28
                },
                "7": {
                    x: -27.75
                },
                "9": {
                    x: -28.1,
                    y: -120.4
                },
                "14": {
                    x: -27.85
                }
            })
            .addTimedChild(instance16, 17, 17, {
                "17": {
                    x: 12.6,
                    y: -121.25
                },
                "19": {
                    x: 12.45
                },
                "23": {
                    x: 12.85
                },
                "32": {
                    x: 12.6
                }
            })
            .addTimedChild(instance15, 17, 17, {
                "17": {
                    x: -27.85,
                    y: -120.4
                },
                "19": {
                    x: -28
                },
                "23": {
                    x: -27.6
                },
                "32": {
                    x: -27.85
                }
            })
            .addTimedChild(instance18, 36, 9, {
                "36": {
                    x: 12.6,
                    y: -118.45
                }
            })
            .addTimedChild(instance17, 36, 9, {
                "36": {
                    x: -27.85,
                    y: -117.6
                }
            })
            .addTimedChild(instance3, 0, 59, {
                "0": {
                    x: 13.2,
                    y: -150.6,
                    r: 0.139
                },
                "34": {
                    y: -150.25
                },
                "35": {
                    x: 13.25,
                    y: -154.15,
                    r: 0.243
                },
                "36": {
                    y: -154.35
                },
                "45": {
                    x: 13.2,
                    y: -150.6,
                    r: 0.139
                }
            })
            .addTimedChild(instance2, 0, 59, {
                "0": {
                    x: -26.05,
                    y: -152.05,
                    r: 0
                },
                "34": {
                    y: -151.5
                },
                "35": {
                    x: -25.7,
                    y: -154.25,
                    r: -0.152
                },
                "36": {
                    x: -25.75,
                    y: -154.5
                },
                "45": {
                    x: -26.05,
                    y: -152.05,
                    r: 0
                }
            })
            .addTimedChild(instance1, 0, 49, {
                "0": {
                    x: -13.15,
                    y: -100.3
                }
            });
    });

    var Graphic218 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[197])
            .setTransform(-461.15, -639, 0.96);
        this.addTimedChild(instance1);
    });

    var Graphic303 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance11 = new Graphic218(MovieClip.SYNCHED)
            .setTransform(29.35, -395.6);
        var instance10 = new Graphic217(MovieClip.SYNCHED);
        var instance9 = new Graphic216(MovieClip.SYNCHED);
        var instance12 = new Graphic219(MovieClip.SYNCHED);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[374]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[369]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[375]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[370]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[376]);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[371]);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[377]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[372]);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[378]);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[373]);
        var instance6 = new Graphic215(MovieClip.SYNCHED);
        var instance5 = new Graphic214(MovieClip.SYNCHED);
        var instance4 = new Graphic213(MovieClip.SYNCHED);
        var instance21 = new Graphic220(MovieClip.SYNCHED);
        var instance3 = new Graphic212(MovieClip.SYNCHED);
        var instance2 = new Graphic211(MovieClip.SYNCHED);
        var instance1 = new Graphic210(MovieClip.SYNCHED);
        var instance25 = new Graphic222(MovieClip.SYNCHED);
        var instance24 = new Graphic221(MovieClip.SYNCHED);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[359]);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[358]);
        var instance26 = new Graphic223(MovieClip.SYNCHED);
        this.addTimedChild(instance11)
            .addTimedChild(instance10, 0, 59, {
                "0": {
                    x: 29.05,
                    y: -413.6
                },
                "32": {
                    y: -412
                },
                "39": {
                    y: -415.9
                },
                "40": {
                    y: -426.6
                },
                "41": {
                    y: -427.6
                },
                "44": {
                    y: -426.4
                },
                "45": {
                    y: -414.05
                },
                "46": {
                    y: -408.95
                },
                "49": {
                    y: -416.3
                },
                "50": {
                    y: -418
                }
            })
            .addTimedChild(instance9, 0, 59, {
                "0": {
                    x: -911.3,
                    y: -1331
                }
            })
            .addTimedChild(instance12, 31, 7, {
                "31": {
                    x: 33.2,
                    y: -467.55
                }
            })
            .addTimedChild(instance8, 0, 39, {
                "0": {
                    x: 2.8,
                    y: -45.85
                },
                "38": {
                    y: -43.15
                }
            })
            .addTimedChild(instance7, 0, 39, {
                "0": {
                    x: -4.2,
                    y: -56.85
                },
                "38": {
                    y: -54.15
                }
            })
            .addTimedChild(instance14, 39, 1)
            .addTimedChild(instance13, 39, 1)
            .addTimedChild(instance16, 40, 1)
            .addTimedChild(instance15, 40, 1)
            .addTimedChild(instance18, 41, 1, {
                "41": {
                    x: 42.3,
                    y: -62.8
                }
            })
            .addTimedChild(instance17, 41, 1, {
                "41": {
                    x: -24.55,
                    y: -78.3
                }
            })
            .addTimedChild(instance20, 42, 3, {
                "42": {
                    x: 42.3,
                    y: -62.8
                }
            })
            .addTimedChild(instance19, 42, 3, {
                "42": {
                    x: -24.55,
                    y: -78.3
                }
            })
            .addTimedChild(instance6, 0, 59, {
                "0": {
                    x: 19.95,
                    y: -303.6
                }
            })
            .addTimedChild(instance5, 0, 45, {
                "0": {
                    x: -61.35,
                    y: -409.35,
                    kx: 1.733,
                    ky: 1.408
                },
                "1": {
                    x: -61.3,
                    y: -412.95,
                    kx: 1.781,
                    ky: 1.36
                },
                "2": {
                    y: -413.85,
                    kx: 1.946,
                    ky: 1.196
                },
                "3": {
                    x: -61.2,
                    y: -409.45,
                    kx: 1.693,
                    ky: 1.448
                },
                "4": {
                    x: -61.3,
                    y: -411.6,
                    kx: 2.204,
                    ky: 0.938
                },
                "5": {
                    x: -61.15,
                    y: -409.45,
                    kx: 2.169,
                    ky: 0.973
                },
                "6": {
                    x: -61.35,
                    y: -409.35,
                    kx: 1.728,
                    ky: 1.414
                },
                "7": {
                    x: -61.25,
                    y: -407.2,
                    kx: 2.305,
                    ky: 0.837
                },
                "8": {
                    x: -61.3,
                    y: -397.65,
                    kx: 2.326,
                    ky: 0.816
                },
                "9": {
                    y: -403.05,
                    kx: 2.104,
                    ky: 1.037
                },
                "10": {
                    y: -409.35,
                    kx: 2.204,
                    ky: 0.937
                },
                "11": {
                    x: -61.35,
                    y: -406.65,
                    kx: 1.733,
                    ky: 1.408
                },
                "12": {
                    x: -61.3,
                    y: -413.4,
                    kx: 1.781,
                    ky: 1.36
                },
                "13": {
                    y: -409.35,
                    kx: 1.946,
                    ky: 1.196
                },
                "14": {
                    x: -61.2,
                    y: -407.2,
                    kx: 1.693,
                    ky: 1.448
                },
                "15": {
                    x: -61.3,
                    y: -402.15,
                    kx: 2.204,
                    ky: 0.938
                },
                "16": {
                    x: -61.15,
                    y: -408.1,
                    kx: 2.169,
                    ky: 0.973
                },
                "17": {
                    x: -61.35,
                    y: -409.35,
                    kx: 1.728,
                    ky: 1.414
                },
                "24": {
                    kx: 1.733,
                    ky: 1.408
                },
                "38": {
                    y: -406.55
                },
                "39": {
                    x: -61.9,
                    y: -391.55
                },
                "40": {
                    x: -65.5,
                    y: -318.6
                },
                "41": {
                    x: -66,
                    y: -306.2
                }
            })
            .addTimedChild(instance4, 0, 45, {
                "0": {
                    x: 123.85,
                    y: -405.8,
                    kx: 4.385,
                    ky: 1.899
                },
                "1": {
                    x: 123.9,
                    y: -409.4,
                    kx: 4.502,
                    ky: 1.781
                },
                "2": {
                    x: 123.85,
                    y: -410.3,
                    kx: 4.237,
                    ky: 2.046
                },
                "3": {
                    x: 123.9,
                    y: -405.85,
                    kx: 4.518,
                    ky: 1.765
                },
                "4": {
                    x: 123.85,
                    y: -408.05,
                    kx: 4.416,
                    ky: 1.867
                },
                "5": {
                    y: -405.8,
                    kx: 4.169,
                    ky: 2.114
                },
                "6": {
                    y: -405.85,
                    kx: 4.122,
                    ky: 2.161
                },
                "7": {
                    x: 123.9,
                    y: -403.6,
                    kx: 4.446,
                    ky: 1.837
                },
                "8": {
                    x: 123.85,
                    y: -394.1,
                    kx: 4.467,
                    ky: 1.816
                },
                "9": {
                    x: 123.9,
                    y: -399.6,
                    kx: 4.018,
                    ky: 2.265
                },
                "10": {
                    x: 123.8,
                    y: -405.9,
                    kx: 4.074,
                    ky: 2.209
                },
                "11": {
                    x: 123.85,
                    y: -403.1,
                    kx: 4.385,
                    ky: 1.899
                },
                "12": {
                    x: 123.9,
                    y: -409.85,
                    kx: 4.502,
                    ky: 1.781
                },
                "13": {
                    x: 123.85,
                    y: -405.8,
                    kx: 4.237,
                    ky: 2.046
                },
                "14": {
                    x: 123.9,
                    y: -403.6,
                    kx: 4.518,
                    ky: 1.765
                },
                "15": {
                    x: 123.85,
                    y: -398.6,
                    kx: 4.416,
                    ky: 1.867
                },
                "16": {
                    y: -404.45,
                    kx: 4.169,
                    ky: 2.114
                },
                "17": {
                    y: -405.85,
                    kx: 4.122,
                    ky: 2.161
                },
                "24": {
                    y: -405.8,
                    kx: 4.385,
                    ky: 1.899
                },
                "38": {
                    y: -403
                },
                "39": {
                    x: 123.45,
                    y: -386.75
                },
                "40": {
                    x: 120.9,
                    y: -306.15
                },
                "41": {
                    x: 120.45,
                    y: -292.6
                }
            })
            .addTimedChild(instance21, 44, 15, {
                "44": {
                    x: -120.4,
                    y: -444.05
                },
                "45": {
                    y: -605.45
                },
                "46": {
                    y: -652.5
                },
                "47": {
                    y: -812.15
                },
                "48": {
                    y: -820.6
                },
                "49": {
                    y: -806.95
                }
            })
            .addTimedChild(instance3, 0, 45, {
                "0": {
                    x: 29.5,
                    y: -347.75
                },
                "1": {
                    y: -351.35
                },
                "2": {
                    y: -352.25
                },
                "3": {
                    y: -347.75
                },
                "4": {
                    y: -350
                },
                "5": {
                    y: -347.75
                },
                "7": {
                    y: -345.5
                },
                "8": {
                    y: -336.05
                },
                "9": {
                    y: -341.45
                },
                "10": {
                    y: -347.75
                },
                "11": {
                    y: -345.05
                },
                "12": {
                    y: -351.8
                },
                "13": {
                    y: -347.75
                },
                "14": {
                    y: -345.5
                },
                "15": {
                    y: -340.55
                },
                "16": {
                    y: -346.4
                },
                "17": {
                    y: -347.75
                },
                "38": {
                    y: -345.05
                },
                "39": {
                    x: 28.95,
                    y: -328
                },
                "40": {
                    x: 25.4,
                    y: -179.85
                },
                "41": {
                    x: 24.85,
                    y: -183.3
                }
            })
            .addTimedChild(instance2, 0, 42, {
                "0": {
                    x: -81.6,
                    y: -378.15,
                    kx: 1.733,
                    ky: 1.408
                },
                "1": {
                    y: -381.75
                },
                "2": {
                    y: -382.65
                },
                "3": {
                    y: -378.15
                },
                "4": {
                    y: -380.4
                },
                "5": {
                    y: -378.15
                },
                "7": {
                    y: -375.9
                },
                "8": {
                    y: -366.45
                },
                "9": {
                    y: -371.85
                },
                "10": {
                    y: -378.15
                },
                "11": {
                    y: -375.45
                },
                "12": {
                    y: -382.2
                },
                "13": {
                    y: -378.15
                },
                "14": {
                    y: -375.9
                },
                "15": {
                    y: -370.95
                },
                "16": {
                    y: -376.8
                },
                "17": {
                    y: -378.15
                },
                "38": {
                    y: -375.45
                },
                "39": {
                    x: -82.2,
                    y: -360.35
                },
                "40": {
                    x: -85.75,
                    y: -247.7
                },
                "41": {
                    x: -86.25,
                    y: -229.85
                }
            })
            .addTimedChild(instance1, 0, 42, {
                "0": {
                    x: 138.7,
                    y: -371.7,
                    kx: 4.385,
                    ky: 1.899
                },
                "1": {
                    y: -375.3
                },
                "2": {
                    y: -376.2
                },
                "3": {
                    y: -371.7
                },
                "4": {
                    y: -373.95
                },
                "5": {
                    y: -371.7
                },
                "7": {
                    y: -369.45
                },
                "8": {
                    y: -360
                },
                "9": {
                    y: -365.4
                },
                "10": {
                    y: -371.7
                },
                "11": {
                    y: -369
                },
                "12": {
                    y: -375.75
                },
                "13": {
                    y: -371.7
                },
                "14": {
                    y: -369.45
                },
                "15": {
                    y: -364.5
                },
                "16": {
                    y: -370.35
                },
                "17": {
                    y: -371.7
                },
                "38": {
                    y: -369
                },
                "39": {
                    x: 138.3,
                    y: -352.65
                },
                "40": {
                    x: 135.8,
                    y: -232.35
                },
                "41": {
                    x: 135.3,
                    y: -213.35
                }
            })
            .addTimedChild(instance25, 45, 14, {
                "45": {
                    x: -106.45,
                    y: -355.4,
                    kx: 2.086,
                    ky: 1.055
                },
                "46": {
                    y: -401
                },
                "47": {
                    y: -560.95
                },
                "48": {
                    y: -565.55
                },
                "49": {
                    y: -532.7
                },
                "50": {
                    y: -531.5
                }
            })
            .addTimedChild(instance24, 45, 14, {
                "45": {
                    x: 167.7,
                    y: -354.05,
                    kx: 4.573,
                    ky: 1.711
                },
                "46": {
                    x: 163.75,
                    y: -398.65,
                    kx: 4.486,
                    ky: 1.797
                },
                "47": {
                    x: 149.55,
                    y: -555.15,
                    kx: 4.18,
                    ky: 2.103
                },
                "48": {
                    y: -559.75
                },
                "49": {
                    y: -526.9
                },
                "50": {
                    y: -525.7
                }
            })
            .addTimedChild(instance23, 45, 14, {
                "45": {
                    x: 2.8,
                    y: 133.7
                },
                "46": {
                    y: 87.7
                },
                "47": {
                    y: -74.1
                },
                "48": {
                    y: -78.7
                },
                "49": {
                    y: -45.85
                },
                "50": {
                    y: -44.65
                }
            })
            .addTimedChild(instance22, 45, 14, {
                "45": {
                    x: 329.15,
                    y: 133.7
                },
                "46": {
                    y: 87.7
                },
                "47": {
                    y: -74.1
                },
                "48": {
                    y: -78.7
                },
                "49": {
                    y: -45.85
                },
                "50": {
                    y: -44.65
                }
            })
            .addTimedChild(instance26, 49, 10, {
                "49": {
                    x: 16.95,
                    y: -518.15
                },
                "50": {
                    x: 16.8,
                    y: -518.55
                }
            });
    });

    var Graphic304 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[2]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[1]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[0]);
        this.addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic226 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 57, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[17])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic227 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 57, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[17])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic228 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 57, loop: false });
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[21])
            .setTransform(-1289.25, -221.05);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[20])
            .setTransform(-1289.25, -221.05);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[18])
            .setTransform(-1289.25, -221.05);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[18])
            .setTransform(-1263.8, -221.2);
        this.addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic229 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 57, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[22])
            .setTransform(-1303.95, -197.85);
        this.addTimedChild(instance1);
    });

    var Graphic230 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 57, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[23])
            .setTransform(-1268.05, -199.05);
        this.addTimedChild(instance1);
    });

    var Graphic224 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 57, loop: false });
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[43]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[37])
            .setTransform(-5.8, 24);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[33])
            .setTransform(-5.8, 24);
        this.addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic231 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 57, loop: false });
        var instance1 = new Graphic224(MovieClip.SYNCHED)
            .setTransform(-0.05, -12.5, 1.172, 0.483);
        this.addTimedChild(instance1);
    });

    var Graphic232 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 57, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[47]);
        this.addTimedChild(instance1);
    });

    var Graphic233 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 57, loop: false });
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[51])
            .setTransform(-1336.85, -168.4, 1.033, 1.033);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[51])
            .setTransform(-1357.3, -164.4, 1.033, 1.033);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[51])
            .setTransform(-1317.25, -167, 1.033, 1.033);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[51])
            .setTransform(-1316.95, -139.1, 0.978, 0.978);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[51])
            .setTransform(-1265.9, -139.25, 1.033, 1.033);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[51])
            .setTransform(-1170.45, -142.3, 0.948, 0.948);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[51])
            .setTransform(-1185.7, -149.8, 0.948, 0.948);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[51])
            .setTransform(-1177.25, -135.65, 0.881, 0.881);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[51])
            .setTransform(-1201.55, -112.45, 0.881, 0.881);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[51])
            .setTransform(-1213, -97.9, 0.881, 0.881);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[51])
            .setTransform(-1255.65, -125.65, 1.033, 1.033);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[50]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[49]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[48])
            .setTransform(-1294.65, -163.3);
        this.addTimedChild(instance14)
            .addTimedChild(instance13)
            .addTimedChild(instance12)
            .addTimedChild(instance11)
            .addTimedChild(instance10)
            .addTimedChild(instance9)
            .addTimedChild(instance8)
            .addTimedChild(instance7)
            .addTimedChild(instance6)
            .addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic225 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 57, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[53])
            .setTransform(-1294.55, -252.5);
        this.addTimedChild(instance1);
    });

    var Graphic234 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 57, loop: false });
        var instance2 = new Graphic225(MovieClip.SYNCHED)
            .setTransform(6.55, -82.85);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[52]);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic235 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 57, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[55]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[54]);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic236 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 57, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[57]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[56]);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic237 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 57, loop: false });
        var instance11 = new Graphic236(MovieClip.SYNCHED)
            .setTransform(-61.6, -103.3);
        var instance10 = new Graphic235(MovieClip.SYNCHED)
            .setTransform(80.9, -103);
        var instance9 = new Graphic234(MovieClip.SYNCHED)
            .setTransform(-0.1, 0.55);
        var instance8 = new Graphic233(MovieClip.SYNCHED)
            .setTransform(6.55, -171.5);
        var instance7 = new Graphic232(MovieClip.SYNCHED)
            .setTransform(-6.5, -91.2);
        var instance6 = new Graphic231(MovieClip.SYNCHED)
            .setTransform(-2.75, -68.2);
        var instance5 = new Graphic230(MovieClip.SYNCHED)
            .setTransform(-17.4, -129.65, 1, 1, -0.044);
        var instance4 = new Graphic229(MovieClip.SYNCHED)
            .setTransform(15.55, -130.55, 1, 1, 0.062);
        var instance3 = new Graphic228(MovieClip.SYNCHED)
            .setTransform(1.15, -113.75);
        var instance2 = new Graphic227(MovieClip.SYNCHED)
            .setTransform(-17.45, -112.3);
        var instance1 = new Graphic226(MovieClip.SYNCHED)
            .setTransform(7.95, -112.5);
        this.addTimedChild(instance11)
            .addTimedChild(instance10)
            .addTimedChild(instance9)
            .addTimedChild(instance8)
            .addTimedChild(instance7)
            .addTimedChild(instance6)
            .addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic238 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 57, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[58])
            .setTransform(-1222.8, -397.15, 0.95);
        this.addTimedChild(instance1);
    });

    var Graphic305 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance4 = new Graphic238(MovieClip.SYNCHED);
        var instance3 = new Graphic237(MovieClip.SYNCHED);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[16]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[15]);
        this.addTimedChild(instance4, 0, 57, {
                "0": {
                    x: 29,
                    y: -530.3,
                    r: -0.336
                }
            })
            .addTimedChild(instance3, 0, 57, {
                "0": {
                    x: 69.65,
                    y: -590.6,
                    sx: 1.099,
                    sy: 1.099,
                    r: -0.24
                }
            })
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic306 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[324]);
        this.addTimedChild(instance1);
    });

    var Graphic239 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 79, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[421]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[428]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[427]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[426]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[425]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[424]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[423]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[422]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[429]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[430]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[428]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[427]);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[434]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[433]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[432]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[431]);
        var instance21 = new Graphics()
            .drawCommands(shapes.s01[438]);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[437]);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[436]);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[435]);
        var instance25 = new Graphics()
            .drawCommands(shapes.s01[442]);
        var instance24 = new Graphics()
            .drawCommands(shapes.s01[441]);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[440]);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[439]);
        var instance29 = new Graphics()
            .drawCommands(shapes.s01[446]);
        var instance28 = new Graphics()
            .drawCommands(shapes.s01[445]);
        var instance27 = new Graphics()
            .drawCommands(shapes.s01[444]);
        var instance26 = new Graphics()
            .drawCommands(shapes.s01[443]);
        var instance33 = new Graphics()
            .drawCommands(shapes.s01[450]);
        var instance32 = new Graphics()
            .drawCommands(shapes.s01[449]);
        var instance31 = new Graphics()
            .drawCommands(shapes.s01[448]);
        var instance30 = new Graphics()
            .drawCommands(shapes.s01[447]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[422]);
        var instance34 = new Graphics()
            .drawCommands(shapes.s01[451]);
        var instance35 = new Graphics()
            .drawCommands(shapes.s01[421]);
        var instance42 = new Graphics()
            .drawCommands(shapes.s01[428]);
        var instance41 = new Graphics()
            .drawCommands(shapes.s01[427]);
        var instance40 = new Graphics()
            .drawCommands(shapes.s01[426]);
        var instance39 = new Graphics()
            .drawCommands(shapes.s01[425]);
        var instance38 = new Graphics()
            .drawCommands(shapes.s01[424]);
        var instance37 = new Graphics()
            .drawCommands(shapes.s01[423]);
        var instance36 = new Graphics()
            .drawCommands(shapes.s01[422]);
        var instance43 = new Graphics()
            .drawCommands(shapes.s01[429]);
        var instance44 = new Graphics()
            .drawCommands(shapes.s01[430]);
        var instance51 = new Graphics()
            .drawCommands(shapes.s01[428]);
        var instance50 = new Graphics()
            .drawCommands(shapes.s01[427]);
        var instance49 = new Graphics()
            .drawCommands(shapes.s01[434]);
        var instance48 = new Graphics()
            .drawCommands(shapes.s01[433]);
        var instance47 = new Graphics()
            .drawCommands(shapes.s01[432]);
        var instance46 = new Graphics()
            .drawCommands(shapes.s01[431]);
        var instance55 = new Graphics()
            .drawCommands(shapes.s01[438]);
        var instance54 = new Graphics()
            .drawCommands(shapes.s01[437]);
        var instance53 = new Graphics()
            .drawCommands(shapes.s01[436]);
        var instance52 = new Graphics()
            .drawCommands(shapes.s01[435]);
        var instance59 = new Graphics()
            .drawCommands(shapes.s01[442]);
        var instance58 = new Graphics()
            .drawCommands(shapes.s01[441]);
        var instance57 = new Graphics()
            .drawCommands(shapes.s01[440]);
        var instance56 = new Graphics()
            .drawCommands(shapes.s01[439]);
        var instance63 = new Graphics()
            .drawCommands(shapes.s01[446]);
        var instance62 = new Graphics()
            .drawCommands(shapes.s01[445]);
        var instance61 = new Graphics()
            .drawCommands(shapes.s01[444]);
        var instance60 = new Graphics()
            .drawCommands(shapes.s01[443]);
        var instance67 = new Graphics()
            .drawCommands(shapes.s01[450]);
        var instance66 = new Graphics()
            .drawCommands(shapes.s01[449]);
        var instance65 = new Graphics()
            .drawCommands(shapes.s01[448]);
        var instance64 = new Graphics()
            .drawCommands(shapes.s01[447]);
        var instance45 = new Graphics()
            .drawCommands(shapes.s01[422]);
        var instance68 = new Graphics()
            .drawCommands(shapes.s01[451]);
        var instance69 = new Graphics()
            .drawCommands(shapes.s01[421]);
        var instance76 = new Graphics()
            .drawCommands(shapes.s01[428]);
        var instance75 = new Graphics()
            .drawCommands(shapes.s01[427]);
        var instance74 = new Graphics()
            .drawCommands(shapes.s01[426]);
        var instance73 = new Graphics()
            .drawCommands(shapes.s01[425]);
        var instance72 = new Graphics()
            .drawCommands(shapes.s01[424]);
        var instance71 = new Graphics()
            .drawCommands(shapes.s01[423]);
        var instance70 = new Graphics()
            .drawCommands(shapes.s01[422]);
        var instance77 = new Graphics()
            .drawCommands(shapes.s01[429]);
        var instance78 = new Graphics()
            .drawCommands(shapes.s01[430]);
        var instance85 = new Graphics()
            .drawCommands(shapes.s01[428]);
        var instance84 = new Graphics()
            .drawCommands(shapes.s01[427]);
        var instance83 = new Graphics()
            .drawCommands(shapes.s01[434]);
        var instance82 = new Graphics()
            .drawCommands(shapes.s01[433]);
        var instance81 = new Graphics()
            .drawCommands(shapes.s01[432]);
        var instance80 = new Graphics()
            .drawCommands(shapes.s01[431]);
        var instance89 = new Graphics()
            .drawCommands(shapes.s01[438]);
        var instance88 = new Graphics()
            .drawCommands(shapes.s01[437]);
        var instance87 = new Graphics()
            .drawCommands(shapes.s01[436]);
        var instance86 = new Graphics()
            .drawCommands(shapes.s01[435]);
        var instance93 = new Graphics()
            .drawCommands(shapes.s01[442]);
        var instance92 = new Graphics()
            .drawCommands(shapes.s01[441]);
        var instance91 = new Graphics()
            .drawCommands(shapes.s01[440]);
        var instance90 = new Graphics()
            .drawCommands(shapes.s01[439]);
        var instance97 = new Graphics()
            .drawCommands(shapes.s01[446]);
        var instance96 = new Graphics()
            .drawCommands(shapes.s01[445]);
        var instance95 = new Graphics()
            .drawCommands(shapes.s01[444]);
        var instance94 = new Graphics()
            .drawCommands(shapes.s01[443]);
        var instance101 = new Graphics()
            .drawCommands(shapes.s01[450]);
        var instance100 = new Graphics()
            .drawCommands(shapes.s01[449]);
        var instance99 = new Graphics()
            .drawCommands(shapes.s01[448]);
        var instance98 = new Graphics()
            .drawCommands(shapes.s01[447]);
        var instance79 = new Graphics()
            .drawCommands(shapes.s01[422]);
        var instance102 = new Graphics()
            .drawCommands(shapes.s01[451]);
        var instance103 = new Graphics()
            .drawCommands(shapes.s01[421]);
        var instance110 = new Graphics()
            .drawCommands(shapes.s01[428]);
        var instance109 = new Graphics()
            .drawCommands(shapes.s01[427]);
        var instance108 = new Graphics()
            .drawCommands(shapes.s01[426]);
        var instance107 = new Graphics()
            .drawCommands(shapes.s01[425]);
        var instance106 = new Graphics()
            .drawCommands(shapes.s01[424]);
        var instance105 = new Graphics()
            .drawCommands(shapes.s01[423]);
        var instance104 = new Graphics()
            .drawCommands(shapes.s01[422]);
        var instance111 = new Graphics()
            .drawCommands(shapes.s01[429]);
        var instance112 = new Graphics()
            .drawCommands(shapes.s01[430]);
        var instance119 = new Graphics()
            .drawCommands(shapes.s01[428]);
        var instance118 = new Graphics()
            .drawCommands(shapes.s01[427]);
        var instance117 = new Graphics()
            .drawCommands(shapes.s01[434]);
        var instance116 = new Graphics()
            .drawCommands(shapes.s01[433]);
        var instance115 = new Graphics()
            .drawCommands(shapes.s01[432]);
        var instance114 = new Graphics()
            .drawCommands(shapes.s01[431]);
        var instance123 = new Graphics()
            .drawCommands(shapes.s01[438]);
        var instance122 = new Graphics()
            .drawCommands(shapes.s01[437]);
        var instance121 = new Graphics()
            .drawCommands(shapes.s01[436]);
        var instance120 = new Graphics()
            .drawCommands(shapes.s01[435]);
        var instance127 = new Graphics()
            .drawCommands(shapes.s01[442]);
        var instance126 = new Graphics()
            .drawCommands(shapes.s01[441]);
        var instance125 = new Graphics()
            .drawCommands(shapes.s01[440]);
        var instance124 = new Graphics()
            .drawCommands(shapes.s01[439]);
        var instance131 = new Graphics()
            .drawCommands(shapes.s01[446]);
        var instance130 = new Graphics()
            .drawCommands(shapes.s01[445]);
        var instance129 = new Graphics()
            .drawCommands(shapes.s01[444]);
        var instance128 = new Graphics()
            .drawCommands(shapes.s01[443]);
        var instance135 = new Graphics()
            .drawCommands(shapes.s01[450]);
        var instance134 = new Graphics()
            .drawCommands(shapes.s01[449]);
        var instance133 = new Graphics()
            .drawCommands(shapes.s01[448]);
        var instance132 = new Graphics()
            .drawCommands(shapes.s01[447]);
        var instance113 = new Graphics()
            .drawCommands(shapes.s01[422]);
        var instance136 = new Graphics()
            .drawCommands(shapes.s01[451]);
        var instance137 = new Graphics()
            .drawCommands(shapes.s01[421]);
        var instance144 = new Graphics()
            .drawCommands(shapes.s01[428]);
        var instance143 = new Graphics()
            .drawCommands(shapes.s01[427]);
        var instance142 = new Graphics()
            .drawCommands(shapes.s01[426]);
        var instance141 = new Graphics()
            .drawCommands(shapes.s01[425]);
        var instance140 = new Graphics()
            .drawCommands(shapes.s01[424]);
        var instance139 = new Graphics()
            .drawCommands(shapes.s01[423]);
        var instance138 = new Graphics()
            .drawCommands(shapes.s01[422]);
        var instance145 = new Graphics()
            .drawCommands(shapes.s01[429]);
        var instance146 = new Graphics()
            .drawCommands(shapes.s01[430]);
        var instance153 = new Graphics()
            .drawCommands(shapes.s01[428]);
        var instance152 = new Graphics()
            .drawCommands(shapes.s01[427]);
        var instance151 = new Graphics()
            .drawCommands(shapes.s01[434]);
        var instance150 = new Graphics()
            .drawCommands(shapes.s01[433]);
        var instance149 = new Graphics()
            .drawCommands(shapes.s01[432]);
        var instance148 = new Graphics()
            .drawCommands(shapes.s01[431]);
        var instance157 = new Graphics()
            .drawCommands(shapes.s01[438]);
        var instance156 = new Graphics()
            .drawCommands(shapes.s01[437]);
        var instance155 = new Graphics()
            .drawCommands(shapes.s01[436]);
        var instance154 = new Graphics()
            .drawCommands(shapes.s01[435]);
        var instance161 = new Graphics()
            .drawCommands(shapes.s01[442]);
        var instance160 = new Graphics()
            .drawCommands(shapes.s01[441]);
        var instance159 = new Graphics()
            .drawCommands(shapes.s01[440]);
        var instance158 = new Graphics()
            .drawCommands(shapes.s01[439]);
        var instance165 = new Graphics()
            .drawCommands(shapes.s01[446]);
        var instance164 = new Graphics()
            .drawCommands(shapes.s01[445]);
        var instance163 = new Graphics()
            .drawCommands(shapes.s01[444]);
        var instance162 = new Graphics()
            .drawCommands(shapes.s01[443]);
        var instance169 = new Graphics()
            .drawCommands(shapes.s01[450]);
        var instance168 = new Graphics()
            .drawCommands(shapes.s01[449]);
        var instance167 = new Graphics()
            .drawCommands(shapes.s01[448]);
        var instance166 = new Graphics()
            .drawCommands(shapes.s01[447]);
        var instance147 = new Graphics()
            .drawCommands(shapes.s01[422]);
        var instance170 = new Graphics()
            .drawCommands(shapes.s01[451]);
        var instance171 = new Graphics()
            .drawCommands(shapes.s01[421]);
        var instance178 = new Graphics()
            .drawCommands(shapes.s01[428]);
        var instance177 = new Graphics()
            .drawCommands(shapes.s01[427]);
        var instance176 = new Graphics()
            .drawCommands(shapes.s01[426]);
        var instance175 = new Graphics()
            .drawCommands(shapes.s01[425]);
        var instance174 = new Graphics()
            .drawCommands(shapes.s01[424]);
        var instance173 = new Graphics()
            .drawCommands(shapes.s01[423]);
        var instance172 = new Graphics()
            .drawCommands(shapes.s01[422]);
        var instance179 = new Graphics()
            .drawCommands(shapes.s01[429]);
        var instance180 = new Graphics()
            .drawCommands(shapes.s01[430]);
        var instance187 = new Graphics()
            .drawCommands(shapes.s01[428]);
        var instance186 = new Graphics()
            .drawCommands(shapes.s01[427]);
        var instance185 = new Graphics()
            .drawCommands(shapes.s01[434]);
        var instance184 = new Graphics()
            .drawCommands(shapes.s01[433]);
        var instance183 = new Graphics()
            .drawCommands(shapes.s01[432]);
        var instance182 = new Graphics()
            .drawCommands(shapes.s01[431]);
        var instance191 = new Graphics()
            .drawCommands(shapes.s01[438]);
        var instance190 = new Graphics()
            .drawCommands(shapes.s01[437]);
        var instance189 = new Graphics()
            .drawCommands(shapes.s01[436]);
        var instance188 = new Graphics()
            .drawCommands(shapes.s01[435]);
        var instance195 = new Graphics()
            .drawCommands(shapes.s01[442]);
        var instance194 = new Graphics()
            .drawCommands(shapes.s01[441]);
        var instance193 = new Graphics()
            .drawCommands(shapes.s01[440]);
        var instance192 = new Graphics()
            .drawCommands(shapes.s01[439]);
        var instance199 = new Graphics()
            .drawCommands(shapes.s01[446]);
        var instance198 = new Graphics()
            .drawCommands(shapes.s01[445]);
        var instance197 = new Graphics()
            .drawCommands(shapes.s01[444]);
        var instance196 = new Graphics()
            .drawCommands(shapes.s01[443]);
        var instance203 = new Graphics()
            .drawCommands(shapes.s01[450]);
        var instance202 = new Graphics()
            .drawCommands(shapes.s01[449]);
        var instance201 = new Graphics()
            .drawCommands(shapes.s01[448]);
        var instance200 = new Graphics()
            .drawCommands(shapes.s01[447]);
        var instance181 = new Graphics()
            .drawCommands(shapes.s01[422]);
        var instance204 = new Graphics()
            .drawCommands(shapes.s01[451]);
        var instance205 = new Graphics()
            .drawCommands(shapes.s01[421]);
        var instance212 = new Graphics()
            .drawCommands(shapes.s01[428]);
        var instance211 = new Graphics()
            .drawCommands(shapes.s01[427]);
        var instance210 = new Graphics()
            .drawCommands(shapes.s01[426]);
        var instance209 = new Graphics()
            .drawCommands(shapes.s01[425]);
        var instance208 = new Graphics()
            .drawCommands(shapes.s01[424]);
        var instance207 = new Graphics()
            .drawCommands(shapes.s01[423]);
        var instance206 = new Graphics()
            .drawCommands(shapes.s01[422]);
        var instance213 = new Graphics()
            .drawCommands(shapes.s01[429]);
        var instance214 = new Graphics()
            .drawCommands(shapes.s01[430]);
        var instance221 = new Graphics()
            .drawCommands(shapes.s01[428]);
        var instance220 = new Graphics()
            .drawCommands(shapes.s01[427]);
        var instance219 = new Graphics()
            .drawCommands(shapes.s01[434]);
        var instance218 = new Graphics()
            .drawCommands(shapes.s01[433]);
        var instance217 = new Graphics()
            .drawCommands(shapes.s01[432]);
        var instance216 = new Graphics()
            .drawCommands(shapes.s01[431]);
        var instance225 = new Graphics()
            .drawCommands(shapes.s01[438]);
        var instance224 = new Graphics()
            .drawCommands(shapes.s01[437]);
        var instance223 = new Graphics()
            .drawCommands(shapes.s01[436]);
        var instance222 = new Graphics()
            .drawCommands(shapes.s01[435]);
        var instance229 = new Graphics()
            .drawCommands(shapes.s01[442]);
        var instance228 = new Graphics()
            .drawCommands(shapes.s01[441]);
        var instance227 = new Graphics()
            .drawCommands(shapes.s01[440]);
        var instance226 = new Graphics()
            .drawCommands(shapes.s01[439]);
        var instance233 = new Graphics()
            .drawCommands(shapes.s01[446]);
        var instance232 = new Graphics()
            .drawCommands(shapes.s01[445]);
        var instance231 = new Graphics()
            .drawCommands(shapes.s01[444]);
        var instance230 = new Graphics()
            .drawCommands(shapes.s01[443]);
        var instance237 = new Graphics()
            .drawCommands(shapes.s01[450]);
        var instance236 = new Graphics()
            .drawCommands(shapes.s01[449]);
        var instance235 = new Graphics()
            .drawCommands(shapes.s01[448]);
        var instance234 = new Graphics()
            .drawCommands(shapes.s01[447]);
        var instance215 = new Graphics()
            .drawCommands(shapes.s01[422]);
        var instance238 = new Graphics()
            .drawCommands(shapes.s01[451]);
        var instance239 = new Graphics()
            .drawCommands(shapes.s01[421]);
        var instance246 = new Graphics()
            .drawCommands(shapes.s01[428]);
        var instance245 = new Graphics()
            .drawCommands(shapes.s01[427]);
        var instance244 = new Graphics()
            .drawCommands(shapes.s01[426]);
        var instance243 = new Graphics()
            .drawCommands(shapes.s01[425]);
        var instance242 = new Graphics()
            .drawCommands(shapes.s01[424]);
        var instance241 = new Graphics()
            .drawCommands(shapes.s01[423]);
        var instance240 = new Graphics()
            .drawCommands(shapes.s01[422]);
        var instance247 = new Graphics()
            .drawCommands(shapes.s01[429]);
        var instance248 = new Graphics()
            .drawCommands(shapes.s01[430]);
        var instance255 = new Graphics()
            .drawCommands(shapes.s01[428]);
        var instance254 = new Graphics()
            .drawCommands(shapes.s01[427]);
        var instance253 = new Graphics()
            .drawCommands(shapes.s01[434]);
        var instance252 = new Graphics()
            .drawCommands(shapes.s01[433]);
        var instance251 = new Graphics()
            .drawCommands(shapes.s01[432]);
        var instance250 = new Graphics()
            .drawCommands(shapes.s01[431]);
        var instance259 = new Graphics()
            .drawCommands(shapes.s01[438]);
        var instance258 = new Graphics()
            .drawCommands(shapes.s01[437]);
        var instance257 = new Graphics()
            .drawCommands(shapes.s01[436]);
        var instance256 = new Graphics()
            .drawCommands(shapes.s01[435]);
        var instance263 = new Graphics()
            .drawCommands(shapes.s01[442]);
        var instance262 = new Graphics()
            .drawCommands(shapes.s01[441]);
        var instance261 = new Graphics()
            .drawCommands(shapes.s01[440]);
        var instance260 = new Graphics()
            .drawCommands(shapes.s01[439]);
        var instance267 = new Graphics()
            .drawCommands(shapes.s01[446]);
        var instance266 = new Graphics()
            .drawCommands(shapes.s01[445]);
        var instance265 = new Graphics()
            .drawCommands(shapes.s01[444]);
        var instance264 = new Graphics()
            .drawCommands(shapes.s01[443]);
        var instance271 = new Graphics()
            .drawCommands(shapes.s01[450]);
        var instance270 = new Graphics()
            .drawCommands(shapes.s01[449]);
        var instance269 = new Graphics()
            .drawCommands(shapes.s01[448]);
        var instance268 = new Graphics()
            .drawCommands(shapes.s01[447]);
        var instance249 = new Graphics()
            .drawCommands(shapes.s01[422]);
        this.addTimedChild(instance1, 0, 1)
            .addTimedChild(instance8, 1, 1)
            .addTimedChild(instance7, 1, 1)
            .addTimedChild(instance6, 1, 1)
            .addTimedChild(instance5, 1, 1)
            .addTimedChild(instance4, 1, 1)
            .addTimedChild(instance3, 1, 1)
            .addTimedChild(instance2, 1, 1)
            .addTimedChild(instance9, 2, 1)
            .addTimedChild(instance10, 3, 1)
            .addTimedChild(instance17, 4, 5)
            .addTimedChild(instance16, 4, 5)
            .addTimedChild(instance15, 4, 1)
            .addTimedChild(instance14, 4, 1)
            .addTimedChild(instance13, 4, 1)
            .addTimedChild(instance12, 4, 1)
            .addTimedChild(instance21, 5, 1)
            .addTimedChild(instance20, 5, 1)
            .addTimedChild(instance19, 5, 1)
            .addTimedChild(instance18, 5, 1)
            .addTimedChild(instance25, 6, 1)
            .addTimedChild(instance24, 6, 1)
            .addTimedChild(instance23, 6, 1)
            .addTimedChild(instance22, 6, 1)
            .addTimedChild(instance29, 7, 1)
            .addTimedChild(instance28, 7, 1)
            .addTimedChild(instance27, 7, 1)
            .addTimedChild(instance26, 7, 1)
            .addTimedChild(instance33, 8, 1)
            .addTimedChild(instance32, 8, 1)
            .addTimedChild(instance31, 8, 1)
            .addTimedChild(instance30, 8, 1)
            .addTimedChild(instance11, 4, 5)
            .addTimedChild(instance34, 9, 1)
            .addTimedChild(instance35, 10, 1)
            .addTimedChild(instance42, 11, 1)
            .addTimedChild(instance41, 11, 1)
            .addTimedChild(instance40, 11, 1)
            .addTimedChild(instance39, 11, 1)
            .addTimedChild(instance38, 11, 1)
            .addTimedChild(instance37, 11, 1)
            .addTimedChild(instance36, 11, 1)
            .addTimedChild(instance43, 12, 1)
            .addTimedChild(instance44, 13, 1)
            .addTimedChild(instance51, 14, 5)
            .addTimedChild(instance50, 14, 5)
            .addTimedChild(instance49, 14, 1)
            .addTimedChild(instance48, 14, 1)
            .addTimedChild(instance47, 14, 1)
            .addTimedChild(instance46, 14, 1)
            .addTimedChild(instance55, 15, 1)
            .addTimedChild(instance54, 15, 1)
            .addTimedChild(instance53, 15, 1)
            .addTimedChild(instance52, 15, 1)
            .addTimedChild(instance59, 16, 1)
            .addTimedChild(instance58, 16, 1)
            .addTimedChild(instance57, 16, 1)
            .addTimedChild(instance56, 16, 1)
            .addTimedChild(instance63, 17, 1)
            .addTimedChild(instance62, 17, 1)
            .addTimedChild(instance61, 17, 1)
            .addTimedChild(instance60, 17, 1)
            .addTimedChild(instance67, 18, 1)
            .addTimedChild(instance66, 18, 1)
            .addTimedChild(instance65, 18, 1)
            .addTimedChild(instance64, 18, 1)
            .addTimedChild(instance45, 14, 5)
            .addTimedChild(instance68, 19, 1)
            .addTimedChild(instance69, 20, 1)
            .addTimedChild(instance76, 21, 1)
            .addTimedChild(instance75, 21, 1)
            .addTimedChild(instance74, 21, 1)
            .addTimedChild(instance73, 21, 1)
            .addTimedChild(instance72, 21, 1)
            .addTimedChild(instance71, 21, 1)
            .addTimedChild(instance70, 21, 1)
            .addTimedChild(instance77, 22, 1)
            .addTimedChild(instance78, 23, 1)
            .addTimedChild(instance85, 24, 5)
            .addTimedChild(instance84, 24, 5)
            .addTimedChild(instance83, 24, 1)
            .addTimedChild(instance82, 24, 1)
            .addTimedChild(instance81, 24, 1)
            .addTimedChild(instance80, 24, 1)
            .addTimedChild(instance89, 25, 1)
            .addTimedChild(instance88, 25, 1)
            .addTimedChild(instance87, 25, 1)
            .addTimedChild(instance86, 25, 1)
            .addTimedChild(instance93, 26, 1)
            .addTimedChild(instance92, 26, 1)
            .addTimedChild(instance91, 26, 1)
            .addTimedChild(instance90, 26, 1)
            .addTimedChild(instance97, 27, 1)
            .addTimedChild(instance96, 27, 1)
            .addTimedChild(instance95, 27, 1)
            .addTimedChild(instance94, 27, 1)
            .addTimedChild(instance101, 28, 1)
            .addTimedChild(instance100, 28, 1)
            .addTimedChild(instance99, 28, 1)
            .addTimedChild(instance98, 28, 1)
            .addTimedChild(instance79, 24, 5)
            .addTimedChild(instance102, 29, 1)
            .addTimedChild(instance103, 30, 1)
            .addTimedChild(instance110, 31, 1)
            .addTimedChild(instance109, 31, 1)
            .addTimedChild(instance108, 31, 1)
            .addTimedChild(instance107, 31, 1)
            .addTimedChild(instance106, 31, 1)
            .addTimedChild(instance105, 31, 1)
            .addTimedChild(instance104, 31, 1)
            .addTimedChild(instance111, 32, 1)
            .addTimedChild(instance112, 33, 1)
            .addTimedChild(instance119, 34, 5)
            .addTimedChild(instance118, 34, 5)
            .addTimedChild(instance117, 34, 1)
            .addTimedChild(instance116, 34, 1)
            .addTimedChild(instance115, 34, 1)
            .addTimedChild(instance114, 34, 1)
            .addTimedChild(instance123, 35, 1)
            .addTimedChild(instance122, 35, 1)
            .addTimedChild(instance121, 35, 1)
            .addTimedChild(instance120, 35, 1)
            .addTimedChild(instance127, 36, 1)
            .addTimedChild(instance126, 36, 1)
            .addTimedChild(instance125, 36, 1)
            .addTimedChild(instance124, 36, 1)
            .addTimedChild(instance131, 37, 1)
            .addTimedChild(instance130, 37, 1)
            .addTimedChild(instance129, 37, 1)
            .addTimedChild(instance128, 37, 1)
            .addTimedChild(instance135, 38, 1)
            .addTimedChild(instance134, 38, 1)
            .addTimedChild(instance133, 38, 1)
            .addTimedChild(instance132, 38, 1)
            .addTimedChild(instance113, 34, 5)
            .addTimedChild(instance136, 39, 1)
            .addTimedChild(instance137, 40, 1)
            .addTimedChild(instance144, 41, 1)
            .addTimedChild(instance143, 41, 1)
            .addTimedChild(instance142, 41, 1)
            .addTimedChild(instance141, 41, 1)
            .addTimedChild(instance140, 41, 1)
            .addTimedChild(instance139, 41, 1)
            .addTimedChild(instance138, 41, 1)
            .addTimedChild(instance145, 42, 1)
            .addTimedChild(instance146, 43, 1)
            .addTimedChild(instance153, 44, 5)
            .addTimedChild(instance152, 44, 5)
            .addTimedChild(instance151, 44, 1)
            .addTimedChild(instance150, 44, 1)
            .addTimedChild(instance149, 44, 1)
            .addTimedChild(instance148, 44, 1)
            .addTimedChild(instance157, 45, 1)
            .addTimedChild(instance156, 45, 1)
            .addTimedChild(instance155, 45, 1)
            .addTimedChild(instance154, 45, 1)
            .addTimedChild(instance161, 46, 1)
            .addTimedChild(instance160, 46, 1)
            .addTimedChild(instance159, 46, 1)
            .addTimedChild(instance158, 46, 1)
            .addTimedChild(instance165, 47, 1)
            .addTimedChild(instance164, 47, 1)
            .addTimedChild(instance163, 47, 1)
            .addTimedChild(instance162, 47, 1)
            .addTimedChild(instance169, 48, 1)
            .addTimedChild(instance168, 48, 1)
            .addTimedChild(instance167, 48, 1)
            .addTimedChild(instance166, 48, 1)
            .addTimedChild(instance147, 44, 5)
            .addTimedChild(instance170, 49, 1)
            .addTimedChild(instance171, 50, 1)
            .addTimedChild(instance178, 51, 1)
            .addTimedChild(instance177, 51, 1)
            .addTimedChild(instance176, 51, 1)
            .addTimedChild(instance175, 51, 1)
            .addTimedChild(instance174, 51, 1)
            .addTimedChild(instance173, 51, 1)
            .addTimedChild(instance172, 51, 1)
            .addTimedChild(instance179, 52, 1)
            .addTimedChild(instance180, 53, 1)
            .addTimedChild(instance187, 54, 5)
            .addTimedChild(instance186, 54, 5)
            .addTimedChild(instance185, 54, 1)
            .addTimedChild(instance184, 54, 1)
            .addTimedChild(instance183, 54, 1)
            .addTimedChild(instance182, 54, 1)
            .addTimedChild(instance191, 55, 1)
            .addTimedChild(instance190, 55, 1)
            .addTimedChild(instance189, 55, 1)
            .addTimedChild(instance188, 55, 1)
            .addTimedChild(instance195, 56, 1)
            .addTimedChild(instance194, 56, 1)
            .addTimedChild(instance193, 56, 1)
            .addTimedChild(instance192, 56, 1)
            .addTimedChild(instance199, 57, 1)
            .addTimedChild(instance198, 57, 1)
            .addTimedChild(instance197, 57, 1)
            .addTimedChild(instance196, 57, 1)
            .addTimedChild(instance203, 58, 1)
            .addTimedChild(instance202, 58, 1)
            .addTimedChild(instance201, 58, 1)
            .addTimedChild(instance200, 58, 1)
            .addTimedChild(instance181, 54, 5)
            .addTimedChild(instance204, 59, 1)
            .addTimedChild(instance205, 60, 1)
            .addTimedChild(instance212, 61, 1)
            .addTimedChild(instance211, 61, 1)
            .addTimedChild(instance210, 61, 1)
            .addTimedChild(instance209, 61, 1)
            .addTimedChild(instance208, 61, 1)
            .addTimedChild(instance207, 61, 1)
            .addTimedChild(instance206, 61, 1)
            .addTimedChild(instance213, 62, 1)
            .addTimedChild(instance214, 63, 1)
            .addTimedChild(instance221, 64, 5)
            .addTimedChild(instance220, 64, 5)
            .addTimedChild(instance219, 64, 1)
            .addTimedChild(instance218, 64, 1)
            .addTimedChild(instance217, 64, 1)
            .addTimedChild(instance216, 64, 1)
            .addTimedChild(instance225, 65, 1)
            .addTimedChild(instance224, 65, 1)
            .addTimedChild(instance223, 65, 1)
            .addTimedChild(instance222, 65, 1)
            .addTimedChild(instance229, 66, 1)
            .addTimedChild(instance228, 66, 1)
            .addTimedChild(instance227, 66, 1)
            .addTimedChild(instance226, 66, 1)
            .addTimedChild(instance233, 67, 1)
            .addTimedChild(instance232, 67, 1)
            .addTimedChild(instance231, 67, 1)
            .addTimedChild(instance230, 67, 1)
            .addTimedChild(instance237, 68, 1)
            .addTimedChild(instance236, 68, 1)
            .addTimedChild(instance235, 68, 1)
            .addTimedChild(instance234, 68, 1)
            .addTimedChild(instance215, 64, 5)
            .addTimedChild(instance238, 69, 1)
            .addTimedChild(instance239, 70, 1)
            .addTimedChild(instance246, 71, 1)
            .addTimedChild(instance245, 71, 1)
            .addTimedChild(instance244, 71, 1)
            .addTimedChild(instance243, 71, 1)
            .addTimedChild(instance242, 71, 1)
            .addTimedChild(instance241, 71, 1)
            .addTimedChild(instance240, 71, 1)
            .addTimedChild(instance247, 72, 1)
            .addTimedChild(instance248, 73, 1)
            .addTimedChild(instance255, 74, 5)
            .addTimedChild(instance254, 74, 5)
            .addTimedChild(instance253, 74, 1)
            .addTimedChild(instance252, 74, 1)
            .addTimedChild(instance251, 74, 1)
            .addTimedChild(instance250, 74, 1)
            .addTimedChild(instance259, 75, 1)
            .addTimedChild(instance258, 75, 1)
            .addTimedChild(instance257, 75, 1)
            .addTimedChild(instance256, 75, 1)
            .addTimedChild(instance263, 76, 1)
            .addTimedChild(instance262, 76, 1)
            .addTimedChild(instance261, 76, 1)
            .addTimedChild(instance260, 76, 1)
            .addTimedChild(instance267, 77, 1)
            .addTimedChild(instance266, 77, 1)
            .addTimedChild(instance265, 77, 1)
            .addTimedChild(instance264, 77, 1)
            .addTimedChild(instance271, 78, 1)
            .addTimedChild(instance270, 78, 1)
            .addTimedChild(instance269, 78, 1)
            .addTimedChild(instance268, 78, 1)
            .addTimedChild(instance249, 74, 5);
    });

    var Graphic240 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 79, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[452]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[453]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[454]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[455]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[456]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[457]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[458]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[452]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[453]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[454]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[455]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[456]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[457]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[458]);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[452]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[453]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[454]);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[455]);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[456]);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[457]);
        var instance21 = new Graphics()
            .drawCommands(shapes.s01[458]);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[452]);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[453]);
        var instance24 = new Graphics()
            .drawCommands(shapes.s01[454]);
        var instance25 = new Graphics()
            .drawCommands(shapes.s01[455]);
        var instance26 = new Graphics()
            .drawCommands(shapes.s01[456]);
        var instance27 = new Graphics()
            .drawCommands(shapes.s01[457]);
        var instance28 = new Graphics()
            .drawCommands(shapes.s01[458]);
        var instance29 = new Graphics()
            .drawCommands(shapes.s01[452]);
        var instance30 = new Graphics()
            .drawCommands(shapes.s01[453]);
        var instance31 = new Graphics()
            .drawCommands(shapes.s01[454]);
        var instance32 = new Graphics()
            .drawCommands(shapes.s01[455]);
        var instance33 = new Graphics()
            .drawCommands(shapes.s01[456]);
        var instance34 = new Graphics()
            .drawCommands(shapes.s01[457]);
        var instance35 = new Graphics()
            .drawCommands(shapes.s01[458]);
        var instance36 = new Graphics()
            .drawCommands(shapes.s01[452]);
        var instance37 = new Graphics()
            .drawCommands(shapes.s01[453]);
        var instance38 = new Graphics()
            .drawCommands(shapes.s01[454]);
        var instance39 = new Graphics()
            .drawCommands(shapes.s01[455]);
        var instance40 = new Graphics()
            .drawCommands(shapes.s01[456]);
        var instance41 = new Graphics()
            .drawCommands(shapes.s01[457]);
        var instance42 = new Graphics()
            .drawCommands(shapes.s01[458]);
        var instance43 = new Graphics()
            .drawCommands(shapes.s01[452]);
        var instance44 = new Graphics()
            .drawCommands(shapes.s01[453]);
        var instance45 = new Graphics()
            .drawCommands(shapes.s01[454]);
        var instance46 = new Graphics()
            .drawCommands(shapes.s01[455]);
        var instance47 = new Graphics()
            .drawCommands(shapes.s01[456]);
        var instance48 = new Graphics()
            .drawCommands(shapes.s01[457]);
        var instance49 = new Graphics()
            .drawCommands(shapes.s01[458]);
        var instance50 = new Graphics()
            .drawCommands(shapes.s01[452]);
        var instance51 = new Graphics()
            .drawCommands(shapes.s01[453]);
        var instance52 = new Graphics()
            .drawCommands(shapes.s01[454]);
        var instance53 = new Graphics()
            .drawCommands(shapes.s01[455]);
        var instance54 = new Graphics()
            .drawCommands(shapes.s01[456]);
        var instance55 = new Graphics()
            .drawCommands(shapes.s01[457]);
        var instance56 = new Graphics()
            .drawCommands(shapes.s01[458]);
        var instance57 = new Graphics()
            .drawCommands(shapes.s01[452]);
        this.addTimedChild(instance1, 0, 1)
            .addTimedChild(instance2, 1, 1)
            .addTimedChild(instance3, 2, 1)
            .addTimedChild(instance4, 3, 1)
            .addTimedChild(instance5, 4, 1)
            .addTimedChild(instance6, 5, 1)
            .addTimedChild(instance7, 6, 1)
            .addTimedChild(instance8, 7, 4)
            .addTimedChild(instance9, 11, 1)
            .addTimedChild(instance10, 12, 1)
            .addTimedChild(instance11, 13, 1)
            .addTimedChild(instance12, 14, 1)
            .addTimedChild(instance13, 15, 1)
            .addTimedChild(instance14, 16, 1)
            .addTimedChild(instance15, 17, 4)
            .addTimedChild(instance16, 21, 1)
            .addTimedChild(instance17, 22, 1)
            .addTimedChild(instance18, 23, 1)
            .addTimedChild(instance19, 24, 1)
            .addTimedChild(instance20, 25, 1)
            .addTimedChild(instance21, 26, 1)
            .addTimedChild(instance22, 27, 4)
            .addTimedChild(instance23, 31, 1)
            .addTimedChild(instance24, 32, 1)
            .addTimedChild(instance25, 33, 1)
            .addTimedChild(instance26, 34, 1)
            .addTimedChild(instance27, 35, 1)
            .addTimedChild(instance28, 36, 1)
            .addTimedChild(instance29, 37, 4)
            .addTimedChild(instance30, 41, 1)
            .addTimedChild(instance31, 42, 1)
            .addTimedChild(instance32, 43, 1)
            .addTimedChild(instance33, 44, 1)
            .addTimedChild(instance34, 45, 1)
            .addTimedChild(instance35, 46, 1)
            .addTimedChild(instance36, 47, 4)
            .addTimedChild(instance37, 51, 1)
            .addTimedChild(instance38, 52, 1)
            .addTimedChild(instance39, 53, 1)
            .addTimedChild(instance40, 54, 1)
            .addTimedChild(instance41, 55, 1)
            .addTimedChild(instance42, 56, 1)
            .addTimedChild(instance43, 57, 4)
            .addTimedChild(instance44, 61, 1)
            .addTimedChild(instance45, 62, 1)
            .addTimedChild(instance46, 63, 1)
            .addTimedChild(instance47, 64, 1)
            .addTimedChild(instance48, 65, 1)
            .addTimedChild(instance49, 66, 1)
            .addTimedChild(instance50, 67, 4)
            .addTimedChild(instance51, 71, 1)
            .addTimedChild(instance52, 72, 1)
            .addTimedChild(instance53, 73, 1)
            .addTimedChild(instance54, 74, 1)
            .addTimedChild(instance55, 75, 1)
            .addTimedChild(instance56, 76, 1)
            .addTimedChild(instance57, 77, 2);
    });

    var Graphic241 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 79, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[459]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[460]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[461]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[461]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[461]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[460]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[462]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[460]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[461]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[461]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[461]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[460]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[459]);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[460]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[461]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[461]);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[461]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[460]);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[462]);
        var instance24 = new Graphics()
            .drawCommands(shapes.s01[460]);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[461]);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[461]);
        var instance21 = new Graphics()
            .drawCommands(shapes.s01[461]);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[460]);
        var instance25 = new Graphics()
            .drawCommands(shapes.s01[459]);
        var instance30 = new Graphics()
            .drawCommands(shapes.s01[460]);
        var instance29 = new Graphics()
            .drawCommands(shapes.s01[461]);
        var instance28 = new Graphics()
            .drawCommands(shapes.s01[461]);
        var instance27 = new Graphics()
            .drawCommands(shapes.s01[461]);
        var instance26 = new Graphics()
            .drawCommands(shapes.s01[460]);
        var instance31 = new Graphics()
            .drawCommands(shapes.s01[462]);
        var instance36 = new Graphics()
            .drawCommands(shapes.s01[460]);
        var instance35 = new Graphics()
            .drawCommands(shapes.s01[461]);
        var instance34 = new Graphics()
            .drawCommands(shapes.s01[461]);
        var instance33 = new Graphics()
            .drawCommands(shapes.s01[461]);
        var instance32 = new Graphics()
            .drawCommands(shapes.s01[460]);
        var instance37 = new Graphics()
            .drawCommands(shapes.s01[459]);
        var instance42 = new Graphics()
            .drawCommands(shapes.s01[460])
            .setTransform(-1.25, -2608.1, 1.078, 15.646);
        var instance41 = new Graphics()
            .drawCommands(shapes.s01[461]);
        var instance40 = new Graphics()
            .drawCommands(shapes.s01[461]);
        var instance39 = new Graphics()
            .drawCommands(shapes.s01[461]);
        var instance38 = new Graphics()
            .drawCommands(shapes.s01[460]);
        this.addTimedChild(instance1, 0, 1)
            .addTimedChild(instance6, 1, 6, {
                "1": {
                    x: -1.25,
                    y: -2608.1,
                    sx: 1.078,
                    sy: 15.646
                }
            })
            .addTimedChild(instance5, 1, 6, {
                "1": {
                    x: -104.05,
                    y: -449.15,
                    sx: 1.367,
                    sy: 3.637
                },
                "2": {
                    y: -149.4,
                    sy: 1.882
                },
                "3": {
                    y: 73.15,
                    sy: 0.589
                },
                "4": {
                    y: 119.7,
                    sy: 0.321
                },
                "5": {
                    y: 130.1,
                    sy: 0.264
                },
                "6": {
                    y: 136.1,
                    sy: 0.231
                }
            })
            .addTimedChild(instance4, 1, 6, {
                "1": {
                    x: -53.15,
                    y: -322.45,
                    sx: 1.22,
                    sy: 2.895
                },
                "2": {
                    y: -103.85,
                    sy: 1.619
                },
                "3": {
                    y: 66,
                    sy: 0.626
                },
                "4": {
                    y: 79.8,
                    sy: 0.548
                },
                "5": {
                    y: 97.6,
                    sy: 0.446
                },
                "6": {
                    y: 103.75,
                    sy: 0.41
                }
            })
            .addTimedChild(instance3, 1, 6, {
                "1": {
                    y: 0,
                    sy: 1
                },
                "2": {
                    y: 94.45,
                    sy: 0.446
                },
                "3": {
                    y: 125.05,
                    sy: 0.265
                },
                "4": {
                    y: 128.3,
                    sy: 0.247
                },
                "6": {
                    y: 125.05,
                    sy: 0.265
                }
            })
            .addTimedChild(instance2, 1, 6)
            .addTimedChild(instance7, 7, 1)
            .addTimedChild(instance12, 8, 4, {
                "8": {
                    x: -1.25,
                    y: -2608.1,
                    sx: 1.078,
                    sy: 15.646
                }
            })
            .addTimedChild(instance11, 8, 4, {
                "8": {
                    x: -104.05,
                    y: 137.8,
                    sx: 1.367,
                    sy: 0.222
                },
                "9": {
                    y: 119.7,
                    sy: 0.321
                },
                "10": {
                    y: 73.15,
                    sy: 0.589
                },
                "11": {
                    y: -149.4,
                    sy: 1.882
                }
            })
            .addTimedChild(instance10, 8, 4, {
                "8": {
                    x: -53.15,
                    y: 107.75,
                    sx: 1.22,
                    sy: 0.388
                },
                "9": {
                    y: 66,
                    sy: 0.626
                },
                "10": {
                    y: -103.85,
                    sy: 1.619
                },
                "11": {
                    y: -322.45,
                    sy: 2.895
                }
            })
            .addTimedChild(instance9, 8, 4, {
                "8": {
                    y: 0,
                    sy: 1
                },
                "9": {
                    y: -121.05,
                    sy: 1.711
                },
                "10": {
                    y: -146.95,
                    sy: 1.863
                }
            })
            .addTimedChild(instance8, 8, 4)
            .addTimedChild(instance13, 12, 13)
            .addTimedChild(instance18, 25, 6, {
                "25": {
                    x: -1.25,
                    y: -2608.1,
                    sx: 1.078,
                    sy: 15.646
                }
            })
            .addTimedChild(instance17, 25, 6, {
                "25": {
                    x: -104.05,
                    y: -449.15,
                    sx: 1.367,
                    sy: 3.637
                },
                "26": {
                    y: -149.4,
                    sy: 1.882
                },
                "27": {
                    y: 73.15,
                    sy: 0.589
                },
                "28": {
                    y: 119.7,
                    sy: 0.321
                },
                "29": {
                    y: 130.1,
                    sy: 0.264
                },
                "30": {
                    y: 136.1,
                    sy: 0.231
                }
            })
            .addTimedChild(instance16, 25, 6, {
                "25": {
                    x: -53.15,
                    y: -322.45,
                    sx: 1.22,
                    sy: 2.895
                },
                "26": {
                    y: -103.85,
                    sy: 1.619
                },
                "27": {
                    y: 66,
                    sy: 0.626
                },
                "28": {
                    y: 79.8,
                    sy: 0.548
                },
                "29": {
                    y: 97.6,
                    sy: 0.446
                },
                "30": {
                    y: 103.75,
                    sy: 0.41
                }
            })
            .addTimedChild(instance15, 25, 6, {
                "25": {
                    y: 0,
                    sy: 1
                },
                "26": {
                    y: 94.45,
                    sy: 0.446
                },
                "27": {
                    y: 125.05,
                    sy: 0.265
                },
                "28": {
                    y: 128.3,
                    sy: 0.247
                },
                "30": {
                    y: 125.05,
                    sy: 0.265
                }
            })
            .addTimedChild(instance14, 25, 6)
            .addTimedChild(instance19, 31, 1)
            .addTimedChild(instance24, 32, 4, {
                "32": {
                    x: -1.25,
                    y: -2608.1,
                    sx: 1.078,
                    sy: 15.646
                }
            })
            .addTimedChild(instance23, 32, 4, {
                "32": {
                    x: -104.05,
                    y: 137.8,
                    sx: 1.367,
                    sy: 0.222
                },
                "33": {
                    y: 119.7,
                    sy: 0.321
                },
                "34": {
                    y: 73.15,
                    sy: 0.589
                },
                "35": {
                    y: -149.4,
                    sy: 1.882
                }
            })
            .addTimedChild(instance22, 32, 4, {
                "32": {
                    x: -53.15,
                    y: 107.75,
                    sx: 1.22,
                    sy: 0.388
                },
                "33": {
                    y: 66,
                    sy: 0.626
                },
                "34": {
                    y: -103.85,
                    sy: 1.619
                },
                "35": {
                    y: -322.45,
                    sy: 2.895
                }
            })
            .addTimedChild(instance21, 32, 4, {
                "32": {
                    y: 0,
                    sy: 1
                },
                "33": {
                    y: -121.05,
                    sy: 1.711
                },
                "34": {
                    y: -146.95,
                    sy: 1.863
                }
            })
            .addTimedChild(instance20, 32, 4)
            .addTimedChild(instance25, 36, 13)
            .addTimedChild(instance30, 49, 6, {
                "49": {
                    x: -1.25,
                    y: -2608.1,
                    sx: 1.078,
                    sy: 15.646
                }
            })
            .addTimedChild(instance29, 49, 6, {
                "49": {
                    x: -104.05,
                    y: -449.15,
                    sx: 1.367,
                    sy: 3.637
                },
                "50": {
                    y: -149.4,
                    sy: 1.882
                },
                "51": {
                    y: 73.15,
                    sy: 0.589
                },
                "52": {
                    y: 119.7,
                    sy: 0.321
                },
                "53": {
                    y: 130.1,
                    sy: 0.264
                },
                "54": {
                    y: 136.1,
                    sy: 0.231
                }
            })
            .addTimedChild(instance28, 49, 6, {
                "49": {
                    x: -53.15,
                    y: -322.45,
                    sx: 1.22,
                    sy: 2.895
                },
                "50": {
                    y: -103.85,
                    sy: 1.619
                },
                "51": {
                    y: 66,
                    sy: 0.626
                },
                "52": {
                    y: 79.8,
                    sy: 0.548
                },
                "53": {
                    y: 97.6,
                    sy: 0.446
                },
                "54": {
                    y: 103.75,
                    sy: 0.41
                }
            })
            .addTimedChild(instance27, 49, 6, {
                "49": {
                    y: 0,
                    sy: 1
                },
                "50": {
                    y: 94.45,
                    sy: 0.446
                },
                "51": {
                    y: 125.05,
                    sy: 0.265
                },
                "52": {
                    y: 128.3,
                    sy: 0.247
                },
                "54": {
                    y: 125.05,
                    sy: 0.265
                }
            })
            .addTimedChild(instance26, 49, 6)
            .addTimedChild(instance31, 55, 1)
            .addTimedChild(instance36, 56, 4, {
                "56": {
                    x: -1.25,
                    y: -2608.1,
                    sx: 1.078,
                    sy: 15.646
                }
            })
            .addTimedChild(instance35, 56, 4, {
                "56": {
                    x: -104.05,
                    y: 137.8,
                    sx: 1.367,
                    sy: 0.222
                },
                "57": {
                    y: 119.7,
                    sy: 0.321
                },
                "58": {
                    y: 73.15,
                    sy: 0.589
                },
                "59": {
                    y: -149.4,
                    sy: 1.882
                }
            })
            .addTimedChild(instance34, 56, 4, {
                "56": {
                    x: -53.15,
                    y: 107.75,
                    sx: 1.22,
                    sy: 0.388
                },
                "57": {
                    y: 66,
                    sy: 0.626
                },
                "58": {
                    y: -103.85,
                    sy: 1.619
                },
                "59": {
                    y: -322.45,
                    sy: 2.895
                }
            })
            .addTimedChild(instance33, 56, 4, {
                "56": {
                    y: 0,
                    sy: 1
                },
                "57": {
                    y: -121.05,
                    sy: 1.711
                },
                "58": {
                    y: -146.95,
                    sy: 1.863
                }
            })
            .addTimedChild(instance32, 56, 4)
            .addTimedChild(instance37, 60, 13)
            .addTimedChild(instance42, 73, 6)
            .addTimedChild(instance41, 73, 6, {
                "73": {
                    x: -104.05,
                    y: -449.15,
                    sx: 1.367,
                    sy: 3.637
                },
                "74": {
                    y: -149.4,
                    sy: 1.882
                },
                "75": {
                    y: 73.15,
                    sy: 0.589
                },
                "76": {
                    y: 119.7,
                    sy: 0.321
                },
                "77": {
                    y: 130.1,
                    sy: 0.264
                },
                "78": {
                    y: 136.1,
                    sy: 0.231
                }
            })
            .addTimedChild(instance40, 73, 6, {
                "73": {
                    x: -53.15,
                    y: -322.45,
                    sx: 1.22,
                    sy: 2.895
                },
                "74": {
                    y: -103.85,
                    sy: 1.619
                },
                "75": {
                    y: 66,
                    sy: 0.626
                },
                "76": {
                    y: 79.8,
                    sy: 0.548
                },
                "77": {
                    y: 97.6,
                    sy: 0.446
                },
                "78": {
                    y: 103.75,
                    sy: 0.41
                }
            })
            .addTimedChild(instance39, 73, 6, {
                "73": {
                    y: 0,
                    sy: 1
                },
                "74": {
                    y: 94.45,
                    sy: 0.446
                },
                "75": {
                    y: 125.05,
                    sy: 0.265
                },
                "76": {
                    y: 128.3,
                    sy: 0.247
                },
                "78": {
                    y: 125.05,
                    sy: 0.265
                }
            })
            .addTimedChild(instance38, 73, 6);
    });

    var Graphic242 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 79, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[463]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[467]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[466]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[470]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[472]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[474]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[465]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[464]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[469]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[468]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[471]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[473]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[468]);
        this.addTimedChild(instance1, 0, 58)
            .addTimedChild(instance5, 58, 21)
            .addTimedChild(instance4, 58, 1)
            .addTimedChild(instance8, 59, 2)
            .addTimedChild(instance10, 61, 1)
            .addTimedChild(instance13, 62, 17)
            .addTimedChild(instance3, 58, 21)
            .addTimedChild(instance2, 58, 1)
            .addTimedChild(instance7, 59, 2)
            .addTimedChild(instance6, 59, 2)
            .addTimedChild(instance9, 61, 1)
            .addTimedChild(instance12, 62, 17)
            .addTimedChild(instance11, 62, 17);
    });

    var Graphic243 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 79, loop: false });
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[479]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[480]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[481]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[482]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[478])
            .setTransform(-54.4, -29.85, 1, 1, -0.005);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[478])
            .setTransform(-82.5, -27.6, 1, 1, -0.005);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[478])
            .setTransform(-93.4, -24.2, 1, 1, -0.005);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[477])
            .setTransform(-4.2, -27.9, 1, 1, -0.122);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[478])
            .setTransform(38.55, -39.15, 1, 1, -0.005);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[478])
            .setTransform(44.9, -29.15, 1, 1, -0.005);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[478])
            .setTransform(16.8, -26.9, 1, 1, -0.005);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[478])
            .setTransform(5.9, -23.5, 1, 1, -0.005);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[477])
            .setTransform(95.15, -27.2, 1, 1, -0.122);
        this.addTimedChild(instance10, 0, 19)
            .addTimedChild(instance11, 19, 15)
            .addTimedChild(instance12, 34, 19)
            .addTimedChild(instance13, 53, 26)
            .addTimedChild(instance9)
            .addTimedChild(instance8)
            .addTimedChild(instance7)
            .addTimedChild(instance6)
            .addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic307 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 79, loop: false });
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[483]);
        var instance10 = new Graphic243(MovieClip.SYNCHED)
            .setTransform(-241.8, 358.6);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[476]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[475]);
        var instance7 = new Graphic242(MovieClip.SYNCHED)
            .setTransform(651.1, -452.8, 0.772, 0.772);
        var instance6 = new Graphic241(MovieClip.SYNCHED)
            .setTransform(573.6, 300.75);
        var instance5 = new Graphic240(MovieClip.SYNCHED)
            .setTransform(746.8, 359.95);
        var instance4 = new Graphic239(MovieClip.SYNCHED);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[417]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[413]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[418]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[414]);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[419]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[415]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[420]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[416]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[412]);
        this.addTimedChild(instance11)
            .addTimedChild(instance10)
            .addTimedChild(instance9)
            .addTimedChild(instance8)
            .addTimedChild(instance7)
            .addTimedChild(instance6)
            .addTimedChild(instance5)
            .addTimedChild(instance4, 0, 79, {
                "0": {
                    x: 540.35,
                    y: -59.65
                }
            })
            .addTimedChild(instance3, 0, 19)
            .addTimedChild(instance2, 0, 19)
            .addTimedChild(instance13, 19, 15)
            .addTimedChild(instance12, 19, 15)
            .addTimedChild(instance15, 34, 19)
            .addTimedChild(instance14, 34, 19)
            .addTimedChild(instance17, 53, 26)
            .addTimedChild(instance16, 53, 26)
            .addTimedChild(instance1);
    });

    var Graphic308 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[76]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[75]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[67]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[66]);
        this.addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic256 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[485]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[484]);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic257 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance1 = new Sprite(fromFrame("REPLACE_HEADSET"))
            .setTransform(-4.55, 30.5, 0.476, 0.476);
        this.addTimedChild(instance1);
    });

    var Graphic258 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[70]);
        this.addTimedChild(instance1);
    });

    var Graphic259 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[69])
            .setTransform(-657.05, -461.95);
        this.addTimedChild(instance1);
    });

    var Graphic260 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[184])
            .setTransform(-497.15, -407.2);
        this.addTimedChild(instance1);
    });

    var Graphic245 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[149])
            .setTransform(-466.8, -453.85);
        this.addTimedChild(instance1);
    });

    var Graphic246 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[150])
            .setTransform(-504.35, -453.65);
        this.addTimedChild(instance1);
    });

    var Graphic247 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[151])
            .setTransform(-458.45, -480.9, 0.972);
        this.addTimedChild(instance1);
    });

    var Graphic248 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[151])
            .setTransform(-458.45, -480.9, 0.972);
        this.addTimedChild(instance1);
    });

    var Graphic249 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[157])
            .setTransform(-386.35, -557.05, 1, 1, 0.174);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[156])
            .setTransform(-385.25, -559.2, 1, 1, 0.174);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[155])
            .setTransform(-486.6, -478.35);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[154])
            .setTransform(-455.15, -505.5, 1, 1, 0.06);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[153])
            .setTransform(-588.15, -407.35, 1.216, 0.851);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[152])
            .setTransform(-596.45, -406.55, 1.239, 0.851);
        this.addTimedChild(instance6)
            .addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic244 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[29]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[387]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[26]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[169]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[398]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[392]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[384]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[401]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[395]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[388]);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[29]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[387]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[26]);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[398]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[392]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[384]);
        var instance21 = new Graphics()
            .drawCommands(shapes.s01[400]);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[394]);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[386]);
        var instance24 = new Graphics()
            .drawCommands(shapes.s01[398]);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[392]);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[384]);
        var instance28 = new Graphics()
            .drawCommands(shapes.s01[29])
            .setTransform(-478.4, -525.85);
        var instance27 = new Graphics()
            .drawCommands(shapes.s01[28])
            .setTransform(0, 2.5);
        var instance26 = new Graphics()
            .drawCommands(shapes.s01[387])
            .setTransform(-478.4, -525.85);
        var instance25 = new Graphics()
            .drawCommands(shapes.s01[26])
            .setTransform(-478.4, -525.85);
        this.addTimedChild(instance4, 0, 4, {
                "0": {
                    x: -478.4,
                    y: -525.85
                }
            })
            .addTimedChild(instance3, 0, 4, {
                "0": {
                    y: 2.5
                }
            })
            .addTimedChild(instance2, 0, 4, {
                "0": {
                    x: -478.4,
                    y: -525.85
                }
            })
            .addTimedChild(instance1, 0, 4, {
                "0": {
                    x: -478.4,
                    y: -525.85
                }
            })
            .addTimedChild(instance5, 4, 2)
            .addTimedChild(instance8, 6, 2)
            .addTimedChild(instance7, 6, 2)
            .addTimedChild(instance6, 6, 2)
            .addTimedChild(instance11, 8, 3)
            .addTimedChild(instance10, 8, 3)
            .addTimedChild(instance9, 8, 3)
            .addTimedChild(instance15, 11, 14, {
                "11": {
                    x: -478.4,
                    y: -525.85
                }
            })
            .addTimedChild(instance14, 11, 14, {
                "11": {
                    y: 2.5
                }
            })
            .addTimedChild(instance13, 11, 14, {
                "11": {
                    x: -478.4,
                    y: -525.85
                }
            })
            .addTimedChild(instance12, 11, 14, {
                "11": {
                    x: -478.4,
                    y: -525.85
                }
            })
            .addTimedChild(instance18, 25, 1)
            .addTimedChild(instance17, 25, 1)
            .addTimedChild(instance16, 25, 1)
            .addTimedChild(instance21, 26, 1)
            .addTimedChild(instance20, 26, 1)
            .addTimedChild(instance19, 26, 1)
            .addTimedChild(instance24, 27, 1)
            .addTimedChild(instance23, 27, 1)
            .addTimedChild(instance22, 27, 1)
            .addTimedChild(instance28, 28, 31)
            .addTimedChild(instance27, 28, 31)
            .addTimedChild(instance26, 28, 31)
            .addTimedChild(instance25, 28, 31);
    });

    var Graphic250 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance1 = new Graphic244(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 59, {
            "0": {
                x: -6.45,
                y: -1.7,
                sx: 1,
                sy: 1
            },
            "3": {
                x: -6.55,
                sx: 0.959,
                sy: 1.061
            },
            "4": {
                x: -6.45,
                sx: 1,
                sy: 1
            },
            "5": {
                sx: 0.874,
                sy: 1.053
            },
            "6": {
                sx: 0.667,
                sy: 1.209
            },
            "7": {
                sx: 1,
                sy: 1
            },
            "8": {
                sx: 1.107,
                sy: 0.786
            },
            "9": {
                x: -6.5,
                sx: 1.063,
                sy: 0.653
            },
            "11": {
                x: -6.45,
                sx: 1,
                sy: 1
            },
            "24": {
                sx: 0.95,
                sy: 1.116
            },
            "25": {
                sx: 1,
                sy: 1
            },
            "27": {
                sx: 1.058,
                sy: 0.833
            },
            "28": {
                sx: 1,
                sy: 1
            },
            "29": {
                sx: 0.95,
                sy: 1.104
            },
            "30": {
                sx: 1,
                sy: 1
            }
        });
    });

    var Graphic251 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[177]);
        this.addTimedChild(instance1);
    });

    var Graphic252 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[180])
            .setTransform(-368.7, -483.9, 0.959);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[179])
            .setTransform(-383.8, -485.3);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic253 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[147]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[146])
            .setTransform(-585.65, -483.25);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic261 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance9 = new Graphic253(MovieClip.SYNCHED)
            .setTransform(105.5, -122.2);
        var instance8 = new Graphic252(MovieClip.SYNCHED)
            .setTransform(-96.35, -120.15);
        var instance7 = new Graphic251(MovieClip.SYNCHED)
            .setTransform(4.15, -0.3);
        var instance6 = new Graphic250(MovieClip.SYNCHED)
            .setTransform(-4.65, -73.2);
        var instance5 = new Graphic249(MovieClip.SYNCHED)
            .setTransform(-11.3, -127.5);
        var instance4 = new Graphic248(MovieClip.SYNCHED)
            .setTransform(12.6, -125.95);
        var instance3 = new Graphic247(MovieClip.SYNCHED)
            .setTransform(-27.85, -125.1);
        var instance2 = new Graphic246(MovieClip.SYNCHED)
            .setTransform(8.55, -151.8);
        var instance1 = new Graphic245(MovieClip.SYNCHED)
            .setTransform(-26.4, -151.8);
        this.addTimedChild(instance9)
            .addTimedChild(instance8)
            .addTimedChild(instance7)
            .addTimedChild(instance6)
            .addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic254 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[188])
            .setTransform(-17.65, 14.8, 0.95);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[187])
            .setTransform(-470, -630.85, 0.95);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[186])
            .setTransform(-470, -630.85, 0.95);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[185])
            .setTransform(-470, -630.85, 0.95);
        this.addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic255 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[193])
            .setTransform(14.05, 13.35, 0.95);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[192])
            .setTransform(-438.25, -629.9, 0.95);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[191])
            .setTransform(-438.25, -629.9, 0.95);
        this.addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic262 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[196]);
        var instance2 = new Graphic255(MovieClip.SYNCHED)
            .setTransform(-9.2, -101.15);
        var instance1 = new Graphic254(MovieClip.SYNCHED)
            .setTransform(22.55, -100.2);
        this.addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic263 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[197])
            .setTransform(-461.15, -639, 0.96);
        this.addTimedChild(instance1);
    });

    var Graphic264 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[202]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[200]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[199]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[198]);
        this.addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic265 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[115]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[114]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[113]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[112]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[111]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[110]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[109]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[102]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[101]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[100]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[108]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[527]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[526]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[525]);
        var instance25 = new Graphics()
            .drawCommands(shapes.s01[115])
            .setTransform(-0.6, 2.45, 1, 1, 0, 0.484, 2.657);
        var instance24 = new Graphics()
            .drawCommands(shapes.s01[114])
            .setTransform(-4.3, 1.95, 1, 1, 0, 0.618, 2.523);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[113])
            .setTransform(4.25, 33.75, 1.12, 1.056, -0.238);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[112])
            .setTransform(5.75, 34.95, 1, 1, 0.01);
        var instance21 = new Graphics()
            .drawCommands(shapes.s01[111])
            .setTransform(6.05, 34.9, 1, 1, 0.257);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[110])
            .setTransform(1.05, 40.25, 1, 1, 0.344);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[109])
            .setTransform(34.1, -985.65, 1, 1, 0.684);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[102])
            .setTransform(-464.95, -886.85, 1, 1, 0.178);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[101])
            .setTransform(-538.25, -842.15, 1, 1, 0.091);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[100])
            .setTransform(-668.55, -792.3, 1.087);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[108])
            .setTransform(-13.45, 17.25, 1, 1, -0.388);
        this.addTimedChild(instance11, 0, 3, {
                "0": {
                    x: -0.6,
                    y: 2.45,
                    kx: 0.484,
                    ky: 2.657
                }
            })
            .addTimedChild(instance10, 0, 3, {
                "0": {
                    x: -4.3,
                    y: 1.95,
                    kx: 0.618,
                    ky: 2.523
                }
            })
            .addTimedChild(instance9, 0, 3, {
                "0": {
                    x: 4.25,
                    y: 33.75,
                    sx: 1.12,
                    sy: 1.056,
                    r: -0.238
                }
            })
            .addTimedChild(instance8, 0, 3, {
                "0": {
                    x: 5.75,
                    y: 34.95,
                    r: 0.01
                }
            })
            .addTimedChild(instance7, 0, 3, {
                "0": {
                    x: 6.05,
                    y: 34.9,
                    r: 0.257
                }
            })
            .addTimedChild(instance6, 0, 3, {
                "0": {
                    x: 1.05,
                    y: 40.25,
                    r: 0.344
                }
            })
            .addTimedChild(instance5, 0, 3, {
                "0": {
                    x: 34.1,
                    y: -985.65,
                    r: 0.684
                }
            })
            .addTimedChild(instance4, 0, 3, {
                "0": {
                    x: -464.95,
                    y: -886.85,
                    r: 0.178
                }
            })
            .addTimedChild(instance3, 0, 3, {
                "0": {
                    x: -538.25,
                    y: -842.15,
                    r: 0.091
                }
            })
            .addTimedChild(instance2, 0, 3, {
                "0": {
                    x: -668.55,
                    y: -792.3,
                    sx: 1.087
                }
            })
            .addTimedChild(instance1, 0, 3, {
                "0": {
                    x: -13.45,
                    y: 17.25,
                    r: -0.388
                }
            })
            .addTimedChild(instance14, 3, 18, {
                "3": {
                    x: -27,
                    y: 45.85,
                    sx: 1.071,
                    sy: 1.071,
                    r: 1.068
                }
            })
            .addTimedChild(instance13, 3, 18)
            .addTimedChild(instance12, 3, 18, {
                "3": {
                    x: 907.9,
                    y: -513.6,
                    sx: 1.071,
                    sy: 1.071,
                    kx: 4.601,
                    ky: 1.682
                }
            })
            .addTimedChild(instance25, 21, 38)
            .addTimedChild(instance24, 21, 38)
            .addTimedChild(instance23, 21, 38)
            .addTimedChild(instance22, 21, 38)
            .addTimedChild(instance21, 21, 38)
            .addTimedChild(instance20, 21, 38)
            .addTimedChild(instance19, 21, 38)
            .addTimedChild(instance18, 21, 38)
            .addTimedChild(instance17, 21, 38)
            .addTimedChild(instance16, 21, 38)
            .addTimedChild(instance15, 21, 38);
    });

    var Graphic266 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[115]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[114]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[113]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[112]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[111]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[110]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[109]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[102]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[101]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[100]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[108]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[527]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[526]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[525]);
        var instance25 = new Graphics()
            .drawCommands(shapes.s01[115])
            .setTransform(-0.6, 2.45, 1, 1, 0, 0.484, 2.657);
        var instance24 = new Graphics()
            .drawCommands(shapes.s01[114])
            .setTransform(-4.3, 1.95, 1, 1, 0, 0.618, 2.523);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[113])
            .setTransform(4.25, 33.75, 1.12, 1.056, -0.238);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[112])
            .setTransform(5.75, 34.95, 1, 1, 0.01);
        var instance21 = new Graphics()
            .drawCommands(shapes.s01[111])
            .setTransform(6.05, 34.9, 1, 1, 0.257);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[110])
            .setTransform(1.05, 40.25, 1, 1, 0.344);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[109])
            .setTransform(34.1, -985.65, 1, 1, 0.684);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[102])
            .setTransform(-464.95, -886.85, 1, 1, 0.178);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[101])
            .setTransform(-538.25, -842.15, 1, 1, 0.091);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[100])
            .setTransform(-668.55, -792.3, 1.087);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[108])
            .setTransform(-13.45, 17.25, 1, 1, -0.388);
        this.addTimedChild(instance11, 0, 3, {
                "0": {
                    x: -0.6,
                    y: 2.45,
                    kx: 0.484,
                    ky: 2.657
                }
            })
            .addTimedChild(instance10, 0, 3, {
                "0": {
                    x: -4.3,
                    y: 1.95,
                    kx: 0.618,
                    ky: 2.523
                }
            })
            .addTimedChild(instance9, 0, 3, {
                "0": {
                    x: 4.25,
                    y: 33.75,
                    sx: 1.12,
                    sy: 1.056,
                    r: -0.238
                }
            })
            .addTimedChild(instance8, 0, 3, {
                "0": {
                    x: 5.75,
                    y: 34.95,
                    r: 0.01
                }
            })
            .addTimedChild(instance7, 0, 3, {
                "0": {
                    x: 6.05,
                    y: 34.9,
                    r: 0.257
                }
            })
            .addTimedChild(instance6, 0, 3, {
                "0": {
                    x: 1.05,
                    y: 40.25,
                    r: 0.344
                }
            })
            .addTimedChild(instance5, 0, 3, {
                "0": {
                    x: 34.1,
                    y: -985.65,
                    r: 0.684
                }
            })
            .addTimedChild(instance4, 0, 3, {
                "0": {
                    x: -464.95,
                    y: -886.85,
                    r: 0.178
                }
            })
            .addTimedChild(instance3, 0, 3, {
                "0": {
                    x: -538.25,
                    y: -842.15,
                    r: 0.091
                }
            })
            .addTimedChild(instance2, 0, 3, {
                "0": {
                    x: -668.55,
                    y: -792.3,
                    sx: 1.087
                }
            })
            .addTimedChild(instance1, 0, 3, {
                "0": {
                    x: -13.45,
                    y: 17.25,
                    r: -0.388
                }
            })
            .addTimedChild(instance14, 3, 18, {
                "3": {
                    x: -27,
                    y: 45.85,
                    sx: 1.071,
                    sy: 1.071,
                    r: 1.068
                }
            })
            .addTimedChild(instance13, 3, 18)
            .addTimedChild(instance12, 3, 18, {
                "3": {
                    x: 907.9,
                    y: -513.6,
                    sx: 1.071,
                    sy: 1.071,
                    kx: 4.601,
                    ky: 1.682
                }
            })
            .addTimedChild(instance25, 21, 38)
            .addTimedChild(instance24, 21, 38)
            .addTimedChild(instance23, 21, 38)
            .addTimedChild(instance22, 21, 38)
            .addTimedChild(instance21, 21, 38)
            .addTimedChild(instance20, 21, 38)
            .addTimedChild(instance19, 21, 38)
            .addTimedChild(instance18, 21, 38)
            .addTimedChild(instance17, 21, 38)
            .addTimedChild(instance16, 21, 38)
            .addTimedChild(instance15, 21, 38);
    });

    var Graphic309 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance16 = new Graphic266(MovieClip.SYNCHED);
        var instance15 = new Graphic265(MovieClip.SYNCHED);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[519]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[513]);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[520]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[514]);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[521]);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[515]);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[522]);
        var instance21 = new Graphics()
            .drawCommands(shapes.s01[516]);
        var instance24 = new Graphics()
            .drawCommands(shapes.s01[523]);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[517]);
        var instance26 = new Graphics()
            .drawCommands(shapes.s01[521]);
        var instance25 = new Graphics()
            .drawCommands(shapes.s01[515]);
        var instance28 = new Graphics()
            .drawCommands(shapes.s01[520]);
        var instance27 = new Graphics()
            .drawCommands(shapes.s01[514]);
        var instance30 = new Graphics()
            .drawCommands(shapes.s01[524]);
        var instance29 = new Graphics()
            .drawCommands(shapes.s01[518]);
        var instance32 = new Graphics()
            .drawCommands(shapes.s01[519])
            .setTransform(-38.1, -50, 1, 1, 0.131);
        var instance31 = new Graphics()
            .drawCommands(shapes.s01[513])
            .setTransform(50.55, -56.1, 1, 1, -0.165);
        var instance12 = new Graphic264(MovieClip.SYNCHED)
            .setTransform(18.05, -308.3);
        var instance11 = new Graphic263(MovieClip.SYNCHED)
            .setTransform(27.05, -395.6);
        var instance10 = new Graphic262(MovieClip.SYNCHED)
            .setTransform(19.95, -303.6);
        var instance9 = new Graphic261(MovieClip.SYNCHED)
            .setTransform(26.75, -429.2);
        var instance8 = new Graphic260(MovieClip.SYNCHED)
            .setTransform(42.1, -631.9);
        var instance7 = new Graphic259(MovieClip.SYNCHED);
        var instance6 = new Graphic258(MovieClip.SYNCHED);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[488]);
        var instance33 = new Graphics()
            .drawCommands(shapes.s01[489]);
        var instance34 = new Graphics()
            .drawCommands(shapes.s01[490]);
        var instance35 = new Graphics()
            .drawCommands(shapes.s01[491]);
        var instance36 = new Graphics()
            .drawCommands(shapes.s01[492]);
        var instance37 = new Graphics()
            .drawCommands(shapes.s01[493]);
        var instance38 = new Graphics()
            .drawCommands(shapes.s01[494]);
        var instance39 = new Graphics()
            .drawCommands(shapes.s01[495]);
        var instance40 = new Graphics()
            .drawCommands(shapes.s01[496]);
        var instance41 = new Graphics()
            .drawCommands(shapes.s01[497]);
        var instance42 = new Graphics()
            .drawCommands(shapes.s01[498]);
        var instance43 = new Graphics()
            .drawCommands(shapes.s01[499]);
        var instance44 = new Graphics()
            .drawCommands(shapes.s01[500]);
        var instance45 = new Graphics()
            .drawCommands(shapes.s01[501]);
        var instance46 = new Graphics()
            .drawCommands(shapes.s01[502]);
        var instance47 = new Graphics()
            .drawCommands(shapes.s01[503]);
        var instance48 = new Graphics()
            .drawCommands(shapes.s01[504]);
        var instance49 = new Graphics()
            .drawCommands(shapes.s01[505]);
        var instance50 = new Graphics()
            .drawCommands(shapes.s01[506]);
        var instance51 = new Graphics()
            .drawCommands(shapes.s01[507]);
        var instance52 = new Graphics()
            .drawCommands(shapes.s01[508]);
        var instance53 = new Graphics()
            .drawCommands(shapes.s01[509]);
        var instance54 = new Graphics()
            .drawCommands(shapes.s01[510]);
        var instance55 = new Graphics()
            .drawCommands(shapes.s01[511]);
        var instance56 = new Graphics()
            .drawCommands(shapes.s01[512]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[487]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[486]);
        var instance2 = new Graphic257(MovieClip.SYNCHED)
            .setTransform(-120.5, -800.75);
        var instance1 = new Graphic256(MovieClip.SYNCHED)
            .setTransform(14.8, -527.8);
        this.addTimedChild(instance16, 0, 59, {
                "0": {
                    x: 169.15,
                    y: -256.45,
                    kx: 0,
                    ky: 0,
                    r: -0.27
                },
                "3": {
                    x: 229.75,
                    y: -455.8,
                    kx: 4.503,
                    ky: 1.78,
                    r: 0
                },
                "4": {
                    x: 218.75,
                    y: -475.3
                },
                "5": {
                    x: 213.8,
                    y: -478.8
                },
                "6": {
                    x: 208.75,
                    y: -480.3
                },
                "19": {
                    x: 218.75,
                    y: -475.3
                },
                "20": {
                    x: 226.75,
                    y: -457.3
                },
                "21": {
                    x: 176.15,
                    y: -257.45,
                    kx: 0,
                    ky: 0,
                    r: -0.27
                },
                "22": {
                    x: 169.15,
                    y: -256.45
                }
            })
            .addTimedChild(instance15, 0, 59, {
                "0": {
                    x: -141.3,
                    y: -255.35,
                    kx: -0.322,
                    ky: -2.819
                },
                "3": {
                    x: -163.65,
                    y: -456.95,
                    kx: 1.864,
                    ky: 1.278
                },
                "4": {
                    x: -153.65,
                    y: -477
                },
                "5": {
                    x: -149.1,
                    y: -478.8
                },
                "6": {
                    x: -147.6,
                    y: -480
                },
                "19": {
                    x: -153.65,
                    y: -477
                },
                "20": {
                    x: -159.65,
                    y: -456.95
                },
                "21": {
                    x: -145.3,
                    y: -253.35,
                    kx: -0.322,
                    ky: -2.819
                },
                "22": {
                    x: -141.3,
                    y: -255.35
                }
            })
            .addTimedChild(instance14, 0, 3, {
                "0": {
                    x: -38.1,
                    y: -50,
                    r: 0.131
                }
            })
            .addTimedChild(instance13, 0, 3, {
                "0": {
                    x: 50.55,
                    y: -56.1,
                    r: -0.165
                }
            })
            .addTimedChild(instance18, 3, 1, {
                "3": {
                    x: 2.8,
                    y: -45.85
                }
            })
            .addTimedChild(instance17, 3, 1, {
                "3": {
                    x: -0.8,
                    y: -56.85
                }
            })
            .addTimedChild(instance20, 4, 1, {
                "4": {
                    x: 2.8,
                    y: -45.85
                }
            })
            .addTimedChild(instance19, 4, 1, {
                "4": {
                    x: -0.8,
                    y: -56.85
                }
            })
            .addTimedChild(instance22, 5, 1, {
                "5": {
                    x: 2.8,
                    y: -45.85
                }
            })
            .addTimedChild(instance21, 5, 1, {
                "5": {
                    x: -0.8,
                    y: -56.85
                }
            })
            .addTimedChild(instance24, 6, 13, {
                "6": {
                    x: 2.8,
                    y: -45.85
                }
            })
            .addTimedChild(instance23, 6, 13, {
                "6": {
                    x: -0.8,
                    y: -56.85
                }
            })
            .addTimedChild(instance26, 19, 1, {
                "19": {
                    x: 2.8,
                    y: -45.85
                }
            })
            .addTimedChild(instance25, 19, 1, {
                "19": {
                    x: -0.8,
                    y: -56.85
                }
            })
            .addTimedChild(instance28, 20, 1, {
                "20": {
                    x: 2.8,
                    y: -45.85
                }
            })
            .addTimedChild(instance27, 20, 1, {
                "20": {
                    x: -0.8,
                    y: -56.85
                }
            })
            .addTimedChild(instance30, 21, 1, {
                "21": {
                    x: -38.1,
                    y: -50,
                    r: 0.131
                }
            })
            .addTimedChild(instance29, 21, 1, {
                "21": {
                    x: 50.55,
                    y: -56.1,
                    r: -0.165
                }
            })
            .addTimedChild(instance32, 22, 37)
            .addTimedChild(instance31, 22, 37)
            .addTimedChild(instance12)
            .addTimedChild(instance11)
            .addTimedChild(instance10)
            .addTimedChild(instance9)
            .addTimedChild(instance8)
            .addTimedChild(instance7, 0, 59, {
                "0": {
                    x: 208.1,
                    y: -609.9
                },
                "37": {
                    x: 205.15,
                    y: -606.3
                },
                "38": {
                    x: 202.7,
                    y: -603.45
                },
                "39": {
                    x: 200.85,
                    y: -601.2
                },
                "40": {
                    x: 199.5,
                    y: -599.6
                },
                "41": {
                    x: 198.7,
                    y: -598.6
                },
                "42": {
                    x: 198.45,
                    y: -598.3
                },
                "43": {
                    x: 198.9,
                    y: -598.65
                },
                "44": {
                    x: 200.3,
                    y: -599.85
                },
                "45": {
                    x: 202.85,
                    y: -601.95
                },
                "46": {
                    x: 206.2,
                    y: -604.75
                },
                "47": {
                    x: 209.5,
                    y: -607.55
                },
                "48": {
                    x: 212.05,
                    y: -609.65
                },
                "49": {
                    x: 213.45,
                    y: -610.85
                },
                "50": {
                    x: 213.9,
                    y: -611.2
                },
                "51": {
                    x: 213.8,
                    y: -611.05
                },
                "52": {
                    x: 213.5,
                    y: -610.55
                },
                "53": {
                    x: 212.95,
                    y: -609.6
                },
                "54": {
                    x: 212.2,
                    y: -608.3
                },
                "55": {
                    x: 211.2,
                    y: -606.6
                },
                "56": {
                    x: 210.15,
                    y: -604.85
                },
                "57": {
                    x: 209.15,
                    y: -603.15
                },
                "58": {
                    x: 208.4,
                    y: -601.85
                }
            })
            .addTimedChild(instance6, 0, 59, {
                "0": {
                    x: 207.55,
                    y: -586.35,
                    r: 0
                },
                "37": {
                    x: 204.638,
                    y: -582.82,
                    r: 0.047
                },
                "38": {
                    x: 202.2,
                    y: -579.968,
                    r: 0.085
                },
                "39": {
                    x: 200.371,
                    y: -577.692,
                    r: 0.115
                },
                "40": {
                    x: 199.039,
                    y: -576.152,
                    r: 0.136
                },
                "41": {
                    x: 198.238,
                    y: -575.137,
                    r: 0.149
                },
                "42": {
                    x: 197.8,
                    y: -574.75,
                    r: 0.153
                },
                "43": {
                    x: 198.337,
                    y: -575.154,
                    r: 0.15
                },
                "44": {
                    x: 199.724,
                    y: -576.325,
                    r: 0.139
                },
                "45": {
                    x: 202.204,
                    y: -578.399,
                    r: 0.121
                },
                "46": {
                    x: 205.564,
                    y: -581.221,
                    r: 0.096
                },
                "47": {
                    x: 208.879,
                    y: -584.032,
                    r: 0.072
                },
                "48": {
                    x: 211.412,
                    y: -586.161,
                    r: 0.053
                },
                "49": {
                    x: 212.825,
                    y: -587.343,
                    r: 0.043
                },
                "50": {
                    x: 213.35,
                    y: -587.65,
                    r: 0.04
                },
                "51": {
                    x: 213.28,
                    y: -587.505,
                    r: 0.037
                },
                "52": {
                    x: 212.965,
                    y: -587.032,
                    r: 0.03
                },
                "53": {
                    x: 212.421,
                    y: -586.095,
                    r: 0.016
                },
                "54": {
                    x: 211.706,
                    y: -584.782,
                    r: -0.004
                },
                "55": {
                    x: 210.737,
                    y: -583.067,
                    r: -0.03
                },
                "56": {
                    x: 209.644,
                    y: -581.335,
                    r: -0.057
                },
                "57": {
                    x: 208.705,
                    y: -579.617,
                    r: -0.082
                },
                "58": {
                    x: 208.015,
                    y: -578.353,
                    r: -0.102
                }
            })
            .addTimedChild(instance5, 0, 33)
            .addTimedChild(instance33, 33, 3)
            .addTimedChild(instance34, 36, 1)
            .addTimedChild(instance35, 37, 1)
            .addTimedChild(instance36, 38, 1)
            .addTimedChild(instance37, 39, 1)
            .addTimedChild(instance38, 40, 1)
            .addTimedChild(instance39, 41, 1)
            .addTimedChild(instance40, 42, 1)
            .addTimedChild(instance41, 43, 1)
            .addTimedChild(instance42, 44, 1)
            .addTimedChild(instance43, 45, 1)
            .addTimedChild(instance44, 46, 1)
            .addTimedChild(instance45, 47, 1)
            .addTimedChild(instance46, 48, 1)
            .addTimedChild(instance47, 49, 1)
            .addTimedChild(instance48, 50, 1)
            .addTimedChild(instance49, 51, 1)
            .addTimedChild(instance50, 52, 1)
            .addTimedChild(instance51, 53, 1)
            .addTimedChild(instance52, 54, 1)
            .addTimedChild(instance53, 55, 1)
            .addTimedChild(instance54, 56, 1)
            .addTimedChild(instance55, 57, 1)
            .addTimedChild(instance56, 58, 1)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic310 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[2]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[1]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[0]);
        this.addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic311 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 163, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[3]);
        this.addTimedChild(instance1);
    });

    var Graphic293 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 83, loop: false });
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[14])
            .setTransform(-3.45, -28.35);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[13])
            .setTransform(17.2, 0.1, 1, 1, 0.714);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[12])
            .setTransform(10.85, -42.1, 1, 1, -0.069);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[11])
            .setTransform(0.55, -37.45);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[10])
            .setTransform(-3.45, -28.35);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[9])
            .setTransform(-3.45, -28.35);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[8])
            .setTransform(11.05, 34.75, 1, 1, 1.207);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[7])
            .setTransform(-3.45, -28.35);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[6])
            .setTransform(-3.45, -28.35);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[5])
            .setTransform(-3.45, -28.35);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[4])
            .setTransform(-3.45, -28.35);
        this.addTimedChild(instance11)
            .addTimedChild(instance10)
            .addTimedChild(instance9)
            .addTimedChild(instance8)
            .addTimedChild(instance7)
            .addTimedChild(instance6)
            .addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic269 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 8, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[17])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic280 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 4, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[17])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic282 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 8, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[17])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic284 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 13, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[17])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic286 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 36, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[17])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic288 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 8, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[17])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic270 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 8, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[17])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic281 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 4, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[17])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic283 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 8, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[17])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic285 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 13, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[17])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic287 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 36, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[17])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic289 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 8, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[17])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic271 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 87, loop: false });
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[21]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[20]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[18]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[18]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[19]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[18]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[18]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[19]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[18]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[18]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[19]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[18]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[18]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[19]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[18]);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[18]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[19]);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[18])
            .setTransform(-1289.25, -221.05);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[18])
            .setTransform(-1263.8, -221.2);
        this.addTimedChild(instance4, 0, 87, {
                "0": {
                    x: -1289.25,
                    y: -221.05
                },
                "8": {
                    y: -220.85
                },
                "11": {
                    y: -221.05
                },
                "15": {
                    y: -220.85
                },
                "16": {
                    y: -221.05
                },
                "24": {
                    y: -220.85
                },
                "26": {
                    y: -221.05
                },
                "39": {
                    y: -220.85
                },
                "41": {
                    y: -221.05
                },
                "77": {
                    y: -220.85
                },
                "79": {
                    y: -221.05
                }
            })
            .addTimedChild(instance3, 0, 87, {
                "0": {
                    x: -1289.25,
                    y: -221.05
                },
                "8": {
                    y: -220.85
                },
                "11": {
                    y: -221.05
                },
                "15": {
                    y: -220.85
                },
                "16": {
                    y: -221.05
                },
                "24": {
                    y: -220.85
                },
                "26": {
                    y: -221.05
                },
                "39": {
                    y: -220.85
                },
                "41": {
                    y: -221.05
                },
                "77": {
                    y: -220.85
                },
                "79": {
                    y: -221.05
                }
            })
            .addTimedChild(instance2, 0, 8, {
                "0": {
                    x: -1289.25,
                    y: -221.05
                }
            })
            .addTimedChild(instance1, 0, 8, {
                "0": {
                    x: -1263.8,
                    y: -221.2
                }
            })
            .addTimedChild(instance5, 8, 3)
            .addTimedChild(instance7, 11, 4, {
                "11": {
                    x: -1289.25,
                    y: -221.05
                }
            })
            .addTimedChild(instance6, 11, 4, {
                "11": {
                    x: -1263.8,
                    y: -221.2
                }
            })
            .addTimedChild(instance8, 15, 1)
            .addTimedChild(instance10, 16, 8, {
                "16": {
                    x: -1289.25,
                    y: -221.05
                }
            })
            .addTimedChild(instance9, 16, 8, {
                "16": {
                    x: -1263.8,
                    y: -221.2
                }
            })
            .addTimedChild(instance11, 24, 2)
            .addTimedChild(instance13, 26, 13, {
                "26": {
                    x: -1289.25,
                    y: -221.05
                }
            })
            .addTimedChild(instance12, 26, 13, {
                "26": {
                    x: -1263.8,
                    y: -221.2
                }
            })
            .addTimedChild(instance14, 39, 2)
            .addTimedChild(instance16, 41, 36, {
                "41": {
                    x: -1289.25,
                    y: -221.05
                }
            })
            .addTimedChild(instance15, 41, 36, {
                "41": {
                    x: -1263.8,
                    y: -221.2
                }
            })
            .addTimedChild(instance17, 77, 2)
            .addTimedChild(instance19, 79, 8)
            .addTimedChild(instance18, 79, 8);
    });

    var Graphic272 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 87, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[22])
            .setTransform(-1303.95, -197.85);
        this.addTimedChild(instance1);
    });

    var Graphic273 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 87, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[23])
            .setTransform(-1268.05, -199.05);
        this.addTimedChild(instance1);
    });

    var Graphic267 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 87, loop: false });
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[42]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[36]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[32]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[43]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[37]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[33]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[31]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[45]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[39]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[34]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[29]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[27]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[26]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[42]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[36]);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[32]);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[44]);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[41]);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[38]);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[42]);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[36]);
        var instance21 = new Graphics()
            .drawCommands(shapes.s01[32]);
        var instance27 = new Graphics()
            .drawCommands(shapes.s01[29]);
        var instance26 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance25 = new Graphics()
            .drawCommands(shapes.s01[27]);
        var instance24 = new Graphics()
            .drawCommands(shapes.s01[26]);
        var instance28 = new Graphics()
            .drawCommands(shapes.s01[30]);
        var instance29 = new Graphics()
            .drawCommands(shapes.s01[31]);
        var instance30 = new Graphics()
            .drawCommands(shapes.s01[30]);
        var instance33 = new Graphics()
            .drawCommands(shapes.s01[42]);
        var instance32 = new Graphics()
            .drawCommands(shapes.s01[36]);
        var instance31 = new Graphics()
            .drawCommands(shapes.s01[32]);
        var instance37 = new Graphics()
            .drawCommands(shapes.s01[29]);
        var instance36 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance35 = new Graphics()
            .drawCommands(shapes.s01[27]);
        var instance34 = new Graphics()
            .drawCommands(shapes.s01[26]);
        var instance38 = new Graphics()
            .drawCommands(shapes.s01[24]);
        var instance41 = new Graphics()
            .drawCommands(shapes.s01[42]);
        var instance40 = new Graphics()
            .drawCommands(shapes.s01[36]);
        var instance39 = new Graphics()
            .drawCommands(shapes.s01[32]);
        var instance42 = new Graphics()
            .drawCommands(shapes.s01[30]);
        var instance43 = new Graphics()
            .drawCommands(shapes.s01[31]);
        var instance44 = new Graphics()
            .drawCommands(shapes.s01[30]);
        var instance45 = new Graphics()
            .drawCommands(shapes.s01[24]);
        var instance48 = new Graphics()
            .drawCommands(shapes.s01[42]);
        var instance47 = new Graphics()
            .drawCommands(shapes.s01[36]);
        var instance46 = new Graphics()
            .drawCommands(shapes.s01[32]);
        var instance51 = new Graphics()
            .drawCommands(shapes.s01[43]);
        var instance50 = new Graphics()
            .drawCommands(shapes.s01[37]);
        var instance49 = new Graphics()
            .drawCommands(shapes.s01[33]);
        var instance52 = new Graphics()
            .drawCommands(shapes.s01[24]);
        var instance55 = new Graphics()
            .drawCommands(shapes.s01[42]);
        var instance54 = new Graphics()
            .drawCommands(shapes.s01[36]);
        var instance53 = new Graphics()
            .drawCommands(shapes.s01[32]);
        var instance56 = new Graphics()
            .drawCommands(shapes.s01[30]);
        var instance57 = new Graphics()
            .drawCommands(shapes.s01[31]);
        var instance58 = new Graphics()
            .drawCommands(shapes.s01[24]);
        var instance59 = new Graphics()
            .drawCommands(shapes.s01[25]);
        var instance60 = new Graphics()
            .drawCommands(shapes.s01[24]);
        var instance61 = new Graphics()
            .drawCommands(shapes.s01[25]);
        var instance62 = new Graphics()
            .drawCommands(shapes.s01[24])
            .setTransform(-5.8, 28.5, 1, 1, 0, 3.142);
        this.addTimedChild(instance3, 0, 1)
            .addTimedChild(instance2, 0, 1, {
                "0": {
                    x: -5.8,
                    y: 24.2
                }
            })
            .addTimedChild(instance1, 0, 1, {
                "0": {
                    x: -5.8,
                    y: 24.2
                }
            })
            .addTimedChild(instance6, 1, 1)
            .addTimedChild(instance5, 1, 1, {
                "1": {
                    x: -5.8,
                    y: 24
                }
            })
            .addTimedChild(instance4, 1, 1, {
                "1": {
                    x: -5.8,
                    y: 24
                }
            })
            .addTimedChild(instance7, 2, 1)
            .addTimedChild(instance10, 3, 1)
            .addTimedChild(instance9, 3, 1, {
                "3": {
                    x: -5.8,
                    y: 23.4
                }
            })
            .addTimedChild(instance8, 3, 1, {
                "3": {
                    x: -5.8,
                    y: 23.4
                }
            })
            .addTimedChild(instance14, 4, 1, {
                "4": {
                    x: -484.2,
                    y: 573.15,
                    kx: 3.142
                }
            })
            .addTimedChild(instance13, 4, 1, {
                "4": {
                    x: -4.55,
                    y: 44.8,
                    kx: 3.142
                }
            })
            .addTimedChild(instance12, 4, 1, {
                "4": {
                    x: -5.05,
                    y: 25.2
                }
            })
            .addTimedChild(instance11, 4, 1, {
                "4": {
                    x: -484.2,
                    y: 573.15,
                    kx: 3.142
                }
            })
            .addTimedChild(instance17, 5, 1)
            .addTimedChild(instance16, 5, 1, {
                "5": {
                    x: -5.8,
                    y: 24.2
                }
            })
            .addTimedChild(instance15, 5, 1, {
                "5": {
                    x: -5.8,
                    y: 24.2
                }
            })
            .addTimedChild(instance20, 6, 1)
            .addTimedChild(instance19, 6, 1, {
                "6": {
                    x: -5.8,
                    y: 24.4
                }
            })
            .addTimedChild(instance18, 6, 1, {
                "6": {
                    x: -5.8,
                    y: 24.4
                }
            })
            .addTimedChild(instance23, 7, 2)
            .addTimedChild(instance22, 7, 2, {
                "7": {
                    x: -5.8,
                    y: 24.2
                }
            })
            .addTimedChild(instance21, 7, 2, {
                "7": {
                    x: -5.8,
                    y: 24.2
                }
            })
            .addTimedChild(instance27, 9, 1, {
                "9": {
                    x: -484.2,
                    y: 573.15,
                    kx: 3.142
                }
            })
            .addTimedChild(instance26, 9, 1, {
                "9": {
                    x: -4.55,
                    y: 44.8,
                    kx: 3.142
                }
            })
            .addTimedChild(instance25, 9, 1, {
                "9": {
                    x: -5.05,
                    y: 25.2
                }
            })
            .addTimedChild(instance24, 9, 1, {
                "9": {
                    x: -484.2,
                    y: 573.15,
                    kx: 3.142
                }
            })
            .addTimedChild(instance28, 10, 1)
            .addTimedChild(instance29, 11, 1)
            .addTimedChild(instance30, 12, 1)
            .addTimedChild(instance33, 13, 1)
            .addTimedChild(instance32, 13, 1, {
                "13": {
                    x: -5.8,
                    y: 24.2
                }
            })
            .addTimedChild(instance31, 13, 1, {
                "13": {
                    x: -5.8,
                    y: 24.2
                }
            })
            .addTimedChild(instance37, 14, 3, {
                "14": {
                    x: -484.2,
                    y: 573.15,
                    kx: 3.142
                }
            })
            .addTimedChild(instance36, 14, 3, {
                "14": {
                    x: -4.55,
                    y: 44.8,
                    kx: 3.142
                }
            })
            .addTimedChild(instance35, 14, 3, {
                "14": {
                    x: -5.05,
                    y: 25.2
                }
            })
            .addTimedChild(instance34, 14, 3, {
                "14": {
                    x: -484.2,
                    y: 573.15,
                    kx: 3.142
                }
            })
            .addTimedChild(instance38, 17, 10, {
                "17": {
                    x: -5.8,
                    y: 28.5,
                    kx: 3.142
                }
            })
            .addTimedChild(instance41, 27, 1)
            .addTimedChild(instance40, 27, 1, {
                "27": {
                    x: -5.8,
                    y: 24.2
                }
            })
            .addTimedChild(instance39, 27, 1, {
                "27": {
                    x: -5.8,
                    y: 24.2
                }
            })
            .addTimedChild(instance42, 28, 1)
            .addTimedChild(instance43, 29, 4)
            .addTimedChild(instance44, 33, 1)
            .addTimedChild(instance45, 34, 5, {
                "34": {
                    x: -5.8,
                    y: 28.5,
                    kx: 3.142
                }
            })
            .addTimedChild(instance48, 39, 1)
            .addTimedChild(instance47, 39, 1, {
                "39": {
                    x: -5.8,
                    y: 24.2
                }
            })
            .addTimedChild(instance46, 39, 1, {
                "39": {
                    x: -5.8,
                    y: 24.2
                }
            })
            .addTimedChild(instance51, 40, 2)
            .addTimedChild(instance50, 40, 2, {
                "40": {
                    x: -5.8,
                    y: 24
                }
            })
            .addTimedChild(instance49, 40, 2, {
                "40": {
                    x: -5.8,
                    y: 24
                }
            })
            .addTimedChild(instance52, 42, 28, {
                "42": {
                    x: -5.8,
                    y: 28.5,
                    kx: 3.142
                }
            })
            .addTimedChild(instance55, 70, 2)
            .addTimedChild(instance54, 70, 2, {
                "70": {
                    x: -5.8,
                    y: 24.2
                }
            })
            .addTimedChild(instance53, 70, 2, {
                "70": {
                    x: -5.8,
                    y: 24.2
                }
            })
            .addTimedChild(instance56, 72, 2)
            .addTimedChild(instance57, 74, 1)
            .addTimedChild(instance58, 75, 5, {
                "75": {
                    x: -5.8,
                    y: 28.5,
                    kx: 3.142
                }
            })
            .addTimedChild(instance59, 80, 4, {
                "80": {
                    x: -5.8,
                    y: 25
                }
            })
            .addTimedChild(instance60, 84, 1, {
                "84": {
                    x: -5.8,
                    y: 28.5,
                    kx: 3.142
                }
            })
            .addTimedChild(instance61, 85, 1, {
                "85": {
                    x: -5.8,
                    y: 25
                }
            })
            .addTimedChild(instance62, 86, 1);
    });

    var Graphic274 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 87, loop: false });
        var instance1 = new Graphic267(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 87, {
            "0": {
                x: -0.05,
                y: -26.1,
                sx: 1,
                sy: 1
            },
            "14": {
                y: -26.65,
                sx: 1.097,
                sy: 1.021
            },
            "15": {
                y: -26.1,
                sx: 1,
                sy: 1
            },
            "16": {
                y: -17.7,
                sx: 0.919,
                sy: 0.679
            },
            "17": {
                y: -26.1,
                sx: 1,
                sy: 1
            },
            "33": {
                x: 0.2,
                y: -22.05,
                sy: 0.825
            },
            "34": {
                x: -0.55,
                y: -24.7,
                sy: 1
            },
            "39": {
                x: -0.05,
                y: -26.1
            },
            "73": {
                y: -27.35,
                sx: 0.848,
                sy: 1.049
            },
            "74": {
                y: -26.1,
                sx: 1,
                sy: 1
            },
            "80": {
                y: -23.6,
                sx: 1.061,
                sy: 0.905
            },
            "81": {
                x: -0.1,
                y: -35.7,
                sx: 0.901,
                sy: 1.371
            },
            "82": {
                y: -13.45,
                sx: 1.084,
                sy: 0.517
            },
            "83": {
                x: -0.15,
                y: -21.05,
                sx: 0.923,
                sy: 0.811
            },
            "84": {
                y: -9.2,
                sx: 1.063,
                sy: 0.355
            },
            "85": {
                x: -0.2,
                y: -12.85,
                sx: 0.963,
                sy: 0.499
            },
            "86": {
                y: -8.9,
                sx: 1.05,
                sy: 0.346
            }
        });
    });

    var Graphic275 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 87, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[47]);
        this.addTimedChild(instance1);
    });

    var Graphic276 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 87, loop: false });
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[51])
            .setTransform(-1336.85, -168.4, 1.033, 1.033);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[51])
            .setTransform(-1357.3, -164.4, 1.033, 1.033);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[51])
            .setTransform(-1317.25, -167, 1.033, 1.033);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[51])
            .setTransform(-1316.95, -139.1, 0.978, 0.978);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[51])
            .setTransform(-1265.9, -139.25, 1.033, 1.033);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[51])
            .setTransform(-1170.45, -142.3, 0.948, 0.948);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[51])
            .setTransform(-1185.7, -149.8, 0.948, 0.948);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[51])
            .setTransform(-1177.25, -135.65, 0.881, 0.881);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[51])
            .setTransform(-1201.55, -112.45, 0.881, 0.881);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[51])
            .setTransform(-1213, -97.9, 0.881, 0.881);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[51])
            .setTransform(-1255.65, -125.65, 1.033, 1.033);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[50]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[49]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[48])
            .setTransform(-1294.65, -163.3);
        this.addTimedChild(instance14)
            .addTimedChild(instance13)
            .addTimedChild(instance12)
            .addTimedChild(instance11)
            .addTimedChild(instance10)
            .addTimedChild(instance9)
            .addTimedChild(instance8)
            .addTimedChild(instance7)
            .addTimedChild(instance6)
            .addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic268 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 87, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[53])
            .setTransform(-1294.55, -252.5);
        this.addTimedChild(instance1);
    });

    var Graphic277 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 87, loop: false });
        var instance2 = new Graphic268(MovieClip.SYNCHED)
            .setTransform(6.55, -82.85);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[52]);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic278 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 87, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[55]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[54]);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic279 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 87, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[57]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[56]);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic290 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 87, loop: false });
        var instance11 = new Graphic279(MovieClip.SYNCHED)
            .setTransform(-61.45, -103.85);
        var instance10 = new Graphic278(MovieClip.SYNCHED)
            .setTransform(81.05, -103.55);
        var instance9 = new Graphic277(MovieClip.SYNCHED)
            .setTransform(0.05);
        var instance8 = new Graphic276(MovieClip.SYNCHED)
            .setTransform(6.7, -172.05);
        var instance7 = new Graphic275(MovieClip.SYNCHED)
            .setTransform(-6.35, -91.75);
        var instance6 = new Graphic274(MovieClip.SYNCHED)
            .setTransform(-2.6, -68.75);
        var instance5 = new Graphic273(MovieClip.SYNCHED);
        var instance4 = new Graphic272(MovieClip.SYNCHED);
        var instance3 = new Graphic271(MovieClip.SYNCHED);
        var instance2 = new Graphic270(MovieClip.SYNCHED);
        var instance1 = new Graphic269(MovieClip.SYNCHED);
        var instance13 = new Graphic281(MovieClip.SYNCHED);
        var instance12 = new Graphic280(MovieClip.SYNCHED);
        var instance15 = new Graphic283(MovieClip.SYNCHED);
        var instance14 = new Graphic282(MovieClip.SYNCHED);
        var instance17 = new Graphic285(MovieClip.SYNCHED);
        var instance16 = new Graphic284(MovieClip.SYNCHED);
        var instance19 = new Graphic287(MovieClip.SYNCHED);
        var instance18 = new Graphic286(MovieClip.SYNCHED);
        var instance21 = new Graphic289(MovieClip.SYNCHED);
        var instance20 = new Graphic288(MovieClip.SYNCHED);
        this.addTimedChild(instance11)
            .addTimedChild(instance10)
            .addTimedChild(instance9)
            .addTimedChild(instance8)
            .addTimedChild(instance7)
            .addTimedChild(instance6)
            .addTimedChild(instance5, 0, 87, {
                "0": {
                    x: -19.3,
                    y: -131.35,
                    r: 0
                },
                "8": {
                    x: -18.8,
                    y: -124.45
                },
                "9": {
                    x: -18.7,
                    y: -124
                },
                "11": {
                    x: -19.5,
                    y: -131.45
                },
                "12": {
                    x: -19.6,
                    y: -132.1
                },
                "15": {
                    x: -18.8,
                    y: -124.45
                },
                "16": {
                    x: -18.35,
                    y: -137.1
                },
                "17": {
                    x: -18.4,
                    y: -137.55
                },
                "24": {
                    x: -18.8,
                    y: -124.45
                },
                "25": {
                    x: -18.7,
                    y: -124
                },
                "26": {
                    x: -19.85,
                    y: -133.8,
                    r: -0.161
                },
                "27": {
                    x: -20,
                    y: -134.15,
                    r: -0.187
                },
                "33": {
                    x: -20.5,
                    y: -128.9
                },
                "34": {
                    x: -20.4,
                    y: -128
                },
                "35": {
                    x: -20.35,
                    y: -127.6
                },
                "39": {
                    x: -18.8,
                    y: -124.45,
                    r: 0
                },
                "40": {
                    x: -18.7,
                    y: -124
                },
                "41": {
                    x: -18.35,
                    y: -137.1
                },
                "42": {
                    x: -18.4,
                    y: -137.55
                },
                "77": {
                    x: -18.8,
                    y: -124.45
                },
                "78": {
                    x: -18.7,
                    y: -124
                },
                "79": {
                    x: -18.85,
                    y: -131.35
                },
                "80": {
                    x: -18.8,
                    y: -132.8
                }
            })
            .addTimedChild(instance4, 0, 87, {
                "0": {
                    x: 16.6,
                    y: -132.55,
                    r: 0
                },
                "8": {
                    x: 17.1,
                    y: -125.65
                },
                "9": {
                    x: 17.2,
                    y: -125.2
                },
                "11": {
                    x: 16.4,
                    y: -132.65
                },
                "12": {
                    x: 16.3,
                    y: -133.3
                },
                "15": {
                    x: 17.1,
                    y: -125.65
                },
                "16": {
                    x: 17.25,
                    y: -129.6
                },
                "17": {
                    x: 17.4,
                    y: -130.1
                },
                "24": {
                    x: 17.1,
                    y: -125.65
                },
                "25": {
                    x: 17.2,
                    y: -125.2
                },
                "26": {
                    x: 17.25,
                    y: -134.2,
                    r: 0.109
                },
                "27": {
                    x: 17.45,
                    y: -134.65,
                    r: 0.148
                },
                "33": {
                    x: 16.95,
                    y: -129.4
                },
                "34": {
                    x: 17.05,
                    y: -128.5
                },
                "35": {
                    x: 17.1,
                    y: -128.1
                },
                "39": {
                    y: -125.65,
                    r: 0
                },
                "40": {
                    x: 17.2,
                    y: -125.2
                },
                "41": {
                    x: 17.25,
                    y: -129.6
                },
                "42": {
                    x: 17.4,
                    y: -130.1
                },
                "77": {
                    x: 17.1,
                    y: -125.65
                },
                "78": {
                    x: 17.2,
                    y: -125.2
                },
                "79": {
                    x: 17.05,
                    y: -132.55
                },
                "80": {
                    x: 17.1,
                    y: -134
                }
            })
            .addTimedChild(instance3, 0, 87, {
                "0": {
                    x: 1.3,
                    y: -114.3
                }
            })
            .addTimedChild(instance2, 0, 8, {
                "0": {
                    x: -19.45,
                    y: -114.85
                }
            })
            .addTimedChild(instance1, 0, 8, {
                "0": {
                    x: 5.95,
                    y: -115.05
                }
            })
            .addTimedChild(instance13, 11, 4, {
                "11": {
                    x: -10.3,
                    y: -111.5
                },
                "12": {
                    x: -10.05,
                    y: -111.25
                }
            })
            .addTimedChild(instance12, 11, 4, {
                "11": {
                    x: 15.1,
                    y: -111.7
                },
                "12": {
                    x: 15.35,
                    y: -111.45
                }
            })
            .addTimedChild(instance15, 16, 8, {
                "16": {
                    x: -15.1,
                    y: -117.15
                },
                "17": {
                    x: -15.3,
                    y: -117.45
                },
                "20": {
                    x: -9.25,
                    y: -118
                },
                "21": {
                    x: -8.55,
                    y: -118.05
                }
            })
            .addTimedChild(instance14, 16, 8, {
                "16": {
                    x: 10.3,
                    y: -117.35
                },
                "17": {
                    x: 10.1,
                    y: -117.65
                },
                "20": {
                    x: 16.15,
                    y: -118.2
                },
                "21": {
                    x: 16.85,
                    y: -118.25
                }
            })
            .addTimedChild(instance17, 26, 13, {
                "26": {
                    x: -17.2,
                    y: -114.45
                },
                "27": {
                    x: -17.3,
                    y: -114.1
                },
                "33": {
                    x: -19.75,
                    y: -115.45
                },
                "34": {
                    x: -20.05,
                    y: -115.6
                }
            })
            .addTimedChild(instance16, 26, 13, {
                "26": {
                    x: 8.2,
                    y: -114.65
                },
                "27": {
                    x: 8.1,
                    y: -114.3
                },
                "33": {
                    x: 5.65,
                    y: -115.65
                },
                "34": {
                    x: 5.35,
                    y: -115.8
                }
            })
            .addTimedChild(instance19, 41, 36, {
                "41": {
                    x: -19.75,
                    y: -115.45
                },
                "42": {
                    x: -20.05,
                    y: -115.6
                }
            })
            .addTimedChild(instance18, 41, 36, {
                "41": {
                    x: 5.65,
                    y: -115.65
                },
                "42": {
                    x: 5.35,
                    y: -115.8
                }
            })
            .addTimedChild(instance21, 79, 8, {
                "79": {
                    x: -20.45,
                    y: -114.65
                },
                "80": {
                    x: -14.45,
                    y: -119.3
                },
                "81": {
                    x: -13.35,
                    y: -119.15
                }
            })
            .addTimedChild(instance20, 79, 8, {
                "79": {
                    x: 4.95,
                    y: -114.85
                },
                "80": {
                    x: 10.95,
                    y: -119.5
                },
                "81": {
                    x: 12.05,
                    y: -119.35
                }
            });
    });

    var Graphic291 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 87, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[58])
            .setTransform(-1222.8, -397.15, 0.95);
        this.addTimedChild(instance1);
    });

    var Graphic292 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 2, loop: false });
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[65]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[12]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[11]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[10]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[9]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[60]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[59]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[64]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[63])
            .setTransform(-1.65, -2.05);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[62])
            .setTransform(21.3, -1.55, 1, 1, 0.393);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[61])
            .setTransform(3.2, 1.2, 1, 1, 0.065);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[61])
            .setTransform(-15.2, -6.05, 1, 1, 0.065);
        this.addTimedChild(instance7)
            .addTimedChild(instance6, 0, 1, {
                "0": {
                    x: 14.3,
                    y: -13.75,
                    r: -0.069
                }
            })
            .addTimedChild(instance5, 0, 1, {
                "0": {
                    x: 4,
                    y: -9.1
                }
            })
            .addTimedChild(instance4, 0, 1)
            .addTimedChild(instance3, 0, 1)
            .addTimedChild(instance2, 0, 1)
            .addTimedChild(instance1, 0, 1)
            .addTimedChild(instance12, 1, 1)
            .addTimedChild(instance11, 1, 1)
            .addTimedChild(instance10, 1, 1)
            .addTimedChild(instance9, 1, 1)
            .addTimedChild(instance8, 1, 1);
    });

    var Graphic294 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[65]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[64]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[63]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[62]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[61]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[61]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[12])
            .setTransform(14.3, -13.75, 1, 1, -0.069);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[11])
            .setTransform(4, -9.1);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[10]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[9]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[60]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[59]);
        this.addTimedChild(instance6)
            .addTimedChild(instance5, 0, 1)
            .addTimedChild(instance4, 0, 1, {
                "0": {
                    x: -1.65,
                    y: -2.05
                }
            })
            .addTimedChild(instance3, 0, 1, {
                "0": {
                    x: 21.3,
                    y: -1.55,
                    r: 0.393
                }
            })
            .addTimedChild(instance2, 0, 1, {
                "0": {
                    x: 3.2,
                    y: 1.2,
                    r: 0.065
                }
            })
            .addTimedChild(instance1, 0, 1, {
                "0": {
                    x: -15.2,
                    y: -6.05,
                    r: 0.065
                }
            })
            .addTimedChild(instance12, 1, 2)
            .addTimedChild(instance11, 1, 2)
            .addTimedChild(instance10, 1, 2)
            .addTimedChild(instance9, 1, 2)
            .addTimedChild(instance8, 1, 2)
            .addTimedChild(instance7, 1, 2);
    });

    var Graphic312 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 163, loop: false });
        var instance5 = new Graphic292(MovieClip.SYNCHED);
        var instance7 = new Graphic294(MovieClip.SYNCHED);
        var instance4 = new Graphic291(MovieClip.SYNCHED);
        var instance3 = new Graphic290(MovieClip.SYNCHED);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[16]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[15]);
        var instance6 = new Graphic293(MovieClip.SYNCHED);
        this.addTimedChild(instance5, 62, 2, {
                "62": {
                    x: -7.85,
                    y: -449.1,
                    r: 1.326
                },
                "63": {
                    x: -37.35,
                    y: -453
                }
            })
            .addTimedChild(instance7, 147, 3, {
                "147": {
                    x: -37.35,
                    y: -453,
                    r: 1.326
                },
                "148": {
                    x: -7.85,
                    y: -449.1
                },
                "149": {
                    x: 15.45,
                    y: -446.85
                }
            })
            .addTimedChild(instance4, 61, 87, {
                "61": {
                    x: -0.35,
                    y: -520.15,
                    r: -0.671
                },
                "62": {
                    x: -16.2,
                    y: -524.65,
                    r: -0.615
                },
                "63": {
                    x: -27.45,
                    y: -527.85,
                    r: -0.576
                },
                "64": {
                    x: -34.2,
                    y: -529.8,
                    r: -0.552
                },
                "65": {
                    x: -36.5,
                    y: -530.4,
                    r: -0.544
                },
                "83": {
                    y: -531,
                    r: -0.552
                },
                "84": {
                    x: -37.15,
                    y: -532.7,
                    r: -0.571
                },
                "85": {
                    x: -37.5,
                    y: -534.25,
                    r: -0.589
                },
                "86": {
                    x: -37.65,
                    y: -535.1,
                    r: -0.601
                },
                "87": {
                    x: -37.8,
                    y: -535.45,
                    r: -0.604
                },
                "101": {
                    x: -38.2,
                    y: -535.85
                },
                "102": {
                    x: -39.55,
                    y: -540.9,
                    r: -0.638
                },
                "103": {
                    x: -40.55,
                    y: -544,
                    r: -0.658
                },
                "104": {
                    x: -40.95,
                    y: -544.95,
                    r: -0.664
                },
                "142": {
                    x: -40.15,
                    y: -544.15
                },
                "143": {
                    x: -37.65,
                    y: -543.2,
                    r: -0.665
                },
                "144": {
                    x: -27.85,
                    y: -537.95
                },
                "145": {
                    x: -11.6,
                    y: -529.25,
                    r: -0.667
                },
                "146": {
                    x: 11.2,
                    y: -517,
                    r: -0.668
                },
                "147": {
                    x: 40.7,
                    y: -501.25,
                    r: -0.671
                }
            })
            .addTimedChild(instance3, 61, 87, {
                "61": {
                    x: -20.2,
                    y: -559.1,
                    r: -0.679
                },
                "62": {
                    x: -47.35,
                    y: -564.3,
                    r: -0.578
                },
                "63": {
                    x: -66.6,
                    y: -567.95,
                    r: -0.506
                },
                "64": {
                    x: -78.05,
                    y: -570.05,
                    r: -0.464
                },
                "65": {
                    x: -82,
                    y: -570.95,
                    r: -0.449
                },
                "83": {
                    x: -82.3,
                    y: -571.2,
                    r: -0.457
                },
                "84": {
                    x: -83.6,
                    y: -572,
                    r: -0.476
                },
                "85": {
                    x: -84.75,
                    y: -572.65,
                    r: -0.494
                },
                "86": {
                    x: -85.4,
                    y: -573.1,
                    r: -0.506
                },
                "87": {
                    x: -85.65,
                    y: -573.2,
                    r: -0.509
                },
                "101": {
                    x: -86.05,
                    y: -573.6
                },
                "102": {
                    x: -88.65,
                    y: -577,
                    r: -0.494
                },
                "103": {
                    x: -90.35,
                    y: -579.15,
                    r: -0.485
                },
                "104": {
                    x: -91,
                    y: -579.75,
                    r: -0.482
                },
                "142": {
                    x: -90.2,
                    y: -578.95
                },
                "143": {
                    x: -86.5,
                    y: -578.15,
                    r: -0.49
                },
                "144": {
                    x: -73.1,
                    y: -573.45,
                    r: -0.514
                },
                "145": {
                    x: -50.85,
                    y: -565.6,
                    r: -0.553
                },
                "146": {
                    x: -19.6,
                    y: -554.6,
                    r: -0.608
                },
                "147": {
                    x: 20.85,
                    y: -540.2,
                    r: -0.679
                }
            })
            .addTimedChild(instance2)
            .addTimedChild(instance1)
            .addTimedChild(instance6, 64, 83, {
                "64": {
                    x: -86.8,
                    y: -437.8,
                    kx: 1.508,
                    ky: 1.633
                },
                "65": {
                    x: -83.7,
                    y: -438.1
                },
                "66": {
                    x: -83.3
                },
                "145": {
                    x: -83.7
                },
                "146": {
                    x: -86.8,
                    y: -437.8
                }
            });
    });

    var Graphic313 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 163, loop: false });
        var instance1 = new Sprite(fromFrame("REPLACE_SIGN"))
            .setTransform(-220, -148);
        this.addTimedChild(instance1);
    });

    var Graphic314 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 163, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[324]);
        this.addTimedChild(instance1);
    });

    var Graphic315 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 44, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[528]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[529]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[530]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[531]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[532]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[533]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[534]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[535]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[536]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[537]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[528]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[529]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[530]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[531]);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[532]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[533]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[534]);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[535]);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[536]);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[537]);
        var instance21 = new Graphics()
            .drawCommands(shapes.s01[528]);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[529]);
        this.addTimedChild(instance1, 0, 2)
            .addTimedChild(instance2, 2, 2)
            .addTimedChild(instance3, 4, 2)
            .addTimedChild(instance4, 6, 2)
            .addTimedChild(instance5, 8, 2)
            .addTimedChild(instance6, 10, 2)
            .addTimedChild(instance7, 12, 2)
            .addTimedChild(instance8, 14, 2)
            .addTimedChild(instance9, 16, 2)
            .addTimedChild(instance10, 18, 2)
            .addTimedChild(instance11, 20, 2)
            .addTimedChild(instance12, 22, 2)
            .addTimedChild(instance13, 24, 2)
            .addTimedChild(instance14, 26, 2)
            .addTimedChild(instance15, 28, 2)
            .addTimedChild(instance16, 30, 2)
            .addTimedChild(instance17, 32, 2)
            .addTimedChild(instance18, 34, 2)
            .addTimedChild(instance19, 36, 2)
            .addTimedChild(instance20, 38, 2)
            .addTimedChild(instance21, 40, 2)
            .addTimedChild(instance22, 42, 2);
    });

    var Graphic316 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 15, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[538])
            .setTransform(1165.25, 1061.45);
        this.addTimedChild(instance1);
    });

    lib.s01 = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 547,
            framerate: 12,
            loop: false
        });
        var instance5 = new Graphic299(MovieClip.SYNCHED);
        var instance7 = new Graphic301(MovieClip.SYNCHED);
        var instance4 = new Graphic298(MovieClip.SYNCHED);
        var instance3 = new Graphic297(MovieClip.SYNCHED);
        var instance2 = new Graphic296(MovieClip.SYNCHED);
        var instance1 = new Graphic295(MovieClip.SYNCHED);
        var instance6 = new Graphic300(MovieClip.SYNCHED);
        var instance8 = new Graphic302(MovieClip.SYNCHED);
        var instance12 = new Graphic306(MovieClip.SYNCHED);
        var instance11 = new Graphic305(MovieClip.SYNCHED);
        var instance10 = new Graphic304(MovieClip.SYNCHED);
        var instance9 = new Graphic303(MovieClip.SYNCHED);
        var instance13 = new Graphic307(MovieClip.SYNCHED);
        var instance20 = new Graphic314(MovieClip.SYNCHED);
        var instance19 = new Graphic313(MovieClip.SYNCHED);
        var instance18 = new Graphic312(MovieClip.SYNCHED);
        var instance17 = new Graphic311(MovieClip.SYNCHED);
        var instance21 = new Graphic315(MovieClip.SYNCHED);
        var instance16 = new Graphic310(MovieClip.SYNCHED);
        var instance15 = new Graphic309(MovieClip.SYNCHED);
        var instance14 = new Graphic308(MovieClip.SYNCHED);
        var instance22 = new Graphic316(MovieClip.SYNCHED);
        this.addTimedChild(instance5, 0, 186, {
                "0": {
                    x: -231.35,
                    y: -53.65,
                    sx: 0.571,
                    sy: 0.571
                },
                "77": {
                    x: -726,
                    y: -252.7,
                    sx: 1.257,
                    sy: 1.257
                },
                "136": {
                    x: -1171.95,
                    y: -630.8,
                    sx: 1.627,
                    sy: 1.627
                },
                "160": {
                    x: -1537.05,
                    y: -1004.45,
                    sx: 1.571,
                    sy: 1.571
                }
            })
            .addTimedChild(instance7, 136, 50, {
                "136": {
                    x: 134.65,
                    y: 694.75,
                    sx: 1.181,
                    sy: 1.181,
                    ky: 3.142
                },
                "160": {
                    x: -275.55,
                    y: 275.15,
                    sx: 1.14,
                    sy: 1.14
                }
            })
            .addTimedChild(instance4, 0, 186, {
                "0": {
                    x: 759.05,
                    y: 387.75,
                    sx: 0.414,
                    sy: 0.414,
                    ky: 3.142
                },
                "77": {
                    x: 1454.35,
                    y: 718.9,
                    sx: 0.912,
                    sy: 0.912
                },
                "85": {
                    x: 1231.6,
                    y: 925.75,
                    sx: 0.977,
                    sy: 0.977,
                    ky: 0
                },
                "86": {
                    x: 1199.744,
                    y: 917.158
                },
                "87": {
                    x: 1167.8,
                    y: 908.5
                },
                "88": {
                    x: 1135.982,
                    y: 918.336
                },
                "89": {
                    x: 1104.1,
                    y: 928.05
                },
                "90": {
                    x: 1072.216,
                    y: 919.422
                },
                "91": {
                    x: 1040.35,
                    y: 910.7
                },
                "92": {
                    x: 1008.55,
                    y: 920.45
                },
                "93": {
                    x: 976.55,
                    y: 930.2
                },
                "94": {
                    x: 944.72,
                    y: 921.622
                },
                "95": {
                    x: 912.85,
                    y: 912.95
                },
                "96": {
                    x: 880.95,
                    y: 922.75
                },
                "97": {
                    x: 849.05,
                    y: 932.45
                },
                "98": {
                    x: 817.237,
                    y: 923.786
                },
                "99": {
                    x: 785.35,
                    y: 915.2
                },
                "100": {
                    x: 753.488,
                    y: 924.936
                },
                "101": {
                    x: 721.6,
                    y: 934.7
                },
                "102": {
                    x: 689.739,
                    y: 926.136
                },
                "103": {
                    x: 657.9,
                    y: 917.5
                },
                "104": {
                    x: 626.1,
                    y: 927.2
                },
                "105": {
                    x: 594.15,
                    y: 936.9
                },
                "106": {
                    x: 570.291,
                    y: 928.186
                },
                "107": {
                    x: 546.3,
                    y: 919.35
                },
                "108": {
                    x: 535.242,
                    y: 923.836
                },
                "109": {
                    x: 498.5,
                    y: 938.55
                },
                "136": {
                    x: 413.35,
                    y: 911.45,
                    sx: 1.265,
                    sy: 1.265
                },
                "160": {
                    x: -6.6,
                    y: 484.35,
                    sx: 1.221,
                    sy: 1.221
                }
            })
            .addTimedChild(instance3, 0, 136, {
                "0": {
                    x: 233.05,
                    y: 411.45,
                    sx: 0.414,
                    sy: 0.414,
                    ky: 3.142
                },
                "77": {
                    x: 296.4,
                    y: 771.2,
                    sx: 0.912,
                    sy: 0.912
                }
            })
            .addTimedChild(instance2, 0, 186, {
                "0": {
                    x: -231.35,
                    y: -53.65,
                    sx: 0.571,
                    sy: 0.571
                },
                "77": {
                    x: -726,
                    y: -252.7,
                    sx: 1.257,
                    sy: 1.257
                },
                "136": {
                    x: -1171.95,
                    y: -630.8,
                    sx: 1.627,
                    sy: 1.627
                },
                "160": {
                    x: -1537.05,
                    y: -1004.45,
                    sx: 1.571,
                    sy: 1.571
                }
            })
            .addTimedChild(instance1, 0, 186, {
                "0": {
                    x: 333.65,
                    y: 389.2,
                    sx: 0.524,
                    sy: 0.524
                },
                "77": {
                    x: 517.8,
                    y: 722.2,
                    sx: 1.154,
                    sy: 1.154
                },
                "136": {
                    x: 438.35,
                    y: 631.4,
                    sx: 1.494,
                    sy: 1.494
                },
                "160": {
                    x: 17.45,
                    y: 214,
                    sx: 1.442,
                    sy: 1.442
                }
            })
            .addTimedChild(instance6, 136, 50, {
                "136": {
                    x: 413.35,
                    y: 911.45,
                    sx: 1.265,
                    sy: 1.265
                },
                "160": {
                    x: -6.6,
                    y: 484.35,
                    sx: 1.221,
                    sy: 1.221
                }
            })
            .addTimedChild(instance8, 186, 60, {
                "186": {
                    x: 511.95,
                    y: 287.95,
                    sx: 0.533,
                    sy: 0.533
                }
            })
            .addTimedChild(instance12, 246, 59, {
                "246": {
                    x: -1618.55,
                    y: -914.95,
                    sx: 1.897,
                    sy: 1.897
                }
            })
            .addTimedChild(instance11, 246, 59, {
                "246": {
                    x: -74.4,
                    y: 641.55,
                    sx: 1.396,
                    sy: 1.396,
                    ky: 3.142
                }
            })
            .addTimedChild(instance10, 246, 59, {
                "246": {
                    x: -85.8,
                    y: 350.2,
                    sx: 2.07,
                    sy: 1.92
                }
            })
            .addTimedChild(instance9, 246, 59, {
                "246": {
                    x: 447.95,
                    y: 1236.55,
                    sx: 1.897,
                    sy: 1.897
                }
            })
            .addTimedChild(instance13, 305, 79, {
                "305": {
                    x: 518.8,
                    y: 285.85,
                    sx: 0.533,
                    sy: 0.533
                }
            })
            .addTimedChild(instance20, 384, 163, {
                "384": {
                    x: -3307.35,
                    y: -1767.45,
                    sx: 2.956,
                    sy: 2.956
                },
                "404": {
                    x: -327.95,
                    y: -76.55,
                    sx: 0.649,
                    sy: 0.649
                },
                "472": {
                    x: -1921.1,
                    y: -620.7,
                    sx: 2.641,
                    sy: 2.641
                },
                "489": {
                    x: -2020.25,
                    y: -620.75,
                    sx: 2.64,
                    sy: 2.64
                },
                "490": {
                    x: -2333.65
                },
                "491": {
                    x: -2647.1
                },
                "492": {
                    x: -2746.25,
                    y: -620.7,
                    sx: 2.641,
                    sy: 2.641
                },
                "515": {
                    x: -2647,
                    y: -620.75,
                    sx: 2.64,
                    sy: 2.64
                },
                "516": {
                    x: -2333.6
                },
                "517": {
                    x: -2020.15
                },
                "518": {
                    x: -1921.1,
                    y: -620.7,
                    sx: 2.641,
                    sy: 2.641
                }
            })
            .addTimedChild(instance19, 384, 163, {
                "384": {
                    x: 82.5,
                    y: -780.9,
                    sx: 1.251,
                    sy: 1.251,
                    r: 0.078
                },
                "404": {
                    x: 416.6,
                    y: 140.1,
                    sx: 0.275,
                    sy: 0.275
                },
                "472": {
                    x: 1311.5,
                    y: 260.3,
                    sx: 1.117,
                    sy: 1.117
                },
                "489": {
                    x: 1212.35
                },
                "490": {
                    x: 898.95
                },
                "491": {
                    x: 585.55
                },
                "492": {
                    x: 486.4
                },
                "515": {
                    x: 585.6
                },
                "516": {
                    x: 899
                },
                "517": {
                    x: 1212.4
                },
                "518": {
                    x: 1311.5
                }
            })
            .addTimedChild(instance18, 384, 163, {
                "384": {
                    x: -913.35,
                    y: 633.85,
                    sx: 2.133,
                    sy: 2.133,
                    ky: 3.142
                },
                "404": {
                    x: 197.85,
                    y: 450.8,
                    sx: 0.469,
                    sy: 0.469
                },
                "472": {
                    x: 217.3,
                    y: 1524.1,
                    sx: 1.906,
                    sy: 1.906
                },
                "489": {
                    x: 118.1,
                    y: 1524.05
                },
                "490": {
                    x: -195.2
                },
                "491": {
                    x: -508.6
                },
                "492": {
                    x: -607.75,
                    y: 1524.1
                },
                "515": {
                    x: -508.55,
                    y: 1524.05
                },
                "516": {
                    x: -195.2
                },
                "517": {
                    x: 118.15
                },
                "518": {
                    x: 217.3,
                    y: 1524.1
                }
            })
            .addTimedChild(instance17, 384, 163, {
                "384": {
                    x: -3307.35,
                    y: -1767.45,
                    sx: 2.956,
                    sy: 2.956
                },
                "404": {
                    x: -327.95,
                    y: -76.55,
                    sx: 0.649,
                    sy: 0.649
                },
                "472": {
                    x: -1921.1,
                    y: -620.7,
                    sx: 2.641,
                    sy: 2.641
                },
                "489": {
                    x: -2020.25,
                    y: -620.75,
                    sx: 2.64,
                    sy: 2.64
                },
                "490": {
                    x: -2333.65
                },
                "491": {
                    x: -2647.1
                },
                "492": {
                    x: -2746.25,
                    y: -620.7,
                    sx: 2.641,
                    sy: 2.641
                },
                "515": {
                    x: -2647,
                    y: -620.75,
                    sx: 2.64,
                    sy: 2.64
                },
                "516": {
                    x: -2333.6
                },
                "517": {
                    x: -2020.15
                },
                "518": {
                    x: -1921.1,
                    y: -620.7,
                    sx: 2.641,
                    sy: 2.641
                }
            })
            .addTimedChild(instance21, 400, 44, {
                "400": {
                    x: 512.05,
                    y: 357.55,
                    sx: 0.13,
                    sy: 0.121
                },
                "401": {
                    x: 512.042,
                    y: 356.383,
                    sx: 0.204,
                    sy: 0.19
                },
                "402": {
                    x: 512.011,
                    y: 352.842,
                    sx: 0.425,
                    sy: 0.394
                },
                "403": {
                    x: 511.9,
                    y: 346.85,
                    sx: 0.796,
                    sy: 0.739
                },
                "404": {
                    x: 512,
                    y: 388,
                    sx: 0.687,
                    sy: 0.687
                },
                "421": {
                    x: 512.042,
                    y: 368.944
                },
                "422": {
                    y: 352.244
                },
                "423": {
                    y: 337.844
                },
                "424": {
                    y: 325.694
                },
                "425": {
                    y: 315.744
                },
                "426": {
                    y: 308.044
                },
                "427": {
                    y: 302.494
                },
                "428": {
                    y: 299.144
                },
                "429": {
                    x: 512,
                    y: 298
                },
                "440": {
                    y: 318
                },
                "441": {
                    x: 512.036,
                    y: 317.19,
                    sx: 0.671,
                    sy: 0.671
                },
                "442": {
                    y: 314.759,
                    sx: 0.621,
                    sy: 0.621
                },
                "443": {
                    x: 512,
                    y: 310.55,
                    sx: 0.539,
                    sy: 0.539
                }
            })
            .addTimedChild(instance16, 384, 59, {
                "384": {
                    x: -278.35,
                    y: 519.35,
                    sx: 2.699,
                    sy: 2.699
                },
                "404": {
                    x: 337.3,
                    y: 425.7,
                    sx: 0.593,
                    sy: 0.593
                },
                "421": {
                    x: 337.345,
                    y: 402.194
                },
                "422": {
                    y: 381.594
                },
                "423": {
                    y: 363.844
                },
                "424": {
                    y: 348.844
                },
                "425": {
                    y: 336.594
                },
                "426": {
                    y: 327.094
                },
                "427": {
                    y: 320.294
                },
                "428": {
                    y: 316.194
                },
                "429": {
                    x: 337.3,
                    y: 314.75
                },
                "430": {
                    x: 337.345,
                    y: 315.545
                },
                "431": {
                    y: 318.145
                },
                "432": {
                    y: 322.745
                },
                "433": {
                    y: 328.845
                },
                "434": {
                    y: 334.945
                },
                "435": {
                    y: 339.545
                },
                "436": {
                    y: 342.145
                },
                "437": {
                    x: 337.3,
                    y: 342.95
                },
                "438": {
                    x: 341.183,
                    y: 340.809,
                    sx: 0.58,
                    sy: 0.58
                },
                "439": {
                    x: 352.768,
                    y: 334.321,
                    sx: 0.541,
                    sy: 0.541
                },
                "440": {
                    x: 372.17,
                    y: 323.502,
                    sx: 0.475,
                    sy: 0.475
                },
                "441": {
                    x: 399.184,
                    y: 308.246,
                    sx: 0.384,
                    sy: 0.384
                },
                "442": {
                    x: 433.9,
                    y: 288.75,
                    sx: 0.267,
                    sy: 0.267
                }
            })
            .addTimedChild(instance15, 384, 59, {
                "384": {
                    x: 456.9,
                    y: 1410.65,
                    sx: 2.133,
                    sy: 2.133
                },
                "404": {
                    x: 498.8,
                    y: 621.45,
                    sx: 0.469,
                    sy: 0.469
                },
                "421": {
                    x: 498.792,
                    y: 598.341
                },
                "422": {
                    y: 578.141
                },
                "423": {
                    y: 560.691
                },
                "424": {
                    y: 545.991
                },
                "425": {
                    y: 533.991
                },
                "426": {
                    y: 524.641
                },
                "427": {
                    y: 517.991
                },
                "428": {
                    y: 513.941
                },
                "429": {
                    x: 498.8,
                    y: 512.65
                },
                "430": {
                    x: 498.792,
                    y: 513.442
                },
                "431": {
                    y: 515.842
                },
                "432": {
                    y: 520.092
                },
                "433": {
                    y: 525.742
                },
                "434": {
                    y: 531.392
                },
                "435": {
                    y: 535.642
                },
                "436": {
                    y: 538.042
                },
                "437": {
                    x: 498.8,
                    y: 538.75
                },
                "438": {
                    x: 499.125,
                    y: 532.346,
                    sx: 0.458,
                    sy: 0.458
                },
                "439": {
                    x: 500.049,
                    y: 512.883,
                    sx: 0.427,
                    sy: 0.427
                },
                "440": {
                    x: 501.681,
                    y: 480.52,
                    sx: 0.376,
                    sy: 0.376
                },
                "441": {
                    x: 503.828,
                    y: 435.216,
                    sx: 0.304,
                    sy: 0.304
                },
                "442": {
                    x: 506.6,
                    y: 376.8,
                    sx: 0.211,
                    sy: 0.211
                }
            })
            .addTimedChild(instance14, 384, 59, {
                "384": {
                    x: -278.35,
                    y: 519.35,
                    sx: 2.699,
                    sy: 2.699
                },
                "404": {
                    x: 337.3,
                    y: 425.7,
                    sx: 0.593,
                    sy: 0.593
                },
                "421": {
                    x: 337.345,
                    y: 402.644
                },
                "422": {
                    y: 382.444
                },
                "423": {
                    y: 364.994
                },
                "424": {
                    y: 350.294
                },
                "425": {
                    y: 338.294
                },
                "426": {
                    y: 328.944
                },
                "427": {
                    y: 322.294
                },
                "428": {
                    y: 318.244
                },
                "429": {
                    x: 337.3,
                    y: 316.85
                },
                "430": {
                    x: 337.345,
                    y: 317.645
                },
                "431": {
                    y: 320.045
                },
                "432": {
                    y: 324.295
                },
                "433": {
                    y: 329.945
                },
                "434": {
                    y: 335.595
                },
                "435": {
                    y: 339.845
                },
                "436": {
                    y: 342.245
                },
                "437": {
                    x: 337.3,
                    y: 342.95
                },
                "438": {
                    x: 341.183,
                    y: 340.809,
                    sx: 0.58,
                    sy: 0.58
                },
                "439": {
                    x: 352.768,
                    y: 334.321,
                    sx: 0.541,
                    sy: 0.541
                },
                "440": {
                    x: 372.17,
                    y: 323.502,
                    sx: 0.475,
                    sy: 0.475
                },
                "441": {
                    x: 399.184,
                    y: 308.246,
                    sx: 0.384,
                    sy: 0.384
                },
                "442": {
                    x: 433.9,
                    y: 288.75,
                    sx: 0.267,
                    sy: 0.267
                }
            })
            .addTimedChild(instance22, 438, 15, {
                "438": {
                    x: -76.4,
                    y: -21,
                    sx: 0.335,
                    sy: 0.335,
                    a: 0
                },
                "439": {
                    a: 0.31
                },
                "440": {
                    a: 0.56
                },
                "441": {
                    a: 0.75
                },
                "442": {
                    a: 0.89
                },
                "443": {
                    a: 0.97
                },
                "444": {
                    a: 1
                },
                "445": {
                    a: 0.94
                },
                "446": {
                    a: 0.75
                },
                "447": {
                    a: 0.44
                },
                "448": {
                    a: 0
                }
            })
            .addAction(function () {
                     console.log('s01_started');
                     console.log('call playTrack');
                     EventBus.$emit('playTrack', 's01');
                }, 1)
                .addAction(function () {
                     console.log('test firing a function');
                     // EventBus.$emit('playTrack', 'mam_angry');
                     // EventBus.$emit('playTrack', 'mam_embar');
                     // EventBus.$emit('playTrack', 'mam_laugh');
                     // this.startScene(2);
                     // vm.startScene(2);
                     // const detail = {msgId: "PLAY_SECENE_2"};
                     // const evt = new CustomEvent("WM_MESSAGE", {detail});
                     // console.log('WM_MESSAGE - ', detail);
                     // EventBus.$emit('changeScene', 2);
                }, 15)
                .addAction(function () {
                     console.log('s01 is still running');
                     // this.startScene(2);
                     // vm.startScene(2);
                }, 150)
                .addAction(function () {
                     console.log('s01_end');
                     // this.startScene(2);
                     // vm.startScene(2);
                     EventBus.$emit('changeScene', 2);
                }, 546);
    });

     lib.s01.assets = window.$sceneSettings;
    
})(PIXI, lib = lib || {});
var lib;
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        stage: lib.s01,
        background: 0x333333,
        width: 1024,
        height: 576,
        framerate: 12,
        totalFrames: 547,
        library: lib
    };
}