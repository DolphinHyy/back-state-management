import request from '@/utils/request'

export const getAuthorityListAPI = type => request({ url: '/rights/' + type })
