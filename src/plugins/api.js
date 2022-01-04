export default function ({
  app,
  $axios,
  redirect
}, inject) {

  const API = {};

  //BV1m64y1C7XW
  //11887187
  //获取token需要client_id client_id需要B站认证 认证需要审核 B站连接还是挂超链接好了
  API.bilibiliAuth = function () {
    return $axios({
      url: '/bilibili/x/account-oauth2/v1/token',
      method: 'post',
      data: {
        mid: '11887187',
        pn: 1,
        ps: 25,
        index: 1
      },
      headers: {
        'encrypt': 1
      },
    })
  };
  API.test = function () {
    return $axios({
      url: '/bilibili/x/space/arc/search',
      method: 'get',
      data: {
        mid: '11887187',
        pn: 1,
        ps: 25,
        index: 1
      },
      headers: {
        'encrypt': 1
      },
    })
  };

  app.api = API;
  inject('api', API);

}
