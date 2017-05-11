var logger = require('../common/logger');

var Topic = require('../models').Topic;

exports.edit = function(req, res, next){
  res.render('topic/edit');
};

exports.create = function(req, res, next){
  logger.info(req.body);
  var topic = new Topic();
  topic.title = req.body.title;
  topic.content = req.body.content;

  topic.save(function(err, data){
    if (err) {
      return next(err);
    }
    logger.info(data);
    res.redirect('/topics');
  });
};

exports.index = function(req, res, next){
  Topic.find({}, function(err, data){
    res.render('topic/list', {list: data});
  })
};
