import PaletteData from '../../data/PaletteData';

export default (state = PaletteData.names[0], action) => {
  if (action.type === 'SELECT_PALETTE') {
    return action.value;
  }

  return state;
};
