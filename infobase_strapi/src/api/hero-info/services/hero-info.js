'use strict';

/**
 * hero-info service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hero-info.hero-info');
