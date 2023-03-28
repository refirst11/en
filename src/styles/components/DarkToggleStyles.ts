import css from 'styled-jsx/css';

const styles = css`
  .togglePosition {
    z-index: 3;
    position: relative;
    bottom: 10px;
    left: 570px;
  }

  .flex_box {
    border: none;
    cursor: pointer;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: #ffffff;
  }

  @media screen and (max-width: 739.98px) {
    .togglePosition {
      position: absolute;
      bottom: 80%;
      left: auto;
      right: 14px;
      transform: scale(0.8);
    }
  }
`;

export default styles;
