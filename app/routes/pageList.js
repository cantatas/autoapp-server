'use strict';

const ROOT_PATH = require('./index');
const PATH = `${ROOT_PATH}pageList/`;

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  app.router.post(`${PATH}addPage`, app.controller.pageList.addPage);
  app.router.get(`${PATH}getInfoById`, app.controller.pageList.getInfoById);
  app.router.get(`${PATH}getPageList`, app.controller.pageList.getPageList);
  app.router.post(`${PATH}deletePageById`, app.controller.pageList.deletePageById);
};
