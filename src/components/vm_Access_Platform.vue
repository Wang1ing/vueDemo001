<template>
  <ul>
    <li v-for="item in tools_list" :key="item.the_name">
      <img :src="item.the_url">
      <br>
      <span>{{item.the_name}}</span>
    </li>
  </ul>
</template>

<script>
import url1 from '../assets/twitter.png'
import url2 from '../assets/facebook.png'
import url3 from '../assets/instagram.png'
import url4 from '../assets/twitch.png'
import url5 from '../assets/youtube.png'
import url6 from '../assets/slack.png'
import url7 from '../assets/github.png'

export default {
  name: 'access platform',
  data () {
    return {
      tools_list: [{the_url: url1, the_name: 'Twitter'},
        {the_url: url2, the_name: 'FaceBook'},
        {the_url: url3, the_name: 'Instagram'},
        {the_url: url4, the_name: 'Twitch'},
        {the_url: url5, the_name: 'Youtube'},
        {the_url: url6, the_name: 'Slack'},
        {the_url: url7, the_name: 'Github'}]
    }
  }
}
</script>

<style scoped>
ul {
  background-color: white;
  justify-content: center;
  display: flex;
  width: 100%;
  padding-top: 25px;
  padding-bottom: 50px;
}

li {
  margin: auto;
  justify-content: center;
  text-align: center;
  list-style-type: none;
  font-size: 16px;
  font-weight: 1000;
  color: black;
}
</style>
