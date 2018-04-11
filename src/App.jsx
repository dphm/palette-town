import React from 'react';
import ColorList from './components/ColorList.jsx';
import PaletteList from './components/PaletteList.jsx';
import PalettesData from './palettes.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedPalette: props.selectedPalette };
  }

  render() {
    return (
      <div className="AppContainer" role="presentation">
        <ColorList colors={ PalettesData.palettes[this.state.selectedPalette] } />
        <PaletteList paletteNames={ Object.keys(PalettesData.palettes) } />
      </div>
    );
  }
}

export default App;
