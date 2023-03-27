import css from 'styled-jsx/css';

const styles = css`
  .footer_text {
    margin-top: -50px;
    font-size: 12px;
  }
  .footer_icon {
    position: absolute;
    bottom: 20px;
    display: flex;
    gap: 12px;
  }

  .footer_main {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 120px;
  }
`;

export default styles;
