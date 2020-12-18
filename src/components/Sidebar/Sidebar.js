import styled from '@emotion/styled/macro';

const Sidebar = styled.div(({ theme }) => ({
  background: theme.colors.background.default,
  position: 'fixed',
  top: '0px',
  left: '0px',
  width: '256px',
  height: '100vh',
  overflow: 'hidden',
  boxShadow: `inset -1px 0 0 0 ${theme.colors.divider}`,
}));

export default Sidebar;
