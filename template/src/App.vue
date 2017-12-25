<template>
  <page :menu="menu">
    <div class="page-loading" v-loading.body="loading" v-show="loading"></div>
    <transition name="page-transition">
      <router-view></router-view>
    </transition>
  </page>
</template>

<script>
import navList from './nav.config.json'
import skinJson from '../static/skin/skin.json'
export default {
  name: 'app',
  data () {
    return {
      menu: navList,
      loading: true
    }
  },
  created () {
    // 读取默认皮肤
    let skin = skinJson.default
    this.$utils.renderSkin(skin, skinJson.packages)
  },
  mounted () {
    // 默认加载loading效果，800ms后移除
    setTimeout(() => {
      this.loading = false
    }, 800)
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
