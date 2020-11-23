'use strict';

const ROOT_PATH = require('./index');
const PATH = `${ROOT_PATH}editor/`;
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  app.router.post(`${PATH}addPage`, app.controller.editor.addPage);
  app.router.get(`${PATH}getInfo`, app.controller.editor.getInfo);
};
