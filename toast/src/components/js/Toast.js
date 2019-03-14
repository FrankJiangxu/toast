import Vue from 'vue'
import Toast from '@/components/Toast.vue' // 引入一个组件‘
let ToastConstructor = Vue.extend(Toast) // 返回一个“扩展实例构造器

let myToast = (text, duration, color) => {
  let toast = new ToastConstructor({
    el: document.createElement('div') // 将toast组件挂载到新创建的div上
  })
  document.body.appendChild(toast.$el) // 把toast组件的dom添加到body里
  toast.text = text
  toast.duration = duration
  toast.$refs.toastBg.style.color = color
  // 在指定 duration 之后让 toast消失
  setTimeout(() => {
    toast.isShow = false
  }, toast.duration)
}
export default myToast
