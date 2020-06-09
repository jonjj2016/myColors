import React from 'react';
import { findPalette, paletteGenerator } from '../helpers/ColorHelpers';
import PaletteShades from '../Components/SinglePaletteShades/SinglePaletteShades';
import { useParams } from 'react-router-dom';

const PalateShade = () => {
  const { colorId, paletteId } = useParams();

  return <PaletteShades color={colorId} palette={paletteGenerator(findPalette(paletteId))} />;
};

export default PalateShade;
