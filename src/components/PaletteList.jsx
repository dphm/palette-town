import React from 'react';
import PaletteName from './PaletteName.jsx';
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
    <PaletteName key={ name } name={ name } />
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
        value={ selectedPalette }
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
