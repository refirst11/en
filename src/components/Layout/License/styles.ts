import css from 'styled-jsx/css';

const styles = css`
  .visible_license {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 14px;
    left: 0px;
    width: 190px;
    height: fit-content;
    padding: 4px 8px;
    background: var(--color-code);
    border: solid 0.4px var(--color-border);
    box-shadow: 0 0 2px -0.4px var(--color-shadow);
    border-radius: 0px;
    font-size: 10px;
  }

  .hide_license {
    display: none;
  }
`;
export default styles;