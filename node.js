// //引入http模块
// var http = require("http");
// //设置主机名
// var hostName = '127.0.0.1';
// //设置端口
// var port = 8081;
// //创建服务
// var server = http.createServer(function(req,res){
//     // res.setHeader('Content-Type', 'text/plain');
//     // res.setHeader("Access-Control-Allow-Origin", "*")
//     // res.setHeader("Access-Control-Allow-Headers", "Origin, X-Ruquese-With, Content-Type, Accept")
//     // res.end("hello nodejs");
//     res.setHeader('Content-Type','text/plain');
//     res.setHeader('Access-Control-Allow-Origin',"*")
//     res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

// res.setHeader('Set-Cookie',['environment=cowshield;path=http://127.0.0.1:8081/test']);
//     // setTimeout(() => {
//         res.end("hello nodejs");
//     // }, 5000)

// });

// var server1 = http.createServer(function(req, res) {
//     res.end('test接口')
// })
// server1.listen('http://127.0.0.1:8081/test')
// server.listen(port,hostName,function(){
//     console.log(`服务器运行在http://${hostName}:${port}`);
// });
// 'use strict';
// var express = require('express');
// var app = express();
// var dataOne = require('./dataOne');  // 引入数据
// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.json());
// const route = express.Router();
// route.use((req,res,next)=>{
//     // console.log('这里是拦截器');
//     next();
// })
// route.post('/test',(req,res)=>{
//     res.send('this is the home router');
// })

// //设置跨域访问
// app.all('*', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//     res.header("X-Powered-By",' 3.2.1');
//     res.header("Content-Type", "application/json;charset=utf-8");
//     next();
// });

// // 以下是数据接口
// // 首页图片
// app.get('/456',function(req,res){
// //写个接口123
//     res.status(200),
//     res.json(dataOne.questionsT)
// });

// app.get('/123',function(req,res){
// //写个接口123
//     res.status(200),
//     res.json(dataOne.questions)
// });

// // 以下是配置
// app.use('/static',express.static("./static"));
// //配置服务端口
// var server = app.listen(8080, function () {
//     var host = server.address().address;
//     var port = server.address().port;
//     console.log('直接访问 http://127.0.0.1:8080/123');
// })

var express = require("express");
var url = require("url");
var app = express();
var hostName = "127.0.0.1";
var port = 8081;

app.all("*", function (req, res, next) {//允许跨域
  res.header(
    "Access-Control-Allow-Origin",
    "file:///Users/xiayufei/Workspace/newegg_sellers/newegg_seller.html"
  );
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", " 3.2.1");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
// app.use(cors());
app.get("/", function (req, res) {
  // console.log("请求url：",req.path)
  // console.log("请求参数：",req.query)
  res.setHeader("Set-Cookie", [
    "environment=cowshield;path=http://127.0.0.1:8081/",
  ]);
  res.send("请求");
});
// app.post("/test", function (req, res) {//发送post请求报错？
//   res.send("请求");
// });
app.get("/getComment", function (req, res) {
  // console.log("请求url：",req.path)
  // console.log("请求参数：",req.query)
  res.send("这是get请求");
});

app.listen(port, hostName, function () {
  console.log(`服务器运行在http://${hostName}:${port}`);
});

// //数据库相关（安装失败？）
// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const app = new express();
// app.use(bodyParser.json()); // for parsing application/json
// app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
// // 连接数据库
// mongoose.connect("mongodb://localhost/test");
// mongoose.connection
//   .on("open", function () {
//     process.env.connect_database = 1;
//     console.log("数据库连接成功");
//   })
//   .on("error", function () {
//     process.env.connect_database = 0;
//     console.log("数据库连接失败");
//   });
