<template>
<div class="login-body">
    <div class="loginContainer">
        <!-- <img class="logo" src="@/assets/images/base/logo.png" @click="$router.push({name:'home'})"> -->
        <div class="loginBody card" v-loading="loading">
            <!-- <div class="tab">
                <span :class="{active:tab}" @click="tab=!tab">登录</span>
                <span :class="{active:!tab}" @click="tab=!tab">注册</span>
            </div> -->
            <i class="el-icon-circle-close" style="color:#aaa;font-size: 20px;cursor: pointer;position:absolute;top:20px;right:40px;" @click="$store.dispatch('toggleLoginBox')"></i>
            <div v-if="tab" class="login">
                <div v-if="loginTab" class="QRcode">
                    <p class="tip">请使用微信扫描二维码登陆/注册</p>
                    <img src="@/assets/images/login-addinfo/erweima.jpg" alt="微信扫一扫登陆">
                    <!-- <p class="tip">点击<span class="change" @click="changeHandle"><i class="iconfont icon-shuaxin"></i>切换</span>二维码</p> -->
                </div>
                <div v-if="!loginTab" class="password">
                    <el-form ref="loginForm" :model="loginForm">
                        <el-form-item label="">
                            <el-input
                                placeholder="手机号码"
                                v-model="loginForm.userName">
                                <i slot="prefix" class="el-input__icon el-icon-user"></i>
                            </el-input>
                        </el-form-item>
                        <el-form-item label="">
                            <el-input
                                type="password"
                                placeholder="密码"
                                v-model="loginForm.password">
                                <i slot="prefix" class="el-input__icon el-icon-lock"></i>
                            </el-input>
                        </el-form-item>
                    </el-form>
                    <div class="passTool">
                        <el-checkbox v-model="loginForm.rememberPass">记住密码</el-checkbox>
                        <a class="rlf-forg aTag" @click="findPassHandle">找回密码</a>
                    </div>
                    <el-button type="primary" size="small" @click="loginHandle">登  录</el-button>
                </div>
                <p class="privacy">登陆即同意码牛云<span class="aTag" @click="openPolicyHandle">《隐私政策》</span></p>
                <div class="loginTab"><span class="aTag" @click="loginTab=!loginTab">{{loginTab?'账号登录 >':'微信登录 >'}}</span></div>
            </div>
            <div v-if="!tab" class="register">
                <el-form ref="registerForm" :model="registerForm" label-position="top" :rules="registerRules">
                    <el-form-item label="手机号码" prop="phone">
                        <el-input
                            placeholder="手机号码"
                            v-model="registerForm.phone">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="短信验证码" prop="verify" class="verifyFormItem">
                        <el-input
                            placeholder="请输入短信验证码"
                            v-model="registerForm.verify">
                        </el-input>
                        <el-button type="primary" size="mini" @click="getVerifyCodeHandle" :disabled="!!isSending">{{isSending?(isSending+'s'):'获取验证码'}}</el-button>
                    </el-form-item>
                    <el-form-item label="" prop="policy">
                        <el-checkbox v-model="registerForm.policy">同意码牛云</el-checkbox><span class="aTag" @click="openPolicyHandle">《隐私政策》</span>
                    </el-form-item>
                </el-form>
                <el-button v-loading="loading" type="primary" size="small" @click="submitHandle" style="width:100%;">注  册</el-button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { getPhoneVerify,registe,login} from '@/api/user'
