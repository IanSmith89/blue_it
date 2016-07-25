'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');
const bcrypt = require('bcrypt-as-promised');

router.post('/session', (req, res, next) => {
  let user;

  knex('users')
    .where('username', req.body.username)
    .first()
    .then((userRow) => {
      if (!userRow) {
        const err = new Error('Unauthorized');
        err.status = 401;
        throw err;
      }

      user = userRow;
      const hashed_password = user.hashed_password;

      return bcrypt.compare(req.body.password, hashed_password);
    })
    .then(() => {
      req.session.userId = user.id;
      res.cookie('loggedIn', true);
      res.sendStatus(200);
    })
    .catch(bcrypt.MISMATCH_ERROR, () => {
      const err = new Error('Unauthorized');
      err.status = 401;
      return next(err);
    })
    .catch((err) => {
      next(err);
    });
});

router.delete('/session', (req, res, _next) => {
  req.session = null;
  res.clearCookie('loggedIn');
  res.sendStatus(200);
});

module.exports = router;
