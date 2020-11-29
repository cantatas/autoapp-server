'use strict';

const Controller = require('egg').Controller;

class EditorController extends Controller {
  async addEditor() {
    const ctx = this.ctx;
    const req = ctx.request.body;
    ctx.body = await ctx.service.editor.addEditor(req);
  }

  async getInfoById() {
    const { ctx } = this;
    const result = await ctx.service.editor.getInfoById();
    ctx.body = result;
  }
}

module.exports = EditorController;
