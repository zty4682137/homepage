// 暂缓 有跨域问题 需要appkey及md5加密方法
import request from '@/utils/request'
// 获取推荐
export function authorRecommend(aid) {
  return request({
    url: '/bilibili/author_recommend',
    method: 'get',
    params: {
      aid: aid
    }
  })
}
// get番剧列表
export function bangumi(btype, weekday) {
  return request({
    url: '/bilibili/bangumi',
    method: 'get',
    params: {
      btype: btype,
      weekday: weekday
    }
  })
}
// 读取用户动态信息   https://www.bilibili.com/read/cv7914570/
export function userInfo(include_types, exclude_types, page, pagesize) {
  return request({
    url: '/bilibili/dynamic',
    method: 'get',
    params: {
      btype: btype,
      weekday: weekday
    }
  })
}
// // 获取分类
// export function getSubject (data) {
//   return request({
//     url: '/eduservice/subject/findAll',
//     method: 'get'
//   })
// }
// // 获取课程列表(免费付费)
// export function getCourseList (data) {
//   return request({
//     url: '/eduservice/course/page/' + data.page + '/' + data.size,
//     method: 'get',
//     params: {
//       status: 1,
//       price: data.price,
//       subjectId: data.subjectId
//     }
//   })
// }
// // 课程收藏取消
// //http://api.mnyketang.com/eduservice/collect/save/1305146054707478529
// //http://api.mnyketang.com/eduservice/collect/cancel/{courseId}
// export function collectFun(data) {
//   return request({
//     url: '/eduservice/collect/' + (data.ifCollect ? 'save':'cancel') + '/' + data.id,
//     method: 'post'
//   })
// }
