<template>
  <div class="tasktwo">
    <h1>Task Two: Choose a creature to appear throughout the animation!</h1>
    <!--     <p>Let’s choose a creature you’d like to use as a background character! Click on your favourite silly animal and see if you can spot it in your animation!</p> -->
    <div class="select-creature">
      <ul class="creatures">
        <li class="creature" v-on:click="chooseCreature" data-creature="meerkat">
          <img class="meerkat" src="../assets/inline-creature-meerkat.svg">
          <!-- <button href="#" class="creature button__blue" v-on:click="chooseCreature" data-creature="meerkat">meerkat</button> -->
          <div class="status">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z" /></svg>
          </div>
        </li>
        <li class="creature" v-on:click="chooseCreature" data-creature="frog">
          <img class="frog" src="../assets/inline-creature-frog.svg">
          <!-- <button href="#" class="creature button__blue" v-on:click="chooseCreature" data-creature="frog">frog</button> -->
          <div class="status">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z" /></svg>
          </div>
        </li>
        <li class="creature" v-on:click="chooseCreature" data-creature="mouse">
          <img class="mouse" src="../assets/inline-creature-mouse.svg">
          <!-- <button href="#" class="creature button__blue" v-on:click="chooseCreature" data-creature="mouse">mouse</button> -->
          <div class="status">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z" /></svg>
          </div>
        </li>
        <li class="creature" v-on:click="chooseCreature" data-creature="rabbit">
          <img class="rabbit" src="../assets/inline-creature-rabbit.svg">
          <!-- <button href="#" class="creature button__blue" v-on:click="chooseCreature" data-creature="rabbit">rabbit</button> -->
          <div class="status">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z" /></svg>
          </div>
        </li>
        <li class="creature" v-on:click="chooseCreature" data-creature="gpig">
          <img class="gpig" src="../assets/inline-creature-gpig.svg">
          <!-- <button href="#" class="creature button__blue" v-on:click="chooseCreature" data-creature="gpig">gpig</button> -->
          <div class="status">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z" /></svg>
          </div>
        </li>
      </ul>
    </div>
    <h1>You've selected the: {{creature}}</h1>
    <!-- <router-link to="/taskthree" class="button router-link">When you're ready, click here to continue!</router-link> -->
    <div class="next-cta">
      <p>When you're ready, click the red button to continue</p>
      <router-link to="/taskthree" class="button button__disabled button-round router-link">
        <!-- <img src="../assets/iconmonstr-arrow-1.svg" /> -->
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M13 7v-6l11 11-11 11v-6h-13v-10z" /></svg>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'tasktwo',
  methods: {
    enableNext: function() {
      document.querySelector('.router-link').classList.remove('button__disabled');
    },
    chooseCreature: function(event) {
      // get attribute and commit to changeSkin in store
      var creature = event.target.parentNode.getAttribute('data-creature');
      console.log('event.target', event.target);
      console.log(creature);
      // update active state
      const active = document.querySelectorAll('.creature');
      active.forEach(function(userItem) {
        // deleteUser(userItem);
        userItem.classList.remove('is-active');
      });
      // if(active){

      // }
      // event.target.parentNode.classList.toggle('is-active');
      // event.target.classList.toggle('is-active');

      document.querySelector('[data-creature="' + creature + '"]').classList.toggle('is-active');

      this.$store.commit('changeCreature', creature);
      // sets {{skin}} on this Vue
      this.creature = this.$store.getters.getCurrentCreature;

      this.enableNext();
    }
  },
  beforeUpdate() {
    // if Creature is in store, update the class
    const storedCreature = this.$store.getters.getCurrentCreature;
    console.log('storedCreature ' + storedCreature);
    const item = document.querySelector('.creature[data-creature="' + storedCreature + '"]');
    console.log(item);
    // item.parentNode.classList.add('is-active');
    if (item) {
      item.classList.add('is-active');
    }
  },

  data: () => ({
    creature: 'not set',
    // creature_selected: false,
  }),

  mounted() {
    this.creature = this.$store.getters.getCurrentCreature;
  }

};
</script>
<style lang="scss" scoped>
img {
  opacity: 0.5;
  cursor: pointer;

  // outline: 10px solid red;
  &:hover {
    opacity: 0.7;
  }
}

.is-active img {
  // outline: 4px solid red !important;
  opacity: 1;
}

.select-creature {
  width: 100%;
}

ul.creatures {
  display: flex;
  // justify-content: space-around;
  justify-content: center;
  align-items: flex-end;
  width: 100%;

  >* {
    flex: 0 0 20%;
    max-width: 170px;
    padding: 0 20px;
    padding-top: 1rem;
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;

    // .status {
    img {}

    // }
  }
}

button {
  margin: 1rem 0 0;
}

// meercat too tall
.meerkat {
  // max-width: 150px;
}


$mf-red: #f4745e;
$blue: #2c9ffc;

$btn-col-2: $mf-red;
$btn-col-1: darken($mf-red, 10%);
$btn-col-3: darken($mf-red, 20%);
$btn-shadow: lighten(#757763, 30%);
$active: darken($mf-red, 30%);
// $active: darken(#faca44, 0%);

.status {
  margin-top: 1rem;

  svg {
    width: 40px;
    height: 40px;
  }
}


.is-active {
.status {
opacity: 1;
}
svg {
path {
fill: green;
}
}
}

</style>