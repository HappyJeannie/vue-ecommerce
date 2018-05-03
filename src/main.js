// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mock from 'mockjs'

console.log(Mock.mock('@integer(60, 100)'))
console.log(Mock.mock('@city'))
console.log(Mock.mock('@county'))

console.log(Vue)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  // template: '<App/>',
  data: {
    imgUrl: ''
  },
  created () {
    fetch().then(res => {
      console.log(res)
      this.imgUrl = res.data.img
    })
  }
})
function fetch (data = null) {
  return new Promise((resolve, reject) => {
    var server = 'http://rapapi.org/mockjsdata/32293/test?'
    var xhr = new XMLHttpRequest()
    xhr.open('post', server, true)
    xhr.onload = function () {
      resolve(JSON.parse(xhr.responseText))
    }
    xhr.send(data)
    xhr.error = function () {
      reject(JSON.parse(xhr.responseText))
    }
  })
}
