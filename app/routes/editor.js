'use strict';

const ROOT_PATH = require('./index');
const PATH = `${ROOT_PATH}editor/`;
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  app.router.post(`${PATH}addEditor`, app.controller.editor.addEditor);
  app.router.post(`${PATH}updateEditor`, app.controller.editor.updateEditor);
  app.router.get(`${PATH}getInfoById`, app.controller.editor.getInfoById);
};
