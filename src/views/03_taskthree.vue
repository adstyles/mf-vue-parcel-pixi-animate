<template>
  <div class="taskthree">
    <!-- <h1>Task 3</h1> -->
    <!-- <p>Design your character’s phone! Drag the features onto the face to make a mega sad emoji. Then select your favourite happy icon!</p> -->
    <!-- <h1>Sad Face Emoji</h1> -->
    <div class="tasks-wrapper">
      <div class="emoji-creator task-box">
        <h1>Create your own sad face emoji</h1>
        <p>Drag the bits onto the circle below to make an emoji: <img class="example-icon" src="../../images/pngs/EMOJI_SAD.png"></p>
        <div class="canvas-and-created-emoji js-emoji-container">
          <canvas class="myCanvas" ref="myCanvas" id="canvas" width=420 height=460></canvas>
          <div class="status">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z" /></svg>
          </div>
          <!-- <canvas class="exportCanvas" ref="exportCanvas" id="exportCanvas" width=140 height=120></canvas> -->
          <!-- <div class="canvas-control"> -->
          <!-- <div class="created-emoji-wrapper"> -->
          <!-- <img class="created-emoji" v-bind:src="savedCanvas" /> -->
          <!-- </div> -->
          <!-- <button href="#" v-on:click="saveCanvas">SAVE</button> -->
          <!-- </div> -->
        </div>
      </div>
      <div class="dividing-line"></div>
      <!-- <textarea name="backup" id="backup" cols="60" rows="10"></textarea> -->
      <!-- <h1>Your Sad Face Emoji</h1> -->



      <div class="select-happyIcon task-box task-box__emoji-select">
        <h1>Choose a happy emoji</h1>
        <ul class="happyIcons">
          <li class="happyIcon" v-on:click="choosehappyIcon" data-happyIcon="arm">
            <img src="../assets/inline-emoji-arm.svg">
            <div class="status">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z" /></svg>
            </div>
          </li>
          <li class="happyIcon" v-on:click="choosehappyIcon" data-happyIcon="rainbow">
            <img src="../assets/inline-emoji-rainbow.svg">
            <div class="status">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z" /></svg>
            </div>
          </li>
          <li class="happyIcon" v-on:click="choosehappyIcon" data-happyIcon="star">
            <img src="../assets/inline-emoji-star.svg">
            <div class="status">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z" /></svg>
            </div>
          </li>
          <li class="happyIcon" v-on:click="choosehappyIcon" data-happyIcon="heart">
            <img src="../assets/inline-emoji-heart.svg">
            <div class="status">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z" /></svg>
            </div>
          </li>
          <li class="happyIcon" v-on:click="choosehappyIcon" data-happyIcon="shades">
            <img src="../assets/inline-emoji-shades.svg">
            <div class="status">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z" /></svg>
            </div>
          </li>
          <li class="happyIcon" v-on:click="choosehappyIcon" data-happyIcon="thumbsup">
            <img src="../assets/inline-emoji-thumb.svg">
            <div class="status">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z" /></svg>
            </div>
          </li>
        </ul>
      </div>




      <!-- <h1>You've selected the: {{happyIcon}}</h1> -->
    </div>
    <!-- <router-link to="/taskfour" class="button router-link">When you're ready, click here to continue!</router-link> -->
    <div class="next-cta">
      <p>When you're ready, click the red button to continue</p>
      <router-link @click.native="saveCanvas" to="/taskfour" class="button button__disabled button-round router-link">
        <!-- <img src="../assets/iconmonstr-arrow-1.svg" /> -->
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M13 7v-6l11 11-11 11v-6h-13v-10z" /></svg>
      </router-link>
    </div>
  </div>
</template>
<script>
import { fabric } from 'fabric';
import { fabricHistory } from 'fabric-history';

import { EventBus } from '../main';


