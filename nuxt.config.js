export default {
  srcDir: 'src/',
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  // mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  server: {
    port: 8090, // default: 3000
    host: '0.0.0.0' // default: localhost,
  },
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'baidu-site-verification',
        content: 'B2IiL7rj1k'
      },
      {
        name: 'Generator',
        content: 'EditPlus®'
      },
      {
        name: 'Author',
        content: 'zhangtianyang'
      },
      {
        name: 'Keywords',
        content: '前端 个人 张天阳 '
      },
      {
        name: 'Description',
        content: ''
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes'
      },
      {
        name: 'baidu-site-verification',
        content: 'B2IiL7rj1k'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  /*
   ** Global CSS
   */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/styles/index.scss'
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  //在ssr中@nuxt/axios和axios不共通 只能使用其中一种来做proxy
  plugins: [
    '@/plugins/element',
    '@/plugins/vueVideoPlayer',
    '@/plugins/api',
    // '@/plugins/request',
    // '@/plugins/floatBall',
    '@/components/globalComponents',
    {
      src: '@/plugins/toolBox',
      ssr: false
    }
    // 'vue-video-player'
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/router'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/axios', '@nuxtjs/proxy', '@nuxtjs/dotenv'], //dotenv从文件加载到环境变量
  axios: {
    proxy: true, // 表示开启代理
    prefix: '/', // 表示给请求url加个前缀 /api
    credentials: true // 表示跨域请求时是否需要使用凭证
  },
  proxy: {
    // '/': {
    //   target: 'http://192.168.1.3:8090', // 目标接口域名
    //   changeOrigin: false, // 表示是否跨域
    // },
    // 'api.bilibili.cn/': {
    //   target: 'http://api.bilibili.cn', // 目标接口域名
    //   changeOrigin: true, // 表示是否跨域
    //   // pathRewrite: {
    //   //   // '^/bilibili': '/', // 把 /api 替换成 /
    //   // }
    // },
    // '/bilibili': {
    //   target: 'http://api.bilibili.cn', // 目标接口域名
    //   changeOrigin: true, // 表示是否跨域
    //   pathRewrite: {
    //     '^/bilibili': '/', // 把 /api 替换成 /
    //   }
    // }
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    transpile: [/^element-ui/],
  },
  generate: {
    dir: 'docs', // 这里由于github固定使用docs这个文件
    fallback: 'index.html',
    subFolders: false
  }
}
