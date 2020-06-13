import styled from 'styled-components';

export const ColorPickerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .form {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    width: 90%;
    height: 5rem;
    justify-content: space-between;
  }

  .drawer {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      font-weight: 300;
      font-size: 3rem;
    }
    .buttons {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 2rem auto;
      width: 80%;
    }
  }
`;
