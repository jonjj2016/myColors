import styled from 'styled-components';

export const ColorBox = styled.div`
  width: 20%;
  height: 25%;
  margin: 0 auto;
  position: relative;
  display: inline-block;
  background: ${({ background }) => background};
  margin-bottom: -4px;
  cursor: pointer;
  .copy-button {
    position: absolute;
    height: 30px;
    width: 100px;
    display: inline-block;
    top: 50%;
    left: 50%;
    margin-top: -15px;
    outline: none;
    text-align: center;
    margin-left: -50px;
    background: rgba(255, 255, 255, 0.3);
    font-size: 1rem;
    line-height: 1;
    color: #eee;
    text-transform: uppercase;
    border: none;
    opacity: 0;
    cursor: pointer;
  }

  &:hover .copy-button {
    opacity: 1;
    transition: 0.5s;
  }
  .box-content {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    padding: 10px;
    color: #111;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 12px;
  }
  .see-more {
    background: rgba(255, 255, 255, 0.3);
    position: absolute;
    border: none;
    right: 0;
    color: #eee;
    bottom: 0;
    width: 60px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    text-transform: uppercase;
  }
`;
