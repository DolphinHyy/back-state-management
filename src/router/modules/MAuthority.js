import Layout from '@/layout'
export default {
  path: '/authority',
  component: Layout,
  meta: { title: '权限管理' },
  children: [{
    path: '',
    component: () => import('@/views/m-authority'),
    meta: { title: '角色列表', icon: 'el-icon-user' }
  }, {
    path: 'authority-list',
    component: () => import('@/views/m2-authority-list'),
    meta: { title: '权限列表', icon: 'el-icon-user' }
  }]
}

