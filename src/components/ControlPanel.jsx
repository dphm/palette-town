import React from 'react';

const ControlPanelStyle = () => ({
  margin: '8px',
  padding: '8px',
  border: '8px double black',
  borderRadius: '4px',
  boxShadow: 'inset 0 2px black, 0 2px black',

  flex: '25%',
  display: 'flex',
  flexDirection: 'column',

  lineHeight: '1.5em',
});

const ControlPanel = () => (
  <section className="ControlPanel" style={ ControlPanelStyle() }>
    <label htmlFor="FromColor">FROM:</label>
    <input id="FromColor" type="color" />

    <label htmlFor="ToColor">TO:</label>
    <input id="ToColor" type="color" />
  </section>
);

export default ControlPanel;
