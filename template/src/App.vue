<template>
  <div id="app">
    <el-menu theme="dark" :router="true" :default-active="$route.path" mode="horizontal">
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="hello">Hello</el-menu-item>
    </el-menu>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
