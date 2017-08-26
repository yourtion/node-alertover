# node-alertover

AlertOver (https://www.alertover.com ) client for Node.js

AlertOver Node.js 客户端

## 安装使用使用

```bash
npm install alertover --save
```

```javascript
const AlertOver = require('alertover');

const client = new AlertOver({
  source: 's-f01ff252-6609-47f3-a7ae-xxxxxx', // 默认发送源
  receiver: 'g-04523131-19b3-4abd-89f7-xxxxx', // 默认接收组
})

client.send('Hello', 'World').then(console.log).catch(console.log)
```

详情参数指定

```javascript
/**
  * 发送 Alert
  * 
  * @param {String} title 发送标题
  * @param {Stringany} content 发送内容
  * @param {boolean} [urgency=false] 是否紧急 
  * @param {String} [receiver=this.receiver] 接收组 
  * @param {String} [source=this.source] 发送源
  * @returns {Promise}
  * @memberof AlertOver
  */
send(title, content, urgency = false, receiver = this.receiver, source = this.source)
```
