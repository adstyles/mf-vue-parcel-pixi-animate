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

export default {
  name: 'ConnectionsLayer',

  methods: {

    pauseScene() {
      this.$refs.stageCanvas.stop();
    },

    playScene() {
      this.$refs.stageCanvas.start();
    },

    /// ******************
    /// GOT HERE.
    // NEED LISTENER TO HERE CALLS FROM s01.js
    /// ******************

    listenForSceneCalls() {

      console.log('*** WM_MESSAGE -- listener');
      window.addEventListener("WM_MESSAGE", messageHandler);

      function messageHandler(e)
      {
        console.log('messageHandler');
        console.log(e.detail);
        console.log(e.detail.msgId);
        if (e.detail.msgId == "PLAY_SECENE_2")
        {
          this.startScene(2);
        }
      }

    },

    startScene(scene) {

      // play scene one
      if (scene == 1) {

        console.log('*-> startScene() called');

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

        // listen for scene calls.....
        this.listenForSceneCalls();

        load(s01.stage, app.stage);

      } else {

        if (scene == 2) {

          console.log('*-> startScene() called');

          const s02 = require('../../anims/s02/s02');

          // const app = new Application({
          //   width: 1024,
          //   height: 576,
          //   // width: 1920,
          //   // height: 1080,
          //   // resizeTo,
          //   view: document.getElementById("stage")
          // });
          // // resizeTo.appendChild(app.view);

          // destroy before loading next scene
          app.stage.destroy(); // free the meshes! For the resistance! You dont need this if you dont have meshes/ropes.
          app.renderer.destroy(); // free renderer, all plugins, all shaders, all textures that are loaded in GPU

          this.$refs.stageCanvas = app;

          load(s02.stage, app.stage);

        }

        if (scene == 3) {

          console.log('*-> startScene() called');

          const s03 = require('../../anims/s03/s03');

          // const app = new Application({
          //   width: 1024,
          //   height: 576,
          //   // width: 1920,
          //   // height: 1080,
          //   // resizeTo,
          //   view: document.getElementById("stage")
          // });
          // // resizeTo.appendChild(app.view);

          this.$refs.stageCanvas = app;

          load(s03.stage, app.stage);

        }

        if (scene == 4) {

          console.log('*-> startScene() called');

          const s04 = require('../../anims/s04/s04');

          // const app = new Application({
          //   width: 1024,
          //   height: 576,
          //   // width: 1920,
          //   // height: 1080,
          //   // resizeTo,
          //   view: document.getElementById("stage")
          // });
          // // resizeTo.appendChild(app.view);

          this.$refs.stageCanvas = app;

          load(s04.stage, app.stage);

        }

      }



    },

    loadScene() {

      ////////////////////////////////////////
      // set global assets for all scenes ////
      ////////////////////////////////////////

      let $sceneSettings = {

          // pngs
          "REPLACE_EMOJI_SAD": "images/pngs/REPLACE_EMOJI_SAD.png",
          "REPLACE_HEADSET": "images/pngs/REPLACE_HEADSET.png",
          "REPLACE_EMOJI_HAPPY": "images/pngs/REPLACE_EMOJI_HAPPY.png",
          "REPLACE_SIGN": "images/pngs/REPLACE_SIGN.png",
          "REPLACE_CREATURES": "images/pngs/REPLACE_CREATURES.png",
          "REPLACE_CREATURES_BLINK": "images/pngs/REPLACE_CREATURES_BLINK.png",
          "REPLACE_CAVE_ART": "images/pngs/REPLACE_CAVE_ART.png",
          "REPLACE_EI": "images/pngs/REPLACE_EI.png",
          "EASTER-HEADS": "images/pngs/EASTER-HEADS.jpg",

          // php generated jsons
          "s01": "images/dist/s01.shapes.json",
          "s02": "images/dist/s02.shapes.json",
          "s03": "images/dist/s03.shapes.json",
          "s04": "images/dist/s04.shapes.json",
          
          // "REPLACE_EMOJI_SAD": "images/REPLACE_EMOJI_SAD.png",
          // "REPLACE_HEADSET": "images/REPLACE_HEADSET.png",
          // "REPLACE_EMOJI_HAPPY": "images/REPLACE_EMOJI_HAPPY.png",
          // "REPLACE_SIGN": "images/REPLACE_SIGN.png",
          // "s01": "images/dist/s01.shapes.json",
          
      };

      // update scene settings global vars
      window.$sceneSettings = $sceneSettings;

      console.log('window.$sceneSettings', window.$sceneSettings);

      // get axios
      const axios = require('../../node_modules/axios');

      // window vars, so anim compiler can read them // should i use window. ?
      console.log('before, outside axios... window.$sceneSettings', window.$sceneSettings);

      ////////////////////////////////////////////////////////////////////
      // axios, hit php and generate shapes.json with colours changed ////
      ////////////////////////////////////////////////////////////////////

      // const $s01_generator = 'https://mf.wip/dist/images/shape_generator.php';
      console.log('window.location.href: ', window.location.href);

      let $staticURL = 'https://a-d.dev';
      // http://localhost:1234/
      if (window.location.href.includes("localhost")) {
        $staticURL = 'https://mf.wip/dist';
      }

      const $s01_generator = $staticURL + '/images/shape_generator.php';
      console.log({$s01_generator});

      axios.post($s01_generator, {
          colour: '#bada55',
          filesToChange:[
            's01.shapes.json',
            's02.shapes.json',
            's03.shapes.json',
            's04.shapes.json'
          ],
      }).then(resp => {
        console.log('resp', resp);
        console.log('resp.data', resp.data);
        console.log('this.startScene(1) called');

        this.startScene(1);

      });

    }
  },

  data: () => ({
    stageCanvas: null,
    // grabbedSettings: []
    // grabbedSettings: null
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