import Layout from '@/layout'
export default {
  path: '/data',
  component: Layout,
  meta: { title: '数据统计' },
  children: [{
    path: '',
    component: () => import('@/views/m-data'),
    meta: { title: '数据报表', icon: 'el-icon-user' }
  }]
}
