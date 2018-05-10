import { connect } from 'react-redux';
import App from './App.jsx';

export default connect(
  state => ({
    selectedPalette: state.selectedPalette,
    stream: state.stream
  }),
  dispatch => ({
    onSelectPalette: (event) => {
      dispatch({
        type: 'SELECT_PALETTE',
        value: event.currentTarget.value
      })
    },
    onConnectStream: (stream) => {
      dispatch({
        type: 'CONNECT_STREAM',
        value: stream
      })
    }
  }),
)(App);
