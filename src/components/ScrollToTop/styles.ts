import css from 'styled-jsx/css';

const styles = css`
  .ReturnTopPosition {
    z-index: 4;
    position: fixed;
    color: var(--color-second-color);
    height: 80px;
    width: 80px;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    cursor: pointer;
  }

  .isBottom {
    opacity: 1;
    transform: translateY(0px);
    transition-duration: 0.4s;
  }

  .isNotBottom {
    opacity: 0;
    transform: translateY(200px);
    visibility: hidden;
    transition-duration: 0.4s;
  }

  .rotateCircle {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default styles;
