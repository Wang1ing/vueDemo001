<template>
  <div class="show_users_div">
    <div class="left_wrapper">
      <div class="div_title">
        每月支撑销售总额
      </div>
      <div class="div_num">
        50,000,000,000⁺
      </div>
    </div>
    <div class="right_wrapper">
      <div class="div_title" style="width: 50%">
        平台全球注册使用人次
      </div>
      <div class="div_num">
        405,000⁺
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vm_showUsers',
  methods: {
    callme () {
      alert('电话：***********' +
        '\n' + 'Twitter：***********' + '\n' + 'Ingstagram：' + '\n' + 'email：')
    }
  }
}
</script>

<style scoped>
.show_users_div {
  margin: 0 auto;
  align-content: center;
  justify-content: center;
  padding-bottom: 40px;
  width: 100%;
  height: 180px;
  background-color: white;
  display: flex;
}

.left_wrapper,
.right_wrapper{
  border: .83333px solid #e5f3fc;
  border-radius: 15px;
  margin-top: auto;
  align-content: center;
}
.left_wrapper{
  display: flex;
  width: 45%;
  height: 140px;
}
.right_wrapper{
  margin-left: 50px;
  display: flex;
  width: 25%;
  height: 140px;
}
.div_title{
  display: flex;
  width: 30%;
  height: 100%;
  text-align: center;
  align-items: center;
  justify-items: center;
  justify-content: center;
  background: rgba(190,223,255,.1);
  font-size: 18px;
  font-weight: 600;
}
.div_num{
  width: 70%;
  text-align: center;
  justify-items: center;
  margin:auto;
  color: #089cfd;
  font-size: 40px;
  font-weight: 700;
}
</style>
