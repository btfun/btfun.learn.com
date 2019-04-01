
export default {
  changeTitle(title){
    if(document && document.querySelector){
      document.querySelector('title').innerHTML=`${title}-无情藏宝阁`||'无情藏宝阁工具'
    }
  },
  debounce(fn) {
    //多次操作转化为最后一次操作
      let timeout = null;
      return function () {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          fn.apply(this, arguments);
        }, 500);
      };
  },
  throttle(fn) {
    //将高频操作优化成低频操作
        let canRun = true;
        return function () {
          if (!canRun) return; // 在函数开头判断标记是否为true，不为true则return
          canRun = false; // 立即设置为false
          setTimeout(() => { // 将外部传入的函数的执行放在setTimeout中
            fn.apply(this, arguments);
            canRun = true;
          }, 100);
        };
  }

}
