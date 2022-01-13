import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    msg:            'Hello Vuex',
    skin_dede:      'skin_m-d',
    hair_dede:      'hair_l',
    skin_arlo:      'skin_m-l',
    hair_arlo:      'hair_m-l',
    creature:       'meerkat',
    happyIcon:      'heart',
    emojiImage:     'images/pngs/EMOJI_SAD.png',
    headset:        'images/pngs/HEADSET.png',
    note:           'note_2',
    cavePainting:   'images/pngs/CAVE_ART.png',
    mammoth_angry:  null,
    mammoth_embarrassed: null,
    mammoth_laugh:  null,
    easterImage:    'images/pngs/ei_props.png',
    KidName: null,
  },
  mutations: { // syncronus
    changeDedeSkin (state, str) {           state.skin_dede = str;            },
    changeDedeHair (state, str) {           state.hair_dede = str;            },
    changeArloSkin (state, str) {           state.skin_arlo = str;            },
    changeArloHair (state, str) {           state.hair_arlo = str;            },
    changeCreature (state, str) {           state.creature = str;             },
    changehappyIcon (state, str) {          state.happyIcon = str;            },
    setEmojiImage (state, str) {            state.emojiImage = str;           },
    setHeadset (state, str) {               state.headset = str;              },
    setNote (state, str) {                  state.note = str;                 },
    setCavePainting (state, str) {          state.cavePainting = str;         },
    setMammothAngry (state, str) {          state.mammoth_angry = str;        },
    setMammothEmbarrassed (state, str) {    state.mammoth_embarrassed = str;  },
    setMammothLaugh (state, str) {          state.mammoth_laugh = str;        },
    setEasterImage (state, str) {           state.easterImage = str;          },
    setKidName (state, str) {               state.KidName = str;              },
    
  },
  actions: {
    changeDedeSkin (state, str) {           state.commit("changeDedeSkin", str);        },
    changeDedeHair (state, str) {           state.commit("changeDedeHair", str);        },
    changeArloSkin (state, str) {           state.commit("changeArloSkin", str);        },
    changeArloHair (state, str) {           state.commit("changeArloHair", str);        },
    changeCreature (state, str) {           state.commit("changeCreature", str);        },
    changehappyIcon (state, str) {          state.commit("changehappyIcon", str);       },
    setEmojiImage (state, str) {            state.commit("setEmojiImage", str);         },
    setHeadset (state, str) {               state.commit("setHeadset", str);            },
    setNote (state, str) {                  state.commit("setNote", str);               },
    setCavePainting (state, str) {          state.commit("setCavePainting", str);       },
    setMammothAngry (state, str) {          state.commit("setMammothAngry", str);       },
    setMammothEmbarrassed (state, str) {    state.commit("mammoth_embarrassed", str);   },
    setMammothLaugh (state, str) {          state.commit("mammoth_laugh", str);         },
    setEasterImage (state, str) {           state.commit("easterImage", str);           },
    setKidName (state, str) {               state.commit("KidName", str);               },
  },
  modules: {},
  getters: {
    getCurrentDedeSkin(state){      return state.skin_dede;           },
    getCurrentDedeHair(state){      return state.hair_dede;           },
    getCurrentArloSkin(state){      return state.skin_arlo;           },
    getCurrentArloHair(state){      return state.hair_arlo;           },
    getCurrentCreature(state){      return state.creature;            },
    getCurrenthappyIcon(state){     return state.happyIcon;           },
    getEmojiImage(state){           return state.emojiImage;          },
    getHeadset(state){              return state.headset;             },
    getCurrentNote(state){          return state.note;                },
    getCavePainting(state){         return state.cavePainting;        },
    getMammothAngry(state){         return state.mammoth_angry;       },
    getMammothEmbarrassed(state){   return state.mammoth_embarrassed; },
    getMammothLaugh(state){         return state.mammoth_laugh;       },
    getEasterImage(state){          return state.easterImage;         },
    getKidName(state){              return state.KidName;             },
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
