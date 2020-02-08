import Color from './color';

class PaletteData {
  constructor(palettes) {
    this.palettes = palettes
  }

  get names() {
    return Object.keys(this.palettes)
  }

  colors(name) {
    if (name) {
      return this.palettes[name].map((obj) => {
        return new Color(obj)
      })
    }
  }
}

export default PaletteData;
