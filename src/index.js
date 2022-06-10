const { WechatyBuilder } = require('wechaty');

const wechaty = WechatyBuilder.build(); // get a Wechaty instance

// 由于安全原因，此微信号不能使用网页版微信，目前此问题无法解决
wechaty
  .on('scan', (qrcode, status) => console.log(`Scan QR Code to login: ${ status }\nhttps://wechaty.js.org/qrcode/${ encodeURIComponent(qrcode) }`))
  .on('login', user => console.log(`User ${ user } logged in`))
  .on('message', message => console.log(`Message: ${ message }`));
wechaty.start();
