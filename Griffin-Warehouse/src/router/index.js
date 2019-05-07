import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import DamageCalc from '@/components/DamageCalc'
import GemsCalc from '@/components/GemsCalc'
import SimCalc from '@/components/SimCalc'
import ExpCalc from '@/components/ExpCalc'
import AgiCalc from '@/components/AgiCalc'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/damageCalc',
      name: 'DamageCalc',
      component: DamageCalc
    },
    {
      path: '/gemsCalc',
      name: 'GemsCalc',
      component: GemsCalc
    },
    {
      path: '/simCalc',
      name: 'SimCalc',
      component: SimCalc
    },
    {
      path: '/expCalc',
      name: 'ExpCalc',
      component: ExpCalc
    },
    {
      path: '/agiCalc',
      name: 'AgiCalc',
      component: AgiCalc
    },
  ]
})
