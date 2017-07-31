var express = require("express");
require("./tools/mongo")
var CityModel = require("./models/city");
var app = express();
app.use(express.static("public"));
/*设置省*/
app.get("/getSheng",function (req,res) {
    CityModel.find({level:1},function (err,docs) {
        if(!err && docs!=null){
            res.send({status:"ok",sheng:docs});
        }else{
            res.send({status:"error"})
        }
    });
});
/*设置市*/
app.get("/getShi",function (req,res) {
    var sheng=req.query.sheng;
    CityModel.find({level:2,sheng:sheng},function (err,docs) {
        if(!err&&docs!=null){
            res.send({status:"ok",di:docs});
        }
    });
});

/*设置区县*/
app.get("/getXian",function (req,res) {
   var sheng=req.query.sheng;
   var di=req.query.di;
   CityModel.find({level:3,sheng:sheng,di:di},function (err,docs) {
       if(!err && docs!=null){
           res.send({status:"ok",xian:docs});
       }else{
           res.send({status:"error"});
       }
   });
});

app.listen(3000,function () {
    console.log("ok");
});