/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {
    security: {
      csrf: {
        enable: false,
      },
    },
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1605019174876_8025';

  // add your middleware config here
  config.middleware = [];

  config.mongoose = {
    client: {
      // url: 'mongodb://root:${autoapps}$@localhost:27017/autoapps', // 有用户名密码的情况
      url: 'mongodb://127.0.0.1/autoapps', // 无用户名密码的情况
      // url: 'mongodb://81.71.9.173:27017/autoapps', // 无用户名密码的情况
      options: {},
    },
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  exports.validate = {
    enable: true,
    package: 'egg-validate',
  };

  return {
    ...config,
    ...userConfig,
  };
};
