'use strict';

const Joi = require('joi');

module.exports.post = {
  body: {
    title: Joi.string()
      .max(63)
      .label('Title')
      .trim()
      .required(),
    image_url: Joi.string()
      .label('Image url')
      .trim()
      .required(),
    description: Joi.string()
      .label('Description')
      .trim()
      .required(),
    topic_id: Joi.number()
      .required()
  }
};
