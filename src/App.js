import React, { useState, useEffect } from 'react';
import './App.css';
import './colors.css';
import Canvas from './components/Canvas';
import ColorPicker from './components/ColorPicker';
import CanvasOptions from './components/CanvasOptions';
import { storageAvailable } from './storageAvailable';

const App = () => {
  const [color, setColor] = useState(0);
  const [canvasSize, setCanvasSize] = useState(20);
  const [matrix, setMatrix] = useState([[]]);

  const saveToLocalStorage = title => {
    storageAvailable('localStorage')
      ? localStorage.setItem(title, matrix)
      : alert('Local Storage is not available');
  };

  useEffect(() => console.log(localStorage));

  return (
    <div className="App">
      <CanvasOptions
        // setCanvasSize={size => setCanvasSize(size)}
        saveCanvas={title => saveToLocalStorage(title)}
        canvases={Object.keys(localStorage)}
        openCanvas={name => console.log(name)}
      />
      <div className="canvas">
        <ColorPicker currentColor={color} setColor={color => setColor(color)} />
        <Canvas
          currentColor={color}
          size={canvasSize}
          setMatrixState={canvas => setMatrix(canvas)}
        />
      </div>
    </div>
  );
};

export default App;
