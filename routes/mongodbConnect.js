//引入mongodb库
var mongodb = require('mongodb');
//连接mongodb数据库
var  server  = new mongodb.Server('localhost', 27017, {auto_reconnect:true});
var  db = new mongodb.Db('ship', server, {});
module.exports = db;
