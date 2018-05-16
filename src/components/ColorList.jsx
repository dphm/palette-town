import React from 'react';
import Color from './Color.jsx';

function textShadow(width, rgb) {
  return [
    `-${width} -${width} 0 ${rgb}`,
    ` ${width} -${width} 0 ${rgb}`,
    `-${width}  ${width} 0 ${rgb}`,
    ` ${width}  ${width} 0 ${rgb}`
  ].join(', ');
}

const ColorList = ({colors}) => {
  let rgbStrings = colors.map((color, i) => color.rgbString);
  let colorListItems = rgbStrings.map((rgb, i) => (
    <Color key={i} rgb={rgb} />
  ));

  return (
    <ul
      className="ColorList"
      style={{
        color: rgbStrings[0],
        textShadow: textShadow('2px', rgbStrings[3])
      }}
    >
      {colorListItems}
    </ul>
  );
};

export default ColorList;
