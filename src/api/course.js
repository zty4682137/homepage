import request from '@/utils/request'
// 课程详情
export function getCourseDetail (courseId) {
  return request({
    url: '/eduservice/course/id/' + courseId,
    method: 'get'
  })
}
// 获取分类
export function getSubject (data) {
  return request({
    url: '/eduservice/subject/findAll',
    method: 'get'
  })
}
// 获取课程列表(免费付费)
export function getCourseList (data) {
  return request({
    url: '/eduservice/course/page/' + data.page + '/' + data.size,
    method: 'get',
    params: {
      status: 1,
      price: data.price,
      subjectId: data.subjectId
    }
  })
}
// 课程收藏取消
//http://api.mnyketang.com/eduservice/collect/save/1305146054707478529
//http://api.mnyketang.com/eduservice/collect/cancel/{courseId}
export function collectFun(data) {
  return request({
    url: '/eduservice/collect/' + (data.ifCollect ? 'save':'cancel') + '/' + data.id,
    method: 'post'
  })
}