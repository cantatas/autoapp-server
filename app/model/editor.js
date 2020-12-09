'use strict';

module.exports = app => {
  const mongoose = app.mongoose; // 引入建立连接的mongoose
  const Schema = mongoose.Schema;

  // 数据库表映射
  const EditorSchema = new Schema({
    page_id: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    formAttribute: {
      type: Object,
      required: true,
    },
    createTime: {
      type: Date,

    },
    updateTime: {
      type: Date,
    },
    createBy: {
      type: String,
    },
    updateBy: {
      type: String,
    },
  });

  return mongoose.model('Editor', EditorSchema, 'editor');
};
