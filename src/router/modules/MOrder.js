import Layout from '@/layout'
export default {
  path: '/order',
  component: Layout,
  meta: { title: '订单管理' },
  children: [{
    path: '',
    component: () => import('@/views/m-order'),
    meta: { title: '订单列表', icon: 'el-icon-user' }
  }]
}
