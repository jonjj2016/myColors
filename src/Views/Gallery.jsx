import React from 'react';
import MiniPalette from '../Components/MiniPalette/MiniPalette';
import { GalleryWrapper } from './Styles/Styled_Gallery';

const MainRoute = ({ palettes }) => {
  return (
    <GalleryWrapper>
      <div className='container'>
        <nav className='nav'>
          <h1>React Collors</h1>
        </nav>
        <div className='palettes'>
          {palettes.map((palette, index) => {
            return <MiniPalette key={index} {...palette} />;
          })}
        </div>
      </div>
    </GalleryWrapper>
  );
};

export default MainRoute;
