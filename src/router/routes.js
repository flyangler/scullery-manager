const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'auth', component: () => import('pages/Page-Auth.vue') },
      { path: 'alerts', component: () => import('pages/Page-Alerts') },
      { path: 'reports', component: () => import('pages/Page-Reports') },
      { path: 'manage', component: () => import('pages/Page-Manage') },
      { path: 'sync', component: () => import('pages/Page-Sync') },
      { path: 'settings', component: () => import('pages/Page-Settings') }
    ]
  }
]
// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
