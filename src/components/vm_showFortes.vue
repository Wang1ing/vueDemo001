<template>
  <div class="show_forte_div">
    <span class="the_forte_title">产品优势</span>
    <ul>
      <li v-for="item in forte_list" :key="item.the_info" class="main-item main-itemHover">
        <div class="infoBlockWrap">
          <div class="wrapBg"></div>
          <div class="infoBlock infoBlock-fasico">
            <div class="bg"></div>
            <div class="infoIcon">
              <img src="../assets/certificate.png" alt="暂无数据" style="width: 74px; height: 74px">
            </div>
            <div class="infoWrap">
              <div class="info-title">{{ item.the_title }}</div>
              <div class="info-desc">{{ item.the_info }}</div>
              <a class="set_button raised hoverable button" @click="callme()">
                <i class="anim"></i>
                <span>联系我们</span>
              </a>
            </div>
          </div>
          <div class="infoBlock infoBlock-normal">
            <div class="bg"></div>
            <div class="infoWrap">
              <div class="info-title">{{ item.the_say }}</div>
              <div class="info-desc">{{ item.the_text }}</div>
            </div>
          </div>
        </div>
        <div class="infoBlock-name">
          {{ item.the_title }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'vm_showForte',
  data () {
    return {
      forte_list: [{
        the_title: '专人接待',
        the_info: '专人服务，包教包会，快速上手',
        the_say: '服务全球',
        the_text: '可量化、可查证、可赔付的 XLA（eXperience Level Agreement）体验质量标准，保证主观体验达到优质水平'
      },
      {
        the_title: '健壮可靠',
        the_info: '接口丰富，信用可靠，安全便捷',
        the_say: '质量保障',
        the_text: '支持百万人实时互动大频道，网络架构设计能够应对10倍以上负荷，轻松应对流量突增'
      },
      {
        the_title: '优势第三',
        the_info: '情人总是分分合合而我们却越爱越深',
        the_say: '售后完善',
        the_text: '可量化、可查证、可赔付的 XLA（eXperience Level Agreement）体验质量标准，保证用户主观体验达到优质水平'
      },
      {
        the_title: '优势第四',
        the_info: '接口丰富，信用可靠，安全便捷',
        the_say: '系统可靠',
        the_text: '可量化、可查证、可赔付的 XLA（eXperience Level Agreement）体验质量标准，保证用户主观体验达到优质水平'
      },
      {
        the_title: '优势第五',
        the_info: '接口丰富，信用可靠，安全便捷',
        the_say: '信誉完美',
        the_text: '可量化、可查证、可赔付的 XLA（eXperience Level Agreement）体验质量标准，保证用户主观体验达到优质水平'
      }]
    }
  },
  methods: {
    callme () {
      alert('电话：***********' +
        '\n' + 'Twitter：***********' + '\n' + 'Ingstagram：' + '\n' + 'email：')
    }
  }
}
</script>

<style scoped>
.show_forte_div {
  background: #fbfcff;
  width: 100%;
}

.the_forte_title {
  display: block;
  text-align: center;
  font-weight: initial;
  padding-top: 30px;
  padding-bottom: 40px;
  letter-spacing: 20px;
  font-size: 25px;
}

ul {
  display: flex;
  justify-content: center;
  width: 100%;
}

li {
  list-style-type: none;
  font-size: 16px;
  width: 100px;
}

li:not(:first-child) {
  margin-left: 50px;
}

img {
  border: 0
}

.main-item {
  display: inline-block;
  margin: 0 69px 110px 69px;
  width: 146px;
  position: relative;
  height: 250px;
}

.infoBlockWrap .infoBlock {
  width: 146px;
  height: 146px;
  transform-origin: center center;
  position: relative;
  overflow: visible
}

