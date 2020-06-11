import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import ErrorPage from './Views/Error';
import seedColors from './seedColors';
import Gallery from './Views/Gallery';
import NewPaletteForm from './Components/NewPaletteForm/NewPaletteForm';
import { useHistory } from 'react-router-dom';
import Palette from './Views/SinglePalette';
import PaletteShades from './Views/PalateShade';

function App() {
  const { push } = useHistory();
  const [state, setState] = useState({ palettes: [] });

  const saveNewPalette = (newPalette) => {
    setState({ ...state, palettes: [...state.palettes, newPalette] });
    push('/');
  };
  useEffect(() => {
    setState({ palettes: [...seedColors] });
    console.log(seedColors);
  }, []);
  useEffect(() => {}, [state, saveNewPalette]);

  return (
    <Switch>
      <Route exact path='/palette/new' render={() => <NewPaletteForm saveNewPalette={saveNewPalette} />} />
      <Route path='/' exact render={() => <Gallery palettes={state.palettes} />} />
      <Route path='/palette/:id' exact render={() => state.palettes.length && <Palette palettes={state.palettes} />} />
      <Route path='/palette/:paletteId/:colorId' exact render={() => state.palettes.length && <PaletteShades palettes={state.palettes} />} />
    </Switch>
  );
}

export default App;
