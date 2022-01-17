<template>
  <div class="home">

    

    <!-- <TaskAudioIndicator></TaskAudioIndicator> -->

    <!-- <debug> -->
    <!-- <h1>Hello! Welcome to Magic Fox</h1> -->
    
    <!-- <p>This page will feature an intro from the Magic Fox!</p> -->

    <!-- <h1>{{taskTrackStatus}}</h1> -->

    <!-- <img src="../assets/inline-mf.svg" alt="Magic Fox" class="mf"> -->
    <!-- <img src="../../images/pngs/EMOJI_SAD.png" alt="Magic Fox" class="mf"> -->


<!--     <video controls width="250">

        <source src="../../images/intro.mp4" autoplay
                type="video/mp4">

        <source src="../assets/video/intro.mp4"
                type="video/mp4">

        Sorry, your browser doesn't support embedded videos.
    </video> -->

    <div class="video-wrapper">
        <video id="video" class="video">
            <source src="../../images/intro.mp4" type="video/mp4" />
        </video>
        <div id="playpause" v-on:click="playVid" class="playpause">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l9 5.146-9 4.854z"/></svg>
        </div>
    </div>

    <div class="next-cta">
      <router-link to="/taskone" class="button button-round router-link">
        <!-- <img src="../assets/iconmonstr-arrow-1.svg" /> -->
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13 7v-6l11 11-11 11v-6h-13v-10z"/></svg>
      </router-link>
    </div>

    <!-- <router-link to="/taskone" class="button router-link">Let's get started!</router-link> -->
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <canvasTest msg="Magic Fox Prototype v0.2"> -->
  </div>
</template>

<script>
  // import HelloWorld from '../components/HelloWorld.vue';
  // import canvasTest from '../components/canvas-test.vue';
  // import debug from '../components/debug.vue';

  import {Howl, Howler} from 'howler';

  import TaskAudioIndicator from '../components/TaskAudioIndicator.vue'

  // import testSound from "../assets/radiohead.mp3";

  

  export default {

    name: 'home',

    components: {
      TaskAudioIndicator
    },

    // data: function() {
    //    return  {
    //     micAccess: 'mic--not-checked'
    //   }
    // },

    // data: ()=> ({
    //   // taskTrackStatus: 'bosh',
    // }),

    methods: {

      playVid() {
        // $('.video').parent().click(function () {
        //     if($(this).children(".video").get(0).paused){
        //         $(this).children(".video").get(0).play();
        //         $(this).children(".playpause").fadeOut();
        //     }else{
        //        $(this).children(".video").get(0).pause();
        //         $(this).children(".playpause").fadeIn();
        //     }
        // });
        const video = document.getElementById("video");
        const playpause = document.getElementById("playpause");
        video.play();
        playpause.classList.add("is-hidden");
      },

    //   // loadAndPlayTaskMP3(){
    //   //   console.log('play Task Description via Howler');

    //   //   // this.taskTrackStatus = 'playing';

    //   //   this.sound = new Howl({
    //   //     src: [ this.$taskTrack ],
    //   //     onload: function() {
    //   //       console.log('song loaded!');
    //   //       // this.taskTrackStatus = 'loaded';
    //   //     },
    //   //     onplay: () => {
    //   //       console.log('song playing');
    //   //       // this.taskTrackStatus = 'playing';
    //   //     },
    //   //     onloaderror(id, err) {
    //   //       console.warn('failed to load sound file:', { id, err })
    //   //     }
    //   //   });

    //   //   this.sound.play();

    //   //   var element = document.getElementById("mf-task-audio");
    //   //   element.classList.remove("audio-is-off");

    //   // },

    //   // toggleTaskMP3(){
        
    //   //   var element = document.getElementById("mf-task-audio");

    //   //   if (this.taskTrackStatus == 'playing') {
    //   //     console.log('stop Howler track playing');
    //   //     this.sound.stop();
    //   //     element.classList.add("audio-is-off");
    //   //     this.taskTrackStatus == 'stopped';
    //   //   } else if(this.taskTrackStatus == 'stopped') {
    //   //     console.log('restart Howler track');
    //   //     this.sound.play();
    //   //     element.classList.add("audio-is-off");
    //   //     this.taskTrackStatus == 'playing';
    //   //   }

    //   // },

      // stopAudio(){

      //   // console.log('STOP Howler track');
      //   // this.sound.stop();
      //   this.$parent.stopTaskTracks();

      //   // var element = document.getElementById("mf-task-audio");
      //   // element.classList.add("audio-is-off");

      // },

    },

    // beforeMount(){
    //   // this.playTaskMP3()
    // },

    // mounted () {
    //   // this.sound = new Howl({
    //   //   // 1
    //   //   src: [
    //   //     require('../../public/radiohead.mp3')
    //   //   ],

    //   //   // 2
    //   //   onloaderror(id, err) {
    //   //     console.warn('failed to load sound file:', { id, err })
    //   //   }
    //   // })

    //   this.sound = new Howl({

    //     autoplay: true,

    //     // 1
    //     src: [
    //       require('../mp3/radiohead.mp3')
    //     ],

    //     onload: function() { console.log('song loaded!')},

    //     onplay: () => { console.log('song playing')},

    //     // 2
    //     onloaderror(id, err) {
    //       console.warn('failed to load sound file:', { id, err })
    //     }

    //   });

    // }

    // name: 'home',
    // components: {
    //   canvasTest,
    //   // debug,
    // },
  };      

</script>

<style lang="scss" scoped>
  .mf {
    width:  80%;
    max-width: 600px;
  }

  video {
    width: 90%;
    margin: 2rem;
  }

  .video {
      // width: 100%;
      // border: 1px solid black;
  }
  
  .video-wrapper{
      // display:table;
      width:auto;
      position:relative;
      width:90%;
  }

  .playpause {

      // background-image:url(http://png-4.findicons.com/files/icons/2315/default_icon/256/media_play_pause_resume.png);
      background-repeat:no-repeat;
      width:50%;
      height:50%;
      position:absolute;
      left:0%;
      right:0%;
      top:0%;
      bottom:0%;
      margin:auto;
      background-size:contain;
      background-position: center;

      svg {
        pointer-events: none;
        width: 100%;
        height: 100%;
        path {
          fill: #fff;
          transition: 0.2s all;
        }
      }

      &:hover {
        svg path {
          fill: #f14b2e;
        }
      }

      &.is-hidden {
        opacity: 0;
      }
  }

  @keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
  }

  .mic-check {
    > div {
      // display: flex;
      flex-direction: column;
      align-items: center;
      outline: 1px solid black;
      padding: 2rem;
      animation: fadein 0.2s;
      > * {
        max-width: 600px;
      }
    }
    button {
      margin: 2rem 0;
    }
  }
  .mic-test {     display: none; }
  .mic-prompt {   display: none; }
  .mic-allowed {  display: none; }
  .mic-blocked {  display: none; }

  .mic-check {

    &.mic--not-checked { .mic-test {    display: flex; } }
    &.mic--testing { .mic-prompt {      display: flex; } }
    &.mic--active { .mic-allowed {      display: flex; } }
    &.mic--blocked { .mic-blocked {     display: flex; } }
  }
</style>
