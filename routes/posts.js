'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');
const ev = require('express-validation');
const validations = require('../validations/posts');

const checkAuth = function(req, res, next) {
  if (!req.session.userId) {
    return res.sendStatus(401);
  }

  next();
};

router.get('/posts', (req, res, next) => {
  knex('posts')
    .then((posts) => {
      res.send(posts);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/posts', checkAuth, ev(validations.post), (req, res, next) => {
  const { title, image_url, description, topic_id } = req.body;

  knex('posts')
    .insert({
      title,
      image_url,
      description,
      rating: 0,
      user_id: req.session.userId,
      topic_id,
    })
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/posts/:topicId', checkAuth, (req, res, next) => {
  knex('posts')
    .where({
      topic_id: req.params.topicId
    })
    .then((posts) => {
      res.send(posts);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
