<template>
  <page-container>
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
  import helloApi from '../../api/api.hello'

  export default {
    name: 'Hello',
    components: {
      HelloWord
    },
    data () {
      return {}
    },
    created () {
      helloApi.getConfig()
    }
  }
</script>
