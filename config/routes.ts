export default [
  { path: '/user', layout: false, routes: [{ path: '/user/login', component: './User/Login' }] },
  { path: '/user', layout: false, routes: [{ path: '/user/register', component: './User/Register' }] },
  { path: '/', redirect: '/add_chart' },
  { path: '/add_chart', name:'智能分析' ,icon: 'barChart', component: './AddChart' },
  {
    path: '/admin',
    icon: 'crown',
    access: 'canAdmin',
    name: '管理员页面',
    routes: [
      { path: '/admin',name:'管理页面', redirect: '/admin/sub-page' },
      { path: '/admin/sub-page', name:'管理页面',component: './Admin' },
    ],
  },
  { path: '/', redirect: '/add_chart' },
  { path: '*', layout: false, component: './404' },
];
