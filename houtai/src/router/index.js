import Vue from 'vue'
import Router from 'vue-router'

let Hello=()=>import('@/components/Hello')
let About=()=>import('@/components/About')
let Costumers=()=>import('@/components/Costumers')
let Add=()=>import('@/components/Add')
let Customerdetails=()=>import('@/components/Customerdetails')
let Edit=()=>import('@/components/Edit')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Costumers',
      component: Costumers
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Costumers',
      name: 'Costumers',
      component: Costumers
    },
    {
      path: '/Add',
      name: 'Add',
      component: Add
    },
    {
      path: '/Customerdetails/:id',
      name: 'Customerdetails',
      component: Customerdetails
    },
    {
      path: '/edit/:id',
      name: 'Edit',
      component: Edit
    }
  ]
})
