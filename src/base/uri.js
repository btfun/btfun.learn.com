var root=location.origin;
if(root.indexOf('192.168.2')!=-1)root='//47.107.81.175';

var GLOBAL={
  root: '//47.107.81.175',
}

export default {
  login: GLOBAL.root+'/login',//
  register: GLOBAL.root+'/register',//
  user: GLOBAL.root+'/user',//
}
