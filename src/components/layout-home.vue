<template>
  <div class="home">
    456
  </div>
</template>

<script>
import util from '../base/util'
export default {
  name: 'HelloWorld',
  data () {
    return {
      keys: '',
      datalist:[1,2,3]
    }
  },created(){
    util.changeTitle('设计模式')

    this.singleton()

  },
  methods:{
    singleton(){
      /*
      * 单例模式的定义：保证一个类仅有一个实例，并提供一个访问它的全局访问点。
      * 实现的方法为先判断实例存在与否，如果存在则直接返回，
      * 如果不存在就创建了再返回，这就确保了一个类只有一个实例对象。
      */
      class CreateUser {
          constructor(name) {
              this.name = name;
              this.getName();
          }
          getName() {
               return this.name;
          }
      }
      //单例模式
       let ProxyMode =(function(){
        var instance;
         return function(){
           if(!instance){
             instance = new CreateUser(arguments);
           }
           return instance;
         }
      }())

      let a=new ProxyMode("CreateUser")
      let b=new ProxyMode("bbb")
      console.log(a===b)//同一个实例

    },
    strategy(){

      /*
      * 策略模式的定义：定义一系列的算法，把他们一个个封装起来，并且使他们可以相互替换。
      * 此模式让算法的变化独立于使用算法的客户.
      * 策略模式的目的：是将算法的使用和算法的实现分离开来。
      * 一个基于策略模式的程序至少由两部分组成；
      */

      /*策略类*/
      var levelOBJ = {
          "A": function(money) {
              return money * 4;
          },
          "B" : function(money) {
              return money * 3;
          },
          "C" : function(money) {
              return money * 2;
          }
      };
      /*环境类*/
      var calculateBouns =function(level,money) {
          return levelOBJ[level](money);
      };
      console.log(calculateBouns('A',10000)); // 40000
 


    },
    next(){
      this.$router.push({
        path:'/select'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" >
.home{
  height: 100%;


}

</style>
