<template>
  <div id="layout" class="scrollbar">
    <!--  -->
    <navheader></navheader>
    <!--  -->
    <div class="layout-container scrollbar">
      <div class="menu">
        <!-- 菜单 -->
        <ul>
          <li @click="home">设计模式</li>
          <li @click="home">首页</li>
        </ul>
      </div>
      <div class="context ">

        <!-- 内容 -->
          <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import navheader from './header'

export default {
  name: 'layout',
  components: {
    navheader,
  },
  data () {
    return {

    }
  },
  methods:{
    home(){
      this.$router.push({
        path:'/home'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" >

#layout{
  width: 100%;
  height: 100%;
  background-color: #e5ecf2;
  // box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  overflow-y: scroll;
  .layout-container{
    margin-top: 50px;
   .menu{
     position: fixed;
     z-index: 999;
     min-width: 160px;
     height: 100%;
     border-right: 1px solid #cdcdcd;
     background-color: #fff;
     li{
      height: 50px;
      line-height: 50px;
      color:#607d8b;
      border-bottom: 1px solid #cdcdcd;
      text-align: left;
      padding-left: 30px;
    }
     li:hover{
      color:#26c6da;
      cursor: pointer;
    }

   }

   .context{
     margin-left: 160px;
     background-color: #fff;
     min-height: 966px;
   }

  }

}


</style>
