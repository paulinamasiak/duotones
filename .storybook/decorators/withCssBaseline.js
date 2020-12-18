import React from 'react';
import CssBaseline from '../../src/styles/CssBaseline';

const withCssBaseline = (Story) => (
  <>
    <CssBaseline />
    <Story />
  </>
);

export default withCssBaseline;
