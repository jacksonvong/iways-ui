import Vue from 'vue'
import Router from 'vue-router'
const Popover = () => import('@/examples/popover.vue')
const Select = () => import('@/examples/select.vue')
const Datepicker = () => import('@/examples/datepicker.vue')
const Submodel = () => import('@/examples/submodel.vue')
const Manfbrand = () => import('@/examples/manfbrand.vue')
const Region = () => import('@/examples/region.vue')
const Segment = () => import('@/examples/segment.vue')
const Favorite = () => import('@/examples/favorite.vue')
const Index = () => import('@/examples/index.vue')
// const Select = () => import('@/examples/select.vue')

Vue.use(Router)

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/index', name: 'Index', component: Index },
    // { path: '/select', name: 'Select', component: Select },
    { path: '/popover', name: 'Popover', component: Popover },
    { path: '/select', name: 'Select', component: Select },
    { path: '/datepicker', name: 'Datepicker', component: Datepicker },
    { path: '/submodel', name: 'Submodel', component: Submodel },
    { path: '/manfbrand', name: 'Manfbrand', component: Manfbrand },
    { path: '/region', name: 'Region', component: Region },
    { path: '/segment', name: 'Segment', component: Segment },
    { path: '/favorite', name: 'Favorite', component: Favorite },
    { path: '*', redirect: '/index' }
  ]
})
