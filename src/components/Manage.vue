<template>
<div id="manage">
  <Header v-bind:name="name">
  </Header>
  <div id="main">

    <div id="menu">
      <div id="tags">
        保存済みのタグ
      </div>
      <div v-for="tag in savedTags">
        {{tag}}
      </div>
      <input v-model="input" />
      <button type="button" v-on:click="addTag(input)">addTag</button>
    </div>
    <div id="detail">
      <div v-for="detail in tagDetail">
        {{detail}}
      </div>
      <ul>
        <li v-for="item in tag">
          {{item}}
        </li>
      </ul>

    </div>
  </div>

</div>
</template>

<script>
import Header from "@/components/Header.vue"
import firebase from 'firebase'

let user = "" // Twitter.uid

export default {
  components: {
    Header
  },
  created: async function() {
    let aa = [];
    await firebase.auth().onAuthStateChanged(user => {
      // ログイン状態ならuserが取得できる
      user = user ? user : {};
      this.user = user.uid;
      this.name = user.displayName;
    });
    const store = firebase.firestore();
    let savedTags = []; // すでに保存済みのtag名を配列で保持する
    let database = await store.collection('tags')
      .where("user", "==", this.user)
      .get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // 取得したドキュメントで何かやる
          if (doc.data()["id"] !== undefined) {
            this.savedTags.push(doc.data()["id"]);
          }
        })
      })
    this.savedTags = Array.from(new Set(this.savedTags));
    // console.log(this.savedTags)
    if (this.savedTags.length !== 1) {
      this.fetchTag(this.savedTags[0]);
    }
  },
  //    console.log("show savedTags " + savedTags);
  //   let database2 = await store.collection('tags')
  //      .where("user", "==", this.user)
  //          .where("id", "==", savedTags[0])
  //    .get().then((querySnapshot) => {
  //      querySnapshot.forEach((doc) => {
  //        // 取得したドキュメントで何かやる
  //        this.tag.push(doc.data()["tag"]);

  //        if (doc.data()["name"] !== undefined) {
  //          aa.push(doc.data()["name"])
  //        }
  //      })
  //    })
  //  console.log(new Set(aa))

  methods: {
    addTag: function(input) {
      let database = firebase.firestore().collection('tags').add({
        user: this.user,
        tag: input
      })
    },
    fetchTag: function(input) {
      let database = firebase.firestore().collection('tags')
        .where("user", "==", this.user)
        .where("id", "==", input)
        .get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.tagDetail.push(doc.data()["tag"]);
          })
        })

    }
  },
  data() {
    return {
      user: "",
      name: "",
      tag: [],
      input: "",
      savedTags: [],
      tagDetail: [],
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

#main {
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

#tags {
  font-weight: bold;
}
</style>
