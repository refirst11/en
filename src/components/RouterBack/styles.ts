import css from 'styled-jsx/css';

const styles = css`
  .router_back {
    position: absolute;
    transform: translateY(-100%);
    top: 180px;
    right: 0;
    width: 40px;
    height: 40px;
    color: var(--color-second-color);
  }
  @media screen and (max-width: 739.98px) {
    .router_back {
      top: 122px;
      right: 4px;
    }
  }
`;

export default styles;
