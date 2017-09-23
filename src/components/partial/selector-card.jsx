import React from 'react';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';


const lookup = {
  developer: 'Trust the developer.',
  'scrum-master': 'Protects the developer from the Product Owner',
  spectator: 'The person who sees stuff',
};

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 300,
  },
};


const SelectorCard = props => {
  const { user, callback } = props;
  const imageUrl = `/public/images/${user}.png`;
  return (
    <Card style={styles.card}>
      <CardMedia style={styles.media} image={imageUrl} title={user} />
      <CardContent>
        <Typography type="headline" component="h2">{user}</Typography>
        <Typography component="p">{lookup[user]}</Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => callback(user)} dense color="primary">Select</Button>
      </CardActions>
    </Card>
  );
}

export default SelectorCard;