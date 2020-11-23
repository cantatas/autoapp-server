'use strict';

module.exports = app => {
  const mongoose = app.mongoose; // 引入建立连接的mongoose
  const Schema = mongoose.Schema;

  // 数据库表映射
  const PageListSchema = new Schema({
    title: {
      type: String,
    },
    status: {// 0：未发布、1：已发布
      type: Number,
    },
    createTime: {
      type: Date,
      default: new Date().getTime(),
    },
    updateTime: {
      type: Date,
      default: new Date().getTime(),
    },
    createBy: {
      type: String,
    },
    updateBy: {
      type: String,
    },
  });

  return mongoose.model('PageList', PageListSchema, 'pageList');
};
