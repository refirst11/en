import css from 'styled-jsx/css';

const styles = css`
  ul {
    margin-top: 40px;
  }

  li {
    list-style: none;
  }

  .time {
    font-size: 10px;
    white-space: nowrap;
  }

  .title {
    font-size: 14px;
    font-weight: normal;
    color: var(--color-second);
    width: 400px;
  }

  .subtitle {
    font-size: 10px;
    font-weight: normal;
    color: var(--color-second);
  }

  .loading_ui {
    color: var(--color-second-color);
    font-family: inherit;
    padding: 4px 6px;
  }

  .spinner {
    position: absolute;
    bottom: 120px;
    right: 40px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border-top: 2px solid rgb(72 72 72 / 20%);
    border-right: 2px solid rgb(72 72 72 / 20%);
    border-bottom: 2px solid rgb(72 72 72 / 20%);
    border-left: 2px solid rgb(206, 136, 136);
    animation: spin 1.2s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    50% {
      transform: rotate(180deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  @media screen and (max-width: 739.98px) {
    ul {
      margin-top: 20px;
    }

    .title {
      width: 200px;
    }
  }
`;

export default styles;
