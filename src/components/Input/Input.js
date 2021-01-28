import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';
import { rgba } from 'polished';

const VARIANTS = {
  OUTLINED: 'outlined',
  BARE: 'bare',
};

const COLORS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
};

const basicStyles = ({ theme }) => ({
  fontFamily: 'inherit',
  fontSize: theme.typography.fontSize,
  fontWeight: theme.typography.fontWeightBold,
  appearance: 'none',
  borderRadius: theme.shape.borderRadius.sm,
  padding: '0 24px',
  height: '56px',
  borderStyle: 'none',
  border: '2px solid transparent',
  backgroundColor: 'transparent',
  ...theme.transitions.create(['border-color', 'background-color'], {
    duration: theme.transitions.duration.shorter,
  }),

  '&::placeholder': {
    color: rgba(theme.colors.grey['50'], 0.3),
  },

  '&::-ms-clear': {
    display: 'none', // remove clear button in IE
  },

  '&:invalid': {
    boxShadow: 'none', // prevent  FireFox validation styling
  },

  '&:focus': {
    outline: 'none',
  },
});

const variantStyles = ({ theme, variant = VARIANTS.OUTLINED }) => ({
  ...(variant === VARIANTS.OUTLINED && {
    backgroundColor: rgba(theme.colors.grey['50'], 0.05),

    '&:hover': {
      backgroundColor: rgba(theme.colors.grey['50'], 0.08),
    },
  }),
});

const colorStyles = ({
  theme,
  color = COLORS.PRIMARY,
  variant = VARIANTS.OUTLINED,
}) => ({
  color: theme.colors.text.primary,

  ...(variant === VARIANTS.OUTLINED && {
    '&:focus': {
      borderColor: theme.colors[color].main,
    },
  }),
});

const disabledStyles = ({
  theme,
  variant = VARIANTS.OUTLINED,
  disabled = false,
}) =>
  variant === VARIANTS.OUTLINED &&
  disabled && {
    backgroundColor: rgba(theme.colors.grey['50'], 0.03),
    color: theme.colors.text.disabled,

    '&:hover': {
      backgroundColor: rgba(theme.colors.grey['50'], 0.03),
    },
  };

const fullWidthStyles = ({ fullWidth }) =>
  fullWidth && {
    width: '100%',
  };

const Input = styled.input(
  basicStyles,
  colorStyles,
  variantStyles,
  disabledStyles,
  fullWidthStyles,
);

Input.propTypes = {
  color: PropTypes.oneOf([COLORS.PRIMARY, COLORS.SECONDARY]),
  variant: PropTypes.oneOf([VARIANTS.OUTLINED, VARIANTS.BARE]),
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  fullWidth: PropTypes.bool,
};

Input.defaultProps = {
  variant: VARIANTS.OUTLINED,
  color: VARIANTS.PRIMARY,
  disabled: false,
  readOnly: false,
  fullWidth: false,
};

export default Input;
