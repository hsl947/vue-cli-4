<template>
  <div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <el-button type="primary" @click="add">{{ $store.state.num }} - 点击加1</el-button>
    <el-button @click="$router.push('/404')">跳转404</el-button>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import { login } from '@/api'

export default {
  name: 'Login',
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

<style scoped lang="scss">

</style>
