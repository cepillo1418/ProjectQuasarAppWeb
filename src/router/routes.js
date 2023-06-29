
const routes = [
  {
    path: '/vueg',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'IndexPage', component: () => import('pages/IndexPage.vue') }
    ]

    
  },
  {
    path: '/vue1',
    component: () => import('layouts/vue1.vue'),
    children: [
      { path: 'page1', component: () => import('pages/page1.vue') },
      { path: 'page2', component: () => import('pages/page2.vue') },
      { path: 'page3', component: () => import('pages/page3.vue') }
    ]

    
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
