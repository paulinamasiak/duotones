/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';

import CssBaseline from 'styles/CssBaseline';
import AppSidebar from 'layout/AppSidebar';
import AppHeader from 'layout/AppHeader';
import AppContent from 'layout/AppContent';

function App() {
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CssBaseline />
      <AppSidebar />
      <div
        css={{
          flexGrow: '1',
          paddingLeft: '256px',
          paddingTop: '98px',
        }}
      >
        <AppHeader />
        <AppContent />
      </div>
    </div>
  );
}

export default App;
