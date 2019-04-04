<template>
  <div class="address">
      <div class="panel">
        <p>实现一个new操作符</p>
        <div>
          new操作符做了这些事：
          它创建了一个全新的对象。
          它会被执行[[Prototype]]（也就是__proto__）链接。
          它使this指向新创建的对象。。
          通过new创建的每个对象将最终被[[Prototype]]链接到这个函数的prototype对象上。
          如果函数没有返回对象类型Object(包含Functoin, Array, Date, RegExg, Error)，那么new表达式中的函数调用将返回该对象引用。
        </div>

      </div>


  </div>
</template>

<script>
import util from '../../base/util'

export default {
  name: 'HelloWorld',
  data () {
    return {
      address: ''
    }
  },
  created(){
    util.changeTitle('手写代码')

    this.newObject()

  },
  methods:{
    newObject(){

      function New(func) {
          var res = {};
          if (func.prototype !== null) {
              res.__proto__ = func.prototype;
          }
          var ret = func.apply(res, Array.prototype.slice.call(arguments, 1));
          if ((typeof ret === "object" || typeof ret === "function") && ret !== null) {
              return ret;
          }
          return res;
      }

      function fun(name){
        this.name=name;
      }
      fun.prototype.sayName=function(){
        console.log('sayName:',this.name)
      }

      let a=New(fun,'xiao');
      a.sayName()

      let b=new fun('ming')
      b.sayName()

    },
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

}
</style>
