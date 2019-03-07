import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import DamageCalc from '@/components/DamageCalc'
import GemsCalc from '@/components/GemsCalc'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
  ]
})
