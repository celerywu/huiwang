// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible.js'

import store from '@/store'
import qrcode from 'qrcode'

// import VConsole from 'vconsole'
//
// const vConsole = new VConsole()
//
// console.log(vConsole.version)


import weui from 'jquery-weui/dist/js/jquery-weui.min'
import picker from 'jquery-weui/dist/js/city-picker.min'
// import Vant from 'vant';
// import 'vant/lib/vant-css/index.css';

// require('../static/libs/jqueryweui/jquery-weui')
require('../static/libs/jqueryweui/weui.min.css')
require('../static/libs/jqueryweui/jquery-weui.css')

// Vue.use(Vant);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
