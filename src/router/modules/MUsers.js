import Layout from '@/layout'
export default {
  path: '/users',
  component: Layout,
  // alwaysShow: true,
  meta: { title: '用户管理' },
  children: [{
    path: '',
    component: () => import('@/views/m-users'),
    meta: { title: '用户列表', icon: 'el-icon-user' }
  }]
}
