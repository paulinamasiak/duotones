import React from 'react';
import { Global, css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import normalize from 'normalize.css';

const CssBaseline = () => {
  const theme = useTheme();

  return (
    <Global
      styles={css`
        ${normalize}

        html {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          box-sizing: border-box;
        }

        *,
        *::before,
        *::after {
          box-sizing: inherit;
        }

        body {
          background-color: ${theme.colors.background.default};
          color: ${theme.colors.text.primary};
        }
      `}
    />
  );
};

export default CssBaseline;
