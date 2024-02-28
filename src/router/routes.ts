import i18n from '../i18n'

export const routes = [
  {
    name: 'Home', //首页
    path: '/',
    component: () => import('../pages/home/index.vue'),
    meta: {
      title: i18n.global.t('Home')
    }
  }
]
