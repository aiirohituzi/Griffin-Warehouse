import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import DamageCalc from '@/components/DamageCalc'
import AgiCalc from '@/components/AgiCalc'
import GemsCalc from '@/components/GemsCalc'
import SimCalc from '@/components/SimCalc'
import ExpCalc from '@/components/ExpCalc'
import OECalc from '@/components/OperationalEffectivenessCalc'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    // {
    //   path: '/',
    //   name: 'landing-page',
    //   component: require('@/components/LandingPage').default
    // },
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/damageCalc',
      name: 'DamageCalc',
      component: DamageCalc
    },
    {
      path: '/agiCalc',
      name: 'AgiCalc',
      component: AgiCalc
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
      path: '/oeCalc',
      name: 'OECalc',
      component: OECalc
    }
  ]
})
