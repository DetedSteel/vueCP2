import AuthViewVue from '@/views/AuthView.vue'
import HomeViewVue from '@/views/HomeView.vue'
import UsersViewVue from '@/views/UsersView.vue'
import ProfileViewVue from '@/views/ProfileView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'start',
      beforeEnter() {
        router.push('/home')
      }
    },
    {
      path: '/home',
      name: 'home',
      component: HomeViewVue
    },
    {
      path: '/users',
      name: 'users',
      component: UsersViewVue
    },
    {
      path: '/login',
      name: 'login',
      component: AuthViewVue
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileViewVue,
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem('token')) {
          next()
        } else {
          router.push('/login')
        }
      }
    }
  ]
})

// router.beforeRouteEnter(to, from, next) => {
//   console.log(to)
// }

export default router
