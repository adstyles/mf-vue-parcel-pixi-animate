<template>
  <div id="debug" class="debug">
    <ul>
      <li><p>Dede Skin is: {{ storedDedeSkin }}</p></li>
      <li><p>Arlo Skin is: {{ storedArloSkin }}</p></li>
      <li><p>Creature is: {{ storedCreature }}</p></li>
      <li><p>Emoji Image is: {{ storedEmojiImage }}</p></li>
      <li><img v-bind:src="storedEmojiImage" /> </li>
      <li><p>happyIcon is: {{ storedhappyIcon }}</p></li>
      <li><p>Note is: {{ storedNote }}</p></li>
      <li><p>Cave Painting is: {{ storedCavePainting }}</p></li>
      <li><img v-bind:src="storedCavePainting" /> </li>
      <li><p>Mammoth Angry:</p>{{ storedMammothAngry }}</li>
      <li><a v-on:click="playAngryMammothSFX">Play Angry</a></li>
      <li><p>Mammoth Embarrassed:</p>{{ storedMammothEmbarrassed }}</li>
      <li><a v-on:click="playEmbarrassedMammothSFX">Play Embarrassed</a></li>
      <li><p>Mammoth Laugh:</p>{{ storedMammothLaugh }}</li>
      <li><a v-on:click="playLaughMammothSFX">Play Laugh</a></li>
      <li><p>Easter Island is: {{ storedEasterImage }}</p></li>
      <li><img v-bind:src="storedEasterImage" /> </li>
      <li><p>Stage Name is: {{ storedStageName }}</p></li>
    </ul>
  </div>
</template>

<script>

  import {Howl, Howler} from 'howler';

  export default {
    
    name: 'debug',

    methods: {
      playAngryMammothSFX(){
        console.log('play AngryMammothSFX via Howler');
        var blob = new Blob([this.$store.state.mammoth_angry]);
        var howlSound = new Howl({
          autoplay: true,
          src: [URL.createObjectURL(blob)],
          html5: true,
          format: ['mp3'],
        })
      },
      playEmbarrassedMammothSFX(){
        console.log('play EmbarrassedMammothSFX via Howler');
        var blob = new Blob([this.$store.state.mammoth_embarrassed]);
        var howlSound = new Howl({
          autoplay: true,
          src: [URL.createObjectURL(blob)],
          html5: true,
          format: ['mp3'],
        })
      },
      playLaughMammothSFX(){
        console.log('play LaughMammothSFX via Howler');
        var blob = new Blob([this.$store.state.mammoth_laugh]);
        var howlSound = new Howl({
          autoplay: true,
          src: [URL.createObjectURL(blob)],
          html5: true,
          format: ['mp3'],
        })
      }
    },

    computed: {
      storedDedeSkin() {
        return this.$store.state.skin_dede;
      },
      storedArloSkin() {
        return this.$store.state.skin_arlo;
      },
      storedCreature() {
        return this.$store.state.creature;
      },
      storedEmojiImage() {
        return this.$store.state.emojiImage;
      },
      storedhappyIcon() {
        return this.$store.state.happyIcon;
      },
      storedNote() {
        return this.$store.state.note;
      },
      storedCavePainting() {
        return this.$store.state.cavePainting;
      },
      storedMammothAngry() {
        return this.$store.state.mammoth_angry;
      },
      storedMammothEmbarrassed() {
        return this.$store.state.mammoth_embarrassed;
      },
      storedMammothLaugh() {
        return this.$store.state.mammoth_laugh;
      },
      storedEasterImage() {
        return this.$store.state.easterImage;
      },
      storedStageName() {
        return this.$store.state.stageName;
      },
    }

  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