.infoBlockWrap .bg {
  width: 146px;
  height: 146px;
  background: #27c9f8;
  background: linear-gradient(145deg, #06e5f8, #3eb5f8);
  position: absolute;
  z-index: 0;
  left: 0;
  top: 0;
  border-radius: 73px;
  transition: all 0.3s;
  transform-origin: center center;
  overflow: visible
}

.infoBlockWrap .infoBlock-normal .bg {
  background: transparent;
}

.infoBlockWrap .infoIcon {
  width: 90px;
  height: 70px;
  position: absolute;
  left: 56%;
  top: 47%;
  margin-left: -45px;
  margin-top: -35px;
  transition: opacity .3s
}

.bg {
  align-content: center;
  justify-content: center;
}

.main-itemHover .infoBlockWrap:hover .infoBlock-fasico .bg {
  height: 159px;
  width: 236px;
  left: -45px;
  top: -13px;
  border-radius: 20px 20px 0 0/20px 20px 0 0;
  background: #06e5f8 linear-gradient(90deg, #3eb5f8, #06e5f8);
}

.main-itemHover .infoBlockWrap-listedBrand:hover .infoBlock-fasico .bg {
  background: #64aaf2 linear-gradient(90deg, #64edea, #64aaf2);
}

.main-itemHover .infoBlockWrap-funcRich:hover .infoBlock-fasico .bg {
  background: #f8788b linear-gradient(90deg, #f8c84c, #f8788b);
}

.main-itemHover .infoBlockWrap-oneKey:hover .infoBlock-fasico .bg {
  background: #f65589 linear-gradient(90deg, #f26768, #f65589);
}

.main-itemHover .infoBlockWrap-model:hover .infoBlock-fasico .bg {
  background: #c467ff linear-gradient(90deg, #fe80fb, #c467ff);
}

.main-itemHover .infoBlockWrap-site3to1:hover .infoBlock-fasico .bg {
  background: #38cf7a linear-gradient(90deg, #32dab7, #38cf7a);
}

.main-itemHover .infoBlockWrap-easeMaintain:hover .infoBlock-fasico .bg {
  background: #b376ff linear-gradient(90deg, #44aaf8, #b376ff);
}

.main-itemHover .infoBlockWrap-superSevice:hover .infoBlock-fasico .bg {
  background: #6cbaf8 linear-gradient(90deg, #7ee1f9, #6cbaf8);
}

.main-itemHover .infoBlockWrap:hover .infoBlock-normal .bg {
  height: 159px;
  width: 236px;
  left: -45px;
  top: 0;
  bottom: -13px;
  background: #fff;
  border-radius: 0 0 20px 20px/ 0 0 20px 20px
}

.infoBlockWrap {
  position: relative;
  width: 146px;
  height: 146px
}

.infoBlockWrap .wrapBg {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 0;
  transition: all .3s;
  overflow: visible
}

.main-itemHover .infoBlockWrap:hover .wrapBg {
  width: 236px;
  height: 350px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);
  left: -45px;
  top: -13px;
  border-radius: 20px
}

.infoBlockWrap .infoWrap {
  position: absolute;
  top: 0;
  z-index: 2;
  text-align: center;
  width: 238px;
  left: -45px;
  transition: all .3s;
  opacity: 0;
  filter: alpha(opacity=0)
}

.infoBlock-fasico .infoWrap {
  top: -13px;
  text-align: center
}

