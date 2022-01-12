<template>
  <div class="playanimation">
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

import router from "../router"; 

import { Application } from '../../pixianimate-libs/pixi.js';
import { load } from '../../pixianimate-libs/pixi-animate.js';

import { EventBus } from '../main';

// import myS01 from 'myS01';

export default {
  name: 'playanimation',

  methods: {

    pauseScene() {
      this.$refs.stageCanvas.stop();
      // EventBus.$emit('getOnTheBus', 'Cool Beans');
    },

    playScene() {
      this.$refs.stageCanvas.start();
    },

    /// ******************
    /// GOT HERE.
    // NEED LISTENER TO HERE CALLS FROM s01.js
    /// ******************

    // listenForSceneCalls() {

    //   // console.log('*** WM_MESSAGE -- listener');
    //   // window.addEventListener("WM_MESSAGE", messageHandler);

    //   // function messageHandler(e)
    //   // {
    //   //   console.log('messageHandler');
    //   //   console.log(e.detail);
    //   //   console.log(e.detail.msgId);
    //   //   if (e.detail.msgId == "PLAY_SECENE_2")
    //   //   {
    //   //     this.startScene(2);
    //   //   }
    //   // }

    // },

    gotoEndScreen() {
      // console.log(router);
      // this.router.push({ name: 'endscreen' });
      router.push('endscreen');
    },

    startScene(scene) {

      console.log('***-> startScene() called', scene);

      // set global vars for scenes (or replaces it with latest selections)
      this.setupAnimVariables();

      //setup scene if there isn't one
      if (this.$refs.stageCanvas == null) {

        const app = new Application({
          width: 1024,
          height: 576,
          view: document.getElementById("stage")
        });
        // resizeTo.appendChild(app.view);

        this.$refs.stageCanvas = app;

      }

      // play scene one
      if (scene == 1) {

        const s01 = require('../../anims/s01/s01');

        load(s01.stage).onComplete.once(() => {
             const s01Stage = new s01.stage();
             this.$refs.s01Stage = s01Stage;

             this.$refs.stageCanvas.stage.addChild(s01Stage);
        });

      } else if (scene == 2) {

        const s02 = require('../../anims/s02/s02');

        load(s02.stage).onComplete.once(() => {
             const s02Stage = new s02.stage();
             this.$refs.s02Stage = s02Stage;

             this.$refs.stageCanvas.stage.removeChild(this.$refs.s01Stage);
             this.$refs.stageCanvas.stage.addChild(s02Stage);
        });

      } else if (scene == 3) {

        // console.log('*-> startScene(3) called');

        const s03 = require('../../anims/s03/s03');

        load(s03.stage).onComplete.once(() => {
             const s03Stage = new s03.stage();
             this.$refs.s03Stage = s03Stage;
             this.$refs.stageCanvas.stage.removeChild(this.$refs.s02Stage);
             this.$refs.stageCanvas.stage.addChild(s03Stage);
        });

      } else if (scene == 4) {

        // console.log('*-> startScene(4) called');

        const s04 = require('../../anims/s04/s04');

        load(s04.stage).onComplete.once(() => {
             const s04Stage = new s04.stage();
             this.$refs.s04Stage = s04Stage;
             this.$refs.stageCanvas.stage.removeChild(this.$refs.s03Stage);
             this.$refs.stageCanvas.stage.addChild(s04Stage);
        });

      }

    },

    setupAnimVariables() {

      ////////////////////////////////////////
      // set global assets for all scenes ////
      ////////////////////////////////////////

      console.log('setup scene vars');

      let $sceneSettings = {

          // pngs
          "REPLACE_CAVE_ART":         this.$store.state.cavePainting,

          "REPLACE_EMOJI_SAD":        this.$store.state.emojiImage,
          "REPLACE_HEADSET":          this.$store.state.headset,
          "REPLACE_EI":               this.$store.state.easterImage,
          
          "REPLACE_EMOJI_HAPPY":      "images/pngs/"+this.$store.state.happyIcon,
          "REPLACE_SIGN":             "images/pngs/signs/"+this.$store.state.note,
          "REPLACE_CREATURES":        "images/pngs/creatures/creatures_"+this.$store.state.creature+".png",
          "REPLACE_CREATURES_BLINK":  "images/pngs/creatures/creatures_"+this.$store.state.creature+"_blink.png",

          // doesn't change - need to optimise
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

    },

    loadScene() {
      this.startScene(1);
    }

  },

  data: () => ({
    stageCanvas: null,
    s01Stage: null,
    s02Stage: null,
    s03Stage: null,
    s04Stage: null,



    // grabbedSettings: []
    // grabbedSettings: null
  }),

  created() {
    EventBus.$on('changeScene', (data) => {
      console.log('changeScene to: ', data);    
      // this.router.go({ name: 'endscreen' });
      this.startScene(data);
    });

    EventBus.$on('endOfAnimation', () => {
      console.log('Anim ended, go to end screen');    
      // this.router.go({ name: 'endscreen' });
      this.gotoEndScreen();
    });

  },

  mounted() {
    this.loadScene();
  },

  computed: {
    storedDedeSkin() {
      return this.$store.state.skin_dede;
    },
    storedDedeHair() {
      return this.$store.state.hair_dede;
    },
    storedArloSkin() {
      return this.$store.state.skin_arlo;
    },
    storedArloHair() {
      return this.$store.state.hair_arlo;
    },
    storedCreature() {
      return this.$store.state.creature;
    },
    storedEmojiImage() {
      return this.$store.state.emojiImage;
    },
    storedhappyIcon() {
      return this.$store.state.happyIcon;
    },
    storedHeadset() {
      return this.$store.state.headset;
    },
    storedNote() {
      return this.$store.state.note;
    },
    storedCavePainting() {
      return this.$store.state.cavePainting;
    },
    storedMammothAngry() {
      return this.$store.state.mammoth_angry;
    },
    storedMammothEmbarrassed() {
      return this.$store.state.mammoth_embarrassed;
    },
    storedMammothLaugh() {
      return this.$store.state.mammoth_laugh;
    },
    storedEasterImage() {
      return this.$store.state.easterImage;
    },
    storedStageName() {
      return this.$store.state.stageName;
    },
  }

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