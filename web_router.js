var express = require('express');
var router = express.Router();

var topic = require('./controller/topic');

router.get('/topic/create', topic.edit);

router.post('/topic/create', topic.create);

router.get('/topics', topic.index);


module.exports = router;
