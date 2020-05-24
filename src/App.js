import React from 'react';
import Palette from './Components/Palette/Palette';
import seedColors from './seedColors';

function App() {
  return (
    <div>
      <Palette {...seedColors[8]} />
    </div>
  );
}

export default App;
