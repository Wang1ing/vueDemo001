<template>
  <div>
    <div class="all_goodness_div">
      <div class="all_goodness_title">产品优势</div>
      <div class="all_goodness_info">丰富的API组合，简单的API调用，轻松创建实时互动场景</div>
    </div>
    <div class="the_goodness_div">
      <div class="the_main_div" v-for="(item , index) in png_gif_list" :key="index">
        <img v-if="item.show_gif_status" :src="item.png_url" alt="zwsj"
             @mouseover="item.show_gif_status = !item.show_gif_status"
             @mouseout="item.show_gif_status = !item.show_gif_status">
        <img v-else :src="item.gif_url" alt="zwsj"
             @mouseover="item.show_gif_status = !item.show_gif_status"
             @mouseout="item.show_gif_status = !item.show_gif_status">
        <div>
          {{ item.the_goodness_title }}
        </div>
        <div class="bottom_line">
        </div>
        <div>
          {{item.the_goodness_inof}}
        </div>
        <div>
          查看详情
        </div>
        <div class="the_bottom_wave">
        </div>
      </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'vm_showGoodnessAndGif',
  data () {
    return {
      png_gif_list: [{
        png_url: require('../assets/png_or_gif/01.png'),
        gif_url: require('../assets/png_or_gif/01.gif'),
        show_gif_status: true,
        the_goodness_title: '语音通话',
        the_goodness_inof: '简单调用 API，快速实现 1 对 1、多对多实时语音通话'
      },
      {
        png_url: require('../assets/png_or_gif/02.png'),
        gif_url: require('../assets/png_or_gif/02.gif'),
        show_gif_status: true,
        the_goodness_title: '视频通话',
        the_goodness_inof: '简单调用 API，快速实现 1 对 1、多对多实时视频通话'
      },
      {
        png_url: require('../assets/png_or_gif/03.png'),
        gif_url: require('../assets/png_or_gif/03.gif'),
        show_gif_status: true,
        the_goodness_title: '互动直播',
        the_goodness_inof: '支持 128 人实时连麦，百万人大频道实时互动，适用于互动较强各类直播场景'
      },
      {
        png_url: require('../assets/png_or_gif/04.png'),
        gif_url: require('../assets/png_or_gif/04.gif'),
        show_gif_status: true,
        the_goodness_title: '极速直播',
        the_goodness_inof: '实现低延时、强同步、高质量、高并发直播功能，适用于轻互动直播场景'
      },
      {
        png_url: require('../assets/png_or_gif/05.png'),
        gif_url: require('../assets/png_or_gif/05.gif'),
        show_gif_status: true,
        the_goodness_title: '融合CDN直播',
        the_goodness_inof: '提供卡顿率低于 1% 的超流畅 CDN 直播服务，一个 SDK 满足全场景直播需求'
      },
      {
        png_url: require('../assets/png_or_gif/06.png'),
        gif_url: require('../assets/png_or_gif/06.gif'),
        show_gif_status: true,
        the_goodness_title: '全链路加速',
        the_goodness_inof: '为互联网加上QoS保障。帮助所有应用实现具备QoS保障的全球端到端网络传输服务'
      },
      {
        png_url: require('../assets/png_or_gif/07.png'),
        gif_url: require('../assets/png_or_gif/07.gif'),
        show_gif_status: true,
        the_goodness_title: '云信令',
        the_goodness_inof: '稳定可靠，超低延时，高并发的全球信令与消息云服务'
      },
      {
        png_url: require('../assets/png_or_gif/08.png'),
        gif_url: require('../assets/png_or_gif/08.gif'),
        show_gif_status: true,
        the_goodness_title: '灵动课堂',
        the_goodness_inof: '节省 90%+ 开发时间，15 分钟即可上线自有品牌的全功能在线互动教学平台'
      },
      {
        png_url: require('../assets/png_or_gif/09.png'),
        gif_url: require('../assets/png_or_gif/09.gif'),
        show_gif_status: true,
        the_goodness_title: '互动白板',
        the_goodness_inof: '实现多人实时白板协作，支持 H5 课件交互、动态 PPT 展示、轨迹实时同步'
      },
      {
        png_url: require('../assets/png_or_gif/10.png'),
        gif_url: require('../assets/png_or_gif/10.gif'),
        show_gif_status: true,
        the_goodness_title: '水晶球',
        the_goodness_inof: '基于声网 全链路数据，提供全周期质量监测、回溯和分析'
      }
      ]
    }
  },
  methods: {}
}
</script>

<style scoped>
.all_goodness_info,
.all_goodness_title,
.all_goodness_div{
  display: block;
}
.all_goodness_div{
  margin: 30px auto;
  width: 70%;
}

.all_goodness_title {
  width: 100%;
  letter-spacing: 10px;
  text-align: center;
  font-size: 13px;
}

.all_goodness_info {
  margin-top: 10px;
  width: 100%;
  text-align: center;
  font-size: 30px;
}

.the_goodness_div{
  width: 70%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 34px;
  grid-column-gap: 25px;
}

.the_main_div {
  height: 240px;
  background: #fff;
  box-shadow: -1px 4px 16px -3px rgb(26 134 192 / 16%);
  border-radius: 15px;
}

img {
  width: 100px;
  height: 100px;
  border: black solid 5px;
}

.bottom_line {
  width: 50%;
  border-bottom: yellow solid 3px;
}

.the_bottom_wave{
  height: 8px;
  width: 90px;
  background-image: url("../assets/wave.gif");
  background-size: 100%;
  background-repeat: no-repeat;
}
</style>
