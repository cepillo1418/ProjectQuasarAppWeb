
const routes = [

  {
    path: '/',
    component: () => import('layouts/vue1.vue'),
    children: [
      
      { path: '', component: () => import('pages/recherche.vue') },
  
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
