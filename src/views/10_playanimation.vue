<template>
  <div class="playanimation">
    <!-- <canvas id="stage"></canvas> -->
    <canvas id="stage" width="1024" height="576"></canvas>
    <div class="dev-tools">

      <!-- <h1>{{sessionID}}</h1> -->

      <!-- <p>these buttons are just for us to test with and will prob make it crash 😅:</p> -->
      <!-- <button v-on:click="pauseScene">pause</button> -->
      <!-- <button v-on:click="playScene">play</button> -->
      <!-- <button v-on:click="skipScene">Next Scene</button> -->
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

import howler from 'howler';

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

    skipScene() {
      console.log('skip scene called')
      if (this.$refs.currScene == 1){
        this.$refs.s01Howl.unload();
        this.startScene(2);
      }
      if (this.$refs.currScene == 2){
        this.$refs.s02Howl.unload();
        this.startScene(3);
      }
      if (this.$refs.currScene == 3){
        this.$refs.s03Howl.unload();
        this.startScene(4);
      }
      if (this.$refs.currScene == 4){
        this.$refs.s04Howl.unload();
        this.gotoEndScreen()
      }
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

      // first, check json is ready...

      if (!this.$refs.jsonChecked) {

        // axios
        const axios = require('../../node_modules/axios');

        // if on local use dist folder???? - because json are made dynamically?
        let $urlPrefix = 'https://a-d.dev/images';
        // http://localhost:1234/
        if (window.location.href.includes("localhost")) {
          $urlPrefix = 'https://mf.wip/dist/images';
        }

        // let jsonToUse = 'user';
        let myUserID = this.$store.getters.getSessionID;
        console.log('+++++++++++++++++++ myUserID: ', myUserID);

        // detect if jsons are there and ready. Test to see if s04 is present..
        axios.get($urlPrefix+"/json/"+myUserID+"/s04.shapes.json").then((response) => {
            console.log('+++++++++++++++++++ AXIOS - response: ', response.status);
            if (response.status == 404) {
              // if json missing, use default JSON...
              console.log('use default JSON');
              this.setupAnimVariables('default');
              this.playTheVideo(scene);
              this.$refs.jsonChecked = true;
            } else {
              console.log('use the USER JSON...');
              this.setupAnimVariables('userCreated');
              this.playTheVideo(scene);
              this.$refs.jsonChecked = true;
            }
        }).catch((error) => {
            console.log(error);
            console.log('use default JSON');
            this.setupAnimVariables('default');
            this.playTheVideo(scene);
            this.$refs.jsonChecked = true;
        });

      } else {

        console.log('jsonChecked already...')
        this.playTheVideo(scene);

      }

    },

    playTheVideo(scene) {

        // set global vars for scenes (or replaces it with latest selections)
        // this.setupAnimVariables();

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

          // this.loadSceneTrack(this.$refs.s01Howl, s01_audio);

          load(s01.stage).onComplete.once(() => {
               const s01Stage = new s01.stage();
               this.$refs.s01Stage = s01Stage;
               this.$refs.stageCanvas.stage.addChild(s01Stage);
               this.$refs.currScene = 1;
               // call to play track from anim instead...
               // this.playSceneTrack(this.$refs.s01Howl);
          });

        } else if (scene == 2) {

          const s02 = require('../../anims/s02/s02');

          // unload pre scene track
          this.$refs.s01Howl.unload();

          load(s02.stage).onComplete.once(() => {
               const s02Stage = new s02.stage();
               this.$refs.s02Stage = s02Stage;

               this.$refs.stageCanvas.stage.removeChild(this.$refs.s01Stage);
               this.$refs.stageCanvas.stage.addChild(s02Stage);
               this.$refs.currScene = 2;
          });

        } else if (scene == 3) {

          // console.log('*-> startScene(3) called');

          const s03 = require('../../anims/s03/s03');

          // unload pre scene track
          this.$refs.s02Howl.unload();

          load(s03.stage).onComplete.once(() => {
               const s03Stage = new s03.stage();
               this.$refs.s03Stage = s03Stage;
               this.$refs.stageCanvas.stage.removeChild(this.$refs.s02Stage);
               this.$refs.stageCanvas.stage.addChild(s03Stage);
               this.$refs.currScene = 3;
          });

        } else if (scene == 4) {

          // console.log('*-> startScene(4) called');

          const s04 = require('../../anims/s04/s04');

          // unload pre scene track
          this.$refs.s03Howl.unload();

          load(s04.stage).onComplete.once(() => {
               const s04Stage = new s04.stage();
               this.$refs.s04Stage = s04Stage;
               this.$refs.stageCanvas.stage.removeChild(this.$refs.s03Stage);
               this.$refs.stageCanvas.stage.addChild(s04Stage);
               this.$refs.currScene = 4;
          });

        }

      

    },

    setupMammothTracks(){

      ////////////////////////////////////////
      // Mammoth tracks                   ////
      ////////////////////////////////////////

      // mam_angry: null,
      // mam_embar: null,
      // mam_laugh: null,

      // this.$store.state.mammoth_angry
      // this.$store.state.mammoth_embarrassed
      // this.$store.state.mammoth_laugh

      // ANGRY

      let $mammoth_angry_mp3 = null;

      if (this.$store.state.mammoth_angry == null) {

        $mammoth_angry_mp3 = 'images/mp3/mammoth/mam_angry.mp3';

        this.$refs.mam_angry = new Howl({
          autoplay: false,
          src: [ $mammoth_angry_mp3 ],
          onload: function() { console.log('mammoth ANGRY loaded!') },
          onplay: () => { console.log('song playing') },
          onloaderror(id, err) {
            console.warn('failed to load sound file:', { id, err })
          }
        });

      } else {

        $mammoth_angry_mp3 = this.$store.state.mammoth_angry;

        console.log('user recorded mammoth - ANGRY');
        var blob = new Blob([this.$store.state.mammoth_angry]);
        this.$refs.mam_angry = new Howl({
            autoplay: false,
            src: [URL.createObjectURL(blob)],
            html5: true,
            format: ['mp3'],
        });

      }


      // EMBAR

      let $mammoth_embar_mp3 = null;

      if (this.$store.state.mammoth_embarrassed == null) {

        $mammoth_embar_mp3 = 'images/mp3/mammoth/mam_embar.mp3';

        this.$refs.mam_embar = new Howl({
          autoplay: false,
          src: [ $mammoth_embar_mp3 ],
          onload: function() { console.log('mammoth EMBAR loaded!') },
          onplay: () => { console.log('song playing') },
          onloaderror(id, err) {
            console.warn('failed to load sound file:', { id, err })
          }
        });

      } else {

        $mammoth_embar_mp3 = this.$store.state.mammoth_embarrassed;

        console.log('user recorded mammoth - EMBAR');
        var blob = new Blob([this.$store.state.mammoth_embarrassed]);
        this.$refs.mam_embar = new Howl({
            autoplay: false,
            src: [URL.createObjectURL(blob)],
            html5: true,
            format: ['mp3'],
        });

      }

      
      // LAUGH

      let $mammoth_laugh_mp3 = null;

      if (this.$store.state.mammoth_laugh == null) {

        $mammoth_laugh_mp3 = 'images/mp3/mammoth/mam_laugh.mp3';

        this.$refs.mam_laugh = new Howl({
          autoplay: false,
          src: [ $mammoth_laugh_mp3 ],
          onload: function() { console.log('mammoth LAUGH loaded!') },
          onplay: () => { console.log('song playing') },
          onloaderror(id, err) {
            console.warn('failed to load sound file:', { id, err })
          }
        });

      } else {

        $mammoth_laugh_mp3 = this.$store.state.mammoth_laugh;

        console.log('user recorded mammoth - LAUGH');
        var blob = new Blob([this.$store.state.mammoth_laugh]);
        this.$refs.mam_laugh = new Howl({
            autoplay: false,
            src: [URL.createObjectURL(blob)],
            html5: true,
            format: ['mp3'],
        });

      }

      

    },

    setupAnimVariables($json_location) {

      console.log('=== setupAnimVariables called - $json_location is: ', $json_location);

      ////////////////////////////////////////
      // setup all audio Howler tracks    ////
      ////////////////////////////////////////

      const s01_audio = 'images/mp3/scenes/01.mp3';
      const s02_audio = 'images/mp3/scenes/02.mp3';
      const s03_audio = 'images/mp3/scenes/03.mp3';
      const s04_audio = 'images/mp3/scenes/04.mp3';

      this.loadSceneTrack('s01', s01_audio);
      this.loadSceneTrack('s02', s02_audio);
      this.loadSceneTrack('s03', s03_audio);
      this.loadSceneTrack('s04', s04_audio);

      ////////////////////////////////////////
      // set global assets for all scenes ////
      ////////////////////////////////////////

      // if on local use dist folder???? - because json are made dynamically?
      let $urlPrefix = 'https://a-d.dev/images';
      // http://localhost:1234/
      if (window.location.href.includes("localhost")) {
        $urlPrefix = 'https://mf.wip/dist/images';
      }

      console.log('setup scene vars');

      if ($json_location == 'default') {

        let $sceneSettings = {

            // pngs
            "REPLACE_CAVE_ART":         this.$store.state.cavePainting,

            "REPLACE_EMOJI_SAD":        this.$store.state.emojiImage,
            "REPLACE_HEADSET":          this.$store.state.headset,
            "REPLACE_EI":               this.$store.state.easterImage,
            
            "REPLACE_EMOJI_HAPPY":      "images/pngs/emojis/"+this.$store.state.happyIcon+".png",
            "REPLACE_SIGN":             "images/pngs/signs/"+this.$store.state.note+".png",
            "REPLACE_CREATURES":        "images/pngs/creatures/creatures_"+this.$store.state.creature+".png",
            "REPLACE_CREATURES_BLINK":  "images/pngs/creatures/creatures_"+this.$store.state.creature+"_blink.png",

            // doesn't change - need to optimise
            "EASTER-HEADS": "images/pngs/EASTER-HEADS.jpg",
        
            // using user ID           
            "s01": $urlPrefix+"/json/_default/s01.shapes.json",
            "s02": $urlPrefix+"/json/_default/s02.shapes.json",
            "s03": $urlPrefix+"/json/_default/s03.shapes.json",
            "s04": $urlPrefix+"/json/_default/s04.shapes.json",
            
        };

        // update scene settings global vars
        window.$sceneSettings = $sceneSettings;

        console.log('window.$sceneSettings', window.$sceneSettings);

      } else {

        // let jsonToUse = 'user';
        let myUserID = this.$store.getters.getSessionID;
        console.log('+++++++++++++++++++ myUserID: ', myUserID);

        let $sceneSettings = {

            // pngs
            "REPLACE_CAVE_ART":         this.$store.state.cavePainting,

            "REPLACE_EMOJI_SAD":        this.$store.state.emojiImage,
            "REPLACE_HEADSET":          this.$store.state.headset,
            "REPLACE_EI":               this.$store.state.easterImage,
            
            "REPLACE_EMOJI_HAPPY":      "images/pngs/emojis/"+this.$store.state.happyIcon+".png",
            "REPLACE_SIGN":             "images/pngs/signs/"+this.$store.state.note+".png",
            "REPLACE_CREATURES":        "images/pngs/creatures/creatures_"+this.$store.state.creature+".png",
            "REPLACE_CREATURES_BLINK":  "images/pngs/creatures/creatures_"+this.$store.state.creature+"_blink.png",

            // doesn't change - need to optimise
            "EASTER-HEADS": "images/pngs/EASTER-HEADS.jpg",
   
            // using user ID           
            "s01": $urlPrefix+"/json/"+myUserID+"/s01.shapes.json",
            "s02": $urlPrefix+"/json/"+myUserID+"/s02.shapes.json",
            "s03": $urlPrefix+"/json/"+myUserID+"/s03.shapes.json",
            "s04": $urlPrefix+"/json/"+myUserID+"/s04.shapes.json",
            
        };

        // update scene settings global vars
        window.$sceneSettings = $sceneSettings;

        console.log('window.$sceneSettings', window.$sceneSettings);

      }

      

    },

    loadScene() {
      this.startScene(1);
    },

    loadSceneTrack($trackID, $track) {

      console.log('load scene track', $trackID, $track);

      let $dataRef = null;

      if ($trackID == 's01') {
       // $dataRef = this.$refs.s01Howl;
       this.$refs.s01Howl = new Howl({
         autoplay: false,
         // 1
         src: [
           $track
         ],
         onload: function() { console.log('song loaded!') },
         onplay: () => { console.log('song playing') },
         // 2
         onloaderror(id, err) {
           console.warn('failed to load sound file:', { id, err })
         }
       });
      }
      if ($trackID == 's02') { 
        this.$refs.s02Howl = new Howl({
          autoplay: false,
          // 1
          src: [
            $track
          ],
          onload: function() { console.log('song loaded!') },
          onplay: () => { console.log('song playing') },
          // 2
          onloaderror(id, err) {
            console.warn('failed to load sound file:', { id, err })
          }
        });
      }
      if ($trackID == 's03') { 
        this.$refs.s03Howl = new Howl({
          autoplay: false,
          // 1
          src: [
            $track
          ],
          onload: function() { console.log('song loaded!') },
          onplay: () => { console.log('song playing') },
          // 2
          onloaderror(id, err) {
            console.warn('failed to load sound file:', { id, err })
          }
        });
      }
      if ($trackID == 's04') { 
      this.$refs.s04Howl = new Howl({
        autoplay: false,
        // 1
        src: [
          // require('./mp3/radiohead.mp3')
          $track
        ],
        onload: function() { console.log('song loaded!') },
        onplay: () => { console.log('song playing') },
        // 2
        onloaderror(id, err) {
          console.warn('failed to load sound file:', { id, err })
        }
      });
       }

      // console.log('$dataRef: ', $dataRef);

      

    },

    playSceneTrack($trackID) {

      console.log('play scene track', $trackID);

      console.log(this.$refs.s01Howl);

      if ($trackID == 's01') { this.$refs.s01Howl.play(); }
      if ($trackID == 's02') { this.$refs.s02Howl.play(); }
      if ($trackID == 's03') { this.$refs.s03Howl.play(); }
      if ($trackID == 's04') { this.$refs.s04Howl.play(); }

      if ($trackID == 'mam_angry') { this.$refs.mam_angry.play(); }
      if ($trackID == 'mam_embar') { this.$refs.mam_embar.play(); }
      if ($trackID == 'mam_laugh') { this.$refs.mam_laugh.play(); }

      // $dataRef.play();

    }

  },

  data: () => ({
    stageCanvas: null,
    s01Stage: null,
    s02Stage: null,
    s03Stage: null,
    s04Stage: null,
    s01Howl: null,
    s02Howl: null,
    s03Howl: null,
    s04Howl: null,
    mam_angry: null,
    mam_embar: null,
    mam_laugh: null,
    $mammoth_angry_mp3: null,
    $mammoth_embar_mp3: null,
    $mammoth_laugh_mp3: null,

    currScene: null,

    jsonChecked: false,

    sessionID: '_default'

    // grabbedSettings: []
    // grabbedSettings: null
  }),

  created() {

    // GET ON THE BUS!
    EventBus.$on('changeScene', (data) => {
      console.log('changeScene to: ', data);    
      // this.router.go({ name: 'endscreen' });
      this.startScene(data);
    });

    EventBus.$on('playTrack', (data) => {
      console.log('animation call bus call to play:', data);    
      // this.router.go({ name: 'endscreen' });
      if (data == 's01') { this.playSceneTrack('s01'); }
      if (data == 's02') { this.playSceneTrack('s02'); }
      if (data == 's03') { this.playSceneTrack('s03'); }
      if (data == 's04') { this.playSceneTrack('s04'); }

      if (data == 'mam_angry') { this.playSceneTrack('mam_angry'); }
      if (data == 'mam_embar') { this.playSceneTrack('mam_embar'); }
      if (data == 'mam_laugh') { this.playSceneTrack('mam_laugh'); }
      // this.playSceneTrack(data);
    });

    EventBus.$on('endOfAnimation', () => {
      console.log('Anim ended, go to end screen');    
      // this.router.go({ name: 'endscreen' });
      this.gotoEndScreen();
    });

    EventBus.$on('killAnimation', () => {
      console.log('orders to kill animation');    
      // this.router.go({ name: 'endscreen' });
      // this.gotoEndScreen();
      // destroy the Application
      this.$refs.stageCanvas.destroy({
        // children,
        // texture,
        // baseTexture
      });
      // remove all tracks
      this.$refs.s01Howl.unload();
      this.$refs.s02Howl.unload();
      this.$refs.s03Howl.unload();
      this.$refs.s04Howl.unload();
      this.$refs.mam_angry.unload();
      this.$refs.mam_embar.unload();
      this.$refs.mam_laugh.unload();
    });

  },

  mounted() {
    this.setupMammothTracks();
    this.loadScene();

    // var setSessionID = this.$store.getters.getSessionID;
    // this.sessionID = setSessionID;

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
  // outline: 3px solid teal;
  margin: 2rem 0;
}

.dev-tools {
  display: flex;
}
</style>