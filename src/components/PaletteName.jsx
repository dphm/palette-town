import React from 'react';

const PaletteName = ({ name }) => {
  return (
    <option
      className="PaletteName"
      value={ name }
    >
      { name }
    </option>
  );
};

export default PaletteName;