export default {
  name: 'taskthree',
  methods: {

    // enableNext: function() {
    //   document.querySelector('.router-link').classList.remove('button__disabled');
    // },

    // readyToProgress: function() {
    //   console.log('readyToProgress called');
    //   console.log('this.$refs.canvasInteractedWith ', this.$refs.canvasInteractedWith);
    //   console.log('this.$refs.happyIcon ', this.$refs.happyIcon);
    //   if (this.$refs.canvasInteractedWith && this.$refs.happyIcon != 'not set') {
    //     this.enableNext();
    //   }
    // },

    choosehappyIcon: function(event) {
      // get attribute and commit to changeSkin in store
      var happyIcon = event.target.parentNode.getAttribute('data-happyIcon');
      console.log(happyIcon);
      // update active state
      const active = document.querySelectorAll('.happyIcon');
      active.forEach(function(userItem) {
        // deleteUser(userItem);
        userItem.classList.remove('is-active');
      });

      // event.target.classList.toggle('is-active');

      document.querySelector('[data-happyIcon="' + happyIcon + '"]').classList.toggle('is-active');

      this.$store.commit('changehappyIcon', happyIcon);
      // sets {{skin}} on this Vue
      this.happyIcon = this.$store.getters.getCurrenthappyIcon;

      // document.querySelector('.next-cta').classList.add('happyicon-is-active');
      EventBus.$emit('taskInteraction', 'happyIcon');
    },

    saveCanvas: function() {

      // let offsetTop = 150;
      // let offsetLeft = 130;
      // let desiredWidth = 140;
      // let desiredHeight = 120;

      var scale = window.devicePixelRatio;
      console.log('scale is... ', scale);


      let offsetTop = 150;
      let offsetLeft = 130;
      // let desiredWidth = 278;
      // let desiredHeight = 240;

      let desiredWidth = 139;
      let desiredHeight = 120;

      // let x = (offsetLeft * 2);
      // let y = (offsetTop * 2);
      // let w = (desiredWidth * 2);
      // let h = (desiredHeight * 2);

      // create a canvas
      var c = document.createElement('canvas');
      c.width = (desiredWidth * scale);
      c.height = (desiredHeight * scale);

      // let x = (offsetLeft * 2);
      // let y = (offsetTop * 2);
      let x = (offsetLeft * scale);
      let y = (offsetTop * scale);
      // let w = (desiredWidth * 2);
      // let h = (desiredHeight * 2);

      // let x = offsetLeft;
      // let y = offsetTop;
      let w = (desiredWidth * scale);
      let h = (desiredHeight * scale);

      // deselect objects
      this.activeCanvas.discardActiveObject().renderAll();
      // draw part of old canvas onto new temp canvas
      c.getContext('2d').drawImage(this.$refs.myCanvas, x, y, w, h, 0, 0, (desiredWidth * scale), (desiredHeight * scale));
      // save to Data
      let emojiCanvas = c.toDataURL({
        format: 'png',
        top: 0,
        left: 0,
        width: desiredWidth,
        height: desiredHeight 
      });
      // display in code and image
      // const backup = document.getElementById('backup').value = emojiCanvas;
      // save to store..
      this.$store.commit('setEmojiImage', emojiCanvas);
      this.savedCanvas = emojiCanvas;
    }

  },

  // detectCanvasInteraction() {
  //   // js-emoji-container
  // },

  beforeUpdate() {

    // // if happyIcon is in store, update the class
    // const storedhappyIcon = this.$store.getters.getCurrenthappyIcon;
    // // console.log('storedhappyIcon ' + storedhappyIcon);
    // const happyIcon = document.querySelector('.happyIcon[data-happyIcon="' + storedhappyIcon + '"]');
    // // console.log(happyIcon);
    // happyIcon.parentNode.classList.add('is-active');

  },

  

  data: () => ({
    happyIcon: 'not set',
    savedCanvas: null,
    canvasInteractedWith: null,
    happyIconSelected: null,
    activeCanvas: null,
  }),

  created() {

    EventBus.$on('taskInteraction', (data) => {
      console.log('taskInteraction: ', data);    
      // this.router.go({ name: 'endscreen' });
      // this.startScene(data);
      if (data == 'emoji') { this.$refs.canvasInteractedWith = true; }
      if (data == 'happyIcon') { this.$refs.happyIconSelected = true; }
      if (this.$refs.happyIconSelected && this.$refs.canvasInteractedWith) {
        console.log('ready to progress');
        // document.querySelector('.next-cta').classList.remove('button__disabled');
        document.querySelector('.router-link').classList.remove('button__disabled');
      }
    });

  },

  mounted() {

    // get happyIcon from store... - better way to bind this??
    this.happyIcon = this.$store.getters.getCurrenthappyIcon;

    // using fabic.js for canvas 
    const self = this;
    const ref = this.$refs.myCanvas;
    const canvas = this.activeCanvas = new fabric.Canvas(ref);

    // EMOJI BLANK FACE

    let $staticDomain = 'a-d.dev';
    // http://localhost:1234/
    if (window.location.href.includes("localhost")) {
      $staticDomain = 'mf.wip';
    }



    // DETECT MOVE, STOP FROM HITTING EDGE
    canvas.on('object:modified', function(options) {
      let obj = options.target;
      console.log(obj);
      let boundingRect = obj.getBoundingRect(true);
      if (boundingRect.left < 0 ||
        boundingRect.top < 0 ||
        boundingRect.left + boundingRect.width > obj.canvas.getWidth() ||
        boundingRect.top + boundingRect.height > obj.canvas.getHeight()) {

        canvas.undo();

      }
    });

    // EYES
    let eyes = [
      'inline-eyes1.svg',
      'inline-eyes2.svg',
      'inline-eyes3.svg',
      'inline-eyes4.svg',
      'inline-eyes6.svg',
      'inline-eyes7.svg',
      'inline-eyes8.svg',
      'inline-eyes5.svg',
    ];

    let j = 0;

    for (const eye of eyes) {

      j++;
      let topOffset = (53 * j);

      console.log(eye);
      console.log(j);

      fabric.loadSVGFromURL('https://'+$staticDomain+'/images/assets/' + eye, function(objects, options) {
        var eye = fabric.util.groupSVGElements(objects, options);
        eye.top = (topOffset - eye.height);
        eye.left = 330;
        eye.hoverCursor = 'grab';
        eye.moveCursor = 'grabbing';
        canvas.add(eye);
        canvas.calcOffset();
        canvas.renderAll();
      });

    }



    // MOUTHS
    let mouths = [
      'inline-mouth1.svg',
      'inline-mouth2.svg',
      'inline-mouth3.svg',
      'inline-mouth4.svg',
      'inline-mouth6.svg',
      'inline-mouth7.svg',
      'inline-mouth8.svg',
      'inline-mouth5.svg',
    ];

    let i = 0;

    for (const mouth of mouths) {

      i++;
      let topOffset = (50 * i);
      if (i == 8) {
        topOffset = topOffset + 30;
      }

      console.log(mouth);
      console.log(i);
      // console.log(topOffset);

      fabric.loadSVGFromURL('https://'+$staticDomain+'/images/assets/' + mouth, function(objects, options) {
        var mouth = fabric.util.groupSVGElements(objects, options);
        // console.log(mouth.height);
        console.log(mouth);
        mouth.top = (topOffset - mouth.height);
        mouth.left = 30;
        // mouth.height = mouth.viewBoxHeight;
        // mouth.width = mouth.viewBoxWidth;
        mouth.padding = 10;
        mouth.hoverCursor = 'grab';
        mouth.moveCursor = 'grabbing';
        canvas.add(mouth);
        canvas.calcOffset();
        canvas.renderAll();
      });

    }


    fabric.loadSVGFromURL('https://'+$staticDomain+'/images/assets/inline-emoji-face.svg', function(objects, options) {
      var face = fabric.util.groupSVGElements(objects, options);
      console.log(face.height);
      face.top = 150;
      face.left = 130;
      face.lockMovementX = true;
      face.lockMovementY = true;
      face.selectable = false;
      face.hoverCursor = "default";
      canvas.add(face);
      canvas.calcOffset();
      canvas.renderAll();
      canvas.sendToBack(face);
    });


    // canvas interaction detection...
    let $i = 0;
    canvas.on('mouse:up', function (event) {
      $i++;
      if ($i >= 2) {
        document.querySelector('.js-emoji-container').classList.add('is-active');
        // document.querySelector('.next-cta').classList.add('canvas-is-active');
        EventBus.$emit('taskInteraction', 'emoji');
        // this.readyToProgress();
      }
      // if (isObjectMoving){
      //   isObjectMoving = false;
      //   recCanvas(canvas) // fire this if finished
      // } 
      // 
    });

  }

};
</script>
<style lang="scss" scoped>
/*  .is-active {
    outline: 4px solid red !important;
  }*/

