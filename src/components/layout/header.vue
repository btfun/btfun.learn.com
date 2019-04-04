<template>
  <div class="navheader">
       <div>
         前端练习册
       </div>
       <div>
        <span>你好，{{username}}</span>&nbsp;&nbsp;
        <a @click="out">退出登陆</a>
       </div>
  </div>
</template>

<script>
export default {
  name: 'navheader',
  data () {
    return {
        username:sessionStorage.getItem('username')
    }
  },methods:{
    out(){
      sessionStorage.setItem('token','');
      this.$router.push({
        path:'/login'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" >
.navheader{
  width: 100%;
  position: fixed;
  top:0;
  left:0;
  z-index: 999;
  box-sizing:border-box;
  display: flex;
  justify-content: space-between;
  height: 50px;
  line-height: 50px;
  // background-color: #666;
  background-color: rgb(64, 158, 255);
  color: #fff;
  padding: 0 20px;
  a{
    cursor: pointer;
  }
}
</style>
