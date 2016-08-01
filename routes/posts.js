'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');
const ev = require('express-validation');
const validations = require('../validations/posts');

router.get('/posts', (req, res, next) => {
  knex('posts')
    .then((posts) => {
      res.send(posts);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/posts', ev(validations.post), (req, res, next) => {
  const { title, imageUrl, description, topicId } = req.body;

  knex('posts')
    .insert({
      title,
      image_url: imageUrl,
      description,
      rating: 0,
      user_id: req.session.userId,
      topic_id: topicId,
    })
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/posts/:topicId', (req, res, next) => {
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
