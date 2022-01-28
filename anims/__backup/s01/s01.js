import { EventBus } from '../../src/main';

(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Container = PIXI.Container;
    var Sprite = PIXI.Sprite;
    var fromFrame = PIXI.Texture.fromFrame;
    var Graphics = PIXI.Graphics;
    var shapes = PIXI.animate.ShapesCache;

    var Graphic225 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 77, loop: false });
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
        MovieClip.call(this, { mode: mode, duration: 77, loop: false });
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
            .drawCommands(shapes.s01[16])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic14 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 41, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[16])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic16 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 13, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[16])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic18 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 31, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[16])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic20 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 23, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[16])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic4 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 6, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[16])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic15 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 41, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[16])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic17 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 13, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[16])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic19 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 31, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[16])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic21 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 23, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[16])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic5 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 120, loop: false });
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[20]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[19]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[17]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[17]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[18]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[17]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[17]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[18]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[17]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[17]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[18]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[17]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[17]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[18]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[17])
            .setTransform(-1289.25, -221.05);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[17])
            .setTransform(-1263.8, -221.2);
        this.addTimedChild(instance4, 0, 120, {
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
            .addTimedChild(instance3, 0, 120, {
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
            .addTimedChild(instance16, 97, 23)
            .addTimedChild(instance15, 97, 23);
    });

    var Graphic6 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 120, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[21])
            .setTransform(-1303.95, -197.85);
        this.addTimedChild(instance1);
    });

    var Graphic7 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 120, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[22])
            .setTransform(-1268.05, -199.05);
        this.addTimedChild(instance1);
    });

    var Graphic1 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 120, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[23]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[41]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[35]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[31]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[24]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[41]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[35]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[31]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[27]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[26]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[25]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[29]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[42]);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[36]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[32]);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[27]);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[26]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[25]);
        var instance21 = new Graphics()
            .drawCommands(shapes.s01[29]);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[30]);
        var instance26 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance25 = new Graphics()
            .drawCommands(shapes.s01[27]);
        var instance24 = new Graphics()
            .drawCommands(shapes.s01[26]);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[25]);
        var instance27 = new Graphics()
            .drawCommands(shapes.s01[23]);
        var instance30 = new Graphics()
            .drawCommands(shapes.s01[43]);
        var instance29 = new Graphics()
            .drawCommands(shapes.s01[40]);
        var instance28 = new Graphics()
            .drawCommands(shapes.s01[37]);
        var instance33 = new Graphics()
            .drawCommands(shapes.s01[41]);
        var instance32 = new Graphics()
            .drawCommands(shapes.s01[35]);
        var instance31 = new Graphics()
            .drawCommands(shapes.s01[31]);
        var instance37 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance36 = new Graphics()
            .drawCommands(shapes.s01[27]);
        var instance35 = new Graphics()
            .drawCommands(shapes.s01[26]);
        var instance34 = new Graphics()
            .drawCommands(shapes.s01[25]);
        var instance40 = new Graphics()
            .drawCommands(shapes.s01[43]);
        var instance39 = new Graphics()
            .drawCommands(shapes.s01[40]);
        var instance38 = new Graphics()
            .drawCommands(shapes.s01[37]);
        var instance43 = new Graphics()
            .drawCommands(shapes.s01[41]);
        var instance42 = new Graphics()
            .drawCommands(shapes.s01[35]);
        var instance41 = new Graphics()
            .drawCommands(shapes.s01[31]);
        var instance47 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance46 = new Graphics()
            .drawCommands(shapes.s01[27]);
        var instance45 = new Graphics()
            .drawCommands(shapes.s01[26]);
        var instance44 = new Graphics()
            .drawCommands(shapes.s01[25]);
        var instance48 = new Graphics()
            .drawCommands(shapes.s01[30]);
        var instance49 = new Graphics()
            .drawCommands(shapes.s01[29]);
        var instance50 = new Graphics()
            .drawCommands(shapes.s01[23]);
        var instance51 = new Graphics()
            .drawCommands(shapes.s01[24]);
        var instance52 = new Graphics()
            .drawCommands(shapes.s01[23]);
        var instance55 = new Graphics()
            .drawCommands(shapes.s01[41]);
        var instance54 = new Graphics()
            .drawCommands(shapes.s01[35]);
        var instance53 = new Graphics()
            .drawCommands(shapes.s01[31]);
        var instance58 = new Graphics()
            .drawCommands(shapes.s01[42]);
        var instance57 = new Graphics()
            .drawCommands(shapes.s01[36]);
        var instance56 = new Graphics()
            .drawCommands(shapes.s01[32]);
        var instance62 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance61 = new Graphics()
            .drawCommands(shapes.s01[27]);
        var instance60 = new Graphics()
            .drawCommands(shapes.s01[26]);
        var instance59 = new Graphics()
            .drawCommands(shapes.s01[25]);
        var instance63 = new Graphics()
            .drawCommands(shapes.s01[23]);
        var instance64 = new Graphics()
            .drawCommands(shapes.s01[30]);
        var instance67 = new Graphics()
            .drawCommands(shapes.s01[42]);
        var instance66 = new Graphics()
            .drawCommands(shapes.s01[36]);
        var instance65 = new Graphics()
            .drawCommands(shapes.s01[32]);
        var instance70 = new Graphics()
            .drawCommands(shapes.s01[43]);
        var instance69 = new Graphics()
            .drawCommands(shapes.s01[40]);
        var instance68 = new Graphics()
            .drawCommands(shapes.s01[37]);
        var instance71 = new Graphics()
            .drawCommands(shapes.s01[30]);
        var instance72 = new Graphics()
            .drawCommands(shapes.s01[24]);
        var instance73 = new Graphics()
            .drawCommands(shapes.s01[23]);
        var instance74 = new Graphics()
            .drawCommands(shapes.s01[24]);
        var instance77 = new Graphics()
            .drawCommands(shapes.s01[44]);
        var instance76 = new Graphics()
            .drawCommands(shapes.s01[38]);
        var instance75 = new Graphics()
            .drawCommands(shapes.s01[33]);
        var instance78 = new Graphics()
            .drawCommands(shapes.s01[30]);
        var instance81 = new Graphics()
            .drawCommands(shapes.s01[41]);
        var instance80 = new Graphics()
            .drawCommands(shapes.s01[35]);
        var instance79 = new Graphics()
            .drawCommands(shapes.s01[31]);
        var instance84 = new Graphics()
            .drawCommands(shapes.s01[43]);
        var instance83 = new Graphics()
            .drawCommands(shapes.s01[40]);
        var instance82 = new Graphics()
            .drawCommands(shapes.s01[37]);
        var instance87 = new Graphics()
            .drawCommands(shapes.s01[41]);
        var instance86 = new Graphics()
            .drawCommands(shapes.s01[35]);
        var instance85 = new Graphics()
            .drawCommands(shapes.s01[31]);
        var instance91 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance90 = new Graphics()
            .drawCommands(shapes.s01[27]);
        var instance89 = new Graphics()
            .drawCommands(shapes.s01[26]);
        var instance88 = new Graphics()
            .drawCommands(shapes.s01[25]);
        var instance92 = new Graphics()
            .drawCommands(shapes.s01[30]);
        var instance95 = new Graphics()
            .drawCommands(shapes.s01[41]);
        var instance94 = new Graphics()
            .drawCommands(shapes.s01[35]);
        var instance93 = new Graphics()
            .drawCommands(shapes.s01[31]);
        var instance96 = new Graphics()
            .drawCommands(shapes.s01[24]);
        var instance100 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance99 = new Graphics()
            .drawCommands(shapes.s01[27]);
        var instance98 = new Graphics()
            .drawCommands(shapes.s01[26]);
        var instance97 = new Graphics()
            .drawCommands(shapes.s01[25]);
        var instance101 = new Graphics()
            .drawCommands(shapes.s01[30]);
        var instance104 = new Graphics()
            .drawCommands(shapes.s01[42]);
        var instance103 = new Graphics()
            .drawCommands(shapes.s01[36]);
        var instance102 = new Graphics()
            .drawCommands(shapes.s01[32]);
        var instance107 = new Graphics()
            .drawCommands(shapes.s01[45]);
        var instance106 = new Graphics()
            .drawCommands(shapes.s01[39]);
        var instance105 = new Graphics()
            .drawCommands(shapes.s01[34]);
        var instance110 = new Graphics()
            .drawCommands(shapes.s01[42]);
        var instance109 = new Graphics()
            .drawCommands(shapes.s01[36]);
        var instance108 = new Graphics()
            .drawCommands(shapes.s01[32]);
        var instance113 = new Graphics()
            .drawCommands(shapes.s01[44]);
        var instance112 = new Graphics()
            .drawCommands(shapes.s01[38]);
        var instance111 = new Graphics()
            .drawCommands(shapes.s01[33]);
        var instance117 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance116 = new Graphics()
            .drawCommands(shapes.s01[27]);
        var instance115 = new Graphics()
            .drawCommands(shapes.s01[26]);
        var instance114 = new Graphics()
            .drawCommands(shapes.s01[25]);
        var instance120 = new Graphics()
            .drawCommands(shapes.s01[41]);
        var instance119 = new Graphics()
            .drawCommands(shapes.s01[35])
            .setTransform(-5.8, 24.2);
        var instance118 = new Graphics()
            .drawCommands(shapes.s01[31])
            .setTransform(-5.8, 24.2);
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
            .addTimedChild(instance119, 119, 1)
            .addTimedChild(instance118, 119, 1);
    });

    var Graphic8 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 120, loop: false });
        var instance1 = new Graphic1(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 120, {
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
            }
        });
    });

    var Graphic9 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 120, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[46]);
        this.addTimedChild(instance1);
    });

    var Graphic10 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 120, loop: false });
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[50])
            .setTransform(-1336.85, -168.4, 1.033, 1.033);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[50])
            .setTransform(-1357.3, -164.4, 1.033, 1.033);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[50])
            .setTransform(-1317.25, -167, 1.033, 1.033);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[50])
            .setTransform(-1316.95, -139.1, 0.978, 0.978);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[50])
            .setTransform(-1265.9, -139.25, 1.033, 1.033);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[50])
            .setTransform(-1170.45, -142.3, 0.948, 0.948);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[50])
            .setTransform(-1185.7, -149.8, 0.948, 0.948);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[50])
            .setTransform(-1177.25, -135.65, 0.881, 0.881);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[50])
            .setTransform(-1201.55, -112.45, 0.881, 0.881);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[50])
            .setTransform(-1213, -97.9, 0.881, 0.881);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[50])
            .setTransform(-1255.65, -125.65, 1.033, 1.033);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[49]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[48]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[47])
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
        MovieClip.call(this, { mode: mode, duration: 120, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[52])
            .setTransform(-1294.55, -252.5);
        this.addTimedChild(instance1);
    });

    var Graphic11 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 120, loop: false });
        var instance2 = new Graphic2(MovieClip.SYNCHED)
            .setTransform(6.55, -82.85);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[51]);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic12 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 120, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[54]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[53]);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic13 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 120, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[56]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[55]);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic22 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 120, loop: false });
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
            .addTimedChild(instance5, 0, 120, {
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
            .addTimedChild(instance4, 0, 120, {
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
            .addTimedChild(instance3, 0, 120, {
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
            .addTimedChild(instance19, 97, 23)
            .addTimedChild(instance18, 97, 23);
    });

    var Graphic23 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 120, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[57])
            .setTransform(-1222.8, -397.15, 0.95);
        this.addTimedChild(instance1);
    });

    var Graphic24 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 2, loop: false });
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[64]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[12]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[11]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[10]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[9]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[59]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[58]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[63]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[62])
            .setTransform(-1.65, -2.05);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[61])
            .setTransform(21.3, -1.55, 1, 1, 0.393);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[60])
            .setTransform(3.2, 1.2, 1, 1, 0.065);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[60])
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
            .drawCommands(shapes.s01[64]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[63]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[62])
            .setTransform(-1.65, -2.05);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[61])
            .setTransform(21.3, -1.55, 1, 1, 0.393);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[60])
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

    var Graphic227 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 136, loop: false });
        var instance4 = new Graphic24(MovieClip.SYNCHED);
        var instance6 = new Graphic26(MovieClip.SYNCHED);
        var instance3 = new Graphic23(MovieClip.SYNCHED);
        var instance2 = new Graphic22(MovieClip.SYNCHED);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[15]);
        var instance5 = new Graphic25(MovieClip.SYNCHED);
        this.addTimedChild(instance4, 23, 2, {
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
            .addTimedChild(instance6, 114, 6, {
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
            .addTimedChild(instance3, 0, 120, {
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
            .addTimedChild(instance2, 0, 120, {
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
            .addTimedChild(instance1)
            .addTimedChild(instance5, 25, 89, {
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

    var Graphic34 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 77, loop: false });
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[73])
            .setTransform(9.85, 31.2, 1.3, 1.3);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[72])
            .setTransform(9.85, 31.2, 1.3, 1.3);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[71])
            .setTransform(9.85, 31.2, 1.3, 1.3);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[70])
            .setTransform(9.85, 31.2, 1.3, 1.3);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[69])
            .setTransform(9.7, 31.2, 1.3, 1.3);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[68])
            .setTransform(-801.7, -1038.95, 1.3, 1.3);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[67])
            .setTransform(-801.7, -1038.95, 1.3, 1.3);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[66])
            .setTransform(-801.7, -1038.95, 1.3, 1.3);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[65])
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

    var Graphic35 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 77, loop: false });
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[81]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[80]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[79]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[78]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[77]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[76]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[75])
            .setTransform(-0.25, -0.5);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[74]);
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
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[85]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[84]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[83]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[82]);
        this.addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic36 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 77, loop: false });
        var instance1 = new Graphic27(MovieClip.SYNCHED)
            .setTransform(3.75, -14.9);
        this.addTimedChild(instance1);
    });

    lib.DEDE_NOSE = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[86]);
        this.addChild(instance1);
    });

    lib.DEDE_BROW_R = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[87])
            .setTransform(-466.8, -453.85);
        this.addChild(instance1);
    });

    lib.DEDE_BROW_L = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[88])
            .setTransform(-504.35, -453.65);
        this.addChild(instance1);
    });

    lib.DEDE_PUPIL = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[89])
            .setTransform(-458.45, -480.9, 0.972);
        this.addChild(instance1);
    });

    var Graphic29 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 77, loop: false });
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[95])
            .setTransform(-386.35, -557.05, 1, 1, 0.174);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[94])
            .setTransform(-385.25, -559.2, 1, 1, 0.174);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[93])
            .setTransform(-486.6, -478.35);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[92])
            .setTransform(-455.15, -505.5, 1, 1, 0.06);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[91])
            .setTransform(-588.15, -407.35, 1.216, 0.851);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[90])
            .setTransform(-596.45, -406.55, 1.239, 0.851);
        this.addTimedChild(instance6)
            .addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic28 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 77, loop: false });
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[98]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[35]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[31]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[99]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[36]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[32]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[98]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[35]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[31]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[100]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[38]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[33]);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[101]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[39]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[34]);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[27]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[26]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[25]);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[96]);
        var instance21 = new Graphics()
            .drawCommands(shapes.s01[97]);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[96]);
        var instance26 = new Graphics()
            .drawCommands(shapes.s01[28])
            .setTransform(-478.4, 548.95, 1, 1, 0, 3.142);
        var instance25 = new Graphics()
            .drawCommands(shapes.s01[27])
            .setTransform(1.25, 20.6, 1, 1, 0, 3.142);
        var instance24 = new Graphics()
            .drawCommands(shapes.s01[26])
            .setTransform(0.75, 1);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[25])
            .setTransform(-478.4, 548.95, 1, 1, 0, 3.142);
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
            .addTimedChild(instance26, 76, 1)
            .addTimedChild(instance25, 76, 1)
            .addTimedChild(instance24, 76, 1)
            .addTimedChild(instance23, 76, 1);
    });

    var Graphic30 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 77, loop: false });
        var instance1 = new Graphic28(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 77, {
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
            }
        });
    });

    var Graphic31 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 77, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[102]);
        this.addTimedChild(instance1);
    });

    lib.DEDE_EAR_R = Container.extend(function () {
        Container.call(this);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[104])
            .setTransform(-368.7, -483.9, 0.959);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[103])
            .setTransform(-383.8, -485.3);
        this.addChild(instance2, instance1);
    });

    lib.DEDE_EAR_L = Container.extend(function () {
        Container.call(this);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[106]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[105])
            .setTransform(-585.65, -483.25);
        this.addChild(instance2, instance1);
    });

    lib.DEDE_PONYTAIL_END = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[108]);
        this.addChild(instance1);
    });

    lib.DEDE_PONYTAIL_COLOUR_SECTION_02 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[109])
            .setTransform(-657.05, -461.95);
        this.addChild(instance1);
    });

    lib.DEDE_PONYTAIL_COLOUR_SECTION_01 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[110])
            .setTransform(-497.15, -407.2);
        this.addChild(instance1);
    });

    var Graphic37 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 77, loop: false });
        var instance14 = new lib.DEDE_PONYTAIL_COLOUR_SECTION_01()
            .setTransform(17, -197.8);
        var instance13 = new lib.DEDE_PONYTAIL_COLOUR_SECTION_02()
            .setTransform(176.9, -143.05);
        var instance12 = new lib.DEDE_PONYTAIL_END()
            .setTransform(177.15, -118);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[107]);
        var instance10 = new lib.DEDE_EAR_L()
            .setTransform(105.5, -122.2);
        var instance9 = new lib.DEDE_EAR_R()
            .setTransform(-96.35, -120.15);
        var instance8 = new Graphic31(MovieClip.SYNCHED)
            .setTransform(4.15, -0.3);
        var instance7 = new Graphic30(MovieClip.SYNCHED)
            .setTransform(-6.85, -75.4);
        var instance6 = new Graphic29(MovieClip.SYNCHED)
            .setTransform(-11.3, -127.5);
        var instance5 = new lib.DEDE_PUPIL();
        var instance4 = new lib.DEDE_PUPIL();
        var instance3 = new lib.DEDE_BROW_L();
        var instance2 = new lib.DEDE_BROW_R();
        var instance1 = new lib.DEDE_NOSE()
            .setTransform(-13.15, -100.3);
        this.addTimedChild(instance14)
            .addTimedChild(instance13)
            .addTimedChild(instance12)
            .addTimedChild(instance11)
            .addTimedChild(instance10)
            .addTimedChild(instance9)
            .addTimedChild(instance8)
            .addTimedChild(instance7)
            .addTimedChild(instance6)
            .addTimedChild(instance5, 0, 77, {
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
                }
            })
            .addTimedChild(instance4, 0, 77, {
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
                }
            })
            .addTimedChild(instance3, 0, 77, {
                "0": {
                    x: 8.55,
                    y: -151.8,
                    r: 0
                },
                "57": {
                    x: 8.1,
                    y: -148.6,
                    r: -0.387
                }
            })
            .addTimedChild(instance2, 0, 77, {
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
                }
            })
            .addTimedChild(instance1);
    });

    var Graphic32 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 77, loop: false });
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[114])
            .setTransform(-17.65, 14.8, 0.95);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[113])
            .setTransform(-470, -630.85, 0.95);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[112])
            .setTransform(-470, -630.85, 0.95);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[111])
            .setTransform(-470, -630.85, 0.95);
        this.addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic33 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 77, loop: false });
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[117])
            .setTransform(14.05, 13.35, 0.95);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[116])
            .setTransform(-438.25, -629.9, 0.95);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[115])
            .setTransform(-438.25, -629.9, 0.95);
        this.addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic38 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 77, loop: false });
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[118]);
        var instance2 = new Graphic33(MovieClip.SYNCHED)
            .setTransform(-9.2, -101.15);
        var instance1 = new Graphic32(MovieClip.SYNCHED)
            .setTransform(22.55, -100.2);
        this.addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    lib.DEDE_NECK = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[119])
            .setTransform(-461.15, -639, 0.96);
        this.addChild(instance1);
    });

    var Graphic39 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 77, loop: false });
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[123]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[122]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[121]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[120]);
        this.addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    lib.DEDE_SHOE = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 2
        });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[138]);
        this.addTimedChild(instance1);
    });

    var Graphic228 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 77, loop: false });
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[152]);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[153]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[154]);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[155]);
        var instance21 = new Graphics()
            .drawCommands(shapes.s01[156]);
        var instance25 = new Graphics()
            .drawCommands(shapes.s01[157]);
        var instance29 = new Graphics()
            .drawCommands(shapes.s01[158]);
        var instance33 = new Graphics()
            .drawCommands(shapes.s01[159]);
        var instance37 = new Graphics()
            .drawCommands(shapes.s01[160]);
        var instance41 = new Graphics()
            .drawCommands(shapes.s01[161]);
        var instance45 = new Graphics()
            .drawCommands(shapes.s01[162]);
        var instance47 = new Graphics()
            .drawCommands(shapes.s01[163]);
        var instance49 = new Graphics()
            .drawCommands(shapes.s01[164]);
        var instance12 = new lib.DEDE_SHOE();
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[139]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[140]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[141]);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[142]);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[143]);
        var instance24 = new Graphics()
            .drawCommands(shapes.s01[144]);
        var instance28 = new Graphics()
            .drawCommands(shapes.s01[145]);
        var instance32 = new Graphics()
            .drawCommands(shapes.s01[146]);
        var instance36 = new Graphics()
            .drawCommands(shapes.s01[147]);
        var instance40 = new Graphics()
            .drawCommands(shapes.s01[148]);
        var instance44 = new Graphics()
            .drawCommands(shapes.s01[149]);
        var instance46 = new Graphics()
            .drawCommands(shapes.s01[150]);
        var instance48 = new Graphics()
            .drawCommands(shapes.s01[151]);
        var instance10 = new lib.DEDE_SHOE();
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[131]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[124]);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[132]);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[125]);
        var instance27 = new Graphics()
            .drawCommands(shapes.s01[133]);
        var instance26 = new Graphics()
            .drawCommands(shapes.s01[126]);
        var instance31 = new Graphics()
            .drawCommands(shapes.s01[134]);
        var instance30 = new Graphics()
            .drawCommands(shapes.s01[127]);
        var instance35 = new Graphics()
            .drawCommands(shapes.s01[135]);
        var instance34 = new Graphics()
            .drawCommands(shapes.s01[128]);
        var instance39 = new Graphics()
            .drawCommands(shapes.s01[136]);
        var instance38 = new Graphics()
            .drawCommands(shapes.s01[129]);
        var instance43 = new Graphics()
            .drawCommands(shapes.s01[137]);
        var instance42 = new Graphics()
            .drawCommands(shapes.s01[130])
            .setTransform(0.9, -1.8);
        var instance7 = new Graphic39(MovieClip.SYNCHED);
        var instance6 = new lib.DEDE_NECK();
        var instance5 = new Graphic38(MovieClip.SYNCHED)
            .setTransform(42.45, -303.6, 1, 1, 0.178);
        var instance4 = new Graphic37(MovieClip.SYNCHED);
        var instance3 = new Graphic36(MovieClip.SYNCHED);
        var instance2 = new Graphic35(MovieClip.SYNCHED);
        var instance1 = new Graphic34(MovieClip.SYNCHED);
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
            .addTimedChild(instance12, 0, 77, {
                "0": {
                    x: -15.2,
                    y: -149.75,
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
            .addTimedChild(instance10, 0, 77, {
                "0": {
                    x: 75.95,
                    y: -98.6,
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
            .addTimedChild(instance42, 65, 12)
            .addTimedChild(instance7, 0, 77, {
                "0": {
                    x: 59.05,
                    y: -301.75,
                    sy: 1.008,
                    kx: -0.547,
                    ky: 0.419
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
                }
            })
            .addTimedChild(instance6, 0, 77, {
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
                }
            })
            .addTimedChild(instance5)
            .addTimedChild(instance4, 0, 77, {
                "0": {
                    x: 76,
                    y: -335.95,
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
            });
    });

    lib.BG_MESSY_BEDROOM = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 12
        });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[165]);
        this.addTimedChild(instance1);
    });

    lib.BG_MESSY_BEDROOM_CU_02 = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 12
        });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[166]);
        this.addTimedChild(instance1);
    });

    var Graphic41 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 51, loop: false });
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[95]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[94]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[93]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[92]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[91]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[90]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[181]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[180]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[179]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[178]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[95]);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[94]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[93]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[92]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[91]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[90]);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[187])
            .setTransform(-2.45, 1.7, 1.289, 0.827);
        var instance21 = new Graphics()
            .drawCommands(shapes.s01[186])
            .setTransform(-0.05, 1.8, 1.289, 0.827);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[185])
            .setTransform(6.85, 1.9, 0.95, 0.95);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[184])
            .setTransform(1.1, 0, 0.95, 0.95);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[183])
            .setTransform(-9.25, -1.15, 0.95, 0.95);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[182])
            .setTransform(-0.25, -0.15, 0.95, 0.95);
        this.addTimedChild(instance6, 0, 25, {
                "0": {
                    x: -386.35,
                    y: -557.05,
                    r: 0.174
                }
            })
            .addTimedChild(instance5, 0, 25, {
                "0": {
                    x: -385.25,
                    y: -559.2,
                    r: 0.174
                }
            })
            .addTimedChild(instance4, 0, 25, {
                "0": {
                    x: -486.6,
                    y: -478.35
                }
            })
            .addTimedChild(instance3, 0, 25, {
                "0": {
                    x: -455.15,
                    y: -505.5,
                    r: 0.06
                }
            })
            .addTimedChild(instance2, 0, 25, {
                "0": {
                    x: -588.15,
                    y: -407.35,
                    sx: 1.216,
                    sy: 0.851
                }
            })
            .addTimedChild(instance1, 0, 25, {
                "0": {
                    x: -596.45,
                    y: -406.55,
                    sx: 1.239,
                    sy: 0.851
                }
            })
            .addTimedChild(instance10, 25, 2, {
                "25": {
                    x: 6.1,
                    y: 3.6,
                    sx: 1.25
                }
            })
            .addTimedChild(instance9, 25, 2, {
                "25": {
                    x: 6.1,
                    y: 3.6,
                    sx: 1.25
                }
            })
            .addTimedChild(instance8, 25, 2, {
                "25": {
                    x: -9.5,
                    y: 4,
                    sx: 1.25
                }
            })
            .addTimedChild(instance7, 25, 2, {
                "25": {
                    x: -6,
                    y: -0.4
                }
            })
            .addTimedChild(instance16, 27, 23, {
                "27": {
                    x: -386.35,
                    y: -557.05,
                    r: 0.174
                }
            })
            .addTimedChild(instance15, 27, 23, {
                "27": {
                    x: -385.25,
                    y: -559.2,
                    r: 0.174
                }
            })
            .addTimedChild(instance14, 27, 23, {
                "27": {
                    x: -486.6,
                    y: -478.35
                }
            })
            .addTimedChild(instance13, 27, 23, {
                "27": {
                    x: -455.15,
                    y: -505.5,
                    r: 0.06
                }
            })
            .addTimedChild(instance12, 27, 23, {
                "27": {
                    x: -588.15,
                    y: -407.35,
                    sx: 1.216,
                    sy: 0.851
                }
            })
            .addTimedChild(instance11, 27, 23, {
                "27": {
                    x: -596.45,
                    y: -406.55,
                    sx: 1.239,
                    sy: 0.851
                }
            })
            .addTimedChild(instance22, 50, 1)
            .addTimedChild(instance21, 50, 1)
            .addTimedChild(instance20, 50, 1)
            .addTimedChild(instance19, 50, 1)
            .addTimedChild(instance18, 50, 1)
            .addTimedChild(instance17, 50, 1);
    });

    var Graphic40 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 51, loop: false });
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[27]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[26]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[25]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[100]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[38]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[33]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[97]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[27]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[26]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[25]);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[101]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[39]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[34]);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[98]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[35]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[31]);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance21 = new Graphics()
            .drawCommands(shapes.s01[27]);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[26]);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[25]);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[97]);
        var instance24 = new Graphics()
            .drawCommands(shapes.s01[23]);
        var instance25 = new Graphics()
            .drawCommands(shapes.s01[188]);
        var instance26 = new Graphics()
            .drawCommands(shapes.s01[96]);
        var instance27 = new Graphics()
            .drawCommands(shapes.s01[23]);
        var instance31 = new Graphics()
            .drawCommands(shapes.s01[190]);
        var instance30 = new Graphics()
            .drawCommands(shapes.s01[40]);
        var instance29 = new Graphics()
            .drawCommands(shapes.s01[37]);
        var instance28 = new Graphics()
            .drawCommands(shapes.s01[189]);
        var instance34 = new Graphics()
            .drawCommands(shapes.s01[98]);
        var instance33 = new Graphics()
            .drawCommands(shapes.s01[35]);
        var instance32 = new Graphics()
            .drawCommands(shapes.s01[31]);
        var instance35 = new Graphics()
            .drawCommands(shapes.s01[23])
            .setTransform(0, 3.5, 1, 1, 0, 3.142);
        this.addTimedChild(instance4, 0, 20, {
                "0": {
                    x: -478.4,
                    y: 548.95,
                    kx: 3.142
                }
            })
            .addTimedChild(instance3, 0, 20, {
                "0": {
                    x: 1.25,
                    y: 20.6,
                    kx: 3.142
                }
            })
            .addTimedChild(instance2, 0, 20, {
                "0": {
                    x: 0.75,
                    y: 1
                }
            })
            .addTimedChild(instance1, 0, 20, {
                "0": {
                    x: -478.4,
                    y: 548.95,
                    kx: 3.142
                }
            })
            .addTimedChild(instance7, 20, 1)
            .addTimedChild(instance6, 20, 1)
            .addTimedChild(instance5, 20, 1)
            .addTimedChild(instance8, 21, 2)
            .addTimedChild(instance12, 23, 1, {
                "23": {
                    x: -478.4,
                    y: 548.95,
                    kx: 3.142
                }
            })
            .addTimedChild(instance11, 23, 1, {
                "23": {
                    x: 1.25,
                    y: 20.6,
                    kx: 3.142
                }
            })
            .addTimedChild(instance10, 23, 1, {
                "23": {
                    x: 0.75,
                    y: 1
                }
            })
            .addTimedChild(instance9, 23, 1, {
                "23": {
                    x: -478.4,
                    y: 548.95,
                    kx: 3.142
                }
            })
            .addTimedChild(instance15, 24, 1)
            .addTimedChild(instance14, 24, 1)
            .addTimedChild(instance13, 24, 1)
            .addTimedChild(instance18, 25, 10)
            .addTimedChild(instance17, 25, 10)
            .addTimedChild(instance16, 25, 10)
            .addTimedChild(instance22, 35, 1, {
                "35": {
                    x: -478.4,
                    y: 548.95,
                    kx: 3.142
                }
            })
            .addTimedChild(instance21, 35, 1, {
                "35": {
                    x: 1.25,
                    y: 20.6,
                    kx: 3.142
                }
            })
            .addTimedChild(instance20, 35, 1, {
                "35": {
                    x: 0.75,
                    y: 1
                }
            })
            .addTimedChild(instance19, 35, 1, {
                "35": {
                    x: -478.4,
                    y: 548.95,
                    kx: 3.142
                }
            })
            .addTimedChild(instance23, 36, 3)
            .addTimedChild(instance24, 39, 2, {
                "39": {
                    y: 3.5,
                    kx: 3.142
                }
            })
            .addTimedChild(instance25, 41, 1)
            .addTimedChild(instance26, 42, 1)
            .addTimedChild(instance27, 43, 1, {
                "43": {
                    y: 3.5,
                    kx: 3.142
                }
            })
            .addTimedChild(instance31, 44, 1)
            .addTimedChild(instance30, 44, 1)
            .addTimedChild(instance29, 44, 1)
            .addTimedChild(instance28, 44, 1)
            .addTimedChild(instance34, 45, 1)
            .addTimedChild(instance33, 45, 1)
            .addTimedChild(instance32, 45, 1)
            .addTimedChild(instance35, 46, 5);
    });

    var Graphic42 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 51, loop: false });
        var instance1 = new Graphic40(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 51, {
            "0": {
                x: -6.65,
                y: -1.85,
                sx: 1.393,
                sy: 0.612
            },
            "20": {
                x: -7.05,
                y: -1.75,
                sx: 0.804,
                sy: 0.98
            },
            "22": {
                x: -7.2,
                y: -1.8,
                sx: 0.564,
                sy: 0.86
            },
            "23": {
                x: -6.75,
                y: -1.75,
                sx: 1.088,
                sy: 0.944
            },
            "25": {
                x: -6.8,
                y: -1.8,
                sx: 1.111,
                sy: 0.814
            },
            "26": {
                x: -6.65,
                y: -1.9,
                sx: 1.266,
                sy: 0.716
            },
            "35": {
                x: -6.55,
                y: -2.05,
                sx: 1.398,
                sy: 0.593
            },
            "36": {
                y: -1.9,
                sy: 0.72
            },
            "37": {
                x: -7.2,
                y: -1.6,
                sx: 0.748,
                sy: 0.973
            },
            "39": {
                x: -6.95,
                y: -1.55,
                sx: 1,
                sy: 1
            }
        });
    });

    var Graphic43 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 51, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[191]);
        this.addTimedChild(instance1);
    });

    var Graphic46 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 51, loop: false });
        var instance14 = new lib.DEDE_PONYTAIL_COLOUR_SECTION_01()
            .setTransform(17, -197.8);
        var instance13 = new lib.DEDE_PONYTAIL_COLOUR_SECTION_02()
            .setTransform(176.9, -143.05);
        var instance12 = new lib.DEDE_PONYTAIL_END()
            .setTransform(177.15, -118);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[107]);
        var instance10 = new lib.DEDE_EAR_R()
            .setTransform(-85.25, -120.15);
        var instance9 = new Graphic43(MovieClip.SYNCHED)
            .setTransform(4.15, -0.3);
        var instance8 = new Graphic42(MovieClip.SYNCHED)
            .setTransform(-18.05, -75.4);
        var instance7 = new Graphic41(MovieClip.SYNCHED);
        var instance6 = new lib.DEDE_PUPIL();
        var instance5 = new lib.DEDE_PUPIL();
        var instance16 = new lib.DEDE_PUPIL();
        var instance15 = new lib.DEDE_PUPIL();
        var instance4 = new lib.DEDE_BROW_L();
        var instance3 = new lib.DEDE_BROW_R();
        var instance2 = new lib.DEDE_NOSE()
            .setTransform(-24.25, -100.3);
        var instance1 = new lib.DEDE_EAR_L()
            .setTransform(86.85, -120.95);
        this.addTimedChild(instance14)
            .addTimedChild(instance13)
            .addTimedChild(instance12)
            .addTimedChild(instance11)
            .addTimedChild(instance10)
            .addTimedChild(instance9)
            .addTimedChild(instance8)
            .addTimedChild(instance7, 0, 51, {
                "0": {
                    x: -22.5,
                    y: -127.5
                }
            })
            .addTimedChild(instance6, 0, 25, {
                "0": {
                    x: -10.9,
                    y: -126.95
                }
            })
            .addTimedChild(instance5, 0, 25, {
                "0": {
                    x: -51.35,
                    y: -126.1
                }
            })
            .addTimedChild(instance16, 27, 23, {
                "27": {
                    x: -10.9,
                    y: -126.95
                },
                "33": {
                    x: -11.1,
                    y: -124.5
                },
                "37": {
                    x: -10.9,
                    y: -126.95
                }
            })
            .addTimedChild(instance15, 27, 23, {
                "27": {
                    x: -51.35,
                    y: -126.1
                },
                "33": {
                    x: -51.55,
                    y: -123.65
                },
                "37": {
                    x: -51.35,
                    y: -126.1
                }
            })
            .addTimedChild(instance4, 0, 51, {
                "0": {
                    x: -2.55,
                    y: -148.4,
                    r: -0.262
                },
                "50": {
                    x: -5.1,
                    y: -139.65
                }
            })
            .addTimedChild(instance3, 0, 51, {
                "0": {
                    x: -35.45,
                    y: -148.6,
                    r: 0.487
                },
                "50": {
                    x: -38,
                    y: -139.85
                }
            })
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic44 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 51, loop: false });
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[192]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[113])
            .setTransform(-470, -630.85, 0.95);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[112])
            .setTransform(-470, -630.85, 0.95);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[111])
            .setTransform(-470, -630.85, 0.95);
        this.addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic45 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 51, loop: false });
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[193]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[116])
            .setTransform(438.25, -629.9, 0.95, 1, 0, 0, 3.142);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[115])
            .setTransform(438.25, -629.9, 0.95, 1, 0, 0, 3.142);
        this.addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic47 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 51, loop: false });
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[118]);
        var instance2 = new Graphic45(MovieClip.SYNCHED)
            .setTransform(-24.6, -101.15, 1, 1, 0, 0, 3.142);
        var instance1 = new Graphic44(MovieClip.SYNCHED)
            .setTransform(7.15, -100.2);
        this.addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic48 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 51, loop: false });
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[201])
            .setTransform(-0.6, 2.45, 1, 1, 0, 0.484, 2.657);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[200])
            .setTransform(-4.3, 1.95, 1, 1, 0, 0.618, 2.523);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[199])
            .setTransform(4.25, 33.75, 1.12, 1.056, -0.238);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[198])
            .setTransform(5.75, 34.95, 1, 1, 0.01);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[197])
            .setTransform(6.05, 34.9, 1, 1, 0.257);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[196])
            .setTransform(1.05, 40.25, 1, 1, 0.344);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[195])
            .setTransform(34.1, -985.65, 1, 1, 0.684);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[68])
            .setTransform(-464.95, -886.85, 1, 1, 0.178);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[67])
            .setTransform(-538.25, -842.15, 1, 1, 0.091);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[66])
            .setTransform(-668.55, -792.3, 1.087);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[194])
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

    var Graphic49 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 51, loop: false });
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[213]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[201])
            .setTransform(-0.6, 2.45, 1, 1, 0, 0.484, 2.657);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[200]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[199]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[198]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[197]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[196]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[195])
            .setTransform(34.1, -985.65, 1, 1, 0.684);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[68])
            .setTransform(-464.95, -886.85, 1, 1, 0.178);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[67])
            .setTransform(-538.25, -842.15, 1, 1, 0.091);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[66])
            .setTransform(-668.55, -792.3, 1.087);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[194])
            .setTransform(-13.45, 17.25, 1, 1, -0.388);
        this.addTimedChild(instance6, 0, 16)
            .addTimedChild(instance12, 16, 35)
            .addTimedChild(instance5, 0, 51, {
                "0": {
                    x: 3.1,
                    y: -2.15,
                    kx: 0,
                    ky: 0,
                    r: 0.134
                },
                "16": {
                    x: -4.3,
                    y: 1.95,
                    kx: 0.618,
                    ky: 2.523,
                    r: 0
                }
            })
            .addTimedChild(instance4, 0, 51, {
                "0": {
                    x: 10.35,
                    y: 30.05,
                    sx: 1.12,
                    sy: 1.056,
                    kx: 0.246,
                    ky: 2.895,
                    r: 0
                },
                "16": {
                    x: 4.25,
                    y: 33.75,
                    kx: 0,
                    ky: 0,
                    r: -0.238
                }
            })
            .addTimedChild(instance3, 0, 51, {
                "0": {
                    x: 9.55,
                    y: 31.8,
                    kx: 0.494,
                    ky: 2.648,
                    r: 0
                },
                "16": {
                    x: 5.75,
                    y: 34.95,
                    kx: 0,
                    ky: 0,
                    r: 0.01
                }
            })
            .addTimedChild(instance2, 0, 51, {
                "0": {
                    x: 9.3,
                    y: 31.9,
                    kx: 0.741,
                    ky: 2.401,
                    r: 0
                },
                "16": {
                    x: 6.05,
                    y: 34.9,
                    kx: 0,
                    ky: 0,
                    r: 0.257
                }
            })
            .addTimedChild(instance1, 0, 51, {
                "0": {
                    x: 16.15,
                    y: 34.3,
                    kx: 0.828,
                    ky: 2.314,
                    r: 0
                },
                "16": {
                    x: 1.05,
                    y: 40.25,
                    kx: 0,
                    ky: 0,
                    r: 0.344
                }
            })
            .addTimedChild(instance11, 16, 35)
            .addTimedChild(instance10, 16, 35)
            .addTimedChild(instance9, 16, 35)
            .addTimedChild(instance8, 16, 35)
            .addTimedChild(instance7, 16, 35);
    });

    var Graphic229 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 51, loop: false });
        var instance7 = new Graphic49(MovieClip.SYNCHED);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[202]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[203]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[204]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[205]);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[206]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[207]);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[208]);
        var instance21 = new Graphics()
            .drawCommands(shapes.s01[209]);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[210]);
        var instance25 = new Graphics()
            .drawCommands(shapes.s01[211]);
        var instance27 = new Graphics()
            .drawCommands(shapes.s01[212]);
        var instance5 = new Graphic48(MovieClip.SYNCHED);
        var instance4 = new lib.DEDE_NECK();
        var instance3 = new Graphic47(MovieClip.SYNCHED);
        var instance2 = new Graphic46(MovieClip.SYNCHED);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[167]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[168]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[169]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[170]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[171]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[172]);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[173]);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[174]);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[175]);
        var instance24 = new Graphics()
            .drawCommands(shapes.s01[176]);
        var instance26 = new Graphics()
            .drawCommands(shapes.s01[177]);
        this.addTimedChild(instance7, 0, 51, {
                "0": {
                    x: -151.85,
                    y: -424.4,
                    kx: 3.778,
                    ky: -0.636
                },
                "13": {
                    x: -153.678,
                    y: -435.62,
                    kx: 3.769,
                    ky: -0.627
                },
                "14": {
                    x: -159.591,
                    y: -470.752,
                    kx: 3.741,
                    ky: -0.599
                },
                "15": {
                    x: -165.539,
                    y: -505.961,
                    kx: 3.713,
                    ky: -0.571
                },
                "16": {
                    x: -167.4,
                    y: -517.15,
                    kx: 3.704,
                    ky: -0.562
                },
                "25": {
                    x: -169.85,
                    y: -510.4,
                    kx: 3.678,
                    ky: -0.536
                },
                "26": {
                    x: -163.6,
                    y: -503.7,
                    kx: 3.704,
                    ky: -0.562
                },
                "27": {
                    x: -199.2,
                    y: -525.2,
                    kx: 3.877,
                    ky: -0.736
                },
                "28": {
                    x: -203.2,
                    y: -526.15,
                    kx: 3.899,
                    ky: -0.757
                },
                "49": {
                    x: -201.25,
                    y: -510.25,
                    kx: 3.954,
                    ky: -0.813
                },
                "50": {
                    x: -195.6,
                    y: -462.7,
                    kx: 4.12,
                    ky: -0.979
                }
            })
            .addTimedChild(instance6, 0, 13)
            .addTimedChild(instance9, 13, 1)
            .addTimedChild(instance11, 14, 1)
            .addTimedChild(instance13, 15, 1)
            .addTimedChild(instance15, 16, 9, {
                "16": {
                    x: 2.8,
                    y: -45.85
                }
            })
            .addTimedChild(instance17, 25, 1, {
                "25": {
                    x: 2.8,
                    y: -45.85
                }
            })
            .addTimedChild(instance19, 26, 1, {
                "26": {
                    x: 2.8,
                    y: -45.85
                }
            })
            .addTimedChild(instance21, 27, 1)
            .addTimedChild(instance23, 28, 21)
            .addTimedChild(instance25, 49, 1)
            .addTimedChild(instance27, 50, 1)
            .addTimedChild(instance5, 0, 51, {
                "0": {
                    x: -91.95,
                    y: -373.95,
                    kx: 3.333,
                    ky: 2.95
                },
                "13": {
                    x: -102.531,
                    y: -381.572,
                    kx: 3.442,
                    ky: 2.841
                },
                "14": {
                    x: -135.703,
                    y: -405.409,
                    kx: 3.787,
                    ky: 2.496
                },
                "15": {
                    x: -168.893,
                    y: -429.357,
                    kx: 4.131,
                    ky: 2.152
                },
                "16": {
                    x: -179.3,
                    y: -436.9,
                    kx: 4.24,
                    ky: 2.043
                },
                "25": {
                    x: -178.8,
                    y: -433.1,
                    kx: 4.193,
                    ky: 2.09
                },
                "26": {
                    x: -164.95,
                    y: -423.4,
                    kx: 3.839,
                    ky: 2.444
                },
                "27": {
                    x: -226.3,
                    y: -435.15,
                    kx: 4.414,
                    ky: 1.869
                },
                "28": {
                    x: -232.15,
                    y: -434.85,
                    kx: 4.435,
                    ky: 1.848
                },
                "49": {
                    x: -234.1,
                    y: -429.1,
                    kx: 4.391,
                    ky: 1.892
                },
                "50": {
                    x: -218.2,
                    y: -335.4,
                    kx: 4.218,
                    ky: 2.065
                }
            })
            .addTimedChild(instance4, 0, 51, {
                "0": {
                    x: 23.75,
                    y: -395.6,
                    r: -0.039
                },
                "13": {
                    x: 24.396,
                    y: -395.649,
                    r: -0.025
                },
                "14": {
                    x: 26.137,
                    y: -395.641,
                    r: 0.018
                },
                "15": {
                    x: 27.948,
                    y: -395.611,
                    r: 0.06
                },
                "16": {
                    x: 28.65,
                    y: -395.6,
                    r: 0.074
                },
                "25": {
                    x: 27.15,
                    y: -397.35,
                    r: 0.062
                },
                "26": {
                    x: 20.85,
                    y: -381.05,
                    r: 0.044
                },
                "27": {
                    x: -5.55,
                    y: -404.5,
                    r: -0.235
                },
                "28": {
                    x: -9.8,
                    y: -405.55,
                    r: -0.273
                }
            })
            .addTimedChild(instance3, 0, 51, {
                "0": {
                    x: 19.95,
                    y: -303.6,
                    r: 0.018
                },
                "13": {
                    x: 19.988,
                    y: -303.686,
                    r: 0.023
                },
                "14": {
                    x: 19.996,
                    y: -303.687,
                    r: 0.039
                },
                "15": {
                    x: 19.899,
                    y: -303.615,
                    r: 0.056
                },
                "16": {
                    x: 19.95,
                    y: -303.6,
                    r: 0.061
                },
                "26": {
                    r: 0.009
                },
                "27": {
                    x: 6,
                    y: -309.55,
                    r: -0.112
                },
                "28": {
                    x: 4.3,
                    y: -310.15,
                    r: -0.134
                }
            })
            .addTimedChild(instance2, 0, 51, {
                "0": {
                    x: 14,
                    y: -425.55,
                    r: 0
                },
                "13": {
                    x: 14.954,
                    y: -425.616,
                    r: 0.015
                },
                "14": {
                    x: 17.847,
                    y: -425.529,
                    r: 0.065
                },
                "15": {
                    x: 20.741,
                    y: -425.492,
                    r: 0.114
                },
                "16": {
                    x: 21.65,
                    y: -425.5,
                    r: 0.13
                },
                "25": {
                    x: 19.75,
                    y: -427.15,
                    r: 0.084
                },
                "26": {
                    x: 12.9,
                    y: -410.7,
                    r: -0.209
                },
                "27": {
                    x: -53.45,
                    y: -444.4,
                    r: 0.288
                },
                "28": {
                    x: -62.7,
                    y: -446.65,
                    r: 0.308
                },
                "49": {
                    x: -55.95,
                    y: -436.15,
                    r: 0.173
                },
                "50": {
                    x: -16.45,
                    y: -415,
                    r: -0.398
                }
            })
            .addTimedChild(instance1, 0, 13)
            .addTimedChild(instance8, 13, 1)
            .addTimedChild(instance10, 14, 1)
            .addTimedChild(instance12, 15, 1)
            .addTimedChild(instance14, 16, 9, {
                "16": {
                    x: -177.5,
                    y: 593.5,
                    r: 0.223
                }
            })
            .addTimedChild(instance16, 25, 1, {
                "25": {
                    x: -177.5,
                    y: 593.5,
                    r: 0.223
                }
            })
            .addTimedChild(instance18, 26, 1, {
                "26": {
                    x: -177.5,
                    y: 593.5,
                    r: 0.223
                }
            })
            .addTimedChild(instance20, 27, 1)
            .addTimedChild(instance22, 28, 21, {
                "28": {
                    x: -32.7,
                    y: 606.65,
                    r: 0.028
                }
            })
            .addTimedChild(instance24, 49, 1)
            .addTimedChild(instance26, 50, 1);
    });

    var Graphic63 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 22, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[215]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[214]);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic64 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 22, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[109])
            .setTransform(-657.05, -461.95);
        this.addTimedChild(instance1);
    });

    var Graphic65 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 22, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[108]);
        this.addTimedChild(instance1);
    });

    var Graphic66 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 22, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[222]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[223]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[224]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[225]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[221]);
        this.addTimedChild(instance2, 0, 2)
            .addTimedChild(instance3, 2, 1)
            .addTimedChild(instance4, 3, 1)
            .addTimedChild(instance5, 4, 18)
            .addTimedChild(instance1);
    });

    var Graphic62 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 7, loop: false });
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[201])
            .setTransform(-0.6, 2.45, 1, 1, 0, 0.484, 2.657);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[200])
            .setTransform(-4.3, 1.95, 1, 1, 0, 0.618, 2.523);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[199])
            .setTransform(4.25, 33.75, 1.12, 1.056, -0.238);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[198])
            .setTransform(5.75, 34.95, 1, 1, 0.01);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[197])
            .setTransform(6.05, 34.9, 1, 1, 0.257);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[196])
            .setTransform(1.05, 40.25, 1, 1, 0.344);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[195])
            .setTransform(34.1, -985.65, 1, 1, 0.684);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[68])
            .setTransform(-464.95, -886.85, 1, 1, 0.178);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[67])
            .setTransform(-538.25, -842.15, 1, 1, 0.091);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[66])
            .setTransform(-668.55, -792.3, 1.087);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[194])
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

    var Graphic67 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 11, loop: false });
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[81]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[80]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[79]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[78]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[77]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[76]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[75])
            .setTransform(-0.25, -0.5);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[74]);
        this.addTimedChild(instance8)
            .addTimedChild(instance7)
            .addTimedChild(instance6)
            .addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic54 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 31, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[108]);
        this.addTimedChild(instance1);
    });

    var Graphic51 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[187]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[186]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[185]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[184]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[183]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[182]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[95]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[94]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[93]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[92]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[91]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[90]);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[187]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[186]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[185]);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[184]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[183]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[182]);
        var instance24 = new Graphics()
            .drawCommands(shapes.s01[95])
            .setTransform(-386.35, -557.05, 1, 1, 0.174);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[94])
            .setTransform(-385.25, -559.2, 1, 1, 0.174);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[93])
            .setTransform(-486.6, -478.35);
        var instance21 = new Graphics()
            .drawCommands(shapes.s01[92])
            .setTransform(-455.15, -505.5, 1, 1, 0.06);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[91])
            .setTransform(-588.15, -407.35, 1.216, 0.851);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[90])
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

    var Graphic50 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[23]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[98]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[35]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[31]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[101]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[39]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[34]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[100]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[38]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[33]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[101]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[39]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[34]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[99]);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[36]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[32]);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[27]);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[26]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[25]);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[98]);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[35]);
        var instance21 = new Graphics()
            .drawCommands(shapes.s01[31]);
        var instance27 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance26 = new Graphics()
            .drawCommands(shapes.s01[27]);
        var instance25 = new Graphics()
            .drawCommands(shapes.s01[26]);
        var instance24 = new Graphics()
            .drawCommands(shapes.s01[25]);
        var instance28 = new Graphics()
            .drawCommands(shapes.s01[188]);
        var instance32 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance31 = new Graphics()
            .drawCommands(shapes.s01[27]);
        var instance30 = new Graphics()
            .drawCommands(shapes.s01[26]);
        var instance29 = new Graphics()
            .drawCommands(shapes.s01[25]);
        var instance35 = new Graphics()
            .drawCommands(shapes.s01[101]);
        var instance34 = new Graphics()
            .drawCommands(shapes.s01[39]);
        var instance33 = new Graphics()
            .drawCommands(shapes.s01[34]);
        var instance38 = new Graphics()
            .drawCommands(shapes.s01[98]);
        var instance37 = new Graphics()
            .drawCommands(shapes.s01[35]);
        var instance36 = new Graphics()
            .drawCommands(shapes.s01[31]);
        var instance42 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance41 = new Graphics()
            .drawCommands(shapes.s01[27]);
        var instance40 = new Graphics()
            .drawCommands(shapes.s01[26]);
        var instance39 = new Graphics()
            .drawCommands(shapes.s01[25]);
        var instance45 = new Graphics()
            .drawCommands(shapes.s01[101]);
        var instance44 = new Graphics()
            .drawCommands(shapes.s01[39]);
        var instance43 = new Graphics()
            .drawCommands(shapes.s01[34]);
        var instance48 = new Graphics()
            .drawCommands(shapes.s01[100]);
        var instance47 = new Graphics()
            .drawCommands(shapes.s01[38]);
        var instance46 = new Graphics()
            .drawCommands(shapes.s01[33]);
        var instance52 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance51 = new Graphics()
            .drawCommands(shapes.s01[27]);
        var instance50 = new Graphics()
            .drawCommands(shapes.s01[26]);
        var instance49 = new Graphics()
            .drawCommands(shapes.s01[25]);
        var instance55 = new Graphics()
            .drawCommands(shapes.s01[101]);
        var instance54 = new Graphics()
            .drawCommands(shapes.s01[39]);
        var instance53 = new Graphics()
            .drawCommands(shapes.s01[34]);
        var instance59 = new Graphics()
            .drawCommands(shapes.s01[190]);
        var instance58 = new Graphics()
            .drawCommands(shapes.s01[40]);
        var instance57 = new Graphics()
            .drawCommands(shapes.s01[37]);
        var instance56 = new Graphics()
            .drawCommands(shapes.s01[189]);
        var instance60 = new Graphics()
            .drawCommands(shapes.s01[23]);
        var instance61 = new Graphics()
            .drawCommands(shapes.s01[96]);
        var instance62 = new Graphics()
            .drawCommands(shapes.s01[97]);
        var instance63 = new Graphics()
            .drawCommands(shapes.s01[96]);
        var instance66 = new Graphics()
            .drawCommands(shapes.s01[98]);
        var instance65 = new Graphics()
            .drawCommands(shapes.s01[35]);
        var instance64 = new Graphics()
            .drawCommands(shapes.s01[31]);
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

    var Graphic52 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance1 = new Graphic50(MovieClip.SYNCHED);
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

    var Graphic53 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[191]);
        this.addTimedChild(instance1);
    });

    var Graphic57 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance12 = new lib.DEDE_PONYTAIL_COLOUR_SECTION_01();
        var instance11 = new lib.DEDE_PONYTAIL_COLOUR_SECTION_02();
        var instance10 = new lib.DEDE_PONYTAIL_END();
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[107]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[242]);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[243]);
        var instance8 = new lib.DEDE_EAR_R()
            .setTransform(-85.25, -120.15);
        var instance7 = new Graphic53(MovieClip.SYNCHED)
            .setTransform(4.15, -0.3);
        var instance6 = new Graphic52(MovieClip.SYNCHED)
            .setTransform(-18.05, -75.4);
        var instance5 = new Graphic51(MovieClip.SYNCHED);
        var instance14 = new lib.DEDE_PUPIL();
        var instance13 = new lib.DEDE_PUPIL();
        var instance28 = new lib.DEDE_PUPIL();
        var instance27 = new lib.DEDE_PUPIL();
        var instance4 = new lib.DEDE_BROW_L();
        var instance3 = new lib.DEDE_BROW_R();
        var instance2 = new lib.DEDE_NOSE()
            .setTransform(-24.25, -100.3);
        var instance1 = new lib.DEDE_EAR_L();
        var instance16 = new Graphic54(MovieClip.SYNCHED);
        var instance15 = new lib.DEDE_PONYTAIL_COLOUR_SECTION_02();
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[233]);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[234]);
        var instance21 = new Graphics()
            .drawCommands(shapes.s01[235]);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[236]);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[237]);
        var instance24 = new Graphics()
            .drawCommands(shapes.s01[238]);
        var instance25 = new Graphics()
            .drawCommands(shapes.s01[239]);
        var instance26 = new Graphics()
            .drawCommands(shapes.s01[240]);
        var instance29 = new Graphics()
            .drawCommands(shapes.s01[241]);
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
                    y: -147.098
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
                    x: -35.049,
                    y: -151.745
                },
                "7": {
                    y: -151.245
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
                    x: -36.549,
                    y: -145.846
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

    var Graphic55 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[114]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[192]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[113]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[112]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[111]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[244]);
        this.addTimedChild(instance4, 0, 20, {
                "0": {
                    x: -17.65,
                    y: 14.8,
                    sx: 0.95
                }
            })
            .addTimedChild(instance5, 20, 2)
            .addTimedChild(instance3, 0, 22, {
                "0": {
                    x: -470,
                    y: -630.85,
                    sx: 0.95
                }
            })
            .addTimedChild(instance2, 0, 22, {
                "0": {
                    x: -470,
                    y: -630.85,
                    sx: 0.95
                }
            })
            .addTimedChild(instance1, 0, 22, {
                "0": {
                    x: -470,
                    y: -630.85,
                    sx: 0.95
                }
            })
            .addTimedChild(instance6, 22, 28);
    });

    var Graphic56 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[117]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[193]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[116]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[115]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[245]);
        this.addTimedChild(instance3, 0, 20, {
                "0": {
                    x: 14.05,
                    y: 13.35,
                    sx: 0.95
                }
            })
            .addTimedChild(instance4, 20, 2)
            .addTimedChild(instance2, 0, 22, {
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
            .addTimedChild(instance1, 0, 22, {
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
            .addTimedChild(instance5, 22, 28);
    });

    var Graphic58 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[118]);
        var instance2 = new Graphic56(MovieClip.SYNCHED);
        var instance1 = new Graphic55(MovieClip.SYNCHED);
        this.addTimedChild(instance3)
            .addTimedChild(instance2, 0, 50, {
                "0": {
                    x: -9.2,
                    y: -101.15,
                    sx: 1,
                    kx: 0,
                    ky: 0
                },
                "19": {
                    x: -17.6,
                    y: -99.35,
                    sx: 1.005,
                    ky: -0.1
                },
                "20": {
                    x: -24.6,
                    y: -101.15,
                    sx: 1,
                    ky: 3.142
                },
                "22": {
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
                    sx: 1,
                    ky: 0,
                    r: 0
                },
                "19": {
                    x: 14.15,
                    y: -101.4,
                    sx: 1.005,
                    ky: -0.097
                },
                "20": {
                    x: 7.15,
                    y: -100.2,
                    sx: 1,
                    ky: 0
                },
                "22": {
                    x: -14.15,
                    y: -99.75,
                    r: -0.069
                }
            });
    });

    var Graphic59 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[123]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[122]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[121]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[120]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[246])
            .setTransform(-39.65, 0.95);
        this.addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2, 0, 27)
            .addTimedChild(instance1, 0, 27)
            .addTimedChild(instance5, 27, 23);
    });

    var Graphic60 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 22, loop: false });
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[213]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[200])
            .setTransform(3.1, -2.15, 1, 1, 0.134);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[199])
            .setTransform(10.35, 30.05, 1.12, 1.056, 0, 0.246, 2.895);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[198])
            .setTransform(9.55, 31.8, 1, 1, 0, 0.494, 2.648);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[197])
            .setTransform(9.3, 31.9, 1, 1, 0, 0.741, 2.401);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[196])
            .setTransform(16.15, 34.3, 1, 1, 0, 0.828, 2.314);
        this.addTimedChild(instance6)
            .addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic68 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 11, loop: false });
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[255])
            .setTransform(10.35, 32.6);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[72])
            .setTransform(10.35, 32.6);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[71])
            .setTransform(10.35, 32.6);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[70])
            .setTransform(10.35, 32.6);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[69])
            .setTransform(10.25, 32.6);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[68])
            .setTransform(-613.95, -790.65);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[67])
            .setTransform(-613.95, -790.65);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[66])
            .setTransform(-613.95, -790.65);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[65])
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

    var Graphic69 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 11, loop: false });
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[259])
            .setTransform(14.05, -0.4);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[259]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[256]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[258]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[257]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[256]);
        this.addTimedChild(instance6)
            .addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic61 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 29, loop: false });
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[213]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[200])
            .setTransform(3.1, -2.15, 1, 1, 0.134);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[199])
            .setTransform(10.35, 30.05, 1.12, 1.056, 0, 0.246, 2.895);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[198])
            .setTransform(9.55, 31.8, 1, 1, 0, 0.494, 2.648);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[197])
            .setTransform(9.3, 31.9, 1, 1, 0, 0.741, 2.401);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[196])
            .setTransform(16.15, 34.3, 1, 1, 0, 0.828, 2.314);
        this.addTimedChild(instance6)
            .addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic230 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[294]);
        var instance24 = new Graphics()
            .drawCommands(shapes.s01[295]);
        var instance28 = new Graphics()
            .drawCommands(shapes.s01[296]);
        var instance32 = new Graphics()
            .drawCommands(shapes.s01[297]);
        var instance37 = new Graphics()
            .drawCommands(shapes.s01[298]);
        var instance40 = new Graphics()
            .drawCommands(shapes.s01[299]);
        var instance43 = new Graphics()
            .drawCommands(shapes.s01[300]);
        var instance46 = new Graphics()
            .drawCommands(shapes.s01[301]);
        var instance49 = new Graphics()
            .drawCommands(shapes.s01[302]);
        var instance52 = new Graphics()
            .drawCommands(shapes.s01[303]);
        var instance59 = new Graphics()
            .drawCommands(shapes.s01[304]);
        var instance62 = new Graphics()
            .drawCommands(shapes.s01[305]);
        var instance65 = new Graphics()
            .drawCommands(shapes.s01[306]);
        var instance69 = new Graphics()
            .drawCommands(shapes.s01[307]);
        var instance73 = new Graphics()
            .drawCommands(shapes.s01[308]);
        var instance77 = new Graphics()
            .drawCommands(shapes.s01[309]);
        var instance84 = new Graphics()
            .drawCommands(shapes.s01[310]);
        var instance88 = new Graphics()
            .drawCommands(shapes.s01[311]);
        var instance91 = new Graphics()
            .drawCommands(shapes.s01[312]);
        var instance93 = new Graphics()
            .drawCommands(shapes.s01[313]);
        var instance19 = new lib.DEDE_SHOE();
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[274]);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[275]);
        var instance27 = new Graphics()
            .drawCommands(shapes.s01[276]);
        var instance31 = new Graphics()
            .drawCommands(shapes.s01[277]);
        var instance36 = new Graphics()
            .drawCommands(shapes.s01[278]);
        var instance39 = new Graphics()
            .drawCommands(shapes.s01[279]);
        var instance42 = new Graphics()
            .drawCommands(shapes.s01[280]);
        var instance45 = new Graphics()
            .drawCommands(shapes.s01[281]);
        var instance48 = new Graphics()
            .drawCommands(shapes.s01[282]);
        var instance51 = new Graphics()
            .drawCommands(shapes.s01[283]);
        var instance58 = new Graphics()
            .drawCommands(shapes.s01[284]);
        var instance61 = new Graphics()
            .drawCommands(shapes.s01[285]);
        var instance64 = new Graphics()
            .drawCommands(shapes.s01[286]);
        var instance68 = new Graphics()
            .drawCommands(shapes.s01[287]);
        var instance72 = new Graphics()
            .drawCommands(shapes.s01[288]);
        var instance76 = new Graphics()
            .drawCommands(shapes.s01[289]);
        var instance83 = new Graphics()
            .drawCommands(shapes.s01[290]);
        var instance87 = new Graphics()
            .drawCommands(shapes.s01[291]);
        var instance90 = new Graphics()
            .drawCommands(shapes.s01[292]);
        var instance92 = new Graphics()
            .drawCommands(shapes.s01[293]);
        var instance17 = new lib.DEDE_SHOE();
        var instance8 = new Graphic61(MovieClip.SYNCHED);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[260]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[261]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[262]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[263]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[264]);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[265]);
        var instance26 = new Graphics()
            .drawCommands(shapes.s01[264]);
        var instance30 = new Graphics()
            .drawCommands(shapes.s01[266]);
        var instance6 = new Graphic60(MovieClip.SYNCHED);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[247]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[248]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[249]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[250]);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[251]);
        var instance21 = new Graphics()
            .drawCommands(shapes.s01[252]);
        var instance25 = new Graphics()
            .drawCommands(shapes.s01[253]);
        var instance29 = new Graphics()
            .drawCommands(shapes.s01[254]);
        var instance35 = new Graphics()
            .drawCommands(shapes.s01[267]);
        var instance38 = new Graphics()
            .drawCommands(shapes.s01[268]);
        var instance41 = new Graphics()
            .drawCommands(shapes.s01[264]);
        var instance44 = new Graphics()
            .drawCommands(shapes.s01[269]);
        var instance47 = new Graphics()
            .drawCommands(shapes.s01[270]);
        var instance50 = new Graphics()
            .drawCommands(shapes.s01[264]);
        var instance82 = new Graphics()
            .drawCommands(shapes.s01[271]);
        var instance86 = new Graphics()
            .drawCommands(shapes.s01[272]);
        var instance89 = new Graphics()
            .drawCommands(shapes.s01[273]);
        var instance81 = new Graphic69(MovieClip.SYNCHED);
        var instance80 = new Graphic68(MovieClip.SYNCHED);
        var instance4 = new Graphic59(MovieClip.SYNCHED);
        var instance3 = new lib.DEDE_NECK();
        var instance2 = new Graphic58(MovieClip.SYNCHED);
        var instance1 = new Graphic57(MovieClip.SYNCHED);
        var instance34 = new Graphic62(MovieClip.SYNCHED);
        var instance33 = new Graphics()
            .drawCommands(shapes.s01[226]);
        var instance60 = new Graphics()
            .drawCommands(shapes.s01[227]);
        var instance67 = new Graphics()
            .drawCommands(shapes.s01[228]);
        var instance71 = new Graphics()
            .drawCommands(shapes.s01[229]);
        var instance75 = new Graphics()
            .drawCommands(shapes.s01[230]);
        var instance79 = new Graphic67(MovieClip.SYNCHED);
        var instance78 = new Graphics()
            .drawCommands(shapes.s01[231]);
        var instance85 = new Graphics()
            .drawCommands(shapes.s01[232]);
        var instance57 = new Graphic66(MovieClip.SYNCHED);
        var instance56 = new Graphic65(MovieClip.SYNCHED);
        var instance55 = new Graphic64(MovieClip.SYNCHED);
        var instance54 = new Graphics()
            .drawCommands(shapes.s01[216]);
        var instance63 = new Graphics()
            .drawCommands(shapes.s01[217]);
        var instance66 = new Graphics()
            .drawCommands(shapes.s01[218]);
        var instance70 = new Graphics()
            .drawCommands(shapes.s01[219]);
        var instance74 = new Graphics()
            .drawCommands(shapes.s01[220]);
        var instance53 = new Graphic63(MovieClip.SYNCHED);
        this.addTimedChild(instance20, 18, 1)
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
            .addTimedChild(instance19, 18, 32, {
                "18": {
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
            .addTimedChild(instance18, 18, 1)
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
            .addTimedChild(instance17, 18, 32, {
                "18": {
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
                    y: -371.55,
                    kx: 4.4,
                    ky: -1.259
                },
                "1": {
                    x: -183.55,
                    y: -408.9,
                    kx: 4.193,
                    ky: -1.052
                },
                "2": {
                    x: -181.95,
                    y: -435.3,
                    kx: 4.047,
                    ky: -0.906
                },
                "3": {
                    x: -181,
                    y: -451.05,
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
                    y: -177.55,
                    r: -0.204
                }
            })
            .addTimedChild(instance10, 1, 1)
            .addTimedChild(instance12, 2, 1)
            .addTimedChild(instance14, 3, 1)
            .addTimedChild(instance16, 4, 15, {
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
                    y: -384.9,
                    r: -2.047
                },
                "1": {
                    x: 208.6,
                    y: -427.05,
                    r: -2.216
                },
                "2": {
                    x: 196.85,
                    y: -456.8,
                    r: -2.335
                },
                "3": {
                    x: 189.8,
                    y: -474.6,
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
                    y: -184.3,
                    r: -0.143
                }
            })
            .addTimedChild(instance9, 1, 1)
            .addTimedChild(instance11, 2, 1)
            .addTimedChild(instance13, 3, 1)
            .addTimedChild(instance15, 4, 15)
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
                    y: -301.15,
                    sx: 1,
                    sy: 1,
                    kx: 0,
                    ky: 0,
                    r: 0
                },
                "1": {
                    y: -305.8
                },
                "2": {
                    y: -309.1
                },
                "3": {
                    y: -311.1
                },
                "4": {
                    y: -311.75
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
                    y: -387.85,
                    r: -0.004
                },
                "1": {
                    x: 20.45,
                    y: -394.5,
                    r: 0.002
                },
                "2": {
                    x: 21.3,
                    y: -399.15,
                    r: 0.006
                },
                "3": {
                    x: 21.8,
                    y: -401.85,
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
                    y: -296.3,
                    sx: 1,
                    sy: 1,
                    r: -0.013
                },
                "1": {
                    x: 19.05,
                    y: -302.8,
                    r: -0.007
                },
                "2": {
                    x: 19.5,
                    y: -307.4,
                    r: -0.003
                },
                "3": {
                    x: 19.8,
                    y: -310.15,
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
                    x: 23.55,
                    y: -380.35,
                    kx: 0.047,
                    ky: 3.095,
                    r: 0
                },
                "1": {
                    x: 24.45,
                    y: -404.75,
                    kx: 0.076,
                    ky: 3.066
                },
                "2": {
                    x: 25.15,
                    y: -422.05,
                    kx: 0.096,
                    ky: 3.045
                },
                "3": {
                    x: 25.45,
                    y: -432.4,
                    kx: 0.108,
                    ky: 3.033
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

    var Graphic231 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 24, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[15]);
        this.addTimedChild(instance1);
    });

    var Graphic232 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 26, loop: false });
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

    var Graphic82 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 22, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[215]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[214]);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic83 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 22, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[109])
            .setTransform(-657.05, -461.95);
        this.addTimedChild(instance1);
    });

    var Graphic84 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 22, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[108]);
        this.addTimedChild(instance1);
    });

    var Graphic85 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 22, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[222]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[223]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[224]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[225]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[221]);
        this.addTimedChild(instance2, 0, 2)
            .addTimedChild(instance3, 2, 1)
            .addTimedChild(instance4, 3, 1)
            .addTimedChild(instance5, 4, 18)
            .addTimedChild(instance1);
    });

    var Graphic77 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 5, loop: false });
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[201])
            .setTransform(-0.6, 2.45, 1, 1, 0, 0.484, 2.657);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[200])
            .setTransform(-4.3, 1.95, 1, 1, 0, 0.618, 2.523);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[199])
            .setTransform(4.25, 33.75, 1.12, 1.056, -0.238);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[198])
            .setTransform(5.75, 34.95, 1, 1, 0.01);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[197])
            .setTransform(6.05, 34.9, 1, 1, 0.257);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[196])
            .setTransform(1.05, 40.25, 1, 1, 0.344);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[195])
            .setTransform(34.1, -985.65, 1, 1, 0.684);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[68])
            .setTransform(-464.95, -886.85, 1, 1, 0.178);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[67])
            .setTransform(-538.25, -842.15, 1, 1, 0.091);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[66])
            .setTransform(-668.55, -792.3, 1.087);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[194])
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

    var Graphic86 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 11, loop: false });
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[81]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[80]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[79]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[78]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[77]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[76]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[75])
            .setTransform(-0.25, -0.5);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[74]);
        this.addTimedChild(instance8)
            .addTimedChild(instance7)
            .addTimedChild(instance6)
            .addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic71 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 26, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[108]);
        this.addTimedChild(instance1);
    });

    var Graphic72 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 26, loop: false });
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[95]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[94]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[93]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[92]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[91]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[90]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[187]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[186]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[185]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[184]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[183]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[182]);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[95])
            .setTransform(-386.35, -557.05, 1, 1, 0.174);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[94])
            .setTransform(-385.25, -559.2, 1, 1, 0.174);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[93])
            .setTransform(-486.6, -478.35);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[92])
            .setTransform(-455.15, -505.5, 1, 1, 0.06);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[91])
            .setTransform(-588.15, -407.35, 1.216, 0.851);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[90])
            .setTransform(-596.45, -406.55, 1.239, 0.851);
        this.addTimedChild(instance6, 0, 3, {
                "0": {
                    x: -386.35,
                    y: -557.05,
                    r: 0.174
                }
            })
            .addTimedChild(instance5, 0, 3, {
                "0": {
                    x: -385.25,
                    y: -559.2,
                    r: 0.174
                }
            })
            .addTimedChild(instance4, 0, 3, {
                "0": {
                    x: -486.6,
                    y: -478.35
                }
            })
            .addTimedChild(instance3, 0, 3, {
                "0": {
                    x: -455.15,
                    y: -505.5,
                    r: 0.06
                }
            })
            .addTimedChild(instance2, 0, 3, {
                "0": {
                    x: -588.15,
                    y: -407.35,
                    sx: 1.216,
                    sy: 0.851
                }
            })
            .addTimedChild(instance1, 0, 3, {
                "0": {
                    x: -596.45,
                    y: -406.55,
                    sx: 1.239,
                    sy: 0.851
                }
            })
            .addTimedChild(instance12, 3, 12, {
                "3": {
                    x: -2.45,
                    y: 1.7,
                    sx: 1.289,
                    sy: 0.827
                }
            })
            .addTimedChild(instance11, 3, 12, {
                "3": {
                    x: -0.05,
                    y: 1.8,
                    sx: 1.289,
                    sy: 0.827
                }
            })
            .addTimedChild(instance10, 3, 12, {
                "3": {
                    x: 6.85,
                    y: 1.9,
                    sx: 0.95,
                    sy: 0.95
                }
            })
            .addTimedChild(instance9, 3, 12, {
                "3": {
                    x: 1.1,
                    sx: 0.95,
                    sy: 0.95
                }
            })
            .addTimedChild(instance8, 3, 12, {
                "3": {
                    x: -9.25,
                    y: -1.15,
                    sx: 0.95,
                    sy: 0.95
                }
            })
            .addTimedChild(instance7, 3, 12, {
                "3": {
                    x: -0.25,
                    y: -0.15,
                    sx: 0.95,
                    sy: 0.95
                }
            })
            .addTimedChild(instance18, 15, 11)
            .addTimedChild(instance17, 15, 11)
            .addTimedChild(instance16, 15, 11)
            .addTimedChild(instance15, 15, 11)
            .addTimedChild(instance14, 15, 11)
            .addTimedChild(instance13, 15, 11);
    });

    var Graphic70 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 26, loop: false });
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[99]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[36]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[32]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[27]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[26]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[25]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[98]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[35]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[31]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[27]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[26]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[25]);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[188]);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[27]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[26]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[25]);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[101]);
        var instance21 = new Graphics()
            .drawCommands(shapes.s01[39]);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[34]);
        var instance25 = new Graphics()
            .drawCommands(shapes.s01[98]);
        var instance24 = new Graphics()
            .drawCommands(shapes.s01[35]);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[31]);
        var instance29 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance28 = new Graphics()
            .drawCommands(shapes.s01[27]);
        var instance27 = new Graphics()
            .drawCommands(shapes.s01[26]);
        var instance26 = new Graphics()
            .drawCommands(shapes.s01[25]);
        var instance32 = new Graphics()
            .drawCommands(shapes.s01[101]);
        var instance31 = new Graphics()
            .drawCommands(shapes.s01[39]);
        var instance30 = new Graphics()
            .drawCommands(shapes.s01[34]);
        var instance35 = new Graphics()
            .drawCommands(shapes.s01[100]);
        var instance34 = new Graphics()
            .drawCommands(shapes.s01[38]);
        var instance33 = new Graphics()
            .drawCommands(shapes.s01[33]);
        var instance39 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance38 = new Graphics()
            .drawCommands(shapes.s01[27]);
        var instance37 = new Graphics()
            .drawCommands(shapes.s01[26]);
        var instance36 = new Graphics()
            .drawCommands(shapes.s01[25]);
        var instance42 = new Graphics()
            .drawCommands(shapes.s01[101]);
        var instance41 = new Graphics()
            .drawCommands(shapes.s01[39]);
        var instance40 = new Graphics()
            .drawCommands(shapes.s01[34]);
        var instance46 = new Graphics()
            .drawCommands(shapes.s01[190]);
        var instance45 = new Graphics()
            .drawCommands(shapes.s01[40]);
        var instance44 = new Graphics()
            .drawCommands(shapes.s01[37]);
        var instance43 = new Graphics()
            .drawCommands(shapes.s01[189]);
        var instance47 = new Graphics()
            .drawCommands(shapes.s01[23]);
        var instance48 = new Graphics()
            .drawCommands(shapes.s01[96]);
        var instance49 = new Graphics()
            .drawCommands(shapes.s01[97]);
        var instance50 = new Graphics()
            .drawCommands(shapes.s01[96]);
        var instance53 = new Graphics()
            .drawCommands(shapes.s01[98]);
        var instance52 = new Graphics()
            .drawCommands(shapes.s01[35]);
        var instance51 = new Graphics()
            .drawCommands(shapes.s01[31]);
        this.addTimedChild(instance3, 0, 1)
            .addTimedChild(instance2, 0, 1)
            .addTimedChild(instance1, 0, 1)
            .addTimedChild(instance7, 1, 5, {
                "1": {
                    x: -478.4,
                    y: 548.95,
                    kx: 3.142
                }
            })
            .addTimedChild(instance6, 1, 5, {
                "1": {
                    x: 1.25,
                    y: 20.6,
                    kx: 3.142
                }
            })
            .addTimedChild(instance5, 1, 5, {
                "1": {
                    x: 0.75,
                    y: 1
                }
            })
            .addTimedChild(instance4, 1, 5, {
                "1": {
                    x: -478.4,
                    y: 548.95,
                    kx: 3.142
                }
            })
            .addTimedChild(instance10, 6, 1)
            .addTimedChild(instance9, 6, 1)
            .addTimedChild(instance8, 6, 1)
            .addTimedChild(instance14, 7, 1, {
                "7": {
                    x: -478.4,
                    y: 548.95,
                    kx: 3.142
                }
            })
            .addTimedChild(instance13, 7, 1, {
                "7": {
                    x: 1.25,
                    y: 20.6,
                    kx: 3.142
                }
            })
            .addTimedChild(instance12, 7, 1, {
                "7": {
                    x: 0.75,
                    y: 1
                }
            })
            .addTimedChild(instance11, 7, 1, {
                "7": {
                    x: -478.4,
                    y: 548.95,
                    kx: 3.142
                }
            })
            .addTimedChild(instance15, 8, 1)
            .addTimedChild(instance19, 9, 1, {
                "9": {
                    x: -478.4,
                    y: 548.95,
                    kx: 3.142
                }
            })
            .addTimedChild(instance18, 9, 1, {
                "9": {
                    x: 1.25,
                    y: 20.6,
                    kx: 3.142
                }
            })
            .addTimedChild(instance17, 9, 1, {
                "9": {
                    x: 0.75,
                    y: 1
                }
            })
            .addTimedChild(instance16, 9, 1, {
                "9": {
                    x: -478.4,
                    y: 548.95,
                    kx: 3.142
                }
            })
            .addTimedChild(instance22, 10, 1)
            .addTimedChild(instance21, 10, 1)
            .addTimedChild(instance20, 10, 1)
            .addTimedChild(instance25, 11, 1)
            .addTimedChild(instance24, 11, 1)
            .addTimedChild(instance23, 11, 1)
            .addTimedChild(instance29, 12, 2, {
                "12": {
                    x: -478.4,
                    y: 548.95,
                    kx: 3.142
                }
            })
            .addTimedChild(instance28, 12, 2, {
                "12": {
                    x: 1.25,
                    y: 20.6,
                    kx: 3.142
                }
            })
            .addTimedChild(instance27, 12, 2, {
                "12": {
                    x: 0.75,
                    y: 1
                }
            })
            .addTimedChild(instance26, 12, 2, {
                "12": {
                    x: -478.4,
                    y: 548.95,
                    kx: 3.142
                }
            })
            .addTimedChild(instance32, 14, 1)
            .addTimedChild(instance31, 14, 1)
            .addTimedChild(instance30, 14, 1)
            .addTimedChild(instance35, 15, 1)
            .addTimedChild(instance34, 15, 1)
            .addTimedChild(instance33, 15, 1)
            .addTimedChild(instance39, 16, 1, {
                "16": {
                    x: -478.4,
                    y: 548.95,
                    kx: 3.142
                }
            })
            .addTimedChild(instance38, 16, 1, {
                "16": {
                    x: 1.25,
                    y: 20.6,
                    kx: 3.142
                }
            })
            .addTimedChild(instance37, 16, 1, {
                "16": {
                    x: 0.75,
                    y: 1
                }
            })
            .addTimedChild(instance36, 16, 1, {
                "16": {
                    x: -478.4,
                    y: 548.95,
                    kx: 3.142
                }
            })
            .addTimedChild(instance42, 17, 1)
            .addTimedChild(instance41, 17, 1)
            .addTimedChild(instance40, 17, 1)
            .addTimedChild(instance46, 18, 1)
            .addTimedChild(instance45, 18, 1)
            .addTimedChild(instance44, 18, 1)
            .addTimedChild(instance43, 18, 1)
            .addTimedChild(instance47, 19, 2, {
                "19": {
                    y: 3.5,
                    kx: 3.142
                }
            })
            .addTimedChild(instance48, 21, 1)
            .addTimedChild(instance49, 22, 2)
            .addTimedChild(instance50, 24, 1)
            .addTimedChild(instance53, 25, 1)
            .addTimedChild(instance52, 25, 1)
            .addTimedChild(instance51, 25, 1);
    });

    var Graphic73 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 26, loop: false });
        var instance1 = new Graphic70(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 26, {
            "0": {
                x: -7,
                y: -1.65,
                sx: 0.952,
                sy: 0.861
            },
            "1": {
                x: -6.45,
                y: -1.7,
                sx: 1,
                sy: 1
            },
            "19": {
                y: 1.3
            },
            "20": {
                y: 0.85,
                sx: 0.944,
                sy: 1.34
            },
            "21": {
                y: -1.7,
                sx: 1,
                sy: 1
            }
        });
    });

    var Graphic74 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 26, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[191]);
        this.addTimedChild(instance1);
    });

    var Graphic78 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 26, loop: false });
        var instance14 = new lib.DEDE_PONYTAIL_COLOUR_SECTION_01()
            .setTransform(17, -197.8);
        var instance13 = new lib.DEDE_EAR_R()
            .setTransform(-85.25, -120.15);
        var instance12 = new Graphic74(MovieClip.SYNCHED)
            .setTransform(4.15, -0.3);
        var instance11 = new Graphic73(MovieClip.SYNCHED)
            .setTransform(-18.05, -75.4);
        var instance10 = new Graphic72(MovieClip.SYNCHED);
        var instance9 = new lib.DEDE_PUPIL();
        var instance8 = new lib.DEDE_PUPIL();
        var instance22 = new lib.DEDE_PUPIL();
        var instance21 = new lib.DEDE_PUPIL();
        var instance7 = new lib.DEDE_BROW_L();
        var instance6 = new lib.DEDE_BROW_R();
        var instance5 = new lib.DEDE_NOSE()
            .setTransform(-24.25, -100.3);
        var instance4 = new lib.DEDE_EAR_L()
            .setTransform(86.85, -120.95);
        var instance3 = new Graphic71(MovieClip.SYNCHED);
        var instance2 = new lib.DEDE_PONYTAIL_COLOUR_SECTION_02();
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[234]);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[235]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[236]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[237]);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[238]);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[239]);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[240]);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[241]);
        this.addTimedChild(instance14)
            .addTimedChild(instance13)
            .addTimedChild(instance12)
            .addTimedChild(instance11)
            .addTimedChild(instance10, 0, 26, {
                "0": {
                    x: -22.5,
                    y: -127.5
                }
            })
            .addTimedChild(instance9, 0, 3, {
                "0": {
                    x: 2.9,
                    y: -133.55
                }
            })
            .addTimedChild(instance8, 0, 3, {
                "0": {
                    x: -37.55,
                    y: -132.7
                }
            })
            .addTimedChild(instance22, 15, 11, {
                "15": {
                    x: -12.4,
                    y: -122.45
                },
                "21": {
                    x: -11.95,
                    y: -124.05
                },
                "22": {
                    x: -10.8,
                    y: -128
                },
                "23": {
                    x: -10.35,
                    y: -129.6
                }
            })
            .addTimedChild(instance21, 15, 11, {
                "15": {
                    x: -52.85,
                    y: -121.6
                },
                "21": {
                    x: -52.4,
                    y: -123.2
                },
                "22": {
                    x: -51.25,
                    y: -127.15
                },
                "23": {
                    x: -50.8,
                    y: -128.75
                }
            })
            .addTimedChild(instance7, 0, 26, {
                "0": {
                    x: -2.55,
                    y: -148.4,
                    r: -0.262
                },
                "2": {
                    x: -2.6,
                    y: -147.7
                },
                "3": {
                    x: 0.55,
                    y: -140.3,
                    r: 0.039
                },
                "4": {
                    x: 0.6,
                    y: -139.7
                },
                "14": {
                    x: 0.55,
                    y: -140.25
                },
                "15": {
                    x: -3.5,
                    y: -144.3,
                    r: -0.214
                },
                "16": {
                    x: -3.65,
                    y: -145,
                    r: -0.262
                },
                "21": {
                    x: -3.6,
                    y: -145.648
                },
                "22": {
                    x: -3.5,
                    y: -147.098
                },
                "23": {
                    x: -3.45,
                    y: -147.6
                }
            })
            .addTimedChild(instance6, 0, 26, {
                "0": {
                    x: -35.45,
                    y: -148.6,
                    r: 0.487
                },
                "2": {
                    x: -35.5,
                    y: -147.9
                },
                "3": {
                    x: -41.7,
                    y: -138.45,
                    r: 0.034
                },
                "4": {
                    x: -41.65,
                    y: -137.85
                },
                "14": {
                    x: -41.7,
                    y: -138.4
                },
                "15": {
                    x: -36.6,
                    y: -144.65,
                    r: 0.444
                },
                "16": {
                    x: -36.55,
                    y: -145.2,
                    r: 0.487
                },
                "21": {
                    x: -36.549,
                    y: -145.846
                },
                "22": {
                    x: -36.399,
                    y: -147.296
                },
                "23": {
                    x: -36.35,
                    y: -147.8
                }
            })
            .addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3, 0, 26, {
                "0": {
                    x: 88.65,
                    y: -101.05,
                    r: 1.315
                },
                "6": {
                    x: 169.15,
                    y: -119.15,
                    r: 0.309
                },
                "7": {
                    x: 175.8,
                    y: -120.6,
                    r: -0.146
                },
                "8": {
                    x: 177.15,
                    y: -118,
                    r: -0.039
                },
                "9": {
                    r: 0
                }
            })
            .addTimedChild(instance2, 0, 26, {
                "0": {
                    x: 106.7,
                    y: -118.5,
                    r: 0.811
                },
                "6": {
                    x: 177.05,
                    y: -143.05,
                    r: 0.278
                },
                "7": {
                    x: 188.25,
                    y: -142.55,
                    r: 0.477
                },
                "8": {
                    x: 176.9,
                    y: -143.05,
                    r: 0
                }
            })
            .addTimedChild(instance1, 0, 6)
            .addTimedChild(instance15, 6, 1)
            .addTimedChild(instance16, 7, 1)
            .addTimedChild(instance17, 8, 1)
            .addTimedChild(instance18, 9, 5)
            .addTimedChild(instance19, 14, 1)
            .addTimedChild(instance20, 15, 1)
            .addTimedChild(instance23, 16, 10);
    });

    var Graphic75 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 26, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[244]);
        this.addTimedChild(instance1);
    });

    var Graphic76 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 26, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[245]);
        this.addTimedChild(instance1);
    });

    var Graphic79 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 26, loop: false });
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[118]);
        var instance2 = new Graphic76(MovieClip.SYNCHED)
            .setTransform(-45.9, -98.9, 1, 1, 0, -0.087, -3.055);
        var instance1 = new Graphic75(MovieClip.SYNCHED)
            .setTransform(-14.15, -99.75, 1, 1, -0.069);
        this.addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic80 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 26, loop: false });
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[123]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[122]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[121]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[120]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[246])
            .setTransform(-39.65, 0.95);
        this.addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2, 0, 3)
            .addTimedChild(instance1, 0, 3)
            .addTimedChild(instance5, 3, 23);
    });

    var Graphic87 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 11, loop: false });
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[255])
            .setTransform(10.35, 32.6);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[72])
            .setTransform(10.35, 32.6);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[71])
            .setTransform(10.35, 32.6);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[70])
            .setTransform(10.35, 32.6);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[69])
            .setTransform(10.25, 32.6);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[68])
            .setTransform(-613.95, -790.65);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[67])
            .setTransform(-613.95, -790.65);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[66])
            .setTransform(-613.95, -790.65);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[65])
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

    var Graphic88 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 11, loop: false });
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[259])
            .setTransform(14.05, -0.4);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[259]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[256]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[258]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[257]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[256]);
        this.addTimedChild(instance6)
            .addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic81 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 5, loop: false });
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[213]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[200])
            .setTransform(3.1, -2.15, 1, 1, 0.134);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[199])
            .setTransform(10.35, 30.05, 1.12, 1.056, 0, 0.246, 2.895);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[198])
            .setTransform(9.55, 31.8, 1, 1, 0, 0.494, 2.648);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[197])
            .setTransform(9.3, 31.9, 1, 1, 0, 0.741, 2.401);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[196])
            .setTransform(16.15, 34.3, 1, 1, 0, 0.828, 2.314);
        this.addTimedChild(instance6)
            .addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic233 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 26, loop: false });
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[300]);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[301]);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[302]);
        var instance21 = new Graphics()
            .drawCommands(shapes.s01[303]);
        var instance28 = new Graphics()
            .drawCommands(shapes.s01[304]);
        var instance31 = new Graphics()
            .drawCommands(shapes.s01[305]);
        var instance34 = new Graphics()
            .drawCommands(shapes.s01[306]);
        var instance38 = new Graphics()
            .drawCommands(shapes.s01[307]);
        var instance42 = new Graphics()
            .drawCommands(shapes.s01[308]);
        var instance46 = new Graphics()
            .drawCommands(shapes.s01[309]);
        var instance53 = new Graphics()
            .drawCommands(shapes.s01[310]);
        var instance57 = new Graphics()
            .drawCommands(shapes.s01[311]);
        var instance60 = new Graphics()
            .drawCommands(shapes.s01[312]);
        var instance62 = new Graphics()
            .drawCommands(shapes.s01[313]);
        var instance11 = new lib.DEDE_SHOE();
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[280]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[281]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[282]);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[283]);
        var instance27 = new Graphics()
            .drawCommands(shapes.s01[284]);
        var instance30 = new Graphics()
            .drawCommands(shapes.s01[285]);
        var instance33 = new Graphics()
            .drawCommands(shapes.s01[286]);
        var instance37 = new Graphics()
            .drawCommands(shapes.s01[287]);
        var instance41 = new Graphics()
            .drawCommands(shapes.s01[288]);
        var instance45 = new Graphics()
            .drawCommands(shapes.s01[289]);
        var instance52 = new Graphics()
            .drawCommands(shapes.s01[290]);
        var instance56 = new Graphics()
            .drawCommands(shapes.s01[291]);
        var instance59 = new Graphics()
            .drawCommands(shapes.s01[292]);
        var instance61 = new Graphics()
            .drawCommands(shapes.s01[293]);
        var instance9 = new lib.DEDE_SHOE();
        var instance8 = new Graphic81(MovieClip.SYNCHED);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[264]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[269]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[270]);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[264]);
        var instance51 = new Graphics()
            .drawCommands(shapes.s01[271]);
        var instance55 = new Graphics()
            .drawCommands(shapes.s01[272]);
        var instance58 = new Graphics()
            .drawCommands(shapes.s01[273]);
        var instance50 = new Graphic88(MovieClip.SYNCHED);
        var instance49 = new Graphic87(MovieClip.SYNCHED);
        var instance6 = new Graphic80(MovieClip.SYNCHED);
        var instance5 = new lib.DEDE_NECK();
        var instance4 = new Graphic79(MovieClip.SYNCHED);
        var instance3 = new Graphic78(MovieClip.SYNCHED);
        var instance2 = new Graphic77(MovieClip.SYNCHED);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[226]);
        var instance29 = new Graphics()
            .drawCommands(shapes.s01[227]);
        var instance36 = new Graphics()
            .drawCommands(shapes.s01[228]);
        var instance40 = new Graphics()
            .drawCommands(shapes.s01[229]);
        var instance44 = new Graphics()
            .drawCommands(shapes.s01[230]);
        var instance48 = new Graphic86(MovieClip.SYNCHED);
        var instance47 = new Graphics()
            .drawCommands(shapes.s01[231]);
        var instance54 = new Graphics()
            .drawCommands(shapes.s01[232]);
        var instance26 = new Graphic85(MovieClip.SYNCHED);
        var instance25 = new Graphic84(MovieClip.SYNCHED);
        var instance24 = new Graphic83(MovieClip.SYNCHED);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[216]);
        var instance32 = new Graphics()
            .drawCommands(shapes.s01[217]);
        var instance35 = new Graphics()
            .drawCommands(shapes.s01[218]);
        var instance39 = new Graphics()
            .drawCommands(shapes.s01[219]);
        var instance43 = new Graphics()
            .drawCommands(shapes.s01[220]);
        var instance22 = new Graphic82(MovieClip.SYNCHED);
        this.addTimedChild(instance12, 0, 1)
            .addTimedChild(instance15, 1, 1)
            .addTimedChild(instance18, 2, 1)
            .addTimedChild(instance21, 3, 1)
            .addTimedChild(instance28, 4, 1)
            .addTimedChild(instance31, 5, 1)
            .addTimedChild(instance34, 6, 1)
            .addTimedChild(instance38, 7, 1)
            .addTimedChild(instance42, 8, 6)
            .addTimedChild(instance46, 14, 1)
            .addTimedChild(instance53, 15, 1)
            .addTimedChild(instance57, 16, 1)
            .addTimedChild(instance60, 17, 1)
            .addTimedChild(instance62, 18, 8)
            .addTimedChild(instance11, 0, 26, {
                "0": {
                    x: -24.45,
                    y: -179,
                    kx: 0,
                    ky: 0,
                    r: 0.519
                },
                "1": {
                    x: 45.2,
                    y: -186.7,
                    r: 1.152
                },
                "2": {
                    x: 86.65,
                    y: -191.25,
                    r: 1.528
                },
                "3": {
                    x: 100.3,
                    y: -192.45,
                    kx: 4.63,
                    ky: 1.654,
                    r: 0
                },
                "4": {
                    x: 107.4,
                    y: -173.75,
                    kx: 4.513,
                    ky: 1.77
                },
                "5": {
                    x: 144.65,
                    y: -55.5,
                    kx: 0,
                    ky: 0,
                    r: 1.17
                },
                "6": {
                    y: -57.8
                },
                "7": {
                    x: 141.3,
                    y: -73.3,
                    r: 1.395
                },
                "8": {
                    x: 140.25,
                    y: -78.5,
                    r: 1.47
                },
                "15": {
                    x: 140.8,
                    y: -85.25,
                    r: 1.517
                }
            })
            .addTimedChild(instance10, 0, 1)
            .addTimedChild(instance14, 1, 1)
            .addTimedChild(instance17, 2, 1)
            .addTimedChild(instance20, 3, 1)
            .addTimedChild(instance27, 4, 1)
            .addTimedChild(instance30, 5, 1)
            .addTimedChild(instance33, 6, 1)
            .addTimedChild(instance37, 7, 1)
            .addTimedChild(instance41, 8, 6)
            .addTimedChild(instance45, 14, 1)
            .addTimedChild(instance52, 15, 1)
            .addTimedChild(instance56, 16, 1)
            .addTimedChild(instance59, 17, 1)
            .addTimedChild(instance61, 18, 8)
            .addTimedChild(instance9, 0, 26, {
                "0": {
                    x: 85.25,
                    y: -22.7,
                    kx: 0,
                    ky: 0,
                    r: 0.421
                },
                "1": {
                    x: 94.8,
                    y: -59.4,
                    r: 0.945
                },
                "2": {
                    x: 100.35,
                    y: -81.25,
                    r: 1.256
                },
                "3": {
                    x: 102.2,
                    y: -88.5,
                    r: 1.36
                },
                "4": {
                    x: 110.45,
                    y: -103.25,
                    kx: 4.358,
                    ky: 1.925,
                    r: 0
                },
                "5": {
                    x: 121.65,
                    y: 19.1,
                    kx: 0,
                    ky: 0,
                    r: 1.178
                },
                "6": {
                    y: 16.8
                },
                "7": {
                    x: 120.95,
                    y: 7.3,
                    r: 1.341
                },
                "8": {
                    x: 120.7,
                    y: 4.2,
                    r: 1.395
                },
                "15": {
                    x: 120.2,
                    y: 1.35,
                    r: 1.408
                }
            })
            .addTimedChild(instance8, 0, 5, {
                "0": {
                    x: 172.7,
                    y: -568.55,
                    kx: 3.641,
                    ky: -0.499
                },
                "1": {
                    x: 242.1,
                    y: -408.9,
                    kx: 3.651,
                    ky: -0.509
                },
                "2": {
                    x: 283.25,
                    y: -314.05,
                    kx: 3.657,
                    ky: -0.515
                },
                "3": {
                    x: 297.05,
                    y: -282.25,
                    kx: 3.659,
                    ky: -0.517
                },
                "4": {
                    x: 314.85,
                    y: -235,
                    kx: 3.56,
                    ky: -0.418
                }
            })
            .addTimedChild(instance7, 0, 1, {
                "0": {
                    x: 123.45,
                    y: -251.4,
                    r: 0.534
                }
            })
            .addTimedChild(instance13, 1, 1)
            .addTimedChild(instance16, 2, 1)
            .addTimedChild(instance19, 3, 2, {
                "3": {
                    x: 396,
                    y: 25.3,
                    r: 0.089
                },
                "4": {
                    x: 382.95,
                    y: 80.75,
                    r: 0.188
                }
            })
            .addTimedChild(instance51, 15, 1, {
                "15": {
                    x: 363.8,
                    y: -110,
                    r: -0.28
                }
            })
            .addTimedChild(instance55, 16, 1, {
                "16": {
                    x: 363.8,
                    y: -110,
                    r: -0.28
                }
            })
            .addTimedChild(instance58, 17, 9, {
                "17": {
                    x: 362.6,
                    y: -111.4,
                    r: -0.292
                },
                "18": {
                    x: 363.8,
                    y: -110,
                    r: -0.28
                }
            })
            .addTimedChild(instance50, 15, 11, {
                "15": {
                    x: 323.25,
                    y: -246.55,
                    sx: 0.455,
                    sy: 0.453,
                    r: 1.006
                },
                "16": {
                    x: 427.2,
                    y: -279.9,
                    r: 1.437
                },
                "17": {
                    x: 432.25,
                    y: -274.95,
                    r: 1.494
                },
                "18": {
                    x: 435.45,
                    y: -272.65,
                    r: 1.506
                }
            })
            .addTimedChild(instance49, 15, 11, {
                "15": {
                    x: 361.25,
                    y: -185.55,
                    kx: 3.758,
                    ky: 2.526
                },
                "16": {
                    x: 423.85,
                    y: -209.05,
                    kx: 3.186,
                    ky: 3.097
                },
                "17": {
                    x: 424.8,
                    y: -203.6,
                    kx: 3.16,
                    ky: 3.123
                },
                "18": {
                    x: 427.15,
                    y: -201.4,
                    kx: 3.147,
                    ky: 3.136
                }
            })
            .addTimedChild(instance6, 0, 26, {
                "0": {
                    x: 210.9,
                    y: -339.95,
                    sx: 1,
                    sy: 1,
                    kx: -0.861,
                    ky: 0.864,
                    r: 0
                },
                "1": {
                    x: 304.65,
                    y: -209.9,
                    sx: 0.991,
                    kx: -1.238,
                    ky: 1.239
                },
                "2": {
                    x: 360.25,
                    y: -132.7,
                    sx: 0.986,
                    kx: 0,
                    ky: 0,
                    r: 1.461
                },
                "3": {
                    x: 379.2,
                    y: -106.75,
                    sx: 0.985,
                    r: 1.536
                },
                "4": {
                    x: 379.25,
                    y: -52.25,
                    kx: 4.648,
                    ky: 1.635,
                    r: 0
                },
                "5": {
                    x: 382.95,
                    y: -40.3,
                    sx: 0.927,
                    sy: 1.033,
                    kx: 4.632,
                    ky: 1.609
                },
                "6": {
                    y: -42.6
                },
                "7": {
                    x: 383.7,
                    y: -39.75,
                    sx: 0.97,
                    sy: 1.008,
                    kx: 4.635,
                    ky: 1.638
                },
                "8": {
                    x: 383.95,
                    y: -39.05,
                    sx: 0.985,
                    sy: 1,
                    kx: 4.636,
                    ky: 1.648
                },
                "15": {
                    x: 384,
                    y: -38.6,
                    kx: 4.623,
                    ky: 1.66
                }
            })
            .addTimedChild(instance5, 0, 26, {
                "0": {
                    x: 277.6,
                    y: -393.75,
                    r: 0.755
                },
                "1": {
                    x: 380.8,
                    y: -247.95,
                    r: 0.941
                },
                "2": {
                    x: 442.1,
                    y: -161.35,
                    r: 1.051
                },
                "3": {
                    x: 462.7,
                    y: -131.9,
                    r: 1.088
                },
                "4": {
                    x: 464.85,
                    y: -69,
                    r: 1.187
                },
                "5": {
                    x: 474.5,
                    y: -50.7,
                    r: 1.39
                },
                "6": {
                    y: -53
                },
                "7": {
                    x: 473.4,
                    y: -54,
                    r: 1.332
                },
                "8": {
                    x: 473.05,
                    y: -54.4,
                    r: 1.313
                },
                "15": {
                    x: 472.7,
                    y: -55.45,
                    r: 1.248
                }
            })
            .addTimedChild(instance4, 0, 26, {
                "0": {
                    x: 208.65,
                    y: -335.45,
                    sx: 1,
                    sy: 1,
                    r: 0.864
                },
                "1": {
                    x: 300,
                    y: -208.3,
                    r: 1.195
                },
                "2": {
                    x: 354.1,
                    y: -132.85,
                    r: 1.392
                },
                "3": {
                    x: 372.25,
                    y: -107.45,
                    r: 1.458
                },
                "4": {
                    x: 372.4,
                    y: -53.6,
                    r: 1.557
                },
                "5": {
                    x: 379.55,
                    y: -39.35,
                    sx: 0.953,
                    sy: 1.003,
                    r: 1.569
                },
                "6": {
                    y: -41.65
                },
                "7": {
                    x: 377.7,
                    y: -40.75,
                    sx: 0.988,
                    sy: 1.001
                },
                "8": {
                    x: 377.1,
                    y: -40.5,
                    sx: 1,
                    sy: 1
                }
            })
            .addTimedChild(instance3, 0, 26, {
                "0": {
                    x: 301.8,
                    y: -419.95,
                    r: 0.498
                },
                "1": {
                    x: 404.15,
                    y: -274.75,
                    r: 0.808
                },
                "2": {
                    x: 464.85,
                    y: -188.55,
                    r: 0.991
                },
                "3": {
                    x: 485,
                    y: -159.6,
                    r: 1.053
                },
                "4": {
                    x: 489.8,
                    y: -94.4,
                    r: 1.152
                },
                "5": {
                    x: 497.25,
                    y: -76.5,
                    r: 1.49
                },
                "6": {
                    y: -78.8
                },
                "7": {
                    x: 495.4,
                    y: -79.7,
                    r: 1.393
                },
                "8": {
                    x: 494.9,
                    y: -79.9,
                    r: 1.36
                },
                "14": {
                    x: 491.05,
                    y: -78.9,
                    r: 1.309
                },
                "15": {
                    x: 488.8,
                    y: -73.9,
                    r: 1.263
                },
                "16": {
                    r: 1.256
                }
            })
            .addTimedChild(instance2, 0, 5, {
                "0": {
                    x: 225.3,
                    y: -552.6,
                    r: -2.347
                },
                "1": {
                    x: 322.95,
                    y: -400.5,
                    r: -2.339
                },
                "2": {
                    x: 391.85,
                    y: -317.5,
                    r: -2.268
                },
                "3": {
                    x: 351.5,
                    y: -258,
                    r: -2.53
                },
                "4": {
                    x: 296.6,
                    y: -155.4,
                    r: -2.936
                }
            })
            .addTimedChild(instance1, 0, 5, {
                "0": {
                    x: -538.45,
                    y: 171.3,
                    r: 0.948
                },
                "1": {
                    x: -445.95,
                    y: 317.8,
                    r: 0.956
                },
                "2": {
                    x: -426.65,
                    y: 343.65,
                    r: 1.027
                },
                "3": {
                    x: -267.8,
                    y: 592.9,
                    r: 0.765
                },
                "4": {
                    x: 63.95,
                    y: 870.7,
                    r: 0.359
                }
            })
            .addTimedChild(instance29, 5, 2, {
                "5": {
                    x: 188.85,
                    y: 940.05,
                    r: 0.223
                },
                "6": {
                    y: 937.75
                }
            })
            .addTimedChild(instance36, 7, 1)
            .addTimedChild(instance40, 8, 6, {
                "8": {
                    x: 188.85,
                    y: 938.3,
                    r: 0.223
                }
            })
            .addTimedChild(instance44, 14, 1, {
                "14": {
                    x: 188.85,
                    y: 938.3,
                    r: 0.223
                }
            })
            .addTimedChild(instance48, 15, 11, {
                "15": {
                    x: 313.65,
                    y: -250.85,
                    kx: 4.011,
                    ky: -0.869
                },
                "16": {
                    x: 428.3,
                    y: -287,
                    kx: 3.508,
                    ky: -0.366
                },
                "17": {
                    x: 433.75,
                    y: -281.95,
                    kx: 3.451,
                    ky: -0.309
                },
                "18": {
                    x: 437.05,
                    y: -279.65,
                    kx: 3.439,
                    ky: -0.297
                }
            })
            .addTimedChild(instance47, 15, 1, {
                "15": {
                    x: 94.9,
                    y: -21.4
                }
            })
            .addTimedChild(instance54, 16, 10, {
                "16": {
                    x: 92.5,
                    y: -31.95,
                    r: 0
                },
                "17": {
                    x: 94.8,
                    y: -19.5,
                    r: -0.012
                },
                "18": {
                    x: 94.9,
                    y: -21.4,
                    r: 0
                }
            })
            .addTimedChild(instance26, 4, 22, {
                "4": {
                    x: 49.05,
                    y: -223.05,
                    sx: 1.197,
                    sy: 1.197,
                    r: 0
                },
                "5": {
                    x: 55.25,
                    y: -236.5,
                    r: 0.021
                },
                "6": {
                    x: 53.2,
                    y: -231.9,
                    r: 0.014
                },
                "7": {
                    x: 51.1,
                    y: -227.4,
                    r: 0.007
                },
                "8": {
                    x: 49.05,
                    y: -223.05,
                    r: 0
                }
            })
            .addTimedChild(instance25, 4, 22, {
                "4": {
                    x: 618.1,
                    y: -54.5,
                    kx: 3.816,
                    ky: 2.467,
                    r: 0
                },
                "5": {
                    x: 605.1,
                    y: 3.65,
                    kx: 3.478,
                    ky: 2.805
                },
                "6": {
                    x: 629.65,
                    y: 80.1,
                    kx: 4.485,
                    ky: 1.798
                },
                "7": {
                    x: 645.2,
                    y: 71.9,
                    kx: 0,
                    ky: 0,
                    r: 1.246
                },
                "8": {
                    x: 647.25,
                    y: 68.65,
                    r: 1.321
                },
                "9": {
                    r: 1.36
                },
                "14": {
                    x: 650.85,
                    y: 61.6,
                    r: 1.309
                },
                "15": {
                    x: 654.8,
                    y: 59.2,
                    r: 1.263
                },
                "16": {
                    x: 655.85,
                    y: 57.9,
                    r: 1.256
                }
            })
            .addTimedChild(instance24, 4, 22, {
                "4": {
                    x: 641.4,
                    y: -45.1,
                    kx: 4.321,
                    ky: 1.962,
                    r: 0
                },
                "5": {
                    x: 623.95,
                    y: 20.2,
                    kx: 3.983,
                    ky: 2.3
                },
                "6": {
                    x: 654.15,
                    y: 86.05,
                    kx: 4.516,
                    ky: 1.767
                },
                "7": {
                    x: 669,
                    y: 80.25,
                    kx: 4.413,
                    ky: 1.87
                },
                "8": {
                    x: 671.7,
                    y: 63.2,
                    kx: 0,
                    ky: 0,
                    r: 1.36
                },
                "14": {
                    x: 675,
                    y: 54.9,
                    r: 1.309
                },
                "15": {
                    x: 678.6,
                    y: 51.4,
                    r: 1.263
                },
                "16": {
                    x: 679.6,
                    y: 49.9,
                    r: 1.256
                }
            })
            .addTimedChild(instance23, 4, 2, {
                "4": {
                    x: 453.8,
                    y: -180.15,
                    r: 1.152
                },
                "5": {
                    x: 491.75,
                    y: -169.3,
                    r: 1.49
                }
            })
            .addTimedChild(instance32, 6, 1, {
                "6": {
                    x: 491.75,
                    y: -171.6,
                    r: 1.49
                }
            })
            .addTimedChild(instance35, 7, 1, {
                "7": {
                    x: 480.9,
                    y: -171.55,
                    r: 1.393
                }
            })
            .addTimedChild(instance39, 8, 1, {
                "8": {
                    x: 477.45,
                    y: -171.25,
                    r: 1.36
                }
            })
            .addTimedChild(instance43, 9, 17, {
                "9": {
                    x: 477.45,
                    y: -171.25,
                    r: 1.36
                },
                "14": {
                    x: 468.95,
                    y: -169.2,
                    r: 1.309
                },
                "15": {
                    x: 462.6,
                    y: -163.1,
                    r: 1.263
                },
                "16": {
                    x: 461.9,
                    y: -162.9,
                    r: 1.256
                }
            })
            .addTimedChild(instance22, 4, 22, {
                "4": {
                    x: 49.05,
                    y: -223.05,
                    sx: 1.197,
                    sy: 1.197,
                    r: 0
                },
                "5": {
                    x: 39.25,
                    y: -219.8,
                    r: -0.03
                },
                "6": {
                    x: 42.5,
                    y: -220.85,
                    r: -0.02
                },
                "7": {
                    x: 45.65,
                    y: -221.95,
                    r: -0.01
                },
                "8": {
                    x: 49.05,
                    y: -223.05,
                    r: 0
                }
            });
    });

    var Graphic111 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 60, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[314]);
        this.addTimedChild(instance1);
    });

    var Graphic112 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 60, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[314]);
        this.addTimedChild(instance1);
    });

    var Graphic89 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 60, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[315])
            .setTransform(-1433.5, -449.85);
        this.addTimedChild(instance1);
    });

    var Graphic92 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 60, loop: false });
        var instance1 = new Graphic89(MovieClip.SYNCHED)
            .setTransform(-3);
        this.addTimedChild(instance1);
    });

    var Graphic93 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 60, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[316])
            .setTransform(-1438, -429.8);
        this.addTimedChild(instance1);
    });

    var Graphic94 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 60, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[317])
            .setTransform(-1462.95, -379.25);
        this.addTimedChild(instance1);
    });

    var Graphic95 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 60, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[318]);
        this.addTimedChild(instance1);
    });

    var Graphic96 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 60, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[319]);
        this.addTimedChild(instance1);
    });

    var Graphic97 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 60, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[319]);
        this.addTimedChild(instance1);
    });

    var Graphic98 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 60, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[321])
            .setTransform(-1442.85, -399.9);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[320])
            .setTransform(-1442.85, -399.9);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic90 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 60, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[323]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[322]);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic91 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 60, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[326])
            .setTransform(-1452.05, -513.3);
        this.addTimedChild(instance1);
    });

    var Graphic99 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 60, loop: false });
        var instance4 = new Graphic91(MovieClip.SYNCHED);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[325]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[324]);
        var instance1 = new Graphic90(MovieClip.SYNCHED)
            .setTransform(2.25, -140.45);
        this.addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic113 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 60, loop: false });
        var instance8 = new Graphic99(MovieClip.SYNCHED)
            .setTransform(1.55, -0.35);
        var instance7 = new Graphic98(MovieClip.SYNCHED)
            .setTransform(-7.65, -113.75);
        var instance6 = new Graphic97(MovieClip.SYNCHED)
            .setTransform(-21.25, -114.85);
        var instance5 = new Graphic96(MovieClip.SYNCHED)
            .setTransform(4.85, -114.6);
        var instance4 = new Graphic95(MovieClip.SYNCHED)
            .setTransform(-24.25, -133.75);
        var instance3 = new Graphic94(MovieClip.SYNCHED)
            .setTransform(12.45, -134.4);
        var instance2 = new Graphic93(MovieClip.SYNCHED)
            .setTransform(-12.5, -83.85);
        var instance1 = new Graphic92(MovieClip.SYNCHED)
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

    var Graphic114 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 52, loop: false });
        var instance1 = new Sprite(fromFrame("REPLACE_EMOJI_SAD"))
            .setTransform(0, 0, 0.5, 0.5);
        this.addTimedChild(instance1);
    });

    var Graphic115 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 52, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[329])
            .setTransform(-640.5, -212.85);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[328])
            .setTransform(-640.5, -212.85);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic118 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 18, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[331]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[330]);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic116 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 11, loop: false });
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[337]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[336]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[332]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[333]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[334]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[335]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[332]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[333]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[334]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[335]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[332]);
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

    var Graphic119 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 18, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[338]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[336]);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic100 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 29, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[315])
            .setTransform(-1433.5, -449.85);
        this.addTimedChild(instance1);
    });

    var Graphic103 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 29, loop: false });
        var instance1 = new Graphic100(MovieClip.SYNCHED)
            .setTransform(-3);
        this.addTimedChild(instance1);
    });

    var Graphic104 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 29, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[316])
            .setTransform(-1438, -429.8);
        this.addTimedChild(instance1);
    });

    var Graphic105 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 29, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[317])
            .setTransform(-1462.95, -379.25);
        this.addTimedChild(instance1);
    });

    var Graphic106 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 29, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[318]);
        this.addTimedChild(instance1);
    });

    var Graphic107 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 29, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[319]);
        this.addTimedChild(instance1);
    });

    var Graphic108 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 29, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[319]);
        this.addTimedChild(instance1);
    });

    var Graphic109 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 29, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[321])
            .setTransform(-1442.85, -399.9);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[320])
            .setTransform(-1442.85, -399.9);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic101 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 29, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[323]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[322]);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic102 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 29, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[326])
            .setTransform(-1452.05, -513.3);
        this.addTimedChild(instance1);
    });

    var Graphic110 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 29, loop: false });
        var instance4 = new Graphic102(MovieClip.SYNCHED);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[325]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[324]);
        var instance1 = new Graphic101(MovieClip.SYNCHED)
            .setTransform(2.25, -140.45);
        this.addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic117 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 29, loop: false });
        var instance8 = new Graphic110(MovieClip.SYNCHED)
            .setTransform(1.55, -0.35);
        var instance7 = new Graphic109(MovieClip.SYNCHED)
            .setTransform(-7.65, -113.75);
        var instance6 = new Graphic108(MovieClip.SYNCHED)
            .setTransform(-21.25, -114.85);
        var instance5 = new Graphic107(MovieClip.SYNCHED)
            .setTransform(4.85, -114.6);
        var instance4 = new Graphic106(MovieClip.SYNCHED)
            .setTransform(-24.25, -133.75);
        var instance3 = new Graphic105(MovieClip.SYNCHED)
            .setTransform(12.45, -134.4);
        var instance2 = new Graphic104(MovieClip.SYNCHED)
            .setTransform(-12.5, -83.85);
        var instance1 = new Graphic103(MovieClip.SYNCHED)
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

    var Graphic234 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 60, loop: false });
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[339]);
        var instance9 = new Graphic117(MovieClip.SYNCHED);
        var instance8 = new Graphic116(MovieClip.SYNCHED);
        var instance11 = new Graphic119(MovieClip.SYNCHED);
        var instance10 = new Graphic118(MovieClip.SYNCHED);
        var instance7 = new Graphic115(MovieClip.SYNCHED);
        var instance6 = new Graphic114(MovieClip.SYNCHED);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[327]);
        var instance3 = new Graphic113(MovieClip.SYNCHED)
            .setTransform(-16.15, -88.8, 0.577, 0.577);
        var instance2 = new Graphic112(MovieClip.SYNCHED)
            .setTransform(-514.25, 626.9, 1, 1, 0.294);
        var instance1 = new Graphic111(MovieClip.SYNCHED);
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

    var Graphic157 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 42, loop: false });
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[73])
            .setTransform(9.85, 31.2, 1.3, 1.3);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[72])
            .setTransform(9.85, 31.2, 1.3, 1.3);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[71])
            .setTransform(9.85, 31.2, 1.3, 1.3);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[70])
            .setTransform(9.85, 31.2, 1.3, 1.3);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[69])
            .setTransform(9.7, 31.2, 1.3, 1.3);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[68])
            .setTransform(-801.7, -1038.95, 1.3, 1.3);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[67])
            .setTransform(-801.7, -1038.95, 1.3, 1.3);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[66])
            .setTransform(-801.7, -1038.95, 1.3, 1.3);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[65])
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

    var Graphic158 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 42, loop: false });
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[73])
            .setTransform(9.85, 31.2, 1.3, 1.3);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[72])
            .setTransform(9.85, 31.2, 1.3, 1.3);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[71])
            .setTransform(9.85, 31.2, 1.3, 1.3);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[70])
            .setTransform(9.85, 31.2, 1.3, 1.3);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[69])
            .setTransform(9.7, 31.2, 1.3, 1.3);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[68])
            .setTransform(-801.7, -1038.95, 1.3, 1.3);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[67])
            .setTransform(-801.7, -1038.95, 1.3, 1.3);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[66])
            .setTransform(-801.7, -1038.95, 1.3, 1.3);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[65])
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

    lib.PHONE_B_SC03 = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 2
        });
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[347]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[346]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[341]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[345]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[344]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[343]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[342]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[341]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[340]);
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

    var Graphic166 = MovieClip.extend(function (mode) {
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
            .drawCommands(shapes.s01[67])
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

    var Graphic167 = MovieClip.extend(function (mode) {
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
            .drawCommands(shapes.s01[67])
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

    var Graphic165 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 15, loop: false });
        var instance1 = new Sprite(fromFrame("REPLACE_HEADSET"))
            .setTransform(-12.2, 22.75, 0.5, 0.5);
        this.addTimedChild(instance1);
    });

    var Graphic159 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 45, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[368]);
        this.addTimedChild(instance1);
    });

    var Graphic160 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 45, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[368]);
        this.addTimedChild(instance1);
    });

    var Graphic120 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[114])
            .setTransform(-17.65, 14.8, 0.95);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[113])
            .setTransform(-470, -630.85, 0.95);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[112])
            .setTransform(-470, -630.85, 0.95);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[111])
            .setTransform(-470, -630.85, 0.95);
        this.addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic121 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[117])
            .setTransform(14.05, 13.35, 0.95);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[116])
            .setTransform(-438.25, -629.9, 0.95);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[115])
            .setTransform(-438.25, -629.9, 0.95);
        this.addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic161 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[118]);
        var instance2 = new Graphic121(MovieClip.SYNCHED)
            .setTransform(-9.2, -101.15);
        var instance1 = new Graphic120(MovieClip.SYNCHED)
            .setTransform(22.55, -100.2);
        this.addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic131 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 4, loop: false });
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[391]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[390]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[389]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[388]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[387]);
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

    var Graphic129 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 5, loop: false });
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[391]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[390]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[389]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[388]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[387]);
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

    var Graphic130 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 5, loop: false });
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[391]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[390]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[389]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[388]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[387]);
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

    var Graphic126 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 6, loop: false });
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[391]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[390]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[389]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[388]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[387]);
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

    var Graphic127 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 6, loop: false });
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[391]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[390]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[389]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[388]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[387]);
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

    var Graphic128 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 6, loop: false });
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[391]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[390]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[389]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[388]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[387]);
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

    var Graphic122 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 7, loop: false });
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[391]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[390]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[389]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[388]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[387]);
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

    var Graphic123 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 7, loop: false });
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[391]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[390]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[389]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[388]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[387]);
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

    var Graphic124 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 7, loop: false });
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[391]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[390]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[389]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[388]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[387]);
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

    var Graphic125 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 7, loop: false });
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[391]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[390]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[389]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[388]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[387]);
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

    var Graphic164 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 7, loop: false });
        var instance4 = new Graphic125(MovieClip.SYNCHED)
            .setTransform(-139.45, -98.1);
        var instance3 = new Graphic124(MovieClip.SYNCHED)
            .setTransform(-187.95, 43);
        var instance2 = new Graphic123(MovieClip.SYNCHED)
            .setTransform(144.55, 75.75);
        var instance1 = new Graphic122(MovieClip.SYNCHED);
        var instance7 = new Graphic128(MovieClip.SYNCHED)
            .setTransform(201, 48.65);
        var instance6 = new Graphic127(MovieClip.SYNCHED)
            .setTransform(79.65, -98.7);
        var instance5 = new Graphic126(MovieClip.SYNCHED);
        var instance9 = new Graphic130(MovieClip.SYNCHED)
            .setTransform(171.05, -15.65);
        var instance8 = new Graphic129(MovieClip.SYNCHED);
        var instance10 = new Graphic131(MovieClip.SYNCHED)
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

    var Graphic137 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 8, loop: false });
        var instance1 = new Sprite(fromFrame("REPLACE_EMOJI_HAPPY"));
        this.addTimedChild(instance1);
    });

    var Graphic141 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 8, loop: false });
        var instance1 = new Sprite(fromFrame("REPLACE_EMOJI_HAPPY"));
        this.addTimedChild(instance1);
    });

    var Graphic138 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 7, loop: false });
        var instance1 = new Sprite(fromFrame("REPLACE_EMOJI_HAPPY"));
        this.addTimedChild(instance1);
    });

    var Graphic136 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 8, loop: false });
        var instance1 = new Sprite(fromFrame("REPLACE_EMOJI_HAPPY"));
        this.addTimedChild(instance1);
    });

    var Graphic139 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 8, loop: false });
        var instance1 = new Sprite(fromFrame("REPLACE_EMOJI_HAPPY"));
        this.addTimedChild(instance1);
    });

    var Graphic140 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 8, loop: false });
        var instance1 = new Sprite(fromFrame("REPLACE_EMOJI_HAPPY"));
        this.addTimedChild(instance1);
    });

    var Graphic132 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 8, loop: false });
        var instance1 = new Sprite(fromFrame("REPLACE_EMOJI_HAPPY"));
        this.addTimedChild(instance1);
    });

    var Graphic133 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 8, loop: false });
        var instance1 = new Sprite(fromFrame("REPLACE_EMOJI_HAPPY"));
        this.addTimedChild(instance1);
    });

    var Graphic134 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 8, loop: false });
        var instance1 = new Sprite(fromFrame("REPLACE_EMOJI_HAPPY"));
        this.addTimedChild(instance1);
    });

    var Graphic135 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 8, loop: false });
        var instance1 = new Sprite(fromFrame("REPLACE_EMOJI_HAPPY"));
        this.addTimedChild(instance1);
    });

    var Graphic162 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance4 = new Graphic135(MovieClip.SYNCHED);
        var instance3 = new Graphic134(MovieClip.SYNCHED);
        var instance2 = new Graphic133(MovieClip.SYNCHED);
        var instance1 = new Graphic132(MovieClip.SYNCHED);
        var instance9 = new Graphic140(MovieClip.SYNCHED);
        var instance8 = new Graphic139(MovieClip.SYNCHED);
        var instance5 = new Graphic136(MovieClip.SYNCHED);
        var instance7 = new Graphic138(MovieClip.SYNCHED);
        var instance10 = new Graphic141(MovieClip.SYNCHED);
        var instance6 = new Graphic137(MovieClip.SYNCHED);
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

    var Graphic143 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 49, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[86]);
        this.addTimedChild(instance1);
    });

    var Graphic144 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[87])
            .setTransform(-466.8, -453.85);
        this.addTimedChild(instance1);
    });

    var Graphic145 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[88])
            .setTransform(-504.35, -453.65);
        this.addTimedChild(instance1);
    });

    var Graphic146 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 16, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[89])
            .setTransform(-458.45, -480.9, 0.972);
        this.addTimedChild(instance1);
    });

    var Graphic153 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 17, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[89])
            .setTransform(-458.45, -480.9, 0.972);
        this.addTimedChild(instance1);
    });

    var Graphic155 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[89])
            .setTransform(-458.45, -480.9, 0.972);
        this.addTimedChild(instance1);
    });

    var Graphic147 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 16, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[89])
            .setTransform(-458.45, -480.9, 0.972);
        this.addTimedChild(instance1);
    });

    var Graphic154 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 17, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[89])
            .setTransform(-458.45, -480.9, 0.972);
        this.addTimedChild(instance1);
    });

    var Graphic156 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[89])
            .setTransform(-458.45, -480.9, 0.972);
        this.addTimedChild(instance1);
    });

    var Graphic148 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[95]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[94]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[93]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[92]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[91]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[90]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[187]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[186]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[185]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[184]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[183]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[182]);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[95]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[94]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[93]);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[92]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[91]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[90]);
        var instance24 = new Graphics()
            .drawCommands(shapes.s01[187]);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[186]);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[185]);
        var instance21 = new Graphics()
            .drawCommands(shapes.s01[184]);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[183]);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[182]);
        var instance30 = new Graphics()
            .drawCommands(shapes.s01[95]);
        var instance29 = new Graphics()
            .drawCommands(shapes.s01[94]);
        var instance28 = new Graphics()
            .drawCommands(shapes.s01[93]);
        var instance27 = new Graphics()
            .drawCommands(shapes.s01[92]);
        var instance26 = new Graphics()
            .drawCommands(shapes.s01[91]);
        var instance25 = new Graphics()
            .drawCommands(shapes.s01[90]);
        var instance36 = new Graphics()
            .drawCommands(shapes.s01[187])
            .setTransform(-2.45, 1.7, 1.289, 0.827);
        var instance35 = new Graphics()
            .drawCommands(shapes.s01[186])
            .setTransform(-0.05, 1.8, 1.289, 0.827);
        var instance34 = new Graphics()
            .drawCommands(shapes.s01[185])
            .setTransform(6.85, 1.9, 0.95, 0.95);
        var instance33 = new Graphics()
            .drawCommands(shapes.s01[184])
            .setTransform(1.1, 0, 0.95, 0.95);
        var instance32 = new Graphics()
            .drawCommands(shapes.s01[183])
            .setTransform(-9.25, -1.15, 0.95, 0.95);
        var instance31 = new Graphics()
            .drawCommands(shapes.s01[182])
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

    var Graphic142 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[23]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[406]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[400]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[392]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[407]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[401]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[393]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[188]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[23]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[408]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[402]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[394]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[188]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[406]);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[400]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[392]);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[27]);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[395]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[25]);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[409]);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[403]);
        var instance21 = new Graphics()
            .drawCommands(shapes.s01[396]);
        var instance26 = new Graphics()
            .drawCommands(shapes.s01[407]);
        var instance25 = new Graphics()
            .drawCommands(shapes.s01[401]);
        var instance24 = new Graphics()
            .drawCommands(shapes.s01[393]);
        var instance27 = new Graphics()
            .drawCommands(shapes.s01[23]);
        var instance31 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance30 = new Graphics()
            .drawCommands(shapes.s01[27]);
        var instance29 = new Graphics()
            .drawCommands(shapes.s01[395]);
        var instance28 = new Graphics()
            .drawCommands(shapes.s01[25]);
        var instance32 = new Graphics()
            .drawCommands(shapes.s01[188]);
        var instance35 = new Graphics()
            .drawCommands(shapes.s01[408]);
        var instance34 = new Graphics()
            .drawCommands(shapes.s01[402]);
        var instance33 = new Graphics()
            .drawCommands(shapes.s01[394]);
        var instance36 = new Graphics()
            .drawCommands(shapes.s01[397]);
        var instance40 = new Graphics()
            .drawCommands(shapes.s01[410]);
        var instance39 = new Graphics()
            .drawCommands(shapes.s01[405]);
        var instance38 = new Graphics()
            .drawCommands(shapes.s01[404]);
        var instance37 = new Graphics()
            .drawCommands(shapes.s01[398]);
        var instance44 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance43 = new Graphics()
            .drawCommands(shapes.s01[27]);
        var instance42 = new Graphics()
            .drawCommands(shapes.s01[395]);
        var instance41 = new Graphics()
            .drawCommands(shapes.s01[25]);
        var instance47 = new Graphics()
            .drawCommands(shapes.s01[406]);
        var instance46 = new Graphics()
            .drawCommands(shapes.s01[400]);
        var instance45 = new Graphics()
            .drawCommands(shapes.s01[392]);
        var instance51 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance50 = new Graphics()
            .drawCommands(shapes.s01[27]);
        var instance49 = new Graphics()
            .drawCommands(shapes.s01[395]);
        var instance48 = new Graphics()
            .drawCommands(shapes.s01[25]);
        var instance54 = new Graphics()
            .drawCommands(shapes.s01[409]);
        var instance53 = new Graphics()
            .drawCommands(shapes.s01[403]);
        var instance52 = new Graphics()
            .drawCommands(shapes.s01[396]);
        var instance57 = new Graphics()
            .drawCommands(shapes.s01[407]);
        var instance56 = new Graphics()
            .drawCommands(shapes.s01[401]);
        var instance55 = new Graphics()
            .drawCommands(shapes.s01[393]);
        var instance60 = new Graphics()
            .drawCommands(shapes.s01[409]);
        var instance59 = new Graphics()
            .drawCommands(shapes.s01[403]);
        var instance58 = new Graphics()
            .drawCommands(shapes.s01[396]);
        var instance61 = new Graphics()
            .drawCommands(shapes.s01[399]);
        var instance62 = new Graphics()
            .drawCommands(shapes.s01[97]);
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

    var Graphic149 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance1 = new Graphic142(MovieClip.SYNCHED);
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

    var Graphic150 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[102]);
        this.addTimedChild(instance1);
    });

    var Graphic151 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[104])
            .setTransform(-368.7, -483.9, 0.959);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[103])
            .setTransform(-383.8, -485.3);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic152 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[106]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[105])
            .setTransform(-585.65, -483.25);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic163 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance14 = new lib.DEDE_PONYTAIL_COLOUR_SECTION_01()
            .setTransform(17, -197.8);
        var instance13 = new lib.DEDE_PONYTAIL_COLOUR_SECTION_02();
        var instance12 = new lib.DEDE_PONYTAIL_END();
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[411]);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[412]);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[413]);
        var instance21 = new Graphics()
            .drawCommands(shapes.s01[414]);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[415]);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[416]);
        var instance24 = new Graphics()
            .drawCommands(shapes.s01[417]);
        var instance25 = new Graphics()
            .drawCommands(shapes.s01[418]);
        var instance26 = new Graphics()
            .drawCommands(shapes.s01[419]);
        var instance10 = new Graphic152(MovieClip.SYNCHED)
            .setTransform(105.5, -122.2);
        var instance9 = new Graphic151(MovieClip.SYNCHED)
            .setTransform(-96.35, -120.15);
        var instance8 = new Graphic150(MovieClip.SYNCHED)
            .setTransform(4.15, -0.3);
        var instance7 = new Graphic149(MovieClip.SYNCHED)
            .setTransform(-6.85, -75.4);
        var instance6 = new Graphic148(MovieClip.SYNCHED);
        var instance5 = new Graphic147(MovieClip.SYNCHED);
        var instance4 = new Graphic146(MovieClip.SYNCHED);
        var instance16 = new Graphic154(MovieClip.SYNCHED);
        var instance15 = new Graphic153(MovieClip.SYNCHED);
        var instance18 = new Graphic156(MovieClip.SYNCHED);
        var instance17 = new Graphic155(MovieClip.SYNCHED);
        var instance3 = new Graphic145(MovieClip.SYNCHED);
        var instance2 = new Graphic144(MovieClip.SYNCHED);
        var instance1 = new Graphic143(MovieClip.SYNCHED);
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

    var Graphic235 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance11 = new lib.DEDE_NECK()
            .setTransform(29.35, -395.6);
        var instance10 = new Graphic163(MovieClip.SYNCHED);
        var instance9 = new Graphic162(MovieClip.SYNCHED);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[378]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[369]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[379]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[370]);
        var instance16 = new Graphic164(MovieClip.SYNCHED);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[380]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[371]);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[381]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[372]);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[382]);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[373]);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[383]);
        var instance21 = new Graphics()
            .drawCommands(shapes.s01[374]);
        var instance24 = new Graphics()
            .drawCommands(shapes.s01[384]);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[375]);
        var instance26 = new Graphics()
            .drawCommands(shapes.s01[385]);
        var instance25 = new Graphics()
            .drawCommands(shapes.s01[376]);
        var instance28 = new Graphics()
            .drawCommands(shapes.s01[386]);
        var instance27 = new Graphics()
            .drawCommands(shapes.s01[377]);
        var instance6 = new Graphic161(MovieClip.SYNCHED);
        var instance5 = new Graphic160(MovieClip.SYNCHED);
        var instance4 = new Graphic159(MovieClip.SYNCHED);
        var instance29 = new Graphic165(MovieClip.SYNCHED);
        var instance3 = new lib.PHONE_B_SC03();
        var instance2 = new Graphic158(MovieClip.SYNCHED);
        var instance1 = new Graphic157(MovieClip.SYNCHED);
        var instance33 = new Graphic167(MovieClip.SYNCHED);
        var instance32 = new Graphic166(MovieClip.SYNCHED);
        var instance31 = new Graphics()
            .drawCommands(shapes.s01[354]);
        var instance30 = new Graphics()
            .drawCommands(shapes.s01[348]);
        var instance35 = new Graphics()
            .drawCommands(shapes.s01[355]);
        var instance34 = new Graphics()
            .drawCommands(shapes.s01[349]);
        var instance37 = new Graphics()
            .drawCommands(shapes.s01[356]);
        var instance36 = new Graphics()
            .drawCommands(shapes.s01[350]);
        var instance39 = new Graphics()
            .drawCommands(shapes.s01[357]);
        var instance38 = new Graphics()
            .drawCommands(shapes.s01[351]);
        var instance42 = new Graphics()
            .drawCommands(shapes.s01[358]);
        var instance41 = new Graphics()
            .drawCommands(shapes.s01[352]);
        var instance44 = new Graphics()
            .drawCommands(shapes.s01[359]);
        var instance43 = new Graphics()
            .drawCommands(shapes.s01[353]);
        var instance40 = new lib.DEDE_NOSE();
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
            .addTimedChild(instance8, 0, 17)
            .addTimedChild(instance7, 0, 17)
            .addTimedChild(instance13, 17, 7)
            .addTimedChild(instance12, 17, 7)
            .addTimedChild(instance16, 31, 7, {
                "31": {
                    x: 33.2,
                    y: -467.55
                }
            })
            .addTimedChild(instance15, 24, 8)
            .addTimedChild(instance14, 24, 8)
            .addTimedChild(instance18, 32, 6)
            .addTimedChild(instance17, 32, 6)
            .addTimedChild(instance20, 38, 1)
            .addTimedChild(instance19, 38, 1)
            .addTimedChild(instance22, 39, 1)
            .addTimedChild(instance21, 39, 1)
            .addTimedChild(instance24, 40, 1)
            .addTimedChild(instance23, 40, 1)
            .addTimedChild(instance26, 41, 1)
            .addTimedChild(instance25, 41, 1)
            .addTimedChild(instance28, 42, 3)
            .addTimedChild(instance27, 42, 3)
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
            .addTimedChild(instance29, 44, 15, {
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
            .addTimedChild(instance33, 45, 14, {
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
            .addTimedChild(instance32, 45, 14, {
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
            .addTimedChild(instance31, 45, 1)
            .addTimedChild(instance30, 45, 1)
            .addTimedChild(instance35, 46, 1)
            .addTimedChild(instance34, 46, 1)
            .addTimedChild(instance37, 47, 1)
            .addTimedChild(instance36, 47, 1)
            .addTimedChild(instance39, 48, 1)
            .addTimedChild(instance38, 48, 1)
            .addTimedChild(instance42, 49, 1)
            .addTimedChild(instance41, 49, 1)
            .addTimedChild(instance44, 50, 9)
            .addTimedChild(instance43, 50, 9)
            .addTimedChild(instance40, 49, 10, {
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

    var Graphic236 = MovieClip.extend(function (mode) {
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

    lib.BG_MESSY_BEDROOM_ZOOM = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 12
        });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[420]);
        this.addTimedChild(instance1);
    });

    var Graphic168 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 79, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[429]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[430]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[437]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[436]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[435]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[434]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[433]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[432]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[431]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[438]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[439]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[429]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[430]);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[437]);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[436]);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[435]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[434]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[433]);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[432]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[431]);
        var instance21 = new Graphics()
            .drawCommands(shapes.s01[438]);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[439]);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[429]);
        var instance24 = new Graphics()
            .drawCommands(shapes.s01[430]);
        var instance31 = new Graphics()
            .drawCommands(shapes.s01[437]);
        var instance30 = new Graphics()
            .drawCommands(shapes.s01[436]);
        var instance29 = new Graphics()
            .drawCommands(shapes.s01[435]);
        var instance28 = new Graphics()
            .drawCommands(shapes.s01[434]);
        var instance27 = new Graphics()
            .drawCommands(shapes.s01[433]);
        var instance26 = new Graphics()
            .drawCommands(shapes.s01[432]);
        var instance25 = new Graphics()
            .drawCommands(shapes.s01[431]);
        var instance32 = new Graphics()
            .drawCommands(shapes.s01[438]);
        var instance33 = new Graphics()
            .drawCommands(shapes.s01[439]);
        var instance34 = new Graphics()
            .drawCommands(shapes.s01[429]);
        var instance35 = new Graphics()
            .drawCommands(shapes.s01[430]);
        var instance42 = new Graphics()
            .drawCommands(shapes.s01[437]);
        var instance41 = new Graphics()
            .drawCommands(shapes.s01[436]);
        var instance40 = new Graphics()
            .drawCommands(shapes.s01[435]);
        var instance39 = new Graphics()
            .drawCommands(shapes.s01[434]);
        var instance38 = new Graphics()
            .drawCommands(shapes.s01[433]);
        var instance37 = new Graphics()
            .drawCommands(shapes.s01[432]);
        var instance36 = new Graphics()
            .drawCommands(shapes.s01[431]);
        var instance43 = new Graphics()
            .drawCommands(shapes.s01[438]);
        var instance44 = new Graphics()
            .drawCommands(shapes.s01[439]);
        var instance45 = new Graphics()
            .drawCommands(shapes.s01[429]);
        var instance46 = new Graphics()
            .drawCommands(shapes.s01[430]);
        var instance53 = new Graphics()
            .drawCommands(shapes.s01[437]);
        var instance52 = new Graphics()
            .drawCommands(shapes.s01[436]);
        var instance51 = new Graphics()
            .drawCommands(shapes.s01[435]);
        var instance50 = new Graphics()
            .drawCommands(shapes.s01[434]);
        var instance49 = new Graphics()
            .drawCommands(shapes.s01[433]);
        var instance48 = new Graphics()
            .drawCommands(shapes.s01[432]);
        var instance47 = new Graphics()
            .drawCommands(shapes.s01[431]);
        var instance54 = new Graphics()
            .drawCommands(shapes.s01[438]);
        var instance55 = new Graphics()
            .drawCommands(shapes.s01[439]);
        var instance56 = new Graphics()
            .drawCommands(shapes.s01[429]);
        var instance57 = new Graphics()
            .drawCommands(shapes.s01[430]);
        var instance64 = new Graphics()
            .drawCommands(shapes.s01[437]);
        var instance63 = new Graphics()
            .drawCommands(shapes.s01[436]);
        var instance62 = new Graphics()
            .drawCommands(shapes.s01[435]);
        var instance61 = new Graphics()
            .drawCommands(shapes.s01[434]);
        var instance60 = new Graphics()
            .drawCommands(shapes.s01[433]);
        var instance59 = new Graphics()
            .drawCommands(shapes.s01[432]);
        var instance58 = new Graphics()
            .drawCommands(shapes.s01[431]);
        var instance65 = new Graphics()
            .drawCommands(shapes.s01[438]);
        var instance66 = new Graphics()
            .drawCommands(shapes.s01[439]);
        var instance67 = new Graphics()
            .drawCommands(shapes.s01[429]);
        var instance68 = new Graphics()
            .drawCommands(shapes.s01[430]);
        var instance75 = new Graphics()
            .drawCommands(shapes.s01[437]);
        var instance74 = new Graphics()
            .drawCommands(shapes.s01[436]);
        var instance73 = new Graphics()
            .drawCommands(shapes.s01[435]);
        var instance72 = new Graphics()
            .drawCommands(shapes.s01[434]);
        var instance71 = new Graphics()
            .drawCommands(shapes.s01[433]);
        var instance70 = new Graphics()
            .drawCommands(shapes.s01[432]);
        var instance69 = new Graphics()
            .drawCommands(shapes.s01[431]);
        var instance76 = new Graphics()
            .drawCommands(shapes.s01[438]);
        var instance77 = new Graphics()
            .drawCommands(shapes.s01[439]);
        var instance78 = new Graphics()
            .drawCommands(shapes.s01[429]);
        var instance79 = new Graphics()
            .drawCommands(shapes.s01[430]);
        var instance86 = new Graphics()
            .drawCommands(shapes.s01[437]);
        var instance85 = new Graphics()
            .drawCommands(shapes.s01[436]);
        var instance84 = new Graphics()
            .drawCommands(shapes.s01[435]);
        var instance83 = new Graphics()
            .drawCommands(shapes.s01[434]);
        var instance82 = new Graphics()
            .drawCommands(shapes.s01[433]);
        var instance81 = new Graphics()
            .drawCommands(shapes.s01[432]);
        var instance80 = new Graphics()
            .drawCommands(shapes.s01[431]);
        var instance87 = new Graphics()
            .drawCommands(shapes.s01[438]);
        var instance88 = new Graphics()
            .drawCommands(shapes.s01[439]);
        this.addTimedChild(instance1, 0, 2)
            .addTimedChild(instance2, 2, 2)
            .addTimedChild(instance9, 4, 2)
            .addTimedChild(instance8, 4, 2)
            .addTimedChild(instance7, 4, 2)
            .addTimedChild(instance6, 4, 2)
            .addTimedChild(instance5, 4, 2)
            .addTimedChild(instance4, 4, 2)
            .addTimedChild(instance3, 4, 2)
            .addTimedChild(instance10, 6, 2)
            .addTimedChild(instance11, 8, 2)
            .addTimedChild(instance12, 10, 2)
            .addTimedChild(instance13, 12, 2)
            .addTimedChild(instance20, 14, 2)
            .addTimedChild(instance19, 14, 2)
            .addTimedChild(instance18, 14, 2)
            .addTimedChild(instance17, 14, 2)
            .addTimedChild(instance16, 14, 2)
            .addTimedChild(instance15, 14, 2)
            .addTimedChild(instance14, 14, 2)
            .addTimedChild(instance21, 16, 2)
            .addTimedChild(instance22, 18, 2)
            .addTimedChild(instance23, 20, 2)
            .addTimedChild(instance24, 22, 2)
            .addTimedChild(instance31, 24, 2)
            .addTimedChild(instance30, 24, 2)
            .addTimedChild(instance29, 24, 2)
            .addTimedChild(instance28, 24, 2)
            .addTimedChild(instance27, 24, 2)
            .addTimedChild(instance26, 24, 2)
            .addTimedChild(instance25, 24, 2)
            .addTimedChild(instance32, 26, 2)
            .addTimedChild(instance33, 28, 2)
            .addTimedChild(instance34, 30, 2)
            .addTimedChild(instance35, 32, 2)
            .addTimedChild(instance42, 34, 2)
            .addTimedChild(instance41, 34, 2)
            .addTimedChild(instance40, 34, 2)
            .addTimedChild(instance39, 34, 2)
            .addTimedChild(instance38, 34, 2)
            .addTimedChild(instance37, 34, 2)
            .addTimedChild(instance36, 34, 2)
            .addTimedChild(instance43, 36, 2)
            .addTimedChild(instance44, 38, 2)
            .addTimedChild(instance45, 40, 2)
            .addTimedChild(instance46, 42, 2)
            .addTimedChild(instance53, 44, 2)
            .addTimedChild(instance52, 44, 2)
            .addTimedChild(instance51, 44, 2)
            .addTimedChild(instance50, 44, 2)
            .addTimedChild(instance49, 44, 2)
            .addTimedChild(instance48, 44, 2)
            .addTimedChild(instance47, 44, 2)
            .addTimedChild(instance54, 46, 2)
            .addTimedChild(instance55, 48, 2)
            .addTimedChild(instance56, 50, 2)
            .addTimedChild(instance57, 52, 2)
            .addTimedChild(instance64, 54, 2)
            .addTimedChild(instance63, 54, 2)
            .addTimedChild(instance62, 54, 2)
            .addTimedChild(instance61, 54, 2)
            .addTimedChild(instance60, 54, 2)
            .addTimedChild(instance59, 54, 2)
            .addTimedChild(instance58, 54, 2)
            .addTimedChild(instance65, 56, 2)
            .addTimedChild(instance66, 58, 2)
            .addTimedChild(instance67, 60, 2)
            .addTimedChild(instance68, 62, 2)
            .addTimedChild(instance75, 64, 2)
            .addTimedChild(instance74, 64, 2)
            .addTimedChild(instance73, 64, 2)
            .addTimedChild(instance72, 64, 2)
            .addTimedChild(instance71, 64, 2)
            .addTimedChild(instance70, 64, 2)
            .addTimedChild(instance69, 64, 2)
            .addTimedChild(instance76, 66, 2)
            .addTimedChild(instance77, 68, 2)
            .addTimedChild(instance78, 70, 2)
            .addTimedChild(instance79, 72, 2)
            .addTimedChild(instance86, 74, 2)
            .addTimedChild(instance85, 74, 2)
            .addTimedChild(instance84, 74, 2)
            .addTimedChild(instance83, 74, 2)
            .addTimedChild(instance82, 74, 2)
            .addTimedChild(instance81, 74, 2)
            .addTimedChild(instance80, 74, 2)
            .addTimedChild(instance87, 76, 2)
            .addTimedChild(instance88, 78, 1);
    });

    var Graphic169 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 79, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[440]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[441]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[442]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[443]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[440]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[441]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[442]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[443]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[440]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[441]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[442]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[443]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[440]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[441]);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[442]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[443]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[440]);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[441]);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[442]);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[443]);
        var instance21 = new Graphics()
            .drawCommands(shapes.s01[440]);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[441]);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[442]);
        var instance24 = new Graphics()
            .drawCommands(shapes.s01[443]);
        var instance25 = new Graphics()
            .drawCommands(shapes.s01[440]);
        var instance26 = new Graphics()
            .drawCommands(shapes.s01[441]);
        var instance27 = new Graphics()
            .drawCommands(shapes.s01[442]);
        var instance28 = new Graphics()
            .drawCommands(shapes.s01[443]);
        var instance29 = new Graphics()
            .drawCommands(shapes.s01[440]);
        var instance30 = new Graphics()
            .drawCommands(shapes.s01[441]);
        var instance31 = new Graphics()
            .drawCommands(shapes.s01[442]);
        var instance32 = new Graphics()
            .drawCommands(shapes.s01[443]);
        var instance33 = new Graphics()
            .drawCommands(shapes.s01[440]);
        this.addTimedChild(instance1, 0, 2)
            .addTimedChild(instance2, 2, 2)
            .addTimedChild(instance3, 4, 2)
            .addTimedChild(instance4, 6, 2)
            .addTimedChild(instance5, 8, 4)
            .addTimedChild(instance6, 12, 2)
            .addTimedChild(instance7, 14, 2)
            .addTimedChild(instance8, 16, 2)
            .addTimedChild(instance9, 18, 4)
            .addTimedChild(instance10, 22, 2)
            .addTimedChild(instance11, 24, 2)
            .addTimedChild(instance12, 26, 2)
            .addTimedChild(instance13, 28, 4)
            .addTimedChild(instance14, 32, 2)
            .addTimedChild(instance15, 34, 2)
            .addTimedChild(instance16, 36, 2)
            .addTimedChild(instance17, 38, 4)
            .addTimedChild(instance18, 42, 2)
            .addTimedChild(instance19, 44, 2)
            .addTimedChild(instance20, 46, 2)
            .addTimedChild(instance21, 48, 4)
            .addTimedChild(instance22, 52, 2)
            .addTimedChild(instance23, 54, 2)
            .addTimedChild(instance24, 56, 2)
            .addTimedChild(instance25, 58, 4)
            .addTimedChild(instance26, 62, 2)
            .addTimedChild(instance27, 64, 2)
            .addTimedChild(instance28, 66, 2)
            .addTimedChild(instance29, 68, 4)
            .addTimedChild(instance30, 72, 2)
            .addTimedChild(instance31, 74, 2)
            .addTimedChild(instance32, 76, 2)
            .addTimedChild(instance33, 78, 1);
    });

    var Graphic170 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 79, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[444]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[445]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[446]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[447]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[447]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[447]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[446]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[448]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[444]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[445]);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[446]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[447]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[447]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[447]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[446]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[448]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[444]);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[445]);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[446]);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[447]);
        var instance21 = new Graphics()
            .drawCommands(shapes.s01[447]);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[447]);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[446]);
        var instance24 = new Graphics()
            .drawCommands(shapes.s01[448]);
        var instance25 = new Graphics()
            .drawCommands(shapes.s01[444]);
        var instance26 = new Graphics()
            .drawCommands(shapes.s01[445]);
        var instance31 = new Graphics()
            .drawCommands(shapes.s01[446])
            .setTransform(-1.25, -2608.1, 1.078, 15.646);
        var instance30 = new Graphics()
            .drawCommands(shapes.s01[447]);
        var instance29 = new Graphics()
            .drawCommands(shapes.s01[447]);
        var instance28 = new Graphics()
            .drawCommands(shapes.s01[447]);
        var instance27 = new Graphics()
            .drawCommands(shapes.s01[446]);
        this.addTimedChild(instance1, 0, 2)
            .addTimedChild(instance2, 2, 2)
            .addTimedChild(instance7, 4, 6, {
                "4": {
                    x: -1.25,
                    y: -2608.1,
                    sx: 1.078,
                    sy: 15.646
                }
            })
            .addTimedChild(instance6, 4, 6, {
                "4": {
                    x: -104.05,
                    y: -47.2,
                    sx: 1.367,
                    sy: 1.3
                },
                "6": {
                    y: 15.85,
                    sy: 0.937
                },
                "8": {
                    y: 22.15,
                    sy: 0.901
                }
            })
            .addTimedChild(instance5, 4, 6, {
                "4": {
                    x: -53.15,
                    y: -205.05,
                    sx: 1.22,
                    sy: 2.22
                },
                "6": {
                    y: -109.7,
                    sy: 1.664
                },
                "8": {
                    y: -94.25,
                    sy: 1.574
                }
            })
            .addTimedChild(instance4, 4, 6, {
                "4": {
                    y: 0,
                    sy: 1
                },
                "6": {
                    y: -13.05,
                    sy: 1.076
                },
                "8": {
                    y: -520.15,
                    sy: 4.054
                }
            })
            .addTimedChild(instance3, 4, 6)
            .addTimedChild(instance8, 10, 2)
            .addTimedChild(instance9, 12, 14)
            .addTimedChild(instance10, 26, 2)
            .addTimedChild(instance15, 28, 6, {
                "28": {
                    x: -1.25,
                    y: -2608.1,
                    sx: 1.078,
                    sy: 15.646
                }
            })
            .addTimedChild(instance14, 28, 6, {
                "28": {
                    x: -104.05,
                    y: -47.2,
                    sx: 1.367,
                    sy: 1.3
                },
                "30": {
                    y: 15.85,
                    sy: 0.937
                },
                "32": {
                    y: 22.15,
                    sy: 0.901
                }
            })
            .addTimedChild(instance13, 28, 6, {
                "28": {
                    x: -53.15,
                    y: -205.05,
                    sx: 1.22,
                    sy: 2.22
                },
                "30": {
                    y: -109.7,
                    sy: 1.664
                },
                "32": {
                    y: -94.25,
                    sy: 1.574
                }
            })
            .addTimedChild(instance12, 28, 6, {
                "28": {
                    y: 0,
                    sy: 1
                },
                "30": {
                    y: -13.05,
                    sy: 1.076
                },
                "32": {
                    y: -520.15,
                    sy: 4.054
                }
            })
            .addTimedChild(instance11, 28, 6)
            .addTimedChild(instance16, 34, 2)
            .addTimedChild(instance17, 36, 14)
            .addTimedChild(instance18, 50, 2)
            .addTimedChild(instance23, 52, 6, {
                "52": {
                    x: -1.25,
                    y: -2608.1,
                    sx: 1.078,
                    sy: 15.646
                }
            })
            .addTimedChild(instance22, 52, 6, {
                "52": {
                    x: -104.05,
                    y: -47.2,
                    sx: 1.367,
                    sy: 1.3
                },
                "54": {
                    y: 15.85,
                    sy: 0.937
                },
                "56": {
                    y: 22.15,
                    sy: 0.901
                }
            })
            .addTimedChild(instance21, 52, 6, {
                "52": {
                    x: -53.15,
                    y: -205.05,
                    sx: 1.22,
                    sy: 2.22
                },
                "54": {
                    y: -109.7,
                    sy: 1.664
                },
                "56": {
                    y: -94.25,
                    sy: 1.574
                }
            })
            .addTimedChild(instance20, 52, 6, {
                "52": {
                    y: 0,
                    sy: 1
                },
                "54": {
                    y: -13.05,
                    sy: 1.076
                },
                "56": {
                    y: -520.15,
                    sy: 4.054
                }
            })
            .addTimedChild(instance19, 52, 6)
            .addTimedChild(instance24, 58, 2)
            .addTimedChild(instance25, 60, 14)
            .addTimedChild(instance26, 74, 2)
            .addTimedChild(instance31, 76, 3)
            .addTimedChild(instance30, 76, 3, {
                "76": {
                    x: -104.05,
                    y: -47.2,
                    sx: 1.367,
                    sy: 1.3
                },
                "78": {
                    y: 15.85,
                    sy: 0.937
                }
            })
            .addTimedChild(instance29, 76, 3, {
                "76": {
                    x: -53.15,
                    y: -205.05,
                    sx: 1.22,
                    sy: 2.22
                },
                "78": {
                    y: -109.7,
                    sy: 1.664
                }
            })
            .addTimedChild(instance28, 76, 3, {
                "76": {
                    y: 0,
                    sy: 1
                },
                "78": {
                    y: -13.05,
                    sy: 1.076
                }
            })
            .addTimedChild(instance27, 76, 3);
    });

    lib.HEADSET_03 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[449]);
        this.addChild(instance1);
    });

    var Graphic171 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 79, loop: false });
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[452]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[453]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[454]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[455]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[451])
            .setTransform(-54.4, -29.85, 1, 1, -0.005);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[451])
            .setTransform(-82.5, -27.6, 1, 1, -0.005);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[451])
            .setTransform(-93.4, -24.2, 1, 1, -0.005);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[450])
            .setTransform(-4.2, -27.9, 1, 1, -0.122);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[451])
            .setTransform(38.55, -39.15, 1, 1, -0.005);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[451])
            .setTransform(44.9, -29.15, 1, 1, -0.005);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[451])
            .setTransform(16.8, -26.9, 1, 1, -0.005);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[451])
            .setTransform(5.9, -23.5, 1, 1, -0.005);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[450])
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

    var Graphic237 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 79, loop: false });
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[456]);
        var instance7 = new Graphic171(MovieClip.SYNCHED)
            .setTransform(-241.8, 358.6);
        var instance6 = new lib.HEADSET_03()
            .setTransform(651.1, -452.8, 0.772, 0.772);
        var instance5 = new Graphic170(MovieClip.SYNCHED)
            .setTransform(573.6, 300.75);
        var instance4 = new Graphic169(MovieClip.SYNCHED)
            .setTransform(746.8, 359.95);
        var instance3 = new Graphic168(MovieClip.SYNCHED);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[425]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[421]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[426]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[422]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[427]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[423]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[428]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[424]);
        this.addTimedChild(instance8)
            .addTimedChild(instance7)
            .addTimedChild(instance6)
            .addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3, 0, 79, {
                "0": {
                    x: 540.35,
                    y: -59.65
                }
            })
            .addTimedChild(instance2, 0, 19)
            .addTimedChild(instance1, 0, 19)
            .addTimedChild(instance10, 19, 15)
            .addTimedChild(instance9, 19, 15)
            .addTimedChild(instance12, 34, 19)
            .addTimedChild(instance11, 34, 19)
            .addTimedChild(instance14, 53, 26)
            .addTimedChild(instance13, 53, 26);
    });

    var Graphic184 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[222]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[221]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[215]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[214]);
        this.addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic185 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[458]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[457]);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic186 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance1 = new Sprite(fromFrame("REPLACE_HEADSET"))
            .setTransform(-12.2, 22.75, 0.5, 0.5);
        this.addTimedChild(instance1);
    });

    var Graphic187 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[108]);
        this.addTimedChild(instance1);
    });

    var Graphic188 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[109])
            .setTransform(-657.05, -461.95);
        this.addTimedChild(instance1);
    });

    var Graphic189 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[110])
            .setTransform(-497.15, -407.2);
        this.addTimedChild(instance1);
    });

    var Graphic173 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[87])
            .setTransform(-466.8, -453.85);
        this.addTimedChild(instance1);
    });

    var Graphic174 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[88])
            .setTransform(-504.35, -453.65);
        this.addTimedChild(instance1);
    });

    var Graphic175 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[89])
            .setTransform(-458.45, -480.9, 0.972);
        this.addTimedChild(instance1);
    });

    var Graphic176 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[89])
            .setTransform(-458.45, -480.9, 0.972);
        this.addTimedChild(instance1);
    });

    var Graphic177 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[95])
            .setTransform(-386.35, -557.05, 1, 1, 0.174);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[94])
            .setTransform(-385.25, -559.2, 1, 1, 0.174);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[93])
            .setTransform(-486.6, -478.35);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[92])
            .setTransform(-455.15, -505.5, 1, 1, 0.06);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[91])
            .setTransform(-588.15, -407.35, 1.216, 0.851);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[90])
            .setTransform(-596.45, -406.55, 1.239, 0.851);
        this.addTimedChild(instance6)
            .addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic172 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[27]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[395]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[25]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[97]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[406]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[400]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[392]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[409]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[403]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[396]);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[27]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[395]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[25]);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[406]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[400]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[392]);
        var instance21 = new Graphics()
            .drawCommands(shapes.s01[408]);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[402]);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[394]);
        var instance24 = new Graphics()
            .drawCommands(shapes.s01[406]);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[400]);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[392]);
        var instance28 = new Graphics()
            .drawCommands(shapes.s01[28])
            .setTransform(-478.4, -525.85);
        var instance27 = new Graphics()
            .drawCommands(shapes.s01[27])
            .setTransform(0, 2.5);
        var instance26 = new Graphics()
            .drawCommands(shapes.s01[395])
            .setTransform(-478.4, -525.85);
        var instance25 = new Graphics()
            .drawCommands(shapes.s01[25])
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

    var Graphic178 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance1 = new Graphic172(MovieClip.SYNCHED);
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

    var Graphic179 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[102]);
        this.addTimedChild(instance1);
    });

    var Graphic180 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[104])
            .setTransform(-368.7, -483.9, 0.959);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[103])
            .setTransform(-383.8, -485.3);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic181 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[106]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[105])
            .setTransform(-585.65, -483.25);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic190 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance9 = new Graphic181(MovieClip.SYNCHED)
            .setTransform(105.5, -122.2);
        var instance8 = new Graphic180(MovieClip.SYNCHED)
            .setTransform(-96.35, -120.15);
        var instance7 = new Graphic179(MovieClip.SYNCHED)
            .setTransform(4.15, -0.3);
        var instance6 = new Graphic178(MovieClip.SYNCHED)
            .setTransform(-4.65, -73.2);
        var instance5 = new Graphic177(MovieClip.SYNCHED)
            .setTransform(-11.3, -127.5);
        var instance4 = new Graphic176(MovieClip.SYNCHED)
            .setTransform(12.6, -125.95);
        var instance3 = new Graphic175(MovieClip.SYNCHED)
            .setTransform(-27.85, -125.1);
        var instance2 = new Graphic174(MovieClip.SYNCHED)
            .setTransform(8.55, -151.8);
        var instance1 = new Graphic173(MovieClip.SYNCHED)
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

    var Graphic182 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[114])
            .setTransform(-17.65, 14.8, 0.95);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[113])
            .setTransform(-470, -630.85, 0.95);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[112])
            .setTransform(-470, -630.85, 0.95);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[111])
            .setTransform(-470, -630.85, 0.95);
        this.addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic183 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[117])
            .setTransform(14.05, 13.35, 0.95);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[116])
            .setTransform(-438.25, -629.9, 0.95);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[115])
            .setTransform(-438.25, -629.9, 0.95);
        this.addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic191 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[118]);
        var instance2 = new Graphic183(MovieClip.SYNCHED)
            .setTransform(-9.2, -101.15);
        var instance1 = new Graphic182(MovieClip.SYNCHED)
            .setTransform(22.55, -100.2);
        this.addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic192 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[119])
            .setTransform(-461.15, -639, 0.96);
        this.addTimedChild(instance1);
    });

    var Graphic193 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[123]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[122]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[121]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[120]);
        this.addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic194 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[201]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[200]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[199]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[198]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[197]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[196]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[195]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[68]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[67]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[66]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[194]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[500]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[499]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[498]);
        var instance25 = new Graphics()
            .drawCommands(shapes.s01[201])
            .setTransform(-0.6, 2.45, 1, 1, 0, 0.484, 2.657);
        var instance24 = new Graphics()
            .drawCommands(shapes.s01[200])
            .setTransform(-4.3, 1.95, 1, 1, 0, 0.618, 2.523);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[199])
            .setTransform(4.25, 33.75, 1.12, 1.056, -0.238);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[198])
            .setTransform(5.75, 34.95, 1, 1, 0.01);
        var instance21 = new Graphics()
            .drawCommands(shapes.s01[197])
            .setTransform(6.05, 34.9, 1, 1, 0.257);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[196])
            .setTransform(1.05, 40.25, 1, 1, 0.344);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[195])
            .setTransform(34.1, -985.65, 1, 1, 0.684);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[68])
            .setTransform(-464.95, -886.85, 1, 1, 0.178);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[67])
            .setTransform(-538.25, -842.15, 1, 1, 0.091);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[66])
            .setTransform(-668.55, -792.3, 1.087);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[194])
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

    var Graphic195 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[201]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[200]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[199]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[198]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[197]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[196]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[195]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[68]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[67]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[66]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[194]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[500]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[499]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[498]);
        var instance25 = new Graphics()
            .drawCommands(shapes.s01[201])
            .setTransform(-0.6, 2.45, 1, 1, 0, 0.484, 2.657);
        var instance24 = new Graphics()
            .drawCommands(shapes.s01[200])
            .setTransform(-4.3, 1.95, 1, 1, 0, 0.618, 2.523);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[199])
            .setTransform(4.25, 33.75, 1.12, 1.056, -0.238);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[198])
            .setTransform(5.75, 34.95, 1, 1, 0.01);
        var instance21 = new Graphics()
            .drawCommands(shapes.s01[197])
            .setTransform(6.05, 34.9, 1, 1, 0.257);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[196])
            .setTransform(1.05, 40.25, 1, 1, 0.344);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[195])
            .setTransform(34.1, -985.65, 1, 1, 0.684);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[68])
            .setTransform(-464.95, -886.85, 1, 1, 0.178);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[67])
            .setTransform(-538.25, -842.15, 1, 1, 0.091);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[66])
            .setTransform(-668.55, -792.3, 1.087);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[194])
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

    var Graphic196 = MovieClip.extend(function (mode) {
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

    var Graphic238 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance18 = new Graphic196(MovieClip.SYNCHED)
            .setTransform(-342, -418.15, 1.256, 1.256);
        var instance17 = new Graphic195(MovieClip.SYNCHED);
        var instance16 = new Graphic194(MovieClip.SYNCHED);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[492]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[486]);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[493]);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[487]);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[494]);
        var instance21 = new Graphics()
            .drawCommands(shapes.s01[488]);
        var instance24 = new Graphics()
            .drawCommands(shapes.s01[495]);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[489]);
        var instance26 = new Graphics()
            .drawCommands(shapes.s01[496]);
        var instance25 = new Graphics()
            .drawCommands(shapes.s01[490]);
        var instance28 = new Graphics()
            .drawCommands(shapes.s01[494]);
        var instance27 = new Graphics()
            .drawCommands(shapes.s01[488]);
        var instance30 = new Graphics()
            .drawCommands(shapes.s01[493]);
        var instance29 = new Graphics()
            .drawCommands(shapes.s01[487]);
        var instance32 = new Graphics()
            .drawCommands(shapes.s01[497]);
        var instance31 = new Graphics()
            .drawCommands(shapes.s01[491]);
        var instance34 = new Graphics()
            .drawCommands(shapes.s01[492])
            .setTransform(-38.1, -50, 1, 1, 0.131);
        var instance33 = new Graphics()
            .drawCommands(shapes.s01[486])
            .setTransform(50.55, -56.1, 1, 1, -0.165);
        var instance13 = new Graphic193(MovieClip.SYNCHED)
            .setTransform(18.05, -308.3);
        var instance12 = new Graphic192(MovieClip.SYNCHED)
            .setTransform(27.05, -395.6);
        var instance11 = new Graphic191(MovieClip.SYNCHED)
            .setTransform(19.95, -303.6);
        var instance10 = new Graphic190(MovieClip.SYNCHED)
            .setTransform(26.75, -429.2);
        var instance9 = new Graphic189(MovieClip.SYNCHED)
            .setTransform(42.1, -631.9);
        var instance8 = new Graphic188(MovieClip.SYNCHED);
        var instance7 = new Graphic187(MovieClip.SYNCHED);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[461]);
        var instance35 = new Graphics()
            .drawCommands(shapes.s01[462]);
        var instance36 = new Graphics()
            .drawCommands(shapes.s01[463]);
        var instance37 = new Graphics()
            .drawCommands(shapes.s01[464]);
        var instance38 = new Graphics()
            .drawCommands(shapes.s01[465]);
        var instance39 = new Graphics()
            .drawCommands(shapes.s01[466]);
        var instance40 = new Graphics()
            .drawCommands(shapes.s01[467]);
        var instance41 = new Graphics()
            .drawCommands(shapes.s01[468]);
        var instance42 = new Graphics()
            .drawCommands(shapes.s01[469]);
        var instance43 = new Graphics()
            .drawCommands(shapes.s01[470]);
        var instance44 = new Graphics()
            .drawCommands(shapes.s01[471]);
        var instance45 = new Graphics()
            .drawCommands(shapes.s01[472]);
        var instance46 = new Graphics()
            .drawCommands(shapes.s01[473]);
        var instance47 = new Graphics()
            .drawCommands(shapes.s01[474]);
        var instance48 = new Graphics()
            .drawCommands(shapes.s01[475]);
        var instance49 = new Graphics()
            .drawCommands(shapes.s01[476]);
        var instance50 = new Graphics()
            .drawCommands(shapes.s01[477]);
        var instance51 = new Graphics()
            .drawCommands(shapes.s01[478]);
        var instance52 = new Graphics()
            .drawCommands(shapes.s01[479]);
        var instance53 = new Graphics()
            .drawCommands(shapes.s01[480]);
        var instance54 = new Graphics()
            .drawCommands(shapes.s01[481]);
        var instance55 = new Graphics()
            .drawCommands(shapes.s01[482]);
        var instance56 = new Graphics()
            .drawCommands(shapes.s01[483]);
        var instance57 = new Graphics()
            .drawCommands(shapes.s01[484]);
        var instance58 = new Graphics()
            .drawCommands(shapes.s01[485]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[460]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[459]);
        var instance3 = new Graphic186(MovieClip.SYNCHED)
            .setTransform(-120.5, -800.75);
        var instance2 = new Graphic185(MovieClip.SYNCHED)
            .setTransform(14.8, -527.8);
        var instance1 = new Graphic184(MovieClip.SYNCHED)
            .setTransform(-342, -418.15, 1.256, 1.256);
        this.addTimedChild(instance18)
            .addTimedChild(instance17, 0, 59, {
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
            .addTimedChild(instance16, 0, 59, {
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
            .addTimedChild(instance15, 0, 3, {
                "0": {
                    x: -38.1,
                    y: -50,
                    r: 0.131
                }
            })
            .addTimedChild(instance14, 0, 3, {
                "0": {
                    x: 50.55,
                    y: -56.1,
                    r: -0.165
                }
            })
            .addTimedChild(instance20, 3, 1, {
                "3": {
                    x: 2.8,
                    y: -45.85
                }
            })
            .addTimedChild(instance19, 3, 1, {
                "3": {
                    x: -0.8,
                    y: -56.85
                }
            })
            .addTimedChild(instance22, 4, 1, {
                "4": {
                    x: 2.8,
                    y: -45.85
                }
            })
            .addTimedChild(instance21, 4, 1, {
                "4": {
                    x: -0.8,
                    y: -56.85
                }
            })
            .addTimedChild(instance24, 5, 1, {
                "5": {
                    x: 2.8,
                    y: -45.85
                }
            })
            .addTimedChild(instance23, 5, 1, {
                "5": {
                    x: -0.8,
                    y: -56.85
                }
            })
            .addTimedChild(instance26, 6, 13, {
                "6": {
                    x: 2.8,
                    y: -45.85
                }
            })
            .addTimedChild(instance25, 6, 13, {
                "6": {
                    x: -0.8,
                    y: -56.85
                }
            })
            .addTimedChild(instance28, 19, 1, {
                "19": {
                    x: 2.8,
                    y: -45.85
                }
            })
            .addTimedChild(instance27, 19, 1, {
                "19": {
                    x: -0.8,
                    y: -56.85
                }
            })
            .addTimedChild(instance30, 20, 1, {
                "20": {
                    x: 2.8,
                    y: -45.85
                }
            })
            .addTimedChild(instance29, 20, 1, {
                "20": {
                    x: -0.8,
                    y: -56.85
                }
            })
            .addTimedChild(instance32, 21, 1, {
                "21": {
                    x: -38.1,
                    y: -50,
                    r: 0.131
                }
            })
            .addTimedChild(instance31, 21, 1, {
                "21": {
                    x: 50.55,
                    y: -56.1,
                    r: -0.165
                }
            })
            .addTimedChild(instance34, 22, 37)
            .addTimedChild(instance33, 22, 37)
            .addTimedChild(instance13)
            .addTimedChild(instance12)
            .addTimedChild(instance11)
            .addTimedChild(instance10)
            .addTimedChild(instance9)
            .addTimedChild(instance8, 0, 59, {
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
            .addTimedChild(instance7, 0, 59, {
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
            .addTimedChild(instance6, 0, 33)
            .addTimedChild(instance35, 33, 3)
            .addTimedChild(instance36, 36, 1)
            .addTimedChild(instance37, 37, 1)
            .addTimedChild(instance38, 38, 1)
            .addTimedChild(instance39, 39, 1)
            .addTimedChild(instance40, 40, 1)
            .addTimedChild(instance41, 41, 1)
            .addTimedChild(instance42, 42, 1)
            .addTimedChild(instance43, 43, 1)
            .addTimedChild(instance44, 44, 1)
            .addTimedChild(instance45, 45, 1)
            .addTimedChild(instance46, 46, 1)
            .addTimedChild(instance47, 47, 1)
            .addTimedChild(instance48, 48, 1)
            .addTimedChild(instance49, 49, 1)
            .addTimedChild(instance50, 50, 1)
            .addTimedChild(instance51, 51, 1)
            .addTimedChild(instance52, 52, 1)
            .addTimedChild(instance53, 53, 1)
            .addTimedChild(instance54, 54, 1)
            .addTimedChild(instance55, 55, 1)
            .addTimedChild(instance56, 56, 1)
            .addTimedChild(instance57, 57, 1)
            .addTimedChild(instance58, 58, 1)
            .addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic239 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 68, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[3]);
        this.addTimedChild(instance1);
    });

    var Graphic223 = MovieClip.extend(function (mode) {
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

    var Graphic199 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 8, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[16])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic210 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 4, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[16])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic212 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 8, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[16])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic214 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 13, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[16])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic216 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 36, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[16])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic218 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 8, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[16])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic200 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 8, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[16])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic211 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 4, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[16])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic213 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 8, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[16])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic215 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 13, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[16])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic217 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 36, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[16])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic219 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 8, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[16])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic201 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 87, loop: false });
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[20]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[19]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[17]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[17]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[18]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[17]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[17]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[18]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[17]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[17]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[18]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[17]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[17]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[18]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[17]);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[17]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[18]);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[17])
            .setTransform(-1289.25, -221.05);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[17])
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

    var Graphic202 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 87, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[21])
            .setTransform(-1303.95, -197.85);
        this.addTimedChild(instance1);
    });

    var Graphic203 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 87, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[22])
            .setTransform(-1268.05, -199.05);
        this.addTimedChild(instance1);
    });

    var Graphic197 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 87, loop: false });
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[41]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[35]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[31]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[42]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[36]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[32]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[30]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[44]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[38]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[33]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[27]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[26]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[25]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[41]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[35]);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[31]);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[43]);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[40]);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[37]);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[41]);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[35]);
        var instance21 = new Graphics()
            .drawCommands(shapes.s01[31]);
        var instance27 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance26 = new Graphics()
            .drawCommands(shapes.s01[27]);
        var instance25 = new Graphics()
            .drawCommands(shapes.s01[26]);
        var instance24 = new Graphics()
            .drawCommands(shapes.s01[25]);
        var instance28 = new Graphics()
            .drawCommands(shapes.s01[29]);
        var instance29 = new Graphics()
            .drawCommands(shapes.s01[30]);
        var instance30 = new Graphics()
            .drawCommands(shapes.s01[29]);
        var instance33 = new Graphics()
            .drawCommands(shapes.s01[41]);
        var instance32 = new Graphics()
            .drawCommands(shapes.s01[35]);
        var instance31 = new Graphics()
            .drawCommands(shapes.s01[31]);
        var instance37 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance36 = new Graphics()
            .drawCommands(shapes.s01[27]);
        var instance35 = new Graphics()
            .drawCommands(shapes.s01[26]);
        var instance34 = new Graphics()
            .drawCommands(shapes.s01[25]);
        var instance38 = new Graphics()
            .drawCommands(shapes.s01[23]);
        var instance41 = new Graphics()
            .drawCommands(shapes.s01[41]);
        var instance40 = new Graphics()
            .drawCommands(shapes.s01[35]);
        var instance39 = new Graphics()
            .drawCommands(shapes.s01[31]);
        var instance42 = new Graphics()
            .drawCommands(shapes.s01[29]);
        var instance43 = new Graphics()
            .drawCommands(shapes.s01[30]);
        var instance44 = new Graphics()
            .drawCommands(shapes.s01[29]);
        var instance45 = new Graphics()
            .drawCommands(shapes.s01[23]);
        var instance48 = new Graphics()
            .drawCommands(shapes.s01[41]);
        var instance47 = new Graphics()
            .drawCommands(shapes.s01[35]);
        var instance46 = new Graphics()
            .drawCommands(shapes.s01[31]);
        var instance51 = new Graphics()
            .drawCommands(shapes.s01[42]);
        var instance50 = new Graphics()
            .drawCommands(shapes.s01[36]);
        var instance49 = new Graphics()
            .drawCommands(shapes.s01[32]);
        var instance52 = new Graphics()
            .drawCommands(shapes.s01[23]);
        var instance55 = new Graphics()
            .drawCommands(shapes.s01[41]);
        var instance54 = new Graphics()
            .drawCommands(shapes.s01[35]);
        var instance53 = new Graphics()
            .drawCommands(shapes.s01[31]);
        var instance56 = new Graphics()
            .drawCommands(shapes.s01[29]);
        var instance57 = new Graphics()
            .drawCommands(shapes.s01[30]);
        var instance58 = new Graphics()
            .drawCommands(shapes.s01[23]);
        var instance59 = new Graphics()
            .drawCommands(shapes.s01[24]);
        var instance60 = new Graphics()
            .drawCommands(shapes.s01[23]);
        var instance61 = new Graphics()
            .drawCommands(shapes.s01[24]);
        var instance62 = new Graphics()
            .drawCommands(shapes.s01[23])
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

    var Graphic204 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 87, loop: false });
        var instance1 = new Graphic197(MovieClip.SYNCHED);
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

    var Graphic205 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 87, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[46]);
        this.addTimedChild(instance1);
    });

    var Graphic206 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 87, loop: false });
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[50])
            .setTransform(-1336.85, -168.4, 1.033, 1.033);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[50])
            .setTransform(-1357.3, -164.4, 1.033, 1.033);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[50])
            .setTransform(-1317.25, -167, 1.033, 1.033);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[50])
            .setTransform(-1316.95, -139.1, 0.978, 0.978);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[50])
            .setTransform(-1265.9, -139.25, 1.033, 1.033);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[50])
            .setTransform(-1170.45, -142.3, 0.948, 0.948);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[50])
            .setTransform(-1185.7, -149.8, 0.948, 0.948);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[50])
            .setTransform(-1177.25, -135.65, 0.881, 0.881);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[50])
            .setTransform(-1201.55, -112.45, 0.881, 0.881);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[50])
            .setTransform(-1213, -97.9, 0.881, 0.881);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[50])
            .setTransform(-1255.65, -125.65, 1.033, 1.033);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[49]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[48]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[47])
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

    var Graphic198 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 87, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[52])
            .setTransform(-1294.55, -252.5);
        this.addTimedChild(instance1);
    });

    var Graphic207 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 87, loop: false });
        var instance2 = new Graphic198(MovieClip.SYNCHED)
            .setTransform(6.55, -82.85);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[51]);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic208 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 87, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[54]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[53]);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic209 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 87, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[56]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[55]);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic220 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 87, loop: false });
        var instance11 = new Graphic209(MovieClip.SYNCHED)
            .setTransform(-61.45, -103.85);
        var instance10 = new Graphic208(MovieClip.SYNCHED)
            .setTransform(81.05, -103.55);
        var instance9 = new Graphic207(MovieClip.SYNCHED)
            .setTransform(0.05);
        var instance8 = new Graphic206(MovieClip.SYNCHED)
            .setTransform(6.7, -172.05);
        var instance7 = new Graphic205(MovieClip.SYNCHED)
            .setTransform(-6.35, -91.75);
        var instance6 = new Graphic204(MovieClip.SYNCHED)
            .setTransform(-2.6, -68.75);
        var instance5 = new Graphic203(MovieClip.SYNCHED);
        var instance4 = new Graphic202(MovieClip.SYNCHED);
        var instance3 = new Graphic201(MovieClip.SYNCHED);
        var instance2 = new Graphic200(MovieClip.SYNCHED);
        var instance1 = new Graphic199(MovieClip.SYNCHED);
        var instance13 = new Graphic211(MovieClip.SYNCHED);
        var instance12 = new Graphic210(MovieClip.SYNCHED);
        var instance15 = new Graphic213(MovieClip.SYNCHED);
        var instance14 = new Graphic212(MovieClip.SYNCHED);
        var instance17 = new Graphic215(MovieClip.SYNCHED);
        var instance16 = new Graphic214(MovieClip.SYNCHED);
        var instance19 = new Graphic217(MovieClip.SYNCHED);
        var instance18 = new Graphic216(MovieClip.SYNCHED);
        var instance21 = new Graphic219(MovieClip.SYNCHED);
        var instance20 = new Graphic218(MovieClip.SYNCHED);
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

    var Graphic221 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 87, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[57])
            .setTransform(-1222.8, -397.15, 0.95);
        this.addTimedChild(instance1);
    });

    var Graphic222 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 2, loop: false });
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[64]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[12]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[11]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[10]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[9]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[59]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[58]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[63]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[62])
            .setTransform(-1.65, -2.05);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[61])
            .setTransform(21.3, -1.55, 1, 1, 0.393);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[60])
            .setTransform(3.2, 1.2, 1, 1, 0.065);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[60])
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

    var Graphic224 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[64]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[63]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[62]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[61]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[60]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[60]);
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
            .drawCommands(shapes.s01[59]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[58]);
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

    var Graphic240 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 143, loop: false });
        var instance4 = new Graphic222(MovieClip.SYNCHED);
        var instance6 = new Graphic224(MovieClip.SYNCHED);
        var instance3 = new Graphic221(MovieClip.SYNCHED);
        var instance2 = new Graphic220(MovieClip.SYNCHED);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[15]);
        var instance5 = new Graphic223(MovieClip.SYNCHED);
        this.addTimedChild(instance4, 42, 2, {
                "42": {
                    x: -7.85,
                    y: -449.1,
                    r: 1.326
                },
                "43": {
                    x: -37.35,
                    y: -453
                }
            })
            .addTimedChild(instance6, 127, 3, {
                "127": {
                    x: -37.35,
                    y: -453,
                    r: 1.326
                },
                "128": {
                    x: -7.85,
                    y: -449.1
                },
                "129": {
                    x: 15.45,
                    y: -446.85
                }
            })
            .addTimedChild(instance3, 41, 87, {
                "41": {
                    x: -0.35,
                    y: -520.15,
                    r: -0.671
                },
                "42": {
                    x: -16.2,
                    y: -524.65,
                    r: -0.615
                },
                "43": {
                    x: -27.45,
                    y: -527.85,
                    r: -0.576
                },
                "44": {
                    x: -34.2,
                    y: -529.8,
                    r: -0.552
                },
                "45": {
                    x: -36.5,
                    y: -530.4,
                    r: -0.544
                },
                "63": {
                    y: -531,
                    r: -0.552
                },
                "64": {
                    x: -37.15,
                    y: -532.7,
                    r: -0.571
                },
                "65": {
                    x: -37.5,
                    y: -534.25,
                    r: -0.589
                },
                "66": {
                    x: -37.65,
                    y: -535.1,
                    r: -0.601
                },
                "67": {
                    x: -37.8,
                    y: -535.45,
                    r: -0.604
                },
                "81": {
                    x: -38.2,
                    y: -535.85
                },
                "82": {
                    x: -39.55,
                    y: -540.9,
                    r: -0.638
                },
                "83": {
                    x: -40.55,
                    y: -544,
                    r: -0.658
                },
                "84": {
                    x: -40.95,
                    y: -544.95,
                    r: -0.664
                },
                "122": {
                    x: -40.15,
                    y: -544.15
                },
                "123": {
                    x: -37.65,
                    y: -543.2,
                    r: -0.665
                },
                "124": {
                    x: -27.85,
                    y: -537.95
                },
                "125": {
                    x: -11.6,
                    y: -529.25,
                    r: -0.667
                },
                "126": {
                    x: 11.2,
                    y: -517,
                    r: -0.668
                },
                "127": {
                    x: 40.7,
                    y: -501.25,
                    r: -0.671
                }
            })
            .addTimedChild(instance2, 41, 87, {
                "41": {
                    x: -20.2,
                    y: -559.1,
                    r: -0.679
                },
                "42": {
                    x: -47.35,
                    y: -564.3,
                    r: -0.578
                },
                "43": {
                    x: -66.6,
                    y: -567.95,
                    r: -0.506
                },
                "44": {
                    x: -78.05,
                    y: -570.05,
                    r: -0.464
                },
                "45": {
                    x: -82,
                    y: -570.95,
                    r: -0.449
                },
                "63": {
                    x: -82.3,
                    y: -571.2,
                    r: -0.457
                },
                "64": {
                    x: -83.6,
                    y: -572,
                    r: -0.476
                },
                "65": {
                    x: -84.75,
                    y: -572.65,
                    r: -0.494
                },
                "66": {
                    x: -85.4,
                    y: -573.1,
                    r: -0.506
                },
                "67": {
                    x: -85.65,
                    y: -573.2,
                    r: -0.509
                },
                "81": {
                    x: -86.05,
                    y: -573.6
                },
                "82": {
                    x: -88.65,
                    y: -577,
                    r: -0.494
                },
                "83": {
                    x: -90.35,
                    y: -579.15,
                    r: -0.485
                },
                "84": {
                    x: -91,
                    y: -579.75,
                    r: -0.482
                },
                "122": {
                    x: -90.2,
                    y: -578.95
                },
                "123": {
                    x: -86.5,
                    y: -578.15,
                    r: -0.49
                },
                "124": {
                    x: -73.1,
                    y: -573.45,
                    r: -0.514
                },
                "125": {
                    x: -50.85,
                    y: -565.6,
                    r: -0.553
                },
                "126": {
                    x: -19.6,
                    y: -554.6,
                    r: -0.608
                },
                "127": {
                    x: 20.85,
                    y: -540.2,
                    r: -0.679
                }
            })
            .addTimedChild(instance1)
            .addTimedChild(instance5, 44, 83, {
                "44": {
                    x: -86.8,
                    y: -437.8,
                    kx: 1.508,
                    ky: 1.633
                },
                "45": {
                    x: -83.7,
                    y: -438.1
                },
                "46": {
                    x: -83.3
                },
                "125": {
                    x: -83.7
                },
                "126": {
                    x: -86.8,
                    y: -437.8
                }
            });
    });

    var Graphic241 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 143, loop: false });
        var instance1 = new Sprite(fromFrame("REPLACE_SIGN"))
            .setTransform(-220, -148);
        this.addTimedChild(instance1);
    });

    var Graphic242 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 39, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[503]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[501]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[502]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[503]);
        this.addTimedChild(instance1, 0, 30)
            .addTimedChild(instance2, 16, 9, {
                "16": {
                    x: 0,
                    y: 0,
                    sx: 1,
                    sy: 1
                },
                "17": {
                    x: 5,
                    y: 8.25,
                    sx: 2.426,
                    sy: 2.426
                },
                "18": {
                    x: 9.6,
                    y: 15.9,
                    sx: 3.741,
                    sy: 3.741
                },
                "19": {
                    x: 13.8,
                    y: 22.9,
                    sx: 4.944,
                    sy: 4.944
                },
                "20": {
                    x: 17.65,
                    y: 29.25,
                    sx: 6.039,
                    sy: 6.039
                },
                "21": {
                    x: 21.1,
                    y: 34.95,
                    sx: 7.027,
                    sy: 7.027
                },
                "22": {
                    x: 24.2,
                    y: 40.05,
                    sx: 7.909,
                    sy: 7.909
                },
                "23": {
                    x: 26.95,
                    y: 44.6,
                    sx: 8.686,
                    sy: 8.686
                },
                "24": {
                    x: 29.3,
                    y: 48.5,
                    sx: 9.36,
                    sy: 9.36
                }
            })
            .addTimedChild(instance3, 25, 13, {
                "25": {
                    x: 0,
                    y: 0,
                    sx: 1,
                    sy: 1
                },
                "26": {
                    x: 0.15,
                    y: 0.3,
                    sx: 1.047,
                    sy: 1.047
                },
                "27": {
                    x: 0.3,
                    y: 0.5,
                    sx: 1.084,
                    sy: 1.084
                },
                "28": {
                    x: 0.4,
                    y: 0.65,
                    sx: 1.11,
                    sy: 1.11
                },
                "29": {
                    x: 0.45,
                    y: 0.75,
                    sx: 1.126,
                    sy: 1.126
                },
                "30": {
                    sx: 1.131,
                    sy: 1.131
                }
            })
            .addTimedChild(instance4, 38, 1);
    });

    lib.s01 = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 547,
            framerate: 12,
            loop: false
        });
        var instance5 = new lib.BG_MESSY_BEDROOM();
        var instance4 = new Graphic228(MovieClip.SYNCHED);
        var instance6 = new lib.BG_MESSY_BEDROOM_CU_02();
        var instance7 = new Graphic229(MovieClip.SYNCHED);
        var instance3 = new Graphic227(MovieClip.SYNCHED);
        var instance2 = new Graphic226(MovieClip.SYNCHED);
        var instance1 = new Graphic225(MovieClip.SYNCHED);
        var instance9 = new Graphic231(MovieClip.SYNCHED);
        var instance11 = new Graphic233(MovieClip.SYNCHED);
        var instance10 = new Graphic232(MovieClip.SYNCHED);
        var instance8 = new Graphic230(MovieClip.SYNCHED);
        var instance12 = new Graphic234(MovieClip.SYNCHED);
        var instance15 = new lib.BG_MESSY_BEDROOM_ZOOM();
        var instance14 = new Graphic236(MovieClip.SYNCHED);
        var instance13 = new Graphic235(MovieClip.SYNCHED);
        var instance16 = new Graphic237(MovieClip.SYNCHED);
        var instance18 = new lib.BG_MESSY_BEDROOM_ZOOM();
        var instance22 = new lib.BG_MESSY_BEDROOM();
        var instance21 = new Graphic241(MovieClip.SYNCHED);
        var instance20 = new Graphic240(MovieClip.SYNCHED);
        var instance19 = new Graphic239(MovieClip.SYNCHED);
        var instance23 = new Graphic242(MovieClip.SYNCHED);
        var instance17 = new Graphic238(MovieClip.SYNCHED);
        this.addTimedChild(instance5, 0, 77, {
                "0": {
                    x: -231.35,
                    y: -53.65,
                    sx: 0.571,
                    sy: 0.571
                }
            })
            .addTimedChild(instance4, 0, 77, {
                "0": {
                    x: 759.05,
                    y: 387.75,
                    sx: 0.414,
                    sy: 0.414,
                    ky: 3.142
                }
            })
            .addTimedChild(instance6, 77, 109, {
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
            .addTimedChild(instance7, 85, 51, {
                "85": {
                    x: 1231.6,
                    y: 925.75,
                    sx: 0.977,
                    sy: 0.977
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
            .addTimedChild(instance2, 0, 77, {
                "0": {
                    x: -231.35,
                    y: -53.65,
                    sx: 0.571,
                    sy: 0.571
                }
            })
            .addTimedChild(instance1, 0, 77, {
                "0": {
                    x: 333.65,
                    y: 389.2,
                    sx: 0.524,
                    sy: 0.524
                }
            })
            .addTimedChild(instance9, 136, 24, {
                "136": {
                    x: 134.65,
                    y: 694.75,
                    sx: 1.181,
                    sy: 1.181,
                    ky: 3.142
                }
            })
            .addTimedChild(instance11, 160, 26, {
                "160": {
                    x: -6.6,
                    y: 484.35,
                    sx: 1.221,
                    sy: 1.221
                }
            })
            .addTimedChild(instance10, 160, 26, {
                "160": {
                    x: 17.45,
                    y: 214,
                    sx: 1.442,
                    sy: 1.442
                }
            })
            .addTimedChild(instance8, 136, 50, {
                "136": {
                    x: 413.35,
                    y: 1054.45,
                    sx: 1.598,
                    sy: 1.598
                },
                "160": {
                    x: -6.6,
                    y: 484.35,
                    sx: 1.221,
                    sy: 1.221
                }
            })
            .addTimedChild(instance12, 186, 60, {
                "186": {
                    x: 511.95,
                    y: 287.95,
                    sx: 0.533,
                    sy: 0.533
                }
            })
            .addTimedChild(instance15, 246, 59, {
                "246": {
                    x: -1618.55,
                    y: -914.95,
                    sx: 1.897,
                    sy: 1.897
                }
            })
            .addTimedChild(instance14, 246, 59, {
                "246": {
                    x: -85.8,
                    y: 350.2,
                    sx: 2.07,
                    sy: 1.92
                }
            })
            .addTimedChild(instance13, 246, 59, {
                "246": {
                    x: 447.95,
                    y: 1236.55,
                    sx: 1.897,
                    sy: 1.897
                }
            })
            .addTimedChild(instance16, 305, 79, {
                "305": {
                    x: 518.8,
                    y: 285.85,
                    sx: 0.533,
                    sy: 0.533
                }
            })
            .addTimedChild(instance18, 384, 20, {
                "384": {
                    x: -1618.55,
                    y: -914.95,
                    sx: 1.897,
                    sy: 1.897
                }
            })
            .addTimedChild(instance22, 404, 143, {
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
            .addTimedChild(instance21, 404, 143, {
                "404": {
                    x: 416.6,
                    y: 140.1,
                    sx: 0.275,
                    sy: 0.275,
                    r: 0.078
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
            .addTimedChild(instance20, 404, 143, {
                "404": {
                    x: 197.85,
                    y: 450.8,
                    sx: 0.469,
                    sy: 0.469,
                    ky: 3.142
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
            .addTimedChild(instance19, 404, 68, {
                "404": {
                    x: -327.95,
                    y: -76.55,
                    sx: 0.649,
                    sy: 0.649
                }
            })
            .addTimedChild(instance23, 411, 39, {
                "411": {
                    x: 512.15,
                    y: 388.05,
                    sx: 0.027,
                    sy: 0.027,
                    a: 1
                },
                "412": {
                    x: 512.152,
                    y: 384.46,
                    sx: 0.04,
                    sy: 0.04
                },
                "413": {
                    x: 512.161,
                    y: 372.418,
                    sx: 0.081,
                    sy: 0.081
                },
                "414": {
                    x: 512.183,
                    y: 351.589,
                    sx: 0.153,
                    sy: 0.153
                },
                "415": {
                    x: 512.238,
                    y: 326.573,
                    sx: 0.24,
                    sy: 0.24
                },
                "416": {
                    x: 512.15,
                    y: 305.7,
                    sx: 0.311,
                    sy: 0.311
                },
                "417": {
                    x: 512.098,
                    y: 293.647,
                    sx: 0.353,
                    sy: 0.353
                },
                "418": {
                    x: 512.1,
                    y: 290,
                    sx: 0.365,
                    sy: 0.365
                },
                "419": {
                    x: 512.117,
                    y: 290.047,
                    sx: 0.377,
                    sy: 0.377
                },
                "420": {
                    x: 512.146,
                    y: 290.006,
                    sx: 0.384,
                    sy: 0.384
                },
                "421": {
                    x: 512.1,
                    y: 290,
                    sx: 0.386,
                    sy: 0.386
                },
                "422": {
                    x: 512.093,
                    y: 290.038,
                    sx: 0.382,
                    sy: 0.382
                },
                "423": {
                    x: 512.119,
                    y: 290.003,
                    sx: 0.369,
                    sy: 0.369
                },
                "424": {
                    x: 512.182,
                    y: 290.026,
                    sx: 0.346,
                    sy: 0.346
                },
                "425": {
                    x: 512.16,
                    y: 290.008,
                    sx: 0.324,
                    sy: 0.324
                },
                "426": {
                    x: 512.163,
                    y: 290.01,
                    sx: 0.311,
                    sy: 0.311
                },
                "427": {
                    x: 512.1,
                    y: 290,
                    sx: 0.306,
                    sy: 0.306
                },
                "428": {
                    x: 512.119,
                    y: 290.026,
                    sx: 0.297,
                    sy: 0.297
                },
                "429": {
                    x: 512.101,
                    y: 290.037,
                    sx: 0.291,
                    sy: 0.291
                },
                "430": {
                    x: 512.072,
                    y: 290.011,
                    sx: 0.287,
                    sy: 0.287
                },
                "431": {
                    x: 512.1,
                    y: 290,
                    sx: 0.285,
                    sy: 0.285
                },
                "432": {
                    x: 512.107,
                    y: 291.465,
                    sx: 0.306,
                    sy: 0.306
                },
                "433": {
                    x: 512.101,
                    y: 296.223,
                    sx: 0.374,
                    sy: 0.374
                },
                "434": {
                    x: 512.067,
                    y: 304.008,
                    sx: 0.486,
                    sy: 0.486
                },
                "435": {
                    x: 512.091,
                    y: 311.796,
                    sx: 0.598,
                    sy: 0.598
                },
                "436": {
                    x: 512.085,
                    y: 316.504,
                    sx: 0.667,
                    sy: 0.667
                },
                "437": {
                    x: 512,
                    y: 318,
                    sx: 0.687,
                    sy: 0.687
                },
                "438": {
                    x: 512.039,
                    y: 317.677,
                    sx: 0.684,
                    sy: 0.684
                },
                "439": {
                    x: 512.014,
                    y: 316.396,
                    sx: 0.674,
                    sy: 0.674
                },
                "440": {
                    x: 512.025,
                    y: 314.369,
                    sx: 0.658,
                    sy: 0.658
                },
                "441": {
                    x: 512.036,
                    y: 312.341,
                    sx: 0.642,
                    sy: 0.642
                },
                "442": {
                    x: 512.061,
                    y: 311.061,
                    sx: 0.632,
                    sy: 0.632
                },
                "443": {
                    x: 511.95,
                    y: 310.55,
                    sx: 0.629,
                    sy: 0.629
                },
                "444": {
                    a: 0.69
                },
                "445": {
                    a: 0.44
                },
                "446": {
                    a: 0.25
                },
                "447": {
                    a: 0.11
                },
                "448": {
                    a: 0.03
                },
                "449": {
                    a: 0
                }
            })
            .addTimedChild(instance17, 384, 59, {
                "384": {
                    x: 456.9,
                    y: 1410.65,
                    sx: 2.133,
                    sy: 2.133,
                    c: [
                        1,
                        0,
                        1,
                        0,
                        1,
                        0
                    ]
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
                    x: 498.827,
                    y: 578.172
                },
                "423": {
                    y: 560.722
                },
                "424": {
                    x: 498.812,
                    y: 546.003
                },
                "425": {
                    y: 534.003
                },
                "426": {
                    x: 498.75,
                    y: 524.6
                },
                "427": {
                    x: 498.765,
                    y: 517.916
                },
                "428": {
                    x: 498.78,
                    y: 513.932
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
                    sy: 0.458,
                    c: [
                        0.96,
                        0.04,
                        0.96,
                        0.04,
                        0.96,
                        0.04
                    ]
                },
                "439": {
                    x: 500.049,
                    y: 512.883,
                    sx: 0.427,
                    sy: 0.427,
                    c: [
                        0.84,
                        0.16,
                        0.84,
                        0.16,
                        0.84,
                        0.16
                    ]
                },
                "440": {
                    x: 501.681,
                    y: 480.52,
                    sx: 0.376,
                    sy: 0.376,
                    c: [
                        0.64,
                        0.36,
                        0.64,
                        0.36,
                        0.64,
                        0.36
                    ]
                },
                "441": {
                    x: 503.828,
                    y: 435.216,
                    sx: 0.304,
                    sy: 0.304,
                    c: [
                        0.36,
                        0.64,
                        0.36,
                        0.64,
                        0.36,
                        0.64
                    ]
                },
                "442": {
                    x: 506.6,
                    y: 376.8,
                    sx: 0.211,
                    sy: 0.211,
                    c: [
                        0,
                        1,
                        0,
                        1,
                        0,
                        1
                    ]
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