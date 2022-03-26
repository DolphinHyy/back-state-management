import request from '@/utils/request'

export const getRolesListAPI = () => request({ url: '/roles' })

export const setRoleAPI = data => request({ url: '/roles/' + data.id, method: 'PUT', data })
