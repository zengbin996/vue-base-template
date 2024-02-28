import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to) => {
  if (false) {
    return '/login'
  }

  window.scrollTo(0, 0)
  NProgress.start()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
