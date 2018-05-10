import React from 'react';
import Color from './Color.jsx';

function textShadow(width, color) {
  return [
    `-${width} -${width} 0 ${color}`,
    ` ${width} -${width} 0 ${color}`,
    `-${width}  ${width} 0 ${color}`,
    ` ${width}  ${width} 0 ${color}`
  ].join(', ');
}

const ColorList = ({ colors }) => {
  let colorListItems = colors.map((color, i) => (
    <Color key={ i } rgb={ color } />
  ));

  return (
    <ul
      className="ColorList"
      style={{
        color: colors[0],
        textShadow: textShadow('2px', colors[3])
      }}
    >
      { colorListItems }
    </ul>
  );
};

export default ColorList;
