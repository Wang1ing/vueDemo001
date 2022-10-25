<template>
  <div class="header" id="header">
    <div class="the_header_div">
      <img src="../assets/logo.png" class="the_web_logo" alt="zwsj">
      <ul class="header_ul">
        <li v-for="(item , index) in linkList" :key="index" class="menus"
            @mouseover="theinvert(index)"
            @mouseout="item.subshow=!item.subshow">
          <img src="../assets/guide_top.png" class="show_info_btn" alt="暂无数据">
          <a :href="item.href" target="_blank" style="line-height: 50px">{{ item.the_name }}</a>
          <ul v-show="item.subshow" class="menus_feature">
            <li v-for="(subMenus , i1ndex ) in item.submenu" :key="i1ndex" class="subMenus">
              <a href="#" class="name_title">{{ subMenus.name_title }}</a>
              <ul>
                <li v-for="(feaTures , i2ndex) in subMenus.title_feature" :key="i2ndex" class="feaTures">
                  <img :src="feaTures.img_url" style="width: 24px;height: 24px">
                  <a href="#">{{ feaTures.feature }}</a>
                  <span style="margin-top: 5px">{{ feaTures.feature_info }}</span>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      <!--      <img src="../assets/align-justify.png" class="the_head_menu" alt="暂无数据" @mouseover="loginshow=!loginshow" @mouseout="loginshow=!loginshow">-->
      <a href="#" id="login_btn">登录</a>
      <button class="register_btn">免费体验</button>
      <img src="../assets/profile_photo.png" class="the_profile_photo" alt="暂无数据">
    </div>
  </div>
</template>

<script>
export default {
  /*
  * 网站
  * 答疑系统
  * springMvc
  * javaweb+vue的结合
  * springboot+springmvc
  * 简历
  * */
  name: 'vm_Header',
  data () {
    return {
      loginshow: false,
      linkList: [{
        the_name: '关于我们',
        href: '',
        subshow: false,
        submenu: [{
          name_title: '实时互动基础能力',
          url: '',
          title_feature: [{
            feature: '语音通话',
            feature_info: '一对一，多人实时通话',
            img_url: require('../assets/1.png')
          },
          {feature: '视频连线', feature_info: '一对一，多人实时视频连线沟通', img_url: require('../assets/1.png')},
          {
            feature: '直播',
            feature_info: '提供低延迟、强同步、高并发、高质量的互动多平台直播能力',
            img_url: require('../assets/1.png')
          },
          {feature: '云信令', feature_info: '超低延迟全球信令与消息云服务', img_url: require('../assets/1.png')},
          {
            feature: '即时通讯IM',
            feature_info: '单聊、群聊、聊天室、系统通知等IM功能',
            img_url: require('../assets/1.png')
          },
          {feature: '加速', feature_info: '具备QoS保障的全球端到端加速服务', img_url: require('../assets/1.png')}]
        },
        {
          name_title: '实时互动扩展能力',
          url: '',
          title_feature: [{
            feature: '水晶球',
            feature_info: '实时监控、警告通知、通话调查、数据洞察',
            img_url: require('../assets/1.png')
          },
          {
            feature: '互动白板',
            feature_info: 'HS课件、动态PPT、轨迹与音视频同步',
            img_url: require('../assets/1.png')
          },
          {
            feature: '实时录制',
            feature_info: '云端录制、本地服务器录制、页面录制',
            img_url: require('../assets/1.png')
          },
          {feature: '远程控制', feature_info: '远程访问、远程支持、远程管理', img_url: require('../assets/1.png')}]
        },
        {
          name_title: '低代码应用平台',
          url: '',
          title_feature: [{
            feature: '灵动课堂',
            feature_info: '15分钟以上自有品牌互动教学平台',
            img_url: require('../assets/1.png')
          },
          {
            feature: '灵隼物联网云平台',
            feature_info: '[低代码、端到端]音视频设备开发平台',
            img_url: require('../assets/1.png')
          }]
        }
        ]
      }, {
        the_name: '案例',
        href: '',
        subshow: false,
        submenu: [{
          name_title: 'Meta',
          url: '',
          title_feature: [{
            feature: '元直播',
            feature_info: '畅想新宇宙，直播新玩法',
            img_url: require('../assets/1.png')
          },
          {feature: '元语聊', feature_info: '身临其境，语聊互动新体验', img_url: require('../assets/1.png')},
          {feature: '元K歌', feature_info: '唱响新宇宙，K歌新体验', img_url: require('../assets/1.png')},
          {feature: '互动游戏', feature_info: '直播间游戏PK，观众改变战局', img_url: require('../assets/1.png')}]},
        {
          name_title: '社交娱乐',
          url: '',
          title_feature: [{
            feature: '在线K歌房',
            feature_info: '海量正版曲库与K歌组件',
            img_url: require('../assets/1.png')
          },
          {feature: '直播', feature_info: '互动新玩法，流量来吸金', img_url: require('../assets/1.png')},
          {feature: '游戏', feature_info: '低延时低功耗，尽享游戏体验', img_url: require('../assets/1.png')},
          {feature: '社交', feature_info: '重新定义社交的连接方式', img_url: require('../assets/1.png')},
          {feature: '电商', feature_info: '互动购物体验，引爆消费潜力', img_url: require('../assets/1.png')}]
        },
        {
          name_title: '教育',
          url: '',
          title_feature: [{
            feature: '职业&成人教育',
            feature_info: '直播新选择，互动新体验',
            img_url: require('../assets/1.png')
          },
          {feature: '素质教育', feature_info: '沉浸式教学，低代码快速上线', img_url: require('../assets/1.png')},
          {feature: 'K12教育', feature_info: '构建全班型，高质量在线课堂', img_url: require('../assets/1.png')},
          {feature: '教育信息化', feature_info: '实时互动赋能”三个课堂“', img_url: require('../assets/1.png')}]
        },
        {
          name_title: '智能硬件',
          url: '',
          title_feature: [{
            feature: '智慧人居',
            feature_info: '[一站式]开启全屋智能',
            img_url: require('../assets/1.png')
          },
          {
            feature: '智能出行',
            feature_info: '高实时、高可靠、高质量的服务保障',
            img_url: require('../assets/1.png')
          },
          {feature: '智能穿戴', feature_info: '不至于[看]，全平台体验保障', img_url: require('../assets/1.png')}]
        },
        {
          name_title: '数字化转型',
          url: '',
          title_feature: [{
            feature: '视频会议',
            feature_info: '轻松实现远程协作，在家办公',
            img_url: require('../assets/1.png')
          },
          {feature: '医疗', feature_info: '医患快速连接，资源高效共享', img_url: require('../assets/1.png')},
          {feature: '金融', feature_info: '灵活部署方式，赋能金融科技', img_url: require('../assets/1.png')},
          {feature: 'RTC私有化平台', feature_info: '10分钟构建专有RTC云平台', img_url: require('../assets/1.png')}]
        }
        ]
      }, {
        the_name: '产品',
        href: '',
        subshow: false,
        submenu: [{
          name_title: '',
          url: '',
          title_feature: [{feature: '生态介绍', feature_info: ''},
            {feature: '超音速计划', feature_info: ''},
            {feature: '声选计划', feature_info: ''},
            {feature: '共鸣计划', feature_info: ''}]
        }]
      }]
    }
  },
  methods: {
    theinvert (index) {
      console.log('invert')
      document.getElementsByClassName('show_info_btn')[index].style.transform = 'rotate(180deg)'
    },
    changeTopcolor () {
      if (document.documentElement.scrollTop !== 0) {
        document.getElementById('header').setAttribute('style', 'background-color:rgba(255,255,255,1)')
      } else {
        document.getElementById('header').setAttribute('style', 'background-color:rgba(255,255,255,0)')
      }
    },
    menus () {
      console.log(document.getElementsByClassName('menus_feature')[1].style.width)
    }
  },
  mounted () {
    this.changeTopcolor()
    setInterval(this.changeTopcolor, 10)
  }
}
</script>

