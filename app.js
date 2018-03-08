// 入口文件

// 加载express模块
var express = require('express');
// 加载模版处理模块
var swig = require('swig');
// 加载数据库模块
var mongoose = require('mongoose');
// 创建app应用 => nodejs http.createSever();
var app = express();

// 配置应用模版
// 定义当前应用的模版引擎
// 第一个参数，模版引擎的名称，同时也是模版文件的后缀，第二个参数表示用于解释处理模版内容的方法
app.engine('html',swig.renderFile)
// 设置模版文件存放的目录，第一个参数必须是views，第二个是目录
app.set('views','./views');
// 注册所使用的模版引擎，第一个参数必须为view engine ，第二个参数和app.engine这个方法中定义的模版引擎名称（第一个参数）是一致的
app.set('view engine','html');
// 在开发过程中，取消模版缓存
swig.setDefaults({cache:false});

// 设置静态文件托管
// 单用户访问的url以/public开始，那么返回对应__dirname+'/public'下的文件
app.use('/public',express.static(__dirname + '/public'));

// 首页
// req request对象
// res response对象
// next 函数

// app.get('/',function(req,res,next){
// 	// res.send('<h1>欢迎ryne</h1>')
// 	// 读取views目录下的指定文件，解析并返回给客户端
// 	// 第一个参数表示模版的文件，相当于views目录
// 	// 第二个参数是传递给模版使用的数据
// 	res.render('index');
// })

// app.get('/main.css',function(req,res,next){
// 	res.setHeader('content-type','text/css');
// 	res.send("body{background:red;}");
// })

// 根据不同的功能划分模块

app.use('/admin',require('./routers/admin'));
app.use('/api',require('./routers/api'));
app.use('/',require('./routers/main'));




mongoose.content();





// 监听http请求
app.listen(8181);

// 用户发送http请求 ->url ->解析路由 ->找到匹配规则 ->指定绑定函数执行，返回对应内容给用户
//public ->静态 ->直接读取指定目录的内容，返回给用户 ->动态  ->处理业务逻辑，加载模版，解析模版，返回给用户