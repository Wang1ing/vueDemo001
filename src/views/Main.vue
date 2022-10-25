<!--<link rel="stylesheet" href="../css/reset.css">-->
<template>
  <div>
    <vmHeader/>
    <vmBanner/>
    <vmshowFeature/>
    <vmAccessPlatform/>
    <vmshowUsers/>
    <!--    <vmshowForte/>-->
    <vmshowFortes/>
    <vmshowourService/>
    <vmshowGoodnessAndGif/>
    <vmFooter/>
    <vmTotop/>
  </div>
</template>

<script>
import vmHeader from '../components/vm_Header'
import vmBanner from '../components/vm_Banner'
import vmshowFeature from '../components/vm_showFeature'
import vmTotop from '../components/vm_Totop'
import vmAccessPlatform from '../components/vm_Access_Platform'
import vmshowForte from '../components/vm_showForte'
import vmshowFortes from '../components/vm_showFortes'
import vmshowourService from '../components/vm_show_ourService'
import vmFooter from '../components/vm_footer'
import vmshowUsers from '../components/vm_showUsers'
import vmshowGoodnessAndGif from '../components/vm_showGoodnessAndGif'

export default {
  name: 'Main',
  components: {
    vmHeader,
    vmBanner,
    vmTotop,
    vmshowFeature,
    vmAccessPlatform,
    vmshowForte,
    vmshowFortes,
    vmshowourService,
    vmFooter,
    vmshowUsers,
    vmshowGoodnessAndGif
  }
}
</script>

<style scoped>
div {
  background-color: #fbfcff;
}
</style>
