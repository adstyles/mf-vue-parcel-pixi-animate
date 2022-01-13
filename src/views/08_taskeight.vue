<template>
  <div class="taskeight">
    <h1>Task 8 - Dress up your Easter Island Head</h1>
    <!-- <p>There’s magical sculptures in your film! Let’s make them super fun, drag the fancy dress items onto the sculptures until they look super silly!</p> -->
    <div class="canvas-container">
      <!-- <h1>Easter Island Heads</h1> -->
      <canvas ref="myCanvas" id="canvas" width=1024 height=576></canvas>
      <div class="canvas--background"></div>
    </div>
    <!-- <button href="#" v-on:click="saveCanvas">SAVE CANVAS</button> -->
    <!-- <textarea name="backup" id="backup" cols="60" rows="10"></textarea> -->
    <!-- <div class="preview-img-wrapper">
      <img class="preview-img" v-bind:src="savedCanvas" />
    </div> -->
    <!-- <router-link to="/playanimation" class="button router-link">When you're ready, click here to continue!</router-link> -->
    <div class="next-cta">
      <p>When you're ready, click the red button to continue</p>
      <router-link @click.native="saveCanvas" to="/tasknine" class="button button__disabled button-round router-link">
        <!-- <img src="../assets/iconmonstr-arrow-1.svg" /> -->
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M13 7v-6l11 11-11 11v-6h-13v-10z" /></svg>
      </router-link>
    </div>
  </div>
</template>
<script>
import { fabric } from 'fabric';

export default {
  name: 'taskeight',
  methods: {

    saveCanvas: function() {

      let offsetTop = 0;
      let offsetLeft = 0;
      let desiredWidth = 1024;
      let desiredHeight = 576;

      // create a canvas
      var c = document.createElement('canvas');
      c.width = desiredWidth;
      c.height = desiredHeight;

      let x = (offsetLeft * 2);
      let y = (offsetTop * 2);
      let w = (desiredWidth * 2);
      let h = (desiredHeight * 2);

      // deselect objects
      this.activeCanvas.discardActiveObject().renderAll();
      // draw part of old canvas onto new temp canvas
      c.getContext('2d').drawImage(this.$refs.myCanvas, x, y, w, h, 0, 0, desiredWidth, desiredHeight);
      // save to Data
      const easterImage = c.toDataURL({
        format: 'png',
        left: offsetLeft,
        top: offsetTop,
        width: desiredWidth,
        height: desiredHeight
      });
      // display in code and image
      // const backup = document.getElementById('backup').value = easterImage;
      this.savedCanvas = easterImage;
      // save to store..
      this.$store.commit('setEasterImage', easterImage);
    }

  },

  beforeUpdate() {

  },

  data: () => ({
    savedCanvas: null,
    activeCanvas: null, // needed?
  }),

  mounted() {

    // using fabic.js for canvas 
    const self = this;
    const ref = this.$refs.myCanvas;
    // const canvas = new fabric.Canvas(ref);
    const canvas = this.activeCanvas = new fabric.Canvas(ref);

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

    // PROPS
    let easterIslandProps = [
      'inline-hat1.svg',
      'inline-hat2.svg',
      'inline-eyes1.svg',
      // 'inline-eyes3.svg',
      'inline-shades-flat.svg',
      // '',
      // 'inline-earring1.svg',
      // 'inline-earring2.svg',
      // 'inline-eyes5.svg',
    ];

    let j = 1;

    for (const prop of easterIslandProps) {

      j++;
      let topOffset = (60 * j);

      console.log(prop);
      console.log(j);
      console.log(topOffset);

      fabric.loadSVGFromURL('https://a-d.dev/images/assets/' + prop, function(objects, options) {
        var prop = fabric.util.groupSVGElements(objects, options);
        prop.top = (topOffset - prop.height);
        prop.left = 20;
        canvas.add(prop);
        canvas.calcOffset();
        canvas.renderAll();
      });

    }

    // manually add in earrings

    fabric.loadSVGFromURL('https://a-d.dev/images/assets/inline-earring1.svg', function(objects, options) {
      var item = fabric.util.groupSVGElements(objects, options);
      item.top = (480 - item.height);
      item.left = 20;
      canvas.add(item);
      canvas.calcOffset();
      canvas.renderAll();
    });

    fabric.loadSVGFromURL('https://a-d.dev/images/assets/inline-earring2.svg', function(objects, options) {
      var item = fabric.util.groupSVGElements(objects, options);
      item.top = (480 - item.height);
      item.left = 220;
      canvas.add(item);
      canvas.calcOffset();
      canvas.renderAll();
    });

    // let width = 20;
    // let height = 100;


    // // PROPS
    // let easterIslandProps = [
    //   // ['filename.svg', height, width ],
    //   ['inline-hat1.svg', height, width ],
    //   ['inline-hat2.svg', height, width ],
    //   ['inline-eyes1.svg', height, width ],
    //   ['inline-eyes3.svg', height, width ],
    //   ['inline-shades-flat.svg', height, width ],
    //   ['inline-earring1.svg', height, width ],
    //   ['inline-earring2.svg', height, width ],
    //   // 'inline-eyes5.svg',
    // ];

    // var arrayLength = easterIslandProps.length;

    // let heightOffset = 0;
    // let heightStartingOffset = 50;
    // // let gap = 20;

    // // let j = 0;
    // for (var i = 0; i < arrayLength; i++) {

    //   let prop = easterIslandProps[i]
    //   console.log(prop);

    //   // j++;
    //   // let topOffset = (100*j);
    //   console.log({heightOffset});
    //   // console.log(j);

    //   fabric.loadSVGFromURL('https://a-d.dev/images/assets/'+prop[0], function(objects, options) { 
    //       var item = fabric.util.groupSVGElements(objects, options);
    //       item.top = (heightOffset - item.height);
    //       item.left = 20;
    //       canvas.add(item); 
    //       canvas.calcOffset();
    //       canvas.renderAll();

    //       heightOffset = heightStartingOffset + item.height;

    //   });

    //   console.log({heightOffset});

    // }



  }

};
</script>
<style lang="scss" scoped>
h1 {
  margin-bottom: 2rem;
}

.canvas-container {
  outline: 1px dashed red;
  width: 1024px;
  height: 576px;
  position: relative;
}

.canvas--background {
  position: absolute;
  top: 0;
  right: 0;
  width: 1024px;
  height: 576px;
  background-image: url('https://a-d.dev/images/assets/easter.jpg');
  background-size: contain;
  z-index: -1;
}

#canvas {
  outline: 1px solid teal;
  /*background-color: #eee;*/
}

.preview-img-wrapper {
  width: 800px;
}

.preview-img {
  outline: 1px solid teal;
  width: 100%;
}
</style>