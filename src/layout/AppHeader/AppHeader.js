import React from 'react';
import TopBar from 'components/TopBar';

const AppHeader = () => {
  return (
    <TopBar
      css={{
        position: 'fixed',
        left: '256px',
        right: '0px',
      }}
    />
  );
};

export default AppHeader;
