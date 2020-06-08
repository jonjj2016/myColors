import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ColorBox, Copy_Overlay, Message, More } from './Styled';
import { CopyToClipboard } from 'react-copy-to-clipboard';

let timeout;

const CororBox = (props) => {
  const { background, name, id } = props;
  const { id: paramId } = useParams();
  const [copied, setCopied] = useState(false);

  const onClick = (e) => {
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
        <More to={`/palette/${paramId}/${id}`} onClick={(e) => e.stopPropagation()}>
          More
        </More>
      </ColorBox>
    </CopyToClipboard>
  );
};

export default CororBox;
