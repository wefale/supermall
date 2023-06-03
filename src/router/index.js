import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('views/home/home.vue')
const Classify = () => import('views/classigy/classify.vue')
const Category = () => import('view/category/category.vue')
const Profile = () => import('view/profile/profile.vue')

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/home',
    component: Home
  }, 
  {
    path: '/classify',
    component: Classify
  },
  {
    path: '/category',
    component: Category
  }, 
  {
    path: '/profile',
    component: Profile
  }
]

export default new Router({
  routes,
  mode: 'history'
})
