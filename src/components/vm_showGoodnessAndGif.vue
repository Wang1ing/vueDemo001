<template>
  <div class="the_main_div">
    <img v-if="show_gif_status" :src="png_gif_list[index].png_url" alt="zwsj"
         @mouseover="changegif()" @mouseout="changegif()">
    <img v-else :src="png_gif_list[index].gif_url" alt="zwsj"
         @mouseover="changegif()" @mouseout="changegif()">
    <div>
      极速直播
    </div>
    <div class="bottom_line">
    </div>
  </div>
</template>

<script>
export default {
  name: 'vm_showGoodnessAndGif',
  data () {
    return {
      show_gif_status: true,
      index: 0,
      png_gif_list: [{png_url: require('../assets/png_or_gif/01.png'), gif_url: require('../assets/png_or_gif/01.gif')},
        {png_url: require('../assets/png_or_gif/02.png'), gif_url: require('../assets/png_or_gif/02.gif')},
        {png_url: require('../assets/png_or_gif/03.png'), gif_url: require('../assets/png_or_gif/03.gif')},
        {png_url: require('../assets/png_or_gif/04.png'), gif_url: require('../assets/png_or_gif/04.gif')},
        {png_url: require('../assets/png_or_gif/05.png'), gif_url: require('../assets/png_or_gif/05.gif')},
        {png_url: require('../assets/png_or_gif/06.png'), gif_url: require('../assets/png_or_gif/06.gif')},
        {png_url: require('../assets/png_or_gif/07.png'), gif_url: require('../assets/png_or_gif/07.gif')},
        {png_url: require('../assets/png_or_gif/08.png'), gif_url: require('../assets/png_or_gif/08.gif')},
        {png_url: require('../assets/png_or_gif/09.png'), gif_url: require('../assets/png_or_gif/09.gif')},
        {png_url: require('../assets/png_or_gif/10.png'), gif_url: require('../assets/png_or_gif/10.gif')}
      ]
    }
  },
  methods: {
    changegif () {
      if (this.index < 10) {
        this.index++
      } else {
        this.index = 0
      }
      console.log(this.show_gif_status)
      this.show_gif_status = !this.show_gif_status
    }
  }
}
</script>

<style scoped>
.the_main_div {
  width: 200px;
  height: 200px;
  border: #f8c84c solid 5px;
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
</style>
