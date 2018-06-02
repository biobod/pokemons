import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import CircularProgress from '@material-ui/core/CircularProgress';

import DetailsSection from './detailsSection'

const styles = {
  card: {
    maxWidth: 345,
    margin: '0 auto',
    backgroundColor: '#f2f2f2'
  },
  media: {
    height: 0,
    paddingTop: '90%'
  },
};

class PokemonCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      details: {},
      showDetails: false,
    }
  }
  static getDerivedStateFromProps(nextProps) {
    const {
      base_experience, weight, stats, types, height
    } = nextProps.pokemon
    const details = {
      experience: base_experience,
      weight,
      height,
      stats: stats.map(stat => ({ [stat.stat.name]: stat.base_stat, effort: stat.effort })),
      types: types.map(t => t.type.name)
    }
    return { details }
  }
  
  showMore = () => {
    const { showDetails } = this.state
    this.setState({ showDetails: !showDetails })
  }
  
  render() {
    const { classes, pokemon, isLoading } = this.props
    const { details, showDetails } = this.state
   
    return (
      <Card className={classes.card}>
        <CardHeader title={isLoading ? 'loading...' : pokemon.name} />
        {!isLoading && <CardMedia
            className={classes.media}
            image={pokemon.sprites.front_default}
            title="Contemplative Reptile"
        />}
        <CardContent>
          {isLoading && <CircularProgress />}
          {!isLoading && showDetails && <DetailsSection details={details} />}
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={this.showMore}>
            {`${showDetails ? 'Hide' : 'Show'} Details`}
          </Button>
        </CardActions>
      </Card>
    );
  }
}

PokemonCard.propTypes = {
  classes: PropTypes.shape().isRequired,
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default withStyles(styles)(PokemonCard);
