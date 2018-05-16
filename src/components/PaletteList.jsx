import React from 'react';
import PaletteName from './PaletteName.jsx';
import PaletteData from '../data/PaletteData';

function doubleBorderStyle(rgb) {
  return {
    border: `8px double ${rgb}`,
    borderRadius: '4px',
    boxShadow: [
      `inset 0 2px ${rgb}`,
      `0 2px ${rgb}`
    ].join(', ')
  };
}

const PaletteList = ({selectedPalette, onSelectPalette}) => {
  let names = PaletteData.names.map((name) => (
    <PaletteName key={name} name={name} />
  ));
  let rgb = PaletteData.colors(selectedPalette)[0].rgbString;
  return (
    <section
      className="PaletteListContainer"
      style={doubleBorderStyle(rgb)}
    >
      <select
        className="PaletteList"
        size="4"
        value={selectedPalette}
        onChange={onSelectPalette}
        style={{color: rgb}}
        autoFocus
      >
        {names}
      </select>
    </section>
  );
};

export default PaletteList;
