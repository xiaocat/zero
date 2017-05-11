var express = require('express');
var router = express.Router();

var sign = require('./controller/sign');
var topic = require('./controller/topic');

router.get('/sign/signup', sign.signup);

router.get('/topic/create', topic.edit);
router.post('/topic/create', topic.create);
router.get('/topics', topic.index);


module.exports = router;
