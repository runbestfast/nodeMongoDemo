var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  //查询接口
    var handle = req.query["handle"];
      switch(handle)
      {
          case "add":
              router.add(req, res);
              break;
          case "update":
              router.update(req, res, db);
              break;
          case "del":
              router.del(req, res, db);
              break;
          case "find":
              router.find(req, res, db);
              break;
          default:
              console.log("无法处理请求");
              break;
      }
    res.render('shipSearch', { title: 'Express' });
}).post("/", function(req, res, next){

});


router.createDb=function(){
    var dbConnect = require('./routes/mongodbConnect');
    var mongo=new dbConnect();
    return mongo;
}



module.exports = router;
