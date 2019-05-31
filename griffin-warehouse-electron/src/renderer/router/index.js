import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import DamageCalc from '@/components/DamageCalc'
import AgiCalc from '@/components/AgiCalc'

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
    }
  ]
})
