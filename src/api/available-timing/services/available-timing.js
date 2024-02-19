'use strict';

/**
 * available-timing service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::available-timing.available-timing');
