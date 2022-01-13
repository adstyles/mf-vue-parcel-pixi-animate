<template>
  <div class="taskthree">
    <h1>Task 3 - Create your own sad face emoji and choose a happy emoji</h1>
    <!-- <p>Design your character’s phone! Drag the features onto the face to make a mega sad emoji. Then select your favourite happy icon!</p> -->

    <!-- <h1>Sad Face Emoji</h1> -->

    <div class="tasks-wrapper">
      


      <div class="emoji-creator task-box">
        <div class="canvas-and-created-emoji">
          <canvas class="myCanvas" ref="myCanvas" id="canvas" width=420 height=460></canvas>
          <!-- <canvas class="exportCanvas" ref="exportCanvas" id="exportCanvas" width=140 height=120></canvas> -->
          <div class="canvas-control">
            <div class="created-emoji-wrapper">
              <img class="created-emoji" v-bind:src="savedCanvas" /> 
            </div>
            <button href="#" v-on:click="saveCanvas">SAVE</button>
          </div>
        </div>
      </div>
      
      <div class="dividing-line"></div>
      <!-- <textarea name="backup" id="backup" cols="60" rows="10"></textarea> -->
      <!-- <h1>Your Sad Face Emoji</h1> -->

      <div class="select-happyIcon task-box task-box__emoji-select">
        <ul class="happyIcons">
          <li>
            <img src="../assets/inline-emoji-arm.svg">
            <button href="#" class="happyIcon button__blue" v-on:click="choosehappyIcon" data-happyIcon="arm">arm</button>
          </li>
          <li>
            <img src="../assets/inline-emoji-rainbow.svg">
            <button href="#" class="happyIcon button__blue" v-on:click="choosehappyIcon" data-happyIcon="rainbow">rainbow</button>
          </li>
          <li>
            <img src="../assets/inline-emoji-star.svg">
            <button href="#" class="happyIcon button__blue" v-on:click="choosehappyIcon" data-happyIcon="star">shooting star</button>
          </li>
          <li>
            <img src="../assets/inline-emoji-heart.svg">
            <button href="#" class="happyIcon button__blue" v-on:click="choosehappyIcon" data-happyIcon="heart">heart</button>
          </li>
          <li>
            <img src="../assets/inline-emoji-shades.svg">
            <button href="#" class="happyIcon button__blue" v-on:click="choosehappyIcon" data-happyIcon="shades">shades</button>
          </li>
          <li>
            <img src="../assets/inline-emoji-thumb.svg">
            <button href="#" class="happyIcon button__blue" v-on:click="choosehappyIcon" data-happyIcon="thumb">thumb</button>
          </li>
        </ul>
      </div>
      <!-- <h1>You've selected the: {{happyIcon}}</h1> -->

    </div>


    <!-- <router-link to="/taskfour" class="button router-link">When you're ready, click here to continue!</router-link> -->

    <div class="next-cta">
      <p>When you're ready, click the red button to continue</p> 
      <router-link to="/taskfour" class="button button__disabled button-round router-link">
        <!-- <img src="../assets/iconmonstr-arrow-1.svg" /> -->
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13 7v-6l11 11-11 11v-6h-13v-10z"/></svg>
      </router-link>
    </div>


  </div>
</template>

