import React from 'react';
import Color from './Color.jsx';

function rgb(color) {
  return `rgb(${color.r}, ${color.g}, ${color.b})`;
}

const ColorList = ({ colors }) => {
  let colorListItems = colors.map((color, i) => Color({
    key: i,
    rgb: rgb(color)
  }));

  return (
    <section className="ColorListContainer">
      <ul
        className="ColorList"
        style={{
          color: rgb(colors[3]),
          WebkitTextStrokeWidth: "2px",
          WebkitTextStrokeColor: rgb(colors[0])
        }}
      >
        { colorListItems }
      </ul>
    </section>
  );
};

export default ColorList;
