import { css } from 'styled-components';

const theme = {
  font: {
    family: 'museo-sans,sans-serif',
    scriptFamily: 'voltage, sans-serif',
    regular: 300,
    demibold: 500,
    bold: 700,
  },
  red: '#C72800',
  dark: '#4A4A4A',
  light: '#979797',
  shadow: '#C0C0C0 0 2px 4px',
  grid: true,
  sizes: {
    content: 700,
    break: 768,
    large: 1024,
  },
};

const media = Object.keys(theme.sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${theme.sizes[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

const contentWidth = css`
  width: ${theme.sizes.content}px;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  ${theme.grid &&
    media.break`
    width: 500px;
  `}
`;

export { media, contentWidth };
export default theme;
