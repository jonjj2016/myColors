import React, { lazy, Suspense } from 'react';
import seedColors from './seedColors';
import { paletteGenerator } from './helpers/ColorHelpers';
import { Route, Switch } from 'react-router-dom';

const Palette = lazy(() => import('./Components/Palette/Palette'));

function App() {
  return (
    <Switch>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Route path='/palette/:id' exact render={() => <h1>Individual Palette goes here</h1>} />
        <Route path='/' exact render={() => <h1>Palette List goes here</h1>} />
        {/* <Route path='/' component={() => <Palette palette={paletteGenerator(seedColors[4])} {...seedColors[8]} />} /> */}
      </Suspense>
    </Switch>
  );
}

export default App;
