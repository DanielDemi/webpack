<template>
  <div class="hello">
    <h1>\{{$t('hello.dolphin')}}</h1>

     <p>开发前请先阅读:</p>

    <p><h1><a href="https://git.hikvision.com.cn/users/xiangxiao3/repos/blog/browse/2017/%E6%B5%B7%E8%B1%9Aweb%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91%E8%A7%84%E8%8C%83.md">海豚web前端开发规范</a></h1></p>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
