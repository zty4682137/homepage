import request from '@/utils/request'

export function homePageData (data) {
  return request({
    url: '/eduservice/index/all',
    method: 'get',
    params: data
  })
}
