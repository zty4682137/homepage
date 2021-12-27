import Vue from 'vue'
import {
  parseTime,
  formatTime,
  formatMoney,
  reFormatMoney,
  debounce,
  download
} from '@/utils'
import Vector from '@/utils/vector'

Vue.prototype.$parseTime = parseTime
Vue.prototype.$formatTime = formatTime
Vue.prototype.$formatMoney = formatMoney
Vue.prototype.$reFormatMoney = reFormatMoney
Vue.prototype.$download = download
Vue.prototype.$debounce = debounce
Vue.prototype.$Vector = Vector //personalAccordion背景矢量图
