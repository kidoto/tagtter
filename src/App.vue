<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
<a href="https://twitter.com/intent/tweet?hashtags=hoge&target=_blank">リンクテキスト</a>

  </div>
</template>

<script>
'use strict'
import HelloWorld from './components/HelloWorld.vue'
import firebase from 'firebase'
import firebaseConfig from '../config/firebase.env'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  mounted: function() {
    var config = {
      apiKey: firebaseConfig.API_KEY,
      authDomain: firebaseConfig.AUTH_DOMAIN,
      databaseURL: firebaseConfig.DATABASE_URL,
      projectId: firebaseConfig.PROJECT_ID,
      storageBucket: firebaseConfig.STORAGE_BUCKET,
      messagingSenderId: firebaseConfig.MESSAGING_SENDERID
    };
    firebase.initializeApp(config);
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
