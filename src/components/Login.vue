<template>
<div id="login">
  <button type="button" v-on:click="check">check</button>
  <span v-if="isLogin.uid!=null">ようこそ、{{isLogin.displayName}} さん
    <img v-bind:src="profile" />
  </span>
  <span v-else>
    <button type="button" v-on:click="login">button</button>
  </span>
</div>
</template>
<script>
'use strict'
import firebase from 'firebase'

export default {
  data() {
    return {
      user: {},
      isLogin: '',
      profile: ''
    }
  },
  methods: {
    login: function() {
      const provider = new firebase.auth.TwitterAuthProvider()
      firebase.auth().signInWithPopup(provider);
    },
    check: function() {
      firebase.auth().onAuthStateChanged(user => {
        // ログイン状態ならuserが取得できる
        this.isLogin = user ? user : {};
      })
      console.log(this.isLogin);
      this.profile = this.isLogin.photoURL;
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
