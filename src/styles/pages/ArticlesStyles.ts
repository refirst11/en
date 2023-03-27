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

  .color_link {
    color: var(--color-pink);
  }

  .color_link:hover {
    color: inherit;
  }

  .search_box {
    position: relative;
    width: 380px;
    left: 100px;
    right: 0;
    margin: auto;
  }

  .cross {
    position: relative;
    left: -50px;
    color: var(--color-text);
  }

  @media screen and (max-width: 739.98px) {
    ul {
      margin-top: 20px;
    }

    .title {
      width: 200px;
    }

    .articles {
      padding: 0 20px;
      width: 100%;
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
