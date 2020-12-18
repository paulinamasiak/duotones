import styled from '@emotion/styled';

const ButtonBase = styled.button({
  backgroundColor: 'transparent', // Reset default style
  outline: 0, // Disable the focus ring for mouse, touch and keyboard users
  border: 0,
  margin: 0, // Remove the margin in Safari
  borderRadius: 0,
  padding: 0, // Remove the padding in Firefox
  cursor: 'pointer',
  userSelect: 'none',
  textDecoration: 'none',
  color: 'inherit',
  appearance: 'none',

  '&:disabled': {
    pointerEvents: 'none',
    cursor: 'default',
  },
});

export default ButtonBase;
