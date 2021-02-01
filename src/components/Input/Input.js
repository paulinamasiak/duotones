import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';
import { rgba } from 'polished';

const VARIANT = {
  OUTLINED: 'outlined',
  BARE: 'bare',
};

const COLOR = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
};

const SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
};

const basicStyles = ({ theme }) => ({
  fontFamily: 'inherit',
  fontWeight: theme.typography.fontWeightBold,
  borderRadius: theme.shape.borderRadius.sm,
  appearance: 'none',
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

const colorStyles = ({
  theme,
  color = COLOR.PRIMARY,
  variant = VARIANT.OUTLINED,
}) => ({
  color: theme.colors.text.primary,

  ...(variant === VARIANT.OUTLINED && {
    '&:focus': {
      borderColor: theme.colors[color].main,
    },
  }),
});

const variantStyles = ({ theme, variant = VARIANT.OUTLINED }) => ({
  ...(variant === VARIANT.OUTLINED && {
    backgroundColor: rgba(theme.colors.grey['50'], 0.05),

    '&:hover': {
      backgroundColor: rgba(theme.colors.grey['50'], 0.08),
    },
  }),
});

const sizeStyles = ({ theme, size = SIZE.MEDIUM }) => ({
  ...(size === SIZE.SMALL && {
    fontSize: theme.typography.fontSizes.sm,
    height: '40px',
    padding: '0 16px',
  }),
  ...(size === SIZE.MEDIUM && {
    fontSize: theme.typography.fontSizes.md,
    height: '48px',
    padding: '0 20px',
  }),
  ...(size === SIZE.LARGE && {
    fontSize: theme.typography.fontSizes.md,
    height: '56px',
    padding: '0 24px',
  }),
});

const disabledStyles = ({
  theme,
  variant = VARIANT.OUTLINED,
  disabled = false,
}) =>
  variant === VARIANT.OUTLINED &&
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
  sizeStyles,
  disabledStyles,
  fullWidthStyles,
);

Input.propTypes = {
  color: PropTypes.oneOf([COLOR.PRIMARY, COLOR.SECONDARY]),
  variant: PropTypes.oneOf([VARIANT.OUTLINED, VARIANT.BARE]),
  size: PropTypes.oneOf([SIZE.SMALL, SIZE.MEDIUM, SIZE.LARGE]),
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  fullWidth: PropTypes.bool,
};

Input.defaultProps = {
  color: COLOR.PRIMARY,
  variant: VARIANT.OUTLINED,
  size: SIZE.MEDIUM,
  disabled: false,
  readOnly: false,
  fullWidth: false,
};

export default Input;
