<template>
  <page-container :breadcrumb="i18nBreadcrumb">
    <hello-word></hello-word>
  </page-container>
</template>
<script>
  /**
   * @author zhangxin14
   * @date 2017/12/18
   * @desc
   */
  import HelloWord from '../../components/HelloWorld.vue'

  export default {
    name: 'Hello',
    props: ['breadcrumb'],
    components: {
      HelloWord
    }
  }
</script>
