<template>
  <div class="show_ourService_div">
<!--    <img src="../assets/showService_bg.png" alt="zwsj">-->
    <div class="left_wrapper">
      <div class="item">
        <img src="../assets/icon.png" class="icon">
        <div class="title" data-v-12591ede="">0 启动费用
        </div>
      </div>
      <div class="item">
        <img src="../assets/icon.png" class="icon">
        <div class="title" data-v-12591ede="">阶梯计费，销量越多折扣越多
        </div>
      </div>
      <div class="item">
        <img src="../assets/icon.png" class="icon">
        <div class="title" data-v-12591ede="">套餐包预购价格尽享优惠折扣
        </div>
      </div>
      <div class="item">
        <img src="../assets/icon.png" class="icon">
        <div class="title" data-v-12591ede="">7 * 24 小时技术支持
        </div>
      </div>
    </div>
    <div class="right_wrapper">
      <div class="title">
        每月
        10,000
        分钟免费
      </div>
      <button @click="callme()">立刻体验
        <img src="../assets/to_right.png" alt="">
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'show_ourService',
  methods: {
    callme () {
      alert('电话：***********' +
        '\n' + 'Twitter：***********' + '\n' + 'Ingstagram：' + '\n' + 'email：')
    }
  }
}
</script>

<style scoped>
.show_ourService_div {
  margin-top: 50px;
  width: 100%;
  height: 250px;
  background-position: 50%;
  background-color: #2f82ff;
  display: flex;
  justify-content: center;
}

.left_wrapper {
  margin-top: auto;
  width: 30%;
  align-content: center;
}

.right_wrapper {
  margin-top: 80px;
  color: white;
  font-size: 50px;
  font-weight: 5000;
}

.item {
  text-align: center;
  justify-items: center;
  align-content: center;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  height: 20px;
  margin-bottom: 30px;
}

.item > img {
  width: 36px;
  height: 36px;
}

.item > div {
  margin-top: 6px;
  margin-left: 20px;
  font-size: 18px;
  color: white;
}

button {
  width: 150px;
  font-size: 30px;
  padding: 10px;
  background-color: orange;
  background-image: linear-gradient(90deg, darkorange 0%, orangered 100%);
  border-radius: 15px;
  overflow: hidden;
}

button > img {
  position: absolute;
  margin: 8px 15px;
  width: 24px;
  height: 24px;
}

button:hover {
  animation: btn_move 1s ease 1;
  animation-fill-mode: forwards;
}

@keyframes btn_move {
100% {
width: 230px
}
}
</style>
