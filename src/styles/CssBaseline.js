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
        body {
          background: ${theme.colors.background.default};
        }
      `}
    />
  );
};

export default CssBaseline;
