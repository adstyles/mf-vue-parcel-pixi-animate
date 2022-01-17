<template>
  <div class="taskfive">
    <h1>Task 5 - Choose which note you want to leave for Dad</h1>
    <!-- <p>Your character needs to tell Dad they’ve gone time travelling, we don’t want him to worry! Which note would you choose to leave for him? Click on your favourite.</p> -->
    <div class="select-note">
      <ul class="notes">
        <li class="note" v-on:click="chooseNote" data-note="note_1">
          <img src="../assets/inline-note-1.svg">
          <!-- <button href="#" class="note button__blue">Select This Note</button> -->
          <div class="status">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z" /></svg>
          </div>
        </li>
        <li class="note" v-on:click="chooseNote" data-note="note_2">
          <img src="../assets/inline-note-2.svg">
          <!-- <button href="#" class="note button__blue">Select This Note</button> -->
          <div class="status">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z" /></svg>
          </div>
        </li>
        <li class="note" v-on:click="chooseNote" data-note="note_3">
          <img src="../assets/inline-note-3.svg">
          <!-- <button href="#" class="note button__blue">Select This Note</button> -->
          <div class="status">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z" /></svg>
          </div>
        </li>
      </ul>
    </div>
    <!-- <h1>You've selected: {{note}}</h1> -->
    <!-- <router-link to="/tasksix" class="button router-link">When you're ready, click here to continue!</router-link> -->
    <div class="next-cta">
      <p>When you're ready, click the red button to continue</p>
      <router-link to="/tasksix" class="button button__disabled button-round router-link">
        <!-- <img src="../assets/iconmonstr-arrow-1.svg" /> -->
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M13 7v-6l11 11-11 11v-6h-13v-10z" /></svg>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'taskfive',
  methods: {
    chooseNote: function(event) {
      // get attribute and commit to changeSkin in store
      var note = event.target.parentNode.getAttribute('data-note');

      console.log(note);
      // update active state
      const active = document.querySelectorAll('.note');
      active.forEach(function(userItem) {
        // deleteUser(userItem);
        userItem.classList.remove('is-active');
      });

      // event.target.parentNode.classList.toggle('is-active');
      document.querySelector('[data-note="' + note + '"]').classList.toggle('is-active');

      this.$store.commit('setNote', note);
      // sets {{skin}} on this Vue
      this.note = this.$store.getters.getCurrentNote;

      document.querySelector('.router-link').classList.remove('button__disabled');

    }
  },

  beforeUpdate() {
    // if note is in store, update the class
    const storednote = this.$store.getters.getCurrentNote;
    console.log('storednote ' + storednote);
    const item = document.querySelector('.note[data-note="' + storednote + '"]');
    console.log(item);
    item.parentNode.classList.add('is-active');
  },

  data: () => ({
    note: '',
  }),

  mounted() {
    this.note = this.$store.getters.getCurrentNote;
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

.select-note {
  width: 100%;
}

ul.notes {
  display: flex;
  justify-content: space-around;
  width: 100%;

  >* {
    flex: 0 0 30%;
  }
}

button {
  margin: 2rem 0;
}


$mf-red: #f4745e;
$blue: #2c9ffc;

$btn-col-2: $mf-red;
$btn-col-1: darken($mf-red, 10%);
$btn-col-3: darken($mf-red, 20%);
$btn-shadow: lighten(#757763, 30%);
$active: darken($mf-red, 30%);
// $active: darken(#faca44, 0%);

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