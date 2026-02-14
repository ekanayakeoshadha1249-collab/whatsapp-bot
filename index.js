const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
  authStrategy: new LocalAuth()
});

client.on('qr', qr => {
  console.log('Scan QR code');
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log('WhatsApp Bot is READY!');
});

client.on('message', msg => {
  if (msg.body === 'hi') {
    msg.reply('Hello 👋 I am online WhatsApp bot!');
  }
});

client.initialize();
