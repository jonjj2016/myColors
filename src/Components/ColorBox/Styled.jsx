import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ColorBox = styled.div`
  width: 20%;
  height: ${(props) => (props.fromShades ? '50' : '25')}%;
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
    text-decoration: ${(props) => props.fromShades && 'none'};
    opacity: ${(props) => (props.show ? 1 : 0)};

    transition: 0.3s;
  }

  &:hover .copy-button {
    opacity: 1;
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
`;
export const Copy_Overlay = styled.div`
  background: ${({ background }) => background};
  opacity: 0;
  z-index: 0;
  height: 100%;
  transition: transform 1.6s ease;
  width: 100%;
  transform: scale(0.1);
  ${(props) =>
    props.copied &&
    ` z-index: 10;
    opacity: 1;
    transform: scale(50);
    position: absolute;
`}
`;
export const More = styled(Link)`
  text-decoration: none;
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
`;
export const Message = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -1;
  font-size: 4rem;
  transform: scale(0);
  opacity: 0;
  flex-direction: column;
  transition: transform 0.5s ease-in-out;
  transition-delay: 0.4s;
  color: #eee;
  h1 {
    font-weight: 400;
    text-shadow: 1px 2px 7px rgba(0, 0, 0, 0.6);
    background: rgba(255, 255, 255, 0.1);
    width: 100%;
    text-align: center;
    padding: 1rem;
    margin-bottom: 0;
    text-transform: uppercase;
    letter-spacing: 0.3rem;
  }
  p {
    font-size: 2rem;
    font-weight: 100;
  }
  ${(props) =>
    props.copied &&
    ` z-index: 11;
    opacity: 1;
    transform: scale(1);
`}
`;
