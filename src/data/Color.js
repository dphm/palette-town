class Color {
  constructor({r, g, b}) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.values = [r, g, b, 1];
    this.rgbString = `rgb(${r}, ${g}, ${b})`;
  }
}

export default Color;
