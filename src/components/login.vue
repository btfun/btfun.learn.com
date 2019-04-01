<template>
  <div class="login">
    <!--  -->

  </div>
</template>

<script>
import api from '../base/uri'
import util from '../base/util'
export default {
  name: 'login',
  data () {
    return {
      bool:false, 
    }
  },created(){
    util.changeTitle('登录')
  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.login{

}
</style>
