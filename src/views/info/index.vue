<template>
  <div class="info">
    <personalAccordion
      :cardObjArr="cardObjArr"
      @changeActive="changeActiveHandle"
      style="margin: 52px 0 42px"
    />
    <div class="infoBottom">
      <div
        style="text-align: center"
        class="infoCtn"
        :class="{ active: accordionNum === 0 }"
      >
        <div class="downloadBtn">
          <el-dropdown @command="downloadHandle">
            <i class="el-icon-download"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="doc"
                >张天阳的简历.doc</el-dropdown-item
              >
              <el-dropdown-item command="pdf"
                >张天阳的简历.pdf</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div style="width: 1280px">
          <h2 class="introAnch1" style="margin: 40px auto 20px">个人信息</h2>
          <div class="splitLine"></div>
          <p>
            Job：{{ personalInfo.job }} {{ workedTime }}年
            <br />
            Phone：{{ personalInfo.phone }} &nbsp;&nbsp;&nbsp; Email：{{
              personalInfo.mail
            }}
          </p>
          <h2 class="introAnch1" style="margin: 40px auto 20px">工作经验</h2>
          <div class="splitLine"></div>
          <div
            v-for="(item, index) in comList"
            :key="'1-' + index"
            class="jobPanel"
          >
            <h4 class="title">
              {{ item.name }}
            </h4>
            <p class="subTitle">
              <span>{{ item.department && "部门：" + item.department }}</span>
              <span>{{ item.job }}</span>
              <span>{{ item.startTime }}-{{ item.endTime }}</span>
            </p>
            <!-- <p>{{ item.tech }}</p> -->
            <p>{{ item.detail }}</p>
          </div>
          <h2 class="introAnch1" style="margin: 40px auto 20px">项目经验</h2>
          <div class="splitLine"></div>
          <div
            v-for="(item, index) in projectedList"
            :key="'2-' + index"
            class="proPanel"
          >
            <h4 class="comName">{{ item.comName }}</h4>
            <div v-for="(ite, inde) in item.proList" :key="inde" class="proCtn">
              <h5 class="name">
                {{ ite.proName }}
              </h5>
              <span class="time">{{ ite.startTime }}-{{ ite.endTime }}</span>
              <!-- <p>{{ ite.detail }}</p> -->
            </div>
          </div>
          <h2 class="introAnch1" style="margin: 40px auto 20px">其他</h2>
          <div class="splitLine"></div>
          <p
            v-for="(item, index) in workOther"
            :key="'3-' + index"
            style="margin: 0 0 20px"
          >
            {{ item }}
          </p>
        </div>
      </div>
      <div
        style="text-align: center"
        class="infoCtn"
        :class="{ active: accordionNum === 1 }"
      >
        <div style="width: 1280px">
          <h2 class="introAnch2" style="margin: 40px auto 20px">其他账号</h2>
          <div class="splitLine"></div>
          <p>b站 git</p>
          <h2 class="introAnch2" style="margin: 40px auto 20px">其他证件</h2>
          <div class="splitLine"></div>
          <p>n2 静水救生员</p>
          <h2 class="introAnch2" style="margin: 40px auto 20px">爱玩啊</h2>
          <div class="splitLine"></div>
          <p>老rts 老二次元</p>
        </div>
      </div>
    </div>
    <elevator v-show="accordionNum === 0" :mark="'introAnch1'" />
    <elevator v-show="accordionNum === 1" :mark="'introAnch2'" />
    <!-- <h2Title :num1="1" :num2="9" :title="'标题很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长'"/> -->
  </div>
</template>

