<template>
<div id="top">
  <div id="nav">
    <Header>
    </Header>
  </div>
  <div id="title">
    Tagtter
  </div>
  <div id="substitle">
    Tagtterへようこそ。
    <br />
    いつも打っているハッシュタグ、
    <br />
    もっと使いやすくしませんか？
    <br />
    Tagtterならいつも使っているハッシュタグを名前ごとに管理できます。
  </div>
  <div id="description">
    TagtterはTwitterのハッシュタグを管理する、それだけを提供します。
    <br />
    普段使っているTwitterアカウントでログインするだけ。
    <br />
    保存したタグを付けてそのままTweetできます。
  </div>
  <router-link to="/manage">manage</router-link>
  <router-link to="/login">login</router-link>
  <a href="https://twitter.com/intent/tweet?hashtags=hoge&target=_blank">リンクテキスト</a>
  <br />
  <div id="login">
    枠
  </div>
</div>
</template>

<script>
'user strict'
import Header from '@/components/Header.vue'

export default {
  components: {
    Header
  }
}
</script>
<style>
#title {
  font-family: 'PT Serif', serif;
  font-size: 36px;
  padding: 30px;
}

#login {
  border: solid 1px #000000;

}

a {
  font: 20px;
  font-weight: bold;
  margin: 5px;
}
</style>
