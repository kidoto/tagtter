<template>
<div id="header">
  <div id="login">
    <span v-if="isLogin">
      <router-link to="/login">Logout</router-link>
      ようこそ、{{name}} さん
    </span>
    <span v-else>
      <router-link to="/login">Login</router-link>
    </span>
  </div>
</div>
</template>

<style>
#header {
  background-color: #1da1f2;
  text-align: right;
  border: solid 1px #ffffff;
}

a {
  font: 20px;
  font-weight: bold;
  margin: 5px;
}
</style>

<script>
export default {
  props: ["name"],
  mounted: function() {
    this.isLogin = this.user !== undefined;
  },
  data() {
    return {
      isLogin: false
    }
  }
}
</script>
