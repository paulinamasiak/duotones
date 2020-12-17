import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import theme from '../../src/styles/theme';

const withTheme = (Story) => (
  <ThemeProvider theme={theme}>
    <Story />
  </ThemeProvider>
);

export default withTheme;
