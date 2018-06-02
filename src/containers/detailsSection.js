import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  dashboardWrapper: {
    position: 'relative',
    margin: '0 auto',
  },
  mainBlock: {
    textAlign: 'left',
    textTransform: 'capitalize'
    
  },
  stats: {
    '&:nth-child(even)': {
      paddingLeft: 8
    }
  }
});

const DetailsSection = ({ details, classes }) => {
  const {
    experience, weight, height, stats, types
  } = details
  return (
    <div className={classes.mainBlock}>
      <Typography>Experience: {experience}</Typography>
      <Typography>Weight: {weight}</Typography>
      <Typography>Height: {height}</Typography>
      <div>{stats.map(s => (
        <Typography>
          {Object.keys(s).map(key => <span className={classes.stats}>{key}: {s[key]},</span>)}
        </Typography>
      ))}
      </div>
      <Typography>types: {types.map(type => <span className={classes.stats}>{type},</span>)}</Typography>
    </div>
  )
}

DetailsSection.propTypes = {
  classes: PropTypes.shape().isRequired,
  details: PropTypes.shape().isRequired,
};
export default withStyles(styles)(DetailsSection)