.infoBlockWrap-listedBrand .bg {
  background-color: #64aaf2;
  background: linear-gradient(145deg, #64edea, #64aaf2)
}

.infoBlockWrap-listedBrand:hover .infoBlock-fasico .bg {
  background: linear-gradient(90deg, #64edea, #64aaf2)
}

.infoBlockWrap-funcRich .bg {
  background-color: #f8788b;
  background: linear-gradient(145deg, #f8c84c, #f8788b)
}

.infoBlockWrap-funcRich:hover .infoBlock-fasico .bg {
  background: linear-gradient(90deg, #f8c84c, #f8788b)
}

.infoBlockWrap-oneKey .bg {
  background-color: #f65589;
  background: linear-gradient(145deg, #f26768, #f65589)
}

.infoBlockWrap-oneKey:hover .infoBlock-fasico .bg {
  background: linear-gradient(90deg, #f26768, #f65589)
}

.infoBlockWrap-model .bg {
  background-color: #c467ff;
  background: linear-gradient(145deg, #fe80fb, #c467ff)
}

.infoBlockWrap-model:hover .infoBlock-fasico .bg {
  background: linear-gradient(90deg, #fe80fb, #c467ff)
}

.infoBlockWrap-site3to1 .bg {
  background-color: #38cf7a;
  background: linear-gradient(145deg, #32dab7, #38cf7a)
}

.infoBlockWrap-site3to1:hover .infoBlock-fasico .bg {
  background: linear-gradient(90deg, #32dab7, #38cf7a)
}

.infoBlockWrap-easeMaintain .bg {
  background-color: #b376ff;
  background: linear-gradient(145deg, #44aaf8, #b376ff)
}

.infoBlockWrap-easeMaintain:hover .infoBlock-fasico .bg {
  background: linear-gradient(90deg, #44aaf8, #b376ff)
}

.infoBlockWrap-superSevice .bg {
  background-color: #6cbaf8;
  background: linear-gradient(145deg, #7ee1f9, #6cbaf8)
}

.infoBlockWrap-superSevice:hover .infoBlock-fasico .bg {
  background: linear-gradient(90deg, #7ee1f9, #6cbaf8)
}

.infoBlock .info-title {
  font-size: 16px;
  padding-top: 45px;
  padding-bottom: 25px;
  line-height: 1
}

.infoBlock .info-desc {
  font-size: 13px;
  padding: 0 10px;
  line-height: 1.8;
  margin-top: -7px
}

.infoBlock .button {
  background: #fff;
  display: inline-block;
  width: 100px;
  height: 30px;
  line-height: 30px;
  border-radius: 15px;
  z-index: 3;
  color: #2f82ff
}

.infoBlock-fasico .info-title {
  font-size: 16px;
  padding-top: 35px;
  padding-bottom: 18px;
  line-height: 1
}

.infoBlock-fasico .info-desc {
  font-size: 13px;
  line-height: 1.8;
  margin-top: -7px;
  padding: 0 10px 16px;
}

.infoBlock-fasico .button.raised {
  background: transparent;
  color: #fff;
  display: block;
  margin: 0 auto;
  width: 100px;
  height: 30px;
  line-height: 30px;
  border-radius: 15px;
  z-index: 3;
  font-size: 12px
}

.infoBlock-fasico-mulLine .info-title {
  padding-top: 35px;
  padding-bottom: 10px
}

.infoBlock-fasico-mulLine .info-desc {
  font-size: 13px;
  line-height: 1.8;
  margin-top: -7px;
  padding: 0 10px 10px;
}

.infoBlock-fasico .button.raised:hover {
  background-color: #fff;
  color: #666
}

.infoBlock-fasico .button.raised:hover .anim {
  display: none
}

.infoBlock-normal .info-title {
  color: #333
}

.infoBlock-normal .info-desc {
  color: #666
}

.infoBlock-fasico .info-title, .infoBlock-fasico .info-desc {
  color: #fff
}

.main-itemHover .infoBlockWrap:hover .infoIcon {
  opacity: 0;
  filter: alpha(opacity=0)
}

.main-itemHover .infoBlockWrap:hover .infoWrap {
  opacity: 1;
  filter: alpha(opacity=100)
}

.infoBlock-name {
  padding-top: 45px;
  transition: opacity .1s;
  opacity: 1;
  text-align: center;
  font-size: 16px;
  color: #333;
  line-height: 1;
  position: absolute;
  top: 146px;
  width: 100%;
  left: 0
}

.main-itemHover:hover .infoBlock-name {
  opacity: 0;
  filter: alpha(opacity=0)
}

.set_button {
  position: relative;
  font-weight: 400;
  text-align: center;
  line-height: 70px;
  font-size: 21px;
  overflow: hidden;
  z-index: 0;
  cursor: pointer;
  color: #fff;
  border-radius: 35px;
  border: solid #fff 1px;
}

.set_button.raised {
  -moz-transition: all .1s;
  -o-transition: all .1s;
  -webkit-transition: all .1s;
  transition: all .1s
}

</style>
