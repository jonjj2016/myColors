import React, { useState, useEffect } from 'react';
import { ColorBox, Copy_Overlay, Message } from './Styled';
import { CopyToClipboard } from 'react-copy-to-clipboard';
let timeout;
const CororBox = (props) => {
  const { background, name } = props;
  const [copied, setCopied] = useState(false);
  const onClick = (e) => {
    // e.stopImmediatePropagation();
    setCopied(true);
  };
  useEffect(() => {
    if (copied === true) {
      timeout = setTimeout(() => {
        setCopied(false);
      }, 1500);
    }
    return () => clearTimeout();
  }, [onClick, copied]);

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
