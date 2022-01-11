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

    startScene() {

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

      load(s01.stage, app.stage);

    },

    loadScene() {

      ////////////////////////////////////////
      // set global assets for all scenes ////
      ////////////////////////////////////////

      let $editedAssets = {
          // pngs
          "REPLACE_EMOJI_SAD": "images/REPLACE_EMOJI_SAD.png",
          "REPLACE_HEADSET": "images/REPLACE_HEADSET.png",
          "REPLACE_EMOJI_HAPPY": "images/REPLACE_EMOJI_HAPPY.png",
          "REPLACE_SIGN": "images/REPLACE_SIGN.png",
          "REPLACE_CREATURES": "images/REPLACE_CREATURES.png",
          "REPLACE_CREATURES_BLINK": "images/REPLACE_CREATURES_BLINK.png",
          "REPLACE_CAVE_ART": "images/REPLACE_CAVE_ART.png",
          "REPLACE_EI_HAT01": "images/REPLACE_EI_HAT01.png",
          "REPLACE_EI_HAT_02": "images/REPLACE_EI_HAT_02.png",
          "REPLACE_EI_EARRING_02": "images/REPLACE_EI_EARRING_02.png",
          "REPLACE_EI_EARRING_01": "images/REPLACE_EI_EARRING_01.png",
          "REPLACE_EI_GLASSES_01": "images/REPLACE_EI_GLASSES_01.png",
          "EASTER-HEADS": "images/EASTER-HEADS.jpg",
          // php generated jsons
          "s01": "images/dist/s01.shapes.json",
          "s02": "images/dist/s02.shapes.json",
          "s03": "images/dist/s03.shapes.json",
          "s04": "images/dist/s04.shapes.json",
      };

      // update scene settings global vars
      window.$sceneSettings = $editedAssets;

      console.log('window.$sceneSettings', window.$sceneSettings);



      // get axios
      const axios = require('../../node_modules/axios');

      // window vars, so anim compiler can read them // should i use window. ?
      window.$sceneSettings = 'to be loaded';
      console.log('before, outside axios... window.$sceneSettings', window.$sceneSettings);

      ////////////////////////////////////////////////////////////////////
      // axios, hit php and generate shapes.json with colours changed ////
      ////////////////////////////////////////////////////////////////////

      const $s01_generator = 'https://mf.wip/dist/images/s01.shapes.php';

      axios.post($s01_generator, {
          colour: '#bada55',
          fileToChange: 's01.shapes.json',
      }).then(resp => {

        console.log('resp', resp);
        console.log('resp.data', resp.data);

        console.log('this.startScene called');
        this.startScene();        

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