'use strict';

/**
 * about-info service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::about-info.about-info');
