import React from 'react';
import styled from '@emotion/styled';

const Sidebar = styled.div((props) => ({
  background: props.theme.colors.background.default,
  position: 'fixed',
  top: '0px',
  left: '0px',
  width: '256px',
  height: '100vh',
  overflow: 'hidden',
}));

export default Sidebar;
