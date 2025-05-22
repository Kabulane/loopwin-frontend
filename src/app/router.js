import { createRouter, createWebHistory } from 'vue-router'

// Import de pages //
//
//  app //
import HomeView from './views/HomeView.vue'
import NotFoundView from './views/NotFoundView.vue'
//  shared

//  features
//  //  auth
import LoginView from '../features/auth/views/LoginView.vue'
//  //  Contest
import ContestsView from '../features/contest/views/ContestsView.vue'
import ParticipationView from '../features/contest/views/ParticipationView.vue'
//  //  User
import UserSpaceView from '../features/user/views/UserSpaceView.vue'


// To Delete
import ContestDetail from '../features/contest/components/ContestDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/',
    name: 'Detail',
    component: ContestDetail
  },
  {
    path: '/contests',
    name: 'Contests',
    component: ContestsView
  },
  {
    path: '/contest/:contestId',
    name: ContestDetail,
    component: ContestDetail
  },
  {
    path: '/participations',
    name: 'Participations',
    component: ParticipationView
  },
  {
    path: '/mySpace',
    name: 'Mon espace',
    component: UserSpaceView
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundView
  },
  {
    path: '/login',
    name: 'Login',
    component : LoginView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router