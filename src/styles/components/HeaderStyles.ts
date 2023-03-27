import css from 'styled-jsx/css';

const styles = css`
  header {
    position: absolute;
    height: 74px;
    width: 100%;
  }
  .header__nav {
    position: relative;
    top: 14px;
    left: 600px;
    width: fit-content;
  }
  .header__ul {
    z-index: 0;
    display: flex;
  }

  @media screen and (max-width: 739.98px) {
    .header__nav {
      position: absolute;
      font-size: 10px;
      left: auto;
      right: 0;
    }
  }
`;

export default styles;
