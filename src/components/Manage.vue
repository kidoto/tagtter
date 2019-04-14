<template>
<div id="manage">
  <Login></Login>
  <div id="menu">
    menu
    <button type="button" v-on:click="getTag">getTag</button>
    <button type="button" v-on:click="addTag(input)">addTag</button>
    <input v-model="input" />
    {{tag}}
  </div>
  <div id="detail">
    detail
    {{user}}
  </div>
</div>
</template>

<script>
import Login from "@/components/Login.vue"
import firebase from 'firebase'

let user = "" // Twitter.uid

export default {
  components: {
    Login
  },
  mounted: function() {
    firebase.auth().onAuthStateChanged(user => {
      // ログイン状態ならuserが取得できる
      user = user ? user : {};
      this.user = user.uid;
    })
  },
  methods: {
    getTag: function() {
      let database = firebase.firestore().collection('tags')
        .where("user", "==", this.user)
        .get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // 取得したドキュメントで何かやる
            this.tag.push(doc.data()["tag"]);
          })
        })
    },
    addTag: function(input) {
      let database = firebase.firestore().collection('tags').add({
        user: this.user,
        tag: input
      })

    }
  },
  data() {
    return {
      user: "",
      tag: [],
      input: ""
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

#manage {
  display: flex;
}

#menu {
  border: solid 1px #000000;
  margin: 5px;
  width: 30%;
}

#detail {
  border: solid 1px #000000;
  margin: 5px;
  width: 70%;
}
</style>
