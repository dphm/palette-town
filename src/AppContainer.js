import { connect } from 'react-redux';
import App from './App.jsx';

export default connect(
  state => ({
    selectedPalette: state.selectedPalette,
  }),
  dispatch => ({
    onSelectPalette: (event) => {
      dispatch({
        type: 'SELECT_PALETTE',
        value: event.currentTarget.value
      })
    }
  }),
)(App);
