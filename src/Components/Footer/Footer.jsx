import React from 'react';
import { FooterWrapper } from './Styled_Footer';

const Footer = ({ name, emoji }) => {
  return (
    <FooterWrapper>
      {name}
      <span className='emoji'>{emoji}</span>
    </FooterWrapper>
  );
};

export default Footer;
