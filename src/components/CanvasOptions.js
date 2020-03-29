import React, { useState } from 'react';

const CanvasOptions = props => {
  const [size, setSize] = useState(20);
  return (
    <div>
      <input
        type="number"
        placeholder="Canvas Size"
        min="0"
        onChange={e => setSize(e.target.value)}
      />
      <button type="button" onClick={() => props.setCanvasSize(size)}>
        Resize Canvas
      </button>
    </div>
  );
};

export default CanvasOptions;
