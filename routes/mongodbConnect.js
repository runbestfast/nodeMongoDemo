//����mongodb��
var mongodb = require('mongodb');
//����mongodb���ݿ�
var  server  = new mongodb.Server('localhost', 27017, {auto_reconnect:true});
var  db = new mongodb.Db('ship', server, {});
module.exports = db;