<style scoped>

.header {
  margin: 0;
  padding: 0;
  background: rgb(255, 255, 255);
  width: 100%;
  height: 74px;
  position: fixed;
  z-index: 9999999;
}

.the_header_div {
  width: 70%;
  margin: auto;
  display: flex;
  align-items: center;
  height: 100%;
}

.the_web_logo {
  z-index: 9999999;
  width: 80px;
  height: 51px;
}

.show_info_btn {
  height: 12px;
  width: 12px;
}

.login_btn {
  z-index: 9999999;
  display: block;
  float: right;
  font-size: 18px;
  border-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color: deepskyblue;
  height: 30px;
  width: 84px;
  margin-right: 5%;
}

#login_btn {
  letter-spacing: 5px;
  width: 84px;
  font-weight: 100;
  font-size: 16px;
}

#login_btn:hover {
  text-decoration: none;
  color: #2f82ff;
}

.register_btn {
  z-index: 9999999;
  color: white;
  display: block;
  float: right;
  font-size: 18px;
  height: 40px;
  width: 180px;
  border: white;
  border-radius: 10px;
  background: linear-gradient(135deg, #52bbff, #0085ff);
  margin-left: 10px;
  margin-right: 5%;
}

.register_btn:hover {
  box-shadow: 0 0 15px #0085ff;
  background-color: rgba(0, 191, 255, 0.5);
}

/*.the_head_menu {*/
/*  height: 24px;*/
/*  width: 24px;*/
/*}*/

/*.the_head_menu:hover {*/
/*  box-shadow: 0 0 5px 3px rgba(0, 191, 255, 1);*/
/*}*/

.the_profile_photo {
  z-index: 9999999;
  display: block;
  margin-right: 0;
  height: 51px;
  width: 51px;
}

ul {
  display: flex;
  margin-left: 5%;
  width: 50%;
}

.header_ul {
  width: 100%;
  height: 100%;
  align-items: center;
}

li {
  list-style-type: none;
  margin-left: 5%;
  font-size: 18px;
}

.menus > a {
  height: 73px;
}

.menus :hover {
  color: deepskyblue;
}

.menus_feature {
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  font-size: 17px;
  padding-top: 20px;
  margin-left: -16px;
  position: absolute;
  width: auto;
  background-color: white;
}

.subMenus {
  margin-top: 0;
  width: 300px;
}

.subMenus:not(:first-child) {
  margin-left: 1px !important;
}

.subMenus > a {
  font-size: 17px;
  font-weight: 1000;
  border-bottom: lightgrey solid 2px;
}

.subMenus > ul {
  width: 80%;
  display: block;
}

.feaTures {
  font-size: 16px;
  margin-top: 18px;
}

.feaTures > a, span {
  color: black;
  display: block;
}

.feaTures > a:hover {
  font-size: 19px;
}

span {
  margin-top: 18px;
  color: darkgray;
}

span:hover {
  color: darkgray !important;
}

</style>
