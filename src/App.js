import React from 'react';
import Palette from './Components/Palette/Palette';
import seedColors from './seedColors';
import { paletteGenerator } from './helpers/ColorHelpers';

function App() {
  console.log(paletteGenerator(seedColors[4]));

  return (
    <div>
      <Palette {...seedColors[8]} />{' '}
    </div>
  );
}

export default App;