<script>
import avatar1 from '@/assets/images/avatar/zty.jpg'
import avatar from '@/assets/images/avatar/avatar.jpg'
// import CVdoc from '@/assets/CV/张天阳的简历.doc'
// import CVpdf from '@/assets/CV/张天阳的简历.pdf'
export default {
  name: 'info',
  components: {
  },
  data() {
    return {
      accordionNum: 0,
      cardObjArr: [{
        name: '张天阳',
        detail: '一个前端',
        src: avatar1
      }, {
        name: '张天阳',
        detail: '是谁来自山川与湖海 却囿于昼夜 厨房与爱',
        src: avatar
      }],
      personalInfo: {
        job: '前端开发工程师',
        phone: '13146556360',
        mail: '505725253@qq.com',
      },
      comList: [
        {
          name: '北京字节跳动科技有限公司',
          department: 'EA交付',
          job: '高级前端开发工程师',
          tech: 'HTML5 Javascript Vue',
          startTime: '2019.05',
          endTime: '2020.08',
          detail: '通过柯莱特集团入职，在字节跳动EA部门财务组、行政组参与项目。主要负责项目开荒、排期、UI产品协调、解决方案、分配前端工作任务、开发。期间参与项目主要以VUE为主、及少量飞书移动端H5移动端项目。'
        },
        {
          name: '北京赞同科技发展有限公司',
          department: '解决方案',
          job: '高级前端开发工程师',
          tech: 'VUE HTML5 Node.js',
          startTime: '2017.02',
          endTime: '2019.05',
          detail: '公司主营业务为银行服务与架构管理软件，主要为柜员机具、大堂经理使用手持PAD、自助设备终端。面向全国各地不同的银行市场提交开发版本并提供解决方案和技术支持。参与程序架构的部分设计，参与甲方的需求收集，代码开发，技术面试。'
        },
        {
          name: '金星软件',
          department: '',
          job: 'WEB前端',
          tech: 'JavaScript HTML5 Javascript',
          startTime: '2016.12',
          endTime: '2017.02',
          detail: '以H5游戏开发为主要业务的外包小团队，团队成员主要以unity/php/js为主，承接过天津麻将、电子大屏幕模拟app等等小型项目。工作职责主要为代码编写、对部分困难提供解决方案、项目维护。'
        },
        {
          name: '北京拓尔思信息技术股份有限公司',
          department: '',
          job: 'WEB前端',
          tech: 'HTML CSS bootstrap',
          startTime: '2015.10',
          endTime: '2016.06',
          detail: '学习前端技术基础，了解项目流程，完成外包项目中的页面布局和样式的实现。'
        }
      ],
      projectedList: [
        {
          comName: "北京字节跳动科技有限公司",
          proList: [
            {
              proName: '资金支付中台',
              startTime: '2019.11',
              endTime: '至今',
              detail: ''
            },
            {
              proName: 'GAIA',
              startTime: '2019.10',
              endTime: '2019.11',
              detail: ''
            },
            {
              proName: '第三方需求管理（绿洲）',
              startTime: '2019.08',
              endTime: '2019.10',
              detail: ''
            },
            {
              proName: '财务管理平台（财务protal）',
              startTime: '2019.08',
              endTime: '2019.10',
              detail: ''
            },
            {
              proName: '餐饮管理系统',
              startTime: '2019.05',
              endTime: '2019.07',
              detail: ''
            },
            {
              proName: '字节跳动VUE前端公共模板',
              startTime: '2019.05',
              endTime: '2019.06',
              detail: ''
            }
          ]
        },
        {
          comName: "北京赞同科技发展有限公司",
          proList: [
            {
              proName: '柳州银行STM',
              startTime: '2019.03',
              endTime: '2019.04',
              detail: ''
            },
            {
              proName: '江南农商银行会议VTM/物料管理系统',
              startTime: '2018.11',
              endTime: '2019.03',
              detail: ''
            },
            {
              proName: 'PCVA',
              startTime: '2018.04',
              endTime: '2018.11',
              detail: ''
            },
            {
              proName: 'AUI-SS样式库',
              startTime: '2018.03',
              endTime: '2018.04',
              detail: ''
            },
            {
              proName: 'C端（银行自助机具）模板开发',
              startTime: '2018.01',
              endTime: '2018.03',
              detail: ''
            },
            {
              proName: '中信银行HERS系统',
              startTime: '2017.06',
              endTime: '2018.01',
              detail: ''
            },
            {
              proName: '银行间区块链清算系统demo',
              startTime: '2017.02',
              endTime: '2017.06',
              detail: ''
            }
          ]
        },
        {
          comName: "金星软件",
          proList: [
            {
              proName: 'H5天津麻将端游',
              startTime: '2016.6',
              endTime: '2016.10',
              detail: ''
            },
            {
              proName: '电子屏幕上墙展示',
              startTime: '2016.6',
              endTime: '2016.10',
              detail: ''
            }
          ]
        },
        {
          comName: "北京拓尔思信息技术股份有限公司",
          proList: [
            {
              proName: '某幼教网站首页',
              startTime: '2015.10',
              endTime: '2016.6',
              detail: ''
            },
          ]
        }
      ],
      workOther: [
        '2020.09合伙创办西安码牛云课堂',
        'acca认证',
        'UI相关设计原理及规范'
      ]
    }
  },
  methods: {
    changeActiveHandle(index) {
      this.accordionNum = index
    },
    downloadHandle(flag) {
      this.$download('CV/张天阳的简历.' + flag, '张天阳的简历.' + flag)
    }
  },
  computed: {
    workedTime() {
      return new Date().getFullYear() - 2015
    }
  }
}
</script>
<style lang="scss" scoped>
.infoBottom {
  display: flex;
  flex-flow: row nowrap;
  [class^="introAnch"] {
    font-weight: 400;
    letter-spacing: 2px;
    color: #3a3a3a;
  }
  .infoCtn {
    flex-shrink: 0;
    width: 0%;
    overflow: hidden;
    transition: width 0.3s;
    position: relative;
    &.active {
      width: 100%;
    }
    .downloadBtn {
      position: absolute;
      right: 0;
      top: 40px;
      i {
        font-size: 30px;
      }
    }
    .jobPanel {
      padding: 0 0 80px;
      .title {
        font-size: 18px;
        font-weight: 400;
        color: #000;
        // display: inline-block;
        // border-bottom: 1px solid #e3e3e3;
        padding: 0px 20px 2px;
        margin: 0 0 6px;
      }
      .subTitle {
        font-size: 14px;
        color: #b2b2b2;
        margin: 0 0 20px;
      }
    }
    .proPanel {
      margin: 20px 0 40px;
      .comName {
        font-weight: 400;
        margin: 0 0 16px;
        font-size: 18px;
      }
      .proCtn {
        display: flex;
        justify-content: center;
        margin: 0 0 8px;
        .name {
          width: 50%;
          text-align: right;
          padding: 0 10px;
          box-sizing: border-box;
          font-weight: 400;
          font-size: 14px;
        }
        .time {
          font-size: 14px;
          width: 50%;
          padding: 0 10px;
          box-sizing: border-box;
          text-align: left;
          // color: #b2b2b2;
        }
      }
    }
  }
}
</style>
