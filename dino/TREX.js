(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Container = PIXI.Container;
    var Graphics = PIXI.Graphics;
    var shapes = PIXI.animate.ShapesCache;

    var Graphic5 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 231, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[0]);
        this.addTimedChild(instance1);
    });

    var Graphic6 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 231, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[0]);
        this.addTimedChild(instance1);
    });

    var Graphic1 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 231, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[3]);
        this.addTimedChild(instance1);
    });

    var Graphic2 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 231, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[3]);
        this.addTimedChild(instance1);
    });

    var Graphic7 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 231, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.TREX[2])
            .setRenderable(false);
        var instance4 = new Graphic2(MovieClip.SYNCHED)
            .setMask(instance2);
        var instance3 = new Graphic1(MovieClip.SYNCHED);
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[1]);
        this.addTimedChild(instance2)
            .addTimedChild(instance4, 0, 231, {
                "0": {
                    x: -2.2,
                    y: 66.95,
                    sx: 0.66,
                    sy: 0.66
                },
                "17": {
                    x: -2.25,
                    y: 63.699
                },
                "18": {
                    x: -2.2,
                    y: 53.75
                },
                "22": {
                    x: -2.25,
                    y: 55.249
                },
                "23": {
                    y: 59.649
                },
                "24": {
                    x: -2.2,
                    y: 66.95
                },
                "121": {
                    x: -2.25,
                    y: 63.699
                },
                "122": {
                    x: -2.2,
                    y: 53.75
                },
                "126": {
                    x: -2.25,
                    y: 55.249
                },
                "127": {
                    y: 59.649
                },
                "128": {
                    x: -2.2,
                    y: 66.95
                },
                "185": {
                    x: -2.25,
                    y: 63.699
                },
                "186": {
                    x: -2.2,
                    y: 53.75
                },
                "190": {
                    x: -2.25,
                    y: 55.249
                },
                "191": {
                    y: 59.649
                },
                "192": {
                    x: -2.2,
                    y: 66.95
                },
                "224": {
                    x: -2.25,
                    y: 63.699
                },
                "225": {
                    x: -2.2,
                    y: 53.75
                },
                "229": {
                    x: -2.25,
                    y: 55.249
                },
                "230": {
                    y: 59.649
                }
            })
            .addTimedChild(instance3, 0, 231, {
                "0": {
                    x: -2.2,
                    y: -26.4,
                    sx: 0.66,
                    sy: 0.66
                },
                "17": {
                    x: -2.25,
                    y: -16.55
                },
                "18": {
                    x: -2.2,
                    y: 13.2
                },
                "22": {
                    x: -2.25,
                    y: 8.75
                },
                "23": {
                    y: -4.45
                },
                "24": {
                    x: -2.2,
                    y: -26.4
                },
                "121": {
                    x: -2.25,
                    y: -16.55
                },
                "122": {
                    x: -2.2,
                    y: 13.2
                },
                "126": {
                    x: -2.25,
                    y: 8.75
                },
                "127": {
                    y: -4.45
                },
                "128": {
                    x: -2.2,
                    y: -26.4
                },
                "185": {
                    x: -2.25,
                    y: -16.55
                },
                "186": {
                    x: -2.2,
                    y: 13.2
                },
                "190": {
                    x: -2.25,
                    y: 8.75
                },
                "191": {
                    y: -4.45
                },
                "192": {
                    x: -2.2,
                    y: -26.4
                },
                "224": {
                    x: -2.25,
                    y: -16.55
                },
                "225": {
                    x: -2.2,
                    y: 13.2
                },
                "229": {
                    x: -2.25,
                    y: 8.75
                },
                "230": {
                    y: -4.45
                }
            })
            .addTimedChild(instance1);
    });

    var Graphic3 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 231, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[3]);
        this.addTimedChild(instance1);
    });

    var Graphic4 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 231, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[3]);
        this.addTimedChild(instance1);
    });

    var Graphic8 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 231, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.TREX[2])
            .setRenderable(false);
        var instance4 = new Graphic4(MovieClip.SYNCHED)
            .setMask(instance2);
        var instance3 = new Graphic3(MovieClip.SYNCHED);
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[1]);
        this.addTimedChild(instance2)
            .addTimedChild(instance4, 0, 231, {
                "0": {
                    x: -2.2,
                    y: 66.95,
                    sx: 0.66,
                    sy: 0.66
                },
                "17": {
                    x: -2.25,
                    y: 63.699
                },
                "18": {
                    x: -2.2,
                    y: 53.75
                },
                "22": {
                    x: -2.25,
                    y: 55.249
                },
                "23": {
                    y: 59.649
                },
                "24": {
                    x: -2.2,
                    y: 66.95
                },
                "121": {
                    x: -2.25,
                    y: 63.699
                },
                "122": {
                    x: -2.2,
                    y: 53.75
                },
                "126": {
                    x: -2.25,
                    y: 55.249
                },
                "127": {
                    y: 59.649
                },
                "128": {
                    x: -2.2,
                    y: 66.95
                },
                "185": {
                    x: -2.25,
                    y: 63.699
                },
                "186": {
                    x: -2.2,
                    y: 53.75
                },
                "190": {
                    x: -2.25,
                    y: 55.249
                },
                "191": {
                    y: 59.649
                },
                "192": {
                    x: -2.2,
                    y: 66.95
                },
                "224": {
                    x: -2.25,
                    y: 63.699
                },
                "225": {
                    x: -2.2,
                    y: 53.75
                },
                "229": {
                    x: -2.25,
                    y: 55.249
                },
                "230": {
                    y: 59.649
                }
            })
            .addTimedChild(instance3, 0, 231, {
                "0": {
                    x: -2.2,
                    y: -26.4,
                    sx: 0.66,
                    sy: 0.66
                },
                "17": {
                    x: -2.25,
                    y: -16.55
                },
                "18": {
                    x: -2.2,
                    y: 13.2
                },
                "22": {
                    x: -2.25,
                    y: 8.75
                },
                "23": {
                    y: -4.45
                },
                "24": {
                    x: -2.2,
                    y: -26.4
                },
                "121": {
                    x: -2.25,
                    y: -16.55
                },
                "122": {
                    x: -2.2,
                    y: 13.2
                },
                "126": {
                    x: -2.25,
                    y: 8.75
                },
                "127": {
                    y: -4.45
                },
                "128": {
                    x: -2.2,
                    y: -26.4
                },
                "185": {
                    x: -2.25,
                    y: -16.55
                },
                "186": {
                    x: -2.2,
                    y: 13.2
                },
                "190": {
                    x: -2.25,
                    y: 8.75
                },
                "191": {
                    y: -4.45
                },
                "192": {
                    x: -2.2,
                    y: -26.4
                },
                "224": {
                    x: -2.25,
                    y: -16.55
                },
                "225": {
                    x: -2.2,
                    y: 13.2
                },
                "229": {
                    x: -2.25,
                    y: 8.75
                },
                "230": {
                    y: -4.45
                }
            })
            .addTimedChild(instance1);
    });

    var Graphic9 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 231, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[4]);
        this.addTimedChild(instance1);
    });

    var Graphic10 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 231, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[4]);
        this.addTimedChild(instance1);
    });

    var Graphic11 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 231, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[4]);
        this.addTimedChild(instance1);
    });

    var Graphic12 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 231, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[4]);
        this.addTimedChild(instance1);
    });

    var Graphic13 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 231, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[5]);
        this.addTimedChild(instance1);
    });

    var Graphic14 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 231, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[5]);
        this.addTimedChild(instance1);
    });

    lib.TREX_teeth = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[7]);
        this.addChild(instance1);
    });

    var Graphic15 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 231, loop: false });
        var instance2 = new lib.TREX_teeth()
            .setTransform(-231.5, -26.85);
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[6]);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic16 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 231, loop: false });
        var instance5 = new lib.TREX_teeth()
            .setTransform(31.25, 141.75, 1, 1, 0, 3.16, -0.018);
        var instance4 = new Graphics()
            .drawCommands(shapes.TREX[11]);
        var instance3 = new Graphics()
            .drawCommands(shapes.TREX[10]);
        var instance2 = new Graphics()
            .drawCommands(shapes.TREX[9]);
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[8]);
        this.addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic17 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 231, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[12]);
        this.addTimedChild(instance1);
    });

    var Graphic52 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 231, loop: false });
        var instance13 = new Graphic17(MovieClip.SYNCHED);
        var instance12 = new Graphic16(MovieClip.SYNCHED)
            .setTransform(-287.2, -160.95);
        var instance11 = new Graphic15(MovieClip.SYNCHED);
        var instance10 = new Graphic14(MovieClip.SYNCHED)
            .setTransform(-141.7, -156.25, 1, 1, -0.043);
        var instance9 = new Graphic13(MovieClip.SYNCHED)
            .setTransform(-61.3, -157, 0.998, 0.998, 0, -0.076, -3.066);
        var instance8 = new Graphic12(MovieClip.SYNCHED)
            .setTransform(-79.3, -136.6, 1, 1, 0, 0, 3.142);
        var instance7 = new Graphic11(MovieClip.SYNCHED)
            .setTransform(-125.25, -136.6);
        var instance6 = new Graphic10(MovieClip.SYNCHED);
        var instance5 = new Graphic9(MovieClip.SYNCHED);
        var instance4 = new Graphic8(MovieClip.SYNCHED)
            .setTransform(-80.65, -136.65, 1, 1, 0, 0, 3.142);
        var instance3 = new Graphic7(MovieClip.SYNCHED)
            .setTransform(-123.9, -136.65);
        var instance2 = new Graphic6(MovieClip.SYNCHED);
        var instance1 = new Graphic5(MovieClip.SYNCHED);
        this.addTimedChild(instance13, 0, 231, {
                "0": {
                    x: -138.85,
                    y: -69,
                    sx: 1.069,
                    sy: 0.891,
                    kx: -0.319,
                    ky: 0.033
                },
                "25": {
                    x: -138.989,
                    y: -68.158,
                    sx: 1.068,
                    sy: 0.858,
                    kx: -0.323
                },
                "26": {
                    x: -139.154,
                    y: -67.374,
                    sy: 0.825,
                    kx: -0.328
                },
                "27": {
                    x: -139.342,
                    y: -66.445,
                    sy: 0.793,
                    kx: -0.333
                },
                "28": {
                    x: -139.553,
                    y: -65.574,
                    sy: 0.76,
                    kx: -0.337
                },
                "29": {
                    x: -139.683,
                    y: -64.81,
                    sy: 0.727,
                    kx: -0.342
                },
                "30": {
                    x: -140,
                    y: -63.8,
                    sx: 1.069,
                    sy: 0.694,
                    kx: -0.346
                }
            })
            .addTimedChild(instance12)
            .addTimedChild(instance11, 0, 231, {
                "0": {
                    x: -12.45,
                    y: -35.25,
                    r: 0.026
                },
                "25": {
                    x: -12.542,
                    y: -35.292,
                    r: 0.037
                },
                "26": {
                    x: -12.533,
                    y: -35.278,
                    r: 0.049
                },
                "27": {
                    x: -12.523,
                    y: -35.309,
                    r: 0.06
                },
                "28": {
                    x: -12.511,
                    y: -35.287,
                    r: 0.072
                },
                "29": {
                    x: -12.547,
                    y: -35.309,
                    r: 0.083
                },
                "30": {
                    x: -12.45,
                    y: -35.25,
                    r: 0.095
                },
                "126": {
                    x: -12.521,
                    y: -35.324,
                    r: 0.093
                },
                "127": {
                    x: -12.528,
                    y: -35.349,
                    r: 0.087
                },
                "128": {
                    x: -12.492,
                    y: -35.334,
                    r: 0.078
                },
                "129": {
                    x: -12.514,
                    y: -35.343,
                    r: 0.068
                },
                "130": {
                    x: -12.49,
                    y: -35.346,
                    r: 0.057
                },
                "131": {
                    x: -12.52,
                    y: -35.314,
                    r: 0.047
                },
                "132": {
                    x: -12.518,
                    y: -35.311,
                    r: 0.04
                },
                "133": {
                    x: -12.52,
                    y: -35.348,
                    r: 0.036
                },
                "134": {
                    x: -12.45,
                    y: -35.25,
                    r: 0.034
                }
            })
            .addTimedChild(instance10)
            .addTimedChild(instance9)
            .addTimedChild(instance8)
            .addTimedChild(instance7)
            .addTimedChild(instance6, 0, 231, {
                "0": {
                    x: -85.2,
                    y: -123.6,
                    sx: 0.3,
                    sy: 0.3,
                    ky: 3.142,
                    c: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                "24": {
                    x: -84.849,
                    y: -123.398
                },
                "25": {
                    x: -84.399,
                    y: -123.098
                },
                "26": {
                    x: -83.999,
                    y: -122.848
                },
                "27": {
                    x: -83.549,
                    y: -122.598
                },
                "28": {
                    x: -83.149,
                    y: -122.348
                },
                "29": {
                    x: -82.699,
                    y: -122.048
                },
                "30": {
                    x: -82.25,
                    y: -121.75
                },
                "188": {
                    x: -86.25,
                    y: -123.55
                },
                "215": {
                    x: -86.449,
                    y: -124.298
                },
                "216": {
                    x: -86.599,
                    y: -124.998
                },
                "217": {
                    x: -86.699,
                    y: -125.698
                },
                "218": {
                    x: -86.849,
                    y: -126.398
                },
                "219": {
                    x: -86.999,
                    y: -127.098
                },
                "220": {
                    x: -87.1,
                    y: -127.75
                }
            })
            .addTimedChild(instance5, 0, 231, {
                "0": {
                    x: -131.1,
                    y: -123.4,
                    sx: 0.3,
                    sy: 0.3,
                    c: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                "24": {
                    x: -130.748,
                    y: -123.198
                },
                "25": {
                    x: -130.298,
                    y: -122.898
                },
                "26": {
                    x: -129.898,
                    y: -122.648
                },
                "27": {
                    x: -129.448,
                    y: -122.398
                },
                "28": {
                    x: -129.048,
                    y: -122.148
                },
                "29": {
                    x: -128.598,
                    y: -121.848
                },
                "30": {
                    x: -128.15,
                    y: -121.55
                },
                "188": {
                    x: -132.15,
                    y: -123.35
                },
                "215": {
                    x: -132.348,
                    y: -124.048
                },
                "216": {
                    x: -132.498,
                    y: -124.748
                },
                "217": {
                    x: -132.598,
                    y: -125.448
                },
                "218": {
                    x: -132.748,
                    y: -126.148
                },
                "219": {
                    x: -132.898,
                    y: -126.848
                },
                "220": {
                    x: -133,
                    y: -127.55
                }
            })
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2, 0, 231, {
                "0": {
                    x: -122.6,
                    y: -159.1,
                    r: 0.526
                },
                "17": {
                    x: -122.546,
                    y: -158.595
                },
                "18": {
                    x: -122.446,
                    y: -158.045
                },
                "19": {
                    x: -122.3,
                    y: -157.35
                },
                "22": {
                    x: -122.396,
                    y: -157.895
                },
                "23": {
                    x: -122.496,
                    y: -158.295
                },
                "24": {
                    x: -122.546,
                    y: -158.745
                },
                "25": {
                    x: -122.6,
                    y: -159.1
                },
                "121": {
                    x: -122.546,
                    y: -158.595
                },
                "122": {
                    x: -122.446,
                    y: -158.045
                },
                "123": {
                    x: -122.3,
                    y: -157.35
                },
                "126": {
                    x: -122.396,
                    y: -157.895
                },
                "127": {
                    x: -122.496,
                    y: -158.295
                },
                "128": {
                    x: -122.546,
                    y: -158.745
                },
                "129": {
                    x: -122.6,
                    y: -159.1
                },
                "185": {
                    x: -122.546,
                    y: -158.595
                },
                "186": {
                    x: -122.446,
                    y: -158.045
                },
                "187": {
                    x: -122.3,
                    y: -157.35
                },
                "190": {
                    x: -122.396,
                    y: -157.895
                },
                "191": {
                    x: -122.496,
                    y: -158.295
                },
                "192": {
                    x: -122.546,
                    y: -158.745
                },
                "193": {
                    x: -122.6,
                    y: -159.1
                },
                "224": {
                    x: -122.546,
                    y: -158.595
                },
                "225": {
                    x: -122.446,
                    y: -158.045
                },
                "226": {
                    x: -122.3,
                    y: -157.35
                },
                "229": {
                    x: -122.396,
                    y: -157.895
                },
                "230": {
                    x: -122.496,
                    y: -158.295
                }
            })
            .addTimedChild(instance1, 0, 231, {
                "0": {
                    x: -80.5,
                    y: -157.4,
                    kx: 0.348,
                    ky: 2.794
                },
                "17": {
                    x: -80.396,
                    y: -156.843
                },
                "18": {
                    x: -80.296,
                    y: -156.293
                },
                "19": {
                    x: -80.2,
                    y: -155.65
                },
                "22": {
                    x: -80.246,
                    y: -156.093
                },
                "23": {
                    x: -80.346,
                    y: -156.493
                },
                "24": {
                    x: -80.396,
                    y: -156.943
                },
                "25": {
                    x: -80.5,
                    y: -157.4
                },
                "121": {
                    x: -80.396,
                    y: -156.843
                },
                "122": {
                    x: -80.296,
                    y: -156.293
                },
                "123": {
                    x: -80.2,
                    y: -155.65
                },
                "126": {
                    x: -80.246,
                    y: -156.093
                },
                "127": {
                    x: -80.346,
                    y: -156.493
                },
                "128": {
                    x: -80.396,
                    y: -156.943
                },
                "129": {
                    x: -80.5,
                    y: -157.4
                },
                "185": {
                    x: -80.396,
                    y: -156.843
                },
                "186": {
                    x: -80.296,
                    y: -156.293
                },
                "187": {
                    x: -80.2,
                    y: -155.65
                },
                "190": {
                    x: -80.246,
                    y: -156.093
                },
                "191": {
                    x: -80.346,
                    y: -156.493
                },
                "192": {
                    x: -80.396,
                    y: -156.943
                },
                "193": {
                    x: -80.5,
                    y: -157.4
                },
                "224": {
                    x: -80.396,
                    y: -156.843
                },
                "225": {
                    x: -80.296,
                    y: -156.293
                },
                "226": {
                    x: -80.2,
                    y: -155.65
                },
                "229": {
                    x: -80.246,
                    y: -156.093
                },
                "230": {
                    x: -80.346,
                    y: -156.493
                }
            });
    });

    var Graphic22 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 34, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[0]);
        this.addTimedChild(instance1);
    });

    var Graphic23 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 34, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[0]);
        this.addTimedChild(instance1);
    });

    var Graphic18 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 34, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[3]);
        this.addTimedChild(instance1);
    });

    var Graphic19 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 34, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[3]);
        this.addTimedChild(instance1);
    });

    var Graphic24 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 34, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.TREX[2])
            .setRenderable(false);
        var instance4 = new Graphic19(MovieClip.SYNCHED)
            .setMask(instance2);
        var instance3 = new Graphic18(MovieClip.SYNCHED);
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[1]);
        this.addTimedChild(instance2)
            .addTimedChild(instance4, 0, 34, {
                "0": {
                    x: -2.2,
                    y: 66.95,
                    sx: 0.66,
                    sy: 0.66
                },
                "19": {
                    x: -2.25,
                    y: 55.249
                },
                "20": {
                    y: 59.649
                },
                "21": {
                    x: -2.2,
                    y: 66.95
                }
            })
            .addTimedChild(instance3, 0, 34, {
                "0": {
                    x: -2.2,
                    y: -26.4,
                    sx: 0.66,
                    sy: 0.66
                },
                "19": {
                    x: -2.25,
                    y: 8.75
                },
                "20": {
                    y: -4.45
                },
                "21": {
                    x: -2.2,
                    y: -26.4
                }
            })
            .addTimedChild(instance1);
    });

    var Graphic20 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 34, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[3]);
        this.addTimedChild(instance1);
    });

    var Graphic21 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 34, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[3]);
        this.addTimedChild(instance1);
    });

    var Graphic25 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 34, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.TREX[2])
            .setRenderable(false);
        var instance4 = new Graphic21(MovieClip.SYNCHED)
            .setMask(instance2);
        var instance3 = new Graphic20(MovieClip.SYNCHED);
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[1]);
        this.addTimedChild(instance2)
            .addTimedChild(instance4, 0, 34, {
                "0": {
                    x: -2.2,
                    y: 66.95,
                    sx: 0.66,
                    sy: 0.66
                },
                "19": {
                    x: -2.25,
                    y: 55.249
                },
                "20": {
                    y: 59.649
                },
                "21": {
                    x: -2.2,
                    y: 66.95
                }
            })
            .addTimedChild(instance3, 0, 34, {
                "0": {
                    x: -2.2,
                    y: -26.4,
                    sx: 0.66,
                    sy: 0.66
                },
                "19": {
                    x: -2.25,
                    y: 8.75
                },
                "20": {
                    y: -4.45
                },
                "21": {
                    x: -2.2,
                    y: -26.4
                }
            })
            .addTimedChild(instance1);
    });

    var Graphic26 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 34, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[4]);
        this.addTimedChild(instance1);
    });

    var Graphic27 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 34, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[4]);
        this.addTimedChild(instance1);
    });

    var Graphic28 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 34, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[4]);
        this.addTimedChild(instance1);
    });

    var Graphic29 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 34, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[4]);
        this.addTimedChild(instance1);
    });

    var Graphic30 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 34, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[5]);
        this.addTimedChild(instance1);
    });

    var Graphic31 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 34, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[5]);
        this.addTimedChild(instance1);
    });

    var Graphic32 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 34, loop: false });
        var instance2 = new lib.TREX_teeth()
            .setTransform(-231.5, -26.85);
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[6]);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic33 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 34, loop: false });
        var instance5 = new lib.TREX_teeth()
            .setTransform(31.25, 141.75, 1, 1, 0, 3.16, -0.018);
        var instance4 = new Graphics()
            .drawCommands(shapes.TREX[11]);
        var instance3 = new Graphics()
            .drawCommands(shapes.TREX[10]);
        var instance2 = new Graphics()
            .drawCommands(shapes.TREX[9]);
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[8]);
        this.addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic34 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 34, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[12]);
        this.addTimedChild(instance1);
    });

    var Graphic36 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 34, loop: false });
        var instance13 = new Graphic34(MovieClip.SYNCHED)
            .setTransform(-140, -63.8, 1.069, 0.694, 0, -0.346, 0.033);
        var instance12 = new Graphic33(MovieClip.SYNCHED)
            .setTransform(-287.2, -160.95);
        var instance11 = new Graphic32(MovieClip.SYNCHED)
            .setTransform(-12.45, -35.25, 1, 1, 0.034);
        var instance10 = new Graphic31(MovieClip.SYNCHED)
            .setTransform(-141.7, -156.25, 1, 1, -0.043);
        var instance9 = new Graphic30(MovieClip.SYNCHED)
            .setTransform(-61.3, -157, 0.998, 0.998, 0, -0.076, -3.066);
        var instance8 = new Graphic29(MovieClip.SYNCHED)
            .setTransform(-79.3, -136.6, 1, 1, 0, 0, 3.142);
        var instance7 = new Graphic28(MovieClip.SYNCHED)
            .setTransform(-125.25, -136.6);
        var instance6 = new Graphic27(MovieClip.SYNCHED)
            .setTransform(-87.1, -127.75, 0.3, 0.3, 0, 0, 3.142)
            .setColorTransform(0, 0, 0, 0, 0, 0);
        var instance5 = new Graphic26(MovieClip.SYNCHED)
            .setTransform(-133, -127.55, 0.3, 0.3)
            .setColorTransform(0, 0, 0, 0, 0, 0);
        var instance4 = new Graphic25(MovieClip.SYNCHED)
            .setTransform(-80.65, -136.65, 1, 1, 0, 0, 3.142);
        var instance3 = new Graphic24(MovieClip.SYNCHED)
            .setTransform(-123.9, -136.65);
        var instance2 = new Graphic23(MovieClip.SYNCHED);
        var instance1 = new Graphic22(MovieClip.SYNCHED);
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
            .addTimedChild(instance2, 0, 34, {
                "0": {
                    x: -122.6,
                    y: -159.1,
                    r: 0.526
                },
                "19": {
                    x: -122.396,
                    y: -157.895
                },
                "20": {
                    x: -122.496,
                    y: -158.295
                },
                "21": {
                    x: -122.546,
                    y: -158.745
                },
                "22": {
                    x: -122.6,
                    y: -159.1
                }
            })
            .addTimedChild(instance1, 0, 34, {
                "0": {
                    x: -80.5,
                    y: -157.4,
                    kx: 0.348,
                    ky: 2.794
                },
                "19": {
                    x: -80.246,
                    y: -156.093
                },
                "20": {
                    x: -80.346,
                    y: -156.493
                },
                "21": {
                    x: -80.396,
                    y: -156.943
                },
                "22": {
                    x: -80.5,
                    y: -157.4
                }
            });
    });

    var Graphic37 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 34, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.TREX[16]);
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[13]);
        var instance4 = new Graphics()
            .drawCommands(shapes.TREX[17]);
        var instance5 = new Graphics()
            .drawCommands(shapes.TREX[18]);
        var instance6 = new Graphics()
            .drawCommands(shapes.TREX[17]);
        var instance3 = new Graphics()
            .drawCommands(shapes.TREX[14]);
        var instance8 = new Graphics()
            .drawCommands(shapes.TREX[19]);
        var instance7 = new Graphics()
            .drawCommands(shapes.TREX[15]);
        var instance10 = new Graphics()
            .drawCommands(shapes.TREX[18]);
        var instance9 = new Graphics()
            .drawCommands(shapes.TREX[14]);
        var instance12 = new Graphics()
            .drawCommands(shapes.TREX[16]);
        var instance11 = new Graphics()
            .drawCommands(shapes.TREX[13]);
        var instance14 = new Graphics()
            .drawCommands(shapes.TREX[17]);
        var instance15 = new Graphics()
            .drawCommands(shapes.TREX[18]);
        var instance13 = new Graphics()
            .drawCommands(shapes.TREX[14]);
        this.addTimedChild(instance2, 0, 1)
            .addTimedChild(instance1, 0, 1)
            .addTimedChild(instance4, 1, 7)
            .addTimedChild(instance5, 8, 4)
            .addTimedChild(instance6, 12, 6)
            .addTimedChild(instance3, 1, 17)
            .addTimedChild(instance8, 18, 3)
            .addTimedChild(instance7, 18, 3)
            .addTimedChild(instance10, 21, 4)
            .addTimedChild(instance9, 21, 4)
            .addTimedChild(instance12, 25, 1)
            .addTimedChild(instance11, 25, 1)
            .addTimedChild(instance14, 26, 7)
            .addTimedChild(instance15, 33, 1)
            .addTimedChild(instance13, 26, 8);
    });

    var Graphic38 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 34, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[20]);
        this.addTimedChild(instance1);
    });

    var Graphic39 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 34, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.TREX[22]);
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[21]);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic40 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 34, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[23]);
        this.addTimedChild(instance1);
    });

    var Graphic41 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 34, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[24]);
        this.addTimedChild(instance1);
    });

    var Graphic42 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 34, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[25]);
        this.addTimedChild(instance1);
    });

    var Graphic43 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 34, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[26]);
        this.addTimedChild(instance1);
    });

    var Graphic35 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 34, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[29])
            .setRenderable(false);
        var instance3 = new Graphics()
            .drawCommands(shapes.TREX[29]);
        var instance2 = new Graphics()
            .drawCommands(shapes.TREX[30])
            .setMask(instance1);
        this.addTimedChild(instance1)
            .addTimedChild(instance3)
            .addTimedChild(instance2);
    });

    var Graphic44 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 34, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.TREX[28])
            .setRenderable(false);
        var instance4 = new Graphics()
            .drawCommands(shapes.TREX[31]);
        var instance3 = new Graphic35(MovieClip.SYNCHED)
            .setTransform(154.95, 405.55, 0.91, 0.91, -0.065)
            .setMask(instance2);
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[27]);
        this.addTimedChild(instance2)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance1);
    });

    var Graphic45 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 34, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[32]);
        this.addTimedChild(instance1);
    });

    var Graphic46 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 34, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[24]);
        this.addTimedChild(instance1);
    });

    var Graphic47 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 34, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[25]);
        this.addTimedChild(instance1);
    });

    var Graphic48 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 34, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.TREX[17]);
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[14]);
        var instance4 = new Graphics()
            .drawCommands(shapes.TREX[19]);
        var instance3 = new Graphics()
            .drawCommands(shapes.TREX[15]);
        var instance6 = new Graphics()
            .drawCommands(shapes.TREX[18]);
        var instance5 = new Graphics()
            .drawCommands(shapes.TREX[14]);
        var instance8 = new Graphics()
            .drawCommands(shapes.TREX[16]);
        var instance7 = new Graphics()
            .drawCommands(shapes.TREX[13]);
        var instance10 = new Graphics()
            .drawCommands(shapes.TREX[17]);
        var instance11 = new Graphics()
            .drawCommands(shapes.TREX[18]);
        var instance12 = new Graphics()
            .drawCommands(shapes.TREX[17]);
        var instance9 = new Graphics()
            .drawCommands(shapes.TREX[14]);
        var instance14 = new Graphics()
            .drawCommands(shapes.TREX[19]);
        var instance13 = new Graphics()
            .drawCommands(shapes.TREX[15]);
        var instance16 = new Graphics()
            .drawCommands(shapes.TREX[18]);
        var instance15 = new Graphics()
            .drawCommands(shapes.TREX[14]);
        this.addTimedChild(instance2, 0, 6)
            .addTimedChild(instance1, 0, 6)
            .addTimedChild(instance4, 6, 2)
            .addTimedChild(instance3, 6, 2)
            .addTimedChild(instance6, 8, 4)
            .addTimedChild(instance5, 8, 4)
            .addTimedChild(instance8, 12, 1)
            .addTimedChild(instance7, 12, 1)
            .addTimedChild(instance10, 13, 8)
            .addTimedChild(instance11, 21, 4)
            .addTimedChild(instance12, 25, 6)
            .addTimedChild(instance9, 13, 18)
            .addTimedChild(instance14, 31, 2)
            .addTimedChild(instance13, 31, 2)
            .addTimedChild(instance16, 33, 1)
            .addTimedChild(instance15, 33, 1);
    });

    var Graphic49 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 34, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[20]);
        this.addTimedChild(instance1);
    });

    var Graphic50 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 34, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.TREX[22]);
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[21]);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic75 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 34, loop: false });
        var instance15 = new Graphic50(MovieClip.SYNCHED);
        var instance14 = new Graphic49(MovieClip.SYNCHED);
        var instance13 = new Graphic48(MovieClip.SYNCHED);
        var instance12 = new Graphic47(MovieClip.SYNCHED);
        var instance11 = new Graphic46(MovieClip.SYNCHED);
        var instance10 = new Graphic45(MovieClip.SYNCHED);
        var instance9 = new Graphic44(MovieClip.SYNCHED);
        var instance8 = new Graphic43(MovieClip.SYNCHED);
        var instance7 = new Graphic42(MovieClip.SYNCHED);
        var instance6 = new Graphic41(MovieClip.SYNCHED);
        var instance5 = new Graphic40(MovieClip.SYNCHED);
        var instance4 = new Graphic39(MovieClip.SYNCHED);
        var instance3 = new Graphic38(MovieClip.SYNCHED);
        var instance2 = new Graphic37(MovieClip.SYNCHED);
        var instance1 = new Graphic36(MovieClip.SYNCHED);
        this.addTimedChild(instance15, 0, 34, {
                "0": {
                    x: 56.5,
                    y: -285.8,
                    sx: 1,
                    sy: 1,
                    r: -0.399
                },
                "1": {
                    x: 89.998,
                    y: -282.277,
                    r: -0.054
                },
                "2": {
                    x: 123.3,
                    y: -278.6,
                    r: 0.29
                },
                "3": {
                    x: 100.925,
                    y: -272.658,
                    r: 0.278
                },
                "4": {
                    x: 78.3,
                    y: -266.6,
                    r: 0.267
                },
                "5": {
                    x: 97.516,
                    y: -254.181,
                    r: 0.237
                },
                "6": {
                    x: 116.65,
                    y: -241.8,
                    r: 0.206
                },
                "7": {
                    x: 112.415,
                    y: -242.198,
                    r: -0.046
                },
                "8": {
                    x: 108.15,
                    y: -242.65,
                    r: -0.298
                },
                "9": {
                    x: 113.77,
                    y: -231.909,
                    sx: 0.992,
                    sy: 1.018,
                    r: -0.388
                },
                "10": {
                    x: 119.25,
                    y: -221.1,
                    sx: 0.985,
                    sy: 1.037,
                    r: -0.477
                },
                "11": {
                    x: 124.921,
                    y: -239.984,
                    sx: 0.978,
                    sy: 1.057,
                    r: -0.566
                },
                "12": {
                    x: 130.4,
                    y: -258.8,
                    sx: 0.972,
                    sy: 1.076,
                    r: -0.656
                },
                "13": {
                    x: 138.852,
                    y: -267.67,
                    sy: 1.045,
                    r: -0.784
                },
                "14": {
                    x: 147.3,
                    y: -276.3,
                    sy: 1.014,
                    r: -0.913
                },
                "15": {
                    x: 152.134,
                    y: -269.226,
                    r: -0.958
                },
                "16": {
                    x: 156.85,
                    y: -262.05,
                    r: -1.003
                },
                "17": {
                    x: 152.062,
                    y: -261.461,
                    sx: 0.986,
                    sy: 1.007,
                    r: -0.893
                },
                "18": {
                    x: 147.25,
                    y: -260.9,
                    sx: 1,
                    sy: 1,
                    r: -0.782
                },
                "20": {
                    x: 125.559,
                    y: -267.234,
                    r: -0.684
                },
                "21": {
                    x: 103.85,
                    y: -273.55,
                    r: -0.585
                },
                "22": {
                    x: 92.07,
                    y: -261.879,
                    sx: 0.999,
                    sy: 0.999,
                    r: -0.538
                },
                "23": {
                    x: 80.2,
                    y: -250.05,
                    r: -0.49
                },
                "24": {
                    x: 68.368,
                    y: -267.928,
                    r: -0.444
                },
                "25": {
                    x: 56.5,
                    y: -285.8,
                    sx: 1,
                    sy: 1,
                    r: -0.399
                },
                "26": {
                    x: 89.998,
                    y: -282.277,
                    r: -0.054
                },
                "27": {
                    x: 123.3,
                    y: -278.6,
                    r: 0.29
                },
                "28": {
                    x: 100.925,
                    y: -272.658,
                    r: 0.278
                },
                "29": {
                    x: 78.3,
                    y: -266.6,
                    r: 0.267
                },
                "30": {
                    x: 97.516,
                    y: -254.181,
                    r: 0.237
                },
                "31": {
                    x: 116.65,
                    y: -241.8,
                    r: 0.206
                },
                "32": {
                    x: 112.415,
                    y: -242.198,
                    r: -0.046
                },
                "33": {
                    x: 108.15,
                    y: -242.65,
                    r: -0.298
                }
            })
            .addTimedChild(instance14, 0, 34, {
                "0": {
                    x: 132.2,
                    y: -176.55,
                    sx: 1,
                    sy: 0.866,
                    kx: 0,
                    ky: 0,
                    r: -0.392
                },
                "1": {
                    x: 118.499,
                    y: -158.282,
                    r: -0.096
                },
                "2": {
                    x: 104.55,
                    y: -139.85,
                    r: 0.201
                },
                "3": {
                    x: 82.525,
                    y: -134.099,
                    r: 0.338
                },
                "4": {
                    x: 60.35,
                    y: -128.3,
                    r: 0.475
                },
                "5": {
                    x: 85.232,
                    y: -115.915,
                    sy: 0.902,
                    r: 0.348
                },
                "6": {
                    x: 110.1,
                    y: -103.55,
                    sy: 0.939,
                    r: 0.222
                },
                "7": {
                    x: 138.689,
                    y: -108.648,
                    sy: 0.931,
                    r: 0.012
                },
                "8": {
                    x: 167.25,
                    y: -113.7,
                    sy: 0.923,
                    r: -0.198
                },
                "9": {
                    x: 184.508,
                    y: -110.331,
                    sx: 0.987,
                    sy: 0.948,
                    kx: 0.366,
                    ky: -0.363,
                    r: 0
                },
                "10": {
                    x: 201.75,
                    y: -107.05,
                    sx: 0.974,
                    sy: 0.973,
                    kx: 0.534,
                    ky: -0.528
                },
                "11": {
                    x: 219.139,
                    y: -130.222,
                    sx: 0.962,
                    sy: 1.054,
                    kx: 0.564,
                    ky: -0.554
                },
                "12": {
                    x: 236.3,
                    y: -153.4,
                    sx: 0.95,
                    sy: 1.134,
                    kx: 0.594,
                    ky: -0.58
                },
                "13": {
                    x: 255.45,
                    y: -178,
                    sx: 0.948,
                    sy: 0.964,
                    kx: 0.9,
                    ky: -0.884
                },
                "14": {
                    x: 274.65,
                    y: -202.7,
                    sx: 0.95,
                    sy: 0.934,
                    kx: 1.091,
                    ky: -1.076
                },
                "15": {
                    x: 282.534,
                    y: -201.482,
                    kx: 1.136,
                    ky: -1.121
                },
                "16": {
                    x: 290.3,
                    y: -200.25,
                    kx: 1.181,
                    ky: -1.167
                },
                "17": {
                    x: 270.567,
                    y: -191.814,
                    sx: 0.975,
                    sy: 0.967,
                    kx: 1.218,
                    ky: -1.211
                },
                "18": {
                    x: 250.8,
                    y: -183.35,
                    sx: 1,
                    sy: 1,
                    kx: 0,
                    ky: 0,
                    r: -1.255
                },
                "20": {
                    x: 241.222,
                    y: -177.501,
                    sy: 0.933,
                    r: -0.869
                },
                "21": {
                    x: 231.5,
                    y: -171.6,
                    sy: 0.866,
                    r: -0.483
                },
                "22": {
                    x: 206.658,
                    y: -162.308,
                    sx: 0.999,
                    r: -0.46
                },
                "23": {
                    x: 181.8,
                    y: -152.9,
                    sy: 0.865,
                    r: -0.437
                },
                "24": {
                    x: 157.051,
                    y: -164.766,
                    sy: 0.866,
                    r: -0.415
                },
                "25": {
                    x: 132.2,
                    y: -176.55,
                    sx: 1,
                    r: -0.392
                },
                "26": {
                    x: 118.499,
                    y: -158.282,
                    r: -0.096
                },
                "27": {
                    x: 104.55,
                    y: -139.85,
                    r: 0.201
                },
                "28": {
                    x: 82.525,
                    y: -134.099,
                    r: 0.338
                },
                "29": {
                    x: 60.35,
                    y: -128.3,
                    r: 0.475
                },
                "30": {
                    x: 85.232,
                    y: -115.915,
                    sy: 0.902,
                    r: 0.348
                },
                "31": {
                    x: 110.1,
                    y: -103.55,
                    sy: 0.939,
                    r: 0.222
                },
                "32": {
                    x: 138.689,
                    y: -108.648,
                    sy: 0.931,
                    r: 0.012
                },
                "33": {
                    x: 167.25,
                    y: -113.7,
                    sy: 0.923,
                    r: -0.198
                }
            })
            .addTimedChild(instance13, 0, 34, {
                "0": {
                    x: 126.05,
                    y: -102.3,
                    sx: 1,
                    sy: 1,
                    r: -0.192
                },
                "1": {
                    x: 93.657,
                    y: -92.639,
                    r: -0.018
                },
                "2": {
                    x: 61.15,
                    y: -82.8,
                    r: 0.157
                },
                "3": {
                    x: 30.739,
                    y: -82.566,
                    r: 0.294
                },
                "4": {
                    x: 0.15,
                    y: -82.2,
                    r: 0.431
                },
                "5": {
                    x: 31.173,
                    y: -64.135,
                    r: 0.366
                },
                "6": {
                    x: 62.3,
                    y: -45.9,
                    r: 0.3
                },
                "7": {
                    x: 103.05,
                    y: -33.75,
                    r: 0.031
                },
                "8": {
                    x: 143.75,
                    y: -33.1,
                    r: -0.017
                },
                "9": {
                    x: 175.595,
                    y: -33.175,
                    r: -0.016
                },
                "10": {
                    x: 207.35,
                    y: -33.1,
                    r: -0.014
                },
                "11": {
                    x: 239.248,
                    y: -33.173,
                    r: -0.016
                },
                "12": {
                    x: 270.95,
                    y: -33.1,
                    r: -0.017
                },
                "13": {
                    x: 292.1,
                    y: -102.75,
                    sx: 0.999,
                    sy: 0.999,
                    r: -0.529
                },
                "14": {
                    x: 316.4,
                    y: -140.55,
                    sx: 1,
                    sy: 1,
                    r: -0.78
                },
                "15": {
                    x: 327.795,
                    y: -145.752,
                    r: -0.921
                },
                "16": {
                    x: 339,
                    y: -150.9,
                    r: -1.062
                },
                "17": {
                    x: 325.571,
                    y: -140.142,
                    r: -0.917
                },
                "18": {
                    x: 311.95,
                    y: -129.4,
                    r: -0.771
                },
                "20": {
                    x: 274.201,
                    y: -112.94,
                    r: -0.619
                },
                "21": {
                    x: 236.35,
                    y: -96.45,
                    r: -0.466
                },
                "22": {
                    x: 208.843,
                    y: -87.277,
                    sx: 0.999,
                    sy: 0.999,
                    r: -0.397
                },
                "23": {
                    x: 181.2,
                    y: -78.15,
                    r: -0.328
                },
                "24": {
                    x: 153.719,
                    y: -90.317,
                    r: -0.26
                },
                "25": {
                    x: 126.05,
                    y: -102.3,
                    sx: 1,
                    sy: 1,
                    r: -0.192
                },
                "26": {
                    x: 93.657,
                    y: -92.639,
                    r: -0.018
                },
                "27": {
                    x: 61.15,
                    y: -82.8,
                    r: 0.157
                },
                "28": {
                    x: 30.739,
                    y: -82.566,
                    r: 0.294
                },
                "29": {
                    x: 0.15,
                    y: -82.2,
                    r: 0.431
                },
                "30": {
                    x: 31.173,
                    y: -64.135,
                    r: 0.366
                },
                "31": {
                    x: 62.3,
                    y: -45.9,
                    r: 0.3
                },
                "32": {
                    x: 103.05,
                    y: -33.75,
                    r: 0.031
                },
                "33": {
                    x: 143.75,
                    y: -33.1,
                    r: -0.017
                }
            })
            .addTimedChild(instance12, 0, 34, {
                "0": {
                    x: -111.4,
                    y: -304.3,
                    sx: 1,
                    sy: 1,
                    r: 0.615
                },
                "1": {
                    x: -111.395,
                    y: -309.636
                },
                "2": {
                    x: -111.4,
                    y: -314.9
                },
                "3": {
                    x: -111.395,
                    y: -310.186
                },
                "4": {
                    x: -111.4,
                    y: -305.45
                },
                "5": {
                    x: -111.395,
                    y: -294.286
                },
                "6": {
                    x: -111.4,
                    y: -283.1
                },
                "7": {
                    x: -111.395,
                    y: -272.537
                },
                "8": {
                    x: -111.4,
                    y: -261.9
                },
                "9": {
                    x: -111.39,
                    y: -257.719,
                    sx: 0.999,
                    sy: 0.999,
                    r: 0.614
                },
                "10": {
                    x: -111.4,
                    y: -253.5,
                    sx: 0.998,
                    sy: 0.998,
                    r: 0.613
                },
                "11": {
                    x: -111.409,
                    y: -279.001,
                    sx: 0.999,
                    sy: 0.999,
                    r: 0.614
                },
                "12": {
                    x: -111.4,
                    y: -304.3,
                    sx: 1,
                    sy: 1,
                    r: 0.615
                },
                "13": {
                    x: -111.395,
                    y: -309.636
                },
                "14": {
                    x: -111.4,
                    y: -314.9
                },
                "15": {
                    x: -111.395,
                    y: -310.186
                },
                "16": {
                    x: -111.4,
                    y: -305.45
                },
                "17": {
                    x: -111.395,
                    y: -294.286
                },
                "18": {
                    x: -111.4,
                    y: -283.1
                },
                "20": {
                    x: -111.395,
                    y: -272.537
                },
                "21": {
                    x: -111.4,
                    y: -261.9
                },
                "22": {
                    x: -111.39,
                    y: -257.719,
                    sx: 0.999,
                    sy: 0.999,
                    r: 0.614
                },
                "23": {
                    x: -111.4,
                    y: -253.5,
                    sx: 0.998,
                    sy: 0.998,
                    r: 0.613
                },
                "24": {
                    x: -111.409,
                    y: -279.001,
                    sx: 0.999,
                    sy: 0.999,
                    r: 0.614
                },
                "25": {
                    x: -111.4,
                    y: -304.3,
                    sx: 1,
                    sy: 1,
                    r: 0.615
                },
                "26": {
                    x: -111.395,
                    y: -309.636
                },
                "27": {
                    x: -111.4,
                    y: -314.9
                },
                "28": {
                    x: -111.395,
                    y: -310.186
                },
                "29": {
                    x: -111.4,
                    y: -305.45
                },
                "30": {
                    x: -111.395,
                    y: -294.286
                },
                "31": {
                    x: -111.4,
                    y: -283.1
                },
                "32": {
                    x: -111.395,
                    y: -272.537
                },
                "33": {
                    x: -111.4,
                    y: -261.9
                }
            })
            .addTimedChild(instance11, 0, 34, {
                "0": {
                    x: -190.8,
                    y: -282.4,
                    sx: 1,
                    sy: 1,
                    kx: 4.395,
                    ky: 1.889
                },
                "1": {
                    x: -190.841,
                    y: -287.787
                },
                "2": {
                    x: -190.8,
                    y: -293
                },
                "3": {
                    x: -190.841,
                    y: -288.287
                },
                "4": {
                    x: -190.8,
                    y: -283.55
                },
                "5": {
                    x: -190.841,
                    y: -272.437
                },
                "6": {
                    x: -190.8,
                    y: -261.2
                },
                "7": {
                    x: -190.841,
                    y: -250.688
                },
                "8": {
                    x: -190.8,
                    y: -240
                },
                "9": {
                    x: -190.827,
                    y: -235.744,
                    sx: 0.999,
                    sy: 0.999,
                    kx: 4.396,
                    ky: 1.887
                },
                "10": {
                    x: -190.8,
                    y: -231.55,
                    kx: 4.397,
                    ky: 1.886
                },
                "11": {
                    x: -190.869,
                    y: -257.027,
                    kx: 4.396,
                    ky: 1.887
                },
                "12": {
                    x: -190.8,
                    y: -282.4,
                    sx: 1,
                    sy: 1,
                    kx: 4.395,
                    ky: 1.889
                },
                "13": {
                    x: -190.841,
                    y: -287.787
                },
                "14": {
                    x: -190.8,
                    y: -293
                },
                "15": {
                    x: -190.841,
                    y: -288.287
                },
                "16": {
                    x: -190.8,
                    y: -283.55
                },
                "17": {
                    x: -190.841,
                    y: -272.437
                },
                "18": {
                    x: -190.8,
                    y: -261.2
                },
                "20": {
                    x: -190.841,
                    y: -250.688
                },
                "21": {
                    x: -190.8,
                    y: -240
                },
                "22": {
                    x: -190.827,
                    y: -235.744,
                    sx: 0.999,
                    sy: 0.999,
                    kx: 4.396,
                    ky: 1.887
                },
                "23": {
                    x: -190.8,
                    y: -231.55,
                    kx: 4.397,
                    ky: 1.886
                },
                "24": {
                    x: -190.869,
                    y: -257.027,
                    kx: 4.396,
                    ky: 1.887
                },
                "25": {
                    x: -190.8,
                    y: -282.4,
                    sx: 1,
                    sy: 1,
                    kx: 4.395,
                    ky: 1.889
                },
                "26": {
                    x: -190.841,
                    y: -287.787
                },
                "27": {
                    x: -190.8,
                    y: -293
                },
                "28": {
                    x: -190.841,
                    y: -288.287
                },
                "29": {
                    x: -190.8,
                    y: -283.55
                },
                "30": {
                    x: -190.841,
                    y: -272.437
                },
                "31": {
                    x: -190.8,
                    y: -261.2
                },
                "32": {
                    x: -190.841,
                    y: -250.688
                },
                "33": {
                    x: -190.8,
                    y: -240
                }
            })
            .addTimedChild(instance10, 0, 34, {
                "0": {
                    x: -53.65,
                    y: -317.25,
                    sx: 0.999,
                    sy: 0.999,
                    r: -0.986
                },
                "1": {
                    x: -53.698,
                    y: -322.64
                },
                "2": {
                    x: -53.65,
                    y: -327.85
                },
                "3": {
                    x: -53.748,
                    y: -323.19
                },
                "4": {
                    x: -53.65,
                    y: -318.4
                },
                "5": {
                    x: -53.698,
                    y: -307.29
                },
                "6": {
                    x: -53.65,
                    y: -296.05
                },
                "7": {
                    x: -53.648,
                    y: -285.541
                },
                "8": {
                    x: -53.65,
                    y: -274.85
                },
                "9": {
                    x: -53.614,
                    y: -270.776,
                    sx: 0.998,
                    sy: 0.998,
                    r: -0.987
                },
                "10": {
                    x: -53.6,
                    y: -266.55,
                    r: -0.988
                },
                "11": {
                    x: -53.638,
                    y: -291.956,
                    sx: 0.999,
                    sy: 0.999,
                    r: -0.987
                },
                "12": {
                    x: -53.65,
                    y: -317.25,
                    r: -0.986
                },
                "13": {
                    x: -53.698,
                    y: -322.64
                },
                "14": {
                    x: -53.65,
                    y: -327.85
                },
                "15": {
                    x: -53.748,
                    y: -323.19
                },
                "16": {
                    x: -53.65,
                    y: -318.4
                },
                "17": {
                    x: -53.698,
                    y: -307.29
                },
                "18": {
                    x: -53.65,
                    y: -296.05
                },
                "20": {
                    x: -53.648,
                    y: -285.541
                },
                "21": {
                    x: -53.65,
                    y: -274.85
                },
                "22": {
                    x: -53.614,
                    y: -270.776,
                    sx: 0.998,
                    sy: 0.998,
                    r: -0.987
                },
                "23": {
                    x: -53.6,
                    y: -266.55,
                    r: -0.988
                },
                "24": {
                    x: -53.638,
                    y: -291.956,
                    sx: 0.999,
                    sy: 0.999,
                    r: -0.987
                },
                "25": {
                    x: -53.65,
                    y: -317.25,
                    r: -0.986
                },
                "26": {
                    x: -53.698,
                    y: -322.64
                },
                "27": {
                    x: -53.65,
                    y: -327.85
                },
                "28": {
                    x: -53.748,
                    y: -323.19
                },
                "29": {
                    x: -53.65,
                    y: -318.4
                },
                "30": {
                    x: -53.698,
                    y: -307.29
                },
                "31": {
                    x: -53.65,
                    y: -296.05
                },
                "32": {
                    x: -53.648,
                    y: -285.541
                },
                "33": {
                    x: -53.65,
                    y: -274.85
                }
            })
            .addTimedChild(instance9, 0, 34, {
                "0": {
                    x: -215.85,
                    y: -362,
                    sx: 1,
                    sy: 1,
                    r: -0.41
                },
                "1": {
                    x: -215.843,
                    y: -367.289
                },
                "2": {
                    x: -215.85,
                    y: -372.6
                },
                "3": {
                    x: -215.843,
                    y: -367.939
                },
                "4": {
                    x: -215.85,
                    y: -363.15
                },
                "5": {
                    x: -215.843,
                    y: -352.039
                },
                "6": {
                    x: -215.85,
                    y: -340.8
                },
                "7": {
                    x: -215.843,
                    y: -330.24
                },
                "8": {
                    x: -215.85,
                    y: -319.6
                },
                "9": {
                    x: -215.368,
                    y: -315.775,
                    sx: 0.999,
                    sy: 0.999,
                    r: -0.409
                },
                "10": {
                    x: -215.05,
                    y: -311.9,
                    r: -0.407
                },
                "11": {
                    x: -215.37,
                    y: -337.058,
                    r: -0.409
                },
                "12": {
                    x: -215.85,
                    y: -362,
                    sx: 1,
                    sy: 1,
                    r: -0.41
                },
                "13": {
                    x: -215.893,
                    y: -367.289
                },
                "14": {
                    x: -215.85,
                    y: -372.6
                },
                "15": {
                    x: -215.793,
                    y: -367.939
                },
                "16": {
                    x: -215.85,
                    y: -363.15
                },
                "17": {
                    x: -215.843,
                    y: -352.039
                },
                "18": {
                    x: -215.85,
                    y: -340.8
                },
                "20": {
                    x: -215.843,
                    y: -330.19
                },
                "21": {
                    x: -215.85,
                    y: -319.6
                },
                "22": {
                    x: -215.368,
                    y: -315.775,
                    sx: 0.999,
                    sy: 0.999,
                    r: -0.409
                },
                "23": {
                    x: -215.05,
                    y: -311.9,
                    r: -0.407
                },
                "24": {
                    x: -215.37,
                    y: -337.058,
                    r: -0.409
                },
                "25": {
                    x: -215.85,
                    y: -362,
                    sx: 1,
                    sy: 1,
                    r: -0.41
                },
                "26": {
                    x: -215.843,
                    y: -367.289
                },
                "27": {
                    x: -215.85,
                    y: -372.6
                },
                "28": {
                    x: -215.843,
                    y: -367.939
                },
                "29": {
                    x: -215.85,
                    y: -363.15
                },
                "30": {
                    x: -215.843,
                    y: -352.039
                },
                "31": {
                    x: -215.85,
                    y: -340.8
                },
                "32": {
                    x: -215.843,
                    y: -330.24
                },
                "33": {
                    x: -215.85,
                    y: -319.6
                }
            })
            .addTimedChild(instance8, 0, 34, {
                "0": {
                    x: -228.65,
                    y: -373.15,
                    sx: 0.999,
                    sy: 0.999,
                    r: -0.224
                },
                "1": {
                    x: -228.697,
                    y: -378.444
                },
                "2": {
                    x: -228.65,
                    y: -383.75
                },
                "3": {
                    x: -228.646,
                    y: -379.044
                },
                "4": {
                    x: -228.65,
                    y: -374.3
                },
                "5": {
                    x: -228.747,
                    y: -363.144
                },
                "6": {
                    x: -228.65,
                    y: -351.95
                },
                "7": {
                    x: -228.697,
                    y: -341.395
                },
                "8": {
                    x: -228.65,
                    y: -330.75
                },
                "9": {
                    x: -228.595,
                    y: -326.513,
                    r: -0.223
                },
                "10": {
                    x: -228.6,
                    y: -322.3,
                    sx: 0.998,
                    sy: 0.998
                },
                "11": {
                    x: -228.74,
                    y: -347.778,
                    sx: 0.999,
                    sy: 0.999
                },
                "12": {
                    x: -228.65,
                    y: -373.15,
                    r: -0.224
                },
                "13": {
                    x: -228.646,
                    y: -378.494
                },
                "14": {
                    x: -228.65,
                    y: -383.75
                },
                "15": {
                    x: -228.697,
                    y: -379.044
                },
                "16": {
                    x: -228.65,
                    y: -374.3
                },
                "17": {
                    x: -228.646,
                    y: -363.144
                },
                "18": {
                    x: -228.65,
                    y: -351.95
                },
                "20": {
                    x: -228.697,
                    y: -341.395
                },
                "21": {
                    x: -228.65,
                    y: -330.75
                },
                "22": {
                    x: -228.695,
                    y: -326.563,
                    r: -0.223
                },
                "23": {
                    x: -228.6,
                    y: -322.3,
                    sx: 0.998,
                    sy: 0.998
                },
                "24": {
                    x: -228.69,
                    y: -347.778,
                    sx: 0.999,
                    sy: 0.999
                },
                "25": {
                    x: -228.65,
                    y: -373.15,
                    r: -0.224
                },
                "26": {
                    x: -228.697,
                    y: -378.444
                },
                "27": {
                    x: -228.65,
                    y: -383.75
                },
                "28": {
                    x: -228.646,
                    y: -379.044
                },
                "29": {
                    x: -228.65,
                    y: -374.3
                },
                "30": {
                    x: -228.747,
                    y: -363.144
                },
                "31": {
                    x: -228.65,
                    y: -351.95
                },
                "32": {
                    x: -228.697,
                    y: -341.395
                },
                "33": {
                    x: -228.65,
                    y: -330.75
                }
            })
            .addTimedChild(instance7, 0, 34, {
                "0": {
                    x: -92.55,
                    y: -291.05,
                    sx: 1,
                    sy: 1,
                    r: 0.449
                },
                "1": {
                    x: -92.597,
                    y: -296.391
                },
                "2": {
                    x: -92.55,
                    y: -301.65
                },
                "3": {
                    x: -92.597,
                    y: -296.941
                },
                "4": {
                    x: -92.55,
                    y: -292.2
                },
                "5": {
                    x: -92.547,
                    y: -281.091
                },
                "6": {
                    x: -92.55,
                    y: -269.85
                },
                "7": {
                    x: -92.597,
                    y: -259.292
                },
                "8": {
                    x: -92.55,
                    y: -248.65
                },
                "9": {
                    x: -92.556,
                    y: -244.479,
                    sx: 0.999,
                    sy: 0.999,
                    r: 0.448
                },
                "10": {
                    x: -92.6,
                    y: -240.25,
                    r: 0.447
                },
                "11": {
                    x: -92.539,
                    y: -265.7,
                    r: 0.448
                },
                "12": {
                    x: -92.55,
                    y: -291.05,
                    sx: 1,
                    sy: 1,
                    r: 0.449
                },
                "13": {
                    x: -92.597,
                    y: -296.391
                },
                "14": {
                    x: -92.55,
                    y: -301.65
                },
                "15": {
                    x: -92.597,
                    y: -296.941
                },
                "16": {
                    x: -92.55,
                    y: -292.2
                },
                "17": {
                    x: -92.547,
                    y: -281.091
                },
                "18": {
                    x: -92.55,
                    y: -269.85
                },
                "20": {
                    x: -92.597,
                    y: -259.292
                },
                "21": {
                    x: -92.55,
                    y: -248.65
                },
                "22": {
                    x: -92.556,
                    y: -244.479,
                    sx: 0.999,
                    sy: 0.999,
                    r: 0.448
                },
                "23": {
                    x: -92.6,
                    y: -240.25,
                    r: 0.447
                },
                "24": {
                    x: -92.539,
                    y: -265.7,
                    r: 0.448
                },
                "25": {
                    x: -92.55,
                    y: -291.05,
                    sx: 1,
                    sy: 1,
                    r: 0.449
                },
                "26": {
                    x: -92.597,
                    y: -296.391
                },
                "27": {
                    x: -92.55,
                    y: -301.65
                },
                "28": {
                    x: -92.597,
                    y: -296.941
                },
                "29": {
                    x: -92.55,
                    y: -292.2
                },
                "30": {
                    x: -92.547,
                    y: -281.091
                },
                "31": {
                    x: -92.55,
                    y: -269.85
                },
                "32": {
                    x: -92.597,
                    y: -259.292
                },
                "33": {
                    x: -92.55,
                    y: -248.65
                }
            })
            .addTimedChild(instance6, 0, 34, {
                "0": {
                    x: -166.75,
                    y: -256.3,
                    sx: 1,
                    sy: 1,
                    r: 1.195
                },
                "1": {
                    x: -166.797,
                    y: -261.596
                },
                "2": {
                    x: -166.75,
                    y: -266.9
                },
                "3": {
                    x: -166.847,
                    y: -262.146
                },
                "4": {
                    x: -166.75,
                    y: -257.45
                },
                "5": {
                    x: -166.797,
                    y: -246.296
                },
                "6": {
                    x: -166.75,
                    y: -235.1
                },
                "7": {
                    x: -166.797,
                    y: -224.546
                },
                "8": {
                    x: -166.75,
                    y: -213.9
                },
                "9": {
                    x: -166.72,
                    y: -209.707,
                    sx: 0.999,
                    sy: 0.999
                },
                "10": {
                    x: -166.65,
                    y: -205.45
                },
                "11": {
                    x: -166.72,
                    y: -230.934
                },
                "12": {
                    x: -166.75,
                    y: -256.3,
                    sx: 1,
                    sy: 1
                },
                "13": {
                    x: -166.797,
                    y: -261.596
                },
                "14": {
                    x: -166.75,
                    y: -266.9
                },
                "15": {
                    x: -166.847,
                    y: -262.146
                },
                "16": {
                    x: -166.75,
                    y: -257.45
                },
                "17": {
                    x: -166.797,
                    y: -246.296
                },
                "18": {
                    x: -166.75,
                    y: -235.1
                },
                "20": {
                    x: -166.797,
                    y: -224.546
                },
                "21": {
                    x: -166.75,
                    y: -213.9
                },
                "22": {
                    x: -166.72,
                    y: -209.707,
                    sx: 0.999,
                    sy: 0.999
                },
                "23": {
                    x: -166.65,
                    y: -205.45
                },
                "24": {
                    x: -166.72,
                    y: -230.934
                },
                "25": {
                    x: -166.75,
                    y: -256.3,
                    sx: 1,
                    sy: 1
                },
                "26": {
                    x: -166.797,
                    y: -261.596
                },
                "27": {
                    x: -166.75,
                    y: -266.9
                },
                "28": {
                    x: -166.847,
                    y: -262.146
                },
                "29": {
                    x: -166.75,
                    y: -257.45
                },
                "30": {
                    x: -166.797,
                    y: -246.296
                },
                "31": {
                    x: -166.75,
                    y: -235.1
                },
                "32": {
                    x: -166.797,
                    y: -224.546
                },
                "33": {
                    x: -166.75,
                    y: -213.9
                }
            })
            .addTimedChild(instance5, 0, 34, {
                "0": {
                    x: 226.05,
                    y: -263.7,
                    sx: 1.01,
                    sy: 1,
                    kx: 0.41,
                    ky: -0.271,
                    r: 0
                },
                "1": {
                    x: 226.074,
                    y: -269.584,
                    sx: 1.008,
                    ky: -0.283
                },
                "2": {
                    x: 226.05,
                    y: -275.45,
                    sx: 1.007,
                    ky: -0.296
                },
                "3": {
                    x: 226.184,
                    y: -269.008,
                    sx: 1.003,
                    ky: -0.353
                },
                "4": {
                    x: 226.05,
                    y: -262.55,
                    sx: 1,
                    kx: 0,
                    ky: 0,
                    r: -0.41
                },
                "5": {
                    x: 226.076,
                    y: -251.413,
                    sx: 1.001,
                    kx: 0.41,
                    ky: -0.44,
                    r: 0
                },
                "6": {
                    x: 226.05,
                    y: -240.2,
                    sx: 1.002,
                    ky: -0.469
                },
                "7": {
                    x: 225.559,
                    y: -229.648,
                    sx: 1.003,
                    ky: -0.489
                },
                "8": {
                    x: 224.9,
                    y: -219,
                    sx: 1.005,
                    ky: -0.508
                },
                "9": {
                    x: 225.622,
                    y: -214.844,
                    sx: 1.002,
                    sy: 0.999,
                    kx: 0.409,
                    ky: -0.461
                },
                "10": {
                    x: 226.05,
                    y: -210.65,
                    sx: 0.999,
                    kx: 0.407,
                    ky: -0.413
                },
                "11": {
                    x: 226.079,
                    y: -237.827,
                    sx: 1.002,
                    kx: 0.409,
                    ky: -0.359
                },
                "12": {
                    x: 226.05,
                    y: -264.85,
                    sx: 1.005,
                    sy: 1,
                    kx: 0.41,
                    ky: -0.305
                },
                "13": {
                    x: 226.082,
                    y: -269.025,
                    sx: 1.004,
                    ky: -0.327
                },
                "14": {
                    x: 226.05,
                    y: -273.15,
                    sx: 1.002,
                    ky: -0.349
                },
                "15": {
                    x: 226.111,
                    y: -267.93,
                    sx: 1.001,
                    ky: -0.38
                },
                "16": {
                    x: 226.05,
                    y: -262.55,
                    sx: 1,
                    kx: 0,
                    ky: 0,
                    r: -0.41
                },
                "17": {
                    x: 226.043,
                    y: -251.392
                },
                "18": {
                    x: 226.05,
                    y: -240.2
                },
                "20": {
                    x: 226.156,
                    y: -229.653,
                    kx: 0.41,
                    ky: -0.422,
                    r: 0
                },
                "21": {
                    x: 226.05,
                    y: -219,
                    ky: -0.434
                },
                "22": {
                    x: 226.068,
                    y: -214.874,
                    sy: 0.999,
                    kx: 0.409,
                    ky: -0.421
                },
                "23": {
                    x: 226.05,
                    y: -210.65,
                    sx: 0.999,
                    kx: 0,
                    ky: 0,
                    r: -0.407
                },
                "24": {
                    x: 226.044,
                    y: -237.187,
                    sx: 1.004,
                    kx: 0.409,
                    ky: -0.339,
                    r: 0
                },
                "25": {
                    x: 226.05,
                    y: -263.7,
                    sx: 1.01,
                    sy: 1,
                    kx: 0.41,
                    ky: -0.271
                },
                "26": {
                    x: 226.074,
                    y: -269.584,
                    sx: 1.008,
                    ky: -0.283
                },
                "27": {
                    x: 226.05,
                    y: -275.45,
                    sx: 1.007,
                    ky: -0.296
                },
                "28": {
                    x: 226.184,
                    y: -269.008,
                    sx: 1.003,
                    ky: -0.353
                },
                "29": {
                    x: 226.05,
                    y: -262.55,
                    sx: 1,
                    kx: 0,
                    ky: 0,
                    r: -0.41
                },
                "30": {
                    x: 226.076,
                    y: -251.413,
                    sx: 1.001,
                    kx: 0.41,
                    ky: -0.44,
                    r: 0
                },
                "31": {
                    x: 226.05,
                    y: -240.2,
                    sx: 1.002,
                    ky: -0.469
                },
                "32": {
                    x: 225.559,
                    y: -229.648,
                    sx: 1.003,
                    ky: -0.489
                },
                "33": {
                    x: 224.9,
                    y: -219,
                    sx: 1.005,
                    ky: -0.508
                }
            })
            .addTimedChild(instance4, 0, 34, {
                "0": {
                    x: 130.4,
                    y: -258.8,
                    sx: 0.972,
                    sy: 1.076,
                    kx: 0,
                    ky: 0,
                    r: -0.656
                },
                "1": {
                    x: 140.353,
                    y: -265.455,
                    sx: 0.971,
                    sy: 1.052,
                    r: -0.783
                },
                "2": {
                    x: 150.2,
                    y: -271.9,
                    sx: 0.969,
                    sy: 1.027,
                    r: -0.91
                },
                "3": {
                    x: 153.567,
                    y: -267.066,
                    sx: 0.971,
                    sy: 1.02,
                    r: -0.957
                },
                "4": {
                    x: 156.85,
                    y: -262.05,
                    sx: 0.972,
                    sy: 1.014,
                    r: -1.003
                },
                "5": {
                    x: 146.221,
                    y: -259.281,
                    sx: 0.986,
                    sy: 1.007,
                    r: -0.958
                },
                "6": {
                    x: 135.55,
                    y: -256.5,
                    sx: 1,
                    sy: 1,
                    r: -0.913
                },
                "7": {
                    x: 127.957,
                    y: -251.043,
                    r: -0.851
                },
                "8": {
                    x: 120.3,
                    y: -245.4,
                    r: -0.789
                },
                "9": {
                    x: 107.643,
                    y: -246.101,
                    sx: 0.999,
                    sy: 0.999,
                    r: -0.662
                },
                "10": {
                    x: 94.85,
                    y: -246.75,
                    r: -0.534
                },
                "11": {
                    x: 98.008,
                    y: -264.875,
                    sx: 1.026,
                    sy: 0.968,
                    r: -0.384
                },
                "12": {
                    x: 101,
                    y: -282.9,
                    sx: 1.053,
                    sy: 0.937,
                    r: -0.233
                },
                "13": {
                    x: 88.71,
                    y: -277.458,
                    sx: 1.026,
                    sy: 0.968,
                    r: -0.078
                },
                "14": {
                    x: 76.4,
                    y: -272,
                    sx: 1,
                    sy: 1,
                    r: 0.076
                },
                "15": {
                    x: 77.319,
                    y: -269.325,
                    r: 0.172
                },
                "16": {
                    x: 78.3,
                    y: -266.6,
                    r: 0.267
                },
                "17": {
                    x: 101.232,
                    y: -260.755,
                    sx: 0.968,
                    sy: 1.033,
                    kx: -0.254,
                    ky: 0.237,
                    r: 0
                },
                "18": {
                    x: 124,
                    y: -254.95,
                    sx: 0.937,
                    sy: 1.065,
                    kx: -0.24,
                    ky: 0.206
                },
                "20": {
                    x: 122.875,
                    y: -246.471,
                    sx: 0.949,
                    sy: 1.058,
                    kx: -0.035,
                    ky: 0.009
                },
                "21": {
                    x: 121.7,
                    y: -237.95,
                    sx: 0.96,
                    sy: 1.051,
                    kx: 0.169,
                    ky: -0.187
                },
                "22": {
                    x: 120.521,
                    y: -229.521,
                    sx: 0.972,
                    sy: 1.044,
                    kx: 0.323,
                    ky: -0.332
                },
                "23": {
                    x: 119.25,
                    y: -221.1,
                    sx: 0.985,
                    sy: 1.037,
                    kx: 0,
                    ky: 0,
                    r: -0.477
                },
                "24": {
                    x: 124.921,
                    y: -239.984,
                    sx: 0.978,
                    sy: 1.057,
                    r: -0.566
                },
                "25": {
                    x: 130.4,
                    y: -258.8,
                    sx: 0.972,
                    sy: 1.076,
                    r: -0.656
                },
                "26": {
                    x: 140.353,
                    y: -265.455,
                    sx: 0.971,
                    sy: 1.052,
                    r: -0.783
                },
                "27": {
                    x: 150.2,
                    y: -271.9,
                    sx: 0.969,
                    sy: 1.027,
                    r: -0.91
                },
                "28": {
                    x: 153.567,
                    y: -267.066,
                    sx: 0.971,
                    sy: 1.02,
                    r: -0.957
                },
                "29": {
                    x: 156.85,
                    y: -262.05,
                    sx: 0.972,
                    sy: 1.014,
                    r: -1.003
                },
                "30": {
                    x: 146.221,
                    y: -259.281,
                    sx: 0.986,
                    sy: 1.007,
                    r: -0.958
                },
                "31": {
                    x: 135.55,
                    y: -256.5,
                    sx: 1,
                    sy: 1,
                    r: -0.913
                },
                "32": {
                    x: 127.957,
                    y: -251.043,
                    r: -0.851
                },
                "33": {
                    x: 120.3,
                    y: -245.4,
                    r: -0.789
                }
            })
            .addTimedChild(instance3, 0, 34, {
                "0": {
                    x: 236.3,
                    y: -153.4,
                    sx: 0.95,
                    sy: 1.134,
                    kx: 0.594,
                    ky: -0.58,
                    r: 0
                },
                "1": {
                    x: 255.45,
                    y: -178,
                    sx: 0.948,
                    sy: 1.01,
                    kx: 0.882,
                    ky: -0.865
                },
                "2": {
                    x: 274.65,
                    y: -202.7,
                    sx: 0.95,
                    sy: 0.934,
                    kx: 1.091,
                    ky: -1.076
                },
                "3": {
                    x: 282.534,
                    y: -201.482,
                    kx: 1.136,
                    ky: -1.121
                },
                "4": {
                    x: 290.3,
                    y: -200.25,
                    kx: 1.181,
                    ky: -1.167
                },
                "5": {
                    x: 273.882,
                    y: -194.949,
                    sx: 0.975,
                    sy: 0.967,
                    kx: 1.164,
                    ky: -1.157
                },
                "6": {
                    x: 257.45,
                    y: -189.6,
                    sx: 1,
                    sy: 1,
                    kx: 0,
                    ky: 0,
                    r: -1.147
                },
                "7": {
                    x: 244.068,
                    y: -176.409,
                    sy: 0.933,
                    r: -0.858
                },
                "8": {
                    x: 230.45,
                    y: -163.2,
                    sy: 0.866,
                    r: -0.57
                },
                "9": {
                    x: 206.155,
                    y: -151.808,
                    sx: 0.999,
                    sy: 0.839,
                    r: -0.504
                },
                "10": {
                    x: 181.8,
                    y: -140.3,
                    sy: 0.811,
                    r: -0.437
                },
                "11": {
                    x: 166.608,
                    y: -151.16,
                    sy: 0.839,
                    r: -0.243
                },
                "12": {
                    x: 151.25,
                    y: -161.95,
                    sx: 1,
                    sy: 0.866,
                    r: -0.048
                },
                "13": {
                    x: 119.178,
                    y: -147.279,
                    sy: 0.815,
                    kx: 0.093,
                    ky: -0.063,
                    r: 0
                },
                "14": {
                    x: 87.05,
                    y: -132.6,
                    sy: 0.763,
                    kx: 0.137,
                    ky: -0.078
                },
                "15": {
                    x: 73.761,
                    y: -130.457,
                    sy: 0.815,
                    kx: -0.169,
                    ky: 0.198
                },
                "16": {
                    x: 60.35,
                    y: -128.3,
                    sy: 0.866,
                    kx: 0,
                    ky: 0,
                    r: 0.475
                },
                "17": {
                    x: 84.383,
                    y: -118.142,
                    sx: 0.956,
                    sy: 0.902,
                    r: 0.348
                },
                "18": {
                    x: 108.4,
                    y: -107.95,
                    sx: 0.913,
                    sy: 0.939,
                    r: 0.222
                },
                "20": {
                    x: 136.869,
                    y: -105.616,
                    sx: 0.956,
                    sy: 0.931,
                    r: 0.012
                },
                "21": {
                    x: 165.15,
                    y: -103.2,
                    sx: 1,
                    sy: 0.923,
                    r: -0.198
                },
                "22": {
                    x: 183.485,
                    y: -105.107,
                    sx: 0.987,
                    sy: 0.948,
                    kx: 0.366,
                    ky: -0.363,
                    r: 0
                },
                "23": {
                    x: 201.75,
                    y: -107.05,
                    sx: 0.974,
                    sy: 0.973,
                    kx: 0.534,
                    ky: -0.528
                },
                "24": {
                    x: 219.139,
                    y: -130.222,
                    sx: 0.962,
                    sy: 1.054,
                    kx: 0.564,
                    ky: -0.554
                },
                "25": {
                    x: 236.3,
                    y: -153.4,
                    sx: 0.95,
                    sy: 1.134,
                    kx: 0.594,
                    ky: -0.58
                },
                "26": {
                    x: 255.45,
                    y: -178,
                    sx: 0.948,
                    sy: 1.01,
                    kx: 0.882,
                    ky: -0.865
                },
                "27": {
                    x: 274.65,
                    y: -202.7,
                    sx: 0.95,
                    sy: 0.934,
                    kx: 1.091,
                    ky: -1.076
                },
                "28": {
                    x: 282.534,
                    y: -201.482,
                    kx: 1.136,
                    ky: -1.121
                },
                "29": {
                    x: 290.3,
                    y: -200.25,
                    kx: 1.181,
                    ky: -1.167
                },
                "30": {
                    x: 273.882,
                    y: -194.949,
                    sx: 0.975,
                    sy: 0.967,
                    kx: 1.164,
                    ky: -1.157
                },
                "31": {
                    x: 257.45,
                    y: -189.6,
                    sx: 1,
                    sy: 1,
                    kx: 0,
                    ky: 0,
                    r: -1.147
                },
                "32": {
                    x: 244.068,
                    y: -176.409,
                    sy: 0.933,
                    r: -0.858
                },
                "33": {
                    x: 230.45,
                    y: -163.2,
                    sy: 0.866,
                    r: -0.57
                }
            })
            .addTimedChild(instance2, 0, 34, {
                "0": {
                    x: 270.95,
                    y: -33.1,
                    sx: 1,
                    sy: 1,
                    r: -0.017
                },
                "1": {
                    x: 293.75,
                    y: -99.55,
                    sx: 0.999,
                    sy: 0.999,
                    r: -0.511
                },
                "2": {
                    x: 316.4,
                    y: -140.55,
                    sx: 1,
                    sy: 1,
                    r: -0.78
                },
                "3": {
                    x: 327.795,
                    y: -145.752,
                    r: -0.921
                },
                "4": {
                    x: 339,
                    y: -150.9,
                    r: -1.062
                },
                "5": {
                    x: 325.571,
                    y: -140.142,
                    r: -0.917
                },
                "6": {
                    x: 311.95,
                    y: -129.4,
                    r: -0.771
                },
                "7": {
                    x: 274.201,
                    y: -112.94,
                    r: -0.619
                },
                "8": {
                    x: 236.35,
                    y: -96.45,
                    r: -0.466
                },
                "9": {
                    x: 208.843,
                    y: -87.277,
                    sx: 0.999,
                    sy: 0.999,
                    r: -0.397
                },
                "10": {
                    x: 181.2,
                    y: -78.15,
                    r: -0.328
                },
                "11": {
                    x: 153.719,
                    y: -90.317,
                    r: -0.26
                },
                "12": {
                    x: 126.05,
                    y: -102.3,
                    sx: 1,
                    sy: 1,
                    r: -0.192
                },
                "13": {
                    x: 93.657,
                    y: -92.639,
                    r: -0.018
                },
                "14": {
                    x: 61.15,
                    y: -82.8,
                    r: 0.157
                },
                "15": {
                    x: 30.739,
                    y: -82.566,
                    r: 0.294
                },
                "16": {
                    x: 0.15,
                    y: -82.2,
                    r: 0.431
                },
                "17": {
                    x: 31.173,
                    y: -64.135,
                    r: 0.366
                },
                "18": {
                    x: 62.3,
                    y: -45.9,
                    r: 0.3
                },
                "20": {
                    x: 103.05,
                    y: -33.75,
                    r: 0.027
                },
                "21": {
                    x: 143.75,
                    y: -33.1,
                    r: -0.017
                },
                "22": {
                    x: 175.595,
                    y: -33.175,
                    r: -0.016
                },
                "23": {
                    x: 207.35,
                    y: -33.1,
                    r: -0.014
                },
                "24": {
                    x: 239.248,
                    y: -33.173,
                    r: -0.016
                },
                "25": {
                    x: 270.95,
                    y: -33.1,
                    r: -0.017
                },
                "26": {
                    x: 293.75,
                    y: -99.55,
                    sx: 0.999,
                    sy: 0.999,
                    r: -0.511
                },
                "27": {
                    x: 316.4,
                    y: -140.55,
                    sx: 1,
                    sy: 1,
                    r: -0.78
                },
                "28": {
                    x: 327.795,
                    y: -145.752,
                    r: -0.921
                },
                "29": {
                    x: 339,
                    y: -150.9,
                    r: -1.062
                },
                "30": {
                    x: 325.571,
                    y: -140.142,
                    r: -0.917
                },
                "31": {
                    x: 311.95,
                    y: -129.4,
                    r: -0.771
                },
                "32": {
                    x: 274.201,
                    y: -112.94,
                    r: -0.619
                },
                "33": {
                    x: 236.35,
                    y: -96.45,
                    r: -0.466
                }
            })
            .addTimedChild(instance1, 0, 34, {
                "0": {
                    x: -185.8,
                    y: -418.25,
                    sx: 1,
                    sy: 1,
                    r: -0.337
                },
                "1": {
                    x: -185.857,
                    y: -423.587,
                    r: -0.326
                },
                "2": {
                    x: -185.8,
                    y: -428.85,
                    r: -0.315
                },
                "3": {
                    x: -185.833,
                    y: -424.121,
                    r: -0.298
                },
                "4": {
                    x: -185.8,
                    y: -419.4,
                    r: -0.28
                },
                "5": {
                    x: -185.818,
                    y: -408.203,
                    r: -0.261
                },
                "6": {
                    x: -185.8,
                    y: -397.05,
                    r: -0.242
                },
                "7": {
                    x: -185.877,
                    y: -386.488,
                    r: -0.237
                },
                "8": {
                    x: -185.8,
                    y: -375.85,
                    r: -0.232
                },
                "9": {
                    x: -185.788,
                    y: -371.67,
                    r: -0.241
                },
                "10": {
                    x: -185.75,
                    y: -367.5,
                    sx: 0.999,
                    sy: 0.999,
                    r: -0.25
                },
                "11": {
                    x: -185.824,
                    y: -392.916,
                    sx: 1,
                    sy: 1,
                    r: -0.28
                },
                "12": {
                    x: -185.8,
                    y: -418.25,
                    r: -0.311
                },
                "13": {
                    x: -185.78,
                    y: -423.566,
                    r: -0.315
                },
                "14": {
                    x: -185.8,
                    y: -428.85,
                    r: -0.319
                },
                "15": {
                    x: -185.847,
                    y: -424.182,
                    r: -0.3
                },
                "16": {
                    x: -185.8,
                    y: -419.4,
                    r: -0.28
                },
                "17": {
                    x: -185.823,
                    y: -408.217,
                    r: -0.272
                },
                "18": {
                    x: -185.8,
                    y: -397.05,
                    r: -0.264
                },
                "20": {
                    x: -185.824,
                    y: -386.457,
                    r: -0.257
                },
                "21": {
                    x: -185.8,
                    y: -375.85,
                    r: -0.25
                },
                "22": {
                    x: -185.798,
                    y: -371.725,
                    r: -0.265
                },
                "23": {
                    x: -185.75,
                    y: -367.5,
                    sx: 0.999,
                    sy: 0.999,
                    r: -0.28
                },
                "24": {
                    x: -185.792,
                    y: -392.897,
                    sx: 1,
                    sy: 1,
                    r: -0.308
                },
                "25": {
                    x: -185.8,
                    y: -418.25,
                    r: -0.337
                },
                "26": {
                    x: -185.857,
                    y: -423.587,
                    r: -0.326
                },
                "27": {
                    x: -185.8,
                    y: -428.85,
                    r: -0.315
                },
                "28": {
                    x: -185.833,
                    y: -424.121,
                    r: -0.298
                },
                "29": {
                    x: -185.8,
                    y: -419.4,
                    r: -0.28
                },
                "30": {
                    x: -185.818,
                    y: -408.203,
                    r: -0.261
                },
                "31": {
                    x: -185.8,
                    y: -397.05,
                    r: -0.242
                },
                "32": {
                    x: -185.877,
                    y: -386.488,
                    r: -0.237
                },
                "33": {
                    x: -185.8,
                    y: -375.85,
                    r: -0.232
                }
            });
    });

    var Graphic53 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 231, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.TREX[17]);
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[14]);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic54 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 231, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[20]);
        this.addTimedChild(instance1);
    });

    var Graphic55 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 231, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.TREX[22]);
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[21]);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic56 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 231, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[23]);
        this.addTimedChild(instance1);
    });

    var Graphic57 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 195, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[24]);
        var instance2 = new Graphics()
            .drawCommands(shapes.TREX[34]);
        var instance3 = new Graphics()
            .drawCommands(shapes.TREX[35]);
        var instance5 = new Graphics()
            .drawCommands(shapes.TREX[36]);
        var instance4 = new Graphics()
            .drawCommands(shapes.TREX[33]);
        var instance6 = new Graphics()
            .drawCommands(shapes.TREX[35]);
        var instance7 = new Graphics()
            .drawCommands(shapes.TREX[24]);
        this.addTimedChild(instance1, 0, 21)
            .addTimedChild(instance2, 21, 1)
            .addTimedChild(instance3, 22, 72)
            .addTimedChild(instance5, 94, 79)
            .addTimedChild(instance4, 94, 79)
            .addTimedChild(instance6, 173, 1)
            .addTimedChild(instance7, 174, 21);
    });

    var Graphic68 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[24]);
        var instance2 = new Graphics()
            .drawCommands(shapes.TREX[34]);
        this.addTimedChild(instance1, 0, 1)
            .addTimedChild(instance2, 1, 2);
    });

    var Graphic70 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[34]);
        var instance2 = new Graphics()
            .drawCommands(shapes.TREX[24]);
        this.addTimedChild(instance1, 0, 2)
            .addTimedChild(instance2, 2, 1);
    });

    var Graphic72 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[24]);
        this.addTimedChild(instance1);
    });

    var Graphic58 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 193, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[25]);
        var instance2 = new Graphics()
            .drawCommands(shapes.TREX[39]);
        var instance3 = new Graphics()
            .drawCommands(shapes.TREX[40]);
        var instance4 = new Graphics()
            .drawCommands(shapes.TREX[25]);
        this.addTimedChild(instance1, 0, 24)
            .addTimedChild(instance2, 24, 3)
            .addTimedChild(instance3, 27, 138)
            .addTimedChild(instance4, 165, 28);
    });

    var Graphic69 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 27, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[47]);
        var instance2 = new Graphics()
            .drawCommands(shapes.TREX[46]);
        this.addTimedChild(instance1)
            .addTimedChild(instance2, 1, 25);
    });

    lib.Graphic73 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[25]);
        this.addChild(instance1);
    });

    var Graphic59 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 231, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[26]);
        this.addTimedChild(instance1);
    });

    var Graphic51 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 231, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[29])
            .setRenderable(false);
        var instance3 = new Graphics()
            .drawCommands(shapes.TREX[29]);
        var instance2 = new Graphics()
            .drawCommands(shapes.TREX[30])
            .setMask(instance1);
        this.addTimedChild(instance1)
            .addTimedChild(instance3)
            .addTimedChild(instance2);
    });

    var Graphic60 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 231, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.TREX[28])
            .setRenderable(false);
        var instance4 = new Graphics()
            .drawCommands(shapes.TREX[31]);
        var instance3 = new Graphic51(MovieClip.SYNCHED)
            .setTransform(154.95, 405.55, 0.91, 0.91, -0.065)
            .setMask(instance2);
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[27]);
        this.addTimedChild(instance2)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance1);
    });

    var Graphic61 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 231, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[32]);
        this.addTimedChild(instance1);
    });

    var Graphic62 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 196, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[24]);
        var instance2 = new Graphics()
            .drawCommands(shapes.TREX[48]);
        this.addTimedChild(instance1, 0, 163)
            .addTimedChild(instance2, 163, 33);
    });

    var Graphic71 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 4, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[48]);
        var instance2 = new Graphics()
            .drawCommands(shapes.TREX[24]);
        this.addTimedChild(instance1, 0, 2)
            .addTimedChild(instance2, 2, 2);
    });

    var Graphic63 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 193, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[25]);
        var instance2 = new Graphics()
            .drawCommands(shapes.TREX[49]);
        var instance3 = new Graphics()
            .drawCommands(shapes.TREX[40]);
        var instance4 = new Graphics()
            .drawCommands(shapes.TREX[49]);
        this.addTimedChild(instance1, 0, 163)
            .addTimedChild(instance2, 163, 9)
            .addTimedChild(instance3, 172, 3)
            .addTimedChild(instance4, 175, 18);
    });

    var Graphic67 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 33, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[52]);
        this.addTimedChild(instance1);
    });

    lib.Graphic74 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[25]);
        this.addChild(instance1);
    });

    var Graphic64 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 231, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.TREX[18]);
        var instance3 = new Graphics()
            .drawCommands(shapes.TREX[17]);
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[14]);
        this.addTimedChild(instance2, 0, 30)
            .addTimedChild(instance3, 30, 201)
            .addTimedChild(instance1);
    });


    var beeSvg = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/bee.svg";

    // SWAP OUT ASSET

    // var Graphic65 = MovieClip.extend(function (mode) {
    //     MovieClip.call(this, { mode: mode, duration: 231, loop: false });
    //     var instance1 = new Graphics()
    //         .drawCommands(shapes.TREX[20]);
    //     this.addTimedChild(instance1);
    // });

    var Graphic65 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 231, loop: false });
        // var instance1 = new Graphics()
        //     .drawCommands(shapes.TREX[20]);
        var beeTexture = new PIXI.Texture.fromImage(beeSvg, undefined, undefined, 1.0);
        var bee = new PIXI.Sprite(beeTexture)
        var instance1 = bee;
        this.addTimedChild(instance1);
    });

    var Graphic66 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 231, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.TREX[22]);
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[21]);
        this.addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic167 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 267, loop: false });
        var instance15 = new Graphic66(MovieClip.SYNCHED);
        var instance14 = new Graphic65(MovieClip.SYNCHED);
        var instance13 = new Graphic64(MovieClip.SYNCHED);
        var instance12 = new Graphic63(MovieClip.SYNCHED);
        var instance17 = new Graphics()
            .drawCommands(shapes.TREX[50]);
        var instance19 = new Graphics()
            .drawCommands(shapes.TREX[51]);
        var instance21 = new Graphic67(MovieClip.SYNCHED);
        var instance11 = new Graphic62(MovieClip.SYNCHED);
        var instance37 = new Graphics()
            .drawCommands(shapes.TREX[53]);
        var instance39 = new Graphics()
            .drawCommands(shapes.TREX[54]);
        var instance41 = new lib.Graphic74();
        var instance34 = new Graphic71(MovieClip.SYNCHED);
        var instance10 = new Graphic61(MovieClip.SYNCHED);
        var instance9 = new Graphic60(MovieClip.SYNCHED);
        var instance8 = new Graphic59(MovieClip.SYNCHED);
        var instance7 = new Graphic58(MovieClip.SYNCHED);
        var instance16 = new Graphics()
            .drawCommands(shapes.TREX[41]);
        var instance18 = new Graphics()
            .drawCommands(shapes.TREX[42]);
        var instance6 = new Graphic57(MovieClip.SYNCHED);
        var instance20 = new Graphics()
            .drawCommands(shapes.TREX[43]);
        var instance23 = new Graphics()
            .drawCommands(shapes.TREX[44]);
        var instance25 = new Graphics()
            .drawCommands(shapes.TREX[45]);
        var instance27 = new Graphic69(MovieClip.SYNCHED);
        var instance22 = new Graphic68(MovieClip.SYNCHED);
        var instance24 = new Graphics()
            .drawCommands(shapes.TREX[37]);
        var instance26 = new Graphics()
            .drawCommands(shapes.TREX[38]);
        var instance31 = new Graphics()
            .drawCommands(shapes.TREX[45]);
        var instance32 = new Graphics()
            .drawCommands(shapes.TREX[44]);
        var instance29 = new Graphic70(MovieClip.SYNCHED);
        var instance28 = new Graphics()
            .drawCommands(shapes.TREX[38]);
        var instance30 = new Graphics()
            .drawCommands(shapes.TREX[37]);
        var instance33 = new Graphics()
            .drawCommands(shapes.TREX[43]);
        var instance36 = new Graphics()
            .drawCommands(shapes.TREX[42]);
        var instance38 = new Graphics()
            .drawCommands(shapes.TREX[41]);
        var instance40 = new lib.Graphic73();
        var instance35 = new Graphic72(MovieClip.SYNCHED);
        var instance5 = new Graphic56(MovieClip.SYNCHED);
        var instance4 = new Graphic55(MovieClip.SYNCHED);
        var instance3 = new Graphic54(MovieClip.SYNCHED);
        var instance2 = new Graphic53(MovieClip.SYNCHED);
        var instance1 = new Graphic52(MovieClip.SYNCHED);
        var instance42 = new Graphic75(MovieClip.SYNCHED);
        this.addTimedChild(instance15, 0, 231, {
                "0": {
                    x: -33.8,
                    y: -227.55,
                    sx: 1,
                    sy: 1,
                    r: 0.117
                },
                "15": {
                    x: -33.544,
                    y: -226.662,
                    r: 0.115
                },
                "16": {
                    x: -32.775,
                    y: -224.231,
                    r: 0.108
                },
                "17": {
                    x: -32.124,
                    y: -222.17,
                    r: 0.102
                },
                "18": {
                    x: -31.9,
                    y: -221.5,
                    r: 0.101
                },
                "19": {
                    x: -37.833,
                    y: -224.156,
                    r: 0.078
                },
                "20": {
                    x: -51.765,
                    y: -230.249,
                    r: 0.024
                },
                "21": {
                    x: -67.841,
                    y: -237.294,
                    r: -0.038
                },
                "22": {
                    x: -82.208,
                    y: -243.623,
                    r: -0.093
                },
                "23": {
                    x: -92.794,
                    y: -248.32,
                    r: -0.134
                },
                "24": {
                    x: -98.9,
                    y: -251,
                    r: -0.157
                },
                "25": {
                    x: -101.457,
                    y: -248.255,
                    r: -0.178
                },
                "26": {
                    x: -105.514,
                    y: -243.883,
                    r: -0.21
                },
                "27": {
                    x: -110.398,
                    y: -238.551,
                    r: -0.25
                },
                "28": {
                    x: -115.337,
                    y: -233.061,
                    r: -0.29
                },
                "29": {
                    x: -119.771,
                    y: -228.279,
                    r: -0.326
                },
                "30": {
                    x: -122.4,
                    y: -225.2,
                    r: -0.348
                },
                "31": {
                    x: -122.521,
                    y: -225.793,
                    r: -0.347
                },
                "32": {
                    x: -122.922,
                    y: -227.491,
                    r: -0.344
                },
                "33": {
                    x: -123.306,
                    y: -229.534,
                    r: -0.339
                },
                "34": {
                    x: -123.615,
                    y: -231.255,
                    r: -0.336
                },
                "35": {
                    x: -123.886,
                    y: -232.557,
                    r: -0.333
                },
                "36": {
                    x: -124.056,
                    y: -233.35,
                    r: -0.332
                },
                "37": {
                    x: -124.105,
                    y: -233.805,
                    r: -0.331
                },
                "38": {
                    x: -124.05,
                    y: -233.9
                },
                "95": {
                    x: -124.183,
                    y: -233.839
                },
                "96": {
                    x: -124.553,
                    y: -233.212,
                    r: -0.334
                },
                "97": {
                    x: -124.925,
                    y: -232.674,
                    r: -0.338
                },
                "98": {
                    x: -124.95,
                    y: -232.45
                },
                "99": {
                    x: -124.985,
                    y: -232.607
                },
                "100": {
                    x: -124.745,
                    y: -232.944,
                    r: -0.336
                },
                "101": {
                    x: -124.446,
                    y: -233.51,
                    r: -0.333
                },
                "102": {
                    x: -124.197,
                    y: -233.847,
                    r: -0.331
                },
                "103": {
                    x: -124.05,
                    y: -233.9
                },
                "104": {
                    x: -124.183,
                    y: -233.839
                },
                "105": {
                    x: -124.553,
                    y: -233.212,
                    r: -0.334
                },
                "106": {
                    x: -124.925,
                    y: -232.674,
                    r: -0.338
                },
                "107": {
                    x: -124.95,
                    y: -232.45
                },
                "108": {
                    x: -124.985,
                    y: -232.607
                },
                "109": {
                    x: -124.745,
                    y: -232.944,
                    r: -0.336
                },
                "110": {
                    x: -124.446,
                    y: -233.51,
                    r: -0.333
                },
                "111": {
                    x: -124.197,
                    y: -233.847,
                    r: -0.331
                },
                "112": {
                    x: -124.05,
                    y: -233.9
                },
                "113": {
                    x: -124.183,
                    y: -233.839
                },
                "114": {
                    x: -124.553,
                    y: -233.212,
                    r: -0.334
                },
                "115": {
                    x: -124.925,
                    y: -232.674,
                    r: -0.338
                },
                "116": {
                    x: -124.95,
                    y: -232.45
                },
                "117": {
                    x: -124.985,
                    y: -232.607
                },
                "118": {
                    x: -124.745,
                    y: -232.944,
                    r: -0.336
                },
                "119": {
                    x: -124.446,
                    y: -233.51,
                    r: -0.333
                },
                "120": {
                    x: -124.197,
                    y: -233.847,
                    r: -0.331
                },
                "121": {
                    x: -124.05,
                    y: -233.9
                },
                "122": {
                    x: -124.183,
                    y: -233.839
                },
                "123": {
                    x: -124.553,
                    y: -233.212,
                    r: -0.334
                },
                "124": {
                    x: -124.925,
                    y: -232.674,
                    r: -0.338
                },
                "125": {
                    x: -124.95,
                    y: -232.45
                },
                "126": {
                    x: -124.985,
                    y: -232.607
                },
                "127": {
                    x: -124.745,
                    y: -232.944,
                    r: -0.336
                },
                "128": {
                    x: -124.446,
                    y: -233.51,
                    r: -0.333
                },
                "129": {
                    x: -124.197,
                    y: -233.847,
                    r: -0.331
                },
                "130": {
                    x: -124.05,
                    y: -233.9
                },
                "131": {
                    x: -124.183,
                    y: -233.839
                },
                "132": {
                    x: -124.553,
                    y: -233.212,
                    r: -0.334
                },
                "133": {
                    x: -124.925,
                    y: -232.674,
                    r: -0.338
                },
                "134": {
                    x: -124.95,
                    y: -232.45
                },
                "135": {
                    x: -124.985,
                    y: -232.607
                },
                "136": {
                    x: -124.745,
                    y: -232.944,
                    r: -0.336
                },
                "137": {
                    x: -124.446,
                    y: -233.51,
                    r: -0.333
                },
                "138": {
                    x: -124.197,
                    y: -233.847,
                    r: -0.331
                },
                "139": {
                    x: -124.05,
                    y: -233.9
                },
                "140": {
                    x: -124.183,
                    y: -233.839
                },
                "141": {
                    x: -124.553,
                    y: -233.212,
                    r: -0.334
                },
                "142": {
                    x: -124.925,
                    y: -232.674,
                    r: -0.338
                },
                "143": {
                    x: -124.95,
                    y: -232.45
                },
                "144": {
                    x: -124.985,
                    y: -232.607
                },
                "145": {
                    x: -124.745,
                    y: -232.944,
                    r: -0.336
                },
                "146": {
                    x: -124.446,
                    y: -233.51,
                    r: -0.333
                },
                "147": {
                    x: -124.197,
                    y: -233.847,
                    r: -0.331
                },
                "148": {
                    x: -124.05,
                    y: -233.9
                },
                "149": {
                    x: -124.183,
                    y: -233.839
                },
                "150": {
                    x: -124.553,
                    y: -233.212,
                    r: -0.334
                },
                "151": {
                    x: -124.925,
                    y: -232.674,
                    r: -0.338
                },
                "152": {
                    x: -124.95,
                    y: -232.45
                },
                "153": {
                    x: -124.985,
                    y: -232.607
                },
                "154": {
                    x: -124.745,
                    y: -232.944,
                    r: -0.336
                },
                "155": {
                    x: -124.446,
                    y: -233.51,
                    r: -0.333
                },
                "156": {
                    x: -124.197,
                    y: -233.847,
                    r: -0.331
                },
                "157": {
                    x: -124.05,
                    y: -233.9
                },
                "158": {
                    x: -124.183,
                    y: -233.839
                },
                "159": {
                    x: -124.553,
                    y: -233.212,
                    r: -0.334
                },
                "160": {
                    x: -124.925,
                    y: -232.674,
                    r: -0.338
                },
                "161": {
                    x: -124.95,
                    y: -232.45
                },
                "162": {
                    x: -125.779,
                    y: -229.823,
                    r: -0.345
                },
                "163": {
                    x: -126.5,
                    y: -227.1,
                    r: -0.351
                },
                "164": {
                    x: -119.693,
                    y: -232.108,
                    r: -0.329
                },
                "165": {
                    x: -113.154,
                    y: -236.83,
                    r: -0.308
                },
                "166": {
                    x: -108.966,
                    y: -239.904,
                    r: -0.295
                },
                "167": {
                    x: -106.754,
                    y: -241.503,
                    r: -0.288
                },
                "168": {
                    x: -105.95,
                    y: -241.95,
                    r: -0.286
                },
                "171": {
                    x: -104.85,
                    y: -243.35,
                    r: -0.278
                },
                "172": {
                    x: -110.8,
                    y: -235.15,
                    sx: 0.999,
                    sy: 0.999,
                    r: -0.354
                },
                "173": {
                    x: -111.2,
                    y: -234.55,
                    sx: 1,
                    sy: 1,
                    r: -0.359
                },
                "174": {
                    x: -105.222,
                    y: -238.815,
                    r: -0.283
                },
                "175": {
                    x: -102.147,
                    y: -240.999,
                    r: -0.244
                },
                "176": {
                    x: -100.317,
                    y: -242.289,
                    r: -0.221
                },
                "177": {
                    x: -99.088,
                    y: -243.095,
                    r: -0.206
                },
                "178": {
                    x: -98.317,
                    y: -243.619,
                    r: -0.196
                },
                "179": {
                    x: -97.886,
                    y: -244.001,
                    r: -0.19
                },
                "180": {
                    x: -97.622,
                    y: -244.175,
                    r: -0.186
                },
                "181": {
                    x: -97.45,
                    y: -244.2,
                    r: -0.185
                },
                "186": {
                    x: -97.95,
                    y: -243.7,
                    r: -0.19
                },
                "187": {
                    x: -97.721,
                    y: -243.755,
                    r: -0.186
                },
                "188": {
                    x: -96.744,
                    y: -243.925,
                    r: -0.171
                },
                "189": {
                    x: -94.781,
                    y: -244.207,
                    r: -0.144
                },
                "190": {
                    x: -91.936,
                    y: -244.717,
                    r: -0.104
                },
                "191": {
                    x: -88.415,
                    y: -245.265,
                    r: -0.054
                },
                "192": {
                    x: -84.858,
                    y: -245.845,
                    r: -0.004
                },
                "193": {
                    x: -81.826,
                    y: -246.352,
                    r: 0.039
                },
                "194": {
                    x: -79.443,
                    y: -246.653,
                    r: 0.072
                },
                "195": {
                    x: -77.706,
                    y: -246.945,
                    r: 0.097
                },
                "196": {
                    x: -76.467,
                    y: -247.135,
                    r: 0.114
                },
                "197": {
                    x: -75.719,
                    y: -247.246,
                    r: 0.124
                },
                "198": {
                    x: -75.32,
                    y: -247.346,
                    r: 0.13
                },
                "199": {
                    x: -75.15,
                    y: -247.35,
                    r: 0.132
                },
                "225": {
                    x: -82.23,
                    y: -248.204,
                    r: 0.102
                },
                "226": {
                    x: -100.155,
                    y: -250.441,
                    r: 0.024
                },
                "227": {
                    x: -122.586,
                    y: -253.197,
                    r: -0.072
                },
                "228": {
                    x: -142.759,
                    y: -255.668,
                    r: -0.159
                },
                "229": {
                    x: -156.169,
                    y: -257.298,
                    r: -0.216
                },
                "230": {
                    x: -160.75,
                    y: -257.8,
                    r: -0.236
                }
            })
            .addTimedChild(instance14, 0, 231, {
                "0": {
                    x: -33.2,
                    y: -86.25,
                    sx: 0.945,
                    sy: 1.042,
                    kx: -0.516,
                    ky: 0.493
                },
                "15": {
                    x: -32.589,
                    y: -85.288,
                    sx: 0.941,
                    sy: 1.026,
                    kx: -0.529,
                    ky: 0.497
                },
                "16": {
                    x: -30.722,
                    y: -82.473,
                    sx: 0.93,
                    sy: 0.982,
                    kx: -0.567,
                    ky: 0.51
                },
                "17": {
                    x: -29.179,
                    y: -80.066,
                    sx: 0.92,
                    sy: 0.945,
                    kx: -0.599,
                    ky: 0.52
                },
                "18": {
                    x: -28.7,
                    y: -79.25,
                    sx: 0.917,
                    sy: 0.934,
                    kx: -0.609,
                    ky: 0.523
                },
                "19": {
                    x: -31.273,
                    y: -82.655,
                    sx: 0.921,
                    sy: 0.94,
                    kx: -0.558,
                    ky: 0.478
                },
                "20": {
                    x: -37.199,
                    y: -90.558,
                    sx: 0.929,
                    sy: 0.953,
                    kx: -0.438,
                    ky: 0.373
                },
                "21": {
                    x: -44.153,
                    y: -99.786,
                    sx: 0.939,
                    sy: 0.968,
                    kx: -0.3,
                    ky: 0.251
                },
                "22": {
                    x: -50.337,
                    y: -107.905,
                    sx: 0.948,
                    sy: 0.981,
                    kx: -0.176,
                    ky: 0.142
                },
                "23": {
                    x: -54.88,
                    y: -113.994,
                    sx: 0.954,
                    sy: 0.991,
                    kx: -0.085,
                    ky: 0.062
                },
                "24": {
                    x: -57.45,
                    y: -117.4,
                    sx: 0.958,
                    sy: 0.997,
                    kx: -0.032,
                    ky: 0.015
                },
                "25": {
                    x: -57.706,
                    y: -115.885,
                    sx: 0.962,
                    sy: 0.991,
                    kx: -0.031,
                    ky: 0.022
                },
                "26": {
                    x: -58.057,
                    y: -113.419,
                    sx: 0.969,
                    sy: 0.982,
                    kx: -0.03,
                    ky: 0.033
                },
                "27": {
                    x: -58.43,
                    y: -110.379,
                    sx: 0.978,
                    sy: 0.97,
                    kx: -0.028,
                    ky: 0.046
                },
                "28": {
                    x: -58.852,
                    y: -107.393,
                    sx: 0.987,
                    sy: 0.959,
                    kx: -0.026,
                    ky: 0.059
                },
                "29": {
                    x: -59.215,
                    y: -104.679,
                    sx: 0.995,
                    sy: 0.949,
                    kx: -0.024,
                    ky: 0.071
                },
                "30": {
                    x: -59.4,
                    y: -102.95,
                    sx: 1,
                    sy: 0.942,
                    kx: -0.023,
                    ky: 0.078
                },
                "31": {
                    x: -59.755,
                    y: -103.018,
                    kx: -0.02,
                    ky: 0.075
                },
                "32": {
                    x: -60.549,
                    y: -103.026,
                    kx: -0.012,
                    ky: 0.067
                },
                "33": {
                    x: -61.516,
                    y: -103.016,
                    kx: -0.002,
                    ky: 0.057
                },
                "34": {
                    x: -62.343,
                    y: -102.979,
                    kx: 0.007,
                    ky: 0.049
                },
                "35": {
                    x: -62.883,
                    y: -102.982,
                    kx: 0.013,
                    ky: 0.042
                },
                "36": {
                    x: -63.294,
                    y: -103.023,
                    kx: 0.017,
                    ky: 0.038
                },
                "37": {
                    x: -63.566,
                    y: -102.982,
                    kx: 0.019,
                    ky: 0.036
                },
                "38": {
                    x: -63.6,
                    y: -102.95,
                    kx: 0.02,
                    ky: 0.035
                },
                "164": {
                    x: -60.078,
                    sx: 0.998,
                    sy: 0.947,
                    kx: -0.048
                },
                "165": {
                    x: -56.584,
                    y: -102.997,
                    sx: 0.997,
                    sy: 0.951,
                    kx: -0.113
                },
                "166": {
                    x: -54.451,
                    y: -102.984,
                    sx: 0.995,
                    sy: 0.954,
                    kx: -0.155
                },
                "167": {
                    x: -53.256,
                    y: -103.021,
                    sy: 0.956,
                    kx: -0.177
                },
                "168": {
                    x: -52.85,
                    y: -102.95,
                    kx: -0.183
                },
                "172": {
                    x: -50.45,
                    y: -103.05,
                    sx: 0.994,
                    sy: 0.959,
                    kx: -0.202
                },
                "173": {
                    x: -50.25,
                    y: -102.95,
                    sy: 0.96,
                    kx: -0.206,
                    ky: 0.036
                },
                "174": {
                    x: -52.029,
                    y: -105.474,
                    sx: 0.978,
                    sy: 0.947,
                    kx: -0.192,
                    ky: 0.013
                },
                "175": {
                    x: -52.97,
                    y: -106.718,
                    sx: 0.971,
                    sy: 0.941,
                    kx: -0.184,
                    ky: 0.001
                },
                "176": {
                    x: -53.489,
                    y: -107.494,
                    sx: 0.966,
                    sy: 0.937,
                    kx: -0.18,
                    ky: -0.006
                },
                "177": {
                    x: -53.845,
                    y: -107.959,
                    sx: 0.963,
                    sy: 0.934,
                    kx: -0.177,
                    ky: -0.011
                },
                "178": {
                    x: -54.062,
                    y: -108.308,
                    sx: 0.961,
                    sy: 0.932,
                    kx: -0.175,
                    ky: -0.014
                },
                "179": {
                    x: -54.153,
                    y: -108.493,
                    sx: 0.96,
                    sy: 0.931,
                    kx: -0.174,
                    ky: -0.015
                },
                "180": {
                    x: -54.276,
                    y: -108.581,
                    sx: 0.959,
                    ky: -0.016
                },
                "181": {
                    x: -54.25,
                    y: -108.55,
                    kx: -0.173,
                    ky: -0.017
                },
                "187": {
                    x: -54.493,
                    y: -108.501,
                    sy: 0.93,
                    kx: -0.17,
                    ky: -0.018
                },
                "188": {
                    x: -55.278,
                    y: -108.146,
                    sy: 0.927,
                    kx: -0.158,
                    ky: -0.023
                },
                "189": {
                    x: -56.661,
                    y: -107.597,
                    sx: 0.958,
                    sy: 0.921,
                    kx: -0.136,
                    ky: -0.031
                },
                "190": {
                    x: -58.775,
                    y: -106.65,
                    sy: 0.911,
                    kx: -0.103,
                    ky: -0.044
                },
                "191": {
                    x: -61.427,
                    y: -105.566,
                    sx: 0.957,
                    sy: 0.9,
                    kx: -0.062,
                    ky: -0.06
                },
                "192": {
                    x: -64.039,
                    y: -104.488,
                    sy: 0.889,
                    kx: -0.021,
                    ky: -0.077
                },
                "193": {
                    x: -66.286,
                    y: -103.543,
                    sx: 0.956,
                    sy: 0.88,
                    kx: 0.014,
                    ky: -0.09
                },
                "194": {
                    x: -68.022,
                    y: -102.791,
                    sy: 0.872,
                    kx: 0.041,
                    ky: -0.101
                },
                "195": {
                    x: -69.336,
                    y: -102.311,
                    sy: 0.867,
                    kx: 0.061,
                    ky: -0.109
                },
                "196": {
                    x: -70.232,
                    y: -101.912,
                    sy: 0.863,
                    kx: 0.075,
                    ky: -0.114
                },
                "197": {
                    x: -70.785,
                    y: -101.646,
                    sx: 0.955,
                    sy: 0.86,
                    kx: 0.084,
                    ky: -0.118
                },
                "198": {
                    x: -71.093,
                    y: -101.556,
                    sy: 0.859,
                    kx: 0.089,
                    ky: -0.12
                },
                "199": {
                    x: -71.15,
                    y: -101.45,
                    kx: 0.09
                },
                "225": {
                    x: -74.192,
                    y: -103.168,
                    sx: 0.945,
                    sy: 0.882,
                    kx: 0.128,
                    ky: -0.138
                },
                "226": {
                    x: -81.972,
                    y: -107.421,
                    sx: 0.917,
                    sy: 0.942,
                    kx: 0.225,
                    ky: -0.183
                },
                "227": {
                    x: -91.468,
                    y: -112.715,
                    sx: 0.883,
                    sy: 1.016,
                    kx: 0.346,
                    ky: -0.238
                },
                "228": {
                    x: -100.164,
                    y: -117.471,
                    sx: 0.852,
                    sy: 1.083,
                    kx: 0.455,
                    ky: -0.288
                },
                "229": {
                    x: -105.918,
                    y: -120.663,
                    sx: 0.831,
                    sy: 1.127,
                    kx: 0.528,
                    ky: -0.322
                },
                "230": {
                    x: -107.85,
                    y: -121.75,
                    sx: 0.824,
                    sy: 1.142,
                    kx: 0.553,
                    ky: -0.333
                }
            })
            .addTimedChild(instance13, 0, 231, {
                "0": {
                    x: -94.35,
                    y: -35.85
                }
            })
            .addTimedChild(instance12, 0, 193, {
                "0": {
                    x: -217.85,
                    y: -255.85,
                    sx: 1,
                    sy: 1,
                    kx: 0,
                    ky: 0,
                    r: -0.126
                },
                "15": {
                    x: -217.656,
                    y: -254.57,
                    r: -0.129
                },
                "16": {
                    x: -217.071,
                    y: -250.847,
                    r: -0.136
                },
                "17": {
                    x: -216.565,
                    y: -247.734,
                    r: -0.141
                },
                "18": {
                    x: -216.4,
                    y: -246.75,
                    r: -0.143
                },
                "19": {
                    x: -223.436,
                    y: -249.375,
                    r: -0.163
                },
                "20": {
                    x: -239.712,
                    y: -255.414,
                    r: -0.209
                },
                "21": {
                    x: -258.62,
                    y: -262.484,
                    sx: 0.999,
                    sy: 0.999,
                    r: -0.263
                },
                "22": {
                    x: -275.499,
                    y: -268.683,
                    r: -0.312
                },
                "23": {
                    x: -287.886,
                    y: -273.373,
                    r: -0.347
                },
                "24": {
                    x: -295.1,
                    y: -276.05,
                    r: -0.368
                },
                "25": {
                    x: -298.881,
                    y: -272.983,
                    r: -0.394
                },
                "26": {
                    x: -304.921,
                    y: -267.799,
                    r: -0.436
                },
                "27": {
                    x: -312.305,
                    y: -261.654,
                    r: -0.487
                },
                "28": {
                    x: -319.811,
                    y: -255.331,
                    sx: 1,
                    sy: 1,
                    r: -0.539
                },
                "29": {
                    x: -326.38,
                    y: -249.822,
                    r: -0.585
                },
                "30": {
                    x: -330.55,
                    y: -246.25,
                    r: -0.614
                },
                "31": {
                    x: -330.748,
                    y: -247.095,
                    r: -0.613
                },
                "32": {
                    x: -330.975,
                    y: -249.449,
                    r: -0.609
                },
                "33": {
                    x: -331.278,
                    y: -252.327,
                    r: -0.605
                },
                "34": {
                    x: -331.553,
                    y: -254.821,
                    r: -0.602
                },
                "35": {
                    x: -331.666,
                    y: -256.614,
                    r: -0.599
                },
                "36": {
                    x: -331.747,
                    y: -257.807,
                    r: -0.598
                },
                "37": {
                    x: -331.879,
                    y: -258.399,
                    r: -0.597
                },
                "38": {
                    x: -331.85,
                    y: -258.6
                },
                "95": {
                    x: -331.963,
                    y: -258.227
                },
                "96": {
                    x: -332.405,
                    y: -257.05,
                    r: -0.6
                },
                "97": {
                    x: -332.852,
                    y: -255.827,
                    r: -0.604
                },
                "98": {
                    x: -332.95,
                    y: -255.5
                },
                "99": {
                    x: -332.92,
                    y: -255.709
                },
                "100": {
                    x: -332.637,
                    y: -256.439,
                    r: -0.602
                },
                "101": {
                    x: -332.218,
                    y: -257.681,
                    r: -0.599
                },
                "102": {
                    x: -331.921,
                    y: -258.417,
                    r: -0.597
                },
                "103": {
                    x: -331.85,
                    y: -258.6
                },
                "104": {
                    x: -331.963,
                    y: -258.227
                },
                "105": {
                    x: -332.405,
                    y: -257.05,
                    r: -0.6
                },
                "106": {
                    x: -332.852,
                    y: -255.827,
                    r: -0.604
                },
                "107": {
                    x: -332.95,
                    y: -255.5
                },
                "108": {
                    x: -332.92,
                    y: -255.709
                },
                "109": {
                    x: -332.637,
                    y: -256.439,
                    r: -0.602
                },
                "110": {
                    x: -332.218,
                    y: -257.681,
                    r: -0.599
                },
                "111": {
                    x: -331.921,
                    y: -258.417,
                    r: -0.597
                },
                "112": {
                    x: -331.85,
                    y: -258.6
                },
                "113": {
                    x: -331.963,
                    y: -258.227
                },
                "114": {
                    x: -332.405,
                    y: -257.05,
                    r: -0.6
                },
                "115": {
                    x: -332.852,
                    y: -255.827,
                    r: -0.604
                },
                "116": {
                    x: -332.95,
                    y: -255.5
                },
                "117": {
                    x: -332.92,
                    y: -255.709
                },
                "118": {
                    x: -332.637,
                    y: -256.439,
                    r: -0.602
                },
                "119": {
                    x: -332.218,
                    y: -257.681,
                    r: -0.599
                },
                "120": {
                    x: -331.921,
                    y: -258.417,
                    r: -0.597
                },
                "121": {
                    x: -331.85,
                    y: -258.6
                },
                "122": {
                    x: -331.963,
                    y: -258.227
                },
                "123": {
                    x: -332.405,
                    y: -257.05,
                    r: -0.6
                },
                "124": {
                    x: -332.852,
                    y: -255.827,
                    r: -0.604
                },
                "125": {
                    x: -332.95,
                    y: -255.5
                },
                "126": {
                    x: -332.92,
                    y: -255.709
                },
                "127": {
                    x: -332.637,
                    y: -256.439,
                    r: -0.602
                },
                "128": {
                    x: -332.218,
                    y: -257.681,
                    r: -0.599
                },
                "129": {
                    x: -331.921,
                    y: -258.417,
                    r: -0.597
                },
                "130": {
                    x: -331.85,
                    y: -258.6
                },
                "131": {
                    x: -331.963,
                    y: -258.227
                },
                "132": {
                    x: -332.405,
                    y: -257.05,
                    r: -0.6
                },
                "133": {
                    x: -332.852,
                    y: -255.827,
                    r: -0.604
                },
                "134": {
                    x: -332.95,
                    y: -255.5
                },
                "135": {
                    x: -332.92,
                    y: -255.709
                },
                "136": {
                    x: -332.637,
                    y: -256.439,
                    r: -0.602
                },
                "137": {
                    x: -332.218,
                    y: -257.681,
                    r: -0.599
                },
                "138": {
                    x: -331.921,
                    y: -258.417,
                    r: -0.597
                },
                "139": {
                    x: -331.85,
                    y: -258.6
                },
                "140": {
                    x: -331.963,
                    y: -258.227
                },
                "141": {
                    x: -332.405,
                    y: -257.05,
                    r: -0.6
                },
                "142": {
                    x: -332.852,
                    y: -255.827,
                    r: -0.604
                },
                "143": {
                    x: -332.95,
                    y: -255.5
                },
                "144": {
                    x: -332.92,
                    y: -255.709
                },
                "145": {
                    x: -332.637,
                    y: -256.439,
                    r: -0.602
                },
                "146": {
                    x: -332.218,
                    y: -257.681,
                    r: -0.599
                },
                "147": {
                    x: -331.921,
                    y: -258.417,
                    r: -0.597
                },
                "148": {
                    x: -331.85,
                    y: -258.6
                },
                "149": {
                    x: -331.963,
                    y: -258.227
                },
                "150": {
                    x: -332.405,
                    y: -257.05,
                    r: -0.6
                },
                "151": {
                    x: -332.852,
                    y: -255.827,
                    r: -0.604
                },
                "152": {
                    x: -332.95,
                    y: -255.5
                },
                "153": {
                    x: -332.92,
                    y: -255.709
                },
                "154": {
                    x: -332.637,
                    y: -256.439,
                    r: -0.602
                },
                "155": {
                    x: -332.218,
                    y: -257.681,
                    r: -0.599
                },
                "156": {
                    x: -331.921,
                    y: -258.417,
                    r: -0.597
                },
                "157": {
                    x: -331.85,
                    y: -258.6
                },
                "158": {
                    x: -331.963,
                    y: -258.227
                },
                "159": {
                    x: -332.405,
                    y: -257.05,
                    r: -0.6
                },
                "160": {
                    x: -332.852,
                    y: -255.827,
                    r: -0.604
                },
                "161": {
                    x: -332.95,
                    y: -255.5
                },
                "162": {
                    x: -333.55,
                    y: -251.3,
                    sx: 0.957,
                    sy: 1.063,
                    kx: 0.539,
                    ky: -0.605,
                    r: 0
                },
                "163": {
                    x: -334.2,
                    y: -247.15,
                    sx: 1.009,
                    sy: 1.13,
                    kx: 0.69,
                    ky: -0.823
                },
                "164": {
                    x: -331.633,
                    y: -258.033,
                    sx: 1.006,
                    sy: 1.086,
                    kx: 0.468,
                    ky: -0.556
                },
                "165": {
                    x: -329.108,
                    y: -268.335,
                    sx: 1.003,
                    sy: 1.045,
                    kx: 0.259,
                    ky: -0.304
                },
                "166": {
                    x: -327.526,
                    y: -274.847,
                    sx: 1.001,
                    sy: 1.018,
                    kx: 0.125,
                    ky: -0.143
                },
                "167": {
                    x: -326.634,
                    y: -278.39,
                    sx: 1,
                    sy: 1.004,
                    kx: 0.053,
                    ky: -0.057
                },
                "168": {
                    x: -326.35,
                    y: -279.4,
                    sy: 1,
                    kx: 0,
                    ky: 0,
                    r: -0.031
                },
                "171": {
                    x: -310,
                    y: -284.5,
                    r: -0.088
                },
                "172": {
                    x: -354.65,
                    y: -230.4,
                    sx: 0.999,
                    sy: 0.999,
                    r: 0.293
                },
                "173": {
                    x: -372.35,
                    y: -220.9,
                    sx: 0.996,
                    sy: 1.004,
                    kx: -0.326,
                    ky: 0.316,
                    r: 0
                },
                "174": {
                    x: -352.65,
                    y: -232.05,
                    sx: 1,
                    sy: 1,
                    kx: 0,
                    ky: 0,
                    r: 0.327
                },
                "175": {
                    x: -354.85,
                    y: -251,
                    sx: 1.005,
                    sy: 1.075,
                    kx: -0.283,
                    ky: -0.002,
                    r: 0
                },
                "176": {
                    x: -347.394,
                    y: -257.632,
                    sx: 1.003,
                    sy: 1.044,
                    kx: -0.194,
                    ky: 0.026
                },
                "177": {
                    x: -342.579,
                    y: -261.837,
                    sx: 1.002,
                    sy: 1.025,
                    kx: -0.138,
                    ky: 0.043
                },
                "178": {
                    x: -339.567,
                    y: -264.488,
                    sx: 1.001,
                    sy: 1.012,
                    kx: -0.102,
                    ky: 0.055
                },
                "179": {
                    x: -337.73,
                    y: -265.999,
                    sx: 1,
                    sy: 1.005,
                    kx: -0.08,
                    ky: 0.061
                },
                "180": {
                    x: -336.782,
                    y: -266.844,
                    sy: 1.001,
                    kx: -0.069,
                    ky: 0.065
                },
                "181": {
                    x: -336.45,
                    y: -267.05,
                    sy: 1,
                    kx: 0,
                    ky: 0,
                    r: 0.066
                },
                "186": {
                    x: -337.05,
                    y: -265.5,
                    r: 0.061
                },
                "187": {
                    x: -335.938,
                    y: -266.936,
                    r: 0.066
                },
                "188": {
                    x: -332.529,
                    y: -271.043,
                    r: 0.081
                },
                "189": {
                    x: -327.029,
                    y: -277.676,
                    r: 0.105
                },
                "190": {
                    x: -319.561,
                    y: -286.703,
                    r: 0.137
                },
                "191": {
                    x: -309.998,
                    y: -298.201,
                    sx: 0.999,
                    sy: 0.999,
                    r: 0.178
                },
                "192": {
                    x: -298.45,
                    y: -312.1,
                    r: 0.228
                }
            })
            .addTimedChild(instance17, 193, 1)
            .addTimedChild(instance19, 194, 1)
            .addTimedChild(instance21, 195, 33, {
                "195": {
                    x: -280.35,
                    y: -334.25,
                    sx: 0.892,
                    sy: 1,
                    r: 0.515
                },
                "196": {
                    x: -276.085,
                    y: -339.372,
                    sx: 0.937,
                    r: 0.447
                },
                "197": {
                    x: -272.442,
                    y: -343.608,
                    sx: 0.975,
                    r: 0.391
                },
                "198": {
                    x: -270.643,
                    y: -345.803,
                    sx: 0.995,
                    r: 0.361
                },
                "199": {
                    x: -270.1,
                    y: -346.3,
                    sx: 1,
                    r: 0.354
                },
                "224": {
                    x: -272.7,
                    y: -343.35,
                    sx: 0.972,
                    sy: 0.999,
                    r: 0.393
                },
                "225": {
                    x: -294.369,
                    y: -331.375,
                    sx: 0.945,
                    r: 0.434
                },
                "226": {
                    x: -316.043,
                    y: -319.316,
                    sx: 0.919,
                    sy: 1,
                    r: 0.474
                },
                "227": {
                    x: -337.7,
                    y: -307.2,
                    sx: 0.892,
                    r: 0.515
                }
            })
            .addTimedChild(instance11, 0, 196, {
                "0": {
                    x: -261.7,
                    y: -185.95,
                    sx: 1,
                    sy: 1,
                    kx: 0,
                    ky: 0,
                    r: -0.126
                },
                "15": {
                    x: -261.337,
                    y: -184.567,
                    r: -0.129
                },
                "16": {
                    x: -260.281,
                    y: -180.551,
                    r: -0.136
                },
                "17": {
                    x: -259.372,
                    y: -177.143,
                    r: -0.141
                },
                "18": {
                    x: -259.1,
                    y: -176.1,
                    r: -0.143
                },
                "19": {
                    x: -264.696,
                    y: -177.897
                },
                "20": {
                    x: -277.846,
                    y: -182.097
                },
                "21": {
                    x: -293.096,
                    y: -186.997
                },
                "22": {
                    x: -306.696,
                    y: -191.347
                },
                "23": {
                    x: -316.696,
                    y: -194.597
                },
                "24": {
                    x: -322.55,
                    y: -196.45
                },
                "25": {
                    x: -324.049,
                    y: -193.01,
                    r: -0.193
                },
                "26": {
                    x: -326.525,
                    y: -187.465,
                    r: -0.274
                },
                "27": {
                    x: -329.406,
                    y: -180.777,
                    r: -0.371
                },
                "28": {
                    x: -332.417,
                    y: -173.866,
                    r: -0.471
                },
                "29": {
                    x: -335.034,
                    y: -167.871,
                    r: -0.558
                },
                "30": {
                    x: -336.6,
                    y: -164,
                    r: -0.614
                },
                "31": {
                    x: -336.847,
                    y: -164.853,
                    r: -0.613
                },
                "32": {
                    x: -337.349,
                    y: -167.278,
                    r: -0.609
                },
                "33": {
                    x: -338.033,
                    y: -170.131,
                    r: -0.605
                },
                "34": {
                    x: -338.545,
                    y: -172.6,
                    r: -0.602
                },
                "35": {
                    x: -338.869,
                    y: -174.461,
                    r: -0.599
                },
                "36": {
                    x: -339.086,
                    y: -175.615,
                    r: -0.598
                },
                "37": {
                    x: -339.241,
                    y: -176.263,
                    r: -0.597
                },
                "38": {
                    x: -339.3,
                    y: -176.45
                },
                "95": {
                    x: -339.395,
                    y: -176.12
                },
                "96": {
                    x: -339.584,
                    y: -174.872,
                    r: -0.6
                },
                "97": {
                    x: -339.778,
                    y: -173.676,
                    r: -0.604
                },
                "98": {
                    x: -339.8,
                    y: -173.3
                },
                "99": {
                    x: -339.76,
                    y: -173.513
                },
                "100": {
                    x: -339.682,
                    y: -174.256,
                    r: -0.602
                },
                "101": {
                    x: -339.459,
                    y: -175.47,
                    r: -0.599
                },
                "102": {
                    x: -339.37,
                    y: -176.27,
                    r: -0.597
                },
                "103": {
                    x: -339.3,
                    y: -176.45
                },
                "104": {
                    x: -339.395,
                    y: -176.12
                },
                "105": {
                    x: -339.584,
                    y: -174.872,
                    r: -0.6
                },
                "106": {
                    x: -339.778,
                    y: -173.676,
                    r: -0.604
                },
                "107": {
                    x: -339.8,
                    y: -173.3
                },
                "108": {
                    x: -339.76,
                    y: -173.513
                },
                "109": {
                    x: -339.682,
                    y: -174.256,
                    r: -0.602
                },
                "110": {
                    x: -339.459,
                    y: -175.47,
                    r: -0.599
                },
                "111": {
                    x: -339.37,
                    y: -176.27,
                    r: -0.597
                },
                "112": {
                    x: -339.3,
                    y: -176.45
                },
                "113": {
                    x: -339.395,
                    y: -176.12
                },
                "114": {
                    x: -339.584,
                    y: -174.872,
                    r: -0.6
                },
                "115": {
                    x: -339.778,
                    y: -173.676,
                    r: -0.604
                },
                "116": {
                    x: -339.8,
                    y: -173.3
                },
                "117": {
                    x: -339.76,
                    y: -173.513
                },
                "118": {
                    x: -339.682,
                    y: -174.256,
                    r: -0.602
                },
                "119": {
                    x: -339.459,
                    y: -175.47,
                    r: -0.599
                },
                "120": {
                    x: -339.37,
                    y: -176.27,
                    r: -0.597
                },
                "121": {
                    x: -339.3,
                    y: -176.45
                },
                "122": {
                    x: -339.395,
                    y: -176.12
                },
                "123": {
                    x: -339.584,
                    y: -174.872,
                    r: -0.6
                },
                "124": {
                    x: -339.778,
                    y: -173.676,
                    r: -0.604
                },
                "125": {
                    x: -339.8,
                    y: -173.3
                },
                "126": {
                    x: -339.76,
                    y: -173.513
                },
                "127": {
                    x: -339.682,
                    y: -174.256,
                    r: -0.602
                },
                "128": {
                    x: -339.459,
                    y: -175.47,
                    r: -0.599
                },
                "129": {
                    x: -339.37,
                    y: -176.27,
                    r: -0.597
                },
                "130": {
                    x: -339.3,
                    y: -176.45
                },
                "131": {
                    x: -339.395,
                    y: -176.12
                },
                "132": {
                    x: -339.584,
                    y: -174.872,
                    r: -0.6
                },
                "133": {
                    x: -339.778,
                    y: -173.676,
                    r: -0.604
                },
                "134": {
                    x: -339.8,
                    y: -173.3
                },
                "135": {
                    x: -339.76,
                    y: -173.513
                },
                "136": {
                    x: -339.682,
                    y: -174.256,
                    r: -0.602
                },
                "137": {
                    x: -339.459,
                    y: -175.47,
                    r: -0.599
                },
                "138": {
                    x: -339.37,
                    y: -176.27,
                    r: -0.597
                },
                "139": {
                    x: -339.3,
                    y: -176.45
                },
                "140": {
                    x: -339.395,
                    y: -176.12
                },
                "141": {
                    x: -339.584,
                    y: -174.872,
                    r: -0.6
                },
                "142": {
                    x: -339.778,
                    y: -173.676,
                    r: -0.604
                },
                "143": {
                    x: -339.8,
                    y: -173.3
                },
                "144": {
                    x: -339.76,
                    y: -173.513
                },
                "145": {
                    x: -339.682,
                    y: -174.256,
                    r: -0.602
                },
                "146": {
                    x: -339.459,
                    y: -175.47,
                    r: -0.599
                },
                "147": {
                    x: -339.37,
                    y: -176.27,
                    r: -0.597
                },
                "148": {
                    x: -339.3,
                    y: -176.45
                },
                "149": {
                    x: -339.395,
                    y: -176.12
                },
                "150": {
                    x: -339.584,
                    y: -174.872,
                    r: -0.6
                },
                "151": {
                    x: -339.778,
                    y: -173.676,
                    r: -0.604
                },
                "152": {
                    x: -339.8,
                    y: -173.3
                },
                "153": {
                    x: -339.76,
                    y: -173.513
                },
                "154": {
                    x: -339.682,
                    y: -174.256,
                    r: -0.602
                },
                "155": {
                    x: -339.459,
                    y: -175.47,
                    r: -0.599
                },
                "156": {
                    x: -339.37,
                    y: -176.27,
                    r: -0.597
                },
                "157": {
                    x: -339.3,
                    y: -176.45
                },
                "158": {
                    x: -339.395,
                    y: -176.12
                },
                "159": {
                    x: -339.584,
                    y: -174.872,
                    r: -0.6
                },
                "160": {
                    x: -339.778,
                    y: -173.676,
                    r: -0.604
                },
                "161": {
                    x: -339.8,
                    y: -173.3
                },
                "162": {
                    x: -336.753,
                    y: -169.712,
                    r: -0.347
                },
                "163": {
                    x: -333.6,
                    y: -166.15,
                    r: -0.089
                },
                "164": {
                    x: -347.27,
                    y: -184.216,
                    r: 0.509
                },
                "165": {
                    x: -360.95,
                    y: -202.2,
                    sx: 0.999,
                    sy: 0.999,
                    r: 1.108
                },
                "166": {
                    x: -369.067,
                    y: -217.143,
                    sx: 1,
                    sy: 1,
                    r: 1.085
                },
                "167": {
                    x: -373.364,
                    y: -225.292,
                    r: 1.072
                },
                "168": {
                    x: -374.65,
                    y: -227.75,
                    r: 1.068
                },
                "171": {
                    x: -355.3,
                    y: -230.15,
                    r: 1.011
                },
                "172": {
                    x: -432.55,
                    y: -180.85,
                    sx: 0.998,
                    sy: 0.998,
                    r: 0.655
                },
                "173": {
                    x: -454.65,
                    y: -172.15,
                    sx: 0.994,
                    sy: 1.006,
                    kx: -0.621,
                    ky: 0.617,
                    r: 0
                },
                "174": {
                    x: -434.95,
                    y: -184.3,
                    sx: 1,
                    sy: 1,
                    kx: 0,
                    ky: 0,
                    r: 0.626
                },
                "175": {
                    x: -415.35,
                    y: -198.1,
                    sx: 0.999,
                    sy: 0.999,
                    r: 0.882
                },
                "176": {
                    x: -403.669,
                    y: -206.696,
                    r: 1.03
                },
                "177": {
                    x: -396.127,
                    y: -212.216,
                    r: 1.125
                },
                "178": {
                    x: -391.419,
                    y: -215.722,
                    sx: 1,
                    sy: 1,
                    r: 1.185
                },
                "179": {
                    x: -388.565,
                    y: -217.854,
                    r: 1.221
                },
                "180": {
                    x: -387.063,
                    y: -218.868,
                    r: 1.24
                },
                "181": {
                    x: -386.55,
                    y: -219.2,
                    r: 1.246
                },
                "186": {
                    x: -386.95,
                    y: -217.4,
                    r: 1.241
                },
                "187": {
                    x: -385.989,
                    y: -219.25,
                    r: 1.247
                },
                "188": {
                    x: -383.232,
                    y: -224.343,
                    r: 1.262
                },
                "189": {
                    x: -378.824,
                    y: -232.527,
                    r: 1.287
                },
                "190": {
                    x: -372.805,
                    y: -243.486,
                    r: 1.321
                },
                "191": {
                    x: -365.351,
                    y: -257.14,
                    r: 1.363
                },
                "192": {
                    x: -356.35,
                    y: -273.5,
                    sx: 0.999,
                    sy: 0.999,
                    r: 1.413
                },
                "193": {
                    x: -345.65,
                    y: -286.45,
                    r: 0.939
                },
                "194": {
                    x: -329.55,
                    y: -298.3,
                    r: 0.292
                },
                "195": {
                    x: -316.75,
                    y: -310.15,
                    sx: 1,
                    sy: 1,
                    r: -0.507
                }
            })
            .addTimedChild(instance37, 228, 1)
            .addTimedChild(instance39, 229, 1)
            .addTimedChild(instance41, 230, 1, {
                "230": {
                    x: -358.2,
                    y: -282.85,
                    r: 0.506
                }
            })
            .addTimedChild(instance34, 227, 4, {
                "227": {
                    x: -374.65,
                    y: -287.85,
                    sx: 1,
                    sy: 1,
                    kx: 0,
                    ky: 0,
                    r: -0.507
                },
                "228": {
                    x: -401.4,
                    y: -267.2,
                    sx: 0.999,
                    sy: 0.999,
                    r: 0.518
                },
                "229": {
                    x: -417.65,
                    y: -257.35,
                    r: 1.382
                },
                "230": {
                    x: -432.5,
                    y: -252.25,
                    sx: 1,
                    sy: 1,
                    kx: 4.461,
                    ky: 1.822,
                    r: 0
                }
            })
            .addTimedChild(instance10, 0, 231, {
                "0": {
                    x: -150,
                    y: -273.35,
                    sx: 0.999,
                    sy: 0.999,
                    r: -1.011
                },
                "15": {
                    x: -149.9,
                    y: -272.282,
                    r: -1.014
                },
                "16": {
                    x: -149.435,
                    y: -269.015,
                    r: -1.02
                },
                "17": {
                    x: -149.031,
                    y: -266.284,
                    r: -1.026
                },
                "18": {
                    x: -148.9,
                    y: -265.35,
                    r: -1.028
                },
                "19": {
                    x: -156.484,
                    y: -267.694
                },
                "20": {
                    x: -174.104,
                    y: -273.12,
                    r: -1.029
                },
                "21": {
                    x: -194.514,
                    y: -279.351,
                    sx: 0.998,
                    sy: 0.998,
                    r: -1.031
                },
                "22": {
                    x: -212.796,
                    y: -284.92,
                    r: -1.032
                },
                "23": {
                    x: -226.206,
                    y: -289.04
                },
                "24": {
                    x: -234.05,
                    y: -291.35,
                    r: -1.033
                },
                "25": {
                    x: -238.582,
                    y: -288.061,
                    r: -1.035
                },
                "26": {
                    x: -245.753,
                    y: -282.52,
                    r: -1.039
                },
                "27": {
                    x: -254.456,
                    y: -275.914,
                    sx: 0.999,
                    sy: 0.999,
                    r: -1.043
                },
                "28": {
                    x: -263.326,
                    y: -269.124,
                    r: -1.048
                },
                "29": {
                    x: -271.136,
                    y: -263.204,
                    r: -1.052
                },
                "30": {
                    x: -276,
                    y: -259.35,
                    r: -1.054
                },
                "31": {
                    x: -276.071,
                    y: -260.233,
                    r: -1.053
                },
                "32": {
                    x: -276.254,
                    y: -262.397,
                    r: -1.05
                },
                "33": {
                    x: -276.505,
                    y: -265.055,
                    r: -1.046
                },
                "34": {
                    x: -276.79,
                    y: -267.362,
                    r: -1.042
                },
                "35": {
                    x: -276.917,
                    y: -269.003,
                    r: -1.039
                },
                "36": {
                    x: -277.027,
                    y: -270.104,
                    r: -1.038
                },
                "37": {
                    x: -277.093,
                    y: -270.645,
                    r: -1.037
                },
                "38": {
                    x: -277.05,
                    y: -270.75
                },
                "95": {
                    x: -277.211,
                    y: -270.518
                },
                "96": {
                    x: -277.641,
                    y: -269.46,
                    r: -1.041
                },
                "97": {
                    x: -278.059,
                    y: -268.456,
                    r: -1.044
                },
                "98": {
                    x: -278.25,
                    y: -268.1
                },
                "99": {
                    x: -278.152,
                    y: -268.328
                },
                "100": {
                    x: -277.945,
                    y: -268.954,
                    r: -1.042
                },
                "101": {
                    x: -277.452,
                    y: -269.986,
                    r: -1.039
                },
                "102": {
                    x: -277.186,
                    y: -270.663,
                    r: -1.037
                },
                "103": {
                    x: -277.05,
                    y: -270.75
                },
                "104": {
                    x: -277.211,
                    y: -270.518
                },
                "105": {
                    x: -277.641,
                    y: -269.46,
                    r: -1.041
                },
                "106": {
                    x: -278.059,
                    y: -268.456,
                    r: -1.044
                },
                "107": {
                    x: -278.25,
                    y: -268.1
                },
                "108": {
                    x: -278.152,
                    y: -268.328
                },
                "109": {
                    x: -277.945,
                    y: -268.954,
                    r: -1.042
                },
                "110": {
                    x: -277.452,
                    y: -269.986,
                    r: -1.039
                },
                "111": {
                    x: -277.186,
                    y: -270.663,
                    r: -1.037
                },
                "112": {
                    x: -277.05,
                    y: -270.75
                },
                "113": {
                    x: -277.211,
                    y: -270.518
                },
                "114": {
                    x: -277.641,
                    y: -269.46,
                    r: -1.041
                },
                "115": {
                    x: -278.059,
                    y: -268.456,
                    r: -1.044
                },
                "116": {
                    x: -278.25,
                    y: -268.1
                },
                "117": {
                    x: -278.152,
                    y: -268.328
                },
                "118": {
                    x: -277.945,
                    y: -268.954,
                    r: -1.042
                },
                "119": {
                    x: -277.452,
                    y: -269.986,
                    r: -1.039
                },
                "120": {
                    x: -277.186,
                    y: -270.663,
                    r: -1.037
                },
                "121": {
                    x: -277.05,
                    y: -270.75
                },
                "122": {
                    x: -277.211,
                    y: -270.518
                },
                "123": {
                    x: -277.641,
                    y: -269.46,
                    r: -1.041
                },
                "124": {
                    x: -278.059,
                    y: -268.456,
                    r: -1.044
                },
                "125": {
                    x: -278.25,
                    y: -268.1
                },
                "126": {
                    x: -278.152,
                    y: -268.328
                },
                "127": {
                    x: -277.945,
                    y: -268.954,
                    r: -1.042
                },
                "128": {
                    x: -277.452,
                    y: -269.986,
                    r: -1.039
                },
                "129": {
                    x: -277.186,
                    y: -270.663,
                    r: -1.037
                },
                "130": {
                    x: -277.05,
                    y: -270.75
                },
                "131": {
                    x: -277.211,
                    y: -270.518
                },
                "132": {
                    x: -277.641,
                    y: -269.46,
                    r: -1.041
                },
                "133": {
                    x: -278.059,
                    y: -268.456,
                    r: -1.044
                },
                "134": {
                    x: -278.25,
                    y: -268.1
                },
                "135": {
                    x: -278.152,
                    y: -268.328
                },
                "136": {
                    x: -277.945,
                    y: -268.954,
                    r: -1.042
                },
                "137": {
                    x: -277.452,
                    y: -269.986,
                    r: -1.039
                },
                "138": {
                    x: -277.186,
                    y: -270.663,
                    r: -1.037
                },
                "139": {
                    x: -277.05,
                    y: -270.75
                },
                "140": {
                    x: -277.211,
                    y: -270.518
                },
                "141": {
                    x: -277.641,
                    y: -269.46,
                    r: -1.041
                },
                "142": {
                    x: -278.059,
                    y: -268.456,
                    r: -1.044
                },
                "143": {
                    x: -278.25,
                    y: -268.1
                },
                "144": {
                    x: -278.152,
                    y: -268.328
                },
                "145": {
                    x: -277.945,
                    y: -268.954,
                    r: -1.042
                },
                "146": {
                    x: -277.452,
                    y: -269.986,
                    r: -1.039
                },
                "147": {
                    x: -277.186,
                    y: -270.663,
                    r: -1.037
                },
                "148": {
                    x: -277.05,
                    y: -270.75
                },
                "149": {
                    x: -277.211,
                    y: -270.518
                },
                "150": {
                    x: -277.641,
                    y: -269.46,
                    r: -1.041
                },
                "151": {
                    x: -278.059,
                    y: -268.456,
                    r: -1.044
                },
                "152": {
                    x: -278.25,
                    y: -268.1
                },
                "153": {
                    x: -278.152,
                    y: -268.328
                },
                "154": {
                    x: -277.945,
                    y: -268.954,
                    r: -1.042
                },
                "155": {
                    x: -277.452,
                    y: -269.986,
                    r: -1.039
                },
                "156": {
                    x: -277.186,
                    y: -270.663,
                    r: -1.037
                },
                "157": {
                    x: -277.05,
                    y: -270.75
                },
                "158": {
                    x: -277.211,
                    y: -270.518
                },
                "159": {
                    x: -277.641,
                    y: -269.46,
                    r: -1.041
                },
                "160": {
                    x: -278.059,
                    y: -268.456,
                    r: -1.044
                },
                "161": {
                    x: -278.25,
                    y: -268.1
                },
                "162": {
                    x: -279.286,
                    y: -264.518,
                    r: -1.051
                },
                "163": {
                    x: -280.25,
                    y: -260.85,
                    r: -1.057
                },
                "164": {
                    x: -272.255,
                    y: -269.296,
                    r: -1.038
                },
                "165": {
                    x: -264.645,
                    y: -277.171,
                    r: -1.019
                },
                "166": {
                    x: -259.813,
                    y: -282.256,
                    r: -1.008
                },
                "167": {
                    x: -257.187,
                    y: -284.922,
                    r: -1.001
                },
                "168": {
                    x: -256.4,
                    y: -285.65,
                    r: -0.999
                },
                "171": {
                    x: -254.95,
                    y: -288.2,
                    r: -0.992
                },
                "172": {
                    x: -263.85,
                    y: -268.45,
                    sx: 0.998,
                    sy: 0.998,
                    r: -1.068
                },
                "173": {
                    x: -264.5,
                    y: -267.05,
                    sx: 0.999,
                    sy: 0.999,
                    r: -1.073
                },
                "174": {
                    x: -257.233,
                    y: -276.276,
                    r: -1.041
                },
                "175": {
                    x: -253.624,
                    y: -280.895,
                    r: -1.024
                },
                "176": {
                    x: -251.384,
                    y: -283.675,
                    r: -1.015
                },
                "177": {
                    x: -249.964,
                    y: -285.477,
                    r: -1.008
                },
                "178": {
                    x: -249.021,
                    y: -286.705,
                    r: -1.004
                },
                "179": {
                    x: -248.425,
                    y: -287.446,
                    r: -1.001
                },
                "180": {
                    x: -248.13,
                    y: -287.831,
                    r: -1
                },
                "181": {
                    x: -247.95,
                    y: -287.9,
                    r: -0.999
                },
                "186": {
                    x: -248.7,
                    y: -286.75,
                    r: -1.004
                },
                "187": {
                    x: -247.928,
                    y: -287.467,
                    r: -0.999
                },
                "188": {
                    x: -245.141,
                    y: -289.583,
                    r: -0.983
                },
                "189": {
                    x: -239.931,
                    y: -293.709,
                    r: -0.953
                },
                "190": {
                    x: -232.169,
                    y: -299.852,
                    r: -0.907
                },
                "191": {
                    x: -222.626,
                    y: -307.379,
                    r: -0.852
                },
                "192": {
                    x: -213.046,
                    y: -314.917,
                    r: -0.795
                },
                "193": {
                    x: -204.759,
                    y: -321.383,
                    r: -0.747
                },
                "194": {
                    x: -198.397,
                    y: -326.474,
                    r: -0.71
                },
                "195": {
                    x: -193.671,
                    y: -330.143,
                    r: -0.682
                },
                "196": {
                    x: -190.367,
                    y: -332.753,
                    r: -0.663
                },
                "197": {
                    x: -188.294,
                    y: -334.417,
                    r: -0.651
                },
                "198": {
                    x: -187.19,
                    y: -335.3,
                    r: -0.645
                },
                "199": {
                    x: -186.8,
                    y: -335.5,
                    r: -0.643
                },
                "225": {
                    x: -195.159,
                    y: -331.517,
                    r: -0.671
                },
                "226": {
                    x: -216.297,
                    y: -321.446,
                    r: -0.743
                },
                "227": {
                    x: -242.575,
                    y: -308.824,
                    r: -0.833
                },
                "228": {
                    x: -266.284,
                    y: -297.482,
                    r: -0.913
                },
                "229": {
                    x: -282.104,
                    y: -289.862,
                    r: -0.967
                },
                "230": {
                    x: -287.5,
                    y: -287.25,
                    r: -0.986
                }
            })
            .addTimedChild(instance9, 0, 231, {
                "0": {
                    x: -312.9,
                    y: -322.85,
                    sx: 1,
                    sy: 1,
                    r: -0.353
                },
                "15": {
                    x: -312.819,
                    y: -321.296,
                    r: -0.356
                },
                "16": {
                    x: -312.787,
                    y: -316.925,
                    r: -0.362
                },
                "17": {
                    x: -312.7,
                    y: -313.27,
                    r: -0.368
                },
                "18": {
                    x: -312.55,
                    y: -312.15,
                    r: -0.37
                },
                "19": {
                    x: -320.055,
                    y: -314.259,
                    r: -0.372
                },
                "20": {
                    x: -337.86,
                    y: -318.99,
                    r: -0.376
                },
                "21": {
                    x: -358.496,
                    y: -324.552,
                    sx: 0.999,
                    sy: 0.999,
                    r: -0.38
                },
                "22": {
                    x: -376.824,
                    y: -329.481,
                    r: -0.385
                },
                "23": {
                    x: -390.389,
                    y: -333.122,
                    r: -0.388
                },
                "24": {
                    x: -398.4,
                    y: -335.25,
                    r: -0.39
                },
                "25": {
                    x: -403.105,
                    y: -331.186,
                    r: -0.394
                },
                "26": {
                    x: -410.794,
                    y: -324.61,
                    r: -0.401
                },
                "27": {
                    x: -420.035,
                    y: -316.599,
                    r: -0.41
                },
                "28": {
                    x: -429.446,
                    y: -308.43,
                    sx: 1,
                    sy: 1,
                    r: -0.418
                },
                "29": {
                    x: -437.706,
                    y: -301.151,
                    r: -0.426
                },
                "30": {
                    x: -443.15,
                    y: -296.5,
                    r: -0.431
                },
                "31": {
                    x: -443.181,
                    y: -297.486,
                    r: -0.43
                },
                "32": {
                    x: -443.279,
                    y: -300.29,
                    r: -0.426
                },
                "33": {
                    x: -443.378,
                    y: -303.571,
                    r: -0.422
                },
                "34": {
                    x: -443.428,
                    y: -306.46,
                    r: -0.419
                },
                "35": {
                    x: -443.498,
                    y: -308.533,
                    r: -0.416
                },
                "36": {
                    x: -443.496,
                    y: -309.854,
                    r: -0.415
                },
                "37": {
                    x: -443.472,
                    y: -310.548,
                    r: -0.414
                },
                "38": {
                    x: -443.5,
                    y: -310.8,
                    r: -0.413
                },
                "95": {
                    x: -443.743,
                    y: -310.375,
                    r: -0.414
                },
                "96": {
                    x: -444.396,
                    y: -308.815,
                    r: -0.417
                },
                "97": {
                    x: -444.992,
                    y: -307.3,
                    r: -0.42
                },
                "98": {
                    x: -445,
                    y: -306.85,
                    r: -0.421
                },
                "99": {
                    x: -444.987,
                    y: -307.158
                },
                "100": {
                    x: -444.556,
                    y: -308.1,
                    r: -0.419
                },
                "101": {
                    x: -443.986,
                    y: -309.669,
                    r: -0.416
                },
                "102": {
                    x: -443.594,
                    y: -310.613,
                    r: -0.414
                },
                "103": {
                    x: -443.5,
                    y: -310.8,
                    r: -0.413
                },
                "104": {
                    x: -443.743,
                    y: -310.375,
                    r: -0.414
                },
                "105": {
                    x: -444.346,
                    y: -308.815,
                    r: -0.417
                },
                "106": {
                    x: -444.942,
                    y: -307.25,
                    r: -0.42
                },
                "107": {
                    x: -445,
                    y: -306.85,
                    r: -0.421
                },
                "108": {
                    x: -444.937,
                    y: -307.158
                },
                "109": {
                    x: -444.556,
                    y: -308.1,
                    r: -0.419
                },
                "110": {
                    x: -443.986,
                    y: -309.619,
                    r: -0.416
                },
                "111": {
                    x: -443.594,
                    y: -310.613,
                    r: -0.414
                },
                "112": {
                    x: -443.5,
                    y: -310.8,
                    r: -0.413
                },
                "113": {
                    x: -443.743,
                    y: -310.425,
                    r: -0.414
                },
                "114": {
                    x: -444.346,
                    y: -308.865,
                    r: -0.417
                },
                "115": {
                    x: -445.042,
                    y: -307.3,
                    r: -0.42
                },
                "116": {
                    x: -445,
                    y: -306.85,
                    r: -0.421
                },
                "117": {
                    x: -444.937,
                    y: -307.158
                },
                "118": {
                    x: -444.556,
                    y: -308.1,
                    r: -0.419
                },
                "119": {
                    x: -443.986,
                    y: -309.619,
                    r: -0.416
                },
                "120": {
                    x: -443.594,
                    y: -310.613,
                    r: -0.414
                },
                "121": {
                    x: -443.5,
                    y: -310.8,
                    r: -0.413
                },
                "122": {
                    x: -443.743,
                    y: -310.425,
                    r: -0.414
                },
                "123": {
                    x: -444.346,
                    y: -308.865,
                    r: -0.417
                },
                "124": {
                    x: -445.042,
                    y: -307.3,
                    r: -0.42
                },
                "125": {
                    x: -445,
                    y: -306.85,
                    r: -0.421
                },
                "126": {
                    x: -444.937,
                    y: -307.158
                },
                "127": {
                    x: -444.556,
                    y: -308.1,
                    r: -0.419
                },
                "128": {
                    x: -443.986,
                    y: -309.619,
                    r: -0.416
                },
                "129": {
                    x: -443.594,
                    y: -310.613,
                    r: -0.414
                },
                "130": {
                    x: -443.5,
                    y: -310.8,
                    r: -0.413
                },
                "131": {
                    x: -443.743,
                    y: -310.425,
                    r: -0.414
                },
                "132": {
                    x: -444.346,
                    y: -308.865,
                    r: -0.417
                },
                "133": {
                    x: -445.042,
                    y: -307.3,
                    r: -0.42
                },
                "134": {
                    x: -445,
                    y: -306.85,
                    r: -0.421
                },
                "135": {
                    x: -444.937,
                    y: -307.158
                },
                "136": {
                    x: -444.556,
                    y: -308.1,
                    r: -0.419
                },
                "137": {
                    x: -443.986,
                    y: -309.619,
                    r: -0.416
                },
                "138": {
                    x: -443.594,
                    y: -310.613,
                    r: -0.414
                },
                "139": {
                    x: -443.5,
                    y: -310.8,
                    r: -0.413
                },
                "140": {
                    x: -443.743,
                    y: -310.425,
                    r: -0.414
                },
                "141": {
                    x: -444.346,
                    y: -308.865,
                    r: -0.417
                },
                "142": {
                    x: -445.042,
                    y: -307.3,
                    r: -0.42
                },
                "143": {
                    x: -445,
                    y: -306.85,
                    r: -0.421
                },
                "144": {
                    x: -444.937,
                    y: -307.158
                },
                "145": {
                    x: -444.556,
                    y: -308.1,
                    r: -0.419
                },
                "146": {
                    x: -443.986,
                    y: -309.619,
                    r: -0.416
                },
                "147": {
                    x: -443.594,
                    y: -310.613,
                    r: -0.414
                },
                "148": {
                    x: -443.5,
                    y: -310.8,
                    r: -0.413
                },
                "149": {
                    x: -443.743,
                    y: -310.425,
                    r: -0.414
                },
                "150": {
                    x: -444.346,
                    y: -308.865,
                    r: -0.417
                },
                "151": {
                    x: -445.042,
                    y: -307.3,
                    r: -0.42
                },
                "152": {
                    x: -445,
                    y: -306.85,
                    r: -0.421
                },
                "153": {
                    x: -444.937,
                    y: -307.158
                },
                "154": {
                    x: -444.556,
                    y: -308.1,
                    r: -0.419
                },
                "155": {
                    x: -443.986,
                    y: -309.619,
                    r: -0.416
                },
                "156": {
                    x: -443.594,
                    y: -310.613,
                    r: -0.414
                },
                "157": {
                    x: -443.5,
                    y: -310.8,
                    r: -0.413
                },
                "158": {
                    x: -443.743,
                    y: -310.425,
                    r: -0.414
                },
                "159": {
                    x: -444.346,
                    y: -308.865,
                    r: -0.417
                },
                "160": {
                    x: -445.042,
                    y: -307.3,
                    r: -0.42
                },
                "161": {
                    x: -445,
                    y: -306.85,
                    r: -0.421
                },
                "162": {
                    x: -446.276,
                    y: -302.236,
                    r: -0.427
                },
                "163": {
                    x: -447.45,
                    y: -297.55,
                    r: -0.434
                },
                "164": {
                    x: -439.012,
                    y: -309.616,
                    r: -0.412
                },
                "165": {
                    x: -430.853,
                    y: -320.942,
                    r: -0.391
                },
                "166": {
                    x: -425.477,
                    y: -328.11,
                    r: -0.378
                },
                "167": {
                    x: -422.629,
                    y: -331.951,
                    r: -0.371
                },
                "168": {
                    x: -421.65,
                    y: -333.2,
                    r: -0.368
                },
                "171": {
                    x: -419.85,
                    y: -337.05,
                    r: -0.361
                },
                "172": {
                    x: -431.65,
                    y: -304.4,
                    sx: 0.999,
                    sy: 0.999,
                    r: -0.437
                },
                "173": {
                    x: -432.75,
                    y: -302.25,
                    sx: 1,
                    sy: 1,
                    r: -0.442
                },
                "174": {
                    x: -424.357,
                    y: -317.022,
                    r: -0.41
                },
                "175": {
                    x: -420.005,
                    y: -324.302,
                    r: -0.393
                },
                "176": {
                    x: -417.283,
                    y: -328.737,
                    r: -0.384
                },
                "177": {
                    x: -415.515,
                    y: -331.654,
                    r: -0.377
                },
                "178": {
                    x: -414.378,
                    y: -333.537,
                    r: -0.373
                },
                "179": {
                    x: -413.608,
                    y: -334.699,
                    r: -0.37
                },
                "180": {
                    x: -413.253,
                    y: -335.316,
                    r: -0.369
                },
                "181": {
                    x: -413.1,
                    y: -335.4,
                    r: -0.368
                },
                "186": {
                    x: -414.05,
                    y: -333.45,
                    r: -0.373
                },
                "187": {
                    x: -413.099,
                    y: -334.927,
                    r: -0.369
                },
                "188": {
                    x: -409.782,
                    y: -339.796,
                    r: -0.356
                },
                "189": {
                    x: -403.313,
                    y: -348.753,
                    r: -0.332
                },
                "190": {
                    x: -393.337,
                    y: -361.99,
                    r: -0.295
                },
                "191": {
                    x: -380.452,
                    y: -377.903,
                    r: -0.25
                },
                "192": {
                    x: -366.809,
                    y: -393.536,
                    r: -0.204
                },
                "193": {
                    x: -354.644,
                    y: -406.492,
                    r: -0.165
                },
                "194": {
                    x: -344.782,
                    y: -416.438,
                    r: -0.135
                },
                "195": {
                    x: -337.444,
                    y: -423.513,
                    r: -0.113
                },
                "196": {
                    x: -332.258,
                    y: -428.364,
                    r: -0.098
                },
                "197": {
                    x: -328.911,
                    y: -431.471,
                    r: -0.088
                },
                "198": {
                    x: -327.071,
                    y: -433.097,
                    r: -0.082
                },
                "199": {
                    x: -326.45,
                    y: -433.6,
                    r: -0.081
                },
                "225": {
                    x: -338.227,
                    y: -426.28,
                    r: -0.109
                },
                "226": {
                    x: -367.017,
                    y: -406.773,
                    r: -0.181
                },
                "227": {
                    x: -400.643,
                    y: -380.693,
                    r: -0.271
                },
                "228": {
                    x: -428.785,
                    y: -355.9,
                    r: -0.352
                },
                "229": {
                    x: -446.248,
                    y: -338.689,
                    r: -0.405
                },
                "230": {
                    x: -452.05,
                    y: -332.65,
                    r: -0.424
                }
            })
            .addTimedChild(instance8, 0, 231, {
                "0": {
                    x: -328,
                    y: -318.9,
                    sx: 0.999,
                    sy: 0.999,
                    r: -0.353
                },
                "15": {
                    x: -328.004,
                    y: -317.354,
                    r: -0.356
                },
                "16": {
                    x: -327.79,
                    y: -312.838,
                    r: -0.362
                },
                "17": {
                    x: -327.6,
                    y: -308.996,
                    r: -0.368
                },
                "18": {
                    y: -307.95,
                    r: -0.37
                },
                "19": {
                    x: -335.171,
                    y: -310.247
                },
                "20": {
                    x: -352.796,
                    y: -315.457
                },
                "21": {
                    x: -373.235,
                    y: -321.552,
                    r: -0.371
                },
                "22": {
                    x: -391.455,
                    y: -327.007,
                    sx: 0.998,
                    sy: 0.998,
                    r: -0.372
                },
                "23": {
                    x: -404.913,
                    y: -331.036
                },
                "24": {
                    x: -412.8,
                    y: -333.3
                },
                "25": {
                    x: -417.431,
                    y: -329.523,
                    r: -0.375
                },
                "26": {
                    x: -424.863,
                    y: -323.341,
                    r: -0.379
                },
                "27": {
                    x: -433.725,
                    y: -315.913,
                    sx: 0.999,
                    sy: 0.999,
                    r: -0.384
                },
                "28": {
                    x: -442.883,
                    y: -308.278,
                    r: -0.389
                },
                "29": {
                    x: -450.863,
                    y: -301.585,
                    r: -0.393
                },
                "30": {
                    x: -455.8,
                    y: -297.3,
                    r: -0.396
                },
                "31": {
                    x: -455.871,
                    y: -298.336,
                    r: -0.395
                },
                "32": {
                    x: -455.886,
                    y: -301.095,
                    r: -0.391
                },
                "33": {
                    x: -455.927,
                    y: -304.484,
                    r: -0.387
                },
                "34": {
                    x: -455.968,
                    y: -307.363,
                    r: -0.384
                },
                "35": {
                    x: -456.048,
                    y: -309.477,
                    r: -0.381
                },
                "36": {
                    x: -456.052,
                    y: -310.873,
                    r: -0.38
                },
                "37": {
                    x: -456.07,
                    y: -311.624,
                    r: -0.379
                },
                "38": {
                    x: -456.15,
                    y: -311.8,
                    r: -0.378
                },
                "95": {
                    x: -456.388,
                    y: -311.422,
                    r: -0.379
                },
                "96": {
                    x: -457.081,
                    y: -309.863,
                    r: -0.382
                },
                "97": {
                    x: -457.735,
                    y: -308.252,
                    r: -0.385
                },
                "98": {
                    x: -457.7,
                    y: -307.75,
                    r: -0.386
                },
                "99": {
                    x: -457.636,
                    y: -308.064
                },
                "100": {
                    x: -457.215,
                    y: -309.028,
                    r: -0.384
                },
                "101": {
                    x: -456.545,
                    y: -310.547,
                    r: -0.381
                },
                "102": {
                    x: -456.115,
                    y: -311.524,
                    r: -0.379
                },
                "103": {
                    x: -456.15,
                    y: -311.8,
                    r: -0.378
                },
                "104": {
                    x: -456.388,
                    y: -311.372,
                    r: -0.379
                },
                "105": {
                    x: -457.031,
                    y: -309.763,
                    r: -0.382
                },
                "106": {
                    x: -457.785,
                    y: -308.252,
                    r: -0.385
                },
                "107": {
                    x: -457.7,
                    y: -307.75,
                    r: -0.386
                },
                "108": {
                    x: -457.636,
                    y: -308.064
                },
                "109": {
                    x: -457.165,
                    y: -309.028,
                    r: -0.384
                },
                "110": {
                    x: -456.495,
                    y: -310.597,
                    r: -0.381
                },
                "111": {
                    x: -456.015,
                    y: -311.574,
                    r: -0.379
                },
                "112": {
                    x: -456.15,
                    y: -311.8,
                    r: -0.378
                },
                "113": {
                    x: -456.438,
                    y: -311.422,
                    r: -0.379
                },
                "114": {
                    x: -457.131,
                    y: -309.863,
                    r: -0.382
                },
                "115": {
                    x: -457.835,
                    y: -308.252,
                    r: -0.385
                },
                "116": {
                    x: -457.7,
                    y: -307.75,
                    r: -0.386
                },
                "117": {
                    x: -457.636,
                    y: -308.064
                },
                "118": {
                    x: -457.165,
                    y: -309.028,
                    r: -0.384
                },
                "119": {
                    x: -456.445,
                    y: -310.547,
                    r: -0.381
                },
                "120": {
                    x: -455.965,
                    y: -311.524,
                    r: -0.379
                },
                "121": {
                    x: -456.15,
                    y: -311.8,
                    r: -0.378
                },
                "122": {
                    x: -456.388,
                    y: -311.372,
                    r: -0.379
                },
                "123": {
                    x: -457.131,
                    y: -309.813,
                    r: -0.382
                },
                "124": {
                    x: -457.835,
                    y: -308.252,
                    r: -0.385
                },
                "125": {
                    x: -457.7,
                    y: -307.75,
                    r: -0.386
                },
                "126": {
                    x: -457.636,
                    y: -308.064
                },
                "127": {
                    x: -457.165,
                    y: -309.028,
                    r: -0.384
                },
                "128": {
                    x: -456.445,
                    y: -310.547,
                    r: -0.381
                },
                "129": {
                    x: -455.965,
                    y: -311.524,
                    r: -0.379
                },
                "130": {
                    x: -456.15,
                    y: -311.8,
                    r: -0.378
                },
                "131": {
                    x: -456.388,
                    y: -311.372,
                    r: -0.379
                },
                "132": {
                    x: -457.131,
                    y: -309.813,
                    r: -0.382
                },
                "133": {
                    x: -457.835,
                    y: -308.252,
                    r: -0.385
                },
                "134": {
                    x: -457.7,
                    y: -307.75,
                    r: -0.386
                },
                "135": {
                    x: -457.636,
                    y: -308.064
                },
                "136": {
                    x: -457.165,
                    y: -309.028,
                    r: -0.384
                },
                "137": {
                    x: -456.445,
                    y: -310.547,
                    r: -0.381
                },
                "138": {
                    x: -455.965,
                    y: -311.524,
                    r: -0.379
                },
                "139": {
                    x: -456.15,
                    y: -311.8,
                    r: -0.378
                },
                "140": {
                    x: -456.388,
                    y: -311.372,
                    r: -0.379
                },
                "141": {
                    x: -457.131,
                    y: -309.813,
                    r: -0.382
                },
                "142": {
                    x: -457.835,
                    y: -308.252,
                    r: -0.385
                },
                "143": {
                    x: -457.7,
                    y: -307.75,
                    r: -0.386
                },
                "144": {
                    x: -457.636,
                    y: -308.064
                },
                "145": {
                    x: -457.165,
                    y: -309.028,
                    r: -0.384
                },
                "146": {
                    x: -456.445,
                    y: -310.547,
                    r: -0.381
                },
                "147": {
                    x: -455.965,
                    y: -311.524,
                    r: -0.379
                },
                "148": {
                    x: -456.15,
                    y: -311.8,
                    r: -0.378
                },
                "149": {
                    x: -456.388,
                    y: -311.372,
                    r: -0.379
                },
                "150": {
                    x: -457.131,
                    y: -309.813,
                    r: -0.382
                },
                "151": {
                    x: -457.835,
                    y: -308.252,
                    r: -0.385
                },
                "152": {
                    x: -457.7,
                    y: -307.75,
                    r: -0.386
                },
                "153": {
                    x: -457.636,
                    y: -308.064
                },
                "154": {
                    x: -457.165,
                    y: -309.028,
                    r: -0.384
                },
                "155": {
                    x: -456.445,
                    y: -310.547,
                    r: -0.381
                },
                "156": {
                    x: -455.965,
                    y: -311.524,
                    r: -0.379
                },
                "157": {
                    x: -456.15,
                    y: -311.8,
                    r: -0.378
                },
                "158": {
                    x: -456.388,
                    y: -311.372,
                    r: -0.379
                },
                "159": {
                    x: -457.131,
                    y: -309.813,
                    r: -0.382
                },
                "160": {
                    x: -457.835,
                    y: -308.252,
                    r: -0.385
                },
                "161": {
                    x: -457.7,
                    y: -307.75,
                    r: -0.386
                },
                "162": {
                    x: -458.652,
                    y: -304.092,
                    r: -0.375
                },
                "163": {
                    x: -459.75,
                    y: -300.3,
                    r: -0.364
                },
                "164": {
                    x: -451.057,
                    y: -311.923,
                    r: -0.348
                },
                "165": {
                    x: -442.729,
                    y: -322.893,
                    r: -0.332
                },
                "166": {
                    x: -437.404,
                    y: -329.899,
                    r: -0.323
                },
                "167": {
                    x: -434.586,
                    y: -333.623,
                    r: -0.318
                },
                "168": {
                    x: -433.45,
                    y: -334.75,
                    r: -0.316
                },
                "171": {
                    x: -431.65,
                    y: -338.7,
                    r: -0.308
                },
                "172": {
                    x: -442.95,
                    y: -308.9,
                    sx: 0.998,
                    sy: 0.998,
                    r: -0.323
                },
                "173": {
                    x: -443.8,
                    y: -306.7,
                    sx: 0.999,
                    sy: 0.999,
                    r: -0.324
                },
                "174": {
                    x: -435.434,
                    y: -320.546,
                    r: -0.313
                },
                "175": {
                    x: -431.201,
                    y: -327.411,
                    r: -0.307
                },
                "176": {
                    x: -428.622,
                    y: -331.622,
                    r: -0.303
                },
                "177": {
                    x: -426.99,
                    y: -334.338,
                    r: -0.301
                },
                "178": {
                    x: -425.907,
                    y: -336.144,
                    r: -0.299
                },
                "179": {
                    x: -425.214,
                    y: -337.252,
                    r: -0.298
                },
                "180": {
                    x: -424.858,
                    y: -337.814
                },
                "181": {
                    x: -424.65,
                    y: -337.95
                },
                "186": {
                    x: -425.55,
                    y: -335.95,
                    r: -0.302
                },
                "187": {
                    x: -424.475,
                    y: -337.405,
                    r: -0.298
                },
                "188": {
                    x: -420.555,
                    y: -342.31,
                    r: -0.281
                },
                "189": {
                    x: -413.169,
                    y: -351.486,
                    r: -0.251
                },
                "190": {
                    x: -402.042,
                    y: -365.172,
                    r: -0.206
                },
                "191": {
                    x: -388.19,
                    y: -381.948,
                    r: -0.15
                },
                "192": {
                    x: -374.128,
                    y: -398.732,
                    r: -0.094
                },
                "193": {
                    x: -361.92,
                    y: -413.09,
                    r: -0.046
                },
                "194": {
                    x: -352.33,
                    y: -424.146,
                    r: -0.008
                },
                "195": {
                    x: -345.261,
                    y: -432.337,
                    r: 0.019
                },
                "196": {
                    x: -340.332,
                    y: -437.873,
                    r: 0.038
                },
                "197": {
                    x: -337.161,
                    y: -441.462,
                    r: 0.05
                },
                "198": {
                    x: -335.438,
                    y: -443.426,
                    r: 0.057
                },
                "199": {
                    x: -334.9,
                    y: -444.2,
                    r: 0.059
                },
                "225": {
                    x: -345.594,
                    y: -436.122,
                    r: 0.037
                },
                "226": {
                    x: -372.545,
                    y: -415.187,
                    r: -0.021
                },
                "227": {
                    x: -405.909,
                    y: -389.012,
                    r: -0.093
                },
                "228": {
                    x: -435.743,
                    y: -365.263,
                    r: -0.157
                },
                "229": {
                    x: -455.52,
                    y: -349.372,
                    r: -0.2
                },
                "230": {
                    x: -462.25,
                    y: -343.7,
                    r: -0.215
                }
            })
            .addTimedChild(instance7, 0, 193, {
                "0": {
                    x: -195.15,
                    y: -239.7,
                    sx: 1,
                    sy: 1,
                    kx: 0,
                    ky: 0,
                    r: -0.126
                },
                "15": {
                    x: -194.918,
                    y: -238.475,
                    r: -0.129
                },
                "16": {
                    x: -194.225,
                    y: -234.905,
                    r: -0.136
                },
                "17": {
                    x: -193.628,
                    y: -231.873,
                    r: -0.141
                },
                "18": {
                    x: -193.4,
                    y: -230.95,
                    r: -0.143
                },
                "19": {
                    x: -204.058,
                    y: -234.081,
                    sx: 0.991,
                    sy: 1.022,
                    kx: 0.102,
                    ky: -0.128,
                    r: 0
                },
                "20": {
                    x: -227.556,
                    y: -240.725,
                    sx: 0.97,
                    sy: 1.072,
                    kx: 0.011,
                    ky: -0.096
                },
                "21": {
                    x: -252.124,
                    y: -247.805,
                    sx: 0.949,
                    sy: 1.123,
                    kx: -0.084,
                    ky: -0.063
                },
                "22": {
                    x: -271.084,
                    y: -253.236,
                    sx: 0.932,
                    sy: 1.163,
                    kx: -0.157,
                    ky: -0.037
                },
                "23": {
                    x: -282.6,
                    y: -256.45,
                    sx: 0.922,
                    sy: 1.187,
                    kx: -0.202,
                    ky: -0.021
                },
                "24": {
                    x: -288.05,
                    y: -257.75,
                    sx: 1,
                    sy: 1.173,
                    kx: -0.193,
                    ky: 0.123
                },
                "25": {
                    x: -293.632,
                    y: -254.047,
                    sy: 1.193,
                    kx: -0.205,
                    ky: 0.126
                },
                "26": {
                    x: -301.3,
                    y: -248.65,
                    sy: 1.221,
                    kx: -0.223,
                    ky: 0.132
                },
                "27": {
                    x: -311.1,
                    y: -241.85,
                    sx: 0.999,
                    sy: 1.256,
                    kx: -0.245,
                    ky: 0.14
                },
                "28": {
                    x: -321.284,
                    y: -234.983,
                    sy: 1.294,
                    kx: -0.271,
                    ky: 0.151
                },
                "29": {
                    x: -330.148,
                    y: -228.946,
                    sx: 1,
                    sy: 1.327,
                    kx: -0.293,
                    ky: 0.16
                },
                "30": {
                    x: -335.75,
                    y: -225.05,
                    sy: 1.347,
                    kx: -0.308,
                    ky: 0.166
                },
                "31": {
                    x: -335.874,
                    y: -225.953,
                    kx: -0.309,
                    ky: 0.168
                },
                "32": {
                    x: -336.216,
                    y: -228.366,
                    kx: -0.312,
                    ky: 0.171
                },
                "33": {
                    x: -336.555,
                    y: -231.221,
                    kx: -0.316,
                    ky: 0.175
                },
                "34": {
                    x: -336.9,
                    y: -233.692,
                    kx: -0.32,
                    ky: 0.178
                },
                "35": {
                    x: -337.169,
                    y: -235.541,
                    kx: -0.322,
                    ky: 0.181
                },
                "36": {
                    x: -337.285,
                    y: -236.734,
                    kx: -0.324,
                    ky: 0.183
                },
                "37": {
                    x: -337.327,
                    y: -237.336,
                    kx: -0.325
                },
                "38": {
                    x: -337.4,
                    y: -237.5,
                    ky: 0.184
                },
                "94": {
                    x: -337.5,
                    y: -237.55,
                    kx: -0.356,
                    ky: 0.215
                },
                "95": {
                    x: -337.716,
                    y: -237.252,
                    kx: -0.345,
                    ky: 0.203
                },
                "96": {
                    x: -338.15,
                    y: -235.995,
                    kx: -0.302,
                    ky: 0.161
                },
                "97": {
                    x: -338.569,
                    y: -234.75,
                    kx: -0.26,
                    ky: 0.119
                },
                "98": {
                    x: -338.7,
                    y: -234.4,
                    kx: -0.248,
                    ky: 0.107
                },
                "99": {
                    x: -338.58,
                    y: -234.62,
                    kx: -0.255,
                    ky: 0.114
                },
                "100": {
                    x: -338.376,
                    y: -235.391,
                    kx: -0.281,
                    ky: 0.14
                },
                "101": {
                    x: -337.902,
                    y: -236.585,
                    kx: -0.323,
                    ky: 0.181
                },
                "102": {
                    x: -337.62,
                    y: -237.388,
                    kx: -0.349,
                    ky: 0.208
                },
                "103": {
                    x: -337.5,
                    y: -237.55,
                    kx: -0.356,
                    ky: 0.215
                },
                "104": {
                    x: -337.716,
                    y: -237.252,
                    kx: -0.345,
                    ky: 0.203
                },
                "105": {
                    x: -338.15,
                    y: -235.995,
                    kx: -0.302,
                    ky: 0.161
                },
                "106": {
                    x: -338.569,
                    y: -234.75,
                    kx: -0.26,
                    ky: 0.119
                },
                "107": {
                    x: -338.7,
                    y: -234.4,
                    kx: -0.248,
                    ky: 0.107
                },
                "108": {
                    x: -338.58,
                    y: -234.62,
                    kx: -0.255,
                    ky: 0.114
                },
                "109": {
                    x: -338.376,
                    y: -235.391,
                    kx: -0.281,
                    ky: 0.14
                },
                "110": {
                    x: -337.902,
                    y: -236.585,
                    kx: -0.323,
                    ky: 0.181
                },
                "111": {
                    x: -337.62,
                    y: -237.388,
                    kx: -0.349,
                    ky: 0.208
                },
                "112": {
                    x: -337.5,
                    y: -237.55,
                    kx: -0.356,
                    ky: 0.215
                },
                "113": {
                    x: -337.716,
                    y: -237.252,
                    kx: -0.345,
                    ky: 0.203
                },
                "114": {
                    x: -338.15,
                    y: -235.995,
                    kx: -0.302,
                    ky: 0.161
                },
                "115": {
                    x: -338.569,
                    y: -234.75,
                    kx: -0.26,
                    ky: 0.119
                },
                "116": {
                    x: -338.7,
                    y: -234.4,
                    kx: -0.248,
                    ky: 0.107
                },
                "117": {
                    x: -338.58,
                    y: -234.62,
                    kx: -0.255,
                    ky: 0.114
                },
                "118": {
                    x: -338.376,
                    y: -235.391,
                    kx: -0.281,
                    ky: 0.14
                },
                "119": {
                    x: -337.902,
                    y: -236.585,
                    kx: -0.323,
                    ky: 0.181
                },
                "120": {
                    x: -337.62,
                    y: -237.388,
                    kx: -0.349,
                    ky: 0.208
                },
                "121": {
                    x: -337.5,
                    y: -237.55,
                    kx: -0.356,
                    ky: 0.215
                },
                "122": {
                    x: -337.716,
                    y: -237.252,
                    kx: -0.345,
                    ky: 0.203
                },
                "123": {
                    x: -338.15,
                    y: -235.995,
                    kx: -0.302,
                    ky: 0.161
                },
                "124": {
                    x: -338.569,
                    y: -234.75,
                    kx: -0.26,
                    ky: 0.119
                },
                "125": {
                    x: -338.7,
                    y: -234.4,
                    kx: -0.248,
                    ky: 0.107
                },
                "126": {
                    x: -338.58,
                    y: -234.62,
                    kx: -0.255,
                    ky: 0.114
                },
                "127": {
                    x: -338.376,
                    y: -235.391,
                    kx: -0.281,
                    ky: 0.14
                },
                "128": {
                    x: -337.902,
                    y: -236.585,
                    kx: -0.323,
                    ky: 0.181
                },
                "129": {
                    x: -337.62,
                    y: -237.388,
                    kx: -0.349,
                    ky: 0.208
                },
                "130": {
                    x: -337.5,
                    y: -237.55,
                    kx: -0.356,
                    ky: 0.215
                },
                "131": {
                    x: -337.716,
                    y: -237.252,
                    kx: -0.345,
                    ky: 0.203
                },
                "132": {
                    x: -338.15,
                    y: -235.995,
                    kx: -0.302,
                    ky: 0.161
                },
                "133": {
                    x: -338.569,
                    y: -234.75,
                    kx: -0.26,
                    ky: 0.119
                },
                "134": {
                    x: -338.7,
                    y: -234.4,
                    kx: -0.248,
                    ky: 0.107
                },
                "135": {
                    x: -338.58,
                    y: -234.62,
                    kx: -0.255,
                    ky: 0.114
                },
                "136": {
                    x: -338.376,
                    y: -235.391,
                    kx: -0.281,
                    ky: 0.14
                },
                "137": {
                    x: -337.902,
                    y: -236.585,
                    kx: -0.323,
                    ky: 0.181
                },
                "138": {
                    x: -337.62,
                    y: -237.388,
                    kx: -0.349,
                    ky: 0.208
                },
                "139": {
                    x: -337.5,
                    y: -237.55,
                    kx: -0.356,
                    ky: 0.215
                },
                "140": {
                    x: -337.716,
                    y: -237.252,
                    kx: -0.345,
                    ky: 0.203
                },
                "141": {
                    x: -338.15,
                    y: -235.995,
                    kx: -0.302,
                    ky: 0.161
                },
                "142": {
                    x: -338.569,
                    y: -234.75,
                    kx: -0.26,
                    ky: 0.119
                },
                "143": {
                    x: -338.7,
                    y: -234.4,
                    kx: -0.248,
                    ky: 0.107
                },
                "144": {
                    x: -338.58,
                    y: -234.62,
                    kx: -0.255,
                    ky: 0.114
                },
                "145": {
                    x: -338.376,
                    y: -235.391,
                    kx: -0.281,
                    ky: 0.14
                },
                "146": {
                    x: -337.902,
                    y: -236.585,
                    kx: -0.323,
                    ky: 0.181
                },
                "147": {
                    x: -337.62,
                    y: -237.388,
                    kx: -0.349,
                    ky: 0.208
                },
                "148": {
                    x: -337.5,
                    y: -237.55,
                    kx: -0.356,
                    ky: 0.215
                },
                "149": {
                    x: -337.716,
                    y: -237.252,
                    kx: -0.345,
                    ky: 0.203
                },
                "150": {
                    x: -338.15,
                    y: -235.995,
                    kx: -0.302,
                    ky: 0.161
                },
                "151": {
                    x: -338.569,
                    y: -234.75,
                    kx: -0.26,
                    ky: 0.119
                },
                "152": {
                    x: -338.7,
                    y: -234.4,
                    kx: -0.248,
                    ky: 0.107
                },
                "153": {
                    x: -338.58,
                    y: -234.62,
                    kx: -0.255,
                    ky: 0.114
                },
                "154": {
                    x: -338.376,
                    y: -235.391,
                    kx: -0.281,
                    ky: 0.14
                },
                "155": {
                    x: -337.902,
                    y: -236.585,
                    kx: -0.323,
                    ky: 0.181
                },
                "156": {
                    x: -337.62,
                    y: -237.388,
                    kx: -0.349,
                    ky: 0.208
                },
                "157": {
                    x: -337.5,
                    y: -237.55,
                    kx: -0.356,
                    ky: 0.215
                },
                "158": {
                    x: -337.716,
                    y: -237.252,
                    kx: -0.345,
                    ky: 0.203
                },
                "159": {
                    x: -338.15,
                    y: -235.995,
                    kx: -0.302,
                    ky: 0.161
                },
                "160": {
                    x: -338.569,
                    y: -234.75,
                    kx: -0.26,
                    ky: 0.119
                },
                "161": {
                    x: -338.7,
                    y: -234.4,
                    kx: -0.248,
                    ky: 0.107
                },
                "162": {
                    x: -339.452,
                    y: -230.356,
                    kx: -0.236,
                    ky: 0.094
                },
                "163": {
                    x: -340.25,
                    y: -226.25,
                    kx: -0.223,
                    ky: 0.081
                },
                "164": {
                    x: -324.65,
                    y: -245.1,
                    sx: 0.867,
                    sy: 1.36,
                    kx: -0.214,
                    ky: 0.079
                },
                "165": {
                    x: -319.95,
                    y: -250.75,
                    sx: 0.789,
                    sy: 1.431,
                    kx: -0.218,
                    ky: 0.087
                },
                "166": {
                    x: -316.378,
                    y: -255.099,
                    sx: 0.781,
                    sy: 1.396,
                    kx: -0.18,
                    ky: 0.052
                },
                "167": {
                    x: -314.437,
                    y: -257.487,
                    sx: 0.777,
                    sy: 1.377,
                    kx: -0.159,
                    ky: 0.032
                },
                "168": {
                    x: -313.8,
                    y: -258.1,
                    sx: 0.776,
                    sy: 1.371,
                    kx: -0.153,
                    ky: 0.026
                },
                "171": {
                    x: -312.6,
                    y: -261.1,
                    kx: -0.161,
                    ky: 0.034
                },
                "172": {
                    x: -325.9,
                    y: -235.35,
                    sy: 1.253,
                    kx: -0.24,
                    ky: 0.149
                },
                "173": {
                    x: -327,
                    y: -233.4,
                    sy: 1.244,
                    kx: -0.248,
                    ky: 0.161
                },
                "174": {
                    x: -314.005,
                    y: -245.266,
                    sx: 0.875,
                    sy: 1.136,
                    kx: -0.083,
                    ky: 0.035
                },
                "175": {
                    x: -307.508,
                    y: -251.114,
                    sx: 0.924,
                    sy: 1.083,
                    kx: 0,
                    ky: -0.029
                },
                "176": {
                    x: -303.523,
                    y: -254.751,
                    sx: 0.954,
                    sy: 1.05,
                    kx: 0.05,
                    ky: -0.068
                },
                "177": {
                    x: -300.951,
                    y: -257.095,
                    sx: 0.974,
                    sy: 1.028,
                    kx: 0.083,
                    ky: -0.093
                },
                "178": {
                    x: -299.293,
                    y: -258.592,
                    sx: 0.987,
                    sy: 1.015,
                    kx: 0.104,
                    ky: -0.109
                },
                "179": {
                    x: -298.196,
                    y: -259.538,
                    sx: 0.995,
                    sy: 1.006,
                    kx: 0.117,
                    ky: -0.119
                },
                "180": {
                    x: -297.715,
                    y: -260.082,
                    sx: 0.999,
                    sy: 1.001,
                    kx: 0.124,
                    ky: -0.125
                },
                "181": {
                    x: -297.5,
                    y: -260.15,
                    sx: 1,
                    sy: 1,
                    kx: 0,
                    ky: 0,
                    r: -0.126
                },
                "186": {
                    x: -298.1,
                    y: -258.8,
                    r: -0.131
                },
                "187": {
                    x: -297.346,
                    y: -259.788,
                    r: -0.12
                },
                "188": {
                    x: -294.731,
                    y: -262.835,
                    r: -0.084
                },
                "189": {
                    x: -290.248,
                    y: -268.187,
                    r: -0.022
                },
                "190": {
                    x: -283.793,
                    y: -275.754,
                    r: 0.067
                },
                "191": {
                    x: -275.538,
                    y: -285.563,
                    sx: 0.999,
                    sy: 0.999,
                    r: 0.181
                },
                "192": {
                    x: -265.85,
                    y: -296.9,
                    r: 0.314
                }
            })
            .addTimedChild(instance16, 193, 1)
            .addTimedChild(instance18, 194, 1)
            .addTimedChild(instance6, 0, 195, {
                "0": {
                    x: -237.95,
                    y: -171.85,
                    sx: 1,
                    sy: 1,
                    kx: 0,
                    ky: 0,
                    r: -0.126
                },
                "15": {
                    x: -237.604,
                    y: -170.525,
                    r: -0.129
                },
                "16": {
                    x: -236.454,
                    y: -166.668,
                    r: -0.136
                },
                "17": {
                    x: -235.416,
                    y: -163.447,
                    r: -0.141
                },
                "18": {
                    x: -235.1,
                    y: -162.45,
                    r: -0.143
                },
                "19": {
                    x: -248.018,
                    y: -164.5,
                    r: -0.008
                },
                "20": {
                    x: -276.93,
                    y: -169.003,
                    r: 0.296
                },
                "21": {
                    x: -305.25,
                    y: -173.45,
                    r: 0.593
                },
                "22": {
                    x: -333,
                    y: -176.8,
                    kx: -1.399,
                    ky: -1.743,
                    r: 0
                },
                "23": {
                    x: -347.7,
                    y: -178.75,
                    sx: 0.999,
                    sy: 0.999,
                    kx: -1.339,
                    ky: -1.802
                },
                "24": {
                    x: -363.3,
                    y: -185.05,
                    sx: 1,
                    sy: 1,
                    kx: -1.36,
                    ky: -1.782
                },
                "25": {
                    x: -370.528,
                    y: -180.309,
                    kx: -1.351,
                    ky: -1.79
                },
                "26": {
                    x: -382.163,
                    y: -172.55,
                    kx: -1.338,
                    ky: -1.804
                },
                "27": {
                    x: -396.146,
                    y: -163.25,
                    kx: -1.321,
                    ky: -1.82
                },
                "28": {
                    x: -410.499,
                    y: -153.697,
                    kx: -1.305,
                    ky: -1.837
                },
                "29": {
                    x: -423.116,
                    y: -145.35,
                    kx: -1.29,
                    ky: -1.852
                },
                "30": {
                    x: -431.05,
                    y: -140.05,
                    kx: -1.281,
                    ky: -1.861
                },
                "31": {
                    x: -431.149,
                    y: -141.157,
                    kx: -1.264,
                    ky: -1.877
                },
                "32": {
                    x: -431.335,
                    y: -144.016,
                    kx: -1.22,
                    ky: -1.921
                },
                "33": {
                    x: -431.443,
                    y: -147.54,
                    kx: -1.167,
                    ky: -1.975
                },
                "34": {
                    x: -431.557,
                    y: -150.516,
                    kx: -1.121,
                    ky: -2.021
                },
                "35": {
                    x: -431.657,
                    y: -152.674,
                    kx: -1.087,
                    ky: -2.055
                },
                "36": {
                    x: -431.689,
                    y: -154.159,
                    kx: -1.065,
                    ky: -2.077
                },
                "37": {
                    x: -431.732,
                    y: -154.915,
                    kx: -1.053,
                    ky: -2.089
                },
                "38": {
                    x: -431.75,
                    y: -155.1,
                    kx: -1.049,
                    ky: -2.092
                },
                "94": {
                    x: -434.35,
                    y: -158.1,
                    kx: -1.08,
                    ky: -2.061
                },
                "95": {
                    x: -433.557,
                    y: -156.748,
                    kx: -1.069,
                    ky: -2.073
                },
                "96": {
                    x: -430.501,
                    y: -151.602,
                    kx: -1.027,
                    ky: -2.115
                },
                "97": {
                    x: -427.451,
                    y: -146.471,
                    kx: -0.984,
                    ky: -2.157
                },
                "98": {
                    x: -426.55,
                    y: -145,
                    kx: -0.973,
                    ky: -2.169
                },
                "99": {
                    x: -427.035,
                    y: -145.822,
                    kx: -0.98,
                    ky: -2.162
                },
                "100": {
                    x: -428.971,
                    y: -148.981,
                    kx: -1.006,
                    ky: -2.136
                },
                "101": {
                    x: -431.985,
                    y: -154.036,
                    kx: -1.047,
                    ky: -2.095
                },
                "102": {
                    x: -433.844,
                    y: -157.253,
                    kx: -1.073,
                    ky: -2.068
                },
                "103": {
                    x: -434.35,
                    y: -158.1,
                    kx: -1.08,
                    ky: -2.061
                },
                "104": {
                    x: -433.557,
                    y: -156.748,
                    kx: -1.069,
                    ky: -2.073
                },
                "105": {
                    x: -430.501,
                    y: -151.602,
                    kx: -1.027,
                    ky: -2.115
                },
                "106": {
                    x: -427.451,
                    y: -146.471,
                    kx: -0.984,
                    ky: -2.157
                },
                "107": {
                    x: -426.55,
                    y: -145,
                    kx: -0.973,
                    ky: -2.169
                },
                "108": {
                    x: -427.035,
                    y: -145.822,
                    kx: -0.98,
                    ky: -2.162
                },
                "109": {
                    x: -428.971,
                    y: -148.981,
                    kx: -1.006,
                    ky: -2.136
                },
                "110": {
                    x: -431.985,
                    y: -154.036,
                    kx: -1.047,
                    ky: -2.095
                },
                "111": {
                    x: -433.844,
                    y: -157.253,
                    kx: -1.073,
                    ky: -2.068
                },
                "112": {
                    x: -434.35,
                    y: -158.1,
                    kx: -1.08,
                    ky: -2.061
                },
                "113": {
                    x: -433.557,
                    y: -156.748,
                    kx: -1.069,
                    ky: -2.073
                },
                "114": {
                    x: -430.501,
                    y: -151.602,
                    kx: -1.027,
                    ky: -2.115
                },
                "115": {
                    x: -427.451,
                    y: -146.471,
                    kx: -0.984,
                    ky: -2.157
                },
                "116": {
                    x: -426.55,
                    y: -145,
                    kx: -0.973,
                    ky: -2.169
                },
                "117": {
                    x: -427.035,
                    y: -145.822,
                    kx: -0.98,
                    ky: -2.162
                },
                "118": {
                    x: -428.971,
                    y: -148.981,
                    kx: -1.006,
                    ky: -2.136
                },
                "119": {
                    x: -431.985,
                    y: -154.036,
                    kx: -1.047,
                    ky: -2.095
                },
                "120": {
                    x: -433.844,
                    y: -157.253,
                    kx: -1.073,
                    ky: -2.068
                },
                "121": {
                    x: -434.35,
                    y: -158.1,
                    kx: -1.08,
                    ky: -2.061
                },
                "122": {
                    x: -433.557,
                    y: -156.748,
                    kx: -1.069,
                    ky: -2.073
                },
                "123": {
                    x: -430.501,
                    y: -151.602,
                    kx: -1.027,
                    ky: -2.115
                },
                "124": {
                    x: -427.451,
                    y: -146.471,
                    kx: -0.984,
                    ky: -2.157
                },
                "125": {
                    x: -426.55,
                    y: -145,
                    kx: -0.973,
                    ky: -2.169
                },
                "126": {
                    x: -427.035,
                    y: -145.822,
                    kx: -0.98,
                    ky: -2.162
                },
                "127": {
                    x: -428.971,
                    y: -148.981,
                    kx: -1.006,
                    ky: -2.136
                },
                "128": {
                    x: -431.985,
                    y: -154.036,
                    kx: -1.047,
                    ky: -2.095
                },
                "129": {
                    x: -433.844,
                    y: -157.253,
                    kx: -1.073,
                    ky: -2.068
                },
                "130": {
                    x: -434.35,
                    y: -158.1,
                    kx: -1.08,
                    ky: -2.061
                },
                "131": {
                    x: -433.557,
                    y: -156.748,
                    kx: -1.069,
                    ky: -2.073
                },
                "132": {
                    x: -430.501,
                    y: -151.602,
                    kx: -1.027,
                    ky: -2.115
                },
                "133": {
                    x: -427.451,
                    y: -146.471,
                    kx: -0.984,
                    ky: -2.157
                },
                "134": {
                    x: -426.55,
                    y: -145,
                    kx: -0.973,
                    ky: -2.169
                },
                "135": {
                    x: -427.035,
                    y: -145.822,
                    kx: -0.98,
                    ky: -2.162
                },
                "136": {
                    x: -428.971,
                    y: -148.981,
                    kx: -1.006,
                    ky: -2.136
                },
                "137": {
                    x: -431.985,
                    y: -154.036,
                    kx: -1.047,
                    ky: -2.095
                },
                "138": {
                    x: -433.844,
                    y: -157.253,
                    kx: -1.073,
                    ky: -2.068
                },
                "139": {
                    x: -434.35,
                    y: -158.1,
                    kx: -1.08,
                    ky: -2.061
                },
                "140": {
                    x: -433.557,
                    y: -156.748,
                    kx: -1.069,
                    ky: -2.073
                },
                "141": {
                    x: -430.501,
                    y: -151.602,
                    kx: -1.027,
                    ky: -2.115
                },
                "142": {
                    x: -427.451,
                    y: -146.471,
                    kx: -0.984,
                    ky: -2.157
                },
                "143": {
                    x: -426.55,
                    y: -145,
                    kx: -0.973,
                    ky: -2.169
                },
                "144": {
                    x: -427.035,
                    y: -145.822,
                    kx: -0.98,
                    ky: -2.162
                },
                "145": {
                    x: -428.971,
                    y: -148.981,
                    kx: -1.006,
                    ky: -2.136
                },
                "146": {
                    x: -431.985,
                    y: -154.036,
                    kx: -1.047,
                    ky: -2.095
                },
                "147": {
                    x: -433.844,
                    y: -157.253,
                    kx: -1.073,
                    ky: -2.068
                },
                "148": {
                    x: -434.35,
                    y: -158.1,
                    kx: -1.08,
                    ky: -2.061
                },
                "149": {
                    x: -433.557,
                    y: -156.748,
                    kx: -1.069,
                    ky: -2.073
                },
                "150": {
                    x: -430.501,
                    y: -151.602,
                    kx: -1.027,
                    ky: -2.115
                },
                "151": {
                    x: -427.451,
                    y: -146.471,
                    kx: -0.984,
                    ky: -2.157
                },
                "152": {
                    x: -426.55,
                    y: -145,
                    kx: -0.973,
                    ky: -2.169
                },
                "153": {
                    x: -427.035,
                    y: -145.822,
                    kx: -0.98,
                    ky: -2.162
                },
                "154": {
                    x: -428.971,
                    y: -148.981,
                    kx: -1.006,
                    ky: -2.136
                },
                "155": {
                    x: -431.985,
                    y: -154.036,
                    kx: -1.047,
                    ky: -2.095
                },
                "156": {
                    x: -433.844,
                    y: -157.253,
                    kx: -1.073,
                    ky: -2.068
                },
                "157": {
                    x: -434.35,
                    y: -158.1,
                    kx: -1.08,
                    ky: -2.061
                },
                "158": {
                    x: -433.557,
                    y: -156.748,
                    kx: -1.069,
                    ky: -2.073
                },
                "159": {
                    x: -430.501,
                    y: -151.602,
                    kx: -1.027,
                    ky: -2.115
                },
                "160": {
                    x: -427.451,
                    y: -146.471,
                    kx: -0.984,
                    ky: -2.157
                },
                "161": {
                    x: -426.55,
                    y: -145,
                    kx: -0.973,
                    ky: -2.169
                },
                "162": {
                    x: -426.178,
                    y: -139.822,
                    kx: -0.96,
                    ky: -2.182
                },
                "163": {
                    x: -425.8,
                    y: -134.65,
                    kx: -0.947,
                    ky: -2.195
                },
                "164": {
                    x: -398.1,
                    y: -157.85,
                    sx: 0.998,
                    sy: 0.998,
                    kx: -1.229,
                    ky: -1.912
                },
                "165": {
                    x: -385.55,
                    y: -161,
                    sx: 0.999,
                    sy: 0.999,
                    kx: -1.312,
                    ky: -1.829
                },
                "166": {
                    x: -378.226,
                    y: -166.221,
                    sx: 1,
                    sy: 1,
                    kx: -1.424,
                    ky: -1.718
                },
                "167": {
                    x: -374.229,
                    y: -169.055,
                    kx: -1.483,
                    ky: -1.658
                },
                "168": {
                    x: -373,
                    y: -169.85,
                    kx: -1.501,
                    ky: -1.64
                },
                "171": {
                    x: -372.5,
                    y: -173.3,
                    kx: -1.509,
                    ky: -1.632
                },
                "172": {
                    x: -390.9,
                    y: -160.7,
                    kx: 4.616,
                    ky: -1.474
                },
                "173": {
                    x: -391.2,
                    y: -160,
                    kx: -1.488,
                    ky: -1.654
                },
                "174": {
                    x: -365.25,
                    y: -174.8,
                    kx: 0,
                    ky: 0,
                    r: 1.034
                },
                "175": {
                    x: -354.164,
                    y: -181.801,
                    r: 0.83
                },
                "176": {
                    x: -347.681,
                    y: -185.752,
                    r: 0.713
                },
                "177": {
                    x: -344.005,
                    y: -188.085,
                    r: 0.646
                },
                "178": {
                    x: -341.828,
                    y: -189.413,
                    r: 0.606
                },
                "179": {
                    x: -340.598,
                    y: -190.135,
                    r: 0.583
                },
                "180": {
                    x: -339.943,
                    y: -190.555,
                    r: 0.571
                },
                "181": {
                    x: -339.65,
                    y: -190.7,
                    r: 0.568
                },
                "186": {
                    x: -339.9,
                    y: -189.1,
                    r: 0.563
                },
                "187": {
                    x: -339.843,
                    y: -190.686,
                    r: 0.585
                },
                "188": {
                    x: -339.327,
                    y: -195.761,
                    r: 0.655
                },
                "189": {
                    x: -338.293,
                    y: -204.562,
                    r: 0.777
                },
                "190": {
                    x: -336.959,
                    y: -217.254,
                    sx: 0.999,
                    sy: 0.999,
                    r: 0.952
                },
                "191": {
                    x: -335.221,
                    y: -233.422,
                    r: 1.176
                },
                "192": {
                    x: -333.05,
                    y: -252.3,
                    r: 1.438
                },
                "193": {
                    x: -330.75,
                    y: -272.5,
                    sx: 0.998,
                    sy: 0.998,
                    kx: 4.351,
                    ky: 1.932,
                    r: 0
                },
                "194": {
                    x: -328.2,
                    y: -288.35,
                    sx: 0.999,
                    sy: 0.999,
                    kx: 4.08,
                    ky: 2.203
                }
            })
            .addTimedChild(instance20, 195, 1)
            .addTimedChild(instance23, 196, 1)
            .addTimedChild(instance25, 197, 1)
            .addTimedChild(instance27, 198, 27, {
                "198": {
                    x: -242.65,
                    y: -324.7,
                    r: 0.633
                },
                "199": {
                    x: -242.15,
                    y: -324.95,
                    r: 0.641
                },
                "224": {
                    x: -242.65,
                    y: -324.7,
                    r: 0.633
                }
            })
            .addTimedChild(instance22, 196, 3, {
                "196": {
                    x: -298.95,
                    y: -315.85,
                    sx: 0.999,
                    sy: 0.899,
                    kx: 1.622,
                    ky: 1.52
                },
                "197": {
                    x: -292.75,
                    y: -319.8,
                    sx: 1.035,
                    sy: 1.019,
                    kx: 0.986,
                    ky: 2.155
                },
                "198": {
                    x: -288.45,
                    y: -319.25,
                    kx: 0.634,
                    ky: 2.508
                }
            })
            .addTimedChild(instance24, 197, 1)
            .addTimedChild(instance26, 198, 1)
            .addTimedChild(instance31, 225, 1, {
                "225": {
                    x: -10.55,
                    y: 2.3
                }
            })
            .addTimedChild(instance32, 226, 1, {
                "226": {
                    x: -27.25,
                    y: 18.4
                }
            })
            .addTimedChild(instance29, 224, 3, {
                "224": {
                    x: -288.45,
                    y: -319.25,
                    sx: 1.035,
                    sy: 1.019,
                    kx: 0.634,
                    ky: 2.508
                },
                "225": {
                    x: -303.3,
                    y: -317.5,
                    kx: 0.986,
                    ky: 2.155
                },
                "226": {
                    x: -329.8,
                    y: -298,
                    sx: 0.999,
                    sy: 0.899,
                    kx: 1.791,
                    ky: 1.35
                }
            })
            .addTimedChild(instance28, 224, 1)
            .addTimedChild(instance30, 225, 1, {
                "225": {
                    x: -10.55,
                    y: 2.3
                }
            })
            .addTimedChild(instance33, 227, 1, {
                "227": {
                    x: -57.35,
                    y: 27.05
                }
            })
            .addTimedChild(instance36, 228, 1, {
                "228": {
                    x: -70.2,
                    y: 35.1
                }
            })
            .addTimedChild(instance38, 229, 1, {
                "229": {
                    x: -70.2,
                    y: 35.1
                }
            })
            .addTimedChild(instance40, 230, 1, {
                "230": {
                    x: -337.7,
                    y: -258.35,
                    r: 0.507
                }
            })
            .addTimedChild(instance35, 228, 3, {
                "228": {
                    x: -398.4,
                    y: -253.25,
                    sx: 0.999,
                    sy: 0.999,
                    kx: 4.08,
                    ky: 2.203,
                    r: 0
                },
                "229": {
                    x: -400.95,
                    y: -237.4,
                    sx: 0.998,
                    sy: 0.998,
                    kx: 4.351,
                    ky: 1.932
                },
                "230": {
                    x: -413.35,
                    y: -227.9,
                    sx: 1,
                    sy: 1,
                    kx: 0,
                    ky: 0,
                    r: 1.134
                }
            })
            .addTimedChild(instance5, 0, 231, {
                "0": {
                    x: 124.65,
                    y: -197.25,
                    sx: 1.004,
                    sy: 0.999,
                    kx: 0.344,
                    ky: -0.262
                },
                "15": {
                    x: 125.027,
                    y: -196.793,
                    kx: 0.347,
                    ky: -0.264
                },
                "16": {
                    x: 125.991,
                    y: -195.428,
                    kx: 0.353,
                    ky: -0.271
                },
                "17": {
                    x: 126.805,
                    y: -194.23,
                    kx: 0.359,
                    ky: -0.277
                },
                "18": {
                    x: 127.05,
                    y: -193.8,
                    kx: 0.361,
                    ky: -0.278
                },
                "19": {
                    x: 119.808,
                    y: -197.005,
                    sx: 1.003,
                    kx: 0.362,
                    ky: -0.268
                },
                "20": {
                    x: 102.698,
                    y: -204.505,
                    sx: 1,
                    kx: 0.367,
                    ky: -0.246
                },
                "21": {
                    x: 82.797,
                    y: -213.124,
                    sx: 0.996,
                    kx: 0.371,
                    ky: -0.219
                },
                "22": {
                    x: 65.16,
                    y: -220.873,
                    sx: 0.993,
                    sy: 0.998,
                    kx: 0.376,
                    ky: -0.195
                },
                "23": {
                    x: 52.082,
                    y: -226.604,
                    sx: 0.99,
                    kx: 0.379,
                    ky: -0.178
                },
                "24": {
                    x: 44.45,
                    y: -229.85,
                    sx: 0.989,
                    kx: 0.381,
                    ky: -0.168
                },
                "25": {
                    x: 40.312,
                    y: -227.151,
                    sx: 0.991,
                    kx: 0.385,
                    ky: -0.181
                },
                "26": {
                    x: 33.491,
                    y: -222.823,
                    sx: 0.995,
                    kx: 0.392,
                    ky: -0.203
                },
                "27": {
                    x: 25.379,
                    y: -217.502,
                    sx: 0.999,
                    sy: 0.999,
                    kx: 0.401,
                    ky: -0.229
                },
                "28": {
                    x: 17.023,
                    y: -212.091,
                    sx: 1.003,
                    kx: 0.409,
                    ky: -0.255
                },
                "29": {
                    x: 9.652,
                    y: -207.286,
                    sx: 1.007,
                    kx: 0.417,
                    ky: -0.278
                },
                "30": {
                    x: 4.95,
                    y: -204.25,
                    sx: 1.009,
                    kx: 0.422,
                    ky: -0.293
                },
                "31": {
                    x: 4.818,
                    y: -204.93,
                    kx: 0.421,
                    ky: -0.29
                },
                "32": {
                    x: 4.442,
                    y: -206.33,
                    sx: 1.01,
                    kx: 0.417,
                    ky: -0.281
                },
                "33": {
                    x: 3.997,
                    y: -208.078,
                    sx: 1.011,
                    kx: 0.413,
                    ky: -0.271
                },
                "34": {
                    x: 3.605,
                    y: -209.601,
                    sx: 1.012,
                    kx: 0.41,
                    ky: -0.262
                },
                "35": {
                    x: 3.263,
                    y: -210.691,
                    kx: 0.407,
                    ky: -0.255
                },
                "36": {
                    x: 3.085,
                    y: -211.41,
                    sx: 1.013,
                    kx: 0.406,
                    ky: -0.251
                },
                "37": {
                    x: 2.968,
                    y: -211.784,
                    kx: 0.405,
                    ky: -0.249
                },
                "38": {
                    x: 2.9,
                    y: -211.8,
                    kx: 0.404,
                    ky: -0.248
                },
                "95": {
                    x: 2.875,
                    y: -211.799,
                    kx: 0.405,
                    ky: -0.249
                },
                "96": {
                    x: 2.626,
                    y: -211.612,
                    kx: 0.408,
                    ky: -0.252
                },
                "97": {
                    x: 2.319,
                    y: -211.424,
                    kx: 0.411,
                    ky: -0.255
                },
                "98": {
                    x: 2.15,
                    y: -211.3,
                    kx: 0.412,
                    ky: -0.256
                },
                "99": {
                    x: 2.253,
                    y: -211.393
                },
                "100": {
                    x: 2.456,
                    y: -211.482,
                    kx: 0.41,
                    ky: -0.254
                },
                "101": {
                    x: 2.691,
                    y: -211.716,
                    kx: 0.407,
                    ky: -0.251
                },
                "102": {
                    x: 2.895,
                    y: -211.805,
                    kx: 0.405,
                    ky: -0.249
                },
                "103": {
                    x: 2.9,
                    y: -211.8,
                    kx: 0.404,
                    ky: -0.248
                },
                "104": {
                    x: 2.875,
                    y: -211.799,
                    kx: 0.405,
                    ky: -0.249
                },
                "105": {
                    x: 2.626,
                    y: -211.612,
                    kx: 0.408,
                    ky: -0.252
                },
                "106": {
                    x: 2.319,
                    y: -211.424,
                    kx: 0.411,
                    ky: -0.255
                },
                "107": {
                    x: 2.15,
                    y: -211.3,
                    kx: 0.412,
                    ky: -0.256
                },
                "108": {
                    x: 2.253,
                    y: -211.393
                },
                "109": {
                    x: 2.456,
                    y: -211.482,
                    kx: 0.41,
                    ky: -0.254
                },
                "110": {
                    x: 2.691,
                    y: -211.716,
                    kx: 0.407,
                    ky: -0.251
                },
                "111": {
                    x: 2.895,
                    y: -211.805,
                    kx: 0.405,
                    ky: -0.249
                },
                "112": {
                    x: 2.9,
                    y: -211.8,
                    kx: 0.404,
                    ky: -0.248
                },
                "113": {
                    x: 2.875,
                    y: -211.799,
                    kx: 0.405,
                    ky: -0.249
                },
                "114": {
                    x: 2.626,
                    y: -211.612,
                    kx: 0.408,
                    ky: -0.252
                },
                "115": {
                    x: 2.319,
                    y: -211.424,
                    kx: 0.411,
                    ky: -0.255
                },
                "116": {
                    x: 2.15,
                    y: -211.3,
                    kx: 0.412,
                    ky: -0.256
                },
                "117": {
                    x: 2.253,
                    y: -211.393
                },
                "118": {
                    x: 2.456,
                    y: -211.482,
                    kx: 0.41,
                    ky: -0.254
                },
                "119": {
                    x: 2.691,
                    y: -211.716,
                    kx: 0.407,
                    ky: -0.251
                },
                "120": {
                    x: 2.895,
                    y: -211.805,
                    kx: 0.405,
                    ky: -0.249
                },
                "121": {
                    x: 2.9,
                    y: -211.8,
                    kx: 0.404,
                    ky: -0.248
                },
                "122": {
                    x: 2.875,
                    y: -211.799,
                    kx: 0.405,
                    ky: -0.249
                },
                "123": {
                    x: 2.626,
                    y: -211.612,
                    kx: 0.408,
                    ky: -0.252
                },
                "124": {
                    x: 2.319,
                    y: -211.424,
                    kx: 0.411,
                    ky: -0.255
                },
                "125": {
                    x: 2.15,
                    y: -211.3,
                    kx: 0.412,
                    ky: -0.256
                },
                "126": {
                    x: 2.253,
                    y: -211.393
                },
                "127": {
                    x: 2.456,
                    y: -211.482,
                    kx: 0.41,
                    ky: -0.254
                },
                "128": {
                    x: 2.691,
                    y: -211.716,
                    kx: 0.407,
                    ky: -0.251
                },
                "129": {
                    x: 2.895,
                    y: -211.805,
                    kx: 0.405,
                    ky: -0.249
                },
                "130": {
                    x: 2.9,
                    y: -211.8,
                    kx: 0.404,
                    ky: -0.248
                },
                "131": {
                    x: 2.875,
                    y: -211.799,
                    kx: 0.405,
                    ky: -0.249
                },
                "132": {
                    x: 2.626,
                    y: -211.612,
                    kx: 0.408,
                    ky: -0.252
                },
                "133": {
                    x: 2.319,
                    y: -211.424,
                    kx: 0.411,
                    ky: -0.255
                },
                "134": {
                    x: 2.15,
                    y: -211.3,
                    kx: 0.412,
                    ky: -0.256
                },
                "135": {
                    x: 2.253,
                    y: -211.393
                },
                "136": {
                    x: 2.456,
                    y: -211.482,
                    kx: 0.41,
                    ky: -0.254
                },
                "137": {
                    x: 2.691,
                    y: -211.716,
                    kx: 0.407,
                    ky: -0.251
                },
                "138": {
                    x: 2.895,
                    y: -211.805,
                    kx: 0.405,
                    ky: -0.249
                },
                "139": {
                    x: 2.9,
                    y: -211.8,
                    kx: 0.404,
                    ky: -0.248
                },
                "140": {
                    x: 2.875,
                    y: -211.799,
                    kx: 0.405,
                    ky: -0.249
                },
                "141": {
                    x: 2.626,
                    y: -211.612,
                    kx: 0.408,
                    ky: -0.252
                },
                "142": {
                    x: 2.319,
                    y: -211.424,
                    kx: 0.411,
                    ky: -0.255
                },
                "143": {
                    x: 2.15,
                    y: -211.3,
                    kx: 0.412,
                    ky: -0.256
                },
                "144": {
                    x: 2.253,
                    y: -211.393
                },
                "145": {
                    x: 2.456,
                    y: -211.482,
                    kx: 0.41,
                    ky: -0.254
                },
                "146": {
                    x: 2.691,
                    y: -211.716,
                    kx: 0.407,
                    ky: -0.251
                },
                "147": {
                    x: 2.895,
                    y: -211.805,
                    kx: 0.405,
                    ky: -0.249
                },
                "148": {
                    x: 2.9,
                    y: -211.8,
                    kx: 0.404,
                    ky: -0.248
                },
                "149": {
                    x: 2.875,
                    y: -211.799,
                    kx: 0.405,
                    ky: -0.249
                },
                "150": {
                    x: 2.626,
                    y: -211.612,
                    kx: 0.408,
                    ky: -0.252
                },
                "151": {
                    x: 2.319,
                    y: -211.424,
                    kx: 0.411,
                    ky: -0.255
                },
                "152": {
                    x: 2.15,
                    y: -211.3,
                    kx: 0.412,
                    ky: -0.256
                },
                "153": {
                    x: 2.253,
                    y: -211.393
                },
                "154": {
                    x: 2.456,
                    y: -211.482,
                    kx: 0.41,
                    ky: -0.254
                },
                "155": {
                    x: 2.691,
                    y: -211.716,
                    kx: 0.407,
                    ky: -0.251
                },
                "156": {
                    x: 2.895,
                    y: -211.805,
                    kx: 0.405,
                    ky: -0.249
                },
                "157": {
                    x: 2.9,
                    y: -211.8,
                    kx: 0.404,
                    ky: -0.248
                },
                "158": {
                    x: 2.875,
                    y: -211.799,
                    kx: 0.405,
                    ky: -0.249
                },
                "159": {
                    x: 2.626,
                    y: -211.612,
                    kx: 0.408,
                    ky: -0.252
                },
                "160": {
                    x: 2.319,
                    y: -211.424,
                    kx: 0.411,
                    ky: -0.255
                },
                "161": {
                    x: 2.15,
                    y: -211.3,
                    kx: 0.412,
                    ky: -0.256
                },
                "162": {
                    x: 1.544,
                    y: -209.454,
                    kx: 0.418,
                    ky: -0.262
                },
                "163": {
                    x: 0.85,
                    y: -207.55,
                    kx: 0.425,
                    ky: -0.269
                },
                "164": {
                    x: 7.344,
                    y: -209.878,
                    kx: 0.403,
                    ky: -0.247
                },
                "165": {
                    x: 13.395,
                    y: -211.971,
                    kx: 0.382,
                    ky: -0.226
                },
                "166": {
                    x: 17.243,
                    y: -213.32,
                    kx: 0.369,
                    ky: -0.213
                },
                "167": {
                    x: 19.259,
                    y: -214.078,
                    kx: 0.362,
                    ky: -0.206
                },
                "168": {
                    x: 19.85,
                    y: -214.2,
                    kx: 0.359,
                    ky: -0.203
                },
                "171": {
                    x: 20.7,
                    y: -214.6,
                    kx: 0.352,
                    ky: -0.196
                },
                "172": {
                    x: 16.6,
                    y: -215.85,
                    sx: 1.01,
                    sy: 0.998,
                    kx: 0.425,
                    ky: -0.285
                },
                "173": {
                    x: 16.3,
                    y: -216,
                    sy: 0.999,
                    kx: 0.433,
                    ky: -0.295
                },
                "174": {
                    x: 21.176,
                    y: -216.68,
                    kx: 0.391,
                    ky: -0.253
                },
                "175": {
                    x: 23.583,
                    y: -217.001,
                    kx: 0.37,
                    ky: -0.232
                },
                "176": {
                    x: 25.077,
                    y: -217.151,
                    kx: 0.357,
                    ky: -0.219
                },
                "177": {
                    x: 26.059,
                    y: -217.324,
                    kx: 0.349,
                    ky: -0.211
                },
                "178": {
                    x: 26.718,
                    y: -217.337,
                    kx: 0.344,
                    ky: -0.206
                },
                "179": {
                    x: 27.082,
                    y: -217.417,
                    kx: 0.34,
                    ky: -0.202
                },
                "180": {
                    x: 27.315,
                    y: -217.452,
                    kx: 0.339,
                    ky: -0.201
                },
                "181": {
                    x: 27.3,
                    y: -217.35,
                    kx: 0.338,
                    ky: -0.2
                },
                "186": {
                    x: 26.9,
                    y: -217.45,
                    kx: 0.343,
                    ky: -0.205
                },
                "187": {
                    x: 27.498,
                    y: -217.183,
                    kx: 0.338,
                    ky: -0.2
                },
                "188": {
                    x: 29.094,
                    y: -216.169,
                    kx: 0.324,
                    ky: -0.186
                },
                "189": {
                    x: 32.192,
                    y: -214.332,
                    kx: 0.298,
                    ky: -0.16
                },
                "190": {
                    x: 36.717,
                    y: -211.581,
                    kx: 0.259,
                    ky: -0.121
                },
                "191": {
                    x: 42.389,
                    y: -208.149,
                    kx: 0.21,
                    ky: -0.072
                },
                "192": {
                    x: 48.04,
                    y: -204.656,
                    kx: 0.162,
                    ky: -0.024
                },
                "193": {
                    x: 52.907,
                    y: -201.738,
                    kx: 0.12,
                    ky: 0.018
                },
                "194": {
                    x: 56.665,
                    y: -199.466,
                    kx: 0.087,
                    ky: 0.051
                },
                "195": {
                    x: 59.443,
                    y: -197.778,
                    kx: 0.064,
                    ky: 0.074
                },
                "196": {
                    x: 61.361,
                    y: -196.633,
                    kx: 0.047,
                    ky: 0.091
                },
                "197": {
                    x: 62.627,
                    y: -195.881,
                    kx: 0.036,
                    ky: 0.102
                },
                "198": {
                    x: 63.271,
                    y: -195.405,
                    kx: 0.031,
                    ky: 0.107
                },
                "199": {
                    x: 63.4,
                    y: -195.3,
                    kx: 0.029,
                    ky: 0.109
                },
                "225": {
                    x: 57.823,
                    y: -199.014,
                    sx: 1.011,
                    kx: 0.057,
                    ky: 0.085
                },
                "226": {
                    x: 43.582,
                    y: -208.216,
                    sx: 1.013,
                    kx: 0.129,
                    ky: 0.024
                },
                "227": {
                    x: 25.788,
                    y: -219.805,
                    sx: 1.015,
                    kx: 0.219,
                    ky: -0.053
                },
                "228": {
                    x: 9.703,
                    y: -230.263,
                    sx: 1.017,
                    kx: 0.3,
                    ky: -0.121
                },
                "229": {
                    x: -1.025,
                    y: -237.156,
                    sx: 1.018,
                    kx: 0.354,
                    ky: -0.167
                },
                "230": {
                    x: -4.75,
                    y: -239.5,
                    sx: 1.019,
                    kx: 0.372,
                    ky: -0.183
                }
            })
            .addTimedChild(instance4, 0, 231, {
                "0": {
                    x: -0.45,
                    y: -218.45,
                    sx: 1,
                    sy: 1,
                    kx: 0,
                    ky: 0,
                    r: -0.501
                },
                "15": {
                    x: -0.173,
                    y: -217.739,
                    r: -0.504
                },
                "16": {
                    x: 0.703,
                    y: -215.483,
                    r: -0.51
                },
                "17": {
                    x: 1.357,
                    y: -213.52,
                    r: -0.516
                },
                "18": {
                    x: 1.6,
                    y: -212.95,
                    r: -0.518
                },
                "19": {
                    x: -3.81,
                    y: -214.729,
                    sx: 0.998,
                    sy: 1.002,
                    kx: 0.528,
                    ky: -0.529,
                    r: 0
                },
                "20": {
                    x: -16.268,
                    y: -218.693,
                    sx: 0.993,
                    sy: 1.008,
                    kx: 0.552,
                    ky: -0.555
                },
                "21": {
                    x: -30.823,
                    y: -223.335,
                    sx: 0.987,
                    sy: 1.014,
                    kx: 0.58,
                    ky: -0.585
                },
                "22": {
                    x: -43.806,
                    y: -227.466,
                    sx: 0.982,
                    sy: 1.02,
                    kx: 0.605,
                    ky: -0.612
                },
                "23": {
                    x: -53.343,
                    y: -230.492,
                    sx: 0.978,
                    sy: 1.024,
                    kx: 0.624,
                    ky: -0.631
                },
                "24": {
                    x: -58.85,
                    y: -232.25,
                    sx: 0.975,
                    sy: 1.027,
                    kx: 0.635,
                    ky: -0.643
                },
                "25": {
                    x: -60.565,
                    y: -228.591,
                    sx: 0.973,
                    sy: 1.03,
                    kx: 0.649,
                    ky: -0.658
                },
                "26": {
                    x: -63.311,
                    y: -222.496,
                    sx: 0.969,
                    sy: 1.035,
                    kx: 0.672,
                    ky: -0.683
                },
                "27": {
                    x: -66.635,
                    y: -215.264,
                    sx: 0.965,
                    sy: 1.042,
                    kx: 0.7,
                    ky: -0.712
                },
                "28": {
                    x: -70.004,
                    y: -207.836,
                    sx: 0.96,
                    sy: 1.048,
                    kx: 0.729,
                    ky: -0.743
                },
                "29": {
                    x: -73.028,
                    y: -201.221,
                    sx: 0.956,
                    sy: 1.054,
                    kx: 0.755,
                    ky: -0.769
                },
                "30": {
                    x: -74.9,
                    y: -197.05,
                    sx: 0.954,
                    sy: 1.057,
                    kx: 0.771,
                    ky: -0.786
                },
                "31": {
                    x: -75.006,
                    y: -197.632,
                    kx: 0.77,
                    ky: -0.785
                },
                "32": {
                    x: -75.405,
                    y: -199.13,
                    kx: 0.766,
                    ky: -0.781
                },
                "33": {
                    x: -75.906,
                    y: -200.976,
                    kx: 0.762,
                    ky: -0.777
                },
                "34": {
                    x: -76.365,
                    y: -202.533,
                    kx: 0.759,
                    ky: -0.774
                },
                "35": {
                    x: -76.654,
                    y: -203.667,
                    kx: 0.756,
                    ky: -0.771
                },
                "36": {
                    x: -76.882,
                    y: -204.437,
                    kx: 0.754,
                    ky: -0.77
                },
                "37": {
                    x: -76.953,
                    y: -204.9,
                    ky: -0.769
                },
                "38": {
                    x: -77.05,
                    y: -204.95,
                    kx: 0.753
                },
                "95": {
                    x: -77.12,
                    y: -204.926,
                    kx: 0.754
                },
                "96": {
                    x: -77.397,
                    y: -204.487,
                    kx: 0.757,
                    ky: -0.772
                },
                "97": {
                    x: -77.678,
                    y: -203.996,
                    kx: 0.76,
                    ky: -0.776
                },
                "98": {
                    x: -77.75,
                    y: -203.85,
                    kx: 0.761
                },
                "99": {
                    x: -77.701,
                    y: -203.929
                },
                "100": {
                    x: -77.564,
                    y: -204.229,
                    kx: 0.759,
                    ky: -0.774
                },
                "101": {
                    x: -77.255,
                    y: -204.605,
                    kx: 0.756,
                    ky: -0.771
                },
                "102": {
                    x: -77.112,
                    y: -204.906,
                    kx: 0.754,
                    ky: -0.769
                },
                "103": {
                    x: -77.05,
                    y: -204.95,
                    kx: 0.753
                },
                "104": {
                    x: -77.12,
                    y: -204.926,
                    kx: 0.754
                },
                "105": {
                    x: -77.397,
                    y: -204.487,
                    kx: 0.757,
                    ky: -0.772
                },
                "106": {
                    x: -77.678,
                    y: -203.996,
                    kx: 0.76,
                    ky: -0.776
                },
                "107": {
                    x: -77.75,
                    y: -203.85,
                    kx: 0.761
                },
                "108": {
                    x: -77.701,
                    y: -203.929
                },
                "109": {
                    x: -77.564,
                    y: -204.229,
                    kx: 0.759,
                    ky: -0.774
                },
                "110": {
                    x: -77.255,
                    y: -204.605,
                    kx: 0.756,
                    ky: -0.771
                },
                "111": {
                    x: -77.112,
                    y: -204.906,
                    kx: 0.754,
                    ky: -0.769
                },
                "112": {
                    x: -77.05,
                    y: -204.95,
                    kx: 0.753
                },
                "113": {
                    x: -77.12,
                    y: -204.926,
                    kx: 0.754
                },
                "114": {
                    x: -77.397,
                    y: -204.487,
                    kx: 0.757,
                    ky: -0.772
                },
                "115": {
                    x: -77.678,
                    y: -203.996,
                    kx: 0.76,
                    ky: -0.776
                },
                "116": {
                    x: -77.75,
                    y: -203.85,
                    kx: 0.761
                },
                "117": {
                    x: -77.701,
                    y: -203.929
                },
                "118": {
                    x: -77.564,
                    y: -204.229,
                    kx: 0.759,
                    ky: -0.774
                },
                "119": {
                    x: -77.255,
                    y: -204.605,
                    kx: 0.756,
                    ky: -0.771
                },
                "120": {
                    x: -77.112,
                    y: -204.906,
                    kx: 0.754,
                    ky: -0.769
                },
                "121": {
                    x: -77.05,
                    y: -204.95,
                    kx: 0.753
                },
                "122": {
                    x: -77.12,
                    y: -204.926,
                    kx: 0.754
                },
                "123": {
                    x: -77.397,
                    y: -204.487,
                    kx: 0.757,
                    ky: -0.772
                },
                "124": {
                    x: -77.678,
                    y: -203.996,
                    kx: 0.76,
                    ky: -0.776
                },
                "125": {
                    x: -77.75,
                    y: -203.85,
                    kx: 0.761
                },
                "126": {
                    x: -77.701,
                    y: -203.929
                },
                "127": {
                    x: -77.564,
                    y: -204.229,
                    kx: 0.759,
                    ky: -0.774
                },
                "128": {
                    x: -77.255,
                    y: -204.605,
                    kx: 0.756,
                    ky: -0.771
                },
                "129": {
                    x: -77.112,
                    y: -204.906,
                    kx: 0.754,
                    ky: -0.769
                },
                "130": {
                    x: -77.05,
                    y: -204.95,
                    kx: 0.753
                },
                "131": {
                    x: -77.12,
                    y: -204.926,
                    kx: 0.754
                },
                "132": {
                    x: -77.397,
                    y: -204.487,
                    kx: 0.757,
                    ky: -0.772
                },
                "133": {
                    x: -77.678,
                    y: -203.996,
                    kx: 0.76,
                    ky: -0.776
                },
                "134": {
                    x: -77.75,
                    y: -203.85,
                    kx: 0.761
                },
                "135": {
                    x: -77.701,
                    y: -203.929
                },
                "136": {
                    x: -77.564,
                    y: -204.229,
                    kx: 0.759,
                    ky: -0.774
                },
                "137": {
                    x: -77.255,
                    y: -204.605,
                    kx: 0.756,
                    ky: -0.771
                },
                "138": {
                    x: -77.112,
                    y: -204.906,
                    kx: 0.754,
                    ky: -0.769
                },
                "139": {
                    x: -77.05,
                    y: -204.95,
                    kx: 0.753
                },
                "140": {
                    x: -77.12,
                    y: -204.926,
                    kx: 0.754
                },
                "141": {
                    x: -77.397,
                    y: -204.487,
                    kx: 0.757,
                    ky: -0.772
                },
                "142": {
                    x: -77.678,
                    y: -203.996,
                    kx: 0.76,
                    ky: -0.776
                },
                "143": {
                    x: -77.75,
                    y: -203.85,
                    kx: 0.761
                },
                "144": {
                    x: -77.701,
                    y: -203.929
                },
                "145": {
                    x: -77.564,
                    y: -204.229,
                    kx: 0.759,
                    ky: -0.774
                },
                "146": {
                    x: -77.255,
                    y: -204.605,
                    kx: 0.756,
                    ky: -0.771
                },
                "147": {
                    x: -77.112,
                    y: -204.906,
                    kx: 0.754,
                    ky: -0.769
                },
                "148": {
                    x: -77.05,
                    y: -204.95,
                    kx: 0.753
                },
                "149": {
                    x: -77.12,
                    y: -204.926,
                    kx: 0.754
                },
                "150": {
                    x: -77.397,
                    y: -204.487,
                    kx: 0.757,
                    ky: -0.772
                },
                "151": {
                    x: -77.678,
                    y: -203.996,
                    kx: 0.76,
                    ky: -0.776
                },
                "152": {
                    x: -77.75,
                    y: -203.85,
                    kx: 0.761
                },
                "153": {
                    x: -77.701,
                    y: -203.929
                },
                "154": {
                    x: -77.564,
                    y: -204.229,
                    kx: 0.759,
                    ky: -0.774
                },
                "155": {
                    x: -77.255,
                    y: -204.605,
                    kx: 0.756,
                    ky: -0.771
                },
                "156": {
                    x: -77.112,
                    y: -204.906,
                    kx: 0.754,
                    ky: -0.769
                },
                "157": {
                    x: -77.05,
                    y: -204.95,
                    kx: 0.753
                },
                "158": {
                    x: -77.12,
                    y: -204.926,
                    kx: 0.754
                },
                "159": {
                    x: -77.397,
                    y: -204.487,
                    kx: 0.757,
                    ky: -0.772
                },
                "160": {
                    x: -77.678,
                    y: -203.996,
                    kx: 0.76,
                    ky: -0.776
                },
                "161": {
                    x: -77.75,
                    y: -203.85,
                    kx: 0.761
                },
                "162": {
                    x: -78.353,
                    y: -201.461,
                    kx: 0.767,
                    ky: -0.783
                },
                "163": {
                    x: -78.95,
                    y: -199.1,
                    kx: 0.773,
                    ky: -0.789
                },
                "164": {
                    x: -72.717,
                    y: -203.124,
                    kx: 0.752,
                    ky: -0.767
                },
                "165": {
                    x: -66.84,
                    y: -206.879,
                    kx: 0.731,
                    ky: -0.746
                },
                "166": {
                    x: -63.056,
                    y: -209.296,
                    kx: 0.718,
                    ky: -0.733
                },
                "167": {
                    x: -61.009,
                    y: -210.571,
                    kx: 0.71,
                    ky: -0.726
                },
                "168": {
                    x: -60.4,
                    y: -210.95,
                    kx: 0.708,
                    ky: -0.724
                },
                "171": {
                    x: -59.55,
                    y: -211.95,
                    kx: 0.7,
                    ky: -0.716
                },
                "172": {
                    x: -63.2,
                    y: -207.3,
                    sx: 0.952,
                    sy: 1.055,
                    kx: 0.775,
                    ky: -0.792
                },
                "173": {
                    x: -63.45,
                    y: -206.95,
                    sx: 0.954,
                    sy: 1.057,
                    kx: 0.782,
                    ky: -0.797
                },
                "174": {
                    x: -58.815,
                    y: -210.622,
                    sy: 1.041,
                    kx: 0.693,
                    ky: -0.708
                },
                "175": {
                    x: -56.475,
                    y: -212.48,
                    sy: 1.033,
                    kx: 0.648,
                    ky: -0.663
                },
                "176": {
                    x: -55.016,
                    y: -213.583,
                    sy: 1.028,
                    kx: 0.621,
                    ky: -0.636
                },
                "177": {
                    x: -54.158,
                    y: -214.346,
                    sy: 1.025,
                    kx: 0.603,
                    ky: -0.618
                },
                "178": {
                    x: -53.521,
                    y: -214.783,
                    sy: 1.023,
                    kx: 0.591,
                    ky: -0.607
                },
                "179": {
                    x: -53.143,
                    y: -215.076,
                    sy: 1.022,
                    kx: 0.584,
                    ky: -0.599
                },
                "180": {
                    x: -52.925,
                    y: -215.239,
                    sy: 1.021,
                    kx: 0.58,
                    ky: -0.596
                },
                "181": {
                    x: -52.9,
                    y: -215.25,
                    kx: 0.579,
                    ky: -0.595
                },
                "186": {
                    x: -53.3,
                    y: -214.95,
                    kx: 0.584,
                    ky: -0.599
                },
                "187": {
                    x: -53.121,
                    y: -215.048,
                    kx: 0.58,
                    ky: -0.595
                },
                "188": {
                    x: -52.407,
                    y: -215.264,
                    kx: 0.567,
                    ky: -0.582
                },
                "189": {
                    x: -51.047,
                    y: -215.763,
                    kx: 0.542,
                    ky: -0.558
                },
                "190": {
                    x: -49.058,
                    y: -216.443,
                    kx: 0.506,
                    ky: -0.521
                },
                "191": {
                    x: -46.571,
                    y: -217.264,
                    kx: 0.461,
                    ky: -0.476
                },
                "192": {
                    x: -44.129,
                    y: -218.139,
                    kx: 0.415,
                    ky: -0.431
                },
                "193": {
                    x: -41.976,
                    y: -218.865,
                    kx: 0.376,
                    ky: -0.392
                },
                "194": {
                    x: -40.323,
                    y: -219.453,
                    kx: 0.346,
                    ky: -0.361
                },
                "195": {
                    x: -39.06,
                    y: -219.872,
                    kx: 0.324,
                    ky: -0.339
                },
                "196": {
                    x: -38.199,
                    y: -220.188,
                    kx: 0.308,
                    ky: -0.324
                },
                "197": {
                    x: -37.715,
                    y: -220.31,
                    kx: 0.299,
                    ky: -0.314
                },
                "198": {
                    x: -37.434,
                    y: -220.405,
                    kx: 0.293,
                    ky: -0.308
                },
                "199": {
                    x: -37.35,
                    y: -220.45,
                    kx: 0.292,
                    ky: -0.307
                },
                "225": {
                    x: -43.193,
                    y: -221.227,
                    kx: 0.316,
                    ky: -0.331
                },
                "226": {
                    x: -58.003,
                    y: -223.056,
                    kx: 0.377,
                    ky: -0.392
                },
                "227": {
                    x: -76.487,
                    y: -225.36,
                    kx: 0.453,
                    ky: -0.468
                },
                "228": {
                    x: -93.157,
                    y: -227.434,
                    kx: 0.522,
                    ky: -0.537
                },
                "229": {
                    x: -104.254,
                    y: -228.798,
                    kx: 0.568,
                    ky: -0.583
                },
                "230": {
                    x: -108.05,
                    y: -229.25,
                    kx: 0.584,
                    ky: -0.599
                }
            })
            .addTimedChild(instance3, 0, 231, {
                "0": {
                    x: 81.7,
                    y: -107.4,
                    sx: 1,
                    sy: 1.001,
                    kx: 0.36,
                    ky: -0.305
                },
                "15": {
                    x: 82.354,
                    y: -106.984,
                    kx: 0.354,
                    ky: -0.299
                },
                "16": {
                    x: 84.041,
                    y: -105.665,
                    kx: 0.338,
                    ky: -0.283
                },
                "17": {
                    x: 85.504,
                    y: -104.623,
                    kx: 0.325,
                    ky: -0.27
                },
                "18": {
                    x: 85.9,
                    y: -104.25,
                    kx: 0.321,
                    ky: -0.266
                },
                "19": {
                    x: 81.875,
                    y: -106.137,
                    sx: 0.997,
                    sy: 1.02,
                    kx: 0.336,
                    ky: -0.277
                },
                "20": {
                    x: 72.316,
                    y: -110.51,
                    sx: 0.99,
                    sy: 1.063,
                    kx: 0.372,
                    ky: -0.302
                },
                "21": {
                    x: 61.316,
                    y: -115.524,
                    sx: 0.982,
                    sy: 1.113,
                    kx: 0.414,
                    ky: -0.332
                },
                "22": {
                    x: 51.479,
                    y: -119.977,
                    sx: 0.975,
                    sy: 1.158,
                    kx: 0.452,
                    ky: -0.359
                },
                "23": {
                    x: 44.221,
                    y: -123.315,
                    sx: 0.97,
                    sy: 1.191,
                    kx: 0.479,
                    ky: -0.378
                },
                "24": {
                    x: 39.95,
                    y: -125.2,
                    sx: 0.967,
                    sy: 1.21,
                    kx: 0.495,
                    ky: -0.39
                },
                "25": {
                    x: 39.796,
                    y: -122.543,
                    sx: 0.965,
                    sy: 1.192,
                    kx: 0.432,
                    ky: -0.317
                },
                "26": {
                    x: 39.432,
                    y: -118.324,
                    sx: 0.961,
                    sy: 1.163,
                    kx: 0.329,
                    ky: -0.198
                },
                "27": {
                    x: 38.988,
                    y: -113.203,
                    sx: 0.956,
                    sy: 1.128,
                    kx: 0.206,
                    ky: -0.056
                },
                "28": {
                    x: 38.635,
                    y: -107.894,
                    sx: 0.952,
                    sy: 1.092,
                    kx: 0.08,
                    ky: 0.091
                },
                "29": {
                    x: 38.285,
                    y: -103.273,
                    sx: 0.947,
                    sy: 1.06,
                    kx: -0.031,
                    ky: 0.219
                },
                "30": {
                    x: 38,
                    y: -100.3,
                    sx: 0.945,
                    sy: 1.04,
                    kx: -0.102,
                    ky: 0.3
                },
                "31": {
                    x: 37.776,
                    y: -100.712,
                    sx: 0.944,
                    sy: 1.045,
                    kx: -0.098,
                    ky: 0.296
                },
                "32": {
                    x: 36.923,
                    y: -101.723,
                    sx: 0.942,
                    sy: 1.057,
                    kx: -0.089,
                    ky: 0.286
                },
                "33": {
                    x: 35.889,
                    y: -103.035,
                    sx: 0.94,
                    sy: 1.072,
                    kx: -0.077,
                    ky: 0.273
                },
                "34": {
                    x: 34.971,
                    y: -104.112,
                    sx: 0.938,
                    sy: 1.084,
                    kx: -0.067,
                    ky: 0.261
                },
                "35": {
                    x: 34.357,
                    y: -104.87,
                    sx: 0.937,
                    sy: 1.093,
                    kx: -0.06,
                    ky: 0.253
                },
                "36": {
                    x: 33.956,
                    y: -105.48,
                    sx: 0.936,
                    sy: 1.099,
                    kx: -0.055,
                    ky: 0.248
                },
                "37": {
                    x: 33.682,
                    y: -105.717,
                    sx: 0.935,
                    sy: 1.103,
                    kx: -0.052,
                    ky: 0.245
                },
                "38": {
                    x: 33.6,
                    y: -105.75,
                    sy: 1.104,
                    kx: -0.051,
                    ky: 0.244
                },
                "164": {
                    x: 37.835,
                    y: -105.721,
                    sx: 0.924,
                    sy: 1.111,
                    kx: -0.103,
                    ky: 0.249
                },
                "165": {
                    x: 41.714,
                    y: -105.754,
                    sx: 0.914,
                    sy: 1.117,
                    kx: -0.152,
                    ky: 0.255
                },
                "166": {
                    x: 44.199,
                    y: -105.782,
                    sx: 0.907,
                    sy: 1.121,
                    kx: -0.184,
                    ky: 0.258
                },
                "167": {
                    x: 45.566,
                    y: -105.767,
                    sx: 0.904,
                    sy: 1.123,
                    kx: -0.2,
                    ky: 0.26
                },
                "168": {
                    x: 45.9,
                    y: -105.75,
                    sx: 0.903,
                    sy: 1.124,
                    kx: -0.206,
                    ky: 0.261
                },
                "172": {
                    x: 48.35,
                    y: -105.7,
                    sx: 0.897,
                    sy: 1.128,
                    kx: -0.224,
                    ky: 0.262
                },
                "173": {
                    x: 48.55,
                    y: -105.75,
                    sy: 1.13,
                    kx: -0.228
                },
                "174": {
                    x: 44.097,
                    y: -105.058,
                    sx: 0.895,
                    sy: 1.115,
                    kx: -0.202,
                    ky: 0.224
                },
                "175": {
                    x: 41.775,
                    y: -104.63,
                    sx: 0.894,
                    sy: 1.107,
                    kx: -0.189,
                    ky: 0.205
                },
                "176": {
                    x: 40.403,
                    y: -104.353,
                    sy: 1.102,
                    kx: -0.181,
                    ky: 0.194
                },
                "177": {
                    x: 39.503,
                    y: -104.132,
                    sx: 0.893,
                    sy: 1.099,
                    kx: -0.176,
                    ky: 0.186
                },
                "178": {
                    x: 38.915,
                    y: -104.064,
                    sy: 1.098,
                    kx: -0.172,
                    ky: 0.181
                },
                "179": {
                    x: 38.575,
                    y: -104.055,
                    sy: 1.096,
                    kx: -0.17,
                    ky: 0.178
                },
                "180": {
                    x: 38.396,
                    y: -103.95,
                    kx: -0.169,
                    ky: 0.177
                },
                "181": {
                    x: 38.3,
                    y: -103.9,
                    ky: 0.176
                },
                "187": {
                    x: 38.162,
                    y: -103.883,
                    sy: 1.094,
                    kx: -0.165,
                    ky: 0.175
                },
                "188": {
                    x: 37.398,
                    y: -103.532,
                    sx: 0.894,
                    sy: 1.091,
                    kx: -0.153,
                    ky: 0.169
                },
                "189": {
                    x: 36.051,
                    y: -102.989,
                    sx: 0.896,
                    sy: 1.084,
                    kx: -0.131,
                    ky: 0.159
                },
                "190": {
                    x: 33.981,
                    y: -102.168,
                    sx: 0.899,
                    sy: 1.073,
                    kx: -0.097,
                    ky: 0.143
                },
                "191": {
                    x: 31.505,
                    y: -101.103,
                    sx: 0.902,
                    sy: 1.06,
                    kx: -0.055,
                    ky: 0.123
                },
                "192": {
                    x: 28.994,
                    y: -100.047,
                    sx: 0.906,
                    sy: 1.047,
                    kx: -0.013,
                    ky: 0.104
                },
                "193": {
                    x: 26.827,
                    y: -99.104,
                    sx: 0.909,
                    sy: 1.036,
                    kx: 0.023,
                    ky: 0.087
                },
                "194": {
                    x: 25.162,
                    y: -98.398,
                    sx: 0.911,
                    sy: 1.027,
                    kx: 0.051,
                    ky: 0.074
                },
                "195": {
                    x: 23.919,
                    y: -97.88,
                    sx: 0.913,
                    sy: 1.021,
                    kx: 0.071,
                    ky: 0.065
                },
                "196": {
                    x: 23.1,
                    y: -97.563,
                    sx: 0.914,
                    sy: 1.016,
                    kx: 0.086,
                    ky: 0.058
                },
                "197": {
                    x: 22.53,
                    y: -97.289,
                    sx: 0.915,
                    sy: 1.014,
                    kx: 0.095,
                    ky: 0.054
                },
                "198": {
                    x: 22.26,
                    y: -97.185,
                    sy: 1.012,
                    kx: 0.1,
                    ky: 0.051
                },
                "199": {
                    x: 22.1,
                    y: -97.1,
                    kx: 0.101
                },
                "225": {
                    x: 19.179,
                    y: -99.457,
                    sy: 1.031,
                    kx: 0.136,
                    ky: 0.001
                },
                "226": {
                    x: 11.422,
                    y: -105.342,
                    sx: 0.912,
                    sy: 1.081,
                    kx: 0.226,
                    ky: -0.127
                },
                "227": {
                    x: 1.788,
                    y: -112.67,
                    sx: 0.91,
                    sy: 1.144,
                    kx: 0.338,
                    ky: -0.286
                },
                "228": {
                    x: -6.835,
                    y: -119.292,
                    sx: 0.907,
                    sy: 1.2,
                    kx: 0.439,
                    ky: -0.43
                },
                "229": {
                    x: -12.54,
                    y: -123.641,
                    sx: 0.906,
                    sy: 1.237,
                    kx: 0.506,
                    ky: -0.525
                },
                "230": {
                    x: -14.55,
                    y: -125.1,
                    sx: 0.905,
                    sy: 1.25,
                    kx: 0.529,
                    ky: -0.558
                }
            })
            .addTimedChild(instance2, 0, 231, {
                "0": {
                    x: 74.45,
                    y: -26.7,
                    r: 0
                },
                "19": {
                    x: 72.123,
                    y: -27.772,
                    r: -0.008
                },
                "20": {
                    x: 66.622,
                    y: -30.226,
                    r: -0.028
                },
                "21": {
                    x: 60.346,
                    y: -33.198,
                    r: -0.051
                },
                "22": {
                    x: 54.662,
                    y: -35.675,
                    r: -0.071
                },
                "23": {
                    x: 50.474,
                    y: -37.557,
                    r: -0.086
                },
                "24": {
                    x: 47.95,
                    y: -38.6,
                    r: -0.095
                },
                "25": {
                    x: 42.985,
                    y: -37.416,
                    r: -0.085
                },
                "26": {
                    x: 34.75,
                    y: -35.372,
                    r: -0.069
                },
                "27": {
                    x: 24.922,
                    y: -32.906,
                    r: -0.049
                },
                "28": {
                    x: 14.744,
                    y: -30.3,
                    r: -0.029
                },
                "29": {
                    x: 5.859,
                    y: -28.105,
                    r: -0.011
                },
                "30": {
                    x: 0.25,
                    y: -26.7,
                    r: 0
                }
            })
            .addTimedChild(instance1, 0, 231, {
                "0": {
                    x: -284.65,
                    y: -371,
                    sx: 1,
                    sy: 1,
                    r: -0.301
                },
                "15": {
                    x: -284.68,
                    y: -369.557,
                    r: -0.303
                },
                "16": {
                    x: -284.969,
                    y: -365.47,
                    r: -0.31
                },
                "17": {
                    x: -285.115,
                    y: -361.917,
                    r: -0.315
                },
                "18": {
                    x: -285.1,
                    y: -360.8,
                    r: -0.317
                },
                "19": {
                    x: -292.703,
                    y: -363.099,
                    r: -0.315
                },
                "20": {
                    x: -310.411,
                    y: -368.353,
                    r: -0.311
                },
                "21": {
                    x: -330.969,
                    y: -374.477,
                    sx: 0.999,
                    sy: 0.999,
                    r: -0.307
                },
                "22": {
                    x: -349.322,
                    y: -379.915,
                    r: -0.303
                },
                "23": {
                    x: -362.865,
                    y: -383.963,
                    r: -0.3
                },
                "24": {
                    x: -370.65,
                    y: -386.25,
                    r: -0.298
                },
                "25": {
                    x: -375.343,
                    y: -382.596,
                    r: -0.305
                },
                "26": {
                    x: -382.983,
                    y: -376.536,
                    r: -0.315
                },
                "27": {
                    x: -392.059,
                    y: -369.321,
                    r: -0.328
                },
                "28": {
                    x: -401.347,
                    y: -361.86,
                    sx: 1,
                    sy: 1,
                    r: -0.342
                },
                "29": {
                    x: -409.57,
                    y: -355.419,
                    r: -0.353
                },
                "30": {
                    x: -414.7,
                    y: -351.2,
                    r: -0.361
                },
                "31": {
                    x: -414.73,
                    y: -352.182,
                    r: -0.365
                },
                "32": {
                    x: -414.63,
                    y: -354.826,
                    r: -0.376
                },
                "33": {
                    x: -414.524,
                    y: -358.026,
                    r: -0.389
                },
                "34": {
                    x: -414.326,
                    y: -360.783,
                    r: -0.4
                },
                "35": {
                    x: -414.29,
                    y: -362.762,
                    r: -0.408
                },
                "36": {
                    x: -414.212,
                    y: -364.088,
                    r: -0.414
                },
                "37": {
                    x: -414.173,
                    y: -364.787,
                    r: -0.417
                },
                "38": {
                    x: -414.15,
                    y: -365,
                    r: -0.418
                },
                "95": {
                    x: -414.394,
                    y: -364.594
                },
                "96": {
                    x: -415.144,
                    y: -363.094
                },
                "97": {
                    x: -415.944,
                    y: -361.644
                },
                "98": {
                    x: -416.1,
                    y: -361.25
                },
                "99": {
                    x: -415.994,
                    y: -361.544
                },
                "100": {
                    x: -415.494,
                    y: -362.444
                },
                "101": {
                    x: -414.744,
                    y: -363.894
                },
                "102": {
                    x: -414.294,
                    y: -364.794
                },
                "103": {
                    x: -414.15,
                    y: -365
                },
                "104": {
                    x: -414.394,
                    y: -364.594
                },
                "105": {
                    x: -415.144,
                    y: -363.094
                },
                "106": {
                    x: -415.944,
                    y: -361.644
                },
                "107": {
                    x: -416.1,
                    y: -361.25
                },
                "108": {
                    x: -415.994,
                    y: -361.544
                },
                "109": {
                    x: -415.494,
                    y: -362.444
                },
                "110": {
                    x: -414.744,
                    y: -363.894
                },
                "111": {
                    x: -414.294,
                    y: -364.794
                },
                "112": {
                    x: -414.15,
                    y: -365
                },
                "113": {
                    x: -414.394,
                    y: -364.594
                },
                "114": {
                    x: -415.144,
                    y: -363.094
                },
                "115": {
                    x: -415.944,
                    y: -361.644
                },
                "116": {
                    x: -416.1,
                    y: -361.25
                },
                "117": {
                    x: -415.994,
                    y: -361.544
                },
                "118": {
                    x: -415.494,
                    y: -362.444
                },
                "119": {
                    x: -414.744,
                    y: -363.894
                },
                "120": {
                    x: -414.294,
                    y: -364.794
                },
                "121": {
                    x: -414.15,
                    y: -365
                },
                "122": {
                    x: -414.385,
                    y: -364.61,
                    r: -0.421
                },
                "123": {
                    x: -415.146,
                    y: -363.116,
                    r: -0.435
                },
                "124": {
                    x: -416.025,
                    y: -361.687,
                    r: -0.449
                },
                "125": {
                    x: -416.1,
                    y: -361.25,
                    r: -0.452
                },
                "126": {
                    x: -416.094,
                    y: -361.537,
                    r: -0.456
                },
                "127": {
                    x: -415.59,
                    y: -362.447,
                    r: -0.469
                },
                "128": {
                    x: -414.811,
                    y: -363.912,
                    r: -0.489
                },
                "129": {
                    x: -414.38,
                    y: -364.823,
                    r: -0.501
                },
                "130": {
                    x: -414.15,
                    y: -365,
                    r: -0.505
                },
                "131": {
                    x: -414.456,
                    y: -364.681,
                    r: -0.507
                },
                "132": {
                    x: -415.193,
                    y: -363.17,
                    r: -0.514
                },
                "133": {
                    x: -415.962,
                    y: -361.705,
                    r: -0.52
                },
                "134": {
                    x: -416.1,
                    y: -361.25,
                    r: -0.522
                },
                "135": {
                    x: -416.09,
                    y: -361.575,
                    r: -0.523
                },
                "136": {
                    x: -415.566,
                    y: -362.455,
                    r: -0.528
                },
                "137": {
                    x: -414.773,
                    y: -363.907,
                    r: -0.534
                },
                "138": {
                    x: -414.291,
                    y: -364.807,
                    r: -0.539
                },
                "139": {
                    x: -414.15,
                    y: -365,
                    r: -0.54
                },
                "140": {
                    x: -414.394,
                    y: -364.594
                },
                "141": {
                    x: -415.144,
                    y: -363.094
                },
                "142": {
                    x: -415.944,
                    y: -361.644
                },
                "143": {
                    x: -416.1,
                    y: -361.25
                },
                "144": {
                    x: -415.994,
                    y: -361.494
                },
                "145": {
                    x: -415.494,
                    y: -362.394
                },
                "146": {
                    x: -414.744,
                    y: -363.844
                },
                "147": {
                    x: -414.294,
                    y: -364.744
                },
                "148": {
                    x: -414.15,
                    y: -365
                },
                "149": {
                    x: -414.394,
                    y: -364.594
                },
                "150": {
                    x: -415.144,
                    y: -363.094
                },
                "151": {
                    x: -415.944,
                    y: -361.644
                },
                "152": {
                    x: -416.1,
                    y: -361.25
                },
                "153": {
                    x: -415.994,
                    y: -361.494
                },
                "154": {
                    x: -415.494,
                    y: -362.394
                },
                "155": {
                    x: -414.744,
                    y: -363.844
                },
                "156": {
                    x: -414.294,
                    y: -364.744
                },
                "157": {
                    x: -414.15,
                    y: -365
                },
                "158": {
                    x: -414.39,
                    y: -364.618,
                    r: -0.536
                },
                "159": {
                    x: -415.165,
                    y: -363.112,
                    r: -0.522
                },
                "160": {
                    x: -415.951,
                    y: -361.628,
                    r: -0.509
                },
                "161": {
                    x: -416.1,
                    y: -361.25,
                    r: -0.505
                },
                "162": {
                    x: -417.668,
                    y: -356.751,
                    r: -0.481
                },
                "163": {
                    x: -419.2,
                    y: -352.25,
                    r: -0.457
                },
                "164": {
                    x: -409.371,
                    y: -363.306,
                    r: -0.49
                },
                "165": {
                    x: -400.083,
                    y: -373.658,
                    r: -0.521
                },
                "166": {
                    x: -394.12,
                    y: -380.295,
                    r: -0.541
                },
                "167": {
                    x: -390.944,
                    y: -383.848,
                    r: -0.551
                },
                "168": {
                    x: -389.9,
                    y: -384.9,
                    r: -0.554
                },
                "171": {
                    x: -387.7,
                    y: -388.5,
                    r: -0.56
                },
                "172": {
                    x: -403.7,
                    y: -358.45,
                    sx: 0.999,
                    sy: 0.999,
                    r: -0.464
                },
                "173": {
                    x: -404.9,
                    y: -356.2,
                    sx: 1,
                    sy: 1,
                    r: -0.451
                },
                "174": {
                    x: -394.625,
                    y: -369.902,
                    r: -0.459
                },
                "175": {
                    x: -389.388,
                    y: -376.678,
                    r: -0.462
                },
                "176": {
                    x: -386.124,
                    y: -380.865,
                    r: -0.465
                },
                "177": {
                    x: -384.106,
                    y: -383.586,
                    r: -0.466
                },
                "178": {
                    x: -382.764,
                    y: -385.329,
                    r: -0.467
                },
                "179": {
                    x: -381.881,
                    y: -386.42,
                    r: -0.468
                },
                "180": {
                    x: -381.495,
                    y: -386.99
                },
                "181": {
                    x: -381.35,
                    y: -387.15
                },
                "186": {
                    x: -382.5,
                    y: -385.35,
                    r: -0.481
                },
                "187": {
                    x: -381.209,
                    y: -386.778,
                    r: -0.48
                },
                "188": {
                    x: -376.759,
                    y: -391.421,
                    r: -0.478
                },
                "189": {
                    x: -368.492,
                    y: -400.154,
                    r: -0.474
                },
                "190": {
                    x: -356.023,
                    y: -413.321,
                    r: -0.468
                },
                "191": {
                    x: -340.701,
                    y: -429.429,
                    r: -0.461
                },
                "192": {
                    x: -325.4,
                    y: -445.619,
                    r: -0.454
                },
                "193": {
                    x: -312.186,
                    y: -459.524,
                    r: -0.448
                },
                "194": {
                    x: -301.958,
                    y: -470.398,
                    r: -0.443
                },
                "195": {
                    x: -294.391,
                    y: -478.299,
                    r: -0.439
                },
                "196": {
                    x: -289.11,
                    y: -483.804,
                    r: -0.437
                },
                "197": {
                    x: -285.775,
                    y: -487.325,
                    r: -0.435
                },
                "198": {
                    x: -283.978,
                    y: -489.235,
                    r: -0.434
                },
                "199": {
                    x: -283.35,
                    y: -489.8
                },
                "215": {
                    x: -283.46,
                    y: -489.834,
                    r: -0.429
                },
                "216": {
                    x: -283.482,
                    y: -489.83,
                    r: -0.414
                },
                "217": {
                    x: -283.498,
                    y: -489.802,
                    r: -0.396
                },
                "218": {
                    x: -283.502,
                    y: -489.829,
                    r: -0.382
                },
                "219": {
                    x: -283.489,
                    y: -489.835,
                    r: -0.376
                },
                "220": {
                    x: -283.35,
                    y: -489.8,
                    r: -0.374
                },
                "224": {
                    r: -0.376
                },
                "225": {
                    x: -295.567,
                    y: -482.433
                },
                "226": {
                    x: -326.415,
                    y: -463.576,
                    r: -0.374
                },
                "227": {
                    x: -364.787,
                    y: -440.129,
                    r: -0.372
                },
                "228": {
                    x: -399.481,
                    y: -419.032,
                    r: -0.37
                },
                "229": {
                    x: -422.484,
                    y: -404.947,
                    r: -0.369
                },
                "230": {
                    x: -430.35,
                    y: -400.05,
                    r: -0.368
                }
            })
            .addTimedChild(instance42, 231, 34, {
                "231": {
                    x: -270.4,
                    y: 3.7
                },
                "232": {
                    x: -353.55,
                    y: -8
                },
                "233": {
                    x: -413.35,
                    y: -11.45
                },
                "234": {
                    x: -449.7,
                    y: -5.7
                },
                "235": {
                    x: -486.05,
                    y: 3.7
                },
                "236": {
                    x: -522.45
                },
                "237": {
                    x: -558.8
                },
                "238": {
                    x: -602.05
                },
                "239": {
                    x: -648.95
                },
                "240": {
                    x: -682.05
                },
                "241": {
                    x: -714.75
                },
                "242": {
                    x: -747.7
                },
                "243": {
                    x: -780.4
                },
                "244": {
                    x: -855.35
                },
                "245": {
                    x: -896.5
                },
                "246": {
                    x: -944.55
                },
                "247": {
                    x: -980.9
                },
                "248": {
                    x: -1017.3
                },
                "249": {
                    x: -1053.65
                },
                "250": {
                    x: -1054.9
                },
                "251": {
                    x: -1103
                },
                "252": {
                    x: -1149.9
                },
                "253": {
                    x: -1182.6
                },
                "254": {
                    x: -1215.5
                },
                "255": {
                    x: -1248.65
                },
                "256": {
                    x: -1281.35
                },
                "257": {
                    x: -1323.65
                },
                "258": {
                    x: -1380.9
                },
                "259": {
                    x: -1417.25
                },
                "260": {
                    x: -1453.65
                },
                "261": {
                    x: -1490
                },
                "262": {
                    x: -1526.35
                },
                "263": {
                    x: -1562.75
                },
                "264": {
                    x: -1599.1
                }
            });
    });

    var Graphic129 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 203, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[55]);
        this.addTimedChild(instance1);
    });

    var Graphic95 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 20, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[55]);
        this.addTimedChild(instance1);
    });

    var Graphic96 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 20, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[56]);
        this.addTimedChild(instance1);
    });

    var Graphic97 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 20, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[57]);
        this.addTimedChild(instance1);
    });

    var Graphic98 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 20, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[58]);
        this.addTimedChild(instance1);
    });

    var Graphic80 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 20, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[59]);
        this.addTimedChild(instance1);
    });

    var Graphic81 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 20, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[60]);
        this.addTimedChild(instance1);
    });

    var Graphic82 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 20, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[61]);
        this.addTimedChild(instance1);
    });

    var Graphic76 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 20, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[64]);
        this.addTimedChild(instance1);
    });

    var Graphic77 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 20, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[64]);
        this.addTimedChild(instance1);
    });

    var Graphic83 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 20, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.TREX[63])
            .setRenderable(false);
        var instance4 = new Graphic77(MovieClip.SYNCHED)
            .setTransform(-1.05, 101.55)
            .setMask(instance2);
        var instance3 = new Graphic76(MovieClip.SYNCHED)
            .setTransform(-1.05, -39.95);
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[62]);
        this.addTimedChild(instance2)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance1);
    });

    var Graphic78 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 20, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[64]);
        this.addTimedChild(instance1);
    });

    var Graphic79 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 20, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[64]);
        this.addTimedChild(instance1);
    });

    var Graphic84 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 20, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.TREX[63])
            .setRenderable(false);
        var instance4 = new Graphic79(MovieClip.SYNCHED)
            .setTransform(-1.05, 101.55)
            .setMask(instance2);
        var instance3 = new Graphic78(MovieClip.SYNCHED)
            .setTransform(-1.05, -39.95);
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[62]);
        this.addTimedChild(instance2)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance1);
    });

    var Graphic85 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 20, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[63]);
        this.addTimedChild(instance1);
    });

    var Graphic86 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 20, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[65]);
        this.addTimedChild(instance1);
    });

    var Graphic87 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 20, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[63]);
        this.addTimedChild(instance1);
    });

    var Graphic88 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 20, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[65]);
        this.addTimedChild(instance1);
    });

    var Graphic89 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 20, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[63]);
        this.addTimedChild(instance1);
    });

    var Graphic90 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 20, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[63]);
        this.addTimedChild(instance1);
    });

    var Graphic91 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 20, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[66]);
        this.addTimedChild(instance1);
    });

    var Graphic92 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 20, loop: false });
        var instance4 = new Graphics()
            .drawCommands(shapes.TREX[70]);
        var instance3 = new Graphics()
            .drawCommands(shapes.TREX[69]);
        var instance2 = new Graphics()
            .drawCommands(shapes.TREX[68]);
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[67]);
        this.addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic93 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 20, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[71]);
        this.addTimedChild(instance1);
    });

    var Graphic94 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 20, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[72]);
        this.addTimedChild(instance1);
    });

    var Graphic99 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 20, loop: false });
        var instance6 = new Graphic85(MovieClip.SYNCHED)
            .setRenderable(false)
            .setTransform(68.8, -81.05, 1, 1, 0, 0, 3.142)
            .setAlpha(0.01);
        var instance8 = new Graphic87(MovieClip.SYNCHED)
            .setRenderable(false)
            .setTransform(-7.15, -81.05)
            .setAlpha(0.01);
        var instance15 = new Graphic94(MovieClip.SYNCHED)
            .setTransform(7.1, 51.2);
        var instance14 = new Graphic93(MovieClip.SYNCHED)
            .setTransform(66.85, 0.15);
        var instance13 = new Graphic92(MovieClip.SYNCHED)
            .setTransform(-17.5, -37.1);
        var instance12 = new Graphic91(MovieClip.SYNCHED)
            .setTransform(-38.05, -157.95, 1, 1, -0.017);
        var instance11 = new Graphic90(MovieClip.SYNCHED)
            .setTransform(-7.15, -81.05);
        var instance10 = new Graphic89(MovieClip.SYNCHED)
            .setTransform(68.8, -81.05, 1, 1, 0, 0, 3.142);
        var instance9 = new Graphic88(MovieClip.SYNCHED)
            .setTransform(-20.9, -94.15, 0.589, 0.589)
            .setColorTransform(0, 0, 0, 0, 0, 0)
            .setMask(instance8);
        var instance7 = new Graphic86(MovieClip.SYNCHED)
            .setTransform(54.8, -96, 0.589, 0.589, 0, 0, 3.142)
            .setColorTransform(0, 0, 0, 0, 0, 0)
            .setMask(instance6);
        var instance5 = new Graphic84(MovieClip.SYNCHED)
            .setTransform(-7.15, -81.05);
        var instance4 = new Graphic83(MovieClip.SYNCHED)
            .setTransform(68.8, -81.05, 1, 1, 0, 0, 3.142);
        var instance3 = new Graphic82(MovieClip.SYNCHED)
            .setTransform(30.3, -90.15);
        var instance2 = new Graphic81(MovieClip.SYNCHED)
            .setTransform(-117.9, -166.25);
        var instance1 = new Graphic80(MovieClip.SYNCHED)
            .setTransform(-64.7, -36.2);
        this.addTimedChild(instance6)
            .addTimedChild(instance8)
            .addTimedChild(instance15)
            .addTimedChild(instance14)
            .addTimedChild(instance13)
            .addTimedChild(instance12)
            .addTimedChild(instance11)
            .addTimedChild(instance10)
            .addTimedChild(instance9)
            .addTimedChild(instance7)
            .addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic100 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 20, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[73]);
        this.addTimedChild(instance1);
    });

    var Graphic101 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 20, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[74]);
        var instance2 = new Graphics()
            .drawCommands(shapes.TREX[75]);
        var instance3 = new Graphics()
            .drawCommands(shapes.TREX[74]);
        var instance4 = new Graphics()
            .drawCommands(shapes.TREX[75]);
        var instance5 = new Graphics()
            .drawCommands(shapes.TREX[74]);
        var instance6 = new Graphics()
            .drawCommands(shapes.TREX[75]);
        var instance7 = new Graphics()
            .drawCommands(shapes.TREX[74]);
        var instance8 = new Graphics()
            .drawCommands(shapes.TREX[75]);
        var instance9 = new Graphics()
            .drawCommands(shapes.TREX[74]);
        var instance10 = new Graphics()
            .drawCommands(shapes.TREX[75]);
        this.addTimedChild(instance1, 0, 2)
            .addTimedChild(instance2, 2, 2)
            .addTimedChild(instance3, 4, 2)
            .addTimedChild(instance4, 6, 2)
            .addTimedChild(instance5, 8, 2)
            .addTimedChild(instance6, 10, 2)
            .addTimedChild(instance7, 12, 2)
            .addTimedChild(instance8, 14, 2)
            .addTimedChild(instance9, 16, 2)
            .addTimedChild(instance10, 18, 2);
    });

    var Graphic102 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 20, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[76]);
        var instance2 = new Graphics()
            .drawCommands(shapes.TREX[77]);
        var instance3 = new Graphics()
            .drawCommands(shapes.TREX[76]);
        var instance4 = new Graphics()
            .drawCommands(shapes.TREX[77]);
        var instance5 = new Graphics()
            .drawCommands(shapes.TREX[76]);
        var instance6 = new Graphics()
            .drawCommands(shapes.TREX[77]);
        var instance7 = new Graphics()
            .drawCommands(shapes.TREX[76]);
        var instance8 = new Graphics()
            .drawCommands(shapes.TREX[77]);
        var instance9 = new Graphics()
            .drawCommands(shapes.TREX[76]);
        var instance10 = new Graphics()
            .drawCommands(shapes.TREX[77]);
        var instance11 = new Graphics()
            .drawCommands(shapes.TREX[76]);
        this.addTimedChild(instance1, 0, 1)
            .addTimedChild(instance2, 1, 1)
            .addTimedChild(instance3, 2, 3)
            .addTimedChild(instance4, 5, 1)
            .addTimedChild(instance5, 6, 3)
            .addTimedChild(instance6, 9, 1)
            .addTimedChild(instance7, 10, 3)
            .addTimedChild(instance8, 13, 1)
            .addTimedChild(instance9, 14, 3)
            .addTimedChild(instance10, 17, 1)
            .addTimedChild(instance11, 18, 2);
    });

    var Graphic103 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 20, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[75]);
        this.addTimedChild(instance1);
    });

    var Graphic104 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 20, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[78]);
        var instance2 = new Graphics()
            .drawCommands(shapes.TREX[79]);
        var instance3 = new Graphics()
            .drawCommands(shapes.TREX[78]);
        var instance4 = new Graphics()
            .drawCommands(shapes.TREX[79]);
        var instance5 = new Graphics()
            .drawCommands(shapes.TREX[78]);
        var instance6 = new Graphics()
            .drawCommands(shapes.TREX[79]);
        var instance7 = new Graphics()
            .drawCommands(shapes.TREX[78]);
        var instance8 = new Graphics()
            .drawCommands(shapes.TREX[79]);
        var instance9 = new Graphics()
            .drawCommands(shapes.TREX[78]);
        var instance10 = new Graphics()
            .drawCommands(shapes.TREX[79]);
        this.addTimedChild(instance1, 0, 3)
            .addTimedChild(instance2, 3, 1)
            .addTimedChild(instance3, 4, 3)
            .addTimedChild(instance4, 7, 1)
            .addTimedChild(instance5, 8, 3)
            .addTimedChild(instance6, 11, 1)
            .addTimedChild(instance7, 12, 3)
            .addTimedChild(instance8, 15, 1)
            .addTimedChild(instance9, 16, 3)
            .addTimedChild(instance10, 19, 1);
    });

    var Graphic105 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 20, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[55]);
        this.addTimedChild(instance1);
    });

    var Graphic106 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 20, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[56]);
        this.addTimedChild(instance1);
    });

    var Graphic107 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 20, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[57]);
        this.addTimedChild(instance1);
    });

    var Graphic145 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 20, loop: false });
        var instance13 = new Graphic107(MovieClip.SYNCHED);
        var instance12 = new Graphic106(MovieClip.SYNCHED);
        var instance11 = new Graphic105(MovieClip.SYNCHED);
        var instance10 = new Graphic104(MovieClip.SYNCHED);
        var instance9 = new Graphic103(MovieClip.SYNCHED);
        var instance8 = new Graphic102(MovieClip.SYNCHED);
        var instance7 = new Graphic101(MovieClip.SYNCHED);
        var instance6 = new Graphic100(MovieClip.SYNCHED);
        var instance5 = new Graphic99(MovieClip.SYNCHED);
        var instance4 = new Graphic98(MovieClip.SYNCHED);
        var instance3 = new Graphic97(MovieClip.SYNCHED);
        var instance2 = new Graphic96(MovieClip.SYNCHED);
        var instance1 = new Graphic95(MovieClip.SYNCHED);
        this.addTimedChild(instance13, 0, 20, {
                "0": {
                    x: 2082.55,
                    y: -803.65,
                    kx: 4.37,
                    ky: -1.229
                },
                "1": {
                    y: -812.65
                },
                "2": {
                    y: -819.4
                },
                "3": {
                    y: -812.65
                },
                "4": {
                    y: -803.65
                },
                "5": {
                    y: -812.65
                },
                "6": {
                    y: -819.4
                },
                "7": {
                    y: -812.65
                },
                "8": {
                    y: -803.65
                },
                "9": {
                    y: -812.65
                },
                "10": {
                    y: -819.4
                },
                "11": {
                    y: -812.65
                },
                "12": {
                    y: -803.65
                },
                "13": {
                    y: -812.65
                },
                "14": {
                    y: -819.4
                },
                "15": {
                    y: -812.65
                },
                "16": {
                    y: -803.65
                },
                "17": {
                    y: -812.65
                },
                "18": {
                    y: -819.4
                },
                "19": {
                    y: -812.65
                }
            })
            .addTimedChild(instance12, 0, 20, {
                "0": {
                    x: 2096.2,
                    y: -799,
                    kx: 4.354,
                    ky: -1.212
                },
                "1": {
                    y: -808
                },
                "2": {
                    y: -814.75
                },
                "3": {
                    y: -808
                },
                "4": {
                    y: -799
                },
                "5": {
                    y: -808
                },
                "6": {
                    y: -814.75
                },
                "7": {
                    y: -808
                },
                "8": {
                    y: -799
                },
                "9": {
                    y: -808
                },
                "10": {
                    y: -814.75
                },
                "11": {
                    y: -808
                },
                "12": {
                    y: -799
                },
                "13": {
                    y: -808
                },
                "14": {
                    y: -814.75
                },
                "15": {
                    y: -808
                },
                "16": {
                    y: -799
                },
                "17": {
                    y: -808
                },
                "18": {
                    y: -814.75
                },
                "19": {
                    y: -808
                }
            })
            .addTimedChild(instance11, 0, 20, {
                "0": {
                    x: 2016.1,
                    y: -824.75,
                    kx: 4.304,
                    ky: -1.162
                },
                "1": {
                    y: -833.75
                },
                "2": {
                    y: -840.5
                },
                "3": {
                    y: -833.75
                },
                "4": {
                    y: -824.75
                },
                "5": {
                    y: -833.75
                },
                "6": {
                    y: -840.5
                },
                "7": {
                    y: -833.75
                },
                "8": {
                    y: -824.75
                },
                "9": {
                    y: -833.75
                },
                "10": {
                    y: -840.5
                },
                "11": {
                    y: -833.75
                },
                "12": {
                    y: -824.75
                },
                "13": {
                    y: -833.75
                },
                "14": {
                    y: -840.5
                },
                "15": {
                    y: -833.75
                },
                "16": {
                    y: -824.75
                },
                "17": {
                    y: -833.75
                },
                "18": {
                    y: -840.5
                },
                "19": {
                    y: -833.75
                }
            })
            .addTimedChild(instance10, 0, 20, {
                "0": {
                    x: 2182.8,
                    y: -705.55,
                    sy: 1,
                    kx: 0.972,
                    ky: 2.17
                },
                "1": {
                    x: 2171.1,
                    y: -716.45,
                    kx: 0.553,
                    ky: 2.589
                },
                "2": {
                    x: 2140.05,
                    y: -708.6,
                    kx: -0.446,
                    ky: -2.695
                },
                "3": {
                    x: 2129.55,
                    y: -701.85,
                    sy: 1.337,
                    kx: -0.716,
                    ky: -2.426
                },
                "4": {
                    x: 2182.8,
                    y: -705.55,
                    sy: 1,
                    kx: 0.972,
                    ky: 2.17
                },
                "5": {
                    x: 2171.1,
                    y: -716.45,
                    kx: 0.553,
                    ky: 2.589
                },
                "6": {
                    x: 2140.05,
                    y: -708.6,
                    kx: -0.446,
                    ky: -2.695
                },
                "7": {
                    x: 2129.55,
                    y: -701.85,
                    sy: 1.337,
                    kx: -0.716,
                    ky: -2.426
                },
                "8": {
                    x: 2182.8,
                    y: -705.55,
                    sy: 1,
                    kx: 0.972,
                    ky: 2.17
                },
                "9": {
                    x: 2171.1,
                    y: -716.45,
                    kx: 0.553,
                    ky: 2.589
                },
                "10": {
                    x: 2140.05,
                    y: -708.6,
                    kx: -0.446,
                    ky: -2.695
                },
                "11": {
                    x: 2129.55,
                    y: -701.85,
                    sy: 1.337,
                    kx: -0.716,
                    ky: -2.426
                },
                "12": {
                    x: 2182.8,
                    y: -705.55,
                    sy: 1,
                    kx: 0.972,
                    ky: 2.17
                },
                "13": {
                    x: 2171.1,
                    y: -716.45,
                    kx: 0.553,
                    ky: 2.589
                },
                "14": {
                    x: 2140.05,
                    y: -708.6,
                    kx: -0.446,
                    ky: -2.695
                },
                "15": {
                    x: 2129.55,
                    y: -701.85,
                    sy: 1.337,
                    kx: -0.716,
                    ky: -2.426
                },
                "16": {
                    x: 2182.8,
                    y: -705.55,
                    sy: 1,
                    kx: 0.972,
                    ky: 2.17
                },
                "17": {
                    x: 2171.1,
                    y: -716.45,
                    kx: 0.553,
                    ky: 2.589
                },
                "18": {
                    x: 2140.05,
                    y: -708.6,
                    kx: -0.446,
                    ky: -2.695
                },
                "19": {
                    x: 2129.55,
                    y: -701.85,
                    sy: 1.337,
                    kx: -0.716,
                    ky: -2.426
                }
            })
            .addTimedChild(instance9, 0, 20, {
                "0": {
                    x: 2229.6,
                    y: -678,
                    kx: 2.112,
                    ky: 1.03
                },
                "1": {
                    x: 2202.65,
                    y: -672.25,
                    kx: 1.693,
                    ky: 1.449
                },
                "2": {
                    x: 2116.95,
                    y: -664.1,
                    kx: -0.121,
                    ky: -3.021
                },
                "3": {
                    x: 2080.95,
                    y: -648.35,
                    kx: -0.714,
                    ky: -2.428
                },
                "4": {
                    x: 2229.6,
                    y: -678,
                    kx: 2.112,
                    ky: 1.03
                },
                "5": {
                    x: 2202.65,
                    y: -672.25,
                    kx: 1.693,
                    ky: 1.449
                },
                "6": {
                    x: 2116.95,
                    y: -664.1,
                    kx: -0.121,
                    ky: -3.021
                },
                "7": {
                    x: 2080.95,
                    y: -648.35,
                    kx: -0.714,
                    ky: -2.428
                },
                "8": {
                    x: 2229.6,
                    y: -678,
                    kx: 2.112,
                    ky: 1.03
                },
                "9": {
                    x: 2202.65,
                    y: -672.25,
                    kx: 1.693,
                    ky: 1.449
                },
                "10": {
                    x: 2116.95,
                    y: -664.1,
                    kx: -0.121,
                    ky: -3.021
                },
                "11": {
                    x: 2080.95,
                    y: -648.35,
                    kx: -0.714,
                    ky: -2.428
                },
                "12": {
                    x: 2229.6,
                    y: -678,
                    kx: 2.112,
                    ky: 1.03
                },
                "13": {
                    x: 2202.65,
                    y: -672.25,
                    kx: 1.693,
                    ky: 1.449
                },
                "14": {
                    x: 2116.95,
                    y: -664.1,
                    kx: -0.121,
                    ky: -3.021
                },
                "15": {
                    x: 2080.95,
                    y: -648.35,
                    kx: -0.714,
                    ky: -2.428
                },
                "16": {
                    x: 2229.6,
                    y: -678,
                    kx: 2.112,
                    ky: 1.03
                },
                "17": {
                    x: 2202.65,
                    y: -672.25,
                    kx: 1.693,
                    ky: 1.449
                },
                "18": {
                    x: 2116.95,
                    y: -664.1,
                    kx: -0.121,
                    ky: -3.021
                },
                "19": {
                    x: 2080.95,
                    y: -648.35,
                    kx: -0.714,
                    ky: -2.428
                }
            })
            .addTimedChild(instance8, 0, 20, {
                "0": {
                    x: 2172.3,
                    y: -699.65,
                    sx: 0.97,
                    sy: 1.307,
                    kx: 0.313,
                    ky: 2.829
                },
                "1": {
                    x: 2199.6,
                    y: -709.35,
                    sx: 0.9,
                    sy: 1.562,
                    kx: 0.673,
                    ky: 2.469
                },
                "2": {
                    x: 2198.1,
                    y: -722.1,
                    kx: 1.03,
                    ky: 2.111
                },
                "3": {
                    y: -715.35,
                    sx: 1.031,
                    sy: 1.372,
                    kx: 1.269,
                    ky: 1.872
                },
                "4": {
                    x: 2172.3,
                    y: -699.65,
                    sx: 0.97,
                    sy: 1.307,
                    kx: 0.313,
                    ky: 2.829
                },
                "5": {
                    x: 2199.6,
                    y: -709.35,
                    sx: 0.9,
                    sy: 1.562,
                    kx: 0.673,
                    ky: 2.469
                },
                "6": {
                    x: 2198.1,
                    y: -722.1,
                    kx: 1.03,
                    ky: 2.111
                },
                "7": {
                    y: -715.35,
                    sx: 1.031,
                    sy: 1.372,
                    kx: 1.269,
                    ky: 1.872
                },
                "8": {
                    x: 2172.3,
                    y: -699.65,
                    sx: 0.97,
                    sy: 1.307,
                    kx: 0.313,
                    ky: 2.829
                },
                "9": {
                    x: 2199.6,
                    y: -709.35,
                    sx: 0.9,
                    sy: 1.562,
                    kx: 0.673,
                    ky: 2.469
                },
                "10": {
                    x: 2198.1,
                    y: -722.1,
                    kx: 1.03,
                    ky: 2.111
                },
                "11": {
                    y: -715.35,
                    sx: 1.031,
                    sy: 1.372,
                    kx: 1.269,
                    ky: 1.872
                },
                "12": {
                    x: 2172.3,
                    y: -699.65,
                    sx: 0.97,
                    sy: 1.307,
                    kx: 0.313,
                    ky: 2.829
                },
                "13": {
                    x: 2199.6,
                    y: -709.35,
                    sx: 0.9,
                    sy: 1.562,
                    kx: 0.673,
                    ky: 2.469
                },
                "14": {
                    x: 2198.1,
                    y: -722.1,
                    kx: 1.03,
                    ky: 2.111
                },
                "15": {
                    y: -715.35,
                    sx: 1.031,
                    sy: 1.372,
                    kx: 1.269,
                    ky: 1.872
                },
                "16": {
                    x: 2172.3,
                    y: -699.65,
                    sx: 0.97,
                    sy: 1.307,
                    kx: 0.313,
                    ky: 2.829
                },
                "17": {
                    x: 2199.6,
                    y: -709.35,
                    sx: 0.9,
                    sy: 1.562,
                    kx: 0.673,
                    ky: 2.469
                },
                "18": {
                    x: 2198.1,
                    y: -722.1,
                    kx: 1.03,
                    ky: 2.111
                },
                "19": {
                    y: -715.35,
                    sx: 1.031,
                    sy: 1.372,
                    kx: 1.269,
                    ky: 1.872
                }
            })
            .addTimedChild(instance7, 0, 20, {
                "0": {
                    x: 2195.7,
                    y: -631.15,
                    sx: 1.047,
                    sy: 1.073,
                    kx: 1.024,
                    ky: 2.118
                },
                "1": {
                    x: 2251.8,
                    y: -639.15,
                    kx: 1.259,
                    ky: 1.883
                },
                "2": {
                    x: 2272.8,
                    y: -678.9,
                    kx: 1.978,
                    ky: 1.164
                },
                "3": {
                    x: 2266.8,
                    y: -696.15
                },
                "4": {
                    x: 2195.7,
                    y: -631.15,
                    kx: 1.024,
                    ky: 2.118
                },
                "5": {
                    x: 2251.8,
                    y: -639.15,
                    kx: 1.259,
                    ky: 1.883
                },
                "6": {
                    x: 2272.8,
                    y: -678.9,
                    kx: 1.978,
                    ky: 1.164
                },
                "7": {
                    x: 2266.8,
                    y: -696.15
                },
                "8": {
                    x: 2195.7,
                    y: -631.15,
                    kx: 1.024,
                    ky: 2.118
                },
                "9": {
                    x: 2251.8,
                    y: -639.15,
                    kx: 1.259,
                    ky: 1.883
                },
                "10": {
                    x: 2272.8,
                    y: -678.9,
                    kx: 1.978,
                    ky: 1.164
                },
                "11": {
                    x: 2266.8,
                    y: -696.15
                },
                "12": {
                    x: 2195.7,
                    y: -631.15,
                    kx: 1.024,
                    ky: 2.118
                },
                "13": {
                    x: 2251.8,
                    y: -639.15,
                    kx: 1.259,
                    ky: 1.883
                },
                "14": {
                    x: 2272.8,
                    y: -678.9,
                    kx: 1.978,
                    ky: 1.164
                },
                "15": {
                    x: 2266.8,
                    y: -696.15
                },
                "16": {
                    x: 2195.7,
                    y: -631.15,
                    kx: 1.024,
                    ky: 2.118
                },
                "17": {
                    x: 2251.8,
                    y: -639.15,
                    kx: 1.259,
                    ky: 1.883
                },
                "18": {
                    x: 2272.8,
                    y: -678.9,
                    kx: 1.978,
                    ky: 1.164
                },
                "19": {
                    x: 2266.8,
                    y: -696.15
                }
            })
            .addTimedChild(instance6, 0, 20, {
                "0": {
                    x: 2239.6,
                    y: -723.7,
                    kx: 0.2,
                    ky: 2.942
                },
                "1": {
                    y: -732.7
                },
                "2": {
                    y: -739.45
                },
                "3": {
                    y: -732.7
                },
                "4": {
                    y: -723.7
                },
                "5": {
                    y: -732.7
                },
                "6": {
                    y: -739.45
                },
                "7": {
                    y: -732.7
                },
                "8": {
                    y: -723.7
                },
                "9": {
                    y: -732.7
                },
                "10": {
                    y: -739.45
                },
                "11": {
                    y: -732.7
                },
                "12": {
                    y: -723.7
                },
                "13": {
                    y: -732.7
                },
                "14": {
                    y: -739.45
                },
                "15": {
                    y: -732.7
                },
                "16": {
                    y: -723.7
                },
                "17": {
                    y: -732.7
                },
                "18": {
                    y: -739.45
                },
                "19": {
                    y: -732.7
                }
            })
            .addTimedChild(instance5, 0, 20, {
                "0": {
                    x: 2157.4,
                    y: -810.05,
                    kx: 0.137,
                    ky: 3.005
                },
                "1": {
                    y: -819.05
                },
                "2": {
                    y: -825.8
                },
                "3": {
                    y: -819.05
                },
                "4": {
                    y: -810.05
                },
                "5": {
                    y: -819.05
                },
                "6": {
                    y: -825.8
                },
                "7": {
                    y: -819.05
                },
                "8": {
                    y: -810.05
                },
                "9": {
                    y: -819.05
                },
                "10": {
                    y: -825.8
                },
                "11": {
                    y: -819.05
                },
                "12": {
                    y: -810.05
                },
                "13": {
                    y: -819.05
                },
                "14": {
                    y: -825.8
                },
                "15": {
                    y: -819.05
                },
                "16": {
                    y: -810.05
                },
                "17": {
                    y: -819.05
                },
                "18": {
                    y: -825.8
                },
                "19": {
                    y: -819.05
                }
            })
            .addTimedChild(instance4, 0, 20, {
                "0": {
                    x: 2229.25,
                    y: -829.6,
                    kx: 0.2,
                    ky: 2.942
                },
                "1": {
                    y: -838.6
                },
                "2": {
                    y: -845.35
                },
                "3": {
                    y: -838.6
                },
                "4": {
                    y: -829.6
                },
                "5": {
                    y: -838.6
                },
                "6": {
                    y: -845.35
                },
                "7": {
                    y: -838.6
                },
                "8": {
                    y: -829.6
                },
                "9": {
                    y: -838.6
                },
                "10": {
                    y: -845.35
                },
                "11": {
                    y: -838.6
                },
                "12": {
                    y: -829.6
                },
                "13": {
                    y: -838.6
                },
                "14": {
                    y: -845.35
                },
                "15": {
                    y: -838.6
                },
                "16": {
                    y: -829.6
                },
                "17": {
                    y: -838.6
                },
                "18": {
                    y: -845.35
                },
                "19": {
                    y: -838.6
                }
            })
            .addTimedChild(instance3, 0, 20, {
                "0": {
                    x: 2149.35,
                    y: -800.1,
                    kx: 4.554,
                    ky: -1.412
                },
                "1": {
                    y: -809.1
                },
                "2": {
                    y: -815.85
                },
                "3": {
                    y: -809.1
                },
                "4": {
                    y: -800.1
                },
                "5": {
                    y: -809.1
                },
                "6": {
                    y: -815.85
                },
                "7": {
                    y: -809.1
                },
                "8": {
                    y: -800.1
                },
                "9": {
                    y: -809.1
                },
                "10": {
                    y: -815.85
                },
                "11": {
                    y: -809.1
                },
                "12": {
                    y: -800.1
                },
                "13": {
                    y: -809.1
                },
                "14": {
                    y: -815.85
                },
                "15": {
                    y: -809.1
                },
                "16": {
                    y: -800.1
                },
                "17": {
                    y: -809.1
                },
                "18": {
                    y: -815.85
                },
                "19": {
                    y: -809.1
                }
            })
            .addTimedChild(instance2, 0, 20, {
                "0": {
                    x: 2163.65,
                    y: -798,
                    kx: 4.554,
                    ky: -1.412
                },
                "1": {
                    y: -807
                },
                "2": {
                    y: -813.75
                },
                "3": {
                    y: -807
                },
                "4": {
                    y: -798
                },
                "5": {
                    y: -807
                },
                "6": {
                    y: -813.75
                },
                "7": {
                    y: -807
                },
                "8": {
                    y: -798
                },
                "9": {
                    y: -807
                },
                "10": {
                    y: -813.75
                },
                "11": {
                    y: -807
                },
                "12": {
                    y: -798
                },
                "13": {
                    y: -807
                },
                "14": {
                    y: -813.75
                },
                "15": {
                    y: -807
                },
                "16": {
                    y: -798
                },
                "17": {
                    y: -807
                },
                "18": {
                    y: -813.75
                },
                "19": {
                    y: -807
                }
            })
            .addTimedChild(instance1, 0, 20, {
                "0": {
                    x: 2076.75,
                    y: -809.2,
                    kx: 4.688,
                    ky: -1.547
                },
                "1": {
                    y: -818.2
                },
                "2": {
                    y: -824.95
                },
                "3": {
                    y: -818.2
                },
                "4": {
                    y: -809.2
                },
                "5": {
                    y: -818.2
                },
                "6": {
                    y: -824.95
                },
                "7": {
                    y: -818.2
                },
                "8": {
                    y: -809.2
                },
                "9": {
                    y: -818.2
                },
                "10": {
                    y: -824.95
                },
                "11": {
                    y: -818.2
                },
                "12": {
                    y: -809.2
                },
                "13": {
                    y: -818.2
                },
                "14": {
                    y: -824.95
                },
                "15": {
                    y: -818.2
                },
                "16": {
                    y: -809.2
                },
                "17": {
                    y: -818.2
                },
                "18": {
                    y: -824.95
                },
                "19": {
                    y: -818.2
                }
            });
    });

    var Graphic130 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 203, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[56]);
        this.addTimedChild(instance1);
    });

    var Graphic146 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 15, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[80]);
        var instance2 = new Graphics()
            .drawCommands(shapes.TREX[81]);
        var instance3 = new Graphics()
            .drawCommands(shapes.TREX[82]);
        var instance4 = new Graphics()
            .drawCommands(shapes.TREX[83]);
        var instance5 = new Graphics()
            .drawCommands(shapes.TREX[84]);
        var instance6 = new Graphics()
            .drawCommands(shapes.TREX[85]);
        var instance7 = new Graphics()
            .drawCommands(shapes.TREX[86]);
        var instance8 = new Graphics()
            .drawCommands(shapes.TREX[87]);
        this.addTimedChild(instance1, 0, 2)
            .addTimedChild(instance2, 2, 2)
            .addTimedChild(instance3, 4, 2)
            .addTimedChild(instance4, 6, 2)
            .addTimedChild(instance5, 8, 2)
            .addTimedChild(instance6, 10, 2)
            .addTimedChild(instance7, 12, 2)
            .addTimedChild(instance8, 14, 1);
    });

    var Graphic131 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 203, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[57]);
        var instance2 = new Graphics()
            .drawCommands(shapes.TREX[88]);
        this.addTimedChild(instance1, 0, 164)
            .addTimedChild(instance2, 164, 39);
    });

    var Graphic132 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 203, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[58]);
        this.addTimedChild(instance1);
    });

    var Graphic114 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 203, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[59]);
        this.addTimedChild(instance1);
    });

    var Graphic115 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 203, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[60]);
        this.addTimedChild(instance1);
    });

    var Graphic116 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 203, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[61]);
        this.addTimedChild(instance1);
    });

    var Graphic108 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 91, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[64]);
        this.addTimedChild(instance1);
    });

    var Graphic110 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 36, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[64]);
        this.addTimedChild(instance1);
    });

    var Graphic109 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 203, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[64]);
        this.addTimedChild(instance1);
    });

    var Graphic117 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 203, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.TREX[63])
            .setRenderable(false);
        var instance4 = new Graphic109(MovieClip.SYNCHED)
            .setMask(instance2);
        var instance3 = new Graphic108(MovieClip.SYNCHED);
        var instance5 = new Graphics()
            .drawCommands(shapes.TREX[90]);
        var instance6 = new Graphic110(MovieClip.SYNCHED);
        var instance7 = new Graphics()
            .drawCommands(shapes.TREX[89]);
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[62]);
        this.addTimedChild(instance2)
            .addTimedChild(instance4, 0, 203, {
                "0": {
                    x: -1.05,
                    y: 101.55
                },
                "56": {
                    y: 96.55
                },
                "57": {
                    y: 81.55
                },
                "61": {
                    y: 83.75
                },
                "62": {
                    y: 90.45
                },
                "63": {
                    y: 101.55
                },
                "89": {
                    y: 96.55
                },
                "90": {
                    y: 90.45
                },
                "91": {
                    x: 1.25,
                    y: 64.8
                },
                "167": {
                    x: -1.05,
                    y: 90.45
                },
                "168": {
                    y: 96.55
                },
                "169": {
                    y: 101.55
                },
                "172": {
                    y: 81.55
                },
                "182": {
                    y: 83.75
                },
                "183": {
                    y: 90.45
                },
                "184": {
                    y: 101.55
                },
                "190": {
                    y: 96.55
                },
                "191": {
                    y: 81.55
                },
                "196": {
                    y: 90.45
                },
                "197": {
                    y: 101.55
                }
            })
            .addTimedChild(instance3, 0, 91, {
                "0": {
                    x: -1.05,
                    y: -39.95
                },
                "56": {
                    y: -24.95
                },
                "57": {
                    y: 20.05
                },
                "61": {
                    y: 13.4
                },
                "62": {
                    y: -6.6
                },
                "63": {
                    y: -39.95
                },
                "89": {
                    y: -24.95
                },
                "90": {
                    y: -6.6
                }
            })
            .addTimedChild(instance5, 91, 76)
            .addTimedChild(instance6, 167, 36, {
                "167": {
                    x: -1.05,
                    y: -6.6
                },
                "168": {
                    y: -24.95
                },
                "169": {
                    y: -39.95
                },
                "172": {
                    y: 20.05
                },
                "182": {
                    y: 13.4
                },
                "183": {
                    y: -6.6
                },
                "184": {
                    y: -39.95
                },
                "190": {
                    y: -24.95
                },
                "191": {
                    y: 20.05
                },
                "196": {
                    y: -6.6
                },
                "197": {
                    y: -39.95
                }
            })
            .addTimedChild(instance7, 172, 10)
            .addTimedChild(instance1);
    });

    var Graphic111 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 91, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[64]);
        this.addTimedChild(instance1);
    });

    var Graphic113 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 36, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[64]);
        this.addTimedChild(instance1);
    });

    var Graphic112 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 203, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[64]);
        this.addTimedChild(instance1);
    });

    var Graphic118 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 203, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.TREX[63])
            .setRenderable(false);
        var instance4 = new Graphic112(MovieClip.SYNCHED)
            .setMask(instance2);
        var instance3 = new Graphic111(MovieClip.SYNCHED);
        var instance5 = new Graphics()
            .drawCommands(shapes.TREX[90]);
        var instance6 = new Graphic113(MovieClip.SYNCHED);
        var instance7 = new Graphics()
            .drawCommands(shapes.TREX[89]);
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[62]);
        this.addTimedChild(instance2)
            .addTimedChild(instance4, 0, 203, {
                "0": {
                    x: -1.05,
                    y: 101.55
                },
                "56": {
                    y: 96.55
                },
                "57": {
                    y: 81.55
                },
                "61": {
                    y: 83.75
                },
                "62": {
                    y: 90.45
                },
                "63": {
                    y: 101.55
                },
                "89": {
                    y: 96.55
                },
                "90": {
                    y: 90.45
                },
                "91": {
                    x: 1.25,
                    y: 64.8
                },
                "167": {
                    x: -1.05,
                    y: 90.45
                },
                "168": {
                    y: 96.55
                },
                "169": {
                    y: 101.55
                },
                "172": {
                    y: 81.55
                },
                "182": {
                    y: 83.75
                },
                "183": {
                    y: 90.45
                },
                "184": {
                    y: 101.55
                },
                "190": {
                    y: 96.55
                },
                "191": {
                    y: 81.55
                },
                "196": {
                    y: 90.45
                },
                "197": {
                    y: 101.55
                }
            })
            .addTimedChild(instance3, 0, 91, {
                "0": {
                    x: -1.05,
                    y: -39.95
                },
                "56": {
                    y: -24.95
                },
                "57": {
                    y: 20.05
                },
                "61": {
                    y: 13.4
                },
                "62": {
                    y: -6.6
                },
                "63": {
                    y: -39.95
                },
                "89": {
                    y: -24.95
                },
                "90": {
                    y: -6.6
                }
            })
            .addTimedChild(instance5, 91, 76)
            .addTimedChild(instance6, 167, 36, {
                "167": {
                    x: -1.05,
                    y: -6.6
                },
                "168": {
                    y: -24.95
                },
                "169": {
                    y: -39.95
                },
                "172": {
                    y: 20.05
                },
                "182": {
                    y: 13.4
                },
                "183": {
                    y: -6.6
                },
                "184": {
                    y: -39.95
                },
                "190": {
                    y: -24.95
                },
                "191": {
                    y: 20.05
                },
                "196": {
                    y: -6.6
                },
                "197": {
                    y: -39.95
                }
            })
            .addTimedChild(instance7, 172, 10)
            .addTimedChild(instance1);
    });

    var Graphic119 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 203, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[63]);
        this.addTimedChild(instance1);
    });

    var Graphic120 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 203, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[91]);
        var instance2 = new Graphics()
            .drawCommands(shapes.TREX[63]);
        var instance3 = new Graphics()
            .drawCommands(shapes.TREX[91]);
        var instance4 = new Graphics()
            .drawCommands(shapes.TREX[65]);
        this.addTimedChild(instance1, 0, 61)
            .addTimedChild(instance2, 61, 117)
            .addTimedChild(instance3, 178, 18)
            .addTimedChild(instance4, 196, 7);
    });

    var Graphic121 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 203, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[63]);
        this.addTimedChild(instance1);
    });

    var Graphic122 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 203, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[91]);
        var instance2 = new Graphics()
            .drawCommands(shapes.TREX[63]);
        var instance3 = new Graphics()
            .drawCommands(shapes.TREX[91]);
        var instance4 = new Graphics()
            .drawCommands(shapes.TREX[65]);
        this.addTimedChild(instance1, 0, 61)
            .addTimedChild(instance2, 61, 117)
            .addTimedChild(instance3, 178, 18)
            .addTimedChild(instance4, 196, 7);
    });

    var Graphic123 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 203, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[63]);
        this.addTimedChild(instance1);
    });

    var Graphic124 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 203, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[63]);
        this.addTimedChild(instance1);
    });

    var Graphic125 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 203, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[66]);
        this.addTimedChild(instance1);
    });

    var Graphic126 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 203, loop: false });
        var instance3 = new Graphics()
            .drawCommands(shapes.TREX[98]);
        var instance2 = new Graphics()
            .drawCommands(shapes.TREX[96]);
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[92]);
        var instance5 = new Graphics()
            .drawCommands(shapes.TREX[97]);
        var instance4 = new Graphics()
            .drawCommands(shapes.TREX[93]);
        var instance6 = new Graphics()
            .drawCommands(shapes.TREX[94]);
        var instance7 = new Graphics()
            .drawCommands(shapes.TREX[93]);
        var instance8 = new Graphics()
            .drawCommands(shapes.TREX[95]);
        var instance11 = new Graphics()
            .drawCommands(shapes.TREX[98]);
        var instance10 = new Graphics()
            .drawCommands(shapes.TREX[96]);
        var instance9 = new Graphics()
            .drawCommands(shapes.TREX[92]);
        this.addTimedChild(instance3, 0, 61)
            .addTimedChild(instance2, 0, 61)
            .addTimedChild(instance1, 0, 61)
            .addTimedChild(instance5, 61, 112, {
                "61": {
                    x: 0,
                    y: 0,
                    sx: 1,
                    sy: 1
                },
                "91": {
                    x: -1.45,
                    y: 7.15,
                    sx: 0.998,
                    sy: 0.995
                },
                "167": {
                    x: 0,
                    y: 0,
                    sx: 1,
                    sy: 1
                }
            })
            .addTimedChild(instance4, 61, 30)
            .addTimedChild(instance6, 91, 76)
            .addTimedChild(instance7, 167, 6)
            .addTimedChild(instance8, 173, 23)
            .addTimedChild(instance11, 196, 7)
            .addTimedChild(instance10, 196, 7)
            .addTimedChild(instance9, 196, 7);
    });

    var Graphic127 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 203, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[71]);
        this.addTimedChild(instance1);
    });

    var Graphic128 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 203, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[72]);
        this.addTimedChild(instance1);
    });

    var Graphic133 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 203, loop: false });
        var instance6 = new Graphic119(MovieClip.SYNCHED)
            .setRenderable(false)
            .setTransform(68.8, -81.05, 1, 1, 0, 0, 3.142)
            .setAlpha(0.01);
        var instance8 = new Graphic121(MovieClip.SYNCHED)
            .setRenderable(false)
            .setTransform(-7.15, -81.05)
            .setAlpha(0.01);
        var instance15 = new Graphic128(MovieClip.SYNCHED)
            .setTransform(7.1, 51.2);
        var instance14 = new Graphic127(MovieClip.SYNCHED)
            .setTransform(66.85, 0.15);
        var instance13 = new Graphic126(MovieClip.SYNCHED)
            .setTransform(-16.8, -41.5);
        var instance12 = new Graphic125(MovieClip.SYNCHED)
            .setTransform(-38.05, -157.95, 1, 1, -0.017);
        var instance11 = new Graphic124(MovieClip.SYNCHED)
            .setTransform(-7.15, -81.05);
        var instance10 = new Graphic123(MovieClip.SYNCHED)
            .setTransform(68.8, -81.05, 1, 1, 0, 0, 3.142);
        var instance9 = new Graphic122(MovieClip.SYNCHED)
            .setMask(instance8);
        var instance7 = new Graphic120(MovieClip.SYNCHED)
            .setMask(instance6);
        var instance5 = new Graphic118(MovieClip.SYNCHED)
            .setTransform(-7.15, -81.05);
        var instance4 = new Graphic117(MovieClip.SYNCHED)
            .setTransform(68.8, -81.05, 1, 1, 0, 0, 3.142);
        var instance3 = new Graphic116(MovieClip.SYNCHED)
            .setTransform(30.3, -90.15);
        var instance2 = new Graphic115(MovieClip.SYNCHED)
            .setTransform(-117.9, -166.25);
        var instance1 = new Graphic114(MovieClip.SYNCHED)
            .setTransform(-64.7, -36.2);
        this.addTimedChild(instance6)
            .addTimedChild(instance8)
            .addTimedChild(instance15)
            .addTimedChild(instance14)
            .addTimedChild(instance13)
            .addTimedChild(instance12)
            .addTimedChild(instance11)
            .addTimedChild(instance10)
            .addTimedChild(instance9, 0, 203, {
                "0": {
                    x: 11.15,
                    y: -92.15,
                    sx: 0.589,
                    sy: 0.589,
                    c: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                "23": {
                    x: 10.5,
                    y: -92.75
                },
                "24": {
                    x: 8.7,
                    y: -94.2
                },
                "25": {
                    x: 6.7,
                    y: -95.85
                },
                "26": {
                    x: 5.1,
                    y: -97.15
                },
                "27": {
                    x: 4.05,
                    y: -98
                },
                "28": {
                    x: 3.5,
                    y: -98.45
                },
                "29": {
                    x: 3.35,
                    y: -98.55
                },
                "61": {
                    x: 5.2,
                    y: -73.45
                },
                "167": {
                    x: 4.1,
                    y: -86.15
                },
                "178": {
                    x: 3.15,
                    y: -69.65
                },
                "196": {
                    x: -20.4,
                    y: -82.9
                },
                "197": {
                    x: -20.9,
                    y: -94.15
                }
            })
            .addTimedChild(instance7, 0, 203, {
                "0": {
                    x: 86.85,
                    y: -94,
                    sx: 0.589,
                    sy: 0.589,
                    ky: 3.142,
                    c: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                "23": {
                    x: 86.2,
                    y: -94.6
                },
                "24": {
                    x: 84.4,
                    y: -96.05
                },
                "25": {
                    x: 82.4,
                    y: -97.7
                },
                "26": {
                    x: 80.8,
                    y: -99
                },
                "27": {
                    x: 79.75,
                    y: -99.85
                },
                "28": {
                    x: 79.2,
                    y: -100.3
                },
                "29": {
                    x: 79.05,
                    y: -100.4
                },
                "61": {
                    x: 80.9,
                    y: -75.3
                },
                "167": {
                    x: 79.8,
                    y: -88
                },
                "178": {
                    x: 78.85,
                    y: -71.5
                },
                "196": {
                    x: 55.3,
                    y: -84.75
                },
                "197": {
                    x: 54.8,
                    y: -96
                }
            })
            .addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic134 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 203, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[73]);
        this.addTimedChild(instance1);
    });

    var Graphic135 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 203, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[75]);
        this.addTimedChild(instance1);
    });

    var Graphic136 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 203, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[79]);
        var instance2 = new Graphics()
            .drawCommands(shapes.TREX[78]);
        this.addTimedChild(instance1, 0, 164)
            .addTimedChild(instance2, 164, 39);
    });

    var Graphic137 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 203, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[75]);
        var instance2 = new Graphics()
            .drawCommands(shapes.TREX[74]);
        var instance3 = new Graphics()
            .drawCommands(shapes.TREX[75]);
        this.addTimedChild(instance1, 0, 164)
            .addTimedChild(instance2, 164, 9)
            .addTimedChild(instance3, 173, 30);
    });

    var Graphic138 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 203, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[79]);
        var instance2 = new Graphics()
            .drawCommands(shapes.TREX[76]);
        var instance3 = new Graphics()
            .drawCommands(shapes.TREX[79]);
        var instance4 = new Graphics()
            .drawCommands(shapes.TREX[76]);
        var instance5 = new Graphics()
            .drawCommands(shapes.TREX[78]);
        var instance6 = new Graphics()
            .drawCommands(shapes.TREX[76]);
        var instance7 = new Graphics()
            .drawCommands(shapes.TREX[78]);
        var instance8 = new Graphics()
            .drawCommands(shapes.TREX[79]);
        this.addTimedChild(instance1, 0, 174)
            .addTimedChild(instance2, 174, 2)
            .addTimedChild(instance3, 176, 1)
            .addTimedChild(instance4, 177, 15)
            .addTimedChild(instance5, 192, 4)
            .addTimedChild(instance6, 196, 4)
            .addTimedChild(instance7, 200, 2)
            .addTimedChild(instance8, 202, 1);
    });

    var Graphic139 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 94, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[55]);
        this.addTimedChild(instance1);
    });

    var Graphic142 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 30, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[55]);
        this.addTimedChild(instance1);
    });

    var Graphic140 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 203, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[56]);
        this.addTimedChild(instance1);
    });

    var Graphic141 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 203, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[57]);
        var instance2 = new Graphics()
            .drawCommands(shapes.TREX[99]);
        var instance3 = new Graphics()
            .drawCommands(shapes.TREX[100]);
        var instance4 = new Graphics()
            .drawCommands(shapes.TREX[101]);
        var instance5 = new Graphics()
            .drawCommands(shapes.TREX[102]);
        var instance6 = new Graphics()
            .drawCommands(shapes.TREX[103]);
        var instance7 = new Graphics()
            .drawCommands(shapes.TREX[104]);
        var instance8 = new Graphics()
            .drawCommands(shapes.TREX[57]);
        var instance9 = new Graphics()
            .drawCommands(shapes.TREX[88]);
        this.addTimedChild(instance1, 0, 88)
            .addTimedChild(instance2, 88, 1, {
                "88": {
                    sx: 0.997
                }
            })
            .addTimedChild(instance3, 89, 1)
            .addTimedChild(instance4, 90, 1, {
                "90": {
                    sx: 1.003
                }
            })
            .addTimedChild(instance5, 91, 1)
            .addTimedChild(instance6, 92, 1)
            .addTimedChild(instance7, 93, 1)
            .addTimedChild(instance8, 94, 80)
            .addTimedChild(instance9, 174, 29);
    });

    var Graphic143 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 17, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[81]);
        var instance2 = new Graphics()
            .drawCommands(shapes.TREX[82]);
        var instance3 = new Graphics()
            .drawCommands(shapes.TREX[83]);
        var instance4 = new Graphics()
            .drawCommands(shapes.TREX[84]);
        var instance5 = new Graphics()
            .drawCommands(shapes.TREX[85]);
        var instance6 = new Graphics()
            .drawCommands(shapes.TREX[86]);
        var instance7 = new Graphics()
            .drawCommands(shapes.TREX[87]);
        this.addTimedChild(instance1, 0, 2)
            .addTimedChild(instance2, 2, 2)
            .addTimedChild(instance3, 4, 2)
            .addTimedChild(instance4, 6, 2)
            .addTimedChild(instance5, 8, 2)
            .addTimedChild(instance6, 10, 2)
            .addTimedChild(instance7, 12, 2);
    });

    var Graphic144 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 17, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[80]);
        var instance2 = new Graphics()
            .drawCommands(shapes.TREX[81]);
        var instance3 = new Graphics()
            .drawCommands(shapes.TREX[82]);
        var instance4 = new Graphics()
            .drawCommands(shapes.TREX[83]);
        var instance5 = new Graphics()
            .drawCommands(shapes.TREX[84]);
        var instance6 = new Graphics()
            .drawCommands(shapes.TREX[85]);
        var instance7 = new Graphics()
            .drawCommands(shapes.TREX[86]);
        var instance8 = new Graphics()
            .drawCommands(shapes.TREX[87]);
        this.addTimedChild(instance1, 0, 2)
            .addTimedChild(instance2, 2, 2)
            .addTimedChild(instance3, 4, 2)
            .addTimedChild(instance4, 6, 2)
            .addTimedChild(instance5, 8, 2)
            .addTimedChild(instance6, 10, 2)
            .addTimedChild(instance7, 12, 2)
            .addTimedChild(instance8, 14, 2);
    });

    var Graphic147 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 15, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[80]);
        var instance2 = new Graphics()
            .drawCommands(shapes.TREX[81]);
        var instance3 = new Graphics()
            .drawCommands(shapes.TREX[82]);
        var instance4 = new Graphics()
            .drawCommands(shapes.TREX[83]);
        var instance5 = new Graphics()
            .drawCommands(shapes.TREX[84]);
        var instance6 = new Graphics()
            .drawCommands(shapes.TREX[85]);
        var instance7 = new Graphics()
            .drawCommands(shapes.TREX[86]);
        var instance8 = new Graphics()
            .drawCommands(shapes.TREX[87]);
        this.addTimedChild(instance1, 0, 2)
            .addTimedChild(instance2, 2, 2)
            .addTimedChild(instance3, 4, 2)
            .addTimedChild(instance4, 6, 2)
            .addTimedChild(instance5, 8, 2)
            .addTimedChild(instance6, 10, 2)
            .addTimedChild(instance7, 12, 2)
            .addTimedChild(instance8, 14, 1);
    });

    var Graphic168 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 267, loop: false });
        var instance16 = new Graphic144(MovieClip.SYNCHED);
        var instance15 = new Graphic143(MovieClip.SYNCHED);
        var instance13 = new Graphic141(MovieClip.SYNCHED);
        var instance12 = new Graphic140(MovieClip.SYNCHED);
        var instance11 = new Graphic139(MovieClip.SYNCHED);
        var instance14 = new Graphic142(MovieClip.SYNCHED);
        var instance10 = new Graphic138(MovieClip.SYNCHED);
        var instance9 = new Graphic137(MovieClip.SYNCHED);
        var instance8 = new Graphic136(MovieClip.SYNCHED);
        var instance7 = new Graphic135(MovieClip.SYNCHED);
        var instance6 = new Graphic134(MovieClip.SYNCHED);
        var instance5 = new Graphic133(MovieClip.SYNCHED);
        var instance4 = new Graphic132(MovieClip.SYNCHED);
        var instance3 = new Graphic131(MovieClip.SYNCHED);
        var instance2 = new Graphic130(MovieClip.SYNCHED);
        var instance1 = new Graphic129(MovieClip.SYNCHED);
        var instance19 = new Graphic147(MovieClip.SYNCHED);
        var instance18 = new Graphic146(MovieClip.SYNCHED);
        var instance17 = new Graphic145(MovieClip.SYNCHED);
        this.addTimedChild(instance16, 177, 17, {
                "177": {
                    x: 2243.1,
                    y: -551.45,
                    sx: 0.339,
                    sy: 0.339,
                    kx: -0.59,
                    ky: -2.552
                }
            })
            .addTimedChild(instance15, 177, 17, {
                "177": {
                    x: 2162.95,
                    y: -562.75,
                    sx: 0.254,
                    sy: 0.254,
                    r: -0.799
                }
            })
            .addTimedChild(instance13, 0, 203, {
                "0": {
                    x: 2382.4,
                    y: -794.2,
                    sx: 1,
                    sy: 1,
                    kx: 0,
                    ky: 0,
                    r: -0.267
                },
                "21": {
                    x: 2381.824,
                    y: -794.386,
                    r: -0.265
                },
                "22": {
                    x: 2380.152,
                    y: -794.832,
                    r: -0.26
                },
                "23": {
                    x: 2377.696,
                    y: -795.416,
                    r: -0.254
                },
                "24": {
                    x: 2375.437,
                    y: -795.995,
                    r: -0.247
                },
                "25": {
                    x: 2373.644,
                    y: -796.506,
                    r: -0.242
                },
                "26": {
                    x: 2372.542,
                    y: -796.736,
                    r: -0.238
                },
                "27": {
                    x: 2371.913,
                    y: -796.91,
                    r: -0.237
                },
                "28": {
                    x: 2371.75,
                    y: -796.95,
                    r: -0.236
                },
                "59": {
                    x: 2371.821,
                    y: -796.966,
                    r: -0.234
                },
                "60": {
                    x: 2371.844,
                    y: -796.958,
                    r: -0.227
                },
                "61": {
                    x: 2371.947,
                    y: -796.925,
                    r: -0.22
                },
                "62": {
                    x: 2372.044,
                    y: -796.854,
                    r: -0.215
                },
                "63": {
                    x: 2372.064,
                    y: -796.864,
                    r: -0.213
                },
                "64": {
                    x: 2372.05,
                    y: -796.8,
                    r: -0.212
                },
                "88": {
                    x: 2375,
                    y: -793.35,
                    r: -0.277
                },
                "89": {
                    x: 2388.731,
                    y: -809.757,
                    sy: 1.021,
                    r: -0.758
                },
                "90": {
                    x: 2405.016,
                    y: -829.271,
                    sy: 1.046,
                    r: -1.331
                },
                "91": {
                    x: 2418.05,
                    y: -844.831,
                    sy: 1.066,
                    r: -1.789
                },
                "92": {
                    x: 2427.32,
                    y: -855.872,
                    sy: 1.08,
                    r: -2.112
                },
                "93": {
                    x: 2432.714,
                    y: -862.29,
                    sy: 1.088,
                    r: -2.301
                },
                "94": {
                    x: 2434.45,
                    y: -864.4,
                    sy: 1.091,
                    r: -2.363
                },
                "95": {
                    x: 2434.869,
                    y: -862.512,
                    r: -2.329
                },
                "96": {
                    x: 2436.118,
                    y: -855.399,
                    r: -2.204
                },
                "97": {
                    x: 2437.361,
                    y: -848.382,
                    r: -2.079
                },
                "98": {
                    x: 2437.65,
                    y: -846.45,
                    r: -2.046
                },
                "99": {
                    x: 2437.522,
                    y: -847.547,
                    r: -2.066
                },
                "100": {
                    x: 2436.723,
                    y: -851.935,
                    r: -2.144
                },
                "101": {
                    x: 2435.477,
                    y: -858.831,
                    r: -2.266
                },
                "102": {
                    x: 2434.714,
                    y: -863.207,
                    r: -2.343
                },
                "103": {
                    x: 2434.45,
                    y: -864.4,
                    r: -2.363
                },
                "104": {
                    x: 2434.869,
                    y: -862.512,
                    r: -2.329
                },
                "105": {
                    x: 2436.118,
                    y: -855.399,
                    r: -2.204
                },
                "106": {
                    x: 2437.361,
                    y: -848.382,
                    r: -2.079
                },
                "107": {
                    x: 2437.65,
                    y: -846.45,
                    r: -2.046
                },
                "108": {
                    x: 2437.522,
                    y: -847.547,
                    r: -2.066
                },
                "109": {
                    x: 2436.723,
                    y: -851.935,
                    r: -2.144
                },
                "110": {
                    x: 2435.477,
                    y: -858.831,
                    r: -2.266
                },
                "111": {
                    x: 2434.714,
                    y: -863.207,
                    r: -2.343
                },
                "112": {
                    x: 2434.45,
                    y: -864.4,
                    r: -2.363
                },
                "113": {
                    x: 2434.869,
                    y: -862.512,
                    r: -2.329
                },
                "114": {
                    x: 2436.118,
                    y: -855.399,
                    r: -2.204
                },
                "115": {
                    x: 2437.361,
                    y: -848.382,
                    r: -2.079
                },
                "116": {
                    x: 2437.65,
                    y: -846.45,
                    r: -2.046
                },
                "117": {
                    x: 2437.522,
                    y: -847.547,
                    r: -2.066
                },
                "118": {
                    x: 2436.723,
                    y: -851.935,
                    r: -2.144
                },
                "119": {
                    x: 2435.477,
                    y: -858.831,
                    r: -2.266
                },
                "120": {
                    x: 2434.714,
                    y: -863.207,
                    r: -2.343
                },
                "121": {
                    x: 2434.45,
                    y: -864.4,
                    r: -2.363
                },
                "122": {
                    x: 2434.869,
                    y: -862.512,
                    r: -2.329
                },
                "123": {
                    x: 2436.118,
                    y: -855.399,
                    r: -2.204
                },
                "124": {
                    x: 2437.361,
                    y: -848.382,
                    r: -2.079
                },
                "125": {
                    x: 2437.65,
                    y: -846.45,
                    r: -2.046
                },
                "126": {
                    x: 2437.522,
                    y: -847.547,
                    r: -2.066
                },
                "127": {
                    x: 2436.723,
                    y: -851.935,
                    r: -2.144
                },
                "128": {
                    x: 2435.477,
                    y: -858.831,
                    r: -2.266
                },
                "129": {
                    x: 2434.714,
                    y: -863.207,
                    r: -2.343
                },
                "130": {
                    x: 2434.45,
                    y: -864.4,
                    r: -2.363
                },
                "131": {
                    x: 2434.869,
                    y: -862.512,
                    r: -2.329
                },
                "132": {
                    x: 2436.118,
                    y: -855.399,
                    r: -2.204
                },
                "133": {
                    x: 2437.361,
                    y: -848.382,
                    r: -2.079
                },
                "134": {
                    x: 2437.65,
                    y: -846.45,
                    r: -2.046
                },
                "135": {
                    x: 2437.522,
                    y: -847.547,
                    r: -2.066
                },
                "136": {
                    x: 2436.723,
                    y: -851.935,
                    r: -2.144
                },
                "137": {
                    x: 2435.477,
                    y: -858.831,
                    r: -2.266
                },
                "138": {
                    x: 2434.714,
                    y: -863.207,
                    r: -2.343
                },
                "139": {
                    x: 2434.45,
                    y: -864.4,
                    r: -2.363
                },
                "140": {
                    x: 2434.869,
                    y: -862.512,
                    r: -2.329
                },
                "141": {
                    x: 2436.118,
                    y: -855.399,
                    r: -2.204
                },
                "142": {
                    x: 2437.361,
                    y: -848.382,
                    r: -2.079
                },
                "143": {
                    x: 2437.65,
                    y: -846.45,
                    r: -2.046
                },
                "144": {
                    x: 2437.522,
                    y: -847.547,
                    r: -2.066
                },
                "145": {
                    x: 2436.723,
                    y: -851.935,
                    r: -2.144
                },
                "146": {
                    x: 2435.477,
                    y: -858.831,
                    r: -2.266
                },
                "147": {
                    x: 2434.714,
                    y: -863.207,
                    r: -2.343
                },
                "148": {
                    x: 2434.45,
                    y: -864.4,
                    r: -2.363
                },
                "149": {
                    x: 2434.869,
                    y: -862.512,
                    r: -2.329
                },
                "150": {
                    x: 2436.118,
                    y: -855.399,
                    r: -2.204
                },
                "151": {
                    x: 2437.361,
                    y: -848.382,
                    r: -2.079
                },
                "152": {
                    x: 2437.65,
                    y: -846.45,
                    r: -2.046
                },
                "153": {
                    x: 2437.522,
                    y: -847.547,
                    r: -2.066
                },
                "154": {
                    x: 2436.723,
                    y: -851.935,
                    r: -2.144
                },
                "155": {
                    x: 2435.477,
                    y: -858.831,
                    r: -2.266
                },
                "156": {
                    x: 2434.714,
                    y: -863.207,
                    r: -2.343
                },
                "157": {
                    x: 2434.45,
                    y: -864.4,
                    r: -2.363
                },
                "158": {
                    x: 2434.869,
                    y: -862.512,
                    r: -2.329
                },
                "159": {
                    x: 2436.118,
                    y: -855.399,
                    r: -2.204
                },
                "160": {
                    x: 2437.361,
                    y: -848.382,
                    r: -2.079
                },
                "161": {
                    x: 2437.65,
                    y: -846.45,
                    r: -2.046
                },
                "162": {
                    x: 2439.185,
                    y: -842.331,
                    r: -1.994
                },
                "163": {
                    x: 2440.6,
                    y: -838.25,
                    r: -1.942
                },
                "164": {
                    x: 2467.25,
                    y: -857.35,
                    sx: 1.004,
                    sy: 1.397,
                    kx: 2.133,
                    ky: -2.152,
                    r: 0
                },
                "165": {
                    x: 2483.077,
                    y: -863.496,
                    sx: 1.002,
                    sy: 1.547,
                    kx: 2.146,
                    ky: -2.156
                },
                "166": {
                    x: 2492.884,
                    y: -867.384,
                    sx: 1.001,
                    sy: 1.64,
                    kx: 2.154,
                    ky: -2.158
                },
                "167": {
                    x: 2498.187,
                    y: -869.461,
                    sx: 1,
                    sy: 1.691,
                    kx: 2.158,
                    ky: -2.159
                },
                "168": {
                    x: 2499.85,
                    y: -870.15,
                    sy: 1.707,
                    kx: 0,
                    ky: 0,
                    r: -2.16
                },
                "171": {
                    x: 2499.65,
                    y: -871.8,
                    sx: 0.994,
                    sy: 1.735,
                    kx: 2.202,
                    ky: -2.205,
                    r: 0
                },
                "172": {
                    x: 2493.95,
                    y: -869.25,
                    sx: 0.999,
                    sy: 1.471,
                    kx: 0,
                    ky: 0,
                    r: -2.179
                },
                "173": {
                    x: 2425.1,
                    y: -887.5,
                    sx: 1,
                    sy: 1.269,
                    kx: 1.893,
                    ky: 1.249,
                    r: 0
                },
                "174": {
                    x: 2343.05,
                    y: -873.75,
                    sy: 1,
                    kx: 1.973,
                    ky: 1.169
                },
                "175": {
                    x: 2267.498,
                    y: -852.152,
                    kx: 2.394,
                    ky: 0.748
                },
                "176": {
                    x: 2229.95,
                    y: -841.45,
                    kx: 2.602,
                    ky: 0.539
                },
                "177": {
                    x: 2194.35,
                    y: -789.15,
                    kx: 2.518,
                    ky: 0.623
                },
                "178": {
                    x: 2179.024,
                    y: -762.507,
                    kx: 2.265,
                    ky: 0.877
                },
                "179": {
                    x: 2167.662,
                    y: -742.759,
                    kx: 2.078,
                    ky: 1.064
                },
                "180": {
                    x: 2159.92,
                    y: -729.345,
                    kx: 1.95,
                    ky: 1.192
                },
                "181": {
                    x: 2154.819,
                    y: -720.486,
                    kx: 1.866,
                    ky: 1.276
                },
                "182": {
                    x: 2151.623,
                    y: -714.985,
                    kx: 1.813,
                    ky: 1.328
                },
                "183": {
                    x: 2149.952,
                    y: -712.098,
                    kx: 1.786,
                    ky: 1.356
                },
                "184": {
                    x: 2149.45,
                    y: -711.2,
                    kx: 1.777,
                    ky: 1.364
                },
                "191": {
                    x: 2150.85,
                    y: -756.75,
                    kx: 0,
                    ky: 0,
                    r: -2.234
                },
                "192": {
                    x: 2244.2,
                    y: -773.75,
                    r: -1.595
                },
                "193": {
                    x: 2328.684,
                    y: -760.713,
                    sy: 0.893,
                    r: -0.749
                },
                "194": {
                    x: 2340.4,
                    y: -758.8,
                    sy: 0.878,
                    r: -0.631
                },
                "195": {
                    x: 2350.85,
                    y: -758.05,
                    r: -0.906
                },
                "196": {
                    x: 2226.4,
                    y: -826.95,
                    sy: 1,
                    kx: -1.004,
                    ky: -2.138,
                    r: 0
                },
                "197": {
                    x: 2210.08,
                    y: -854.581,
                    kx: 4.656,
                    ky: -1.514
                },
                "198": {
                    x: 2199.04,
                    y: -873.276,
                    kx: 4.235,
                    ky: -1.093
                },
                "199": {
                    x: 2192.967,
                    y: -883.552,
                    kx: 4.004,
                    ky: -0.863
                },
                "200": {
                    x: 2191.1,
                    y: -886.65,
                    kx: 3.934,
                    ky: -0.793
                },
                "201": {
                    x: 2186.199,
                    y: -883.325,
                    kx: 3.926,
                    ky: -0.784
                },
                "202": {
                    x: 2174.65,
                    y: -875.8,
                    kx: 3.907,
                    ky: -0.765
                }
            })
            .addTimedChild(instance12, 0, 203, {
                "0": {
                    x: 2378.8,
                    y: -808.2,
                    sx: 1,
                    sy: 1,
                    kx: 0,
                    ky: 0,
                    r: -0.284
                },
                "21": {
                    x: 2378.27,
                    y: -808.416,
                    r: -0.282
                },
                "22": {
                    x: 2376.58,
                    y: -808.917,
                    r: -0.277
                },
                "23": {
                    x: 2374.285,
                    y: -809.513,
                    r: -0.27
                },
                "24": {
                    x: 2372.096,
                    y: -810.137,
                    r: -0.264
                },
                "25": {
                    x: 2370.423,
                    y: -810.641,
                    r: -0.258
                },
                "26": {
                    x: 2369.293,
                    y: -811.004,
                    r: -0.255
                },
                "27": {
                    x: 2368.716,
                    y: -811.135,
                    r: -0.253
                },
                "28": {
                    x: 2368.5,
                    y: -811.15
                },
                "59": {
                    x: 2368.556,
                    y: -811.174,
                    r: -0.25
                },
                "60": {
                    x: 2368.733,
                    y: -811.2,
                    r: -0.244
                },
                "61": {
                    x: 2368.886,
                    y: -811.212,
                    r: -0.237
                },
                "62": {
                    x: 2369.054,
                    y: -811.206,
                    r: -0.232
                },
                "63": {
                    x: 2369.175,
                    y: -811.188,
                    r: -0.229
                },
                "64": {
                    x: 2369.15,
                    y: -811.1,
                    r: -0.228
                },
                "88": {
                    x: 2371.15,
                    y: -807.4,
                    r: -0.293
                },
                "89": {
                    x: 2380.728,
                    y: -816.173,
                    r: -0.775
                },
                "90": {
                    x: 2392.068,
                    y: -826.41,
                    r: -1.348
                },
                "91": {
                    x: 2401.153,
                    y: -834.624,
                    r: -1.806
                },
                "92": {
                    x: 2407.564,
                    y: -840.511,
                    r: -2.129
                },
                "93": {
                    x: 2411.352,
                    y: -843.846,
                    r: -2.318
                },
                "94": {
                    x: 2412.65,
                    y: -845,
                    r: -2.38
                },
                "95": {
                    x: 2412.48,
                    y: -843.956,
                    r: -2.346
                },
                "96": {
                    x: 2411.791,
                    y: -839.9,
                    r: -2.221
                },
                "97": {
                    x: 2411.08,
                    y: -835.909,
                    r: -2.096
                },
                "98": {
                    x: 2410.9,
                    y: -834.85,
                    r: -2.062
                },
                "99": {
                    x: 2410.966,
                    y: -835.465,
                    r: -2.083
                },
                "100": {
                    x: 2411.442,
                    y: -837.916,
                    r: -2.161
                },
                "101": {
                    x: 2412.162,
                    y: -841.866,
                    r: -2.282
                },
                "102": {
                    x: 2412.603,
                    y: -844.264,
                    r: -2.359
                },
                "103": {
                    x: 2412.65,
                    y: -845,
                    r: -2.38
                },
                "104": {
                    x: 2412.48,
                    y: -843.956,
                    r: -2.346
                },
                "105": {
                    x: 2411.791,
                    y: -839.9,
                    r: -2.221
                },
                "106": {
                    x: 2411.08,
                    y: -835.909,
                    r: -2.096
                },
                "107": {
                    x: 2410.9,
                    y: -834.85,
                    r: -2.062
                },
                "108": {
                    x: 2410.966,
                    y: -835.465,
                    r: -2.083
                },
                "109": {
                    x: 2411.442,
                    y: -837.916,
                    r: -2.161
                },
                "110": {
                    x: 2412.162,
                    y: -841.866,
                    r: -2.282
                },
                "111": {
                    x: 2412.603,
                    y: -844.264,
                    r: -2.359
                },
                "112": {
                    x: 2412.65,
                    y: -845,
                    r: -2.38
                },
                "113": {
                    x: 2412.48,
                    y: -843.956,
                    r: -2.346
                },
                "114": {
                    x: 2411.791,
                    y: -839.9,
                    r: -2.221
                },
                "115": {
                    x: 2411.08,
                    y: -835.909,
                    r: -2.096
                },
                "116": {
                    x: 2410.9,
                    y: -834.85,
                    r: -2.062
                },
                "117": {
                    x: 2410.966,
                    y: -835.465,
                    r: -2.083
                },
                "118": {
                    x: 2411.442,
                    y: -837.916,
                    r: -2.161
                },
                "119": {
                    x: 2412.162,
                    y: -841.866,
                    r: -2.282
                },
                "120": {
                    x: 2412.603,
                    y: -844.264,
                    r: -2.359
                },
                "121": {
                    x: 2412.65,
                    y: -845,
                    r: -2.38
                },
                "122": {
                    x: 2412.48,
                    y: -843.956,
                    r: -2.346
                },
                "123": {
                    x: 2411.791,
                    y: -839.9,
                    r: -2.221
                },
                "124": {
                    x: 2411.08,
                    y: -835.909,
                    r: -2.096
                },
                "125": {
                    x: 2410.9,
                    y: -834.85,
                    r: -2.062
                },
                "126": {
                    x: 2410.966,
                    y: -835.465,
                    r: -2.083
                },
                "127": {
                    x: 2411.442,
                    y: -837.916,
                    r: -2.161
                },
                "128": {
                    x: 2412.162,
                    y: -841.866,
                    r: -2.282
                },
                "129": {
                    x: 2412.603,
                    y: -844.264,
                    r: -2.359
                },
                "130": {
                    x: 2412.65,
                    y: -845,
                    r: -2.38
                },
                "131": {
                    x: 2412.48,
                    y: -843.956,
                    r: -2.346
                },
                "132": {
                    x: 2411.791,
                    y: -839.9,
                    r: -2.221
                },
                "133": {
                    x: 2411.08,
                    y: -835.909,
                    r: -2.096
                },
                "134": {
                    x: 2410.9,
                    y: -834.85,
                    r: -2.062
                },
                "135": {
                    x: 2410.966,
                    y: -835.465,
                    r: -2.083
                },
                "136": {
                    x: 2411.442,
                    y: -837.916,
                    r: -2.161
                },
                "137": {
                    x: 2412.162,
                    y: -841.866,
                    r: -2.282
                },
                "138": {
                    x: 2412.603,
                    y: -844.264,
                    r: -2.359
                },
                "139": {
                    x: 2412.65,
                    y: -845,
                    r: -2.38
                },
                "140": {
                    x: 2412.48,
                    y: -843.956,
                    r: -2.346
                },
                "141": {
                    x: 2411.791,
                    y: -839.9,
                    r: -2.221
                },
                "142": {
                    x: 2411.08,
                    y: -835.909,
                    r: -2.096
                },
                "143": {
                    x: 2410.9,
                    y: -834.85,
                    r: -2.062
                },
                "144": {
                    x: 2410.966,
                    y: -835.465,
                    r: -2.083
                },
                "145": {
                    x: 2411.442,
                    y: -837.916,
                    r: -2.161
                },
                "146": {
                    x: 2412.162,
                    y: -841.866,
                    r: -2.282
                },
                "147": {
                    x: 2412.603,
                    y: -844.264,
                    r: -2.359
                },
                "148": {
                    x: 2412.65,
                    y: -845,
                    r: -2.38
                },
                "149": {
                    x: 2412.48,
                    y: -843.956,
                    r: -2.346
                },
                "150": {
                    x: 2411.791,
                    y: -839.9,
                    r: -2.221
                },
                "151": {
                    x: 2411.08,
                    y: -835.909,
                    r: -2.096
                },
                "152": {
                    x: 2410.9,
                    y: -834.85,
                    r: -2.062
                },
                "153": {
                    x: 2410.966,
                    y: -835.465,
                    r: -2.083
                },
                "154": {
                    x: 2411.442,
                    y: -837.916,
                    r: -2.161
                },
                "155": {
                    x: 2412.162,
                    y: -841.866,
                    r: -2.282
                },
                "156": {
                    x: 2412.603,
                    y: -844.264,
                    r: -2.359
                },
                "157": {
                    x: 2412.65,
                    y: -845,
                    r: -2.38
                },
                "158": {
                    x: 2412.48,
                    y: -843.956,
                    r: -2.346
                },
                "159": {
                    x: 2411.791,
                    y: -839.9,
                    r: -2.221
                },
                "160": {
                    x: 2411.08,
                    y: -835.909,
                    r: -2.096
                },
                "161": {
                    x: 2410.9,
                    y: -834.85,
                    r: -2.062
                },
                "162": {
                    x: 2411.822,
                    y: -832.117,
                    r: -2.011
                },
                "163": {
                    x: 2412.75,
                    y: -829.5,
                    r: -1.959
                },
                "164": {
                    x: 2441.3,
                    y: -843.3,
                    sx: 1.004,
                    sy: 1.018,
                    kx: 2.15,
                    ky: -2.17,
                    r: 0
                },
                "165": {
                    x: 2457.48,
                    y: -849.24,
                    sx: 1.002,
                    sy: 1.009,
                    kx: 2.163,
                    ky: -2.173
                },
                "166": {
                    x: 2467.489,
                    y: -852.918,
                    sx: 1.001,
                    sy: 1.004,
                    kx: 2.171,
                    ky: -2.175
                },
                "167": {
                    x: 2472.911,
                    y: -854.985,
                    sx: 1,
                    sy: 1.001,
                    kx: 2.175,
                    ky: -2.176
                },
                "168": {
                    x: 2474.6,
                    y: -855.6,
                    sy: 1,
                    kx: 0,
                    ky: 0,
                    r: -2.176
                },
                "171": {
                    y: -855.85,
                    sx: 0.994,
                    sy: 1.016,
                    kx: 2.219,
                    ky: -2.222,
                    r: 0
                },
                "172": {
                    x: 2472.85,
                    y: -855.9,
                    sx: 0.998,
                    sy: 0.998,
                    kx: 0,
                    ky: 0,
                    r: -2.174
                },
                "173": {
                    x: 2400.75,
                    y: -874.8,
                    sx: 1,
                    sy: 1,
                    r: -1.879
                },
                "174": {
                    x: 2320.6,
                    y: -852.4,
                    r: -2.39
                },
                "175": {
                    x: 2256.294,
                    y: -824.786,
                    r: -2.811
                },
                "176": {
                    x: 2224.4,
                    y: -811.1,
                    r: -3.02
                },
                "177": {
                    x: 2186.2,
                    y: -759.35,
                    r: -2.936
                },
                "178": {
                    x: 2164.758,
                    y: -737.256,
                    r: -2.682
                },
                "179": {
                    x: 2148.916,
                    y: -720.891,
                    r: -2.495
                },
                "180": {
                    x: 2138.044,
                    y: -709.73,
                    r: -2.367
                },
                "181": {
                    x: 2130.884,
                    y: -702.396,
                    r: -2.283
                },
                "182": {
                    x: 2126.456,
                    y: -697.818,
                    r: -2.231
                },
                "183": {
                    x: 2124.135,
                    y: -695.439,
                    r: -2.203
                },
                "184": {
                    x: 2123.35,
                    y: -694.7,
                    r: -2.195
                },
                "191": {
                    x: 2121.4,
                    y: -747.45,
                    kx: 1.817,
                    ky: 1.325,
                    r: 0
                },
                "192": {
                    x: 2215.05,
                    y: -783.85,
                    kx: 1.177,
                    ky: 1.964
                },
                "193": {
                    x: 2317.784,
                    y: -787.935,
                    kx: 0.331,
                    ky: 2.81
                },
                "194": {
                    x: 2332.05,
                    y: -788.55,
                    kx: 0.214,
                    ky: 2.928
                },
                "195": {
                    x: 2334.75,
                    y: -784.35,
                    kx: 0.488,
                    ky: 2.653
                },
                "196": {
                    x: 2238.45,
                    y: -834.8,
                    kx: -0.764,
                    ky: -2.378
                },
                "197": {
                    x: 2221.252,
                    y: -854.211,
                    kx: -1.388,
                    ky: -1.754
                },
                "198": {
                    x: 2209.671,
                    y: -867.256,
                    kx: 4.475,
                    ky: -1.333
                },
                "199": {
                    x: 2203.411,
                    y: -874.412,
                    kx: 4.244,
                    ky: -1.103
                },
                "200": {
                    x: 2201.45,
                    y: -876.65,
                    kx: 4.174,
                    ky: -1.032
                },
                "201": {
                    x: 2196.382,
                    y: -873.327,
                    kx: 4.166,
                    ky: -1.024
                },
                "202": {
                    x: 2184.75,
                    y: -865.5,
                    kx: 4.147,
                    ky: -1.005
                }
            })
            .addTimedChild(instance11, 0, 94, {
                "0": {
                    x: 2398.45,
                    y: -726.35,
                    sx: 1,
                    sy: 1,
                    r: -0.333
                },
                "21": {
                    x: 2397.751,
                    y: -726.498,
                    r: -0.332
                },
                "22": {
                    x: 2395.769,
                    y: -726.869,
                    r: -0.327
                },
                "23": {
                    x: 2392.946,
                    y: -727.371,
                    r: -0.32
                },
                "24": {
                    x: 2390.183,
                    y: -727.901,
                    r: -0.313
                },
                "25": {
                    x: 2388.105,
                    y: -728.277,
                    r: -0.308
                },
                "26": {
                    x: 2386.711,
                    y: -728.47,
                    r: -0.305
                },
                "27": {
                    x: 2385.983,
                    y: -728.671,
                    r: -0.303
                },
                "28": {
                    x: 2385.7,
                    y: -728.7,
                    r: -0.302
                },
                "59": {
                    x: 2385.625,
                    y: -728.66,
                    r: -0.3
                },
                "60": {
                    x: 2385.27,
                    y: -728.478,
                    r: -0.293
                },
                "61": {
                    x: 2384.891,
                    y: -728.341,
                    r: -0.287
                },
                "62": {
                    x: 2384.636,
                    y: -728.244,
                    r: -0.282
                },
                "63": {
                    x: 2384.481,
                    y: -728.183,
                    r: -0.279
                },
                "64": {
                    x: 2384.35,
                    y: -728.2,
                    r: -0.278
                },
                "88": {
                    x: 2391.7,
                    y: -725.7,
                    r: -0.343
                },
                "89": {
                    x: 2432.25,
                    y: -759.8,
                    sx: 0.998,
                    sy: 0.998,
                    r: -1.163
                },
                "90": {
                    x: 2477.2,
                    y: -812.9,
                    sx: 0.999,
                    sy: 0.999,
                    r: -1.592
                },
                "91": {
                    x: 2491.2,
                    y: -860.55,
                    r: -1.851
                },
                "92": {
                    x: 2493,
                    y: -894.9,
                    r: -2.108
                },
                "93": {
                    x: 2490.7,
                    y: -912.8,
                    sx: 1,
                    sy: 1,
                    r: -2.069
                }
            })
            .addTimedChild(instance14, 173, 30, {
                "173": {
                    x: 2512.45,
                    y: -918,
                    kx: 1.664,
                    ky: 1.478,
                    r: 0
                },
                "174": {
                    x: 2409.9,
                    y: -901.2,
                    kx: 1.554,
                    ky: 1.588
                },
                "175": {
                    x: 2315.014,
                    y: -902.385,
                    kx: 1.975,
                    ky: 1.167
                },
                "176": {
                    x: 2267.85,
                    y: -902.95,
                    kx: 2.183,
                    ky: 0.958
                },
                "177": {
                    x: 2237.2,
                    y: -847.3,
                    kx: 2.099,
                    ky: 1.042
                },
                "178": {
                    x: 2231.381,
                    y: -805.527,
                    kx: 1.846,
                    ky: 1.296
                },
                "179": {
                    x: 2227.136,
                    y: -774.681,
                    kx: 1.659,
                    ky: 1.483
                },
                "180": {
                    x: 2224.223,
                    y: -753.632,
                    kx: 1.531,
                    ky: 1.611
                },
                "181": {
                    x: 2222.285,
                    y: -739.738,
                    kx: 1.447,
                    ky: 1.695
                },
                "182": {
                    x: 2221.093,
                    y: -731.121,
                    kx: 1.395,
                    ky: 1.747
                },
                "183": {
                    x: 2220.49,
                    y: -726.518,
                    kx: 1.367,
                    ky: 1.775
                },
                "184": {
                    x: 2220.3,
                    y: -725.2,
                    kx: 1.359,
                    ky: 1.783
                },
                "191": {
                    x: 2207.25,
                    y: -801.85,
                    kx: 0,
                    ky: 0,
                    r: -2.653
                },
                "192": {
                    x: 2316.4,
                    y: -776.3,
                    r: -2.014
                },
                "193": {
                    x: 2369.801,
                    y: -718.156,
                    r: -1.168
                },
                "194": {
                    x: 2377.25,
                    y: -710.1,
                    r: -1.05
                },
                "195": {
                    x: 2399.55,
                    y: -721.1,
                    r: -1.325
                },
                "196": {
                    x: 2168.1,
                    y: -790.15,
                    kx: -1.318,
                    ky: -1.824,
                    r: 0
                },
                "197": {
                    x: 2156.074,
                    y: -857.423,
                    kx: 4.342,
                    ky: -1.2
                },
                "198": {
                    x: 2148.006,
                    y: -902.845,
                    kx: 3.921,
                    ky: -0.779
                },
                "199": {
                    x: 2143.579,
                    y: -927.588,
                    kx: 3.69,
                    ky: -0.549
                },
                "200": {
                    x: 2142.2,
                    y: -935.2,
                    kx: 3.62,
                    ky: -0.478
                },
                "201": {
                    x: 2137.703,
                    y: -932.276,
                    kx: 3.612,
                    ky: -0.47
                },
                "202": {
                    x: 2127.1,
                    y: -925.65,
                    kx: 3.593,
                    ky: -0.451
                }
            })
            .addTimedChild(instance10, 0, 203, {
                "0": {
                    x: 2358.65,
                    y: -711.55,
                    sx: 1,
                    sy: 1,
                    kx: 0,
                    ky: 0,
                    r: 0
                },
                "21": {
                    x: 2358.354,
                    y: -711.602,
                    kx: 0.005
                },
                "22": {
                    x: 2357.405,
                    y: -711.549,
                    sy: 1.001,
                    kx: 0.02
                },
                "23": {
                    x: 2356.11,
                    y: -711.588,
                    sy: 1.002,
                    kx: 0.04
                },
                "24": {
                    x: 2354.865,
                    y: -711.634,
                    sy: 1.003,
                    kx: 0.06
                },
                "25": {
                    x: 2353.904,
                    y: -711.606,
                    sy: 1.004,
                    kx: 0.076
                },
                "26": {
                    x: 2353.349,
                    y: -711.617,
                    kx: 0.086
                },
                "27": {
                    x: 2352.984,
                    y: -711.583,
                    kx: 0.091
                },
                "28": {
                    x: 2352.85,
                    y: -711.55,
                    kx: 0.093
                },
                "88": {
                    x: 2355.85,
                    y: -708.65,
                    sy: 0.954,
                    kx: 0.047
                },
                "89": {
                    x: 2359.175,
                    y: -713.399,
                    sy: 1.037,
                    kx: 0.009
                },
                "90": {
                    x: 2363.169,
                    y: -718.953,
                    sy: 1.136,
                    kx: -0.036
                },
                "91": {
                    x: 2366.353,
                    y: -723.383,
                    sy: 1.215,
                    kx: -0.073
                },
                "92": {
                    x: 2368.522,
                    y: -726.538,
                    sy: 1.27,
                    kx: -0.098
                },
                "93": {
                    x: 2369.808,
                    y: -728.416,
                    sy: 1.303,
                    kx: -0.113
                },
                "94": {
                    x: 2370.25,
                    y: -728.95,
                    sy: 1.314,
                    kx: -0.118
                },
                "95": {
                    x: 2369.867,
                    y: -727.923,
                    sy: 1.295,
                    kx: -0.113
                },
                "96": {
                    x: 2368.205,
                    y: -724.106,
                    sy: 1.226,
                    kx: -0.095
                },
                "97": {
                    x: 2366.578,
                    y: -720.272,
                    sy: 1.157,
                    kx: -0.077
                },
                "98": {
                    x: 2366.05,
                    y: -719.2,
                    sy: 1.139,
                    kx: -0.073
                },
                "99": {
                    x: 2366.345,
                    y: -719.897,
                    sy: 1.15,
                    kx: -0.075
                },
                "100": {
                    x: 2367.403,
                    y: -722.195,
                    sy: 1.193,
                    kx: -0.087
                },
                "101": {
                    x: 2368.968,
                    y: -725.974,
                    sy: 1.26,
                    kx: -0.104
                },
                "102": {
                    x: 2370.031,
                    y: -728.397,
                    sy: 1.302,
                    kx: -0.115
                },
                "103": {
                    x: 2370.25,
                    y: -728.95,
                    sy: 1.314,
                    kx: -0.118
                },
                "104": {
                    x: 2369.867,
                    y: -727.923,
                    sy: 1.295,
                    kx: -0.113
                },
                "105": {
                    x: 2368.205,
                    y: -724.106,
                    sy: 1.226,
                    kx: -0.095
                },
                "106": {
                    x: 2366.578,
                    y: -720.272,
                    sy: 1.157,
                    kx: -0.077
                },
                "107": {
                    x: 2366.05,
                    y: -719.2,
                    sy: 1.139,
                    kx: -0.073
                },
                "108": {
                    x: 2366.345,
                    y: -719.897,
                    sy: 1.15,
                    kx: -0.075
                },
                "109": {
                    x: 2367.403,
                    y: -722.195,
                    sy: 1.193,
                    kx: -0.087
                },
                "110": {
                    x: 2368.968,
                    y: -725.974,
                    sy: 1.26,
                    kx: -0.104
                },
                "111": {
                    x: 2370.031,
                    y: -728.397,
                    sy: 1.302,
                    kx: -0.115
                },
                "112": {
                    x: 2370.25,
                    y: -728.95,
                    sy: 1.314,
                    kx: -0.118
                },
                "113": {
                    x: 2369.867,
                    y: -727.923,
                    sy: 1.295,
                    kx: -0.113
                },
                "114": {
                    x: 2368.205,
                    y: -724.106,
                    sy: 1.226,
                    kx: -0.095
                },
                "115": {
                    x: 2366.578,
                    y: -720.272,
                    sy: 1.157,
                    kx: -0.077
                },
                "116": {
                    x: 2366.05,
                    y: -719.2,
                    sy: 1.139,
                    kx: -0.073
                },
                "117": {
                    x: 2366.345,
                    y: -719.897,
                    sy: 1.15,
                    kx: -0.075
                },
                "118": {
                    x: 2367.403,
                    y: -722.195,
                    sy: 1.193,
                    kx: -0.087
                },
                "119": {
                    x: 2368.968,
                    y: -725.974,
                    sy: 1.26,
                    kx: -0.104
                },
                "120": {
                    x: 2370.031,
                    y: -728.397,
                    sy: 1.302,
                    kx: -0.115
                },
                "121": {
                    x: 2370.25,
                    y: -728.95,
                    sy: 1.314,
                    kx: -0.118
                },
                "122": {
                    x: 2369.867,
                    y: -727.923,
                    sy: 1.295,
                    kx: -0.113
                },
                "123": {
                    x: 2368.205,
                    y: -724.106,
                    sy: 1.226,
                    kx: -0.095
                },
                "124": {
                    x: 2366.578,
                    y: -720.272,
                    sy: 1.157,
                    kx: -0.077
                },
                "125": {
                    x: 2366.05,
                    y: -719.2,
                    sy: 1.139,
                    kx: -0.073
                },
                "126": {
                    x: 2366.345,
                    y: -719.897,
                    sy: 1.15,
                    kx: -0.075
                },
                "127": {
                    x: 2367.403,
                    y: -722.195,
                    sy: 1.193,
                    kx: -0.087
                },
                "128": {
                    x: 2368.968,
                    y: -725.974,
                    sy: 1.26,
                    kx: -0.104
                },
                "129": {
                    x: 2370.031,
                    y: -728.397,
                    sy: 1.302,
                    kx: -0.115
                },
                "130": {
                    x: 2370.25,
                    y: -728.95,
                    sy: 1.314,
                    kx: -0.118
                },
                "131": {
                    x: 2369.867,
                    y: -727.923,
                    sy: 1.295,
                    kx: -0.113
                },
                "132": {
                    x: 2368.205,
                    y: -724.106,
                    sy: 1.226,
                    kx: -0.095
                },
                "133": {
                    x: 2366.578,
                    y: -720.272,
                    sy: 1.157,
                    kx: -0.077
                },
                "134": {
                    x: 2366.05,
                    y: -719.2,
                    sy: 1.139,
                    kx: -0.073
                },
                "135": {
                    x: 2366.345,
                    y: -719.897,
                    sy: 1.15,
                    kx: -0.075
                },
                "136": {
                    x: 2367.403,
                    y: -722.195,
                    sy: 1.193,
                    kx: -0.087
                },
                "137": {
                    x: 2368.968,
                    y: -725.974,
                    sy: 1.26,
                    kx: -0.104
                },
                "138": {
                    x: 2370.031,
                    y: -728.397,
                    sy: 1.302,
                    kx: -0.115
                },
                "139": {
                    x: 2370.25,
                    y: -728.95,
                    sy: 1.314,
                    kx: -0.118
                },
                "140": {
                    x: 2369.867,
                    y: -727.923,
                    sy: 1.295,
                    kx: -0.113
                },
                "141": {
                    x: 2368.205,
                    y: -724.106,
                    sy: 1.226,
                    kx: -0.095
                },
                "142": {
                    x: 2366.578,
                    y: -720.272,
                    sy: 1.157,
                    kx: -0.077
                },
                "143": {
                    x: 2366.05,
                    y: -719.2,
                    sy: 1.139,
                    kx: -0.073
                },
                "144": {
                    x: 2366.345,
                    y: -719.897,
                    sy: 1.15,
                    kx: -0.075
                },
                "145": {
                    x: 2367.403,
                    y: -722.195,
                    sy: 1.193,
                    kx: -0.087
                },
                "146": {
                    x: 2368.968,
                    y: -725.974,
                    sy: 1.26,
                    kx: -0.104
                },
                "147": {
                    x: 2370.031,
                    y: -728.397,
                    sy: 1.302,
                    kx: -0.115
                },
                "148": {
                    x: 2370.25,
                    y: -728.95,
                    sy: 1.314,
                    kx: -0.118
                },
                "149": {
                    x: 2369.867,
                    y: -727.923,
                    sy: 1.295,
                    kx: -0.113
                },
                "150": {
                    x: 2368.205,
                    y: -724.106,
                    sy: 1.226,
                    kx: -0.095
                },
                "151": {
                    x: 2366.578,
                    y: -720.272,
                    sy: 1.157,
                    kx: -0.077
                },
                "152": {
                    x: 2366.05,
                    y: -719.2,
                    sy: 1.139,
                    kx: -0.073
                },
                "153": {
                    x: 2366.345,
                    y: -719.897,
                    sy: 1.15,
                    kx: -0.075
                },
                "154": {
                    x: 2367.403,
                    y: -722.195,
                    sy: 1.193,
                    kx: -0.087
                },
                "155": {
                    x: 2368.968,
                    y: -725.974,
                    sy: 1.26,
                    kx: -0.104
                },
                "156": {
                    x: 2370.031,
                    y: -728.397,
                    sy: 1.302,
                    kx: -0.115
                },
                "157": {
                    x: 2370.25,
                    y: -728.95,
                    sy: 1.314,
                    kx: -0.118
                },
                "158": {
                    x: 2369.867,
                    y: -727.923,
                    sy: 1.295,
                    kx: -0.113
                },
                "159": {
                    x: 2368.205,
                    y: -724.106,
                    sy: 1.226,
                    kx: -0.095
                },
                "160": {
                    x: 2366.578,
                    y: -720.272,
                    sy: 1.157,
                    kx: -0.077
                },
                "161": {
                    x: 2366.05,
                    y: -719.2,
                    sy: 1.139,
                    kx: -0.073
                },
                "164": {
                    x: 2380.366,
                    y: -726.849,
                    sx: 0.952,
                    sy: 1.269,
                    kx: -0.183,
                    ky: 0.18
                },
                "165": {
                    x: 2394.528,
                    y: -734.356,
                    sx: 0.905,
                    sy: 1.398,
                    kx: -0.293,
                    ky: 0.358
                },
                "166": {
                    x: 2404.1,
                    y: -739.444,
                    sx: 0.873,
                    sy: 1.485,
                    kx: -0.367,
                    ky: 0.478
                },
                "167": {
                    x: 2409.424,
                    y: -742.262,
                    sx: 0.855,
                    sy: 1.533,
                    kx: -0.408,
                    ky: 0.545
                },
                "168": {
                    x: 2411.05,
                    y: -743.2,
                    sx: 0.849,
                    sy: 1.548,
                    kx: -0.421,
                    ky: 0.566
                },
                "172": {
                    x: 2409.75,
                    y: -744.3,
                    sx: 0.858,
                    sy: 1.58,
                    kx: -0.414,
                    ky: 0.562
                },
                "173": {
                    x: 2370.5,
                    y: -758.6,
                    sx: 0.85,
                    sy: 1.48,
                    kx: -0.031,
                    ky: 0.119
                },
                "174": {
                    x: 2318.55,
                    y: -741.15,
                    sx: 1,
                    sy: 1,
                    kx: 0,
                    ky: 0,
                    r: -0.567
                },
                "175": {
                    x: 2316.57,
                    y: -754.622,
                    r: -1.387
                },
                "176": {
                    x: 2315.55,
                    y: -761.25,
                    r: -1.793
                },
                "177": {
                    x: 2289.8,
                    y: -766.55,
                    r: -2.38
                },
                "178": {
                    x: 2278.84,
                    y: -757.069,
                    r: -2.093
                },
                "179": {
                    x: 2270.809,
                    y: -749.994,
                    r: -1.882
                },
                "180": {
                    x: 2265.276,
                    y: -745.129,
                    r: -1.738
                },
                "181": {
                    x: 2261.65,
                    y: -741.997,
                    r: -1.643
                },
                "182": {
                    x: 2259.355,
                    y: -739.972,
                    r: -1.584
                },
                "183": {
                    x: 2258.174,
                    y: -738.919,
                    r: -1.552
                },
                "184": {
                    x: 2257.85,
                    y: -738.6,
                    r: -1.543
                },
                "191": {
                    x: 2238.5,
                    y: -771.05,
                    r: -2.427
                },
                "192": {
                    x: 2283.4,
                    y: -691.2,
                    r: -0.977
                },
                "193": {
                    x: 2293.653,
                    y: -678.673,
                    sy: 1.108,
                    r: -0.067
                },
                "194": {
                    x: 2295.1,
                    y: -676.9,
                    sy: 1.123,
                    r: 0.06
                },
                "195": {
                    x: 2297.35,
                    y: -670.15,
                    sx: 1.126,
                    sy: 0.929
                },
                "196": {
                    x: 2280.25,
                    y: -724.75,
                    sx: 0.958,
                    sy: 1.194,
                    kx: 0.082,
                    ky: 3.06,
                    r: 0
                },
                "197": {
                    x: 2249.208,
                    y: -748.982,
                    sx: 0.977,
                    sy: 1.104,
                    kx: -0.248,
                    ky: -2.894
                },
                "198": {
                    x: 2228.237,
                    y: -765.365,
                    sx: 0.991,
                    sy: 1.043,
                    kx: -0.471,
                    ky: -2.671
                },
                "199": {
                    x: 2216.771,
                    y: -774.282,
                    sx: 0.998,
                    sy: 1.01,
                    kx: -0.593,
                    ky: -2.549
                },
                "200": {
                    x: 2213.25,
                    y: -777.05,
                    sx: 1,
                    sy: 1,
                    kx: -0.63,
                    ky: -2.511
                },
                "201": {
                    x: 2210.112,
                    y: -774.136,
                    sy: 1.106,
                    kx: -0.615,
                    ky: -2.527
                },
                "202": {
                    x: 2202.8,
                    y: -767.5,
                    sy: 1.351,
                    kx: -0.58,
                    ky: -2.562
                }
            })
            .addTimedChild(instance9, 0, 203, {
                "0": {
                    x: 2359,
                    y: -653.85,
                    sx: 1,
                    sy: 1,
                    kx: 0,
                    ky: 0,
                    r: 0
                },
                "89": {
                    x: 2359.732,
                    y: -653.905,
                    sy: 1.004,
                    kx: -0.045
                },
                "90": {
                    x: 2360.559,
                    y: -653.883,
                    sy: 1.01,
                    kx: -0.099
                },
                "91": {
                    x: 2361.254,
                    y: -653.904,
                    sy: 1.014,
                    kx: -0.142
                },
                "92": {
                    x: 2361.777,
                    y: -653.917,
                    sy: 1.017,
                    kx: -0.172
                },
                "93": {
                    x: 2362.05,
                    y: -653.909,
                    sy: 1.019,
                    kx: -0.19
                },
                "94": {
                    x: 2362.1,
                    y: -653.85,
                    kx: -0.196
                },
                "164": {
                    x: 2368.15,
                    y: -660.1,
                    sx: 1.019,
                    sy: 1.01,
                    kx: -1.051,
                    ky: 0.812
                },
                "165": {
                    x: 2370.907,
                    y: -661.394,
                    sx: 1.01,
                    sy: 1.006,
                    kx: -1.065,
                    ky: 0.92
                },
                "166": {
                    x: 2372.74,
                    y: -662.294,
                    sx: 1.004,
                    sy: 1.003,
                    kx: -1.074,
                    ky: 0.993
                },
                "167": {
                    x: 2373.757,
                    y: -662.719,
                    sx: 1.001,
                    sy: 1.001,
                    kx: -1.079,
                    ky: 1.034
                },
                "168": {
                    x: 2374.05,
                    y: -662.85,
                    sx: 1,
                    kx: -1.08,
                    ky: 1.047
                },
                "172": {
                    x: 2373,
                    y: -662,
                    sx: 0.996,
                    sy: 0.975,
                    kx: -1.105,
                    ky: 1.022
                },
                "173": {
                    x: 2367.05,
                    y: -674.1,
                    sx: 0.969,
                    sy: 0.996,
                    kx: -0.972,
                    ky: 0.907
                },
                "174": {
                    x: 2347.85,
                    y: -691.55,
                    sx: 1,
                    sy: 1,
                    kx: 0,
                    ky: 0,
                    r: -0.043
                },
                "175": {
                    x: 2364.454,
                    y: -746.254,
                    r: -1.175
                },
                "176": {
                    x: 2372.7,
                    y: -773.4,
                    r: -1.736
                },
                "177": {
                    x: 2330.65,
                    y: -806.1,
                    r: -2.201
                },
                "178": {
                    x: 2324.655,
                    y: -782.167,
                    r: -1.903
                },
                "179": {
                    x: 2320.215,
                    y: -764.489,
                    r: -1.683
                },
                "180": {
                    x: 2317.128,
                    y: -752.397,
                    r: -1.532
                },
                "181": {
                    x: 2315.098,
                    y: -744.388,
                    r: -1.433
                },
                "182": {
                    x: 2313.888,
                    y: -739.441,
                    r: -1.371
                },
                "183": {
                    x: 2313.238,
                    y: -736.885,
                    r: -1.339
                },
                "184": {
                    x: 2313,
                    y: -736.1,
                    r: -1.329
                },
                "191": {
                    x: 2277.45,
                    y: -812.5,
                    r: -2.249
                },
                "192": {
                    x: 2325.4,
                    y: -658.1,
                    r: 0.004
                },
                "193": {
                    x: 2299.242,
                    y: -629.257,
                    r: 0.022
                },
                "194": {
                    x: 2295.6,
                    y: -625.15,
                    r: 0.025
                },
                "196": {
                    x: 2287.75,
                    y: -659.3,
                    sx: 1.081,
                    kx: 1.007,
                    ky: 2.134,
                    r: 0
                },
                "197": {
                    x: 2239.716,
                    y: -694.349,
                    sx: 1.044,
                    kx: 0.442,
                    ky: 2.7
                },
                "198": {
                    x: 2207.203,
                    y: -718.074,
                    sx: 1.018,
                    kx: 0.06,
                    ky: 3.081
                },
                "199": {
                    x: 2189.442,
                    y: -731.035,
                    sx: 1.004,
                    kx: -0.148,
                    ky: -2.993
                },
                "200": {
                    x: 2184.05,
                    y: -734.95,
                    sx: 1,
                    kx: -0.212,
                    ky: -2.93
                },
                "201": {
                    x: 2177.05,
                    y: -725.253,
                    kx: -0.369,
                    ky: -2.772
                },
                "202": {
                    x: 2160.9,
                    y: -702.85,
                    kx: -0.732,
                    ky: -2.41
                }
            })
            .addTimedChild(instance8, 0, 203, {
                "0": {
                    x: 2323.85,
                    y: -706.2,
                    sx: 1,
                    sy: 1,
                    kx: 0,
                    ky: 0,
                    r: 0
                },
                "21": {
                    x: 2323.58,
                    y: -706.251,
                    kx: 0.005
                },
                "22": {
                    x: 2322.76,
                    y: -706.246,
                    sy: 1.001,
                    kx: 0.02
                },
                "23": {
                    x: 2321.577,
                    y: -706.233,
                    sy: 1.002,
                    kx: 0.04
                },
                "24": {
                    x: 2320.439,
                    y: -706.229,
                    sy: 1.003,
                    kx: 0.06
                },
                "25": {
                    x: 2319.559,
                    y: -706.253,
                    sy: 1.004,
                    kx: 0.076
                },
                "26": {
                    x: 2318.958,
                    y: -706.216,
                    kx: 0.086
                },
                "27": {
                    x: 2318.672,
                    y: -706.232,
                    kx: 0.091
                },
                "28": {
                    x: 2318.55,
                    y: -706.2,
                    kx: 0.093
                },
                "88": {
                    x: 2321.3,
                    y: -703.55,
                    sy: 0.954,
                    kx: 0.047
                },
                "89": {
                    x: 2324.439,
                    y: -709.964,
                    sy: 1.05,
                    kx: 0.016,
                    ky: -0.006
                },
                "90": {
                    x: 2328.144,
                    y: -717.518,
                    sy: 1.163,
                    kx: -0.022,
                    ky: -0.014
                },
                "91": {
                    x: 2331.057,
                    y: -723.57,
                    sy: 1.254,
                    kx: -0.053,
                    ky: -0.02
                },
                "92": {
                    x: 2333.144,
                    y: -727.899,
                    sy: 1.318,
                    kx: -0.074,
                    ky: -0.024
                },
                "93": {
                    x: 2334.338,
                    y: -730.396,
                    sy: 1.356,
                    kx: -0.086,
                    ky: -0.027
                },
                "94": {
                    x: 2334.65,
                    y: -731.15,
                    sy: 1.368,
                    kx: -0.09,
                    ky: -0.028
                },
                "95": {
                    x: 2334.208,
                    y: -730.104,
                    sy: 1.349,
                    kx: -0.085,
                    ky: -0.027
                },
                "96": {
                    x: 2332.551,
                    y: -726.165,
                    sx: 0.999,
                    sy: 1.278,
                    kx: -0.066,
                    ky: -0.026
                },
                "97": {
                    x: 2330.773,
                    y: -722.243,
                    sy: 1.206,
                    kx: -0.046,
                    ky: -0.024
                },
                "98": {
                    x: 2330.3,
                    y: -721.1,
                    sx: 0.998,
                    sy: 1.187,
                    kx: -0.041
                },
                "99": {
                    x: 2330.669,
                    y: -721.826,
                    sy: 1.199,
                    kx: -0.044
                },
                "100": {
                    x: 2331.649,
                    y: -724.305,
                    sx: 0.999,
                    sy: 1.243,
                    kx: -0.056,
                    ky: -0.025
                },
                "101": {
                    x: 2333.3,
                    y: -728.167,
                    sy: 1.312,
                    kx: -0.075,
                    ky: -0.027
                },
                "102": {
                    x: 2334.385,
                    y: -730.533,
                    sx: 1,
                    sy: 1.356,
                    kx: -0.087
                },
                "103": {
                    x: 2334.65,
                    y: -731.15,
                    sy: 1.368,
                    kx: -0.09,
                    ky: -0.028
                },
                "104": {
                    x: 2334.208,
                    y: -730.104,
                    sy: 1.349,
                    kx: -0.085,
                    ky: -0.027
                },
                "105": {
                    x: 2332.551,
                    y: -726.165,
                    sx: 0.999,
                    sy: 1.278,
                    kx: -0.066,
                    ky: -0.026
                },
                "106": {
                    x: 2330.773,
                    y: -722.243,
                    sy: 1.206,
                    kx: -0.046,
                    ky: -0.024
                },
                "107": {
                    x: 2330.3,
                    y: -721.1,
                    sx: 0.998,
                    sy: 1.187,
                    kx: -0.041
                },
                "108": {
                    x: 2330.669,
                    y: -721.826,
                    sy: 1.199,
                    kx: -0.044
                },
                "109": {
                    x: 2331.649,
                    y: -724.305,
                    sx: 0.999,
                    sy: 1.243,
                    kx: -0.056,
                    ky: -0.025
                },
                "110": {
                    x: 2333.3,
                    y: -728.167,
                    sy: 1.312,
                    kx: -0.075,
                    ky: -0.027
                },
                "111": {
                    x: 2334.385,
                    y: -730.533,
                    sx: 1,
                    sy: 1.356,
                    kx: -0.087
                },
                "112": {
                    x: 2334.65,
                    y: -731.15,
                    sy: 1.368,
                    kx: -0.09,
                    ky: -0.028
                },
                "113": {
                    x: 2334.208,
                    y: -730.104,
                    sy: 1.349,
                    kx: -0.085,
                    ky: -0.027
                },
                "114": {
                    x: 2332.551,
                    y: -726.165,
                    sx: 0.999,
                    sy: 1.278,
                    kx: -0.066,
                    ky: -0.026
                },
                "115": {
                    x: 2330.773,
                    y: -722.243,
                    sy: 1.206,
                    kx: -0.046,
                    ky: -0.024
                },
                "116": {
                    x: 2330.3,
                    y: -721.1,
                    sx: 0.998,
                    sy: 1.187,
                    kx: -0.041
                },
                "117": {
                    x: 2330.669,
                    y: -721.826,
                    sy: 1.199,
                    kx: -0.044
                },
                "118": {
                    x: 2331.649,
                    y: -724.305,
                    sx: 0.999,
                    sy: 1.243,
                    kx: -0.056,
                    ky: -0.025
                },
                "119": {
                    x: 2333.3,
                    y: -728.167,
                    sy: 1.312,
                    kx: -0.075,
                    ky: -0.027
                },
                "120": {
                    x: 2334.385,
                    y: -730.533,
                    sx: 1,
                    sy: 1.356,
                    kx: -0.087
                },
                "121": {
                    x: 2334.65,
                    y: -731.15,
                    sy: 1.368,
                    kx: -0.09,
                    ky: -0.028
                },
                "122": {
                    x: 2334.208,
                    y: -730.104,
                    sy: 1.349,
                    kx: -0.085,
                    ky: -0.027
                },
                "123": {
                    x: 2332.551,
                    y: -726.165,
                    sx: 0.999,
                    sy: 1.278,
                    kx: -0.066,
                    ky: -0.026
                },
                "124": {
                    x: 2330.773,
                    y: -722.243,
                    sy: 1.206,
                    kx: -0.046,
                    ky: -0.024
                },
                "125": {
                    x: 2330.3,
                    y: -721.1,
                    sx: 0.998,
                    sy: 1.187,
                    kx: -0.041
                },
                "126": {
                    x: 2330.669,
                    y: -721.826,
                    sy: 1.199,
                    kx: -0.044
                },
                "127": {
                    x: 2331.649,
                    y: -724.305,
                    sx: 0.999,
                    sy: 1.243,
                    kx: -0.056,
                    ky: -0.025
                },
                "128": {
                    x: 2333.3,
                    y: -728.167,
                    sy: 1.312,
                    kx: -0.075,
                    ky: -0.027
                },
                "129": {
                    x: 2334.385,
                    y: -730.533,
                    sx: 1,
                    sy: 1.356,
                    kx: -0.087
                },
                "130": {
                    x: 2334.65,
                    y: -731.15,
                    sy: 1.368,
                    kx: -0.09,
                    ky: -0.028
                },
                "131": {
                    x: 2334.208,
                    y: -730.104,
                    sy: 1.349,
                    kx: -0.085,
                    ky: -0.027
                },
                "132": {
                    x: 2332.551,
                    y: -726.165,
                    sx: 0.999,
                    sy: 1.278,
                    kx: -0.066,
                    ky: -0.026
                },
                "133": {
                    x: 2330.773,
                    y: -722.243,
                    sy: 1.206,
                    kx: -0.046,
                    ky: -0.024
                },
                "134": {
                    x: 2330.3,
                    y: -721.1,
                    sx: 0.998,
                    sy: 1.187,
                    kx: -0.041
                },
                "135": {
                    x: 2330.669,
                    y: -721.826,
                    sy: 1.199,
                    kx: -0.044
                },
                "136": {
                    x: 2331.649,
                    y: -724.305,
                    sx: 0.999,
                    sy: 1.243,
                    kx: -0.056,
                    ky: -0.025
                },
                "137": {
                    x: 2333.3,
                    y: -728.167,
                    sy: 1.312,
                    kx: -0.075,
                    ky: -0.027
                },
                "138": {
                    x: 2334.385,
                    y: -730.533,
                    sx: 1,
                    sy: 1.356,
                    kx: -0.087
                },
                "139": {
                    x: 2334.65,
                    y: -731.15,
                    sy: 1.368,
                    kx: -0.09,
                    ky: -0.028
                },
                "140": {
                    x: 2334.208,
                    y: -730.104,
                    sy: 1.349,
                    kx: -0.085,
                    ky: -0.027
                },
                "141": {
                    x: 2332.551,
                    y: -726.165,
                    sx: 0.999,
                    sy: 1.278,
                    kx: -0.066,
                    ky: -0.026
                },
                "142": {
                    x: 2330.773,
                    y: -722.243,
                    sy: 1.206,
                    kx: -0.046,
                    ky: -0.024
                },
                "143": {
                    x: 2330.3,
                    y: -721.1,
                    sx: 0.998,
                    sy: 1.187,
                    kx: -0.041
                },
                "144": {
                    x: 2330.669,
                    y: -721.826,
                    sy: 1.199,
                    kx: -0.044
                },
                "145": {
                    x: 2331.649,
                    y: -724.305,
                    sx: 0.999,
                    sy: 1.243,
                    kx: -0.056,
                    ky: -0.025
                },
                "146": {
                    x: 2333.3,
                    y: -728.167,
                    sy: 1.312,
                    kx: -0.075,
                    ky: -0.027
                },
                "147": {
                    x: 2334.385,
                    y: -730.533,
                    sx: 1,
                    sy: 1.356,
                    kx: -0.087
                },
                "148": {
                    x: 2334.65,
                    y: -731.15,
                    sy: 1.368,
                    kx: -0.09,
                    ky: -0.028
                },
                "149": {
                    x: 2334.208,
                    y: -730.104,
                    sy: 1.349,
                    kx: -0.085,
                    ky: -0.027
                },
                "150": {
                    x: 2332.551,
                    y: -726.165,
                    sx: 0.999,
                    sy: 1.278,
                    kx: -0.066,
                    ky: -0.026
                },
                "151": {
                    x: 2330.773,
                    y: -722.243,
                    sy: 1.206,
                    kx: -0.046,
                    ky: -0.024
                },
                "152": {
                    x: 2330.3,
                    y: -721.1,
                    sx: 0.998,
                    sy: 1.187,
                    kx: -0.041
                },
                "153": {
                    x: 2330.669,
                    y: -721.826,
                    sy: 1.199,
                    kx: -0.044
                },
                "154": {
                    x: 2331.649,
                    y: -724.305,
                    sx: 0.999,
                    sy: 1.243,
                    kx: -0.056,
                    ky: -0.025
                },
                "155": {
                    x: 2333.3,
                    y: -728.167,
                    sy: 1.312,
                    kx: -0.075,
                    ky: -0.027
                },
                "156": {
                    x: 2334.385,
                    y: -730.533,
                    sx: 1,
                    sy: 1.356,
                    kx: -0.087
                },
                "157": {
                    x: 2334.65,
                    y: -731.15,
                    sy: 1.368,
                    kx: -0.09,
                    ky: -0.028
                },
                "158": {
                    x: 2334.208,
                    y: -730.104,
                    sy: 1.349,
                    kx: -0.085,
                    ky: -0.027
                },
                "159": {
                    x: 2332.551,
                    y: -726.165,
                    sx: 0.999,
                    sy: 1.278,
                    kx: -0.066,
                    ky: -0.026
                },
                "160": {
                    x: 2330.773,
                    y: -722.243,
                    sy: 1.206,
                    kx: -0.046,
                    ky: -0.024
                },
                "161": {
                    x: 2330.3,
                    y: -721.1,
                    sx: 0.998,
                    sy: 1.187,
                    kx: -0.041
                },
                "164": {
                    x: 2345.45,
                    y: -737.1,
                    sx: 0.997,
                    sy: 1.186,
                    kx: -0.415,
                    ky: 0.35
                },
                "165": {
                    x: 2355.693,
                    y: -747.95,
                    sx: 0.998,
                    sy: 1.187,
                    kx: -0.669,
                    ky: 0.604
                },
                "166": {
                    x: 2362.507,
                    y: -755.244,
                    kx: -0.84,
                    ky: 0.775
                },
                "167": {
                    x: 2366.339,
                    y: -759.207,
                    kx: -0.935,
                    ky: 0.87
                },
                "168": {
                    x: 2367.55,
                    y: -760.55,
                    kx: -0.965,
                    ky: 0.901
                },
                "172": {
                    x: 2368.1,
                    y: -759.85,
                    sx: 0.997,
                    sy: 1.238,
                    kx: -1.075,
                    ky: 1.009
                },
                "173": {
                    x: 2323.7,
                    y: -762.6,
                    sx: 0.998,
                    sy: 1.187,
                    kx: -0.782,
                    ky: 0.717
                },
                "174": {
                    x: 2281.3,
                    y: -733.7,
                    sx: 1,
                    sy: 1,
                    kx: 0,
                    ky: 0,
                    r: -0.058
                },
                "175": {
                    x: 2294.506,
                    y: -727.63,
                    r: -1.041
                },
                "176": {
                    x: 2301.1,
                    y: -724.6,
                    r: -1.528
                },
                "177": {
                    x: 2297.95,
                    y: -728.05,
                    r: -2.115
                },
                "178": {
                    x: 2281.207,
                    y: -717.949,
                    r: -1.831
                },
                "179": {
                    x: 2268.816,
                    y: -710.422,
                    r: -1.623
                },
                "180": {
                    x: 2260.354,
                    y: -705.34,
                    r: -1.48
                },
                "181": {
                    x: 2254.821,
                    y: -701.927,
                    r: -1.385
                },
                "182": {
                    x: 2251.375,
                    y: -699.876,
                    r: -1.327
                },
                "183": {
                    x: 2249.506,
                    y: -698.79,
                    r: -1.296
                },
                "184": {
                    x: 2248.95,
                    y: -698.5,
                    r: -1.287
                },
                "191": {
                    x: 2248.5,
                    y: -733,
                    r: -2.162
                },
                "192": {
                    x: 2235.8,
                    y: -659.95,
                    sx: 1.154,
                    sy: 0.87,
                    kx: 0.674,
                    ky: -0.581,
                    r: 0
                },
                "193": {
                    x: 2252.628,
                    y: -678.596,
                    sx: 1.101,
                    sy: 1.176,
                    kx: 0.214,
                    ky: -0.122
                },
                "194": {
                    x: 2254.95,
                    y: -681.25,
                    sx: 1.093,
                    sy: 1.218,
                    kx: 0.15,
                    ky: -0.058
                },
                "195": {
                    x: 2257.2,
                    y: -672.25,
                    sx: 1.153,
                    sy: 1.07,
                    kx: 0.145,
                    ky: -0.053
                },
                "196": {
                    x: 2305.85,
                    y: -733.9,
                    sx: 1,
                    sy: 1,
                    kx: 0.519,
                    ky: 2.623
                },
                "197": {
                    x: 2295.764,
                    y: -754.266,
                    kx: 0.637,
                    ky: 2.505
                },
                "198": {
                    x: 2288.903,
                    y: -768.022,
                    kx: 0.716,
                    ky: 2.425
                },
                "199": {
                    x: 2285.236,
                    y: -775.536,
                    kx: 0.76,
                    ky: 2.382
                },
                "200": {
                    x: 2284.05,
                    y: -777.8,
                    kx: 0.773,
                    ky: 2.368
                },
                "201": {
                    x: 2280.976,
                    y: -776.383,
                    kx: 0.828,
                    ky: 2.314
                },
                "202": {
                    x: 2273.8,
                    y: -773.2,
                    kx: 0.954,
                    ky: 2.188
                }
            })
            .addTimedChild(instance7, 0, 203, {
                "0": {
                    x: 2324.7,
                    y: -653.85,
                    sx: 1,
                    sy: 1,
                    kx: 0,
                    ky: 0,
                    r: 0
                },
                "89": {
                    x: 2325.432,
                    y: -653.905,
                    sy: 1.004,
                    kx: -0.045
                },
                "90": {
                    x: 2326.259,
                    y: -653.883,
                    sy: 1.01,
                    kx: -0.099
                },
                "91": {
                    x: 2326.954,
                    y: -653.904,
                    sy: 1.014,
                    kx: -0.142
                },
                "92": {
                    x: 2327.477,
                    y: -653.917,
                    sy: 1.017,
                    kx: -0.172
                },
                "93": {
                    x: 2327.75,
                    y: -653.909,
                    sy: 1.019,
                    kx: -0.19
                },
                "94": {
                    x: 2327.8,
                    y: -653.85,
                    kx: -0.196
                },
                "164": {
                    x: 2323.255,
                    y: -677.375,
                    sy: 1.013,
                    kx: -0.668,
                    ky: 0.543
                },
                "165": {
                    x: 2318.758,
                    y: -700.771,
                    sy: 1.007,
                    kx: -1.136,
                    ky: 1.081
                },
                "166": {
                    x: 2315.663,
                    y: -716.504,
                    sy: 1.003,
                    kx: -1.452,
                    ky: 1.444
                },
                "167": {
                    x: 2314.023,
                    y: -725.33,
                    sy: 1.001,
                    kx: 4.655,
                    ky: 1.646
                },
                "168": {
                    x: 2313.4,
                    y: -728.1,
                    sy: 1,
                    kx: 4.6,
                    ky: 1.709
                },
                "172": {
                    x: 2314.45,
                    y: -731.05,
                    kx: 4.624,
                    ky: 1.686
                },
                "173": {
                    x: 2281.25,
                    y: -720.8,
                    kx: -1.148,
                    ky: 1.174
                },
                "174": {
                    x: 2282.9,
                    y: -681.65,
                    kx: 0,
                    ky: 0,
                    r: 0.701
                },
                "175": {
                    x: 2329.687,
                    y: -707.943,
                    r: -0.282
                },
                "176": {
                    x: 2352.85,
                    y: -721,
                    r: -0.77
                },
                "177": {
                    x: 2343.15,
                    y: -753.7,
                    r: -1.356
                },
                "178": {
                    x: 2327.802,
                    y: -729.341,
                    r: -1.073
                },
                "179": {
                    x: 2316.45,
                    y: -711.346,
                    r: -0.864
                },
                "180": {
                    x: 2308.781,
                    y: -699.108,
                    r: -0.721
                },
                "181": {
                    x: 2303.677,
                    y: -691.052,
                    r: -0.627
                },
                "182": {
                    x: 2300.493,
                    y: -686.046,
                    r: -0.569
                },
                "183": {
                    x: 2298.782,
                    y: -683.384,
                    r: -0.538
                },
                "184": {
                    x: 2298.35,
                    y: -682.6,
                    r: -0.528
                },
                "191": {
                    x: 2292.4,
                    y: -760.75,
                    r: -1.404
                },
                "192": {
                    x: 2262.6,
                    y: -623.7,
                    sx: 1.073,
                    sy: 0.968,
                    kx: -0.282,
                    ky: 0.007,
                    r: 0
                },
                "196": {
                    x: 2333.5,
                    y: -690,
                    sx: 1,
                    sy: 1,
                    kx: 1.32,
                    ky: 1.822
                },
                "197": {
                    x: 2328.171,
                    y: -714.263,
                    kx: 1.438,
                    ky: 1.704
                },
                "198": {
                    x: 2324.563,
                    y: -730.62,
                    kx: 1.518,
                    ky: 1.624
                },
                "199": {
                    x: 2322.603,
                    y: -739.577,
                    kx: 1.561,
                    ky: 1.58
                },
                "200": {
                    x: 2322,
                    y: -742.35,
                    kx: 1.575,
                    ky: 1.567
                },
                "201": {
                    x: 2320.689,
                    y: -743.183,
                    kx: 1.655,
                    ky: 1.486
                },
                "202": {
                    x: 2317.6,
                    y: -745.15,
                    kx: 1.842,
                    ky: 1.299
                }
            })
            .addTimedChild(instance6, 0, 203, {
                "0": {
                    x: 2270,
                    y: -720.2,
                    sx: 1,
                    sy: 1,
                    kx: 0,
                    ky: 0,
                    r: -0.048
                },
                "21": {
                    x: 2269.678,
                    y: -720.009,
                    r: -0.051
                },
                "22": {
                    x: 2268.779,
                    y: -719.483,
                    r: -0.058
                },
                "23": {
                    x: 2267.504,
                    y: -718.746,
                    r: -0.069
                },
                "24": {
                    x: 2266.307,
                    y: -717.993,
                    r: -0.079
                },
                "25": {
                    x: 2265.464,
                    y: -717.422,
                    r: -0.087
                },
                "26": {
                    x: 2264.843,
                    y: -717.098,
                    r: -0.092
                },
                "27": {
                    x: 2264.503,
                    y: -716.833,
                    r: -0.094
                },
                "28": {
                    x: 2264.6,
                    y: -716.7,
                    r: -0.095
                },
                "59": {
                    x: 2264.606,
                    y: -716.773,
                    r: -0.094
                },
                "60": {
                    x: 2264.637,
                    y: -716.932,
                    r: -0.092
                },
                "61": {
                    x: 2264.688,
                    y: -716.96,
                    r: -0.09
                },
                "62": {
                    x: 2264.783,
                    y: -717.123,
                    r: -0.089
                },
                "63": {
                    x: 2264.722,
                    y: -717.143,
                    r: -0.088
                },
                "64": {
                    x: 2264.7,
                    y: -717.2,
                    r: -0.087
                },
                "88": {
                    x: 2264.8,
                    y: -716.35,
                    r: -0.07
                },
                "89": {
                    x: 2268.527,
                    y: -723.803,
                    r: -0.045
                },
                "90": {
                    x: 2272.96,
                    y: -732.74,
                    r: -0.015
                },
                "91": {
                    x: 2276.516,
                    y: -739.778,
                    r: 0.009
                },
                "92": {
                    x: 2279.083,
                    y: -744.731,
                    r: 0.026
                },
                "93": {
                    x: 2280.587,
                    y: -747.68,
                    r: 0.036
                },
                "94": {
                    x: 2281.05,
                    y: -748.9,
                    r: 0.039
                },
                "95": {
                    x: 2280.641,
                    y: -748.399,
                    r: 0.041
                },
                "96": {
                    x: 2279.06,
                    y: -746.39,
                    r: 0.05
                },
                "97": {
                    x: 2277.455,
                    y: -744.374,
                    r: 0.058
                },
                "98": {
                    x: 2276.9,
                    y: -743.6,
                    r: 0.06
                },
                "99": {
                    x: 2277.183,
                    y: -743.95,
                    r: 0.059
                },
                "100": {
                    x: 2278.156,
                    y: -745.106,
                    r: 0.054
                },
                "101": {
                    x: 2279.74,
                    y: -747.056,
                    r: 0.046
                },
                "102": {
                    x: 2280.712,
                    y: -748.235,
                    r: 0.04
                },
                "103": {
                    x: 2281.05,
                    y: -748.9,
                    r: 0.039
                },
                "104": {
                    x: 2280.641,
                    y: -748.399,
                    r: 0.041
                },
                "105": {
                    x: 2279.11,
                    y: -746.39,
                    r: 0.05
                },
                "106": {
                    x: 2277.505,
                    y: -744.424,
                    r: 0.058
                },
                "107": {
                    x: 2276.9,
                    y: -743.6,
                    r: 0.06
                },
                "108": {
                    x: 2277.183,
                    y: -743.95,
                    r: 0.059
                },
                "109": {
                    x: 2278.156,
                    y: -745.106,
                    r: 0.054
                },
                "110": {
                    x: 2279.74,
                    y: -747.006,
                    r: 0.046
                },
                "111": {
                    x: 2280.712,
                    y: -748.285,
                    r: 0.04
                },
                "112": {
                    x: 2281.05,
                    y: -748.9,
                    r: 0.039
                },
                "113": {
                    x: 2280.641,
                    y: -748.399,
                    r: 0.041
                },
                "114": {
                    x: 2279.11,
                    y: -746.39,
                    r: 0.05
                },
                "115": {
                    x: 2277.554,
                    y: -744.424,
                    r: 0.058
                },
                "116": {
                    x: 2276.9,
                    y: -743.6,
                    r: 0.06
                },
                "117": {
                    x: 2277.083,
                    y: -743.95,
                    r: 0.059
                },
                "118": {
                    x: 2278.056,
                    y: -745.106,
                    r: 0.054
                },
                "119": {
                    x: 2279.639,
                    y: -747.006,
                    r: 0.046
                },
                "120": {
                    x: 2280.612,
                    y: -748.285,
                    r: 0.04
                },
                "121": {
                    x: 2281.05,
                    y: -748.9,
                    r: 0.039
                },
                "122": {
                    x: 2280.641,
                    y: -748.399,
                    r: 0.041
                },
                "123": {
                    x: 2279.16,
                    y: -746.44,
                    r: 0.05
                },
                "124": {
                    x: 2277.604,
                    y: -744.474,
                    r: 0.058
                },
                "125": {
                    x: 2276.9,
                    y: -743.6,
                    r: 0.06
                },
                "126": {
                    x: 2277.083,
                    y: -743.9,
                    r: 0.059
                },
                "127": {
                    x: 2278.056,
                    y: -745.156,
                    r: 0.054
                },
                "128": {
                    x: 2279.589,
                    y: -747.056,
                    r: 0.046
                },
                "129": {
                    x: 2280.512,
                    y: -748.235,
                    r: 0.04
                },
                "130": {
                    x: 2281.05,
                    y: -748.9,
                    r: 0.039
                },
                "131": {
                    x: 2280.641,
                    y: -748.399,
                    r: 0.041
                },
                "132": {
                    x: 2279.21,
                    y: -746.44,
                    r: 0.05
                },
                "133": {
                    x: 2277.705,
                    y: -744.524,
                    r: 0.058
                },
                "134": {
                    x: 2276.9,
                    y: -743.6,
                    r: 0.06
                },
                "135": {
                    x: 2277.083,
                    y: -743.9,
                    r: 0.059
                },
                "136": {
                    x: 2278.006,
                    y: -745.106,
                    r: 0.054
                },
                "137": {
                    x: 2279.539,
                    y: -747.006,
                    r: 0.046
                },
                "138": {
                    x: 2280.462,
                    y: -748.185,
                    r: 0.04
                },
                "139": {
                    x: 2281.05,
                    y: -748.9,
                    r: 0.039
                },
                "140": {
                    x: 2280.691,
                    y: -748.399,
                    r: 0.041
                },
                "141": {
                    x: 2279.21,
                    y: -746.49,
                    r: 0.05
                },
                "142": {
                    x: 2277.705,
                    y: -744.574,
                    r: 0.058
                },
                "143": {
                    x: 2276.9,
                    y: -743.6,
                    r: 0.06
                },
                "144": {
                    x: 2277.083,
                    y: -743.85,
                    r: 0.059
                },
                "145": {
                    x: 2278.006,
                    y: -745.056,
                    r: 0.054
                },
                "146": {
                    x: 2279.49,
                    y: -746.906,
                    r: 0.046
                },
                "147": {
                    x: 2280.412,
                    y: -748.085,
                    r: 0.04
                },
                "148": {
                    x: 2281.05,
                    y: -748.9,
                    r: 0.039
                },
                "149": {
                    x: 2280.741,
                    y: -748.399,
                    r: 0.041
                },
                "150": {
                    x: 2279.26,
                    y: -746.54,
                    r: 0.05
                },
                "151": {
                    x: 2277.755,
                    y: -744.674,
                    r: 0.058
                },
                "152": {
                    x: 2276.9,
                    y: -743.6,
                    r: 0.06
                },
                "153": {
                    x: 2277.133,
                    y: -743.85,
                    r: 0.059
                },
                "154": {
                    x: 2278.056,
                    y: -745.006,
                    r: 0.054
                },
                "155": {
                    x: 2279.49,
                    y: -746.856,
                    r: 0.046
                },
                "156": {
                    x: 2280.412,
                    y: -747.985,
                    r: 0.04
                },
                "157": {
                    x: 2281.05,
                    y: -748.9,
                    r: 0.039
                },
                "158": {
                    x: 2280.741,
                    y: -748.449,
                    r: 0.041
                },
                "159": {
                    x: 2279.26,
                    y: -746.64,
                    r: 0.05
                },
                "160": {
                    x: 2277.755,
                    y: -744.724,
                    r: 0.058
                },
                "161": {
                    x: 2276.9,
                    y: -743.6,
                    r: 0.06
                },
                "162": {
                    x: 2276.872,
                    y: -742.989,
                    r: 0.069
                },
                "163": {
                    x: 2277.2,
                    y: -742.45,
                    r: 0.077
                },
                "164": {
                    x: 2292.924,
                    y: -756.326,
                    r: 0.138
                },
                "165": {
                    x: 2308.642,
                    y: -770.031,
                    r: 0.198
                },
                "166": {
                    x: 2319.518,
                    y: -779.168,
                    r: 0.239
                },
                "167": {
                    x: 2325.557,
                    y: -784.217,
                    r: 0.262
                },
                "168": {
                    x: 2327.3,
                    y: -785.9,
                    r: 0.269
                },
                "172": {
                    x: 2325.65,
                    y: -782.75,
                    sx: 0.999,
                    kx: -0.266,
                    ky: 0.249,
                    r: 0
                },
                "173": {
                    x: 2274.1,
                    y: -777.3,
                    sx: 0.991,
                    sy: 1.011,
                    kx: -0.159,
                    ky: 0.093
                },
                "174": {
                    x: 2226.65,
                    y: -732.8,
                    sx: 1,
                    sy: 1,
                    kx: 0,
                    ky: 0,
                    r: -0.257
                },
                "175": {
                    x: 2233.421,
                    y: -681.34,
                    r: -0.783
                },
                "176": {
                    x: 2243.6,
                    y: -659.85,
                    r: -1.043
                },
                "177": {
                    x: 2282.95,
                    y: -635.2,
                    sx: 0.948,
                    sy: 1.036,
                    kx: 1.542,
                    ky: -1.536,
                    r: 0
                },
                "178": {
                    x: 2267.858,
                    y: -636.284,
                    sx: 0.966,
                    sy: 1.024,
                    kx: 1.541,
                    ky: -1.537
                },
                "179": {
                    x: 2256.782,
                    y: -637.127,
                    sx: 0.979,
                    sy: 1.014,
                    kx: 1.54,
                    ky: -1.538
                },
                "180": {
                    x: 2249.123,
                    y: -637.661,
                    sx: 0.988,
                    sy: 1.008
                },
                "181": {
                    x: 2244.191,
                    y: -637.956,
                    sx: 0.994,
                    sy: 1.004,
                    kx: 0,
                    ky: 0,
                    r: -1.539
                },
                "182": {
                    x: 2241.112,
                    y: -638.224,
                    sx: 0.997,
                    sy: 1.002
                },
                "183": {
                    x: 2239.451,
                    y: -638.272,
                    sx: 0.999,
                    sy: 1
                },
                "184": {
                    x: 2238.85,
                    y: -638.3,
                    sx: 1
                },
                "191": {
                    x: 2237.9,
                    y: -639.55,
                    sx: 0.948,
                    sy: 1.036,
                    kx: 1.589,
                    ky: -1.584,
                    r: 0
                },
                "192": {
                    x: 2197.2,
                    y: -635.9,
                    sx: 1,
                    sy: 1,
                    kx: 0,
                    ky: 0,
                    r: -0.71
                },
                "193": {
                    x: 2206.482,
                    y: -679.668,
                    r: -0.132
                },
                "194": {
                    x: 2209.9,
                    y: -686.25,
                    r: -0.052
                },
                "195": {
                    x: 2212.15,
                    y: -677.25
                },
                "196": {
                    x: 2370.45,
                    y: -747.1,
                    sx: 0.998,
                    sy: 1.003,
                    kx: 0.148,
                    ky: 3.009,
                    r: 0
                },
                "197": {
                    x: 2352.16,
                    y: -767.904,
                    kx: 0.103,
                    ky: 3.054
                },
                "198": {
                    x: 2339.666,
                    y: -781.798,
                    kx: 0.072,
                    ky: 3.085
                },
                "199": {
                    x: 2332.779,
                    y: -789.504,
                    kx: 0.055,
                    ky: 3.102
                },
                "200": {
                    x: 2330.5,
                    y: -791.8,
                    kx: 0.05,
                    ky: 3.107
                },
                "201": {
                    x: 2327.06,
                    y: -790.759,
                    kx: 0.065,
                    ky: 3.092
                },
                "202": {
                    x: 2319.2,
                    y: -788.15,
                    kx: 0.1,
                    ky: 3.057
                }
            })
            .addTimedChild(instance5, 0, 203, {
                "0": {
                    x: 2327.3,
                    y: -821.3,
                    sx: 1,
                    sy: 1,
                    kx: 0,
                    ky: 0,
                    r: -0.156
                },
                "21": {
                    x: 2326.76,
                    y: -821.332,
                    r: -0.159
                },
                "22": {
                    x: 2325.164,
                    y: -821.128,
                    r: -0.171
                },
                "23": {
                    x: 2322.855,
                    y: -820.947,
                    r: -0.187
                },
                "24": {
                    x: 2320.614,
                    y: -820.759,
                    r: -0.203
                },
                "25": {
                    x: 2318.984,
                    y: -820.601,
                    r: -0.215
                },
                "26": {
                    x: 2317.883,
                    y: -820.497,
                    r: -0.223
                },
                "27": {
                    x: 2317.312,
                    y: -820.417,
                    r: -0.227
                },
                "28": {
                    x: 2317.1,
                    y: -820.4,
                    r: -0.229
                },
                "59": {
                    x: 2317.184,
                    y: -820.505,
                    r: -0.225
                },
                "60": {
                    x: 2317.465,
                    y: -820.496,
                    r: -0.217
                },
                "61": {
                    x: 2317.65,
                    y: -820.535,
                    r: -0.207
                },
                "62": {
                    x: 2317.842,
                    y: -820.547,
                    r: -0.2
                },
                "63": {
                    x: 2317.903,
                    y: -820.528,
                    r: -0.197
                },
                "64": {
                    x: 2318,
                    y: -820.45,
                    r: -0.196
                },
                "88": {
                    x: 2319.9,
                    y: -818.65,
                    r: -0.157
                },
                "89": {
                    x: 2326.228,
                    y: -824.676,
                    r: -0.158
                },
                "90": {
                    x: 2333.553,
                    y: -831.754,
                    r: -0.159
                },
                "91": {
                    x: 2339.491,
                    y: -837.422,
                    r: -0.16
                },
                "92": {
                    x: 2343.739,
                    y: -841.415
                },
                "93": {
                    x: 2346.152,
                    y: -843.779,
                    r: -0.161
                },
                "94": {
                    x: 2346.95,
                    y: -844.55
                },
                "95": {
                    x: 2346.721,
                    y: -843.937,
                    r: -0.158
                },
                "96": {
                    x: 2345.842,
                    y: -841.217,
                    r: -0.15
                },
                "97": {
                    x: 2345.033,
                    y: -838.633,
                    r: -0.142
                },
                "98": {
                    x: 2344.75,
                    y: -837.8,
                    r: -0.139
                },
                "99": {
                    x: 2344.928,
                    y: -838.294,
                    r: -0.141
                },
                "100": {
                    x: 2345.494,
                    y: -839.989,
                    r: -0.146
                },
                "101": {
                    x: 2346.299,
                    y: -842.515,
                    r: -0.154
                },
                "102": {
                    x: 2346.838,
                    y: -844.103,
                    r: -0.159
                },
                "103": {
                    x: 2346.95,
                    y: -844.55,
                    r: -0.161
                },
                "104": {
                    x: 2346.721,
                    y: -843.937,
                    r: -0.158
                },
                "105": {
                    x: 2345.842,
                    y: -841.217,
                    r: -0.15
                },
                "106": {
                    x: 2345.033,
                    y: -838.633,
                    r: -0.142
                },
                "107": {
                    x: 2344.75,
                    y: -837.8,
                    r: -0.139
                },
                "108": {
                    x: 2344.928,
                    y: -838.294,
                    r: -0.141
                },
                "109": {
                    x: 2345.494,
                    y: -839.989,
                    r: -0.146
                },
                "110": {
                    x: 2346.299,
                    y: -842.515,
                    r: -0.154
                },
                "111": {
                    x: 2346.838,
                    y: -844.103,
                    r: -0.159
                },
                "112": {
                    x: 2346.95,
                    y: -844.55,
                    r: -0.161
                },
                "113": {
                    x: 2346.721,
                    y: -843.937,
                    r: -0.158
                },
                "114": {
                    x: 2345.842,
                    y: -841.217,
                    r: -0.15
                },
                "115": {
                    x: 2345.033,
                    y: -838.633,
                    r: -0.142
                },
                "116": {
                    x: 2344.75,
                    y: -837.8,
                    r: -0.139
                },
                "117": {
                    x: 2344.928,
                    y: -838.294,
                    r: -0.141
                },
                "118": {
                    x: 2345.494,
                    y: -839.989,
                    r: -0.146
                },
                "119": {
                    x: 2346.299,
                    y: -842.515,
                    r: -0.154
                },
                "120": {
                    x: 2346.838,
                    y: -844.103,
                    r: -0.159
                },
                "121": {
                    x: 2346.95,
                    y: -844.55,
                    r: -0.161
                },
                "122": {
                    x: 2346.721,
                    y: -843.937,
                    r: -0.158
                },
                "123": {
                    x: 2345.842,
                    y: -841.217,
                    r: -0.15
                },
                "124": {
                    x: 2345.033,
                    y: -838.633,
                    r: -0.142
                },
                "125": {
                    x: 2344.75,
                    y: -837.8,
                    r: -0.139
                },
                "126": {
                    x: 2344.928,
                    y: -838.294,
                    r: -0.141
                },
                "127": {
                    x: 2345.494,
                    y: -839.989,
                    r: -0.146
                },
                "128": {
                    x: 2346.299,
                    y: -842.515,
                    r: -0.154
                },
                "129": {
                    x: 2346.838,
                    y: -844.103,
                    r: -0.159
                },
                "130": {
                    x: 2346.95,
                    y: -844.55,
                    r: -0.161
                },
                "131": {
                    x: 2346.721,
                    y: -843.937,
                    r: -0.158
                },
                "132": {
                    x: 2345.842,
                    y: -841.217,
                    r: -0.15
                },
                "133": {
                    x: 2345.033,
                    y: -838.633,
                    r: -0.142
                },
                "134": {
                    x: 2344.75,
                    y: -837.8,
                    r: -0.139
                },
                "135": {
                    x: 2344.928,
                    y: -838.294,
                    r: -0.141
                },
                "136": {
                    x: 2345.494,
                    y: -839.989,
                    r: -0.146
                },
                "137": {
                    x: 2346.299,
                    y: -842.515,
                    r: -0.154
                },
                "138": {
                    x: 2346.838,
                    y: -844.103,
                    r: -0.159
                },
                "139": {
                    x: 2346.95,
                    y: -844.55,
                    r: -0.161
                },
                "140": {
                    x: 2346.721,
                    y: -843.937,
                    r: -0.158
                },
                "141": {
                    x: 2345.842,
                    y: -841.217,
                    r: -0.15
                },
                "142": {
                    x: 2345.033,
                    y: -838.633,
                    r: -0.142
                },
                "143": {
                    x: 2344.75,
                    y: -837.8,
                    r: -0.139
                },
                "144": {
                    x: 2344.928,
                    y: -838.294,
                    r: -0.141
                },
                "145": {
                    x: 2345.494,
                    y: -839.989,
                    r: -0.146
                },
                "146": {
                    x: 2346.299,
                    y: -842.515,
                    r: -0.154
                },
                "147": {
                    x: 2346.838,
                    y: -844.103,
                    r: -0.159
                },
                "148": {
                    x: 2346.95,
                    y: -844.55,
                    r: -0.161
                },
                "149": {
                    x: 2346.721,
                    y: -843.937,
                    r: -0.158
                },
                "150": {
                    x: 2345.842,
                    y: -841.217,
                    r: -0.15
                },
                "151": {
                    x: 2345.033,
                    y: -838.633,
                    r: -0.142
                },
                "152": {
                    x: 2344.75,
                    y: -837.8,
                    r: -0.139
                },
                "153": {
                    x: 2344.928,
                    y: -838.294,
                    r: -0.141
                },
                "154": {
                    x: 2345.494,
                    y: -839.989,
                    r: -0.146
                },
                "155": {
                    x: 2346.299,
                    y: -842.515,
                    r: -0.154
                },
                "156": {
                    x: 2346.838,
                    y: -844.103,
                    r: -0.159
                },
                "157": {
                    x: 2346.95,
                    y: -844.55,
                    r: -0.161
                },
                "158": {
                    x: 2346.721,
                    y: -843.937,
                    r: -0.158
                },
                "159": {
                    x: 2345.842,
                    y: -841.217,
                    r: -0.15
                },
                "160": {
                    x: 2345.033,
                    y: -838.633,
                    r: -0.142
                },
                "161": {
                    x: 2344.75,
                    y: -837.8,
                    r: -0.139
                },
                "162": {
                    x: 2345.723,
                    y: -836.793,
                    r: -0.131
                },
                "163": {
                    x: 2346.65,
                    y: -835.55,
                    r: -0.123
                },
                "164": {
                    x: 2367.962,
                    y: -845.4,
                    r: -0.056
                },
                "165": {
                    x: 2389.167,
                    y: -855.062,
                    r: 0.01
                },
                "166": {
                    x: 2403.489,
                    y: -861.551,
                    r: 0.055
                },
                "167": {
                    x: 2411.435,
                    y: -865.212,
                    r: 0.079
                },
                "168": {
                    x: 2413.95,
                    y: -866.25,
                    r: 0.087
                },
                "172": {
                    x: 2411,
                    y: -865.7,
                    sx: 0.999,
                    sy: 0.999,
                    r: 0.092
                },
                "173": {
                    x: 2338.95,
                    y: -867.45,
                    sx: 1,
                    sy: 1,
                    r: -0.431
                },
                "174": {
                    x: 2261.7,
                    y: -848.1,
                    r: -0.356
                },
                "175": {
                    x: 2208.165,
                    y: -793.405,
                    r: -0.757
                },
                "176": {
                    x: 2181.7,
                    y: -766.1,
                    r: -0.956
                },
                "177": {
                    x: 2174.15,
                    y: -695.9,
                    sx: 0.95,
                    sy: 1.035,
                    kx: 1.462,
                    ky: -1.441,
                    r: 0
                },
                "178": {
                    x: 2160.366,
                    y: -698.142,
                    sx: 0.967,
                    sy: 1.023,
                    kx: 1.467,
                    ky: -1.453
                },
                "179": {
                    x: 2150.174,
                    y: -699.707,
                    sx: 0.979,
                    sy: 1.014,
                    kx: 1.471,
                    ky: -1.463
                },
                "180": {
                    x: 2143.22,
                    y: -700.774,
                    sx: 0.988,
                    sy: 1.008,
                    kx: 1.474,
                    ky: -1.469
                },
                "181": {
                    x: 2138.601,
                    y: -701.501,
                    sx: 0.994,
                    sy: 1.004,
                    kx: 1.476,
                    ky: -1.473
                },
                "182": {
                    x: 2135.781,
                    y: -701.983,
                    sx: 0.997,
                    sy: 1.002,
                    kx: 1.477,
                    ky: -1.476
                },
                "183": {
                    x: 2134.285,
                    y: -702.253,
                    sx: 0.999,
                    sy: 1,
                    kx: 0,
                    ky: 0,
                    r: -1.477
                },
                "184": {
                    x: 2133.8,
                    y: -702.3,
                    sx: 1,
                    r: -1.478
                },
                "191": {
                    x: 2126.35,
                    y: -695,
                    sx: 0.95,
                    sy: 1.035,
                    kx: 1.535,
                    ky: -1.514,
                    r: 0
                },
                "192": {
                    x: 2171.1,
                    y: -756.6,
                    sx: 1,
                    sy: 1,
                    kx: 0,
                    ky: 0,
                    r: -0.554
                },
                "193": {
                    x: 2257.84,
                    y: -788.672,
                    r: -0.09
                },
                "194": {
                    x: 2269.85,
                    y: -793.15,
                    r: -0.025
                },
                "195": {
                    x: 2272.1,
                    y: -784.15,
                    r: 0.027
                },
                "196": {
                    x: 2291,
                    y: -837.85,
                    kx: 0.05,
                    ky: 3.092,
                    r: 0
                },
                "197": {
                    x: 2280.634,
                    y: -862.497,
                    kx: -0.072,
                    ky: -3.069
                },
                "198": {
                    x: 2273.6,
                    y: -879.202,
                    kx: -0.155,
                    ky: -2.987
                },
                "199": {
                    x: 2269.719,
                    y: -888.239,
                    kx: -0.2,
                    ky: -2.942
                },
                "200": {
                    x: 2268.55,
                    y: -890.95,
                    kx: -0.213,
                    ky: -2.928
                },
                "201": {
                    x: 2263.717,
                    y: -888.862,
                    kx: -0.198,
                    ky: -2.943
                },
                "202": {
                    x: 2252.3,
                    y: -884,
                    kx: -0.163,
                    ky: -2.979
                }
            })
            .addTimedChild(instance4, 0, 203, {
                "0": {
                    x: 2254.1,
                    y: -825.45,
                    sx: 1,
                    sy: 1,
                    kx: 0,
                    ky: 0,
                    r: -0.048
                },
                "21": {
                    x: 2253.466,
                    y: -825.216,
                    r: -0.051
                },
                "22": {
                    x: 2251.828,
                    y: -824.516,
                    r: -0.058
                },
                "23": {
                    x: 2249.496,
                    y: -823.544,
                    r: -0.069
                },
                "24": {
                    x: 2247.286,
                    y: -822.652,
                    r: -0.079
                },
                "25": {
                    x: 2245.527,
                    y: -821.93,
                    r: -0.087
                },
                "26": {
                    x: 2244.423,
                    y: -821.454,
                    r: -0.092
                },
                "27": {
                    x: 2243.797,
                    y: -821.182,
                    r: -0.094
                },
                "28": {
                    x: 2243.8,
                    y: -821.1,
                    r: -0.095
                },
                "59": {
                    x: 2243.942,
                    y: -821.189,
                    r: -0.094
                },
                "60": {
                    x: 2244.187,
                    y: -821.388,
                    r: -0.092
                },
                "61": {
                    x: 2244.519,
                    y: -821.511,
                    r: -0.09
                },
                "62": {
                    x: 2244.729,
                    y: -821.66,
                    r: -0.089
                },
                "63": {
                    x: 2244.858,
                    y: -821.746,
                    r: -0.088
                },
                "64": {
                    x: 2244.7,
                    y: -821.7,
                    r: -0.087
                },
                "88": {
                    x: 2246.65,
                    y: -821.15,
                    r: -0.07
                },
                "89": {
                    x: 2252.966,
                    y: -829.076,
                    r: -0.045
                },
                "90": {
                    x: 2260.604,
                    y: -838.429,
                    r: -0.015
                },
                "91": {
                    x: 2266.739,
                    y: -845.882,
                    r: 0.009
                },
                "92": {
                    x: 2271.093,
                    y: -851.136,
                    r: 0.026
                },
                "93": {
                    x: 2273.646,
                    y: -854.16,
                    r: 0.036
                },
                "94": {
                    x: 2274.4,
                    y: -855.05,
                    r: 0.039
                },
                "95": {
                    x: 2274.231,
                    y: -854.514,
                    r: 0.041
                },
                "96": {
                    x: 2273.444,
                    y: -852.405,
                    r: 0.05
                },
                "97": {
                    x: 2272.584,
                    y: -850.28,
                    r: 0.058
                },
                "98": {
                    x: 2272.5,
                    y: -849.85,
                    r: 0.06
                },
                "99": {
                    x: 2272.685,
                    y: -850.193,
                    r: 0.059
                },
                "100": {
                    x: 2273.153,
                    y: -851.523,
                    r: 0.054
                },
                "101": {
                    x: 2274.066,
                    y: -853.629,
                    r: 0.046
                },
                "102": {
                    x: 2274.536,
                    y: -854.926,
                    r: 0.04
                },
                "103": {
                    x: 2274.4,
                    y: -855.05,
                    r: 0.039
                },
                "104": {
                    x: 2274.231,
                    y: -854.514,
                    r: 0.041
                },
                "105": {
                    x: 2273.394,
                    y: -852.405,
                    r: 0.05
                },
                "106": {
                    x: 2272.534,
                    y: -850.23,
                    r: 0.058
                },
                "107": {
                    x: 2272.5,
                    y: -849.85,
                    r: 0.06
                },
                "108": {
                    x: 2272.685,
                    y: -850.193,
                    r: 0.059
                },
                "109": {
                    x: 2273.203,
                    y: -851.523,
                    r: 0.054
                },
                "110": {
                    x: 2274.116,
                    y: -853.629,
                    r: 0.046
                },
                "111": {
                    x: 2274.636,
                    y: -854.926,
                    r: 0.04
                },
                "112": {
                    x: 2274.4,
                    y: -855.05,
                    r: 0.039
                },
                "113": {
                    x: 2274.231,
                    y: -854.514,
                    r: 0.041
                },
                "114": {
                    x: 2273.344,
                    y: -852.405,
                    r: 0.05
                },
                "115": {
                    x: 2272.434,
                    y: -850.23,
                    r: 0.058
                },
                "116": {
                    x: 2272.5,
                    y: -849.85,
                    r: 0.06
                },
                "117": {
                    x: 2272.685,
                    y: -850.193,
                    r: 0.059
                },
                "118": {
                    x: 2273.203,
                    y: -851.523,
                    r: 0.054
                },
                "119": {
                    x: 2274.166,
                    y: -853.629,
                    r: 0.046
                },
                "120": {
                    x: 2274.686,
                    y: -854.976,
                    r: 0.04
                },
                "121": {
                    x: 2274.4,
                    y: -855.05,
                    r: 0.039
                },
                "122": {
                    x: 2274.231,
                    y: -854.514,
                    r: 0.041
                },
                "123": {
                    x: 2273.344,
                    y: -852.355,
                    r: 0.05
                },
                "124": {
                    x: 2272.384,
                    y: -850.18,
                    r: 0.058
                },
                "125": {
                    x: 2272.5,
                    y: -849.85,
                    r: 0.06
                },
                "126": {
                    x: 2272.735,
                    y: -850.193,
                    r: 0.059
                },
                "127": {
                    x: 2273.253,
                    y: -851.523,
                    r: 0.054
                },
                "128": {
                    x: 2274.216,
                    y: -853.679,
                    r: 0.046
                },
                "129": {
                    x: 2274.736,
                    y: -855.026,
                    r: 0.04
                },
                "130": {
                    x: 2274.4,
                    y: -855.05,
                    r: 0.039
                },
                "131": {
                    x: 2274.231,
                    y: -854.514,
                    r: 0.041
                },
                "132": {
                    x: 2273.294,
                    y: -852.355,
                    r: 0.05
                },
                "133": {
                    x: 2272.334,
                    y: -850.13,
                    r: 0.058
                },
                "134": {
                    x: 2272.5,
                    y: -849.85,
                    r: 0.06
                },
                "135": {
                    x: 2272.735,
                    y: -850.193,
                    r: 0.059
                },
                "136": {
                    x: 2273.253,
                    y: -851.573,
                    r: 0.054
                },
                "137": {
                    x: 2274.216,
                    y: -853.729,
                    r: 0.046
                },
                "138": {
                    x: 2274.736,
                    y: -855.076,
                    r: 0.04
                },
                "139": {
                    x: 2274.4,
                    y: -855.05,
                    r: 0.039
                },
                "140": {
                    x: 2274.181,
                    y: -854.464,
                    r: 0.041
                },
                "141": {
                    x: 2273.294,
                    y: -852.305,
                    r: 0.05
                },
                "142": {
                    x: 2272.334,
                    y: -850.13,
                    r: 0.058
                },
                "143": {
                    x: 2272.5,
                    y: -849.85,
                    r: 0.06
                },
                "144": {
                    x: 2272.735,
                    y: -850.242,
                    r: 0.059
                },
                "145": {
                    x: 2273.253,
                    y: -851.573,
                    r: 0.054
                },
                "146": {
                    x: 2274.266,
                    y: -853.779,
                    r: 0.046
                },
                "147": {
                    x: 2274.786,
                    y: -855.126,
                    r: 0.04
                },
                "148": {
                    x: 2274.4,
                    y: -855.05,
                    r: 0.039
                },
                "149": {
                    x: 2274.181,
                    y: -854.464,
                    r: 0.041
                },
                "150": {
                    x: 2273.194,
                    y: -852.305,
                    r: 0.05
                },
                "151": {
                    x: 2272.284,
                    y: -850.08,
                    r: 0.058
                },
                "152": {
                    x: 2272.5,
                    y: -849.85,
                    r: 0.06
                },
                "153": {
                    x: 2272.735,
                    y: -850.242,
                    r: 0.059
                },
                "154": {
                    x: 2273.303,
                    y: -851.573,
                    r: 0.054
                },
                "155": {
                    x: 2274.316,
                    y: -853.779,
                    r: 0.046
                },
                "156": {
                    x: 2274.836,
                    y: -855.126,
                    r: 0.04
                },
                "157": {
                    x: 2274.4,
                    y: -855.05,
                    r: 0.039
                },
                "158": {
                    x: 2274.181,
                    y: -854.464,
                    r: 0.041
                },
                "159": {
                    x: 2273.194,
                    y: -852.255,
                    r: 0.05
                },
                "160": {
                    x: 2272.234,
                    y: -850.03,
                    r: 0.058
                },
                "161": {
                    x: 2272.5,
                    y: -849.85,
                    r: 0.06
                },
                "162": {
                    x: 2273.603,
                    y: -849.419,
                    r: 0.069
                },
                "163": {
                    x: 2274.6,
                    y: -848.8,
                    r: 0.077
                },
                "164": {
                    x: 2296.71,
                    y: -862.335,
                    r: 0.138
                },
                "165": {
                    x: 2318.844,
                    y: -875.563,
                    r: 0.198
                },
                "166": {
                    x: 2333.979,
                    y: -884.344,
                    r: 0.239
                },
                "167": {
                    x: 2342.464,
                    y: -889.182,
                    r: 0.262
                },
                "168": {
                    x: 2345.05,
                    y: -890.75,
                    r: 0.269
                },
                "172": {
                    x: 2343.2,
                    y: -887.4,
                    sx: 0.999,
                    kx: -0.266,
                    ky: 0.249,
                    r: 0
                },
                "173": {
                    x: 2263.2,
                    y: -868.25,
                    sx: 0.991,
                    sy: 1.011,
                    kx: -0.001,
                    ky: -0.065
                },
                "174": {
                    x: 2189.25,
                    y: -832.5,
                    sx: 1,
                    sy: 1,
                    kx: 0,
                    ky: 0,
                    r: -0.257
                },
                "175": {
                    x: 2153.959,
                    y: -745.68,
                    r: -0.783
                },
                "176": {
                    x: 2146.5,
                    y: -703.95,
                    r: -1.043
                },
                "177": {
                    x: 2172.8,
                    y: -628.25,
                    sx: 0.948,
                    sy: 1.036,
                    kx: 1.542,
                    ky: -1.536,
                    r: 0
                },
                "178": {
                    x: 2159.069,
                    y: -629.108,
                    sx: 0.966,
                    sy: 1.024,
                    kx: 1.541,
                    ky: -1.537
                },
                "179": {
                    x: 2148.954,
                    y: -629.805,
                    sx: 0.979,
                    sy: 1.014,
                    kx: 1.54,
                    ky: -1.538
                },
                "180": {
                    x: 2141.955,
                    y: -630.272,
                    sx: 0.988,
                    sy: 1.008
                },
                "181": {
                    x: 2137.409,
                    y: -630.523,
                    sx: 0.994,
                    sy: 1.004,
                    kx: 0,
                    ky: 0,
                    r: -1.539
                },
                "182": {
                    x: 2134.547,
                    y: -630.713,
                    sx: 0.997,
                    sy: 1.002
                },
                "183": {
                    x: 2133.079,
                    y: -630.747,
                    sx: 0.999,
                    sy: 1
                },
                "184": {
                    x: 2132.5,
                    y: -630.95,
                    sx: 1
                },
                "191": {
                    x: 2128.25,
                    y: -627.35,
                    sx: 0.948,
                    sy: 1.036,
                    kx: 1.589,
                    ky: -1.584,
                    r: 0
                },
                "192": {
                    x: 2116.4,
                    y: -713.4,
                    sx: 1.002,
                    sy: 1,
                    kx: 0.71,
                    ky: -0.649
                },
                "193": {
                    x: 2186.956,
                    y: -788.072,
                    kx: 0.031,
                    ky: -0.07
                },
                "194": {
                    x: 2199.5,
                    y: -796.95,
                    kx: -0.064,
                    ky: 0.01
                },
                "195": {
                    x: 2201.75,
                    y: -787.95
                },
                "196": {
                    x: 2364.1,
                    y: -849.9,
                    sx: 0.998,
                    sy: 1.003,
                    kx: 0.118,
                    ky: 3.039
                },
                "197": {
                    x: 2354.354,
                    y: -867.679,
                    kx: 0.036,
                    ky: 3.121
                },
                "198": {
                    x: 2347.373,
                    y: -879.417,
                    sx: 0.997,
                    kx: -0.019,
                    ky: -3.107
                },
                "199": {
                    x: 2343.514,
                    y: -885.788,
                    sx: 0.998,
                    kx: -0.049,
                    ky: -3.077
                },
                "200": {
                    x: 2342.2,
                    y: -887.8,
                    kx: -0.058,
                    ky: -3.068
                },
                "201": {
                    x: 2337.318,
                    y: -886.916,
                    sx: 0.997,
                    kx: -0.043,
                    ky: -3.083
                },
                "202": {
                    x: 2326,
                    y: -884.55,
                    sx: 0.998,
                    kx: -0.008,
                    ky: -3.119
                }
            })
            .addTimedChild(instance3, 0, 203, {
                "0": {
                    x: 2265.75,
                    y: -798.75,
                    sx: 1,
                    sy: 1,
                    kx: 0,
                    ky: 0,
                    r: 0.195
                },
                "21": {
                    x: 2265.278,
                    y: -798.578,
                    r: 0.196
                },
                "22": {
                    x: 2263.698,
                    y: -798.059,
                    r: 0.197
                },
                "23": {
                    x: 2261.531,
                    y: -797.227,
                    r: 0.199
                },
                "24": {
                    x: 2259.381,
                    y: -796.47,
                    r: 0.201
                },
                "25": {
                    x: 2257.803,
                    y: -795.835,
                    r: 0.203
                },
                "26": {
                    x: 2256.745,
                    y: -795.488,
                    r: 0.204
                },
                "27": {
                    x: 2256.137,
                    y: -795.266
                },
                "28": {
                    x: 2255.95,
                    y: -795.2
                },
                "59": {
                    x: 2255.958,
                    y: -795.272,
                    r: 0.208
                },
                "60": {
                    x: 2256.048,
                    y: -795.415,
                    r: 0.219
                },
                "61": {
                    x: 2256.12,
                    y: -795.577,
                    r: 0.229
                },
                "62": {
                    x: 2256.118,
                    y: -795.708,
                    r: 0.237
                },
                "63": {
                    x: 2256.193,
                    y: -795.794,
                    r: 0.241
                },
                "64": {
                    x: 2256.15,
                    y: -795.8,
                    r: 0.243
                },
                "88": {
                    x: 2257.85,
                    y: -795.3,
                    r: 0.234
                },
                "89": {
                    x: 2262.788,
                    y: -802.792,
                    r: 0.289
                },
                "90": {
                    x: 2268.607,
                    y: -811.782,
                    r: 0.355
                },
                "91": {
                    x: 2273.266,
                    y: -818.891,
                    r: 0.408
                },
                "92": {
                    x: 2276.499,
                    y: -823.961,
                    r: 0.445
                },
                "93": {
                    x: 2278.455,
                    y: -826.92,
                    r: 0.466
                },
                "94": {
                    x: 2279,
                    y: -827.85,
                    r: 0.474
                },
                "95": {
                    x: 2278.682,
                    y: -827.271,
                    r: 0.482
                },
                "96": {
                    x: 2277.401,
                    y: -824.995,
                    r: 0.512
                },
                "97": {
                    x: 2276.125,
                    y: -822.791,
                    r: 0.543
                },
                "98": {
                    x: 2275.8,
                    y: -822.2,
                    r: 0.551
                },
                "99": {
                    x: 2276.053,
                    y: -822.55,
                    r: 0.546
                },
                "100": {
                    x: 2276.836,
                    y: -823.938,
                    r: 0.527
                },
                "101": {
                    x: 2278.023,
                    y: -826.107,
                    r: 0.497
                },
                "102": {
                    x: 2278.82,
                    y: -827.554,
                    r: 0.479
                },
                "103": {
                    x: 2279,
                    y: -827.85,
                    r: 0.474
                },
                "104": {
                    x: 2278.682,
                    y: -827.271,
                    r: 0.482
                },
                "105": {
                    x: 2277.401,
                    y: -824.995,
                    r: 0.512
                },
                "106": {
                    x: 2276.125,
                    y: -822.791,
                    r: 0.543
                },
                "107": {
                    x: 2275.8,
                    y: -822.2,
                    r: 0.551
                },
                "108": {
                    x: 2276.053,
                    y: -822.55,
                    r: 0.546
                },
                "109": {
                    x: 2276.836,
                    y: -823.938,
                    r: 0.527
                },
                "110": {
                    x: 2278.023,
                    y: -826.107,
                    r: 0.497
                },
                "111": {
                    x: 2278.82,
                    y: -827.554,
                    r: 0.479
                },
                "112": {
                    x: 2279,
                    y: -827.85,
                    r: 0.474
                },
                "113": {
                    x: 2278.682,
                    y: -827.271,
                    r: 0.482
                },
                "114": {
                    x: 2277.401,
                    y: -824.995,
                    r: 0.512
                },
                "115": {
                    x: 2276.125,
                    y: -822.791,
                    r: 0.543
                },
                "116": {
                    x: 2275.8,
                    y: -822.2,
                    r: 0.551
                },
                "117": {
                    x: 2276.053,
                    y: -822.55,
                    r: 0.546
                },
                "118": {
                    x: 2276.836,
                    y: -823.938,
                    r: 0.527
                },
                "119": {
                    x: 2278.023,
                    y: -826.107,
                    r: 0.497
                },
                "120": {
                    x: 2278.82,
                    y: -827.554,
                    r: 0.479
                },
                "121": {
                    x: 2279,
                    y: -827.85,
                    r: 0.474
                },
                "122": {
                    x: 2278.682,
                    y: -827.271,
                    r: 0.482
                },
                "123": {
                    x: 2277.401,
                    y: -824.995,
                    r: 0.512
                },
                "124": {
                    x: 2276.125,
                    y: -822.791,
                    r: 0.543
                },
                "125": {
                    x: 2275.8,
                    y: -822.2,
                    r: 0.551
                },
                "126": {
                    x: 2276.053,
                    y: -822.55,
                    r: 0.546
                },
                "127": {
                    x: 2276.836,
                    y: -823.938,
                    r: 0.527
                },
                "128": {
                    x: 2278.023,
                    y: -826.107,
                    r: 0.497
                },
                "129": {
                    x: 2278.82,
                    y: -827.554,
                    r: 0.479
                },
                "130": {
                    x: 2279,
                    y: -827.85,
                    r: 0.474
                },
                "131": {
                    x: 2278.682,
                    y: -827.271,
                    r: 0.482
                },
                "132": {
                    x: 2277.401,
                    y: -824.995,
                    r: 0.512
                },
                "133": {
                    x: 2276.125,
                    y: -822.791,
                    r: 0.543
                },
                "134": {
                    x: 2275.8,
                    y: -822.2,
                    r: 0.551
                },
                "135": {
                    x: 2276.053,
                    y: -822.55,
                    r: 0.546
                },
                "136": {
                    x: 2276.836,
                    y: -823.938,
                    r: 0.527
                },
                "137": {
                    x: 2278.023,
                    y: -826.107,
                    r: 0.497
                },
                "138": {
                    x: 2278.82,
                    y: -827.554,
                    r: 0.479
                },
                "139": {
                    x: 2279,
                    y: -827.85,
                    r: 0.474
                },
                "140": {
                    x: 2278.682,
                    y: -827.271,
                    r: 0.482
                },
                "141": {
                    x: 2277.401,
                    y: -824.995,
                    r: 0.512
                },
                "142": {
                    x: 2276.125,
                    y: -822.791,
                    r: 0.543
                },
                "143": {
                    x: 2275.8,
                    y: -822.2,
                    r: 0.551
                },
                "144": {
                    x: 2276.053,
                    y: -822.55,
                    r: 0.546
                },
                "145": {
                    x: 2276.836,
                    y: -823.938,
                    r: 0.527
                },
                "146": {
                    x: 2278.023,
                    y: -826.107,
                    r: 0.497
                },
                "147": {
                    x: 2278.82,
                    y: -827.554,
                    r: 0.479
                },
                "148": {
                    x: 2279,
                    y: -827.85,
                    r: 0.474
                },
                "149": {
                    x: 2278.682,
                    y: -827.271,
                    r: 0.482
                },
                "150": {
                    x: 2277.401,
                    y: -824.995,
                    r: 0.512
                },
                "151": {
                    x: 2276.125,
                    y: -822.791,
                    r: 0.543
                },
                "152": {
                    x: 2275.8,
                    y: -822.2,
                    r: 0.551
                },
                "153": {
                    x: 2276.053,
                    y: -822.55,
                    r: 0.546
                },
                "154": {
                    x: 2276.836,
                    y: -823.938,
                    r: 0.527
                },
                "155": {
                    x: 2278.023,
                    y: -826.107,
                    r: 0.497
                },
                "156": {
                    x: 2278.82,
                    y: -827.554,
                    r: 0.479
                },
                "157": {
                    x: 2279,
                    y: -827.85,
                    r: 0.474
                },
                "158": {
                    x: 2278.682,
                    y: -827.271,
                    r: 0.482
                },
                "159": {
                    x: 2277.401,
                    y: -824.995,
                    r: 0.512
                },
                "160": {
                    x: 2276.125,
                    y: -822.791,
                    r: 0.543
                },
                "161": {
                    x: 2275.8,
                    y: -822.2,
                    r: 0.551
                },
                "162": {
                    x: 2276.335,
                    y: -821.742,
                    r: 0.575
                },
                "163": {
                    x: 2276.8,
                    y: -821.2,
                    r: 0.598
                },
                "164": {
                    x: 2305.65,
                    y: -833.6,
                    sx: 0.998,
                    sy: 1.033,
                    r: 0.822
                },
                "165": {
                    x: 2322.641,
                    y: -847.196,
                    sx: 0.999,
                    sy: 1.018,
                    r: 0.908
                },
                "166": {
                    x: 2334.067,
                    y: -856.317,
                    sx: 1,
                    sy: 1.007,
                    r: 0.966
                },
                "167": {
                    x: 2340.483,
                    y: -861.471,
                    sy: 1.002,
                    r: 0.999
                },
                "168": {
                    x: 2342.5,
                    y: -863.05,
                    sy: 1,
                    r: 1.009
                },
                "172": {
                    x: 2341.95,
                    y: -861.35,
                    sx: 0.998,
                    sy: 0.998,
                    r: 1.003
                },
                "173": {
                    x: 2272.9,
                    y: -841.75,
                    sx: 1,
                    sy: 1,
                    r: 0.447
                },
                "174": {
                    x: 2215.5,
                    y: -811.5,
                    r: -0.395
                },
                "175": {
                    x: 2193.997,
                    y: -745.221,
                    r: -1.198
                },
                "176": {
                    x: 2183.2,
                    y: -712.35,
                    r: -1.595
                },
                "177": {
                    x: 2203.45,
                    y: -639.75,
                    sx: 0.956,
                    sy: 1.074,
                    kx: 1.395,
                    ky: -1.346,
                    r: 0
                },
                "178": {
                    x: 2187.246,
                    y: -639.214,
                    sx: 0.971,
                    sy: 1.049,
                    kx: 1.338,
                    ky: -1.306
                },
                "179": {
                    x: 2175.423,
                    y: -638.708,
                    sx: 0.982,
                    sy: 1.03,
                    kx: 1.296,
                    ky: -1.276
                },
                "180": {
                    x: 2167.327,
                    y: -638.456,
                    sx: 0.99,
                    sy: 1.017,
                    kx: 1.267,
                    ky: -1.256
                },
                "181": {
                    x: 2161.89,
                    y: -638.219,
                    sx: 0.995,
                    sy: 1.009,
                    kx: 1.248,
                    ky: -1.242
                },
                "182": {
                    x: 2158.564,
                    y: -638.179,
                    sx: 0.998,
                    sy: 1.003,
                    kx: 1.236,
                    ky: -1.234
                },
                "183": {
                    x: 2156.867,
                    y: -638.014,
                    sx: 0.999,
                    sy: 1.001,
                    kx: 0,
                    ky: 0,
                    r: -1.23
                },
                "184": {
                    x: 2156.3,
                    y: -638,
                    sx: 1,
                    sy: 1,
                    r: -1.228
                },
                "191": {
                    x: 2158.45,
                    y: -639.75,
                    sx: 0.956,
                    sy: 1.074,
                    kx: 1.395,
                    ky: -1.346,
                    r: 0
                },
                "192": {
                    x: 2123.1,
                    y: -690.5,
                    sx: 1,
                    sy: 1.043,
                    kx: 0,
                    ky: 0,
                    r: 0.163
                },
                "193": {
                    x: 2187.003,
                    y: -762.06,
                    r: 0.634
                },
                "194": {
                    x: 2195.85,
                    y: -772.05,
                    r: 0.699
                },
                "195": {
                    x: 2196.45,
                    y: -775.1,
                    r: 1.126
                },
                "196": {
                    x: 2360.2,
                    y: -829.45,
                    sy: 1,
                    kx: 0.74,
                    ky: 2.402,
                    r: 0
                },
                "197": {
                    x: 2350.623,
                    y: -848.481,
                    kx: 0.889,
                    ky: 2.253
                },
                "198": {
                    x: 2344.185,
                    y: -861.298,
                    kx: 0.989,
                    ky: 2.152
                },
                "199": {
                    x: 2340.744,
                    y: -868.355,
                    kx: 1.044,
                    ky: 2.097
                },
                "200": {
                    x: 2339.6,
                    y: -870.55,
                    kx: 1.061,
                    ky: 2.08
                },
                "201": {
                    x: 2335.423,
                    y: -870.004,
                    kx: 1.107,
                    ky: 2.035
                },
                "202": {
                    x: 2325.55,
                    y: -868.6,
                    kx: 1.212,
                    ky: 1.93
                }
            })
            .addTimedChild(instance2, 0, 203, {
                "0": {
                    x: 2268.75,
                    y: -812.9,
                    sx: 1,
                    sy: 1,
                    kx: 0,
                    ky: 0,
                    r: 0.195
                },
                "21": {
                    x: 2268.284,
                    y: -812.727,
                    r: 0.196
                },
                "22": {
                    x: 2266.725,
                    y: -812.203,
                    r: 0.197
                },
                "23": {
                    x: 2264.537,
                    y: -811.365,
                    r: 0.199
                },
                "24": {
                    x: 2262.465,
                    y: -810.552,
                    r: 0.201
                },
                "25": {
                    x: 2260.859,
                    y: -809.962,
                    r: 0.203
                },
                "26": {
                    x: 2259.815,
                    y: -809.562,
                    r: 0.204
                },
                "27": {
                    x: 2259.215,
                    y: -809.388
                },
                "28": {
                    x: 2259.05,
                    y: -809.3
                },
                "59": {
                    x: 2259.164,
                    y: -809.41,
                    r: 0.208
                },
                "60": {
                    x: 2259.395,
                    y: -809.57,
                    r: 0.219
                },
                "61": {
                    x: 2259.568,
                    y: -809.645,
                    r: 0.229
                },
                "62": {
                    x: 2259.675,
                    y: -809.799,
                    r: 0.237
                },
                "63": {
                    x: 2259.81,
                    y: -809.871,
                    r: 0.241
                },
                "64": {
                    x: 2259.8,
                    y: -809.8,
                    r: 0.243
                },
                "88": {
                    x: 2261.4,
                    y: -809.35,
                    r: 0.234
                },
                "89": {
                    x: 2267.058,
                    y: -816.575,
                    r: 0.289
                },
                "90": {
                    x: 2273.726,
                    y: -825.15,
                    r: 0.355
                },
                "91": {
                    x: 2279.038,
                    y: -831.966,
                    r: 0.408
                },
                "92": {
                    x: 2282.857,
                    y: -836.858,
                    r: 0.445
                },
                "93": {
                    x: 2285.045,
                    y: -839.725,
                    r: 0.466
                },
                "94": {
                    x: 2285.7,
                    y: -840.6,
                    r: 0.474
                },
                "95": {
                    x: 2285.537,
                    y: -839.965,
                    r: 0.482
                },
                "96": {
                    x: 2284.642,
                    y: -837.425,
                    r: 0.512
                },
                "97": {
                    x: 2283.746,
                    y: -834.993,
                    r: 0.543
                },
                "98": {
                    x: 2283.45,
                    y: -834.35,
                    r: 0.551
                },
                "99": {
                    x: 2283.642,
                    y: -834.738,
                    r: 0.546
                },
                "100": {
                    x: 2284.19,
                    y: -836.319,
                    r: 0.527
                },
                "101": {
                    x: 2285.006,
                    y: -838.701,
                    r: 0.497
                },
                "102": {
                    x: 2285.564,
                    y: -840.229,
                    r: 0.479
                },
                "103": {
                    x: 2285.7,
                    y: -840.6,
                    r: 0.474
                },
                "104": {
                    x: 2285.537,
                    y: -839.965,
                    r: 0.482
                },
                "105": {
                    x: 2284.642,
                    y: -837.425,
                    r: 0.512
                },
                "106": {
                    x: 2283.746,
                    y: -834.993,
                    r: 0.543
                },
                "107": {
                    x: 2283.45,
                    y: -834.35,
                    r: 0.551
                },
                "108": {
                    x: 2283.642,
                    y: -834.738,
                    r: 0.546
                },
                "109": {
                    x: 2284.19,
                    y: -836.319,
                    r: 0.527
                },
                "110": {
                    x: 2285.006,
                    y: -838.701,
                    r: 0.497
                },
                "111": {
                    x: 2285.564,
                    y: -840.229,
                    r: 0.479
                },
                "112": {
                    x: 2285.7,
                    y: -840.6,
                    r: 0.474
                },
                "113": {
                    x: 2285.537,
                    y: -839.965,
                    r: 0.482
                },
                "114": {
                    x: 2284.642,
                    y: -837.425,
                    r: 0.512
                },
                "115": {
                    x: 2283.746,
                    y: -834.993,
                    r: 0.543
                },
                "116": {
                    x: 2283.45,
                    y: -834.35,
                    r: 0.551
                },
                "117": {
                    x: 2283.642,
                    y: -834.738,
                    r: 0.546
                },
                "118": {
                    x: 2284.19,
                    y: -836.319,
                    r: 0.527
                },
                "119": {
                    x: 2285.006,
                    y: -838.701,
                    r: 0.497
                },
                "120": {
                    x: 2285.564,
                    y: -840.229,
                    r: 0.479
                },
                "121": {
                    x: 2285.7,
                    y: -840.6,
                    r: 0.474
                },
                "122": {
                    x: 2285.537,
                    y: -839.965,
                    r: 0.482
                },
                "123": {
                    x: 2284.642,
                    y: -837.425,
                    r: 0.512
                },
                "124": {
                    x: 2283.746,
                    y: -834.993,
                    r: 0.543
                },
                "125": {
                    x: 2283.45,
                    y: -834.35,
                    r: 0.551
                },
                "126": {
                    x: 2283.642,
                    y: -834.738,
                    r: 0.546
                },
                "127": {
                    x: 2284.19,
                    y: -836.319,
                    r: 0.527
                },
                "128": {
                    x: 2285.006,
                    y: -838.701,
                    r: 0.497
                },
                "129": {
                    x: 2285.564,
                    y: -840.229,
                    r: 0.479
                },
                "130": {
                    x: 2285.7,
                    y: -840.6,
                    r: 0.474
                },
                "131": {
                    x: 2285.537,
                    y: -839.965,
                    r: 0.482
                },
                "132": {
                    x: 2284.642,
                    y: -837.425,
                    r: 0.512
                },
                "133": {
                    x: 2283.746,
                    y: -834.993,
                    r: 0.543
                },
                "134": {
                    x: 2283.45,
                    y: -834.35,
                    r: 0.551
                },
                "135": {
                    x: 2283.642,
                    y: -834.738,
                    r: 0.546
                },
                "136": {
                    x: 2284.19,
                    y: -836.319,
                    r: 0.527
                },
                "137": {
                    x: 2285.006,
                    y: -838.701,
                    r: 0.497
                },
                "138": {
                    x: 2285.564,
                    y: -840.229,
                    r: 0.479
                },
                "139": {
                    x: 2285.7,
                    y: -840.6,
                    r: 0.474
                },
                "140": {
                    x: 2285.537,
                    y: -839.965,
                    r: 0.482
                },
                "141": {
                    x: 2284.642,
                    y: -837.425,
                    r: 0.512
                },
                "142": {
                    x: 2283.746,
                    y: -834.993,
                    r: 0.543
                },
                "143": {
                    x: 2283.45,
                    y: -834.35,
                    r: 0.551
                },
                "144": {
                    x: 2283.642,
                    y: -834.738,
                    r: 0.546
                },
                "145": {
                    x: 2284.19,
                    y: -836.319,
                    r: 0.527
                },
                "146": {
                    x: 2285.006,
                    y: -838.701,
                    r: 0.497
                },
                "147": {
                    x: 2285.564,
                    y: -840.229,
                    r: 0.479
                },
                "148": {
                    x: 2285.7,
                    y: -840.6,
                    r: 0.474
                },
                "149": {
                    x: 2285.537,
                    y: -839.965,
                    r: 0.482
                },
                "150": {
                    x: 2284.642,
                    y: -837.425,
                    r: 0.512
                },
                "151": {
                    x: 2283.746,
                    y: -834.993,
                    r: 0.543
                },
                "152": {
                    x: 2283.45,
                    y: -834.35,
                    r: 0.551
                },
                "153": {
                    x: 2283.642,
                    y: -834.738,
                    r: 0.546
                },
                "154": {
                    x: 2284.19,
                    y: -836.319,
                    r: 0.527
                },
                "155": {
                    x: 2285.006,
                    y: -838.701,
                    r: 0.497
                },
                "156": {
                    x: 2285.564,
                    y: -840.229,
                    r: 0.479
                },
                "157": {
                    x: 2285.7,
                    y: -840.6,
                    r: 0.474
                },
                "158": {
                    x: 2285.537,
                    y: -839.965,
                    r: 0.482
                },
                "159": {
                    x: 2284.642,
                    y: -837.425,
                    r: 0.512
                },
                "160": {
                    x: 2283.746,
                    y: -834.993,
                    r: 0.543
                },
                "161": {
                    x: 2283.45,
                    y: -834.35,
                    r: 0.551
                },
                "162": {
                    x: 2284.267,
                    y: -833.709,
                    r: 0.575
                },
                "163": {
                    x: 2285.05,
                    y: -833,
                    r: 0.598
                },
                "164": {
                    x: 2306.509,
                    y: -845.874,
                    r: 0.759
                },
                "165": {
                    x: 2327.714,
                    y: -858.592,
                    r: 0.918
                },
                "166": {
                    x: 2342.031,
                    y: -867.077,
                    r: 1.025
                },
                "167": {
                    x: 2350.02,
                    y: -871.876,
                    r: 1.085
                },
                "168": {
                    x: 2352.5,
                    y: -873.35,
                    r: 1.104
                },
                "172": {
                    x: 2351.6,
                    y: -871.55,
                    sx: 0.998,
                    sy: 0.998,
                    r: 1.095
                },
                "173": {
                    x: 2275.95,
                    y: -855.85,
                    sx: 1,
                    sy: 1,
                    r: 0.542
                },
                "174": {
                    x: 2205.75,
                    y: -824.6,
                    r: -0.333
                },
                "175": {
                    x: 2180.218,
                    y: -746.701,
                    r: -1.136
                },
                "176": {
                    x: 2167.6,
                    y: -708,
                    r: -1.534
                },
                "177": {
                    x: 2186,
                    y: -639,
                    sx: 0.96,
                    sy: 1.071,
                    kx: 1.34,
                    ky: -1.277,
                    r: 0
                },
                "178": {
                    x: 2170.336,
                    y: -639.256,
                    sx: 0.974,
                    sy: 1.046,
                    kx: 1.28,
                    ky: -1.239
                },
                "179": {
                    x: 2158.787,
                    y: -639.388,
                    sx: 0.984,
                    sy: 1.029,
                    kx: 1.237,
                    ky: -1.211
                },
                "180": {
                    x: 2150.912,
                    y: -639.466,
                    sx: 0.991,
                    sy: 1.016,
                    kx: 1.207,
                    ky: -1.192
                },
                "181": {
                    x: 2145.645,
                    y: -639.57,
                    sx: 0.995,
                    sy: 1.008,
                    kx: 1.187,
                    ky: -1.18
                },
                "182": {
                    x: 2142.418,
                    y: -639.562,
                    sx: 0.998,
                    sy: 1.003,
                    kx: 1.175,
                    ky: -1.172
                },
                "183": {
                    x: 2140.649,
                    y: -639.597,
                    sx: 0.999,
                    sy: 1.001,
                    kx: 0,
                    ky: 0,
                    r: -1.168
                },
                "184": {
                    x: 2140.15,
                    y: -639.55,
                    sx: 1,
                    sy: 1,
                    r: -1.167
                },
                "191": {
                    x: 2141,
                    y: -639,
                    sx: 0.96,
                    sy: 1.071,
                    kx: 1.34,
                    ky: -1.277,
                    r: 0
                },
                "192": {
                    x: 2131.4,
                    y: -709.5,
                    sx: 1,
                    sy: 1,
                    kx: 0,
                    ky: 0,
                    r: 0.578
                },
                "193": {
                    x: 2202.824,
                    y: -774.989,
                    r: 1.048
                },
                "194": {
                    x: 2212.75,
                    y: -784.1,
                    r: 1.114
                },
                "195": {
                    x: 2214.5,
                    y: -779.05,
                    r: 1.541
                },
                "196": {
                    x: 2350.3,
                    y: -839.95,
                    kx: 0.962,
                    ky: 2.18,
                    r: 0
                },
                "197": {
                    x: 2339.476,
                    y: -857.296,
                    kx: 1.111,
                    ky: 2.031
                },
                "198": {
                    x: 2332.154,
                    y: -869.033,
                    kx: 1.211,
                    ky: 1.931
                },
                "199": {
                    x: 2328.107,
                    y: -875.459,
                    kx: 1.266,
                    ky: 1.876
                },
                "200": {
                    x: 2326.85,
                    y: -877.4,
                    kx: 1.283,
                    ky: 1.859
                },
                "201": {
                    x: 2322.411,
                    y: -876.151,
                    kx: 1.328,
                    ky: 1.813
                },
                "202": {
                    x: 2311.9,
                    y: -873.45,
                    kx: 1.434,
                    ky: 1.708
                }
            })
            .addTimedChild(instance1, 0, 203, {
                "0": {
                    x: 2249.2,
                    y: -727.45,
                    sx: 1,
                    sy: 1,
                    kx: 0,
                    ky: 0,
                    r: 0.33
                },
                "21": {
                    x: 2248.687,
                    y: -727.28
                },
                "22": {
                    x: 2247.052,
                    y: -726.785,
                    r: 0.332
                },
                "23": {
                    x: 2244.678,
                    y: -725.97,
                    r: 0.334
                },
                "24": {
                    x: 2242.449,
                    y: -725.277,
                    r: 0.336
                },
                "25": {
                    x: 2240.698,
                    y: -724.73,
                    r: 0.337
                },
                "26": {
                    x: 2239.635,
                    y: -724.338,
                    r: 0.338
                },
                "27": {
                    x: 2239.012,
                    y: -724.171,
                    r: 0.339
                },
                "28": {
                    x: 2238.8,
                    y: -724.05
                },
                "59": {
                    x: 2238.566,
                    y: -724.275,
                    r: 0.343
                },
                "60": {
                    x: 2237.892,
                    y: -724.647,
                    r: 0.353
                },
                "61": {
                    x: 2237.215,
                    y: -724.988,
                    r: 0.363
                },
                "62": {
                    x: 2236.681,
                    y: -725.207,
                    r: 0.371
                },
                "63": {
                    x: 2236.456,
                    y: -725.376,
                    r: 0.375
                },
                "64": {
                    x: 2236.35,
                    y: -725.35,
                    r: 0.377
                },
                "88": {
                    x: 2238.65,
                    y: -724.65,
                    r: 0.368
                },
                "89": {
                    x: 2239.771,
                    y: -733.635,
                    r: 0.424
                },
                "90": {
                    x: 2241.122,
                    y: -744.417,
                    r: 0.489
                },
                "91": {
                    x: 2242.182,
                    y: -753.037,
                    r: 0.542
                },
                "92": {
                    x: 2242.993,
                    y: -759.072,
                    r: 0.579
                },
                "93": {
                    x: 2243.41,
                    y: -762.614,
                    r: 0.601
                },
                "94": {
                    x: 2243.55,
                    y: -763.75,
                    r: 0.608
                },
                "95": {
                    x: 2242.695,
                    y: -763.451,
                    r: 0.616
                },
                "96": {
                    x: 2239.506,
                    y: -762.421,
                    r: 0.647
                },
                "97": {
                    x: 2236.303,
                    y: -761.363,
                    r: 0.677
                },
                "98": {
                    x: 2235.45,
                    y: -761.05,
                    r: 0.686
                },
                "99": {
                    x: 2235.961,
                    y: -761.199,
                    r: 0.681
                },
                "100": {
                    x: 2237.97,
                    y: -761.912,
                    r: 0.662
                },
                "101": {
                    x: 2241.08,
                    y: -762.873,
                    r: 0.632
                },
                "102": {
                    x: 2243.097,
                    y: -763.619,
                    r: 0.613
                },
                "103": {
                    x: 2243.55,
                    y: -763.75,
                    r: 0.608
                },
                "104": {
                    x: 2242.695,
                    y: -763.451,
                    r: 0.616
                },
                "105": {
                    x: 2239.506,
                    y: -762.421,
                    r: 0.647
                },
                "106": {
                    x: 2236.303,
                    y: -761.363,
                    r: 0.677
                },
                "107": {
                    x: 2235.45,
                    y: -761.05,
                    r: 0.686
                },
                "108": {
                    x: 2235.961,
                    y: -761.199,
                    r: 0.681
                },
                "109": {
                    x: 2237.97,
                    y: -761.912,
                    r: 0.662
                },
                "110": {
                    x: 2241.08,
                    y: -762.873,
                    r: 0.632
                },
                "111": {
                    x: 2243.097,
                    y: -763.619,
                    r: 0.613
                },
                "112": {
                    x: 2243.55,
                    y: -763.75,
                    r: 0.608
                },
                "113": {
                    x: 2242.695,
                    y: -763.451,
                    r: 0.616
                },
                "114": {
                    x: 2239.506,
                    y: -762.421,
                    r: 0.647
                },
                "115": {
                    x: 2236.303,
                    y: -761.363,
                    r: 0.677
                },
                "116": {
                    x: 2235.45,
                    y: -761.05,
                    r: 0.686
                },
                "117": {
                    x: 2235.961,
                    y: -761.199,
                    r: 0.681
                },
                "118": {
                    x: 2237.97,
                    y: -761.912,
                    r: 0.662
                },
                "119": {
                    x: 2241.08,
                    y: -762.873,
                    r: 0.632
                },
                "120": {
                    x: 2243.097,
                    y: -763.619,
                    r: 0.613
                },
                "121": {
                    x: 2243.55,
                    y: -763.75,
                    r: 0.608
                },
                "122": {
                    x: 2242.695,
                    y: -763.451,
                    r: 0.616
                },
                "123": {
                    x: 2239.506,
                    y: -762.421,
                    r: 0.647
                },
                "124": {
                    x: 2236.303,
                    y: -761.363,
                    r: 0.677
                },
                "125": {
                    x: 2235.45,
                    y: -761.05,
                    r: 0.686
                },
                "126": {
                    x: 2235.961,
                    y: -761.199,
                    r: 0.681
                },
                "127": {
                    x: 2237.97,
                    y: -761.912,
                    r: 0.662
                },
                "128": {
                    x: 2241.08,
                    y: -762.873,
                    r: 0.632
                },
                "129": {
                    x: 2243.097,
                    y: -763.619,
                    r: 0.613
                },
                "130": {
                    x: 2243.55,
                    y: -763.75,
                    r: 0.608
                },
                "131": {
                    x: 2242.695,
                    y: -763.451,
                    r: 0.616
                },
                "132": {
                    x: 2239.506,
                    y: -762.421,
                    r: 0.647
                },
                "133": {
                    x: 2236.303,
                    y: -761.363,
                    r: 0.677
                },
                "134": {
                    x: 2235.45,
                    y: -761.05,
                    r: 0.686
                },
                "135": {
                    x: 2235.961,
                    y: -761.199,
                    r: 0.681
                },
                "136": {
                    x: 2237.97,
                    y: -761.912,
                    r: 0.662
                },
                "137": {
                    x: 2241.08,
                    y: -762.873,
                    r: 0.632
                },
                "138": {
                    x: 2243.097,
                    y: -763.619,
                    r: 0.613
                },
                "139": {
                    x: 2243.55,
                    y: -763.75,
                    r: 0.608
                },
                "140": {
                    x: 2242.695,
                    y: -763.451,
                    r: 0.616
                },
                "141": {
                    x: 2239.506,
                    y: -762.421,
                    r: 0.647
                },
                "142": {
                    x: 2236.303,
                    y: -761.363,
                    r: 0.677
                },
                "143": {
                    x: 2235.45,
                    y: -761.05,
                    r: 0.686
                },
                "144": {
                    x: 2235.961,
                    y: -761.199,
                    r: 0.681
                },
                "145": {
                    x: 2237.97,
                    y: -761.912,
                    r: 0.662
                },
                "146": {
                    x: 2241.08,
                    y: -762.873,
                    r: 0.632
                },
                "147": {
                    x: 2243.097,
                    y: -763.619,
                    r: 0.613
                },
                "148": {
                    x: 2243.55,
                    y: -763.75,
                    r: 0.608
                },
                "149": {
                    x: 2242.695,
                    y: -763.451,
                    r: 0.616
                },
                "150": {
                    x: 2239.506,
                    y: -762.421,
                    r: 0.647
                },
                "151": {
                    x: 2236.303,
                    y: -761.363,
                    r: 0.677
                },
                "152": {
                    x: 2235.45,
                    y: -761.05,
                    r: 0.686
                },
                "153": {
                    x: 2235.961,
                    y: -761.199,
                    r: 0.681
                },
                "154": {
                    x: 2237.97,
                    y: -761.912,
                    r: 0.662
                },
                "155": {
                    x: 2241.08,
                    y: -762.873,
                    r: 0.632
                },
                "156": {
                    x: 2243.097,
                    y: -763.619,
                    r: 0.613
                },
                "157": {
                    x: 2243.55,
                    y: -763.75,
                    r: 0.608
                },
                "158": {
                    x: 2242.695,
                    y: -763.451,
                    r: 0.616
                },
                "159": {
                    x: 2239.506,
                    y: -762.421,
                    r: 0.647
                },
                "160": {
                    x: 2236.303,
                    y: -761.363,
                    r: 0.677
                },
                "161": {
                    x: 2235.45,
                    y: -761.05,
                    r: 0.686
                },
                "162": {
                    x: 2234.566,
                    y: -761.604,
                    r: 0.709
                },
                "163": {
                    x: 2233.65,
                    y: -762.05,
                    r: 0.732
                },
                "164": {
                    x: 2248.845,
                    y: -781.568,
                    r: 0.655
                },
                "165": {
                    x: 2263.892,
                    y: -800.966,
                    r: 0.579
                },
                "166": {
                    x: 2273.967,
                    y: -814.065,
                    r: 0.527
                },
                "167": {
                    x: 2279.717,
                    y: -821.334,
                    r: 0.498
                },
                "168": {
                    x: 2281.4,
                    y: -823.6,
                    r: 0.489
                },
                "172": {
                    x: 2282.85,
                    y: -821.75,
                    sx: 0.999,
                    sy: 0.999,
                    r: 0.482
                },
                "173": {
                    x: 2244.5,
                    y: -786.55,
                    sx: 1,
                    sy: 1,
                    r: -0.001
                },
                "174": {
                    x: 2245,
                    y: -746,
                    r: -0.84
                },
                "175": {
                    x: 2251.852,
                    y: -726.163,
                    r: -1.643
                },
                "176": {
                    x: 2255.1,
                    y: -716.2,
                    r: -2.041
                },
                "177": {
                    x: 2280,
                    y: -628.15,
                    sx: 0.959,
                    sy: 1.071,
                    kx: 1.789,
                    ky: -1.848,
                    r: 0
                },
                "178": {
                    x: 2261.094,
                    y: -623.947,
                    sx: 0.973,
                    sy: 1.047,
                    kx: 1.749,
                    ky: -1.789
                },
                "179": {
                    x: 2247.18,
                    y: -620.844,
                    sx: 0.983,
                    sy: 1.029,
                    kx: 1.72,
                    ky: -1.744
                },
                "180": {
                    x: 2237.615,
                    y: -618.819,
                    sx: 0.99,
                    sy: 1.017,
                    kx: 1.7,
                    ky: -1.714
                },
                "181": {
                    x: 2231.363,
                    y: -617.31,
                    sx: 0.995,
                    sy: 1.008,
                    kx: 1.687,
                    ky: -1.694
                },
                "182": {
                    x: 2227.495,
                    y: -616.476,
                    sx: 0.998,
                    sy: 1.003,
                    kx: 1.679,
                    ky: -1.682
                },
                "183": {
                    x: 2225.437,
                    y: -616.05,
                    sx: 0.999,
                    sy: 1.001,
                    kx: 1.675,
                    ky: -1.676
                },
                "184": {
                    x: 2224.8,
                    y: -615.8,
                    sx: 1,
                    sy: 1,
                    kx: 0,
                    ky: 0,
                    r: -1.674
                },
                "191": {
                    x: 2235,
                    y: -628.15,
                    sx: 0.959,
                    sy: 1.071,
                    kx: 1.789,
                    ky: -1.848,
                    r: 0
                },
                "192": {
                    x: 2111,
                    y: -620.1,
                    sx: 1,
                    sy: 1,
                    kx: 0,
                    ky: 0,
                    r: -0.357
                },
                "193": {
                    x: 2144.912,
                    y: -705.841,
                    r: 0.113
                },
                "194": {
                    x: 2149.55,
                    y: -717.8,
                    r: 0.179
                },
                "195": {
                    x: 2131.85,
                    y: -744.85,
                    r: 0.605
                },
                "196": {
                    x: 2409.1,
                    y: -776.8,
                    kx: 0.221,
                    ky: 2.921,
                    r: 0
                },
                "197": {
                    x: 2406.088,
                    y: -804.363,
                    kx: 0.37,
                    ky: 2.772
                },
                "198": {
                    x: 2404.027,
                    y: -822.829,
                    kx: 0.47,
                    ky: 2.671
                },
                "199": {
                    x: 2402.924,
                    y: -833.001,
                    kx: 0.525,
                    ky: 2.616
                },
                "200": {
                    x: 2402.55,
                    y: -836,
                    kx: 0.542,
                    ky: 2.6
                },
                "201": {
                    x: 2399.668,
                    y: -838.397,
                    kx: 0.588,
                    ky: 2.554
                },
                "202": {
                    x: 2393,
                    y: -843.9,
                    kx: 0.693,
                    ky: 2.449
                }
            })
            .addTimedChild(instance19, 211, 15, {
                "211": {
                    x: 2162.1,
                    y: -745.1,
                    sx: 0.364,
                    sy: 0.364,
                    kx: 4.067,
                    ky: 2.216
                }
            })
            .addTimedChild(instance18, 203, 15, {
                "203": {
                    x: 2277.65,
                    y: -609.95,
                    sx: 0.475,
                    sy: 0.475,
                    kx: 0.204,
                    ky: 2.938
                }
            })
            .addTimedChild(instance17, 203, 20, {
                "203": {
                    x: -104.8,
                    y: -293.1,
                    r: 0.117
                },
                "204": {
                    x: -95.663,
                    y: -243.867,
                    r: 0.095
                },
                "205": {
                    x: -85.527,
                    y: -194.945,
                    r: 0.074
                },
                "206": {
                    x: -74.337,
                    y: -146.387,
                    r: 0.052
                },
                "207": {
                    x: -62.25,
                    y: -98.15,
                    r: 0.03
                },
                "208": {
                    x: -59.54,
                    y: -81.774,
                    r: 0.023
                },
                "209": {
                    x: -56.726,
                    y: -65.495,
                    r: 0.015
                },
                "210": {
                    x: -53.81,
                    y: -49.161,
                    r: 0.008
                },
                "211": {
                    x: -50.8,
                    y: -32.85,
                    r: 0
                },
                "212": {
                    x: -112.15
                },
                "213": {
                    x: -173.55
                },
                "214": {
                    x: -234.9
                },
                "215": {
                    x: -296.25
                },
                "216": {
                    x: -357.6
                },
                "217": {
                    x: -419
                },
                "218": {
                    x: -480.35
                },
                "219": {
                    x: -541.7
                },
                "220": {
                    x: -603.05
                },
                "221": {
                    x: -664.45
                },
                "222": {
                    x: -725.8
                }
            });
    });

    var Graphic148 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 267, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[105]);
        this.addTimedChild(instance1);
    });

    var Graphic149 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 267, loop: false });
        var instance24 = new Graphics()
            .drawCommands(shapes.TREX[111])
            .setTransform(1224, -450.4);
        var instance23 = new Graphics()
            .drawCommands(shapes.TREX[110])
            .setTransform(1224, -450.4);
        var instance22 = new Graphics()
            .drawCommands(shapes.TREX[109])
            .setTransform(1224, -450.4);
        var instance21 = new Graphics()
            .drawCommands(shapes.TREX[111])
            .setTransform(0, -450.4);
        var instance20 = new Graphics()
            .drawCommands(shapes.TREX[110])
            .setTransform(0, -450.4);
        var instance19 = new Graphics()
            .drawCommands(shapes.TREX[109])
            .setTransform(0, -450.4);
        var instance18 = new Graphics()
            .drawCommands(shapes.TREX[108])
            .setTransform(-1224, -450.4);
        var instance17 = new Graphics()
            .drawCommands(shapes.TREX[107])
            .setTransform(-1224, -450.4);
        var instance16 = new Graphics()
            .drawCommands(shapes.TREX[106])
            .setTransform(-1224, -450.4);
        var instance15 = new Graphics()
            .drawCommands(shapes.TREX[108])
            .setTransform(0, -450.4);
        var instance14 = new Graphics()
            .drawCommands(shapes.TREX[107])
            .setTransform(0, -450.4);
        var instance13 = new Graphics()
            .drawCommands(shapes.TREX[106])
            .setTransform(0, -450.4);
        var instance12 = new Graphics()
            .drawCommands(shapes.TREX[111])
            .setTransform(1224);
        var instance11 = new Graphics()
            .drawCommands(shapes.TREX[110])
            .setTransform(1224);
        var instance10 = new Graphics()
            .drawCommands(shapes.TREX[109])
            .setTransform(1224);
        var instance9 = new Graphics()
            .drawCommands(shapes.TREX[111]);
        var instance8 = new Graphics()
            .drawCommands(shapes.TREX[110]);
        var instance7 = new Graphics()
            .drawCommands(shapes.TREX[109]);
        var instance6 = new Graphics()
            .drawCommands(shapes.TREX[108])
            .setTransform(-1224);
        var instance5 = new Graphics()
            .drawCommands(shapes.TREX[107])
            .setTransform(-1224);
        var instance4 = new Graphics()
            .drawCommands(shapes.TREX[106])
            .setTransform(-1224);
        var instance3 = new Graphics()
            .drawCommands(shapes.TREX[108]);
        var instance2 = new Graphics()
            .drawCommands(shapes.TREX[107]);
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[106]);
        this.addTimedChild(instance24)
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

    var Graphic150 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 267, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[112]);
        this.addTimedChild(instance1);
    });

    var Graphic151 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 267, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[105]);
        this.addTimedChild(instance1);
    });

    var Graphic152 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 267, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[105]);
        this.addTimedChild(instance1);
    });

    var Graphic153 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 267, loop: false });
        var instance24 = new Graphics()
            .drawCommands(shapes.TREX[111])
            .setTransform(1224, -450.4);
        var instance23 = new Graphics()
            .drawCommands(shapes.TREX[110])
            .setTransform(1224, -450.4);
        var instance22 = new Graphics()
            .drawCommands(shapes.TREX[109])
            .setTransform(1224, -450.4);
        var instance21 = new Graphics()
            .drawCommands(shapes.TREX[111])
            .setTransform(0, -450.4);
        var instance20 = new Graphics()
            .drawCommands(shapes.TREX[110])
            .setTransform(0, -450.4);
        var instance19 = new Graphics()
            .drawCommands(shapes.TREX[109])
            .setTransform(0, -450.4);
        var instance18 = new Graphics()
            .drawCommands(shapes.TREX[108])
            .setTransform(-1224, -450.4);
        var instance17 = new Graphics()
            .drawCommands(shapes.TREX[107])
            .setTransform(-1224, -450.4);
        var instance16 = new Graphics()
            .drawCommands(shapes.TREX[106])
            .setTransform(-1224, -450.4);
        var instance15 = new Graphics()
            .drawCommands(shapes.TREX[108])
            .setTransform(0, -450.4);
        var instance14 = new Graphics()
            .drawCommands(shapes.TREX[107])
            .setTransform(0, -450.4);
        var instance13 = new Graphics()
            .drawCommands(shapes.TREX[106])
            .setTransform(0, -450.4);
        var instance12 = new Graphics()
            .drawCommands(shapes.TREX[111])
            .setTransform(1224);
        var instance11 = new Graphics()
            .drawCommands(shapes.TREX[110])
            .setTransform(1224);
        var instance10 = new Graphics()
            .drawCommands(shapes.TREX[109])
            .setTransform(1224);
        var instance9 = new Graphics()
            .drawCommands(shapes.TREX[111]);
        var instance8 = new Graphics()
            .drawCommands(shapes.TREX[110]);
        var instance7 = new Graphics()
            .drawCommands(shapes.TREX[109]);
        var instance6 = new Graphics()
            .drawCommands(shapes.TREX[108])
            .setTransform(-1224);
        var instance5 = new Graphics()
            .drawCommands(shapes.TREX[107])
            .setTransform(-1224);
        var instance4 = new Graphics()
            .drawCommands(shapes.TREX[106])
            .setTransform(-1224);
        var instance3 = new Graphics()
            .drawCommands(shapes.TREX[108]);
        var instance2 = new Graphics()
            .drawCommands(shapes.TREX[107]);
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[106]);
        this.addTimedChild(instance24)
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

    var Graphic154 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 267, loop: false });
        var instance6 = new Graphics()
            .drawCommands(shapes.TREX[118]);
        var instance5 = new Graphics()
            .drawCommands(shapes.TREX[117]);
        var instance4 = new Graphics()
            .drawCommands(shapes.TREX[116]);
        var instance3 = new Graphics()
            .drawCommands(shapes.TREX[115]);
        var instance2 = new Graphics()
            .drawCommands(shapes.TREX[114]);
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[113]);
        this.addTimedChild(instance6)
            .addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic155 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 267, loop: false });
        var instance3 = new Graphics()
            .drawCommands(shapes.TREX[120]);
        var instance2 = new Graphics()
            .drawCommands(shapes.TREX[119])
            .setTransform(579.7, 1.7);
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[119]);
        this.addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic156 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 267, loop: false });
        var instance3 = new Graphics()
            .drawCommands(shapes.TREX[120]);
        var instance2 = new Graphics()
            .drawCommands(shapes.TREX[119])
            .setTransform(579.7, 1.7);
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[119]);
        this.addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic157 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 267, loop: false });
        var instance3 = new Graphics()
            .drawCommands(shapes.TREX[122]);
        var instance2 = new Graphics()
            .drawCommands(shapes.TREX[119])
            .setTransform(579.7, 1.7);
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[121]);
        this.addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic169 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 267, loop: false });
        var instance10 = new Graphic157(MovieClip.SYNCHED)
            .setTransform(584.6, -591.8, 0.62, 0.62);
        var instance9 = new Graphic156(MovieClip.SYNCHED)
            .setTransform(-423.7, -584.55, 0.635, 0.62);
        var instance8 = new Graphic155(MovieClip.SYNCHED)
            .setTransform(-1161.2, -586.05, 0.635, 0.62);
        var instance7 = new Graphic154(MovieClip.SYNCHED)
            .setTransform(-23.2, -843, 0.55, 0.55);
        var instance6 = new Graphic153(MovieClip.SYNCHED)
            .setTransform(377.8, -426.8, 0.62, 0.62);
        var instance5 = new Graphic152(MovieClip.SYNCHED)
            .setTransform(81.95, -585.3, 0.662, 0.62);
        var instance4 = new Graphic151(MovieClip.SYNCHED)
            .setTransform(-575.4, -585.3, 0.662, 0.62, 0, 0, 3.142);
        var instance3 = new Graphic150(MovieClip.SYNCHED)
            .setTransform(689.35, -586.05, 0.62, 0.62);
        var instance2 = new Graphic149(MovieClip.SYNCHED)
            .setTransform(-402.2, -426.8, 0.62, 0.62);
        var instance1 = new Graphic148(MovieClip.SYNCHED)
            .setTransform(-1224.6, -588.3, 0.662, 0.62);
        this.addTimedChild(instance10)
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

    var Graphic170 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 267, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[123]);
        this.addTimedChild(instance1);
    });

    var Graphic171 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 267, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[123]);
        this.addTimedChild(instance1);
    });

    var Graphic172 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 267, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[124]);
        this.addTimedChild(instance1);
    });

    var Graphic158 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 267, loop: false });
        var instance5 = new Graphics()
            .drawCommands(shapes.TREX[129]);
        var instance4 = new Graphics()
            .drawCommands(shapes.TREX[128]);
        var instance3 = new Graphics()
            .drawCommands(shapes.TREX[127]);
        var instance2 = new Graphics()
            .drawCommands(shapes.TREX[126]);
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[125]);
        this.addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic159 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 267, loop: false });
        var instance3 = new Graphics()
            .drawCommands(shapes.TREX[132]);
        var instance2 = new Graphics()
            .drawCommands(shapes.TREX[131]);
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[130]);
        this.addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic160 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 267, loop: false });
        var instance6 = new Graphics()
            .drawCommands(shapes.TREX[138]);
        var instance5 = new Graphics()
            .drawCommands(shapes.TREX[137]);
        var instance4 = new Graphics()
            .drawCommands(shapes.TREX[136]);
        var instance3 = new Graphics()
            .drawCommands(shapes.TREX[135]);
        var instance2 = new Graphics()
            .drawCommands(shapes.TREX[134]);
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[133]);
        this.addTimedChild(instance6)
            .addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic173 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 267, loop: false });
        var instance3 = new Graphic160(MovieClip.SYNCHED)
            .setTransform(-227, -294.05, 0.975, 0.975);
        var instance2 = new Graphic159(MovieClip.SYNCHED)
            .setTransform(205.25, -253.5, 0.975, 0.975);
        var instance1 = new Graphic158(MovieClip.SYNCHED)
            .setTransform(-648.95, -283.35, 0.975, 0.975);
        this.addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic161 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 267, loop: false });
        var instance5 = new Graphics()
            .drawCommands(shapes.TREX[129]);
        var instance4 = new Graphics()
            .drawCommands(shapes.TREX[128]);
        var instance3 = new Graphics()
            .drawCommands(shapes.TREX[127]);
        var instance2 = new Graphics()
            .drawCommands(shapes.TREX[126]);
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[125]);
        this.addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic162 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 267, loop: false });
        var instance3 = new Graphics()
            .drawCommands(shapes.TREX[132]);
        var instance2 = new Graphics()
            .drawCommands(shapes.TREX[131]);
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[130]);
        this.addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic163 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 267, loop: false });
        var instance6 = new Graphics()
            .drawCommands(shapes.TREX[138]);
        var instance5 = new Graphics()
            .drawCommands(shapes.TREX[137]);
        var instance4 = new Graphics()
            .drawCommands(shapes.TREX[136]);
        var instance3 = new Graphics()
            .drawCommands(shapes.TREX[135]);
        var instance2 = new Graphics()
            .drawCommands(shapes.TREX[134]);
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[133]);
        this.addTimedChild(instance6)
            .addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic174 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 267, loop: false });
        var instance3 = new Graphic163(MovieClip.SYNCHED)
            .setTransform(-227, -294.05, 0.975, 0.975);
        var instance2 = new Graphic162(MovieClip.SYNCHED)
            .setTransform(205.25, -253.5, 0.975, 0.975);
        var instance1 = new Graphic161(MovieClip.SYNCHED)
            .setTransform(-648.95, -283.35, 0.975, 0.975);
        this.addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic164 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 267, loop: false });
        var instance5 = new Graphics()
            .drawCommands(shapes.TREX[129]);
        var instance4 = new Graphics()
            .drawCommands(shapes.TREX[128]);
        var instance3 = new Graphics()
            .drawCommands(shapes.TREX[127]);
        var instance2 = new Graphics()
            .drawCommands(shapes.TREX[126]);
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[125]);
        this.addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic165 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 267, loop: false });
        var instance3 = new Graphics()
            .drawCommands(shapes.TREX[132]);
        var instance2 = new Graphics()
            .drawCommands(shapes.TREX[131]);
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[130]);
        this.addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic166 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 267, loop: false });
        var instance6 = new Graphics()
            .drawCommands(shapes.TREX[138]);
        var instance5 = new Graphics()
            .drawCommands(shapes.TREX[137]);
        var instance4 = new Graphics()
            .drawCommands(shapes.TREX[136]);
        var instance3 = new Graphics()
            .drawCommands(shapes.TREX[135]);
        var instance2 = new Graphics()
            .drawCommands(shapes.TREX[134]);
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[133]);
        this.addTimedChild(instance6)
            .addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic175 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 267, loop: false });
        var instance3 = new Graphic166(MovieClip.SYNCHED)
            .setTransform(-227, -294.05, 0.975, 0.975);
        var instance2 = new Graphic165(MovieClip.SYNCHED)
            .setTransform(205.25, -253.5, 0.975, 0.975);
        var instance1 = new Graphic164(MovieClip.SYNCHED)
            .setTransform(-648.95, -283.35, 0.975, 0.975);
        this.addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic176 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 267, loop: false });
        var instance4 = new Graphics()
            .drawCommands(shapes.TREX[141]);
        var instance3 = new Graphics()
            .drawCommands(shapes.TREX[140]);
        var instance2 = new Graphics()
            .drawCommands(shapes.TREX[139])
            .setTransform(1129.7);
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[139]);
        this.addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    var Graphic177 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 267, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.TREX[142]);
        this.addTimedChild(instance1);
    });

    lib.TREX = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 267,
            framerate: 25
        });
        var instance12 = new Graphics()
            .drawCommands(shapes.TREX[143]);
        var instance11 = new Graphic177(MovieClip.SYNCHED)
            .setTransform(1479.95, 1088.05, 0.722, 1.179);
        var instance10 = new Graphic176(MovieClip.SYNCHED)
            .setTransform(1687.7, 772.05, 0.837, 0.837);
        var instance9 = new Graphic175(MovieClip.SYNCHED)
            .setTransform(2361.2, 770.9, 0.963, 0.963);
        var instance8 = new Graphic174(MovieClip.SYNCHED)
            .setTransform(1174.4, 770.9, 0.963, 0.963);
        var instance7 = new Graphic173(MovieClip.SYNCHED)
            .setTransform(-73.3, 770.9, 0.963, 0.963);
        var instance6 = new Graphic172(MovieClip.SYNCHED)
            .setTransform(1093.4, 821.15, 2.81, 0.367);
        var instance5 = new Graphic171(MovieClip.SYNCHED)
            .setTransform(1093.4, 772.85, 2.81, 0.061);
        var instance4 = new Graphic170(MovieClip.SYNCHED)
            .setTransform(1093.4, 848.75, 2.81, 0.27);
        var instance3 = new Graphic169(MovieClip.SYNCHED)
            .setTransform(2038.55, 1612.2, 1.447, 1.447);
        var instance2 = new Graphic168(MovieClip.SYNCHED)
            .setTransform(3002.4, 1405.05, 0.658, 0.658, 0, 0, 3.142);
        var instance1 = new Graphic167(MovieClip.SYNCHED)
            .setTransform(763.5, 997.15, 1.35, 1.35, 0, 0, 3.142);
        this.addTimedChild(instance12, 99, 168)
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
            .addTimedChild(instance1)
            .addAction(function () {
                this.emit('handshakeEvent');
            }, 99);
    });

    lib.TREX.assets = {
        "TREX": "images/TREX.shapes.json"
    };
})(PIXI, lib = lib || {});
var lib;
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        stage: lib.TREX,
        background: 0xffffff,
        width: 1920,
        height: 1080,
        framerate: 25,
        totalFrames: 267,
        library: lib
    };
}