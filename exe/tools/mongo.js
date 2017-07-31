/*
	负责连接MongoDB数据库
 */
const mongoose = require("mongoose");

//连接数据库
mongoose.connect("mongodb://192.168.27.82:27017/ajax_exer",{useMongoLient:true});

//监听数据库连接
mongoose.connection.once("open",function(){
	console.log("数据库已经连接");
});