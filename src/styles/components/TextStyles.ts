import css from 'styled-jsx/css';

const styles = css`
  .Text {
    z-index: 3;
    position: absolute;
    font-size: 20px;
    left: 0;
    top: 24px;
    border-bottom: 1px solid var(--color-light);
    padding: 2px 10px;
  }
  @media screen and (max-width: 739.98px) {
    .Text {
      /* top: 100px; */
      font-size: 18px;
      left: 16px;
    }
  }
`;

export default styles;
