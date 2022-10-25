<template>
  <ul class="showFeature">
    <li v-for="(item , index) in linkList" :key="item.the_title" @click="change_banner(index)" class="tag_li">
      <div class="title_div" id="title_div">
        <span class="the_title">{{ item.the_title }}</span>
        <br>
        <span class="the_title_info">{{ item.the_title_info }}</span>
      </div>
    </li>
  </ul>
</template>
<script>
import msg from './msg'

export default {
  name: 'vm_showFeature',
  data () {
    return {
      linkList: [{the_title: '实现互动在毫秒间', the_title_info: '极速服务器，'},
        {the_title: '全链路加速保护', the_title_info: '优良线路保护'},
        {the_title: '专人客服指导', the_title_info: '专人专线'},
        {the_title: 'L+店铺统一管理', the_title_info: '网站对接多平台'},
        {the_title: 'L+店铺统一管理', the_title_info: '网站对接多平台'},
        {the_title: 'L+店铺统一管理', the_title_info: '网站对接多平台'},
        {the_title: 'L+店铺统一管理', the_title_info: '网站对接多平台'}]
    }
  },
  methods: {
    change_banner (index) {
      msg.$emit('get_num', index)
      for (let i = 0; i < document.getElementsByClassName('tag_li').length; i++) {
        if (i === index) {
          document.getElementsByClassName('tag_li')[i].setAttribute('style', '    background-color: hsla(0, 0%, 100%, .4);  width: 190px;')
        } else {
          document.getElementsByClassName('tag_li')[i].setAttribute('style', '    background-color: rgba(255, 255, 255, 0);  width: 180px;')
        }
      }
    }
  }
}
</script>

<style scoped>
.showFeature {
  margin-top: -112px;
}

ul {
  height: 112px;
  background-color: white;
  justify-content: center;
  display: flex;
  width: 100%;
}

li {
  position: relative;
  z-index: 10;
  width: 180px;
  height: 110px;
  list-style-type: none;
  font-size: 16px;
  border: rgba(255, 255, 255, 0) solid 2px;
  background-color: rgba(255, 255, 255, 0);
  border-radius: 10px;
  box-shadow: 0 0 15px rgb(255, 255, 255)
}

.title_div {
  margin-top: 10%;
  padding: 20px 20px 20px 20px;
}

.the_title {
  margin: auto;
  position: relative;
  z-index: 10;
  font-weight: bold;
  font-size: 17px;
}

.the_title_info {
  font-size: 12px;
  color: #5c5f61;
  position: relative;
  line-height: 10px;
  letter-spacing: 3px;
  z-index: 10;
  text-align: left;
}

/*li:hover{*/
/*  animation: li_move .3s ease 1;*/
/*  animation-fill-mode: forwards;*/
/*}*/
@keyframes li_move {
  100% {
    background-color: hsla(0, 0%, 100%, .4);
    width: 190px;
  }
}

/*.water{*/
/*  opacity: 0.3;*/
/*  position: absolute;*/
/*  z-index: 9;*/
/*  bottom: 0;*/
/*  width: 100%;*/
/*  !*background-color: #21D4FD;*/
/*background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);*/
/**!*/
/*  background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);*/
/*  border-bottom-right-radius: 10px;*/
/*  border-bottom-left-radius: 10px;*/
/*  animation: rise 12s linear forwards;*/
/*  overflow: hidden;*/
/*}*/
/*@keyframes rise{*/
/*  0%{*/
/*    height: 100%;*/
/*  }*/

/*  100%{*/
/*    height: 100%;*/
/*    filter: hue-rotate(360deg);*/
/*  }*/
/*}*/
/*.water::after{*/
/*  content: '';*/
/*  position: absolute;*/
/*  z-index: 9;*/
/*  top: -370px;*/
/*  left: -100px;*/
/*  width: 400px;*/
/*  height: 400px;*/
/*  border-radius: 40%;*/
/*  background-color: white;*/
/*  animation: move 5s linear infinite;*/
/*}*/
/*@keyframes move{*/
/*  100%{*/
/*    transform: rotate(360deg);*/
/*  }*/
/*}*/
/*.water::before{*/
/*  content: '';*/
/*  position: absolute;*/
/*  z-index: 9;*/
/*  top: -360px;*/
/*  left: -100px;*/
/*  width: 400px;*/
/*  height: 400px;*/
/*  border-radius: 60%;*/
/*  background-color: rgba(255, 255, 255,0.1);*/
/*  animation: move2 5s linear infinite;*/
/*}*/
/*@keyframes move2{*/
/*  100%{*/
/*    transform: rotate(360deg);*/
/*  }*/
/*}*/
/*!*.shadow{*!*/
/*!*  position: absolute;*!*/
/*!*  bottom: -8px;*!*/
/*!*  left: -3%;*!*/
/*!*  width: 106%;*!*/
/*!*  background-image: linear-gradient(90deg, #74EBD5 0%, #9FACE6);*!*/
/*!*  z-index: -1;*!*/
/*!*  animation: bianse 12s linear forwards;*!*/
/*!*}*!*/
/*@keyframes bianse{*/
/*  0%{*/
/*    height: 80%;*/
/*    filter: hue-rotate(0deg) blur(10px);*/
/*  }*/

/*  100%{*/
/*    height: 80%;*/
/*    filter: hue-rotate(360deg) blur(10px);*/
/*  }*/
/*}*/
/*li:nth-child(2),*/
/*li:nth-child(3),*/
/*li:nth-child(4){*/
/*  margin-left: 80px;*/
/*}*/

</style>
