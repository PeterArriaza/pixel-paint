import React, { useState } from 'react';
import './App.css';
import Canvas from './components/Canvas';
import ColorPicker from './components/ColorPicker';
import CanvasOptions from './components/CanvasOptions';

const App = () => {
  const [color, setColor] = useState(0);
  const [canvasSize, setCanvasSize] = useState(20);

  return (
    <div className="App">
      <CanvasOptions setCanvasSize={size => setCanvasSize(size)} />
      <div className="canvas">
        <ColorPicker currentColor={color} setColor={color => setColor(color)} />
        <Canvas currentColor={color} size={canvasSize} />
      </div>
    </div>
  );
};

export default App;
