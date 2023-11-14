import React, { useEffect } from 'react';
import style from '../canvas-dots/CanvasDots.module.css';

const updateCanvas = ctx => {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      ctx.fillStyle = `rgb(
                ${Math.floor(255 - 10.5 * i)},
                0,
                ${Math.floor(255 - 30.5 * j)})`;
      ctx.fillRect(i * 35, j * 35, 4, 4);
    }
  }
};

function CanvasDots({ position }) {
  useEffect(() => {
    if (position === 'up') {
      const canvasUp = document.getElementById('canvasUp');
      const ctxUp = canvasUp.getContext('2d');
      updateCanvas(ctxUp);
    } else if (position === 'down') {
      const canvasDown = document.getElementById('canvasDown');
      const ctxDown = canvasDown.getContext('2d');
      updateCanvas(ctxDown);
    }
  }, [position]);

  return (
    <canvas
      className={position === 'up' ? style['canvasUp'] : style['canvasDown']}
      id={position === 'up' ? 'canvasUp' : 'canvasDown'}
      width="350"
      height="350"
    ></canvas>
  );
}

export default CanvasDots;
