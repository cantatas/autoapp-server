'use strict';

const Controller = require('egg').Controller;

class EditorController extends Controller {
  async addPage() {
    const ctx = this.ctx;
    const req = ctx.request.body
    // 获取请求体的内容
    ctx.body = await ctx.service.editor.addPage(req);
  }
  
  async getInfo() {
    const { ctx } = this;
    var result = await ctx.service.editor.getInfo();
    ctx.body = result;
  }
}

module.exports = EditorController;
