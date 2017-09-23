import React from 'react';

import Developer from './developer.jsx';

class MainGame extends React.Component {
  constructor(props) {
    super(props);
    this.wsConnected = false;

    // instantiate web socket
    const HOST = location.origin.replace(/^http/, 'ws');
    this.ws = new WebSocket(HOST);

    // set a flag when we're connected
    this.ws.addEventListener('open', () => {
      console.log('[WEBSOCKET] connected.');
      this.wsConnected = true;
    });;

    // process the message
    this.ws.addEventListener('message', event => {
      const [type, message] = event.data.split('|');
      console.log(event.data);
      if (type === 'MESSAGE') {

      }
    });

    // keep the socket alive
    setInterval(() => {
      this.ws.send('PING');
    }, 15000);

    this.sendMessage = this.sendMessage.bind(this);
  }

  sendMessage(msg) {
    const { user } = this.props;
    // check if connected
    if (this.wsConnected) {
      this.ws.send(`MESSAGE|${user}:${msg}`);
    } else {
      // else, queue it
      this.ws.addEventListener('open', () => {
        this.ws.send(`MESSAGE|${user}:${msg}`);
      });
    }
  }

  genPage() {
    let item;
    switch (this.props.user) {
      // shown fib numbers
      case 'developer': {
        item = <Developer callback={this.sendMessage} />
        break;
      }

      // give option to flood
      // give option to reset
      case 'scrum-master': {

        break;
      }

      // show results
      case 'spectator':
      default: {

        break;
      }
    }
    return (
      <h1>{item}</h1>
    );
  }

  render() {
    return this.genPage();

  }
}

export default MainGame;