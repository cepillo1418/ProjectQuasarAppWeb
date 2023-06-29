
const routes = [

  {
    path: '/',
    component: () => import('layouts/vue1.vue'),
    children: [
      { path: '', component: () => import('pages/home.vue') },
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
