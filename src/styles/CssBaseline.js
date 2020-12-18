import React from 'react';
import { Global, css } from '@emotion/core';
import { useTheme } from 'emotion-theming';

const CssBaseline = () => {
  const theme = useTheme();

  return (
    <Global
      styles={css`
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
          font-family: ${theme.typography.fontFamily};
          font-size: ${theme.typography.fontSize};
        }
      `}
    />
  );
};

export default CssBaseline;
