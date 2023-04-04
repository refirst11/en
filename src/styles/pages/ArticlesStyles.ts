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

  .search_box {
    position: relative;
    width: 520px;
    left: 28px;
    padding: 0 8px;
    margin: auto;
  }

  .loading_ui {
    color: var(--color-second-color);
    font-family: inherit;
  }

  .spinner {
    position: absolute;
    bottom: 60px;
    right: 60px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border-top: 3px solid rgb(72 72 72 / 20%);
    border-right: 3px solid rgb(72 72 72 / 20%);
    border-bottom: 3px solid rgb(72 72 72 / 20%);
    border-left: 3px solid rgb(206, 136, 136);
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

    .search_box {
      position: relative;
      top: 0px;
      width: 80%;
      left: 10%;
    }
  }
`;

export default styles;
