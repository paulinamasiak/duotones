import styled from '@emotion/styled/macro';

const TopBar = styled.div(({ theme }) => ({
  background: theme.colors.background.default,
  position: 'fixed',
  left: '256px',
  right: '0px',
  zIndex: '10',
  height: '96px',
  boxShadow: `inset 0 -1px 0 0 ${theme.colors.divider}`,
}));

export default TopBar;
