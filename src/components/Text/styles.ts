import css from 'styled-jsx/css';

const styles = css`
  .Text {
    z-index: 3;
    position: absolute;
    font-size: 20px;
    left: 0;
    top: 24px;
  }
  @media screen and (max-width: 739.98px) {
    .Text {
      font-size: 18px;
      left: 16px;
    }
  }
`;

export default styles;