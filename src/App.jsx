import React from 'react';
import ControlPanel from './components/ControlPanel.jsx';
import ColorList from './components/ColorList.jsx';

const AppStyle = {
  width: '100%',
  height: '100%',

  display: 'flex',
  flexDirection: 'row',
};

const App = () => {
  let controlPanel = ControlPanel();
  let colorList = ColorList({ colors: [
    { rgba: 'rgba(0, 0, 0, 1.0)', hex: '000000' },
    { rgba: 'rgba(255, 255, 255, 1.0)', hex: 'FFFFFF' },
  ]});

  return (
    <div
      id="AppContainer"
      role="presentation"
      style={ AppStyle }
    >
      { controlPanel }
      { colorList }
    </div>
  );
};

export default App;
