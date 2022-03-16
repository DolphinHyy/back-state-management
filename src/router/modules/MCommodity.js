import Layout from '@/layout'
export default {
  path: '/commodity',
  component: Layout,
  meta: { title: '商品管理' },
  children: [{
    path: '',
    component: () => import('@/views/m-commodity'),
    meta: { title: '商品列表', icon: 'el-icon-user' }
  }, {
    path: 'para',
    component: () => import('@/views/m2-commodity-para'),
    meta: { title: '分类参数', icon: 'el-icon-user' }
  }, {
    path: 'class',
    component: () => import('@/views/m2-commodity-class'),
    meta: { title: '商品分类', icon: 'el-icon-user' }
  }]
}