<script>

  import { fabric } from 'fabric';
  import { fabricHistory }  from 'fabric-history';


  export default {
    name: 'taskthree',
    methods: {

      choosehappyIcon: function(event){
        // get attribute and commit to changeSkin in store
        var happyIcon = event.target.getAttribute('data-happyIcon');
        console.log(happyIcon);
        // update active state
        const active = document.querySelector('.is-active');
        if(active){
          active.classList.remove('is-active');
        }
        event.target.parentNode.classList.toggle('is-active');
        this.$store.commit('changehappyIcon', happyIcon);
        // sets {{skin}} on this Vue
        this.happyIcon = this.$store.getters.getCurrenthappyIcon; 
      },

      // saveCanvas: function(){
      //   // let desiredWidth = 100;
      //   // let desiredHeight = 100;
      //   // var exportCanvas = document.createElement('canvas');
      //   // exportCanvas.width = desiredWidth;
      //   // exportCanvas.height = desiredHeight;
      //   // exportCanvas.getContext('2d').drawImage(this.$refs.myCanvas,x,y,w,h,0,0,desiredWidth, desiredHeight);
      //   // let emojiCanvas = exportCanvas.toDataURL();

      //   const emojiCanvas = this.$refs.myCanvas.toDataURL({
      //         format: 'png',
      //         left: 300,
      //         top: 250,
      //         width: 200,
      //         height: 150
      //     });

      //   const backup = document.getElementById('backup').value = emojiCanvas;
      //   // this.savedCanvas = emojiCanvas;
      //   this.$store.commit('setEmojiImage', emojiCanvas);
      //   // sets {{skin}} on this Vue
      //   this.savedCanvas = this.$store.getters.getEmojiImage; 
      // }

      saveCanvas: function(){

        let offsetTop = 150;
        // let offsetLeft = 180;
        let offsetLeft = 130;
        let desiredWidth = 140;
        let desiredHeight = 120;

        // let desiredWidth = 100;
        // let desiredHeight = 100;
        let x = (offsetLeft * 2);
        let y = (offsetTop * 2);
        let w = (desiredWidth * 2);
        let h = (desiredHeight * 2);

        // create a canvas
        var c = document.createElement('canvas');
        c.width = desiredWidth;
        c.height = desiredHeight;

        // deselect objects
        this.activeCanvas.discardActiveObject().renderAll();
        // draw part of old canvas onto new temp canvas
        c.getContext('2d').drawImage(this.$refs.myCanvas,x,y,w,h,0,0,desiredWidth, desiredHeight);
        // save to Data
        let emojiCanvas = c.toDataURL({
              format: 'png',
              left: 200,
              top: 250,
              width: 200,
              height: 150
          });
        // display in code and image
        // const backup = document.getElementById('backup').value = emojiCanvas;
        // save to store..
        this.savedCanvas = emojiCanvas;
      }

    },

    beforeUpdate() {
      // if happyIcon is in store, update the class
      const storedhappyIcon = this.$store.getters.getCurrenthappyIcon;
      // console.log('storedhappyIcon ' + storedhappyIcon);
      const happyIcon = document.querySelector('.happyIcon[data-happyIcon="'+storedhappyIcon+'"]');
      // console.log(happyIcon);
      happyIcon.parentNode.classList.add('is-active');

    },

    data: ()=> ({
      happyIcon: 'not set',
      savedCanvas: null,
      activeCanvas: null,
    }),

    mounted(){

      // get happyIcon from store... - better way to bind this??
      this.happyIcon = this.$store.getters.getCurrenthappyIcon;

      // using fabic.js for canvas 
      const self = this;
      const ref = this.$refs.myCanvas;
      const canvas = this.activeCanvas = new fabric.Canvas(ref);
      
      // var canvas = this.$refs.myCanvas = new fabric.Canvas('c');
      // fabric.Object.prototype.transparentCorners = false;

      // var rect = new fabric.Rect({
      //   left: 100,
      //   top: 50,
      //   width: 100,
      //   height: 100,
      //   fill: 'green',
      //   angle: 20,
      //   padding: 10
      // });
      // canvas.add(rect);


      // EMOJI BLANK FACE

      fabric.loadSVGFromURL('https://a-d.dev/src/assets/inline-emoji-face.svg', function(objects, options) { 
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
      }); 


      // DETECT MOVE, STOP FROM HITTING EDGE
      // canvas.on('object:modified', function (options: any) {
      canvas.on('object:modified', function (options) {
          let obj = options.target;
          console.log(obj);
          let boundingRect = obj.getBoundingRect(true);
          if (boundingRect.left < 0
              || boundingRect.top < 0
              || boundingRect.left + boundingRect.width > obj.canvas.getWidth()
              || boundingRect.top + boundingRect.height > obj.canvas.getHeight()) {

              // obj.top = obj.stateProperties.top;
              // obj.left = obj.stateProperties.left;
              // // obj.angle = obj.stateProperties.angle;
              // obj.scaleX = obj.stateProperties.scaleX;
              // obj.scaleY = obj.stateProperties.scaleY;

              // obj.top = 20;
              // obj.left = 200;
              // obj.scaleX = 1;
              // obj.scaleY = 1;

              // console.log(obj.top); 
              // console.log(obj.left); 
              // // console.log(obj.angle); 
              // console.log(obj.scaleX); 
              // console.log(obj.scaleY); 

              canvas.undo();

              // obj.top = obj._stateProperties.top;
              // obj.left = obj._stateProperties.left;
              // // obj.angle = obj._stateProperties.angle;
              // obj.scaleX = obj._stateProperties.scaleX;
              // obj.scaleY = obj._stateProperties.scaleY;
              // obj.setCoords();
              // obj.saveState();
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

      for (const eye of eyes){

          j++;
          let topOffset = (53*j);
          // if (j == 8) {
          //   topOffset = topOffset + 30;
          // }

          console.log(eye);
          console.log(j);
          // console.log(topOffset);

          fabric.loadSVGFromURL('https://a-d.dev/src/assets/'+eye, function(objects, options) { 
              var eye = fabric.util.groupSVGElements(objects, options);
              // console.log(eye);
              eye.top = (topOffset - eye.height);
              eye.left = 330;
              // eye.padding: 20;
              // eye._stateProperties.top = eye.top;
              // eye._stateProperties.left = eye.left;
              // eye._stateProperties.scaleX = eye.scaleX;
              // eye._stateProperties.scaleY = eye.scaleY;
              // console.log('eye._stateProperties', eye._stateProperties);
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

      for (const mouth of mouths){

          i++;
          let topOffset = (50*i);
          if (i == 8) {
            topOffset = topOffset + 30;
          }

          console.log(mouth);
          console.log(i);
          // console.log(topOffset);

          fabric.loadSVGFromURL('https://a-d.dev/src/assets/'+mouth, function(objects, options) { 
              var mouth = fabric.util.groupSVGElements(objects, options);
              // console.log(mouth.height);
              console.log(mouth);
              mouth.top = (topOffset - mouth.height);
              mouth.left = 30;
              // mouth.height = mouth.viewBoxHeight;
              // mouth.width = mouth.viewBoxWidth;
              mouth.padding = 10;
              canvas.add(mouth); 
              canvas.calcOffset();
              canvas.renderAll();
          }); 

      }




      // fabric.loadSVGFromURL('https://a-d.dev/src/assets/test_svgs/mouth_1.svg', function(objects, options) { 
      //     var mouth_1 = fabric.util.groupSVGElements(objects, options);
      //     canvas.add(mouth_1); 
      //     canvas.calcOffset();
      //     canvas.renderAll();
      // }); 

      // // need to be SOP / CORS url to allow SVG to load
      // fabric.loadSVGFromURL('https://a-d.dev/src/assets/test_svgs/mouth_2.svg', function(objects, options) { 
      //     var mouth_2 = fabric.util.groupSVGElements(objects, options);
      //     canvas.add(mouth_2); 
      //     canvas.calcOffset();
      //     canvas.renderAll();
      // }); 


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
    > * {
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
    margin: 0.5rem;
  }

  .task-box.emoji-creator {
    display: flex;
    flex-direction: column;
    align-items: center;
    // justify-content: center;
    // flex-wrap: wrap;
  }

  #canvas {
    // background-color: #dde;
    background-color: transparent;
    outline: 1px solid black;
  }

  .canvas-and-created-emoji {
    display: flex;
    align-items: center
  }

  .created-emoji-wrapper {
    width: 140px;
    height: 120px;
    outline: 1px dashed black;
    margin: 1rem;
  }

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
    > * {
      flex: 0 0 33%;
      padding: 0.5rem 2rem;
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

  .is-active {
    .button,
    button {
      background: $btn-col-1;
      border: 2px solid $btn-col-2;
      &::before {
        background: $btn-col-3;
        box-shadow: 0 0 0 2px $btn-col-2, 0 0.625rem 0 0 $btn-shadow;
      }
      &:hover {
        // background: $btn-col-1;
        &::before {
          box-shadow: 0 0 0 2px $btn-col-2, 0 0.5rem 0 0 $btn-shadow;
        }
      }
      &:active {
        // background: $btn-col-1;
        &::before {
          box-shadow: 0 0 0 2px $btn-col-2, 0 0 $btn-shadow;
        }
      }
      &.is-active {
        border-color: $active;
        &::before {
          background: $active;
          box-shadow: 0 0 0 2px $active, 0 0.625rem 0 0 $btn-shadow;
        }
      }
    }
  }
</style>
