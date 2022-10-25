<template>
  <div class="show_forte_div">
    <span class="the_forte_title">产品优势</span>
    <ul>
      <li v-for="item in forte_list" :key="item.the_info">
        <span>{{item.the_info}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'vm_showForte',
  data () {
    return {
      forte_list: [{the_info: '专人服务，包教包会，快速上手'},
        {the_info: '接口丰富，信用可靠，安全便捷'},
        {the_info: '情人总是分分合合，而我们却越爱越深'}]
    }
  }
}
</script>

<style scoped>
.show_forte_div{
  background-color: white;
  width: 100%;
}
.the_forte_title{
  display: block;
  text-align: center;
  font-weight: initial;
  padding-bottom: 20px;
  letter-spacing: 20px;
  font-size: 25px;
}

ul {
  display: flex;
  justify-content: center;
  width: 100%;
}
li {
  border: black solid 0.5px;
  list-style-type: none;
  font-size: 16px;
  width: 100px;
}

li:not(:first-child){
  margin-left: 200px;
}
</style>
