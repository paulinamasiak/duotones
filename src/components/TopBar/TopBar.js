import styled from '@emotion/styled/macro';

const TopBar = styled.div(({ theme }) => ({
  background: theme.colors.background.default,
  display: 'flex',
  alignItems: 'center',
  zIndex: '10',
  height: '96px',
  padding: '0 48px',
  boxShadow: `inset 0 -1px 0 0 ${theme.colors.divider}`,
}));

export default TopBar;
