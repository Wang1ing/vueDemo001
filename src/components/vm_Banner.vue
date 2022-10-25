<template>
  <div class="the_banner_container">
    <img :src="banner[index]" alt="暂无数据">
  </div>
</template>

<script>
import msg from './msg'

export default {
  name: 'vm_Banner',
  data () {
    return {
      banner: [require('../assets/banner_004.jpg'),
        require('../assets/banner_003.jpg'),
        require('../assets/banner_002.jpg'),
        require('../assets/banner_001.jpg')],
      index: 0
    }
  },
  methods: {
    next () {
      if (this.index < 3) {
        this.index++
      } else if (this.index === 3) {
        this.index = 0
      }
    }
  },
  mounted () {
    this.next()
    setInterval(this.next, 5000)
    msg.$on('get_num', index => {
      this.index = index % 3
    })
  }
}
</script>

<style scoped>

.the_banner_container {
  width: 100%;
  height: 800px;
}

img {
  width: 100%;
  object-fit: cover;
  height: 800px;
}
</style>
