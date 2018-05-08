import React from 'react';
import ColorList from './components/ColorList.jsx';
import PaletteList from './components/PaletteList.jsx';
import PaletteData from './data/PaletteData';

const App = (props) => {
  let selectedPalette = props.selectedPalette;
  let colors = PaletteData.rgbColors(selectedPalette);
  return(
    <div
      className="AppContainer"
      role="presentation"
      style={{ backgroundColor: colors[3] }}
    >
      <ColorList colors={ colors } />
      <PaletteList
        selectedPalette={ selectedPalette }
        onSelectPalette={ props.onSelectPalette }
      />
    </div>
  );
};

export default App;
