console.log('Rec Video');

/*
*  Copyright (c) 2015 The WebRTC project authors. All Rights Reserved.
*
*  Use of this source code is governed by a BSD-style license
*  that can be found in the LICENSE file in the root of the source
*  tree.
*/

// This code is adapted from
// https://rawgit.com/Miguelao/demos/master/mediarecorder.html

'use strict';

/* globals MediaRecorder */

let mediaRecorder;
let recordedBlobs;

const codecPreferences = document.querySelector('#codecPreferences');

const errorMsgElement = document.querySelector('span#errorMsg');
const recordedVideo = document.querySelector('video#recorded');
const recordButton = document.querySelector('button#record');
// recordButton.addEventListener('click', () => {
//   if (recordButton.textContent === 'Start Recording') {
//     startRecording();
//   } else {
//     stopRecording();
//     recordButton.textContent = 'Start Recording';
//     playButton.disabled = false;
//     downloadButton.disabled = false;
//     codecPreferences.disabled = false;
//   }
// });

// const playButton = document.querySelector('button#play');
// playButton.addEventListener('click', () => {
//   const mimeType = codecPreferences.options[codecPreferences.selectedIndex].value.split(';', 1)[0];
//   const superBuffer = new Blob(recordedBlobs, {type: mimeType});
//   recordedVideo.src = null;
//   recordedVideo.srcObject = null;
//   recordedVideo.src = window.URL.createObjectURL(superBuffer);
//   recordedVideo.controls = true;
//   recordedVideo.play();
// });

// const downloadButton = document.querySelector('button#download');
// downloadButton.addEventListener('click', () => {
//   const blob = new Blob(recordedBlobs, {type: 'video/webm'});
//   const url = window.URL.createObjectURL(blob);
//   const a = document.createElement('a');
//   a.style.display = 'none';
//   a.href = url;
//   a.download = 'test.webm';
//   document.body.appendChild(a);
//   a.click();
//   setTimeout(() => {
//     document.body.removeChild(a);
//     window.URL.revokeObjectURL(url);
//   }, 100);
// });

// const video = document.querySelector('video');
// const canvas = window.canvas = document.querySelector('canvas');

// const canvas_cfd = new CanvasFreeDrawing.default({
//     elementId: 'snapshotCanvas',
//     width: 500,
//     height: 500,
//     showWarnings: true,
//   });

// const snapshotButton = document.querySelector('button#snapshot');
// snapshotButton.onclick = function() {
//   // canvas.width = video.videoWidth;
//   // canvas.height = video.videoHeight;
//   canvas.width = 100;
//   canvas.height = 50;
//   canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
//   const snapshotTextarea = document.getElementById('snapshotBackup');
//   snapshotTextarea.value = canvas_cfd.save();
//   capturedImg = canvas_cfd.save();
// };

// function handleDataAvailable(event) {
//   console.log('handleDataAvailable', event);
//   if (event.data && event.data.size > 0) {
//     recordedBlobs.push(event.data);
//   }
// }

// function getSupportedMimeTypes() {
//   const possibleTypes = [
//     'video/webm;codecs=vp9,opus',
//     'video/webm;codecs=vp8,opus',
//     'video/webm;codecs=h264,opus',
//     'video/mp4;codecs=h264,aac',
//   ];
//   return possibleTypes.filter(mimeType => {
//     return MediaRecorder.isTypeSupported(mimeType);
//   });
// }

function startRecording() {
  recordedBlobs = [];
  const mimeType = codecPreferences.options[codecPreferences.selectedIndex].value;
  const options = {mimeType};

  try {
    mediaRecorder = new MediaRecorder(window.stream, options);
  } catch (e) {
    console.error('Exception while creating MediaRecorder:', e);
    errorMsgElement.innerHTML = `Exception while creating MediaRecorder: ${JSON.stringify(e)}`;
    return;
  }

  console.log('Created MediaRecorder', mediaRecorder, 'with options', options);
  recordButton.textContent = 'Stop Recording';
  playButton.disabled = true;
  downloadButton.disabled = true;
  codecPreferences.disabled = true;
  mediaRecorder.onstop = (event) => {
    console.log('Recorder stopped: ', event);
    console.log('Recorded Blobs: ', recordedBlobs);
  };
  mediaRecorder.ondataavailable = handleDataAvailable;
  mediaRecorder.start();
  console.log('MediaRecorder started', mediaRecorder);
}

// function stopRecording() {
//   mediaRecorder.stop();
// }

// function handleSuccess(stream) {
//   recordButton.disabled = false;
//   console.log('getUserMedia() got stream:', stream);
//   window.stream = stream;

//   const gumVideo = document.querySelector('video#gum');
//   gumVideo.srcObject = stream;

//   getSupportedMimeTypes().forEach(mimeType => {
//     const option = document.createElement('option');
//     option.value = mimeType;
//     option.innerText = option.value;
//     codecPreferences.appendChild(option);
//   });
//   codecPreferences.disabled = false;
// }

// async function init(constraints) {
//   try {
//     const stream = await navigator.mediaDevices.getUserMedia(constraints);
//     handleSuccess(stream);
//   } catch (e) {
//     console.error('navigator.getUserMedia error:', e);
//     errorMsgElement.innerHTML = `navigator.getUserMedia error:${e.toString()}`;
//     // console.log('navigator.MediaDevices.getUserMedia error: ', e.message, e.name);
//   }
// }

// // document.querySelector('button#start').addEventListener('click', async () => {
// startCamera = function() {

//   alert('starting camera');

//   // document.querySelector('button#start').disabled = true;
//   // const hasEchoCancellation = document.querySelector('#echoCancellation').checked;
//   // const constraints = {
//   //   audio: {
//   //     echoCancellation: {exact: hasEchoCancellation}
//   //   },
//   //   video: {
//   //     width: 1280, height: 720
//   //   }
//   // };
//   // console.log('Using media constraints:', constraints);


//   // await init(constraints);

// };
