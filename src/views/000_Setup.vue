<template>
  <div class="connections">
    <h1>test</h1>
    <!-- <canvas id="stage"></canvas> -->
    <canvas id="stage" width="550" height="400"></canvas>
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
    loadScene() {

      const s01 = require('../../anims/s01/s01');
      // circle = require('./circle'),
      const app = new Application();

      document.body.appendChild(app.view);

      load(s01.stage, app.stage);
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

  mounted() {
    this.loadScene();
  },
}
</script>
<style lang="scss" scoped>
#stage {
  outline: 3px solid teal;
}
</style>