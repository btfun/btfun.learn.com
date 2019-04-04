<template>
  <div class="select">
    <nav class="nav-title">
      <div>
        <span class="til">藏宝阁抢购</span>
      </div>
      <div>
        <a @click="back">返回上一级</a>
      </div>
    </nav>

    <div class="steps">
      <el-steps  :active="0" finish-status="success" :align-center="true">
        <el-step title="选择区服"></el-step>
        <el-step title="登录藏宝阁"></el-step>
        <el-step title="填写抢购地址"></el-step>
        <el-step title="抢购商品"></el-step>
        <el-step title="完成抢购"></el-step>
      </el-steps>
    </div>

    <div class="panel">
      <ul>
        <li v-for="item in datalist" :class="{'active':item.active}" @click="selectServer(item)">{{item.name}}</li>
      </ul>
    </div>
    <div class="panelc">
      <ul>
        <li v-for="item in list" @click="selectServer(item,1)">{{item.name}}</li>
      </ul>
    </div>

  </div>
</template>

<script>
import {server_data} from '../base/data'

export default {
  name: 'layoutselect',
  data () {
    return {
      chirdtol:14,
      datalist:[],
      selectparent:[],
      list:[]
    }
  },
  created() {
    this.init()

    for(let v=0;v<this.chirdtol;v++){
      this.list.push({})
    }
  },
  methods:{
    init(){
      let serverdatalist=sessionStorage.getItem('serverdatalist');
      if(serverdatalist){
        return this.datalist=JSON.parse(serverdatalist)
      }

      for (var attr in server_data) {
          let item=server_data[attr]
          this.datalist.push({
            name: item[0][0],
            value: item[0],
            active: false,
            chidren: item[1],
          })
      }

      sessionStorage.setItem('serverdatalist',JSON.stringify(this.datalist))

    },
    back(){
      this.$router.go(-1)
    },
    selectServer(data,flag){

      console.log('attr', data)

      if(flag){
          if(data.value){

            sessionStorage.setItem('selectserver',JSON.stringify({
              selectparent: this.selectparent,
              selectchild: data.value
            }))

            this.$router.push({
              path:'/qr',
              query:{
                server:'data'
              }
            })
          }

      }else{
        this.list=[];
        this.selectparent=data.value;

        this.datalist.forEach(_=>{
          _.active=false;
        })
        data.active=true;

        for (let val of data.chidren) {
          this.list.push({
            name: val[1],
            value: val
          })
        }
        let tol=this.chirdtol-this.list.length;
        for(let v=0;v<tol;v++){
          this.list.push({})
        }
      }




    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" >
.select{
// padding: 20px;
user-select:none;
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
  // width: 80%;
  // max-width:1000px;
  width:1065px;
  margin: auto;
  margin-top: 5px;
  padding: 20px;
  border-radius: 5px;
  background-color: #DCDCE8;
  border: 1px solid #fff;
  .active{
    background-color: #A4DAFF;
    border: 1px solid #0088AA;
  }
}
.panelc{
  // width: 80%;
  // max-width:1000px;
  width:1065px;
  margin: auto;
  margin-top: 5px;
  padding: 20px;
  border-radius: 5px;
  background-color: #DCDCE8;

  li{
    background-color: #A4DAFF;
    border: 1px solid #0088AA;
  }


}

  ul{
    display: flex;
    width: 100%;
    // justify-content: space-between;
    flex-wrap: wrap;
    li{
      width: 130px;
      height: 30px;
      line-height: 30px;
      border: 1px solid #000;
      margin: 5px 10px;
      background-color: #c1c1ff;
    }
    li:hover{
      border: 1px solid #0089ab;
      background-color: #a5dbff;
      color:red;
      cursor: pointer;
    }
  }

}

</style>
