<template>
  <div class="taskfour">

    <h1>Task 4 – Design your own VR Headset</h1>

    <div>
      <div class="headset-constructor">
        <ul>
          <li><button href="#" class="vrPart button-round button-round__small button__blue arrow-left" data-section="top" data-direction="prev" v-on:click="swapPart"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M13 7v-6l11 11-11 11v-6h-13v-10z" /></svg></button></li>
          <li><button href="#" class="vrPart button-round button-round__small button__blue arrow-left" data-section="mid" data-direction="prev" v-on:click="swapPart"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M13 7v-6l11 11-11 11v-6h-13v-10z" /></svg></button></li>
          <li><button href="#" class="vrPart button-round button-round__small button__blue arrow-left" data-section="low" data-direction="prev" v-on:click="swapPart"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M13 7v-6l11 11-11 11v-6h-13v-10z" /></svg></button></li>
        </ul>
        <canvas ref="myCanvas" id="canvas" width=340 height=300></canvas>
        <ul>
          <li><button href="#" class="vrPart button-round button-round__small button__blue" data-section="top" data-direction="next" v-on:click="swapPart"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M13 7v-6l11 11-11 11v-6h-13v-10z" /></svg></button></li>
          <li><button href="#" class="vrPart button-round button-round__small button__blue" data-section="mid" data-direction="next" v-on:click="swapPart"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M13 7v-6l11 11-11 11v-6h-13v-10z" /></svg></button></li>
          <li><button href="#" class="vrPart button-round button-round__small button__blue" data-section="low" data-direction="next" v-on:click="swapPart"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M13 7v-6l11 11-11 11v-6h-13v-10z" /></svg></button></li>
        </ul>
      </div>
    </div>
    <!-- <button href="#" v-on:click="saveCanvas">SAVE</button> -->
    <!-- <img v-bind:src="savedCanvas" /> -->
    <div class="next-cta">
      <p>When you're ready, click the red button to continue</p>
      <router-link @click.native="saveCanvas" to="/taskfive" class="button button__disabled button-round router-link">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M13 7v-6l11 11-11 11v-6h-13v-10z" /></svg>
      </router-link>
    </div>
  </div>
</template>
<script>
import { fabric } from 'fabric';

