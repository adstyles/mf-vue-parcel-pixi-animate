<template>
  <div class="home">
    <!-- <debug> -->
    <h1>Magic Fox Setup</h1>

    <p>Make sure your sound is on!</p>

    <div class="mic-check" :class="micAccess">
      
      <div class="mic-test"> 
        <p>Before we get started, we need to make sure the microphone works!
        Click the blue button to see if the microphone is working.</p>

        <button class="button__blue" v-on:click="requestsAccessToMic">Request Access to Mic</button>
      </div>

      <div class="mic-prompt"> 
        <p>If this is the first time, you might need to click 'Allow' in the little box in the corner</p>    
        <img src="../assets/mic-prompt.png" alt="Magic Fox" class="" width="400">
      </div>

      <div class="mic-allowed">    
        <p>Great! Click the red button below to get started!</p>

        <router-link to="/home" class="button router-link">Let's get started!</router-link>

      </div>

      <div class="mic-blocked">    
        <p>It looks as if the microphone is blocked. Please allow the microphone by clicking the icon in the top:</p>
        <img src="../assets/mic-blocked.png" alt="Magic Fox" class="" width="400">
        <p>Once you've done that, try the button again</p>
        <button class="button__blue" v-on:click="requestsAccessToMic">Test Mic Access</button>
      </div>

      <!-- <h3>{{micAccess}}</h3> -->

      <!-- <p>Please click on the red button when the children are ready to start</p> -->

    </div>
    <!-- <router-link to="/home" class="button router-link">Let's get started!</router-link> -->
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <canvasTest msg="Magic Fox Prototype v0.2"> -->
  </div>
</template>

<script>
  // import HelloWorld from '../components/HelloWorld.vue';
  // import canvasTest from '../components/canvas-test.vue';
  // import debug from '../components/debug.vue';

  export default {
    name: 'home',
    data: function() {
       return  {
        micAccess: 'mic--not-checked'
      }
    },
    methods: {

      requestsAccessToMic: function(e) {

        // navigator.mediaDevices.getUserMedia({video: false, audio: true});
        // let micAccess = this.micAccess;
        // let micAccess = this.$refs.micAccess;
        this.micAccess = 'mic--testing';

        // The view model.
        var vm = this;

        navigator.mediaDevices.getUserMedia({ audio: true, video: false})
        .then(function (stream) {
          if (stream.getAudioTracks().length > 0){
            //code for when audio of the devices is not available
            vm.micAccess = 'mic--active';
          } else {
            vm.micAccess = 'mic--blocked';
          }
        })
        .catch(function (error) { 
          // code for when there is an error
          // vm.micAccess = '';
          vm.micAccess = 'mic--blocked';
        });

        // navigator.mediaDevices.getUserMedia({video: false, audio: true}).then( stream => {
        //   // window.localStream = stream; // A
        //   // window.localAudio.srcObject = stream; // B
        //   // window.localAudio.autoplay = true; // C
        // }).catch( err => {
        //   console.log("u got an error:" + err)
        // });

      },

      beforeUpdate() {
        // if Creature is in store, update the class
        // const storedCreature = this.$store.getters.getCurrentCreature;
        // console.log('storedCreature ' + storedCreature);
        // const item = document.querySelector('.creature[data-creature="'+storedCreature+'"]');
        // console.log(item);
        // item.classList.add('is-active');

      },

      // data: ()=> ({
      //   micAccess: 'not checked',
      // }),

      // data () {
      //   return {
      //     micAccess: 'not checked'
      //   }
      // },

      // mounted(){
      //   this.micAccess = 'not tested';
      // }

    }
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

  h1 {
    margin-bottom: 2rem;
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
      margin-bottom: 2rem;
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
    &.mic--active { .mic-allowed {      display: flex; padding-bottom: 4rem; p {padding-bottom: 2rem;} } }
    &.mic--blocked { .mic-blocked {     display: flex; } }
  }
</style>
