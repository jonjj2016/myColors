import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const Palette = lazy(() => import('./Views/SinglePalette'));

function App() {
  return (
    <Switch>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Route path='/palette/:id' exact render={() => <Palette />} />
        <Route path='/' exact render={() => <h1>Palette List goes here</h1>} />
      </Suspense>
    </Switch>
  );
}

export default App;
