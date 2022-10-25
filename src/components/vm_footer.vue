<template>
  <div class="footer_div">
    <ul>
      <li>
        隐私政策
      </li>
      <li>
        服务条款
      </li>
      <li>
        可接受的使用政策
      </li>
      <li>
        涉及权限
      </li>
      <li>
        安全合规
      </li>
      <li>
        举报邮箱
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'vm_footer'
}
</script>

<style scoped>
.footer_div{
  color: white;
  background-color: #222;
  width: 100%;
  height: 90px;
}
li{
  float: left;
  margin-top: 30px;
  margin-left: 50px;
  list-style-type: none;
  font-size: 14px;
  border-bottom: white solid 2px;
}
</style>
