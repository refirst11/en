import css from 'styled-jsx/css';

const styles = css`
  .search_box {
    position: relative;
    width: 520px;

    padding: 0 8px;
    margin: auto;
  }

  .search_container {
    box-shadow: inset 0 0 2px -0.5px var(--color-shadow);
    border-radius: 4px;
    width: fit-content;
    margin-left: 28px;
  }

  @media screen and (max-width: 739.98px) {
    .search_box {
      position: relative;
      top: 0px;
      width: 100%;
      left: 10%;
    }

    .search_container {
    width: 80%;
  }
  
  }
`;

export default styles;
