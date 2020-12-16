'use strict';

const Service = require('egg').Service;

class EditorService extends Service {
  async getInfoById(req) {
    return await this.ctx.model.Editor.findOne({ page_id: req._id });
  }
  addEditor(req) {
    const ctx = this.ctx;
    return ctx.model.Editor.create(req).then(res => {
      return { success: true, msg: res, code: 0 };
    }).catch(err => {
      return { success: false, err };
    });
  }
  updateEditor(req) {
    const ctx = this.ctx;
    const config = {
      query: {
        id: req._id,
      },
      model: {
        formAttribute: req.formAttribute,
      },
    };
    return ctx.model.Editor.findOneAndUpdate(config.id, config.model).then(res => {
      return { success: true, msg: res, code: 0 };
    }).catch(err => {
      return { success: false, err };
    });
  }
}

module.exports = EditorService;
