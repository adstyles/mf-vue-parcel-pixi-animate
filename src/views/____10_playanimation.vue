<template>

  <div class="playanimation">
    <h1>PLAY ANIMATION</h1>

    <p>Dede Skin is: {{ storedDedeSkin }}</p>
    <p>Arlo Skin is: {{ storedArloSkin }}</p>
    <p>Creature is: {{ storedCreature }}</p>
    <p>Emoji Image is: {{ storedEmojiImage }}</p>
    <img v-bind:src="storedEmojiImage" /> 
    <p>happyIcon is: {{ storedhappyIcon }}</p>
    <p>Note is: {{ storedNote }}</p>
    <p>Cave Painting is: {{ storedCavePainting }}</p>
    <img v-bind:src="storedCavePainting" /> 
    <p>Mammoth Angry:</p>{{ storedMammothAngry }}
    <a v-on:click="playAngryMammothSFX">Play Angry</a>
    <p>Mammoth Embarrassed:</p>{{ storedMammothEmbarrassed }}
    <a v-on:click="playEmbarrassedMammothSFX">Play Embarrassed</a>
    <p>Mammoth Laugh:</p>{{ storedMammothLaugh }}
    <a v-on:click="playLaughMammothSFX">Play Laugh</a>
    <p>Easter Island is: {{ storedEasterImage }}</p>
    <img v-bind:src="storedEasterImage" /> 
    <p>Stage Name is: {{ storedStageName }}</p>

  </div>

</template>

<script>

  export default {

    name: 'playanimation',

    methods: {

      // getStageName: function(event) {
      //   var val = event.target.inputValue;
      //   console.log(val);
      // }

      // setStageName: (event) => {
      //   store.commit("setStageName", event.target.value);
      // }
    },

    beforeUpdate() {
      
    },

    // computed: {
    //   // message: {
    //   //   get () {
    //   //     return this.$store.getters.getStageName
    //   //   },
    //   //   set (value) {
    //   //     this.$store.commit('setStageName', value)
    //   //   }
    //   // }
    // },

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

<style lang="scss" scoped>

  $mf-red: #f4745e;

  // .big-input {
  //   font-size: 2rem;
  //   margin: 2rem 0;
  //   padding: 1rem;
  //   min-width: 500px;
  //   outline: 5px solid $mf-red;
  //   border: none;
  //   border-radius: none;
  // }

  // .name-preview {
  //   font-size: 3rem;
  //   color: $mf-red;
  // }

</style>
