'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  app.router.post('/editor/addPage', app.controller.editor.addPage);
  app.router.get('/editor/getInfo', app.controller.editor.getInfo);
};