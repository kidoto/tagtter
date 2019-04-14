import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router.js'
import firebase from 'firebase'
import firebaseConfig from '../config/firebase.env'



Vue.config.productionTip = false

var config = {
  apiKey: firebaseConfig.API_KEY,
  authDomain: firebaseConfig.AUTH_DOMAIN,
  databaseURL: firebaseConfig.DATABASE_URL,
  projectId: firebaseConfig.PROJECT_ID,
  storageBucket: firebaseConfig.STORAGE_BUCKET,
  messagingSenderId: firebaseConfig.MESSAGING_SENDERID
};
firebase.initializeApp(config);

Vue.use(router)


new Vue({
  router  ,
  render: h => h(App),
}).$mount('#app')
