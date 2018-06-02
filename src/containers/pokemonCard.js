import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';

const styles = {
  card: {
    maxWidth: 345,
    margin: '0 auto',
  },
  media: {
    height: 0,
    paddingTop: '90%'
  },
};

const PokemonCard = ({ classes, name, image }) => {
  return (
    <div>
      <Card className={classes.card}>
        <CardHeader title={name} />
        <CardMedia
          className={classes.media}
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          Some text
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

PokemonCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PokemonCard);
