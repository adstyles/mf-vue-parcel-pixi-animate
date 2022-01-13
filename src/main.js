import Vue from 'vue';

// Uncomment if babel-polyfill is required (but larger).
// import 'babel-polyfill'
import App from './App.vue';
import router from './router';
import store from './store';
import fabric from '../node_modules/fabric-browseronly';
import fabricHistory from '../node_modules/fabric-history';
import MicRecorder from '../node_modules/mic-recorder-to-mp3';
// import Recorder from '../node_modules/recorder-js';
import howler from '../node_modules/howler';

// event bus
export const EventBus = new Vue();

// import myS01 from '../anims/s01/s01';
// import s02 from '../anims/s02/s02';
// import s03 from '../anims/s03/s03';
// import s04 from '../anims/s04/s04';

// import { strict as assert } from "../node_modules/assert";
// import { jVar } from "../node_modules/json-variables";

// import * as PIXI from '../pixianimate-libs/pixi.js';
// import * as animate from '../pixianimate-libs/pixi-animate.js';

// add PIXI
// window.PIXI = PIXI

// import * as PIXI from '../node_modules/pixi.js';
// import * as PIXI from '../node_modules/pixi.js';
// import animate from '../node_modules/pixi-animate';
// import * as PIXI from '../pixianimate-libs/pixi.js';
// import { Application, Loader } from '../pixianimate-libs/pixi.js';

// const loader = Loader.shared;
//or this one
// const loader = app.loader;

// import pixianimate from '../pixianimate-libs/pixi-animate.js';
// import s01 from '../anims/s01/s01.js';
// pixi-animate.js



Vue.config.productionTip = false;

var data = { message: 'Helloooooooo Vue!' }

// var sound = new Howl({
//   src: [
//     require('./mp3/radiohead.mp3')
//     // $track
//   ],
// });

var sound = null;

// let $track = null;

const taskTrack1 = require('./mp3/tasks/01_COLOURS.mp3');
const taskTrack2 = require('./mp3/tasks/02_CREATURES.mp3');
const taskTrack3 = require('./mp3/tasks/03_EMOJIS.mp3');
const taskTrack4 = require('./mp3/tasks/04_HEADSET.mp3');
const taskTrack5 = require('./mp3/tasks/05_SIGN.mp3');
const taskTrack6 = require('./mp3/tasks/06_CAVE_ART.mp3');
const taskTrack7 = require('./mp3/tasks/07_MAMMOTH.mp3');
const taskTrack8 = require('./mp3/tasks/08_STATUES.mp3');
const taskTrack9 = require('./mp3/tasks/09_NAME.mp3');
const nowWatchFilm = require('./mp3/tasks/10_WATCH.mp3');
const nowRestart = require('./mp3/tasks/11_RESTART.mp3');

// tasks/07a_ANGRY.mp3 
// tasks/07b_EMBARRASSED.mp3 
// tasks/07c_LAUGH.mp3

var vm = new Vue({
  router,
  store,
  watch: {
    $route(to, from) {
      // console.log('route change', to, from);
      // if (to.name == '') {}

      console.log(to['name']);
      console.log(from['name']);

      if(from['name'] == 'playanimation'){
        console.log('killAnimation');
        EventBus.$emit('killAnimation');
      }

      // stop all tracks
      this.stopTaskTracks();

      // choose track to play
      switch (to['name']) {
        case 'taskone':
          this.playTaskTrack(taskTrack1);
          break;
        case 'tasktwo':
          this.playTaskTrack(taskTrack2);         
          break;
        case 'taskthree':
          this.playTaskTrack(taskTrack3);         
          break;
        case 'taskfour':
          this.playTaskTrack(taskTrack4);         
          break;
        case 'taskfive':
          this.playTaskTrack(taskTrack5);         
          break;
        case 'tasksix':
          this.playTaskTrack(taskTrack6);         
          break;
        case 'taskseven':
          this.playTaskTrack(taskTrack7);         
          break;
        case 'taskeight':
          this.playTaskTrack(taskTrack8);         
          break;
        case 'tasknine':
          this.playTaskTrack(taskTrack9);         
          break;
        case 'getready':
          this.playTaskTrack(nowWatchFilm);         
          break;
        case 'endscreen':
          this.playTaskTrack(nowRestart);         
          break;
        default:
          // this.playTaskTrack(1);
      }

      

    }
  },
  methods: {
    // globalHelper: function () {
    //   // alert("Hello world")
    // },

    stopTaskTracks() {

      console.log(this.$refs.sound);

      if (this.$refs.sound != null) {
        this.$refs.sound.stop();
        this.$refs.sound.unload();
        this.$refs.sound = null;
      }

      // if (this.$refs.sound.playing()) {      
      //   console.log('stop playing (all task tracks)');
      //   // this.sound.stop();
      //   this.$refs.sound.stop();
      // }
    },

    playTaskTrack($track) {

      console.log('play task track', $track);

      this.$refs.sound = new Howl({
        // autoplay: true,
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

      this.$refs.sound.play();

    }

  },
  fabric,
  data: data, // AD added
  render: h => h(App),
}).$mount('#app');


// Vue.mixin({
//   methods: {
//     globalHelper: function () {
//       alert("Hello world")
//     },
//   },
// })