<template>
	<div class="tasksix">
		<h1>Task Six: Draw a woolly mammoth cave painting a bit like this one</h1>
		<!-- <p>Your animation needs a cave painting! Click and drag in the red square to draw a mammoth like this one.</p> -->
		<div class="cave-paintings-wrapper">
			<img class="example-painting" src="../assets/inline-cave-painting.svg">
			<div class="canvas-container">
				<!-- <h1>Draw a Cave Painting</h1> -->
				<div class="canvas-wrapper">
					<!-- <img class="cave-bg" src="../assets/inline-cave-bg.svg"> -->
					<div class="canvas-draw-here-prompt js-canvas-draw-here-prompt">
						Draw Here!
					</div>
					<canvas ref="myCanvas" id="canvas" width=600 height=400></canvas>
				</div>
				<ul>
					<li>
						<button class="colourChoice colourChoice_red" v-on:click="changePaintColour" data-colour="#ed1e45">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
								<path d="M0 21.398c5.504.456 3.533-5.392 8.626-5.445l2.206 1.841c.549 6.645-7.579 8.127-10.832 3.604zm16.878-8.538c1.713-2.687 7.016-11.698 7.016-11.698.423-.747-.515-1.528-1.17-.976 0 0-7.887 6.857-10.213 9.03-1.838 1.719-1.846 2.504-2.441 5.336l2.016 1.681c2.67-1.098 3.439-1.248 4.792-3.373z" /></svg></button></li>
					<li>
						<button class="colourChoice colourChoice_yellow" v-on:click="changePaintColour" data-colour="#fdd663">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
								<path d="M0 21.398c5.504.456 3.533-5.392 8.626-5.445l2.206 1.841c.549 6.645-7.579 8.127-10.832 3.604zm16.878-8.538c1.713-2.687 7.016-11.698 7.016-11.698.423-.747-.515-1.528-1.17-.976 0 0-7.887 6.857-10.213 9.03-1.838 1.719-1.846 2.504-2.441 5.336l2.016 1.681c2.67-1.098 3.439-1.248 4.792-3.373z" /></svg></button></li>
					<li>
						<button class="colourChoice colourChoice_green" v-on:click="changePaintColour" data-colour="#669900">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
								<path d="M0 21.398c5.504.456 3.533-5.392 8.626-5.445l2.206 1.841c.549 6.645-7.579 8.127-10.832 3.604zm16.878-8.538c1.713-2.687 7.016-11.698 7.016-11.698.423-.747-.515-1.528-1.17-.976 0 0-7.887 6.857-10.213 9.03-1.838 1.719-1.846 2.504-2.441 5.336l2.016 1.681c2.67-1.098 3.439-1.248 4.792-3.373z" /></svg></button></li>
					<li>
						<button class="colourChoice colourChoice_grey" v-on:click="changePaintColour" data-colour="#cfcec8">
							<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
								<path d="M5.662 23l-5.369-5.365c-.195-.195-.293-.45-.293-.707 0-.256.098-.512.293-.707l14.929-14.928c.195-.194.451-.293.707-.293.255 0 .512.099.707.293l7.071 7.073c.196.195.293.451.293.708 0 .256-.097.511-.293.707l-11.216 11.219h5.514v2h-12.343zm3.657-2l-5.486-5.486-1.419 1.414 4.076 4.072h2.829zm.456-11.429l-4.528 4.528 5.658 5.659 4.527-4.53-5.657-5.657z" /></svg></button></li>
				</ul>
			</div>
		</div>
		<div>
			<button href="#" v-on:click="saveCanvas">SAVE</button>
			<!-- <textarea name="backup" id="backup" cols="60" rows="10"></textarea> -->
			<img v-bind:src="savedCanvas" />
		</div>
		<!-- <router-link to="/taskseven" class="button router-link">When you're ready, click here to continue!</router-link> -->
		<div class="next-cta">
			<p>When you're ready, click the red button to continue</p>
			<router-link to="/taskseven" class="button button__disabled button-round router-link">
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
	name: 'tasksix',
	methods: {
		saveCanvas: function() {
			const cavePainting = this.$refs.myCanvas.toDataURL({
				format: 'png',
				left: 300,
				top: 250,
				width: 200,
				height: 150
			});

			// const backup = document.getElementById('backup').value = cavePainting;
			// this.savedCanvas = cavePainting;
			this.$store.commit('setCavePainting', cavePainting);
			// sets {{skin}} on this Vue
			this.savedCanvas = this.$store.getters.getCavePainting;
		},
		changePaintColour: function() {
			var colour = event.target.getAttribute('data-colour');
			console.log(colour);
			// this.ref = this.$refs.myCanvas;

			let myCanvas = this.canvas;
			myCanvas.freeDrawingBrush.color = colour;

			let mouseCursor = myCanvas._objects.filter(
				obj => obj.isMouseCursor === true
			);
			mouseCursor.map(obj => myCanvas.setActiveObject(obj));

			if (colour == '#cfcec8') {
				myCanvas.freeDrawingBrush.width = 50;
				let myCr = myCanvas.getActiveObject();
				console.log(myCr);
				myCr.setRadius(25);
				// deselect objects
				myCanvas.discardActiveObject().renderAll();
			} else {
				myCanvas.freeDrawingBrush.width = 10;
				let myCr = myCanvas.getActiveObject();
				console.log(myCr);
				myCr.setRadius(5);
				// deselect objects
				myCanvas.discardActiveObject().renderAll();
			}

			// myCanvas.mousecursor.fill = colour;
			// myCanvas.freeDrawingBrush.color = drawingColorEl.value;

			// var brush = this.$refs.myCanvas.freeDrawingBrush;
			// console.log(brush);
			// brush.color = colour;
			// console.log(brush.color);
			// if (brush.getPatternSrc) {
			//   brush.source = brush.getPatternSrc.call(brush);
			//   console.log('set new color');
			// } else {
			//   console.log("DIDN'T set new color");
			// }
		}
	},

	beforeUpdate() {

	},

	data: () => ({
		savedCanvas: null,
		canvas: "",
		promptRemoved: false,
	}),

	mounted() {

		this.ref = this.$refs.myCanvas;
		this.canvas = new fabric.Canvas(this.ref, {
			isDrawingMode: true
		});

		this.canvas.freeDrawingBrush.width = 10;
		this.canvas.freeDrawingBrush.color = "#ed1e45";

		this.canvas.freeDrawingCursor = 'none';

		const mousecursor = new fabric.Circle({
			left: 0,
			top: 0,
			radius: this.canvas.freeDrawingBrush.width / 2,
			fill: '#000000',
			isMouseCursor: true,
			originX: 'right',
			originY: 'bottom',
		});

		// fabric.loadSVGFromURL('https://mf.wip/src/assets/inline-earring1.svg', function(objects, options) {
		// 	const mousecursor = fabric.util.groupSVGElements(objects, options);
		// 	mousecursor.top = 20;
		// 	mousecursor.left = 20;
		// 	canvas.add(mousecursor);
		// 	canvas.calcOffset();
		// 	canvas.renderAll();
		// });

		this.canvas.add(mousecursor);

		// Cursor in canvas
		this.canvas.on('mouse:move', event => {
			mousecursor.top = event.e.layerY + mousecursor.radius;
			mousecursor.left = event.e.layerX + mousecursor.radius;
			mousecursor.moveTo(100);
			this.canvas.renderAll();
		});

		// Cursor out of canvas
		this.canvas.on('mouse:out', event => {
			mousecursor.top = -100;
			mousecursor.left = -100;
			// mousecursor.moveTo(10);
			this.canvas.renderAll();
		});



		this.canvas.on('mouse:down', function(e) {
			// e.preventdefault();
			if (!this.promptRemoved) {
				const prompt = document.querySelector('.js-canvas-draw-here-prompt');
				prompt.remove();
				this.promptRemoved = true;
			}
		});

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

	}

};
</script>
<style lang="scss" scoped>
$mf-red: #f4745e;

