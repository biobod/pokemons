import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'

const styles = theme => ({
  dashboardWrapper: {
    position: 'relative',
    margin: '0 auto',
  },
});

const ButtonsSection = ({
  children, classes, showPreviousPokemon, showNextPokemon, isLoading
}) => (
  <div className={classes.dashboardWrapper}>
    <div>
      <Button
        variant="raised"
        color="default"
        onClick={showPreviousPokemon}
        disabled={isLoading}
      >
        Previous
      </Button>
      <Button
        variant="raised"
        color="default"
        onClick={showNextPokemon}
        disabled={isLoading}
      >
        Next
      </Button>
    </div>
    {children}
  </div>
)

ButtonsSection.propTypes = {
  classes: PropTypes.shape().isRequired,
  children: PropTypes.shape(),
  showPreviousPokemon: PropTypes.func.isRequired,
  showNextPokemon: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};
export default connect(state => ({
  isLoading: state.isLoading,
}))(withStyles(styles)(ButtonsSection))
 
