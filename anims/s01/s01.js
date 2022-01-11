(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Sprite = PIXI.Sprite;
    var fromFrame = PIXI.Texture.fromFrame;
    var Graphics = PIXI.Graphics;
    var shapes = PIXI.animate.ShapesCache;

    var Graphic314 = MovieClip.extend(function (mode) {
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

    var Graphic315 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 186, loop: false });
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[7]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[6]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[5]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[4]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[3]);
        this.addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic25 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 89, loop: false });
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[18])
            .setTransform(-3.45, -28.35);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[17])
            .setTransform(17.2, 0.1, 1, 1, 0.714);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[16])
            .setTransform(10.85, -42.1, 1, 1, -0.069);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[15])
            .setTransform(0.55, -37.45);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[14])
            .setTransform(-3.45, -28.35);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[13])
            .setTransform(-3.45, -28.35);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[12])
            .setTransform(11.05, 34.75, 1, 1, 1.207);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[11])
            .setTransform(-3.45, -28.35);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[10])
            .setTransform(-3.45, -28.35);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[9])
            .setTransform(-3.45, -28.35);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[8])
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
            .drawCommands(shapes.s01[21])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic14 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 41, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[21])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic16 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 13, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[21])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic18 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 31, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[21])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic20 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 39, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[21])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic4 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 6, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[21])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic15 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 41, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[21])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic17 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 13, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[21])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic19 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 31, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[21])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic21 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 39, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[21])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic5 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 136, loop: false });
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[25]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[24]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[22]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[22]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[23]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[22]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[22]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[23]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[22]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[22]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[23]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[22]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[22]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[23]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[22])
            .setTransform(-1289.25, -221.05);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[22])
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
            .drawCommands(shapes.s01[26])
            .setTransform(-1303.95, -197.85);
        this.addTimedChild(instance1);
    });

    var Graphic7 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 136, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[27])
            .setTransform(-1268.05, -199.05);
        this.addTimedChild(instance1);
    });

    var Graphic1 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 136, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[46]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[40]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[36]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[29]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[46]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[40]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[36]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[33]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[32]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[31]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[30]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[34]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[47]);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[41]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[37]);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[33]);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[32]);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[31]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[30]);
        var instance21 = new Graphics()
            .drawCommands(shapes.s01[34]);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[35]);
        var instance26 = new Graphics()
            .drawCommands(shapes.s01[33]);
        var instance25 = new Graphics()
            .drawCommands(shapes.s01[32]);
        var instance24 = new Graphics()
            .drawCommands(shapes.s01[31]);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[30]);
        var instance27 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance30 = new Graphics()
            .drawCommands(shapes.s01[48]);
        var instance29 = new Graphics()
            .drawCommands(shapes.s01[45]);
        var instance28 = new Graphics()
            .drawCommands(shapes.s01[42]);
        var instance33 = new Graphics()
            .drawCommands(shapes.s01[46]);
        var instance32 = new Graphics()
            .drawCommands(shapes.s01[40]);
        var instance31 = new Graphics()
            .drawCommands(shapes.s01[36]);
        var instance37 = new Graphics()
            .drawCommands(shapes.s01[33]);
        var instance36 = new Graphics()
            .drawCommands(shapes.s01[32]);
        var instance35 = new Graphics()
            .drawCommands(shapes.s01[31]);
        var instance34 = new Graphics()
            .drawCommands(shapes.s01[30]);
        var instance40 = new Graphics()
            .drawCommands(shapes.s01[48]);
        var instance39 = new Graphics()
            .drawCommands(shapes.s01[45]);
        var instance38 = new Graphics()
            .drawCommands(shapes.s01[42]);
        var instance43 = new Graphics()
            .drawCommands(shapes.s01[46]);
        var instance42 = new Graphics()
            .drawCommands(shapes.s01[40]);
        var instance41 = new Graphics()
            .drawCommands(shapes.s01[36]);
        var instance47 = new Graphics()
            .drawCommands(shapes.s01[33]);
        var instance46 = new Graphics()
            .drawCommands(shapes.s01[32]);
        var instance45 = new Graphics()
            .drawCommands(shapes.s01[31]);
        var instance44 = new Graphics()
            .drawCommands(shapes.s01[30]);
        var instance48 = new Graphics()
            .drawCommands(shapes.s01[35]);
        var instance49 = new Graphics()
            .drawCommands(shapes.s01[34]);
        var instance50 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance51 = new Graphics()
            .drawCommands(shapes.s01[29]);
        var instance52 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance55 = new Graphics()
            .drawCommands(shapes.s01[46]);
        var instance54 = new Graphics()
            .drawCommands(shapes.s01[40]);
        var instance53 = new Graphics()
            .drawCommands(shapes.s01[36]);
        var instance58 = new Graphics()
            .drawCommands(shapes.s01[47]);
        var instance57 = new Graphics()
            .drawCommands(shapes.s01[41]);
        var instance56 = new Graphics()
            .drawCommands(shapes.s01[37]);
        var instance62 = new Graphics()
            .drawCommands(shapes.s01[33]);
        var instance61 = new Graphics()
            .drawCommands(shapes.s01[32]);
        var instance60 = new Graphics()
            .drawCommands(shapes.s01[31]);
        var instance59 = new Graphics()
            .drawCommands(shapes.s01[30]);
        var instance63 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance64 = new Graphics()
            .drawCommands(shapes.s01[35]);
        var instance67 = new Graphics()
            .drawCommands(shapes.s01[47]);
        var instance66 = new Graphics()
            .drawCommands(shapes.s01[41]);
        var instance65 = new Graphics()
            .drawCommands(shapes.s01[37]);
        var instance70 = new Graphics()
            .drawCommands(shapes.s01[48]);
        var instance69 = new Graphics()
            .drawCommands(shapes.s01[45]);
        var instance68 = new Graphics()
            .drawCommands(shapes.s01[42]);
        var instance71 = new Graphics()
            .drawCommands(shapes.s01[35]);
        var instance72 = new Graphics()
            .drawCommands(shapes.s01[29]);
        var instance73 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance74 = new Graphics()
            .drawCommands(shapes.s01[29]);
        var instance77 = new Graphics()
            .drawCommands(shapes.s01[49]);
        var instance76 = new Graphics()
            .drawCommands(shapes.s01[43]);
        var instance75 = new Graphics()
            .drawCommands(shapes.s01[38]);
        var instance78 = new Graphics()
            .drawCommands(shapes.s01[35]);
        var instance81 = new Graphics()
            .drawCommands(shapes.s01[46]);
        var instance80 = new Graphics()
            .drawCommands(shapes.s01[40]);
        var instance79 = new Graphics()
            .drawCommands(shapes.s01[36]);
        var instance84 = new Graphics()
            .drawCommands(shapes.s01[48]);
        var instance83 = new Graphics()
            .drawCommands(shapes.s01[45]);
        var instance82 = new Graphics()
            .drawCommands(shapes.s01[42]);
        var instance87 = new Graphics()
            .drawCommands(shapes.s01[46]);
        var instance86 = new Graphics()
            .drawCommands(shapes.s01[40]);
        var instance85 = new Graphics()
            .drawCommands(shapes.s01[36]);
        var instance91 = new Graphics()
            .drawCommands(shapes.s01[33]);
        var instance90 = new Graphics()
            .drawCommands(shapes.s01[32]);
        var instance89 = new Graphics()
            .drawCommands(shapes.s01[31]);
        var instance88 = new Graphics()
            .drawCommands(shapes.s01[30]);
        var instance92 = new Graphics()
            .drawCommands(shapes.s01[35]);
        var instance95 = new Graphics()
            .drawCommands(shapes.s01[46]);
        var instance94 = new Graphics()
            .drawCommands(shapes.s01[40]);
        var instance93 = new Graphics()
            .drawCommands(shapes.s01[36]);
        var instance96 = new Graphics()
            .drawCommands(shapes.s01[29]);
        var instance100 = new Graphics()
            .drawCommands(shapes.s01[33]);
        var instance99 = new Graphics()
            .drawCommands(shapes.s01[32]);
        var instance98 = new Graphics()
            .drawCommands(shapes.s01[31]);
        var instance97 = new Graphics()
            .drawCommands(shapes.s01[30]);
        var instance101 = new Graphics()
            .drawCommands(shapes.s01[35]);
        var instance104 = new Graphics()
            .drawCommands(shapes.s01[47]);
        var instance103 = new Graphics()
            .drawCommands(shapes.s01[41]);
        var instance102 = new Graphics()
            .drawCommands(shapes.s01[37]);
        var instance107 = new Graphics()
            .drawCommands(shapes.s01[50]);
        var instance106 = new Graphics()
            .drawCommands(shapes.s01[44]);
        var instance105 = new Graphics()
            .drawCommands(shapes.s01[39]);
        var instance110 = new Graphics()
            .drawCommands(shapes.s01[47]);
        var instance109 = new Graphics()
            .drawCommands(shapes.s01[41]);
        var instance108 = new Graphics()
            .drawCommands(shapes.s01[37]);
        var instance113 = new Graphics()
            .drawCommands(shapes.s01[49]);
        var instance112 = new Graphics()
            .drawCommands(shapes.s01[43]);
        var instance111 = new Graphics()
            .drawCommands(shapes.s01[38]);
        var instance117 = new Graphics()
            .drawCommands(shapes.s01[33]);
        var instance116 = new Graphics()
            .drawCommands(shapes.s01[32]);
        var instance115 = new Graphics()
            .drawCommands(shapes.s01[31]);
        var instance114 = new Graphics()
            .drawCommands(shapes.s01[30]);
        var instance120 = new Graphics()
            .drawCommands(shapes.s01[46]);
        var instance119 = new Graphics()
            .drawCommands(shapes.s01[40]);
        var instance118 = new Graphics()
            .drawCommands(shapes.s01[36]);
        var instance121 = new Graphics()
            .drawCommands(shapes.s01[29]);
        var instance125 = new Graphics()
            .drawCommands(shapes.s01[33]);
        var instance124 = new Graphics()
            .drawCommands(shapes.s01[32]);
        var instance123 = new Graphics()
            .drawCommands(shapes.s01[31]);
        var instance122 = new Graphics()
            .drawCommands(shapes.s01[30]);
        var instance128 = new Graphics()
            .drawCommands(shapes.s01[46]);
        var instance127 = new Graphics()
            .drawCommands(shapes.s01[40]);
        var instance126 = new Graphics()
            .drawCommands(shapes.s01[36]);
        var instance131 = new Graphics()
            .drawCommands(shapes.s01[47]);
        var instance130 = new Graphics()
            .drawCommands(shapes.s01[41])
            .setTransform(-5.8, 24);
        var instance129 = new Graphics()
            .drawCommands(shapes.s01[37])
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
            .drawCommands(shapes.s01[51]);
        this.addTimedChild(instance1);
    });

    var Graphic10 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 136, loop: false });
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[55])
            .setTransform(-1336.85, -168.4, 1.033, 1.033);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[55])
            .setTransform(-1357.3, -164.4, 1.033, 1.033);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[55])
            .setTransform(-1317.25, -167, 1.033, 1.033);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[55])
            .setTransform(-1316.95, -139.1, 0.978, 0.978);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[55])
            .setTransform(-1265.9, -139.25, 1.033, 1.033);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[55])
            .setTransform(-1170.45, -142.3, 0.948, 0.948);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[55])
            .setTransform(-1185.7, -149.8, 0.948, 0.948);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[55])
            .setTransform(-1177.25, -135.65, 0.881, 0.881);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[55])
            .setTransform(-1201.55, -112.45, 0.881, 0.881);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[55])
            .setTransform(-1213, -97.9, 0.881, 0.881);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[55])
            .setTransform(-1255.65, -125.65, 1.033, 1.033);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[54]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[53]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[52])
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
            .drawCommands(shapes.s01[57])
            .setTransform(-1294.55, -252.5);
        this.addTimedChild(instance1);
    });

    var Graphic11 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 136, loop: false });
        var instance2 = new Graphic2(MovieClip.SYNCHED)
            .setTransform(6.55, -82.85);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[56]);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic12 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 136, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[59]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[58]);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic13 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 136, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[61]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[60]);
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
            .drawCommands(shapes.s01[62])
            .setTransform(-1222.8, -397.15, 0.95);
        this.addTimedChild(instance1);
    });

    var Graphic24 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 2, loop: false });
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[69]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[16]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[15]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[14]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[13]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[64]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[63]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[68]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[67])
            .setTransform(-1.65, -2.05);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[66])
            .setTransform(21.3, -1.55, 1, 1, 0.393);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[65])
            .setTransform(3.2, 1.2, 1, 1, 0.065);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[65])
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
            .drawCommands(shapes.s01[69]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[68]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[67])
            .setTransform(-1.65, -2.05);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[66])
            .setTransform(21.3, -1.55, 1, 1, 0.393);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[65])
            .setTransform(3.2, 1.2, 1, 1, 0.065);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[13]);
        this.addTimedChild(instance6)
            .addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic316 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 136, loop: false });
        var instance5 = new Graphic24(MovieClip.SYNCHED);
        var instance7 = new Graphic26(MovieClip.SYNCHED);
        var instance4 = new Graphic23(MovieClip.SYNCHED);
        var instance3 = new Graphic22(MovieClip.SYNCHED);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[20]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[19]);
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
            .drawCommands(shapes.s01[71]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[70]);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic74 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 22, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[73])
            .setTransform(-657.05, -461.95);
        this.addTimedChild(instance1);
    });

    var Graphic75 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 22, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[74]);
        this.addTimedChild(instance1);
    });

    var Graphic76 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 22, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[80]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[81]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[82]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[83]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[79]);
        this.addTimedChild(instance2, 0, 2)
            .addTimedChild(instance3, 2, 1)
            .addTimedChild(instance4, 3, 1)
            .addTimedChild(instance5, 4, 18)
            .addTimedChild(instance1);
    });

    var Graphic61 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 77, loop: false });
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[111])
            .setTransform(9.85, 31.2, 1.3, 1.3);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[110])
            .setTransform(9.85, 31.2, 1.3, 1.3);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[109])
            .setTransform(9.85, 31.2, 1.3, 1.3);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[108])
            .setTransform(9.85, 31.2, 1.3, 1.3);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[107])
            .setTransform(9.7, 31.2, 1.3, 1.3);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[106])
            .setTransform(-801.7, -1038.95, 1.3, 1.3);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[105])
            .setTransform(-801.7, -1038.95, 1.3, 1.3);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[104])
            .setTransform(-801.7, -1038.95, 1.3, 1.3);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[103])
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
            .drawCommands(shapes.s01[119])
            .setTransform(-0.6, 2.45, 1, 1, 0, 0.484, 2.657);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[118])
            .setTransform(-4.3, 1.95, 1, 1, 0, 0.618, 2.523);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[117])
            .setTransform(4.25, 33.75, 1.12, 1.056, -0.238);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[116])
            .setTransform(5.75, 34.95, 1, 1, 0.01);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[115])
            .setTransform(6.05, 34.9, 1, 1, 0.257);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[114])
            .setTransform(1.05, 40.25, 1, 1, 0.344);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[113])
            .setTransform(34.1, -985.65, 1, 1, 0.684);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[106])
            .setTransform(-464.95, -886.85, 1, 1, 0.178);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[105])
            .setTransform(-538.25, -842.15, 1, 1, 0.091);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[104])
            .setTransform(-668.55, -792.3, 1.087);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[112])
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
            .drawCommands(shapes.s01[127]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[126]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[125]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[124]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[123]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[122]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[121])
            .setTransform(-0.25, -0.5);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[120]);
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
            .drawCommands(shapes.s01[127]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[126]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[125]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[124]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[123]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[122]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[121])
            .setTransform(-0.25, -0.5);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[120]);
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
            .drawCommands(shapes.s01[140])
            .setTransform(-3.75, 14.9);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[139])
            .setTransform(-3.75, 14.9);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[138])
            .setTransform(-3.75, 14.9);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[137])
            .setTransform(-3.75, 14.9);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[136]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[135])
            .setTransform(6.5, 27.85, 1, 1, 0, 0, -0.027);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[134])
            .setTransform(7.1, 44.6, 1, 1, 0, 0, -0.027);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[133]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[131])
            .setTransform(8.15, 166.15, 1.044, 1.151, 0, 0, 0.001);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[132])
            .setTransform(10.1, 68.55, 0.907, 1, 0, 0, 0.001);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[131])
            .setTransform(27.05, 177.2, 0.907, 1, 0, 0, 0.001);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[131])
            .setTransform(11.5, 211.3, 1.044, 1.151, 0, 0, 0.001);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[130])
            .setTransform(10.1, 68.6, 0.907, 1, 0, 0, 0.001);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[129]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[128]);
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
            .drawCommands(shapes.s01[73])
            .setTransform(-657.05, -461.95);
        this.addTimedChild(instance1);
    });

    var Graphic48 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 31, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[74]);
        this.addTimedChild(instance1);
    });

    var Graphic42 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 109, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[151]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[150])
            .setTransform(-585.65, -483.25);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic29 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 186, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[152]);
        this.addTimedChild(instance1);
    });

    var Graphic30 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 186, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[153])
            .setTransform(-466.8, -453.85);
        this.addTimedChild(instance1);
    });

    var Graphic31 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 186, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[154])
            .setTransform(-504.35, -453.65);
        this.addTimedChild(instance1);
    });

    var Graphic32 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 110, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[155])
            .setTransform(-458.45, -480.9, 0.972);
        this.addTimedChild(instance1);
    });

    var Graphic43 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 23, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[155])
            .setTransform(-458.45, -480.9, 0.972);
        this.addTimedChild(instance1);
    });

    var Graphic45 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 24, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[155])
            .setTransform(-458.45, -480.9, 0.972);
        this.addTimedChild(instance1);
    });

    var Graphic49 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 11, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[155])
            .setTransform(-458.45, -480.9, 0.972);
        this.addTimedChild(instance1);
    });

    var Graphic33 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 110, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[155])
            .setTransform(-458.45, -480.9, 0.972);
        this.addTimedChild(instance1);
    });

    var Graphic44 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 23, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[155])
            .setTransform(-458.45, -480.9, 0.972);
        this.addTimedChild(instance1);
    });

    var Graphic46 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 24, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[155])
            .setTransform(-458.45, -480.9, 0.972);
        this.addTimedChild(instance1);
    });

    var Graphic50 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 11, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[155])
            .setTransform(-458.45, -480.9, 0.972);
        this.addTimedChild(instance1);
    });

    var Graphic34 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 186, loop: false });
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[161]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[160]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[159]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[158]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[157]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[156]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[165]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[164]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[163]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[162]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[161]);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[160]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[159]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[158]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[157]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[156]);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[171]);
        var instance21 = new Graphics()
            .drawCommands(shapes.s01[170]);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[169]);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[168]);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[167]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[166]);
        var instance28 = new Graphics()
            .drawCommands(shapes.s01[161]);
        var instance27 = new Graphics()
            .drawCommands(shapes.s01[160]);
        var instance26 = new Graphics()
            .drawCommands(shapes.s01[159]);
        var instance25 = new Graphics()
            .drawCommands(shapes.s01[158]);
        var instance24 = new Graphics()
            .drawCommands(shapes.s01[157]);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[156]);
        var instance34 = new Graphics()
            .drawCommands(shapes.s01[171]);
        var instance33 = new Graphics()
            .drawCommands(shapes.s01[170]);
        var instance32 = new Graphics()
            .drawCommands(shapes.s01[169]);
        var instance31 = new Graphics()
            .drawCommands(shapes.s01[168]);
        var instance30 = new Graphics()
            .drawCommands(shapes.s01[167]);
        var instance29 = new Graphics()
            .drawCommands(shapes.s01[166]);
        var instance40 = new Graphics()
            .drawCommands(shapes.s01[161])
            .setTransform(-386.35, -557.05, 1, 1, 0.174);
        var instance39 = new Graphics()
            .drawCommands(shapes.s01[160])
            .setTransform(-385.25, -559.2, 1, 1, 0.174);
        var instance38 = new Graphics()
            .drawCommands(shapes.s01[159])
            .setTransform(-486.6, -478.35);
        var instance37 = new Graphics()
            .drawCommands(shapes.s01[158])
            .setTransform(-455.15, -505.5, 1, 1, 0.06);
        var instance36 = new Graphics()
            .drawCommands(shapes.s01[157])
            .setTransform(-588.15, -407.35, 1.216, 0.851);
        var instance35 = new Graphics()
            .drawCommands(shapes.s01[156])
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
            .drawCommands(shapes.s01[176]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[40]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[36]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[177]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[41]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[37]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[176]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[40]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[36]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[178]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[43]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[38]);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[179]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[44]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[39]);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[33]);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[32]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[31]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[30]);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[172]);
        var instance21 = new Graphics()
            .drawCommands(shapes.s01[173]);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[172]);
        var instance26 = new Graphics()
            .drawCommands(shapes.s01[33]);
        var instance25 = new Graphics()
            .drawCommands(shapes.s01[32]);
        var instance24 = new Graphics()
            .drawCommands(shapes.s01[31]);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[30]);
        var instance29 = new Graphics()
            .drawCommands(shapes.s01[178]);
        var instance28 = new Graphics()
            .drawCommands(shapes.s01[43]);
        var instance27 = new Graphics()
            .drawCommands(shapes.s01[38]);
        var instance30 = new Graphics()
            .drawCommands(shapes.s01[173]);
        var instance34 = new Graphics()
            .drawCommands(shapes.s01[33]);
        var instance33 = new Graphics()
            .drawCommands(shapes.s01[32]);
        var instance32 = new Graphics()
            .drawCommands(shapes.s01[31]);
        var instance31 = new Graphics()
            .drawCommands(shapes.s01[30]);
        var instance37 = new Graphics()
            .drawCommands(shapes.s01[179]);
        var instance36 = new Graphics()
            .drawCommands(shapes.s01[44]);
        var instance35 = new Graphics()
            .drawCommands(shapes.s01[39]);
        var instance40 = new Graphics()
            .drawCommands(shapes.s01[176]);
        var instance39 = new Graphics()
            .drawCommands(shapes.s01[40]);
        var instance38 = new Graphics()
            .drawCommands(shapes.s01[36]);
        var instance44 = new Graphics()
            .drawCommands(shapes.s01[33]);
        var instance43 = new Graphics()
            .drawCommands(shapes.s01[32]);
        var instance42 = new Graphics()
            .drawCommands(shapes.s01[31]);
        var instance41 = new Graphics()
            .drawCommands(shapes.s01[30]);
        var instance45 = new Graphics()
            .drawCommands(shapes.s01[173]);
        var instance46 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance47 = new Graphics()
            .drawCommands(shapes.s01[174]);
        var instance48 = new Graphics()
            .drawCommands(shapes.s01[172]);
        var instance49 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance53 = new Graphics()
            .drawCommands(shapes.s01[180]);
        var instance52 = new Graphics()
            .drawCommands(shapes.s01[45]);
        var instance51 = new Graphics()
            .drawCommands(shapes.s01[42]);
        var instance50 = new Graphics()
            .drawCommands(shapes.s01[175]);
        var instance56 = new Graphics()
            .drawCommands(shapes.s01[176]);
        var instance55 = new Graphics()
            .drawCommands(shapes.s01[40]);
        var instance54 = new Graphics()
            .drawCommands(shapes.s01[36]);
        var instance57 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance60 = new Graphics()
            .drawCommands(shapes.s01[176]);
        var instance59 = new Graphics()
            .drawCommands(shapes.s01[40]);
        var instance58 = new Graphics()
            .drawCommands(shapes.s01[36]);
        var instance63 = new Graphics()
            .drawCommands(shapes.s01[179]);
        var instance62 = new Graphics()
            .drawCommands(shapes.s01[44]);
        var instance61 = new Graphics()
            .drawCommands(shapes.s01[39]);
        var instance66 = new Graphics()
            .drawCommands(shapes.s01[178]);
        var instance65 = new Graphics()
            .drawCommands(shapes.s01[43]);
        var instance64 = new Graphics()
            .drawCommands(shapes.s01[38]);
        var instance69 = new Graphics()
            .drawCommands(shapes.s01[179]);
        var instance68 = new Graphics()
            .drawCommands(shapes.s01[44]);
        var instance67 = new Graphics()
            .drawCommands(shapes.s01[39]);
        var instance72 = new Graphics()
            .drawCommands(shapes.s01[177]);
        var instance71 = new Graphics()
            .drawCommands(shapes.s01[41]);
        var instance70 = new Graphics()
            .drawCommands(shapes.s01[37]);
        var instance76 = new Graphics()
            .drawCommands(shapes.s01[33]);
        var instance75 = new Graphics()
            .drawCommands(shapes.s01[32]);
        var instance74 = new Graphics()
            .drawCommands(shapes.s01[31]);
        var instance73 = new Graphics()
            .drawCommands(shapes.s01[30]);
        var instance79 = new Graphics()
            .drawCommands(shapes.s01[176]);
        var instance78 = new Graphics()
            .drawCommands(shapes.s01[40]);
        var instance77 = new Graphics()
            .drawCommands(shapes.s01[36]);
        var instance83 = new Graphics()
            .drawCommands(shapes.s01[33]);
        var instance82 = new Graphics()
            .drawCommands(shapes.s01[32]);
        var instance81 = new Graphics()
            .drawCommands(shapes.s01[31]);
        var instance80 = new Graphics()
            .drawCommands(shapes.s01[30]);
        var instance84 = new Graphics()
            .drawCommands(shapes.s01[174]);
        var instance88 = new Graphics()
            .drawCommands(shapes.s01[33]);
        var instance87 = new Graphics()
            .drawCommands(shapes.s01[32]);
        var instance86 = new Graphics()
            .drawCommands(shapes.s01[31]);
        var instance85 = new Graphics()
            .drawCommands(shapes.s01[30]);
        var instance91 = new Graphics()
            .drawCommands(shapes.s01[179]);
        var instance90 = new Graphics()
            .drawCommands(shapes.s01[44]);
        var instance89 = new Graphics()
            .drawCommands(shapes.s01[39]);
        var instance94 = new Graphics()
            .drawCommands(shapes.s01[176]);
        var instance93 = new Graphics()
            .drawCommands(shapes.s01[40]);
        var instance92 = new Graphics()
            .drawCommands(shapes.s01[36]);
        var instance98 = new Graphics()
            .drawCommands(shapes.s01[33]);
        var instance97 = new Graphics()
            .drawCommands(shapes.s01[32]);
        var instance96 = new Graphics()
            .drawCommands(shapes.s01[31]);
        var instance95 = new Graphics()
            .drawCommands(shapes.s01[30]);
        var instance101 = new Graphics()
            .drawCommands(shapes.s01[179]);
        var instance100 = new Graphics()
            .drawCommands(shapes.s01[44]);
        var instance99 = new Graphics()
            .drawCommands(shapes.s01[39]);
        var instance104 = new Graphics()
            .drawCommands(shapes.s01[178]);
        var instance103 = new Graphics()
            .drawCommands(shapes.s01[43]);
        var instance102 = new Graphics()
            .drawCommands(shapes.s01[38]);
        var instance108 = new Graphics()
            .drawCommands(shapes.s01[33]);
        var instance107 = new Graphics()
            .drawCommands(shapes.s01[32]);
        var instance106 = new Graphics()
            .drawCommands(shapes.s01[31]);
        var instance105 = new Graphics()
            .drawCommands(shapes.s01[30]);
        var instance111 = new Graphics()
            .drawCommands(shapes.s01[179]);
        var instance110 = new Graphics()
            .drawCommands(shapes.s01[44]);
        var instance109 = new Graphics()
            .drawCommands(shapes.s01[39]);
        var instance115 = new Graphics()
            .drawCommands(shapes.s01[180]);
        var instance114 = new Graphics()
            .drawCommands(shapes.s01[45]);
        var instance113 = new Graphics()
            .drawCommands(shapes.s01[42]);
        var instance112 = new Graphics()
            .drawCommands(shapes.s01[175]);
        var instance116 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance117 = new Graphics()
            .drawCommands(shapes.s01[172]);
        var instance118 = new Graphics()
            .drawCommands(shapes.s01[173]);
        var instance119 = new Graphics()
            .drawCommands(shapes.s01[172]);
        var instance122 = new Graphics()
            .drawCommands(shapes.s01[176]);
        var instance121 = new Graphics()
            .drawCommands(shapes.s01[40]);
        var instance120 = new Graphics()
            .drawCommands(shapes.s01[36]);
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
            .drawCommands(shapes.s01[181]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[182]);
        this.addTimedChild(instance1, 0, 77)
            .addTimedChild(instance2, 77, 109);
    });

    var Graphic37 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 186, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[184])
            .setTransform(-368.7, -483.9, 0.959);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[183])
            .setTransform(-383.8, -485.3);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic38 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 77, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[151]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[150])
            .setTransform(-585.65, -483.25);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic39 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 155, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[74]);
        this.addTimedChild(instance1);
    });

    var Graphic40 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 155, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[73])
            .setTransform(-657.05, -461.95);
        this.addTimedChild(instance1);
    });

    var Graphic41 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 186, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[188])
            .setTransform(-497.15, -407.2);
        this.addTimedChild(instance1);
    });

    var Graphic64 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 186, loop: false });
        var instance14 = new Graphic41(MovieClip.SYNCHED);
        var instance13 = new Graphic40(MovieClip.SYNCHED);
        var instance12 = new Graphic39(MovieClip.SYNCHED);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[185]);
        var instance10 = new Graphic38(MovieClip.SYNCHED);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[186]);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[187]);
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
            .drawCommands(shapes.s01[141]);
        var instance25 = new Graphics()
            .drawCommands(shapes.s01[142]);
        var instance26 = new Graphics()
            .drawCommands(shapes.s01[143]);
        var instance27 = new Graphics()
            .drawCommands(shapes.s01[144]);
        var instance28 = new Graphics()
            .drawCommands(shapes.s01[145]);
        var instance29 = new Graphics()
            .drawCommands(shapes.s01[146]);
        var instance30 = new Graphics()
            .drawCommands(shapes.s01[147]);
        var instance31 = new Graphics()
            .drawCommands(shapes.s01[148]);
        var instance34 = new Graphics()
            .drawCommands(shapes.s01[149]);
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
            .drawCommands(shapes.s01[192]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[193]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[192]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[193]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[191]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[190]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[189]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[194]);
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
            .drawCommands(shapes.s01[197]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[198]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[197]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[198]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[196]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[195]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[199]);
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
            .drawCommands(shapes.s01[200]);
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
            .drawCommands(shapes.s01[201])
            .setTransform(-461.15, -639, 0.96);
        this.addTimedChild(instance1);
    });

    var Graphic67 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 186, loop: false });
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[206]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[204]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[203]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[202]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[205])
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
            .drawCommands(shapes.s01[119]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[222]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[118]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[117]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[116]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[115]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[114]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[113]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[106]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[105]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[104]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[112]);
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
            .drawCommands(shapes.s01[223])
            .setTransform(10.35, 32.6);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[110])
            .setTransform(10.35, 32.6);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[109])
            .setTransform(10.35, 32.6);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[108])
            .setTransform(10.35, 32.6);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[107])
            .setTransform(10.25, 32.6);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[106])
            .setTransform(-613.95, -790.65);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[105])
            .setTransform(-613.95, -790.65);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[104])
            .setTransform(-613.95, -790.65);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[103])
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
            .drawCommands(shapes.s01[227])
            .setTransform(14.05, -0.4);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[227]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[224]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[226]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[225]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[224]);
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
            .drawCommands(shapes.s01[222]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[119]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[222]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[118]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[117]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[116]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[115]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[114]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[113]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[106]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[105]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[104]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[112]);
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
            .drawCommands(shapes.s01[260]);
        this.addTimedChild(instance1);
    });

    var Graphic54 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 186, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[260]);
        this.addTimedChild(instance1);
    });

    var Graphic55 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 186, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[260]);
        this.addTimedChild(instance1);
    });

    var Graphic56 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 186, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[260]);
        this.addTimedChild(instance1);
    });

    var Graphic68 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 186, loop: false });
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[261]);
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
            .drawCommands(shapes.s01[260]);
        this.addTimedChild(instance1);
    });

    var Graphic58 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 186, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[260]);
        this.addTimedChild(instance1);
    });

    var Graphic59 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 186, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[260]);
        this.addTimedChild(instance1);
    });

    var Graphic60 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 186, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[260]);
        this.addTimedChild(instance1);
    });

    var Graphic69 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 186, loop: false });
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[261]);
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

    var Graphic317 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 186, loop: false });
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[295]);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[296]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[297]);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[298]);
        var instance21 = new Graphics()
            .drawCommands(shapes.s01[299]);
        var instance25 = new Graphics()
            .drawCommands(shapes.s01[300]);
        var instance29 = new Graphics()
            .drawCommands(shapes.s01[301]);
        var instance33 = new Graphics()
            .drawCommands(shapes.s01[302]);
        var instance37 = new Graphics()
            .drawCommands(shapes.s01[303]);
        var instance41 = new Graphics()
            .drawCommands(shapes.s01[304]);
        var instance45 = new Graphics()
            .drawCommands(shapes.s01[305]);
        var instance47 = new Graphics()
            .drawCommands(shapes.s01[306]);
        var instance49 = new Graphics()
            .drawCommands(shapes.s01[307]);
        var instance55 = new Graphics()
            .drawCommands(shapes.s01[308]);
        var instance90 = new Graphics()
            .drawCommands(shapes.s01[309]);
        var instance94 = new Graphics()
            .drawCommands(shapes.s01[310]);
        var instance98 = new Graphics()
            .drawCommands(shapes.s01[311]);
        var instance103 = new Graphics()
            .drawCommands(shapes.s01[312]);
        var instance106 = new Graphics()
            .drawCommands(shapes.s01[313]);
        var instance109 = new Graphics()
            .drawCommands(shapes.s01[314]);
        var instance112 = new Graphics()
            .drawCommands(shapes.s01[315]);
        var instance115 = new Graphics()
            .drawCommands(shapes.s01[316]);
        var instance118 = new Graphics()
            .drawCommands(shapes.s01[317]);
        var instance125 = new Graphics()
            .drawCommands(shapes.s01[318]);
        var instance128 = new Graphics()
            .drawCommands(shapes.s01[319]);
        var instance131 = new Graphics()
            .drawCommands(shapes.s01[320]);
        var instance135 = new Graphics()
            .drawCommands(shapes.s01[321]);
        var instance139 = new Graphics()
            .drawCommands(shapes.s01[322]);
        var instance143 = new Graphics()
            .drawCommands(shapes.s01[323]);
        var instance150 = new Graphics()
            .drawCommands(shapes.s01[324]);
        var instance154 = new Graphics()
            .drawCommands(shapes.s01[325]);
        var instance157 = new Graphics()
            .drawCommands(shapes.s01[326]);
        var instance159 = new Graphics()
            .drawCommands(shapes.s01[327]);
        var instance12 = new Graphic69(MovieClip.SYNCHED);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[262]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[263]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[264]);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[265]);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[266]);
        var instance24 = new Graphics()
            .drawCommands(shapes.s01[267]);
        var instance28 = new Graphics()
            .drawCommands(shapes.s01[268]);
        var instance32 = new Graphics()
            .drawCommands(shapes.s01[269]);
        var instance36 = new Graphics()
            .drawCommands(shapes.s01[270]);
        var instance40 = new Graphics()
            .drawCommands(shapes.s01[271]);
        var instance44 = new Graphics()
            .drawCommands(shapes.s01[272]);
        var instance46 = new Graphics()
            .drawCommands(shapes.s01[273]);
        var instance48 = new Graphics()
            .drawCommands(shapes.s01[274]);
        var instance54 = new Graphics()
            .drawCommands(shapes.s01[275]);
        var instance89 = new Graphics()
            .drawCommands(shapes.s01[276]);
        var instance93 = new Graphics()
            .drawCommands(shapes.s01[277]);
        var instance97 = new Graphics()
            .drawCommands(shapes.s01[278]);
        var instance102 = new Graphics()
            .drawCommands(shapes.s01[279]);
        var instance105 = new Graphics()
            .drawCommands(shapes.s01[280]);
        var instance108 = new Graphics()
            .drawCommands(shapes.s01[281]);
        var instance111 = new Graphics()
            .drawCommands(shapes.s01[282]);
        var instance114 = new Graphics()
            .drawCommands(shapes.s01[283]);
        var instance117 = new Graphics()
            .drawCommands(shapes.s01[284]);
        var instance124 = new Graphics()
            .drawCommands(shapes.s01[285]);
        var instance127 = new Graphics()
            .drawCommands(shapes.s01[286]);
        var instance130 = new Graphics()
            .drawCommands(shapes.s01[287]);
        var instance134 = new Graphics()
            .drawCommands(shapes.s01[288]);
        var instance138 = new Graphics()
            .drawCommands(shapes.s01[289]);
        var instance142 = new Graphics()
            .drawCommands(shapes.s01[290]);
        var instance149 = new Graphics()
            .drawCommands(shapes.s01[291]);
        var instance153 = new Graphics()
            .drawCommands(shapes.s01[292]);
        var instance156 = new Graphics()
            .drawCommands(shapes.s01[293]);
        var instance158 = new Graphics()
            .drawCommands(shapes.s01[294]);
        var instance10 = new Graphic68(MovieClip.SYNCHED);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[228]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[207]);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[229]);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[208]);
        var instance27 = new Graphics()
            .drawCommands(shapes.s01[230]);
        var instance26 = new Graphics()
            .drawCommands(shapes.s01[209]);
        var instance31 = new Graphics()
            .drawCommands(shapes.s01[231]);
        var instance30 = new Graphics()
            .drawCommands(shapes.s01[210]);
        var instance35 = new Graphics()
            .drawCommands(shapes.s01[232]);
        var instance34 = new Graphics()
            .drawCommands(shapes.s01[211]);
        var instance39 = new Graphics()
            .drawCommands(shapes.s01[233]);
        var instance38 = new Graphics()
            .drawCommands(shapes.s01[212]);
        var instance43 = new Graphics()
            .drawCommands(shapes.s01[234]);
        var instance42 = new Graphics()
            .drawCommands(shapes.s01[213]);
        var instance53 = new Graphic71(MovieClip.SYNCHED);
        var instance52 = new Graphics()
            .drawCommands(shapes.s01[235]);
        var instance58 = new Graphics()
            .drawCommands(shapes.s01[236]);
        var instance60 = new Graphics()
            .drawCommands(shapes.s01[237]);
        var instance62 = new Graphics()
            .drawCommands(shapes.s01[238]);
        var instance64 = new Graphics()
            .drawCommands(shapes.s01[239]);
        var instance66 = new Graphics()
            .drawCommands(shapes.s01[240]);
        var instance68 = new Graphics()
            .drawCommands(shapes.s01[241]);
        var instance70 = new Graphics()
            .drawCommands(shapes.s01[242]);
        var instance72 = new Graphics()
            .drawCommands(shapes.s01[243]);
        var instance74 = new Graphics()
            .drawCommands(shapes.s01[244]);
        var instance76 = new Graphics()
            .drawCommands(shapes.s01[245]);
        var instance78 = new Graphics()
            .drawCommands(shapes.s01[246]);
        var instance80 = new Graphics()
            .drawCommands(shapes.s01[247]);
        var instance82 = new Graphics()
            .drawCommands(shapes.s01[248]);
        var instance84 = new Graphics()
            .drawCommands(shapes.s01[249]);
        var instance86 = new Graphics()
            .drawCommands(shapes.s01[250]);
        var instance88 = new Graphics()
            .drawCommands(shapes.s01[251]);
        var instance92 = new Graphics()
            .drawCommands(shapes.s01[250]);
        var instance96 = new Graphics()
            .drawCommands(shapes.s01[252]);
        var instance51 = new Graphic70(MovieClip.SYNCHED);
        var instance77 = new Graphics()
            .drawCommands(shapes.s01[214]);
        var instance79 = new Graphics()
            .drawCommands(shapes.s01[215]);
        var instance81 = new Graphics()
            .drawCommands(shapes.s01[216]);
        var instance83 = new Graphics()
            .drawCommands(shapes.s01[217]);
        var instance85 = new Graphics()
            .drawCommands(shapes.s01[218]);
        var instance87 = new Graphics()
            .drawCommands(shapes.s01[219]);
        var instance91 = new Graphics()
            .drawCommands(shapes.s01[220]);
        var instance95 = new Graphics()
            .drawCommands(shapes.s01[221]);
        var instance101 = new Graphics()
            .drawCommands(shapes.s01[253]);
        var instance104 = new Graphics()
            .drawCommands(shapes.s01[254]);
        var instance107 = new Graphics()
            .drawCommands(shapes.s01[250]);
        var instance110 = new Graphics()
            .drawCommands(shapes.s01[255]);
        var instance113 = new Graphics()
            .drawCommands(shapes.s01[256]);
        var instance116 = new Graphics()
            .drawCommands(shapes.s01[250]);
        var instance148 = new Graphics()
            .drawCommands(shapes.s01[257]);
        var instance152 = new Graphics()
            .drawCommands(shapes.s01[258]);
        var instance155 = new Graphics()
            .drawCommands(shapes.s01[259]);
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
            .drawCommands(shapes.s01[84]);
        var instance56 = new Graphics()
            .drawCommands(shapes.s01[85]);
        var instance57 = new Graphics()
            .drawCommands(shapes.s01[86]);
        var instance59 = new Graphics()
            .drawCommands(shapes.s01[87]);
        var instance61 = new Graphics()
            .drawCommands(shapes.s01[88]);
        var instance63 = new Graphics()
            .drawCommands(shapes.s01[89]);
        var instance65 = new Graphics()
            .drawCommands(shapes.s01[90]);
        var instance67 = new Graphics()
            .drawCommands(shapes.s01[91]);
        var instance69 = new Graphics()
            .drawCommands(shapes.s01[92]);
        var instance71 = new Graphics()
            .drawCommands(shapes.s01[93]);
        var instance73 = new Graphics()
            .drawCommands(shapes.s01[94]);
        var instance75 = new Graphics()
            .drawCommands(shapes.s01[95]);
        var instance100 = new Graphic72(MovieClip.SYNCHED);
        var instance99 = new Graphics()
            .drawCommands(shapes.s01[96]);
        var instance126 = new Graphics()
            .drawCommands(shapes.s01[97]);
        var instance133 = new Graphics()
            .drawCommands(shapes.s01[98]);
        var instance137 = new Graphics()
            .drawCommands(shapes.s01[99]);
        var instance141 = new Graphics()
            .drawCommands(shapes.s01[100]);
        var instance145 = new Graphic77(MovieClip.SYNCHED);
        var instance144 = new Graphics()
            .drawCommands(shapes.s01[101]);
        var instance151 = new Graphics()
            .drawCommands(shapes.s01[102]);
        var instance123 = new Graphic76(MovieClip.SYNCHED);
        var instance122 = new Graphic75(MovieClip.SYNCHED);
        var instance121 = new Graphic74(MovieClip.SYNCHED);
        var instance120 = new Graphics()
            .drawCommands(shapes.s01[72]);
        var instance129 = new Graphics()
            .drawCommands(shapes.s01[75]);
        var instance132 = new Graphics()
            .drawCommands(shapes.s01[76]);
        var instance136 = new Graphics()
            .drawCommands(shapes.s01[77]);
        var instance140 = new Graphics()
            .drawCommands(shapes.s01[78]);
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

    var Graphic318 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 186, loop: false });
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[340]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[339]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[338])
            .setTransform(390.5, 46);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[337])
            .setTransform(390.5, 46);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[336]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[335]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[334]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[333]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[332]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[331]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[330]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[329])
            .setTransform(390.5, 46);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[328])
            .setTransform(390.5, 46);
        this.addTimedChild(instance13)
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

    var Graphic117 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 22, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[71]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[70]);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic118 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 22, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[73])
            .setTransform(-657.05, -461.95);
        this.addTimedChild(instance1);
    });

    var Graphic119 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 22, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[74]);
        this.addTimedChild(instance1);
    });

    var Graphic120 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 22, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[80]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[81]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[82]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[83]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[79]);
        this.addTimedChild(instance2, 0, 2)
            .addTimedChild(instance3, 2, 1)
            .addTimedChild(instance4, 3, 1)
            .addTimedChild(instance5, 4, 18)
            .addTimedChild(instance1);
    });

    var Graphic116 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 7, loop: false });
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[119])
            .setTransform(-0.6, 2.45, 1, 1, 0, 0.484, 2.657);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[118])
            .setTransform(-4.3, 1.95, 1, 1, 0, 0.618, 2.523);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[117])
            .setTransform(4.25, 33.75, 1.12, 1.056, -0.238);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[116])
            .setTransform(5.75, 34.95, 1, 1, 0.01);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[115])
            .setTransform(6.05, 34.9, 1, 1, 0.257);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[114])
            .setTransform(1.05, 40.25, 1, 1, 0.344);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[113])
            .setTransform(34.1, -985.65, 1, 1, 0.684);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[106])
            .setTransform(-464.95, -886.85, 1, 1, 0.178);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[105])
            .setTransform(-538.25, -842.15, 1, 1, 0.091);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[104])
            .setTransform(-668.55, -792.3, 1.087);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[112])
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
            .drawCommands(shapes.s01[127]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[126]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[125]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[124]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[123]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[122]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[121])
            .setTransform(-0.25, -0.5);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[120]);
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
            .drawCommands(shapes.s01[73])
            .setTransform(-657.05, -461.95);
        this.addTimedChild(instance1);
    });

    var Graphic95 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 31, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[74]);
        this.addTimedChild(instance1);
    });

    var Graphic81 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[151]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[150])
            .setTransform(-585.65, -483.25);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic82 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[152]);
        this.addTimedChild(instance1);
    });

    var Graphic83 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[153])
            .setTransform(-466.8, -453.85);
        this.addTimedChild(instance1);
    });

    var Graphic84 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[154])
            .setTransform(-504.35, -453.65);
        this.addTimedChild(instance1);
    });

    var Graphic92 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 24, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[155])
            .setTransform(-458.45, -480.9, 0.972);
        this.addTimedChild(instance1);
    });

    var Graphic96 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 11, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[155])
            .setTransform(-458.45, -480.9, 0.972);
        this.addTimedChild(instance1);
    });

    var Graphic93 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 24, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[155])
            .setTransform(-458.45, -480.9, 0.972);
        this.addTimedChild(instance1);
    });

    var Graphic97 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 11, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[155])
            .setTransform(-458.45, -480.9, 0.972);
        this.addTimedChild(instance1);
    });

    var Graphic85 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[171]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[170]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[169]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[168]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[167]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[166]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[161]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[160]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[159]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[158]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[157]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[156]);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[171]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[170]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[169]);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[168]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[167]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[166]);
        var instance24 = new Graphics()
            .drawCommands(shapes.s01[161])
            .setTransform(-386.35, -557.05, 1, 1, 0.174);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[160])
            .setTransform(-385.25, -559.2, 1, 1, 0.174);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[159])
            .setTransform(-486.6, -478.35);
        var instance21 = new Graphics()
            .drawCommands(shapes.s01[158])
            .setTransform(-455.15, -505.5, 1, 1, 0.06);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[157])
            .setTransform(-588.15, -407.35, 1.216, 0.851);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[156])
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
            .drawCommands(shapes.s01[28]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[176]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[40]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[36]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[179]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[44]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[39]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[178]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[43]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[38]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[179]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[44]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[39]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[177]);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[41]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[37]);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[33]);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[32]);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[31]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[30]);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[176]);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[40]);
        var instance21 = new Graphics()
            .drawCommands(shapes.s01[36]);
        var instance27 = new Graphics()
            .drawCommands(shapes.s01[33]);
        var instance26 = new Graphics()
            .drawCommands(shapes.s01[32]);
        var instance25 = new Graphics()
            .drawCommands(shapes.s01[31]);
        var instance24 = new Graphics()
            .drawCommands(shapes.s01[30]);
        var instance28 = new Graphics()
            .drawCommands(shapes.s01[174]);
        var instance32 = new Graphics()
            .drawCommands(shapes.s01[33]);
        var instance31 = new Graphics()
            .drawCommands(shapes.s01[32]);
        var instance30 = new Graphics()
            .drawCommands(shapes.s01[31]);
        var instance29 = new Graphics()
            .drawCommands(shapes.s01[30]);
        var instance35 = new Graphics()
            .drawCommands(shapes.s01[179]);
        var instance34 = new Graphics()
            .drawCommands(shapes.s01[44]);
        var instance33 = new Graphics()
            .drawCommands(shapes.s01[39]);
        var instance38 = new Graphics()
            .drawCommands(shapes.s01[176]);
        var instance37 = new Graphics()
            .drawCommands(shapes.s01[40]);
        var instance36 = new Graphics()
            .drawCommands(shapes.s01[36]);
        var instance42 = new Graphics()
            .drawCommands(shapes.s01[33]);
        var instance41 = new Graphics()
            .drawCommands(shapes.s01[32]);
        var instance40 = new Graphics()
            .drawCommands(shapes.s01[31]);
        var instance39 = new Graphics()
            .drawCommands(shapes.s01[30]);
        var instance45 = new Graphics()
            .drawCommands(shapes.s01[179]);
        var instance44 = new Graphics()
            .drawCommands(shapes.s01[44]);
        var instance43 = new Graphics()
            .drawCommands(shapes.s01[39]);
        var instance48 = new Graphics()
            .drawCommands(shapes.s01[178]);
        var instance47 = new Graphics()
            .drawCommands(shapes.s01[43]);
        var instance46 = new Graphics()
            .drawCommands(shapes.s01[38]);
        var instance52 = new Graphics()
            .drawCommands(shapes.s01[33]);
        var instance51 = new Graphics()
            .drawCommands(shapes.s01[32]);
        var instance50 = new Graphics()
            .drawCommands(shapes.s01[31]);
        var instance49 = new Graphics()
            .drawCommands(shapes.s01[30]);
        var instance55 = new Graphics()
            .drawCommands(shapes.s01[179]);
        var instance54 = new Graphics()
            .drawCommands(shapes.s01[44]);
        var instance53 = new Graphics()
            .drawCommands(shapes.s01[39]);
        var instance59 = new Graphics()
            .drawCommands(shapes.s01[180]);
        var instance58 = new Graphics()
            .drawCommands(shapes.s01[45]);
        var instance57 = new Graphics()
            .drawCommands(shapes.s01[42]);
        var instance56 = new Graphics()
            .drawCommands(shapes.s01[175]);
        var instance60 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance61 = new Graphics()
            .drawCommands(shapes.s01[172]);
        var instance62 = new Graphics()
            .drawCommands(shapes.s01[173]);
        var instance63 = new Graphics()
            .drawCommands(shapes.s01[172]);
        var instance66 = new Graphics()
            .drawCommands(shapes.s01[176]);
        var instance65 = new Graphics()
            .drawCommands(shapes.s01[40]);
        var instance64 = new Graphics()
            .drawCommands(shapes.s01[36]);
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
            .drawCommands(shapes.s01[182]);
        this.addTimedChild(instance1);
    });

    var Graphic88 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[184])
            .setTransform(-368.7, -483.9, 0.959);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[183])
            .setTransform(-383.8, -485.3);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic89 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 19, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[74]);
        this.addTimedChild(instance1);
    });

    var Graphic90 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 19, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[73])
            .setTransform(-657.05, -461.95);
        this.addTimedChild(instance1);
    });

    var Graphic91 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[188])
            .setTransform(-497.15, -407.2);
        this.addTimedChild(instance1);
    });

    var Graphic108 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance12 = new Graphic91(MovieClip.SYNCHED);
        var instance11 = new Graphic90(MovieClip.SYNCHED);
        var instance10 = new Graphic89(MovieClip.SYNCHED);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[185]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[186]);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[187]);
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
            .drawCommands(shapes.s01[141]);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[142]);
        var instance21 = new Graphics()
            .drawCommands(shapes.s01[143]);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[144]);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[145]);
        var instance24 = new Graphics()
            .drawCommands(shapes.s01[146]);
        var instance25 = new Graphics()
            .drawCommands(shapes.s01[147]);
        var instance26 = new Graphics()
            .drawCommands(shapes.s01[148]);
        var instance29 = new Graphics()
            .drawCommands(shapes.s01[149]);
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
            .drawCommands(shapes.s01[192]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[193]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[191]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[190]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[189]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[194]);
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
            .drawCommands(shapes.s01[197]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[198]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[196]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[195]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[199]);
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
            .drawCommands(shapes.s01[200]);
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
            .drawCommands(shapes.s01[201])
            .setTransform(-461.15, -639, 0.96);
        this.addTimedChild(instance1);
    });

    var Graphic111 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[206]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[204]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[203]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[202]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[205])
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
            .drawCommands(shapes.s01[222]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[118])
            .setTransform(3.1, -2.15, 1, 1, 0.134);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[117])
            .setTransform(10.35, 30.05, 1.12, 1.056, 0, 0.246, 2.895);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[116])
            .setTransform(9.55, 31.8, 1, 1, 0, 0.494, 2.648);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[115])
            .setTransform(9.3, 31.9, 1, 1, 0, 0.741, 2.401);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[114])
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
            .drawCommands(shapes.s01[223])
            .setTransform(10.35, 32.6);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[110])
            .setTransform(10.35, 32.6);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[109])
            .setTransform(10.35, 32.6);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[108])
            .setTransform(10.35, 32.6);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[107])
            .setTransform(10.25, 32.6);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[106])
            .setTransform(-613.95, -790.65);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[105])
            .setTransform(-613.95, -790.65);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[104])
            .setTransform(-613.95, -790.65);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[103])
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
            .drawCommands(shapes.s01[227])
            .setTransform(14.05, -0.4);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[227]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[224]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[226]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[225]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[224]);
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
            .drawCommands(shapes.s01[222]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[118])
            .setTransform(3.1, -2.15, 1, 1, 0.134);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[117])
            .setTransform(10.35, 30.05, 1.12, 1.056, 0, 0.246, 2.895);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[116])
            .setTransform(9.55, 31.8, 1, 1, 0, 0.494, 2.648);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[115])
            .setTransform(9.3, 31.9, 1, 1, 0, 0.741, 2.401);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[114])
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
            .drawCommands(shapes.s01[260]);
        this.addTimedChild(instance1);
    });

    var Graphic101 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[260]);
        this.addTimedChild(instance1);
    });

    var Graphic102 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[260]);
        this.addTimedChild(instance1);
    });

    var Graphic103 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[260]);
        this.addTimedChild(instance1);
    });

    var Graphic114 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[261]);
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
            .drawCommands(shapes.s01[260]);
        this.addTimedChild(instance1);
    });

    var Graphic105 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[260]);
        this.addTimedChild(instance1);
    });

    var Graphic106 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[260]);
        this.addTimedChild(instance1);
    });

    var Graphic107 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[260]);
        this.addTimedChild(instance1);
    });

    var Graphic115 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[261]);
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

    var Graphic319 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[308]);
        var instance24 = new Graphics()
            .drawCommands(shapes.s01[309]);
        var instance28 = new Graphics()
            .drawCommands(shapes.s01[310]);
        var instance32 = new Graphics()
            .drawCommands(shapes.s01[311]);
        var instance37 = new Graphics()
            .drawCommands(shapes.s01[312]);
        var instance40 = new Graphics()
            .drawCommands(shapes.s01[313]);
        var instance43 = new Graphics()
            .drawCommands(shapes.s01[314]);
        var instance46 = new Graphics()
            .drawCommands(shapes.s01[315]);
        var instance49 = new Graphics()
            .drawCommands(shapes.s01[316]);
        var instance52 = new Graphics()
            .drawCommands(shapes.s01[317]);
        var instance59 = new Graphics()
            .drawCommands(shapes.s01[318]);
        var instance62 = new Graphics()
            .drawCommands(shapes.s01[319]);
        var instance65 = new Graphics()
            .drawCommands(shapes.s01[320]);
        var instance69 = new Graphics()
            .drawCommands(shapes.s01[321]);
        var instance73 = new Graphics()
            .drawCommands(shapes.s01[322]);
        var instance77 = new Graphics()
            .drawCommands(shapes.s01[323]);
        var instance84 = new Graphics()
            .drawCommands(shapes.s01[324]);
        var instance88 = new Graphics()
            .drawCommands(shapes.s01[325]);
        var instance91 = new Graphics()
            .drawCommands(shapes.s01[326]);
        var instance93 = new Graphics()
            .drawCommands(shapes.s01[327]);
        var instance11 = new Graphic115(MovieClip.SYNCHED);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[275]);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[276]);
        var instance27 = new Graphics()
            .drawCommands(shapes.s01[277]);
        var instance31 = new Graphics()
            .drawCommands(shapes.s01[278]);
        var instance36 = new Graphics()
            .drawCommands(shapes.s01[279]);
        var instance39 = new Graphics()
            .drawCommands(shapes.s01[280]);
        var instance42 = new Graphics()
            .drawCommands(shapes.s01[281]);
        var instance45 = new Graphics()
            .drawCommands(shapes.s01[282]);
        var instance48 = new Graphics()
            .drawCommands(shapes.s01[283]);
        var instance51 = new Graphics()
            .drawCommands(shapes.s01[284]);
        var instance58 = new Graphics()
            .drawCommands(shapes.s01[285]);
        var instance61 = new Graphics()
            .drawCommands(shapes.s01[286]);
        var instance64 = new Graphics()
            .drawCommands(shapes.s01[287]);
        var instance68 = new Graphics()
            .drawCommands(shapes.s01[288]);
        var instance72 = new Graphics()
            .drawCommands(shapes.s01[289]);
        var instance76 = new Graphics()
            .drawCommands(shapes.s01[290]);
        var instance83 = new Graphics()
            .drawCommands(shapes.s01[291]);
        var instance87 = new Graphics()
            .drawCommands(shapes.s01[292]);
        var instance90 = new Graphics()
            .drawCommands(shapes.s01[293]);
        var instance92 = new Graphics()
            .drawCommands(shapes.s01[294]);
        var instance9 = new Graphic114(MovieClip.SYNCHED);
        var instance8 = new Graphic113(MovieClip.SYNCHED);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[246]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[247]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[248]);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[249]);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[250]);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[251]);
        var instance26 = new Graphics()
            .drawCommands(shapes.s01[250]);
        var instance30 = new Graphics()
            .drawCommands(shapes.s01[252]);
        var instance6 = new Graphic112(MovieClip.SYNCHED);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[214]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[215]);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[216]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[217]);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[218]);
        var instance21 = new Graphics()
            .drawCommands(shapes.s01[219]);
        var instance25 = new Graphics()
            .drawCommands(shapes.s01[220]);
        var instance29 = new Graphics()
            .drawCommands(shapes.s01[221]);
        var instance35 = new Graphics()
            .drawCommands(shapes.s01[253]);
        var instance38 = new Graphics()
            .drawCommands(shapes.s01[254]);
        var instance41 = new Graphics()
            .drawCommands(shapes.s01[250]);
        var instance44 = new Graphics()
            .drawCommands(shapes.s01[255]);
        var instance47 = new Graphics()
            .drawCommands(shapes.s01[256]);
        var instance50 = new Graphics()
            .drawCommands(shapes.s01[250]);
        var instance82 = new Graphics()
            .drawCommands(shapes.s01[257]);
        var instance86 = new Graphics()
            .drawCommands(shapes.s01[258]);
        var instance89 = new Graphics()
            .drawCommands(shapes.s01[259]);
        var instance81 = new Graphic123(MovieClip.SYNCHED);
        var instance80 = new Graphic122(MovieClip.SYNCHED);
        var instance4 = new Graphic111(MovieClip.SYNCHED);
        var instance3 = new Graphic110(MovieClip.SYNCHED);
        var instance2 = new Graphic109(MovieClip.SYNCHED);
        var instance1 = new Graphic108(MovieClip.SYNCHED);
        var instance34 = new Graphic116(MovieClip.SYNCHED);
        var instance33 = new Graphics()
            .drawCommands(shapes.s01[96]);
        var instance60 = new Graphics()
            .drawCommands(shapes.s01[97]);
        var instance67 = new Graphics()
            .drawCommands(shapes.s01[98]);
        var instance71 = new Graphics()
            .drawCommands(shapes.s01[99]);
        var instance75 = new Graphics()
            .drawCommands(shapes.s01[100]);
        var instance79 = new Graphic121(MovieClip.SYNCHED);
        var instance78 = new Graphics()
            .drawCommands(shapes.s01[101]);
        var instance85 = new Graphics()
            .drawCommands(shapes.s01[102]);
        var instance57 = new Graphic120(MovieClip.SYNCHED);
        var instance56 = new Graphic119(MovieClip.SYNCHED);
        var instance55 = new Graphic118(MovieClip.SYNCHED);
        var instance54 = new Graphics()
            .drawCommands(shapes.s01[72]);
        var instance63 = new Graphics()
            .drawCommands(shapes.s01[75]);
        var instance66 = new Graphics()
            .drawCommands(shapes.s01[76]);
        var instance70 = new Graphics()
            .drawCommands(shapes.s01[77]);
        var instance74 = new Graphics()
            .drawCommands(shapes.s01[78]);
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
            .drawCommands(shapes.s01[21])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic127 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[21])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic128 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[25])
            .setTransform(-1289.25, -221.05);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[24])
            .setTransform(-1289.25, -221.05);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[22])
            .setTransform(-1289.25, -221.05);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[22])
            .setTransform(-1263.8, -221.2);
        this.addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic129 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[26])
            .setTransform(-1303.95, -197.85);
        this.addTimedChild(instance1);
    });

    var Graphic130 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[27])
            .setTransform(-1268.05, -199.05);
        this.addTimedChild(instance1);
    });

    var Graphic124 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[47]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[41])
            .setTransform(-5.8, 24);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[37])
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
            .drawCommands(shapes.s01[51]);
        this.addTimedChild(instance1);
    });

    var Graphic133 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[55])
            .setTransform(-1336.85, -168.4, 1.033, 1.033);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[55])
            .setTransform(-1357.3, -164.4, 1.033, 1.033);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[55])
            .setTransform(-1317.25, -167, 1.033, 1.033);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[55])
            .setTransform(-1316.95, -139.1, 0.978, 0.978);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[55])
            .setTransform(-1265.9, -139.25, 1.033, 1.033);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[55])
            .setTransform(-1170.45, -142.3, 0.948, 0.948);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[55])
            .setTransform(-1185.7, -149.8, 0.948, 0.948);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[55])
            .setTransform(-1177.25, -135.65, 0.881, 0.881);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[55])
            .setTransform(-1201.55, -112.45, 0.881, 0.881);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[55])
            .setTransform(-1213, -97.9, 0.881, 0.881);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[55])
            .setTransform(-1255.65, -125.65, 1.033, 1.033);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[54]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[53]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[52])
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
            .drawCommands(shapes.s01[57])
            .setTransform(-1294.55, -252.5);
        this.addTimedChild(instance1);
    });

    var Graphic134 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance2 = new Graphic125(MovieClip.SYNCHED)
            .setTransform(6.55, -82.85);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[56]);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic135 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[59]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[58]);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic136 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[61]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[60]);
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
            .drawCommands(shapes.s01[62])
            .setTransform(-1222.8, -397.15, 0.95);
        this.addTimedChild(instance1);
    });

    var Graphic320 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 50, loop: false });
        var instance4 = new Graphic138(MovieClip.SYNCHED)
            .setTransform(29, -530.3, 1, 1, -0.336);
        var instance3 = new Graphic137(MovieClip.SYNCHED)
            .setTransform(69.65, -590.6, 1.099, 1.099, -0.24);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[20]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[19]);
        this.addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic161 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 60, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[342])
            .setTransform(416.3, -635.6);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[341])
            .setTransform(416.3, -635.6);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic162 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 60, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[342])
            .setTransform(416.3, -635.6);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[341])
            .setTransform(416.3, -635.6);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic139 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 60, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[343])
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
            .drawCommands(shapes.s01[344])
            .setTransform(-1438, -429.8);
        this.addTimedChild(instance1);
    });

    var Graphic144 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 60, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[345])
            .setTransform(-1462.95, -379.25);
        this.addTimedChild(instance1);
    });

    var Graphic145 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 60, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[346]);
        this.addTimedChild(instance1);
    });

    var Graphic146 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 60, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[347]);
        this.addTimedChild(instance1);
    });

    var Graphic147 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 60, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[347]);
        this.addTimedChild(instance1);
    });

    var Graphic148 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 60, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[349])
            .setTransform(-1442.85, -399.9);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[348])
            .setTransform(-1442.85, -399.9);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic140 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 60, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[351]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[350]);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic141 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 60, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[354])
            .setTransform(-1452.05, -513.3);
        this.addTimedChild(instance1);
    });

    var Graphic149 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 60, loop: false });
        var instance4 = new Graphic141(MovieClip.SYNCHED);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[353]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[352]);
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

    var Graphic167 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 52, loop: false });
        var instance1 = new Sprite(fromFrame("REPLACE_EMOJI_SAD"))
            .setTransform(0, 0, 0.5, 0.5);
        this.addTimedChild(instance1);
    });

    var Graphic168 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 52, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[357])
            .setTransform(-640.5, -212.85);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[356])
            .setTransform(-640.5, -212.85);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic171 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 18, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[359]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[358]);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic169 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 11, loop: false });
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[365]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[364]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[360]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[361]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[362]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[363]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[360]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[361]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[362]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[363]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[360]);
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

    var Graphic172 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 18, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[366]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[364]);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic150 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 29, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[343])
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
            .drawCommands(shapes.s01[344])
            .setTransform(-1438, -429.8);
        this.addTimedChild(instance1);
    });

    var Graphic155 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 29, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[345])
            .setTransform(-1462.95, -379.25);
        this.addTimedChild(instance1);
    });

    var Graphic156 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 29, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[346]);
        this.addTimedChild(instance1);
    });

    var Graphic157 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 29, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[347]);
        this.addTimedChild(instance1);
    });

    var Graphic158 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 29, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[347]);
        this.addTimedChild(instance1);
    });

    var Graphic159 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 29, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[349])
            .setTransform(-1442.85, -399.9);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[348])
            .setTransform(-1442.85, -399.9);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic151 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 29, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[351]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[350]);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic152 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 29, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[354])
            .setTransform(-1452.05, -513.3);
        this.addTimedChild(instance1);
    });

    var Graphic160 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 29, loop: false });
        var instance4 = new Graphic152(MovieClip.SYNCHED);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[353]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[352]);
        var instance1 = new Graphic151(MovieClip.SYNCHED)
            .setTransform(2.25, -140.45);
        this.addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic170 = MovieClip.extend(function (mode) {
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

    var Graphic164 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 60, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[368]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[369]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[367]);
        this.addTimedChild(instance2, 0, 9)
            .addTimedChild(instance3, 9, 51)
            .addTimedChild(instance1);
    });

    var Graphic165 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 60, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[370])
            .setTransform(618.7, -630.3);
        this.addTimedChild(instance1);
    });

    var Graphic166 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 60, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[370])
            .setTransform(618.7, -630.3);
        this.addTimedChild(instance1);
    });

    var Graphic321 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 60, loop: false });
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[372]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[371]);
        var instance7 = new Graphic166(MovieClip.SYNCHED)
            .setTransform(-628.85, 630.3);
        var instance6 = new Graphic165(MovieClip.SYNCHED)
            .setTransform(557.45, 624.65, 1, 1, 0, -0.104, -3.037);
        var instance5 = new Graphic164(MovieClip.SYNCHED);
        var instance13 = new Graphic170(MovieClip.SYNCHED);
        var instance12 = new Graphic169(MovieClip.SYNCHED);
        var instance15 = new Graphic172(MovieClip.SYNCHED);
        var instance14 = new Graphic171(MovieClip.SYNCHED);
        var instance11 = new Graphic168(MovieClip.SYNCHED);
        var instance10 = new Graphic167(MovieClip.SYNCHED);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[355]);
        var instance3 = new Graphic163(MovieClip.SYNCHED)
            .setTransform(-16.15, -88.8, 0.577, 0.577);
        var instance2 = new Graphic162(MovieClip.SYNCHED)
            .setTransform(-514.25, 626.9, 1, 1, 0.294);
        var instance1 = new Graphic161(MovieClip.SYNCHED);
        this.addTimedChild(instance9)
            .addTimedChild(instance8)
            .addTimedChild(instance7)
            .addTimedChild(instance6)
            .addTimedChild(instance5, 0, 60, {
                "0": {
                    x: -473.35,
                    y: -479.7,
                    sx: 5,
                    sy: 5
                }
            })
            .addTimedChild(instance13, 31, 29, {
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
            .addTimedChild(instance12, 31, 11, {
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
            .addTimedChild(instance15, 42, 18, {
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
            .addTimedChild(instance14, 42, 18, {
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
            .addTimedChild(instance11, 8, 52, {
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
            .addTimedChild(instance10, 8, 52, {
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

    var Graphic226 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 10, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[152]);
        this.addTimedChild(instance1);
    });

    var Graphic213 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 42, loop: false });
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[111])
            .setTransform(9.85, 31.2, 1.3, 1.3);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[110])
            .setTransform(9.85, 31.2, 1.3, 1.3);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[109])
            .setTransform(9.85, 31.2, 1.3, 1.3);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[108])
            .setTransform(9.85, 31.2, 1.3, 1.3);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[107])
            .setTransform(9.7, 31.2, 1.3, 1.3);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[106])
            .setTransform(-801.7, -1038.95, 1.3, 1.3);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[105])
            .setTransform(-801.7, -1038.95, 1.3, 1.3);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[104])
            .setTransform(-801.7, -1038.95, 1.3, 1.3);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[103])
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

    var Graphic214 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 42, loop: false });
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[111])
            .setTransform(9.85, 31.2, 1.3, 1.3);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[110])
            .setTransform(9.85, 31.2, 1.3, 1.3);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[109])
            .setTransform(9.85, 31.2, 1.3, 1.3);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[108])
            .setTransform(9.85, 31.2, 1.3, 1.3);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[107])
            .setTransform(9.7, 31.2, 1.3, 1.3);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[106])
            .setTransform(-801.7, -1038.95, 1.3, 1.3);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[105])
            .setTransform(-801.7, -1038.95, 1.3, 1.3);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[104])
            .setTransform(-801.7, -1038.95, 1.3, 1.3);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[103])
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

    var Graphic215 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 45, loop: false });
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[378])
            .setTransform(0, -7.95);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[378]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[373]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[377]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[376]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[375]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[374]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[373]);
        this.addTimedChild(instance8)
            .addTimedChild(instance7)
            .addTimedChild(instance6)
            .addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic224 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 14, loop: false });
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[388])
            .setTransform(-6.95, -0.3, 1, 1, 0, 0.472, 2.67);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[387]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[386]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[385]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[384]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[383]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[105])
            .setTransform(584.2, -901.35, 1.166, 1.031, 0, 0.149, 3.014);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[382]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[381]);
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

    var Graphic225 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 14, loop: false });
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[388])
            .setTransform(-6.95, -0.3, 1, 1, 0, 0.472, 2.67);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[387]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[386]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[385]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[384]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[383]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[105])
            .setTransform(584.2, -901.35, 1.166, 1.031, 0, 0.149, 3.014);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[382]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[381]);
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

    var Graphic223 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 15, loop: false });
        var instance1 = new Sprite(fromFrame("REPLACE_HEADSET"))
            .setTransform(0, 0, 0.5, 0.5);
        this.addTimedChild(instance1);
    });

    var Graphic216 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 45, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[389]);
        this.addTimedChild(instance1);
    });

    var Graphic217 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 45, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[389]);
        this.addTimedChild(instance1);
    });

    var Graphic173 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[192])
            .setTransform(-17.65, 14.8, 0.95);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[191])
            .setTransform(-470, -630.85, 0.95);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[190])
            .setTransform(-470, -630.85, 0.95);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[189])
            .setTransform(-470, -630.85, 0.95);
        this.addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic174 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[197])
            .setTransform(14.05, 13.35, 0.95);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[196])
            .setTransform(-438.25, -629.9, 0.95);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[195])
            .setTransform(-438.25, -629.9, 0.95);
        this.addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic218 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[200]);
        var instance2 = new Graphic174(MovieClip.SYNCHED)
            .setTransform(-9.2, -101.15);
        var instance1 = new Graphic173(MovieClip.SYNCHED)
            .setTransform(22.55, -100.2);
        this.addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic184 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 4, loop: false });
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[404]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[403]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[402]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[401]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[400]);
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

    var Graphic182 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 5, loop: false });
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[404]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[403]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[402]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[401]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[400]);
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

    var Graphic183 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 5, loop: false });
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[404]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[403]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[402]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[401]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[400]);
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
        MovieClip.call(this, { mode: mode, duration: 6, loop: false });
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[404]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[403]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[402]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[401]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[400]);
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
        MovieClip.call(this, { mode: mode, duration: 6, loop: false });
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[404]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[403]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[402]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[401]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[400]);
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

    var Graphic181 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 6, loop: false });
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[404]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[403]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[402]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[401]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[400]);
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
            .drawCommands(shapes.s01[404]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[403]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[402]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[401]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[400]);
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
        MovieClip.call(this, { mode: mode, duration: 7, loop: false });
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[404]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[403]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[402]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[401]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[400]);
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
        MovieClip.call(this, { mode: mode, duration: 7, loop: false });
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[404]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[403]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[402]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[401]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[400]);
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
        MovieClip.call(this, { mode: mode, duration: 7, loop: false });
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[404]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[403]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[402]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[401]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[400]);
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

    var Graphic222 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 7, loop: false });
        var instance4 = new Graphic178(MovieClip.SYNCHED)
            .setTransform(-139.45, -98.1);
        var instance3 = new Graphic177(MovieClip.SYNCHED)
            .setTransform(-187.95, 43);
        var instance2 = new Graphic176(MovieClip.SYNCHED)
            .setTransform(144.55, 75.75);
        var instance1 = new Graphic175(MovieClip.SYNCHED);
        var instance7 = new Graphic181(MovieClip.SYNCHED)
            .setTransform(201, 48.65);
        var instance6 = new Graphic180(MovieClip.SYNCHED)
            .setTransform(79.65, -98.7);
        var instance5 = new Graphic179(MovieClip.SYNCHED);
        var instance9 = new Graphic183(MovieClip.SYNCHED)
            .setTransform(171.05, -15.65);
        var instance8 = new Graphic182(MovieClip.SYNCHED);
        var instance10 = new Graphic184(MovieClip.SYNCHED)
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

    var Graphic190 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 8, loop: false });
        var instance1 = new Sprite(fromFrame("REPLACE_EMOJI_HAPPY"));
        this.addTimedChild(instance1);
    });

    var Graphic194 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 8, loop: false });
        var instance1 = new Sprite(fromFrame("REPLACE_EMOJI_HAPPY"));
        this.addTimedChild(instance1);
    });

    var Graphic191 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 7, loop: false });
        var instance1 = new Sprite(fromFrame("REPLACE_EMOJI_HAPPY"));
        this.addTimedChild(instance1);
    });

    var Graphic189 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 8, loop: false });
        var instance1 = new Sprite(fromFrame("REPLACE_EMOJI_HAPPY"));
        this.addTimedChild(instance1);
    });

    var Graphic192 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 8, loop: false });
        var instance1 = new Sprite(fromFrame("REPLACE_EMOJI_HAPPY"));
        this.addTimedChild(instance1);
    });

    var Graphic193 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 8, loop: false });
        var instance1 = new Sprite(fromFrame("REPLACE_EMOJI_HAPPY"));
        this.addTimedChild(instance1);
    });

    var Graphic185 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 8, loop: false });
        var instance1 = new Sprite(fromFrame("REPLACE_EMOJI_HAPPY"));
        this.addTimedChild(instance1);
    });

    var Graphic186 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 8, loop: false });
        var instance1 = new Sprite(fromFrame("REPLACE_EMOJI_HAPPY"));
        this.addTimedChild(instance1);
    });

    var Graphic187 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 8, loop: false });
        var instance1 = new Sprite(fromFrame("REPLACE_EMOJI_HAPPY"));
        this.addTimedChild(instance1);
    });

    var Graphic188 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 8, loop: false });
        var instance1 = new Sprite(fromFrame("REPLACE_EMOJI_HAPPY"));
        this.addTimedChild(instance1);
    });

    var Graphic219 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance4 = new Graphic188(MovieClip.SYNCHED);
        var instance3 = new Graphic187(MovieClip.SYNCHED);
        var instance2 = new Graphic186(MovieClip.SYNCHED);
        var instance1 = new Graphic185(MovieClip.SYNCHED);
        var instance9 = new Graphic193(MovieClip.SYNCHED);
        var instance8 = new Graphic192(MovieClip.SYNCHED);
        var instance5 = new Graphic189(MovieClip.SYNCHED);
        var instance7 = new Graphic191(MovieClip.SYNCHED);
        var instance10 = new Graphic194(MovieClip.SYNCHED);
        var instance6 = new Graphic190(MovieClip.SYNCHED);
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

    var Graphic196 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 49, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[152]);
        this.addTimedChild(instance1);
    });

    var Graphic197 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[153])
            .setTransform(-466.8, -453.85);
        this.addTimedChild(instance1);
    });

    var Graphic198 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[154])
            .setTransform(-504.35, -453.65);
        this.addTimedChild(instance1);
    });

    var Graphic199 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 16, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[155])
            .setTransform(-458.45, -480.9, 0.972);
        this.addTimedChild(instance1);
    });

    var Graphic209 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 17, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[155])
            .setTransform(-458.45, -480.9, 0.972);
        this.addTimedChild(instance1);
    });

    var Graphic211 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[155])
            .setTransform(-458.45, -480.9, 0.972);
        this.addTimedChild(instance1);
    });

    var Graphic200 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 16, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[155])
            .setTransform(-458.45, -480.9, 0.972);
        this.addTimedChild(instance1);
    });

    var Graphic210 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 17, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[155])
            .setTransform(-458.45, -480.9, 0.972);
        this.addTimedChild(instance1);
    });

    var Graphic212 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[155])
            .setTransform(-458.45, -480.9, 0.972);
        this.addTimedChild(instance1);
    });

    var Graphic201 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[161]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[160]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[159]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[158]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[157]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[156]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[171]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[170]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[169]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[168]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[167]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[166]);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[161]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[160]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[159]);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[158]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[157]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[156]);
        var instance24 = new Graphics()
            .drawCommands(shapes.s01[171]);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[170]);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[169]);
        var instance21 = new Graphics()
            .drawCommands(shapes.s01[168]);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[167]);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[166]);
        var instance30 = new Graphics()
            .drawCommands(shapes.s01[161]);
        var instance29 = new Graphics()
            .drawCommands(shapes.s01[160]);
        var instance28 = new Graphics()
            .drawCommands(shapes.s01[159]);
        var instance27 = new Graphics()
            .drawCommands(shapes.s01[158]);
        var instance26 = new Graphics()
            .drawCommands(shapes.s01[157]);
        var instance25 = new Graphics()
            .drawCommands(shapes.s01[156]);
        var instance36 = new Graphics()
            .drawCommands(shapes.s01[171])
            .setTransform(-2.45, 1.7, 1.289, 0.827);
        var instance35 = new Graphics()
            .drawCommands(shapes.s01[170])
            .setTransform(-0.05, 1.8, 1.289, 0.827);
        var instance34 = new Graphics()
            .drawCommands(shapes.s01[169])
            .setTransform(6.85, 1.9, 0.95, 0.95);
        var instance33 = new Graphics()
            .drawCommands(shapes.s01[168])
            .setTransform(1.1, 0, 0.95, 0.95);
        var instance32 = new Graphics()
            .drawCommands(shapes.s01[167])
            .setTransform(-9.25, -1.15, 0.95, 0.95);
        var instance31 = new Graphics()
            .drawCommands(shapes.s01[166])
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

    var Graphic195 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[419]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[413]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[405]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[420]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[414]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[406]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[174]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[421]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[415]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[407]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[174]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[419]);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[413]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[405]);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[33]);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[32]);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[408]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[30]);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[422]);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[416]);
        var instance21 = new Graphics()
            .drawCommands(shapes.s01[409]);
        var instance26 = new Graphics()
            .drawCommands(shapes.s01[420]);
        var instance25 = new Graphics()
            .drawCommands(shapes.s01[414]);
        var instance24 = new Graphics()
            .drawCommands(shapes.s01[406]);
        var instance27 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance31 = new Graphics()
            .drawCommands(shapes.s01[33]);
        var instance30 = new Graphics()
            .drawCommands(shapes.s01[32]);
        var instance29 = new Graphics()
            .drawCommands(shapes.s01[408]);
        var instance28 = new Graphics()
            .drawCommands(shapes.s01[30]);
        var instance32 = new Graphics()
            .drawCommands(shapes.s01[174]);
        var instance35 = new Graphics()
            .drawCommands(shapes.s01[421]);
        var instance34 = new Graphics()
            .drawCommands(shapes.s01[415]);
        var instance33 = new Graphics()
            .drawCommands(shapes.s01[407]);
        var instance36 = new Graphics()
            .drawCommands(shapes.s01[410]);
        var instance40 = new Graphics()
            .drawCommands(shapes.s01[423]);
        var instance39 = new Graphics()
            .drawCommands(shapes.s01[418]);
        var instance38 = new Graphics()
            .drawCommands(shapes.s01[417]);
        var instance37 = new Graphics()
            .drawCommands(shapes.s01[411]);
        var instance44 = new Graphics()
            .drawCommands(shapes.s01[33]);
        var instance43 = new Graphics()
            .drawCommands(shapes.s01[32]);
        var instance42 = new Graphics()
            .drawCommands(shapes.s01[408]);
        var instance41 = new Graphics()
            .drawCommands(shapes.s01[30]);
        var instance47 = new Graphics()
            .drawCommands(shapes.s01[419]);
        var instance46 = new Graphics()
            .drawCommands(shapes.s01[413]);
        var instance45 = new Graphics()
            .drawCommands(shapes.s01[405]);
        var instance51 = new Graphics()
            .drawCommands(shapes.s01[33]);
        var instance50 = new Graphics()
            .drawCommands(shapes.s01[32]);
        var instance49 = new Graphics()
            .drawCommands(shapes.s01[408]);
        var instance48 = new Graphics()
            .drawCommands(shapes.s01[30]);
        var instance54 = new Graphics()
            .drawCommands(shapes.s01[422]);
        var instance53 = new Graphics()
            .drawCommands(shapes.s01[416]);
        var instance52 = new Graphics()
            .drawCommands(shapes.s01[409]);
        var instance57 = new Graphics()
            .drawCommands(shapes.s01[420]);
        var instance56 = new Graphics()
            .drawCommands(shapes.s01[414]);
        var instance55 = new Graphics()
            .drawCommands(shapes.s01[406]);
        var instance60 = new Graphics()
            .drawCommands(shapes.s01[422]);
        var instance59 = new Graphics()
            .drawCommands(shapes.s01[416]);
        var instance58 = new Graphics()
            .drawCommands(shapes.s01[409]);
        var instance61 = new Graphics()
            .drawCommands(shapes.s01[412]);
        var instance62 = new Graphics()
            .drawCommands(shapes.s01[173]);
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

    var Graphic202 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance1 = new Graphic195(MovieClip.SYNCHED);
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

    var Graphic203 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[181]);
        this.addTimedChild(instance1);
    });

    var Graphic204 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[184])
            .setTransform(-368.7, -483.9, 0.959);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[183])
            .setTransform(-383.8, -485.3);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic205 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[151]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[150])
            .setTransform(-585.65, -483.25);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic206 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[74]);
        this.addTimedChild(instance1);
    });

    var Graphic207 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[73])
            .setTransform(-657.05, -461.95);
        this.addTimedChild(instance1);
    });

    var Graphic208 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[188])
            .setTransform(-497.15, -407.2);
        this.addTimedChild(instance1);
    });

    var Graphic220 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance14 = new Graphic208(MovieClip.SYNCHED)
            .setTransform(17, -197.8);
        var instance13 = new Graphic207(MovieClip.SYNCHED);
        var instance12 = new Graphic206(MovieClip.SYNCHED);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[424]);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[425]);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[426]);
        var instance21 = new Graphics()
            .drawCommands(shapes.s01[427]);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[428]);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[429]);
        var instance24 = new Graphics()
            .drawCommands(shapes.s01[430]);
        var instance25 = new Graphics()
            .drawCommands(shapes.s01[431]);
        var instance26 = new Graphics()
            .drawCommands(shapes.s01[432]);
        var instance10 = new Graphic205(MovieClip.SYNCHED)
            .setTransform(105.5, -122.2);
        var instance9 = new Graphic204(MovieClip.SYNCHED)
            .setTransform(-96.35, -120.15);
        var instance8 = new Graphic203(MovieClip.SYNCHED)
            .setTransform(4.15, -0.3);
        var instance7 = new Graphic202(MovieClip.SYNCHED)
            .setTransform(-6.85, -75.4);
        var instance6 = new Graphic201(MovieClip.SYNCHED);
        var instance5 = new Graphic200(MovieClip.SYNCHED);
        var instance4 = new Graphic199(MovieClip.SYNCHED);
        var instance16 = new Graphic210(MovieClip.SYNCHED);
        var instance15 = new Graphic209(MovieClip.SYNCHED);
        var instance18 = new Graphic212(MovieClip.SYNCHED);
        var instance17 = new Graphic211(MovieClip.SYNCHED);
        var instance3 = new Graphic198(MovieClip.SYNCHED);
        var instance2 = new Graphic197(MovieClip.SYNCHED);
        var instance1 = new Graphic196(MovieClip.SYNCHED);
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

    var Graphic221 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[201])
            .setTransform(-461.15, -639, 0.96);
        this.addTimedChild(instance1);
    });

    var Graphic322 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance11 = new Graphic221(MovieClip.SYNCHED)
            .setTransform(29.35, -395.6);
        var instance10 = new Graphic220(MovieClip.SYNCHED);
        var instance9 = new Graphic219(MovieClip.SYNCHED);
        var instance12 = new Graphic222(MovieClip.SYNCHED);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[395]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[390]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[396]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[391]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[397]);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[392]);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[398]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[393]);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[399]);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[394]);
        var instance6 = new Graphic218(MovieClip.SYNCHED);
        var instance5 = new Graphic217(MovieClip.SYNCHED);
        var instance4 = new Graphic216(MovieClip.SYNCHED);
        var instance21 = new Graphic223(MovieClip.SYNCHED);
        var instance3 = new Graphic215(MovieClip.SYNCHED);
        var instance2 = new Graphic214(MovieClip.SYNCHED);
        var instance1 = new Graphic213(MovieClip.SYNCHED);
        var instance25 = new Graphic225(MovieClip.SYNCHED);
        var instance24 = new Graphic224(MovieClip.SYNCHED);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[380]);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[379]);
        var instance26 = new Graphic226(MovieClip.SYNCHED);
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
                },
                "50": {
                    y: -804.35
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

    var Graphic323 = MovieClip.extend(function (mode) {
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

    var Graphic229 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 57, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[21])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic230 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 57, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[21])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic231 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 57, loop: false });
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[25])
            .setTransform(-1289.25, -221.05);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[24])
            .setTransform(-1289.25, -221.05);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[22])
            .setTransform(-1289.25, -221.05);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[22])
            .setTransform(-1263.8, -221.2);
        this.addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic232 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 57, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[26])
            .setTransform(-1303.95, -197.85);
        this.addTimedChild(instance1);
    });

    var Graphic233 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 57, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[27])
            .setTransform(-1268.05, -199.05);
        this.addTimedChild(instance1);
    });

    var Graphic227 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 57, loop: false });
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[47]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[41])
            .setTransform(-5.8, 24);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[37])
            .setTransform(-5.8, 24);
        this.addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic234 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 57, loop: false });
        var instance1 = new Graphic227(MovieClip.SYNCHED)
            .setTransform(-0.05, -12.5, 1.172, 0.483);
        this.addTimedChild(instance1);
    });

    var Graphic235 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 57, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[51]);
        this.addTimedChild(instance1);
    });

    var Graphic236 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 57, loop: false });
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[55])
            .setTransform(-1336.85, -168.4, 1.033, 1.033);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[55])
            .setTransform(-1357.3, -164.4, 1.033, 1.033);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[55])
            .setTransform(-1317.25, -167, 1.033, 1.033);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[55])
            .setTransform(-1316.95, -139.1, 0.978, 0.978);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[55])
            .setTransform(-1265.9, -139.25, 1.033, 1.033);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[55])
            .setTransform(-1170.45, -142.3, 0.948, 0.948);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[55])
            .setTransform(-1185.7, -149.8, 0.948, 0.948);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[55])
            .setTransform(-1177.25, -135.65, 0.881, 0.881);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[55])
            .setTransform(-1201.55, -112.45, 0.881, 0.881);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[55])
            .setTransform(-1213, -97.9, 0.881, 0.881);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[55])
            .setTransform(-1255.65, -125.65, 1.033, 1.033);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[54]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[53]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[52])
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

    var Graphic228 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 57, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[57])
            .setTransform(-1294.55, -252.5);
        this.addTimedChild(instance1);
    });

    var Graphic237 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 57, loop: false });
        var instance2 = new Graphic228(MovieClip.SYNCHED)
            .setTransform(6.55, -82.85);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[56]);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic238 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 57, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[59]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[58]);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic239 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 57, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[61]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[60]);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic240 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 57, loop: false });
        var instance11 = new Graphic239(MovieClip.SYNCHED)
            .setTransform(-61.6, -103.3);
        var instance10 = new Graphic238(MovieClip.SYNCHED)
            .setTransform(80.9, -103);
        var instance9 = new Graphic237(MovieClip.SYNCHED)
            .setTransform(-0.1, 0.55);
        var instance8 = new Graphic236(MovieClip.SYNCHED)
            .setTransform(6.55, -171.5);
        var instance7 = new Graphic235(MovieClip.SYNCHED)
            .setTransform(-6.5, -91.2);
        var instance6 = new Graphic234(MovieClip.SYNCHED)
            .setTransform(-2.75, -68.2);
        var instance5 = new Graphic233(MovieClip.SYNCHED)
            .setTransform(-17.4, -129.65, 1, 1, -0.044);
        var instance4 = new Graphic232(MovieClip.SYNCHED)
            .setTransform(15.55, -130.55, 1, 1, 0.062);
        var instance3 = new Graphic231(MovieClip.SYNCHED)
            .setTransform(1.15, -113.75);
        var instance2 = new Graphic230(MovieClip.SYNCHED)
            .setTransform(-17.45, -112.3);
        var instance1 = new Graphic229(MovieClip.SYNCHED)
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

    var Graphic241 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 57, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[62])
            .setTransform(-1222.8, -397.15, 0.95);
        this.addTimedChild(instance1);
    });

    var Graphic324 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance4 = new Graphic241(MovieClip.SYNCHED);
        var instance3 = new Graphic240(MovieClip.SYNCHED);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[20]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[19]);
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

    var Graphic325 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[340]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[339]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[338])
            .setTransform(390.5, 46);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[337])
            .setTransform(390.5, 46);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[336]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[335]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[334]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[333]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[332]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[331]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[330]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[329])
            .setTransform(390.5, 46);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[328])
            .setTransform(390.5, 46);
        this.addTimedChild(instance13)
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

    var Graphic242 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 79, loop: false });
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[501]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[500]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[490]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[480]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[469]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[459]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[491]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[481]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[470]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[460]);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[492]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[482]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[471]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[461]);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[493]);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[483]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[472]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[462]);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[494]);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[484]);
        var instance21 = new Graphics()
            .drawCommands(shapes.s01[473]);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[463]);
        var instance27 = new Graphics()
            .drawCommands(shapes.s01[495]);
        var instance26 = new Graphics()
            .drawCommands(shapes.s01[485]);
        var instance25 = new Graphics()
            .drawCommands(shapes.s01[474]);
        var instance24 = new Graphics()
            .drawCommands(shapes.s01[464]);
        var instance31 = new Graphics()
            .drawCommands(shapes.s01[496]);
        var instance30 = new Graphics()
            .drawCommands(shapes.s01[486]);
        var instance29 = new Graphics()
            .drawCommands(shapes.s01[475]);
        var instance28 = new Graphics()
            .drawCommands(shapes.s01[465]);
        var instance35 = new Graphics()
            .drawCommands(shapes.s01[497]);
        var instance34 = new Graphics()
            .drawCommands(shapes.s01[487]);
        var instance33 = new Graphics()
            .drawCommands(shapes.s01[476]);
        var instance32 = new Graphics()
            .drawCommands(shapes.s01[466]);
        var instance39 = new Graphics()
            .drawCommands(shapes.s01[498]);
        var instance38 = new Graphics()
            .drawCommands(shapes.s01[488]);
        var instance37 = new Graphics()
            .drawCommands(shapes.s01[477]);
        var instance36 = new Graphics()
            .drawCommands(shapes.s01[467]);
        var instance43 = new Graphics()
            .drawCommands(shapes.s01[499]);
        var instance42 = new Graphics()
            .drawCommands(shapes.s01[489]);
        var instance41 = new Graphics()
            .drawCommands(shapes.s01[478]);
        var instance40 = new Graphics()
            .drawCommands(shapes.s01[468]);
        var instance48 = new Graphics()
            .drawCommands(shapes.s01[490]);
        var instance47 = new Graphics()
            .drawCommands(shapes.s01[490]);
        var instance46 = new Graphics()
            .drawCommands(shapes.s01[480]);
        var instance45 = new Graphics()
            .drawCommands(shapes.s01[479]);
        var instance44 = new Graphics()
            .drawCommands(shapes.s01[459]);
        var instance52 = new Graphics()
            .drawCommands(shapes.s01[491]);
        var instance51 = new Graphics()
            .drawCommands(shapes.s01[481]);
        var instance50 = new Graphics()
            .drawCommands(shapes.s01[470]);
        var instance49 = new Graphics()
            .drawCommands(shapes.s01[460]);
        var instance56 = new Graphics()
            .drawCommands(shapes.s01[492]);
        var instance55 = new Graphics()
            .drawCommands(shapes.s01[482]);
        var instance54 = new Graphics()
            .drawCommands(shapes.s01[471]);
        var instance53 = new Graphics()
            .drawCommands(shapes.s01[461]);
        var instance60 = new Graphics()
            .drawCommands(shapes.s01[493]);
        var instance59 = new Graphics()
            .drawCommands(shapes.s01[483]);
        var instance58 = new Graphics()
            .drawCommands(shapes.s01[472]);
        var instance57 = new Graphics()
            .drawCommands(shapes.s01[462]);
        var instance64 = new Graphics()
            .drawCommands(shapes.s01[494]);
        var instance63 = new Graphics()
            .drawCommands(shapes.s01[484]);
        var instance62 = new Graphics()
            .drawCommands(shapes.s01[473]);
        var instance61 = new Graphics()
            .drawCommands(shapes.s01[463]);
        var instance68 = new Graphics()
            .drawCommands(shapes.s01[495]);
        var instance67 = new Graphics()
            .drawCommands(shapes.s01[485]);
        var instance66 = new Graphics()
            .drawCommands(shapes.s01[474]);
        var instance65 = new Graphics()
            .drawCommands(shapes.s01[464]);
        var instance72 = new Graphics()
            .drawCommands(shapes.s01[496]);
        var instance71 = new Graphics()
            .drawCommands(shapes.s01[486]);
        var instance70 = new Graphics()
            .drawCommands(shapes.s01[475]);
        var instance69 = new Graphics()
            .drawCommands(shapes.s01[465]);
        var instance76 = new Graphics()
            .drawCommands(shapes.s01[497]);
        var instance75 = new Graphics()
            .drawCommands(shapes.s01[487]);
        var instance74 = new Graphics()
            .drawCommands(shapes.s01[476]);
        var instance73 = new Graphics()
            .drawCommands(shapes.s01[466]);
        var instance80 = new Graphics()
            .drawCommands(shapes.s01[498]);
        var instance79 = new Graphics()
            .drawCommands(shapes.s01[488]);
        var instance78 = new Graphics()
            .drawCommands(shapes.s01[477]);
        var instance77 = new Graphics()
            .drawCommands(shapes.s01[467]);
        var instance84 = new Graphics()
            .drawCommands(shapes.s01[499]);
        var instance83 = new Graphics()
            .drawCommands(shapes.s01[489]);
        var instance82 = new Graphics()
            .drawCommands(shapes.s01[478]);
        var instance81 = new Graphics()
            .drawCommands(shapes.s01[468]);
        var instance88 = new Graphics()
            .drawCommands(shapes.s01[490]);
        var instance87 = new Graphics()
            .drawCommands(shapes.s01[480]);
        var instance86 = new Graphics()
            .drawCommands(shapes.s01[469]);
        var instance85 = new Graphics()
            .drawCommands(shapes.s01[459]);
        var instance92 = new Graphics()
            .drawCommands(shapes.s01[491]);
        var instance91 = new Graphics()
            .drawCommands(shapes.s01[481]);
        var instance90 = new Graphics()
            .drawCommands(shapes.s01[470]);
        var instance89 = new Graphics()
            .drawCommands(shapes.s01[460]);
        var instance96 = new Graphics()
            .drawCommands(shapes.s01[492]);
        var instance95 = new Graphics()
            .drawCommands(shapes.s01[482]);
        var instance94 = new Graphics()
            .drawCommands(shapes.s01[471]);
        var instance93 = new Graphics()
            .drawCommands(shapes.s01[461]);
        var instance100 = new Graphics()
            .drawCommands(shapes.s01[493]);
        var instance99 = new Graphics()
            .drawCommands(shapes.s01[483]);
        var instance98 = new Graphics()
            .drawCommands(shapes.s01[472]);
        var instance97 = new Graphics()
            .drawCommands(shapes.s01[462]);
        var instance104 = new Graphics()
            .drawCommands(shapes.s01[494]);
        var instance103 = new Graphics()
            .drawCommands(shapes.s01[484]);
        var instance102 = new Graphics()
            .drawCommands(shapes.s01[473]);
        var instance101 = new Graphics()
            .drawCommands(shapes.s01[463]);
        var instance108 = new Graphics()
            .drawCommands(shapes.s01[495]);
        var instance107 = new Graphics()
            .drawCommands(shapes.s01[485]);
        var instance106 = new Graphics()
            .drawCommands(shapes.s01[474]);
        var instance105 = new Graphics()
            .drawCommands(shapes.s01[464]);
        var instance112 = new Graphics()
            .drawCommands(shapes.s01[496]);
        var instance111 = new Graphics()
            .drawCommands(shapes.s01[486]);
        var instance110 = new Graphics()
            .drawCommands(shapes.s01[475]);
        var instance109 = new Graphics()
            .drawCommands(shapes.s01[465]);
        var instance116 = new Graphics()
            .drawCommands(shapes.s01[497]);
        var instance115 = new Graphics()
            .drawCommands(shapes.s01[487]);
        var instance114 = new Graphics()
            .drawCommands(shapes.s01[476]);
        var instance113 = new Graphics()
            .drawCommands(shapes.s01[466]);
        var instance120 = new Graphics()
            .drawCommands(shapes.s01[498]);
        var instance119 = new Graphics()
            .drawCommands(shapes.s01[488]);
        var instance118 = new Graphics()
            .drawCommands(shapes.s01[477]);
        var instance117 = new Graphics()
            .drawCommands(shapes.s01[467]);
        var instance124 = new Graphics()
            .drawCommands(shapes.s01[499]);
        var instance123 = new Graphics()
            .drawCommands(shapes.s01[489]);
        var instance122 = new Graphics()
            .drawCommands(shapes.s01[478]);
        var instance121 = new Graphics()
            .drawCommands(shapes.s01[468]);
        var instance129 = new Graphics()
            .drawCommands(shapes.s01[490]);
        var instance128 = new Graphics()
            .drawCommands(shapes.s01[490]);
        var instance127 = new Graphics()
            .drawCommands(shapes.s01[480]);
        var instance126 = new Graphics()
            .drawCommands(shapes.s01[479]);
        var instance125 = new Graphics()
            .drawCommands(shapes.s01[459]);
        var instance133 = new Graphics()
            .drawCommands(shapes.s01[491]);
        var instance132 = new Graphics()
            .drawCommands(shapes.s01[481]);
        var instance131 = new Graphics()
            .drawCommands(shapes.s01[470]);
        var instance130 = new Graphics()
            .drawCommands(shapes.s01[460]);
        var instance137 = new Graphics()
            .drawCommands(shapes.s01[492]);
        var instance136 = new Graphics()
            .drawCommands(shapes.s01[482]);
        var instance135 = new Graphics()
            .drawCommands(shapes.s01[471]);
        var instance134 = new Graphics()
            .drawCommands(shapes.s01[461]);
        var instance141 = new Graphics()
            .drawCommands(shapes.s01[493]);
        var instance140 = new Graphics()
            .drawCommands(shapes.s01[483]);
        var instance139 = new Graphics()
            .drawCommands(shapes.s01[472]);
        var instance138 = new Graphics()
            .drawCommands(shapes.s01[462]);
        var instance145 = new Graphics()
            .drawCommands(shapes.s01[494]);
        var instance144 = new Graphics()
            .drawCommands(shapes.s01[484]);
        var instance143 = new Graphics()
            .drawCommands(shapes.s01[473]);
        var instance142 = new Graphics()
            .drawCommands(shapes.s01[463]);
        var instance149 = new Graphics()
            .drawCommands(shapes.s01[495]);
        var instance148 = new Graphics()
            .drawCommands(shapes.s01[485]);
        var instance147 = new Graphics()
            .drawCommands(shapes.s01[474]);
        var instance146 = new Graphics()
            .drawCommands(shapes.s01[464]);
        var instance153 = new Graphics()
            .drawCommands(shapes.s01[496]);
        var instance152 = new Graphics()
            .drawCommands(shapes.s01[486]);
        var instance151 = new Graphics()
            .drawCommands(shapes.s01[475]);
        var instance150 = new Graphics()
            .drawCommands(shapes.s01[465]);
        var instance157 = new Graphics()
            .drawCommands(shapes.s01[497]);
        var instance156 = new Graphics()
            .drawCommands(shapes.s01[487]);
        var instance155 = new Graphics()
            .drawCommands(shapes.s01[476]);
        var instance154 = new Graphics()
            .drawCommands(shapes.s01[466]);
        var instance161 = new Graphics()
            .drawCommands(shapes.s01[498]);
        var instance160 = new Graphics()
            .drawCommands(shapes.s01[488]);
        var instance159 = new Graphics()
            .drawCommands(shapes.s01[477]);
        var instance158 = new Graphics()
            .drawCommands(shapes.s01[467]);
        var instance165 = new Graphics()
            .drawCommands(shapes.s01[499]);
        var instance164 = new Graphics()
            .drawCommands(shapes.s01[489]);
        var instance163 = new Graphics()
            .drawCommands(shapes.s01[478]);
        var instance162 = new Graphics()
            .drawCommands(shapes.s01[468]);
        var instance169 = new Graphics()
            .drawCommands(shapes.s01[490]);
        var instance168 = new Graphics()
            .drawCommands(shapes.s01[480]);
        var instance167 = new Graphics()
            .drawCommands(shapes.s01[469]);
        var instance166 = new Graphics()
            .drawCommands(shapes.s01[459]);
        var instance173 = new Graphics()
            .drawCommands(shapes.s01[491]);
        var instance172 = new Graphics()
            .drawCommands(shapes.s01[481]);
        var instance171 = new Graphics()
            .drawCommands(shapes.s01[470]);
        var instance170 = new Graphics()
            .drawCommands(shapes.s01[460]);
        var instance177 = new Graphics()
            .drawCommands(shapes.s01[492]);
        var instance176 = new Graphics()
            .drawCommands(shapes.s01[482]);
        var instance175 = new Graphics()
            .drawCommands(shapes.s01[471]);
        var instance174 = new Graphics()
            .drawCommands(shapes.s01[461]);
        var instance181 = new Graphics()
            .drawCommands(shapes.s01[493]);
        var instance180 = new Graphics()
            .drawCommands(shapes.s01[483]);
        var instance179 = new Graphics()
            .drawCommands(shapes.s01[472]);
        var instance178 = new Graphics()
            .drawCommands(shapes.s01[462]);
        var instance185 = new Graphics()
            .drawCommands(shapes.s01[494]);
        var instance184 = new Graphics()
            .drawCommands(shapes.s01[484]);
        var instance183 = new Graphics()
            .drawCommands(shapes.s01[473]);
        var instance182 = new Graphics()
            .drawCommands(shapes.s01[463]);
        var instance189 = new Graphics()
            .drawCommands(shapes.s01[495]);
        var instance188 = new Graphics()
            .drawCommands(shapes.s01[485]);
        var instance187 = new Graphics()
            .drawCommands(shapes.s01[474]);
        var instance186 = new Graphics()
            .drawCommands(shapes.s01[464]);
        var instance193 = new Graphics()
            .drawCommands(shapes.s01[496]);
        var instance192 = new Graphics()
            .drawCommands(shapes.s01[486]);
        var instance191 = new Graphics()
            .drawCommands(shapes.s01[475]);
        var instance190 = new Graphics()
            .drawCommands(shapes.s01[465]);
        var instance197 = new Graphics()
            .drawCommands(shapes.s01[497]);
        var instance196 = new Graphics()
            .drawCommands(shapes.s01[487]);
        var instance195 = new Graphics()
            .drawCommands(shapes.s01[476]);
        var instance194 = new Graphics()
            .drawCommands(shapes.s01[466]);
        var instance201 = new Graphics()
            .drawCommands(shapes.s01[498]);
        var instance200 = new Graphics()
            .drawCommands(shapes.s01[488]);
        var instance199 = new Graphics()
            .drawCommands(shapes.s01[477]);
        var instance198 = new Graphics()
            .drawCommands(shapes.s01[467]);
        var instance205 = new Graphics()
            .drawCommands(shapes.s01[499]);
        var instance204 = new Graphics()
            .drawCommands(shapes.s01[489]);
        var instance203 = new Graphics()
            .drawCommands(shapes.s01[478]);
        var instance202 = new Graphics()
            .drawCommands(shapes.s01[468]);
        var instance210 = new Graphics()
            .drawCommands(shapes.s01[490]);
        var instance209 = new Graphics()
            .drawCommands(shapes.s01[490]);
        var instance208 = new Graphics()
            .drawCommands(shapes.s01[480]);
        var instance207 = new Graphics()
            .drawCommands(shapes.s01[479]);
        var instance206 = new Graphics()
            .drawCommands(shapes.s01[459]);
        var instance214 = new Graphics()
            .drawCommands(shapes.s01[491]);
        var instance213 = new Graphics()
            .drawCommands(shapes.s01[481]);
        var instance212 = new Graphics()
            .drawCommands(shapes.s01[470]);
        var instance211 = new Graphics()
            .drawCommands(shapes.s01[460]);
        var instance218 = new Graphics()
            .drawCommands(shapes.s01[492]);
        var instance217 = new Graphics()
            .drawCommands(shapes.s01[482]);
        var instance216 = new Graphics()
            .drawCommands(shapes.s01[471]);
        var instance215 = new Graphics()
            .drawCommands(shapes.s01[461]);
        var instance222 = new Graphics()
            .drawCommands(shapes.s01[493]);
        var instance221 = new Graphics()
            .drawCommands(shapes.s01[483]);
        var instance220 = new Graphics()
            .drawCommands(shapes.s01[472]);
        var instance219 = new Graphics()
            .drawCommands(shapes.s01[462]);
        var instance226 = new Graphics()
            .drawCommands(shapes.s01[494]);
        var instance225 = new Graphics()
            .drawCommands(shapes.s01[484]);
        var instance224 = new Graphics()
            .drawCommands(shapes.s01[473]);
        var instance223 = new Graphics()
            .drawCommands(shapes.s01[463]);
        var instance230 = new Graphics()
            .drawCommands(shapes.s01[495]);
        var instance229 = new Graphics()
            .drawCommands(shapes.s01[485]);
        var instance228 = new Graphics()
            .drawCommands(shapes.s01[474]);
        var instance227 = new Graphics()
            .drawCommands(shapes.s01[464]);
        var instance234 = new Graphics()
            .drawCommands(shapes.s01[496]);
        var instance233 = new Graphics()
            .drawCommands(shapes.s01[486]);
        var instance232 = new Graphics()
            .drawCommands(shapes.s01[475]);
        var instance231 = new Graphics()
            .drawCommands(shapes.s01[465]);
        var instance238 = new Graphics()
            .drawCommands(shapes.s01[497]);
        var instance237 = new Graphics()
            .drawCommands(shapes.s01[487]);
        var instance236 = new Graphics()
            .drawCommands(shapes.s01[476]);
        var instance235 = new Graphics()
            .drawCommands(shapes.s01[466]);
        var instance242 = new Graphics()
            .drawCommands(shapes.s01[498]);
        var instance241 = new Graphics()
            .drawCommands(shapes.s01[488]);
        var instance240 = new Graphics()
            .drawCommands(shapes.s01[477]);
        var instance239 = new Graphics()
            .drawCommands(shapes.s01[467]);
        var instance246 = new Graphics()
            .drawCommands(shapes.s01[499]);
        var instance245 = new Graphics()
            .drawCommands(shapes.s01[489]);
        var instance244 = new Graphics()
            .drawCommands(shapes.s01[478]);
        var instance243 = new Graphics()
            .drawCommands(shapes.s01[468]);
        var instance250 = new Graphics()
            .drawCommands(shapes.s01[490]);
        var instance249 = new Graphics()
            .drawCommands(shapes.s01[480]);
        var instance248 = new Graphics()
            .drawCommands(shapes.s01[469]);
        var instance247 = new Graphics()
            .drawCommands(shapes.s01[459]);
        var instance254 = new Graphics()
            .drawCommands(shapes.s01[491]);
        var instance253 = new Graphics()
            .drawCommands(shapes.s01[481]);
        var instance252 = new Graphics()
            .drawCommands(shapes.s01[470]);
        var instance251 = new Graphics()
            .drawCommands(shapes.s01[460]);
        var instance258 = new Graphics()
            .drawCommands(shapes.s01[492]);
        var instance257 = new Graphics()
            .drawCommands(shapes.s01[482]);
        var instance256 = new Graphics()
            .drawCommands(shapes.s01[471]);
        var instance255 = new Graphics()
            .drawCommands(shapes.s01[461]);
        var instance262 = new Graphics()
            .drawCommands(shapes.s01[493]);
        var instance261 = new Graphics()
            .drawCommands(shapes.s01[483]);
        var instance260 = new Graphics()
            .drawCommands(shapes.s01[472]);
        var instance259 = new Graphics()
            .drawCommands(shapes.s01[462]);
        var instance266 = new Graphics()
            .drawCommands(shapes.s01[494]);
        var instance265 = new Graphics()
            .drawCommands(shapes.s01[484]);
        var instance264 = new Graphics()
            .drawCommands(shapes.s01[473]);
        var instance263 = new Graphics()
            .drawCommands(shapes.s01[463]);
        var instance270 = new Graphics()
            .drawCommands(shapes.s01[495]);
        var instance269 = new Graphics()
            .drawCommands(shapes.s01[485]);
        var instance268 = new Graphics()
            .drawCommands(shapes.s01[474]);
        var instance267 = new Graphics()
            .drawCommands(shapes.s01[464]);
        var instance274 = new Graphics()
            .drawCommands(shapes.s01[496]);
        var instance273 = new Graphics()
            .drawCommands(shapes.s01[486]);
        var instance272 = new Graphics()
            .drawCommands(shapes.s01[475]);
        var instance271 = new Graphics()
            .drawCommands(shapes.s01[465]);
        var instance278 = new Graphics()
            .drawCommands(shapes.s01[497]);
        var instance277 = new Graphics()
            .drawCommands(shapes.s01[487]);
        var instance276 = new Graphics()
            .drawCommands(shapes.s01[476]);
        var instance275 = new Graphics()
            .drawCommands(shapes.s01[466]);
        var instance282 = new Graphics()
            .drawCommands(shapes.s01[498]);
        var instance281 = new Graphics()
            .drawCommands(shapes.s01[488]);
        var instance280 = new Graphics()
            .drawCommands(shapes.s01[477]);
        var instance279 = new Graphics()
            .drawCommands(shapes.s01[467]);
        var instance286 = new Graphics()
            .drawCommands(shapes.s01[499]);
        var instance285 = new Graphics()
            .drawCommands(shapes.s01[489]);
        var instance284 = new Graphics()
            .drawCommands(shapes.s01[478]);
        var instance283 = new Graphics()
            .drawCommands(shapes.s01[468]);
        var instance291 = new Graphics()
            .drawCommands(shapes.s01[490]);
        var instance290 = new Graphics()
            .drawCommands(shapes.s01[490]);
        var instance289 = new Graphics()
            .drawCommands(shapes.s01[480]);
        var instance288 = new Graphics()
            .drawCommands(shapes.s01[479]);
        var instance287 = new Graphics()
            .drawCommands(shapes.s01[459]);
        var instance295 = new Graphics()
            .drawCommands(shapes.s01[491]);
        var instance294 = new Graphics()
            .drawCommands(shapes.s01[481]);
        var instance293 = new Graphics()
            .drawCommands(shapes.s01[470]);
        var instance292 = new Graphics()
            .drawCommands(shapes.s01[460]);
        var instance299 = new Graphics()
            .drawCommands(shapes.s01[492]);
        var instance298 = new Graphics()
            .drawCommands(shapes.s01[482]);
        var instance297 = new Graphics()
            .drawCommands(shapes.s01[471]);
        var instance296 = new Graphics()
            .drawCommands(shapes.s01[461]);
        var instance303 = new Graphics()
            .drawCommands(shapes.s01[493]);
        var instance302 = new Graphics()
            .drawCommands(shapes.s01[483]);
        var instance301 = new Graphics()
            .drawCommands(shapes.s01[472]);
        var instance300 = new Graphics()
            .drawCommands(shapes.s01[462]);
        var instance307 = new Graphics()
            .drawCommands(shapes.s01[494]);
        var instance306 = new Graphics()
            .drawCommands(shapes.s01[484]);
        var instance305 = new Graphics()
            .drawCommands(shapes.s01[473]);
        var instance304 = new Graphics()
            .drawCommands(shapes.s01[463]);
        var instance311 = new Graphics()
            .drawCommands(shapes.s01[495]);
        var instance310 = new Graphics()
            .drawCommands(shapes.s01[485]);
        var instance309 = new Graphics()
            .drawCommands(shapes.s01[474]);
        var instance308 = new Graphics()
            .drawCommands(shapes.s01[464]);
        var instance315 = new Graphics()
            .drawCommands(shapes.s01[496]);
        var instance314 = new Graphics()
            .drawCommands(shapes.s01[486]);
        var instance313 = new Graphics()
            .drawCommands(shapes.s01[475]);
        var instance312 = new Graphics()
            .drawCommands(shapes.s01[465]);
        var instance319 = new Graphics()
            .drawCommands(shapes.s01[497]);
        var instance318 = new Graphics()
            .drawCommands(shapes.s01[487]);
        var instance317 = new Graphics()
            .drawCommands(shapes.s01[476]);
        var instance316 = new Graphics()
            .drawCommands(shapes.s01[466]);
        var instance323 = new Graphics()
            .drawCommands(shapes.s01[498]);
        var instance322 = new Graphics()
            .drawCommands(shapes.s01[488]);
        var instance321 = new Graphics()
            .drawCommands(shapes.s01[477]);
        var instance320 = new Graphics()
            .drawCommands(shapes.s01[467]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[458]);
        this.addTimedChild(instance7)
            .addTimedChild(instance6)
            .addTimedChild(instance5, 0, 1)
            .addTimedChild(instance4, 0, 1)
            .addTimedChild(instance3, 0, 1)
            .addTimedChild(instance2, 0, 1)
            .addTimedChild(instance11, 1, 1)
            .addTimedChild(instance10, 1, 1)
            .addTimedChild(instance9, 1, 1)
            .addTimedChild(instance8, 1, 1)
            .addTimedChild(instance15, 2, 1)
            .addTimedChild(instance14, 2, 1)
            .addTimedChild(instance13, 2, 1)
            .addTimedChild(instance12, 2, 1)
            .addTimedChild(instance19, 3, 1)
            .addTimedChild(instance18, 3, 1)
            .addTimedChild(instance17, 3, 1)
            .addTimedChild(instance16, 3, 1)
            .addTimedChild(instance23, 4, 1)
            .addTimedChild(instance22, 4, 1)
            .addTimedChild(instance21, 4, 1)
            .addTimedChild(instance20, 4, 1)
            .addTimedChild(instance27, 5, 1)
            .addTimedChild(instance26, 5, 1)
            .addTimedChild(instance25, 5, 1)
            .addTimedChild(instance24, 5, 1)
            .addTimedChild(instance31, 6, 1)
            .addTimedChild(instance30, 6, 1)
            .addTimedChild(instance29, 6, 1)
            .addTimedChild(instance28, 6, 1)
            .addTimedChild(instance35, 7, 1)
            .addTimedChild(instance34, 7, 1)
            .addTimedChild(instance33, 7, 1)
            .addTimedChild(instance32, 7, 1)
            .addTimedChild(instance39, 8, 1)
            .addTimedChild(instance38, 8, 1)
            .addTimedChild(instance37, 8, 1)
            .addTimedChild(instance36, 8, 1)
            .addTimedChild(instance43, 9, 1)
            .addTimedChild(instance42, 9, 1)
            .addTimedChild(instance41, 9, 1)
            .addTimedChild(instance40, 9, 1)
            .addTimedChild(instance48, 10, 10)
            .addTimedChild(instance47, 10, 1)
            .addTimedChild(instance46, 10, 1)
            .addTimedChild(instance45, 10, 1)
            .addTimedChild(instance44, 10, 1)
            .addTimedChild(instance52, 11, 1)
            .addTimedChild(instance51, 11, 1)
            .addTimedChild(instance50, 11, 1)
            .addTimedChild(instance49, 11, 1)
            .addTimedChild(instance56, 12, 1)
            .addTimedChild(instance55, 12, 1)
            .addTimedChild(instance54, 12, 1)
            .addTimedChild(instance53, 12, 1)
            .addTimedChild(instance60, 13, 1)
            .addTimedChild(instance59, 13, 1)
            .addTimedChild(instance58, 13, 1)
            .addTimedChild(instance57, 13, 1)
            .addTimedChild(instance64, 14, 1)
            .addTimedChild(instance63, 14, 1)
            .addTimedChild(instance62, 14, 1)
            .addTimedChild(instance61, 14, 1)
            .addTimedChild(instance68, 15, 1)
            .addTimedChild(instance67, 15, 1)
            .addTimedChild(instance66, 15, 1)
            .addTimedChild(instance65, 15, 1)
            .addTimedChild(instance72, 16, 1)
            .addTimedChild(instance71, 16, 1)
            .addTimedChild(instance70, 16, 1)
            .addTimedChild(instance69, 16, 1)
            .addTimedChild(instance76, 17, 1)
            .addTimedChild(instance75, 17, 1)
            .addTimedChild(instance74, 17, 1)
            .addTimedChild(instance73, 17, 1)
            .addTimedChild(instance80, 18, 1)
            .addTimedChild(instance79, 18, 1)
            .addTimedChild(instance78, 18, 1)
            .addTimedChild(instance77, 18, 1)
            .addTimedChild(instance84, 19, 1)
            .addTimedChild(instance83, 19, 1)
            .addTimedChild(instance82, 19, 1)
            .addTimedChild(instance81, 19, 1)
            .addTimedChild(instance88, 20, 1)
            .addTimedChild(instance87, 20, 1)
            .addTimedChild(instance86, 20, 1)
            .addTimedChild(instance85, 20, 1)
            .addTimedChild(instance92, 21, 1)
            .addTimedChild(instance91, 21, 1)
            .addTimedChild(instance90, 21, 1)
            .addTimedChild(instance89, 21, 1)
            .addTimedChild(instance96, 22, 1)
            .addTimedChild(instance95, 22, 1)
            .addTimedChild(instance94, 22, 1)
            .addTimedChild(instance93, 22, 1)
            .addTimedChild(instance100, 23, 1)
            .addTimedChild(instance99, 23, 1)
            .addTimedChild(instance98, 23, 1)
            .addTimedChild(instance97, 23, 1)
            .addTimedChild(instance104, 24, 1)
            .addTimedChild(instance103, 24, 1)
            .addTimedChild(instance102, 24, 1)
            .addTimedChild(instance101, 24, 1)
            .addTimedChild(instance108, 25, 1)
            .addTimedChild(instance107, 25, 1)
            .addTimedChild(instance106, 25, 1)
            .addTimedChild(instance105, 25, 1)
            .addTimedChild(instance112, 26, 1)
            .addTimedChild(instance111, 26, 1)
            .addTimedChild(instance110, 26, 1)
            .addTimedChild(instance109, 26, 1)
            .addTimedChild(instance116, 27, 1)
            .addTimedChild(instance115, 27, 1)
            .addTimedChild(instance114, 27, 1)
            .addTimedChild(instance113, 27, 1)
            .addTimedChild(instance120, 28, 1)
            .addTimedChild(instance119, 28, 1)
            .addTimedChild(instance118, 28, 1)
            .addTimedChild(instance117, 28, 1)
            .addTimedChild(instance124, 29, 1)
            .addTimedChild(instance123, 29, 1)
            .addTimedChild(instance122, 29, 1)
            .addTimedChild(instance121, 29, 1)
            .addTimedChild(instance129, 30, 10)
            .addTimedChild(instance128, 30, 1)
            .addTimedChild(instance127, 30, 1)
            .addTimedChild(instance126, 30, 1)
            .addTimedChild(instance125, 30, 1)
            .addTimedChild(instance133, 31, 1)
            .addTimedChild(instance132, 31, 1)
            .addTimedChild(instance131, 31, 1)
            .addTimedChild(instance130, 31, 1)
            .addTimedChild(instance137, 32, 1)
            .addTimedChild(instance136, 32, 1)
            .addTimedChild(instance135, 32, 1)
            .addTimedChild(instance134, 32, 1)
            .addTimedChild(instance141, 33, 1)
            .addTimedChild(instance140, 33, 1)
            .addTimedChild(instance139, 33, 1)
            .addTimedChild(instance138, 33, 1)
            .addTimedChild(instance145, 34, 1)
            .addTimedChild(instance144, 34, 1)
            .addTimedChild(instance143, 34, 1)
            .addTimedChild(instance142, 34, 1)
            .addTimedChild(instance149, 35, 1)
            .addTimedChild(instance148, 35, 1)
            .addTimedChild(instance147, 35, 1)
            .addTimedChild(instance146, 35, 1)
            .addTimedChild(instance153, 36, 1)
            .addTimedChild(instance152, 36, 1)
            .addTimedChild(instance151, 36, 1)
            .addTimedChild(instance150, 36, 1)
            .addTimedChild(instance157, 37, 1)
            .addTimedChild(instance156, 37, 1)
            .addTimedChild(instance155, 37, 1)
            .addTimedChild(instance154, 37, 1)
            .addTimedChild(instance161, 38, 1)
            .addTimedChild(instance160, 38, 1)
            .addTimedChild(instance159, 38, 1)
            .addTimedChild(instance158, 38, 1)
            .addTimedChild(instance165, 39, 1)
            .addTimedChild(instance164, 39, 1)
            .addTimedChild(instance163, 39, 1)
            .addTimedChild(instance162, 39, 1)
            .addTimedChild(instance169, 40, 1)
            .addTimedChild(instance168, 40, 1)
            .addTimedChild(instance167, 40, 1)
            .addTimedChild(instance166, 40, 1)
            .addTimedChild(instance173, 41, 1)
            .addTimedChild(instance172, 41, 1)
            .addTimedChild(instance171, 41, 1)
            .addTimedChild(instance170, 41, 1)
            .addTimedChild(instance177, 42, 1)
            .addTimedChild(instance176, 42, 1)
            .addTimedChild(instance175, 42, 1)
            .addTimedChild(instance174, 42, 1)
            .addTimedChild(instance181, 43, 1)
            .addTimedChild(instance180, 43, 1)
            .addTimedChild(instance179, 43, 1)
            .addTimedChild(instance178, 43, 1)
            .addTimedChild(instance185, 44, 1)
            .addTimedChild(instance184, 44, 1)
            .addTimedChild(instance183, 44, 1)
            .addTimedChild(instance182, 44, 1)
            .addTimedChild(instance189, 45, 1)
            .addTimedChild(instance188, 45, 1)
            .addTimedChild(instance187, 45, 1)
            .addTimedChild(instance186, 45, 1)
            .addTimedChild(instance193, 46, 1)
            .addTimedChild(instance192, 46, 1)
            .addTimedChild(instance191, 46, 1)
            .addTimedChild(instance190, 46, 1)
            .addTimedChild(instance197, 47, 1)
            .addTimedChild(instance196, 47, 1)
            .addTimedChild(instance195, 47, 1)
            .addTimedChild(instance194, 47, 1)
            .addTimedChild(instance201, 48, 1)
            .addTimedChild(instance200, 48, 1)
            .addTimedChild(instance199, 48, 1)
            .addTimedChild(instance198, 48, 1)
            .addTimedChild(instance205, 49, 1)
            .addTimedChild(instance204, 49, 1)
            .addTimedChild(instance203, 49, 1)
            .addTimedChild(instance202, 49, 1)
            .addTimedChild(instance210, 50, 10)
            .addTimedChild(instance209, 50, 1)
            .addTimedChild(instance208, 50, 1)
            .addTimedChild(instance207, 50, 1)
            .addTimedChild(instance206, 50, 1)
            .addTimedChild(instance214, 51, 1)
            .addTimedChild(instance213, 51, 1)
            .addTimedChild(instance212, 51, 1)
            .addTimedChild(instance211, 51, 1)
            .addTimedChild(instance218, 52, 1)
            .addTimedChild(instance217, 52, 1)
            .addTimedChild(instance216, 52, 1)
            .addTimedChild(instance215, 52, 1)
            .addTimedChild(instance222, 53, 1)
            .addTimedChild(instance221, 53, 1)
            .addTimedChild(instance220, 53, 1)
            .addTimedChild(instance219, 53, 1)
            .addTimedChild(instance226, 54, 1)
            .addTimedChild(instance225, 54, 1)
            .addTimedChild(instance224, 54, 1)
            .addTimedChild(instance223, 54, 1)
            .addTimedChild(instance230, 55, 1)
            .addTimedChild(instance229, 55, 1)
            .addTimedChild(instance228, 55, 1)
            .addTimedChild(instance227, 55, 1)
            .addTimedChild(instance234, 56, 1)
            .addTimedChild(instance233, 56, 1)
            .addTimedChild(instance232, 56, 1)
            .addTimedChild(instance231, 56, 1)
            .addTimedChild(instance238, 57, 1)
            .addTimedChild(instance237, 57, 1)
            .addTimedChild(instance236, 57, 1)
            .addTimedChild(instance235, 57, 1)
            .addTimedChild(instance242, 58, 1)
            .addTimedChild(instance241, 58, 1)
            .addTimedChild(instance240, 58, 1)
            .addTimedChild(instance239, 58, 1)
            .addTimedChild(instance246, 59, 1)
            .addTimedChild(instance245, 59, 1)
            .addTimedChild(instance244, 59, 1)
            .addTimedChild(instance243, 59, 1)
            .addTimedChild(instance250, 60, 1)
            .addTimedChild(instance249, 60, 1)
            .addTimedChild(instance248, 60, 1)
            .addTimedChild(instance247, 60, 1)
            .addTimedChild(instance254, 61, 1)
            .addTimedChild(instance253, 61, 1)
            .addTimedChild(instance252, 61, 1)
            .addTimedChild(instance251, 61, 1)
            .addTimedChild(instance258, 62, 1)
            .addTimedChild(instance257, 62, 1)
            .addTimedChild(instance256, 62, 1)
            .addTimedChild(instance255, 62, 1)
            .addTimedChild(instance262, 63, 1)
            .addTimedChild(instance261, 63, 1)
            .addTimedChild(instance260, 63, 1)
            .addTimedChild(instance259, 63, 1)
            .addTimedChild(instance266, 64, 1)
            .addTimedChild(instance265, 64, 1)
            .addTimedChild(instance264, 64, 1)
            .addTimedChild(instance263, 64, 1)
            .addTimedChild(instance270, 65, 1)
            .addTimedChild(instance269, 65, 1)
            .addTimedChild(instance268, 65, 1)
            .addTimedChild(instance267, 65, 1)
            .addTimedChild(instance274, 66, 1)
            .addTimedChild(instance273, 66, 1)
            .addTimedChild(instance272, 66, 1)
            .addTimedChild(instance271, 66, 1)
            .addTimedChild(instance278, 67, 1)
            .addTimedChild(instance277, 67, 1)
            .addTimedChild(instance276, 67, 1)
            .addTimedChild(instance275, 67, 1)
            .addTimedChild(instance282, 68, 1)
            .addTimedChild(instance281, 68, 1)
            .addTimedChild(instance280, 68, 1)
            .addTimedChild(instance279, 68, 1)
            .addTimedChild(instance286, 69, 1)
            .addTimedChild(instance285, 69, 1)
            .addTimedChild(instance284, 69, 1)
            .addTimedChild(instance283, 69, 1)
            .addTimedChild(instance291, 70, 9)
            .addTimedChild(instance290, 70, 1)
            .addTimedChild(instance289, 70, 1)
            .addTimedChild(instance288, 70, 1)
            .addTimedChild(instance287, 70, 1)
            .addTimedChild(instance295, 71, 1)
            .addTimedChild(instance294, 71, 1)
            .addTimedChild(instance293, 71, 1)
            .addTimedChild(instance292, 71, 1)
            .addTimedChild(instance299, 72, 1)
            .addTimedChild(instance298, 72, 1)
            .addTimedChild(instance297, 72, 1)
            .addTimedChild(instance296, 72, 1)
            .addTimedChild(instance303, 73, 1)
            .addTimedChild(instance302, 73, 1)
            .addTimedChild(instance301, 73, 1)
            .addTimedChild(instance300, 73, 1)
            .addTimedChild(instance307, 74, 1)
            .addTimedChild(instance306, 74, 1)
            .addTimedChild(instance305, 74, 1)
            .addTimedChild(instance304, 74, 1)
            .addTimedChild(instance311, 75, 1)
            .addTimedChild(instance310, 75, 1)
            .addTimedChild(instance309, 75, 1)
            .addTimedChild(instance308, 75, 1)
            .addTimedChild(instance315, 76, 1)
            .addTimedChild(instance314, 76, 1)
            .addTimedChild(instance313, 76, 1)
            .addTimedChild(instance312, 76, 1)
            .addTimedChild(instance319, 77, 1)
            .addTimedChild(instance318, 77, 1)
            .addTimedChild(instance317, 77, 1)
            .addTimedChild(instance316, 77, 1)
            .addTimedChild(instance323, 78, 1)
            .addTimedChild(instance322, 78, 1)
            .addTimedChild(instance321, 78, 1)
            .addTimedChild(instance320, 78, 1)
            .addTimedChild(instance1);
    });

    var Graphic243 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 79, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[502]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[503]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[504]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[505]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[506]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[502]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[503]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[504]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[505]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[506]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[502]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[503]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[504]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[505]);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[506]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[502]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[503]);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[504]);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[505]);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[506]);
        var instance21 = new Graphics()
            .drawCommands(shapes.s01[502]);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[503]);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[504]);
        var instance24 = new Graphics()
            .drawCommands(shapes.s01[505]);
        var instance25 = new Graphics()
            .drawCommands(shapes.s01[506]);
        var instance26 = new Graphics()
            .drawCommands(shapes.s01[502]);
        var instance27 = new Graphics()
            .drawCommands(shapes.s01[503]);
        var instance28 = new Graphics()
            .drawCommands(shapes.s01[504]);
        var instance29 = new Graphics()
            .drawCommands(shapes.s01[505]);
        var instance30 = new Graphics()
            .drawCommands(shapes.s01[506]);
        var instance31 = new Graphics()
            .drawCommands(shapes.s01[502]);
        var instance32 = new Graphics()
            .drawCommands(shapes.s01[503]);
        var instance33 = new Graphics()
            .drawCommands(shapes.s01[504]);
        var instance34 = new Graphics()
            .drawCommands(shapes.s01[505]);
        var instance35 = new Graphics()
            .drawCommands(shapes.s01[506]);
        var instance36 = new Graphics()
            .drawCommands(shapes.s01[502]);
        var instance37 = new Graphics()
            .drawCommands(shapes.s01[503]);
        var instance38 = new Graphics()
            .drawCommands(shapes.s01[504]);
        var instance39 = new Graphics()
            .drawCommands(shapes.s01[505]);
        var instance40 = new Graphics()
            .drawCommands(shapes.s01[506]);
        var instance41 = new Graphics()
            .drawCommands(shapes.s01[502]);
        this.addTimedChild(instance1, 0, 2, {
                "0": {
                    x: 0,
                    y: 0,
                    r: 0
                },
                "1": {
                    x: 2.65,
                    y: -2.6,
                    r: 0.052
                }
            })
            .addTimedChild(instance2, 2, 1, {
                "2": {
                    x: 75.25,
                    y: -18.2,
                    r: 1.143
                }
            })
            .addTimedChild(instance3, 3, 2, {
                "3": {
                    x: 0,
                    y: 0,
                    r: 0
                },
                "4": {
                    x: 78.2,
                    y: -17,
                    r: 1.186
                }
            })
            .addTimedChild(instance4, 5, 1)
            .addTimedChild(instance5, 6, 1)
            .addTimedChild(instance6, 7, 5, {
                "7": {
                    x: 0,
                    y: 0,
                    r: 0
                },
                "11": {
                    x: 2.65,
                    y: -2.6,
                    r: 0.052
                }
            })
            .addTimedChild(instance7, 12, 1, {
                "12": {
                    x: 75.25,
                    y: -18.2,
                    r: 1.143
                }
            })
            .addTimedChild(instance8, 13, 2, {
                "13": {
                    x: 0,
                    y: 0,
                    r: 0
                },
                "14": {
                    x: 78.2,
                    y: -17,
                    r: 1.186
                }
            })
            .addTimedChild(instance9, 15, 1)
            .addTimedChild(instance10, 16, 1)
            .addTimedChild(instance11, 17, 5, {
                "17": {
                    x: 0,
                    y: 0,
                    r: 0
                },
                "21": {
                    x: 2.65,
                    y: -2.6,
                    r: 0.052
                }
            })
            .addTimedChild(instance12, 22, 1, {
                "22": {
                    x: 75.25,
                    y: -18.2,
                    r: 1.143
                }
            })
            .addTimedChild(instance13, 23, 2, {
                "23": {
                    x: 0,
                    y: 0,
                    r: 0
                },
                "24": {
                    x: 78.2,
                    y: -17,
                    r: 1.186
                }
            })
            .addTimedChild(instance14, 25, 1)
            .addTimedChild(instance15, 26, 1)
            .addTimedChild(instance16, 27, 5, {
                "27": {
                    x: 0,
                    y: 0,
                    r: 0
                },
                "31": {
                    x: 2.65,
                    y: -2.6,
                    r: 0.052
                }
            })
            .addTimedChild(instance17, 32, 1, {
                "32": {
                    x: 75.25,
                    y: -18.2,
                    r: 1.143
                }
            })
            .addTimedChild(instance18, 33, 2, {
                "33": {
                    x: 0,
                    y: 0,
                    r: 0
                },
                "34": {
                    x: 78.2,
                    y: -17,
                    r: 1.186
                }
            })
            .addTimedChild(instance19, 35, 1)
            .addTimedChild(instance20, 36, 1)
            .addTimedChild(instance21, 37, 5, {
                "37": {
                    x: 0,
                    y: 0,
                    r: 0
                },
                "41": {
                    x: 2.65,
                    y: -2.6,
                    r: 0.052
                }
            })
            .addTimedChild(instance22, 42, 1, {
                "42": {
                    x: 75.25,
                    y: -18.2,
                    r: 1.143
                }
            })
            .addTimedChild(instance23, 43, 2, {
                "43": {
                    x: 0,
                    y: 0,
                    r: 0
                },
                "44": {
                    x: 78.2,
                    y: -17,
                    r: 1.186
                }
            })
            .addTimedChild(instance24, 45, 1)
            .addTimedChild(instance25, 46, 1)
            .addTimedChild(instance26, 47, 5, {
                "47": {
                    x: 0,
                    y: 0,
                    r: 0
                },
                "51": {
                    x: 2.65,
                    y: -2.6,
                    r: 0.052
                }
            })
            .addTimedChild(instance27, 52, 1, {
                "52": {
                    x: 75.25,
                    y: -18.2,
                    r: 1.143
                }
            })
            .addTimedChild(instance28, 53, 2, {
                "53": {
                    x: 0,
                    y: 0,
                    r: 0
                },
                "54": {
                    x: 78.2,
                    y: -17,
                    r: 1.186
                }
            })
            .addTimedChild(instance29, 55, 1)
            .addTimedChild(instance30, 56, 1)
            .addTimedChild(instance31, 57, 5, {
                "57": {
                    x: 0,
                    y: 0,
                    r: 0
                },
                "61": {
                    x: 2.65,
                    y: -2.6,
                    r: 0.052
                }
            })
            .addTimedChild(instance32, 62, 1, {
                "62": {
                    x: 75.25,
                    y: -18.2,
                    r: 1.143
                }
            })
            .addTimedChild(instance33, 63, 2, {
                "63": {
                    x: 0,
                    y: 0,
                    r: 0
                },
                "64": {
                    x: 78.2,
                    y: -17,
                    r: 1.186
                }
            })
            .addTimedChild(instance34, 65, 1)
            .addTimedChild(instance35, 66, 1)
            .addTimedChild(instance36, 67, 5, {
                "67": {
                    x: 0,
                    y: 0,
                    r: 0
                },
                "71": {
                    x: 2.65,
                    y: -2.6,
                    r: 0.052
                }
            })
            .addTimedChild(instance37, 72, 1, {
                "72": {
                    x: 75.25,
                    y: -18.2,
                    r: 1.143
                }
            })
            .addTimedChild(instance38, 73, 2, {
                "73": {
                    x: 0,
                    y: 0,
                    r: 0
                },
                "74": {
                    x: 78.2,
                    y: -17,
                    r: 1.186
                }
            })
            .addTimedChild(instance39, 75, 1)
            .addTimedChild(instance40, 76, 1)
            .addTimedChild(instance41, 77, 2);
    });

    var Graphic244 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 79, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[518]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[507]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[519]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[508]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[520]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[509]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[521]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[510]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[522]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[511]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[523]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[512]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[524]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[513]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[525]);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[514]);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[526]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[515]);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[527]);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[516]);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[528]);
        var instance21 = new Graphics()
            .drawCommands(shapes.s01[517]);
        var instance24 = new Graphics()
            .drawCommands(shapes.s01[518]);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[507]);
        var instance26 = new Graphics()
            .drawCommands(shapes.s01[519]);
        var instance25 = new Graphics()
            .drawCommands(shapes.s01[508]);
        var instance28 = new Graphics()
            .drawCommands(shapes.s01[520]);
        var instance27 = new Graphics()
            .drawCommands(shapes.s01[509]);
        var instance30 = new Graphics()
            .drawCommands(shapes.s01[521]);
        var instance29 = new Graphics()
            .drawCommands(shapes.s01[510]);
        var instance32 = new Graphics()
            .drawCommands(shapes.s01[522]);
        var instance31 = new Graphics()
            .drawCommands(shapes.s01[511]);
        var instance34 = new Graphics()
            .drawCommands(shapes.s01[523]);
        var instance33 = new Graphics()
            .drawCommands(shapes.s01[512]);
        var instance36 = new Graphics()
            .drawCommands(shapes.s01[524]);
        var instance35 = new Graphics()
            .drawCommands(shapes.s01[513]);
        var instance38 = new Graphics()
            .drawCommands(shapes.s01[525]);
        var instance37 = new Graphics()
            .drawCommands(shapes.s01[514]);
        var instance40 = new Graphics()
            .drawCommands(shapes.s01[526]);
        var instance39 = new Graphics()
            .drawCommands(shapes.s01[515]);
        var instance42 = new Graphics()
            .drawCommands(shapes.s01[527]);
        var instance41 = new Graphics()
            .drawCommands(shapes.s01[516]);
        var instance44 = new Graphics()
            .drawCommands(shapes.s01[528]);
        var instance43 = new Graphics()
            .drawCommands(shapes.s01[517]);
        var instance46 = new Graphics()
            .drawCommands(shapes.s01[518]);
        var instance45 = new Graphics()
            .drawCommands(shapes.s01[507]);
        var instance48 = new Graphics()
            .drawCommands(shapes.s01[519]);
        var instance47 = new Graphics()
            .drawCommands(shapes.s01[508]);
        var instance50 = new Graphics()
            .drawCommands(shapes.s01[520]);
        var instance49 = new Graphics()
            .drawCommands(shapes.s01[509]);
        var instance52 = new Graphics()
            .drawCommands(shapes.s01[521]);
        var instance51 = new Graphics()
            .drawCommands(shapes.s01[510]);
        var instance54 = new Graphics()
            .drawCommands(shapes.s01[522]);
        var instance53 = new Graphics()
            .drawCommands(shapes.s01[511]);
        var instance56 = new Graphics()
            .drawCommands(shapes.s01[523]);
        var instance55 = new Graphics()
            .drawCommands(shapes.s01[512]);
        var instance58 = new Graphics()
            .drawCommands(shapes.s01[524]);
        var instance57 = new Graphics()
            .drawCommands(shapes.s01[513]);
        var instance60 = new Graphics()
            .drawCommands(shapes.s01[525]);
        var instance59 = new Graphics()
            .drawCommands(shapes.s01[514]);
        var instance62 = new Graphics()
            .drawCommands(shapes.s01[526]);
        var instance61 = new Graphics()
            .drawCommands(shapes.s01[515]);
        var instance64 = new Graphics()
            .drawCommands(shapes.s01[527]);
        var instance63 = new Graphics()
            .drawCommands(shapes.s01[516]);
        var instance66 = new Graphics()
            .drawCommands(shapes.s01[528]);
        var instance65 = new Graphics()
            .drawCommands(shapes.s01[517]);
        var instance68 = new Graphics()
            .drawCommands(shapes.s01[518]);
        var instance67 = new Graphics()
            .drawCommands(shapes.s01[507]);
        var instance70 = new Graphics()
            .drawCommands(shapes.s01[519]);
        var instance69 = new Graphics()
            .drawCommands(shapes.s01[508]);
        var instance72 = new Graphics()
            .drawCommands(shapes.s01[520]);
        var instance71 = new Graphics()
            .drawCommands(shapes.s01[509]);
        var instance74 = new Graphics()
            .drawCommands(shapes.s01[521]);
        var instance73 = new Graphics()
            .drawCommands(shapes.s01[510]);
        var instance76 = new Graphics()
            .drawCommands(shapes.s01[522]);
        var instance75 = new Graphics()
            .drawCommands(shapes.s01[511]);
        var instance78 = new Graphics()
            .drawCommands(shapes.s01[523]);
        var instance77 = new Graphics()
            .drawCommands(shapes.s01[512]);
        var instance80 = new Graphics()
            .drawCommands(shapes.s01[524]);
        var instance79 = new Graphics()
            .drawCommands(shapes.s01[513]);
        var instance82 = new Graphics()
            .drawCommands(shapes.s01[525]);
        var instance81 = new Graphics()
            .drawCommands(shapes.s01[514]);
        var instance84 = new Graphics()
            .drawCommands(shapes.s01[526]);
        var instance83 = new Graphics()
            .drawCommands(shapes.s01[515]);
        var instance86 = new Graphics()
            .drawCommands(shapes.s01[527]);
        var instance85 = new Graphics()
            .drawCommands(shapes.s01[516]);
        var instance88 = new Graphics()
            .drawCommands(shapes.s01[528]);
        var instance87 = new Graphics()
            .drawCommands(shapes.s01[517]);
        var instance90 = new Graphics()
            .drawCommands(shapes.s01[518]);
        var instance89 = new Graphics()
            .drawCommands(shapes.s01[507]);
        var instance92 = new Graphics()
            .drawCommands(shapes.s01[519]);
        var instance91 = new Graphics()
            .drawCommands(shapes.s01[508]);
        var instance94 = new Graphics()
            .drawCommands(shapes.s01[520]);
        var instance93 = new Graphics()
            .drawCommands(shapes.s01[509]);
        var instance96 = new Graphics()
            .drawCommands(shapes.s01[521]);
        var instance95 = new Graphics()
            .drawCommands(shapes.s01[510]);
        var instance98 = new Graphics()
            .drawCommands(shapes.s01[522]);
        var instance97 = new Graphics()
            .drawCommands(shapes.s01[511]);
        var instance100 = new Graphics()
            .drawCommands(shapes.s01[523]);
        var instance99 = new Graphics()
            .drawCommands(shapes.s01[512]);
        var instance102 = new Graphics()
            .drawCommands(shapes.s01[524]);
        var instance101 = new Graphics()
            .drawCommands(shapes.s01[513]);
        var instance104 = new Graphics()
            .drawCommands(shapes.s01[525]);
        var instance103 = new Graphics()
            .drawCommands(shapes.s01[514]);
        var instance106 = new Graphics()
            .drawCommands(shapes.s01[526]);
        var instance105 = new Graphics()
            .drawCommands(shapes.s01[515]);
        var instance108 = new Graphics()
            .drawCommands(shapes.s01[527]);
        var instance107 = new Graphics()
            .drawCommands(shapes.s01[516]);
        var instance110 = new Graphics()
            .drawCommands(shapes.s01[528]);
        var instance109 = new Graphics()
            .drawCommands(shapes.s01[517]);
        var instance112 = new Graphics()
            .drawCommands(shapes.s01[518]);
        var instance111 = new Graphics()
            .drawCommands(shapes.s01[507]);
        var instance114 = new Graphics()
            .drawCommands(shapes.s01[519]);
        var instance113 = new Graphics()
            .drawCommands(shapes.s01[508]);
        var instance116 = new Graphics()
            .drawCommands(shapes.s01[520]);
        var instance115 = new Graphics()
            .drawCommands(shapes.s01[509]);
        var instance118 = new Graphics()
            .drawCommands(shapes.s01[521]);
        var instance117 = new Graphics()
            .drawCommands(shapes.s01[510]);
        var instance120 = new Graphics()
            .drawCommands(shapes.s01[522]);
        var instance119 = new Graphics()
            .drawCommands(shapes.s01[511]);
        var instance122 = new Graphics()
            .drawCommands(shapes.s01[523]);
        var instance121 = new Graphics()
            .drawCommands(shapes.s01[512]);
        var instance124 = new Graphics()
            .drawCommands(shapes.s01[524]);
        var instance123 = new Graphics()
            .drawCommands(shapes.s01[513]);
        var instance126 = new Graphics()
            .drawCommands(shapes.s01[525]);
        var instance125 = new Graphics()
            .drawCommands(shapes.s01[514]);
        var instance128 = new Graphics()
            .drawCommands(shapes.s01[526]);
        var instance127 = new Graphics()
            .drawCommands(shapes.s01[515]);
        var instance130 = new Graphics()
            .drawCommands(shapes.s01[527]);
        var instance129 = new Graphics()
            .drawCommands(shapes.s01[516]);
        var instance132 = new Graphics()
            .drawCommands(shapes.s01[528]);
        var instance131 = new Graphics()
            .drawCommands(shapes.s01[517]);
        var instance134 = new Graphics()
            .drawCommands(shapes.s01[518]);
        var instance133 = new Graphics()
            .drawCommands(shapes.s01[507]);
        var instance136 = new Graphics()
            .drawCommands(shapes.s01[519]);
        var instance135 = new Graphics()
            .drawCommands(shapes.s01[508]);
        var instance138 = new Graphics()
            .drawCommands(shapes.s01[520]);
        var instance137 = new Graphics()
            .drawCommands(shapes.s01[509]);
        var instance140 = new Graphics()
            .drawCommands(shapes.s01[521]);
        var instance139 = new Graphics()
            .drawCommands(shapes.s01[510]);
        var instance142 = new Graphics()
            .drawCommands(shapes.s01[522]);
        var instance141 = new Graphics()
            .drawCommands(shapes.s01[511]);
        var instance144 = new Graphics()
            .drawCommands(shapes.s01[523]);
        var instance143 = new Graphics()
            .drawCommands(shapes.s01[512]);
        var instance146 = new Graphics()
            .drawCommands(shapes.s01[524]);
        var instance145 = new Graphics()
            .drawCommands(shapes.s01[513]);
        var instance148 = new Graphics()
            .drawCommands(shapes.s01[525]);
        var instance147 = new Graphics()
            .drawCommands(shapes.s01[514]);
        var instance150 = new Graphics()
            .drawCommands(shapes.s01[526]);
        var instance149 = new Graphics()
            .drawCommands(shapes.s01[515]);
        var instance152 = new Graphics()
            .drawCommands(shapes.s01[527]);
        var instance151 = new Graphics()
            .drawCommands(shapes.s01[516]);
        var instance154 = new Graphics()
            .drawCommands(shapes.s01[528]);
        var instance153 = new Graphics()
            .drawCommands(shapes.s01[517]);
        var instance156 = new Graphics()
            .drawCommands(shapes.s01[518]);
        var instance155 = new Graphics()
            .drawCommands(shapes.s01[507]);
        var instance158 = new Graphics()
            .drawCommands(shapes.s01[519]);
        var instance157 = new Graphics()
            .drawCommands(shapes.s01[508]);
        this.addTimedChild(instance2, 0, 1)
            .addTimedChild(instance1, 0, 1)
            .addTimedChild(instance4, 1, 1)
            .addTimedChild(instance3, 1, 1)
            .addTimedChild(instance6, 2, 1)
            .addTimedChild(instance5, 2, 1)
            .addTimedChild(instance8, 3, 1)
            .addTimedChild(instance7, 3, 1)
            .addTimedChild(instance10, 4, 1)
            .addTimedChild(instance9, 4, 1)
            .addTimedChild(instance12, 5, 1)
            .addTimedChild(instance11, 5, 1)
            .addTimedChild(instance14, 6, 1)
            .addTimedChild(instance13, 6, 1)
            .addTimedChild(instance16, 7, 1)
            .addTimedChild(instance15, 7, 1)
            .addTimedChild(instance18, 8, 1)
            .addTimedChild(instance17, 8, 1)
            .addTimedChild(instance20, 9, 1)
            .addTimedChild(instance19, 9, 1)
            .addTimedChild(instance22, 10, 1)
            .addTimedChild(instance21, 10, 1)
            .addTimedChild(instance24, 11, 1)
            .addTimedChild(instance23, 11, 1)
            .addTimedChild(instance26, 12, 1)
            .addTimedChild(instance25, 12, 1)
            .addTimedChild(instance28, 13, 1)
            .addTimedChild(instance27, 13, 1)
            .addTimedChild(instance30, 14, 1)
            .addTimedChild(instance29, 14, 1)
            .addTimedChild(instance32, 15, 1)
            .addTimedChild(instance31, 15, 1)
            .addTimedChild(instance34, 16, 1)
            .addTimedChild(instance33, 16, 1)
            .addTimedChild(instance36, 17, 1)
            .addTimedChild(instance35, 17, 1)
            .addTimedChild(instance38, 18, 1)
            .addTimedChild(instance37, 18, 1)
            .addTimedChild(instance40, 19, 1)
            .addTimedChild(instance39, 19, 1)
            .addTimedChild(instance42, 20, 1)
            .addTimedChild(instance41, 20, 1)
            .addTimedChild(instance44, 21, 1)
            .addTimedChild(instance43, 21, 1)
            .addTimedChild(instance46, 22, 1)
            .addTimedChild(instance45, 22, 1)
            .addTimedChild(instance48, 23, 1)
            .addTimedChild(instance47, 23, 1)
            .addTimedChild(instance50, 24, 1)
            .addTimedChild(instance49, 24, 1)
            .addTimedChild(instance52, 25, 1)
            .addTimedChild(instance51, 25, 1)
            .addTimedChild(instance54, 26, 1)
            .addTimedChild(instance53, 26, 1)
            .addTimedChild(instance56, 27, 1)
            .addTimedChild(instance55, 27, 1)
            .addTimedChild(instance58, 28, 1)
            .addTimedChild(instance57, 28, 1)
            .addTimedChild(instance60, 29, 1)
            .addTimedChild(instance59, 29, 1)
            .addTimedChild(instance62, 30, 1)
            .addTimedChild(instance61, 30, 1)
            .addTimedChild(instance64, 31, 1)
            .addTimedChild(instance63, 31, 1)
            .addTimedChild(instance66, 32, 1)
            .addTimedChild(instance65, 32, 1)
            .addTimedChild(instance68, 33, 1)
            .addTimedChild(instance67, 33, 1)
            .addTimedChild(instance70, 34, 1)
            .addTimedChild(instance69, 34, 1)
            .addTimedChild(instance72, 35, 1)
            .addTimedChild(instance71, 35, 1)
            .addTimedChild(instance74, 36, 1)
            .addTimedChild(instance73, 36, 1)
            .addTimedChild(instance76, 37, 1)
            .addTimedChild(instance75, 37, 1)
            .addTimedChild(instance78, 38, 1)
            .addTimedChild(instance77, 38, 1)
            .addTimedChild(instance80, 39, 1)
            .addTimedChild(instance79, 39, 1)
            .addTimedChild(instance82, 40, 1)
            .addTimedChild(instance81, 40, 1)
            .addTimedChild(instance84, 41, 1)
            .addTimedChild(instance83, 41, 1)
            .addTimedChild(instance86, 42, 1)
            .addTimedChild(instance85, 42, 1)
            .addTimedChild(instance88, 43, 1)
            .addTimedChild(instance87, 43, 1)
            .addTimedChild(instance90, 44, 1)
            .addTimedChild(instance89, 44, 1)
            .addTimedChild(instance92, 45, 1)
            .addTimedChild(instance91, 45, 1)
            .addTimedChild(instance94, 46, 1)
            .addTimedChild(instance93, 46, 1)
            .addTimedChild(instance96, 47, 1)
            .addTimedChild(instance95, 47, 1)
            .addTimedChild(instance98, 48, 1)
            .addTimedChild(instance97, 48, 1)
            .addTimedChild(instance100, 49, 1)
            .addTimedChild(instance99, 49, 1)
            .addTimedChild(instance102, 50, 1)
            .addTimedChild(instance101, 50, 1)
            .addTimedChild(instance104, 51, 1)
            .addTimedChild(instance103, 51, 1)
            .addTimedChild(instance106, 52, 1)
            .addTimedChild(instance105, 52, 1)
            .addTimedChild(instance108, 53, 1)
            .addTimedChild(instance107, 53, 1)
            .addTimedChild(instance110, 54, 1)
            .addTimedChild(instance109, 54, 1)
            .addTimedChild(instance112, 55, 1)
            .addTimedChild(instance111, 55, 1)
            .addTimedChild(instance114, 56, 1)
            .addTimedChild(instance113, 56, 1)
            .addTimedChild(instance116, 57, 1)
            .addTimedChild(instance115, 57, 1)
            .addTimedChild(instance118, 58, 1)
            .addTimedChild(instance117, 58, 1)
            .addTimedChild(instance120, 59, 1)
            .addTimedChild(instance119, 59, 1)
            .addTimedChild(instance122, 60, 1)
            .addTimedChild(instance121, 60, 1)
            .addTimedChild(instance124, 61, 1)
            .addTimedChild(instance123, 61, 1)
            .addTimedChild(instance126, 62, 1)
            .addTimedChild(instance125, 62, 1)
            .addTimedChild(instance128, 63, 1)
            .addTimedChild(instance127, 63, 1)
            .addTimedChild(instance130, 64, 1)
            .addTimedChild(instance129, 64, 1)
            .addTimedChild(instance132, 65, 1)
            .addTimedChild(instance131, 65, 1)
            .addTimedChild(instance134, 66, 1)
            .addTimedChild(instance133, 66, 1)
            .addTimedChild(instance136, 67, 1)
            .addTimedChild(instance135, 67, 1)
            .addTimedChild(instance138, 68, 1)
            .addTimedChild(instance137, 68, 1)
            .addTimedChild(instance140, 69, 1)
            .addTimedChild(instance139, 69, 1)
            .addTimedChild(instance142, 70, 1)
            .addTimedChild(instance141, 70, 1)
            .addTimedChild(instance144, 71, 1)
            .addTimedChild(instance143, 71, 1)
            .addTimedChild(instance146, 72, 1)
            .addTimedChild(instance145, 72, 1)
            .addTimedChild(instance148, 73, 1)
            .addTimedChild(instance147, 73, 1)
            .addTimedChild(instance150, 74, 1)
            .addTimedChild(instance149, 74, 1)
            .addTimedChild(instance152, 75, 1)
            .addTimedChild(instance151, 75, 1)
            .addTimedChild(instance154, 76, 1)
            .addTimedChild(instance153, 76, 1)
            .addTimedChild(instance156, 77, 1)
            .addTimedChild(instance155, 77, 1)
            .addTimedChild(instance158, 78, 1)
            .addTimedChild(instance157, 78, 1);
    });

    var Graphic245 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 79, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[518]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[507]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[519]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[508]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[520]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[509]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[521]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[510]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[522]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[511]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[523]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[512]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[524]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[513]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[525]);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[514]);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[526]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[515]);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[527]);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[516]);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[528]);
        var instance21 = new Graphics()
            .drawCommands(shapes.s01[517]);
        var instance24 = new Graphics()
            .drawCommands(shapes.s01[518]);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[507]);
        var instance26 = new Graphics()
            .drawCommands(shapes.s01[519]);
        var instance25 = new Graphics()
            .drawCommands(shapes.s01[508]);
        var instance28 = new Graphics()
            .drawCommands(shapes.s01[520]);
        var instance27 = new Graphics()
            .drawCommands(shapes.s01[509]);
        var instance30 = new Graphics()
            .drawCommands(shapes.s01[521]);
        var instance29 = new Graphics()
            .drawCommands(shapes.s01[510]);
        var instance32 = new Graphics()
            .drawCommands(shapes.s01[522]);
        var instance31 = new Graphics()
            .drawCommands(shapes.s01[511]);
        var instance34 = new Graphics()
            .drawCommands(shapes.s01[523]);
        var instance33 = new Graphics()
            .drawCommands(shapes.s01[512]);
        var instance36 = new Graphics()
            .drawCommands(shapes.s01[524]);
        var instance35 = new Graphics()
            .drawCommands(shapes.s01[513]);
        var instance38 = new Graphics()
            .drawCommands(shapes.s01[525]);
        var instance37 = new Graphics()
            .drawCommands(shapes.s01[514]);
        var instance40 = new Graphics()
            .drawCommands(shapes.s01[526]);
        var instance39 = new Graphics()
            .drawCommands(shapes.s01[515]);
        var instance42 = new Graphics()
            .drawCommands(shapes.s01[527]);
        var instance41 = new Graphics()
            .drawCommands(shapes.s01[516]);
        var instance44 = new Graphics()
            .drawCommands(shapes.s01[528]);
        var instance43 = new Graphics()
            .drawCommands(shapes.s01[517]);
        var instance46 = new Graphics()
            .drawCommands(shapes.s01[518]);
        var instance45 = new Graphics()
            .drawCommands(shapes.s01[507]);
        var instance48 = new Graphics()
            .drawCommands(shapes.s01[519]);
        var instance47 = new Graphics()
            .drawCommands(shapes.s01[508]);
        var instance50 = new Graphics()
            .drawCommands(shapes.s01[520]);
        var instance49 = new Graphics()
            .drawCommands(shapes.s01[509]);
        var instance52 = new Graphics()
            .drawCommands(shapes.s01[521]);
        var instance51 = new Graphics()
            .drawCommands(shapes.s01[510]);
        var instance54 = new Graphics()
            .drawCommands(shapes.s01[522]);
        var instance53 = new Graphics()
            .drawCommands(shapes.s01[511]);
        var instance56 = new Graphics()
            .drawCommands(shapes.s01[523]);
        var instance55 = new Graphics()
            .drawCommands(shapes.s01[512]);
        var instance58 = new Graphics()
            .drawCommands(shapes.s01[524]);
        var instance57 = new Graphics()
            .drawCommands(shapes.s01[513]);
        var instance60 = new Graphics()
            .drawCommands(shapes.s01[525]);
        var instance59 = new Graphics()
            .drawCommands(shapes.s01[514]);
        var instance62 = new Graphics()
            .drawCommands(shapes.s01[526]);
        var instance61 = new Graphics()
            .drawCommands(shapes.s01[515]);
        var instance64 = new Graphics()
            .drawCommands(shapes.s01[527]);
        var instance63 = new Graphics()
            .drawCommands(shapes.s01[516]);
        var instance66 = new Graphics()
            .drawCommands(shapes.s01[528]);
        var instance65 = new Graphics()
            .drawCommands(shapes.s01[517]);
        var instance68 = new Graphics()
            .drawCommands(shapes.s01[518]);
        var instance67 = new Graphics()
            .drawCommands(shapes.s01[507]);
        var instance70 = new Graphics()
            .drawCommands(shapes.s01[519]);
        var instance69 = new Graphics()
            .drawCommands(shapes.s01[508]);
        var instance72 = new Graphics()
            .drawCommands(shapes.s01[520]);
        var instance71 = new Graphics()
            .drawCommands(shapes.s01[509]);
        var instance74 = new Graphics()
            .drawCommands(shapes.s01[521]);
        var instance73 = new Graphics()
            .drawCommands(shapes.s01[510]);
        var instance76 = new Graphics()
            .drawCommands(shapes.s01[522]);
        var instance75 = new Graphics()
            .drawCommands(shapes.s01[511]);
        var instance78 = new Graphics()
            .drawCommands(shapes.s01[523]);
        var instance77 = new Graphics()
            .drawCommands(shapes.s01[512]);
        var instance80 = new Graphics()
            .drawCommands(shapes.s01[524]);
        var instance79 = new Graphics()
            .drawCommands(shapes.s01[513]);
        var instance82 = new Graphics()
            .drawCommands(shapes.s01[525]);
        var instance81 = new Graphics()
            .drawCommands(shapes.s01[514]);
        var instance84 = new Graphics()
            .drawCommands(shapes.s01[526]);
        var instance83 = new Graphics()
            .drawCommands(shapes.s01[515]);
        var instance86 = new Graphics()
            .drawCommands(shapes.s01[527]);
        var instance85 = new Graphics()
            .drawCommands(shapes.s01[516]);
        var instance88 = new Graphics()
            .drawCommands(shapes.s01[528]);
        var instance87 = new Graphics()
            .drawCommands(shapes.s01[517]);
        var instance90 = new Graphics()
            .drawCommands(shapes.s01[518]);
        var instance89 = new Graphics()
            .drawCommands(shapes.s01[507]);
        var instance92 = new Graphics()
            .drawCommands(shapes.s01[519]);
        var instance91 = new Graphics()
            .drawCommands(shapes.s01[508]);
        var instance94 = new Graphics()
            .drawCommands(shapes.s01[520]);
        var instance93 = new Graphics()
            .drawCommands(shapes.s01[509]);
        var instance96 = new Graphics()
            .drawCommands(shapes.s01[521]);
        var instance95 = new Graphics()
            .drawCommands(shapes.s01[510]);
        var instance98 = new Graphics()
            .drawCommands(shapes.s01[522]);
        var instance97 = new Graphics()
            .drawCommands(shapes.s01[511]);
        var instance100 = new Graphics()
            .drawCommands(shapes.s01[523]);
        var instance99 = new Graphics()
            .drawCommands(shapes.s01[512]);
        var instance102 = new Graphics()
            .drawCommands(shapes.s01[524]);
        var instance101 = new Graphics()
            .drawCommands(shapes.s01[513]);
        var instance104 = new Graphics()
            .drawCommands(shapes.s01[525]);
        var instance103 = new Graphics()
            .drawCommands(shapes.s01[514]);
        var instance106 = new Graphics()
            .drawCommands(shapes.s01[526]);
        var instance105 = new Graphics()
            .drawCommands(shapes.s01[515]);
        var instance108 = new Graphics()
            .drawCommands(shapes.s01[527]);
        var instance107 = new Graphics()
            .drawCommands(shapes.s01[516]);
        var instance110 = new Graphics()
            .drawCommands(shapes.s01[528]);
        var instance109 = new Graphics()
            .drawCommands(shapes.s01[517]);
        var instance112 = new Graphics()
            .drawCommands(shapes.s01[518]);
        var instance111 = new Graphics()
            .drawCommands(shapes.s01[507]);
        var instance114 = new Graphics()
            .drawCommands(shapes.s01[519]);
        var instance113 = new Graphics()
            .drawCommands(shapes.s01[508]);
        var instance116 = new Graphics()
            .drawCommands(shapes.s01[520]);
        var instance115 = new Graphics()
            .drawCommands(shapes.s01[509]);
        var instance118 = new Graphics()
            .drawCommands(shapes.s01[521]);
        var instance117 = new Graphics()
            .drawCommands(shapes.s01[510]);
        var instance120 = new Graphics()
            .drawCommands(shapes.s01[522]);
        var instance119 = new Graphics()
            .drawCommands(shapes.s01[511]);
        var instance122 = new Graphics()
            .drawCommands(shapes.s01[523]);
        var instance121 = new Graphics()
            .drawCommands(shapes.s01[512]);
        var instance124 = new Graphics()
            .drawCommands(shapes.s01[524]);
        var instance123 = new Graphics()
            .drawCommands(shapes.s01[513]);
        var instance126 = new Graphics()
            .drawCommands(shapes.s01[525]);
        var instance125 = new Graphics()
            .drawCommands(shapes.s01[514]);
        var instance128 = new Graphics()
            .drawCommands(shapes.s01[526]);
        var instance127 = new Graphics()
            .drawCommands(shapes.s01[515]);
        var instance130 = new Graphics()
            .drawCommands(shapes.s01[527]);
        var instance129 = new Graphics()
            .drawCommands(shapes.s01[516]);
        var instance132 = new Graphics()
            .drawCommands(shapes.s01[528]);
        var instance131 = new Graphics()
            .drawCommands(shapes.s01[517]);
        var instance134 = new Graphics()
            .drawCommands(shapes.s01[518]);
        var instance133 = new Graphics()
            .drawCommands(shapes.s01[507]);
        var instance136 = new Graphics()
            .drawCommands(shapes.s01[519]);
        var instance135 = new Graphics()
            .drawCommands(shapes.s01[508]);
        var instance138 = new Graphics()
            .drawCommands(shapes.s01[520]);
        var instance137 = new Graphics()
            .drawCommands(shapes.s01[509]);
        var instance140 = new Graphics()
            .drawCommands(shapes.s01[521]);
        var instance139 = new Graphics()
            .drawCommands(shapes.s01[510]);
        var instance142 = new Graphics()
            .drawCommands(shapes.s01[522]);
        var instance141 = new Graphics()
            .drawCommands(shapes.s01[511]);
        var instance144 = new Graphics()
            .drawCommands(shapes.s01[523]);
        var instance143 = new Graphics()
            .drawCommands(shapes.s01[512]);
        var instance146 = new Graphics()
            .drawCommands(shapes.s01[524]);
        var instance145 = new Graphics()
            .drawCommands(shapes.s01[513]);
        var instance148 = new Graphics()
            .drawCommands(shapes.s01[525]);
        var instance147 = new Graphics()
            .drawCommands(shapes.s01[514]);
        var instance150 = new Graphics()
            .drawCommands(shapes.s01[526]);
        var instance149 = new Graphics()
            .drawCommands(shapes.s01[515]);
        var instance152 = new Graphics()
            .drawCommands(shapes.s01[527]);
        var instance151 = new Graphics()
            .drawCommands(shapes.s01[516]);
        var instance154 = new Graphics()
            .drawCommands(shapes.s01[528]);
        var instance153 = new Graphics()
            .drawCommands(shapes.s01[517]);
        var instance156 = new Graphics()
            .drawCommands(shapes.s01[518]);
        var instance155 = new Graphics()
            .drawCommands(shapes.s01[507]);
        var instance158 = new Graphics()
            .drawCommands(shapes.s01[519]);
        var instance157 = new Graphics()
            .drawCommands(shapes.s01[508]);
        this.addTimedChild(instance2, 0, 1)
            .addTimedChild(instance1, 0, 1)
            .addTimedChild(instance4, 1, 1)
            .addTimedChild(instance3, 1, 1)
            .addTimedChild(instance6, 2, 1)
            .addTimedChild(instance5, 2, 1)
            .addTimedChild(instance8, 3, 1)
            .addTimedChild(instance7, 3, 1)
            .addTimedChild(instance10, 4, 1)
            .addTimedChild(instance9, 4, 1)
            .addTimedChild(instance12, 5, 1)
            .addTimedChild(instance11, 5, 1)
            .addTimedChild(instance14, 6, 1)
            .addTimedChild(instance13, 6, 1)
            .addTimedChild(instance16, 7, 1)
            .addTimedChild(instance15, 7, 1)
            .addTimedChild(instance18, 8, 1)
            .addTimedChild(instance17, 8, 1)
            .addTimedChild(instance20, 9, 1)
            .addTimedChild(instance19, 9, 1)
            .addTimedChild(instance22, 10, 1)
            .addTimedChild(instance21, 10, 1)
            .addTimedChild(instance24, 11, 1)
            .addTimedChild(instance23, 11, 1)
            .addTimedChild(instance26, 12, 1)
            .addTimedChild(instance25, 12, 1)
            .addTimedChild(instance28, 13, 1)
            .addTimedChild(instance27, 13, 1)
            .addTimedChild(instance30, 14, 1)
            .addTimedChild(instance29, 14, 1)
            .addTimedChild(instance32, 15, 1)
            .addTimedChild(instance31, 15, 1)
            .addTimedChild(instance34, 16, 1)
            .addTimedChild(instance33, 16, 1)
            .addTimedChild(instance36, 17, 1)
            .addTimedChild(instance35, 17, 1)
            .addTimedChild(instance38, 18, 1)
            .addTimedChild(instance37, 18, 1)
            .addTimedChild(instance40, 19, 1)
            .addTimedChild(instance39, 19, 1)
            .addTimedChild(instance42, 20, 1)
            .addTimedChild(instance41, 20, 1)
            .addTimedChild(instance44, 21, 1)
            .addTimedChild(instance43, 21, 1)
            .addTimedChild(instance46, 22, 1)
            .addTimedChild(instance45, 22, 1)
            .addTimedChild(instance48, 23, 1)
            .addTimedChild(instance47, 23, 1)
            .addTimedChild(instance50, 24, 1)
            .addTimedChild(instance49, 24, 1)
            .addTimedChild(instance52, 25, 1)
            .addTimedChild(instance51, 25, 1)
            .addTimedChild(instance54, 26, 1)
            .addTimedChild(instance53, 26, 1)
            .addTimedChild(instance56, 27, 1)
            .addTimedChild(instance55, 27, 1)
            .addTimedChild(instance58, 28, 1)
            .addTimedChild(instance57, 28, 1)
            .addTimedChild(instance60, 29, 1)
            .addTimedChild(instance59, 29, 1)
            .addTimedChild(instance62, 30, 1)
            .addTimedChild(instance61, 30, 1)
            .addTimedChild(instance64, 31, 1)
            .addTimedChild(instance63, 31, 1)
            .addTimedChild(instance66, 32, 1)
            .addTimedChild(instance65, 32, 1)
            .addTimedChild(instance68, 33, 1)
            .addTimedChild(instance67, 33, 1)
            .addTimedChild(instance70, 34, 1)
            .addTimedChild(instance69, 34, 1)
            .addTimedChild(instance72, 35, 1)
            .addTimedChild(instance71, 35, 1)
            .addTimedChild(instance74, 36, 1)
            .addTimedChild(instance73, 36, 1)
            .addTimedChild(instance76, 37, 1)
            .addTimedChild(instance75, 37, 1)
            .addTimedChild(instance78, 38, 1)
            .addTimedChild(instance77, 38, 1)
            .addTimedChild(instance80, 39, 1)
            .addTimedChild(instance79, 39, 1)
            .addTimedChild(instance82, 40, 1)
            .addTimedChild(instance81, 40, 1)
            .addTimedChild(instance84, 41, 1)
            .addTimedChild(instance83, 41, 1)
            .addTimedChild(instance86, 42, 1)
            .addTimedChild(instance85, 42, 1)
            .addTimedChild(instance88, 43, 1)
            .addTimedChild(instance87, 43, 1)
            .addTimedChild(instance90, 44, 1)
            .addTimedChild(instance89, 44, 1)
            .addTimedChild(instance92, 45, 1)
            .addTimedChild(instance91, 45, 1)
            .addTimedChild(instance94, 46, 1)
            .addTimedChild(instance93, 46, 1)
            .addTimedChild(instance96, 47, 1)
            .addTimedChild(instance95, 47, 1)
            .addTimedChild(instance98, 48, 1)
            .addTimedChild(instance97, 48, 1)
            .addTimedChild(instance100, 49, 1)
            .addTimedChild(instance99, 49, 1)
            .addTimedChild(instance102, 50, 1)
            .addTimedChild(instance101, 50, 1)
            .addTimedChild(instance104, 51, 1)
            .addTimedChild(instance103, 51, 1)
            .addTimedChild(instance106, 52, 1)
            .addTimedChild(instance105, 52, 1)
            .addTimedChild(instance108, 53, 1)
            .addTimedChild(instance107, 53, 1)
            .addTimedChild(instance110, 54, 1)
            .addTimedChild(instance109, 54, 1)
            .addTimedChild(instance112, 55, 1)
            .addTimedChild(instance111, 55, 1)
            .addTimedChild(instance114, 56, 1)
            .addTimedChild(instance113, 56, 1)
            .addTimedChild(instance116, 57, 1)
            .addTimedChild(instance115, 57, 1)
            .addTimedChild(instance118, 58, 1)
            .addTimedChild(instance117, 58, 1)
            .addTimedChild(instance120, 59, 1)
            .addTimedChild(instance119, 59, 1)
            .addTimedChild(instance122, 60, 1)
            .addTimedChild(instance121, 60, 1)
            .addTimedChild(instance124, 61, 1)
            .addTimedChild(instance123, 61, 1)
            .addTimedChild(instance126, 62, 1)
            .addTimedChild(instance125, 62, 1)
            .addTimedChild(instance128, 63, 1)
            .addTimedChild(instance127, 63, 1)
            .addTimedChild(instance130, 64, 1)
            .addTimedChild(instance129, 64, 1)
            .addTimedChild(instance132, 65, 1)
            .addTimedChild(instance131, 65, 1)
            .addTimedChild(instance134, 66, 1)
            .addTimedChild(instance133, 66, 1)
            .addTimedChild(instance136, 67, 1)
            .addTimedChild(instance135, 67, 1)
            .addTimedChild(instance138, 68, 1)
            .addTimedChild(instance137, 68, 1)
            .addTimedChild(instance140, 69, 1)
            .addTimedChild(instance139, 69, 1)
            .addTimedChild(instance142, 70, 1)
            .addTimedChild(instance141, 70, 1)
            .addTimedChild(instance144, 71, 1)
            .addTimedChild(instance143, 71, 1)
            .addTimedChild(instance146, 72, 1)
            .addTimedChild(instance145, 72, 1)
            .addTimedChild(instance148, 73, 1)
            .addTimedChild(instance147, 73, 1)
            .addTimedChild(instance150, 74, 1)
            .addTimedChild(instance149, 74, 1)
            .addTimedChild(instance152, 75, 1)
            .addTimedChild(instance151, 75, 1)
            .addTimedChild(instance154, 76, 1)
            .addTimedChild(instance153, 76, 1)
            .addTimedChild(instance156, 77, 1)
            .addTimedChild(instance155, 77, 1)
            .addTimedChild(instance158, 78, 1)
            .addTimedChild(instance157, 78, 1);
    });

    var Graphic246 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 79, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[529]);
        this.addTimedChild(instance1);
    });

    var Graphic247 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 79, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[530]);
        this.addTimedChild(instance1);
    });

    var Graphic248 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 79, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[531]);
        this.addTimedChild(instance1);
    });

    var Graphic249 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 79, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[532]);
        this.addTimedChild(instance1);
    });

    var Graphic250 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 79, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[533]);
        this.addTimedChild(instance1);
    });

    var Graphic251 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 79, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[534]);
        this.addTimedChild(instance1);
    });

    var Graphic252 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 79, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[518]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[507]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[519]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[508]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[520]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[509]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[521]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[510]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[522]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[511]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[523]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[512]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[524]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[513]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[525]);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[514]);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[526]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[515]);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[527]);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[516]);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[528]);
        var instance21 = new Graphics()
            .drawCommands(shapes.s01[517]);
        var instance24 = new Graphics()
            .drawCommands(shapes.s01[518]);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[507]);
        var instance26 = new Graphics()
            .drawCommands(shapes.s01[519]);
        var instance25 = new Graphics()
            .drawCommands(shapes.s01[508]);
        var instance28 = new Graphics()
            .drawCommands(shapes.s01[520]);
        var instance27 = new Graphics()
            .drawCommands(shapes.s01[509]);
        var instance30 = new Graphics()
            .drawCommands(shapes.s01[521]);
        var instance29 = new Graphics()
            .drawCommands(shapes.s01[510]);
        var instance32 = new Graphics()
            .drawCommands(shapes.s01[522]);
        var instance31 = new Graphics()
            .drawCommands(shapes.s01[511]);
        var instance34 = new Graphics()
            .drawCommands(shapes.s01[523]);
        var instance33 = new Graphics()
            .drawCommands(shapes.s01[512]);
        var instance36 = new Graphics()
            .drawCommands(shapes.s01[524]);
        var instance35 = new Graphics()
            .drawCommands(shapes.s01[513]);
        var instance38 = new Graphics()
            .drawCommands(shapes.s01[525]);
        var instance37 = new Graphics()
            .drawCommands(shapes.s01[514]);
        var instance40 = new Graphics()
            .drawCommands(shapes.s01[526]);
        var instance39 = new Graphics()
            .drawCommands(shapes.s01[515]);
        var instance42 = new Graphics()
            .drawCommands(shapes.s01[527]);
        var instance41 = new Graphics()
            .drawCommands(shapes.s01[516]);
        var instance44 = new Graphics()
            .drawCommands(shapes.s01[528]);
        var instance43 = new Graphics()
            .drawCommands(shapes.s01[517]);
        var instance46 = new Graphics()
            .drawCommands(shapes.s01[518]);
        var instance45 = new Graphics()
            .drawCommands(shapes.s01[507]);
        var instance48 = new Graphics()
            .drawCommands(shapes.s01[519]);
        var instance47 = new Graphics()
            .drawCommands(shapes.s01[508]);
        var instance50 = new Graphics()
            .drawCommands(shapes.s01[520]);
        var instance49 = new Graphics()
            .drawCommands(shapes.s01[509]);
        var instance52 = new Graphics()
            .drawCommands(shapes.s01[521]);
        var instance51 = new Graphics()
            .drawCommands(shapes.s01[510]);
        var instance54 = new Graphics()
            .drawCommands(shapes.s01[522]);
        var instance53 = new Graphics()
            .drawCommands(shapes.s01[511]);
        var instance56 = new Graphics()
            .drawCommands(shapes.s01[523]);
        var instance55 = new Graphics()
            .drawCommands(shapes.s01[512]);
        var instance58 = new Graphics()
            .drawCommands(shapes.s01[524]);
        var instance57 = new Graphics()
            .drawCommands(shapes.s01[513]);
        var instance60 = new Graphics()
            .drawCommands(shapes.s01[525]);
        var instance59 = new Graphics()
            .drawCommands(shapes.s01[514]);
        var instance62 = new Graphics()
            .drawCommands(shapes.s01[526]);
        var instance61 = new Graphics()
            .drawCommands(shapes.s01[515]);
        var instance64 = new Graphics()
            .drawCommands(shapes.s01[527]);
        var instance63 = new Graphics()
            .drawCommands(shapes.s01[516]);
        var instance66 = new Graphics()
            .drawCommands(shapes.s01[528]);
        var instance65 = new Graphics()
            .drawCommands(shapes.s01[517]);
        var instance68 = new Graphics()
            .drawCommands(shapes.s01[518]);
        var instance67 = new Graphics()
            .drawCommands(shapes.s01[507]);
        var instance70 = new Graphics()
            .drawCommands(shapes.s01[519]);
        var instance69 = new Graphics()
            .drawCommands(shapes.s01[508]);
        var instance72 = new Graphics()
            .drawCommands(shapes.s01[520]);
        var instance71 = new Graphics()
            .drawCommands(shapes.s01[509]);
        var instance74 = new Graphics()
            .drawCommands(shapes.s01[521]);
        var instance73 = new Graphics()
            .drawCommands(shapes.s01[510]);
        var instance76 = new Graphics()
            .drawCommands(shapes.s01[522]);
        var instance75 = new Graphics()
            .drawCommands(shapes.s01[511]);
        var instance78 = new Graphics()
            .drawCommands(shapes.s01[523]);
        var instance77 = new Graphics()
            .drawCommands(shapes.s01[512]);
        var instance80 = new Graphics()
            .drawCommands(shapes.s01[524]);
        var instance79 = new Graphics()
            .drawCommands(shapes.s01[513]);
        var instance82 = new Graphics()
            .drawCommands(shapes.s01[525]);
        var instance81 = new Graphics()
            .drawCommands(shapes.s01[514]);
        var instance84 = new Graphics()
            .drawCommands(shapes.s01[526]);
        var instance83 = new Graphics()
            .drawCommands(shapes.s01[515]);
        var instance86 = new Graphics()
            .drawCommands(shapes.s01[527]);
        var instance85 = new Graphics()
            .drawCommands(shapes.s01[516]);
        var instance88 = new Graphics()
            .drawCommands(shapes.s01[528]);
        var instance87 = new Graphics()
            .drawCommands(shapes.s01[517]);
        var instance90 = new Graphics()
            .drawCommands(shapes.s01[518]);
        var instance89 = new Graphics()
            .drawCommands(shapes.s01[507]);
        var instance92 = new Graphics()
            .drawCommands(shapes.s01[519]);
        var instance91 = new Graphics()
            .drawCommands(shapes.s01[508]);
        var instance94 = new Graphics()
            .drawCommands(shapes.s01[520]);
        var instance93 = new Graphics()
            .drawCommands(shapes.s01[509]);
        var instance96 = new Graphics()
            .drawCommands(shapes.s01[521]);
        var instance95 = new Graphics()
            .drawCommands(shapes.s01[510]);
        var instance98 = new Graphics()
            .drawCommands(shapes.s01[522]);
        var instance97 = new Graphics()
            .drawCommands(shapes.s01[511]);
        var instance100 = new Graphics()
            .drawCommands(shapes.s01[523]);
        var instance99 = new Graphics()
            .drawCommands(shapes.s01[512]);
        var instance102 = new Graphics()
            .drawCommands(shapes.s01[524]);
        var instance101 = new Graphics()
            .drawCommands(shapes.s01[513]);
        var instance104 = new Graphics()
            .drawCommands(shapes.s01[525]);
        var instance103 = new Graphics()
            .drawCommands(shapes.s01[514]);
        var instance106 = new Graphics()
            .drawCommands(shapes.s01[526]);
        var instance105 = new Graphics()
            .drawCommands(shapes.s01[515]);
        var instance108 = new Graphics()
            .drawCommands(shapes.s01[527]);
        var instance107 = new Graphics()
            .drawCommands(shapes.s01[516]);
        var instance110 = new Graphics()
            .drawCommands(shapes.s01[528]);
        var instance109 = new Graphics()
            .drawCommands(shapes.s01[517]);
        var instance112 = new Graphics()
            .drawCommands(shapes.s01[518]);
        var instance111 = new Graphics()
            .drawCommands(shapes.s01[507]);
        var instance114 = new Graphics()
            .drawCommands(shapes.s01[519]);
        var instance113 = new Graphics()
            .drawCommands(shapes.s01[508]);
        var instance116 = new Graphics()
            .drawCommands(shapes.s01[520]);
        var instance115 = new Graphics()
            .drawCommands(shapes.s01[509]);
        var instance118 = new Graphics()
            .drawCommands(shapes.s01[521]);
        var instance117 = new Graphics()
            .drawCommands(shapes.s01[510]);
        var instance120 = new Graphics()
            .drawCommands(shapes.s01[522]);
        var instance119 = new Graphics()
            .drawCommands(shapes.s01[511]);
        var instance122 = new Graphics()
            .drawCommands(shapes.s01[523]);
        var instance121 = new Graphics()
            .drawCommands(shapes.s01[512]);
        var instance124 = new Graphics()
            .drawCommands(shapes.s01[524]);
        var instance123 = new Graphics()
            .drawCommands(shapes.s01[513]);
        var instance126 = new Graphics()
            .drawCommands(shapes.s01[525]);
        var instance125 = new Graphics()
            .drawCommands(shapes.s01[514]);
        var instance128 = new Graphics()
            .drawCommands(shapes.s01[526]);
        var instance127 = new Graphics()
            .drawCommands(shapes.s01[515]);
        var instance130 = new Graphics()
            .drawCommands(shapes.s01[527]);
        var instance129 = new Graphics()
            .drawCommands(shapes.s01[516]);
        var instance132 = new Graphics()
            .drawCommands(shapes.s01[528]);
        var instance131 = new Graphics()
            .drawCommands(shapes.s01[517]);
        var instance134 = new Graphics()
            .drawCommands(shapes.s01[518]);
        var instance133 = new Graphics()
            .drawCommands(shapes.s01[507]);
        var instance136 = new Graphics()
            .drawCommands(shapes.s01[519]);
        var instance135 = new Graphics()
            .drawCommands(shapes.s01[508]);
        var instance138 = new Graphics()
            .drawCommands(shapes.s01[520]);
        var instance137 = new Graphics()
            .drawCommands(shapes.s01[509]);
        var instance140 = new Graphics()
            .drawCommands(shapes.s01[521]);
        var instance139 = new Graphics()
            .drawCommands(shapes.s01[510]);
        var instance142 = new Graphics()
            .drawCommands(shapes.s01[522]);
        var instance141 = new Graphics()
            .drawCommands(shapes.s01[511]);
        var instance144 = new Graphics()
            .drawCommands(shapes.s01[523]);
        var instance143 = new Graphics()
            .drawCommands(shapes.s01[512]);
        var instance146 = new Graphics()
            .drawCommands(shapes.s01[524]);
        var instance145 = new Graphics()
            .drawCommands(shapes.s01[513]);
        var instance148 = new Graphics()
            .drawCommands(shapes.s01[525]);
        var instance147 = new Graphics()
            .drawCommands(shapes.s01[514]);
        var instance150 = new Graphics()
            .drawCommands(shapes.s01[526]);
        var instance149 = new Graphics()
            .drawCommands(shapes.s01[515]);
        var instance152 = new Graphics()
            .drawCommands(shapes.s01[527]);
        var instance151 = new Graphics()
            .drawCommands(shapes.s01[516]);
        var instance154 = new Graphics()
            .drawCommands(shapes.s01[528]);
        var instance153 = new Graphics()
            .drawCommands(shapes.s01[517]);
        var instance156 = new Graphics()
            .drawCommands(shapes.s01[518]);
        var instance155 = new Graphics()
            .drawCommands(shapes.s01[507]);
        var instance158 = new Graphics()
            .drawCommands(shapes.s01[519]);
        var instance157 = new Graphics()
            .drawCommands(shapes.s01[508]);
        this.addTimedChild(instance2, 0, 1)
            .addTimedChild(instance1, 0, 1)
            .addTimedChild(instance4, 1, 1)
            .addTimedChild(instance3, 1, 1)
            .addTimedChild(instance6, 2, 1)
            .addTimedChild(instance5, 2, 1)
            .addTimedChild(instance8, 3, 1)
            .addTimedChild(instance7, 3, 1)
            .addTimedChild(instance10, 4, 1)
            .addTimedChild(instance9, 4, 1)
            .addTimedChild(instance12, 5, 1)
            .addTimedChild(instance11, 5, 1)
            .addTimedChild(instance14, 6, 1)
            .addTimedChild(instance13, 6, 1)
            .addTimedChild(instance16, 7, 1)
            .addTimedChild(instance15, 7, 1)
            .addTimedChild(instance18, 8, 1)
            .addTimedChild(instance17, 8, 1)
            .addTimedChild(instance20, 9, 1)
            .addTimedChild(instance19, 9, 1)
            .addTimedChild(instance22, 10, 1)
            .addTimedChild(instance21, 10, 1)
            .addTimedChild(instance24, 11, 1)
            .addTimedChild(instance23, 11, 1)
            .addTimedChild(instance26, 12, 1)
            .addTimedChild(instance25, 12, 1)
            .addTimedChild(instance28, 13, 1)
            .addTimedChild(instance27, 13, 1)
            .addTimedChild(instance30, 14, 1)
            .addTimedChild(instance29, 14, 1)
            .addTimedChild(instance32, 15, 1)
            .addTimedChild(instance31, 15, 1)
            .addTimedChild(instance34, 16, 1)
            .addTimedChild(instance33, 16, 1)
            .addTimedChild(instance36, 17, 1)
            .addTimedChild(instance35, 17, 1)
            .addTimedChild(instance38, 18, 1)
            .addTimedChild(instance37, 18, 1)
            .addTimedChild(instance40, 19, 1)
            .addTimedChild(instance39, 19, 1)
            .addTimedChild(instance42, 20, 1)
            .addTimedChild(instance41, 20, 1)
            .addTimedChild(instance44, 21, 1)
            .addTimedChild(instance43, 21, 1)
            .addTimedChild(instance46, 22, 1)
            .addTimedChild(instance45, 22, 1)
            .addTimedChild(instance48, 23, 1)
            .addTimedChild(instance47, 23, 1)
            .addTimedChild(instance50, 24, 1)
            .addTimedChild(instance49, 24, 1)
            .addTimedChild(instance52, 25, 1)
            .addTimedChild(instance51, 25, 1)
            .addTimedChild(instance54, 26, 1)
            .addTimedChild(instance53, 26, 1)
            .addTimedChild(instance56, 27, 1)
            .addTimedChild(instance55, 27, 1)
            .addTimedChild(instance58, 28, 1)
            .addTimedChild(instance57, 28, 1)
            .addTimedChild(instance60, 29, 1)
            .addTimedChild(instance59, 29, 1)
            .addTimedChild(instance62, 30, 1)
            .addTimedChild(instance61, 30, 1)
            .addTimedChild(instance64, 31, 1)
            .addTimedChild(instance63, 31, 1)
            .addTimedChild(instance66, 32, 1)
            .addTimedChild(instance65, 32, 1)
            .addTimedChild(instance68, 33, 1)
            .addTimedChild(instance67, 33, 1)
            .addTimedChild(instance70, 34, 1)
            .addTimedChild(instance69, 34, 1)
            .addTimedChild(instance72, 35, 1)
            .addTimedChild(instance71, 35, 1)
            .addTimedChild(instance74, 36, 1)
            .addTimedChild(instance73, 36, 1)
            .addTimedChild(instance76, 37, 1)
            .addTimedChild(instance75, 37, 1)
            .addTimedChild(instance78, 38, 1)
            .addTimedChild(instance77, 38, 1)
            .addTimedChild(instance80, 39, 1)
            .addTimedChild(instance79, 39, 1)
            .addTimedChild(instance82, 40, 1)
            .addTimedChild(instance81, 40, 1)
            .addTimedChild(instance84, 41, 1)
            .addTimedChild(instance83, 41, 1)
            .addTimedChild(instance86, 42, 1)
            .addTimedChild(instance85, 42, 1)
            .addTimedChild(instance88, 43, 1)
            .addTimedChild(instance87, 43, 1)
            .addTimedChild(instance90, 44, 1)
            .addTimedChild(instance89, 44, 1)
            .addTimedChild(instance92, 45, 1)
            .addTimedChild(instance91, 45, 1)
            .addTimedChild(instance94, 46, 1)
            .addTimedChild(instance93, 46, 1)
            .addTimedChild(instance96, 47, 1)
            .addTimedChild(instance95, 47, 1)
            .addTimedChild(instance98, 48, 1)
            .addTimedChild(instance97, 48, 1)
            .addTimedChild(instance100, 49, 1)
            .addTimedChild(instance99, 49, 1)
            .addTimedChild(instance102, 50, 1)
            .addTimedChild(instance101, 50, 1)
            .addTimedChild(instance104, 51, 1)
            .addTimedChild(instance103, 51, 1)
            .addTimedChild(instance106, 52, 1)
            .addTimedChild(instance105, 52, 1)
            .addTimedChild(instance108, 53, 1)
            .addTimedChild(instance107, 53, 1)
            .addTimedChild(instance110, 54, 1)
            .addTimedChild(instance109, 54, 1)
            .addTimedChild(instance112, 55, 1)
            .addTimedChild(instance111, 55, 1)
            .addTimedChild(instance114, 56, 1)
            .addTimedChild(instance113, 56, 1)
            .addTimedChild(instance116, 57, 1)
            .addTimedChild(instance115, 57, 1)
            .addTimedChild(instance118, 58, 1)
            .addTimedChild(instance117, 58, 1)
            .addTimedChild(instance120, 59, 1)
            .addTimedChild(instance119, 59, 1)
            .addTimedChild(instance122, 60, 1)
            .addTimedChild(instance121, 60, 1)
            .addTimedChild(instance124, 61, 1)
            .addTimedChild(instance123, 61, 1)
            .addTimedChild(instance126, 62, 1)
            .addTimedChild(instance125, 62, 1)
            .addTimedChild(instance128, 63, 1)
            .addTimedChild(instance127, 63, 1)
            .addTimedChild(instance130, 64, 1)
            .addTimedChild(instance129, 64, 1)
            .addTimedChild(instance132, 65, 1)
            .addTimedChild(instance131, 65, 1)
            .addTimedChild(instance134, 66, 1)
            .addTimedChild(instance133, 66, 1)
            .addTimedChild(instance136, 67, 1)
            .addTimedChild(instance135, 67, 1)
            .addTimedChild(instance138, 68, 1)
            .addTimedChild(instance137, 68, 1)
            .addTimedChild(instance140, 69, 1)
            .addTimedChild(instance139, 69, 1)
            .addTimedChild(instance142, 70, 1)
            .addTimedChild(instance141, 70, 1)
            .addTimedChild(instance144, 71, 1)
            .addTimedChild(instance143, 71, 1)
            .addTimedChild(instance146, 72, 1)
            .addTimedChild(instance145, 72, 1)
            .addTimedChild(instance148, 73, 1)
            .addTimedChild(instance147, 73, 1)
            .addTimedChild(instance150, 74, 1)
            .addTimedChild(instance149, 74, 1)
            .addTimedChild(instance152, 75, 1)
            .addTimedChild(instance151, 75, 1)
            .addTimedChild(instance154, 76, 1)
            .addTimedChild(instance153, 76, 1)
            .addTimedChild(instance156, 77, 1)
            .addTimedChild(instance155, 77, 1)
            .addTimedChild(instance158, 78, 1)
            .addTimedChild(instance157, 78, 1);
    });

    var Graphic253 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 79, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[518]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[507]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[519]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[508]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[520]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[509]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[521]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[510]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[522]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[511]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[523]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[512]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[524]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[513]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[525]);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[514]);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[526]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[515]);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[527]);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[516]);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[528]);
        var instance21 = new Graphics()
            .drawCommands(shapes.s01[517]);
        var instance24 = new Graphics()
            .drawCommands(shapes.s01[518]);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[507]);
        var instance26 = new Graphics()
            .drawCommands(shapes.s01[519]);
        var instance25 = new Graphics()
            .drawCommands(shapes.s01[508]);
        var instance28 = new Graphics()
            .drawCommands(shapes.s01[520]);
        var instance27 = new Graphics()
            .drawCommands(shapes.s01[509]);
        var instance30 = new Graphics()
            .drawCommands(shapes.s01[521]);
        var instance29 = new Graphics()
            .drawCommands(shapes.s01[510]);
        var instance32 = new Graphics()
            .drawCommands(shapes.s01[522]);
        var instance31 = new Graphics()
            .drawCommands(shapes.s01[511]);
        var instance34 = new Graphics()
            .drawCommands(shapes.s01[523]);
        var instance33 = new Graphics()
            .drawCommands(shapes.s01[512]);
        var instance36 = new Graphics()
            .drawCommands(shapes.s01[524]);
        var instance35 = new Graphics()
            .drawCommands(shapes.s01[513]);
        var instance38 = new Graphics()
            .drawCommands(shapes.s01[525]);
        var instance37 = new Graphics()
            .drawCommands(shapes.s01[514]);
        var instance40 = new Graphics()
            .drawCommands(shapes.s01[526]);
        var instance39 = new Graphics()
            .drawCommands(shapes.s01[515]);
        var instance42 = new Graphics()
            .drawCommands(shapes.s01[527]);
        var instance41 = new Graphics()
            .drawCommands(shapes.s01[516]);
        var instance44 = new Graphics()
            .drawCommands(shapes.s01[528]);
        var instance43 = new Graphics()
            .drawCommands(shapes.s01[517]);
        var instance46 = new Graphics()
            .drawCommands(shapes.s01[518]);
        var instance45 = new Graphics()
            .drawCommands(shapes.s01[507]);
        var instance48 = new Graphics()
            .drawCommands(shapes.s01[519]);
        var instance47 = new Graphics()
            .drawCommands(shapes.s01[508]);
        var instance50 = new Graphics()
            .drawCommands(shapes.s01[520]);
        var instance49 = new Graphics()
            .drawCommands(shapes.s01[509]);
        var instance52 = new Graphics()
            .drawCommands(shapes.s01[521]);
        var instance51 = new Graphics()
            .drawCommands(shapes.s01[510]);
        var instance54 = new Graphics()
            .drawCommands(shapes.s01[522]);
        var instance53 = new Graphics()
            .drawCommands(shapes.s01[511]);
        var instance56 = new Graphics()
            .drawCommands(shapes.s01[523]);
        var instance55 = new Graphics()
            .drawCommands(shapes.s01[512]);
        var instance58 = new Graphics()
            .drawCommands(shapes.s01[524]);
        var instance57 = new Graphics()
            .drawCommands(shapes.s01[513]);
        var instance60 = new Graphics()
            .drawCommands(shapes.s01[525]);
        var instance59 = new Graphics()
            .drawCommands(shapes.s01[514]);
        var instance62 = new Graphics()
            .drawCommands(shapes.s01[526]);
        var instance61 = new Graphics()
            .drawCommands(shapes.s01[515]);
        var instance64 = new Graphics()
            .drawCommands(shapes.s01[527]);
        var instance63 = new Graphics()
            .drawCommands(shapes.s01[516]);
        var instance66 = new Graphics()
            .drawCommands(shapes.s01[528]);
        var instance65 = new Graphics()
            .drawCommands(shapes.s01[517]);
        var instance68 = new Graphics()
            .drawCommands(shapes.s01[518]);
        var instance67 = new Graphics()
            .drawCommands(shapes.s01[507]);
        var instance70 = new Graphics()
            .drawCommands(shapes.s01[519]);
        var instance69 = new Graphics()
            .drawCommands(shapes.s01[508]);
        var instance72 = new Graphics()
            .drawCommands(shapes.s01[520]);
        var instance71 = new Graphics()
            .drawCommands(shapes.s01[509]);
        var instance74 = new Graphics()
            .drawCommands(shapes.s01[521]);
        var instance73 = new Graphics()
            .drawCommands(shapes.s01[510]);
        var instance76 = new Graphics()
            .drawCommands(shapes.s01[522]);
        var instance75 = new Graphics()
            .drawCommands(shapes.s01[511]);
        var instance78 = new Graphics()
            .drawCommands(shapes.s01[523]);
        var instance77 = new Graphics()
            .drawCommands(shapes.s01[512]);
        var instance80 = new Graphics()
            .drawCommands(shapes.s01[524]);
        var instance79 = new Graphics()
            .drawCommands(shapes.s01[513]);
        var instance82 = new Graphics()
            .drawCommands(shapes.s01[525]);
        var instance81 = new Graphics()
            .drawCommands(shapes.s01[514]);
        var instance84 = new Graphics()
            .drawCommands(shapes.s01[526]);
        var instance83 = new Graphics()
            .drawCommands(shapes.s01[515]);
        var instance86 = new Graphics()
            .drawCommands(shapes.s01[527]);
        var instance85 = new Graphics()
            .drawCommands(shapes.s01[516]);
        var instance88 = new Graphics()
            .drawCommands(shapes.s01[528]);
        var instance87 = new Graphics()
            .drawCommands(shapes.s01[517]);
        var instance90 = new Graphics()
            .drawCommands(shapes.s01[518]);
        var instance89 = new Graphics()
            .drawCommands(shapes.s01[507]);
        var instance92 = new Graphics()
            .drawCommands(shapes.s01[519]);
        var instance91 = new Graphics()
            .drawCommands(shapes.s01[508]);
        var instance94 = new Graphics()
            .drawCommands(shapes.s01[520]);
        var instance93 = new Graphics()
            .drawCommands(shapes.s01[509]);
        var instance96 = new Graphics()
            .drawCommands(shapes.s01[521]);
        var instance95 = new Graphics()
            .drawCommands(shapes.s01[510]);
        var instance98 = new Graphics()
            .drawCommands(shapes.s01[522]);
        var instance97 = new Graphics()
            .drawCommands(shapes.s01[511]);
        var instance100 = new Graphics()
            .drawCommands(shapes.s01[523]);
        var instance99 = new Graphics()
            .drawCommands(shapes.s01[512]);
        var instance102 = new Graphics()
            .drawCommands(shapes.s01[524]);
        var instance101 = new Graphics()
            .drawCommands(shapes.s01[513]);
        var instance104 = new Graphics()
            .drawCommands(shapes.s01[525]);
        var instance103 = new Graphics()
            .drawCommands(shapes.s01[514]);
        var instance106 = new Graphics()
            .drawCommands(shapes.s01[526]);
        var instance105 = new Graphics()
            .drawCommands(shapes.s01[515]);
        var instance108 = new Graphics()
            .drawCommands(shapes.s01[527]);
        var instance107 = new Graphics()
            .drawCommands(shapes.s01[516]);
        var instance110 = new Graphics()
            .drawCommands(shapes.s01[528]);
        var instance109 = new Graphics()
            .drawCommands(shapes.s01[517]);
        var instance112 = new Graphics()
            .drawCommands(shapes.s01[518]);
        var instance111 = new Graphics()
            .drawCommands(shapes.s01[507]);
        var instance114 = new Graphics()
            .drawCommands(shapes.s01[519]);
        var instance113 = new Graphics()
            .drawCommands(shapes.s01[508]);
        var instance116 = new Graphics()
            .drawCommands(shapes.s01[520]);
        var instance115 = new Graphics()
            .drawCommands(shapes.s01[509]);
        var instance118 = new Graphics()
            .drawCommands(shapes.s01[521]);
        var instance117 = new Graphics()
            .drawCommands(shapes.s01[510]);
        var instance120 = new Graphics()
            .drawCommands(shapes.s01[522]);
        var instance119 = new Graphics()
            .drawCommands(shapes.s01[511]);
        var instance122 = new Graphics()
            .drawCommands(shapes.s01[523]);
        var instance121 = new Graphics()
            .drawCommands(shapes.s01[512]);
        var instance124 = new Graphics()
            .drawCommands(shapes.s01[524]);
        var instance123 = new Graphics()
            .drawCommands(shapes.s01[513]);
        var instance126 = new Graphics()
            .drawCommands(shapes.s01[525]);
        var instance125 = new Graphics()
            .drawCommands(shapes.s01[514]);
        var instance128 = new Graphics()
            .drawCommands(shapes.s01[526]);
        var instance127 = new Graphics()
            .drawCommands(shapes.s01[515]);
        var instance130 = new Graphics()
            .drawCommands(shapes.s01[527]);
        var instance129 = new Graphics()
            .drawCommands(shapes.s01[516]);
        var instance132 = new Graphics()
            .drawCommands(shapes.s01[528]);
        var instance131 = new Graphics()
            .drawCommands(shapes.s01[517]);
        var instance134 = new Graphics()
            .drawCommands(shapes.s01[518]);
        var instance133 = new Graphics()
            .drawCommands(shapes.s01[507]);
        var instance136 = new Graphics()
            .drawCommands(shapes.s01[519]);
        var instance135 = new Graphics()
            .drawCommands(shapes.s01[508]);
        var instance138 = new Graphics()
            .drawCommands(shapes.s01[520]);
        var instance137 = new Graphics()
            .drawCommands(shapes.s01[509]);
        var instance140 = new Graphics()
            .drawCommands(shapes.s01[521]);
        var instance139 = new Graphics()
            .drawCommands(shapes.s01[510]);
        var instance142 = new Graphics()
            .drawCommands(shapes.s01[522]);
        var instance141 = new Graphics()
            .drawCommands(shapes.s01[511]);
        var instance144 = new Graphics()
            .drawCommands(shapes.s01[523]);
        var instance143 = new Graphics()
            .drawCommands(shapes.s01[512]);
        var instance146 = new Graphics()
            .drawCommands(shapes.s01[524]);
        var instance145 = new Graphics()
            .drawCommands(shapes.s01[513]);
        var instance148 = new Graphics()
            .drawCommands(shapes.s01[525]);
        var instance147 = new Graphics()
            .drawCommands(shapes.s01[514]);
        var instance150 = new Graphics()
            .drawCommands(shapes.s01[526]);
        var instance149 = new Graphics()
            .drawCommands(shapes.s01[515]);
        var instance152 = new Graphics()
            .drawCommands(shapes.s01[527]);
        var instance151 = new Graphics()
            .drawCommands(shapes.s01[516]);
        var instance154 = new Graphics()
            .drawCommands(shapes.s01[528]);
        var instance153 = new Graphics()
            .drawCommands(shapes.s01[517]);
        var instance156 = new Graphics()
            .drawCommands(shapes.s01[518]);
        var instance155 = new Graphics()
            .drawCommands(shapes.s01[507]);
        var instance158 = new Graphics()
            .drawCommands(shapes.s01[519]);
        var instance157 = new Graphics()
            .drawCommands(shapes.s01[508]);
        this.addTimedChild(instance2, 0, 1)
            .addTimedChild(instance1, 0, 1)
            .addTimedChild(instance4, 1, 1)
            .addTimedChild(instance3, 1, 1)
            .addTimedChild(instance6, 2, 1)
            .addTimedChild(instance5, 2, 1)
            .addTimedChild(instance8, 3, 1)
            .addTimedChild(instance7, 3, 1)
            .addTimedChild(instance10, 4, 1)
            .addTimedChild(instance9, 4, 1)
            .addTimedChild(instance12, 5, 1)
            .addTimedChild(instance11, 5, 1)
            .addTimedChild(instance14, 6, 1)
            .addTimedChild(instance13, 6, 1)
            .addTimedChild(instance16, 7, 1)
            .addTimedChild(instance15, 7, 1)
            .addTimedChild(instance18, 8, 1)
            .addTimedChild(instance17, 8, 1)
            .addTimedChild(instance20, 9, 1)
            .addTimedChild(instance19, 9, 1)
            .addTimedChild(instance22, 10, 1)
            .addTimedChild(instance21, 10, 1)
            .addTimedChild(instance24, 11, 1)
            .addTimedChild(instance23, 11, 1)
            .addTimedChild(instance26, 12, 1)
            .addTimedChild(instance25, 12, 1)
            .addTimedChild(instance28, 13, 1)
            .addTimedChild(instance27, 13, 1)
            .addTimedChild(instance30, 14, 1)
            .addTimedChild(instance29, 14, 1)
            .addTimedChild(instance32, 15, 1)
            .addTimedChild(instance31, 15, 1)
            .addTimedChild(instance34, 16, 1)
            .addTimedChild(instance33, 16, 1)
            .addTimedChild(instance36, 17, 1)
            .addTimedChild(instance35, 17, 1)
            .addTimedChild(instance38, 18, 1)
            .addTimedChild(instance37, 18, 1)
            .addTimedChild(instance40, 19, 1)
            .addTimedChild(instance39, 19, 1)
            .addTimedChild(instance42, 20, 1)
            .addTimedChild(instance41, 20, 1)
            .addTimedChild(instance44, 21, 1)
            .addTimedChild(instance43, 21, 1)
            .addTimedChild(instance46, 22, 1)
            .addTimedChild(instance45, 22, 1)
            .addTimedChild(instance48, 23, 1)
            .addTimedChild(instance47, 23, 1)
            .addTimedChild(instance50, 24, 1)
            .addTimedChild(instance49, 24, 1)
            .addTimedChild(instance52, 25, 1)
            .addTimedChild(instance51, 25, 1)
            .addTimedChild(instance54, 26, 1)
            .addTimedChild(instance53, 26, 1)
            .addTimedChild(instance56, 27, 1)
            .addTimedChild(instance55, 27, 1)
            .addTimedChild(instance58, 28, 1)
            .addTimedChild(instance57, 28, 1)
            .addTimedChild(instance60, 29, 1)
            .addTimedChild(instance59, 29, 1)
            .addTimedChild(instance62, 30, 1)
            .addTimedChild(instance61, 30, 1)
            .addTimedChild(instance64, 31, 1)
            .addTimedChild(instance63, 31, 1)
            .addTimedChild(instance66, 32, 1)
            .addTimedChild(instance65, 32, 1)
            .addTimedChild(instance68, 33, 1)
            .addTimedChild(instance67, 33, 1)
            .addTimedChild(instance70, 34, 1)
            .addTimedChild(instance69, 34, 1)
            .addTimedChild(instance72, 35, 1)
            .addTimedChild(instance71, 35, 1)
            .addTimedChild(instance74, 36, 1)
            .addTimedChild(instance73, 36, 1)
            .addTimedChild(instance76, 37, 1)
            .addTimedChild(instance75, 37, 1)
            .addTimedChild(instance78, 38, 1)
            .addTimedChild(instance77, 38, 1)
            .addTimedChild(instance80, 39, 1)
            .addTimedChild(instance79, 39, 1)
            .addTimedChild(instance82, 40, 1)
            .addTimedChild(instance81, 40, 1)
            .addTimedChild(instance84, 41, 1)
            .addTimedChild(instance83, 41, 1)
            .addTimedChild(instance86, 42, 1)
            .addTimedChild(instance85, 42, 1)
            .addTimedChild(instance88, 43, 1)
            .addTimedChild(instance87, 43, 1)
            .addTimedChild(instance90, 44, 1)
            .addTimedChild(instance89, 44, 1)
            .addTimedChild(instance92, 45, 1)
            .addTimedChild(instance91, 45, 1)
            .addTimedChild(instance94, 46, 1)
            .addTimedChild(instance93, 46, 1)
            .addTimedChild(instance96, 47, 1)
            .addTimedChild(instance95, 47, 1)
            .addTimedChild(instance98, 48, 1)
            .addTimedChild(instance97, 48, 1)
            .addTimedChild(instance100, 49, 1)
            .addTimedChild(instance99, 49, 1)
            .addTimedChild(instance102, 50, 1)
            .addTimedChild(instance101, 50, 1)
            .addTimedChild(instance104, 51, 1)
            .addTimedChild(instance103, 51, 1)
            .addTimedChild(instance106, 52, 1)
            .addTimedChild(instance105, 52, 1)
            .addTimedChild(instance108, 53, 1)
            .addTimedChild(instance107, 53, 1)
            .addTimedChild(instance110, 54, 1)
            .addTimedChild(instance109, 54, 1)
            .addTimedChild(instance112, 55, 1)
            .addTimedChild(instance111, 55, 1)
            .addTimedChild(instance114, 56, 1)
            .addTimedChild(instance113, 56, 1)
            .addTimedChild(instance116, 57, 1)
            .addTimedChild(instance115, 57, 1)
            .addTimedChild(instance118, 58, 1)
            .addTimedChild(instance117, 58, 1)
            .addTimedChild(instance120, 59, 1)
            .addTimedChild(instance119, 59, 1)
            .addTimedChild(instance122, 60, 1)
            .addTimedChild(instance121, 60, 1)
            .addTimedChild(instance124, 61, 1)
            .addTimedChild(instance123, 61, 1)
            .addTimedChild(instance126, 62, 1)
            .addTimedChild(instance125, 62, 1)
            .addTimedChild(instance128, 63, 1)
            .addTimedChild(instance127, 63, 1)
            .addTimedChild(instance130, 64, 1)
            .addTimedChild(instance129, 64, 1)
            .addTimedChild(instance132, 65, 1)
            .addTimedChild(instance131, 65, 1)
            .addTimedChild(instance134, 66, 1)
            .addTimedChild(instance133, 66, 1)
            .addTimedChild(instance136, 67, 1)
            .addTimedChild(instance135, 67, 1)
            .addTimedChild(instance138, 68, 1)
            .addTimedChild(instance137, 68, 1)
            .addTimedChild(instance140, 69, 1)
            .addTimedChild(instance139, 69, 1)
            .addTimedChild(instance142, 70, 1)
            .addTimedChild(instance141, 70, 1)
            .addTimedChild(instance144, 71, 1)
            .addTimedChild(instance143, 71, 1)
            .addTimedChild(instance146, 72, 1)
            .addTimedChild(instance145, 72, 1)
            .addTimedChild(instance148, 73, 1)
            .addTimedChild(instance147, 73, 1)
            .addTimedChild(instance150, 74, 1)
            .addTimedChild(instance149, 74, 1)
            .addTimedChild(instance152, 75, 1)
            .addTimedChild(instance151, 75, 1)
            .addTimedChild(instance154, 76, 1)
            .addTimedChild(instance153, 76, 1)
            .addTimedChild(instance156, 77, 1)
            .addTimedChild(instance155, 77, 1)
            .addTimedChild(instance158, 78, 1)
            .addTimedChild(instance157, 78, 1);
    });

    var Graphic254 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 79, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[518]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[507]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[519]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[508]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[520]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[509]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[521]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[510]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[522]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[511]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[523]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[512]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[524]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[513]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[525]);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[514]);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[526]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[515]);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[527]);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[516]);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[528]);
        var instance21 = new Graphics()
            .drawCommands(shapes.s01[517]);
        var instance24 = new Graphics()
            .drawCommands(shapes.s01[518]);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[507]);
        var instance26 = new Graphics()
            .drawCommands(shapes.s01[519]);
        var instance25 = new Graphics()
            .drawCommands(shapes.s01[508]);
        var instance28 = new Graphics()
            .drawCommands(shapes.s01[520]);
        var instance27 = new Graphics()
            .drawCommands(shapes.s01[509]);
        var instance30 = new Graphics()
            .drawCommands(shapes.s01[521]);
        var instance29 = new Graphics()
            .drawCommands(shapes.s01[510]);
        var instance32 = new Graphics()
            .drawCommands(shapes.s01[522]);
        var instance31 = new Graphics()
            .drawCommands(shapes.s01[511]);
        var instance34 = new Graphics()
            .drawCommands(shapes.s01[523]);
        var instance33 = new Graphics()
            .drawCommands(shapes.s01[512]);
        var instance36 = new Graphics()
            .drawCommands(shapes.s01[524]);
        var instance35 = new Graphics()
            .drawCommands(shapes.s01[513]);
        var instance38 = new Graphics()
            .drawCommands(shapes.s01[525]);
        var instance37 = new Graphics()
            .drawCommands(shapes.s01[514]);
        var instance40 = new Graphics()
            .drawCommands(shapes.s01[526]);
        var instance39 = new Graphics()
            .drawCommands(shapes.s01[515]);
        var instance42 = new Graphics()
            .drawCommands(shapes.s01[527]);
        var instance41 = new Graphics()
            .drawCommands(shapes.s01[516]);
        var instance44 = new Graphics()
            .drawCommands(shapes.s01[528]);
        var instance43 = new Graphics()
            .drawCommands(shapes.s01[517]);
        var instance46 = new Graphics()
            .drawCommands(shapes.s01[518]);
        var instance45 = new Graphics()
            .drawCommands(shapes.s01[507]);
        var instance48 = new Graphics()
            .drawCommands(shapes.s01[519]);
        var instance47 = new Graphics()
            .drawCommands(shapes.s01[508]);
        var instance50 = new Graphics()
            .drawCommands(shapes.s01[520]);
        var instance49 = new Graphics()
            .drawCommands(shapes.s01[509]);
        var instance52 = new Graphics()
            .drawCommands(shapes.s01[521]);
        var instance51 = new Graphics()
            .drawCommands(shapes.s01[510]);
        var instance54 = new Graphics()
            .drawCommands(shapes.s01[522]);
        var instance53 = new Graphics()
            .drawCommands(shapes.s01[511]);
        var instance56 = new Graphics()
            .drawCommands(shapes.s01[523]);
        var instance55 = new Graphics()
            .drawCommands(shapes.s01[512]);
        var instance58 = new Graphics()
            .drawCommands(shapes.s01[524]);
        var instance57 = new Graphics()
            .drawCommands(shapes.s01[513]);
        var instance60 = new Graphics()
            .drawCommands(shapes.s01[525]);
        var instance59 = new Graphics()
            .drawCommands(shapes.s01[514]);
        var instance62 = new Graphics()
            .drawCommands(shapes.s01[526]);
        var instance61 = new Graphics()
            .drawCommands(shapes.s01[515]);
        var instance64 = new Graphics()
            .drawCommands(shapes.s01[527]);
        var instance63 = new Graphics()
            .drawCommands(shapes.s01[516]);
        var instance66 = new Graphics()
            .drawCommands(shapes.s01[528]);
        var instance65 = new Graphics()
            .drawCommands(shapes.s01[517]);
        var instance68 = new Graphics()
            .drawCommands(shapes.s01[518]);
        var instance67 = new Graphics()
            .drawCommands(shapes.s01[507]);
        var instance70 = new Graphics()
            .drawCommands(shapes.s01[519]);
        var instance69 = new Graphics()
            .drawCommands(shapes.s01[508]);
        var instance72 = new Graphics()
            .drawCommands(shapes.s01[520]);
        var instance71 = new Graphics()
            .drawCommands(shapes.s01[509]);
        var instance74 = new Graphics()
            .drawCommands(shapes.s01[521]);
        var instance73 = new Graphics()
            .drawCommands(shapes.s01[510]);
        var instance76 = new Graphics()
            .drawCommands(shapes.s01[522]);
        var instance75 = new Graphics()
            .drawCommands(shapes.s01[511]);
        var instance78 = new Graphics()
            .drawCommands(shapes.s01[523]);
        var instance77 = new Graphics()
            .drawCommands(shapes.s01[512]);
        var instance80 = new Graphics()
            .drawCommands(shapes.s01[524]);
        var instance79 = new Graphics()
            .drawCommands(shapes.s01[513]);
        var instance82 = new Graphics()
            .drawCommands(shapes.s01[525]);
        var instance81 = new Graphics()
            .drawCommands(shapes.s01[514]);
        var instance84 = new Graphics()
            .drawCommands(shapes.s01[526]);
        var instance83 = new Graphics()
            .drawCommands(shapes.s01[515]);
        var instance86 = new Graphics()
            .drawCommands(shapes.s01[527]);
        var instance85 = new Graphics()
            .drawCommands(shapes.s01[516]);
        var instance88 = new Graphics()
            .drawCommands(shapes.s01[528]);
        var instance87 = new Graphics()
            .drawCommands(shapes.s01[517]);
        var instance90 = new Graphics()
            .drawCommands(shapes.s01[518]);
        var instance89 = new Graphics()
            .drawCommands(shapes.s01[507]);
        var instance92 = new Graphics()
            .drawCommands(shapes.s01[519]);
        var instance91 = new Graphics()
            .drawCommands(shapes.s01[508]);
        var instance94 = new Graphics()
            .drawCommands(shapes.s01[520]);
        var instance93 = new Graphics()
            .drawCommands(shapes.s01[509]);
        var instance96 = new Graphics()
            .drawCommands(shapes.s01[521]);
        var instance95 = new Graphics()
            .drawCommands(shapes.s01[510]);
        var instance98 = new Graphics()
            .drawCommands(shapes.s01[522]);
        var instance97 = new Graphics()
            .drawCommands(shapes.s01[511]);
        var instance100 = new Graphics()
            .drawCommands(shapes.s01[523]);
        var instance99 = new Graphics()
            .drawCommands(shapes.s01[512]);
        var instance102 = new Graphics()
            .drawCommands(shapes.s01[524]);
        var instance101 = new Graphics()
            .drawCommands(shapes.s01[513]);
        var instance104 = new Graphics()
            .drawCommands(shapes.s01[525]);
        var instance103 = new Graphics()
            .drawCommands(shapes.s01[514]);
        var instance106 = new Graphics()
            .drawCommands(shapes.s01[526]);
        var instance105 = new Graphics()
            .drawCommands(shapes.s01[515]);
        var instance108 = new Graphics()
            .drawCommands(shapes.s01[527]);
        var instance107 = new Graphics()
            .drawCommands(shapes.s01[516]);
        var instance110 = new Graphics()
            .drawCommands(shapes.s01[528]);
        var instance109 = new Graphics()
            .drawCommands(shapes.s01[517]);
        var instance112 = new Graphics()
            .drawCommands(shapes.s01[518]);
        var instance111 = new Graphics()
            .drawCommands(shapes.s01[507]);
        var instance114 = new Graphics()
            .drawCommands(shapes.s01[519]);
        var instance113 = new Graphics()
            .drawCommands(shapes.s01[508]);
        var instance116 = new Graphics()
            .drawCommands(shapes.s01[520]);
        var instance115 = new Graphics()
            .drawCommands(shapes.s01[509]);
        var instance118 = new Graphics()
            .drawCommands(shapes.s01[521]);
        var instance117 = new Graphics()
            .drawCommands(shapes.s01[510]);
        var instance120 = new Graphics()
            .drawCommands(shapes.s01[522]);
        var instance119 = new Graphics()
            .drawCommands(shapes.s01[511]);
        var instance122 = new Graphics()
            .drawCommands(shapes.s01[523]);
        var instance121 = new Graphics()
            .drawCommands(shapes.s01[512]);
        var instance124 = new Graphics()
            .drawCommands(shapes.s01[524]);
        var instance123 = new Graphics()
            .drawCommands(shapes.s01[513]);
        var instance126 = new Graphics()
            .drawCommands(shapes.s01[525]);
        var instance125 = new Graphics()
            .drawCommands(shapes.s01[514]);
        var instance128 = new Graphics()
            .drawCommands(shapes.s01[526]);
        var instance127 = new Graphics()
            .drawCommands(shapes.s01[515]);
        var instance130 = new Graphics()
            .drawCommands(shapes.s01[527]);
        var instance129 = new Graphics()
            .drawCommands(shapes.s01[516]);
        var instance132 = new Graphics()
            .drawCommands(shapes.s01[528]);
        var instance131 = new Graphics()
            .drawCommands(shapes.s01[517]);
        var instance134 = new Graphics()
            .drawCommands(shapes.s01[518]);
        var instance133 = new Graphics()
            .drawCommands(shapes.s01[507]);
        var instance136 = new Graphics()
            .drawCommands(shapes.s01[519]);
        var instance135 = new Graphics()
            .drawCommands(shapes.s01[508]);
        var instance138 = new Graphics()
            .drawCommands(shapes.s01[520]);
        var instance137 = new Graphics()
            .drawCommands(shapes.s01[509]);
        var instance140 = new Graphics()
            .drawCommands(shapes.s01[521]);
        var instance139 = new Graphics()
            .drawCommands(shapes.s01[510]);
        var instance142 = new Graphics()
            .drawCommands(shapes.s01[522]);
        var instance141 = new Graphics()
            .drawCommands(shapes.s01[511]);
        var instance144 = new Graphics()
            .drawCommands(shapes.s01[523]);
        var instance143 = new Graphics()
            .drawCommands(shapes.s01[512]);
        var instance146 = new Graphics()
            .drawCommands(shapes.s01[524]);
        var instance145 = new Graphics()
            .drawCommands(shapes.s01[513]);
        var instance148 = new Graphics()
            .drawCommands(shapes.s01[525]);
        var instance147 = new Graphics()
            .drawCommands(shapes.s01[514]);
        var instance150 = new Graphics()
            .drawCommands(shapes.s01[526]);
        var instance149 = new Graphics()
            .drawCommands(shapes.s01[515]);
        var instance152 = new Graphics()
            .drawCommands(shapes.s01[527]);
        var instance151 = new Graphics()
            .drawCommands(shapes.s01[516]);
        var instance154 = new Graphics()
            .drawCommands(shapes.s01[528]);
        var instance153 = new Graphics()
            .drawCommands(shapes.s01[517]);
        var instance156 = new Graphics()
            .drawCommands(shapes.s01[518]);
        var instance155 = new Graphics()
            .drawCommands(shapes.s01[507]);
        var instance158 = new Graphics()
            .drawCommands(shapes.s01[519]);
        var instance157 = new Graphics()
            .drawCommands(shapes.s01[508]);
        this.addTimedChild(instance2, 0, 1)
            .addTimedChild(instance1, 0, 1)
            .addTimedChild(instance4, 1, 1)
            .addTimedChild(instance3, 1, 1)
            .addTimedChild(instance6, 2, 1)
            .addTimedChild(instance5, 2, 1)
            .addTimedChild(instance8, 3, 1)
            .addTimedChild(instance7, 3, 1)
            .addTimedChild(instance10, 4, 1)
            .addTimedChild(instance9, 4, 1)
            .addTimedChild(instance12, 5, 1)
            .addTimedChild(instance11, 5, 1)
            .addTimedChild(instance14, 6, 1)
            .addTimedChild(instance13, 6, 1)
            .addTimedChild(instance16, 7, 1)
            .addTimedChild(instance15, 7, 1)
            .addTimedChild(instance18, 8, 1)
            .addTimedChild(instance17, 8, 1)
            .addTimedChild(instance20, 9, 1)
            .addTimedChild(instance19, 9, 1)
            .addTimedChild(instance22, 10, 1)
            .addTimedChild(instance21, 10, 1)
            .addTimedChild(instance24, 11, 1)
            .addTimedChild(instance23, 11, 1)
            .addTimedChild(instance26, 12, 1)
            .addTimedChild(instance25, 12, 1)
            .addTimedChild(instance28, 13, 1)
            .addTimedChild(instance27, 13, 1)
            .addTimedChild(instance30, 14, 1)
            .addTimedChild(instance29, 14, 1)
            .addTimedChild(instance32, 15, 1)
            .addTimedChild(instance31, 15, 1)
            .addTimedChild(instance34, 16, 1)
            .addTimedChild(instance33, 16, 1)
            .addTimedChild(instance36, 17, 1)
            .addTimedChild(instance35, 17, 1)
            .addTimedChild(instance38, 18, 1)
            .addTimedChild(instance37, 18, 1)
            .addTimedChild(instance40, 19, 1)
            .addTimedChild(instance39, 19, 1)
            .addTimedChild(instance42, 20, 1)
            .addTimedChild(instance41, 20, 1)
            .addTimedChild(instance44, 21, 1)
            .addTimedChild(instance43, 21, 1)
            .addTimedChild(instance46, 22, 1)
            .addTimedChild(instance45, 22, 1)
            .addTimedChild(instance48, 23, 1)
            .addTimedChild(instance47, 23, 1)
            .addTimedChild(instance50, 24, 1)
            .addTimedChild(instance49, 24, 1)
            .addTimedChild(instance52, 25, 1)
            .addTimedChild(instance51, 25, 1)
            .addTimedChild(instance54, 26, 1)
            .addTimedChild(instance53, 26, 1)
            .addTimedChild(instance56, 27, 1)
            .addTimedChild(instance55, 27, 1)
            .addTimedChild(instance58, 28, 1)
            .addTimedChild(instance57, 28, 1)
            .addTimedChild(instance60, 29, 1)
            .addTimedChild(instance59, 29, 1)
            .addTimedChild(instance62, 30, 1)
            .addTimedChild(instance61, 30, 1)
            .addTimedChild(instance64, 31, 1)
            .addTimedChild(instance63, 31, 1)
            .addTimedChild(instance66, 32, 1)
            .addTimedChild(instance65, 32, 1)
            .addTimedChild(instance68, 33, 1)
            .addTimedChild(instance67, 33, 1)
            .addTimedChild(instance70, 34, 1)
            .addTimedChild(instance69, 34, 1)
            .addTimedChild(instance72, 35, 1)
            .addTimedChild(instance71, 35, 1)
            .addTimedChild(instance74, 36, 1)
            .addTimedChild(instance73, 36, 1)
            .addTimedChild(instance76, 37, 1)
            .addTimedChild(instance75, 37, 1)
            .addTimedChild(instance78, 38, 1)
            .addTimedChild(instance77, 38, 1)
            .addTimedChild(instance80, 39, 1)
            .addTimedChild(instance79, 39, 1)
            .addTimedChild(instance82, 40, 1)
            .addTimedChild(instance81, 40, 1)
            .addTimedChild(instance84, 41, 1)
            .addTimedChild(instance83, 41, 1)
            .addTimedChild(instance86, 42, 1)
            .addTimedChild(instance85, 42, 1)
            .addTimedChild(instance88, 43, 1)
            .addTimedChild(instance87, 43, 1)
            .addTimedChild(instance90, 44, 1)
            .addTimedChild(instance89, 44, 1)
            .addTimedChild(instance92, 45, 1)
            .addTimedChild(instance91, 45, 1)
            .addTimedChild(instance94, 46, 1)
            .addTimedChild(instance93, 46, 1)
            .addTimedChild(instance96, 47, 1)
            .addTimedChild(instance95, 47, 1)
            .addTimedChild(instance98, 48, 1)
            .addTimedChild(instance97, 48, 1)
            .addTimedChild(instance100, 49, 1)
            .addTimedChild(instance99, 49, 1)
            .addTimedChild(instance102, 50, 1)
            .addTimedChild(instance101, 50, 1)
            .addTimedChild(instance104, 51, 1)
            .addTimedChild(instance103, 51, 1)
            .addTimedChild(instance106, 52, 1)
            .addTimedChild(instance105, 52, 1)
            .addTimedChild(instance108, 53, 1)
            .addTimedChild(instance107, 53, 1)
            .addTimedChild(instance110, 54, 1)
            .addTimedChild(instance109, 54, 1)
            .addTimedChild(instance112, 55, 1)
            .addTimedChild(instance111, 55, 1)
            .addTimedChild(instance114, 56, 1)
            .addTimedChild(instance113, 56, 1)
            .addTimedChild(instance116, 57, 1)
            .addTimedChild(instance115, 57, 1)
            .addTimedChild(instance118, 58, 1)
            .addTimedChild(instance117, 58, 1)
            .addTimedChild(instance120, 59, 1)
            .addTimedChild(instance119, 59, 1)
            .addTimedChild(instance122, 60, 1)
            .addTimedChild(instance121, 60, 1)
            .addTimedChild(instance124, 61, 1)
            .addTimedChild(instance123, 61, 1)
            .addTimedChild(instance126, 62, 1)
            .addTimedChild(instance125, 62, 1)
            .addTimedChild(instance128, 63, 1)
            .addTimedChild(instance127, 63, 1)
            .addTimedChild(instance130, 64, 1)
            .addTimedChild(instance129, 64, 1)
            .addTimedChild(instance132, 65, 1)
            .addTimedChild(instance131, 65, 1)
            .addTimedChild(instance134, 66, 1)
            .addTimedChild(instance133, 66, 1)
            .addTimedChild(instance136, 67, 1)
            .addTimedChild(instance135, 67, 1)
            .addTimedChild(instance138, 68, 1)
            .addTimedChild(instance137, 68, 1)
            .addTimedChild(instance140, 69, 1)
            .addTimedChild(instance139, 69, 1)
            .addTimedChild(instance142, 70, 1)
            .addTimedChild(instance141, 70, 1)
            .addTimedChild(instance144, 71, 1)
            .addTimedChild(instance143, 71, 1)
            .addTimedChild(instance146, 72, 1)
            .addTimedChild(instance145, 72, 1)
            .addTimedChild(instance148, 73, 1)
            .addTimedChild(instance147, 73, 1)
            .addTimedChild(instance150, 74, 1)
            .addTimedChild(instance149, 74, 1)
            .addTimedChild(instance152, 75, 1)
            .addTimedChild(instance151, 75, 1)
            .addTimedChild(instance154, 76, 1)
            .addTimedChild(instance153, 76, 1)
            .addTimedChild(instance156, 77, 1)
            .addTimedChild(instance155, 77, 1)
            .addTimedChild(instance158, 78, 1)
            .addTimedChild(instance157, 78, 1);
    });

    var Graphic255 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 79, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[535]);
        this.addTimedChild(instance1);
    });

    var Graphic256 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 79, loop: false });
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[560]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[551]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[543]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[537]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[552]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[544]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[538]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[553]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[545]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[539]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[554]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[546]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[540]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[555]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[547]);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[556]);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[548]);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[541]);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[557]);
        var instance21 = new Graphics()
            .drawCommands(shapes.s01[549]);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[540]);
        var instance25 = new Graphics()
            .drawCommands(shapes.s01[558]);
        var instance24 = new Graphics()
            .drawCommands(shapes.s01[550]);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[539]);
        var instance26 = new Graphics()
            .drawCommands(shapes.s01[538]);
        var instance29 = new Graphics()
            .drawCommands(shapes.s01[555]);
        var instance28 = new Graphics()
            .drawCommands(shapes.s01[546]);
        var instance27 = new Graphics()
            .drawCommands(shapes.s01[542]);
        var instance32 = new Graphics()
            .drawCommands(shapes.s01[554]);
        var instance31 = new Graphics()
            .drawCommands(shapes.s01[545]);
        var instance34 = new Graphics()
            .drawCommands(shapes.s01[553]);
        var instance33 = new Graphics()
            .drawCommands(shapes.s01[544]);
        var instance30 = new Graphics()
            .drawCommands(shapes.s01[537]);
        var instance37 = new Graphics()
            .drawCommands(shapes.s01[559]);
        var instance39 = new Graphics()
            .drawCommands(shapes.s01[552]);
        var instance36 = new Graphics()
            .drawCommands(shapes.s01[543]);
        var instance35 = new Graphics()
            .drawCommands(shapes.s01[538]);
        var instance38 = new Graphics()
            .drawCommands(shapes.s01[539]);
        var instance42 = new Graphics()
            .drawCommands(shapes.s01[551]);
        var instance41 = new Graphics()
            .drawCommands(shapes.s01[544]);
        var instance40 = new Graphics()
            .drawCommands(shapes.s01[540]);
        var instance44 = new Graphics()
            .drawCommands(shapes.s01[545]);
        var instance46 = new Graphics()
            .drawCommands(shapes.s01[552]);
        var instance45 = new Graphics()
            .drawCommands(shapes.s01[546]);
        var instance43 = new Graphics()
            .drawCommands(shapes.s01[541]);
        var instance49 = new Graphics()
            .drawCommands(shapes.s01[553]);
        var instance48 = new Graphics()
            .drawCommands(shapes.s01[547]);
        var instance47 = new Graphics()
            .drawCommands(shapes.s01[540]);
        var instance52 = new Graphics()
            .drawCommands(shapes.s01[554]);
        var instance51 = new Graphics()
            .drawCommands(shapes.s01[548]);
        var instance50 = new Graphics()
            .drawCommands(shapes.s01[539]);
        var instance55 = new Graphics()
            .drawCommands(shapes.s01[555]);
        var instance54 = new Graphics()
            .drawCommands(shapes.s01[549]);
        var instance53 = new Graphics()
            .drawCommands(shapes.s01[538]);
        var instance58 = new Graphics()
            .drawCommands(shapes.s01[556]);
        var instance60 = new Graphics()
            .drawCommands(shapes.s01[557]);
        var instance57 = new Graphics()
            .drawCommands(shapes.s01[550]);
        var instance56 = new Graphics()
            .drawCommands(shapes.s01[542]);
        var instance62 = new Graphics()
            .drawCommands(shapes.s01[558]);
        var instance61 = new Graphics()
            .drawCommands(shapes.s01[546]);
        var instance59 = new Graphics()
            .drawCommands(shapes.s01[537]);
        var instance64 = new Graphics()
            .drawCommands(shapes.s01[545]);
        var instance63 = new Graphics()
            .drawCommands(shapes.s01[538]);
        var instance67 = new Graphics()
            .drawCommands(shapes.s01[555]);
        var instance66 = new Graphics()
            .drawCommands(shapes.s01[544]);
        var instance65 = new Graphics()
            .drawCommands(shapes.s01[539]);
        var instance70 = new Graphics()
            .drawCommands(shapes.s01[554]);
        var instance72 = new Graphics()
            .drawCommands(shapes.s01[553]);
        var instance69 = new Graphics()
            .drawCommands(shapes.s01[543]);
        var instance68 = new Graphics()
            .drawCommands(shapes.s01[540]);
        var instance74 = new Graphics()
            .drawCommands(shapes.s01[559]);
        var instance73 = new Graphics()
            .drawCommands(shapes.s01[544]);
        var instance71 = new Graphics()
            .drawCommands(shapes.s01[541]);
        var instance77 = new Graphics()
            .drawCommands(shapes.s01[552]);
        var instance76 = new Graphics()
            .drawCommands(shapes.s01[545]);
        var instance75 = new Graphics()
            .drawCommands(shapes.s01[540]);
        var instance80 = new Graphics()
            .drawCommands(shapes.s01[551]);
        var instance79 = new Graphics()
            .drawCommands(shapes.s01[546]);
        var instance78 = new Graphics()
            .drawCommands(shapes.s01[539]);
        var instance82 = new Graphics()
            .drawCommands(shapes.s01[547]);
        var instance81 = new Graphics()
            .drawCommands(shapes.s01[538]);
        var instance84 = new Graphics()
            .drawCommands(shapes.s01[548]);
        var instance83 = new Graphics()
            .drawCommands(shapes.s01[542]);
        var instance87 = new Graphics()
            .drawCommands(shapes.s01[552]);
        var instance86 = new Graphics()
            .drawCommands(shapes.s01[549]);
        var instance89 = new Graphics()
            .drawCommands(shapes.s01[553]);
        var instance91 = new Graphics()
            .drawCommands(shapes.s01[554]);
        var instance88 = new Graphics()
            .drawCommands(shapes.s01[550]);
        var instance85 = new Graphics()
            .drawCommands(shapes.s01[537]);
        var instance90 = new Graphics()
            .drawCommands(shapes.s01[538]);
        var instance94 = new Graphics()
            .drawCommands(shapes.s01[555]);
        var instance93 = new Graphics()
            .drawCommands(shapes.s01[546]);
        var instance92 = new Graphics()
            .drawCommands(shapes.s01[539]);
        var instance97 = new Graphics()
            .drawCommands(shapes.s01[556]);
        var instance96 = new Graphics()
            .drawCommands(shapes.s01[545]);
        var instance95 = new Graphics()
            .drawCommands(shapes.s01[540]);
        var instance100 = new Graphics()
            .drawCommands(shapes.s01[557]);
        var instance99 = new Graphics()
            .drawCommands(shapes.s01[544]);
        var instance102 = new Graphics()
            .drawCommands(shapes.s01[558]);
        var instance101 = new Graphics()
            .drawCommands(shapes.s01[543]);
        var instance98 = new Graphics()
            .drawCommands(shapes.s01[541]);
        var instance103 = new Graphics()
            .drawCommands(shapes.s01[540]);
        var instance106 = new Graphics()
            .drawCommands(shapes.s01[555]);
        var instance105 = new Graphics()
            .drawCommands(shapes.s01[544]);
        var instance104 = new Graphics()
            .drawCommands(shapes.s01[539]);
        var instance109 = new Graphics()
            .drawCommands(shapes.s01[554]);
        var instance108 = new Graphics()
            .drawCommands(shapes.s01[545]);
        var instance107 = new Graphics()
            .drawCommands(shapes.s01[538]);
        var instance112 = new Graphics()
            .drawCommands(shapes.s01[553]);
        var instance111 = new Graphics()
            .drawCommands(shapes.s01[546]);
        var instance110 = new Graphics()
            .drawCommands(shapes.s01[542]);
        var instance115 = new Graphics()
            .drawCommands(shapes.s01[559]);
        var instance114 = new Graphics()
            .drawCommands(shapes.s01[547]);
        var instance117 = new Graphics()
            .drawCommands(shapes.s01[552]);
        var instance116 = new Graphics()
            .drawCommands(shapes.s01[548]);
        var instance113 = new Graphics()
            .drawCommands(shapes.s01[537]);
        var instance120 = new Graphics()
            .drawCommands(shapes.s01[551]);
        var instance119 = new Graphics()
            .drawCommands(shapes.s01[549]);
        var instance118 = new Graphics()
            .drawCommands(shapes.s01[538]);
        var instance124 = new Graphics()
            .drawCommands(shapes.s01[552]);
        var instance122 = new Graphics()
            .drawCommands(shapes.s01[550]);
        var instance121 = new Graphics()
            .drawCommands(shapes.s01[539]);
        var instance123 = new Graphics()
            .drawCommands(shapes.s01[540]);
        var instance127 = new Graphics()
            .drawCommands(shapes.s01[553]);
        var instance126 = new Graphics()
            .drawCommands(shapes.s01[546]);
        var instance129 = new Graphics()
            .drawCommands(shapes.s01[554]);
        var instance128 = new Graphics()
            .drawCommands(shapes.s01[545]);
        var instance125 = new Graphics()
            .drawCommands(shapes.s01[541]);
        var instance132 = new Graphics()
            .drawCommands(shapes.s01[555]);
        var instance131 = new Graphics()
            .drawCommands(shapes.s01[544]);
        var instance130 = new Graphics()
            .drawCommands(shapes.s01[540]);
        var instance135 = new Graphics()
            .drawCommands(shapes.s01[556]);
        var instance137 = new Graphics()
            .drawCommands(shapes.s01[557]);
        var instance134 = new Graphics()
            .drawCommands(shapes.s01[543]);
        var instance133 = new Graphics()
            .drawCommands(shapes.s01[539]);
        var instance136 = new Graphics()
            .drawCommands(shapes.s01[538]);
        var instance140 = new Graphics()
            .drawCommands(shapes.s01[558]);
        var instance139 = new Graphics()
            .drawCommands(shapes.s01[544]);
        var instance138 = new Graphics()
            .drawCommands(shapes.s01[542]);
        var instance142 = new Graphics()
            .drawCommands(shapes.s01[545]);
        var instance144 = new Graphics()
            .drawCommands(shapes.s01[555]);
        var instance143 = new Graphics()
            .drawCommands(shapes.s01[546]);
        var instance141 = new Graphics()
            .drawCommands(shapes.s01[537]);
        var instance147 = new Graphics()
            .drawCommands(shapes.s01[554]);
        var instance146 = new Graphics()
            .drawCommands(shapes.s01[547]);
        var instance145 = new Graphics()
            .drawCommands(shapes.s01[538]);
        var instance150 = new Graphics()
            .drawCommands(shapes.s01[553]);
        var instance149 = new Graphics()
            .drawCommands(shapes.s01[548]);
        var instance148 = new Graphics()
            .drawCommands(shapes.s01[539]);
        var instance153 = new Graphics()
            .drawCommands(shapes.s01[559]);
        var instance152 = new Graphics()
            .drawCommands(shapes.s01[549]);
        var instance151 = new Graphics()
            .drawCommands(shapes.s01[540]);
        var instance156 = new Graphics()
            .drawCommands(shapes.s01[552]);
        var instance157 = new Graphics()
            .drawCommands(shapes.s01[551]);
        var instance155 = new Graphics()
            .drawCommands(shapes.s01[550]);
        var instance154 = new Graphics()
            .drawCommands(shapes.s01[541]);
        var instance159 = new Graphics()
            .drawCommands(shapes.s01[546]);
        var instance158 = new Graphics()
            .drawCommands(shapes.s01[540]);
        var instance162 = new Graphics()
            .drawCommands(shapes.s01[552]);
        var instance161 = new Graphics()
            .drawCommands(shapes.s01[545]);
        var instance160 = new Graphics()
            .drawCommands(shapes.s01[539]);
        var instance165 = new Graphics()
            .drawCommands(shapes.s01[553]);
        var instance164 = new Graphics()
            .drawCommands(shapes.s01[544]);
        var instance163 = new Graphics()
            .drawCommands(shapes.s01[538]);
        var instance168 = new Graphics()
            .drawCommands(shapes.s01[554]);
        var instance170 = new Graphics()
            .drawCommands(shapes.s01[555]);
        var instance167 = new Graphics()
            .drawCommands(shapes.s01[543]);
        var instance166 = new Graphics()
            .drawCommands(shapes.s01[542]);
        var instance172 = new Graphics()
            .drawCommands(shapes.s01[556]);
        var instance171 = new Graphics()
            .drawCommands(shapes.s01[544]);
        var instance169 = new Graphics()
            .drawCommands(shapes.s01[537]);
        var instance175 = new Graphics()
            .drawCommands(shapes.s01[557]);
        var instance174 = new Graphics()
            .drawCommands(shapes.s01[545]);
        var instance173 = new Graphics()
            .drawCommands(shapes.s01[538]);
        var instance178 = new Graphics()
            .drawCommands(shapes.s01[558]);
        var instance177 = new Graphics()
            .drawCommands(shapes.s01[546]);
        var instance176 = new Graphics()
            .drawCommands(shapes.s01[539]);
        var instance180 = new Graphics()
            .drawCommands(shapes.s01[547]);
        var instance179 = new Graphics()
            .drawCommands(shapes.s01[540]);
        var instance183 = new Graphics()
            .drawCommands(shapes.s01[555]);
        var instance182 = new Graphics()
            .drawCommands(shapes.s01[548]);
        var instance185 = new Graphics()
            .drawCommands(shapes.s01[554]);
        var instance184 = new Graphics()
            .drawCommands(shapes.s01[549]);
        var instance181 = new Graphics()
            .drawCommands(shapes.s01[541]);
        var instance188 = new Graphics()
            .drawCommands(shapes.s01[553]);
        var instance190 = new Graphics()
            .drawCommands(shapes.s01[559]);
        var instance187 = new Graphics()
            .drawCommands(shapes.s01[550]);
        var instance186 = new Graphics()
            .drawCommands(shapes.s01[540]);
        var instance189 = new Graphics()
            .drawCommands(shapes.s01[539]);
        var instance193 = new Graphics()
            .drawCommands(shapes.s01[551]);
        var instance192 = new Graphics()
            .drawCommands(shapes.s01[543]);
        var instance191 = new Graphics()
            .drawCommands(shapes.s01[537]);
        var instance196 = new Graphics()
            .drawCommands(shapes.s01[552]);
        var instance195 = new Graphics()
            .drawCommands(shapes.s01[544]);
        var instance194 = new Graphics()
            .drawCommands(shapes.s01[538]);
        var instance199 = new Graphics()
            .drawCommands(shapes.s01[553]);
        var instance198 = new Graphics()
            .drawCommands(shapes.s01[545]);
        var instance197 = new Graphics()
            .drawCommands(shapes.s01[539]);
        var instance202 = new Graphics()
            .drawCommands(shapes.s01[554]);
        var instance201 = new Graphics()
            .drawCommands(shapes.s01[546]);
        var instance200 = new Graphics()
            .drawCommands(shapes.s01[540]);
        var instance205 = new Graphics()
            .drawCommands(shapes.s01[555]);
        var instance204 = new Graphics()
            .drawCommands(shapes.s01[547]);
        var instance203 = new Graphics()
            .drawCommands(shapes.s01[541]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[536]);
        this.addTimedChild(instance5)
            .addTimedChild(instance4, 0, 1)
            .addTimedChild(instance3, 0, 1)
            .addTimedChild(instance2, 0, 1)
            .addTimedChild(instance8, 1, 1)
            .addTimedChild(instance7, 1, 1)
            .addTimedChild(instance6, 1, 1)
            .addTimedChild(instance11, 2, 1)
            .addTimedChild(instance10, 2, 1)
            .addTimedChild(instance9, 2, 1)
            .addTimedChild(instance14, 3, 1)
            .addTimedChild(instance13, 3, 1)
            .addTimedChild(instance12, 3, 1)
            .addTimedChild(instance17, 4, 1)
            .addTimedChild(instance16, 4, 1)
            .addTimedChild(instance19, 5, 1)
            .addTimedChild(instance18, 5, 1)
            .addTimedChild(instance15, 4, 2)
            .addTimedChild(instance22, 6, 1)
            .addTimedChild(instance21, 6, 1)
            .addTimedChild(instance20, 6, 1)
            .addTimedChild(instance25, 7, 2)
            .addTimedChild(instance24, 7, 2)
            .addTimedChild(instance23, 7, 1)
            .addTimedChild(instance26, 8, 1)
            .addTimedChild(instance29, 9, 1)
            .addTimedChild(instance28, 9, 1)
            .addTimedChild(instance27, 9, 1)
            .addTimedChild(instance32, 10, 1)
            .addTimedChild(instance31, 10, 1)
            .addTimedChild(instance34, 11, 1)
            .addTimedChild(instance33, 11, 1)
            .addTimedChild(instance30, 10, 2)
            .addTimedChild(instance37, 12, 1)
            .addTimedChild(instance39, 13, 1)
            .addTimedChild(instance36, 12, 2)
            .addTimedChild(instance35, 12, 1)
            .addTimedChild(instance38, 13, 1)
            .addTimedChild(instance42, 14, 2)
            .addTimedChild(instance41, 14, 1)
            .addTimedChild(instance40, 14, 1)
            .addTimedChild(instance44, 15, 1)
            .addTimedChild(instance46, 16, 1)
            .addTimedChild(instance45, 16, 1)
            .addTimedChild(instance43, 15, 2)
            .addTimedChild(instance49, 17, 1)
            .addTimedChild(instance48, 17, 1)
            .addTimedChild(instance47, 17, 1)
            .addTimedChild(instance52, 18, 1)
            .addTimedChild(instance51, 18, 1)
            .addTimedChild(instance50, 18, 1)
            .addTimedChild(instance55, 19, 1)
            .addTimedChild(instance54, 19, 1)
            .addTimedChild(instance53, 19, 1)
            .addTimedChild(instance58, 20, 1)
            .addTimedChild(instance60, 21, 1)
            .addTimedChild(instance57, 20, 2)
            .addTimedChild(instance56, 20, 1)
            .addTimedChild(instance62, 22, 2)
            .addTimedChild(instance61, 22, 1)
            .addTimedChild(instance59, 21, 2)
            .addTimedChild(instance64, 23, 1)
            .addTimedChild(instance63, 23, 1)
            .addTimedChild(instance67, 24, 1)
            .addTimedChild(instance66, 24, 1)
            .addTimedChild(instance65, 24, 1)
            .addTimedChild(instance70, 25, 1)
            .addTimedChild(instance72, 26, 1)
            .addTimedChild(instance69, 25, 2)
            .addTimedChild(instance68, 25, 1)
            .addTimedChild(instance74, 27, 1)
            .addTimedChild(instance73, 27, 1)
            .addTimedChild(instance71, 26, 2)
            .addTimedChild(instance77, 28, 1)
            .addTimedChild(instance76, 28, 1)
            .addTimedChild(instance75, 28, 1)
            .addTimedChild(instance80, 29, 3)
            .addTimedChild(instance79, 29, 1)
            .addTimedChild(instance78, 29, 1)
            .addTimedChild(instance82, 30, 1)
            .addTimedChild(instance81, 30, 1)
            .addTimedChild(instance84, 31, 1)
            .addTimedChild(instance83, 31, 1)
            .addTimedChild(instance87, 32, 1)
            .addTimedChild(instance86, 32, 1)
            .addTimedChild(instance89, 33, 1)
            .addTimedChild(instance91, 34, 1)
            .addTimedChild(instance88, 33, 2)
            .addTimedChild(instance85, 32, 2)
            .addTimedChild(instance90, 34, 1)
            .addTimedChild(instance94, 35, 1)
            .addTimedChild(instance93, 35, 1)
            .addTimedChild(instance92, 35, 1)
            .addTimedChild(instance97, 36, 1)
            .addTimedChild(instance96, 36, 1)
            .addTimedChild(instance95, 36, 1)
            .addTimedChild(instance100, 37, 1)
            .addTimedChild(instance99, 37, 1)
            .addTimedChild(instance102, 38, 2)
            .addTimedChild(instance101, 38, 2)
            .addTimedChild(instance98, 37, 2)
            .addTimedChild(instance103, 39, 1)
            .addTimedChild(instance106, 40, 1)
            .addTimedChild(instance105, 40, 1)
            .addTimedChild(instance104, 40, 1)
            .addTimedChild(instance109, 41, 1)
            .addTimedChild(instance108, 41, 1)
            .addTimedChild(instance107, 41, 1)
            .addTimedChild(instance112, 42, 1)
            .addTimedChild(instance111, 42, 1)
            .addTimedChild(instance110, 42, 1)
            .addTimedChild(instance115, 43, 1)
            .addTimedChild(instance114, 43, 1)
            .addTimedChild(instance117, 44, 1)
            .addTimedChild(instance116, 44, 1)
            .addTimedChild(instance113, 43, 2)
            .addTimedChild(instance120, 45, 2)
            .addTimedChild(instance119, 45, 1)
            .addTimedChild(instance118, 45, 1)
            .addTimedChild(instance124, 47, 1)
            .addTimedChild(instance122, 46, 2)
            .addTimedChild(instance121, 46, 1)
            .addTimedChild(instance123, 47, 1)
            .addTimedChild(instance127, 48, 1)
            .addTimedChild(instance126, 48, 1)
            .addTimedChild(instance129, 49, 1)
            .addTimedChild(instance128, 49, 1)
            .addTimedChild(instance125, 48, 2)
            .addTimedChild(instance132, 50, 1)
            .addTimedChild(instance131, 50, 1)
            .addTimedChild(instance130, 50, 1)
            .addTimedChild(instance135, 51, 1)
            .addTimedChild(instance137, 52, 1)
            .addTimedChild(instance134, 51, 2)
            .addTimedChild(instance133, 51, 1)
            .addTimedChild(instance136, 52, 1)
            .addTimedChild(instance140, 53, 2)
            .addTimedChild(instance139, 53, 1)
            .addTimedChild(instance138, 53, 1)
            .addTimedChild(instance142, 54, 1)
            .addTimedChild(instance144, 55, 1)
            .addTimedChild(instance143, 55, 1)
            .addTimedChild(instance141, 54, 2)
            .addTimedChild(instance147, 56, 1)
            .addTimedChild(instance146, 56, 1)
            .addTimedChild(instance145, 56, 1)
            .addTimedChild(instance150, 57, 1)
            .addTimedChild(instance149, 57, 1)
            .addTimedChild(instance148, 57, 1)
            .addTimedChild(instance153, 58, 1)
            .addTimedChild(instance152, 58, 1)
            .addTimedChild(instance151, 58, 1)
            .addTimedChild(instance156, 59, 1)
            .addTimedChild(instance157, 60, 2)
            .addTimedChild(instance155, 59, 2)
            .addTimedChild(instance154, 59, 2)
            .addTimedChild(instance159, 61, 1)
            .addTimedChild(instance158, 61, 1)
            .addTimedChild(instance162, 62, 1)
            .addTimedChild(instance161, 62, 1)
            .addTimedChild(instance160, 62, 1)
            .addTimedChild(instance165, 63, 1)
            .addTimedChild(instance164, 63, 1)
            .addTimedChild(instance163, 63, 1)
            .addTimedChild(instance168, 64, 1)
            .addTimedChild(instance170, 65, 1)
            .addTimedChild(instance167, 64, 2)
            .addTimedChild(instance166, 64, 1)
            .addTimedChild(instance172, 66, 1)
            .addTimedChild(instance171, 66, 1)
            .addTimedChild(instance169, 65, 2)
            .addTimedChild(instance175, 67, 1)
            .addTimedChild(instance174, 67, 1)
            .addTimedChild(instance173, 67, 1)
            .addTimedChild(instance178, 68, 2)
            .addTimedChild(instance177, 68, 1)
            .addTimedChild(instance176, 68, 1)
            .addTimedChild(instance180, 69, 1)
            .addTimedChild(instance179, 69, 1)
            .addTimedChild(instance183, 70, 1)
            .addTimedChild(instance182, 70, 1)
            .addTimedChild(instance185, 71, 1)
            .addTimedChild(instance184, 71, 1)
            .addTimedChild(instance181, 70, 2)
            .addTimedChild(instance188, 72, 1)
            .addTimedChild(instance190, 73, 1)
            .addTimedChild(instance187, 72, 2)
            .addTimedChild(instance186, 72, 1)
            .addTimedChild(instance189, 73, 1)
            .addTimedChild(instance193, 74, 1)
            .addTimedChild(instance192, 74, 1)
            .addTimedChild(instance191, 74, 1)
            .addTimedChild(instance196, 75, 1)
            .addTimedChild(instance195, 75, 1)
            .addTimedChild(instance194, 75, 1)
            .addTimedChild(instance199, 76, 1)
            .addTimedChild(instance198, 76, 1)
            .addTimedChild(instance197, 76, 1)
            .addTimedChild(instance202, 77, 1)
            .addTimedChild(instance201, 77, 1)
            .addTimedChild(instance200, 77, 1)
            .addTimedChild(instance205, 78, 1)
            .addTimedChild(instance204, 78, 1)
            .addTimedChild(instance203, 78, 1)
            .addTimedChild(instance1);
    });

    var Graphic257 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 79, loop: false });
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[567])
            .setTransform(-358.5, -402.05, 0.959);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[566])
            .setTransform(-373.6, -403.45);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[567])
            .setTransform(543.6, -402.05, 0.959, 1, 0, 0, 3.142);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[566]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[564]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[565]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[564]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[565]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[564]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[563]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[562]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[561]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[561]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[561]);
        this.addTimedChild(instance8)
            .addTimedChild(instance7)
            .addTimedChild(instance6)
            .addTimedChild(instance5, 0, 79, {
                "0": {
                    x: 558.7,
                    y: -403.45,
                    ky: 3.142
                }
            })
            .addTimedChild(instance4, 0, 58)
            .addTimedChild(instance9, 58, 1)
            .addTimedChild(instance11, 59, 2)
            .addTimedChild(instance12, 61, 1)
            .addTimedChild(instance14, 62, 17)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1, 0, 58)
            .addTimedChild(instance10, 59, 2)
            .addTimedChild(instance13, 62, 17);
    });

    var Graphic262 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 28, loop: false });

    });

    var Graphic261 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 47, loop: false });

    });

    var Graphic260 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 33, loop: false });

    });

    var Graphic258 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 32, loop: false });

    });

    var Graphic259 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 79, loop: false });
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[605]);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[603])
            .setTransform(-99.35, -0.7);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[602])
            .setTransform(-54.4, -29.85, 1, 1, -0.005);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[602])
            .setTransform(-82.5, -27.6, 1, 1, -0.005);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[602])
            .setTransform(-93.4, -24.2, 1, 1, -0.005);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[601])
            .setTransform(-4.2, -27.9, 1, 1, -0.122);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[604]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[603]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[602])
            .setTransform(38.55, -39.15, 1, 1, -0.005);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[602])
            .setTransform(44.9, -29.15, 1, 1, -0.005);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[602])
            .setTransform(16.8, -26.9, 1, 1, -0.005);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[602])
            .setTransform(5.9, -23.5, 1, 1, -0.005);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[601]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[597]);
        var instance24 = new Graphics()
            .drawCommands(shapes.s01[598]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[592]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[580]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[576]);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[587]);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[584]);
        var instance21 = new Graphics()
            .drawCommands(shapes.s01[581]);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[577]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[574]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[572]);
        var instance35 = new Graphics()
            .drawCommands(shapes.s01[599]);
        var instance34 = new Graphics()
            .drawCommands(shapes.s01[596]);
        var instance33 = new Graphics()
            .drawCommands(shapes.s01[594]);
        var instance32 = new Graphics()
            .drawCommands(shapes.s01[593]);
        var instance31 = new Graphics()
            .drawCommands(shapes.s01[590]);
        var instance30 = new Graphics()
            .drawCommands(shapes.s01[588]);
        var instance29 = new Graphics()
            .drawCommands(shapes.s01[585]);
        var instance28 = new Graphics()
            .drawCommands(shapes.s01[582]);
        var instance27 = new Graphics()
            .drawCommands(shapes.s01[578]);
        var instance26 = new Graphics()
            .drawCommands(shapes.s01[575]);
        var instance25 = new Graphics()
            .drawCommands(shapes.s01[573]);
        var instance47 = new Graphics()
            .drawCommands(shapes.s01[600]);
        var instance46 = new Graphics()
            .drawCommands(shapes.s01[595]);
        var instance45 = new Graphics()
            .drawCommands(shapes.s01[588]);
        var instance44 = new Graphics()
            .drawCommands(shapes.s01[591]);
        var instance43 = new Graphics()
            .drawCommands(shapes.s01[589]);
        var instance42 = new Graphics()
            .drawCommands(shapes.s01[586]);
        var instance41 = new Graphics()
            .drawCommands(shapes.s01[583]);
        var instance40 = new Graphics()
            .drawCommands(shapes.s01[579]);
        var instance39 = new Graphics()
            .drawCommands(shapes.s01[574]);
        var instance38 = new Graphics()
            .drawCommands(shapes.s01[572]);
        var instance37 = new Graphics()
            .drawCommands(shapes.s01[571]);
        var instance36 = new Graphics()
            .drawCommands(shapes.s01[570]);
        this.addTimedChild(instance19)
            .addTimedChild(instance18)
            .addTimedChild(instance17)
            .addTimedChild(instance16)
            .addTimedChild(instance15)
            .addTimedChild(instance14)
            .addTimedChild(instance13)
            .addTimedChild(instance12)
            .addTimedChild(instance11)
            .addTimedChild(instance10)
            .addTimedChild(instance9)
            .addTimedChild(instance8)
            .addTimedChild(instance7, 0, 79, {
                "0": {
                    x: 95.15,
                    y: -27.2,
                    r: -0.122
                }
            })
            .addTimedChild(instance6, 0, 19)
            .addTimedChild(instance24, 19, 15)
            .addTimedChild(instance5, 0, 34)
            .addTimedChild(instance4, 0, 19)
            .addTimedChild(instance3, 0, 19)
            .addTimedChild(instance23, 19, 15)
            .addTimedChild(instance22, 19, 15)
            .addTimedChild(instance21, 19, 15)
            .addTimedChild(instance20, 19, 15)
            .addTimedChild(instance2, 0, 34)
            .addTimedChild(instance1, 0, 34)
            .addTimedChild(instance35, 34, 19)
            .addTimedChild(instance34, 34, 19)
            .addTimedChild(instance33, 34, 19)
            .addTimedChild(instance32, 34, 19)
            .addTimedChild(instance31, 34, 19)
            .addTimedChild(instance30, 34, 19)
            .addTimedChild(instance29, 34, 19)
            .addTimedChild(instance28, 34, 19)
            .addTimedChild(instance27, 34, 19)
            .addTimedChild(instance26, 34, 19)
            .addTimedChild(instance25, 34, 19)
            .addTimedChild(instance47, 53, 26)
            .addTimedChild(instance46, 53, 26)
            .addTimedChild(instance45, 53, 26)
            .addTimedChild(instance44, 53, 26)
            .addTimedChild(instance43, 53, 26)
            .addTimedChild(instance42, 53, 26)
            .addTimedChild(instance41, 53, 26)
            .addTimedChild(instance40, 53, 26)
            .addTimedChild(instance39, 53, 26)
            .addTimedChild(instance38, 53, 26)
            .addTimedChild(instance37, 53, 26)
            .addTimedChild(instance36, 53, 26);
    });

    var Graphic326 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 79, loop: false });
        var instance26 = new Graphics()
            .drawCommands(shapes.s01[606]);
        var instance25 = new Graphic259(MovieClip.SYNCHED);
        var instance24 = new Graphic258(MovieClip.SYNCHED);
        var instance31 = new Graphic260(MovieClip.SYNCHED);
        var instance43 = new Graphic261(MovieClip.SYNCHED);
        var instance51 = new Graphic262(MovieClip.SYNCHED);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[569]);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[568]);
        var instance21 = new Graphic257(MovieClip.SYNCHED)
            .setTransform(651.1, -452.8, 0.772, 0.772);
        var instance20 = new Graphic256(MovieClip.SYNCHED)
            .setTransform(573.6, 300.75);
        var instance19 = new Graphic255(MovieClip.SYNCHED)
            .setTransform(889.6, -502.45);
        var instance18 = new Graphic254(MovieClip.SYNCHED)
            .setTransform(-733.6, -517.65);
        var instance17 = new Graphic253(MovieClip.SYNCHED)
            .setTransform(-890.4, 229.55, 1, 1, 1.571);
        var instance16 = new Graphic252(MovieClip.SYNCHED)
            .setTransform(182.4, 478.35);
        var instance15 = new Graphic251(MovieClip.SYNCHED)
            .setTransform(742.4, 321.15);
        var instance14 = new Graphic250(MovieClip.SYNCHED)
            .setTransform(693.15, 346.25);
        var instance13 = new Graphic249(MovieClip.SYNCHED)
            .setTransform(-927.2, -96.85);
        var instance12 = new Graphic248(MovieClip.SYNCHED)
            .setTransform(-928, -175.25);
        var instance11 = new Graphic247(MovieClip.SYNCHED)
            .setTransform(-257.2, 476.75);
        var instance10 = new Graphic246(MovieClip.SYNCHED)
            .setTransform(-73.2, 473.15);
        var instance9 = new Graphic245(MovieClip.SYNCHED)
            .setTransform(558.5, -502.45);
        var instance8 = new Graphic244(MovieClip.SYNCHED)
            .setTransform(283.2, -518.45);
        var instance7 = new Graphic243(MovieClip.SYNCHED)
            .setTransform(746.8, 359.95);
        var instance6 = new Graphic242(MovieClip.SYNCHED)
            .setTransform(540.35, -59.65);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[457]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[453]);
        var instance29 = new Graphics()
            .drawCommands(shapes.s01[454]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[433]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[439]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[433]);
        var instance28 = new Graphics()
            .drawCommands(shapes.s01[440]);
        var instance27 = new Graphics()
            .drawCommands(shapes.s01[434]);
        var instance30 = new Graphics()
            .drawCommands(shapes.s01[435]);
        var instance32 = new Graphics()
            .drawCommands(shapes.s01[436]);
        var instance33 = new Graphics()
            .drawCommands(shapes.s01[437]);
        var instance35 = new Graphics()
            .drawCommands(shapes.s01[433]);
        var instance34 = new Graphics()
            .drawCommands(shapes.s01[433]);
        var instance36 = new Graphics()
            .drawCommands(shapes.s01[438]);
        var instance40 = new Graphics()
            .drawCommands(shapes.s01[455]);
        var instance39 = new Graphics()
            .drawCommands(shapes.s01[443]);
        var instance41 = new Graphics()
            .drawCommands(shapes.s01[444]);
        var instance42 = new Graphics()
            .drawCommands(shapes.s01[445]);
        var instance44 = new Graphics()
            .drawCommands(shapes.s01[446]);
        var instance45 = new Graphics()
            .drawCommands(shapes.s01[447]);
        var instance46 = new Graphics()
            .drawCommands(shapes.s01[448]);
        var instance47 = new Graphics()
            .drawCommands(shapes.s01[449]);
        var instance48 = new Graphics()
            .drawCommands(shapes.s01[450]);
        var instance49 = new Graphics()
            .drawCommands(shapes.s01[451]);
        var instance50 = new Graphics()
            .drawCommands(shapes.s01[452]);
        var instance38 = new Graphics()
            .drawCommands(shapes.s01[441]);
        var instance54 = new Graphics()
            .drawCommands(shapes.s01[456]);
        var instance53 = new Graphics()
            .drawCommands(shapes.s01[433]);
        var instance52 = new Graphics()
            .drawCommands(shapes.s01[442]);
        var instance37 = new Graphics()
            .drawCommands(shapes.s01[433]);
        this.addTimedChild(instance26)
            .addTimedChild(instance25, 0, 79, {
                "0": {
                    x: -241.8,
                    y: 358.6
                }
            })
            .addTimedChild(instance24, 0, 32, {
                "0": {
                    x: -193.2,
                    y: -21.75,
                    sx: 0.39,
                    sy: 0.39
                },
                "19": {
                    x: -193.247,
                    y: 103.15
                },
                "20": {
                    y: 498
                },
                "21": {
                    y: 892.85
                },
                "22": {
                    x: -193.2,
                    y: 1017.75
                }
            })
            .addTimedChild(instance31, 18, 33, {
                "18": {
                    x: -194.5,
                    y: -1024.55,
                    sx: 0.243,
                    sy: 0.243
                },
                "19": {
                    x: -194.497,
                    y: -909.734
                },
                "20": {
                    y: -546.884
                },
                "21": {
                    x: -194.535,
                    y: -184.072
                },
                "22": {
                    x: -194.5,
                    y: -69.25
                },
                "33": {
                    x: -194.497,
                    y: 54.301
                },
                "34": {
                    x: -194.509,
                    y: 444.847
                },
                "35": {
                    y: 835.397
                },
                "36": {
                    x: -194.5,
                    y: 958.9
                }
            })
            .addTimedChild(instance43, 32, 47, {
                "32": {
                    x: -200.95,
                    y: -984.9,
                    sx: 0.194,
                    sy: 0.194
                },
                "33": {
                    x: -200.997,
                    y: -867.735
                },
                "34": {
                    x: -200.965,
                    y: -497.325
                },
                "35": {
                    x: -200.981,
                    y: -126.85
                },
                "36": {
                    x: -200.95,
                    y: -9.6
                },
                "52": {
                    x: -200.997,
                    y: 104.8
                },
                "53": {
                    x: -200.965,
                    y: 466.599
                },
                "54": {
                    y: 828.449
                },
                "55": {
                    x: -200.95,
                    y: 942.95
                }
            })
            .addTimedChild(instance51, 51, 28, {
                "51": {
                    x: -194,
                    y: -1010.45,
                    sx: 0.341,
                    sy: 0.341
                },
                "52": {
                    x: -193.997,
                    y: -884.485
                },
                "53": {
                    x: -194.006,
                    y: -486.431
                },
                "54": {
                    y: -88.281
                },
                "55": {
                    x: -194,
                    y: 37.65
                }
            })
            .addTimedChild(instance23)
            .addTimedChild(instance22)
            .addTimedChild(instance21)
            .addTimedChild(instance20)
            .addTimedChild(instance19)
            .addTimedChild(instance18)
            .addTimedChild(instance17)
            .addTimedChild(instance16)
            .addTimedChild(instance15)
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
            .addTimedChild(instance4, 0, 17)
            .addTimedChild(instance29, 17, 13)
            .addTimedChild(instance3, 0, 30, {
                "0": {
                    x: -1862.3,
                    y: -119.9,
                    sx: 3.275,
                    sy: 0.805
                },
                "17": {
                    x: -19041.699,
                    sx: 23.817
                },
                "18": {
                    x: -11700.25,
                    sx: 15.032
                },
                "19": {
                    x: -9951.25,
                    sx: 12.94
                },
                "20": {
                    x: -7881.9,
                    sx: 10.463
                },
                "21": {
                    x: -4711.95,
                    sx: 6.67
                }
            })
            .addTimedChild(instance2, 0, 17)
            .addTimedChild(instance1, 0, 17)
            .addTimedChild(instance28, 17, 13)
            .addTimedChild(instance27, 17, 1)
            .addTimedChild(instance30, 18, 1)
            .addTimedChild(instance32, 19, 1)
            .addTimedChild(instance33, 20, 1)
            .addTimedChild(instance35, 21, 1, {
                "21": {
                    x: -2640.6,
                    y: -51.9,
                    sx: 4.156,
                    sy: 0.854
                }
            })
            .addTimedChild(instance34, 21, 1, {
                "21": {
                    x: -2491.05,
                    y: -7.85,
                    sx: 3.977,
                    sy: 0.854
                }
            })
            .addTimedChild(instance36, 22, 8)
            .addTimedChild(instance40, 30, 23)
            .addTimedChild(instance39, 30, 1)
            .addTimedChild(instance41, 31, 1)
            .addTimedChild(instance42, 32, 1)
            .addTimedChild(instance44, 33, 1)
            .addTimedChild(instance45, 34, 1)
            .addTimedChild(instance46, 35, 1)
            .addTimedChild(instance47, 36, 1)
            .addTimedChild(instance48, 37, 1)
            .addTimedChild(instance49, 38, 1)
            .addTimedChild(instance50, 39, 14)
            .addTimedChild(instance38, 30, 23)
            .addTimedChild(instance54, 53, 26)
            .addTimedChild(instance53, 53, 26, {
                "53": {
                    x: -22578.1,
                    y: -119.9,
                    sx: 28.083,
                    sy: 0.805
                },
                "54": {
                    x: -12396.4,
                    sx: 15.89
                },
                "55": {
                    x: -10461.35,
                    sx: 13.573
                },
                "56": {
                    x: -7498.9,
                    sx: 10.028
                }
            })
            .addTimedChild(instance52, 53, 26)
            .addTimedChild(instance37, 30, 49, {
                "30": {
                    x: -12222.65,
                    y: -19.55,
                    sx: 15.61,
                    sy: 0.854
                },
                "31": {
                    x: -9473.9,
                    sx: 12.321
                },
                "32": {
                    x: -7438.1,
                    sx: 9.885
                },
                "33": {
                    x: -5130.8,
                    sx: 7.124
                },
                "34": {
                    x: -2392.3,
                    sx: 3.849
                },
                "53": {
                    x: -12045.35,
                    sx: 15.404
                },
                "54": {
                    x: -9821.9,
                    sx: 12.743
                },
                "55": {
                    x: -7835.95,
                    sx: 10.367
                },
                "56": {
                    x: -5746,
                    sx: 7.867
                },
                "57": {
                    x: -3142.75,
                    sx: 4.752
                }
            });
    });

    var Graphic327 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[80]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[79]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[71]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[70]);
        this.addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic275 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[608]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[607]);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic276 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance1 = new Sprite(fromFrame("REPLACE_HEADSET"))
            .setTransform(0, 0, 0.5, 0.5);
        this.addTimedChild(instance1);
    });

    var Graphic277 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[74]);
        this.addTimedChild(instance1);
    });

    var Graphic278 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[73])
            .setTransform(-657.05, -461.95);
        this.addTimedChild(instance1);
    });

    var Graphic279 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[188])
            .setTransform(-497.15, -407.2);
        this.addTimedChild(instance1);
    });

    var Graphic264 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[153])
            .setTransform(-466.8, -453.85);
        this.addTimedChild(instance1);
    });

    var Graphic265 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[154])
            .setTransform(-504.35, -453.65);
        this.addTimedChild(instance1);
    });

    var Graphic266 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[155])
            .setTransform(-458.45, -480.9, 0.972);
        this.addTimedChild(instance1);
    });

    var Graphic267 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[155])
            .setTransform(-458.45, -480.9, 0.972);
        this.addTimedChild(instance1);
    });

    var Graphic268 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[161])
            .setTransform(-386.35, -557.05, 1, 1, 0.174);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[160])
            .setTransform(-385.25, -559.2, 1, 1, 0.174);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[159])
            .setTransform(-486.6, -478.35);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[158])
            .setTransform(-455.15, -505.5, 1, 1, 0.06);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[157])
            .setTransform(-588.15, -407.35, 1.216, 0.851);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[156])
            .setTransform(-596.45, -406.55, 1.239, 0.851);
        this.addTimedChild(instance6)
            .addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic263 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[33]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[32]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[408]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[30]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[173]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[419]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[413]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[405]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[422]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[416]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[409]);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[33]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[32]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[408]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[30]);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[419]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[413]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[405]);
        var instance21 = new Graphics()
            .drawCommands(shapes.s01[421]);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[415]);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[407]);
        var instance24 = new Graphics()
            .drawCommands(shapes.s01[419]);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[413]);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[405]);
        var instance28 = new Graphics()
            .drawCommands(shapes.s01[33])
            .setTransform(-478.4, -525.85);
        var instance27 = new Graphics()
            .drawCommands(shapes.s01[32])
            .setTransform(0, 2.5);
        var instance26 = new Graphics()
            .drawCommands(shapes.s01[408])
            .setTransform(-478.4, -525.85);
        var instance25 = new Graphics()
            .drawCommands(shapes.s01[30])
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

    var Graphic269 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance1 = new Graphic263(MovieClip.SYNCHED);
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

    var Graphic270 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[181]);
        this.addTimedChild(instance1);
    });

    var Graphic271 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[184])
            .setTransform(-368.7, -483.9, 0.959);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[183])
            .setTransform(-383.8, -485.3);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic272 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[151]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[150])
            .setTransform(-585.65, -483.25);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic280 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance9 = new Graphic272(MovieClip.SYNCHED)
            .setTransform(105.5, -122.2);
        var instance8 = new Graphic271(MovieClip.SYNCHED)
            .setTransform(-96.35, -120.15);
        var instance7 = new Graphic270(MovieClip.SYNCHED)
            .setTransform(4.15, -0.3);
        var instance6 = new Graphic269(MovieClip.SYNCHED)
            .setTransform(-4.65, -73.2);
        var instance5 = new Graphic268(MovieClip.SYNCHED)
            .setTransform(-11.3, -127.5);
        var instance4 = new Graphic267(MovieClip.SYNCHED)
            .setTransform(12.6, -125.95);
        var instance3 = new Graphic266(MovieClip.SYNCHED)
            .setTransform(-27.85, -125.1);
        var instance2 = new Graphic265(MovieClip.SYNCHED)
            .setTransform(8.55, -151.8);
        var instance1 = new Graphic264(MovieClip.SYNCHED)
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

    var Graphic273 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[192])
            .setTransform(-17.65, 14.8, 0.95);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[191])
            .setTransform(-470, -630.85, 0.95);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[190])
            .setTransform(-470, -630.85, 0.95);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[189])
            .setTransform(-470, -630.85, 0.95);
        this.addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic274 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[197])
            .setTransform(14.05, 13.35, 0.95);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[196])
            .setTransform(-438.25, -629.9, 0.95);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[195])
            .setTransform(-438.25, -629.9, 0.95);
        this.addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic281 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[200]);
        var instance2 = new Graphic274(MovieClip.SYNCHED)
            .setTransform(-9.2, -101.15);
        var instance1 = new Graphic273(MovieClip.SYNCHED)
            .setTransform(22.55, -100.2);
        this.addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic282 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[201])
            .setTransform(-461.15, -639, 0.96);
        this.addTimedChild(instance1);
    });

    var Graphic283 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[206]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[204]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[203]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[202]);
        this.addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic284 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[119]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[118]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[117]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[116]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[115]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[114]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[113]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[106]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[105]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[104]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[112]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[650]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[649]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[648]);
        var instance25 = new Graphics()
            .drawCommands(shapes.s01[119])
            .setTransform(-0.6, 2.45, 1, 1, 0, 0.484, 2.657);
        var instance24 = new Graphics()
            .drawCommands(shapes.s01[118])
            .setTransform(-4.3, 1.95, 1, 1, 0, 0.618, 2.523);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[117])
            .setTransform(4.25, 33.75, 1.12, 1.056, -0.238);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[116])
            .setTransform(5.75, 34.95, 1, 1, 0.01);
        var instance21 = new Graphics()
            .drawCommands(shapes.s01[115])
            .setTransform(6.05, 34.9, 1, 1, 0.257);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[114])
            .setTransform(1.05, 40.25, 1, 1, 0.344);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[113])
            .setTransform(34.1, -985.65, 1, 1, 0.684);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[106])
            .setTransform(-464.95, -886.85, 1, 1, 0.178);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[105])
            .setTransform(-538.25, -842.15, 1, 1, 0.091);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[104])
            .setTransform(-668.55, -792.3, 1.087);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[112])
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

    var Graphic285 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[119]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[118]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[117]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[116]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[115]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[114]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[113]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[106]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[105]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[104]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[112]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[650]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[649]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[648]);
        var instance25 = new Graphics()
            .drawCommands(shapes.s01[119])
            .setTransform(-0.6, 2.45, 1, 1, 0, 0.484, 2.657);
        var instance24 = new Graphics()
            .drawCommands(shapes.s01[118])
            .setTransform(-4.3, 1.95, 1, 1, 0, 0.618, 2.523);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[117])
            .setTransform(4.25, 33.75, 1.12, 1.056, -0.238);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[116])
            .setTransform(5.75, 34.95, 1, 1, 0.01);
        var instance21 = new Graphics()
            .drawCommands(shapes.s01[115])
            .setTransform(6.05, 34.9, 1, 1, 0.257);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[114])
            .setTransform(1.05, 40.25, 1, 1, 0.344);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[113])
            .setTransform(34.1, -985.65, 1, 1, 0.684);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[106])
            .setTransform(-464.95, -886.85, 1, 1, 0.178);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[105])
            .setTransform(-538.25, -842.15, 1, 1, 0.091);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[104])
            .setTransform(-668.55, -792.3, 1.087);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[112])
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

    var Graphic328 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance16 = new Graphic285(MovieClip.SYNCHED);
        var instance15 = new Graphic284(MovieClip.SYNCHED);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[642]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[636]);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[643]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[637]);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[644]);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[638]);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[645]);
        var instance21 = new Graphics()
            .drawCommands(shapes.s01[639]);
        var instance24 = new Graphics()
            .drawCommands(shapes.s01[646]);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[640]);
        var instance26 = new Graphics()
            .drawCommands(shapes.s01[644]);
        var instance25 = new Graphics()
            .drawCommands(shapes.s01[638]);
        var instance28 = new Graphics()
            .drawCommands(shapes.s01[643]);
        var instance27 = new Graphics()
            .drawCommands(shapes.s01[637]);
        var instance30 = new Graphics()
            .drawCommands(shapes.s01[647]);
        var instance29 = new Graphics()
            .drawCommands(shapes.s01[641]);
        var instance32 = new Graphics()
            .drawCommands(shapes.s01[642])
            .setTransform(-38.1, -50, 1, 1, 0.131);
        var instance31 = new Graphics()
            .drawCommands(shapes.s01[636])
            .setTransform(50.55, -56.1, 1, 1, -0.165);
        var instance12 = new Graphic283(MovieClip.SYNCHED)
            .setTransform(18.05, -308.3);
        var instance11 = new Graphic282(MovieClip.SYNCHED)
            .setTransform(27.05, -395.6);
        var instance10 = new Graphic281(MovieClip.SYNCHED)
            .setTransform(19.95, -303.6);
        var instance9 = new Graphic280(MovieClip.SYNCHED)
            .setTransform(26.75, -429.2);
        var instance8 = new Graphic279(MovieClip.SYNCHED)
            .setTransform(42.1, -631.9);
        var instance7 = new Graphic278(MovieClip.SYNCHED);
        var instance6 = new Graphic277(MovieClip.SYNCHED);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[611]);
        var instance33 = new Graphics()
            .drawCommands(shapes.s01[612]);
        var instance34 = new Graphics()
            .drawCommands(shapes.s01[613]);
        var instance35 = new Graphics()
            .drawCommands(shapes.s01[614]);
        var instance36 = new Graphics()
            .drawCommands(shapes.s01[615]);
        var instance37 = new Graphics()
            .drawCommands(shapes.s01[616]);
        var instance38 = new Graphics()
            .drawCommands(shapes.s01[617]);
        var instance39 = new Graphics()
            .drawCommands(shapes.s01[618]);
        var instance40 = new Graphics()
            .drawCommands(shapes.s01[619]);
        var instance41 = new Graphics()
            .drawCommands(shapes.s01[620]);
        var instance42 = new Graphics()
            .drawCommands(shapes.s01[621]);
        var instance43 = new Graphics()
            .drawCommands(shapes.s01[622]);
        var instance44 = new Graphics()
            .drawCommands(shapes.s01[623]);
        var instance45 = new Graphics()
            .drawCommands(shapes.s01[624]);
        var instance46 = new Graphics()
            .drawCommands(shapes.s01[625]);
        var instance47 = new Graphics()
            .drawCommands(shapes.s01[626]);
        var instance48 = new Graphics()
            .drawCommands(shapes.s01[627]);
        var instance49 = new Graphics()
            .drawCommands(shapes.s01[628]);
        var instance50 = new Graphics()
            .drawCommands(shapes.s01[629]);
        var instance51 = new Graphics()
            .drawCommands(shapes.s01[630]);
        var instance52 = new Graphics()
            .drawCommands(shapes.s01[631]);
        var instance53 = new Graphics()
            .drawCommands(shapes.s01[632]);
        var instance54 = new Graphics()
            .drawCommands(shapes.s01[633]);
        var instance55 = new Graphics()
            .drawCommands(shapes.s01[634]);
        var instance56 = new Graphics()
            .drawCommands(shapes.s01[635]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[610]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[609]);
        var instance2 = new Graphic276(MovieClip.SYNCHED)
            .setTransform(-120.5, -800.75);
        var instance1 = new Graphic275(MovieClip.SYNCHED)
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

    var Graphic329 = MovieClip.extend(function (mode) {
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

    var Graphic330 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 163, loop: false });
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[7]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[6]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[5]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[4]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[3]);
        this.addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic312 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 83, loop: false });
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[18])
            .setTransform(-3.45, -28.35);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[17])
            .setTransform(17.2, 0.1, 1, 1, 0.714);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[16])
            .setTransform(10.85, -42.1, 1, 1, -0.069);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[15])
            .setTransform(0.55, -37.45);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[14])
            .setTransform(-3.45, -28.35);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[13])
            .setTransform(-3.45, -28.35);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[12])
            .setTransform(11.05, 34.75, 1, 1, 1.207);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[11])
            .setTransform(-3.45, -28.35);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[10])
            .setTransform(-3.45, -28.35);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[9])
            .setTransform(-3.45, -28.35);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[8])
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

    var Graphic288 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 8, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[21])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic299 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 4, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[21])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic301 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 8, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[21])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic303 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 13, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[21])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic305 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 36, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[21])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic307 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 8, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[21])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic289 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 8, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[21])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic300 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 4, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[21])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic302 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 8, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[21])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic304 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 13, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[21])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic306 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 36, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[21])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic308 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 8, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[21])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic290 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 87, loop: false });
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[25]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[24]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[22]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[22]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[23]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[22]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[22]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[23]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[22]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[22]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[23]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[22]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[22]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[23]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[22]);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[22]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[23]);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[22])
            .setTransform(-1289.25, -221.05);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[22])
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

    var Graphic291 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 87, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[26])
            .setTransform(-1303.95, -197.85);
        this.addTimedChild(instance1);
    });

    var Graphic292 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 87, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[27])
            .setTransform(-1268.05, -199.05);
        this.addTimedChild(instance1);
    });

    var Graphic286 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 87, loop: false });
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[46]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[40]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[36]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[47]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[41]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[37]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[35]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[49]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[43]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[38]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[33]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[32]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[31]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[30]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[46]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[40]);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[36]);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[48]);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[45]);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[42]);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[46]);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[40]);
        var instance21 = new Graphics()
            .drawCommands(shapes.s01[36]);
        var instance27 = new Graphics()
            .drawCommands(shapes.s01[33]);
        var instance26 = new Graphics()
            .drawCommands(shapes.s01[32]);
        var instance25 = new Graphics()
            .drawCommands(shapes.s01[31]);
        var instance24 = new Graphics()
            .drawCommands(shapes.s01[30]);
        var instance28 = new Graphics()
            .drawCommands(shapes.s01[34]);
        var instance29 = new Graphics()
            .drawCommands(shapes.s01[35]);
        var instance30 = new Graphics()
            .drawCommands(shapes.s01[34]);
        var instance33 = new Graphics()
            .drawCommands(shapes.s01[46]);
        var instance32 = new Graphics()
            .drawCommands(shapes.s01[40]);
        var instance31 = new Graphics()
            .drawCommands(shapes.s01[36]);
        var instance37 = new Graphics()
            .drawCommands(shapes.s01[33]);
        var instance36 = new Graphics()
            .drawCommands(shapes.s01[32]);
        var instance35 = new Graphics()
            .drawCommands(shapes.s01[31]);
        var instance34 = new Graphics()
            .drawCommands(shapes.s01[30]);
        var instance38 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance41 = new Graphics()
            .drawCommands(shapes.s01[46]);
        var instance40 = new Graphics()
            .drawCommands(shapes.s01[40]);
        var instance39 = new Graphics()
            .drawCommands(shapes.s01[36]);
        var instance42 = new Graphics()
            .drawCommands(shapes.s01[34]);
        var instance43 = new Graphics()
            .drawCommands(shapes.s01[35]);
        var instance44 = new Graphics()
            .drawCommands(shapes.s01[34]);
        var instance45 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance48 = new Graphics()
            .drawCommands(shapes.s01[46]);
        var instance47 = new Graphics()
            .drawCommands(shapes.s01[40]);
        var instance46 = new Graphics()
            .drawCommands(shapes.s01[36]);
        var instance51 = new Graphics()
            .drawCommands(shapes.s01[47]);
        var instance50 = new Graphics()
            .drawCommands(shapes.s01[41]);
        var instance49 = new Graphics()
            .drawCommands(shapes.s01[37]);
        var instance52 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance55 = new Graphics()
            .drawCommands(shapes.s01[46]);
        var instance54 = new Graphics()
            .drawCommands(shapes.s01[40]);
        var instance53 = new Graphics()
            .drawCommands(shapes.s01[36]);
        var instance56 = new Graphics()
            .drawCommands(shapes.s01[34]);
        var instance57 = new Graphics()
            .drawCommands(shapes.s01[35]);
        var instance58 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance59 = new Graphics()
            .drawCommands(shapes.s01[29]);
        var instance60 = new Graphics()
            .drawCommands(shapes.s01[28]);
        var instance61 = new Graphics()
            .drawCommands(shapes.s01[29]);
        var instance62 = new Graphics()
            .drawCommands(shapes.s01[28])
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

    var Graphic293 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 87, loop: false });
        var instance1 = new Graphic286(MovieClip.SYNCHED);
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

    var Graphic294 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 87, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[51]);
        this.addTimedChild(instance1);
    });

    var Graphic295 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 87, loop: false });
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[55])
            .setTransform(-1336.85, -168.4, 1.033, 1.033);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[55])
            .setTransform(-1357.3, -164.4, 1.033, 1.033);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[55])
            .setTransform(-1317.25, -167, 1.033, 1.033);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[55])
            .setTransform(-1316.95, -139.1, 0.978, 0.978);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[55])
            .setTransform(-1265.9, -139.25, 1.033, 1.033);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[55])
            .setTransform(-1170.45, -142.3, 0.948, 0.948);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[55])
            .setTransform(-1185.7, -149.8, 0.948, 0.948);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[55])
            .setTransform(-1177.25, -135.65, 0.881, 0.881);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[55])
            .setTransform(-1201.55, -112.45, 0.881, 0.881);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[55])
            .setTransform(-1213, -97.9, 0.881, 0.881);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[55])
            .setTransform(-1255.65, -125.65, 1.033, 1.033);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[54]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[53]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[52])
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

    var Graphic287 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 87, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[57])
            .setTransform(-1294.55, -252.5);
        this.addTimedChild(instance1);
    });

    var Graphic296 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 87, loop: false });
        var instance2 = new Graphic287(MovieClip.SYNCHED)
            .setTransform(6.55, -82.85);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[56]);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic297 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 87, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[59]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[58]);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic298 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 87, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[61]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[60]);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic309 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 87, loop: false });
        var instance11 = new Graphic298(MovieClip.SYNCHED)
            .setTransform(-61.45, -103.85);
        var instance10 = new Graphic297(MovieClip.SYNCHED)
            .setTransform(81.05, -103.55);
        var instance9 = new Graphic296(MovieClip.SYNCHED)
            .setTransform(0.05);
        var instance8 = new Graphic295(MovieClip.SYNCHED)
            .setTransform(6.7, -172.05);
        var instance7 = new Graphic294(MovieClip.SYNCHED)
            .setTransform(-6.35, -91.75);
        var instance6 = new Graphic293(MovieClip.SYNCHED)
            .setTransform(-2.6, -68.75);
        var instance5 = new Graphic292(MovieClip.SYNCHED);
        var instance4 = new Graphic291(MovieClip.SYNCHED);
        var instance3 = new Graphic290(MovieClip.SYNCHED);
        var instance2 = new Graphic289(MovieClip.SYNCHED);
        var instance1 = new Graphic288(MovieClip.SYNCHED);
        var instance13 = new Graphic300(MovieClip.SYNCHED);
        var instance12 = new Graphic299(MovieClip.SYNCHED);
        var instance15 = new Graphic302(MovieClip.SYNCHED);
        var instance14 = new Graphic301(MovieClip.SYNCHED);
        var instance17 = new Graphic304(MovieClip.SYNCHED);
        var instance16 = new Graphic303(MovieClip.SYNCHED);
        var instance19 = new Graphic306(MovieClip.SYNCHED);
        var instance18 = new Graphic305(MovieClip.SYNCHED);
        var instance21 = new Graphic308(MovieClip.SYNCHED);
        var instance20 = new Graphic307(MovieClip.SYNCHED);
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

    var Graphic310 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 87, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[62])
            .setTransform(-1222.8, -397.15, 0.95);
        this.addTimedChild(instance1);
    });

    var Graphic311 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 2, loop: false });
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[69]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[16]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[15]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[14]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[13]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[64]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[63]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[68]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[67])
            .setTransform(-1.65, -2.05);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[66])
            .setTransform(21.3, -1.55, 1, 1, 0.393);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[65])
            .setTransform(3.2, 1.2, 1, 1, 0.065);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[65])
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

    var Graphic313 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[69]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[68]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[67]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[66]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[65]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[65]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[16])
            .setTransform(14.3, -13.75, 1, 1, -0.069);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[15])
            .setTransform(4, -9.1);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[14]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[13]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[64]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[63]);
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

    var Graphic331 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 163, loop: false });
        var instance5 = new Graphic311(MovieClip.SYNCHED);
        var instance7 = new Graphic313(MovieClip.SYNCHED);
        var instance4 = new Graphic310(MovieClip.SYNCHED);
        var instance3 = new Graphic309(MovieClip.SYNCHED);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[20]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[19]);
        var instance6 = new Graphic312(MovieClip.SYNCHED);
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

    var Graphic332 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 163, loop: false });
        var instance1 = new Sprite(fromFrame("REPLACE_SIGN"))
            .setTransform(-220, -148);
        this.addTimedChild(instance1);
    });

    var Graphic333 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 163, loop: false });
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[340]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[339]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[338])
            .setTransform(390.5, 46);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[337])
            .setTransform(390.5, 46);
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[336]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[335]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[334]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[333]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[332]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[331]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[330]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[329])
            .setTransform(390.5, 46);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[328])
            .setTransform(390.5, 46);
        this.addTimedChild(instance13)
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

    var Graphic334 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 41, loop: false });
        var instance9 = new Graphics()
            .drawCommands(shapes.s01[901]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s01[882]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s01[863]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s01[844]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s01[825]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s01[806]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s01[787]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s01[768]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[747]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s01[883]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s01[864]);
        var instance15 = new Graphics()
            .drawCommands(shapes.s01[845]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s01[826]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s01[807]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s01[788]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s01[769]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s01[748]);
        var instance25 = new Graphics()
            .drawCommands(shapes.s01[884]);
        var instance24 = new Graphics()
            .drawCommands(shapes.s01[865]);
        var instance23 = new Graphics()
            .drawCommands(shapes.s01[846]);
        var instance22 = new Graphics()
            .drawCommands(shapes.s01[827]);
        var instance21 = new Graphics()
            .drawCommands(shapes.s01[808]);
        var instance20 = new Graphics()
            .drawCommands(shapes.s01[789]);
        var instance19 = new Graphics()
            .drawCommands(shapes.s01[770]);
        var instance18 = new Graphics()
            .drawCommands(shapes.s01[749]);
        var instance33 = new Graphics()
            .drawCommands(shapes.s01[885]);
        var instance32 = new Graphics()
            .drawCommands(shapes.s01[866]);
        var instance31 = new Graphics()
            .drawCommands(shapes.s01[847]);
        var instance30 = new Graphics()
            .drawCommands(shapes.s01[828]);
        var instance29 = new Graphics()
            .drawCommands(shapes.s01[809]);
        var instance28 = new Graphics()
            .drawCommands(shapes.s01[790]);
        var instance27 = new Graphics()
            .drawCommands(shapes.s01[771]);
        var instance26 = new Graphics()
            .drawCommands(shapes.s01[750]);
        var instance41 = new Graphics()
            .drawCommands(shapes.s01[886]);
        var instance40 = new Graphics()
            .drawCommands(shapes.s01[867]);
        var instance39 = new Graphics()
            .drawCommands(shapes.s01[848]);
        var instance38 = new Graphics()
            .drawCommands(shapes.s01[829]);
        var instance37 = new Graphics()
            .drawCommands(shapes.s01[810]);
        var instance36 = new Graphics()
            .drawCommands(shapes.s01[791]);
        var instance35 = new Graphics()
            .drawCommands(shapes.s01[772]);
        var instance34 = new Graphics()
            .drawCommands(shapes.s01[751]);
        var instance49 = new Graphics()
            .drawCommands(shapes.s01[887]);
        var instance48 = new Graphics()
            .drawCommands(shapes.s01[868]);
        var instance47 = new Graphics()
            .drawCommands(shapes.s01[849]);
        var instance46 = new Graphics()
            .drawCommands(shapes.s01[830]);
        var instance45 = new Graphics()
            .drawCommands(shapes.s01[811]);
        var instance44 = new Graphics()
            .drawCommands(shapes.s01[792]);
        var instance43 = new Graphics()
            .drawCommands(shapes.s01[773]);
        var instance42 = new Graphics()
            .drawCommands(shapes.s01[752]);
        var instance61 = new Graphics()
            .drawCommands(shapes.s01[920]);
        var instance60 = new Graphics()
            .drawCommands(shapes.s01[902]);
        var instance59 = new Graphics()
            .drawCommands(shapes.s01[888]);
        var instance58 = new Graphics()
            .drawCommands(shapes.s01[869]);
        var instance57 = new Graphics()
            .drawCommands(shapes.s01[850]);
        var instance56 = new Graphics()
            .drawCommands(shapes.s01[831]);
        var instance55 = new Graphics()
            .drawCommands(shapes.s01[812]);
        var instance54 = new Graphics()
            .drawCommands(shapes.s01[793]);
        var instance53 = new Graphics()
            .drawCommands(shapes.s01[774]);
        var instance52 = new Graphics()
            .drawCommands(shapes.s01[753]);
        var instance51 = new Graphics()
            .drawCommands(shapes.s01[732]);
        var instance50 = new Graphics()
            .drawCommands(shapes.s01[717]);
        var instance74 = new Graphics()
            .drawCommands(shapes.s01[903]);
        var instance73 = new Graphics()
            .drawCommands(shapes.s01[889]);
        var instance72 = new Graphics()
            .drawCommands(shapes.s01[870]);
        var instance71 = new Graphics()
            .drawCommands(shapes.s01[851]);
        var instance70 = new Graphics()
            .drawCommands(shapes.s01[832]);
        var instance69 = new Graphics()
            .drawCommands(shapes.s01[813]);
        var instance68 = new Graphics()
            .drawCommands(shapes.s01[794]);
        var instance67 = new Graphics()
            .drawCommands(shapes.s01[775]);
        var instance66 = new Graphics()
            .drawCommands(shapes.s01[754]);
        var instance65 = new Graphics()
            .drawCommands(shapes.s01[733]);
        var instance64 = new Graphics()
            .drawCommands(shapes.s01[718]);
        var instance63 = new Graphics()
            .drawCommands(shapes.s01[703]);
        var instance62 = new Graphics()
            .drawCommands(shapes.s01[689]);
        var instance89 = new Graphics()
            .drawCommands(shapes.s01[904]);
        var instance88 = new Graphics()
            .drawCommands(shapes.s01[890]);
        var instance87 = new Graphics()
            .drawCommands(shapes.s01[871]);
        var instance86 = new Graphics()
            .drawCommands(shapes.s01[852]);
        var instance85 = new Graphics()
            .drawCommands(shapes.s01[833]);
        var instance84 = new Graphics()
            .drawCommands(shapes.s01[814]);
        var instance83 = new Graphics()
            .drawCommands(shapes.s01[795]);
        var instance82 = new Graphics()
            .drawCommands(shapes.s01[776]);
        var instance81 = new Graphics()
            .drawCommands(shapes.s01[755]);
        var instance80 = new Graphics()
            .drawCommands(shapes.s01[734]);
        var instance79 = new Graphics()
            .drawCommands(shapes.s01[719]);
        var instance78 = new Graphics()
            .drawCommands(shapes.s01[704]);
        var instance77 = new Graphics()
            .drawCommands(shapes.s01[690]);
        var instance76 = new Graphics()
            .drawCommands(shapes.s01[676]);
        var instance75 = new Graphics()
            .drawCommands(shapes.s01[663]);
        var instance106 = new Graphics()
            .drawCommands(shapes.s01[908]);
        var instance105 = new Graphics()
            .drawCommands(shapes.s01[905]);
        var instance104 = new Graphics()
            .drawCommands(shapes.s01[891]);
        var instance103 = new Graphics()
            .drawCommands(shapes.s01[872]);
        var instance102 = new Graphics()
            .drawCommands(shapes.s01[853]);
        var instance101 = new Graphics()
            .drawCommands(shapes.s01[834]);
        var instance100 = new Graphics()
            .drawCommands(shapes.s01[815]);
        var instance99 = new Graphics()
            .drawCommands(shapes.s01[796]);
        var instance98 = new Graphics()
            .drawCommands(shapes.s01[777]);
        var instance97 = new Graphics()
            .drawCommands(shapes.s01[756]);
        var instance96 = new Graphics()
            .drawCommands(shapes.s01[735]);
        var instance95 = new Graphics()
            .drawCommands(shapes.s01[720]);
        var instance94 = new Graphics()
            .drawCommands(shapes.s01[705]);
        var instance93 = new Graphics()
            .drawCommands(shapes.s01[691]);
        var instance92 = new Graphics()
            .drawCommands(shapes.s01[677]);
        var instance91 = new Graphics()
            .drawCommands(shapes.s01[664]);
        var instance90 = new Graphics()
            .drawCommands(shapes.s01[651]);
        var instance123 = new Graphics()
            .drawCommands(shapes.s01[909]);
        var instance122 = new Graphics()
            .drawCommands(shapes.s01[906]);
        var instance121 = new Graphics()
            .drawCommands(shapes.s01[892]);
        var instance120 = new Graphics()
            .drawCommands(shapes.s01[873]);
        var instance119 = new Graphics()
            .drawCommands(shapes.s01[854]);
        var instance118 = new Graphics()
            .drawCommands(shapes.s01[835]);
        var instance117 = new Graphics()
            .drawCommands(shapes.s01[816]);
        var instance116 = new Graphics()
            .drawCommands(shapes.s01[797]);
        var instance115 = new Graphics()
            .drawCommands(shapes.s01[778]);
        var instance114 = new Graphics()
            .drawCommands(shapes.s01[757]);
        var instance113 = new Graphics()
            .drawCommands(shapes.s01[736]);
        var instance112 = new Graphics()
            .drawCommands(shapes.s01[721]);
        var instance111 = new Graphics()
            .drawCommands(shapes.s01[706]);
        var instance110 = new Graphics()
            .drawCommands(shapes.s01[692]);
        var instance109 = new Graphics()
            .drawCommands(shapes.s01[678]);
        var instance108 = new Graphics()
            .drawCommands(shapes.s01[665]);
        var instance107 = new Graphics()
            .drawCommands(shapes.s01[652]);
        var instance140 = new Graphics()
            .drawCommands(shapes.s01[910]);
        var instance139 = new Graphics()
            .drawCommands(shapes.s01[902]);
        var instance138 = new Graphics()
            .drawCommands(shapes.s01[893]);
        var instance137 = new Graphics()
            .drawCommands(shapes.s01[874]);
        var instance136 = new Graphics()
            .drawCommands(shapes.s01[855]);
        var instance135 = new Graphics()
            .drawCommands(shapes.s01[836]);
        var instance134 = new Graphics()
            .drawCommands(shapes.s01[817]);
        var instance133 = new Graphics()
            .drawCommands(shapes.s01[798]);
        var instance132 = new Graphics()
            .drawCommands(shapes.s01[779]);
        var instance131 = new Graphics()
            .drawCommands(shapes.s01[758]);
        var instance130 = new Graphics()
            .drawCommands(shapes.s01[737]);
        var instance129 = new Graphics()
            .drawCommands(shapes.s01[722]);
        var instance128 = new Graphics()
            .drawCommands(shapes.s01[707]);
        var instance127 = new Graphics()
            .drawCommands(shapes.s01[693]);
        var instance126 = new Graphics()
            .drawCommands(shapes.s01[679]);
        var instance125 = new Graphics()
            .drawCommands(shapes.s01[666]);
        var instance124 = new Graphics()
            .drawCommands(shapes.s01[653]);
        var instance157 = new Graphics()
            .drawCommands(shapes.s01[911]);
        var instance156 = new Graphics()
            .drawCommands(shapes.s01[903]);
        var instance155 = new Graphics()
            .drawCommands(shapes.s01[894]);
        var instance154 = new Graphics()
            .drawCommands(shapes.s01[875]);
        var instance153 = new Graphics()
            .drawCommands(shapes.s01[856]);
        var instance152 = new Graphics()
            .drawCommands(shapes.s01[837]);
        var instance151 = new Graphics()
            .drawCommands(shapes.s01[818]);
        var instance150 = new Graphics()
            .drawCommands(shapes.s01[799]);
        var instance149 = new Graphics()
            .drawCommands(shapes.s01[780]);
        var instance148 = new Graphics()
            .drawCommands(shapes.s01[759]);
        var instance147 = new Graphics()
            .drawCommands(shapes.s01[738]);
        var instance146 = new Graphics()
            .drawCommands(shapes.s01[723]);
        var instance145 = new Graphics()
            .drawCommands(shapes.s01[708]);
        var instance144 = new Graphics()
            .drawCommands(shapes.s01[694]);
        var instance143 = new Graphics()
            .drawCommands(shapes.s01[680]);
        var instance142 = new Graphics()
            .drawCommands(shapes.s01[667]);
        var instance141 = new Graphics()
            .drawCommands(shapes.s01[654]);
        var instance174 = new Graphics()
            .drawCommands(shapes.s01[912]);
        var instance173 = new Graphics()
            .drawCommands(shapes.s01[904]);
        var instance172 = new Graphics()
            .drawCommands(shapes.s01[895]);
        var instance171 = new Graphics()
            .drawCommands(shapes.s01[876]);
        var instance170 = new Graphics()
            .drawCommands(shapes.s01[857]);
        var instance169 = new Graphics()
            .drawCommands(shapes.s01[838]);
        var instance168 = new Graphics()
            .drawCommands(shapes.s01[819]);
        var instance167 = new Graphics()
            .drawCommands(shapes.s01[800]);
        var instance166 = new Graphics()
            .drawCommands(shapes.s01[781]);
        var instance165 = new Graphics()
            .drawCommands(shapes.s01[760]);
        var instance164 = new Graphics()
            .drawCommands(shapes.s01[739]);
        var instance163 = new Graphics()
            .drawCommands(shapes.s01[724]);
        var instance162 = new Graphics()
            .drawCommands(shapes.s01[709]);
        var instance161 = new Graphics()
            .drawCommands(shapes.s01[695]);
        var instance160 = new Graphics()
            .drawCommands(shapes.s01[681]);
        var instance159 = new Graphics()
            .drawCommands(shapes.s01[668]);
        var instance158 = new Graphics()
            .drawCommands(shapes.s01[655]);
        var instance191 = new Graphics()
            .drawCommands(shapes.s01[913]);
        var instance190 = new Graphics()
            .drawCommands(shapes.s01[905]);
        var instance189 = new Graphics()
            .drawCommands(shapes.s01[896]);
        var instance188 = new Graphics()
            .drawCommands(shapes.s01[877]);
        var instance187 = new Graphics()
            .drawCommands(shapes.s01[858]);
        var instance186 = new Graphics()
            .drawCommands(shapes.s01[839]);
        var instance185 = new Graphics()
            .drawCommands(shapes.s01[820]);
        var instance184 = new Graphics()
            .drawCommands(shapes.s01[801]);
        var instance183 = new Graphics()
            .drawCommands(shapes.s01[782]);
        var instance182 = new Graphics()
            .drawCommands(shapes.s01[761]);
        var instance181 = new Graphics()
            .drawCommands(shapes.s01[740]);
        var instance180 = new Graphics()
            .drawCommands(shapes.s01[725]);
        var instance179 = new Graphics()
            .drawCommands(shapes.s01[710]);
        var instance178 = new Graphics()
            .drawCommands(shapes.s01[696]);
        var instance177 = new Graphics()
            .drawCommands(shapes.s01[682]);
        var instance176 = new Graphics()
            .drawCommands(shapes.s01[669]);
        var instance175 = new Graphics()
            .drawCommands(shapes.s01[656]);
        var instance208 = new Graphics()
            .drawCommands(shapes.s01[914]);
        var instance207 = new Graphics()
            .drawCommands(shapes.s01[902]);
        var instance206 = new Graphics()
            .drawCommands(shapes.s01[897]);
        var instance205 = new Graphics()
            .drawCommands(shapes.s01[878]);
        var instance204 = new Graphics()
            .drawCommands(shapes.s01[859]);
        var instance203 = new Graphics()
            .drawCommands(shapes.s01[840]);
        var instance202 = new Graphics()
            .drawCommands(shapes.s01[821]);
        var instance201 = new Graphics()
            .drawCommands(shapes.s01[802]);
        var instance200 = new Graphics()
            .drawCommands(shapes.s01[783]);
        var instance199 = new Graphics()
            .drawCommands(shapes.s01[762]);
        var instance198 = new Graphics()
            .drawCommands(shapes.s01[741]);
        var instance197 = new Graphics()
            .drawCommands(shapes.s01[726]);
        var instance196 = new Graphics()
            .drawCommands(shapes.s01[711]);
        var instance195 = new Graphics()
            .drawCommands(shapes.s01[697]);
        var instance194 = new Graphics()
            .drawCommands(shapes.s01[683]);
        var instance193 = new Graphics()
            .drawCommands(shapes.s01[670]);
        var instance192 = new Graphics()
            .drawCommands(shapes.s01[657]);
        var instance225 = new Graphics()
            .drawCommands(shapes.s01[915]);
        var instance224 = new Graphics()
            .drawCommands(shapes.s01[907]);
        var instance223 = new Graphics()
            .drawCommands(shapes.s01[898]);
        var instance222 = new Graphics()
            .drawCommands(shapes.s01[879]);
        var instance221 = new Graphics()
            .drawCommands(shapes.s01[860]);
        var instance220 = new Graphics()
            .drawCommands(shapes.s01[841]);
        var instance219 = new Graphics()
            .drawCommands(shapes.s01[822]);
        var instance218 = new Graphics()
            .drawCommands(shapes.s01[803]);
        var instance217 = new Graphics()
            .drawCommands(shapes.s01[784]);
        var instance216 = new Graphics()
            .drawCommands(shapes.s01[763]);
        var instance215 = new Graphics()
            .drawCommands(shapes.s01[742]);
        var instance214 = new Graphics()
            .drawCommands(shapes.s01[727]);
        var instance213 = new Graphics()
            .drawCommands(shapes.s01[712]);
        var instance212 = new Graphics()
            .drawCommands(shapes.s01[698]);
        var instance211 = new Graphics()
            .drawCommands(shapes.s01[684]);
        var instance210 = new Graphics()
            .drawCommands(shapes.s01[671]);
        var instance209 = new Graphics()
            .drawCommands(shapes.s01[658]);
        var instance242 = new Graphics()
            .drawCommands(shapes.s01[916]);
        var instance241 = new Graphics()
            .drawCommands(shapes.s01[906]);
        var instance240 = new Graphics()
            .drawCommands(shapes.s01[899]);
        var instance239 = new Graphics()
            .drawCommands(shapes.s01[880]);
        var instance238 = new Graphics()
            .drawCommands(shapes.s01[861]);
        var instance237 = new Graphics()
            .drawCommands(shapes.s01[842]);
        var instance236 = new Graphics()
            .drawCommands(shapes.s01[823]);
        var instance235 = new Graphics()
            .drawCommands(shapes.s01[804]);
        var instance234 = new Graphics()
            .drawCommands(shapes.s01[785]);
        var instance233 = new Graphics()
            .drawCommands(shapes.s01[764]);
        var instance232 = new Graphics()
            .drawCommands(shapes.s01[743]);
        var instance231 = new Graphics()
            .drawCommands(shapes.s01[728]);
        var instance230 = new Graphics()
            .drawCommands(shapes.s01[713]);
        var instance229 = new Graphics()
            .drawCommands(shapes.s01[699]);
        var instance228 = new Graphics()
            .drawCommands(shapes.s01[685]);
        var instance227 = new Graphics()
            .drawCommands(shapes.s01[672]);
        var instance226 = new Graphics()
            .drawCommands(shapes.s01[659]);
        var instance259 = new Graphics()
            .drawCommands(shapes.s01[917]);
        var instance258 = new Graphics()
            .drawCommands(shapes.s01[902]);
        var instance257 = new Graphics()
            .drawCommands(shapes.s01[900]);
        var instance256 = new Graphics()
            .drawCommands(shapes.s01[881]);
        var instance255 = new Graphics()
            .drawCommands(shapes.s01[862]);
        var instance254 = new Graphics()
            .drawCommands(shapes.s01[843]);
        var instance253 = new Graphics()
            .drawCommands(shapes.s01[824]);
        var instance252 = new Graphics()
            .drawCommands(shapes.s01[805]);
        var instance251 = new Graphics()
            .drawCommands(shapes.s01[786]);
        var instance250 = new Graphics()
            .drawCommands(shapes.s01[765]);
        var instance249 = new Graphics()
            .drawCommands(shapes.s01[744]);
        var instance248 = new Graphics()
            .drawCommands(shapes.s01[729]);
        var instance247 = new Graphics()
            .drawCommands(shapes.s01[714]);
        var instance246 = new Graphics()
            .drawCommands(shapes.s01[700]);
        var instance245 = new Graphics()
            .drawCommands(shapes.s01[686]);
        var instance244 = new Graphics()
            .drawCommands(shapes.s01[673]);
        var instance243 = new Graphics()
            .drawCommands(shapes.s01[660]);
        var instance276 = new Graphics()
            .drawCommands(shapes.s01[918]);
        var instance275 = new Graphics()
            .drawCommands(shapes.s01[903]);
        var instance274 = new Graphics()
            .drawCommands(shapes.s01[882]);
        var instance273 = new Graphics()
            .drawCommands(shapes.s01[863]);
        var instance272 = new Graphics()
            .drawCommands(shapes.s01[844]);
        var instance271 = new Graphics()
            .drawCommands(shapes.s01[825]);
        var instance270 = new Graphics()
            .drawCommands(shapes.s01[787]);
        var instance269 = new Graphics()
            .drawCommands(shapes.s01[806]);
        var instance268 = new Graphics()
            .drawCommands(shapes.s01[768]);
        var instance267 = new Graphics()
            .drawCommands(shapes.s01[766]);
        var instance266 = new Graphics()
            .drawCommands(shapes.s01[745]);
        var instance265 = new Graphics()
            .drawCommands(shapes.s01[730]);
        var instance264 = new Graphics()
            .drawCommands(shapes.s01[715]);
        var instance263 = new Graphics()
            .drawCommands(shapes.s01[701]);
        var instance262 = new Graphics()
            .drawCommands(shapes.s01[687]);
        var instance261 = new Graphics()
            .drawCommands(shapes.s01[674]);
        var instance260 = new Graphics()
            .drawCommands(shapes.s01[661]);
        var instance293 = new Graphics()
            .drawCommands(shapes.s01[919]);
        var instance292 = new Graphics()
            .drawCommands(shapes.s01[904]);
        var instance291 = new Graphics()
            .drawCommands(shapes.s01[883]);
        var instance290 = new Graphics()
            .drawCommands(shapes.s01[864]);
        var instance289 = new Graphics()
            .drawCommands(shapes.s01[845]);
        var instance288 = new Graphics()
            .drawCommands(shapes.s01[826]);
        var instance287 = new Graphics()
            .drawCommands(shapes.s01[788]);
        var instance286 = new Graphics()
            .drawCommands(shapes.s01[807]);
        var instance285 = new Graphics()
            .drawCommands(shapes.s01[769]);
        var instance284 = new Graphics()
            .drawCommands(shapes.s01[767]);
        var instance283 = new Graphics()
            .drawCommands(shapes.s01[746]);
        var instance282 = new Graphics()
            .drawCommands(shapes.s01[731]);
        var instance281 = new Graphics()
            .drawCommands(shapes.s01[716]);
        var instance280 = new Graphics()
            .drawCommands(shapes.s01[702]);
        var instance279 = new Graphics()
            .drawCommands(shapes.s01[688]);
        var instance278 = new Graphics()
            .drawCommands(shapes.s01[675]);
        var instance277 = new Graphics()
            .drawCommands(shapes.s01[662]);
        this.addTimedChild(instance9, 0, 12)
            .addTimedChild(instance8, 0, 2)
            .addTimedChild(instance7, 0, 2)
            .addTimedChild(instance6, 0, 2)
            .addTimedChild(instance5, 0, 2)
            .addTimedChild(instance4, 0, 2)
            .addTimedChild(instance3, 0, 2)
            .addTimedChild(instance2, 0, 2)
            .addTimedChild(instance1, 0, 2)
            .addTimedChild(instance17, 2, 2)
            .addTimedChild(instance16, 2, 2)
            .addTimedChild(instance15, 2, 2)
            .addTimedChild(instance14, 2, 2)
            .addTimedChild(instance13, 2, 2)
            .addTimedChild(instance12, 2, 2)
            .addTimedChild(instance11, 2, 2)
            .addTimedChild(instance10, 2, 2)
            .addTimedChild(instance25, 4, 2)
            .addTimedChild(instance24, 4, 2)
            .addTimedChild(instance23, 4, 2)
            .addTimedChild(instance22, 4, 2)
            .addTimedChild(instance21, 4, 2)
            .addTimedChild(instance20, 4, 2)
            .addTimedChild(instance19, 4, 2)
            .addTimedChild(instance18, 4, 2)
            .addTimedChild(instance33, 6, 2)
            .addTimedChild(instance32, 6, 2)
            .addTimedChild(instance31, 6, 2)
            .addTimedChild(instance30, 6, 2)
            .addTimedChild(instance29, 6, 2)
            .addTimedChild(instance28, 6, 2)
            .addTimedChild(instance27, 6, 2)
            .addTimedChild(instance26, 6, 2)
            .addTimedChild(instance41, 8, 2)
            .addTimedChild(instance40, 8, 2)
            .addTimedChild(instance39, 8, 2)
            .addTimedChild(instance38, 8, 2)
            .addTimedChild(instance37, 8, 2)
            .addTimedChild(instance36, 8, 2)
            .addTimedChild(instance35, 8, 2)
            .addTimedChild(instance34, 8, 2)
            .addTimedChild(instance49, 10, 2)
            .addTimedChild(instance48, 10, 2)
            .addTimedChild(instance47, 10, 2)
            .addTimedChild(instance46, 10, 2)
            .addTimedChild(instance45, 10, 2)
            .addTimedChild(instance44, 10, 2)
            .addTimedChild(instance43, 10, 2)
            .addTimedChild(instance42, 10, 2)
            .addTimedChild(instance61, 12, 29)
            .addTimedChild(instance60, 12, 2)
            .addTimedChild(instance59, 12, 2)
            .addTimedChild(instance58, 12, 2)
            .addTimedChild(instance57, 12, 2)
            .addTimedChild(instance56, 12, 2)
            .addTimedChild(instance55, 12, 2)
            .addTimedChild(instance54, 12, 2)
            .addTimedChild(instance53, 12, 2)
            .addTimedChild(instance52, 12, 2)
            .addTimedChild(instance51, 12, 2)
            .addTimedChild(instance50, 12, 2)
            .addTimedChild(instance74, 14, 2)
            .addTimedChild(instance73, 14, 2)
            .addTimedChild(instance72, 14, 2)
            .addTimedChild(instance71, 14, 2)
            .addTimedChild(instance70, 14, 2)
            .addTimedChild(instance69, 14, 2)
            .addTimedChild(instance68, 14, 2)
            .addTimedChild(instance67, 14, 2)
            .addTimedChild(instance66, 14, 2)
            .addTimedChild(instance65, 14, 2)
            .addTimedChild(instance64, 14, 2)
            .addTimedChild(instance63, 14, 2)
            .addTimedChild(instance62, 14, 2)
            .addTimedChild(instance89, 16, 2)
            .addTimedChild(instance88, 16, 2)
            .addTimedChild(instance87, 16, 2)
            .addTimedChild(instance86, 16, 2)
            .addTimedChild(instance85, 16, 2)
            .addTimedChild(instance84, 16, 2)
            .addTimedChild(instance83, 16, 2)
            .addTimedChild(instance82, 16, 2)
            .addTimedChild(instance81, 16, 2)
            .addTimedChild(instance80, 16, 2)
            .addTimedChild(instance79, 16, 2)
            .addTimedChild(instance78, 16, 2)
            .addTimedChild(instance77, 16, 2)
            .addTimedChild(instance76, 16, 2)
            .addTimedChild(instance75, 16, 2)
            .addTimedChild(instance106, 18, 2)
            .addTimedChild(instance105, 18, 2)
            .addTimedChild(instance104, 18, 2)
            .addTimedChild(instance103, 18, 2)
            .addTimedChild(instance102, 18, 2)
            .addTimedChild(instance101, 18, 2)
            .addTimedChild(instance100, 18, 2)
            .addTimedChild(instance99, 18, 2)
            .addTimedChild(instance98, 18, 2)
            .addTimedChild(instance97, 18, 2)
            .addTimedChild(instance96, 18, 2)
            .addTimedChild(instance95, 18, 2)
            .addTimedChild(instance94, 18, 2)
            .addTimedChild(instance93, 18, 2)
            .addTimedChild(instance92, 18, 2)
            .addTimedChild(instance91, 18, 2)
            .addTimedChild(instance90, 18, 2)
            .addTimedChild(instance123, 20, 2)
            .addTimedChild(instance122, 20, 2)
            .addTimedChild(instance121, 20, 2)
            .addTimedChild(instance120, 20, 2)
            .addTimedChild(instance119, 20, 2)
            .addTimedChild(instance118, 20, 2)
            .addTimedChild(instance117, 20, 2)
            .addTimedChild(instance116, 20, 2)
            .addTimedChild(instance115, 20, 2)
            .addTimedChild(instance114, 20, 2)
            .addTimedChild(instance113, 20, 2)
            .addTimedChild(instance112, 20, 2)
            .addTimedChild(instance111, 20, 2)
            .addTimedChild(instance110, 20, 2)
            .addTimedChild(instance109, 20, 2)
            .addTimedChild(instance108, 20, 2)
            .addTimedChild(instance107, 20, 2)
            .addTimedChild(instance140, 22, 2)
            .addTimedChild(instance139, 22, 2)
            .addTimedChild(instance138, 22, 2)
            .addTimedChild(instance137, 22, 2)
            .addTimedChild(instance136, 22, 2)
            .addTimedChild(instance135, 22, 2)
            .addTimedChild(instance134, 22, 2)
            .addTimedChild(instance133, 22, 2)
            .addTimedChild(instance132, 22, 2)
            .addTimedChild(instance131, 22, 2)
            .addTimedChild(instance130, 22, 2)
            .addTimedChild(instance129, 22, 2)
            .addTimedChild(instance128, 22, 2)
            .addTimedChild(instance127, 22, 2)
            .addTimedChild(instance126, 22, 2)
            .addTimedChild(instance125, 22, 2)
            .addTimedChild(instance124, 22, 2)
            .addTimedChild(instance157, 24, 2)
            .addTimedChild(instance156, 24, 2)
            .addTimedChild(instance155, 24, 2)
            .addTimedChild(instance154, 24, 2)
            .addTimedChild(instance153, 24, 2)
            .addTimedChild(instance152, 24, 2)
            .addTimedChild(instance151, 24, 2)
            .addTimedChild(instance150, 24, 2)
            .addTimedChild(instance149, 24, 2)
            .addTimedChild(instance148, 24, 2)
            .addTimedChild(instance147, 24, 2)
            .addTimedChild(instance146, 24, 2)
            .addTimedChild(instance145, 24, 2)
            .addTimedChild(instance144, 24, 2)
            .addTimedChild(instance143, 24, 2)
            .addTimedChild(instance142, 24, 2)
            .addTimedChild(instance141, 24, 2)
            .addTimedChild(instance174, 26, 2)
            .addTimedChild(instance173, 26, 2)
            .addTimedChild(instance172, 26, 2)
            .addTimedChild(instance171, 26, 2)
            .addTimedChild(instance170, 26, 2)
            .addTimedChild(instance169, 26, 2)
            .addTimedChild(instance168, 26, 2)
            .addTimedChild(instance167, 26, 2)
            .addTimedChild(instance166, 26, 2)
            .addTimedChild(instance165, 26, 2)
            .addTimedChild(instance164, 26, 2)
            .addTimedChild(instance163, 26, 2)
            .addTimedChild(instance162, 26, 2)
            .addTimedChild(instance161, 26, 2)
            .addTimedChild(instance160, 26, 2)
            .addTimedChild(instance159, 26, 2)
            .addTimedChild(instance158, 26, 2)
            .addTimedChild(instance191, 28, 2)
            .addTimedChild(instance190, 28, 2)
            .addTimedChild(instance189, 28, 2)
            .addTimedChild(instance188, 28, 2)
            .addTimedChild(instance187, 28, 2)
            .addTimedChild(instance186, 28, 2)
            .addTimedChild(instance185, 28, 2)
            .addTimedChild(instance184, 28, 2)
            .addTimedChild(instance183, 28, 2)
            .addTimedChild(instance182, 28, 2)
            .addTimedChild(instance181, 28, 2)
            .addTimedChild(instance180, 28, 2)
            .addTimedChild(instance179, 28, 2)
            .addTimedChild(instance178, 28, 2)
            .addTimedChild(instance177, 28, 2)
            .addTimedChild(instance176, 28, 2)
            .addTimedChild(instance175, 28, 2)
            .addTimedChild(instance208, 30, 2)
            .addTimedChild(instance207, 30, 2)
            .addTimedChild(instance206, 30, 2)
            .addTimedChild(instance205, 30, 2)
            .addTimedChild(instance204, 30, 2)
            .addTimedChild(instance203, 30, 2)
            .addTimedChild(instance202, 30, 2)
            .addTimedChild(instance201, 30, 2)
            .addTimedChild(instance200, 30, 2)
            .addTimedChild(instance199, 30, 2)
            .addTimedChild(instance198, 30, 2)
            .addTimedChild(instance197, 30, 2)
            .addTimedChild(instance196, 30, 2)
            .addTimedChild(instance195, 30, 2)
            .addTimedChild(instance194, 30, 2)
            .addTimedChild(instance193, 30, 2)
            .addTimedChild(instance192, 30, 2)
            .addTimedChild(instance225, 32, 2)
            .addTimedChild(instance224, 32, 2)
            .addTimedChild(instance223, 32, 2)
            .addTimedChild(instance222, 32, 2)
            .addTimedChild(instance221, 32, 2)
            .addTimedChild(instance220, 32, 2)
            .addTimedChild(instance219, 32, 2)
            .addTimedChild(instance218, 32, 2)
            .addTimedChild(instance217, 32, 2)
            .addTimedChild(instance216, 32, 2)
            .addTimedChild(instance215, 32, 2)
            .addTimedChild(instance214, 32, 2)
            .addTimedChild(instance213, 32, 2)
            .addTimedChild(instance212, 32, 2)
            .addTimedChild(instance211, 32, 2)
            .addTimedChild(instance210, 32, 2)
            .addTimedChild(instance209, 32, 2)
            .addTimedChild(instance242, 34, 2)
            .addTimedChild(instance241, 34, 2)
            .addTimedChild(instance240, 34, 2)
            .addTimedChild(instance239, 34, 2)
            .addTimedChild(instance238, 34, 2)
            .addTimedChild(instance237, 34, 2)
            .addTimedChild(instance236, 34, 2)
            .addTimedChild(instance235, 34, 2)
            .addTimedChild(instance234, 34, 2)
            .addTimedChild(instance233, 34, 2)
            .addTimedChild(instance232, 34, 2)
            .addTimedChild(instance231, 34, 2)
            .addTimedChild(instance230, 34, 2)
            .addTimedChild(instance229, 34, 2)
            .addTimedChild(instance228, 34, 2)
            .addTimedChild(instance227, 34, 2)
            .addTimedChild(instance226, 34, 2)
            .addTimedChild(instance259, 36, 2)
            .addTimedChild(instance258, 36, 2)
            .addTimedChild(instance257, 36, 2)
            .addTimedChild(instance256, 36, 2)
            .addTimedChild(instance255, 36, 2)
            .addTimedChild(instance254, 36, 2)
            .addTimedChild(instance253, 36, 2)
            .addTimedChild(instance252, 36, 2)
            .addTimedChild(instance251, 36, 2)
            .addTimedChild(instance250, 36, 2)
            .addTimedChild(instance249, 36, 2)
            .addTimedChild(instance248, 36, 2)
            .addTimedChild(instance247, 36, 2)
            .addTimedChild(instance246, 36, 2)
            .addTimedChild(instance245, 36, 2)
            .addTimedChild(instance244, 36, 2)
            .addTimedChild(instance243, 36, 2)
            .addTimedChild(instance276, 38, 2)
            .addTimedChild(instance275, 38, 2)
            .addTimedChild(instance274, 38, 2)
            .addTimedChild(instance273, 38, 2)
            .addTimedChild(instance272, 38, 2)
            .addTimedChild(instance271, 38, 2)
            .addTimedChild(instance270, 38, 2)
            .addTimedChild(instance269, 38, 2)
            .addTimedChild(instance268, 38, 2)
            .addTimedChild(instance267, 38, 2)
            .addTimedChild(instance266, 38, 2)
            .addTimedChild(instance265, 38, 2)
            .addTimedChild(instance264, 38, 2)
            .addTimedChild(instance263, 38, 2)
            .addTimedChild(instance262, 38, 2)
            .addTimedChild(instance261, 38, 2)
            .addTimedChild(instance260, 38, 2)
            .addTimedChild(instance293, 40, 1)
            .addTimedChild(instance292, 40, 1)
            .addTimedChild(instance291, 40, 1)
            .addTimedChild(instance290, 40, 1)
            .addTimedChild(instance289, 40, 1)
            .addTimedChild(instance288, 40, 1)
            .addTimedChild(instance287, 40, 1)
            .addTimedChild(instance286, 40, 1)
            .addTimedChild(instance285, 40, 1)
            .addTimedChild(instance284, 40, 1)
            .addTimedChild(instance283, 40, 1)
            .addTimedChild(instance282, 40, 1)
            .addTimedChild(instance281, 40, 1)
            .addTimedChild(instance280, 40, 1)
            .addTimedChild(instance279, 40, 1)
            .addTimedChild(instance278, 40, 1)
            .addTimedChild(instance277, 40, 1);
    });

    var Graphic335 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 16, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s01[372])
            .setTransform(1779.65, 1023.95, 1.445, 1.396);
        this.addTimedChild(instance1);
    });

    lib.s01 = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 547,
            framerate: 12,
            loop: false
        });
        var instance5 = new Graphic318(MovieClip.SYNCHED);
        var instance7 = new Graphic320(MovieClip.SYNCHED);
        var instance4 = new Graphic317(MovieClip.SYNCHED);
        var instance3 = new Graphic316(MovieClip.SYNCHED);
        var instance2 = new Graphic315(MovieClip.SYNCHED);
        var instance1 = new Graphic314(MovieClip.SYNCHED);
        var instance6 = new Graphic319(MovieClip.SYNCHED);
        var instance8 = new Graphic321(MovieClip.SYNCHED);
        var instance12 = new Graphic325(MovieClip.SYNCHED);
        var instance11 = new Graphic324(MovieClip.SYNCHED);
        var instance10 = new Graphic323(MovieClip.SYNCHED);
        var instance9 = new Graphic322(MovieClip.SYNCHED);
        var instance13 = new Graphic326(MovieClip.SYNCHED);
        var instance20 = new Graphic333(MovieClip.SYNCHED);
        var instance19 = new Graphic332(MovieClip.SYNCHED);
        var instance18 = new Graphic331(MovieClip.SYNCHED);
        var instance21 = new Graphic334(MovieClip.SYNCHED);
        var instance17 = new Graphic330(MovieClip.SYNCHED);
        var instance16 = new Graphic329(MovieClip.SYNCHED);
        var instance15 = new Graphic328(MovieClip.SYNCHED);
        var instance14 = new Graphic327(MovieClip.SYNCHED);
        var instance22 = new Graphic335(MovieClip.SYNCHED);
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
                    x: -3331.35,
                    y: -1767.45,
                    sx: 2.956,
                    sy: 2.956
                },
                "404": {
                    x: -343.95,
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
                    x: 58.5,
                    y: -780.9,
                    sx: 1.251,
                    sy: 1.251,
                    r: 0.078
                },
                "404": {
                    x: 400.6,
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
                    x: -937.35,
                    y: 633.85,
                    sx: 2.133,
                    sy: 2.133,
                    ky: 3.142
                },
                "404": {
                    x: 181.85,
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
            .addTimedChild(instance21, 403, 41, {
                "403": {
                    x: 490.4,
                    y: 396.75,
                    sx: 0.918,
                    sy: 0.852
                },
                "404": {
                    x: 495.4,
                    y: 318.75,
                    sx: 0.561,
                    sy: 0.395
                },
                "405": {
                    x: 495.35,
                    sx: 0.656,
                    sy: 0.614
                },
                "406": {
                    sx: 0.687,
                    sy: 0.687
                }
            })
            .addTimedChild(instance17, 384, 163, {
                "384": {
                    x: -3331.35,
                    y: -1767.45,
                    sx: 2.956,
                    sy: 2.956
                },
                "404": {
                    x: -343.95,
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
            .addTimedChild(instance16, 384, 59, {
                "384": {
                    x: -302.35,
                    y: 519.35,
                    sx: 2.699,
                    sy: 2.699
                },
                "404": {
                    x: 321.3,
                    y: 425.7,
                    sx: 0.593,
                    sy: 0.593
                },
                "421": {
                    x: 321.345,
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
                    x: 321.3,
                    y: 314.75
                },
                "430": {
                    x: 321.345,
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
                    x: 321.3,
                    y: 342.95
                },
                "438": {
                    x: 325.185,
                    y: 340.809,
                    sx: 0.58,
                    sy: 0.58
                },
                "439": {
                    x: 336.776,
                    y: 334.321,
                    sx: 0.541,
                    sy: 0.541
                },
                "440": {
                    x: 356.138,
                    y: 323.502,
                    sx: 0.475,
                    sy: 0.475
                },
                "441": {
                    x: 383.215,
                    y: 308.246,
                    sx: 0.384,
                    sy: 0.384
                },
                "442": {
                    x: 417.9,
                    y: 288.75,
                    sx: 0.267,
                    sy: 0.267
                }
            })
            .addTimedChild(instance15, 384, 59, {
                "384": {
                    x: 432.9,
                    y: 1410.65,
                    sx: 2.133,
                    sy: 2.133
                },
                "404": {
                    x: 482.8,
                    y: 621.45,
                    sx: 0.469,
                    sy: 0.469
                },
                "421": {
                    x: 482.793,
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
                    x: 482.8,
                    y: 512.65
                },
                "430": {
                    x: 482.793,
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
                    x: 482.8,
                    y: 538.75
                },
                "438": {
                    x: 483.127,
                    y: 532.346,
                    sx: 0.458,
                    sy: 0.458
                },
                "439": {
                    x: 484.057,
                    y: 512.883,
                    sx: 0.427,
                    sy: 0.427
                },
                "440": {
                    x: 485.699,
                    y: 480.52,
                    sx: 0.376,
                    sy: 0.376
                },
                "441": {
                    x: 487.859,
                    y: 435.216,
                    sx: 0.304,
                    sy: 0.304
                },
                "442": {
                    x: 490.6,
                    y: 376.8,
                    sx: 0.211,
                    sy: 0.211
                }
            })
            .addTimedChild(instance14, 384, 59, {
                "384": {
                    x: -302.35,
                    y: 519.35,
                    sx: 2.699,
                    sy: 2.699
                },
                "404": {
                    x: 321.3,
                    y: 425.7,
                    sx: 0.593,
                    sy: 0.593
                },
                "421": {
                    x: 321.345,
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
                    x: 321.3,
                    y: 316.85
                },
                "430": {
                    x: 321.345,
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
                    x: 321.3,
                    y: 342.95
                },
                "438": {
                    x: 325.185,
                    y: 340.809,
                    sx: 0.58,
                    sy: 0.58
                },
                "439": {
                    x: 336.776,
                    y: 334.321,
                    sx: 0.541,
                    sy: 0.541
                },
                "440": {
                    x: 356.138,
                    y: 323.502,
                    sx: 0.475,
                    sy: 0.475
                },
                "441": {
                    x: 383.215,
                    y: 308.246,
                    sx: 0.384,
                    sy: 0.384
                },
                "442": {
                    x: 417.9,
                    y: 288.75,
                    sx: 0.267,
                    sy: 0.267
                }
            })
            .addTimedChild(instance22, 434, 16, {
                "434": {
                    x: -92.4,
                    y: -21,
                    sx: 0.335,
                    sy: 0.335,
                    a: 0
                },
                "435": {
                    a: 0.21
                },
                "436": {
                    a: 0.4
                },
                "437": {
                    a: 0.56
                },
                "438": {
                    a: 0.69
                },
                "439": {
                    a: 0.8
                },
                "440": {
                    a: 0.89
                },
                "441": {
                    a: 0.95
                },
                "442": {
                    a: 0.99
                },
                "443": {
                    a: 1
                },
                "444": {
                    a: 0.89
                },
                "445": {
                    a: 0.56
                },
                "446": {
                    a: 0
                }
            })
            .addAction(function () {
                /* this.emit('s01_started');*/
            }, 0)
            .addAction(function () {
                /* this.emit('s01_end');*/
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