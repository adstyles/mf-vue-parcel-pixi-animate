<template>
  <div class="connections">
    <h1>test</h1>
    <!-- <canvas id="stage"></canvas> -->
    <canvas id="stage" width="1024" height="576"></canvas>
    <div class="dev-tools">
      <button v-on:click="pauseScene">pause</button>
      <button v-on:click="playScene">play</button>
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

// json variables...
// import { strict as assert } from "../../node_modules/assert";
// import { jVar } from "../../node_modules/json-variables";
// import { jVar } from "../../pixianimate-libs/json-variables.esm.js";
// import { jVar } from "../../pixianimate-libs/json-variables.umd.js";
// require ("../../pixianimate-libs/json-variables.umd.js");
// const jv = require("../../pixianimate-libs/json-variables.umd.js");


// import { jVar } from '../../node_modules/json-variables';

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

      // %%_dede_skin_%%

      // let s01_shapes_json = '../../images/s01.shapes.variables.json';

      // var res = jVar({
      //   a: s01_shapes_json,
      //   dede_skin: "#bada55",
      // });

      // console.log("res = " + JSON.stringify(res, null, 4));

      // replace in file - to update HEX of skin and hair
      // const replace = require('../../node_modules/replace-in-file');
      // const options = {
      //   files: 'images/s01.shapes.replaced.json',
      //   from: '#8e4832',
      //   to: '#bada55',
      // };

      // try {
      //   const results = replace.sync(options);
      //   console.log('Replacement results:', results);
      // }
      // catch (error) {
      //   console.error('Error occurred:', error);
      // }

      // var fs = require('fs')
      // fs.readFile('images/s01.shapes.json', 'utf8', function (err,data) {
        
      //   if (err) {
      //     return console.log(err);
      //   }
      //   var result = data.replace(/#8e4832/g, '#bada55');

      //   fs.writeFile('images/s01.shapes.replaced.json', result, 'utf8', function (err) {
      //      if (err) return console.log(err);
      //   });

      // });

      // dede_skin - "#8e4832"
      // new_dede_skin = "#bada55";

      // s01_shapes_json = JSON.stringify(s01_shapes_json);
      // s01_shapes_json = s01_shapes_json.replace('#8e4832', '#bada55'); //convert to string + update hex
      // console.log({s01_shapes_json});
      // s01_shapes_json = JSON.parse(s01_shapes_json); //convert back to array
      // console.log({s01_shapes_json});

      const axios = require('../../node_modules/axios');

      window.$s01_settings = 'something that will be overwritten';
      console.log('before, outside axios... window.$s01_settings', window.$s01_settings);

      // let this.grabbedSettings;

      // axios.get('https://mf.wip/images/s01.shapes.php').then(resp => {
      //   console.log('resp', resp);
      //   console.log('resp.data', resp.data);
      // });

      //////////////////// 
      // axios attempt 1
      //////////////////// 

      // axios.get('https://mf.wip/images/s01.shapes.php').then(resp => {
      axios.get('https://mf.wip/images/s01.shapes.halved.json').then(resp => {

        // console.log('resp.data', resp.data);
        // resp = JSON.stringify(resp);

        // let data = resp.data;
        // data = JSON.stringify(data);

        // console.log('data', data);
        // data = JSON.stringify(data);

        // let reviseddata = data.replace('#8e4832', '#bada55'); //convert to string + update hex
        // console.log('reviseddata', reviseddata);

        // data = JSON.parse(reviseddata);

        // console.log('new-data', data);

        this.grabbedSettings = resp.data;
        // this.grabbedSettings = data;

        console.log('this.grabbedSettings', this.grabbedSettings);


        // ******** where i got to.
        // library is expecting a string with a json location "images/s01.shapes.json"
        // "images/s01.shapes.min.json" is  not working - minify an issue?
        // https://mf.wip/images/s01.shapes.php is now creating results.json - could that be the answer?
        // "images/s01.shapes.searchandreplace.json" not working - why???

        let $newStuff = {
            "REPLACE_EMOJI_SAD": "images/REPLACE_EMOJI_SAD.png",
            "REPLACE_HEADSET": "images/REPLACE_HEADSET.png",
            "REPLACE_EMOJI_HAPPY": "images/REPLACE_EMOJI_HAPPY.png",
            "REPLACE_SIGN": "images/REPLACE_SIGN.png",
            // "s01": this.grabbedSettings
            // "s01": this.grabbedSettings
            // "s01": [this.grabbedSettings.data]
            // "s01": "images/s01.shapes.json",
            "s01": "images/edited/s01.shapes.json",
            // "s01": "images/s01.shapes.min.json"
            // "s01": "images/results.json"
        };

        window.$s01_settings = $newStuff;

        // console.log('inside axios - $s01_settings', $s01_settings);
        console.log('inside axios - window.$s01_settings', window.$s01_settings);

        const s01 = require('../../anims/s01/s01');

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

        load(s01.stage, app.stage);

      });

      //////////////////// 
      // axios attempt 1 ends
      //////////////////// 

      // let $s01_settings = {
      //     "REPLACE_EMOJI_SAD": "images/REPLACE_EMOJI_SAD.png",
      //     "REPLACE_HEADSET": "images/REPLACE_HEADSET.png",
      //     "REPLACE_EMOJI_HAPPY": "images/REPLACE_EMOJI_HAPPY.png",
      //     "REPLACE_SIGN": "images/REPLACE_SIGN.png",
      //     "s01": "images/s01.shapes.json",
      //     // "s01": "images/s01.shapes.php"
      //     // "s01": this.grabbedSettings
      // };

      // window.$s01_settings = $s01_settings;


      // console.log('outside axios - $s01_settings', $s01_settings);
      // console.log('outside axios - this.grabbedSettings', this.grabbedSettings);

      //   const s01 = require('../../anims/s01/s01');

      //   const app = new Application({
      //     width: 1024,
      //     height: 576,
      //     // width: 1920,
      //     // height: 1080,
      //     // resizeTo,
      //     view: document.getElementById("stage")
      //   });
      //   // resizeTo.appendChild(app.view);

      //   this.$refs.stageCanvas = app;

      //   load(s01.stage, app.stage);

      // async function makeGetRequest() {
      //   console.log(makeGetRequest);
      //   let res = await axios.get('images/s01.shapes.json');

      //   let data = res.data;
      //   console.log(data);
      // }

      // makeGetRequest();

      // Make a request for a user with a given ID
      // axios.get('/user?ID=12345')
      //   .then(function (response) {
      //     // handle success
      //     console.log(response);
      //   })
      //   .catch(function (error) {
      //     // handle error
      //     console.log(error);
      //   })
      //   .then(function () {
      //     // always executed
      //   });

      // const $s01_settings = {
      //     "REPLACE_EMOJI_SAD": "images/REPLACE_EMOJI_SAD.png",
      //     "REPLACE_HEADSET": "images/REPLACE_HEADSET.png",
      //     "REPLACE_EMOJI_HAPPY": "images/REPLACE_EMOJI_HAPPY.png",
      //     "REPLACE_SIGN": "images/REPLACE_SIGN.png",
      //     // "s01": "images/s01.shapes.json",
      //     "s01": this.grabbedSettings
      //     // "s01": "images/s01.shapes.variables.json"
      // };

      // window.$s01_settings = $s01_settings;

      // const $s02_settings = {
      //     "REPLACE_HEADSET": "images/HEADSET.png",
      //     "REPLACE_CREATURES": "images/REPLACE_CREATURES.png",
      //     "REPLACE_CREATURES_BLINK": "images/REPLACE_CREATURES_BLINK.png",
      //     "REPLACE_CAVE_ART": "images/REPLACE_CAVE_ART.png",
      //     "s02": "images/s02.shapes.json"
      // };

      // window.$s02_settings = $s02_settings;

      // const s01 = require('../../anims/s01-pngs/s01-resized');
      // const s01 = require('../../anims/s01/s01');
      // const s02 = require('../../anims/s02/s02');
      // const s03 = require('../../anims/s03/s03');
      // const s04 = require('../../anims/s04/s04');
      // circle = require('./circle'),
      // const resizeTo = document.querySelector("#stage");
      // const app = new Application({
      //   width: 1024,
      //   height: 576,
      //   // width: 1920,
      //   // height: 1080,
      //   // resizeTo,
      //   view: document.getElementById("stage")
      // });
      // // resizeTo.appendChild(app.view);

      // this.$refs.stageCanvas = app;

      // document.body.appendChild(app.view);



      
      // load(s01.stage, app.stage);
      // load(s02.stage, app.stage);
      // load(s03.stage, app.stage);
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
    stageCanvas: null,
    // grabbedSettings: []
    grabbedSettings: ['nothing to see here : nothing']
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