import React from 'react';
import PaletteData from '../data/PaletteData';

function doubleBorderStyle(color) {
  return {
    border: `8px double ${color}`,
    borderRadius: '4px',
    boxShadow: [
      `inset 0 2px ${color}`,
      `0 2px ${color}`
    ].join(', ')
  };
}

const PaletteList = ({ selectedPalette, onSelectPalette }) => {
  let names = PaletteData.names.map((name) => (
    <option
      key={ name }
      className="Palette"
      value={ name }
    >
      { name }
    </option>
  ));
  let color = PaletteData.rgbColors(selectedPalette)[0];
  return (
    <section
      className="PaletteListContainer"
      style={ doubleBorderStyle(color) }
    >
      <select
        className="PaletteList"
        size="4"
        defaultValue={ selectedPalette }
        onChange={ onSelectPalette }
        style={{ color: color }}
        autoFocus
      >
        { names }
      </select>
    </section>
  );
};

export default PaletteList;
