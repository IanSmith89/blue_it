'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');
const bcrypt = require('bcrypt-as-promised');
const ev = require('express-validation');
const validations = require('../validations/users');

router.post('/users', ev(validations.post), (req, res, next) => {
  const { username, password, first_name, last_name } = req.body;

  knex('users')
    .select(knex.raw('1=1'))
    .where('username', username)
    .first()
    .then((exists) => {
      if (exists) {
        const err = new Error('Username already exists');
        err.status = 401;
        throw err;
      }

      return bcrypt.hash(password, 12);
    })
    .then((hashed_password) => {
      return knex('users')
        .insert({
          username,
          hashed_password,
          first_name,
          last_name
        });
    })
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
