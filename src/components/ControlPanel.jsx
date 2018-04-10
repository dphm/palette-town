import React from 'react';

const ControlPanel = ({ paletteNames }) => {
  let names = paletteNames.map((name, i) => (
    <li key={ i } className="PaletteName">
      { name }
    </li>
  ));
  return (
    <section className="ControlPanel">
      <ul className="PaletteNames">
        { names }
      </ul>
    </section>
  );
};

export default ControlPanel;
