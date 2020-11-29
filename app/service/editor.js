'use strict';

const Service = require('egg').Service;

class EditorService extends Service {
  async getInfoById() {
    return await this.ctx.model.Editor.find({});
  }
  addEditor(req) {
    const ctx = this.ctx;
    return ctx.model.Editor.create(req).then(res => {
      return { success: true, msg: res, code: 0 };
    }).catch(err => {
      return { success: false, err };
    });
  }
}

module.exports = EditorService;
