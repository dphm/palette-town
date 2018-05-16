import Color from './Color';
import data from './palettes.json';

const PaletteData = {
  names: Object.keys(data.palettes),
  colors: (name) => {
    return data.palettes[name].map((obj) => {
      return new Color(obj);
    });
  }
};

export default PaletteData;
