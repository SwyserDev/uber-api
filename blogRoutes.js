(function() {
    'use strict';

    var express = require('express');
    var blogRoutes = express.Router();

    blogRoutes.get('/blog', function(req, res){
      console.log('/blog called...')
      res.status(200).json({ blogs: [] });
    });

    blogRoutes.get('/blog/:id', function(req, res){
      console.log('/blog/:id called...')
      res.status(200).json({ id: req.params.id });
    });

    blogRoutes.get('/', function(req, res){
      //res.json(result);
    });

    module.exports = {
        routes: function() {
            return blogRoutes;
        }
    };
})();
