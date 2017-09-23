import EventEmitter from 'EventEmitter';

class GameSocket {
  constructor() {
    // stop heroku from closing connections
    // WebSocket.prototype.sendMessage = message => ws.send(`MESSAGE|${message}`);
    // keep the socket alive
    window.setInterval(() => {
      ws.send('PING');
    }, 15000);

    this.isConnected = false;
    this.host = location.origin.replace(/^http/, 'ws');
    this.ws = new WebSocket(this.host);
    this.emitter = new EventEmitter();

    this.ws.onopen = this.wsOpen;
    this.ws.onmessage = event => {
      console.log(event.data);
      if (event.data.split('|')[0] === 'MESSAGE') {
        this.emitter.emit('message', event.data);
      }
    }
  }

  wsOpen() {
    console.log('[WEBSOCKET] connected.');
    this.isConnected = true;
    this.ws.sendMessage('oi');
  }

  sendMessage(message) {
    this.ws.send(`MESSAGE|${message}`);
  }
}

export default GameSocket;
