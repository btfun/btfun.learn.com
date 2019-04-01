<template>
  <div class="address">
    <nav class="nav-title">
      <div>
        <span class="til">藏宝阁抢购</span>
      </div>
      <div>
        <!--  -->
      </div>
    </nav>

    <div class="steps">
      <el-steps  :active="2" finish-status="success" :align-center="true">
        <el-step title="选择区服"></el-step>
        <el-step title="登录藏宝阁"></el-step>
        <el-step title="填写抢购地址"></el-step>
        <el-step title="抢购商品"></el-step>
        <el-step title="完成抢购"></el-step>
      </el-steps>
    </div>

    <p>请输入需要抢号的网址：</p>
    <div class="inputdiv">
      <el-input v-model="address" type="url" placeholder="请填写需要抢购商品的藏宝个地址"></el-input>
      <el-button type="primary" @click="next">开始抢号</el-button>
    </div>

     <!-- <iframe :src="address" frameborder="0" scrolling = "no"></iframe> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      address: ''
    }
  },
  methods:{
    next(){
      this.$router.push({
        path:'/user'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" >
.address{
    height: 100%;

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

 .inputdiv{
   display: flex;
   justify-content: space-between;
   width: 76%;
   margin: 0 auto;
   .el-input{
     width: 90%;
     margin-right: 20px;
   }
 }
 iframe{
   width: 100%;
   height: 500px;
   margin-top: 20px;
   border: 1px solid #cdcdcd;
   overflow: hidden;
 }
}
</style>
