import css from 'styled-jsx/css';

const styles = css`
  .router_back {
    position: absolute;
    top: 142px;
    transform: translateY(-100%);
    right: 0;
    width: 40px;
    height: 40px;
    color: var(--color-second-color);
  }
  .router_back-form {
    position: absolute;
    top: 120px;
    transform: translateY(-100%);
    right: 0px;
    width: 40px;
    height: 40px;
    color: var(--color-second-color);
  }

  @media screen and (max-width: 739.98px) {
    .router_back {
      right: 18px;
    }

    .router_back-form {
      right: 6px;
    }
  }
`;

export default styles;
