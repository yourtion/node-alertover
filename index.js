'use strict';

/**
 * @file AlertOver SDK
 * @author Yourtion Guo <yourtion@gmail.com>
 * 
 * AlertOver 消息发送接口 nodejs 版本
 * 文档：https://www.alertover.com/pages/api
 */
const https = require('https');
const querystring = require('querystring');

const request = function (options, data) {
  return new Promise((resolve, reject) => {
    const body = []

    var req = https.request(options, function (res) {
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
        body.push(chunk);
      });
      res.on('end', function() {
        var dataStr = body.join('').toString('utf8');
        resolve(dataStr)
      });
    });

    req.on('error', function (e) {
      reject(e)
    });

    req.write(data);
    req.end();
  })
}
/**
 * 阿里云短信服务 - 阿里大于
 */
class AlertOver {

  /**
   * 构造函数
   * @param {Object} options - 配置项
   * @param {String} options.source - 秘钥 AccessKeyId
   * @param {String} options.receiver - 秘钥A ccessKeySecret
   */
  constructor(options) {
    this.receiver = options.receiver;
    this.source = options.source;
    this.urgency = options.urgency || false;
  }

  send(title, content, urgency = false, receiver = this.receiver, source = this.source) {
    const data = {
      source,
      receiver,
      title,
      content
    };
    if (urgency) data.priority = urgency;
    const dataString = querystring.stringify(data);    
    const options = {
      method: "POST",
      host: "api.alertover.com",
      path: "/v1/alert",
      headers: {
        "Content-Type": 'application/x-www-form-urlencoded',
        "Content-Length": dataString.length
      }
    };
    return request(options, dataString);
  }
}

module.exports = AlertOver;