img {
	// cursor: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 512 512'%3e%3cg transform='rotate(45 256 256)'%3e%3crect id='r' x='16' y='216' width='480' height='80' rx='14'/%3e%3cuse href='%23r' transform='rotate(90 256 256)'/%3e%3c/g%3e%3c/svg%3e") 16 16, pointer;
}

.is-active {
	outline: 4px solid red !important;
}

#canvas {
	// background-color: #eee;
	outline: 3px solid red;
	// background-color: #cfcec9;






}

button {
	svg {
		pointer-events: none;
	}
}


.cave-paintings-wrapper {
	display: flex;
	justify-content: space-around;
	width: 100%;
	margin-top: 1rem;
}

.example-painting {
	width: 460px;
	// height: 100px;
}

.canvas-container {
	display: flex;
	margin-bottom: 1rem;
	// background-color: #cfcec9;

	ul {
		margin-left: 2rem;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
}

.canvas-draw-here-prompt {
	position: absolute;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	color: $mf-red;
	font-size: 2rem;
	letter-spacing: 0.2rem;

	// z-index: 10;

	// cursor: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 512 512'%3e%3cg transform='rotate(45 256 256)'%3e%3crect id='r' x='16' y='216' width='480' height='80' rx='14'/%3e%3cuse href='%23r' transform='rotate(90 256 256)'/%3e%3c/g%3e%3c/svg%3e") 16 16, pointer;

	// pointer-events: none;

}

.canvas-wrapper {
	position: relative;
	background-color: #cfcec9;

}

.cave-bg {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
}


// canvas#canvas { 
//   cursor: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6M0EwMEYyRjlDMjZFMTFFNUI4QkRFMkRBRDg3QkNFRUQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6M0EwMEYyRkFDMjZFMTFFNUI4QkRFMkRBRDg3QkNFRUQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozQTAwRjJGN0MyNkUxMUU1QjhCREUyREFEODdCQ0VFRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozQTAwRjJGOEMyNkUxMUU1QjhCREUyREFEODdCQ0VFRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pi/X/ugAAAY6SURBVHja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')
// , auto; 
// }

















$redPaint: #ed1e45;
$yellowPaint: #fdd663;
$greenPaint: #669900;
$greyPaint: #cfcec8;

$btn-col-2: $redPaint;
$btn-col-1: darken($redPaint, 10%);
$btn-col-3: darken($redPaint, 20%);
$btn-shadow: lighten(#757763, 30%);
$active: darken($redPaint, 30%);
// $active: darken(#faca44, 0%);

button.colourChoice_red {
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

$btn-col-2: $yellowPaint;
$btn-col-1: darken($yellowPaint, 10%);
$btn-col-3: darken($yellowPaint, 20%);
$btn-shadow: lighten(#757763, 30%);
$active: darken($yellowPaint, 30%);
// $active: darken(#faca44, 0%);

button.colourChoice_yellow {
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

$btn-col-2: $greenPaint;
$btn-col-1: darken($greenPaint, 10%);
$btn-col-3: darken($greenPaint, 20%);
$btn-shadow: lighten(#757763, 30%);
$active: darken($greenPaint, 30%);
// $active: darken(#faca44, 0%);

button.colourChoice_green {
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


$btn-col-2: $greyPaint;
$btn-col-1: darken($greyPaint, 10%);
$btn-col-3: darken($greyPaint, 20%);
$btn-shadow: lighten(#757763, 30%);
$active: darken($greyPaint, 30%);
// $active: darken(#faca44, 0%);

button.colourChoice_grey {
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
</style>