import React from 'react';
import { useParams } from 'react-router-dom';
import { findPalette, paletteGenerator } from '../helpers/ColorHelpers';
import Palette from '../Components/Palette/Palette';

const SinglePalette = ({ palettes }) => {
  const params = useParams();

  return <Palette palette={paletteGenerator(findPalette(palettes, params.id))} />;
};

export default SinglePalette;
