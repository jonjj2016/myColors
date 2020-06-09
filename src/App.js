import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import ErrorPage from './Views/Error';
import seedColors from './seedColors';
import Gallery from './Views/Gallery';
import NewPaletteForm from './Components/NewPaletteForm/NewPaletteForm';
const Palette = lazy(() => import('./Views/SinglePalette'));
const PaletteShades = lazy(() => import('./Views/PalateShade'));

function App() {
  return (
    <Switch>
      <Route exact path='/palette/new' component={NewPaletteForm} />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Route path='/' exact render={() => <Gallery palettes={seedColors} />} />
        <Route path='/palette/:id' exact component={Palette} />
        <Route path='/palette/:paletteId/:colorId' exact component={PaletteShades} />
      </Suspense>
    </Switch>
  );
}

export default App;
