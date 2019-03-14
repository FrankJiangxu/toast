<template>
  <div class="hello">
    <button @click="showToast">按钮</button>
  </div>
</template>
<script>
import toast from './js/Toast'
import Vue from 'vue'
Vue.prototype.$toast = toast
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    showToast () {
      this.$toast('我爱你', 1000, 'red')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
