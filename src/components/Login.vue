<template>
<div id="login">
  <button type="button" v-on:click="login">button</button>
</div>
</template>
<script>
'use strict'
import firebase from 'firebase'
import firebaseConfig from '../../config/firebase.env'

export default {
  mounted() {
    var config = {
      apiKey: firebaseConfig.API_KEY,
      authDomain: firebaseConfig.AUTH_DOMAIN,
      databaseURL: firebaseConfig.DATABASE_URL,
      projectId: firebaseConfig.PROJECT_ID,
      storageBucket: firebaseConfig.STORAGE_BUCKET,
      messagingSenderId: firebaseConfig.MESSAGING_SENDERID
    }
    firebase.initializeApp(config);
  },
  methods: {
    login: function() {
      const provider = new firebase.auth.TwitterAuthProvider()
      firebase.auth().signInWithPopup(provider);
    }
  }

}
</script>
<style>
a {
  font: 20px;
  font-weight: bold;
  margin: 5px;
}
</style>
