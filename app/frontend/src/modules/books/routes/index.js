const routes = [
    {
      path: '/books',
      name: 'books',
      component: () => import('../pages/BooksPage.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../pages/BooksPage.vue')
    },
    {
      path: '/bag',
      name: 'bag',
      component: () => import('../pages/BooksPage.vue')
    },
    {
      path: '/map',
      name: 'map',
      component: () => import('../pages/BooksPage.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../pages/BooksPage.vue')
    },
]

export { routes }