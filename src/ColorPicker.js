import React, { useState } from 'react';

const ColorPicker = ({ colors }) => {
  const [showColorList, setShowColorList] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setShowColorList(false);
    document.body.style.backgroundColor = color; // Set the body background color
  };

  return (
    <div>
      <button onClick={() => setShowColorList(true)}>Pick a color</button>
      {showColorList && (
        <div>
          {colors.map((color, index) => (
            <div
              key={index}
              style={{
                backgroundColor: color,
                width: '30px',
                height: '30px',
                display: 'inline-block',
                margin: '5px',
                cursor: 'pointer',
              }}
              onClick={() => handleColorClick(color)}
            ></div>
          ))}
        </div>
      )}
      {selectedColor && <p>You picked: {selectedColor}</p>}
    </div>
  );
};

export default ColorPicker;
