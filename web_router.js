var express = require('express');
var router = express.Router();

var topic = require('./controller/topic');

router.get('/topic/create', topic.create);


module.exports = router;
