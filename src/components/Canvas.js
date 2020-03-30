import React, { useState, useEffect } from 'react';
import Colors from '../Colors';
import Pixel from './Pixel';
import { StyleSheet, css } from 'aphrodite';

const Canvas = props => {
  let size = props.size;
  const maxWidth = size * 30;
  const [matrix, setMatrix] = useState(
    Array(size)
      .fill()
      .map(() => Array(size).fill(0))
  );
  const changeColor = (rowIndex, colIndex) => {
    const newMatrix = JSON.parse(JSON.stringify(matrix));
    newMatrix[rowIndex][colIndex] = props.currentColor;
    setMatrix(newMatrix);
    props.setMsatrixState(newMatrix);
  };

  const styles = StyleSheet.create({
    // 30px * # Pixels
    canvas: {
      maxWidth: maxWidth,
      maxHeight: maxWidth,
      display: 'flex',
      flexWrap: 'wrap',
      marginTop: 30
    }
  });

  // useEffect(() => (size = props.size));

  return (
    <div className={css(styles.canvas)}>
      {matrix.map((row, rowIndex) =>
        row.map((_, colIndex) => {
          return (
            <Pixel
              key={`${rowIndex}-${colIndex}`}
              background={Colors[matrix[rowIndex][colIndex]]}
              onClick={() => changeColor(rowIndex, colIndex)}
            />
          );
        })
      )}
    </div>
  );
};

export default Canvas;
