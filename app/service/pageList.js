'use strict';

const Service = require('egg').Service;

class pageListService extends Service {
  async getInfoById(req) {
    return await this.ctx.model.PageList.find(req);
  }
  async getPageList() {
    return await this.ctx.model.PageList.find({});
  }
  addPage(req) {
    const ctx = this.ctx;
    return ctx.model.PageList.create(req).then(res => {
      return { success: true, msg: res, code: 0 };
    }).catch(err => {
      return { success: false, err };
    });
  }
  deletePageById(req) {
    const ctx = this.ctx;
    return ctx.model.PageList.remove(req).then(res => {
      return { success: true, msg: res, code: 0 };
    }).catch(err => {
      return { success: false, err };
    });
  }
}

module.exports = pageListService;
