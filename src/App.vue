<template>
  <div id="app" >

    <router-view/>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
/*定义滚动条宽高及背景，宽高分别对应横竖滚动条的尺寸*/
.scrollbar::-webkit-scrollbar{
    width: 10px;
    height: 20px;
    background-color: #f9f9f9;
}
/*定义滚动条的轨道，内阴影及圆角*/
.scrollbar::-webkit-scrollbar-track{
    // -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    border-radius: 10px;
    background-color: #f9f9f9;
}
/*定义滑块，内阴影及圆角*/
.scrollbar::-webkit-scrollbar-thumb{
    width: 10px;
    height: 20px;
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.2);
    background-color: #f5f5f5;
}

a {
  color: #1FB8FF;
  user-select:none;
}
ul{
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
