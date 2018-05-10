import React from 'react';
import Display from './components/Display.jsx';
import PaletteList from './components/PaletteList.jsx';
import PaletteData from './data/PaletteData';

class App extends React.Component {
  componentDidMount() {
    navigator.mediaDevices.getUserMedia({ video: { width: 320, height: 216 } })
      .then(this.props.onConnectStream)
      .catch((err) => console.error(err));
  }

  render() {
    let selectedPalette = this.props.selectedPalette;
    let colors = PaletteData.rgbColors(selectedPalette);

    return(
      <div
        className="AppContainer"
        role="presentation"
        style={{ backgroundColor: colors[3] }}
      >
        <Display colors={ colors } video={this.props.stream} />
        <PaletteList
          selectedPalette={ selectedPalette }
          onSelectPalette={ this.props.onSelectPalette }
        />
      </div>
    );
  }
}

export default App;
