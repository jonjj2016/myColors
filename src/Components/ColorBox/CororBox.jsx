import React, { useState, useEffect } from 'react';
import { ColorBox, Copy_Overlay, Message } from './Styled';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const CororBox = (props) => {
  const { background, name } = props;
  console.log(props);
  const [copied, setCopied] = useState(false);
  const onClick = () => {
    setCopied(true);
  };
  useEffect(() => {
    setTimeout(() => {
      console.log(copied);
      setCopied(false);
    }, 2000);
  }, [onClick]);

  return (
    <CopyToClipboard onCopy={onClick} text={background}>
      <ColorBox background={background}>
        <Copy_Overlay background={background} copied={copied} />
        <Message copied={copied}>
          <h1>Copied!</h1>
          <p>{background}</p>
        </Message>

        <div className='copy-container'>
          <div className='box-content'>
            <span>{name} </span>
          </div>
          <button onClick={onClick} className='copy-button'>
            Copy
          </button>
        </div>
        <span className='see-more'>More</span>
      </ColorBox>
    </CopyToClipboard>
  );
};

export default CororBox;
