<template>
  <div class="404">
    <h2>少侠您的页面走丢了</h2>
    <el-button type="warning" @click="gohome">我要回家</el-button>
  </div>
</template>

<script>
import util from '../base/util'
export default {
  name: 'page404',
  data () {
    return {

    }
  },
  created(){
    util.changeTitle('404')
  },methods:{
    gohome(){
      this.$router.push({
        path:'/home'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
