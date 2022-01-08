import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    msg: 'Hello Vuex',
    skin_dede: 'skin_d',
    hair_dede: 'hair_d',
    skin_arlo: 'skin_m-l',
    hair_arlo: 'hair_d',
    creature: '',
    happyIcon: 'heart',
    emojiImage: '',
    note: 'note_3',
    cavePainting: '',
    mammoth_angry: '',
    mammoth_embarrassed: '',
    mammoth_laugh: '',
    easterImage: '',
    stageName: null,
  },
  mutations: { // syncronus
    changeDedeSkin (state, str) {
      state.skin_dede = str;
    },
    changeDedeHair (state, str) {
      state.hair_dede = str;
    },
    changeArloSkin (state, str) {
      state.skin_arlo = str;
    },
    changeArloHair (state, str) {
      state.hair_arlo = str;
    },
    changeCreature (state, str) {
      // state.skin = `${state.skin}, ${str}`
      state.creature = str;
    },
    changehappyIcon (state, str) {
      // state.skin = `${state.skin}, ${str}`
      state.happyIcon = str;
    },
    setEmojiImage (state, str) {
      // state.skin = `${state.skin}, ${str}`
      state.emojiImage = str;
    },
    setNote (state, str) {
      // state.skin = `${state.skin}, ${str}`
      state.note = str;
    },
    setCavePainting (state, str) {
      // state.skin = `${state.skin}, ${str}`
      state.cavePainting = str;
    },
    setMammothAngry (state, str) {
      // state.skin = `${state.skin}, ${str}`
      state.mammoth_angry = str;
    },
    setMammothEmbarrassed (state, str) {
      // state.skin = `${state.skin}, ${str}`
      state.mammoth_embarrassed = str;
    },
    setMammothLaugh (state, str) {
      // state.skin = `${state.skin}, ${str}`
      state.mammoth_laugh = str;
    },
    setEasterImage (state, str) {
      // state.skin = `${state.skin}, ${str}`
      state.easterImage = str;
    },
    setStageName (state, str) {
      // state.skin = `${state.skin}, ${str}`
      state.stageName = str;
    },
    
  },
  actions: {
    changeDedeSkin (state, str) {
      // state.skin = `${state.skin}, ${str}`
      state.commit("changeDedeSkin", str);
    },
    changeDedeHair (state, str) {
      // state.skin = `${state.skin}, ${str}`
      state.commit("changeDedeHair", str);
    },
    changeArloSkin (state, str) {
      // state.skin = `${state.skin}, ${str}`
      state.commit("changeArloSkin", str);
    },
    changeArloHair (state, str) {
      // state.skin = `${state.skin}, ${str}`
      state.commit("changeArloHair", str);
    },
    changeCreature (state, str) {
      // state.skin = `${state.skin}, ${str}`
      state.commit("changeCreature", str);
    },
    changehappyIcon (state, str) {
      // state.skin = `${state.skin}, ${str}`
      state.commit("changehappyIcon", str);
    },
    setEmojiImage (state, str) {
      // state.skin = `${state.skin}, ${str}`
      state.commit("setEmojiImage", str);
    },
    setNote (state, str) {
      // state.skin = `${state.skin}, ${str}`
      state.commit("setNote", str);
    },
    setCavePainting (state, str) {
      // state.skin = `${state.skin}, ${str}`
      state.commit("setCavePainting", str);
    },
    setMammothAngry (state, str) {
      // state.skin = `${state.skin}, ${str}`
      state.commit("setMammothAngry", str);
    },
    setMammothEmbarrassed (state, str) {
      // state.skin = `${state.skin}, ${str}`
      state.commit("mammoth_embarrassed", str);
    },
    setMammothLaugh (state, str) {
      // state.skin = `${state.skin}, ${str}`
      state.commit("mammoth_laugh", str);
    },
    setEasterImage (state, str) {
      // state.skin = `${state.skin}, ${str}`
      state.commit("easterImage", str);
    },
    setStageName (state, str) {
      // state.skin = `${state.skin}, ${str}`
      state.commit("stageName", str);
    },
  },
  modules: {},
  getters: {
    getCurrentDedeSkin(state){
      return state.skin_dede;
    },
    getCurrentDedeHair(state){
      return state.hair_dede;
    },
    getCurrentArloSkin(state){
      return state.skin_arlo;
    },
    getCurrentArloHair(state){
      return state.hair_arlo;
    },
    getCurrentCreature(state){
      return state.creature;
    },
    getCurrenthappyIcon(state){
      return state.happyIcon;
    },
    getEmojiImage(state){
      return state.emojiImage;
    },
    getCurrentNote(state){
      return state.note;
    },
    getCavePainting(state){
      return state.cavePainting;
    },
    getMammothAngry(state){
      return state.mammoth_angry;
    },
    getMammothEmbarrassed(state){
      return state.mammoth_embarrassed;
    },
    getMammothLaugh(state){
      return state.mammoth_laugh;
    },
    getEasterImage(state){
      return state.easterImage;
    },
    getStageName(state){
      return state.stageName;
    },
    // getSkin: state => state.skin
  },
  methods: {
    // storeInLocalStorage(mutation, state){  
    //   // Subscribe to store updates
    //   store.subscribe((mutation, state) => {
    //     // Store the state object as a JSON string
    //     localStorage.setItem('store', JSON.stringify(state));
    //   });
    // }
  }
});
