import React from 'react';
import Display from './components/Display.jsx';
import PaletteList from './components/PaletteList.jsx';
import PaletteData from './data/PaletteData';

const DISPLAY_WIDTH = 320;
const DISPLAY_HEIGHT = 216;

class App extends React.Component {
  componentDidMount() {
    let constraints = {
      video: {
        width: DISPLAY_WIDTH,
        height: DISPLAY_HEIGHT
      }
    };

    navigator.mediaDevices.getUserMedia(constraints)
      .then(this.props.onConnectStream)
      .catch((err) => console.error(err));
  }

  render() {
    let colors = PaletteData.colors(this.props.selectedPalette);
    let bgColor = colors[3];
    return(
      <div
        className="AppContainer"
        role="presentation"
        style={{backgroundColor: bgColor.rgbString}}
      >
        <Display
          selectedPalette={this.props.selectedPalette}
          video={this.props.stream}
          width={DISPLAY_WIDTH}
          height={DISPLAY_HEIGHT}
        />
        <PaletteList
          selectedPalette={this.props.selectedPalette}
          onSelectPalette={this.props.onSelectPalette}
        />
      </div>
    );
  }
}

export default App;
