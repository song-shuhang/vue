<template>
    <div>
      <router-view></router-view>
      <FooterGuide v-if="$route.meta.isShowFooterGuide"/>
    </div>
</template>

<script type="text/ecmascript-6">
  import FooterGuide from './components/FooterGuide/FooterGuide'  
  export default {
    components:{
      FooterGuide,
    },
    template:'<FooterGuide/>'
    
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

 
</style>
