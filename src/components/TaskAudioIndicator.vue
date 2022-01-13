<template>
  <div id="mf-task-audio" class="mf-task-audio" v-on:click="stopAudio"> <!-- this.taskTrackStatus = 'playing'; -->
    <!-- <span>Narration </span> -->
    <div class="audio-indicator audio-indicator--on">
      <!-- Playing -->
      <!-- on -->
      <svg class="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 17h-5v-10h5v10zm2-10v10l9 5v-20l-9 5zm15.324 4.993l1.646-1.659-1.324-1.324-1.651 1.67-1.665-1.648-1.316 1.318 1.67 1.657-1.65 1.669 1.318 1.317 1.658-1.672 1.666 1.653 1.324-1.325-1.676-1.656z"/></svg>
    </div>
    <div class="audio-indicator audio-indicator--off">
      <!-- Off -->
      <!-- off -->
      <svg class="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 17h-5v-10h5v10zm2-10v10l9 5v-20l-9 5zm17 4h-5v2h5v-2zm-1.584-6.232l-4.332 2.5 1 1.732 4.332-2.5-1-1.732zm1 12.732l-4.332-2.5-1 1.732 4.332 2.5 1-1.732z"/></svg>
    </div>
  </div>
</template>

<script>

  import {Howl, Howler} from 'howler';

  // data: function() {
  //    return  {
  //     micAccess: 'mic--not-checked'
  //   }
  // },

  export default {

    data: ()=> ({
      // taskTrackStatus: 'bosh',
    }),

    methods: {

      // loadAndPlayTaskMP3(){
      //   console.log('play Task Description via Howler');

      //   // this.taskTrackStatus = 'playing';

      //   this.sound = new Howl({
      //     src: [ this.$taskTrack ],
      //     onload: function() {
      //       console.log('song loaded!');
      //       // this.taskTrackStatus = 'loaded';
      //     },
      //     onplay: () => {
      //       console.log('song playing');
      //       // this.taskTrackStatus = 'playing';
      //     },
      //     onloaderror(id, err) {
      //       console.warn('failed to load sound file:', { id, err })
      //     }
      //   });

      //   this.sound.play();

      //   var element = document.getElementById("mf-task-audio");
      //   element.classList.remove("audio-is-off");

      // },

      // toggleTaskMP3(){
        
      //   var element = document.getElementById("mf-task-audio");

      //   if (this.taskTrackStatus == 'playing') {
      //     console.log('stop Howler track playing');
      //     this.sound.stop();
      //     element.classList.add("audio-is-off");
      //     this.taskTrackStatus == 'stopped';
      //   } else if(this.taskTrackStatus == 'stopped') {
      //     console.log('restart Howler track');
      //     this.sound.play();
      //     element.classList.add("audio-is-off");
      //     this.taskTrackStatus == 'playing';
      //   }

      // },

      stopAudio(){

        // console.log('STOP Howler track');
        // this.$parent.$parent.sound.stop();
        this.$parent.$parent.stopTaskTracks();

        var element = document.getElementById("mf-task-audio");
        element.classList.add("audio-is-off");

      },

    },

    beforeMount(){
      // this.playTaskMP3()
    },

    mounted () {
      // this.sound = new Howl({
      //   // 1
      //   src: [
      //     require('../../public/radiohead.mp3')
      //   ],

      //   // 2
      //   onloaderror(id, err) {
      //     console.warn('failed to load sound file:', { id, err })
      //   }
      // })

      // this.sound = new Howl({

      //   autoplay: true,

      //   // 1
      //   src: [
      //     require('../mp3/radiohead.mp3')
      //   ],

      //   onload: function() { console.log('song loaded!')},

      //   onplay: () => { console.log('song playing')},

      //   // 2
      //   onloaderror(id, err) {
      //     console.warn('failed to load sound file:', { id, err })
      //   }

      // });

    }

  };  

</script>