/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';

import CssBaseline from 'styles/CssBaseline';
import AppSidebar from 'layout/AppSidebar';
import AppHeader from 'layout/AppHeader';
import AppContent from 'layout/AppContent';
import ImageDuotonesList from 'domain/ImageDuotonesList';

import duotonePalletes from 'enums/duotonePalletes';
import photo from 'components/DuotoneImg/photo.jpg';

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
        <AppContent>
          <ImageDuotonesList src={photo} colorPalletes={duotonePalletes} />
        </AppContent>
      </div>
    </div>
  );
}

export default App;
