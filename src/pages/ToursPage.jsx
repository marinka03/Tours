import CanvasDots from 'components/canvas-dots/CanvasDots';
import Tours from 'components/tours/Tours';

import React from 'react';

function ToursPage({ currentTheme }) {
  return (
    <>
      <Tours currentTheme={currentTheme}>
        <CanvasDots position="up" />
        <CanvasDots position="down" />
      </Tours>
    </>
  );
}

export default ToursPage;
