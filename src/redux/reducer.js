import { combineReducers } from 'redux';
import selectedPalette from './modules/selectedPalette';
import stream from './modules/stream';

export default combineReducers({
  selectedPalette,
  stream,
});
