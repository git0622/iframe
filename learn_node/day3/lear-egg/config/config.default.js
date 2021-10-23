module.exports = (app) => {
  let config = {}

  config.keys = 'zhufneg'
  //  支持跨域 需要安装一个插件  egg-cors
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  }
  config.security = {
    csrf: {
      enable: false
    }
  }
  config.view = {
    mapping: {
      '.html': 'ejs',
    }
  }


  return config;
}