export default {
  name: 'taskfour',
  methods: {

    swapPart: function(event) {

      var direction = event.target.getAttribute('data-direction');
      // console.log(direction);

      var section = event.target.getAttribute('data-section');
      // console.log(section);

      var num;
      if (section == 'top') {
        num = this.currTopPart;
      } else if (section == 'mid') {
        num = this.currMidPart;
      } else {
        num = this.currLowPart;
      }
      // console.log(num);

      // item to remove:
      var hideID = section + num;

      // item to show:
      if (direction == 'prev') {
        num = num - 1;
      } else {
        num = num + 1;
      }
      if (num == 0) { num = 3; }
      if (num == 4) { num = 1; }

      var showID = section + num;

      console.log({ hideID });
      console.log({ showID });
      // this.canvas.mid2.opacity = 1;

      let myCanvas = this.canvas;

      // select item by ID
      myCanvas.getObjects().forEach(function(o) {
        // console.log(o.svgUid);          
        if (o.svgUid == hideID) {
          myCanvas.setActiveObject(o);

          var obj = myCanvas.getActiveObject(o);
          obj.set({
            opacity: 0
          });
          myCanvas.renderAll();
          // console.log(o.svgUid);
        } else {
          // console.log('none selected');            
        }
      })
      // hide selected
      // var selectedObject = 
      // myCanvas.getActiveObject().setOpacity(0);
      // selectedObject && myCanvas.remove(selectedObject);

      // select item by ID
      myCanvas.getObjects().forEach(function(o) {
        // console.log(o.svgUid);          
        if (o.svgUid == showID) {
          myCanvas.setActiveObject(o);

          var obj = myCanvas.getActiveObject(o);
          obj.set({
            opacity: 1
          });
          myCanvas.renderAll();
          // console.log(o.svgUid);
        } else {
          // console.log('none selected');            
        }
      })
      // hide selected
      // var selectedObject = 
      // myCanvas.getActiveObject().setOpacity(1);
      // selectedObject && myCanvas.remove(selectedObject);

      // deselect objects
      myCanvas.discardActiveObject().renderAll();

      // update curr part num
      // this.currTopPart = num;
      if (section == 'top') {
        this.currTopPart = num;
      } else if (section == 'mid') {
        this.currMidPart = num;
      } else {
        this.currLowPart = num;
      }


      // update button data
      // event.target.setAttribute('data-num') = num;


      // get attribute and commit to changeSkin in store
      // var vrPart = event.target.getAttribute('data-vrPart');
      // console.log(vrPart);

      // // update active state
      // const active = document.querySelector('.is-active');
      // if(active){
      //   active.classList.remove('is-active');
      // }
      // event.target.classList.toggle('is-active');
      // // this.$store.commit('changevrPart', vrPart);
      // // sets {{skin}} on this Vue
      // // this.vrPart = this.$store.getters.getCurrentvrPart;

      // // using fabic.js for canvas 
      // // const self = this;
      // // const ref = this.$refs.myCanvas;
      // // const canvas = new fabric.Canvas(ref);

      // let myCanvas = this.canvas;

      // fabric.loadSVGFromURL('https://a-d.dev/src/assets/test_svgs/1.svg', function(objects, options) { 
      //   console.log('hello');
      //   // console.log('this.canvas is', myCanvas);
      //   var test_1 = fabric.util.groupSVGElements(objects, options);
      //   test_1.svgUid = 'svgID'; // give item an ID so can be removed later
      //   console.log('test_1 is', test_1);
      //   console.log('test_1.svgUid is', test_1.svgUid);
      //   myCanvas.add(test_1); 
      //   myCanvas.calcOffset();
      //   myCanvas.renderAll();
      // }); 
    },

    // removePart: function(event){

    //   let myCanvas = this.canvas;

    //    // select item by ID
    //   myCanvas.getObjects().forEach(function(o) {
    //     if(o.svgUid == 'svgID') {
    //       myCanvas.setActiveObject(o);
    //       console.log(o.svgUid);
    //     } else {
    //       console.log('none selected');            
    //     }
    //   })
    //   // remove selected
    //   var selectedObject = myCanvas.getActiveObject();
    //   selectedObject && myCanvas.remove(selectedObject);


    // },

    saveCanvas: function() {
      const headsetCaptureCanvas = this.$refs.myCanvas.toDataURL({
        format: 'png',
        left: 300,
        top: 250,
        width: 200,
        height: 150
      });
      // const backup = document.getElementById('backup').value = headsetCaptureCanvas;
      this.savedCanvas = headsetCaptureCanvas;
      // save to store..
      this.$store.commit('setHeadset', headsetCaptureCanvas);
    }
  },

  beforeUpdate() {
    // if vrPart is in store, update the class
    const storedvrPart = this.$store.getters.getCurrentvrPart;
    // console.log('storedvrPart ' + storedvrPart);
    const vrPart = document.querySelector('.vrPart[data-vrPart="' + storedvrPart + '"]');
    // console.log(vrPart);
    if (vrPart != null) { // needed?
      vrPart.classList.add('is-active');
    }
  },

  data: () => ({
    vrPart: 'not set',
    savedCanvas: null,
    canvas: "",
    // self: "",
    ref: "",
    currTopPart: 1,
    currMidPart: 1,
    currLowPart: 1,
  }),

  mounted() {

    // get vrPart from store... - better way to bind this??
    // this.vrPart = this.$store.getters.getCurrentvrPart;

    // using fabic.js for canvas 
    // this.self = this;
    this.ref = this.$refs.myCanvas;
    const canvas = this.canvas = new fabric.Canvas(this.ref);
    // const canvas = this.activeCanvas = new fabric.Canvas(this.ref);

    // var canvas = this.$refs.myCanvas = new fabric.Canvas('c');
    // fabric.Object.prototype.transparentCorners = false;

    // var rect = new fabric.Rect({
    //   left: 100,
    //   top: 50,
    //   width: 100,
    //   height: 100,
    //   fill: 'black',
    //   angle: 20,
    //   padding: 10
    // });
    // this.canvas.add(rect);

    // MOUTHS
    let parts = [
      ['inline-vr-low-1.svg', 'low', 1],
      ['inline-vr-low-2.svg', 'low', 2],
      ['inline-vr-low-3.svg', 'low', 3],
      ['inline-vr-top-1.svg', 'top', 1],
      ['inline-vr-top-2.svg', 'top', 2],
      ['inline-vr-top-3.svg', 'top', 3],
      ['inline-vr-mid-1.svg', 'mid', 1],
      ['inline-vr-mid-2.svg', 'mid', 2],
      ['inline-vr-mid-3.svg', 'mid', 3],
    ];

    let i = 0;
    const topPart_top = 0;
    const topPart_left = 10;
    const midPart_top = 110;
    const midPart_left = 0;
    const lowPart_top = 190;
    const lowPart_left = 10;

    for (const part of parts) {

      // part;
      const partUrl = part[0];
      const partPos = part[1];
      const partNum = part[2];

      console.log(partUrl);
      console.log(partPos);

      const partID = partPos + partNum;
      console.log(partID);

      let top = 0;
      let left = 0;

      let opacity = 0;
      if (partNum == 1) { opacity = 1; }

      if (partPos == 'top') {
        top = topPart_top;
        left = topPart_left;
      } else if (partPos == 'mid') {
        top = midPart_top;
        left = midPart_left;
      } else if (partPos == 'low') {
        top = lowPart_top;
        left = lowPart_left;
      }

      fabric.loadSVGFromURL('https://a-d.dev/images/assets/' + partUrl, function(objects, options) {
        var p = fabric.util.groupSVGElements(objects, options);
        // console.log(p.height);
        // console.log(p);
        p.top = top;
        p.left = left;
        // mouth.height = mouth.viewBoxHeight;
        // mouth.width = mouth.viewBoxWidth;
        // mouth.padding = 10;
        p.opacity = opacity;
        p.lockMovementX = true;
        p.lockMovementY = true;
        p.selectable = false;
        p.hoverCursor = "default";
        p.svgUid = partID; // give item an ID so can be removed later
        console.log(p);
        canvas.add(p);
        canvas.calcOffset();
        canvas.renderAll();
      });

      // i++;
      // let topOffset = (50*i);
      // if (i == 8) {
      //   topOffset = topOffset + 30;
      // }

      // console.log(i);
      // // console.log(topOffset);

      // fabric.loadSVGFromURL('https://a-d.dev/src/assets/'+mouth, function(objects, options) { 
      //     var mouth = fabric.util.groupSVGElements(objects, options);
      //     // console.log(mouth.height);
      //     console.log(mouth);
      //     mouth.top = (topOffset - mouth.height);
      //     mouth.left = 30;
      //     // mouth.height = mouth.viewBoxHeight;
      //     // mouth.width = mouth.viewBoxWidth;
      //     mouth.padding = 10;
      //     canvas.add(mouth); 
      //     canvas.calcOffset();
      //     canvas.renderAll();
      // }); 

    }

    // need to be SOP / CORS url to allow SVG to load
    // fabric.loadSVGFromURL('https://a-d.dev/src/assets/test_svgs/mouth_2.svg', function(objects, options) { 
    //     var mouth_2 = fabric.util.groupSVGElements(objects, options);
    //     canvas.add(mouth_2); 
    //     canvas.calcOffset();
    //     canvas.renderAll();
    // }); 

    // fabric.loadSVGFromURL('https://a-d.dev/src/assets/test_svgs/mouth_1.svg', function(objects, options) { 
    //     var mouth_1 = fabric.util.groupSVGElements(objects, options);
    //     canvas.add(mouth_1); 
    //     canvas.calcOffset();
    //     canvas.renderAll();
    // }); 



  }

};
</script>
<style lang="scss" scoped>
.is-active {
  outline: 4px solid red !important;
}

#canvas {
  // background-color: #dde;
  // background-color: #ff8871;
  background-color: #f8d8b3;
  padding: 0.5rem;
  // margin: 0 0.5rem;
  border-radius: 2rem;
  // border: 1px solid black;
}

.arrow-left {
  svg {
    transform: rotate(180deg);
  }
}

.headset-constructor {
  display: flex;

  margin: 2rem auto 1rem;

  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 1rem;
  }
}
</style>