// .emoji-creator {
//   position: relative;
// }

$mf-red: #f4745e;
$blue: #2c9ffc;




.tasks-wrapper {
  display: flex;
  padding-top: 1rem;

  >* {
    flex: 1 1 50%;
  }

  position: relative;
}

.dividing-line {
  position: absolute;
  height: 90%;
  top: 5%;
  width: 1px;
  left: 50%;
  background-color: $mf-red;
}

.task-box {
  // outline: 1px solid black;
  // margin: 0.5rem;
  width: 100%;
  min-width: 600px;

  h1 {
    margin-top: 0.5rem;
  }

  p {
    margin: 0.5rem 0 1rem;
  }

  // background-color: teal;
}

.task-box.emoji-creator {
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: center;
  // flex-wrap: wrap;
  margin-bottom: 2rem;
}

#canvas {
  // background-color: #dde;
  background-color: transparent;
  outline: 1px dashed black;
}

.canvas-and-created-emoji {
  display: flex;
  align-items: center
}

// .created-emoji-wrapper {
// width: 140px;
// height: 120px;
// outline: 1px dashed black;
// margin: 1rem;
// }

// .exportCanvas {
//   // background: teal;
//   outline: 2px solid black;
//   position: absolute;
//   top: 150px;
//   left: 180px;
//   z-index: -1;
// }

img {
  // outline: 5px solid teal;
  opacity: 0.5;

  &:hover {
    opacity: 0.7;
  }
}

.is-active img {
  opacity: 1;
  // outline: 4px solid red !important;
}

.select-happyIcon {
  width: 100%;
}

ul.happyIcons {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  min-width: 400px;
  margin-left: 2rem;

  >* {
    flex: 0 0 33%;
    // margin: 0.5rem 1rem;
  }
}

button {
  margin: 0rem 0;
}




$btn-col-2: $mf-red;
$btn-col-1: darken($mf-red, 10%);
$btn-col-3: darken($mf-red, 20%);
$btn-shadow: lighten(#757763, 30%);
$active: darken($mf-red, 30%);
// $active: darken(#faca44, 0%);

img.created-emoji {
  opacity: 1;
}

img.example-icon {
  opacity: 1;
  width: 30px;
  height: 30px;
}

.is-active {
  .status {
    opacity: 1;
  }

  svg {
    path {
      fill: green;
    }
  }
}


// * {
//   outline: 1px solid red;
// }

// .button.happyicon-is-active.canvas-is-active {

// }


</style>