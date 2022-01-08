<template>
  <div class="recvideo">
    <h1>Testing Recording a Video</h1>

    <div v-on:click="globalHelper">Click me</div>
    <h1>this is where i got to...</h1>
    https://chafikgharbi.com/vuejs-global-function/

    <h1>{{ message }}</h1>

    <video id="gum" playsinline autoplay muted></video>
    <video id="recorded" playsinline loop></video>

    <div>
        <button class="button is-medium is-rounded" v-on:click="webcamSendRequestButton(0)" type="button" class="webcam-send-request-button">Verify</button>

        <!-- <button class="button is-medium is-rounded" id="start" v-on:click="startCamera">Start camera</button> -->
        <button class="button is-medium is-rounded" id="record" disabled>Start Recording</button>
        <button class="button is-medium is-rounded" id="play" disabled>Play</button>
        <button class="button is-medium is-rounded" id="download" disabled>Download</button>
    </div>
    
    <button class="button is-medium is-rounded" id="snapshot">Take snapshot</button>

    <canvas id="snapshotCanvas"></canvas>

    <textarea name="snapshotBackup" id="snapshotBackup" cols="60" rows="10"></textarea>

    <div>
        Recording format: <select id="codecPreferences" disabled></select>
    </div>
    <div>
        <h4>Media Stream Constraints options</h4>
        <p>Echo cancellation: <input type="checkbox" id="echoCancellation"></p>
    </div>

    <div>
        <span id="errorMsg"></span>
    </div>

  </div>
</template>


<script>




   // document.querySelector('button#start').addEventListener('click', async () => {
   startCamera = function() {

     alert('starting camera');

     // document.querySelector('button#start').disabled = true;
     // const hasEchoCancellation = document.querySelector('#echoCancellation').checked;
     // const constraints = {
     //   audio: {
     //     echoCancellation: {exact: hasEchoCancellation}
     //   },
     //   video: {
     //     width: 1280, height: 720
     //   }
     // };
     // console.log('Using media constraints:', constraints);


     // await init(constraints);

   };
</script>
