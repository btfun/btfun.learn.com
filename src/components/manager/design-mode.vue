<template>
  <div class="home">

    目录
    <div class="container">
      <p>创建型</p>
      <ul>
        <li>策略模式（Strategy）</li>
        <li>单件模式（Singleton）</li>
        <li>工厂模式（Factory）</li>
        <li>抽象工厂模式（Abstract Factory）</li>
      </ul>
      <p>行为型</p>
      <ul>
        <li>模板模式(Template)</li>
        <li>命令模式(Command)</li>
        <li>迭代器模式（Iterator）</li>
        <li>观察者模式（Observer）</li>
        <li>状态模式（State）</li>
      </ul>
      <p>结构型</p>
      <ul>
        <li>装饰者模式（Decorator）</li>
        <li>代理模式（Proxy）</li>
        <li>外观模式（Facade）</li>
        <li>适配器模式（Adapter）</li>
      </ul>
    </div>


  </div>
</template>

<script>
import util from '../../base/util'

export default {
  name: 'HelloWorld',
  data () {
    return {
      keys: '',
      datalist:[1,2,3]
    }
  },created(){
    util.changeTitle('设计模式')

    // this.decorator()//装饰者模式

    // this.observer()//观察者模式

    this.datalist.forEach((item,index,list)=>{
      console.log(item,index,list)
    })

  },
  methods:{
    singleton(){
      /*
      * 单例模式 的定义：保证一个类仅有一个实例，并提供一个访问它的全局访问点。
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
      * 策略模式 的定义：定义一系列的算法，把他们一个个封装起来，并且使他们可以相互替换。
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
    proxy(){
      /*
      *  代理模式 为另一个对象提供一个替身或占位符以控制对这个对象的访问
      *
      */
      var imgFunc = (function() {
          var imgNode = document.createElement('img');
          document.body.appendChild(imgNode);
          return {
              setSrc: function(src) {
                  imgNode.src = src;
              }
          }
      })();
      var proxyImage = (function() {
          var img = new Image();
          img.onload = function() {
              imgFunc.setSrc(this.src);
          }
          return {
              setSrc: function(src) {
                  imgFunc.setSrc('./loading,gif');
                  img.src = src;
              }
          }
      })();
      proxyImage.setSrc('./pic.png');


    },
    decorator(){
      /**
      * 装饰者模式的定义：在不改变对象自身的基础上，在程序运行期间给对象动态地添加方法。它比继承更具有弹性。
      *
      * 适用的场景：原有方法维持不变，在原有方法上再挂载其他方法来满足现有需求；
      * 函数的解耦，将函数拆分成多个可复用的函数，再将拆分出来的函数挂载到某个函数上，
      * 实现相同的效果但增强了复用性。
      缺点：
      在设计中加入大量的小类，导致别人不理解设计方式；
      类型问题；
      增加代码的复杂度
      */
      Function.prototype.before = function(beforefn) {
          var self = this;    //保存原函数引用
          return function(){  //返回包含了原函数和新函数的 '代理函数'
              beforefn.apply(this, arguments);    //执行新函数，修正this
              return self.apply(this,arguments);  //执行原函数
          }
      }
      Function.prototype.after = function(afterfn) {
          var self = this;
          return function(){
              var ret = self.apply(this,arguments);
              afterfn.apply(this, arguments);
              return ret;
          }
      }
      var func = function() {
          console.log('2');
      }
      //func1和func3为挂载函数
      var func1 = function() {
          console.log('1');
      }
      var func3 = function() {
          console.log('3');
      }
      func = func.before(func1).after(func3);
      func();



    },
    observer(){
      /**
      * 观察者模式(发布-订阅模式)
      * 定义了对象之间的一对多依赖，这样一来，当一个对象改变状态时，它的所有依赖者都会收到通知并自动更新。
      */

     //发布者
     class Vue{
       constructor(options){
         this.options=options;
         this.$data=options.data;
         this.$el=document.querySelector(options.el);
         this._diretives={};//存放订阅者

         this.Observer(this.$data)
         this.Compile(this.$el)
       }
       //劫持函数
       Observer(data){
         for(let key in data){
             this._diretives[key]=[];//空数组类型

             let Val=data[key];//当前的值
             let _this=this._diretives[key];
             Object.defineProperty(this.$data,key,{
               get:function(){
                 return  Val;
               },
               set:function(newVal){
                   if(newVal!=Val){
                     Val=newVal;

                     _this.forEach((watch)=>{//遍历订阅者实例
                       watch.update();//更新试图
                     })
                   }
               }
             })
         }
       }
       //解析指令
       Compile(el){
         let nodes=el.children;//获取子元素
         for(let i=0; i<nodes.length; i++){
           let node=nodes[i];//当前元素

           if(node.children.length){
             this.Compile(node); //递归查自己
           }
           //查找指令
           if(node.hasAttribute('v-text')){
             let attr=node.getAttribute('v-text')
             // 获取属性里面的值 对号进入相应的订阅者数组
             this._diretives[attr].push(new Watcher(node, attr, this, 'innerHTML'))
           }

           if(node.hasAttribute('v-model')){
             let attr=node.getAttribute('v-model')
             this._diretives[attr].push(new Watcher(node, attr, this, 'value'))
             let _this=this;
             //事件监听
             node.addEventListener('input', function(){
                   //更新视图同步数据到模型
                   _this.$data[attr]=node.value
             })

           }

         }
       }

     }
     //订阅者
     class Watcher{
       constructor(el,vm, self, attr){
           this.el=el;
           this.vm=vm;
           this.self=self;
           this.attr=attr;

           this.update()//初始化数据
       }
       //更新视图
       update(){
         this.el[this.attr]=this.self.$data[this.vm];
         // div对象【innerHTML】=vue对象.data[]

       }
     }


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
  .container{
    padding: 20px;
    text-align: left;
    ul{
      margin-left: 20px;
    }
    li{
      line-height:30px;
    }
  }

}

</style>
