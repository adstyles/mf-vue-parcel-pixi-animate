<template>
  <div class="connections">
    <h1>test</h1>
    <!-- <canvas id="stage"></canvas> -->
    <canvas id="stage" width="1024" height="576"></canvas>
    <div class="dev-tools">
     <!--  <button v-on:click="pauseScene">pause</button>
      <button v-on:click="playScene">play</button> -->
    </div>
  </div>
</template>
<script>
// import * as PIXI from 'pixi.js'
// import * as PIXI from '../../pixianimate-libs/pixi.js';
// import * as pixi-animate from '../../pixianimate-libs/pixi-animate.js';
// import lib from '../../anims/s01/s01.js';
// lib.s01.assets = {
//   "s01": "../../anims/s01/images/s01.shapes.txt"
// };

// import { Application } from 'pixi.js';
// import { load } from 'pixi-animate';

// import { Application } from '../../pixianimate-libs/pixi.js';
// import { load } from '../../pixianimate-libs/pixi-animate.js';

import { Application } from '../../pixianimate-libs/pixi.js';
import { load } from '../../pixianimate-libs/pixi-animate.js';

// import * as PIXI from '../../pixianimate-libs/pixi.js';
// const animate = require('../../pixianimate-libs/pixi-animate.js');
// const s01 = require('../../anims/s01/s01');


export default {
  name: 'ConnectionsLayer',

  methods: {
    // drawPixi() {
    //   var canvas = document.getElementById('pixi')

    //   const app = new PIXI.Application({
    //     width: window.innerWidth,
    //     height: window.innerHeight,
    //     antialias: true,
    //     transparent: true,
    //     view: canvas,
    //   })

    //   let graphics = new PIXI.Graphics()
    //   graphics.lineStyle(8, 0x000000)

    //   //start
    //   graphics.moveTo(300, 250)
    //   //end
    //   graphics.lineTo(500, 250)

    //   app.stage.addChild(graphics)
    // },

    pauseScene() {
      this.$refs.stageCanvas.stop();
    },

    playScene() {
      this.$refs.stageCanvas.start();
    },

    loadScene() {

      // const ref = this.$refs;
      // var ref.stageCanvas = app;

      // const s01 = require('../../anims/s01-pngs/s01-resized');
      // const s01 = require('../../anims/s01/s01');
      // const s02 = require('../../anims/s02/s02');
      const s03 = require('../../anims/s03/s03');
      // const s04 = require('../../anims/s04/s04');
      // circle = require('./circle'),
      // const resizeTo = document.querySelector("#stage");
      const app = new Application({
        width: 1024,
        height: 576,
        // width: 1920,
        // height: 1080,
        // resizeTo,
        view: document.getElementById("stage")
      });
      // resizeTo.appendChild(app.view);

      this.$refs.stageCanvas = app;

      // document.body.appendChild(app.view);
      
      // load(s01.stage, app.stage);
      // load(s02.stage, app.stage);
      load(s03.stage, app.stage);
      // load(s04.stage, app.stage);



      // animationFinished = function () {
      //   console.log("Animation just reached it's end.");
      //   // movie.gotoAndStop(0);
      // };
      // load(s02.stage, app.stage);


      // var splashContainer = new PIXI.DisplayObjectContainer();
      // var instructionsContainer = new PIXI.DisplayObjectContainer();
      // var room1Container = new PIXI.DisplayObjectContainer();
      // var room2Container = new PIXI.DisplayObjectContainer();
      // var room3Container = new PIXI.DisplayObjectContainer();
      // var gameOverContainer = new PIXI.DisplayObjectContainer();
      // stage.addChild(splashContainer);
      // stage.addChild(instructionsContainer);
      // stage.addChild(room1Container );
      // stage.addChild(room2Container);
      // stage.addChild(room3Container);
      // stage.addChild(gameOverContainer);
      // instructionsContainer.visible = false;
      // room1Container.visible = false;
      // room2Container.visible = false;
      // room3Container.visible = false;
      // gameOverContainer.visible = false;

      // const resizeTo = document.querySelector("#root");
      // const app = new PIXI.Application({
      //   resizeTo,
      //   resizeThrottle: 100,
      // });
      // resizeTo.appendChild(app.view);
      // load(circle.stage, app.stage);

      // var scene = new PIXI.animate.Scene(960, 540, {
      //   view: document.getElementById("stage"),
      //   backgroundColor: 0x333333,
      //   antialias: true
      // });

      // // console.log(lib.s01);

      // scene.load(s01);

      // scene.load({
      //   stage: {
      //     assets: {
      //       "s01": "../../anims/s01/images/s01.shapes.json"
      //     }
      //   }
      // }, s01);

      // const square = require('./square'),
      // circle = require('./circle'),
      // const myShapes = require('../../anims/s01/images/s01.shapes.json');
      // const s01 = require('../../anims/s01/s01');
      // const app = new Application();

      // document.body.appendChild(app.view);

      // load(s01.stage, app.stage);
      // load(circle.stage, app.stage);

      // var canvas = document.getElementById('pixi')

      // const app = new PIXI.Application({
      //   width: 400,
      //   height: 400,
      //   antialias: true,
      //   backgroundColor: 0x333333,
      //   view: document.getElementById("stage")
      // })

      // let graphics = new PIXI.Graphics()
      // graphics.lineStyle(8, 0x000000)

      // //start
      // graphics.moveTo(300, 250)
      // //end
      // graphics.lineTo(500, 250)

      // app.stage.addChild(graphics)


      // scene.load(lib.s01);


    }
  },

  data: () => ({
    stageCanvas: null
  }),

  mounted() {
    this.loadScene();
  },
}
</script>
<style lang="scss" scoped>
#stage {
  outline: 3px solid teal;
}

.dev-tools {
  display: flex;
}
</style>