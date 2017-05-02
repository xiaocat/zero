var mongoose = require('mongoose');
//连接数据库
var db = mongoose.connect('mongodb://localhost/zero_dev');
// 创建模型
var Schema = mongoose.Schema;
//  定义了一个新的模型，但是此模式还未和users集合有关联
var userSchema = new Schema({
  name: String,
  password: String,
});
//  与users集合关联
exports.user = db.model('users', userSchema);
