import React from 'react';
import Color from './Color.jsx';

const ColorsContainerStyle = () => ({
  width: '100%',
  margin: '8px',
  border: '8px double black',
  borderRadius: '4px',
  boxShadow: 'inset 0 2px black, 0 2px black',
});

const ColorListStyle = () => ({
  listStyle: 'none',
  margin: 0,
  padding: 0,
  width: '100%',
  height: '100%',

  flex: '75%',
  display: 'flex',
  flexDirection: 'column'
});

const ColorList = ({ colors }) => {
  let colorListItems = colors.map((color, i) => Color({
    key: i,
    rgba: color.rgba,
    hex: color.hex
  }));

  return (
    <section id="ColorsContainer" style={ ColorsContainerStyle() }>
      <ul id="Colors" style={ ColorListStyle() }>
        { colorListItems }
      </ul>
    </section>
  );
};

export default ColorList;
