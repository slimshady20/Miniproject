import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import vuex from "vuex"
import axios from "axios";
import {store} from './store';
import firebase from 'firebase'

Vue.config.productionTip = false

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCHJtqT2Y2scPUir_uQ2Qy-48dJucWFrjA",
  authDomain: "jaydensminiproject.firebaseapp.com",
  databaseURL: "https://jaydensminiproject.firebaseio.com",
  projectId: "jaydensminiproject",
  storageBucket: "jaydensminiproject.appspot.com",
  messagingSenderId: "64455018889",
  appId: "1:64455018889:web:3a4669c5d715f9e0313958",
  measurementId: "G-2NJBXRTK3P"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
new Vue({
  vuetify,
  router,
  vuex,
  axios,
  store,
  render: h => h(App)
}).$mount('#app')
