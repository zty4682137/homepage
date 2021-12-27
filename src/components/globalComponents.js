import Vue from 'vue'
// public
import svgIcon from './svgIcon'
import pageHeader from './header'
import elevator from './elevator'
import h2Title from './h2Title'
import waterfall from './waterfall'
// intro
import personalAccordion from './personalAccordion'
// work
import workFilter from './workFilter'
import workCard from './workCard'

Vue.component('svgIcon', svgIcon)
Vue.component('elevator', elevator)
Vue.component('h2Title', h2Title)
Vue.component('pageHeader', pageHeader)
// private Com
Vue.component('personalAccordion', personalAccordion)
Vue.component('workFilter', workFilter)
Vue.component('workCard', workCard)
Vue.component('waterfall', waterfall)
