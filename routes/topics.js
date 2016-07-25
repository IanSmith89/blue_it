'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');

const checkAuth = function(req, res, next) {
  if (!req.session.userId) {
    return res.sendStatus(401);
  }

  next();
};

router.get('/topics', checkAuth, (req, res, next) => {
  knex('topics')
    .then((topics) => {
      res.send(topics);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
