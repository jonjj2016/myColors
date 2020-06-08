import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import ErrorPage from './Views/Error';
import seedColors from './seedColors';
import Gallery from './Views/Gallery';
// import Palette from './Components/Palette/Palette'
const Palette = lazy(() => import('./Views/SinglePalette'));

function App() {
  console.log(seedColors);
  return (
    <Switch>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Route path='/' exact render={() => <Gallery palettes={seedColors} />} />
        <Route path='/palette/:id' exact render={() => <Palette />} />
        <Route path='/palette/:paletteId/:colorId' exact render={() => <h1>Color variants</h1>} />
      </Suspense>
    </Switch>
  );
}

export default App;
