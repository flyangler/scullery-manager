const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'auth', component: () => import('pages/Auth.vue') },
      { path: 'alerts', component: () => import('pages/Alerts') },
      { path: 'reports', component: () => import('pages/Reports') },
      { path: 'manage', component: () => import('pages/Manage') },
      { path: 'sync', component: () => import('pages/Sync') },
      { path: 'settings', component: () => import('pages/Settings') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
