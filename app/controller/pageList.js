'use strict';

const Controller = require('egg').Controller;

class pageListController extends Controller {
  async addPage() {
    const ctx = this.ctx;
    const req = ctx.request.body;
    // 获取请求体的内容
    ctx.body = await ctx.service.pageList.addPage(req);
  }

  async getInfo() {
    const { ctx } = this;
    const result = await ctx.service.pageList.getInfo();
    ctx.body = result;
  }
}

module.exports = pageListController;
