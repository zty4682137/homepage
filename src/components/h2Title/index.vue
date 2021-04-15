<template>
<span title-type="h2" class="header__span" style="transform:scale(1.0);">
    <h2 tid="tid-GXsRFk" class="header__dev" id="hid-bPTBZQ">
    <span style="">
        <b class="dev__fe"><i>{{num1}}</i></b><span class="dev__slash">|</span><b class="dev__ux"><i>{{num2}}</i></b>
    </span>
    <b class="dev__developer"><span class="dev__title">{{title}}</span></b>
    </h2>
</span>
</template>

<script>
export default {
    data () { 
        return {
        }
    },
    props:{
        num1: {
            type: Number,
            default: () => {
                return 1
            }
        },
        num2: {
            type: Number,
            default: () => {
                return 1
            }
        },
        title: {
            type: String,
            default: () => {
                return '标题'
            }
        },
    },
  watch: {
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.header__span {
    user-select: none;
    cursor: default;
    position: relative;
    display: block;
    .header__dev {
        font-family: Lato,Arial,sans-serif;
        font-weight: 300;
        position: relative;
        transition-delay: .5s;
        color: #222;
        font-size: 28px;
        height: 50px;
        line-height: 28px;
        left: -20px;
        .dev__fe,.dev__ux {
            overflow: hidden;
            transform: rotateZ(22deg);
            width: 50px;
            height: 50px;
            position: absolute;
            i {
                transition: all .6s cubic-bezier(.555,-.375,0,1.615);
                font-style: normal;
                line-height: 50px;
                font-weight: 400;
                transform: rotateZ(-22deg);
                color: #333;
                width: 50px;
                height: 50px;
                position: absolute;
            }
        }
        .dev__fe{
            top: -11px;
            left: 11px;
            text-align: right;
            direction: rtl;
            i{
                text-indent: -9px;
                top: 13px;
                right: 0;
            }
        }
        .dev__ux{
            top: 0;
            left: 64px;
            text-align: left;
            i{
                text-indent: -6px;
                top: 2px;
                left: -3px;
            }
        }
        .dev__slash {
            color: #5d69a5;
            top: 8px;
            left: 57px;
            font-size: 35px;
            transition: all .6s cubic-bezier(.555,-.375,0,1.615);
            font-weight: 300;
            position: absolute;
            z-index: 1;
            transform: rotateZ(22deg);
        }
        .dev__developer {
            top: 12px;
            left: 90px;
            min-height: 34px;
            transition: all .6s cubic-bezier(.555,-.375,0,1.615);
            position: absolute;
            width: 75vw;
            font-weight: 700;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
    }
    &:hover {
        .dev__fe i {
            text-indent: 5px!important;
        }
        .dev__slash {
            transform: scale(.9) rotateZ(0);
        }
        .dev__ux i {
            text-indent: 11px!important;
        }
        .dev__developer {
            transform: translateX(15px);
            opacity: .6;
        }
    }
}
</style>
