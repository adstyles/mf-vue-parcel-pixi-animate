<template>
  <div id="app">

    <div class="nav-container">

      <img class="nav-fox nav-fox__1" src="assets/inline-happy.svg">
    
      <div id="nav" class="nav">
        <router-link class="nav-button" to="/" data-desc="Setup"></router-link>

        <router-link class="nav-button" to="/scene2" data-desc="Play Animation!">
          <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 22v-20l18 10-18 10z"/></svg> -->
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 1v2h-2v-2h-2v4h-12v-4h-2v2h-2v-2h-2v22h2v-2h2v2h2v-4h12v4h2v-2h2v2h2v-22h-2zm-18 18h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm14 9h-12v-8h12v8zm4 3h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2z"/></svg>
        </router-link>

        <router-link class="nav-button" to="/scene3" data-desc="Play Animation!">
          <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 22v-20l18 10-18 10z"/></svg> -->
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 1v2h-2v-2h-2v4h-12v-4h-2v2h-2v-2h-2v22h2v-2h2v2h2v-4h12v4h2v-2h2v2h2v-22h-2zm-18 18h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm14 9h-12v-8h12v8zm4 3h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2z"/></svg>
        </router-link>

        <router-link class="nav-button" to="/scene4" data-desc="Play Animation!">
          <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 22v-20l18 10-18 10z"/></svg> -->
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 1v2h-2v-2h-2v4h-12v-4h-2v2h-2v-2h-2v22h2v-2h2v2h2v-4h12v4h2v-2h2v2h2v-22h-2zm-18 18h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm14 9h-12v-8h12v8zm4 3h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2z"/></svg>
        </router-link>

        <router-link class="nav-button" to="/home" data-desc="Home"></router-link>
        <!-- <router-link class="nav-button" to="/about" data-desc="About"></router-link> | -->
        <router-link class="nav-button" to="/taskone" data-desc="Task One - Character Colours"></router-link>
        <router-link class="nav-button" to="/tasktwo" data-desc="Task Two - Creature Choice"></router-link>
        <router-link class="nav-button" to="/taskthree" data-desc="Task Three - Emoji Creation"></router-link>
        <router-link class="nav-button" to="/taskfour" data-desc="Task Four - VR headset"></router-link>
        <router-link class="nav-button" to="/taskfive" data-desc="Task Five - Choose a note to leave"></router-link>
        <router-link class="nav-button" to="/tasksix" data-desc="Task Six - Draw Cave Painting"></router-link>
        <router-link class="nav-button" to="/taskseven" data-desc="Task Seven - Record Mammoth SFX"></router-link>
        <router-link class="nav-button" to="/taskeight" data-desc="Task Eight - Design your Easter Island head"></router-link>
        <router-link class="nav-button" to="/tasknine" data-desc="Task Nine - Add a name"></router-link>
        <router-link class="nav-button" to="/playanimation" data-desc="Play Animation!">
          <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 22v-20l18 10-18 10z"/></svg> -->
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 1v2h-2v-2h-2v4h-12v-4h-2v2h-2v-2h-2v22h2v-2h2v2h2v-4h12v4h2v-2h2v2h2v-22h-2zm-18 18h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm14 9h-12v-8h12v8zm4 3h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2z"/></svg>
        </router-link>
        <router-link class="nav-button" to="/endscreen" data-desc="End Screen"></router-link>
      </div>

      <img class="nav-fox nav-fox__2" src="assets/inline-happy.svg">

    </div>

    <div class="view-container">    
      <router-view/>
    </div>

    <debug><debug/>

  </div>
</template>

<script>

  import {Howl, Howler} from 'howler';

  import debug from './components/debug.vue';

  // const taskTrack1 = require('./mp3/radiohead.mp3');

  export default {
    components: {
      debug
    },

    methods: {
      
      // stopTaskTracks() {
      //   console.log('stop playing (all task tracks)');
      // },

      // playTaskTrack(num){

      //   console.log('play task track num', num);

      //   switch(num) {
      //     case 1:
      //       $track = taskTrack1;
      //       break;
      //     case 2:
      //       $track = taskTrack1;            
      //       break;
      //     default:
      //       $track = taskTrack1;
      //   }

      //   this.sound = new Howl({
      //     autoplay: true,
      //     // 1
      //     src: [
      //       // require('./mp3/radiohead.mp3')
      //       $track
      //     ],

      //     onload: function() { console.log('song loaded!')},

      //     onplay: () => { console.log('song playing')},

      //     // 2
      //     onloaderror(id, err) {
      //       console.warn('failed to load sound file:', { id, err })
      //     }

      //   });

      // }

    },

    mounted() {
      // let externalScript = document.createElement('script')
      // externalScript.setAttribute('src', './src/audio-recorder.js')
      // document.head.appendChild(externalScript)

      

      // this.sound = new Howl({

      //   autoplay: true,

      //   // 1
      //   src: [
      //     require('./mp3/radiohead.mp3')
      //   ],

      //   onload: function() { console.log('song loaded!')},

      //   onplay: () => { console.log('song playing')},

      //   // 2
      //   onloaderror(id, err) {
      //     console.warn('failed to load sound file:', { id, err })
      //   }

      // });

    },
  }

</script>