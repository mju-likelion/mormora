import { css, Global } from '@emotion/react';

function GlobalStyles() {
  return (
    <Global
      styles={css`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          background-color: #141517;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        button {
          border: none;
          cursor: pointer;
        }

        * {
          box-sizing: border-box;
          color: #ffffff;
        }
      `}
    />
  );
}

export default GlobalStyles;
