'use strict';

const Joi = require('joi');

module.exports.post = {
  body: {
    name: Joi.string()
      .min(3)
      .max(15)
      .label('Topic Name')
      .trim()
      .required()
  }
};
