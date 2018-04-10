import React from 'react';

const Color = ({ key, rgb }) => (
  <li
    key={key}
    className="Color"
    style={{ backgroundColor: rgb }}
  >
    { rgb }
  </li>
);

export default Color;
