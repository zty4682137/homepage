import request from '@/utils/request'
// 获取手机验证码
export function getPhoneVerify(phoneNum) {
  return request({
    url: '/smsservice/send/'+phoneNum,
    method: 'get'
  })
}
// 注册
// api.mnyketang.com/ucenterservice/member/regist
// {
//   "nickname": "用户昵称", //必须字段
//   "mobile": "手机号码", ////必须字段
//   "password": "用户密码", ////必须字段
//   "code": "验证码" ////必须字段
// }
export function registe(data) {
  return request({
    url: '/ucenterservice/member/regist',
    method: 'post',
    data
  })
}
// 登录 ucenterservice/member/login
// {
//   "mobile": "手机号码",
//   "password": "密码"
// }
export function login (data) {
  return request({
    url: '/ucenterservice/member/login',
    method: 'post',
    data
  })
}
// export function logout () {
//   return request({
//     url: '/api/user/logout',
//     method: 'post'
//   })
// }
// export function getVerify (data) {
//   return request({
//     url: '/api/user/verify',
//     method: 'post',
//     data
//   })
// }
// export function getInfo (token) {
//   return request({
//     url: '/api/user/info',
//     method: 'get',
//     params: { token }
//   })
// }
// export function registe (data) {
//   return request({
//     url: '/api/user/registe',
//     method: 'post',
//     data
//   })
// }
