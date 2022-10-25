<template>
  <div id="app">
    <router-link to="/Home">s</router-link>
    <router-link to="/About">关于</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    keepRatio () {
      var ratio = 1 // 定义一个缩放比例
      var screen = window.screen // 获取窗口对象
      var ua = navigator.userAgent.toLowerCase()
      if (window.devicePixelRatio !== undefined) {
        ratio = window.devicePixelRatio // 像素大小的比例
      } else if (~ua.indexOf('msie')) {
        if (screen.deviceXDPI && screen.logicalXDPI) {
          ratio = screen.deviceXDPI / screen.logicalXDPI
        }
      } else if (window.outerWidth !== undefined && window.innerWidth !== undefined) {
        ratio = window.outerWidth / window.innerWidth // 外部比例/内部比例：缩放比例
      }
      if (ratio) {
        ratio = Math.round(ratio * 100)
      }
      this.ratio = (ratio / 100).toFixed(2)
      document.body.style.zoom = 1 / this.ratio // 窗口视图除以缩放比例：即缩放还原
    }
  },
  mounted () {
    this.keepRatio()
    window.addEventListener('resize', () => {
      this.keepRatio()
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
