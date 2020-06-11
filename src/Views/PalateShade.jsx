import React from 'react';
import { findPalette, paletteGenerator } from '../helpers/ColorHelpers';
import PaletteShades from '../Components/SinglePaletteShades/SinglePaletteShades';
import { useParams } from 'react-router-dom';

const PalateShade = ({ palettes }) => {
  const { colorId, paletteId } = useParams();
  console.log(palettes);
  return <PaletteShades color={colorId} palette={paletteGenerator(findPalette(palettes, paletteId))} />;
};

export default PalateShade;
