import React from 'react';

const Color = ({rgb}) => (
  <li
    className="Color"
    style={{backgroundColor: rgb}}
  >
    {rgb}
  </li>
);

export default Color;
