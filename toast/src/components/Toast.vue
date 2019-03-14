<template>
  <div class="toast" ref="toastBg" v-if="isShow">
    <div class="toast-div">{{ text }}</div>
  </div>
</template>

<script>
export default{
  data () {
    return {
      text: '内容',
      isShow: true,
      duration: 1500
    }
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  .toast{
    position: fixed;
    left: 50%;
    top:50%;
    transform: translate(-50%, 0);
    background: #000000;
    line-height: 20px;
    color: #FFFFFF;
    padding: 0 10px;
    border-radius: 10px;
  }
</style>
