var express = require('express');
var router = express.Router();

var user = require('../database/mongodb.js').user;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('users/index', { title: 'Express' });
});


/* login */
router.get('/login', function(req, res) {
    res.render('users/login', { title: 'login' });
});

/* ucenter */
router.post('/ucenter', function(req, res) {
	  var query = {name: req.body.name, password: req.body.password};
	  (function(){
			  user.count(query, function(err, doc){    //count返回集合中文档的数量，和 find 一样可以接收查询条件。query 表示查询的条件
					if(doc == 1){
						console.log(query.name + ": 登陆成功 " + new Date());
						res.render('users/ucenter', { title:'ucenter' });
					}else{
						console.log(query.name + ": 登陆失败 " + new Date());
						res.redirect('/');
					}
		  	});
	  })(query);
});

module.exports = router;