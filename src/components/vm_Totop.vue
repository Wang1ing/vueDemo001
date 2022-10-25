<template>
  <div class="toTop_div">
    <div class="toTop" @click="gototop()">
      <img src="../assets/toTop.png" alt="暂无数据">
    </div>
    <div class="callme" @click="callme()">
      <img src="../assets/callme.png" alt="暂无数据">
    </div>
  </div>
</template>

<script>
export default {
  name: 'vm_Totop',
  methods: {
    gototop () {
      document.documentElement.scrollTop = 0
    },
    callme () {
      alert('电话：***********' +
        '\n' + 'Twitter：***********' + '\n' + 'Ingstagram：' + '\n' + 'email：')
    }
  }
}
</script>

<style scoped>
div {
  background: rgba(0,0,0,0);
  display: block;
}

.toTop_div {
  z-index: 99999;
  position: fixed;
  right: 30px;
  bottom: 100px;
}

.toTop,
.callme {
  color: white;
  margin: 0 auto;
  text-align: center;
  background-color: lightskyblue;
  border-radius: 34px;
  width: 54px;
  height: 54px;
}

img {
  opacity: 0.5;
}

.callme {
  margin-top: 10px;
}

.toTop > img {
  width: 48px;
  height: 48px;
}

.callme > img {
  margin: 7px auto;
  width: 43px;
  height: 43px;
}

.toTop > div:hover {
  background-color: lightskyblue;
}

img:hover {
  opacity: 1;
}
</style>
