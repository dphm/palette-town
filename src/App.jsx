import React from 'react';
import ControlPanel from './components/ControlPanel.jsx';
import ColorList from './components/ColorList.jsx';
import PalettesData from './palettes.json';

const PaletteNames = Object.keys(PalettesData.palettes);

const App = () => {
  let controlPanel = ControlPanel({ paletteNames: PaletteNames });
  let colorList = ColorList({ colors: PalettesData.palettes.brown });

  console.log(PaletteNames)

  return (
    <div className="AppContainer" role="presentation">
      { colorList }
      { controlPanel }
    </div>
  );
};

export default App;
