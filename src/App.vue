<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <button @click="add">{{ $store.state.num }} - 点击加1</button>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import { login } from '@/api'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  mounted() {
    login()
  },
  methods: {
    add() {
      const num = this.$store.state.num + 1
      this.$store.dispatch('setNum', num)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
