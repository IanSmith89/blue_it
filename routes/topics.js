'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');

const ev = require('express-validation');
const validations = require('../validations/topics');

// const checkAuth = function(req, res, next) {
//   if (!req.session.userId) {
//     return res.sendStatus(401);
//   }
//
//   next();
// };

router.get('/topics', (req, res, next) => {
  knex('topics')
    .then((topics) => {
      res.send(topics);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/topics', ev(validations.post), (req, res, next) => {
  const { name } = req.body;
  const userId = req.session.userId;

  knex('topics')
    .insert({
      name,
      user_id: userId
    })
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
