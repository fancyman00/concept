'use strict';

/**
 * product-article service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::product-article.product-article');
