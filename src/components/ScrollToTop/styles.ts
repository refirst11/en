import css from 'styled-jsx/css';

const styles = css`
  .ReturnTopPosition {
    z-index: 4;
    position: fixed;
    color: var(--color-second-color);
    background: var(--color-bg);
    height: 40px;
    width: 40px;
    right: 0;
    left: 0;
    bottom: 80px;
    margin: auto;
    border-radius: 8px;
    border-top: solid 1px gray;
    border-left: solid 1px gray;
    border-bottom: solid 1px #111;
    border-right: solid 1px #111;
    cursor: pointer;
  }

  .isBottom {
    transform: translateY(0px);
    transition-duration: 0.4s;
  }

  .isNotBottom {
    transform: translateY(140px);
    opacity: 0;
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
