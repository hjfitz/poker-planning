import React from 'react';
import Grid from 'material-ui/Grid';

import SelectorCard from './selector-card.jsx';

const Selector = props => {
  const { callback: cb } = props;
  return (
    <Grid 
      className="selector"
      justify="center" 
      align="center" 
      spacing={24} 
      container
    >
      <Grid xs={12} md={3} item>
        <SelectorCard user="developer" callback={cb} />
      </Grid>
      <Grid xs={12} md={3} item>
        <SelectorCard user="scrum-master" callback={cb} />
      </Grid>
      <Grid xs={12} md={3} item>
        <SelectorCard user="spectator" callback={cb} />
      </Grid>
    </Grid>
  );
};

export default Selector;