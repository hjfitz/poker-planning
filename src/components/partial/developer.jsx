import React from 'react';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';

const rules = {
  0: 'No time',
  1: '1 Hour',
  2: 'Half a day',
  3: '1 Day',
  5: '1-2 Days',
  8: '3-5 Days',
  13: '1 Week',
  21: '1 to 2 Weeks',
};

const Developer = props => {
  const { callback } = props;
  const keys = Object.keys(rules);

  const list = keys.map((key, idx) => {
    const info = rules[key];
    return (
      <div key={idx} onClick={() => { callback(key) }}>
        <ListItem button>
          <ListItemText primary={`${info} - ${key}`} />
        </ListItem>
        <Divider />
      </div>
    );
  });

  return (<List>{list}</List>);

}

export default Developer;