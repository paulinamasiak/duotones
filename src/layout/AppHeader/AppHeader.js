/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import TopBar from 'components/TopBar';

const AppHeader = () => {
  return (
    <TopBar
      css={{
        position: 'fixed',
        left: '256px',
        top: '0px',
        right: '0px',
      }}
    />
  );
};

export default AppHeader;
