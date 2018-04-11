import React from 'react';
import ColorList from './components/ColorList.jsx';
import PaletteList from './components/PaletteList.jsx';
import PaletteData from './data/PaletteData';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onSelectPalette = this.onSelectPalette.bind(this);
    this.state = { selectedPalette: PaletteData.names[0] };
  }

  onSelectPalette(event) {
    let selectedPalette = event.currentTarget.value;
    this.setState({ selectedPalette });
  }

  render() {
    let selectedPalette = this.state.selectedPalette;
    let colors = PaletteData.rgbColors(selectedPalette);
    return (
      <div
        className="AppContainer"
        role="presentation"
        style={{ backgroundColor: colors[3] }}
      >
        <ColorList colors={ colors } />
        <PaletteList
          selectedPalette={ selectedPalette }
          onSelectPalette={ this.onSelectPalette }
        />
      </div>
    );
  }
}

export default App;
