import Vue from 'vue'
import VueRouter from 'vue-router'
import welCome from '@/components/welCome'
import mockUp from '@/components/mockUp'
import projectCard from '@/components/projectCard'
import bottomBar from '@/components/bottomBar'
import companyCard from '@/components/companyCard'
import protoInfo from '@/components/protoInfo'
import userWeb from '@/components/userWeb'
import topBar from '@/components/topBar'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'welCome',
    component: welCome
  },
  {
    path: '/mockUp',
    name: 'mockUp',
    component: mockUp
  },
  {
    path: '/projectCard',
    name: 'projectCard',
    component: projectCard
  },
  {
    path:'/bottomBar',
    name:'bottomBar',
    components:bottomBar
  },
  {
    path:'/companyCard',
    name:'companyCard',
    components:companyCard
  },
  {
    path:'/protoInfo',
    name:'protoInfo',
    components:protoInfo
  },
  {
    path:'/userWeb',
    name:'userWeb',
    components:userWeb
  },
  {
    path:'/topBar',
    name:'topBar',
    components:topBar
  }
  
 
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
