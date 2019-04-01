<template>
  <div class="user">
    <nav class="nav-title">
      <div>
        <span class="til">藏宝阁抢购</span>
      </div>
      <div>
        <!--  -->
      </div>
    </nav>

    <div class="steps">
      <el-steps  :active="3" finish-status="success" :align-center="true">
        <el-step title="选择区服"></el-step>
        <el-step title="登录藏宝阁"></el-step>
        <el-step title="填写抢购地址"></el-step>
        <el-step title="抢购商品"></el-step>
        <el-step title="完成抢购"></el-step>
      </el-steps>
    </div>

     <ul>
       <li v-for="item in 10">
         <p>昵称：xxx</p>
         <p>ID：xxx</p>
         <p>种族：xxx</p>
         <p>所在区：xxx</p>
         <p>服务器：xxx</p>
         </li>
     </ul>
      <el-button type="primary" class="mt50" @click="next">下一步</el-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      datalist:[]
    }
  },
  methods:{
    next(){
      this.$router.push({
        path:'/address'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" >
.user{

  .nav-title{
    display: flex;
    justify-content: space-between;
    height: 40px;
    line-height: 40px;
    background-color: #f5f5f5;
    padding: 5px 40px;
    border-bottom: 1px solid #cdcdcd;
    .til{
      border-left: 3px solid #409eff;
      padding-left: 10px;
    }
  }

  .steps{
    width: 90%;
    margin: 20px auto;
  }

ul{
  margin-top: 50px;
  width:90%;
  margin: 0 auto;
  li{
    width: 100%;
    height: 200px;
    // border: 1px solid #cdcdcd;
    margin: 10px 20px;
    overflow: hidden;
    p{
      margin: 5px 10px;
      text-align: left;
    }
  }
  li:hover{
    border: 1px solid #409eff;
  }
}
  .mt50{
    margin-top: 50px;
  }
}
</style>
