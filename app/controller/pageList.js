'use strict';

const Controller = require('egg').Controller;

class pageListController extends Controller {
  async addPage() {
    const ctx = this.ctx;
    const req = ctx.request.body;
    // 获取请求体的内容
    ctx.body = await ctx.service.pageList.addPage(req);
  }

  async getInfoById() {
    const { ctx } = this;
    const req = ctx.request.query;
    const result = await ctx.service.pageList.getInfoById(req);
    ctx.body = result;
  }
  async getPageList() {
    const { ctx } = this;
    const result = await ctx.service.pageList.getPageList();
    ctx.body = result;
  }
  async deletePageById() {
    const ctx = this.ctx;
    const req = ctx.request.body;
    // 获取请求体的内容
    ctx.body = await ctx.service.pageList.deletePageById(req);
  }
}

module.exports = pageListController;
