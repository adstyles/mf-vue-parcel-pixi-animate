import { EventBus } from '../../src/main';

(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Container = PIXI.Container;
    var Sprite = PIXI.Sprite;
    var fromFrame = PIXI.Texture.fromFrame;
    var Graphics = PIXI.Graphics;
    var shapes = PIXI.animate.ShapesCache;

    var Graphic80 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 4, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[0])
            .setTransform(-197.55, -67.35);
        this.addTimedChild(instance1);
    });

    lib.BG_OL_TABLE = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[1]);
        this.addChild(instance1);
    });

    lib.BG_PLANT_CLEAN = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[2]);
        this.addChild(instance1);
    });

    var Graphic15 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 85, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[3]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s04[5]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s04[4]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s04[7]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s04[6]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s04[9]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s04[8]);
        this.addTimedChild(instance1, 0, 26)
            .addTimedChild(instance3, 26, 1)
            .addTimedChild(instance2, 26, 1)
            .addTimedChild(instance5, 27, 1)
            .addTimedChild(instance4, 27, 1)
            .addTimedChild(instance7, 28, 57)
            .addTimedChild(instance6, 28, 57);
    });

    var Graphic16 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 85, loop: false });
        var instance7 = new Graphics()
            .drawCommands(shapes.s04[15])
            .setTransform(-1.45, 32.05);
        var instance6 = new Graphics()
            .drawCommands(shapes.s04[14])
            .setTransform(-3.4, 32.05);
        var instance5 = new Graphics()
            .drawCommands(shapes.s04[13])
            .setTransform(-3.05, 30.55);
        var instance4 = new Graphics()
            .drawCommands(shapes.s04[12])
            .setTransform(-3.95, 32.5);
        var instance3 = new Graphics()
            .drawCommands(shapes.s04[11])
            .setTransform(623.65, 745.15, 1, 1.019, 0, 2.799, -2.807);
        var instance2 = new Graphics()
            .drawCommands(shapes.s04[10])
            .setTransform(596.75, 624.35, 0.839, 1, -2.946);
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[10])
            .setTransform(617, 590.25, 0.839, 1, -3.002);
        this.addTimedChild(instance7)
            .addTimedChild(instance6)
            .addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    lib.MOP = Container.extend(function () {
        Container.call(this);
        var instance2 = new Graphics()
            .drawCommands(shapes.s04[17]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[16]);
        this.addChild(instance2, instance1);
    });

    var Graphic1 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 85, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[18]);
        this.addTimedChild(instance1);
    });

    var Graphic2 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 85, loop: false });
        var instance7 = new Graphics()
            .drawCommands(shapes.s04[25]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s04[24])
            .setTransform(-1156.4, -390.2);
        var instance5 = new Graphics()
            .drawCommands(shapes.s04[23])
            .setTransform(-1156.4, -390.2);
        var instance4 = new Graphics()
            .drawCommands(shapes.s04[22])
            .setTransform(-1156.4, -390.2);
        var instance3 = new Graphics()
            .drawCommands(shapes.s04[21])
            .setTransform(-1156.4, -390.2);
        var instance2 = new Graphics()
            .drawCommands(shapes.s04[20])
            .setTransform(-1156.4, -390.2);
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[19])
            .setTransform(-1156.4, -390.2);
        this.addTimedChild(instance7)
            .addTimedChild(instance6)
            .addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic3 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 85, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[26])
            .setTransform(-1092.65, -484.9);
        this.addTimedChild(instance1);
    });

    var Graphic4 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 85, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s04[29]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[28]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s04[27]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s04[30]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s04[27]);
        this.addTimedChild(instance2, 0, 31, {
                "0": {
                    x: -1088.75,
                    y: -513.25
                }
            })
            .addTimedChild(instance1, 0, 31, {
                "0": {
                    x: -1088.75,
                    y: -513.25
                }
            })
            .addTimedChild(instance3, 31, 2)
            .addTimedChild(instance4, 33, 11)
            .addTimedChild(instance5, 44, 41);
    });

    var Graphic5 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 85, loop: false });
        var instance7 = new Graphics()
            .drawCommands(shapes.s04[37])
            .setTransform(-2172.1, -495.6);
        var instance6 = new Graphics()
            .drawCommands(shapes.s04[36])
            .setTransform(-2172.1, -495.6);
        var instance5 = new Graphics()
            .drawCommands(shapes.s04[35])
            .setTransform(-2172.1, -495.6);
        var instance4 = new Graphics()
            .drawCommands(shapes.s04[34])
            .setTransform(-2172.1, -495.6);
        var instance3 = new Graphics()
            .drawCommands(shapes.s04[33])
            .setTransform(-2172.1, -495.6);
        var instance2 = new Graphics()
            .drawCommands(shapes.s04[32])
            .setTransform(-2172.1, -495.6);
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[31])
            .setTransform(-2172.1, -495.6);
        this.addTimedChild(instance7)
            .addTimedChild(instance6)
            .addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic6 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 85, loop: false });
        var instance9 = new Graphics()
            .drawCommands(shapes.s04[46])
            .setTransform(-1050.05, -368.7);
        var instance8 = new Graphics()
            .drawCommands(shapes.s04[45])
            .setTransform(-2100.1, -737.4);
        var instance7 = new Graphics()
            .drawCommands(shapes.s04[44])
            .setTransform(-2100.1, -737.4);
        var instance6 = new Graphics()
            .drawCommands(shapes.s04[43])
            .setTransform(-2100.1, -737.4);
        var instance5 = new Graphics()
            .drawCommands(shapes.s04[42])
            .setTransform(-2100.1, -737.4);
        var instance4 = new Graphics()
            .drawCommands(shapes.s04[41])
            .setTransform(-2100.1, -737.4);
        var instance3 = new Graphics()
            .drawCommands(shapes.s04[40])
            .setTransform(-2100.1, -737.4);
        var instance2 = new Graphics()
            .drawCommands(shapes.s04[39])
            .setTransform(-2100.1, -737.4);
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[38])
            .setTransform(-2100.1, -737.4);
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

    var Graphic7 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 85, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[47])
            .setTransform(-3.1, -15.5);
        this.addTimedChild(instance1);
    });

    var Graphic8 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 85, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[48])
            .setTransform(-1045.9, -309.8);
        this.addTimedChild(instance1);
    });

    var Graphic9 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 85, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[49])
            .setTransform(-1078.65, -311.6);
        this.addTimedChild(instance1);
    });

    var Graphic13 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 15, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[10])
            .setTransform(-480.857, -129.654, 0.6, 0.283);
        this.addTimedChild(instance1);
    });

    var Graphic14 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 15, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[10])
            .setTransform(-480.857, -129.654, 0.6, 0.283);
        this.addTimedChild(instance1);
    });

    var Graphic10 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 85, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[50]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s04[51]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s04[51]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s04[50]);
        this.addTimedChild(instance1, 0, 28)
            .addTimedChild(instance3, 28, 15, {
                "28": {
                    x: -1097.85,
                    y: -343.9,
                    sx: 1.037,
                    sy: 1.037
                }
            })
            .addTimedChild(instance2, 28, 15, {
                "28": {
                    x: -1074.1,
                    y: -344.15,
                    sx: 1.037,
                    sy: 1.037
                }
            })
            .addTimedChild(instance4, 43, 42);
    });

    var Graphic11 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 85, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[52]);
        this.addTimedChild(instance1);
    });

    var Graphic12 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 85, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[18]);
        this.addTimedChild(instance1);
    });

    var Graphic17 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 85, loop: false });
        var instance12 = new Graphic12(MovieClip.SYNCHED)
            .setTransform(-145.7, -85.2, 1, 1, 0, 0.299, 2.842);
        var instance11 = new Graphic11(MovieClip.SYNCHED)
            .setTransform(-93.75, -20.35);
        var instance10 = new Graphic10(MovieClip.SYNCHED);
        var instance14 = new Graphic14(MovieClip.SYNCHED);
        var instance13 = new Graphic13(MovieClip.SYNCHED);
        var instance9 = new Graphic9(MovieClip.SYNCHED);
        var instance8 = new Graphic8(MovieClip.SYNCHED);
        var instance7 = new Graphic7(MovieClip.SYNCHED)
            .setTransform(-79.5, -152.5);
        var instance6 = new Graphic6(MovieClip.SYNCHED)
            .setTransform(-105.95, -19.4);
        var instance5 = new Graphic5(MovieClip.SYNCHED)
            .setTransform(-69.95, -140.3);
        var instance4 = new Graphic4(MovieClip.SYNCHED);
        var instance3 = new Graphic3(MovieClip.SYNCHED)
            .setTransform(-63.35, 96.8);
        var instance2 = new Graphic2(MovieClip.SYNCHED)
            .setTransform(0.4, 2.1);
        var instance1 = new Graphic1(MovieClip.SYNCHED)
            .setTransform(-10.65, -85.5);
        this.addTimedChild(instance12)
            .addTimedChild(instance11)
            .addTimedChild(instance10, 0, 85, {
                "0": {
                    x: -97.15,
                    y: -57.4
                }
            })
            .addTimedChild(instance14, 28, 15, {
                "28": {
                    x: -114.2,
                    y: -55.6
                }
            })
            .addTimedChild(instance13, 28, 15, {
                "28": {
                    x: -91.7,
                    y: -55.6
                }
            })
            .addTimedChild(instance9, 0, 85, {
                "0": {
                    x: -78.95,
                    y: -63
                },
                "28": {
                    x: -77.4,
                    y: -74.95
                },
                "29": {
                    x: -77.35,
                    y: -76.5
                }
            })
            .addTimedChild(instance8, 0, 85, {
                "0": {
                    x: -111.7,
                    y: -64.8
                },
                "28": {
                    x: -110.15,
                    y: -76.75
                },
                "29": {
                    x: -110.1,
                    y: -78.3
                }
            })
            .addTimedChild(instance7)
            .addTimedChild(instance6)
            .addTimedChild(instance5)
            .addTimedChild(instance4, 0, 85, {
                "0": {
                    x: -67.25,
                    y: 125.15,
                    sx: 1,
                    sy: 1
                },
                "31": {
                    x: -67.3,
                    sx: 1.142,
                    sy: 1.023
                },
                "32": {
                    x: -67.25,
                    sx: 1.095,
                    sy: 1.132
                },
                "33": {
                    x: -82.95,
                    y: 132.25,
                    sx: 1.157,
                    sy: 1.178
                },
                "34": {
                    x: -83,
                    sx: 1.12,
                    sy: 1.206
                },
                "35": {
                    y: 132.3,
                    sx: 1.135,
                    sy: 1.196
                },
                "42": {
                    y: 132.35,
                    sx: 1.178,
                    sy: 1.117
                },
                "44": {
                    x: -67.25,
                    y: 125.15,
                    sx: 1,
                    sy: 1
                },
                "45": {
                    y: 123.85,
                    sx: 0.952,
                    sy: 1.066
                },
                "46": {
                    y: 125.15,
                    sx: 1.04,
                    sy: 0.962
                },
                "47": {
                    sx: 1.07,
                    sy: 0.949
                },
                "48": {
                    sx: 1.028,
                    sy: 1.06
                },
                "49": {
                    sx: 1.053,
                    sy: 1.021
                },
                "51": {
                    y: 125.2,
                    sx: 1.095,
                    sy: 0.967
                },
                "52": {
                    x: -67.3,
                    sx: 1.025,
                    sy: 1.028
                },
                "53": {
                    x: -67.25,
                    y: 125.15,
                    sx: 1.07,
                    sy: 0.949
                },
                "54": {
                    sx: 1.028,
                    sy: 1.06
                },
                "55": {
                    sx: 1.053,
                    sy: 1.021
                },
                "57": {
                    y: 125.2,
                    sx: 1.095,
                    sy: 0.967
                },
                "58": {
                    x: -67.3,
                    sx: 1.025,
                    sy: 1.028
                },
                "59": {
                    x: -67.25,
                    y: 125.15,
                    sx: 1.07,
                    sy: 0.949
                },
                "60": {
                    sx: 1.028,
                    sy: 1.06
                },
                "61": {
                    sx: 1.053,
                    sy: 1.021
                },
                "63": {
                    y: 125.2,
                    sx: 1.095,
                    sy: 0.967
                },
                "64": {
                    x: -67.3,
                    sx: 1.025,
                    sy: 1.028
                },
                "65": {
                    x: -67.25,
                    y: 125.15,
                    sx: 1.07,
                    sy: 0.949
                },
                "66": {
                    sx: 1.028,
                    sy: 1.06
                },
                "67": {
                    sx: 1.053,
                    sy: 1.021
                },
                "69": {
                    y: 125.2,
                    sx: 1.095,
                    sy: 0.967
                },
                "70": {
                    x: -67.3,
                    sx: 1.025,
                    sy: 1.028
                },
                "71": {
                    x: -67.35,
                    sx: 0.984,
                    sy: 1.067
                },
                "77": {
                    y: 125.25,
                    sx: 1.012,
                    sy: 1.017
                },
                "78": {
                    y: 125.3,
                    sx: 1.034,
                    sy: 1.002
                }
            })
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic18 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 85, loop: false });
        var instance31 = new Graphics()
            .drawCommands(shapes.s04[83]);
        var instance30 = new Graphics()
            .drawCommands(shapes.s04[82]);
        var instance29 = new Graphics()
            .drawCommands(shapes.s04[81]);
        var instance28 = new Graphics()
            .drawCommands(shapes.s04[80])
            .setTransform(-965.55, -489.2);
        var instance27 = new Graphics()
            .drawCommands(shapes.s04[79])
            .setTransform(-966.95, -484.95);
        var instance26 = new Graphics()
            .drawCommands(shapes.s04[78])
            .setTransform(-966.95, -484.95);
        var instance25 = new Graphics()
            .drawCommands(shapes.s04[77])
            .setTransform(-966.95, -484.95);
        var instance24 = new Graphics()
            .drawCommands(shapes.s04[76])
            .setTransform(-966.95, -484.95);
        var instance23 = new Graphics()
            .drawCommands(shapes.s04[75])
            .setTransform(-966.95, -484.95);
        var instance22 = new Graphics()
            .drawCommands(shapes.s04[74])
            .setTransform(-966.95, -484.95);
        var instance21 = new Graphics()
            .drawCommands(shapes.s04[73])
            .setTransform(-966.95, -484.95);
        var instance20 = new Graphics()
            .drawCommands(shapes.s04[72])
            .setTransform(-966.95, -484.95);
        var instance19 = new Graphics()
            .drawCommands(shapes.s04[71])
            .setTransform(-966.95, -484.95);
        var instance18 = new Graphics()
            .drawCommands(shapes.s04[70])
            .setTransform(-966.95, -484.95);
        var instance17 = new Graphics()
            .drawCommands(shapes.s04[69])
            .setTransform(-966.95, -484.95);
        var instance16 = new Graphics()
            .drawCommands(shapes.s04[68])
            .setTransform(-966.95, -484.95);
        var instance15 = new Graphics()
            .drawCommands(shapes.s04[67])
            .setTransform(-966.95, -484.95);
        var instance14 = new Graphics()
            .drawCommands(shapes.s04[66])
            .setTransform(-966.95, -484.95);
        var instance13 = new Graphics()
            .drawCommands(shapes.s04[65])
            .setTransform(-966.95, -484.95);
        var instance12 = new Graphics()
            .drawCommands(shapes.s04[64])
            .setTransform(-966.95, -484.95);
        var instance11 = new Graphics()
            .drawCommands(shapes.s04[63])
            .setTransform(-966.95, -484.95);
        var instance10 = new Graphics()
            .drawCommands(shapes.s04[62])
            .setTransform(-966.95, -484.95);
        var instance9 = new Graphics()
            .drawCommands(shapes.s04[61])
            .setTransform(-966.95, -484.95);
        var instance8 = new Graphics()
            .drawCommands(shapes.s04[60])
            .setTransform(-966.95, -484.95);
        var instance7 = new Graphics()
            .drawCommands(shapes.s04[59])
            .setTransform(-966.95, -484.95);
        var instance6 = new Graphics()
            .drawCommands(shapes.s04[58])
            .setTransform(-966.95, -484.95);
        var instance5 = new Graphics()
            .drawCommands(shapes.s04[57])
            .setTransform(-966.95, -484.95);
        var instance4 = new Graphics()
            .drawCommands(shapes.s04[56]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s04[55]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s04[54]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[53])
            .setTransform(-5.7);
        this.addTimedChild(instance31)
            .addTimedChild(instance30)
            .addTimedChild(instance29)
            .addTimedChild(instance28)
            .addTimedChild(instance27)
            .addTimedChild(instance26)
            .addTimedChild(instance25)
            .addTimedChild(instance24)
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
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    lib.APRON = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[84]);
        this.addChild(instance1);
    });

    lib.MAMMOTH_TUFTS_1 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[85])
            .setTransform(-1094.5, -719);
        this.addChild(instance1);
    });

    lib.MAMMOTH_TUFTS_2 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[86])
            .setTransform(-1220.8, -767.2);
        this.addChild(instance1);
    });

    lib.MAMMOTH_BODY_BACK = Container.extend(function () {
        Container.call(this);
        var instance17 = new Graphics()
            .drawCommands(shapes.s04[103]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s04[102])
            .setTransform(-1273.7, -460.55);
        var instance15 = new Graphics()
            .drawCommands(shapes.s04[101])
            .setTransform(-1273.7, -460.55);
        var instance14 = new Graphics()
            .drawCommands(shapes.s04[100])
            .setTransform(-1273.7, -460.55);
        var instance13 = new Graphics()
            .drawCommands(shapes.s04[99])
            .setTransform(-1273.7, -460.55);
        var instance12 = new Graphics()
            .drawCommands(shapes.s04[98])
            .setTransform(-1273.7, -460.55);
        var instance11 = new Graphics()
            .drawCommands(shapes.s04[97])
            .setTransform(-1273.7, -460.55);
        var instance10 = new Graphics()
            .drawCommands(shapes.s04[96])
            .setTransform(-1273.7, -460.55);
        var instance9 = new Graphics()
            .drawCommands(shapes.s04[95])
            .setTransform(-1273.7, -460.55);
        var instance8 = new Graphics()
            .drawCommands(shapes.s04[94])
            .setTransform(-1273.7, -460.55);
        var instance7 = new Graphics()
            .drawCommands(shapes.s04[93])
            .setTransform(-1273.7, -460.55);
        var instance6 = new Graphics()
            .drawCommands(shapes.s04[92])
            .setTransform(-1273.7, -460.55);
        var instance5 = new Graphics()
            .drawCommands(shapes.s04[91])
            .setTransform(-1273.7, -460.55);
        var instance4 = new Graphics()
            .drawCommands(shapes.s04[90])
            .setTransform(-1273.7, -460.55);
        var instance3 = new Graphics()
            .drawCommands(shapes.s04[89])
            .setTransform(-1277.3, -468.35);
        var instance2 = new Graphics()
            .drawCommands(shapes.s04[88])
            .setTransform(-1273.7, -460.55);
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[87])
            .setTransform(-1273.7, -460.55);
        this.addChild(instance17, instance16, instance15, instance14, instance13, instance12, instance11, instance10, instance9, instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1);
    });

    lib.MAMMOTH_LEG_FL = Container.extend(function () {
        Container.call(this);
        var instance17 = new Graphics()
            .drawCommands(shapes.s04[120])
            .setTransform(-1125.4, -770);
        var instance16 = new Graphics()
            .drawCommands(shapes.s04[119])
            .setTransform(-1125.4, -770);
        var instance15 = new Graphics()
            .drawCommands(shapes.s04[118])
            .setTransform(-1125.4, -770);
        var instance14 = new Graphics()
            .drawCommands(shapes.s04[117])
            .setTransform(-1125.4, -770);
        var instance13 = new Graphics()
            .drawCommands(shapes.s04[116])
            .setTransform(-1125.4, -770);
        var instance12 = new Graphics()
            .drawCommands(shapes.s04[115])
            .setTransform(-1125.4, -770);
        var instance11 = new Graphics()
            .drawCommands(shapes.s04[114])
            .setTransform(-1125.4, -770);
        var instance10 = new Graphics()
            .drawCommands(shapes.s04[113])
            .setTransform(-1125.4, -770);
        var instance9 = new Graphics()
            .drawCommands(shapes.s04[112])
            .setTransform(-1125.4, -770);
        var instance8 = new Graphics()
            .drawCommands(shapes.s04[111]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s04[110]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s04[109]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s04[108]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s04[107]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s04[106]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s04[105]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[104]);
        this.addChild(instance17, instance16, instance15, instance14, instance13, instance12, instance11, instance10, instance9, instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1);
    });

    lib.MAMMOTH_TUFTS_3 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[121])
            .setTransform(-1384.55, -762.8);
        this.addChild(instance1);
    });

    lib.MAMMOTH_LEG_BL = Container.extend(function () {
        Container.call(this);
        var instance11 = new Graphics()
            .drawCommands(shapes.s04[132])
            .setTransform(0, 80);
        var instance10 = new Graphics()
            .drawCommands(shapes.s04[131]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s04[130])
            .setTransform(-1416.45, -776.65);
        var instance8 = new Graphics()
            .drawCommands(shapes.s04[129])
            .setTransform(-1416.45, -776.65);
        var instance7 = new Graphics()
            .drawCommands(shapes.s04[128])
            .setTransform(-1416.45, -776.65);
        var instance6 = new Graphics()
            .drawCommands(shapes.s04[127])
            .setTransform(-1416.45, -776.65);
        var instance5 = new Graphics()
            .drawCommands(shapes.s04[126])
            .setTransform(-1416.45, -776.65);
        var instance4 = new Graphics()
            .drawCommands(shapes.s04[125])
            .setTransform(-1416.45, -776.65);
        var instance3 = new Graphics()
            .drawCommands(shapes.s04[124])
            .setTransform(-1416.45, -776.65);
        var instance2 = new Graphics()
            .drawCommands(shapes.s04[123])
            .setTransform(-1416.45, -776.65);
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[122])
            .setTransform(-1415.95, -776.5);
        this.addChild(instance11, instance10, instance9, instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1);
    });

    lib.MAMMOTH_OVERLAPPING_HAIRS_2 = Container.extend(function () {
        Container.call(this);
        var instance3 = new Graphics()
            .drawCommands(shapes.s04[135])
            .setTransform(-1010.75, -587.2);
        var instance2 = new Graphics()
            .drawCommands(shapes.s04[134])
            .setTransform(-1010.75, -587.2);
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[133])
            .setTransform(-1010.75, -587.2);
        this.addChild(instance3, instance2, instance1);
    });

    lib.MAMMOTH_OVERLAPPING_HAIR_1 = Container.extend(function () {
        Container.call(this);
        var instance3 = new Graphics()
            .drawCommands(shapes.s04[138])
            .setTransform(-1279.75, -710.8);
        var instance2 = new Graphics()
            .drawCommands(shapes.s04[137])
            .setTransform(-1279.75, -710.8);
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[136])
            .setTransform(-1279.75, -710.8);
        this.addChild(instance3, instance2, instance1);
    });

    lib.MAMMOTH_BODY_FRONT = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[139])
            .setTransform(-998.2, -516.65);
        this.addChild(instance1);
    });

    lib.MAMMOTH_BODY_MIDDLE = Container.extend(function () {
        Container.call(this);
        var instance22 = new Graphics()
            .drawCommands(shapes.s04[161]);
        var instance21 = new Graphics()
            .drawCommands(shapes.s04[160])
            .setTransform(-1185.2, -604.45);
        var instance20 = new Graphics()
            .drawCommands(shapes.s04[159])
            .setTransform(-1185.2, -604.45);
        var instance19 = new Graphics()
            .drawCommands(shapes.s04[158])
            .setTransform(-1185.2, -604.45);
        var instance18 = new Graphics()
            .drawCommands(shapes.s04[157])
            .setTransform(-1185.2, -604.45);
        var instance17 = new Graphics()
            .drawCommands(shapes.s04[156])
            .setTransform(-1185.2, -604.45);
        var instance16 = new Graphics()
            .drawCommands(shapes.s04[155])
            .setTransform(-1185.2, -604.45);
        var instance15 = new Graphics()
            .drawCommands(shapes.s04[154])
            .setTransform(-1185.2, -604.45);
        var instance14 = new Graphics()
            .drawCommands(shapes.s04[153])
            .setTransform(-1185.2, -604.45);
        var instance13 = new Graphics()
            .drawCommands(shapes.s04[152])
            .setTransform(-1185.2, -604.45);
        var instance12 = new Graphics()
            .drawCommands(shapes.s04[151])
            .setTransform(-1185.2, -604.45);
        var instance11 = new Graphics()
            .drawCommands(shapes.s04[150])
            .setTransform(-1185.2, -604.45);
        var instance10 = new Graphics()
            .drawCommands(shapes.s04[149])
            .setTransform(-1185.2, -604.45);
        var instance9 = new Graphics()
            .drawCommands(shapes.s04[148])
            .setTransform(-1185.2, -604.45);
        var instance8 = new Graphics()
            .drawCommands(shapes.s04[147])
            .setTransform(-1185.2, -604.45);
        var instance7 = new Graphics()
            .drawCommands(shapes.s04[146])
            .setTransform(-1185.2, -604.45);
        var instance6 = new Graphics()
            .drawCommands(shapes.s04[145])
            .setTransform(-1185.2, -604.45);
        var instance5 = new Graphics()
            .drawCommands(shapes.s04[144])
            .setTransform(-1185.2, -604.45);
        var instance4 = new Graphics()
            .drawCommands(shapes.s04[143])
            .setTransform(-1185.2, -604.45);
        var instance3 = new Graphics()
            .drawCommands(shapes.s04[142])
            .setTransform(-1185.2, -604.45);
        var instance2 = new Graphics()
            .drawCommands(shapes.s04[141])
            .setTransform(-1185.2, -604.45);
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[140])
            .setTransform(-1185.2, -604.45);
        this.addChild(instance22, instance21, instance20, instance19, instance18, instance17, instance16, instance15, instance14, instance13, instance12, instance11, instance10, instance9, instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1);
    });

    lib.MAMMOTH_LEG_BR = Container.extend(function () {
        Container.call(this);
        var instance7 = new Graphics()
            .drawCommands(shapes.s04[168]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s04[167]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s04[166])
            .setTransform(-1300.3, -773.3);
        var instance4 = new Graphics()
            .drawCommands(shapes.s04[165])
            .setTransform(-1300.3, -773.3);
        var instance3 = new Graphics()
            .drawCommands(shapes.s04[164])
            .setTransform(-1300.3, -773.3);
        var instance2 = new Graphics()
            .drawCommands(shapes.s04[163])
            .setTransform(-1300.3, -773.3);
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[162])
            .setTransform(-1300.3, -773.3);
        this.addChild(instance7, instance6, instance5, instance4, instance3, instance2, instance1);
    });

    lib.MAMMOTH_LEG_FR = Container.extend(function () {
        Container.call(this);
        var instance9 = new Graphics()
            .drawCommands(shapes.s04[177]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s04[176]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s04[175])
            .setTransform(-983.3, -760.95);
        var instance6 = new Graphics()
            .drawCommands(shapes.s04[174])
            .setTransform(-982.1, -760.95);
        var instance5 = new Graphics()
            .drawCommands(shapes.s04[173])
            .setTransform(-982.1, -760.95);
        var instance4 = new Graphics()
            .drawCommands(shapes.s04[172])
            .setTransform(-982.1, -760.95);
        var instance3 = new Graphics()
            .drawCommands(shapes.s04[171])
            .setTransform(-982.1, -760.95);
        var instance2 = new Graphics()
            .drawCommands(shapes.s04[170])
            .setTransform(-982.1, -760.95);
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[169]);
        this.addChild(instance9, instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1);
    });

    lib.MAMMOTH_TUSK_R = Container.extend(function () {
        Container.call(this);
        var instance5 = new Graphics()
            .drawCommands(shapes.s04[182]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s04[181])
            .setTransform(-78.9, -99.3);
        var instance3 = new Graphics()
            .drawCommands(shapes.s04[180])
            .setTransform(-78.9, -99.3);
        var instance2 = new Graphics()
            .drawCommands(shapes.s04[179])
            .setTransform(-78.9, -99.3);
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[178])
            .setTransform(-78.9, -99.3);
        this.addChild(instance5, instance4, instance3, instance2, instance1);
    });

    var Graphic93 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 85, loop: false });
        var instance19 = new lib.MAMMOTH_TUSK_R();
        var instance18 = new lib.MAMMOTH_LEG_FR()
            .setTransform(-183.55, -167.3);
        var instance17 = new lib.MAMMOTH_LEG_BR()
            .setTransform(134.65, -154.95);
        var instance16 = new lib.MAMMOTH_BODY_MIDDLE();
        var instance15 = new lib.MAMMOTH_BODY_FRONT()
            .setTransform(-167.45, -411.6);
        var instance14 = new lib.MAMMOTH_OVERLAPPING_HAIR_1()
            .setTransform(114.1, -217.45);
        var instance13 = new lib.MAMMOTH_OVERLAPPING_HAIRS_2()
            .setTransform(-154.9, -341.05);
        var instance12 = new lib.MAMMOTH_LEG_BL()
            .setTransform(250.8, -151.6);
        var instance11 = new lib.MAMMOTH_TUFTS_3();
        var instance10 = new lib.MAMMOTH_LEG_FL()
            .setTransform(-40.25, -158.25);
        var instance9 = new lib.MAMMOTH_BODY_BACK();
        var instance8 = new lib.MAMMOTH_TUFTS_2();
        var instance7 = new lib.MAMMOTH_TUFTS_1()
            .setTransform(-71.15, -209.25);
        var instance6 = new lib.APRON();
        var instance5 = new Graphic18(MovieClip.SYNCHED);
        var instance4 = new Graphic17(MovieClip.SYNCHED);
        var instance3 = new lib.MOP();
        var instance2 = new Graphic16(MovieClip.SYNCHED);
        var instance1 = new Graphic15(MovieClip.SYNCHED);
        this.addTimedChild(instance19, 0, 85, {
                "0": {
                    x: -160.8,
                    y: -437.15,
                    r: -0.074
                },
                "26": {
                    x: -170.036,
                    y: -442.389,
                    r: -0.033
                },
                "27": {
                    x: -175.472,
                    y: -445.484,
                    r: -0.008
                },
                "28": {
                    x: -177.25,
                    y: -446.55,
                    r: 0
                },
                "44": {
                    r: 0.034
                },
                "45": {
                    r: 0
                },
                "46": {
                    r: 0.034
                },
                "47": {
                    r: 0
                },
                "48": {
                    r: 0.034
                },
                "50": {
                    r: 0
                },
                "51": {
                    r: 0.065
                },
                "53": {
                    r: 0
                },
                "54": {
                    r: 0.034
                },
                "56": {
                    r: 0
                },
                "57": {
                    r: 0.065
                },
                "59": {
                    r: 0
                },
                "60": {
                    r: 0.034
                },
                "62": {
                    r: 0
                },
                "63": {
                    r: 0.065
                },
                "65": {
                    r: 0
                },
                "66": {
                    r: 0.034
                },
                "68": {
                    r: 0
                },
                "69": {
                    r: 0.065
                },
                "71": {
                    y: -445.35,
                    r: 0.034
                },
                "72": {
                    y: -444.15,
                    r: 0
                }
            })
            .addTimedChild(instance18)
            .addTimedChild(instance17)
            .addTimedChild(instance16, 0, 85, {
                "0": {
                    x: 19.55,
                    y: -323.8
                },
                "44": {
                    y: -327.4
                },
                "45": {
                    y: -323.8
                },
                "46": {
                    y: -327.4
                },
                "47": {
                    y: -323.8
                },
                "48": {
                    y: -327.4
                },
                "50": {
                    y: -323.8
                },
                "51": {
                    y: -327.4
                },
                "53": {
                    y: -323.8
                },
                "54": {
                    y: -327.4
                },
                "56": {
                    y: -323.8
                },
                "57": {
                    y: -327.4
                },
                "59": {
                    y: -323.8
                },
                "60": {
                    y: -327.4
                },
                "62": {
                    y: -323.8
                },
                "63": {
                    y: -327.4
                },
                "65": {
                    y: -323.8
                },
                "66": {
                    y: -327.4
                },
                "68": {
                    y: -323.8
                },
                "69": {
                    y: -327.4
                },
                "71": {
                    y: -326.2
                },
                "72": {
                    y: -323.8
                }
            })
            .addTimedChild(instance15)
            .addTimedChild(instance14)
            .addTimedChild(instance13)
            .addTimedChild(instance12)
            .addTimedChild(instance11, 0, 85, {
                "0": {
                    x: 218.9,
                    y: -165.45,
                    r: 0
                },
                "44": {
                    r: -0.112
                },
                "45": {
                    r: 0
                },
                "46": {
                    r: -0.112
                },
                "47": {
                    r: 0
                },
                "48": {
                    r: -0.112
                },
                "50": {
                    r: 0
                },
                "51": {
                    r: -0.112
                },
                "53": {
                    r: 0
                },
                "54": {
                    r: -0.112
                },
                "56": {
                    r: 0
                },
                "57": {
                    r: -0.112
                },
                "59": {
                    r: 0
                },
                "60": {
                    r: -0.112
                },
                "62": {
                    r: 0
                },
                "63": {
                    r: -0.112
                },
                "65": {
                    r: 0
                },
                "66": {
                    r: -0.112
                },
                "68": {
                    r: 0
                },
                "69": {
                    r: -0.112
                },
                "71": {
                    r: -0.083
                },
                "72": {
                    r: 0
                }
            })
            .addTimedChild(instance10)
            .addTimedChild(instance9, 0, 85, {
                "0": {
                    x: 108.05,
                    y: -467.7
                },
                "44": {
                    y: -470.1
                },
                "45": {
                    y: -467.7
                },
                "46": {
                    y: -470.1
                },
                "47": {
                    y: -467.7
                },
                "48": {
                    y: -470.1
                },
                "50": {
                    y: -467.7
                },
                "51": {
                    y: -470.1
                },
                "53": {
                    y: -467.7
                },
                "54": {
                    y: -470.1
                },
                "56": {
                    y: -467.7
                },
                "57": {
                    y: -470.1
                },
                "59": {
                    y: -467.7
                },
                "60": {
                    y: -470.1
                },
                "62": {
                    y: -467.7
                },
                "63": {
                    y: -470.1
                },
                "65": {
                    y: -467.7
                },
                "66": {
                    y: -470.1
                },
                "68": {
                    y: -467.7
                },
                "69": {
                    y: -470.1
                },
                "71": {
                    y: -468.95
                },
                "72": {
                    y: -467.7
                }
            })
            .addTimedChild(instance8, 0, 85, {
                "0": {
                    x: 55.15,
                    y: -161.05,
                    r: 0
                },
                "44": {
                    r: -0.091
                },
                "45": {
                    r: 0
                },
                "46": {
                    r: -0.091
                },
                "47": {
                    r: 0
                },
                "48": {
                    r: -0.091
                },
                "50": {
                    r: 0
                },
                "51": {
                    r: -0.091
                },
                "53": {
                    r: 0
                },
                "54": {
                    r: -0.091
                },
                "56": {
                    r: 0
                },
                "57": {
                    r: -0.091
                },
                "59": {
                    r: 0
                },
                "60": {
                    r: -0.091
                },
                "62": {
                    r: 0
                },
                "63": {
                    r: -0.091
                },
                "65": {
                    r: 0
                },
                "66": {
                    r: -0.091
                },
                "68": {
                    r: 0
                },
                "69": {
                    r: -0.091
                },
                "71": {
                    r: -0.06
                },
                "72": {
                    r: 0
                }
            })
            .addTimedChild(instance7)
            .addTimedChild(instance6, 0, 85, {
                "0": {
                    x: -97.85,
                    y: -270.4,
                    r: 0
                },
                "44": {
                    x: -95,
                    y: -270.1,
                    r: -0.014
                },
                "45": {
                    x: -97.85,
                    y: -270.4,
                    r: 0
                },
                "46": {
                    x: -95,
                    y: -270.1,
                    r: -0.014
                },
                "47": {
                    x: -97.85,
                    y: -270.4,
                    r: 0
                },
                "48": {
                    x: -95,
                    y: -270.1,
                    r: -0.014
                },
                "50": {
                    x: -97.85,
                    y: -270.4,
                    r: 0
                },
                "51": {
                    x: -95,
                    y: -270.1,
                    r: -0.014
                },
                "53": {
                    x: -97.85,
                    y: -270.4,
                    r: 0
                },
                "54": {
                    x: -95,
                    y: -270.1,
                    r: -0.014
                },
                "56": {
                    x: -97.85,
                    y: -270.4,
                    r: 0
                },
                "57": {
                    x: -95,
                    y: -270.1,
                    r: -0.014
                },
                "59": {
                    x: -97.85,
                    y: -270.4,
                    r: 0
                },
                "60": {
                    x: -95,
                    y: -270.1,
                    r: -0.014
                },
                "62": {
                    x: -97.85,
                    y: -270.4,
                    r: 0
                },
                "63": {
                    x: -95,
                    y: -270.1,
                    r: -0.014
                },
                "65": {
                    x: -97.85,
                    y: -270.4,
                    r: 0
                },
                "66": {
                    x: -95,
                    y: -270.1,
                    r: -0.014
                },
                "68": {
                    x: -97.85,
                    y: -270.4,
                    r: 0
                },
                "69": {
                    x: -95,
                    y: -270.1,
                    r: -0.014
                },
                "71": {
                    x: -96.5,
                    y: -270.25,
                    r: -0.008
                },
                "72": {
                    x: -97.85,
                    y: -270.4,
                    r: 0
                }
            })
            .addTimedChild(instance5, 0, 85, {
                "0": {
                    x: -179.7,
                    y: -430.1,
                    sy: 1.052,
                    r: -0.117
                },
                "26": {
                    x: -191.967,
                    y: -443.208,
                    sy: 1.023,
                    r: -0.052
                },
                "27": {
                    x: -199.217,
                    y: -450.974,
                    sy: 1.006,
                    r: -0.013
                },
                "28": {
                    x: -201.6,
                    y: -453.6,
                    sy: 1,
                    r: 0
                },
                "44": {
                    y: -452.35,
                    sy: 0.97
                },
                "45": {
                    y: -453.6,
                    sy: 1
                },
                "46": {
                    y: -452.35,
                    sy: 0.97
                },
                "47": {
                    y: -453.6,
                    sy: 1
                },
                "48": {
                    y: -452.35,
                    sy: 0.97
                },
                "50": {
                    y: -453.6,
                    sy: 1
                },
                "51": {
                    y: -452.35,
                    sy: 0.97
                },
                "53": {
                    y: -453.6,
                    sy: 1
                },
                "54": {
                    y: -452.35,
                    sy: 0.97
                },
                "56": {
                    y: -453.6,
                    sy: 1
                },
                "57": {
                    y: -452.35,
                    sy: 0.97
                },
                "59": {
                    y: -453.6,
                    sy: 1
                },
                "60": {
                    y: -452.35,
                    sy: 0.97
                },
                "62": {
                    y: -453.6,
                    sy: 1
                },
                "63": {
                    y: -452.35,
                    sy: 0.97
                },
                "65": {
                    y: -453.6,
                    sy: 1
                },
                "66": {
                    y: -452.35,
                    sy: 0.97
                },
                "68": {
                    y: -453.6,
                    sy: 1
                },
                "69": {
                    y: -452.35,
                    sy: 0.97
                },
                "71": {
                    y: -453.6,
                    sy: 1
                },
                "72": {
                    y: -452.35,
                    sy: 0.97
                }
            })
            .addTimedChild(instance4, 0, 85, {
                "0": {
                    x: -16.7,
                    y: -535.45,
                    r: -0.19
                },
                "26": {
                    x: -12.746,
                    y: -538.096,
                    r: -0.084
                },
                "27": {
                    x: -10.368,
                    y: -539.621,
                    r: -0.021
                },
                "28": {
                    x: -9.65,
                    y: -540.15,
                    r: 0
                },
                "44": {
                    x: -9.6,
                    r: 0.034
                },
                "45": {
                    x: -9.65,
                    r: 0
                },
                "46": {
                    x: -9.6,
                    r: 0.034
                },
                "47": {
                    x: -9.65,
                    r: 0
                },
                "48": {
                    x: -9.6,
                    r: 0.034
                },
                "50": {
                    x: -9.65,
                    r: 0
                },
                "51": {
                    x: -9.6,
                    r: 0.034
                },
                "53": {
                    x: -9.65,
                    r: 0
                },
                "54": {
                    x: -9.6,
                    r: 0.034
                },
                "56": {
                    x: -9.65,
                    r: 0
                },
                "57": {
                    x: -9.6,
                    r: 0.034
                },
                "59": {
                    x: -9.65,
                    r: 0
                },
                "60": {
                    x: -9.6,
                    r: 0.034
                },
                "62": {
                    x: -9.65,
                    r: 0
                },
                "63": {
                    x: -9.6,
                    r: 0.034
                },
                "65": {
                    x: -9.65,
                    r: 0
                },
                "66": {
                    x: -9.6,
                    r: 0.034
                },
                "68": {
                    x: -9.65,
                    r: 0
                },
                "69": {
                    x: -9.6,
                    r: 0.034
                },
                "71": {
                    x: -9.55,
                    y: -540.2,
                    r: 0.009
                },
                "72": {
                    x: -9.65,
                    y: -540.15,
                    r: 0
                }
            })
            .addTimedChild(instance3, 0, 85, {
                "0": {
                    x: -345.6,
                    y: -149.8,
                    r: 0.051
                },
                "26": {
                    x: -345.611,
                    y: -149.866,
                    r: 0.02
                },
                "27": {
                    x: -345.648,
                    y: -149.824,
                    r: 0.001
                },
                "28": {
                    x: -345.6,
                    y: -149.8,
                    r: -0.006
                },
                "44": {
                    y: -149.85,
                    r: -0.009
                },
                "45": {
                    y: -149.8,
                    r: -0.006
                },
                "46": {
                    y: -149.85,
                    r: -0.009
                },
                "47": {
                    y: -149.8,
                    r: -0.006
                },
                "48": {
                    y: -149.85,
                    r: -0.009
                },
                "50": {
                    y: -149.8,
                    r: -0.006
                },
                "51": {
                    y: -149.85,
                    r: -0.009
                },
                "53": {
                    y: -149.8,
                    r: -0.006
                },
                "54": {
                    y: -149.85,
                    r: -0.009
                },
                "56": {
                    y: -149.8,
                    r: -0.006
                },
                "57": {
                    y: -149.85,
                    r: -0.009
                },
                "59": {
                    y: -149.8,
                    r: -0.006
                },
                "60": {
                    y: -149.85,
                    r: -0.009
                },
                "62": {
                    y: -149.8,
                    r: -0.006
                },
                "63": {
                    y: -149.85,
                    r: -0.009
                },
                "65": {
                    y: -149.8,
                    r: -0.006
                },
                "66": {
                    y: -149.85,
                    r: -0.009
                },
                "68": {
                    y: -149.8,
                    r: -0.006
                },
                "69": {
                    y: -149.85,
                    r: -0.009
                },
                "71": {
                    y: -149.8,
                    r: -0.006
                },
                "72": {
                    y: -149.85,
                    r: -0.009
                }
            })
            .addTimedChild(instance2, 0, 85, {
                "0": {
                    x: -326.1,
                    y: -438.6,
                    r: -0.583
                },
                "26": {
                    x: -336.475,
                    y: -460.39,
                    r: -0.258
                },
                "27": {
                    x: -342.504,
                    y: -473.242,
                    r: -0.065
                },
                "28": {
                    x: -344.55,
                    y: -477.75,
                    r: 0
                },
                "44": {
                    y: -475.65,
                    r: -0.004
                },
                "45": {
                    y: -477.75,
                    r: 0
                },
                "46": {
                    y: -475.65,
                    r: -0.004
                },
                "47": {
                    y: -477.75,
                    r: 0
                },
                "48": {
                    y: -475.65,
                    r: -0.004
                },
                "50": {
                    y: -477.75,
                    r: 0
                },
                "51": {
                    y: -475.65,
                    r: -0.004
                },
                "53": {
                    y: -477.75,
                    r: 0
                },
                "54": {
                    y: -475.65,
                    r: -0.004
                },
                "56": {
                    y: -477.75,
                    r: 0
                },
                "57": {
                    y: -475.65,
                    r: -0.004
                },
                "59": {
                    y: -477.75,
                    r: 0
                },
                "60": {
                    y: -475.65,
                    r: -0.004
                },
                "62": {
                    y: -477.75,
                    r: 0
                },
                "63": {
                    y: -475.65,
                    r: -0.004
                },
                "65": {
                    y: -477.75,
                    r: 0
                },
                "66": {
                    y: -475.65,
                    r: -0.004
                },
                "68": {
                    y: -477.75,
                    r: 0
                },
                "69": {
                    y: -475.65,
                    r: -0.004
                },
                "71": {
                    y: -477.75,
                    r: 0
                },
                "72": {
                    y: -475.65,
                    r: -0.004
                }
            })
            .addTimedChild(instance1, 0, 85, {
                "0": {
                    x: -225.85,
                    y: -737.75
                },
                "44": {
                    y: -742.65
                },
                "45": {
                    y: -737.75
                },
                "46": {
                    y: -742.65
                },
                "47": {
                    y: -737.75
                },
                "48": {
                    y: -742.65
                },
                "50": {
                    y: -737.75
                },
                "51": {
                    y: -742.65
                },
                "53": {
                    y: -737.75
                },
                "54": {
                    y: -742.65
                },
                "56": {
                    y: -737.75
                },
                "57": {
                    y: -742.65
                },
                "59": {
                    y: -737.75
                },
                "60": {
                    y: -742.65
                },
                "62": {
                    y: -737.75
                },
                "63": {
                    y: -742.65
                },
                "65": {
                    y: -737.75
                },
                "66": {
                    y: -742.65
                },
                "68": {
                    y: -737.75
                },
                "69": {
                    y: -742.65
                },
                "71": {
                    y: -737.75
                },
                "72": {
                    y: -732.85
                }
            });
    });

    var Graphic84 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 4, loop: false });
        var instance5 = new Graphics()
            .drawCommands(shapes.s04[187]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s04[186]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s04[185]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s04[184]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[183]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s04[192]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s04[191]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s04[190]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s04[189]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s04[188]);
        this.addTimedChild(instance5, 0, 2, {
                "0": {
                    x: 6.6,
                    y: 4.3
                },
                "1": {
                    x: -0.45,
                    y: 2.75
                }
            })
            .addTimedChild(instance4, 0, 2, {
                "0": {
                    x: 0.65,
                    y: 7.3
                },
                "1": {
                    x: 0.2,
                    y: 0
                }
            })
            .addTimedChild(instance3, 0, 2, {
                "0": {
                    x: -0.2,
                    y: 0
                },
                "1": {
                    x: 6.25,
                    y: -4.2
                }
            })
            .addTimedChild(instance2, 0, 2, {
                "0": {
                    x: -4.3,
                    y: -3.85
                },
                "1": {
                    x: -1.2,
                    y: 0.6
                }
            })
            .addTimedChild(instance1, 0, 2, {
                "0": {
                    x: 2.95,
                    y: -1.95
                },
                "1": {
                    x: 0.3,
                    y: 2
                }
            })
            .addTimedChild(instance10, 2, 1, {
                "2": {
                    x: 0.2,
                    y: 0.4
                }
            })
            .addTimedChild(instance9, 2, 1, {
                "2": {
                    x: 0.25,
                    y: 0.45,
                    sx: 1.103,
                    sy: 1.103
                }
            })
            .addTimedChild(instance8, 2, 1, {
                "2": {
                    x: -0.3,
                    y: 0.5,
                    sx: 1.103,
                    sy: 1.103
                }
            })
            .addTimedChild(instance7, 2, 1, {
                "2": {
                    x: -1.35,
                    y: 1.05,
                    sx: 1.103,
                    sy: 1.103
                }
            })
            .addTimedChild(instance6, 2, 1, {
                "2": {
                    x: 0.05,
                    y: 2.6,
                    sx: 1.103,
                    sy: 1.103
                }
            });
    });

    var Graphic86 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 4, loop: false });
        var instance5 = new Graphics()
            .drawCommands(shapes.s04[187]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s04[186]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s04[185]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s04[184]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[183]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s04[192])
            .setTransform(0.2, 0.4);
        var instance9 = new Graphics()
            .drawCommands(shapes.s04[191])
            .setTransform(0.25, 0.45, 1.103, 1.103);
        var instance8 = new Graphics()
            .drawCommands(shapes.s04[190])
            .setTransform(-0.3, 0.5, 1.103, 1.103);
        var instance7 = new Graphics()
            .drawCommands(shapes.s04[189])
            .setTransform(-1.35, 1.05, 1.103, 1.103);
        var instance6 = new Graphics()
            .drawCommands(shapes.s04[188])
            .setTransform(0.05, 2.6, 1.103, 1.103);
        this.addTimedChild(instance5, 1, 2, {
                "1": {
                    x: 6.6,
                    y: 4.3
                },
                "2": {
                    x: -0.45,
                    y: 2.75
                }
            })
            .addTimedChild(instance4, 1, 2, {
                "1": {
                    x: 0.65,
                    y: 7.3
                },
                "2": {
                    x: 0.2,
                    y: 0
                }
            })
            .addTimedChild(instance3, 1, 2, {
                "1": {
                    x: -0.2,
                    y: 0
                },
                "2": {
                    x: 6.25,
                    y: -4.2
                }
            })
            .addTimedChild(instance2, 1, 2, {
                "1": {
                    x: -4.3,
                    y: -3.85
                },
                "2": {
                    x: -1.2,
                    y: 0.6
                }
            })
            .addTimedChild(instance1, 1, 2, {
                "1": {
                    x: 2.95,
                    y: -1.95
                },
                "2": {
                    x: 0.3,
                    y: 2
                }
            })
            .addTimedChild(instance10, 3, 1)
            .addTimedChild(instance9, 3, 1)
            .addTimedChild(instance8, 3, 1)
            .addTimedChild(instance7, 3, 1)
            .addTimedChild(instance6, 3, 1);
    });

    var Graphic87 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 4, loop: false });
        var instance5 = new Graphics()
            .drawCommands(shapes.s04[187]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s04[186]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s04[185]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s04[184]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[183]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s04[192])
            .setTransform(0.2, 0.4);
        var instance9 = new Graphics()
            .drawCommands(shapes.s04[191])
            .setTransform(0.25, 0.45, 1.103, 1.103);
        var instance8 = new Graphics()
            .drawCommands(shapes.s04[190])
            .setTransform(-0.3, 0.5, 1.103, 1.103);
        var instance7 = new Graphics()
            .drawCommands(shapes.s04[189])
            .setTransform(-1.35, 1.05, 1.103, 1.103);
        var instance6 = new Graphics()
            .drawCommands(shapes.s04[188])
            .setTransform(0.05, 2.6, 1.103, 1.103);
        this.addTimedChild(instance5, 1, 2, {
                "1": {
                    x: 6.6,
                    y: 4.3
                },
                "2": {
                    x: -0.45,
                    y: 2.75
                }
            })
            .addTimedChild(instance4, 1, 2, {
                "1": {
                    x: 0.65,
                    y: 7.3
                },
                "2": {
                    x: 0.2,
                    y: 0
                }
            })
            .addTimedChild(instance3, 1, 2, {
                "1": {
                    x: -0.2,
                    y: 0
                },
                "2": {
                    x: 6.25,
                    y: -4.2
                }
            })
            .addTimedChild(instance2, 1, 2, {
                "1": {
                    x: -4.3,
                    y: -3.85
                },
                "2": {
                    x: -1.2,
                    y: 0.6
                }
            })
            .addTimedChild(instance1, 1, 2, {
                "1": {
                    x: 2.95,
                    y: -1.95
                },
                "2": {
                    x: 0.3,
                    y: 2
                }
            })
            .addTimedChild(instance10, 3, 1)
            .addTimedChild(instance9, 3, 1)
            .addTimedChild(instance8, 3, 1)
            .addTimedChild(instance7, 3, 1)
            .addTimedChild(instance6, 3, 1);
    });

    var Graphic89 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 4, loop: false });
        var instance5 = new Graphics()
            .drawCommands(shapes.s04[187]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s04[186]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s04[185]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s04[184]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[183]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s04[192])
            .setTransform(0.2, 0.4);
        var instance9 = new Graphics()
            .drawCommands(shapes.s04[191])
            .setTransform(0.25, 0.45, 1.103, 1.103);
        var instance8 = new Graphics()
            .drawCommands(shapes.s04[190])
            .setTransform(-0.3, 0.5, 1.103, 1.103);
        var instance7 = new Graphics()
            .drawCommands(shapes.s04[189])
            .setTransform(-1.35, 1.05, 1.103, 1.103);
        var instance6 = new Graphics()
            .drawCommands(shapes.s04[188])
            .setTransform(0.05, 2.6, 1.103, 1.103);
        this.addTimedChild(instance5, 1, 2, {
                "1": {
                    x: 6.6,
                    y: 4.3
                },
                "2": {
                    x: -0.45,
                    y: 2.75
                }
            })
            .addTimedChild(instance4, 1, 2, {
                "1": {
                    x: 0.65,
                    y: 7.3
                },
                "2": {
                    x: 0.2,
                    y: 0
                }
            })
            .addTimedChild(instance3, 1, 2, {
                "1": {
                    x: -0.2,
                    y: 0
                },
                "2": {
                    x: 6.25,
                    y: -4.2
                }
            })
            .addTimedChild(instance2, 1, 2, {
                "1": {
                    x: -4.3,
                    y: -3.85
                },
                "2": {
                    x: -1.2,
                    y: 0.6
                }
            })
            .addTimedChild(instance1, 1, 2, {
                "1": {
                    x: 2.95,
                    y: -1.95
                },
                "2": {
                    x: 0.3,
                    y: 2
                }
            })
            .addTimedChild(instance10, 3, 1)
            .addTimedChild(instance9, 3, 1)
            .addTimedChild(instance8, 3, 1)
            .addTimedChild(instance7, 3, 1)
            .addTimedChild(instance6, 3, 1);
    });

    var Graphic91 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 4, loop: false });
        var instance5 = new Graphics()
            .drawCommands(shapes.s04[187]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s04[186]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s04[185]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s04[184]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[183]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s04[192]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s04[191]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s04[190]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s04[189]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s04[188]);
        this.addTimedChild(instance5, 0, 2, {
                "0": {
                    x: 6.6,
                    y: 4.3
                },
                "1": {
                    x: -0.45,
                    y: 2.75
                }
            })
            .addTimedChild(instance4, 0, 2, {
                "0": {
                    x: 0.65,
                    y: 7.3
                },
                "1": {
                    x: 0.2,
                    y: 0
                }
            })
            .addTimedChild(instance3, 0, 2, {
                "0": {
                    x: -0.2,
                    y: 0
                },
                "1": {
                    x: 6.25,
                    y: -4.2
                }
            })
            .addTimedChild(instance2, 0, 2, {
                "0": {
                    x: -4.3,
                    y: -3.85
                },
                "1": {
                    x: -1.2,
                    y: 0.6
                }
            })
            .addTimedChild(instance1, 0, 2, {
                "0": {
                    x: 2.95,
                    y: -1.95
                },
                "1": {
                    x: 0.3,
                    y: 2
                }
            })
            .addTimedChild(instance10, 2, 1, {
                "2": {
                    x: 0.2,
                    y: 0.4
                }
            })
            .addTimedChild(instance9, 2, 1, {
                "2": {
                    x: 0.25,
                    y: 0.45,
                    sx: 1.103,
                    sy: 1.103
                }
            })
            .addTimedChild(instance8, 2, 1, {
                "2": {
                    x: -0.3,
                    y: 0.5,
                    sx: 1.103,
                    sy: 1.103
                }
            })
            .addTimedChild(instance7, 2, 1, {
                "2": {
                    x: -1.35,
                    y: 1.05,
                    sx: 1.103,
                    sy: 1.103
                }
            })
            .addTimedChild(instance6, 2, 1, {
                "2": {
                    x: 0.05,
                    y: 2.6,
                    sx: 1.103,
                    sy: 1.103
                }
            });
    });

    var Graphic94 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 4, loop: false });
        var instance5 = new Graphics()
            .drawCommands(shapes.s04[187]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s04[186]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s04[185]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s04[184]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[183]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s04[192]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s04[191]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s04[190]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s04[189]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s04[188]);
        this.addTimedChild(instance5, 0, 2, {
                "0": {
                    x: 6.6,
                    y: 4.3
                },
                "1": {
                    x: -0.45,
                    y: 2.75
                }
            })
            .addTimedChild(instance4, 0, 2, {
                "0": {
                    x: 0.65,
                    y: 7.3
                },
                "1": {
                    x: 0.2,
                    y: 0
                }
            })
            .addTimedChild(instance3, 0, 2, {
                "0": {
                    x: -0.2,
                    y: 0
                },
                "1": {
                    x: 6.25,
                    y: -4.2
                }
            })
            .addTimedChild(instance2, 0, 2, {
                "0": {
                    x: -4.3,
                    y: -3.85
                },
                "1": {
                    x: -1.2,
                    y: 0.6
                }
            })
            .addTimedChild(instance1, 0, 2, {
                "0": {
                    x: 2.95,
                    y: -1.95
                },
                "1": {
                    x: 0.3,
                    y: 2
                }
            })
            .addTimedChild(instance10, 2, 1, {
                "2": {
                    x: 0.2,
                    y: 0.4
                }
            })
            .addTimedChild(instance9, 2, 1, {
                "2": {
                    x: 0.25,
                    y: 0.45,
                    sx: 1.103,
                    sy: 1.103
                }
            })
            .addTimedChild(instance8, 2, 1, {
                "2": {
                    x: -0.3,
                    y: 0.5,
                    sx: 1.103,
                    sy: 1.103
                }
            })
            .addTimedChild(instance7, 2, 1, {
                "2": {
                    x: -1.35,
                    y: 1.05,
                    sx: 1.103,
                    sy: 1.103
                }
            })
            .addTimedChild(instance6, 2, 1, {
                "2": {
                    x: 0.05,
                    y: 2.6,
                    sx: 1.103,
                    sy: 1.103
                }
            });
    });

    var Graphic96 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 4, loop: false });
        var instance5 = new Graphics()
            .drawCommands(shapes.s04[187]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s04[186]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s04[185]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s04[184]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[183]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s04[192]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s04[191]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s04[190]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s04[189]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s04[188]);
        this.addTimedChild(instance5, 0, 2, {
                "0": {
                    x: 6.6,
                    y: 4.3
                },
                "1": {
                    x: -0.45,
                    y: 2.75
                }
            })
            .addTimedChild(instance4, 0, 2, {
                "0": {
                    x: 0.65,
                    y: 7.3
                },
                "1": {
                    x: 0.2,
                    y: 0
                }
            })
            .addTimedChild(instance3, 0, 2, {
                "0": {
                    x: -0.2,
                    y: 0
                },
                "1": {
                    x: 6.25,
                    y: -4.2
                }
            })
            .addTimedChild(instance2, 0, 2, {
                "0": {
                    x: -4.3,
                    y: -3.85
                },
                "1": {
                    x: -1.2,
                    y: 0.6
                }
            })
            .addTimedChild(instance1, 0, 2, {
                "0": {
                    x: 2.95,
                    y: -1.95
                },
                "1": {
                    x: 0.3,
                    y: 2
                }
            })
            .addTimedChild(instance10, 2, 1, {
                "2": {
                    x: 0.2,
                    y: 0.4
                }
            })
            .addTimedChild(instance9, 2, 1, {
                "2": {
                    x: 0.25,
                    y: 0.45,
                    sx: 1.103,
                    sy: 1.103
                }
            })
            .addTimedChild(instance8, 2, 1, {
                "2": {
                    x: -0.3,
                    y: 0.5,
                    sx: 1.103,
                    sy: 1.103
                }
            })
            .addTimedChild(instance7, 2, 1, {
                "2": {
                    x: -1.35,
                    y: 1.05,
                    sx: 1.103,
                    sy: 1.103
                }
            })
            .addTimedChild(instance6, 2, 1, {
                "2": {
                    x: 0.05,
                    y: 2.6,
                    sx: 1.103,
                    sy: 1.103
                }
            });
    });

    var Graphic98 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 4, loop: false });
        var instance5 = new Graphics()
            .drawCommands(shapes.s04[187]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s04[186]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s04[185]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s04[184]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[183]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s04[192]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s04[191]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s04[190]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s04[189]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s04[188]);
        this.addTimedChild(instance5, 0, 2, {
                "0": {
                    x: 6.6,
                    y: 4.3
                },
                "1": {
                    x: -0.45,
                    y: 2.75
                }
            })
            .addTimedChild(instance4, 0, 2, {
                "0": {
                    x: 0.65,
                    y: 7.3
                },
                "1": {
                    x: 0.2,
                    y: 0
                }
            })
            .addTimedChild(instance3, 0, 2, {
                "0": {
                    x: -0.2,
                    y: 0
                },
                "1": {
                    x: 6.25,
                    y: -4.2
                }
            })
            .addTimedChild(instance2, 0, 2, {
                "0": {
                    x: -4.3,
                    y: -3.85
                },
                "1": {
                    x: -1.2,
                    y: 0.6
                }
            })
            .addTimedChild(instance1, 0, 2, {
                "0": {
                    x: 2.95,
                    y: -1.95
                },
                "1": {
                    x: 0.3,
                    y: 2
                }
            })
            .addTimedChild(instance10, 2, 1, {
                "2": {
                    x: 0.2,
                    y: 0.4
                }
            })
            .addTimedChild(instance9, 2, 1, {
                "2": {
                    x: 0.25,
                    y: 0.45,
                    sx: 1.103,
                    sy: 1.103
                }
            })
            .addTimedChild(instance8, 2, 1, {
                "2": {
                    x: -0.3,
                    y: 0.5,
                    sx: 1.103,
                    sy: 1.103
                }
            })
            .addTimedChild(instance7, 2, 1, {
                "2": {
                    x: -1.35,
                    y: 1.05,
                    sx: 1.103,
                    sy: 1.103
                }
            })
            .addTimedChild(instance6, 2, 1, {
                "2": {
                    x: 0.05,
                    y: 2.6,
                    sx: 1.103,
                    sy: 1.103
                }
            });
    });

    var Graphic101 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 4, loop: false });
        var instance5 = new Graphics()
            .drawCommands(shapes.s04[187]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s04[186]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s04[185]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s04[184]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[183]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s04[192]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s04[191]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s04[190]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s04[189]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s04[188]);
        this.addTimedChild(instance5, 0, 2, {
                "0": {
                    x: 6.6,
                    y: 4.3
                },
                "1": {
                    x: -0.45,
                    y: 2.75
                }
            })
            .addTimedChild(instance4, 0, 2, {
                "0": {
                    x: 0.65,
                    y: 7.3
                },
                "1": {
                    x: 0.2,
                    y: 0
                }
            })
            .addTimedChild(instance3, 0, 2, {
                "0": {
                    x: -0.2,
                    y: 0
                },
                "1": {
                    x: 6.25,
                    y: -4.2
                }
            })
            .addTimedChild(instance2, 0, 2, {
                "0": {
                    x: -4.3,
                    y: -3.85
                },
                "1": {
                    x: -1.2,
                    y: 0.6
                }
            })
            .addTimedChild(instance1, 0, 2, {
                "0": {
                    x: 2.95,
                    y: -1.95
                },
                "1": {
                    x: 0.3,
                    y: 2
                }
            })
            .addTimedChild(instance10, 2, 1, {
                "2": {
                    x: 0.2,
                    y: 0.4
                }
            })
            .addTimedChild(instance9, 2, 1, {
                "2": {
                    x: 0.25,
                    y: 0.45,
                    sx: 1.103,
                    sy: 1.103
                }
            })
            .addTimedChild(instance8, 2, 1, {
                "2": {
                    x: -0.3,
                    y: 0.5,
                    sx: 1.103,
                    sy: 1.103
                }
            })
            .addTimedChild(instance7, 2, 1, {
                "2": {
                    x: -1.35,
                    y: 1.05,
                    sx: 1.103,
                    sy: 1.103
                }
            })
            .addTimedChild(instance6, 2, 1, {
                "2": {
                    x: 0.05,
                    y: 2.6,
                    sx: 1.103,
                    sy: 1.103
                }
            });
    });

    var Graphic103 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 4, loop: false });
        var instance5 = new Graphics()
            .drawCommands(shapes.s04[187]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s04[186]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s04[185]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s04[184]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[183]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s04[192]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s04[191]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s04[190]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s04[189]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s04[188]);
        this.addTimedChild(instance5, 0, 2, {
                "0": {
                    x: 6.6,
                    y: 4.3
                },
                "1": {
                    x: -0.45,
                    y: 2.75
                }
            })
            .addTimedChild(instance4, 0, 2, {
                "0": {
                    x: 0.65,
                    y: 7.3
                },
                "1": {
                    x: 0.2,
                    y: 0
                }
            })
            .addTimedChild(instance3, 0, 2, {
                "0": {
                    x: -0.2,
                    y: 0
                },
                "1": {
                    x: 6.25,
                    y: -4.2
                }
            })
            .addTimedChild(instance2, 0, 2, {
                "0": {
                    x: -4.3,
                    y: -3.85
                },
                "1": {
                    x: -1.2,
                    y: 0.6
                }
            })
            .addTimedChild(instance1, 0, 2, {
                "0": {
                    x: 2.95,
                    y: -1.95
                },
                "1": {
                    x: 0.3,
                    y: 2
                }
            })
            .addTimedChild(instance10, 2, 1, {
                "2": {
                    x: 0.2,
                    y: 0.4
                }
            })
            .addTimedChild(instance9, 2, 1, {
                "2": {
                    x: 0.25,
                    y: 0.45,
                    sx: 1.103,
                    sy: 1.103
                }
            })
            .addTimedChild(instance8, 2, 1, {
                "2": {
                    x: -0.3,
                    y: 0.5,
                    sx: 1.103,
                    sy: 1.103
                }
            })
            .addTimedChild(instance7, 2, 1, {
                "2": {
                    x: -1.35,
                    y: 1.05,
                    sx: 1.103,
                    sy: 1.103
                }
            })
            .addTimedChild(instance6, 2, 1, {
                "2": {
                    x: 0.05,
                    y: 2.6,
                    sx: 1.103,
                    sy: 1.103
                }
            });
    });

    var Graphic81 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 4, loop: false });
        var instance5 = new Graphics()
            .drawCommands(shapes.s04[187]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s04[186]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s04[185]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s04[184]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[183]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s04[192]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s04[191]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s04[190]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s04[189]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s04[188]);
        this.addTimedChild(instance5, 0, 2, {
                "0": {
                    x: 6.6,
                    y: 4.3
                },
                "1": {
                    x: -0.45,
                    y: 2.75
                }
            })
            .addTimedChild(instance4, 0, 2, {
                "0": {
                    x: 0.65,
                    y: 7.3
                },
                "1": {
                    x: 0.2,
                    y: 0
                }
            })
            .addTimedChild(instance3, 0, 2, {
                "0": {
                    x: -0.2,
                    y: 0
                },
                "1": {
                    x: 6.25,
                    y: -4.2
                }
            })
            .addTimedChild(instance2, 0, 2, {
                "0": {
                    x: -4.3,
                    y: -3.85
                },
                "1": {
                    x: -1.2,
                    y: 0.6
                }
            })
            .addTimedChild(instance1, 0, 2, {
                "0": {
                    x: 2.95,
                    y: -1.95
                },
                "1": {
                    x: 0.3,
                    y: 2
                }
            })
            .addTimedChild(instance10, 2, 1, {
                "2": {
                    x: 0.2,
                    y: 0.4
                }
            })
            .addTimedChild(instance9, 2, 1, {
                "2": {
                    x: 0.25,
                    y: 0.45,
                    sx: 1.103,
                    sy: 1.103
                }
            })
            .addTimedChild(instance8, 2, 1, {
                "2": {
                    x: -0.3,
                    y: 0.5,
                    sx: 1.103,
                    sy: 1.103
                }
            })
            .addTimedChild(instance7, 2, 1, {
                "2": {
                    x: -1.35,
                    y: 1.05,
                    sx: 1.103,
                    sy: 1.103
                }
            })
            .addTimedChild(instance6, 2, 1, {
                "2": {
                    x: 0.05,
                    y: 2.6,
                    sx: 1.103,
                    sy: 1.103
                }
            });
    });

    var Graphic85 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 4, loop: false });
        var instance5 = new Graphics()
            .drawCommands(shapes.s04[187]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s04[186]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s04[185]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s04[184]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[183]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s04[192]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s04[191]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s04[190]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s04[189]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s04[188]);
        this.addTimedChild(instance5, 0, 2, {
                "0": {
                    x: 6.6,
                    y: 4.3
                },
                "1": {
                    x: -0.45,
                    y: 2.75
                }
            })
            .addTimedChild(instance4, 0, 2, {
                "0": {
                    x: 0.65,
                    y: 7.3
                },
                "1": {
                    x: 0.2,
                    y: 0
                }
            })
            .addTimedChild(instance3, 0, 2, {
                "0": {
                    x: -0.2,
                    y: 0
                },
                "1": {
                    x: 6.25,
                    y: -4.2
                }
            })
            .addTimedChild(instance2, 0, 2, {
                "0": {
                    x: -4.3,
                    y: -3.85
                },
                "1": {
                    x: -1.2,
                    y: 0.6
                }
            })
            .addTimedChild(instance1, 0, 2, {
                "0": {
                    x: 2.95,
                    y: -1.95
                },
                "1": {
                    x: 0.3,
                    y: 2
                }
            })
            .addTimedChild(instance10, 2, 1, {
                "2": {
                    x: 0.2,
                    y: 0.4
                }
            })
            .addTimedChild(instance9, 2, 1, {
                "2": {
                    x: 0.25,
                    y: 0.45,
                    sx: 1.103,
                    sy: 1.103
                }
            })
            .addTimedChild(instance8, 2, 1, {
                "2": {
                    x: -0.3,
                    y: 0.5,
                    sx: 1.103,
                    sy: 1.103
                }
            })
            .addTimedChild(instance7, 2, 1, {
                "2": {
                    x: -1.35,
                    y: 1.05,
                    sx: 1.103,
                    sy: 1.103
                }
            })
            .addTimedChild(instance6, 2, 1, {
                "2": {
                    x: 0.05,
                    y: 2.6,
                    sx: 1.103,
                    sy: 1.103
                }
            });
    });

    var Graphic88 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 4, loop: false });
        var instance5 = new Graphics()
            .drawCommands(shapes.s04[187]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s04[186]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s04[185]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s04[184]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[183]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s04[192])
            .setTransform(0.2, 0.4);
        var instance9 = new Graphics()
            .drawCommands(shapes.s04[191])
            .setTransform(0.25, 0.45, 1.103, 1.103);
        var instance8 = new Graphics()
            .drawCommands(shapes.s04[190])
            .setTransform(-0.3, 0.5, 1.103, 1.103);
        var instance7 = new Graphics()
            .drawCommands(shapes.s04[189])
            .setTransform(-1.35, 1.05, 1.103, 1.103);
        var instance6 = new Graphics()
            .drawCommands(shapes.s04[188])
            .setTransform(0.05, 2.6, 1.103, 1.103);
        this.addTimedChild(instance5, 1, 2, {
                "1": {
                    x: 6.6,
                    y: 4.3
                },
                "2": {
                    x: -0.45,
                    y: 2.75
                }
            })
            .addTimedChild(instance4, 1, 2, {
                "1": {
                    x: 0.65,
                    y: 7.3
                },
                "2": {
                    x: 0.2,
                    y: 0
                }
            })
            .addTimedChild(instance3, 1, 2, {
                "1": {
                    x: -0.2,
                    y: 0
                },
                "2": {
                    x: 6.25,
                    y: -4.2
                }
            })
            .addTimedChild(instance2, 1, 2, {
                "1": {
                    x: -4.3,
                    y: -3.85
                },
                "2": {
                    x: -1.2,
                    y: 0.6
                }
            })
            .addTimedChild(instance1, 1, 2, {
                "1": {
                    x: 2.95,
                    y: -1.95
                },
                "2": {
                    x: 0.3,
                    y: 2
                }
            })
            .addTimedChild(instance10, 3, 1)
            .addTimedChild(instance9, 3, 1)
            .addTimedChild(instance8, 3, 1)
            .addTimedChild(instance7, 3, 1)
            .addTimedChild(instance6, 3, 1);
    });

    var Graphic90 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 4, loop: false });
        var instance5 = new Graphics()
            .drawCommands(shapes.s04[187]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s04[186]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s04[185]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s04[184]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[183]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s04[192])
            .setTransform(0.2, 0.4);
        var instance9 = new Graphics()
            .drawCommands(shapes.s04[191])
            .setTransform(0.25, 0.45, 1.103, 1.103);
        var instance8 = new Graphics()
            .drawCommands(shapes.s04[190])
            .setTransform(-0.3, 0.5, 1.103, 1.103);
        var instance7 = new Graphics()
            .drawCommands(shapes.s04[189])
            .setTransform(-1.35, 1.05, 1.103, 1.103);
        var instance6 = new Graphics()
            .drawCommands(shapes.s04[188])
            .setTransform(0.05, 2.6, 1.103, 1.103);
        this.addTimedChild(instance5, 1, 2, {
                "1": {
                    x: 6.6,
                    y: 4.3
                },
                "2": {
                    x: -0.45,
                    y: 2.75
                }
            })
            .addTimedChild(instance4, 1, 2, {
                "1": {
                    x: 0.65,
                    y: 7.3
                },
                "2": {
                    x: 0.2,
                    y: 0
                }
            })
            .addTimedChild(instance3, 1, 2, {
                "1": {
                    x: -0.2,
                    y: 0
                },
                "2": {
                    x: 6.25,
                    y: -4.2
                }
            })
            .addTimedChild(instance2, 1, 2, {
                "1": {
                    x: -4.3,
                    y: -3.85
                },
                "2": {
                    x: -1.2,
                    y: 0.6
                }
            })
            .addTimedChild(instance1, 1, 2, {
                "1": {
                    x: 2.95,
                    y: -1.95
                },
                "2": {
                    x: 0.3,
                    y: 2
                }
            })
            .addTimedChild(instance10, 3, 1)
            .addTimedChild(instance9, 3, 1)
            .addTimedChild(instance8, 3, 1)
            .addTimedChild(instance7, 3, 1)
            .addTimedChild(instance6, 3, 1);
    });

    var Graphic92 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 4, loop: false });
        var instance5 = new Graphics()
            .drawCommands(shapes.s04[187]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s04[186]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s04[185]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s04[184]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[183]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s04[192]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s04[191]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s04[190]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s04[189]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s04[188]);
        this.addTimedChild(instance5, 0, 2, {
                "0": {
                    x: 6.6,
                    y: 4.3
                },
                "1": {
                    x: -0.45,
                    y: 2.75
                }
            })
            .addTimedChild(instance4, 0, 2, {
                "0": {
                    x: 0.65,
                    y: 7.3
                },
                "1": {
                    x: 0.2,
                    y: 0
                }
            })
            .addTimedChild(instance3, 0, 2, {
                "0": {
                    x: -0.2,
                    y: 0
                },
                "1": {
                    x: 6.25,
                    y: -4.2
                }
            })
            .addTimedChild(instance2, 0, 2, {
                "0": {
                    x: -4.3,
                    y: -3.85
                },
                "1": {
                    x: -1.2,
                    y: 0.6
                }
            })
            .addTimedChild(instance1, 0, 2, {
                "0": {
                    x: 2.95,
                    y: -1.95
                },
                "1": {
                    x: 0.3,
                    y: 2
                }
            })
            .addTimedChild(instance10, 2, 1, {
                "2": {
                    x: 0.2,
                    y: 0.4
                }
            })
            .addTimedChild(instance9, 2, 1, {
                "2": {
                    x: 0.25,
                    y: 0.45,
                    sx: 1.103,
                    sy: 1.103
                }
            })
            .addTimedChild(instance8, 2, 1, {
                "2": {
                    x: -0.3,
                    y: 0.5,
                    sx: 1.103,
                    sy: 1.103
                }
            })
            .addTimedChild(instance7, 2, 1, {
                "2": {
                    x: -1.35,
                    y: 1.05,
                    sx: 1.103,
                    sy: 1.103
                }
            })
            .addTimedChild(instance6, 2, 1, {
                "2": {
                    x: 0.05,
                    y: 2.6,
                    sx: 1.103,
                    sy: 1.103
                }
            });
    });

    var Graphic95 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 4, loop: false });
        var instance5 = new Graphics()
            .drawCommands(shapes.s04[187]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s04[186]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s04[185]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s04[184]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[183]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s04[192]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s04[191]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s04[190]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s04[189]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s04[188]);
        this.addTimedChild(instance5, 0, 2, {
                "0": {
                    x: 6.6,
                    y: 4.3
                },
                "1": {
                    x: -0.45,
                    y: 2.75
                }
            })
            .addTimedChild(instance4, 0, 2, {
                "0": {
                    x: 0.65,
                    y: 7.3
                },
                "1": {
                    x: 0.2,
                    y: 0
                }
            })
            .addTimedChild(instance3, 0, 2, {
                "0": {
                    x: -0.2,
                    y: 0
                },
                "1": {
                    x: 6.25,
                    y: -4.2
                }
            })
            .addTimedChild(instance2, 0, 2, {
                "0": {
                    x: -4.3,
                    y: -3.85
                },
                "1": {
                    x: -1.2,
                    y: 0.6
                }
            })
            .addTimedChild(instance1, 0, 2, {
                "0": {
                    x: 2.95,
                    y: -1.95
                },
                "1": {
                    x: 0.3,
                    y: 2
                }
            })
            .addTimedChild(instance10, 2, 1, {
                "2": {
                    x: 0.2,
                    y: 0.4
                }
            })
            .addTimedChild(instance9, 2, 1, {
                "2": {
                    x: 0.25,
                    y: 0.45,
                    sx: 1.103,
                    sy: 1.103
                }
            })
            .addTimedChild(instance8, 2, 1, {
                "2": {
                    x: -0.3,
                    y: 0.5,
                    sx: 1.103,
                    sy: 1.103
                }
            })
            .addTimedChild(instance7, 2, 1, {
                "2": {
                    x: -1.35,
                    y: 1.05,
                    sx: 1.103,
                    sy: 1.103
                }
            })
            .addTimedChild(instance6, 2, 1, {
                "2": {
                    x: 0.05,
                    y: 2.6,
                    sx: 1.103,
                    sy: 1.103
                }
            });
    });

    var Graphic97 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 4, loop: false });
        var instance5 = new Graphics()
            .drawCommands(shapes.s04[187]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s04[186]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s04[185]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s04[184]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[183]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s04[192])
            .setTransform(0.2, 0.4);
        var instance9 = new Graphics()
            .drawCommands(shapes.s04[191])
            .setTransform(0.25, 0.45, 1.103, 1.103);
        var instance8 = new Graphics()
            .drawCommands(shapes.s04[190])
            .setTransform(-0.3, 0.5, 1.103, 1.103);
        var instance7 = new Graphics()
            .drawCommands(shapes.s04[189])
            .setTransform(-1.35, 1.05, 1.103, 1.103);
        var instance6 = new Graphics()
            .drawCommands(shapes.s04[188])
            .setTransform(0.05, 2.6, 1.103, 1.103);
        this.addTimedChild(instance5, 1, 2, {
                "1": {
                    x: 6.6,
                    y: 4.3
                },
                "2": {
                    x: -0.45,
                    y: 2.75
                }
            })
            .addTimedChild(instance4, 1, 2, {
                "1": {
                    x: 0.65,
                    y: 7.3
                },
                "2": {
                    x: 0.2,
                    y: 0
                }
            })
            .addTimedChild(instance3, 1, 2, {
                "1": {
                    x: -0.2,
                    y: 0
                },
                "2": {
                    x: 6.25,
                    y: -4.2
                }
            })
            .addTimedChild(instance2, 1, 2, {
                "1": {
                    x: -4.3,
                    y: -3.85
                },
                "2": {
                    x: -1.2,
                    y: 0.6
                }
            })
            .addTimedChild(instance1, 1, 2, {
                "1": {
                    x: 2.95,
                    y: -1.95
                },
                "2": {
                    x: 0.3,
                    y: 2
                }
            })
            .addTimedChild(instance10, 3, 1)
            .addTimedChild(instance9, 3, 1)
            .addTimedChild(instance8, 3, 1)
            .addTimedChild(instance7, 3, 1)
            .addTimedChild(instance6, 3, 1);
    });

    var Graphic100 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 4, loop: false });
        var instance5 = new Graphics()
            .drawCommands(shapes.s04[187]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s04[186]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s04[185]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s04[184]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[183]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s04[192]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s04[191]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s04[190]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s04[189]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s04[188]);
        this.addTimedChild(instance5, 0, 2, {
                "0": {
                    x: 6.6,
                    y: 4.3
                },
                "1": {
                    x: -0.45,
                    y: 2.75
                }
            })
            .addTimedChild(instance4, 0, 2, {
                "0": {
                    x: 0.65,
                    y: 7.3
                },
                "1": {
                    x: 0.2,
                    y: 0
                }
            })
            .addTimedChild(instance3, 0, 2, {
                "0": {
                    x: -0.2,
                    y: 0
                },
                "1": {
                    x: 6.25,
                    y: -4.2
                }
            })
            .addTimedChild(instance2, 0, 2, {
                "0": {
                    x: -4.3,
                    y: -3.85
                },
                "1": {
                    x: -1.2,
                    y: 0.6
                }
            })
            .addTimedChild(instance1, 0, 2, {
                "0": {
                    x: 2.95,
                    y: -1.95
                },
                "1": {
                    x: 0.3,
                    y: 2
                }
            })
            .addTimedChild(instance10, 2, 1, {
                "2": {
                    x: 0.2,
                    y: 0.4
                }
            })
            .addTimedChild(instance9, 2, 1, {
                "2": {
                    x: 0.25,
                    y: 0.45,
                    sx: 1.103,
                    sy: 1.103
                }
            })
            .addTimedChild(instance8, 2, 1, {
                "2": {
                    x: -0.3,
                    y: 0.5,
                    sx: 1.103,
                    sy: 1.103
                }
            })
            .addTimedChild(instance7, 2, 1, {
                "2": {
                    x: -1.35,
                    y: 1.05,
                    sx: 1.103,
                    sy: 1.103
                }
            })
            .addTimedChild(instance6, 2, 1, {
                "2": {
                    x: 0.05,
                    y: 2.6,
                    sx: 1.103,
                    sy: 1.103
                }
            });
    });

    var Graphic102 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 4, loop: false });
        var instance5 = new Graphics()
            .drawCommands(shapes.s04[187]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s04[186]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s04[185]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s04[184]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[183]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s04[192]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s04[191]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s04[190]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s04[189]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s04[188]);
        this.addTimedChild(instance5, 0, 2, {
                "0": {
                    x: 6.6,
                    y: 4.3
                },
                "1": {
                    x: -0.45,
                    y: 2.75
                }
            })
            .addTimedChild(instance4, 0, 2, {
                "0": {
                    x: 0.65,
                    y: 7.3
                },
                "1": {
                    x: 0.2,
                    y: 0
                }
            })
            .addTimedChild(instance3, 0, 2, {
                "0": {
                    x: -0.2,
                    y: 0
                },
                "1": {
                    x: 6.25,
                    y: -4.2
                }
            })
            .addTimedChild(instance2, 0, 2, {
                "0": {
                    x: -4.3,
                    y: -3.85
                },
                "1": {
                    x: -1.2,
                    y: 0.6
                }
            })
            .addTimedChild(instance1, 0, 2, {
                "0": {
                    x: 2.95,
                    y: -1.95
                },
                "1": {
                    x: 0.3,
                    y: 2
                }
            })
            .addTimedChild(instance10, 2, 1, {
                "2": {
                    x: 0.2,
                    y: 0.4
                }
            })
            .addTimedChild(instance9, 2, 1, {
                "2": {
                    x: 0.25,
                    y: 0.45,
                    sx: 1.103,
                    sy: 1.103
                }
            })
            .addTimedChild(instance8, 2, 1, {
                "2": {
                    x: -0.3,
                    y: 0.5,
                    sx: 1.103,
                    sy: 1.103
                }
            })
            .addTimedChild(instance7, 2, 1, {
                "2": {
                    x: -1.35,
                    y: 1.05,
                    sx: 1.103,
                    sy: 1.103
                }
            })
            .addTimedChild(instance6, 2, 1, {
                "2": {
                    x: 0.05,
                    y: 2.6,
                    sx: 1.103,
                    sy: 1.103
                }
            });
    });

    var Graphic104 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 4, loop: false });
        var instance5 = new Graphics()
            .drawCommands(shapes.s04[187]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s04[186]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s04[185]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s04[184]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[183]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s04[192]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s04[191]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s04[190]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s04[189]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s04[188]);
        this.addTimedChild(instance5, 0, 2, {
                "0": {
                    x: 6.6,
                    y: 4.3
                },
                "1": {
                    x: -0.45,
                    y: 2.75
                }
            })
            .addTimedChild(instance4, 0, 2, {
                "0": {
                    x: 0.65,
                    y: 7.3
                },
                "1": {
                    x: 0.2,
                    y: 0
                }
            })
            .addTimedChild(instance3, 0, 2, {
                "0": {
                    x: -0.2,
                    y: 0
                },
                "1": {
                    x: 6.25,
                    y: -4.2
                }
            })
            .addTimedChild(instance2, 0, 2, {
                "0": {
                    x: -4.3,
                    y: -3.85
                },
                "1": {
                    x: -1.2,
                    y: 0.6
                }
            })
            .addTimedChild(instance1, 0, 2, {
                "0": {
                    x: 2.95,
                    y: -1.95
                },
                "1": {
                    x: 0.3,
                    y: 2
                }
            })
            .addTimedChild(instance10, 2, 1, {
                "2": {
                    x: 0.2,
                    y: 0.4
                }
            })
            .addTimedChild(instance9, 2, 1, {
                "2": {
                    x: 0.25,
                    y: 0.45,
                    sx: 1.103,
                    sy: 1.103
                }
            })
            .addTimedChild(instance8, 2, 1, {
                "2": {
                    x: -0.3,
                    y: 0.5,
                    sx: 1.103,
                    sy: 1.103
                }
            })
            .addTimedChild(instance7, 2, 1, {
                "2": {
                    x: -1.35,
                    y: 1.05,
                    sx: 1.103,
                    sy: 1.103
                }
            })
            .addTimedChild(instance6, 2, 1, {
                "2": {
                    x: 0.05,
                    y: 2.6,
                    sx: 1.103,
                    sy: 1.103
                }
            });
    });

    var Graphic54 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 152, loop: false });
        var instance11 = new Graphics()
            .drawCommands(shapes.s04[203])
            .setTransform(-3.45, -28.35);
        var instance10 = new Graphics()
            .drawCommands(shapes.s04[202])
            .setTransform(17.2, 0.1, 1, 1, 0.714);
        var instance9 = new Graphics()
            .drawCommands(shapes.s04[201])
            .setTransform(10.85, -42.1, 1, 1, -0.069);
        var instance8 = new Graphics()
            .drawCommands(shapes.s04[200])
            .setTransform(0.55, -37.45);
        var instance7 = new Graphics()
            .drawCommands(shapes.s04[199])
            .setTransform(-3.45, -28.35);
        var instance6 = new Graphics()
            .drawCommands(shapes.s04[198])
            .setTransform(-3.45, -28.35);
        var instance5 = new Graphics()
            .drawCommands(shapes.s04[197])
            .setTransform(11.05, 34.75, 1, 1, 1.207);
        var instance4 = new Graphics()
            .drawCommands(shapes.s04[196])
            .setTransform(-3.45, -28.35);
        var instance3 = new Graphics()
            .drawCommands(shapes.s04[195])
            .setTransform(-3.45, -28.35);
        var instance2 = new Graphics()
            .drawCommands(shapes.s04[194])
            .setTransform(-3.45, -28.35);
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[193])
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

    var Graphic31 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 7, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[205])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic33 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 4, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[205])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic35 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 7, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[205])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic37 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 81, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[205])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic39 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 4, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[205])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic41 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 10, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[205])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic45 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 6, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[205])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic48 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 17, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[205])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic50 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 14, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[205])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic32 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 7, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[205])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic34 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 4, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[205])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic36 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 7, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[205])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic38 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 81, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[205])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic40 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 4, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[205])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic42 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 10, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[205])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic46 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 6, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[205])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic49 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 17, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[205])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic51 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 14, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[205])
            .setTransform(-1219.5, -229.25, 0.896, 0.896);
        this.addTimedChild(instance1);
    });

    var Graphic22 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 170, loop: false });
        var instance3 = new Graphics()
            .drawCommands(shapes.s04[209]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s04[208]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[206]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s04[207]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s04[207]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s04[206]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s04[207]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s04[207]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s04[206]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s04[207]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s04[207]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s04[206]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s04[207]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s04[207]);
        var instance15 = new Graphics()
            .drawCommands(shapes.s04[206]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s04[207]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s04[207]);
        var instance18 = new Graphics()
            .drawCommands(shapes.s04[206]);
        var instance20 = new Graphics()
            .drawCommands(shapes.s04[207]);
        var instance19 = new Graphics()
            .drawCommands(shapes.s04[207]);
        var instance21 = new Graphics()
            .drawCommands(shapes.s04[206]);
        var instance23 = new Graphics()
            .drawCommands(shapes.s04[207]);
        var instance22 = new Graphics()
            .drawCommands(shapes.s04[207]);
        var instance24 = new Graphics()
            .drawCommands(shapes.s04[206]);
        var instance26 = new Graphics()
            .drawCommands(shapes.s04[207]);
        var instance25 = new Graphics()
            .drawCommands(shapes.s04[207]);
        var instance27 = new Graphics()
            .drawCommands(shapes.s04[206]);
        var instance29 = new Graphics()
            .drawCommands(shapes.s04[207])
            .setTransform(-1289.25, -221.05);
        var instance28 = new Graphics()
            .drawCommands(shapes.s04[207])
            .setTransform(-1263.8, -221.2);
        this.addTimedChild(instance3, 0, 170, {
                "0": {
                    x: -1289.25,
                    y: -220.85
                },
                "5": {
                    y: -221.05
                },
                "12": {
                    y: -220.85
                },
                "14": {
                    y: -221.05
                },
                "18": {
                    y: -220.85
                },
                "20": {
                    y: -221.05
                },
                "27": {
                    y: -220.85
                },
                "29": {
                    y: -221.05
                },
                "110": {
                    y: -220.85
                },
                "112": {
                    y: -221.05
                },
                "116": {
                    y: -220.85
                },
                "117": {
                    y: -221.05
                },
                "127": {
                    y: -220.85
                },
                "129": {
                    y: -221.05
                },
                "135": {
                    y: -220.85
                },
                "137": {
                    y: -221.05
                },
                "154": {
                    y: -220.85
                },
                "156": {
                    y: -221.05
                }
            })
            .addTimedChild(instance2, 0, 170, {
                "0": {
                    x: -1289.25,
                    y: -220.85
                },
                "5": {
                    y: -221.05
                },
                "12": {
                    y: -220.85
                },
                "14": {
                    y: -221.05
                },
                "18": {
                    y: -220.85
                },
                "20": {
                    y: -221.05
                },
                "27": {
                    y: -220.85
                },
                "29": {
                    y: -221.05
                },
                "110": {
                    y: -220.85
                },
                "112": {
                    y: -221.05
                },
                "116": {
                    y: -220.85
                },
                "117": {
                    y: -221.05
                },
                "127": {
                    y: -220.85
                },
                "129": {
                    y: -221.05
                },
                "135": {
                    y: -220.85
                },
                "137": {
                    y: -221.05
                },
                "154": {
                    y: -220.85
                },
                "156": {
                    y: -221.05
                }
            })
            .addTimedChild(instance1, 0, 5)
            .addTimedChild(instance5, 5, 7, {
                "5": {
                    x: -1289.25,
                    y: -221.05
                }
            })
            .addTimedChild(instance4, 5, 7, {
                "5": {
                    x: -1263.8,
                    y: -221.2
                }
            })
            .addTimedChild(instance6, 12, 2)
            .addTimedChild(instance8, 14, 4, {
                "14": {
                    x: -1289.25,
                    y: -221.05
                }
            })
            .addTimedChild(instance7, 14, 4, {
                "14": {
                    x: -1263.8,
                    y: -221.2
                }
            })
            .addTimedChild(instance9, 18, 2)
            .addTimedChild(instance11, 20, 7, {
                "20": {
                    x: -1289.25,
                    y: -221.05
                }
            })
            .addTimedChild(instance10, 20, 7, {
                "20": {
                    x: -1263.8,
                    y: -221.2
                }
            })
            .addTimedChild(instance12, 27, 2)
            .addTimedChild(instance14, 29, 81, {
                "29": {
                    x: -1289.25,
                    y: -221.05
                }
            })
            .addTimedChild(instance13, 29, 81, {
                "29": {
                    x: -1263.8,
                    y: -221.2
                }
            })
            .addTimedChild(instance15, 110, 2)
            .addTimedChild(instance17, 112, 4, {
                "112": {
                    x: -1289.25,
                    y: -221.05
                }
            })
            .addTimedChild(instance16, 112, 4, {
                "112": {
                    x: -1263.8,
                    y: -221.2
                }
            })
            .addTimedChild(instance18, 116, 1)
            .addTimedChild(instance20, 117, 10, {
                "117": {
                    x: -1289.25,
                    y: -221.05
                }
            })
            .addTimedChild(instance19, 117, 10, {
                "117": {
                    x: -1263.8,
                    y: -221.2
                }
            })
            .addTimedChild(instance21, 127, 2)
            .addTimedChild(instance23, 129, 6, {
                "129": {
                    x: -1289.25,
                    y: -221.05
                }
            })
            .addTimedChild(instance22, 129, 6, {
                "129": {
                    x: -1263.8,
                    y: -221.2
                }
            })
            .addTimedChild(instance24, 135, 2)
            .addTimedChild(instance26, 137, 17, {
                "137": {
                    x: -1289.25,
                    y: -221.05
                }
            })
            .addTimedChild(instance25, 137, 17, {
                "137": {
                    x: -1263.8,
                    y: -221.2
                }
            })
            .addTimedChild(instance27, 154, 2)
            .addTimedChild(instance29, 156, 14)
            .addTimedChild(instance28, 156, 14);
    });

    var Graphic23 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 112, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[210])
            .setTransform(-1303.95, -197.85);
        this.addTimedChild(instance1);
    });

    var Graphic43 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 43, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[210])
            .setTransform(-1303.95, -197.85);
        this.addTimedChild(instance1);
    });

    var Graphic24 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 112, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[212])
            .setTransform(-1268.05, -199.05);
        this.addTimedChild(instance1);
    });

    var Graphic44 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 43, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[212])
            .setTransform(-1268.05, -199.05);
        this.addTimedChild(instance1);
    });

    var Graphic19 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 112, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[214]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s04[215]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s04[214]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s04[230]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s04[226]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s04[222]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s04[219]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s04[218]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s04[217]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s04[216]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s04[220]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s04[214]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s04[219]);
        var instance15 = new Graphics()
            .drawCommands(shapes.s04[218]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s04[217]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s04[216]);
        var instance19 = new Graphics()
            .drawCommands(shapes.s04[230]);
        var instance18 = new Graphics()
            .drawCommands(shapes.s04[226]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s04[222]);
        var instance22 = new Graphics()
            .drawCommands(shapes.s04[231]);
        var instance21 = new Graphics()
            .drawCommands(shapes.s04[227]);
        var instance20 = new Graphics()
            .drawCommands(shapes.s04[223]);
        var instance26 = new Graphics()
            .drawCommands(shapes.s04[219]);
        var instance25 = new Graphics()
            .drawCommands(shapes.s04[218]);
        var instance24 = new Graphics()
            .drawCommands(shapes.s04[217]);
        var instance23 = new Graphics()
            .drawCommands(shapes.s04[216]);
        var instance29 = new Graphics()
            .drawCommands(shapes.s04[232]);
        var instance28 = new Graphics()
            .drawCommands(shapes.s04[228]);
        var instance27 = new Graphics()
            .drawCommands(shapes.s04[224]);
        var instance32 = new Graphics()
            .drawCommands(shapes.s04[225]);
        var instance31 = new Graphics()
            .drawCommands(shapes.s04[229]);
        var instance30 = new Graphics()
            .drawCommands(shapes.s04[225]);
        var instance35 = new Graphics()
            .drawCommands(shapes.s04[230]);
        var instance34 = new Graphics()
            .drawCommands(shapes.s04[226]);
        var instance33 = new Graphics()
            .drawCommands(shapes.s04[222]);
        var instance39 = new Graphics()
            .drawCommands(shapes.s04[219]);
        var instance38 = new Graphics()
            .drawCommands(shapes.s04[218]);
        var instance37 = new Graphics()
            .drawCommands(shapes.s04[217]);
        var instance36 = new Graphics()
            .drawCommands(shapes.s04[216]);
        var instance40 = new Graphics()
            .drawCommands(shapes.s04[221])
            .setTransform(-5.8, 25);
        this.addTimedChild(instance1, 0, 6)
            .addTimedChild(instance2, 6, 1)
            .addTimedChild(instance3, 7, 6)
            .addTimedChild(instance6, 13, 1)
            .addTimedChild(instance5, 13, 1)
            .addTimedChild(instance4, 13, 1)
            .addTimedChild(instance10, 14, 1, {
                "14": {
                    x: -484.2,
                    y: -500.85
                }
            })
            .addTimedChild(instance9, 14, 1, {
                "14": {
                    x: -5.8,
                    y: 27.5
                }
            })
            .addTimedChild(instance8, 14, 1, {
                "14": {
                    x: -484.2,
                    y: -500.85
                }
            })
            .addTimedChild(instance7, 14, 1, {
                "14": {
                    x: -484.2,
                    y: -500.85
                }
            })
            .addTimedChild(instance11, 15, 1, {
                "15": {
                    x: -7.8,
                    y: 40.9
                }
            })
            .addTimedChild(instance12, 16, 1)
            .addTimedChild(instance16, 17, 1, {
                "17": {
                    x: -484.2,
                    y: -500.85
                }
            })
            .addTimedChild(instance15, 17, 1, {
                "17": {
                    x: -5.8,
                    y: 27.5
                }
            })
            .addTimedChild(instance14, 17, 1, {
                "17": {
                    x: -484.2,
                    y: -500.85
                }
            })
            .addTimedChild(instance13, 17, 1, {
                "17": {
                    x: -484.2,
                    y: -500.85
                }
            })
            .addTimedChild(instance19, 18, 1)
            .addTimedChild(instance18, 18, 1)
            .addTimedChild(instance17, 18, 1)
            .addTimedChild(instance22, 19, 1)
            .addTimedChild(instance21, 19, 1)
            .addTimedChild(instance20, 19, 1)
            .addTimedChild(instance26, 20, 2, {
                "20": {
                    x: -484.2,
                    y: -500.85
                }
            })
            .addTimedChild(instance25, 20, 2, {
                "20": {
                    x: -5.8,
                    y: 27.5
                }
            })
            .addTimedChild(instance24, 20, 2, {
                "20": {
                    x: -484.2,
                    y: -500.85
                }
            })
            .addTimedChild(instance23, 20, 2, {
                "20": {
                    x: -484.2,
                    y: -500.85
                }
            })
            .addTimedChild(instance29, 22, 1)
            .addTimedChild(instance28, 22, 1)
            .addTimedChild(instance27, 22, 1)
            .addTimedChild(instance32, 23, 3)
            .addTimedChild(instance31, 23, 3)
            .addTimedChild(instance30, 23, 3)
            .addTimedChild(instance35, 26, 1)
            .addTimedChild(instance34, 26, 1)
            .addTimedChild(instance33, 26, 1)
            .addTimedChild(instance39, 27, 10, {
                "27": {
                    x: -484.2,
                    y: -500.85
                }
            })
            .addTimedChild(instance38, 27, 10, {
                "27": {
                    x: -5.8,
                    y: 27.5
                }
            })
            .addTimedChild(instance37, 27, 10, {
                "27": {
                    x: -484.2,
                    y: -500.85
                }
            })
            .addTimedChild(instance36, 27, 10, {
                "27": {
                    x: -484.2,
                    y: -500.85
                }
            })
            .addTimedChild(instance40, 37, 75);
    });

    var Graphic25 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 112, loop: false });
        var instance1 = new Graphic19(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 112, {
            "0": {
                x: -0.05,
                y: -12.45,
                sx: 0.237,
                sy: 0.479
            },
            "1": {
                y: -12.4,
                sx: 0.251
            },
            "2": {
                x: -0.15,
                y: -12.45,
                sx: 0.202,
                sy: 0.48
            },
            "3": {
                x: -0.1,
                y: -11.2,
                sx: 0.293,
                sy: 0.436
            },
            "4": {
                x: -0.15,
                y: -12,
                sx: 0.208,
                sy: 0.468
            },
            "5": {
                y: -10.3,
                sx: 0.245,
                sy: 0.403
            },
            "6": {
                x: -0.2,
                y: -19.1,
                sx: 0.918,
                sy: 0.737
            },
            "7": {
                x: -0.05,
                y: -22.35,
                sx: 0.778,
                sy: 0.857
            },
            "8": {
                y: -23.25,
                sx: 0.544,
                sy: 0.894
            },
            "13": {
                y: -22.35,
                sx: 0.996,
                sy: 0.857
            },
            "14": {
                y: -26.1,
                sx: 1,
                sy: 1
            },
            "16": {
                y: -29.25,
                sx: 0.894,
                sy: 1.121
            },
            "17": {
                sx: 1.092
            },
            "18": {
                y: -18.35,
                sx: 1.198,
                sy: 0.702
            },
            "19": {
                x: -0.1,
                y: -24.2,
                sx: 1.012,
                sy: 0.93
            },
            "21": {
                x: -0.15,
                y: -29.75,
                sx: 0.911,
                sy: 1.146
            },
            "22": {
                x: -0.1,
                y: -24.2,
                sx: 1.012,
                sy: 0.93
            },
            "26": {
                x: 0,
                y: -28.85,
                sx: 1.246,
                sy: 1.11
            },
            "27": {
                x: -0.1,
                y: -24.2,
                sx: 1.012,
                sy: 0.93
            },
            "28": {
                y: -20.75,
                sx: 1.068,
                sy: 0.798
            },
            "37": {
                sx: 1.214
            }
        });
    });

    var Graphic20 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 41, loop: false });
        var instance3 = new Graphics()
            .drawCommands(shapes.s04[225]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s04[229]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[225]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s04[232]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s04[228]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s04[224]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s04[230]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s04[226]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s04[222]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s04[236]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s04[235]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s04[234]);
        var instance15 = new Graphics()
            .drawCommands(shapes.s04[231]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s04[227]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s04[223]);
        var instance18 = new Graphics()
            .drawCommands(shapes.s04[230]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s04[226]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s04[222]);
        var instance22 = new Graphics()
            .drawCommands(shapes.s04[219]);
        var instance21 = new Graphics()
            .drawCommands(shapes.s04[218]);
        var instance20 = new Graphics()
            .drawCommands(shapes.s04[217]);
        var instance19 = new Graphics()
            .drawCommands(shapes.s04[216]);
        var instance25 = new Graphics()
            .drawCommands(shapes.s04[230]);
        var instance24 = new Graphics()
            .drawCommands(shapes.s04[226]);
        var instance23 = new Graphics()
            .drawCommands(shapes.s04[222]);
        var instance26 = new Graphics()
            .drawCommands(shapes.s04[221])
            .setTransform(-5.8, 25);
        this.addTimedChild(instance3, 0, 1)
            .addTimedChild(instance2, 0, 1)
            .addTimedChild(instance1, 0, 1)
            .addTimedChild(instance6, 1, 3)
            .addTimedChild(instance5, 1, 3)
            .addTimedChild(instance4, 1, 3)
            .addTimedChild(instance9, 4, 2)
            .addTimedChild(instance8, 4, 2)
            .addTimedChild(instance7, 4, 2)
            .addTimedChild(instance12, 6, 1)
            .addTimedChild(instance11, 6, 1)
            .addTimedChild(instance10, 6, 1)
            .addTimedChild(instance15, 7, 1)
            .addTimedChild(instance14, 7, 1)
            .addTimedChild(instance13, 7, 1)
            .addTimedChild(instance18, 8, 1)
            .addTimedChild(instance17, 8, 1)
            .addTimedChild(instance16, 8, 1)
            .addTimedChild(instance22, 9, 4, {
                "9": {
                    x: -484.2,
                    y: -500.85
                }
            })
            .addTimedChild(instance21, 9, 4, {
                "9": {
                    x: -5.8,
                    y: 27.5
                }
            })
            .addTimedChild(instance20, 9, 4, {
                "9": {
                    x: -484.2,
                    y: -500.85
                }
            })
            .addTimedChild(instance19, 9, 4, {
                "9": {
                    x: -484.2,
                    y: -500.85
                }
            })
            .addTimedChild(instance25, 13, 12)
            .addTimedChild(instance24, 13, 12)
            .addTimedChild(instance23, 13, 12)
            .addTimedChild(instance26, 25, 16);
    });

    var Graphic47 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 41, loop: false });
        var instance1 = new Graphic20(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 41, {
            "0": {
                x: -0.2,
                y: -24.6,
                sx: 1.039,
                sy: 0.951
            },
            "1": {
                x: -0.25,
                y: -28.6,
                sx: 1.056,
                sy: 1.109
            },
            "2": {
                x: -0.3,
                y: -30.25,
                sx: 1.018,
                sy: 1.174
            },
            "4": {
                y: -26.4,
                sx: 1.106,
                sy: 1.026
            },
            "5": {
                y: -22.7,
                sx: 1.116,
                sy: 0.883
            },
            "6": {
                x: -0.15,
                y: -31.55,
                sx: 1.162,
                sy: 1.221
            },
            "9": {
                y: -28.15,
                sx: 1.25,
                sy: 1.093
            },
            "13": {
                x: -0.25,
                y: -25.95,
                sx: 1.056,
                sy: 1.012
            },
            "14": {
                y: -22.1,
                sx: 1.102,
                sy: 0.862
            },
            "26": {
                sx: 1.21
            }
        });
    });

    var Graphic26 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 170, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[237]);
        this.addTimedChild(instance1);
    });

    var Graphic27 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 170, loop: false });
        var instance14 = new Graphics()
            .drawCommands(shapes.s04[241])
            .setTransform(-1336.85, -168.4, 1.033, 1.033);
        var instance13 = new Graphics()
            .drawCommands(shapes.s04[241])
            .setTransform(-1357.3, -164.4, 1.033, 1.033);
        var instance12 = new Graphics()
            .drawCommands(shapes.s04[241])
            .setTransform(-1317.25, -167, 1.033, 1.033);
        var instance11 = new Graphics()
            .drawCommands(shapes.s04[241])
            .setTransform(-1316.95, -139.1, 0.978, 0.978);
        var instance10 = new Graphics()
            .drawCommands(shapes.s04[241])
            .setTransform(-1265.9, -139.25, 1.033, 1.033);
        var instance9 = new Graphics()
            .drawCommands(shapes.s04[241])
            .setTransform(-1170.45, -142.3, 0.948, 0.948);
        var instance8 = new Graphics()
            .drawCommands(shapes.s04[241])
            .setTransform(-1185.7, -149.8, 0.948, 0.948);
        var instance7 = new Graphics()
            .drawCommands(shapes.s04[241])
            .setTransform(-1177.25, -135.65, 0.881, 0.881);
        var instance6 = new Graphics()
            .drawCommands(shapes.s04[241])
            .setTransform(-1201.55, -112.45, 0.881, 0.881);
        var instance5 = new Graphics()
            .drawCommands(shapes.s04[241])
            .setTransform(-1213, -97.9, 0.881, 0.881);
        var instance4 = new Graphics()
            .drawCommands(shapes.s04[241])
            .setTransform(-1255.65, -125.65, 1.033, 1.033);
        var instance3 = new Graphics()
            .drawCommands(shapes.s04[240]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s04[239]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[238])
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

    var Graphic21 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 170, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[243])
            .setTransform(-1294.55, -252.5);
        this.addTimedChild(instance1);
    });

    var Graphic28 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 170, loop: false });
        var instance2 = new Graphic21(MovieClip.SYNCHED)
            .setTransform(6.55, -82.85);
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[242]);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic29 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 170, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s04[245]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[244]);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic30 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 170, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s04[247]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[246]);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic52 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 170, loop: false });
        var instance9 = new Graphic30(MovieClip.SYNCHED)
            .setTransform(-61.45, -103.85);
        var instance8 = new Graphic29(MovieClip.SYNCHED)
            .setTransform(81.05, -103.55);
        var instance7 = new Graphic28(MovieClip.SYNCHED)
            .setTransform(0.05);
        var instance6 = new Graphic27(MovieClip.SYNCHED)
            .setTransform(6.7, -172.05);
        var instance5 = new Graphic26(MovieClip.SYNCHED);
        var instance4 = new Graphic25(MovieClip.SYNCHED);
        var instance3 = new Graphic24(MovieClip.SYNCHED);
        var instance2 = new Graphic23(MovieClip.SYNCHED);
        var instance22 = new Graphics()
            .drawCommands(shapes.s04[233]);
        var instance21 = new Graphics()
            .drawCommands(shapes.s04[213]);
        var instance20 = new Graphics()
            .drawCommands(shapes.s04[211]);
        var instance29 = new Graphic47(MovieClip.SYNCHED);
        var instance26 = new Graphic44(MovieClip.SYNCHED);
        var instance25 = new Graphic43(MovieClip.SYNCHED);
        var instance1 = new Graphic22(MovieClip.SYNCHED);
        var instance11 = new Graphic32(MovieClip.SYNCHED);
        var instance10 = new Graphic31(MovieClip.SYNCHED);
        var instance13 = new Graphic34(MovieClip.SYNCHED);
        var instance12 = new Graphic33(MovieClip.SYNCHED);
        var instance15 = new Graphic36(MovieClip.SYNCHED);
        var instance14 = new Graphic35(MovieClip.SYNCHED);
        var instance17 = new Graphic38(MovieClip.SYNCHED);
        var instance16 = new Graphic37(MovieClip.SYNCHED);
        var instance19 = new Graphic40(MovieClip.SYNCHED);
        var instance18 = new Graphic39(MovieClip.SYNCHED);
        var instance24 = new Graphic42(MovieClip.SYNCHED);
        var instance23 = new Graphic41(MovieClip.SYNCHED);
        var instance28 = new Graphic46(MovieClip.SYNCHED);
        var instance27 = new Graphic45(MovieClip.SYNCHED);
        var instance31 = new Graphic49(MovieClip.SYNCHED);
        var instance30 = new Graphic48(MovieClip.SYNCHED);
        var instance33 = new Graphic51(MovieClip.SYNCHED)
            .setTransform(-18.85, -111.75);
        var instance32 = new Graphic50(MovieClip.SYNCHED)
            .setTransform(6.55, -111.95);
        this.addTimedChild(instance9)
            .addTimedChild(instance8)
            .addTimedChild(instance7)
            .addTimedChild(instance6)
            .addTimedChild(instance5, 0, 170, {
                "0": {
                    x: -6.35,
                    y: -91.75
                }
            })
            .addTimedChild(instance4, 0, 112, {
                "0": {
                    x: -2.6,
                    y: -68.75,
                    sx: 1,
                    sy: 1,
                    kx: 0
                },
                "111": {
                    x: -2.65,
                    sx: 0.953,
                    sy: 0.633,
                    kx: 0.872
                }
            })
            .addTimedChild(instance3, 0, 112, {
                "0": {
                    x: -19.55,
                    y: -132.85,
                    r: 0
                },
                "6": {
                    x: -19.6,
                    y: -135.8
                },
                "7": {
                    x: -19.9,
                    y: -136.3
                },
                "12": {
                    x: -18.8,
                    y: -124.45
                },
                "13": {
                    x: -18.7,
                    y: -124
                },
                "14": {
                    x: -19.15,
                    y: -131.75
                },
                "15": {
                    x: -19.3,
                    y: -131.35
                },
                "18": {
                    x: -18.8,
                    y: -124.45
                },
                "19": {
                    x: -18.7,
                    y: -124
                },
                "20": {
                    x: -18.45,
                    y: -130.55,
                    r: -0.262
                },
                "21": {
                    x: -18.9,
                    y: -131.15,
                    r: -0.296
                },
                "27": {
                    x: -18.8,
                    y: -124.45,
                    r: 0
                },
                "28": {
                    x: -18.7,
                    y: -124
                },
                "29": {
                    x: -19.9,
                    y: -135.35
                },
                "30": {
                    y: -136.3
                },
                "99": {
                    x: -17.25,
                    y: -130.2,
                    r: -0.044
                },
                "110": {
                    x: -17.45,
                    y: -122.05
                },
                "111": {
                    x: -17.25,
                    y: -121.55
                }
            })
            .addTimedChild(instance2, 0, 112, {
                "0": {
                    x: 16.15,
                    y: -134.05,
                    r: 0
                },
                "6": {
                    x: 15.9,
                    y: -136.7
                },
                "7": {
                    x: 16,
                    y: -137.5
                },
                "12": {
                    x: 17.1,
                    y: -125.65
                },
                "13": {
                    x: 17.2,
                    y: -125.2
                },
                "14": {
                    x: 16.65,
                    y: -132.9
                },
                "15": {
                    x: 16.6,
                    y: -132.55
                },
                "18": {
                    x: 17.1,
                    y: -125.65
                },
                "19": {
                    x: 17.2,
                    y: -125.2
                },
                "20": {
                    x: 15.8,
                    y: -131.95,
                    r: 0.293
                },
                "21": {
                    x: 16.6,
                    y: -132.55,
                    r: 0.353
                },
                "27": {
                    x: 17.1,
                    y: -125.65,
                    r: 0
                },
                "28": {
                    x: 17.2,
                    y: -125.2
                },
                "29": {
                    x: 15.05,
                    y: -133.1
                },
                "30": {
                    y: -133.65
                },
                "99": {
                    x: 15.7,
                    y: -131.1,
                    r: 0.062
                },
                "110": {
                    x: 15.5,
                    y: -122.95
                },
                "111": {
                    x: 15.7,
                    y: -122.45
                }
            })
            .addTimedChild(instance22, 112, 17)
            .addTimedChild(instance21, 112, 15)
            .addTimedChild(instance20, 112, 15)
            .addTimedChild(instance29, 129, 41, {
                "129": {
                    x: -2.6,
                    y: -68.75,
                    sx: 1,
                    sy: 1,
                    kx: 0
                },
                "154": {
                    sx: 1.092,
                    sy: 0.688
                },
                "155": {
                    x: -2.65,
                    sx: 1.173,
                    sy: 0.229,
                    kx: 3.142
                },
                "156": {
                    x: -2.6,
                    sx: 1.181,
                    sy: 0.873
                }
            })
            .addTimedChild(instance26, 127, 43, {
                "127": {
                    x: -17.45,
                    y: -120.85,
                    sx: 1,
                    sy: 1,
                    kx: 0,
                    ky: 0,
                    r: -0.044
                },
                "128": {
                    x: -17.05,
                    y: -119.75
                },
                "129": {
                    x: -15.65,
                    y: -125.85,
                    sx: 0.986,
                    sy: 0.37,
                    kx: 0.936,
                    ky: -0.044,
                    r: 0
                },
                "130": {
                    x: -15.55,
                    y: -126.65
                },
                "135": {
                    x: -17.45,
                    y: -120.85,
                    sx: 1,
                    sy: 1,
                    kx: 0,
                    ky: 0,
                    r: -0.044
                },
                "136": {
                    x: -17.05,
                    y: -119.75
                },
                "137": {
                    x: -18.55,
                    y: -130.55,
                    r: -0.306
                },
                "138": {
                    x: -18.9,
                    y: -131.15,
                    r: -0.296
                },
                "154": {
                    x: -17.45,
                    y: -120.85,
                    r: -0.044
                },
                "155": {
                    x: -17.05,
                    y: -119.75
                },
                "156": {
                    x: -15.9,
                    y: -138.05,
                    sx: 1.179,
                    sy: 0.816,
                    kx: 0.303,
                    ky: -0.053,
                    r: 0
                },
                "157": {
                    x: -16.05,
                    y: -138.45,
                    sy: 0.81,
                    kx: 0.275
                }
            })
            .addTimedChild(instance25, 127, 43, {
                "127": {
                    x: 15.5,
                    y: -121.75,
                    sx: 1,
                    sy: 1,
                    kx: 0,
                    ky: 0,
                    r: 0.062
                },
                "128": {
                    x: 15.9,
                    y: -120.65
                },
                "129": {
                    x: 14.7,
                    y: -125.85,
                    sx: 1.056,
                    sy: 0.435,
                    kx: 1.098,
                    ky: 0.062,
                    r: 0
                },
                "130": {
                    x: 14.8,
                    y: -126.65
                },
                "135": {
                    x: 15.5,
                    y: -121.75,
                    sx: 1,
                    sy: 1,
                    kx: 0,
                    ky: 0,
                    r: 0.062
                },
                "136": {
                    x: 15.9,
                    y: -120.65
                },
                "137": {
                    x: 16.4,
                    y: -131.8,
                    r: 0.349
                },
                "138": {
                    x: 16.6,
                    y: -132.55,
                    r: 0.353
                },
                "154": {
                    x: 15.5,
                    y: -121.75,
                    r: 0.062
                },
                "155": {
                    x: 15.9,
                    y: -120.65
                },
                "156": {
                    x: 15.65,
                    y: -128.35,
                    sx: 1.111,
                    sy: 0.623,
                    kx: 0.479,
                    ky: 0.188,
                    r: 0
                },
                "157": {
                    x: 15.45,
                    y: -128.75
                }
            })
            .addTimedChild(instance1, 0, 170, {
                "0": {
                    x: 1.3,
                    y: -114.3
                }
            })
            .addTimedChild(instance11, 5, 7, {
                "5": {
                    x: -18.3,
                    y: -117.1
                }
            })
            .addTimedChild(instance10, 5, 7, {
                "5": {
                    x: 7.1,
                    y: -117.3
                }
            })
            .addTimedChild(instance13, 14, 4, {
                "14": {
                    x: -19.55,
                    y: -113.35
                },
                "15": {
                    x: -19.8,
                    y: -113.45
                }
            })
            .addTimedChild(instance12, 14, 4, {
                "14": {
                    x: 5.85,
                    y: -113.55
                },
                "15": {
                    x: 5.6,
                    y: -113.65
                }
            })
            .addTimedChild(instance15, 20, 7, {
                "20": {
                    x: -10.4,
                    y: -111.65
                },
                "21": {
                    x: -9.9,
                    y: -111.8
                }
            })
            .addTimedChild(instance14, 20, 7, {
                "20": {
                    x: 15.1,
                    y: -111.5
                },
                "21": {
                    x: 15.5
                }
            })
            .addTimedChild(instance17, 29, 81, {
                "29": {
                    x: -17.9,
                    y: -111.65
                },
                "30": {
                    x: -18.35,
                    y: -111.7
                },
                "99": {
                    x: -17.3,
                    y: -112.85
                }
            })
            .addTimedChild(instance16, 29, 81, {
                "29": {
                    x: 7.5,
                    y: -111.35
                },
                "30": {
                    x: 7.05,
                    y: -111.9
                },
                "99": {
                    x: 8.1,
                    y: -113.05
                }
            })
            .addTimedChild(instance19, 112, 4, {
                "112": {
                    x: -17.3,
                    y: -112.85
                }
            })
            .addTimedChild(instance18, 112, 4, {
                "112": {
                    x: 8.1,
                    y: -113.05
                }
            })
            .addTimedChild(instance24, 117, 10, {
                "117": {
                    x: -17.3,
                    y: -112.85
                },
                "122": {
                    x: -16.95,
                    y: -112.6
                },
                "126": {
                    x: -17.3,
                    y: -112.85
                }
            })
            .addTimedChild(instance23, 117, 10, {
                "117": {
                    x: 8.1,
                    y: -113.05
                },
                "122": {
                    x: 8.55,
                    y: -112.85
                },
                "126": {
                    x: 8.1,
                    y: -113.05
                }
            })
            .addTimedChild(instance28, 129, 6, {
                "129": {
                    x: -17.3,
                    y: -112.85
                }
            })
            .addTimedChild(instance27, 129, 6, {
                "129": {
                    x: 8.1,
                    y: -113.05
                }
            })
            .addTimedChild(instance31, 137, 17, {
                "137": {
                    x: -15.65,
                    y: -117.35
                },
                "138": {
                    x: -15.6,
                    y: -117.6
                },
                "145": {
                    x: -18.05,
                    y: -115.5
                },
                "146": {
                    x: -18.45,
                    y: -115.2
                }
            })
            .addTimedChild(instance30, 137, 17, {
                "137": {
                    x: 9.75,
                    y: -117.55
                },
                "138": {
                    x: 9.8,
                    y: -117.8
                },
                "145": {
                    x: 7.35,
                    y: -115.7
                },
                "146": {
                    x: 6.95,
                    y: -115.4
                }
            })
            .addTimedChild(instance33, 156, 14)
            .addTimedChild(instance32, 156, 14);
    });

    lib.DAD_NECK = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[248])
            .setTransform(-1222.8, -397.15, 0.95);
        this.addChild(instance1);
    });

    var Graphic53 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance7 = new Graphics()
            .drawCommands(shapes.s04[251]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s04[201])
            .setTransform(14.3, -13.75, 1, 1, -0.069);
        var instance5 = new Graphics()
            .drawCommands(shapes.s04[200])
            .setTransform(4, -9.1);
        var instance4 = new Graphics()
            .drawCommands(shapes.s04[199]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s04[198]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s04[250]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[249]);
        this.addTimedChild(instance7)
            .addTimedChild(instance6)
            .addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic55 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance7 = new Graphics()
            .drawCommands(shapes.s04[251]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s04[201])
            .setTransform(14.3, -13.75, 1, 1, -0.069);
        var instance5 = new Graphics()
            .drawCommands(shapes.s04[200])
            .setTransform(4, -9.1);
        var instance4 = new Graphics()
            .drawCommands(shapes.s04[199]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s04[198]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s04[250]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[249]);
        this.addTimedChild(instance7)
            .addTimedChild(instance6)
            .addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic82 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 275, loop: false });
        var instance4 = new Graphic53(MovieClip.SYNCHED);
        var instance6 = new Graphic55(MovieClip.SYNCHED);
        var instance3 = new lib.DAD_NECK();
        var instance2 = new Graphic52(MovieClip.SYNCHED);
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[204]);
        var instance5 = new Graphic54(MovieClip.SYNCHED);
        this.addTimedChild(instance4, 34, 3, {
                "34": {
                    x: -7.85,
                    y: -449.1,
                    r: 1.326
                },
                "35": {
                    x: -26.85,
                    y: -452.2
                },
                "36": {
                    x: -33.2,
                    y: -453.2
                }
            })
            .addTimedChild(instance6, 189, 3, {
                "189": {
                    x: -7.85,
                    y: -449.1,
                    r: 1.326
                },
                "190": {
                    x: 21.6,
                    y: -438.486
                },
                "191": {
                    x: 51,
                    y: -427.85
                }
            })
            .addTimedChild(instance3, 34, 170, {
                "34": {
                    x: -0.35,
                    y: -520.15,
                    r: -0.671
                },
                "35": {
                    x: -20.45,
                    y: -525.85,
                    r: -0.6
                },
                "36": {
                    x: -32.4,
                    y: -529.25,
                    r: -0.558
                },
                "37": {
                    x: -36.5,
                    y: -530.4,
                    r: -0.544
                },
                "53": {
                    x: -37.65,
                    y: -531.35,
                    r: -0.607
                },
                "54": {
                    x: -38.2,
                    y: -531.85,
                    r: -0.644
                },
                "55": {
                    x: -38.4,
                    y: -532.05,
                    r: -0.656
                },
                "62": {
                    x: -37.3,
                    y: -531.2,
                    r: -0.594
                },
                "63": {
                    x: -36.65,
                    y: -530.65,
                    r: -0.557
                },
                "64": {
                    x: -36.5,
                    y: -530.4,
                    r: -0.544
                },
                "178": {
                    x: -36.549,
                    y: -527.892
                },
                "179": {
                    y: -526.392
                },
                "180": {
                    x: -36.5,
                    y: -525.85
                },
                "190": {
                    x: -36.158,
                    y: -525.937,
                    r: -0.543
                },
                "191": {
                    x: -35.007,
                    y: -526.014,
                    r: -0.539
                },
                "192": {
                    x: -33.063,
                    y: -526.157,
                    r: -0.533
                },
                "193": {
                    x: -30.392,
                    y: -526.314,
                    r: -0.525
                },
                "194": {
                    x: -26.93,
                    y: -526.564,
                    r: -0.513
                },
                "195": {
                    x: -22.685,
                    y: -526.841,
                    r: -0.5
                },
                "196": {
                    x: -17.651,
                    y: -527.229,
                    r: -0.484
                },
                "197": {
                    x: -11.809,
                    y: -527.617,
                    r: -0.466
                },
                "198": {
                    x: -5.256,
                    y: -528.063,
                    r: -0.445
                },
                "199": {
                    x: 2.109,
                    y: -528.539,
                    r: -0.421
                },
                "200": {
                    x: 10.257,
                    y: -529.09,
                    r: -0.396
                },
                "201": {
                    x: 19.239,
                    y: -529.721,
                    r: -0.367
                },
                "202": {
                    x: 29,
                    y: -530.3,
                    r: -0.336
                }
            })
            .addTimedChild(instance2, 34, 170, {
                "34": {
                    x: -20.2,
                    y: -559.1,
                    r: -0.601
                },
                "35": {
                    x: -54.65,
                    y: -565.65,
                    r: -0.516
                },
                "36": {
                    x: -75.15,
                    y: -569.5,
                    r: -0.466
                },
                "37": {
                    x: -82,
                    y: -570.95,
                    r: -0.449
                },
                "46": {
                    r: -0.501
                },
                "47": {
                    x: -81.95,
                    y: -571.1,
                    r: -0.538
                },
                "48": {
                    x: -81.85,
                    y: -571.05,
                    r: -0.559
                },
                "49": {
                    x: -81.95,
                    y: -570.95,
                    r: -0.567
                },
                "53": {
                    x: -84.1,
                    y: -574.05,
                    r: -0.692
                },
                "54": {
                    x: -85.35,
                    y: -575.8,
                    r: -0.766
                },
                "55": {
                    x: -85.75,
                    y: -576.25,
                    r: -0.791
                },
                "62": {
                    x: -83.5,
                    y: -573.2,
                    r: -0.6
                },
                "63": {
                    x: -82.3,
                    y: -571.35,
                    r: -0.487
                },
                "64": {
                    x: -82,
                    y: -570.95,
                    r: -0.449
                },
                "164": {
                    x: -82.21,
                    y: -571.055,
                    r: -0.416
                },
                "165": {
                    x: -82.25,
                    y: -570.95,
                    r: -0.406
                },
                "178": {
                    x: -79.673,
                    y: -568.513,
                    r: -0.471
                },
                "179": {
                    x: -78.171,
                    y: -567.036,
                    r: -0.51
                },
                "180": {
                    x: -77.7,
                    y: -566.4,
                    r: -0.522
                },
                "190": {
                    x: -76.856,
                    y: -566.562,
                    r: -0.521
                },
                "191": {
                    x: -74.37,
                    y: -567.042,
                    r: -0.516
                },
                "192": {
                    x: -70.142,
                    y: -567.729,
                    r: -0.507
                },
                "193": {
                    x: -64.339,
                    y: -568.753,
                    r: -0.496
                },
                "194": {
                    x: -56.864,
                    y: -569.966,
                    r: -0.481
                },
                "195": {
                    x: -47.74,
                    y: -571.561,
                    r: -0.463
                },
                "196": {
                    x: -36.972,
                    y: -573.422,
                    r: -0.441
                },
                "197": {
                    x: -24.423,
                    y: -575.582,
                    r: -0.416
                },
                "198": {
                    x: -10.291,
                    y: -577.981,
                    r: -0.388
                },
                "199": {
                    x: 5.583,
                    y: -580.698,
                    r: -0.357
                },
                "200": {
                    x: 23.162,
                    y: -583.657,
                    r: -0.321
                },
                "201": {
                    x: 42.507,
                    y: -586.996,
                    r: -0.283
                },
                "202": {
                    x: 63.65,
                    y: -590.65,
                    r: -0.241
                }
            })
            .addTimedChild(instance1)
            .addTimedChild(instance5, 37, 152, {
                "37": {
                    x: -89.85,
                    y: -439.25,
                    kx: 1.508,
                    ky: 1.633
                },
                "38": {
                    x: -88.096,
                    y: -438.68
                },
                "39": {
                    x: -87.45,
                    y: -438.45
                },
                "187": {
                    x: -89.546,
                    y: -438.48
                },
                "188": {
                    x: -95.65,
                    y: -438.45
                }
            });
    });

    lib.Graphic56 = Container.extend(function () {
        Container.call(this);
        var instance4 = new Graphics()
            .drawCommands(shapes.s04[255])
            .setTransform(-17.65, 14.8, 0.95);
        var instance3 = new Graphics()
            .drawCommands(shapes.s04[254])
            .setTransform(-470, -630.85, 0.95);
        var instance2 = new Graphics()
            .drawCommands(shapes.s04[253])
            .setTransform(-470, -630.85, 0.95);
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[252])
            .setTransform(-470, -630.85, 0.95);
        this.addChild(instance4, instance3, instance2, instance1);
    });

    lib.Graphic57 = Container.extend(function () {
        Container.call(this);
        var instance3 = new Graphics()
            .drawCommands(shapes.s04[258])
            .setTransform(14.05, 13.35, 0.95);
        var instance2 = new Graphics()
            .drawCommands(shapes.s04[257])
            .setTransform(-438.25, -629.9, 0.95);
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[256])
            .setTransform(-438.25, -629.9, 0.95);
        this.addChild(instance3, instance2, instance1);
    });

    lib.DEDE_SHIRT = Container.extend(function () {
        Container.call(this);
        var instance3 = new Graphics()
            .drawCommands(shapes.s04[259]);
        var instance2 = new lib.Graphic57()
            .setTransform(-9.2, -101.15);
        var instance1 = new lib.Graphic56()
            .setTransform(22.55, -100.2);
        this.addChild(instance3, instance2, instance1);
    });

    var Graphic77 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 275, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s04[309]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[306]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s04[310]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s04[307]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s04[304]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s04[302]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s04[300]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s04[298]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s04[311]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s04[308]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s04[305]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s04[303]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s04[301]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s04[299]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s04[309])
            .setTransform(6.6, 5.05, 1, 1, 0, 0.354, 2.788);
        var instance15 = new Graphics()
            .drawCommands(shapes.s04[306]);
        this.addTimedChild(instance2, 0, 98, {
                "0": {
                    x: 6.6,
                    y: 5.05,
                    kx: 0.354,
                    ky: 2.788
                }
            })
            .addTimedChild(instance1, 0, 98)
            .addTimedChild(instance8, 98, 20)
            .addTimedChild(instance7, 98, 20)
            .addTimedChild(instance6, 98, 20, {
                "98": {
                    x: 9.1,
                    y: 30.35,
                    kx: 0.501,
                    ky: 2.64
                }
            })
            .addTimedChild(instance5, 98, 20, {
                "98": {
                    x: 9.1,
                    y: 30.35,
                    kx: 0.501,
                    ky: 2.64
                }
            })
            .addTimedChild(instance4, 98, 20, {
                "98": {
                    x: 9.2,
                    y: 30.25,
                    kx: 0.501,
                    ky: 2.64
                }
            })
            .addTimedChild(instance3, 98, 20, {
                "98": {
                    x: 9,
                    y: 30.4,
                    kx: 0.501,
                    ky: 2.64
                }
            })
            .addTimedChild(instance14, 118, 72)
            .addTimedChild(instance13, 118, 72, {
                "118": {
                    x: 3.1,
                    y: -2.15,
                    r: 0.134
                }
            })
            .addTimedChild(instance12, 118, 72, {
                "118": {
                    x: 10.35,
                    y: 30.05,
                    sx: 1.12,
                    sy: 1.056,
                    kx: 0.246,
                    ky: 2.895
                }
            })
            .addTimedChild(instance11, 118, 72, {
                "118": {
                    x: 9.55,
                    y: 31.8,
                    kx: 0.494,
                    ky: 2.648
                }
            })
            .addTimedChild(instance10, 118, 72, {
                "118": {
                    x: 9.3,
                    y: 31.9,
                    kx: 0.741,
                    ky: 2.401
                }
            })
            .addTimedChild(instance9, 118, 72, {
                "118": {
                    x: 16.15,
                    y: 34.3,
                    kx: 0.828,
                    ky: 2.314
                }
            })
            .addTimedChild(instance16, 190, 85)
            .addTimedChild(instance15, 190, 85);
    });

    lib.DEDE_SHORTS = Container.extend(function () {
        Container.call(this);
        var instance4 = new Graphics()
            .drawCommands(shapes.s04[315]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s04[314]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s04[313]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[312]);
        this.addChild(instance4, instance3, instance2, instance1);
    });

    var Graphic78 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 275, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s04[309]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[306]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s04[310]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s04[307]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s04[304]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s04[302]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s04[300]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s04[298]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s04[311]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s04[308]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s04[305]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s04[303]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s04[301]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s04[299]);
        var instance20 = new Graphics()
            .drawCommands(shapes.s04[310]);
        var instance19 = new Graphics()
            .drawCommands(shapes.s04[307]);
        var instance18 = new Graphics()
            .drawCommands(shapes.s04[304]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s04[302]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s04[300]);
        var instance15 = new Graphics()
            .drawCommands(shapes.s04[298]);
        var instance22 = new Graphics()
            .drawCommands(shapes.s04[309])
            .setTransform(6.6, 5.05, 1, 1, 0, 0.354, 2.788);
        var instance21 = new Graphics()
            .drawCommands(shapes.s04[306]);
        this.addTimedChild(instance2, 0, 74, {
                "0": {
                    x: 6.6,
                    y: 5.05,
                    kx: 0.354,
                    ky: 2.788
                }
            })
            .addTimedChild(instance1, 0, 74)
            .addTimedChild(instance8, 74, 44)
            .addTimedChild(instance7, 74, 44)
            .addTimedChild(instance6, 74, 44, {
                "74": {
                    x: 9.1,
                    y: 30.35,
                    kx: 0.501,
                    ky: 2.64
                }
            })
            .addTimedChild(instance5, 74, 44, {
                "74": {
                    x: 9.1,
                    y: 30.35,
                    kx: 0.501,
                    ky: 2.64
                }
            })
            .addTimedChild(instance4, 74, 44, {
                "74": {
                    x: 9.2,
                    y: 30.25,
                    kx: 0.501,
                    ky: 2.64
                }
            })
            .addTimedChild(instance3, 74, 44, {
                "74": {
                    x: 9,
                    y: 30.4,
                    kx: 0.501,
                    ky: 2.64
                }
            })
            .addTimedChild(instance14, 118, 72)
            .addTimedChild(instance13, 118, 72, {
                "118": {
                    x: 3.1,
                    y: -2.15,
                    r: 0.134
                }
            })
            .addTimedChild(instance12, 118, 72, {
                "118": {
                    x: 10.35,
                    y: 30.05,
                    sx: 1.12,
                    sy: 1.056,
                    kx: 0.246,
                    ky: 2.895
                }
            })
            .addTimedChild(instance11, 118, 72, {
                "118": {
                    x: 9.55,
                    y: 31.8,
                    kx: 0.494,
                    ky: 2.648
                }
            })
            .addTimedChild(instance10, 118, 72, {
                "118": {
                    x: 9.3,
                    y: 31.9,
                    kx: 0.741,
                    ky: 2.401
                }
            })
            .addTimedChild(instance9, 118, 72, {
                "118": {
                    x: 16.15,
                    y: 34.3,
                    kx: 0.828,
                    ky: 2.314
                }
            })
            .addTimedChild(instance20, 190, 26)
            .addTimedChild(instance19, 190, 26)
            .addTimedChild(instance18, 190, 26, {
                "190": {
                    x: 9.1,
                    y: 30.35,
                    kx: 0.501,
                    ky: 2.64
                }
            })
            .addTimedChild(instance17, 190, 26, {
                "190": {
                    x: 9.1,
                    y: 30.35,
                    kx: 0.501,
                    ky: 2.64
                }
            })
            .addTimedChild(instance16, 190, 26, {
                "190": {
                    x: 9.2,
                    y: 30.25,
                    kx: 0.501,
                    ky: 2.64
                }
            })
            .addTimedChild(instance15, 190, 26, {
                "190": {
                    x: 9,
                    y: 30.4,
                    kx: 0.501,
                    ky: 2.64
                }
            })
            .addTimedChild(instance22, 216, 59)
            .addTimedChild(instance21, 216, 59);
    });

    lib.DEDE_SHOE = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 2
        });
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[373]);
        this.addTimedChild(instance1);
    });

    var Graphic59 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 275, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[374]);
        this.addTimedChild(instance1);
    });

    var Graphic60 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 275, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[375])
            .setTransform(-466.8, -453.85);
        this.addTimedChild(instance1);
    });

    var Graphic61 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 275, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[376])
            .setTransform(-504.35, -453.65);
        this.addTimedChild(instance1);
    });

    var Graphic62 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 7, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[377])
            .setTransform(-458.45, -480.9, 0.972);
        this.addTimedChild(instance1);
    });

    var Graphic69 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 11, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[377])
            .setTransform(-458.45, -480.9, 0.972);
        this.addTimedChild(instance1);
    });

    var Graphic71 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 8, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[377])
            .setTransform(-458.45, -480.9, 0.972);
        this.addTimedChild(instance1);
    });

    var Graphic73 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 173, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[377])
            .setTransform(-458.45, -480.9, 0.972);
        this.addTimedChild(instance1);
    });

    var Graphic75 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 14, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[377])
            .setTransform(-458.45, -480.9, 0.972);
        this.addTimedChild(instance1);
    });

    var Graphic63 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 7, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[377])
            .setTransform(-458.45, -480.9, 0.972);
        this.addTimedChild(instance1);
    });

    var Graphic70 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 11, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[377])
            .setTransform(-458.45, -480.9, 0.972);
        this.addTimedChild(instance1);
    });

    var Graphic72 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 8, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[377])
            .setTransform(-458.45, -480.9, 0.972);
        this.addTimedChild(instance1);
    });

    var Graphic74 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 173, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[377])
            .setTransform(-458.45, -480.9, 0.972);
        this.addTimedChild(instance1);
    });

    var Graphic76 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 14, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[377])
            .setTransform(-458.45, -480.9, 0.972);
        this.addTimedChild(instance1);
    });

    var Graphic64 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 275, loop: false });
        var instance6 = new Graphics()
            .drawCommands(shapes.s04[383]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s04[382]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s04[381]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s04[380]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s04[379]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[378]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s04[389]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s04[388]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s04[387]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s04[386]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s04[385]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s04[384]);
        var instance18 = new Graphics()
            .drawCommands(shapes.s04[383]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s04[382]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s04[381]);
        var instance15 = new Graphics()
            .drawCommands(shapes.s04[380]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s04[379]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s04[378]);
        var instance24 = new Graphics()
            .drawCommands(shapes.s04[389]);
        var instance23 = new Graphics()
            .drawCommands(shapes.s04[388]);
        var instance22 = new Graphics()
            .drawCommands(shapes.s04[387]);
        var instance21 = new Graphics()
            .drawCommands(shapes.s04[386]);
        var instance20 = new Graphics()
            .drawCommands(shapes.s04[385]);
        var instance19 = new Graphics()
            .drawCommands(shapes.s04[384]);
        var instance30 = new Graphics()
            .drawCommands(shapes.s04[383]);
        var instance29 = new Graphics()
            .drawCommands(shapes.s04[382]);
        var instance28 = new Graphics()
            .drawCommands(shapes.s04[381]);
        var instance27 = new Graphics()
            .drawCommands(shapes.s04[380]);
        var instance26 = new Graphics()
            .drawCommands(shapes.s04[379]);
        var instance25 = new Graphics()
            .drawCommands(shapes.s04[378]);
        var instance36 = new Graphics()
            .drawCommands(shapes.s04[389]);
        var instance35 = new Graphics()
            .drawCommands(shapes.s04[388]);
        var instance34 = new Graphics()
            .drawCommands(shapes.s04[387]);
        var instance33 = new Graphics()
            .drawCommands(shapes.s04[386]);
        var instance32 = new Graphics()
            .drawCommands(shapes.s04[385]);
        var instance31 = new Graphics()
            .drawCommands(shapes.s04[384]);
        var instance42 = new Graphics()
            .drawCommands(shapes.s04[383]);
        var instance41 = new Graphics()
            .drawCommands(shapes.s04[382]);
        var instance40 = new Graphics()
            .drawCommands(shapes.s04[381]);
        var instance39 = new Graphics()
            .drawCommands(shapes.s04[380]);
        var instance38 = new Graphics()
            .drawCommands(shapes.s04[379]);
        var instance37 = new Graphics()
            .drawCommands(shapes.s04[378]);
        var instance48 = new Graphics()
            .drawCommands(shapes.s04[389]);
        var instance47 = new Graphics()
            .drawCommands(shapes.s04[388]);
        var instance46 = new Graphics()
            .drawCommands(shapes.s04[387]);
        var instance45 = new Graphics()
            .drawCommands(shapes.s04[391]);
        var instance44 = new Graphics()
            .drawCommands(shapes.s04[385]);
        var instance43 = new Graphics()
            .drawCommands(shapes.s04[390]);
        var instance54 = new Graphics()
            .drawCommands(shapes.s04[383]);
        var instance53 = new Graphics()
            .drawCommands(shapes.s04[382]);
        var instance52 = new Graphics()
            .drawCommands(shapes.s04[381]);
        var instance51 = new Graphics()
            .drawCommands(shapes.s04[380]);
        var instance50 = new Graphics()
            .drawCommands(shapes.s04[379]);
        var instance49 = new Graphics()
            .drawCommands(shapes.s04[378]);
        var instance60 = new Graphics()
            .drawCommands(shapes.s04[389])
            .setTransform(-2.45, 1.7, 1.289, 0.827);
        var instance59 = new Graphics()
            .drawCommands(shapes.s04[388])
            .setTransform(-0.05, 1.8, 1.289, 0.827);
        var instance58 = new Graphics()
            .drawCommands(shapes.s04[387])
            .setTransform(6.85, 1.9, 0.95, 0.95);
        var instance57 = new Graphics()
            .drawCommands(shapes.s04[391])
            .setTransform(1.1, 0, 0.95, 0.95);
        var instance56 = new Graphics()
            .drawCommands(shapes.s04[385])
            .setTransform(-9.25, -1.15, 0.95, 0.95);
        var instance55 = new Graphics()
            .drawCommands(shapes.s04[390])
            .setTransform(-0.25, -0.15, 0.95, 0.95);
        this.addTimedChild(instance6, 0, 7, {
                "0": {
                    x: -386.35,
                    y: -557.05,
                    r: 0.174
                }
            })
            .addTimedChild(instance5, 0, 7, {
                "0": {
                    x: -385.25,
                    y: -559.2,
                    r: 0.174
                }
            })
            .addTimedChild(instance4, 0, 7, {
                "0": {
                    x: -486.6,
                    y: -478.35
                }
            })
            .addTimedChild(instance3, 0, 7, {
                "0": {
                    x: -455.15,
                    y: -505.5,
                    r: 0.06
                }
            })
            .addTimedChild(instance2, 0, 7, {
                "0": {
                    x: -588.15,
                    y: -407.35,
                    sx: 1.216,
                    sy: 0.851
                }
            })
            .addTimedChild(instance1, 0, 7, {
                "0": {
                    x: -596.45,
                    y: -406.55,
                    sx: 1.239,
                    sy: 0.851
                }
            })
            .addTimedChild(instance12, 7, 1, {
                "7": {
                    x: -3.5,
                    y: 0.3,
                    sx: 1.05
                }
            })
            .addTimedChild(instance11, 7, 1, {
                "7": {
                    x: 3.05,
                    y: 0.3,
                    sx: 1.05
                }
            })
            .addTimedChild(instance10, 7, 1, {
                "7": {
                    x: 4.35,
                    y: 1.8
                }
            })
            .addTimedChild(instance9, 7, 1, {
                "7": {
                    x: 4.5,
                    y: 0.3
                }
            })
            .addTimedChild(instance8, 7, 1, {
                "7": {
                    x: -7.5,
                    y: -2.7
                }
            })
            .addTimedChild(instance7, 7, 1, {
                "7": {
                    x: -5.45,
                    y: -3.8,
                    r: -0.13
                }
            })
            .addTimedChild(instance18, 8, 11, {
                "8": {
                    x: -386.35,
                    y: -557.05,
                    r: 0.174
                }
            })
            .addTimedChild(instance17, 8, 11, {
                "8": {
                    x: -385.25,
                    y: -559.2,
                    r: 0.174
                }
            })
            .addTimedChild(instance16, 8, 11, {
                "8": {
                    x: -486.6,
                    y: -478.35
                }
            })
            .addTimedChild(instance15, 8, 11, {
                "8": {
                    x: -455.15,
                    y: -505.5,
                    r: 0.06
                }
            })
            .addTimedChild(instance14, 8, 11, {
                "8": {
                    x: -588.15,
                    y: -407.35,
                    sx: 1.216,
                    sy: 0.851
                }
            })
            .addTimedChild(instance13, 8, 11, {
                "8": {
                    x: -596.45,
                    y: -406.55,
                    sx: 1.239,
                    sy: 0.851
                }
            })
            .addTimedChild(instance24, 19, 1, {
                "19": {
                    x: -3.5,
                    y: 0.3,
                    sx: 1.05
                }
            })
            .addTimedChild(instance23, 19, 1, {
                "19": {
                    x: 3.05,
                    y: 0.3,
                    sx: 1.05
                }
            })
            .addTimedChild(instance22, 19, 1, {
                "19": {
                    x: 4.35,
                    y: 1.8
                }
            })
            .addTimedChild(instance21, 19, 1, {
                "19": {
                    x: 4.5,
                    y: 0.3
                }
            })
            .addTimedChild(instance20, 19, 1, {
                "19": {
                    x: -7.5,
                    y: -2.7
                }
            })
            .addTimedChild(instance19, 19, 1, {
                "19": {
                    x: -5.45,
                    y: -3.8,
                    r: -0.13
                }
            })
            .addTimedChild(instance30, 20, 8, {
                "20": {
                    x: -386.35,
                    y: -557.05,
                    r: 0.174
                }
            })
            .addTimedChild(instance29, 20, 8, {
                "20": {
                    x: -385.25,
                    y: -559.2,
                    r: 0.174
                }
            })
            .addTimedChild(instance28, 20, 8, {
                "20": {
                    x: -486.6,
                    y: -478.35
                }
            })
            .addTimedChild(instance27, 20, 8, {
                "20": {
                    x: -455.15,
                    y: -505.5,
                    r: 0.06
                }
            })
            .addTimedChild(instance26, 20, 8, {
                "20": {
                    x: -588.15,
                    y: -407.35,
                    sx: 1.216,
                    sy: 0.851
                }
            })
            .addTimedChild(instance25, 20, 8, {
                "20": {
                    x: -596.45,
                    y: -406.55,
                    sx: 1.239,
                    sy: 0.851
                }
            })
            .addTimedChild(instance36, 28, 1, {
                "28": {
                    x: -3.5,
                    y: 0.3,
                    sx: 1.05
                }
            })
            .addTimedChild(instance35, 28, 1, {
                "28": {
                    x: 3.05,
                    y: 0.3,
                    sx: 1.05
                }
            })
            .addTimedChild(instance34, 28, 1, {
                "28": {
                    x: 4.35,
                    y: 1.8
                }
            })
            .addTimedChild(instance33, 28, 1, {
                "28": {
                    x: 4.5,
                    y: 0.3
                }
            })
            .addTimedChild(instance32, 28, 1, {
                "28": {
                    x: -7.5,
                    y: -2.7
                }
            })
            .addTimedChild(instance31, 28, 1, {
                "28": {
                    x: -5.45,
                    y: -3.8,
                    r: -0.13
                }
            })
            .addTimedChild(instance42, 29, 173, {
                "29": {
                    x: -386.35,
                    y: -557.05,
                    r: 0.174
                }
            })
            .addTimedChild(instance41, 29, 173, {
                "29": {
                    x: -385.25,
                    y: -559.2,
                    r: 0.174
                }
            })
            .addTimedChild(instance40, 29, 173, {
                "29": {
                    x: -486.6,
                    y: -478.35
                }
            })
            .addTimedChild(instance39, 29, 173, {
                "29": {
                    x: -455.15,
                    y: -505.5,
                    r: 0.06
                }
            })
            .addTimedChild(instance38, 29, 173, {
                "29": {
                    x: -588.15,
                    y: -407.35,
                    sx: 1.216,
                    sy: 0.851
                }
            })
            .addTimedChild(instance37, 29, 173, {
                "29": {
                    x: -596.45,
                    y: -406.55,
                    sx: 1.239,
                    sy: 0.851
                }
            })
            .addTimedChild(instance48, 202, 8, {
                "202": {
                    x: -2.45,
                    y: 1.7,
                    sx: 1.289,
                    sy: 0.827
                }
            })
            .addTimedChild(instance47, 202, 8, {
                "202": {
                    x: -0.05,
                    y: 1.8,
                    sx: 1.289,
                    sy: 0.827
                }
            })
            .addTimedChild(instance46, 202, 8, {
                "202": {
                    x: 6.85,
                    y: 1.9,
                    sx: 0.95,
                    sy: 0.95
                }
            })
            .addTimedChild(instance45, 202, 8, {
                "202": {
                    x: 1.1,
                    sx: 0.95,
                    sy: 0.95
                }
            })
            .addTimedChild(instance44, 202, 8, {
                "202": {
                    x: -9.25,
                    y: -1.15,
                    sx: 0.95,
                    sy: 0.95
                }
            })
            .addTimedChild(instance43, 202, 8, {
                "202": {
                    x: -0.25,
                    y: -0.15,
                    sx: 0.95,
                    sy: 0.95
                }
            })
            .addTimedChild(instance54, 210, 14, {
                "210": {
                    x: -386.35,
                    y: -557.05,
                    r: 0.174
                }
            })
            .addTimedChild(instance53, 210, 14, {
                "210": {
                    x: -385.25,
                    y: -559.2,
                    r: 0.174
                }
            })
            .addTimedChild(instance52, 210, 14, {
                "210": {
                    x: -486.6,
                    y: -478.35
                }
            })
            .addTimedChild(instance51, 210, 14, {
                "210": {
                    x: -455.15,
                    y: -505.5,
                    r: 0.06
                }
            })
            .addTimedChild(instance50, 210, 14, {
                "210": {
                    x: -588.15,
                    y: -407.35,
                    sx: 1.216,
                    sy: 0.851
                }
            })
            .addTimedChild(instance49, 210, 14, {
                "210": {
                    x: -596.45,
                    y: -406.55,
                    sx: 1.239,
                    sy: 0.851
                }
            })
            .addTimedChild(instance60, 224, 51)
            .addTimedChild(instance59, 224, 51)
            .addTimedChild(instance58, 224, 51)
            .addTimedChild(instance57, 224, 51)
            .addTimedChild(instance56, 224, 51)
            .addTimedChild(instance55, 224, 51);
    });

    var Graphic58 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 275, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[392]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s04[393]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s04[400]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s04[226]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s04[222]);
        var instance8 = new Graphics()
            .drawCommands(shapes.s04[401]);
        var instance7 = new Graphics()
            .drawCommands(shapes.s04[398]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s04[225]);
        var instance12 = new Graphics()
            .drawCommands(shapes.s04[402]);
        var instance11 = new Graphics()
            .drawCommands(shapes.s04[235]);
        var instance10 = new Graphics()
            .drawCommands(shapes.s04[234]);
        var instance9 = new Graphics()
            .drawCommands(shapes.s04[394]);
        var instance15 = new Graphics()
            .drawCommands(shapes.s04[400]);
        var instance14 = new Graphics()
            .drawCommands(shapes.s04[226]);
        var instance13 = new Graphics()
            .drawCommands(shapes.s04[222]);
        var instance16 = new Graphics()
            .drawCommands(shapes.s04[393]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s04[221]);
        var instance20 = new Graphics()
            .drawCommands(shapes.s04[401]);
        var instance19 = new Graphics()
            .drawCommands(shapes.s04[398]);
        var instance18 = new Graphics()
            .drawCommands(shapes.s04[225]);
        var instance24 = new Graphics()
            .drawCommands(shapes.s04[219]);
        var instance23 = new Graphics()
            .drawCommands(shapes.s04[218]);
        var instance22 = new Graphics()
            .drawCommands(shapes.s04[217]);
        var instance21 = new Graphics()
            .drawCommands(shapes.s04[216]);
        var instance27 = new Graphics()
            .drawCommands(shapes.s04[400]);
        var instance26 = new Graphics()
            .drawCommands(shapes.s04[226]);
        var instance25 = new Graphics()
            .drawCommands(shapes.s04[222]);
        var instance30 = new Graphics()
            .drawCommands(shapes.s04[403]);
        var instance29 = new Graphics()
            .drawCommands(shapes.s04[227]);
        var instance28 = new Graphics()
            .drawCommands(shapes.s04[223]);
        var instance34 = new Graphics()
            .drawCommands(shapes.s04[219]);
        var instance33 = new Graphics()
            .drawCommands(shapes.s04[218]);
        var instance32 = new Graphics()
            .drawCommands(shapes.s04[217]);
        var instance31 = new Graphics()
            .drawCommands(shapes.s04[216]);
        var instance37 = new Graphics()
            .drawCommands(shapes.s04[400]);
        var instance36 = new Graphics()
            .drawCommands(shapes.s04[226]);
        var instance35 = new Graphics()
            .drawCommands(shapes.s04[222]);
        var instance40 = new Graphics()
            .drawCommands(shapes.s04[401]);
        var instance39 = new Graphics()
            .drawCommands(shapes.s04[398]);
        var instance38 = new Graphics()
            .drawCommands(shapes.s04[225]);
        var instance44 = new Graphics()
            .drawCommands(shapes.s04[402]);
        var instance43 = new Graphics()
            .drawCommands(shapes.s04[235]);
        var instance42 = new Graphics()
            .drawCommands(shapes.s04[234]);
        var instance41 = new Graphics()
            .drawCommands(shapes.s04[394]);
        var instance45 = new Graphics()
            .drawCommands(shapes.s04[220]);
        var instance49 = new Graphics()
            .drawCommands(shapes.s04[219]);
        var instance48 = new Graphics()
            .drawCommands(shapes.s04[218]);
        var instance47 = new Graphics()
            .drawCommands(shapes.s04[217]);
        var instance46 = new Graphics()
            .drawCommands(shapes.s04[216]);
        var instance52 = new Graphics()
            .drawCommands(shapes.s04[400]);
        var instance51 = new Graphics()
            .drawCommands(shapes.s04[226]);
        var instance50 = new Graphics()
            .drawCommands(shapes.s04[222]);
        var instance55 = new Graphics()
            .drawCommands(shapes.s04[404]);
        var instance54 = new Graphics()
            .drawCommands(shapes.s04[228]);
        var instance53 = new Graphics()
            .drawCommands(shapes.s04[224]);
        var instance58 = new Graphics()
            .drawCommands(shapes.s04[400]);
        var instance57 = new Graphics()
            .drawCommands(shapes.s04[226]);
        var instance56 = new Graphics()
            .drawCommands(shapes.s04[222]);
        var instance62 = new Graphics()
            .drawCommands(shapes.s04[219]);
        var instance61 = new Graphics()
            .drawCommands(shapes.s04[218]);
        var instance60 = new Graphics()
            .drawCommands(shapes.s04[217]);
        var instance59 = new Graphics()
            .drawCommands(shapes.s04[216]);
        var instance63 = new Graphics()
            .drawCommands(shapes.s04[221]);
        var instance66 = new Graphics()
            .drawCommands(shapes.s04[401]);
        var instance65 = new Graphics()
            .drawCommands(shapes.s04[398]);
        var instance64 = new Graphics()
            .drawCommands(shapes.s04[225]);
        var instance69 = new Graphics()
            .drawCommands(shapes.s04[400]);
        var instance68 = new Graphics()
            .drawCommands(shapes.s04[226]);
        var instance67 = new Graphics()
            .drawCommands(shapes.s04[222]);
        var instance70 = new Graphics()
            .drawCommands(shapes.s04[393]);
        var instance74 = new Graphics()
            .drawCommands(shapes.s04[402]);
        var instance73 = new Graphics()
            .drawCommands(shapes.s04[235]);
        var instance72 = new Graphics()
            .drawCommands(shapes.s04[234]);
        var instance71 = new Graphics()
            .drawCommands(shapes.s04[394]);
        var instance78 = new Graphics()
            .drawCommands(shapes.s04[219]);
        var instance77 = new Graphics()
            .drawCommands(shapes.s04[218]);
        var instance76 = new Graphics()
            .drawCommands(shapes.s04[217]);
        var instance75 = new Graphics()
            .drawCommands(shapes.s04[216]);
        var instance81 = new Graphics()
            .drawCommands(shapes.s04[401]);
        var instance80 = new Graphics()
            .drawCommands(shapes.s04[398]);
        var instance79 = new Graphics()
            .drawCommands(shapes.s04[225]);
        var instance84 = new Graphics()
            .drawCommands(shapes.s04[400]);
        var instance83 = new Graphics()
            .drawCommands(shapes.s04[226]);
        var instance82 = new Graphics()
            .drawCommands(shapes.s04[222]);
        var instance88 = new Graphics()
            .drawCommands(shapes.s04[219]);
        var instance87 = new Graphics()
            .drawCommands(shapes.s04[218]);
        var instance86 = new Graphics()
            .drawCommands(shapes.s04[217]);
        var instance85 = new Graphics()
            .drawCommands(shapes.s04[216]);
        var instance89 = new Graphics()
            .drawCommands(shapes.s04[395]);
        var instance93 = new Graphics()
            .drawCommands(shapes.s04[219]);
        var instance92 = new Graphics()
            .drawCommands(shapes.s04[218]);
        var instance91 = new Graphics()
            .drawCommands(shapes.s04[217]);
        var instance90 = new Graphics()
            .drawCommands(shapes.s04[216]);
        var instance96 = new Graphics()
            .drawCommands(shapes.s04[400]);
        var instance95 = new Graphics()
            .drawCommands(shapes.s04[226]);
        var instance94 = new Graphics()
            .drawCommands(shapes.s04[222]);
        var instance99 = new Graphics()
            .drawCommands(shapes.s04[401]);
        var instance98 = new Graphics()
            .drawCommands(shapes.s04[398]);
        var instance97 = new Graphics()
            .drawCommands(shapes.s04[225]);
        var instance100 = new Graphics()
            .drawCommands(shapes.s04[395]);
        var instance101 = new Graphics()
            .drawCommands(shapes.s04[393]);
        var instance102 = new Graphics()
            .drawCommands(shapes.s04[221]);
        var instance106 = new Graphics()
            .drawCommands(shapes.s04[219]);
        var instance105 = new Graphics()
            .drawCommands(shapes.s04[218]);
        var instance104 = new Graphics()
            .drawCommands(shapes.s04[217]);
        var instance103 = new Graphics()
            .drawCommands(shapes.s04[216]);
        var instance109 = new Graphics()
            .drawCommands(shapes.s04[401]);
        var instance108 = new Graphics()
            .drawCommands(shapes.s04[398]);
        var instance107 = new Graphics()
            .drawCommands(shapes.s04[225]);
        var instance113 = new Graphics()
            .drawCommands(shapes.s04[219]);
        var instance112 = new Graphics()
            .drawCommands(shapes.s04[218]);
        var instance111 = new Graphics()
            .drawCommands(shapes.s04[217]);
        var instance110 = new Graphics()
            .drawCommands(shapes.s04[216]);
        var instance114 = new Graphics()
            .drawCommands(shapes.s04[221]);
        var instance117 = new Graphics()
            .drawCommands(shapes.s04[400]);
        var instance116 = new Graphics()
            .drawCommands(shapes.s04[226]);
        var instance115 = new Graphics()
            .drawCommands(shapes.s04[222]);
        var instance118 = new Graphics()
            .drawCommands(shapes.s04[220]);
        var instance121 = new Graphics()
            .drawCommands(shapes.s04[400]);
        var instance120 = new Graphics()
            .drawCommands(shapes.s04[226]);
        var instance119 = new Graphics()
            .drawCommands(shapes.s04[222]);
        var instance125 = new Graphics()
            .drawCommands(shapes.s04[402]);
        var instance124 = new Graphics()
            .drawCommands(shapes.s04[235]);
        var instance123 = new Graphics()
            .drawCommands(shapes.s04[234]);
        var instance122 = new Graphics()
            .drawCommands(shapes.s04[394]);
        var instance128 = new Graphics()
            .drawCommands(shapes.s04[400]);
        var instance127 = new Graphics()
            .drawCommands(shapes.s04[226]);
        var instance126 = new Graphics()
            .drawCommands(shapes.s04[222]);
        var instance131 = new Graphics()
            .drawCommands(shapes.s04[403]);
        var instance130 = new Graphics()
            .drawCommands(shapes.s04[227]);
        var instance129 = new Graphics()
            .drawCommands(shapes.s04[223]);
        var instance135 = new Graphics()
            .drawCommands(shapes.s04[219]);
        var instance134 = new Graphics()
            .drawCommands(shapes.s04[218]);
        var instance133 = new Graphics()
            .drawCommands(shapes.s04[217]);
        var instance132 = new Graphics()
            .drawCommands(shapes.s04[216]);
        var instance136 = new Graphics()
            .drawCommands(shapes.s04[221]);
        var instance140 = new Graphics()
            .drawCommands(shapes.s04[219]);
        var instance139 = new Graphics()
            .drawCommands(shapes.s04[218]);
        var instance138 = new Graphics()
            .drawCommands(shapes.s04[217]);
        var instance137 = new Graphics()
            .drawCommands(shapes.s04[216]);
        var instance141 = new Graphics()
            .drawCommands(shapes.s04[393]);
        var instance144 = new Graphics()
            .drawCommands(shapes.s04[400]);
        var instance143 = new Graphics()
            .drawCommands(shapes.s04[226]);
        var instance142 = new Graphics()
            .drawCommands(shapes.s04[222]);
        var instance148 = new Graphics()
            .drawCommands(shapes.s04[219]);
        var instance147 = new Graphics()
            .drawCommands(shapes.s04[218]);
        var instance146 = new Graphics()
            .drawCommands(shapes.s04[217]);
        var instance145 = new Graphics()
            .drawCommands(shapes.s04[216]);
        var instance151 = new Graphics()
            .drawCommands(shapes.s04[401]);
        var instance150 = new Graphics()
            .drawCommands(shapes.s04[398]);
        var instance149 = new Graphics()
            .drawCommands(shapes.s04[225]);
        var instance154 = new Graphics()
            .drawCommands(shapes.s04[400]);
        var instance153 = new Graphics()
            .drawCommands(shapes.s04[226]);
        var instance152 = new Graphics()
            .drawCommands(shapes.s04[222]);
        var instance158 = new Graphics()
            .drawCommands(shapes.s04[219]);
        var instance157 = new Graphics()
            .drawCommands(shapes.s04[218]);
        var instance156 = new Graphics()
            .drawCommands(shapes.s04[217]);
        var instance155 = new Graphics()
            .drawCommands(shapes.s04[216]);
        var instance161 = new Graphics()
            .drawCommands(shapes.s04[400]);
        var instance160 = new Graphics()
            .drawCommands(shapes.s04[226]);
        var instance159 = new Graphics()
            .drawCommands(shapes.s04[222]);
        var instance164 = new Graphics()
            .drawCommands(shapes.s04[401]);
        var instance163 = new Graphics()
            .drawCommands(shapes.s04[398]);
        var instance162 = new Graphics()
            .drawCommands(shapes.s04[225]);
        var instance168 = new Graphics()
            .drawCommands(shapes.s04[219]);
        var instance167 = new Graphics()
            .drawCommands(shapes.s04[218]);
        var instance166 = new Graphics()
            .drawCommands(shapes.s04[217]);
        var instance165 = new Graphics()
            .drawCommands(shapes.s04[216]);
        var instance169 = new Graphics()
            .drawCommands(shapes.s04[393]);
        var instance173 = new Graphics()
            .drawCommands(shapes.s04[219]);
        var instance172 = new Graphics()
            .drawCommands(shapes.s04[218]);
        var instance171 = new Graphics()
            .drawCommands(shapes.s04[217]);
        var instance174 = new Graphics()
            .drawCommands(shapes.s04[396]);
        var instance170 = new Graphics()
            .drawCommands(shapes.s04[216]);
        var instance175 = new Graphics()
            .drawCommands(shapes.s04[393]);
        var instance178 = new Graphics()
            .drawCommands(shapes.s04[405]);
        var instance177 = new Graphics()
            .drawCommands(shapes.s04[399]);
        var instance176 = new Graphics()
            .drawCommands(shapes.s04[397]);
        var instance179 = new Graphics()
            .drawCommands(shapes.s04[392]);
        var instance183 = new Graphics()
            .drawCommands(shapes.s04[219]);
        var instance182 = new Graphics()
            .drawCommands(shapes.s04[218]);
        var instance181 = new Graphics()
            .drawCommands(shapes.s04[217]);
        var instance180 = new Graphics()
            .drawCommands(shapes.s04[216]);
        var instance186 = new Graphics()
            .drawCommands(shapes.s04[401]);
        var instance185 = new Graphics()
            .drawCommands(shapes.s04[398]);
        var instance184 = new Graphics()
            .drawCommands(shapes.s04[225]);
        var instance189 = new Graphics()
            .drawCommands(shapes.s04[400]);
        var instance188 = new Graphics()
            .drawCommands(shapes.s04[226]);
        var instance187 = new Graphics()
            .drawCommands(shapes.s04[222]);
        var instance193 = new Graphics()
            .drawCommands(shapes.s04[219]);
        var instance192 = new Graphics()
            .drawCommands(shapes.s04[218]);
        var instance191 = new Graphics()
            .drawCommands(shapes.s04[217]);
        var instance190 = new Graphics()
            .drawCommands(shapes.s04[216]);
        var instance196 = new Graphics()
            .drawCommands(shapes.s04[401]);
        var instance195 = new Graphics()
            .drawCommands(shapes.s04[398]);
        var instance194 = new Graphics()
            .drawCommands(shapes.s04[225]);
        var instance199 = new Graphics()
            .drawCommands(shapes.s04[400]);
        var instance198 = new Graphics()
            .drawCommands(shapes.s04[226]);
        var instance197 = new Graphics()
            .drawCommands(shapes.s04[222]);
        var instance203 = new Graphics()
            .drawCommands(shapes.s04[219])
            .setTransform(-478.4, -525.85);
        var instance202 = new Graphics()
            .drawCommands(shapes.s04[218])
            .setTransform(0, 2.5);
        var instance201 = new Graphics()
            .drawCommands(shapes.s04[217])
            .setTransform(-478.4, -525.85);
        var instance200 = new Graphics()
            .drawCommands(shapes.s04[216])
            .setTransform(-478.4, -525.85);
        this.addTimedChild(instance1, 0, 68)
            .addTimedChild(instance2, 68, 2)
            .addTimedChild(instance5, 70, 1)
            .addTimedChild(instance4, 70, 1, {
                "70": {
                    x: 5.8,
                    y: -21
                }
            })
            .addTimedChild(instance3, 70, 1, {
                "70": {
                    x: 5.8,
                    y: -21
                }
            })
            .addTimedChild(instance8, 71, 1)
            .addTimedChild(instance7, 71, 1)
            .addTimedChild(instance6, 71, 1, {
                "71": {
                    x: 5.8,
                    y: -19.4
                }
            })
            .addTimedChild(instance12, 72, 8)
            .addTimedChild(instance11, 72, 8, {
                "72": {
                    x: 5.8,
                    y: -24
                }
            })
            .addTimedChild(instance10, 72, 8, {
                "72": {
                    x: 5.8,
                    y: -24
                }
            })
            .addTimedChild(instance9, 72, 8)
            .addTimedChild(instance15, 80, 1)
            .addTimedChild(instance14, 80, 1, {
                "80": {
                    x: 5.8,
                    y: -21
                }
            })
            .addTimedChild(instance13, 80, 1, {
                "80": {
                    x: 5.8,
                    y: -21
                }
            })
            .addTimedChild(instance16, 81, 1)
            .addTimedChild(instance17, 82, 1)
            .addTimedChild(instance20, 83, 1)
            .addTimedChild(instance19, 83, 1)
            .addTimedChild(instance18, 83, 1, {
                "83": {
                    x: 5.8,
                    y: -19.4
                }
            })
            .addTimedChild(instance24, 84, 2, {
                "84": {
                    x: -478.4,
                    y: -525.85
                }
            })
            .addTimedChild(instance23, 84, 2, {
                "84": {
                    y: 2.5
                }
            })
            .addTimedChild(instance22, 84, 2, {
                "84": {
                    x: -478.4,
                    y: -525.85
                }
            })
            .addTimedChild(instance21, 84, 2, {
                "84": {
                    x: -478.4,
                    y: -525.85
                }
            })
            .addTimedChild(instance27, 86, 1)
            .addTimedChild(instance26, 86, 1, {
                "86": {
                    x: 5.8,
                    y: -21
                }
            })
            .addTimedChild(instance25, 86, 1, {
                "86": {
                    x: 5.8,
                    y: -21
                }
            })
            .addTimedChild(instance30, 87, 1)
            .addTimedChild(instance29, 87, 1, {
                "87": {
                    x: 5.8,
                    y: -20.2
                }
            })
            .addTimedChild(instance28, 87, 1, {
                "87": {
                    x: 5.8,
                    y: -20.2
                }
            })
            .addTimedChild(instance34, 88, 1, {
                "88": {
                    x: -478.4,
                    y: -525.85
                }
            })
            .addTimedChild(instance33, 88, 1, {
                "88": {
                    y: 2.5
                }
            })
            .addTimedChild(instance32, 88, 1, {
                "88": {
                    x: -478.4,
                    y: -525.85
                }
            })
            .addTimedChild(instance31, 88, 1, {
                "88": {
                    x: -478.4,
                    y: -525.85
                }
            })
            .addTimedChild(instance37, 89, 1)
            .addTimedChild(instance36, 89, 1, {
                "89": {
                    x: 5.8,
                    y: -21
                }
            })
            .addTimedChild(instance35, 89, 1, {
                "89": {
                    x: 5.8,
                    y: -21
                }
            })
            .addTimedChild(instance40, 90, 1)
            .addTimedChild(instance39, 90, 1)
            .addTimedChild(instance38, 90, 1, {
                "90": {
                    x: 5.8,
                    y: -19.4
                }
            })
            .addTimedChild(instance44, 91, 1)
            .addTimedChild(instance43, 91, 1, {
                "91": {
                    x: 5.8,
                    y: -24
                }
            })
            .addTimedChild(instance42, 91, 1, {
                "91": {
                    x: 5.8,
                    y: -24
                }
            })
            .addTimedChild(instance41, 91, 1)
            .addTimedChild(instance45, 92, 1, {
                "92": {
                    x: -2,
                    y: 15.9
                }
            })
            .addTimedChild(instance49, 93, 2, {
                "93": {
                    x: -478.4,
                    y: -525.85
                }
            })
            .addTimedChild(instance48, 93, 2, {
                "93": {
                    y: 2.5
                }
            })
            .addTimedChild(instance47, 93, 2, {
                "93": {
                    x: -478.4,
                    y: -525.85
                }
            })
            .addTimedChild(instance46, 93, 2, {
                "93": {
                    x: -478.4,
                    y: -525.85
                }
            })
            .addTimedChild(instance52, 95, 1)
            .addTimedChild(instance51, 95, 1, {
                "95": {
                    x: 5.8,
                    y: -21
                }
            })
            .addTimedChild(instance50, 95, 1, {
                "95": {
                    x: 5.8,
                    y: -21
                }
            })
            .addTimedChild(instance55, 96, 1)
            .addTimedChild(instance54, 96, 1, {
                "96": {
                    x: 5.8,
                    y: -18.6
                }
            })
            .addTimedChild(instance53, 96, 1, {
                "96": {
                    x: 5.8,
                    y: -18.6
                }
            })
            .addTimedChild(instance58, 97, 1)
            .addTimedChild(instance57, 97, 1, {
                "97": {
                    x: 5.8,
                    y: -21
                }
            })
            .addTimedChild(instance56, 97, 1, {
                "97": {
                    x: 5.8,
                    y: -21
                }
            })
            .addTimedChild(instance62, 98, 2, {
                "98": {
                    x: -478.4,
                    y: -525.85
                }
            })
            .addTimedChild(instance61, 98, 2, {
                "98": {
                    y: 2.5
                }
            })
            .addTimedChild(instance60, 98, 2, {
                "98": {
                    x: -478.4,
                    y: -525.85
                }
            })
            .addTimedChild(instance59, 98, 2, {
                "98": {
                    x: -478.4,
                    y: -525.85
                }
            })
            .addTimedChild(instance63, 100, 1)
            .addTimedChild(instance66, 101, 1)
            .addTimedChild(instance65, 101, 1)
            .addTimedChild(instance64, 101, 1, {
                "101": {
                    x: 5.8,
                    y: -19.4
                }
            })
            .addTimedChild(instance69, 102, 1)
            .addTimedChild(instance68, 102, 1, {
                "102": {
                    x: 5.8,
                    y: -21
                }
            })
            .addTimedChild(instance67, 102, 1, {
                "102": {
                    x: 5.8,
                    y: -21
                }
            })
            .addTimedChild(instance70, 103, 2)
            .addTimedChild(instance74, 105, 1)
            .addTimedChild(instance73, 105, 1, {
                "105": {
                    x: 5.8,
                    y: -24
                }
            })
            .addTimedChild(instance72, 105, 1, {
                "105": {
                    x: 5.8,
                    y: -24
                }
            })
            .addTimedChild(instance71, 105, 1)
            .addTimedChild(instance78, 106, 1, {
                "106": {
                    x: -478.4,
                    y: -525.85
                }
            })
            .addTimedChild(instance77, 106, 1, {
                "106": {
                    y: 2.5
                }
            })
            .addTimedChild(instance76, 106, 1, {
                "106": {
                    x: -478.4,
                    y: -525.85
                }
            })
            .addTimedChild(instance75, 106, 1, {
                "106": {
                    x: -478.4,
                    y: -525.85
                }
            })
            .addTimedChild(instance81, 107, 1)
            .addTimedChild(instance80, 107, 1)
            .addTimedChild(instance79, 107, 1, {
                "107": {
                    x: 5.8,
                    y: -19.4
                }
            })
            .addTimedChild(instance84, 108, 1)
            .addTimedChild(instance83, 108, 1, {
                "108": {
                    x: 5.8,
                    y: -21
                }
            })
            .addTimedChild(instance82, 108, 1, {
                "108": {
                    x: 5.8,
                    y: -21
                }
            })
            .addTimedChild(instance88, 109, 1, {
                "109": {
                    x: -478.4,
                    y: -525.85
                }
            })
            .addTimedChild(instance87, 109, 1, {
                "109": {
                    y: 2.5
                }
            })
            .addTimedChild(instance86, 109, 1, {
                "109": {
                    x: -478.4,
                    y: -525.85
                }
            })
            .addTimedChild(instance85, 109, 1, {
                "109": {
                    x: -478.4,
                    y: -525.85
                }
            })
            .addTimedChild(instance89, 110, 2)
            .addTimedChild(instance93, 112, 2, {
                "112": {
                    x: -478.4,
                    y: -525.85
                }
            })
            .addTimedChild(instance92, 112, 2, {
                "112": {
                    y: 2.5
                }
            })
            .addTimedChild(instance91, 112, 2, {
                "112": {
                    x: -478.4,
                    y: -525.85
                }
            })
            .addTimedChild(instance90, 112, 2, {
                "112": {
                    x: -478.4,
                    y: -525.85
                }
            })
            .addTimedChild(instance96, 114, 1)
            .addTimedChild(instance95, 114, 1, {
                "114": {
                    x: 5.8,
                    y: -21
                }
            })
            .addTimedChild(instance94, 114, 1, {
                "114": {
                    x: 5.8,
                    y: -21
                }
            })
            .addTimedChild(instance99, 115, 1)
            .addTimedChild(instance98, 115, 1)
            .addTimedChild(instance97, 115, 1, {
                "115": {
                    x: 5.8,
                    y: -19.4
                }
            })
            .addTimedChild(instance100, 116, 1)
            .addTimedChild(instance101, 117, 1)
            .addTimedChild(instance102, 118, 1)
            .addTimedChild(instance106, 119, 1, {
                "119": {
                    x: -478.4,
                    y: -525.85
                }
            })
            .addTimedChild(instance105, 119, 1, {
                "119": {
                    y: 2.5
                }
            })
            .addTimedChild(instance104, 119, 1, {
                "119": {
                    x: -478.4,
                    y: -525.85
                }
            })
            .addTimedChild(instance103, 119, 1, {
                "119": {
                    x: -478.4,
                    y: -525.85
                }
            })
            .addTimedChild(instance109, 120, 1)
            .addTimedChild(instance108, 120, 1)
            .addTimedChild(instance107, 120, 1, {
                "120": {
                    x: 5.8,
                    y: -19.4
                }
            })
            .addTimedChild(instance113, 121, 1, {
                "121": {
                    x: -478.4,
                    y: -525.85
                }
            })
            .addTimedChild(instance112, 121, 1, {
                "121": {
                    y: 2.5
                }
            })
            .addTimedChild(instance111, 121, 1, {
                "121": {
                    x: -478.4,
                    y: -525.85
                }
            })
            .addTimedChild(instance110, 121, 1, {
                "121": {
                    x: -478.4,
                    y: -525.85
                }
            })
            .addTimedChild(instance114, 122, 1)
            .addTimedChild(instance117, 123, 1)
            .addTimedChild(instance116, 123, 1, {
                "123": {
                    x: 5.8,
                    y: -21
                }
            })
            .addTimedChild(instance115, 123, 1, {
                "123": {
                    x: 5.8,
                    y: -21
                }
            })
            .addTimedChild(instance118, 124, 1, {
                "124": {
                    x: -2,
                    y: 15.9
                }
            })
            .addTimedChild(instance121, 125, 1)
            .addTimedChild(instance120, 125, 1, {
                "125": {
                    x: 5.8,
                    y: -21
                }
            })
            .addTimedChild(instance119, 125, 1, {
                "125": {
                    x: 5.8,
                    y: -21
                }
            })
            .addTimedChild(instance125, 126, 2)
            .addTimedChild(instance124, 126, 2, {
                "126": {
                    x: 5.8,
                    y: -24
                }
            })
            .addTimedChild(instance123, 126, 2, {
                "126": {
                    x: 5.8,
                    y: -24
                }
            })
            .addTimedChild(instance122, 126, 2)
            .addTimedChild(instance128, 128, 1)
            .addTimedChild(instance127, 128, 1, {
                "128": {
                    x: 5.8,
                    y: -21
                }
            })
            .addTimedChild(instance126, 128, 1, {
                "128": {
                    x: 5.8,
                    y: -21
                }
            })
            .addTimedChild(instance131, 129, 1)
            .addTimedChild(instance130, 129, 1, {
                "129": {
                    x: 5.8,
                    y: -20.2
                }
            })
            .addTimedChild(instance129, 129, 1, {
                "129": {
                    x: 5.8,
                    y: -20.2
                }
            })
            .addTimedChild(instance135, 130, 2, {
                "130": {
                    x: -478.4,
                    y: -525.85
                }
            })
            .addTimedChild(instance134, 130, 2, {
                "130": {
                    y: 2.5
                }
            })
            .addTimedChild(instance133, 130, 2, {
                "130": {
                    x: -478.4,
                    y: -525.85
                }
            })
            .addTimedChild(instance132, 130, 2, {
                "130": {
                    x: -478.4,
                    y: -525.85
                }
            })
            .addTimedChild(instance136, 132, 2)
            .addTimedChild(instance140, 134, 1, {
                "134": {
                    x: -478.4,
                    y: -525.85
                }
            })
            .addTimedChild(instance139, 134, 1, {
                "134": {
                    y: 2.5
                }
            })
            .addTimedChild(instance138, 134, 1, {
                "134": {
                    x: -478.4,
                    y: -525.85
                }
            })
            .addTimedChild(instance137, 134, 1, {
                "134": {
                    x: -478.4,
                    y: -525.85
                }
            })
            .addTimedChild(instance141, 135, 1)
            .addTimedChild(instance144, 136, 1)
            .addTimedChild(instance143, 136, 1, {
                "136": {
                    x: 5.8,
                    y: -21
                }
            })
            .addTimedChild(instance142, 136, 1, {
                "136": {
                    x: 5.8,
                    y: -21
                }
            })
            .addTimedChild(instance148, 137, 1, {
                "137": {
                    x: -478.4,
                    y: -525.85
                }
            })
            .addTimedChild(instance147, 137, 1, {
                "137": {
                    y: 2.5
                }
            })
            .addTimedChild(instance146, 137, 1, {
                "137": {
                    x: -478.4,
                    y: -525.85
                }
            })
            .addTimedChild(instance145, 137, 1, {
                "137": {
                    x: -478.4,
                    y: -525.85
                }
            })
            .addTimedChild(instance151, 138, 1)
            .addTimedChild(instance150, 138, 1)
            .addTimedChild(instance149, 138, 1, {
                "138": {
                    x: 5.8,
                    y: -19.4
                }
            })
            .addTimedChild(instance154, 139, 1)
            .addTimedChild(instance153, 139, 1, {
                "139": {
                    x: 5.8,
                    y: -21
                }
            })
            .addTimedChild(instance152, 139, 1, {
                "139": {
                    x: 5.8,
                    y: -21
                }
            })
            .addTimedChild(instance158, 140, 1, {
                "140": {
                    x: -478.4,
                    y: -525.85
                }
            })
            .addTimedChild(instance157, 140, 1, {
                "140": {
                    y: 2.5
                }
            })
            .addTimedChild(instance156, 140, 1, {
                "140": {
                    x: -478.4,
                    y: -525.85
                }
            })
            .addTimedChild(instance155, 140, 1, {
                "140": {
                    x: -478.4,
                    y: -525.85
                }
            })
            .addTimedChild(instance161, 141, 1)
            .addTimedChild(instance160, 141, 1, {
                "141": {
                    x: 5.8,
                    y: -21
                }
            })
            .addTimedChild(instance159, 141, 1, {
                "141": {
                    x: 5.8,
                    y: -21
                }
            })
            .addTimedChild(instance164, 142, 1)
            .addTimedChild(instance163, 142, 1)
            .addTimedChild(instance162, 142, 1, {
                "142": {
                    x: 5.8,
                    y: -19.4
                }
            })
            .addTimedChild(instance168, 143, 3, {
                "143": {
                    x: -478.4,
                    y: -525.85
                }
            })
            .addTimedChild(instance167, 143, 3, {
                "143": {
                    y: 2.5
                }
            })
            .addTimedChild(instance166, 143, 3, {
                "143": {
                    x: -478.4,
                    y: -525.85
                }
            })
            .addTimedChild(instance165, 143, 3, {
                "143": {
                    x: -478.4,
                    y: -525.85
                }
            })
            .addTimedChild(instance169, 146, 2)
            .addTimedChild(instance173, 148, 59, {
                "148": {
                    x: -478.4,
                    y: -525.85,
                    kx: 0
                },
                "197": {
                    y: 548.95,
                    kx: 3.142
                }
            })
            .addTimedChild(instance172, 148, 59, {
                "148": {
                    x: 0,
                    y: 2.5,
                    kx: 0
                },
                "197": {
                    x: 1.25,
                    y: 20.6,
                    kx: 3.142
                }
            })
            .addTimedChild(instance171, 148, 49, {
                "148": {
                    x: -478.4,
                    y: -525.85
                }
            })
            .addTimedChild(instance174, 197, 10, {
                "197": {
                    x: 0.75,
                    y: 1
                }
            })
            .addTimedChild(instance170, 148, 59, {
                "148": {
                    x: -478.4,
                    y: -525.85,
                    kx: 0
                },
                "197": {
                    y: 548.95,
                    kx: 3.142
                }
            })
            .addTimedChild(instance175, 207, 5)
            .addTimedChild(instance178, 212, 6)
            .addTimedChild(instance177, 212, 6, {
                "212": {
                    x: -2,
                    y: 15.9
                }
            })
            .addTimedChild(instance176, 212, 6, {
                "212": {
                    x: 5.8,
                    y: -24.2
                }
            })
            .addTimedChild(instance179, 218, 6)
            .addTimedChild(instance183, 224, 5, {
                "224": {
                    x: -478.4,
                    y: -525.85
                }
            })
            .addTimedChild(instance182, 224, 5, {
                "224": {
                    y: 2.5
                }
            })
            .addTimedChild(instance181, 224, 5, {
                "224": {
                    x: -478.4,
                    y: -525.85
                }
            })
            .addTimedChild(instance180, 224, 5, {
                "224": {
                    x: -478.4,
                    y: -525.85
                }
            })
            .addTimedChild(instance186, 229, 1)
            .addTimedChild(instance185, 229, 1)
            .addTimedChild(instance184, 229, 1, {
                "229": {
                    x: 5.8,
                    y: -19.4
                }
            })
            .addTimedChild(instance189, 230, 1)
            .addTimedChild(instance188, 230, 1, {
                "230": {
                    x: 5.8,
                    y: -21
                }
            })
            .addTimedChild(instance187, 230, 1, {
                "230": {
                    x: 5.8,
                    y: -21
                }
            })
            .addTimedChild(instance193, 231, 1, {
                "231": {
                    x: -478.4,
                    y: -525.85
                }
            })
            .addTimedChild(instance192, 231, 1, {
                "231": {
                    y: 2.5
                }
            })
            .addTimedChild(instance191, 231, 1, {
                "231": {
                    x: -478.4,
                    y: -525.85
                }
            })
            .addTimedChild(instance190, 231, 1, {
                "231": {
                    x: -478.4,
                    y: -525.85
                }
            })
            .addTimedChild(instance196, 232, 1)
            .addTimedChild(instance195, 232, 1)
            .addTimedChild(instance194, 232, 1, {
                "232": {
                    x: 5.8,
                    y: -19.4
                }
            })
            .addTimedChild(instance199, 233, 3)
            .addTimedChild(instance198, 233, 3, {
                "233": {
                    x: 5.8,
                    y: -21
                }
            })
            .addTimedChild(instance197, 233, 3, {
                "233": {
                    x: 5.8,
                    y: -21
                }
            })
            .addTimedChild(instance203, 236, 39)
            .addTimedChild(instance202, 236, 39)
            .addTimedChild(instance201, 236, 39)
            .addTimedChild(instance200, 236, 39);
    });

    var Graphic65 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 275, loop: false });
        var instance1 = new Graphic58(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 275, {
            "0": {
                x: -6.45,
                y: -1.7,
                sx: 1,
                sy: 1,
                r: 0
            },
            "73": {
                sx: 1.021,
                sy: 0.873
            },
            "75": {
                sx: 1,
                sy: 1
            },
            "85": {
                sx: 1.141,
                sy: 0.941
            },
            "86": {
                sx: 1.282,
                sy: 0.848
            },
            "88": {
                x: -6.5,
                sx: 1.123,
                sy: 0.981
            },
            "89": {
                x: -6.55,
                y: -1.75,
                sx: 1.26,
                sy: 1.011
            },
            "90": {
                sx: 1.281,
                sy: 0.9
            },
            "91": {
                y: -1.7,
                sx: 1.105,
                sy: 1.105
            },
            "92": {
                y: -1.75,
                sx: 1.167,
                sy: 1.007
            },
            "93": {
                y: -1.7,
                sx: 1.105,
                sy: 1.105
            },
            "95": {
                x: -6.6,
                y: -1.75,
                sx: 0.77,
                sy: 0.954
            },
            "96": {
                x: -6.55,
                y: -1.8,
                sx: 1.158,
                sy: 0.778
            },
            "97": {
                y: -1.75,
                sx: 1.281,
                sy: 0.859
            },
            "99": {
                x: -6.6,
                y: -1.6,
                sx: 1.234,
                sy: 1.151
            },
            "103": {
                x: -6.7,
                sx: 0.921,
                sy: 1.198
            },
            "104": {
                x: -6.8,
                y: -1.75,
                sx: 0.666,
                sy: 1.09
            },
            "105": {
                x: -6.6,
                y: -1.65,
                sx: 0.97,
                sy: 1.119
            },
            "106": {
                x: -6.5,
                y: -1.7,
                sx: 1.195,
                sy: 1.027
            },
            "111": {
                x: -6.35,
                sx: 1.462,
                sy: 1.071
            },
            "113": {
                y: -1.75,
                sx: 1.523,
                sy: 1.01
            },
            "114": {
                x: -6.65,
                sx: 1.029,
                sy: 1.032
            },
            "115": {
                x: -6.7,
                y: -1.85,
                sx: 1.01,
                sy: 0.907
            },
            "116": {
                x: -6.45,
                y: -1.8,
                sx: 1.339,
                sy: 1.019
            },
            "117": {
                x: -6.7,
                y: -1.75,
                sx: 0.948,
                sy: 1.047
            },
            "118": {
                x: -6.6,
                y: -1.95,
                sx: 1.168,
                sy: 0.817
            },
            "119": {
                x: -6.5,
                y: -1.7,
                sx: 1.195,
                sy: 1.027
            },
            "120": {
                x: -6.6,
                y: -1.8,
                sx: 1.156,
                sy: 1.046
            },
            "123": {
                x: -6.35,
                y: -1.9,
                sx: 1.471,
                sy: 0.99
            },
            "124": {
                x: -6.4,
                y: -1.65,
                sx: 1.398,
                sy: 1.269
            },
            "125": {
                y: -1.95,
                sx: 1.447,
                sy: 0.96
            },
            "126": {
                x: -6.5,
                y: -1.8,
                sx: 1.294,
                sy: 1.142
            },
            "127": {
                x: -6.6,
                y: -1.65,
                sx: 1.202,
                sy: 1.26
            },
            "130": {
                x: -6.45,
                y: -1.8,
                sx: 1.349,
                sy: 1.088
            },
            "131": {
                x: -6.5,
                y: -1.65,
                sx: 1.298,
                sy: 1.194
            },
            "132": {
                x: -6.6,
                sx: 1.179,
                sy: 1.204
            },
            "133": {
                x: -6.45,
                sx: 1.315
            },
            "134": {
                x: -6.6,
                y: -1.7,
                sx: 1.169,
                sy: 1.182
            },
            "135": {
                x: -7.15,
                y: -1.9,
                sx: 0.744,
                sy: 1.024
            },
            "136": {
                x: -6.55,
                y: -1.95,
                sx: 1.196,
                sy: 0.996
            },
            "144": {
                x: -6.4,
                y: -2.05,
                sx: 1.287,
                sy: 0.881
            },
            "145": {
                x: -6.5,
                y: -1.95,
                sx: 1.195,
                sy: 0.977
            },
            "147": {
                x: -6.9,
                y: -1.6,
                sx: 0.944,
                sy: 1.245
            },
            "148": {
                x: -6.5,
                y: -1.9,
                sx: 1.213,
                sy: 1.049
            },
            "149": {
                x: -6.35,
                y: -2.05,
                sx: 1.304,
                sy: 0.953
            },
            "150": {
                x: -6.2,
                y: -2.2,
                sx: 1.392,
                sy: 0.841
            },
            "151": {
                x: -6.5,
                y: -1.85,
                sx: 1.216,
                sy: 1.079
            },
            "196": {
                x: -6.65,
                y: -2,
                sx: 1.115,
                sy: 1
            },
            "197": {
                x: -6.45,
                y: -1.7,
                sx: 1
            },
            "210": {
                sx: 0.837,
                sy: 1.125
            },
            "211": {
                sx: 1.025,
                sy: 1.195
            },
            "213": {
                sx: 1.142,
                sy: 1.062,
                r: -0.017
            },
            "217": {
                y: -1.75,
                sx: 1.21,
                sy: 0.917
            },
            "218": {
                y: -1.7,
                sx: 0.971,
                sy: 1.121,
                r: 0
            },
            "219": {
                sx: 1,
                sy: 1
            },
            "229": {
                sx: 1.172,
                sy: 1.014
            },
            "230": {
                x: -6.4,
                sx: 1.168,
                sy: 1.038
            },
            "231": {
                x: -6.45,
                sx: 1.052,
                sy: 0.864
            },
            "235": {
                x: -6.5,
                sx: 0.987,
                sy: 0.93
            },
            "236": {
                x: -6.45,
                sx: 1.052,
                sy: 0.864
            }
        });
    });

    var Graphic66 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 275, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[406]);
        this.addTimedChild(instance1);
    });

    var Graphic67 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 275, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s04[408])
            .setTransform(-368.7, -483.9, 0.959);
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[407])
            .setTransform(-383.8, -485.3);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic68 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 275, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.s04[410]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[409])
            .setTransform(-585.65, -483.25);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic79 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 275, loop: false });
        var instance10 = new Graphic68(MovieClip.SYNCHED)
            .setTransform(105.5, -122.2);
        var instance9 = new Graphic67(MovieClip.SYNCHED)
            .setTransform(-96.35, -120.15);
        var instance8 = new Graphic66(MovieClip.SYNCHED)
            .setTransform(4.15, -0.3);
        var instance7 = new Graphic65(MovieClip.SYNCHED);
        var instance6 = new Graphic64(MovieClip.SYNCHED);
        var instance5 = new Graphic63(MovieClip.SYNCHED);
        var instance4 = new Graphic62(MovieClip.SYNCHED);
        var instance12 = new Graphic70(MovieClip.SYNCHED);
        var instance11 = new Graphic69(MovieClip.SYNCHED);
        var instance14 = new Graphic72(MovieClip.SYNCHED);
        var instance13 = new Graphic71(MovieClip.SYNCHED);
        var instance16 = new Graphic74(MovieClip.SYNCHED);
        var instance15 = new Graphic73(MovieClip.SYNCHED);
        var instance18 = new Graphic76(MovieClip.SYNCHED);
        var instance17 = new Graphic75(MovieClip.SYNCHED);
        var instance3 = new Graphic61(MovieClip.SYNCHED);
        var instance2 = new Graphic60(MovieClip.SYNCHED);
        var instance1 = new Graphic59(MovieClip.SYNCHED);
        this.addTimedChild(instance10)
            .addTimedChild(instance9)
            .addTimedChild(instance8)
            .addTimedChild(instance7, 0, 275, {
                "0": {
                    x: -6.85,
                    y: -75.4
                },
                "202": {
                    y: -66.15
                },
                "217": {
                    x: -7.3,
                    y: -73.05
                },
                "218": {
                    x: -6.85,
                    y: -75.4
                }
            })
            .addTimedChild(instance6, 0, 275, {
                "0": {
                    x: -11.3,
                    y: -127.5
                },
                "202": {
                    y: -118.25
                },
                "217": {
                    x: -11.75,
                    y: -125.15
                },
                "218": {
                    x: -11.3,
                    y: -127.5
                }
            })
            .addTimedChild(instance5, 0, 7, {
                "0": {
                    x: 4.45,
                    y: -130.4
                }
            })
            .addTimedChild(instance4, 0, 7, {
                "0": {
                    x: -36.1,
                    y: -130.15
                }
            })
            .addTimedChild(instance12, 8, 11, {
                "8": {
                    x: 17,
                    y: -130.2
                }
            })
            .addTimedChild(instance11, 8, 11, {
                "8": {
                    x: -23.55,
                    y: -129.95
                }
            })
            .addTimedChild(instance14, 20, 8, {
                "20": {
                    x: 22.05,
                    y: -125.35
                }
            })
            .addTimedChild(instance13, 20, 8, {
                "20": {
                    x: -18.5,
                    y: -125.1
                }
            })
            .addTimedChild(instance16, 29, 173, {
                "29": {
                    x: 2.85,
                    y: -130.1
                },
                "82": {
                    x: 4.45,
                    y: -130.4
                },
                "83": {
                    x: 13.4,
                    y: -132.45
                },
                "84": {
                    x: 19.45,
                    y: -130.45
                },
                "85": {
                    x: 20.5,
                    y: -129.5
                },
                "104": {
                    x: 20.8,
                    y: -129.3
                },
                "105": {
                    x: 23.4,
                    y: -124.8
                },
                "106": {
                    x: 14.25,
                    y: -118.55
                },
                "107": {
                    x: 12.3,
                    y: -118.15
                },
                "119": {
                    x: 7.05,
                    y: -129.3
                },
                "120": {
                    x: 6,
                    y: -131
                }
            })
            .addTimedChild(instance15, 29, 173, {
                "29": {
                    x: -37.7,
                    y: -129.85
                },
                "82": {
                    x: -36.1,
                    y: -130.15
                },
                "83": {
                    x: -27.15,
                    y: -132.2
                },
                "84": {
                    x: -21.1,
                    y: -130.2
                },
                "85": {
                    x: -20.05,
                    y: -129.25
                },
                "104": {
                    x: -19.75,
                    y: -129.05
                },
                "105": {
                    x: -17.15,
                    y: -124.55
                },
                "106": {
                    x: -26.3,
                    y: -118.3
                },
                "107": {
                    x: -28.25,
                    y: -117.9
                },
                "119": {
                    x: -33.5,
                    y: -129.05
                },
                "120": {
                    x: -34.55,
                    y: -130.75
                }
            })
            .addTimedChild(instance18, 210, 14, {
                "210": {
                    x: 9.2,
                    y: -124.45
                },
                "216": {
                    x: 9.8,
                    y: -124.7
                },
                "217": {
                    x: 17.55,
                    y: -130.15
                },
                "218": {
                    x: 22.05,
                    y: -128.95
                }
            })
            .addTimedChild(instance17, 210, 14, {
                "210": {
                    x: -31.25,
                    y: -123.6
                },
                "216": {
                    x: -30.65,
                    y: -123.85
                },
                "217": {
                    x: -22.9,
                    y: -129.3
                },
                "218": {
                    x: -17.5,
                    y: -127
                }
            })
            .addTimedChild(instance3, 0, 275, {
                "0": {
                    x: 13.5,
                    y: -149.3,
                    r: 0.387
                },
                "7": {
                    x: 10.4,
                    y: -138.9,
                    r: 0.153
                },
                "8": {
                    x: 12.703,
                    y: -146.841,
                    r: 0.328
                },
                "9": {
                    x: 13.5,
                    y: -149.3,
                    r: 0.387
                },
                "19": {
                    x: 10.55,
                    y: -135,
                    r: 0.153
                },
                "20": {
                    x: 11.85,
                    y: -153.35,
                    r: 0.396
                },
                "21": {
                    y: -153.65
                },
                "28": {
                    x: 10.55,
                    y: -135,
                    r: 0.153
                },
                "29": {
                    x: 11.85,
                    y: -153.35,
                    r: 0.396
                },
                "30": {
                    y: -153.65
                },
                "39": {
                    y: -153.35
                },
                "202": {
                    x: 10.5,
                    y: -134,
                    r: 0.117
                },
                "210": {
                    x: 10.85,
                    y: -152.25,
                    r: 0.418
                },
                "217": {
                    x: 11.2,
                    y: -153.25
                },
                "218": {
                    x: 11.85,
                    y: -153.35,
                    r: 0.396
                },
                "224": {
                    x: 11.65,
                    y: -143.05
                }
            })
            .addTimedChild(instance2, 0, 275, {
                "0": {
                    x: -28.9,
                    y: -149.95,
                    r: -0.24
                },
                "7": {
                    x: -28.7,
                    y: -137.9,
                    r: -0.114
                },
                "8": {
                    x: -28.965,
                    y: -146.927,
                    r: -0.208
                },
                "9": {
                    x: -28.9,
                    y: -149.95,
                    r: -0.24
                },
                "19": {
                    x: -28.55,
                    y: -134,
                    r: -0.114
                },
                "20": {
                    y: -147.65,
                    r: -0.127
                },
                "21": {
                    y: -147.95
                },
                "28": {
                    y: -134,
                    r: -0.114
                },
                "29": {
                    x: -30.4,
                    y: -152.4,
                    r: -0.292
                },
                "30": {
                    y: -152.7
                },
                "39": {
                    y: -152.4
                },
                "202": {
                    x: -29.05,
                    y: -133.95,
                    r: 0
                },
                "210": {
                    x: -33.2,
                    y: -150.15,
                    r: -0.41
                },
                "217": {
                    x: -32.85,
                    y: -151.15
                },
                "218": {
                    x: -30.4,
                    y: -152.4,
                    r: -0.292
                },
                "224": {
                    x: -31.35,
                    y: -143.9,
                    r: -0.127
                }
            })
            .addTimedChild(instance1, 0, 275, {
                "0": {
                    x: -13.15,
                    y: -100.3
                },
                "202": {
                    y: -91.05
                },
                "217": {
                    x: -13.6,
                    y: -97.95
                },
                "218": {
                    x: -13.15,
                    y: -100.3
                }
            });
    });

    lib.DEDE_PONYTAIL_END = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[488])
            .setTransform(-657.3, -487);
        this.addChild(instance1);
    });

    lib.DEDE_PONYTAIL_COLOUR_SECTION_02 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[489])
            .setTransform(-657.05, -461.95);
        this.addChild(instance1);
    });

    lib.DEDE_PONYTAIL_COLOUR_SECTION_01 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[490])
            .setTransform(-497.15, -407.2);
        this.addChild(instance1);
    });

    lib.DEDE_NECK = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[491])
            .setTransform(-461.15, -639, 0.96);
        this.addChild(instance1);
    });

    var Graphic83 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 275, loop: false });
        var instance16 = new Graphics()
            .drawCommands(shapes.s04[493]);
        var instance15 = new Graphics()
            .drawCommands(shapes.s04[492]);
        var instance14 = new lib.DEDE_NECK();
        var instance13 = new lib.DEDE_PONYTAIL_COLOUR_SECTION_01();
        var instance12 = new lib.DEDE_PONYTAIL_COLOUR_SECTION_02();
        var instance11 = new lib.DEDE_PONYTAIL_END();
        var instance10 = new Graphics()
            .drawCommands(shapes.s04[411]);
        var instance17 = new Graphics()
            .drawCommands(shapes.s04[412]);
        var instance19 = new Graphics()
            .drawCommands(shapes.s04[413]);
        var instance22 = new Graphics()
            .drawCommands(shapes.s04[414]);
        var instance25 = new Graphics()
            .drawCommands(shapes.s04[415]);
        var instance28 = new Graphics()
            .drawCommands(shapes.s04[416]);
        var instance29 = new Graphics()
            .drawCommands(shapes.s04[417]);
        var instance30 = new Graphics()
            .drawCommands(shapes.s04[418]);
        var instance32 = new Graphics()
            .drawCommands(shapes.s04[419]);
        var instance35 = new Graphics()
            .drawCommands(shapes.s04[420]);
        var instance38 = new Graphics()
            .drawCommands(shapes.s04[421]);
        var instance39 = new Graphics()
            .drawCommands(shapes.s04[422]);
        var instance41 = new Graphics()
            .drawCommands(shapes.s04[423]);
        var instance45 = new Graphics()
            .drawCommands(shapes.s04[424]);
        var instance47 = new Graphics()
            .drawCommands(shapes.s04[425]);
        var instance48 = new Graphics()
            .drawCommands(shapes.s04[426]);
        var instance49 = new Graphics()
            .drawCommands(shapes.s04[427]);
        var instance52 = new Graphics()
            .drawCommands(shapes.s04[428]);
        var instance55 = new Graphics()
            .drawCommands(shapes.s04[429]);
        var instance58 = new Graphics()
            .drawCommands(shapes.s04[430]);
        var instance61 = new Graphics()
            .drawCommands(shapes.s04[431]);
        var instance62 = new Graphics()
            .drawCommands(shapes.s04[432]);
        var instance63 = new Graphics()
            .drawCommands(shapes.s04[433]);
        var instance66 = new Graphics()
            .drawCommands(shapes.s04[434]);
        var instance79 = new Graphics()
            .drawCommands(shapes.s04[435]);
        var instance82 = new Graphics()
            .drawCommands(shapes.s04[436]);
        var instance85 = new Graphics()
            .drawCommands(shapes.s04[437]);
        var instance88 = new Graphics()
            .drawCommands(shapes.s04[438]);
        var instance91 = new Graphics()
            .drawCommands(shapes.s04[439]);
        var instance94 = new Graphics()
            .drawCommands(shapes.s04[440]);
        var instance97 = new Graphics()
            .drawCommands(shapes.s04[441]);
        var instance100 = new Graphics()
            .drawCommands(shapes.s04[442]);
        var instance103 = new Graphics()
            .drawCommands(shapes.s04[443]);
        var instance106 = new Graphics()
            .drawCommands(shapes.s04[444]);
        var instance109 = new Graphics()
            .drawCommands(shapes.s04[445]);
        var instance112 = new Graphics()
            .drawCommands(shapes.s04[446]);
        var instance113 = new Graphics()
            .drawCommands(shapes.s04[447]);
        var instance115 = new Graphics()
            .drawCommands(shapes.s04[448]);
        var instance117 = new Graphics()
            .drawCommands(shapes.s04[449]);
        var instance120 = new Graphics()
            .drawCommands(shapes.s04[450]);
        var instance123 = new Graphics()
            .drawCommands(shapes.s04[451]);
        var instance126 = new Graphics()
            .drawCommands(shapes.s04[452]);
        var instance129 = new Graphics()
            .drawCommands(shapes.s04[453]);
        var instance132 = new Graphics()
            .drawCommands(shapes.s04[454]);
        var instance135 = new Graphics()
            .drawCommands(shapes.s04[455]);
        var instance138 = new Graphics()
            .drawCommands(shapes.s04[456]);
        var instance139 = new Graphics()
            .drawCommands(shapes.s04[457]);
        var instance140 = new Graphics()
            .drawCommands(shapes.s04[458]);
        var instance143 = new Graphics()
            .drawCommands(shapes.s04[459]);
        var instance145 = new Graphics()
            .drawCommands(shapes.s04[460]);
        var instance148 = new Graphics()
            .drawCommands(shapes.s04[461]);
        var instance151 = new Graphics()
            .drawCommands(shapes.s04[462]);
        var instance153 = new Graphics()
            .drawCommands(shapes.s04[463]);
        var instance155 = new Graphics()
            .drawCommands(shapes.s04[464]);
        var instance157 = new Graphics()
            .drawCommands(shapes.s04[465]);
        var instance159 = new Graphics()
            .drawCommands(shapes.s04[466]);
        var instance162 = new Graphics()
            .drawCommands(shapes.s04[467]);
        var instance164 = new Graphics()
            .drawCommands(shapes.s04[468]);
        var instance167 = new Graphics()
            .drawCommands(shapes.s04[469]);
        var instance169 = new Graphics()
            .drawCommands(shapes.s04[470]);
        var instance170 = new Graphics()
            .drawCommands(shapes.s04[471]);
        var instance172 = new Graphics()
            .drawCommands(shapes.s04[472]);
        var instance174 = new Graphics()
            .drawCommands(shapes.s04[473]);
        var instance177 = new Graphics()
            .drawCommands(shapes.s04[474]);
        var instance180 = new Graphics()
            .drawCommands(shapes.s04[475]);
        var instance182 = new Graphics()
            .drawCommands(shapes.s04[476]);
        var instance184 = new Graphics()
            .drawCommands(shapes.s04[477]);
        var instance185 = new Graphics()
            .drawCommands(shapes.s04[478]);
        var instance187 = new Graphics()
            .drawCommands(shapes.s04[479]);
        var instance190 = new Graphics()
            .drawCommands(shapes.s04[480]);
        var instance193 = new Graphics()
            .drawCommands(shapes.s04[481]);
        var instance194 = new Graphics()
            .drawCommands(shapes.s04[482]);
        var instance197 = new Graphics()
            .drawCommands(shapes.s04[483]);
        var instance200 = new Graphics()
            .drawCommands(shapes.s04[484]);
        var instance203 = new Graphics()
            .drawCommands(shapes.s04[485]);
        var instance206 = new Graphics()
            .drawCommands(shapes.s04[486]);
        var instance207 = new Graphics()
            .drawCommands(shapes.s04[487]);
        var instance9 = new Graphic79(MovieClip.SYNCHED);
        var instance8 = new lib.DEDE_SHOE()
            .setTransform(-2.85, -33.2, 1, 1, -0.122);
        var instance7 = new lib.DEDE_SHOE()
            .setTransform(95.15, -27.2, 1, 1, -0.122);
        var instance6 = new Graphic78(MovieClip.SYNCHED);
        var instance5 = new Graphics()
            .drawCommands(shapes.s04[316]);
        var instance21 = new Graphics()
            .drawCommands(shapes.s04[317]);
        var instance24 = new Graphics()
            .drawCommands(shapes.s04[318]);
        var instance27 = new Graphics()
            .drawCommands(shapes.s04[316]);
        var instance34 = new Graphics()
            .drawCommands(shapes.s04[319]);
        var instance37 = new Graphics()
            .drawCommands(shapes.s04[316]);
        var instance40 = new Graphics()
            .drawCommands(shapes.s04[320]);
        var instance42 = new Graphics()
            .drawCommands(shapes.s04[321]);
        var instance43 = new Graphics()
            .drawCommands(shapes.s04[322]);
        var instance44 = new Graphics()
            .drawCommands(shapes.s04[323]);
        var instance46 = new Graphics()
            .drawCommands(shapes.s04[324]);
        var instance51 = new Graphics()
            .drawCommands(shapes.s04[325]);
        var instance54 = new Graphics()
            .drawCommands(shapes.s04[326]);
        var instance57 = new Graphics()
            .drawCommands(shapes.s04[327]);
        var instance60 = new Graphics()
            .drawCommands(shapes.s04[328]);
        var instance65 = new Graphics()
            .drawCommands(shapes.s04[329]);
        var instance68 = new Graphics()
            .drawCommands(shapes.s04[330]);
        var instance70 = new Graphics()
            .drawCommands(shapes.s04[331]);
        var instance72 = new Graphics()
            .drawCommands(shapes.s04[332]);
        var instance74 = new Graphics()
            .drawCommands(shapes.s04[333]);
        var instance76 = new Graphics()
            .drawCommands(shapes.s04[334]);
        var instance78 = new Graphics()
            .drawCommands(shapes.s04[335]);
        var instance81 = new Graphics()
            .drawCommands(shapes.s04[336]);
        var instance84 = new Graphics()
            .drawCommands(shapes.s04[337]);
        var instance87 = new Graphics()
            .drawCommands(shapes.s04[338]);
        var instance90 = new Graphics()
            .drawCommands(shapes.s04[339]);
        var instance93 = new Graphics()
            .drawCommands(shapes.s04[340]);
        var instance96 = new Graphics()
            .drawCommands(shapes.s04[341]);
        var instance99 = new Graphics()
            .drawCommands(shapes.s04[342]);
        var instance102 = new Graphics()
            .drawCommands(shapes.s04[343]);
        var instance105 = new Graphics()
            .drawCommands(shapes.s04[344]);
        var instance108 = new Graphics()
            .drawCommands(shapes.s04[345]);
        var instance111 = new Graphics()
            .drawCommands(shapes.s04[346]);
        var instance119 = new Graphics()
            .drawCommands(shapes.s04[347]);
        var instance122 = new Graphics()
            .drawCommands(shapes.s04[348]);
        var instance125 = new Graphics()
            .drawCommands(shapes.s04[349]);
        var instance128 = new Graphics()
            .drawCommands(shapes.s04[350]);
        var instance131 = new Graphics()
            .drawCommands(shapes.s04[351]);
        var instance134 = new Graphics()
            .drawCommands(shapes.s04[352]);
        var instance137 = new Graphics()
            .drawCommands(shapes.s04[353]);
        var instance142 = new Graphics()
            .drawCommands(shapes.s04[324]);
        var instance144 = new Graphics()
            .drawCommands(shapes.s04[354]);
        var instance147 = new Graphics()
            .drawCommands(shapes.s04[355]);
        var instance150 = new Graphics()
            .drawCommands(shapes.s04[356]);
        var instance152 = new Graphics()
            .drawCommands(shapes.s04[357]);
        var instance154 = new Graphics()
            .drawCommands(shapes.s04[358]);
        var instance156 = new Graphics()
            .drawCommands(shapes.s04[359]);
        var instance158 = new Graphics()
            .drawCommands(shapes.s04[357]);
        var instance161 = new Graphics()
            .drawCommands(shapes.s04[360]);
        var instance163 = new Graphics()
            .drawCommands(shapes.s04[361]);
        var instance166 = new Graphics()
            .drawCommands(shapes.s04[362]);
        var instance168 = new Graphics()
            .drawCommands(shapes.s04[363]);
        var instance171 = new Graphics()
            .drawCommands(shapes.s04[364]);
        var instance173 = new Graphics()
            .drawCommands(shapes.s04[365]);
        var instance176 = new Graphics()
            .drawCommands(shapes.s04[366]);
        var instance179 = new Graphics()
            .drawCommands(shapes.s04[367]);
        var instance181 = new Graphics()
            .drawCommands(shapes.s04[368]);
        var instance183 = new Graphics()
            .drawCommands(shapes.s04[369]);
        var instance186 = new Graphics()
            .drawCommands(shapes.s04[370]);
        var instance189 = new Graphics()
            .drawCommands(shapes.s04[371]);
        var instance192 = new Graphics()
            .drawCommands(shapes.s04[316]);
        var instance196 = new Graphics()
            .drawCommands(shapes.s04[372]);
        var instance199 = new Graphics()
            .drawCommands(shapes.s04[316]);
        var instance202 = new Graphics()
            .drawCommands(shapes.s04[372]);
        var instance205 = new Graphics()
            .drawCommands(shapes.s04[316]);
        var instance4 = new lib.DEDE_SHORTS();
        var instance3 = new Graphic77(MovieClip.SYNCHED);
        var instance2 = new Graphics()
            .drawCommands(shapes.s04[260]);
        var instance18 = new Graphics()
            .drawCommands(shapes.s04[261]);
        var instance20 = new Graphics()
            .drawCommands(shapes.s04[262]);
        var instance23 = new Graphics()
            .drawCommands(shapes.s04[263]);
        var instance26 = new Graphics()
            .drawCommands(shapes.s04[260]);
        var instance31 = new Graphics()
            .drawCommands(shapes.s04[261]);
        var instance33 = new Graphics()
            .drawCommands(shapes.s04[264]);
        var instance36 = new Graphics()
            .drawCommands(shapes.s04[260]);
        var instance50 = new Graphics()
            .drawCommands(shapes.s04[265]);
        var instance53 = new Graphics()
            .drawCommands(shapes.s04[266]);
        var instance56 = new Graphics()
            .drawCommands(shapes.s04[267]);
        var instance59 = new Graphics()
            .drawCommands(shapes.s04[260]);
        var instance64 = new Graphics()
            .drawCommands(shapes.s04[268]);
        var instance67 = new Graphics()
            .drawCommands(shapes.s04[269]);
        var instance69 = new Graphics()
            .drawCommands(shapes.s04[270]);
        var instance71 = new Graphics()
            .drawCommands(shapes.s04[271]);
        var instance73 = new Graphics()
            .drawCommands(shapes.s04[272]);
        var instance75 = new Graphics()
            .drawCommands(shapes.s04[273]);
        var instance77 = new Graphics()
            .drawCommands(shapes.s04[274]);
        var instance80 = new Graphics()
            .drawCommands(shapes.s04[275]);
        var instance83 = new Graphics()
            .drawCommands(shapes.s04[276]);
        var instance86 = new Graphics()
            .drawCommands(shapes.s04[277]);
        var instance89 = new Graphics()
            .drawCommands(shapes.s04[278]);
        var instance92 = new Graphics()
            .drawCommands(shapes.s04[279]);
        var instance95 = new Graphics()
            .drawCommands(shapes.s04[280]);
        var instance98 = new Graphics()
            .drawCommands(shapes.s04[281]);
        var instance101 = new Graphics()
            .drawCommands(shapes.s04[282]);
        var instance104 = new Graphics()
            .drawCommands(shapes.s04[283]);
        var instance107 = new Graphics()
            .drawCommands(shapes.s04[284]);
        var instance110 = new Graphics()
            .drawCommands(shapes.s04[285]);
        var instance114 = new Graphics()
            .drawCommands(shapes.s04[286]);
        var instance116 = new Graphics()
            .drawCommands(shapes.s04[287]);
        var instance118 = new Graphics()
            .drawCommands(shapes.s04[288]);
        var instance121 = new Graphics()
            .drawCommands(shapes.s04[289]);
        var instance124 = new Graphics()
            .drawCommands(shapes.s04[290]);
        var instance127 = new Graphics()
            .drawCommands(shapes.s04[291]);
        var instance130 = new Graphics()
            .drawCommands(shapes.s04[292]);
        var instance133 = new Graphics()
            .drawCommands(shapes.s04[293]);
        var instance136 = new Graphics()
            .drawCommands(shapes.s04[294]);
        var instance141 = new Graphics()
            .drawCommands(shapes.s04[260]);
        var instance146 = new Graphics()
            .drawCommands(shapes.s04[264]);
        var instance149 = new Graphics()
            .drawCommands(shapes.s04[260]);
        var instance160 = new Graphics()
            .drawCommands(shapes.s04[295]);
        var instance165 = new Graphics()
            .drawCommands(shapes.s04[260]);
        var instance175 = new Graphics()
            .drawCommands(shapes.s04[261]);
        var instance178 = new Graphics()
            .drawCommands(shapes.s04[264]);
        var instance188 = new Graphics()
            .drawCommands(shapes.s04[296]);
        var instance191 = new Graphics()
            .drawCommands(shapes.s04[260]);
        var instance195 = new Graphics()
            .drawCommands(shapes.s04[297]);
        var instance198 = new Graphics()
            .drawCommands(shapes.s04[260]);
        var instance201 = new Graphics()
            .drawCommands(shapes.s04[297]);
        var instance204 = new Graphics()
            .drawCommands(shapes.s04[260]);
        var instance1 = new lib.DEDE_SHIRT();
        this.addTimedChild(instance16)
            .addTimedChild(instance15)
            .addTimedChild(instance14, 0, 275, {
                "0": {
                    x: 36.25,
                    y: -395.65,
                    r: 0.117
                },
                "8": {
                    x: 30.35,
                    y: -395.7,
                    r: 0.088
                },
                "9": {
                    x: 26.2,
                    r: 0.068
                },
                "10": {
                    x: 23.65,
                    y: -395.6,
                    r: 0.056
                },
                "11": {
                    x: 22.9,
                    r: 0.052
                },
                "27": {
                    x: 30.4,
                    y: -395.65,
                    r: 0.088
                },
                "28": {
                    x: 34.7,
                    y: -395.6,
                    r: 0.109
                },
                "29": {
                    x: 36.25,
                    y: -395.65,
                    r: 0.117
                },
                "74": {
                    y: -398.4
                },
                "75": {
                    y: -396.75
                },
                "76": {
                    y: -395.65
                },
                "88": {
                    x: 41.851,
                    y: -395.361,
                    r: 0.194
                },
                "89": {
                    x: 45.192,
                    y: -395.139,
                    r: 0.24
                },
                "90": {
                    x: 46.2,
                    y: -394.9,
                    r: 0.255
                },
                "104": {
                    x: 33.501,
                    y: -394.181,
                    r: 0.156
                },
                "105": {
                    x: 24.513,
                    y: -393.588,
                    r: 0.086
                },
                "106": {
                    x: 19.164,
                    y: -393.266,
                    r: 0.044
                },
                "107": {
                    x: 17.3,
                    y: -393.1,
                    r: 0.03
                },
                "114": {
                    x: 12.916,
                    y: -378.842,
                    r: -0.002
                },
                "115": {
                    x: 11.3,
                    y: -374.1,
                    r: -0.013
                },
                "116": {
                    x: 26.591,
                    y: -387.652,
                    r: 0.066
                },
                "117": {
                    x: 31.75,
                    y: -392,
                    r: 0.092
                },
                "118": {
                    x: 35.05,
                    y: -394.6,
                    r: 0.11
                },
                "119": {
                    x: 36.25,
                    y: -395.65,
                    r: 0.117
                },
                "125": {
                    x: 31.2,
                    y: -391.1,
                    r: 0.095
                },
                "126": {
                    x: 26.7,
                    y: -375.05,
                    r: 0.069
                },
                "127": {
                    x: 36.25,
                    y: -395.65,
                    r: 0.117
                },
                "128": {
                    x: 46.053,
                    y: -400.392,
                    r: 0.143
                },
                "129": {
                    x: 51.826,
                    y: -403.152,
                    r: 0.159
                },
                "130": {
                    x: 53.8,
                    y: -403.9,
                    r: 0.164
                },
                "131": {
                    x: 44.002,
                    y: -399.294,
                    r: 0.138
                },
                "132": {
                    x: 38.2,
                    y: -396.571,
                    r: 0.122
                },
                "133": {
                    x: 36.25,
                    y: -395.65,
                    r: 0.117
                },
                "200": {
                    x: 35.45,
                    r: 0.104
                },
                "201": {
                    x: 33.15,
                    y: -395.55,
                    r: 0.065
                },
                "202": {
                    x: 29.35,
                    y: -395.6,
                    r: 0
                },
                "206": {
                    x: 26.15,
                    y: -395.9,
                    r: -0.052
                },
                "207": {
                    x: 21.8,
                    y: -396.25,
                    r: -0.12
                },
                "208": {
                    x: 20.2,
                    y: -396.2,
                    r: -0.143
                },
                "215": {
                    x: 30.6,
                    y: -395.9,
                    r: 0.024
                },
                "216": {
                    x: 33.7,
                    y: -395.75,
                    r: 0.075
                },
                "217": {
                    x: 35.55,
                    y: -395.65,
                    r: 0.106
                },
                "224": {
                    x: 31.75,
                    y: -397.2,
                    r: 0.045
                },
                "225": {
                    x: 29.6,
                    y: -398.05,
                    r: 0.008
                },
                "226": {
                    x: 29,
                    y: -398.4,
                    r: -0.004
                },
                "228": {
                    x: 25.05,
                    y: -394,
                    r: -0.021
                },
                "229": {
                    x: 38.4,
                    y: -406.45,
                    r: 0.038
                },
                "231": {
                    x: 29,
                    y: -398.4,
                    r: -0.004
                },
                "232": {
                    x: 32.8,
                    y: -400.5,
                    r: 0.013
                },
                "233": {
                    x: 25.05,
                    y: -394,
                    r: -0.021
                },
                "234": {
                    x: 29,
                    y: -398.4,
                    r: -0.004
                }
            })
            .addTimedChild(instance13, 0, 275, {
                "0": {
                    x: 72.8,
                    y: -623.75,
                    r: 0
                },
                "8": {
                    x: 44.65,
                    y: -625.45,
                    r: -0.079
                },
                "9": {
                    x: 24.85,
                    y: -626.6,
                    r: -0.134
                },
                "10": {
                    x: 12.85,
                    y: -627.25,
                    r: -0.168
                },
                "11": {
                    x: 8.85,
                    y: -627.6,
                    r: -0.179
                },
                "27": {
                    x: 44.5,
                    y: -625.45,
                    r: -0.079
                },
                "28": {
                    x: 65.7,
                    y: -624.25,
                    r: -0.02
                },
                "29": {
                    x: 72.8,
                    y: -623.75,
                    r: 0
                },
                "74": {
                    y: -625.75
                },
                "75": {
                    y: -623.75
                },
                "76": {
                    y: -622.75
                },
                "77": {
                    y: -623.75
                },
                "88": {
                    x: 86.85,
                    y: -621.15,
                    r: 0.079
                },
                "89": {
                    x: 97.65,
                    y: -619.2,
                    r: 0.14
                },
                "90": {
                    x: 105.35,
                    y: -617.75,
                    r: 0.183
                },
                "91": {
                    x: 109.9,
                    y: -616.85,
                    r: 0.209
                },
                "92": {
                    x: 111.9,
                    y: -615.6
                },
                "104": {
                    x: 73.764,
                    y: -619.689,
                    r: 0.125
                },
                "105": {
                    x: 46.772,
                    y: -622.634,
                    r: 0.066
                },
                "106": {
                    x: 30.62,
                    y: -624.31,
                    r: 0.03
                },
                "107": {
                    x: 25.1,
                    y: -624.8,
                    r: 0.018
                },
                "114": {
                    x: 13.144,
                    y: -610.726,
                    r: -0.014
                },
                "115": {
                    x: 9.05,
                    y: -605.95,
                    r: -0.025
                },
                "116": {
                    x: 37.083,
                    y: -617.846,
                    r: -0.004
                },
                "117": {
                    x: 46.1,
                    y: -621.5,
                    r: 0.004
                },
                "118": {
                    x: 67.1,
                    y: -623.85,
                    r: 0.07
                },
                "119": {
                    x: 74.25,
                    y: -624.75,
                    r: 0.092
                },
                "125": {
                    x: 62.5,
                    y: -620.85
                },
                "126": {
                    x: 53,
                    y: -602.35,
                    r: 0.027
                },
                "127": {
                    x: 72.65,
                    y: -626.6,
                    r: 0.035
                },
                "128": {
                    x: 88.55,
                    y: -630.8,
                    r: 0.112
                },
                "129": {
                    x: 97.95,
                    y: -633.2,
                    r: 0.158
                },
                "130": {
                    x: 101,
                    y: -633.9,
                    r: 0.174
                },
                "131": {
                    x: 84.25,
                    y: -627.5,
                    r: 0.15
                },
                "132": {
                    x: 74.4,
                    y: -623.7,
                    r: 0.136
                },
                "133": {
                    x: 71,
                    y: -622.4,
                    r: 0.131
                },
                "200": {
                    x: 66.3,
                    y: -621.15,
                    r: 0.116
                },
                "201": {
                    x: 51.65,
                    y: -617,
                    r: 0.068
                },
                "202": {
                    x: 29.1,
                    y: -608.85,
                    r: 0.02
                },
                "203": {
                    x: 29.35,
                    y: -606.45,
                    r: 0.005
                },
                "204": {
                    y: -605.45
                },
                "205": {
                    x: 30.05,
                    y: -608.2,
                    r: -0.015
                },
                "206": {
                    x: 12.5,
                    y: -615.05,
                    r: -0.041
                },
                "207": {
                    x: -8.25,
                    y: -620.75,
                    r: -0.073
                },
                "208": {
                    x: -17.95,
                    y: -625.55,
                    r: -0.1
                },
                "209": {
                    x: -17.55,
                    y: -624.25,
                    r: -0.115
                },
                "210": {
                    x: -17.35,
                    y: -623.2,
                    r: -0.12
                },
                "213": {
                    x: -16.35,
                    y: -621.2
                },
                "214": {
                    x: -16.25,
                    y: -617.95,
                    r: -0.104
                },
                "215": {
                    x: 40.15,
                    y: -615.85,
                    r: -0.055
                },
                "216": {
                    x: 56.6,
                    y: -621.55,
                    r: 0.04
                },
                "217": {
                    x: 66.35,
                    y: -624.95,
                    r: 0.097
                },
                "218": {
                    x: 69.65,
                    y: -626.1,
                    r: 0.116
                },
                "223": {
                    x: 57.9,
                    y: -627.05
                },
                "224": {
                    x: 42.5,
                    y: -622.3,
                    r: 0.06
                },
                "225": {
                    x: 25.25,
                    y: -622.25,
                    r: -0.001
                },
                "226": {
                    x: 19.8,
                    y: -622.05,
                    r: -0.067
                },
                "228": {
                    x: 11,
                    y: -616.15
                },
                "229": {
                    x: 38.6,
                    y: -629,
                    r: 0.008
                },
                "231": {
                    x: 18,
                    y: -620.15,
                    r: -0.067
                },
                "232": {
                    x: 27.6,
                    y: -623,
                    r: 0.008
                },
                "233": {
                    x: 11,
                    y: -616.15,
                    r: -0.067
                },
                "234": {
                    x: 18.9,
                    y: -620.2,
                    r: 0.008
                }
            })
            .addTimedChild(instance12, 0, 275, {
                "0": {
                    x: 232.7,
                    y: -569,
                    r: 0
                },
                "8": {
                    x: 222.45,
                    y: -583.6,
                    r: -0.079
                },
                "9": {
                    x: 202.8,
                    y: -595.8,
                    r: -0.134
                },
                "10": {
                    x: 185.85,
                    y: -600.6,
                    r: -0.168
                },
                "11": {
                    x: 177.95,
                    y: -603.15,
                    r: -0.179
                },
                "12": {
                    x: 174.95,
                    y: -601.65
                },
                "27": {
                    x: 203.25,
                    y: -581.9,
                    r: -0.079
                },
                "28": {
                    x: 216.9,
                    y: -569.65,
                    r: -0.02
                },
                "29": {
                    x: 231.2,
                    y: -568.5,
                    r: 0
                },
                "30": {
                    x: 233.7,
                    y: -569
                },
                "71": {
                    x: 232.7
                },
                "74": {
                    x: 231.7,
                    y: -570.5
                },
                "75": {
                    x: 232.7,
                    y: -572
                },
                "76": {
                    x: 231.7,
                    y: -568
                },
                "77": {
                    x: 232.7,
                    y: -569
                },
                "88": {
                    x: 240.1,
                    y: -551.9,
                    r: 0.079
                },
                "89": {
                    x: 240.65,
                    y: -543.6,
                    r: 0.14
                },
                "90": {
                    x: 255.1,
                    y: -535.05,
                    r: 0.183
                },
                "91": {
                    x: 262.7,
                    y: -529.7,
                    r: 0.209
                },
                "92": {
                    x: 264.7,
                    y: -528.45
                },
                "104": {
                    x: 232.674,
                    y: -546.003,
                    r: 0.125
                },
                "105": {
                    x: 209.984,
                    y: -558.43,
                    r: 0.066
                },
                "106": {
                    x: 196.368,
                    y: -565.854,
                    r: 0.03
                },
                "107": {
                    x: 191.65,
                    y: -568.15,
                    r: 0.018
                },
                "114": {
                    x: 181.351,
                    y: -559.493,
                    r: -0.014
                },
                "115": {
                    x: 177.9,
                    y: -556.55,
                    r: -0.025
                },
                "116": {
                    x: 189.714,
                    y: -562.285,
                    r: -0.004
                },
                "117": {
                    x: 193.65,
                    y: -564.3,
                    r: 0.004
                },
                "118": {
                    x: 223.95,
                    y: -555.5,
                    r: 0.07
                },
                "119": {
                    x: 235.7,
                    y: -555.6,
                    r: 0.092
                },
                "120": {
                    x: 236.7
                },
                "125": {
                    x: 232.3,
                    y: -555.65
                },
                "126": {
                    x: 228.45,
                    y: -538,
                    r: 0.027
                },
                "127": {
                    x: 228.5,
                    y: -559,
                    r: 0.035
                },
                "128": {
                    x: 239.9,
                    y: -556.3,
                    r: 0.112
                },
                "129": {
                    x: 255.35,
                    y: -552.5,
                    r: 0.294
                },
                "130": {
                    x: 257.25,
                    y: -551.75,
                    r: 0.174
                },
                "131": {
                    x: 252.8,
                    y: -552.65,
                    r: 0.15
                },
                "132": {
                    x: 231,
                    y: -542.1,
                    r: 0.178
                },
                "133": {
                    x: 227.75,
                    y: -544.55,
                    r: 0.131
                },
                "134": {
                    x: 230.65,
                    y: -547
                },
                "200": {
                    x: 227,
                    y: -548.2,
                    r: 0.116
                },
                "201": {
                    x: 215.5,
                    y: -551.85,
                    r: 0.068
                },
                "202": {
                    x: 195.9,
                    y: -551.5,
                    r: 0.02
                },
                "203": {
                    x: 197.2,
                    y: -551.65,
                    r: 0.005
                },
                "204": {
                    y: -550.65
                },
                "205": {
                    x: 198.75,
                    y: -556.8,
                    r: -0.015
                },
                "206": {
                    x: 182.4,
                    y: -568.1,
                    r: -0.041
                },
                "207": {
                    x: 163.05,
                    y: -579.35,
                    r: -0.073
                },
                "208": {
                    x: 154.5,
                    y: -588.7,
                    r: -0.1
                },
                "209": {
                    x: 155.55,
                    y: -590.15,
                    r: -0.115
                },
                "210": {
                    x: 156.05,
                    y: -589.75,
                    r: -0.12
                },
                "213": {
                    x: 157.05,
                    y: -587.75
                },
                "214": {
                    x: 156.5,
                    y: -581.65,
                    r: -0.104
                },
                "215": {
                    x: 211,
                    y: -571.2,
                    r: -0.055
                },
                "216": {
                    x: 232.65,
                    y: -573.85,
                    r: 0.04
                },
                "217": {
                    x: 228.35,
                    y: -555.1,
                    r: 0.097
                },
                "218": {
                    x: 230.35,
                    y: -553,
                    r: 0.116
                },
                "223": {
                    x: 218.6,
                    y: -553.95
                },
                "224": {
                    x: 207.05,
                    y: -558.25,
                    r: 0.06
                },
                "225": {
                    x: 193.4,
                    y: -568.3,
                    r: -0.001
                },
                "226": {
                    x: 191.1,
                    y: -579.35,
                    r: -0.067
                },
                "228": {
                    x: 182.3,
                    y: -573.45
                },
                "229": {
                    x: 206.2,
                    y: -573.6,
                    r: 0.008
                },
                "231": {
                    x: 189.3,
                    y: -577.45,
                    r: -0.067
                },
                "232": {
                    x: 195.2,
                    y: -567.6,
                    r: 0.008
                },
                "233": {
                    x: 182.3,
                    y: -573.45,
                    r: -0.067
                },
                "234": {
                    x: 186.5,
                    y: -564.8,
                    r: 0.008
                }
            })
            .addTimedChild(instance11, 0, 275, {
                "0": {
                    x: 232.95,
                    y: -543.95,
                    r: 0
                },
                "8": {
                    x: 226.05,
                    y: -559.2,
                    r: -0.079
                },
                "9": {
                    x: 206.45,
                    y: -571.15,
                    r: -0.134
                },
                "10": {
                    x: 190.35,
                    y: -575.9,
                    r: -0.168
                },
                "11": {
                    x: 182.65,
                    y: -578.55,
                    r: -0.179
                },
                "12": {
                    x: 179.65,
                    y: -577.05,
                    r: -0.102
                },
                "27": {
                    x: 205.35,
                    y: -557.05,
                    r: 0.155
                },
                "28": {
                    x: 214,
                    y: -545.55,
                    r: 0.246
                },
                "29": {
                    x: 231.45,
                    y: -543.45,
                    r: 0.082
                },
                "30": {
                    x: 233.95,
                    y: -543.95,
                    r: 0
                },
                "71": {
                    x: 232.95
                },
                "74": {
                    x: 231.95,
                    y: -545.45
                },
                "75": {
                    x: 232.95,
                    y: -546.95
                },
                "76": {
                    x: 231.95,
                    y: -542.95
                },
                "77": {
                    x: 232.95,
                    y: -543.95
                },
                "88": {
                    x: 238.35,
                    y: -527.05,
                    r: 0.349
                },
                "89": {
                    x: 237.45,
                    y: -518.9,
                    r: 0.457
                },
                "90": {
                    x: 250.85,
                    y: -510.45,
                    r: 0.353
                },
                "91": {
                    x: 257.7,
                    y: -505.15,
                    r: 0.291
                },
                "92": {
                    x: 259.7,
                    y: -503.9
                },
                "104": {
                    x: 229.757,
                    y: -521.218,
                    r: 0.207
                },
                "105": {
                    x: 208.542,
                    y: -533.427,
                    r: 0.148
                },
                "106": {
                    x: 195.81,
                    y: -540.757,
                    r: 0.112
                },
                "107": {
                    x: 191.35,
                    y: -543.15,
                    r: 0.101
                },
                "114": {
                    x: 181.904,
                    y: -534.561,
                    r: 0.068
                },
                "115": {
                    x: 178.65,
                    y: -531.6,
                    r: 0.057
                },
                "116": {
                    x: 185.246,
                    y: -538.727,
                    r: 0.403
                },
                "117": {
                    x: 187.35,
                    y: -540.95,
                    r: 0.518
                },
                "118": {
                    x: 222.4,
                    y: -530.65,
                    r: 0.217
                },
                "119": {
                    x: 233.6,
                    r: 0.21
                },
                "120": {
                    x: 234.65,
                    y: -530.6,
                    r: 0.109
                },
                "125": {
                    x: 230.35,
                    y: -530.65,
                    r: -0.148
                },
                "126": {
                    x: 228.15,
                    y: -512.9,
                    r: -0.518
                },
                "127": {
                    x: 227.75,
                    y: -533.9,
                    r: 0.305
                },
                "128": {
                    x: 237.2,
                    y: -531.35,
                    r: 0.344
                },
                "129": {
                    x: 248.35,
                    y: -528.3,
                    r: 0.321
                },
                "130": {
                    x: 253.15,
                    y: -527,
                    r: 0.191
                },
                "131": {
                    x: 249.4,
                    y: -527.65,
                    r: -0.365
                },
                "132": {
                    x: 226.95,
                    y: -517.2,
                    r: -0.1
                },
                "133": {
                    x: 224.65,
                    y: -519.65,
                    r: 0.295
                },
                "134": {
                    x: 227.6,
                    y: -522.1,
                    r: 0.148
                },
                "135": {
                    x: 227.65,
                    r: 0.044
                },
                "200": {
                    x: 224.4,
                    y: -523.25,
                    r: 0.029
                },
                "201": {
                    x: 214.05,
                    y: -526.85,
                    r: -0.019
                },
                "202": {
                    x: 195.65,
                    y: -526.45,
                    r: -0.067
                },
                "203": {
                    x: 197.35,
                    y: -526.55,
                    r: -0.082
                },
                "204": {
                    y: -525.55
                },
                "205": {
                    x: 199.35,
                    y: -531.7,
                    r: -0.102
                },
                "206": {
                    x: 183.65,
                    y: -543.15,
                    r: -0.128
                },
                "207": {
                    x: 165.15,
                    y: -554.45,
                    r: -0.16
                },
                "208": {
                    x: 157.3,
                    y: -563.8,
                    r: -0.187
                },
                "209": {
                    x: 158.7,
                    y: -565.2,
                    r: -0.202
                },
                "210": {
                    x: 159.3,
                    y: -564.9,
                    r: -0.207
                },
                "213": {
                    x: 160.3,
                    y: -562.9
                },
                "214": {
                    x: 159.35,
                    y: -556.8,
                    r: -0.191
                },
                "215": {
                    x: 212.6,
                    y: -546.2,
                    r: -0.142
                },
                "216": {
                    x: 231.75,
                    y: -548.85,
                    r: -0.046
                },
                "217": {
                    x: 226.05,
                    y: -530.15,
                    r: 0.01
                },
                "218": {
                    x: 227.7,
                    y: -528.1,
                    r: 0.029
                },
                "223": {
                    x: 215.95,
                    y: -529.05
                },
                "224": {
                    x: 205.8,
                    y: -533.25,
                    r: -0.027
                },
                "225": {
                    x: 193.65,
                    y: -543.3,
                    r: -0.088
                },
                "226": {
                    x: 193,
                    y: -554.4,
                    r: -0.154
                },
                "228": {
                    x: 184.2,
                    y: -548.5
                },
                "229": {
                    x: 206.2,
                    y: -548.6,
                    r: -0.078
                },
                "231": {
                    x: 191.2,
                    y: -552.5,
                    r: -0.154
                },
                "232": {
                    x: 195.2,
                    y: -542.6,
                    r: -0.078
                },
                "233": {
                    x: 184.2,
                    y: -548.5,
                    r: -0.154
                },
                "234": {
                    x: 186.5,
                    y: -539.8,
                    r: -0.078
                }
            })
            .addTimedChild(instance10, 0, 7)
            .addTimedChild(instance17, 7, 1)
            .addTimedChild(instance19, 8, 1)
            .addTimedChild(instance22, 9, 1)
            .addTimedChild(instance25, 10, 1)
            .addTimedChild(instance28, 11, 1)
            .addTimedChild(instance29, 12, 14)
            .addTimedChild(instance30, 26, 1)
            .addTimedChild(instance32, 27, 1)
            .addTimedChild(instance35, 28, 1)
            .addTimedChild(instance38, 29, 1)
            .addTimedChild(instance39, 30, 41)
            .addTimedChild(instance41, 71, 3)
            .addTimedChild(instance45, 74, 1)
            .addTimedChild(instance47, 75, 1)
            .addTimedChild(instance48, 76, 1)
            .addTimedChild(instance49, 77, 10)
            .addTimedChild(instance52, 87, 1)
            .addTimedChild(instance55, 88, 1)
            .addTimedChild(instance58, 89, 1)
            .addTimedChild(instance61, 90, 1)
            .addTimedChild(instance62, 91, 1)
            .addTimedChild(instance63, 92, 2)
            .addTimedChild(instance66, 94, 9)
            .addTimedChild(instance79, 103, 1)
            .addTimedChild(instance82, 104, 1)
            .addTimedChild(instance85, 105, 1)
            .addTimedChild(instance88, 106, 1)
            .addTimedChild(instance91, 107, 6)
            .addTimedChild(instance94, 113, 1)
            .addTimedChild(instance97, 114, 1)
            .addTimedChild(instance100, 115, 1)
            .addTimedChild(instance103, 116, 1)
            .addTimedChild(instance106, 117, 1)
            .addTimedChild(instance109, 118, 1)
            .addTimedChild(instance112, 119, 1)
            .addTimedChild(instance113, 120, 5)
            .addTimedChild(instance115, 125, 1)
            .addTimedChild(instance117, 126, 1)
            .addTimedChild(instance120, 127, 1)
            .addTimedChild(instance123, 128, 1)
            .addTimedChild(instance126, 129, 1)
            .addTimedChild(instance129, 130, 1)
            .addTimedChild(instance132, 131, 1)
            .addTimedChild(instance135, 132, 1)
            .addTimedChild(instance138, 133, 1)
            .addTimedChild(instance139, 134, 1)
            .addTimedChild(instance140, 135, 55)
            .addTimedChild(instance143, 190, 9)
            .addTimedChild(instance145, 199, 1)
            .addTimedChild(instance148, 200, 1)
            .addTimedChild(instance151, 201, 1)
            .addTimedChild(instance153, 202, 1)
            .addTimedChild(instance155, 203, 1)
            .addTimedChild(instance157, 204, 1)
            .addTimedChild(instance159, 205, 1)
            .addTimedChild(instance162, 206, 1)
            .addTimedChild(instance164, 207, 1)
            .addTimedChild(instance167, 208, 1)
            .addTimedChild(instance169, 209, 1)
            .addTimedChild(instance170, 210, 3)
            .addTimedChild(instance172, 213, 1)
            .addTimedChild(instance174, 214, 1)
            .addTimedChild(instance177, 215, 1)
            .addTimedChild(instance180, 216, 1)
            .addTimedChild(instance182, 217, 1)
            .addTimedChild(instance184, 218, 5)
            .addTimedChild(instance185, 223, 1)
            .addTimedChild(instance187, 224, 1)
            .addTimedChild(instance190, 225, 1)
            .addTimedChild(instance193, 226, 2)
            .addTimedChild(instance194, 228, 1)
            .addTimedChild(instance197, 229, 2)
            .addTimedChild(instance200, 231, 1)
            .addTimedChild(instance203, 232, 1)
            .addTimedChild(instance206, 233, 1)
            .addTimedChild(instance207, 234, 41)
            .addTimedChild(instance9, 0, 275, {
                "0": {
                    x: 39.85,
                    y: -429.05,
                    r: 0.147
                },
                "8": {
                    x: 33,
                    y: -429.15,
                    r: 0.04
                },
                "9": {
                    x: 28.25,
                    y: -429.2,
                    r: -0.035
                },
                "10": {
                    x: 25.4,
                    y: -429.15,
                    r: -0.081
                },
                "11": {
                    x: 24.35,
                    r: -0.096
                },
                "27": {
                    x: 33,
                    y: -429.1,
                    r: 0.04
                },
                "28": {
                    x: 38.1,
                    y: -429,
                    r: 0.12
                },
                "29": {
                    x: 39.85,
                    y: -429.05,
                    r: 0.147
                },
                "74": {
                    y: -431.8
                },
                "75": {
                    y: -430.15
                },
                "76": {
                    y: -429.05
                },
                "88": {
                    x: 43.999,
                    y: -428.792,
                    r: 0.196
                },
                "89": {
                    x: 47.144,
                    y: -428.508,
                    r: 0.233
                },
                "90": {
                    x: 49.424,
                    y: -428.368,
                    r: 0.26
                },
                "91": {
                    x: 50.768,
                    y: -428.253,
                    r: 0.276
                },
                "92": {
                    x: 51.2,
                    y: -428.15,
                    r: 0.281
                },
                "104": {
                    x: 36.565,
                    y: -427.638,
                    r: 0.168
                },
                "105": {
                    x: 26.2,
                    y: -427.237,
                    r: 0.088
                },
                "106": {
                    x: 20.013,
                    y: -427.006,
                    r: 0.04
                },
                "107": {
                    x: 17.95,
                    y: -426.75,
                    r: 0.023
                },
                "114": {
                    x: 12.468,
                    y: -412.545,
                    r: -0.009
                },
                "115": {
                    x: 10.5,
                    y: -407.75,
                    r: -0.02
                },
                "116": {
                    x: 28.745,
                    y: -421.039,
                    r: 0.025
                },
                "117": {
                    x: 34.6,
                    y: -425.5,
                    r: 0.039
                },
                "118": {
                    x: 38.5,
                    y: -428.1,
                    r: 0.12
                },
                "119": {
                    x: 39.85,
                    y: -429.05,
                    r: 0.147
                },
                "125": {
                    x: 34.1,
                    y: -424.6,
                    r: 0.125
                },
                "126": {
                    x: 28.7,
                    y: -408.6,
                    r: 0.099
                },
                "127": {
                    x: 39.85,
                    y: -429.05,
                    r: 0.147
                },
                "128": {
                    x: 50.539,
                    y: -433.627,
                    r: 0.173
                },
                "129": {
                    x: 56.88,
                    y: -436.307,
                    r: 0.189
                },
                "130": {
                    x: 59,
                    y: -437.1,
                    r: 0.194
                },
                "131": {
                    x: 48.267,
                    y: -432.614,
                    r: 0.168
                },
                "132": {
                    x: 41.947,
                    y: -429.917,
                    r: 0.152
                },
                "133": {
                    x: 39.85,
                    y: -429.05,
                    r: 0.147
                },
                "200": {
                    x: 38.55,
                    y: -428.35,
                    r: 0.131
                },
                "201": {
                    x: 32.35,
                    y: -425.15,
                    r: 0.082
                },
                "202": {
                    x: 28.2,
                    y: -412.9,
                    r: 0
                },
                "203": {
                    y: -411.8
                },
                "204": {
                    y: -410.7
                },
                "205": {
                    y: -412.9
                },
                "206": {
                    x: 20.15,
                    y: -418.8,
                    r: -0.044
                },
                "207": {
                    x: 9.5,
                    y: -426.5,
                    r: -0.103
                },
                "208": {
                    x: 5.75,
                    y: -426.6,
                    r: -0.122
                },
                "209": {
                    x: 4.65,
                    y: -427.7
                },
                "210": {
                    x: 5.75,
                    y: -428.8
                },
                "213": {
                    x: 6.25,
                    y: -427.25
                },
                "214": {
                    x: 6.8,
                    y: -423.55
                },
                "215": {
                    x: 26.6,
                    y: -418.35,
                    r: 0.051
                },
                "216": {
                    x: 33.4,
                    y: -425.8,
                    r: 0.104
                },
                "217": {
                    x: 38.4,
                    y: -428.95,
                    r: 0.136
                },
                "223": {
                    x: 38.45,
                    y: -428.9,
                    r: 0.071
                },
                "224": {
                    x: 28.8,
                    y: -424.65,
                    r: 0.048
                },
                "225": {
                    x: 23.2,
                    y: -422.05,
                    r: -0.004
                },
                "226": {
                    x: 21.35,
                    y: -421.3,
                    r: -0.021
                },
                "228": {
                    x: 17,
                    y: -416.8,
                    r: -0.039
                },
                "229": {
                    x: 31.7,
                    y: -429.65,
                    r: 0.021
                },
                "231": {
                    x: 21.35,
                    y: -421.3,
                    r: -0.021
                },
                "232": {
                    x: 25.55,
                    y: -423.5,
                    r: -0.005
                },
                "233": {
                    x: 17,
                    y: -416.8,
                    r: -0.039
                },
                "234": {
                    x: 21.35,
                    y: -421.3,
                    r: -0.021
                }
            })
            .addTimedChild(instance8)
            .addTimedChild(instance7)
            .addTimedChild(instance6, 0, 275, {
                "0": {
                    x: -107.15,
                    y: -268.05,
                    kx: 0.646,
                    ky: 2.495
                },
                "8": {
                    x: -109.3,
                    y: -264.2,
                    kx: 0.675,
                    ky: 2.467
                },
                "9": {
                    x: -110.75,
                    y: -261.45,
                    kx: 0.695,
                    ky: 2.447
                },
                "10": {
                    x: -111.7,
                    y: -259.75,
                    kx: 0.707,
                    ky: 2.435
                },
                "11": {
                    x: -111.95,
                    y: -259.05,
                    kx: 0.711,
                    ky: 2.431
                },
                "27": {
                    x: -109.25,
                    y: -264.1,
                    kx: 0.675,
                    ky: 2.467
                },
                "28": {
                    x: -107.7,
                    y: -267,
                    kx: 0.654,
                    ky: 2.488
                },
                "29": {
                    x: -107.15,
                    y: -268.05,
                    kx: 0.646,
                    ky: 2.495
                },
                "71": {
                    x: -110.45,
                    y: -265.6
                },
                "72": {
                    x: -117.05
                },
                "73": {
                    x: -142.4,
                    y: -267.25
                },
                "74": {
                    x: -161.8,
                    y: -433.7,
                    kx: 4.671,
                    ky: -1.53
                },
                "75": {
                    x: -159.35,
                    y: -441.85
                },
                "76": {
                    y: -440.75
                },
                "88": {
                    x: -154.076,
                    y: -458.623,
                    kx: -1.544,
                    ky: -1.597
                },
                "89": {
                    x: -150.978,
                    y: -469.202,
                    kx: -1.504,
                    ky: -1.638
                },
                "90": {
                    x: -149.85,
                    y: -472.65,
                    kx: -1.491,
                    ky: -1.651
                },
                "95": {
                    x: -158.721,
                    y: -441.537,
                    kx: 4.421,
                    ky: -1.28
                },
                "96": {
                    x: -161.6,
                    y: -431.05,
                    kx: 4.297,
                    ky: -1.156
                },
                "97": {
                    x: -181.55,
                    y: -412.6,
                    kx: 4.237,
                    ky: -1.095
                },
                "98": {
                    x: -165.15,
                    y: -281.5,
                    kx: -0.56,
                    ky: -2.582
                },
                "99": {
                    x: -171.4,
                    y: -285.7
                },
                "104": {
                    x: -185.766,
                    y: -284.077,
                    kx: -0.351,
                    ky: -2.791
                },
                "105": {
                    x: -195.941,
                    y: -282.974,
                    kx: -0.204,
                    ky: -2.938
                },
                "106": {
                    x: -202.026,
                    y: -282.267,
                    kx: -0.115,
                    ky: -3.026
                },
                "107": {
                    x: -204.05,
                    y: -282.05,
                    kx: -0.086,
                    ky: -3.056
                },
                "114": {
                    x: -204.845,
                    y: -260.678,
                    kx: -0.053,
                    ky: -3.089
                },
                "115": {
                    x: -204.95,
                    y: -253.55,
                    kx: -0.042,
                    ky: -3.099
                },
                "116": {
                    x: -167.503,
                    y: -402.287,
                    kx: -1.495,
                    ky: -1.647
                },
                "117": {
                    x: -155.05,
                    y: -451.5,
                    kx: 4.308,
                    ky: -1.166
                },
                "118": {
                    x: -145.15,
                    y: -469.3,
                    kx: 4.059,
                    ky: -0.917
                },
                "119": {
                    x: -141.8,
                    y: -475.4,
                    kx: 4.097,
                    ky: -0.955
                },
                "125": {
                    x: -148.45,
                    y: -467.05,
                    kx: 3.996,
                    ky: -0.855
                },
                "126": {
                    x: -154.9,
                    y: -446.2,
                    kx: 4.023,
                    ky: -0.881
                },
                "127": {
                    x: -141.8,
                    y: -475.4,
                    kx: 3.975,
                    ky: -0.833
                },
                "128": {
                    x: -125.121,
                    y: -491.184,
                    kx: 3.835,
                    ky: -0.693
                },
                "129": {
                    x: -115.211,
                    y: -500.576,
                    kx: 3.751,
                    ky: -0.61
                },
                "130": {
                    x: -111.85,
                    y: -503.55,
                    kx: 3.723,
                    ky: -0.582
                },
                "131": {
                    x: -127.422,
                    y: -477.569,
                    kx: 3.922,
                    ky: -0.781
                },
                "132": {
                    x: -136.585,
                    y: -462.118,
                    kx: 4.04,
                    ky: -0.899
                },
                "133": {
                    x: -139.65,
                    y: -457.05,
                    kx: 4.08,
                    ky: -0.938
                },
                "190": {
                    x: -159.35,
                    y: -440.75,
                    kx: 4.671,
                    ky: -1.53
                },
                "199": {
                    x: -157.75,
                    y: -443.15,
                    kx: -1.569,
                    ky: -1.573
                },
                "200": {
                    x: -141.75,
                    y: -450.75,
                    kx: 4.423,
                    ky: -1.282
                },
                "201": {
                    x: -83.6,
                    y: -496.75,
                    kx: 3.239,
                    ky: -0.097
                },
                "202": {
                    x: 0.05,
                    y: -530.55,
                    kx: 1.955,
                    ky: 1.187
                },
                "203": {
                    x: 1.65,
                    y: -530.35,
                    kx: 1.916,
                    ky: 1.225
                },
                "204": {
                    x: 4.3,
                    y: -530.6,
                    kx: 1.895,
                    ky: 1.247
                },
                "205": {
                    x: 0.05,
                    y: -530.55,
                    kx: 2.003,
                    ky: 1.139
                },
                "206": {
                    x: -72.55,
                    y: -512.9,
                    kx: 2.431,
                    ky: 0.711
                },
                "207": {
                    x: -187.1,
                    y: -446.25,
                    kx: 3.657,
                    ky: -0.516
                },
                "208": {
                    x: -194.95,
                    y: -436.35,
                    kx: 3.998,
                    ky: -0.856
                },
                "209": {
                    x: -189,
                    y: -445.25,
                    kx: -1.565,
                    ky: -1.577
                },
                "210": {
                    x: -189.45,
                    kx: -1.53,
                    ky: -1.611
                },
                "213": {
                    x: -192.7,
                    y: -440.45,
                    kx: 4.588,
                    ky: -1.446
                },
                "214": {
                    x: -199.1,
                    y: -428.35,
                    kx: 4.423,
                    ky: -1.281
                },
                "215": {
                    x: -190.05,
                    y: -306.75,
                    kx: -0.145,
                    ky: -2.997
                },
                "216": {
                    x: -126.6,
                    y: -282.6,
                    kx: 0.294,
                    ky: 2.848
                },
                "217": {
                    x: -109.5,
                    y: -274.75,
                    kx: 0.558,
                    ky: 2.584
                },
                "218": {
                    x: -108.45,
                    y: -277.45,
                    kx: 0.685,
                    ky: 2.457
                },
                "224": {
                    x: -108.9,
                    y: -270.7,
                    kx: 0.673,
                    ky: 2.469
                },
                "225": {
                    x: -109.15,
                    y: -266.6,
                    kx: 0.665,
                    ky: 2.476
                },
                "226": {
                    x: -109.6,
                    y: -265.25,
                    kx: 0.663,
                    ky: 2.479
                },
                "228": {
                    x: -111.15,
                    y: -258.45,
                    kx: 0.681,
                    ky: 2.461
                },
                "229": {
                    x: -107.35,
                    y: -287.75,
                    kx: 0.621,
                    ky: 2.521
                },
                "231": {
                    x: -109.6,
                    y: -265.25,
                    kx: 0.663,
                    ky: 2.479
                },
                "232": {
                    x: -109.9,
                    y: -278.15,
                    kx: 0.646,
                    ky: 2.495
                },
                "233": {
                    x: -111.15,
                    y: -258.45,
                    kx: 0.681,
                    ky: 2.461
                },
                "234": {
                    x: -109.6,
                    y: -265.25,
                    kx: 0.663,
                    ky: 2.479
                }
            })
            .addTimedChild(instance5, 0, 9, {
                "0": {
                    x: -2,
                    y: -47.05,
                    sx: 1,
                    sy: 1,
                    r: 0.034
                },
                "8": {
                    x: 3.75,
                    y: -47.25,
                    sx: 1.002,
                    sy: 0.997,
                    r: 0
                }
            })
            .addTimedChild(instance21, 9, 1)
            .addTimedChild(instance24, 10, 1)
            .addTimedChild(instance27, 11, 17, {
                "11": {
                    x: 7.1,
                    y: -45.25,
                    sx: 1,
                    sy: 1,
                    r: -0.03
                },
                "27": {
                    x: 3.75,
                    y: -47.25,
                    sx: 1.002,
                    sy: 0.997,
                    r: 0
                }
            })
            .addTimedChild(instance34, 28, 1)
            .addTimedChild(instance37, 29, 42, {
                "29": {
                    x: -2,
                    y: -47.05,
                    r: 0.034
                }
            })
            .addTimedChild(instance40, 71, 1, {
                "71": {
                    x: -2,
                    y: -47.05,
                    r: 0.034
                }
            })
            .addTimedChild(instance42, 72, 1, {
                "72": {
                    x: -2,
                    y: -47.05,
                    r: 0.034
                }
            })
            .addTimedChild(instance43, 73, 1, {
                "73": {
                    x: -2,
                    y: -47.05,
                    r: 0.034
                }
            })
            .addTimedChild(instance44, 74, 1, {
                "74": {
                    x: -2,
                    y: -49.8,
                    r: 0.034
                }
            })
            .addTimedChild(instance46, 75, 12, {
                "75": {
                    x: -2,
                    y: -48.15,
                    r: 0.034
                },
                "76": {
                    y: -47.05
                }
            })
            .addTimedChild(instance51, 87, 1)
            .addTimedChild(instance54, 88, 1)
            .addTimedChild(instance57, 89, 1)
            .addTimedChild(instance60, 90, 4, {
                "90": {
                    x: -7.15,
                    y: -48.3,
                    r: 0.077
                }
            })
            .addTimedChild(instance65, 94, 1)
            .addTimedChild(instance68, 95, 1)
            .addTimedChild(instance70, 96, 1, {
                "96": {
                    x: -7.15,
                    y: -48.3,
                    r: 0.077
                }
            })
            .addTimedChild(instance72, 97, 1, {
                "97": {
                    x: -7.15,
                    y: -48.3,
                    r: 0.077
                }
            })
            .addTimedChild(instance74, 98, 1, {
                "98": {
                    x: -7.15,
                    y: -48.3,
                    r: 0.077
                }
            })
            .addTimedChild(instance76, 99, 4, {
                "99": {
                    x: -7.15,
                    y: -48.3,
                    r: 0.077
                }
            })
            .addTimedChild(instance78, 103, 1)
            .addTimedChild(instance81, 104, 1)
            .addTimedChild(instance84, 105, 1)
            .addTimedChild(instance87, 106, 1)
            .addTimedChild(instance90, 107, 6, {
                "107": {
                    x: -8.2,
                    y: -51.65,
                    r: -0.009
                }
            })
            .addTimedChild(instance93, 113, 1)
            .addTimedChild(instance96, 114, 1)
            .addTimedChild(instance99, 115, 1)
            .addTimedChild(instance102, 116, 1)
            .addTimedChild(instance105, 117, 1)
            .addTimedChild(instance108, 118, 1)
            .addTimedChild(instance111, 119, 8, {
                "119": {
                    x: -2,
                    y: -47.05,
                    r: 0.034
                },
                "125": {
                    x: 0.4,
                    y: -41.75,
                    r: 0.012
                },
                "126": {
                    x: 5.2,
                    y: -25.05,
                    r: -0.014
                }
            })
            .addTimedChild(instance119, 127, 1)
            .addTimedChild(instance122, 128, 1)
            .addTimedChild(instance125, 129, 1)
            .addTimedChild(instance128, 130, 1)
            .addTimedChild(instance131, 131, 1)
            .addTimedChild(instance134, 132, 1)
            .addTimedChild(instance137, 133, 57, {
                "133": {
                    x: -2,
                    y: -47.05,
                    r: 0.034
                }
            })
            .addTimedChild(instance142, 190, 9, {
                "190": {
                    x: -2,
                    y: -47.05,
                    r: 0.034
                }
            })
            .addTimedChild(instance144, 199, 1, {
                "199": {
                    x: -2,
                    y: -47.05,
                    r: 0.034
                }
            })
            .addTimedChild(instance147, 200, 1)
            .addTimedChild(instance150, 201, 1)
            .addTimedChild(instance152, 202, 1, {
                "202": {
                    x: -180.45,
                    y: -91.9,
                    r: 0.548
                }
            })
            .addTimedChild(instance154, 203, 1, {
                "203": {
                    x: -180.45,
                    y: -91.9,
                    r: 0.548
                }
            })
            .addTimedChild(instance156, 204, 1, {
                "204": {
                    x: -180.45,
                    y: -91.9,
                    r: 0.548
                }
            })
            .addTimedChild(instance158, 205, 1, {
                "205": {
                    x: -180.45,
                    y: -91.9,
                    r: 0.548
                }
            })
            .addTimedChild(instance161, 206, 1)
            .addTimedChild(instance163, 207, 1)
            .addTimedChild(instance166, 208, 1, {
                "208": {
                    x: 4.65,
                    y: -46.2,
                    r: -0.013
                }
            })
            .addTimedChild(instance168, 209, 4, {
                "209": {
                    x: 4.65,
                    y: -46.2,
                    r: -0.013
                }
            })
            .addTimedChild(instance171, 213, 1, {
                "213": {
                    x: 4.65,
                    y: -46.2,
                    r: -0.013
                }
            })
            .addTimedChild(instance173, 214, 1, {
                "214": {
                    x: 4.65,
                    y: -46.2,
                    r: -0.013
                }
            })
            .addTimedChild(instance176, 215, 1)
            .addTimedChild(instance179, 216, 1)
            .addTimedChild(instance181, 217, 1)
            .addTimedChild(instance183, 218, 6)
            .addTimedChild(instance186, 224, 1)
            .addTimedChild(instance189, 225, 1)
            .addTimedChild(instance192, 226, 3, {
                "226": {
                    x: -0.85,
                    y: -46.05,
                    r: 0.017
                },
                "228": {
                    x: 1.35,
                    y: -41.2,
                    r: 0
                }
            })
            .addTimedChild(instance196, 229, 2, {
                "229": {
                    x: -6.15,
                    y: -55.7,
                    r: 0.059
                }
            })
            .addTimedChild(instance199, 231, 1, {
                "231": {
                    x: -0.85,
                    y: -46.05,
                    r: 0.017
                }
            })
            .addTimedChild(instance202, 232, 1, {
                "232": {
                    x: -2.85,
                    y: -48.7,
                    r: 0.034
                }
            })
            .addTimedChild(instance205, 233, 42, {
                "233": {
                    x: 1.35,
                    y: -41.2,
                    r: 0
                },
                "234": {
                    x: -0.85,
                    y: -46.05,
                    r: 0.017
                }
            })
            .addTimedChild(instance4, 0, 275, {
                "0": {
                    x: 22,
                    y: -308.85,
                    r: 0.034
                },
                "8": {
                    x: 18.65,
                    y: -308.5,
                    r: 0.005
                },
                "9": {
                    x: 16.3,
                    y: -308.35,
                    r: -0.014
                },
                "10": {
                    x: 14.8,
                    y: -308.2,
                    r: -0.026
                },
                "11": {
                    x: 14.2,
                    y: -308.05,
                    r: -0.03
                },
                "27": {
                    x: 18.55,
                    y: -308.5,
                    r: 0.005
                },
                "28": {
                    x: 21.05,
                    y: -308.7,
                    r: 0.027
                },
                "29": {
                    x: 22,
                    y: -308.85,
                    r: 0.034
                },
                "74": {
                    y: -311.6
                },
                "75": {
                    y: -309.95
                },
                "76": {
                    y: -308.85
                },
                "88": {
                    x: 25.486,
                    y: -308.867,
                    r: 0.058
                },
                "89": {
                    x: 27.52,
                    y: -308.905,
                    r: 0.072
                },
                "90": {
                    x: 28.2,
                    y: -308.85,
                    r: 0.077
                },
                "104": {
                    x: 20.578,
                    y: -307.4,
                    r: 0.02
                },
                "105": {
                    x: 15.018,
                    y: -306.228,
                    r: -0.02
                },
                "106": {
                    x: 11.771,
                    y: -305.59,
                    r: -0.044
                },
                "107": {
                    x: 10.6,
                    y: -305.35,
                    r: -0.053
                },
                "114": {
                    x: 9.073,
                    y: -290.978,
                    r: -0.085
                },
                "115": {
                    x: 8.45,
                    y: -286.15,
                    r: -0.096
                },
                "116": {
                    x: 16.932,
                    y: -300.299,
                    r: -0.017
                },
                "117": {
                    x: 19.7,
                    y: -304.95,
                    r: 0.009
                },
                "118": {
                    x: 21.4,
                    y: -307.85,
                    r: 0.027
                },
                "119": {
                    x: 22,
                    y: -308.85,
                    r: 0.034
                },
                "125": {
                    x: 18.8,
                    y: -304,
                    r: 0.012
                },
                "126": {
                    x: 16.65,
                    y: -287.65,
                    r: -0.014
                },
                "127": {
                    x: 22,
                    y: -308.85,
                    r: 0.034
                },
                "128": {
                    x: 29.556,
                    y: -313.947,
                    r: 0.06
                },
                "129": {
                    x: 33.967,
                    y: -316.93,
                    r: 0.076
                },
                "130": {
                    x: 35.5,
                    y: -317.9,
                    r: 0.081
                },
                "131": {
                    x: 28.043,
                    y: -312.936,
                    r: 0.055
                },
                "132": {
                    x: 23.549,
                    y: -309.878,
                    r: 0.039
                },
                "133": {
                    x: 22,
                    y: -308.85,
                    r: 0.034
                },
                "200": {
                    x: 21.5,
                    y: -308.75,
                    r: 0.03
                },
                "201": {
                    x: 20.25,
                    y: -308.6,
                    r: 0.019
                },
                "202": {
                    x: 18.05,
                    y: -308.3,
                    r: 0
                },
                "206": {
                    x: 17.55,
                    y: -308.6,
                    r: -0.005
                },
                "207": {
                    x: 16.7,
                    y: -308.95,
                    r: -0.011
                },
                "208": {
                    x: 16.3,
                    y: -308.8,
                    r: -0.013
                },
                "215": {
                    x: 20,
                    y: -308.85,
                    r: 0.017
                },
                "216": {
                    x: 21.15,
                    y: -308.8,
                    r: 0.026
                },
                "217": {
                    x: 21.75,
                    r: 0.032
                },
                "224": {
                    x: 20.1,
                    y: -308.45,
                    r: 0.024
                },
                "225": {
                    x: 19.15,
                    y: -308.05,
                    r: 0.019
                },
                "226": {
                    x: 18.8,
                    y: -308.2,
                    r: 0.017
                },
                "228": {
                    x: 16.45,
                    y: -303.65,
                    r: 0
                },
                "229": {
                    x: 24.4,
                    y: -316.75,
                    r: 0.059
                },
                "231": {
                    x: 18.8,
                    y: -308.2,
                    r: 0.017
                },
                "232": {
                    x: 21.1,
                    y: -310.45,
                    r: 0.034
                },
                "233": {
                    x: 16.45,
                    y: -303.65,
                    r: 0
                },
                "234": {
                    x: 18.8,
                    y: -308.2,
                    r: 0.017
                }
            })
            .addTimedChild(instance3, 0, 275, {
                "0": {
                    x: 152.1,
                    y: -257.2,
                    r: 1.099
                },
                "8": {
                    x: 150.05,
                    y: -260.65,
                    r: 1.071
                },
                "9": {
                    x: 148.55,
                    y: -263,
                    r: 1.051
                },
                "10": {
                    x: 147.7,
                    y: -264.45,
                    r: 1.039
                },
                "11": {
                    x: 147.35,
                    y: -264.85,
                    r: 1.035
                },
                "27": {
                    x: 149.95,
                    y: -260.65,
                    r: 1.071
                },
                "28": {
                    x: 151.5,
                    y: -258.1,
                    r: 1.092
                },
                "29": {
                    x: 152.1,
                    y: -257.2,
                    r: 1.099
                },
                "74": {
                    y: -259.95
                },
                "75": {
                    y: -258.3
                },
                "76": {
                    y: -257.2
                },
                "88": {
                    x: 154.239,
                    y: -254.124,
                    r: 1.124
                },
                "89": {
                    x: 155.524,
                    y: -252.315,
                    r: 1.138
                },
                "90": {
                    x: 155.9,
                    y: -251.55,
                    r: 1.143
                },
                "95": {
                    x: 157.885,
                    y: -248.388,
                    r: 1.055
                },
                "96": {
                    x: 158.5,
                    y: -247.3,
                    r: 1.025
                },
                "97": {
                    x: 164.25,
                    y: -248.4,
                    r: 1.078
                },
                "98": {
                    x: 226.8,
                    y: -273.85,
                    r: -0.331
                },
                "99": {
                    x: 249.2,
                    y: -271.25
                },
                "104": {
                    x: 243.708,
                    y: -280.316,
                    r: -0.386
                },
                "105": {
                    x: 239.794,
                    y: -286.615,
                    r: -0.425
                },
                "106": {
                    x: 237.482,
                    y: -290.378,
                    r: -0.448
                },
                "107": {
                    x: 236.65,
                    y: -291.6,
                    r: -0.456
                },
                "114": {
                    x: 235.391,
                    y: -284.708,
                    r: -0.489
                },
                "115": {
                    x: 234.85,
                    y: -282.25,
                    r: -0.5
                },
                "116": {
                    x: 255.312,
                    y: -380.802,
                    r: -1.978
                },
                "117": {
                    x: 261.75,
                    y: -413.6,
                    r: -2.467
                },
                "118": {
                    x: 241.8,
                    y: -459.9,
                    r: -2.509
                },
                "119": {
                    x: 236.05,
                    y: -463.1,
                    r: -2.525
                },
                "125": {
                    x: 225.35,
                    y: -464.8,
                    r: -2.19
                },
                "126": {
                    x: 218.85,
                    y: -453.85,
                    r: -2.216
                },
                "127": {
                    x: 231.95,
                    y: -465.15,
                    r: -2.168
                },
                "128": {
                    x: 240.644,
                    y: -477.413,
                    r: -2.246
                },
                "129": {
                    x: 245.765,
                    y: -484.651,
                    r: -2.293
                },
                "130": {
                    x: 247.4,
                    y: -487.05,
                    r: -2.308
                },
                "131": {
                    x: 239.959,
                    y: -469.068,
                    r: -2.133
                },
                "132": {
                    x: 235.511,
                    y: -458.31,
                    r: -2.029
                },
                "133": {
                    x: 234,
                    y: -454.65,
                    r: -1.995
                },
                "190": {
                    x: 152.1,
                    y: -257.2,
                    r: 1.099
                },
                "200": {
                    x: 151.95,
                    y: -257.65,
                    r: 1.092
                },
                "201": {
                    x: 151.5,
                    y: -258.9,
                    r: 1.069
                },
                "202": {
                    x: 150.75,
                    y: -260.85,
                    r: 1.03
                },
                "206": {
                    x: 150.25,
                    y: -262.75,
                    r: 1.029
                },
                "207": {
                    x: 149.5,
                    y: -265.25,
                    r: 1.027
                },
                "208": {
                    x: 149.25,
                    y: -266.1
                },
                "215": {
                    x: 150.95,
                    y: -260.5,
                    r: 1.073
                },
                "216": {
                    x: 151.5,
                    y: -258.7,
                    r: 1.088
                },
                "217": {
                    x: 151.75,
                    y: -257.55,
                    r: 1.096
                },
                "224": {
                    x: 150.5,
                    y: -258.15,
                    r: 1.089
                },
                "225": {
                    x: 149.75,
                    y: -258.5,
                    r: 1.084
                },
                "226": {
                    y: -258.7,
                    r: 1.083
                },
                "228": {
                    x: 148.25,
                    y: -256.45,
                    r: 1.065
                },
                "229": {
                    x: 157.45,
                    y: -264.75,
                    r: 1.125
                },
                "231": {
                    x: 149.75,
                    y: -258.7,
                    r: 1.083
                },
                "232": {
                    x: 155.5,
                    y: -261.9,
                    r: 1.099
                },
                "233": {
                    x: 148.25,
                    y: -256.45,
                    r: 1.065
                },
                "234": {
                    x: 149.75,
                    y: -258.7,
                    r: 1.083
                }
            })
            .addTimedChild(instance2, 0, 8, {
                "0": {
                    x: -5.2,
                    y: -58.2,
                    r: 0.034
                }
            })
            .addTimedChild(instance18, 8, 1)
            .addTimedChild(instance20, 9, 1)
            .addTimedChild(instance23, 10, 1)
            .addTimedChild(instance26, 11, 16, {
                "11": {
                    x: 3.15,
                    y: -56.15,
                    r: -0.03
                }
            })
            .addTimedChild(instance31, 27, 1)
            .addTimedChild(instance33, 28, 1)
            .addTimedChild(instance36, 29, 58, {
                "29": {
                    x: -5.2,
                    y: -58.2,
                    r: 0.034
                },
                "74": {
                    y: -60.95
                },
                "75": {
                    y: -59.3
                },
                "76": {
                    y: -58.2
                }
            })
            .addTimedChild(instance50, 87, 1)
            .addTimedChild(instance53, 88, 1)
            .addTimedChild(instance56, 89, 1)
            .addTimedChild(instance59, 90, 4, {
                "90": {
                    x: -9.85,
                    y: -59.6,
                    r: 0.077
                }
            })
            .addTimedChild(instance64, 94, 1)
            .addTimedChild(instance67, 95, 1)
            .addTimedChild(instance69, 96, 1, {
                "96": {
                    x: -9.85,
                    y: -59.6,
                    r: 0.077
                }
            })
            .addTimedChild(instance71, 97, 1, {
                "97": {
                    x: -9.85,
                    y: -59.6,
                    r: 0.077
                }
            })
            .addTimedChild(instance73, 98, 1, {
                "98": {
                    x: -9.85,
                    y: -59.6,
                    r: 0.077
                }
            })
            .addTimedChild(instance75, 99, 4, {
                "99": {
                    x: -9.85,
                    y: -59.6,
                    r: 0.077
                }
            })
            .addTimedChild(instance77, 103, 1)
            .addTimedChild(instance80, 104, 1)
            .addTimedChild(instance83, 105, 1)
            .addTimedChild(instance86, 106, 1)
            .addTimedChild(instance89, 107, 6, {
                "107": {
                    x: -12.55,
                    y: -59.5,
                    r: -0.009
                }
            })
            .addTimedChild(instance92, 113, 1)
            .addTimedChild(instance95, 114, 1)
            .addTimedChild(instance98, 115, 1)
            .addTimedChild(instance101, 116, 1)
            .addTimedChild(instance104, 117, 1, {
                "117": {
                    x: 1.05,
                    y: -63.4,
                    r: 0.034
                }
            })
            .addTimedChild(instance107, 118, 1, {
                "118": {
                    x: -5.2,
                    y: -58.2,
                    r: 0.034
                }
            })
            .addTimedChild(instance110, 119, 6, {
                "119": {
                    x: -5.2,
                    y: -58.2,
                    r: 0.034
                }
            })
            .addTimedChild(instance114, 125, 1, {
                "125": {
                    x: -2.95,
                    y: -52.85,
                    r: 0.012
                }
            })
            .addTimedChild(instance116, 126, 1, {
                "126": {
                    x: 1.5,
                    y: -36,
                    r: -0.014
                }
            })
            .addTimedChild(instance118, 127, 1)
            .addTimedChild(instance121, 128, 1)
            .addTimedChild(instance124, 129, 1)
            .addTimedChild(instance127, 130, 1)
            .addTimedChild(instance130, 131, 1)
            .addTimedChild(instance133, 132, 1)
            .addTimedChild(instance136, 133, 57, {
                "133": {
                    x: -5.2,
                    y: -58.2,
                    r: 0.034
                }
            })
            .addTimedChild(instance141, 190, 10, {
                "190": {
                    x: -5.2,
                    y: -58.2,
                    r: 0.034
                }
            })
            .addTimedChild(instance146, 200, 1, {
                "200": {
                    x: 0.3,
                    y: 0.3
                }
            })
            .addTimedChild(instance149, 201, 5, {
                "201": {
                    x: 1.5,
                    y: -54.55,
                    sx: 0.998,
                    r: 0
                },
                "202": {
                    x: 7.5,
                    y: -51.5,
                    sx: 1,
                    r: -0.035
                }
            })
            .addTimedChild(instance160, 206, 2, {
                "206": {
                    x: 0,
                    y: 0,
                    sx: 1
                },
                "207": {
                    x: -0.9,
                    y: -2.6,
                    sx: 1.001
                }
            })
            .addTimedChild(instance165, 208, 7, {
                "208": {
                    x: 6.85,
                    y: -56.25,
                    r: -0.039
                }
            })
            .addTimedChild(instance175, 215, 1, {
                "215": {
                    x: 1.4,
                    y: 0.25,
                    sx: 0.999
                }
            })
            .addTimedChild(instance178, 216, 9, {
                "216": {
                    x: -0.5,
                    y: -1,
                    sx: 1.002,
                    sy: 0.998
                },
                "217": {
                    x: 1,
                    y: 0.75,
                    sx: 0.998,
                    sy: 1.001
                },
                "224": {
                    x: -1.3,
                    y: -0.35,
                    sx: 1.001,
                    sy: 0.999
                }
            })
            .addTimedChild(instance188, 225, 1)
            .addTimedChild(instance191, 226, 3, {
                "226": {
                    x: -4.25,
                    y: -57.15,
                    r: 0.017
                },
                "228": {
                    x: -2.15,
                    y: -52.25,
                    r: 0
                }
            })
            .addTimedChild(instance195, 229, 2, {
                "229": {
                    x: -9.1,
                    y: -66.85,
                    r: 0.059
                }
            })
            .addTimedChild(instance198, 231, 1, {
                "231": {
                    x: -4.25,
                    y: -57.15,
                    r: 0.017
                }
            })
            .addTimedChild(instance201, 232, 1, {
                "232": {
                    x: -6.05,
                    y: -59.85,
                    r: 0.034
                }
            })
            .addTimedChild(instance204, 233, 42, {
                "233": {
                    x: -2.15,
                    y: -52.25,
                    r: 0
                },
                "234": {
                    x: -4.25,
                    y: -57.15,
                    r: 0.017
                }
            })
            .addTimedChild(instance1, 0, 275, {
                "0": {
                    x: 23.75,
                    y: -304.15,
                    r: 0.034
                },
                "8": {
                    x: 20.5,
                    y: -303.9,
                    r: 0.005
                },
                "9": {
                    x: 18.15,
                    y: -303.75,
                    r: -0.014
                },
                "10": {
                    x: 16.8,
                    y: -303.55,
                    r: -0.026
                },
                "11": {
                    x: 16.3,
                    y: -303.45,
                    r: -0.03
                },
                "27": {
                    x: 20.45,
                    y: -303.85,
                    r: 0.005
                },
                "28": {
                    x: 22.9,
                    y: -304.05,
                    r: 0.027
                },
                "29": {
                    x: 23.75,
                    y: -304.15,
                    r: 0.034
                },
                "74": {
                    y: -306.9
                },
                "75": {
                    y: -305.25
                },
                "76": {
                    y: -304.15
                },
                "88": {
                    x: 27.172,
                    y: -304.176,
                    r: 0.058
                },
                "89": {
                    x: 29.137,
                    y: -304.091,
                    r: 0.072
                },
                "90": {
                    x: 29.75,
                    y: -304.05,
                    r: 0.077
                },
                "104": {
                    x: 22.399,
                    y: -302.697,
                    r: 0.02
                },
                "105": {
                    x: 17.028,
                    y: -301.651,
                    r: -0.02
                },
                "106": {
                    x: 13.842,
                    y: -301.064,
                    r: -0.044
                },
                "107": {
                    x: 12.75,
                    y: -300.85,
                    r: -0.053
                },
                "114": {
                    x: 11.319,
                    y: -286.551,
                    r: -0.085
                },
                "115": {
                    x: 10.8,
                    y: -281.75,
                    r: -0.096
                },
                "116": {
                    x: 18.979,
                    y: -295.828,
                    r: -0.017
                },
                "117": {
                    x: 21.55,
                    y: -300.3,
                    r: 0.009
                },
                "118": {
                    x: 23.15,
                    y: -303.1,
                    r: 0.027
                },
                "119": {
                    x: 23.75,
                    y: -304.15,
                    r: 0.034
                },
                "125": {
                    x: 20.65,
                    y: -299.35,
                    r: 0.012
                },
                "126": {
                    x: 18.6,
                    y: -283.05,
                    r: -0.014
                },
                "127": {
                    x: 23.75,
                    y: -304.15,
                    r: 0.034
                },
                "128": {
                    x: 31.13,
                    y: -309.202,
                    r: 0.06
                },
                "129": {
                    x: 35.566,
                    y: -312.211,
                    r: 0.076
                },
                "130": {
                    x: 36.95,
                    y: -313.1,
                    r: 0.081
                },
                "131": {
                    x: 29.67,
                    y: -308.177,
                    r: 0.055
                },
                "132": {
                    x: 25.201,
                    y: -305.093,
                    r: 0.039
                },
                "133": {
                    x: 23.75,
                    y: -304.15,
                    r: 0.034
                },
                "200": {
                    x: 23.3,
                    y: -304.05,
                    r: 0.03
                },
                "201": {
                    x: 22.1,
                    y: -303.9,
                    r: 0.019
                },
                "202": {
                    x: 19.95,
                    y: -303.6,
                    r: 0
                },
                "206": {
                    x: 19.4,
                    y: -303.85,
                    r: -0.005
                },
                "207": {
                    x: 18.6,
                    y: -304.15,
                    r: -0.011
                },
                "208": {
                    x: 18.25,
                    y: -304.2,
                    r: -0.013
                },
                "215": {
                    x: 21.8,
                    y: -304.25,
                    r: 0.017
                },
                "216": {
                    x: 22.9,
                    y: -304.2,
                    r: 0.026
                },
                "217": {
                    x: 23.55,
                    y: -304.15,
                    r: 0.032
                },
                "224": {
                    x: 22,
                    y: -303.8,
                    r: 0.024
                },
                "225": {
                    x: 21,
                    y: -303.55,
                    r: 0.019
                },
                "226": {
                    x: 20.65,
                    r: 0.017
                },
                "228": {
                    x: 18.35,
                    y: -299.05,
                    r: 0
                },
                "229": {
                    x: 26,
                    y: -312,
                    r: 0.059
                },
                "231": {
                    x: 20.65,
                    y: -303.55,
                    r: 0.017
                },
                "232": {
                    x: 22.9,
                    y: -305.8,
                    r: 0.034
                },
                "233": {
                    x: 18.35,
                    y: -299.05,
                    r: 0
                },
                "234": {
                    x: 20.65,
                    y: -303.55,
                    r: 0.017
                }
            });
    });

    lib.BG_LAMP = Container.extend(function () {
        Container.call(this);
        var instance7 = new Graphics()
            .drawCommands(shapes.s04[501]);
        var instance6 = new Graphics()
            .drawCommands(shapes.s04[500]);
        var instance5 = new Graphics()
            .drawCommands(shapes.s04[499]);
        var instance4 = new Graphics()
            .drawCommands(shapes.s04[498]);
        var instance3 = new Graphics()
            .drawCommands(shapes.s04[497]);
        var instance2 = new Graphics()
            .drawCommands(shapes.s04[496]);
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[495]);
        this.addChild(instance7, instance6, instance5, instance4, instance3, instance2, instance1);
    });

    var Graphic99 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 29, loop: false });
        var instance2 = new Sprite(fromFrame("REPLACE_CREATURES_BLINK"));
        var instance1 = new Sprite(fromFrame("REPLACE_CREATURES"));
        var instance3 = new Sprite(fromFrame("REPLACE_CREATURES"));
        this.addTimedChild(instance2)
            .addTimedChild(instance1, 0, 12)
            .addTimedChild(instance3, 14, 15);
    });

    lib.BG_MAIN = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.s04[502]);
        this.addChild(instance1);
    });

    var Graphic105 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 275, loop: false });
        var instance9 = new lib.BG_MAIN();
        var instance28 = new Graphic99(MovieClip.SYNCHED);
        var instance8 = new lib.BG_LAMP();
        var instance7 = new Graphics()
            .drawCommands(shapes.s04[494]);
        var instance23 = new Graphics()
            .drawCommands(shapes.s04[494]);
        var instance6 = new Graphic83(MovieClip.SYNCHED)
            .setTransform(152.25, 741.35, 1.4, 1.4);
        var instance5 = new Graphic82(MovieClip.SYNCHED);
        var instance4 = new Graphic81(MovieClip.SYNCHED);
        var instance10 = new Graphic84(MovieClip.SYNCHED);
        var instance11 = new Graphic85(MovieClip.SYNCHED);
        var instance12 = new Graphic86(MovieClip.SYNCHED);
        var instance13 = new Graphic87(MovieClip.SYNCHED);
        var instance14 = new Graphic88(MovieClip.SYNCHED);
        var instance16 = new Graphic90(MovieClip.SYNCHED);
        var instance15 = new Graphic89(MovieClip.SYNCHED);
        var instance17 = new Graphic91(MovieClip.SYNCHED);
        var instance3 = new lib.BG_PLANT_CLEAN();
        var instance2 = new lib.BG_OL_TABLE();
        var instance1 = new Graphic80(MovieClip.SYNCHED);
        var instance18 = new Graphic92(MovieClip.SYNCHED);
        var instance22 = new Graphic94(MovieClip.SYNCHED);
        var instance24 = new Graphic95(MovieClip.SYNCHED);
        var instance25 = new Graphic96(MovieClip.SYNCHED);
        var instance26 = new Graphic97(MovieClip.SYNCHED);
        var instance27 = new Graphic98(MovieClip.SYNCHED);
        var instance29 = new Graphic100(MovieClip.SYNCHED);
        var instance30 = new Graphic101(MovieClip.SYNCHED);
        var instance31 = new Graphic102(MovieClip.SYNCHED);
        var instance32 = new Graphic103(MovieClip.SYNCHED);
        var instance33 = new Graphic104(MovieClip.SYNCHED);
        var instance21 = new Graphic93(MovieClip.SYNCHED)
            .setTransform(1732.3, 779.1, 1.883, 1.883);
        var instance20 = new lib.BG_PLANT_CLEAN()
            .setTransform(-1229.85, 414.65);
        var instance19 = new lib.BG_OL_TABLE()
            .setTransform(2108.3, 784.2);
        this.addTimedChild(instance9, 0, 275, {
                "0": {
                    x: 442.85,
                    y: -59.05
                }
            })
            .addTimedChild(instance28, 224, 29, {
                "224": {
                    x: 1999.3,
                    y: -64.25,
                    sx: 1.236,
                    sy: 1.236
                },
                "225": {
                    x: 2001.92,
                    y: -231.849
                },
                "226": {
                    x: 2003.77,
                    y: -350.199
                },
                "227": {
                    x: 2004.87,
                    y: -421.099
                },
                "228": {
                    x: 2005.2,
                    y: -444.9
                },
                "248": {
                    x: 2004.969,
                    y: -429.543
                },
                "249": {
                    x: 2004.269,
                    y: -383.593
                },
                "250": {
                    x: 2003.069,
                    y: -307.343
                },
                "251": {
                    x: 2001.419,
                    y: -200.893
                },
                "252": {
                    x: 1999.3,
                    y: -64.25
                }
            })
            .addTimedChild(instance8, 0, 275, {
                "0": {
                    x: 487.55,
                    y: -58.7
                }
            })
            .addTimedChild(instance7, 0, 133)
            .addTimedChild(instance23, 190, 85)
            .addTimedChild(instance6)
            .addTimedChild(instance5, 0, 275, {
                "0": {
                    x: -345.6,
                    y: 348.7,
                    sx: 1.4,
                    sy: 1.4,
                    ky: 3.142
                }
            })
            .addTimedChild(instance4, 0, 4, {
                "0": {
                    x: -899.85,
                    y: 339.35,
                    sx: 1.927,
                    sy: 1.927
                }
            })
            .addTimedChild(instance10, 2, 4, {
                "2": {
                    x: 1002.35,
                    y: -232.5,
                    sx: 1.927,
                    sy: 1.927
                }
            })
            .addTimedChild(instance11, 8, 4, {
                "8": {
                    x: 819.9,
                    y: 317.4,
                    sx: 1.927,
                    sy: 1.927
                }
            })
            .addTimedChild(instance12, 11, 4, {
                "11": {
                    x: -1028.9,
                    y: 511.05,
                    sx: 1.927,
                    sy: 1.927
                }
            })
            .addTimedChild(instance13, 17, 4, {
                "17": {
                    x: 1254.45,
                    y: 114.1,
                    sx: 1.927,
                    sy: 1.927
                }
            })
            .addTimedChild(instance14, 23, 4, {
                "23": {
                    x: -1028.9,
                    y: 511.05,
                    sx: 1.927,
                    sy: 1.927
                }
            })
            .addTimedChild(instance16, 31, 4, {
                "31": {
                    x: -542.45,
                    y: -61.05,
                    sx: 1.927,
                    sy: 1.927
                }
            })
            .addTimedChild(instance15, 28, 4, {
                "28": {
                    x: 892.9,
                    y: 640.05,
                    sx: 1.927,
                    sy: 1.927
                }
            })
            .addTimedChild(instance17, 36, 4, {
                "36": {
                    x: -204.95,
                    y: 582.45,
                    sx: 1.927,
                    sy: 1.927
                }
            })
            .addTimedChild(instance3, 0, 40, {
                "0": {
                    x: -1229.85,
                    y: 414.65
                }
            })
            .addTimedChild(instance2, 0, 40, {
                "0": {
                    x: 2108.3,
                    y: 784.2
                }
            })
            .addTimedChild(instance1, 0, 4, {
                "0": {
                    x: 197.55,
                    y: 67.35,
                    a: 1
                },
                "1": {
                    a: 0.67
                },
                "2": {
                    a: 0.33
                },
                "3": {
                    a: 0
                }
            })
            .addTimedChild(instance18, 80, 4, {
                "80": {
                    x: 69.7,
                    y: -306.15,
                    sx: 1.927,
                    sy: 1.927
                }
            })
            .addTimedChild(instance22, 190, 4, {
                "190": {
                    x: 793.45,
                    y: -219.65,
                    sx: 1.927,
                    sy: 1.927
                }
            })
            .addTimedChild(instance24, 195, 4, {
                "195": {
                    x: -899.85,
                    y: 339.35,
                    sx: 1.927,
                    sy: 1.927
                }
            })
            .addTimedChild(instance25, 205, 4, {
                "205": {
                    x: -899.85,
                    y: 339.35,
                    sx: 1.927,
                    sy: 1.927
                }
            })
            .addTimedChild(instance26, 218, 4, {
                "218": {
                    x: -1028.9,
                    y: 511.05,
                    sx: 1.927,
                    sy: 1.927
                }
            })
            .addTimedChild(instance27, 224, 4, {
                "224": {
                    x: -204.95,
                    y: 582.45,
                    sx: 1.927,
                    sy: 1.927
                }
            })
            .addTimedChild(instance29, 228, 4, {
                "228": {
                    x: -529.05,
                    y: 571.45,
                    sx: 1.927,
                    sy: 1.927
                }
            })
            .addTimedChild(instance30, 238, 4, {
                "238": {
                    x: 793.45,
                    y: -219.65,
                    sx: 1.927,
                    sy: 1.927
                }
            })
            .addTimedChild(instance31, 246, 4, {
                "246": {
                    x: 1683.4,
                    y: 615.4,
                    sx: 1.927,
                    sy: 1.927
                }
            })
            .addTimedChild(instance32, 253, 4, {
                "253": {
                    x: 1226.05,
                    y: -470.9,
                    sx: 1.927,
                    sy: 1.927
                }
            })
            .addTimedChild(instance33, 262, 4, {
                "262": {
                    x: 476.2,
                    y: -355.6,
                    sx: 1.927,
                    sy: 1.927
                }
            })
            .addTimedChild(instance21, 190, 85)
            .addTimedChild(instance20, 190, 85)
            .addTimedChild(instance19, 190, 85);
    });

    lib.s04 = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 275,
            framerate: 12,
            loop: false
        });
        var instance1 = new Graphic105(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 275, {
                "0": {
                    x: 474.45,
                    y: 271.95,
                    sx: 0.389,
                    sy: 0.389
                },
                "1": {
                    x: 474.643,
                    y: 271.996
                },
                "2": {
                    x: 475.093
                },
                "3": {
                    x: 475.743
                },
                "4": {
                    x: 476.593
                },
                "5": {
                    x: 477.693
                },
                "6": {
                    x: 479.043
                },
                "7": {
                    x: 480.693
                },
                "8": {
                    x: 482.593
                },
                "9": {
                    x: 484.843
                },
                "10": {
                    x: 487.343
                },
                "11": {
                    x: 490.093
                },
                "12": {
                    x: 493.143
                },
                "13": {
                    x: 496.478,
                    y: 272.038
                },
                "14": {
                    x: 499.928
                },
                "15": {
                    x: 503.478
                },
                "16": {
                    x: 507.078
                },
                "17": {
                    x: 510.628
                },
                "18": {
                    x: 514.028
                },
                "19": {
                    x: 517.25,
                    y: 271.95
                },
                "20": {
                    x: 520.292,
                    y: 271.946
                },
                "21": {
                    x: 523.092
                },
                "22": {
                    x: 525.642,
                    y: 271.896
                },
                "23": {
                    x: 527.942
                },
                "24": {
                    x: 529.95,
                    y: 271.95
                },
                "25": {
                    x: 531.792,
                    y: 271.996
                },
                "26": {
                    x: 533.342
                },
                "27": {
                    x: 534.616,
                    y: 271.958
                },
                "28": {
                    x: 535.666
                },
                "29": {
                    x: 536.516
                },
                "30": {
                    x: 537.166
                },
                "31": {
                    x: 537.616
                },
                "32": {
                    x: 537.9,
                    y: 271.95
                },
                "40": {
                    x: 565.55,
                    y: 780.25,
                    sx: 0.934,
                    sy: 0.934
                },
                "74": {
                    x: 377.3,
                    y: 235.5,
                    sx: 0.732,
                    sy: 0.732
                },
                "133": {
                    x: 565.55,
                    y: 739.45,
                    sx: 0.934,
                    sy: 0.934
                },
                "190": {
                    x: 666.65,
                    y: 282.2,
                    sx: 0.362,
                    sy: 0.362
                },
                "207": {
                    x: 659.64,
                    y: 282.246
                },
                "208": {
                    x: 636.89
                },
                "209": {
                    x: 596.34
                },
                "210": {
                    x: 536.99
                },
                "211": {
                    x: 460.69
                },
                "212": {
                    x: 373.84
                },
                "213": {
                    x: 287.04
                },
                "214": {
                    x: 210.74
                },
                "215": {
                    x: 151.39
                },
                "216": {
                    x: 110.84
                },
                "217": {
                    x: 88.09
                },
                "218": {
                    x: 80.95,
                    y: 282.2
                }
            })
            .addAction(function () {
                /* this.emit('s04_started');*/
                console.log('call playTrack');
                EventBus.$emit('playTrack', 's04');
            }, 1)
            .addAction(function () {
                 console.log('play mammoth track');
                 EventBus.$emit('playTrack', 'mam_laugh');
            }, 220)
            .addAction(function () {
                /* this.emit('s04_end');*/
                EventBus.$emit('endOfAnimation');
            }, 274);
    });

    lib.s04.assets = window.$sceneSettings;
    
})(PIXI, lib = lib || {});
var lib;
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        stage: lib.s04,
        background: 0x99cccc,
        width: 1024,
        height: 576,
        framerate: 12,
        totalFrames: 275,
        library: lib
    };
}