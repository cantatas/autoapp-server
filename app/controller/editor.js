'use strict';

const Controller = require('egg').Controller;

class EditorController extends Controller {
  async addEditor() {
    const ctx = this.ctx;
    const req = ctx.request.body;
    ctx.body = await ctx.service.editor.addEditor(req);
  }
  async updateEditor() {
    const ctx = this.ctx;
    const req = ctx.request.body;
    ctx.body = await ctx.service.editor.updateEditor(req);
  }

  async getInfoById() {
    const { ctx } = this;
    const req = ctx.request.query;
    const result = await ctx.service.editor.getInfoById(req);
    ctx.body = result;
  }
}

module.exports = EditorController;
