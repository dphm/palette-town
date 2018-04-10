import React from 'react';

const ColorStyle = (hex) => ({
  fontSize: '3em',
  backgroundColor: `#${hex}`,
  color: 'white',
  WebkitTextStroke: '2px black',

  flex: '1 1 100px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const Color = ({ key, rgba, hex }) => (
  <li
    key={key}
    className="Color"
    style={ ColorStyle(hex) }
  >
    { hex }
  </li>
);

export default Color;
