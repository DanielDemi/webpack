<template>
  <div id="app">
    <el-menu theme="dark" :router="true" :default-active="$route.path" mode="horizontal">
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="hello">Hello</el-menu-item>
      <div class="i18n">
        <span :class="{'active': $i18n.locale === 'zh_CN'}" @click="switchLang('zh_CN')">中文</span>
        <span>/</span>
        <span :class="{'active': $i18n.locale === 'en_US'}" @click="switchLang('en_US')">En</span>
      </div>
    </el-menu>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import huiLocale from 'hui/lib/locale'
export default {
  name: 'app',
  methods: {
    switchLang (locale) {
      debugger
      let lang = require(`@/i18n/${locale}`)
      this.$i18n.setLocaleMessage(locale, JSON.parse(JSON.stringify(lang)))
      console.log(this.$i18n)
      huiLocale.i18n((key, value) => this.$i18n.t(key, value))          // hui的多语言
      this.$i18n.locale = locale
      this.$utils.setCookie('i18n', locale)
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

.i18n {
  position: absolute;
  right: 30px;
  height: 60px;
  color: #fff;
  line-height: 60px;
}

.i18n .active{
  font-size: 16px;
}

.i18n span {
  cursor: pointer;
}
</style>