export default {
  components: {
  },
  data () {
    return {
      tab: true, // true登录 false注册
      loginTab: true, // true手机登录 false账号登录
      isSending: 0,
      showPass: false,
      loading: false,
      loginForm: {
        userName: '',
        password: '',
        rememberPass: true
      },
      registerForm: {
        phone:'',
        verify: '',
        policy: false
      },
      registerRules: {
        phone: [
          { validator: this.validatePhone, trigger: 'blur' }
        ],
        verify: [
          { validator: this.validateVerify, trigger: 'blur' }
        ],
        policy: [
          { validator: this.validatePolicy, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    phoneVerifyTimeInterval () {}, // 这个方法会被其他方法重写 留名称占位就行
    scanQRCodeTimeInterval () {}, // 这个方法会被其他方法重写 留名称占位就行
    changeHandle () {},
    loginHandle () {
      let data={
        "mobile": this.loginForm.userName,
        "password": this.loginForm.password
      }
      login(data).then(res => {
        // 拿到token后获取用户信息再跳转
        let token=res.token
        this.$store.dispatch('setToken', token)
        if (res.success&&token) {
          // 请求用户信息存入store
          const user = {
            name: '法外狂徒张三',
            avatar: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2739477788,1445439320&fm=26&gp=0.jpg'
          }
          this.$store.dispatch('setUser', user)
          // getUserInfo().then((res)=>{
          //   this.$store.dispatch('setUser', res.userData)
          // })
        }
        const lastRouteName = this.$store.state.lastRoute.name || 'home'
        this.$router.push({ name: lastRouteName })
      })
    },
    submitHandle () {
      this.loading = true
      this.$refs.registerForm.validate((valid) => {
        if (valid) {
          // registerForm: {
          //     nickName:'',
          //     phone:'',
          //     email:'',
          //     password: '',
          //     verify: '',
          //     policy: false
          //   }
          let data={
            "nickname": this.registerForm.nickName, 
            "mobile": this.registerForm.phone, 
            "password": this.registerForm.password, 
            "code": this.registerForm.verify
          }
          registe(data).then(res => {
            this.$message({type:'success',message:'注册成功'})
            this.loading = false
            // 注册后直接走登录流程
            this.loginForm= {
              userName: this.registerForm.phone,
              password: this.registerForm.password,
              rememberPass: true
            }
            this.loginHandle()
          })
        } else {
          return false
        }
      })
    },
    openPolicyHandle () {},
    findPassHandle () {},
    getVerifyCodeHandle () {
      const phone=this.registerForm.phone
      if (phone) {
        this.isSending = 60
        this.phoneVerifyTimeInterval = setInterval(() => {
          this.isSending -= 1
          if (this.isSending === 0) {
            clearInterval(this.phoneVerifyTimeInterval)
          }
        }, 1000)
        getPhoneVerify(phone).then((res)=>{
          this.$message({type:'success',message:'短信已发送'})
        })
      }
    },
    checkIfScanFun(){
      // 1查询是否已扫码方法 
      // 2若未扫码返回false 无动作
      // 3若已扫码首次登录 无token 关闭定时器 拿到openId并跳转至注册页面 注册完成后进入步骤4 
      // 4若扫码已注册 有token 关闭定时器  获取用户信息关闭弹窗
    },
    // 校验
    validatePhone (rule, value, callback) {
      var phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/

      if (value && phoneReg.test(value)) {
        callback()
      } else {
        callback(new Error('请输入手机号'))
      }
    },
    async validateVerify (rule, value, callback) {
      // 校验步骤放在注册中
      // const res = await getVerify({ verifyCode: value })
      // if (res) {
      //   callback()
      // } else {
      //   callback(new Error('验证码输入错误'))
      // }
      callback()
    },
    validatePolicy (rule, value, callback) {
      if (value) {
        callback()
      } else {
        callback(new Error('请先同意码牛云《隐私政策》'))
      }
    }
  },
  created(){
    // 创立时启动定时器查询是否已扫码
    this.scanQRCodeTimeInterval = setInterval(() => {
      this.checkIfScanFun()
    }, 1000)
  },
  beforeDestroy(){
    // 关闭定时器
    clearInterval(this.scanQRCodeTimeInterval)
  }
}
</script>
<style lang="scss">
.login-body {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 9999;
    background: rgba(0,0,0,.6);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    .loginContainer{
        width: 1280px;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        .logo{
            width: 340px;
            margin: 0 0 20px;
            cursor: pointer;
        }
        .loginBody{
            padding: 20px 60px;
            width: 500px;
            font-size: 14px;
            box-shadow: none !important;
            position: relative;
            .tab{
                font-size: 18px;
                cursor: pointer;
                text-align: center;
                line-height: 50px;
                display: flex;
                span{
                    display: inline-block;
                    width: 50%;
                    transition: all .2s;
                    border-bottom: 1px solid #E9E9E8;
                    &:hover,&.active{
                        color: #059ADB;
                        border-bottom: 1px solid #059ADB;
                    }
                }
            }
            .login{
                padding: 20px;
                position: relative;
                text-align: center;
                .QRcode{
                    .tip{
                        color: #93999f;
                        margin: 22px 0 16px;
                    }
                    img{
                        width: 180px;
                    }
                    .change{
                        color: #059ADB;
                    }
                }
                .password{
                    padding: 30px 10px 0;
                    .el-form{
                        text-align: left;
                    }
                    .passTool{
                        display: flex;
                        flex-flow: row column;
                        .rlf-forg{
                            margin-left: auto;
                        }
                    }
                    .el-button{
                        margin: 34.61px 0 0;
                        width: 100%;
                        // background: #059ADB;
                    }
                }
                .privacy{
                    margin: 10px 0;
                    color: #aaa;
                }
                .loginTab{
                    margin: 20px 0 0;
                }
            }
            .register{
                padding: 50px 30px 20px;
                .passwordInput{
                  .el-input__icon{
                    cursor: pointer;
                    &.active{
                      color: #059ADB;
                    }
                  }
                }
                .el-form-item__label{
                    line-height: 18px;
                }
                .verifyFormItem{
                    .el-form-item__content{
                        display: flex;
                        .el-button{
                            margin: 0 0 0 14px;
                            span{
                              display: inline-block;
                              width: 60px;
                            }
                        }
                    }
                }
            }
            .el-checkbox{
                font-weight: 400;
            }
        }
    }
    .aTag{
        cursor: pointer;
        color: #059ADB;
        &:hover{
            color: #0788c0;
        }
    }
    .login-bottom {
        border-top: 1px solid #ddd;
        width: 750px;
        margin: 30px 0;
        text-align: center;
        padding-top: 16px;
        font-size: 14px;
        color: #ccc;
    }
}
</style>
