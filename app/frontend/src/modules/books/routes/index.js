const routes = [
    {
      path: '/books',
      name: 'books',
      component: () => import('../pages/BooksPage.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../../../layouts/default/View.vue')
    },
    {
      path: '/bag',
      name: 'bag',
      component: () => import('../pages/BagPage.vue')
    },
    {
      path: '/map',
      name: 'map',
      component: () => import('../pages/MapsPage.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../pages/UserPage.vue')
    },
]

export { routes }