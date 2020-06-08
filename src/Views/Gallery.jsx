import React from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from '../Components/MiniPalette/MiniPalette';
import { GalleryWrapper } from './Styles/Styled_Gallery';

const MainRoute = ({ palettes }) => {
  return (
    <GalleryWrapper>
      <h1>React Collors</h1>
      {palettes.map((palette, index) => {
        return <MiniPalette key={index} {...palette} />;
      })}
    </GalleryWrapper>
  );
};

export default MainRoute;
