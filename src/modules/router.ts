import { createRouter, createWebHistory } from 'vue-router'
// @ts-ignore  
import routes from '~pages'

const history = createWebHistory()

export const router = createRouter({
  history,
  routes,
})
