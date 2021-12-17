<template>
  <div id="app">
    <el-button>
      <router-link to="/login">跳登录</router-link>
    </el-button>
    <el-button>
      <router-link to="/404">跳404</router-link>
    </el-button>
    <br />
    <br />

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  mounted() {},
  methods: {}
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
