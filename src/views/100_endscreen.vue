<template>

  <div class="endscreen">

    <h1>The End</h1>

    <h1 class="credits">This film was directed by <span class="name-preview">{{ storedKidName }}</h1>

    <h3>We hope you enjoyed the film!</h3>


    <!-- <div class="next-cta"> -->
      <!-- <router-link to="/home" class="button router-link"> -->
        <!-- <img src="../assets/iconmonstr-arrow-1.svg" /> -->
        <!-- Start again from the beginning! -->
      <!-- </router-link> -->

      <button v-on:click="startAgain" class="button">
        Start Again!
      </button>
    <!-- </div> -->

  </div>
</template>

<script>

  export default {

    name: 'endscreen',

    methods : {

    startAgain() {
      // window.location.reload();
      document.location.href="/";
    }

    },

    computed: {
      storedKidName() {
        var name = this.$store.state.KidName;
        if (name != null) {
          return this.$store.state.KidName;
        } else {
          return 'You!';
        }
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

  .endscreen * {
    margin: 1rem 0;
  }

  .credits {
    font-size: 3rem;
    margin-top: 0;
    margin-top: 0;
  }

  .name-preview {
    color: $mf-red;
  }

</style>
