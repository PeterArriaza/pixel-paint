import React, { useState } from 'react';

const CanvasOptions = props => {
  const [size, setSize] = useState(20);
  const [title, setTitle] = useState('');
  return (
    <div>
      {/* <input
        type="number"
        placeholder="Canvas Size"
        min="0"
        onChange={e => setSize(e.target.value)}
      />
      <button type="button" onClick={() => props.setCanvasSize(size)}>
        Resize Canvas
      </button> */}
      <input
        type="text"
        placeholder="Name of Your Masterpiece"
        s
        onChange={e => setTitle(e.target.value)}
      />
      <button type="button" onClick={() => props.saveCanvas(title)}>
        Save Canvas
      </button>
      <select onChange={e => props.openCanvas(e.target.value)}>
        {props.canvases.map(canvas => (
          <option value={canvas}>{canvas}</option>
        ))}
      </select>
    </div>
  );
};

export default CanvasOptions;
