import css from 'styled-jsx/css';

const styles = css`
  .ReturnTopPosition {
    z-index: 4;
    position: fixed;
    color: var(--color-text);
    background: var(--color-bg);
    height: 35px;
    width: 35px;
    border-radius: 50%;
    right: 30px;
    bottom: 80px;
    border-top: solid 2px gray;
    border-left: solid 2px gray;
    border-bottom: solid 2px #111;
    border-right: solid 2px #111;
    cursor: pointer;
  }

  .NoActive {
    opacity: 1;
    transition-duration: 0.4s;
  }

  .Active {
    opacity: 0;
    visibility: hidden;
    transition-duration: 0.4s;
  }

  .rotateCircle:hover {
    transition-duration: 0.4s;
    animation: 0.8s rotating;
  }

  @keyframes rotating {
    0% {
      transform: rotate(0deg);
    }

    25% {
      transform: rotate(45deg);
    }

    50% {
      transform: rotate(-45deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export default styles;
