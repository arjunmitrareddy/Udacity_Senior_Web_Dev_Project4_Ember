/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var myServerRouter = express.Router();

  myServerRouter.get('/', function(req, res) {
    res.send({
      'my-server': []
    });
  });

  myServerRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  myServerRouter.get('/:id', function(req, res) {
    res.send({
      'my-server': {
        id: req.params.id
      }
    });
  });

  myServerRouter.put('/:id', function(req, res) {
    res.send({
      'my-server': {
        id: req.params.id
      }
    });
  });

  myServerRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/my-server', myServerRouter);
};
