<template>
  <div class="qr">
    <nav class="nav-title">
      <div>
        <span class="til">藏宝阁抢购</span>
      </div>
      <div>
        <a @click="back">返回上一级</a>
      </div>
    </nav>

    <div class="steps">
      <el-steps  :active="1" finish-status="success" :align-center="true">
        <el-step title="选择区服"></el-step>
        <el-step title="登录藏宝阁"></el-step>
        <el-step title="填写抢购地址"></el-step>
        <el-step title="抢购商品"></el-step>
        <el-step title="完成抢购"></el-step>
      </el-steps>
    </div>
     <div class="panel">
        <p>网易大神将军令扫一扫，安全登录！</p>
        <img src="" alt="二维码" @click="next()">
        <div class="select-server">
          <span>服务器：xxx</span>
          <a @click="back">重新选择</a>
        </div>
        <p class="red">扫码后请不要登录藏宝阁，否则账号会被挤下！！！</p>
     </div>
  </div>
</template>

<script>
export default {
  name: 'qr',
  data () {
    return {


    }
  },
  created(){
    let selectserver=sessionStorage.getItem('selectserver')
    if(selectserver)selectserver=JSON.parse(selectserver);

  },
  methods:{
    back(){
      this.$router.go(-1)
    },
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
.qr{

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
  .panel{
    width: 500px;
    height: 500px;
    margin: auto;
    margin-top: 50px;
    .select-server{
      display: flex;
      justify-content: space-between;
      width: 300px;
      margin: 0 auto;
      line-height: 40px;
    }
  }
  .red{
    color: red;
  }
  img{
    min-width: 300px;
    min-height: 300px;
    border: 1px solid #cdcdcd;
  }
  img:hover{
    border: 1px solid #000;
  }
}
</style>
