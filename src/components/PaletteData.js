import data from '../palettes.json';

function rgb(color) {
  return `rgb(${color.r}, ${color.g}, ${color.b})`;
}

const PaletteData = {
  names: Object.keys(data.palettes),
  rgbColors: (name) => (data.palettes[name].map(rgb))
};

export default PaletteData;
