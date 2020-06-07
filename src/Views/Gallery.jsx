import React from 'react';
import { Link } from 'react-router-dom';
import { GalleryWrapper } from './Styles/Styled_Gallery';

const MainRoute = ({ palettes }) => {
  return (
    <GalleryWrapper>
      <h1>React Collors</h1>
      {palettes.map((palette, index) => {
        return (
          <h1 key={index}>
            <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
          </h1>
        );
      })}
    </GalleryWrapper>
  );
};

export default MainRoute;
