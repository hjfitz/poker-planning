import React from 'react';
import Grid from 'material-ui/Grid';

import { Selector, MainGame } from '../partial';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phase: 'selection',
      role: ''
    };

    this.genPhase = this.genPhase.bind(this);
    this.selectRole = this.selectRole.bind(this);
  }

  selectRole(role) {
    console.log(role);
    this.setState({ 
      role,
      phase: 'main-game',
     });
  }
  
  genPhase() {
    const { phase } = this.state;
    let content;
    switch (phase) {
      case 'selection': {
        content = <Selector callback={this.selectRole} />;
        break;
      }
      case 'main-game': {
        content = <MainGame user={this.state.role} />
        break;
      }
      default: {
        console.error('something went wrong!');
        content = <p>error</p>;
      }
    }
    return (
      <Grid container spacing={24} align="center" justify="center">
        {content}
      </Grid>
    );
  }

  render() {
    return this.genPhase();
  }
}

export default Home;