import css from 'styled-jsx/css';

const styles = css`
  .togglePosition {
    z-index: 3;
    position: absolute;
    top: 120px;
    left: 570px;
  }

  @media screen and (max-width: 739.98px) {
    .togglePosition {
      position: absolute;
      bottom: 608px;
      left: auto;
      right: 18px;
      transform: scale(0.8);
    }
  }
`;

export default styles;
