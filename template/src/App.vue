<template>
  <page :menu="menu">
    <transition name="page-transition">
        <router-view></router-view>
    </transition>
  </page>
</template>

<script>
import navList from './nav.config.json'
export default {
  name: 'app',
  data () {
    return {
      menu: navList
    }
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
