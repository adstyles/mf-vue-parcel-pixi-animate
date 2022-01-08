<template>
  <div class="tasknine">
    <h1>Task Nine - Add your stage name in the red box</h1>
    <!-- <p>There’s magical sculptures in your film! Let’s make them super fun, drag the fancy dress items onto the sculptures until they look super silly!</p> -->
    <!-- <router-link to="/playanimation" class="button router-link">When you're ready, click here to continue!</router-link> -->

    <input class="big-input" placeholder="add your stage name here" v-model="message"> <!-- v-model="stageName"  -->

<!--     <h3>Your stage name is:</h3>
    <h1 class="name-preview">{{ displayStageName }}</h1> -->

    <div class="next-cta">
      <router-link to="/playanimation" class="button button__disabled button-round router-link">
        <!-- <img src="../assets/iconmonstr-arrow-1.svg" /> -->
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13 7v-6l11 11-11 11v-6h-13v-10z"/></svg>
      </router-link>
    </div>

  </div>
</template>

<script>

  export default {

    name: 'tasknine',

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

    computed: {
      message: {
        get () {
          return this.$store.getters.getStageName
        },
        set (value) {
          this.$store.commit('setStageName', value)
        }
      }
    },

    // data: ()=> ({
    //   displayStageName: this.$store.getters.getStageName,
    // }),

    // mounted(){
    //   this.displayStageName = this.$store.getters.getStageName;
    // }

    // computed() {
    //   mestageNamessage: {
    //     get () {
    //       return this.$store.stageName
    //     },
    //     set (value) {
    //       this.$store.commit('updateMessage', value)
    //     }
    //   }
    // },

    // mounted(){

    // }

    // computed: {
    //   ...mapState({
    //     message: state => state.obj.message
    //   })
    // },

    // methods: {
    //   updateMessage (e) {
    //     this.$store.commit('setStageName', e.target.value)
    //   }
    // }




    // data: ()=> ({
    //   stageName: '',
    // }),

    // mounted(){
    //   this.stageName = this.$store.getters.getStageName;
    // }

  };

</script>

<style lang="scss" scoped>

  $mf-red: #f4745e;

  .big-input {
    font-size: 2rem;
    margin: 2rem 0;
    padding: 1rem;
    min-width: 500px;
    outline: 5px solid $mf-red;
    border: none;
    border-radius: none;
  }

  .name-preview {
    font-size: 3rem;
    color: $mf-red;
  }

</style>
