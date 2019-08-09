let Service = require('node-windows').Service;
 
let svc = new Service({
  name: 'node_ss',    //服务名称
  description: '测试项目服务器', //描述
  script: 'local.js' //nodejs项目要启动的文件路径
});
 
svc.on('install', () => {
  svc.start();
});
 
svc.install();
