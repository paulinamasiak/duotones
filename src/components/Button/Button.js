import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';
import { shade, tint, rgba } from 'polished';
import ButtonBase from 'components/ButtonBase';

const COLOR = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
};

const SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
};

const baseStyles = ({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightBold,
  borderRadius: theme.shape.borderRadius.sm,
  ...theme.transitions.create('background-color', {
    duration: theme.transitions.duration.short,
  }),
});

const colorStyles = ({ theme, color = COLOR.PRIMARY }) => ({
  backgroundColor: theme.colors[color].main,
  color: theme.colors[color].contrastText,

  '&:hover': {
    backgroundColor: tint(0.1, theme.colors[color].main),
  },

  '&:active': {
    backgroundColor: shade(0.1, theme.colors[color].main),
  },
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
    fontSize: '14px',
    height: '56px',
    padding: '0 24px',
  }),
});

const disabledStyles = ({ theme, color = COLOR.PRIMARY, disabled = false }) =>
  disabled && {
    cursor: 'default',
    color: rgba(
      theme.colors[color].contrastText,
      theme.colors.action.disabledOpacity,
    ),
    backgroundColor: rgba(
      theme.colors.default.main,
      theme.colors.action.disabledOpacity,
    ),
  };

const fullWidthStyles = ({ fullWidth }) =>
  fullWidth && {
    width: '100%',
  };

const Button = styled(ButtonBase)(
  baseStyles,
  colorStyles,
  sizeStyles,
  fullWidthStyles,
  disabledStyles,
);

Button.propTypes = {
  color: PropTypes.oneOf([COLOR.PRIMARY, COLOR.SECONDARY]),
  size: PropTypes.oneOf([SIZE.SMALL, SIZE.MEDIUM, SIZE.LARGE]),
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
};

Button.defaultProps = {
  color: COLOR.PRIMARY,
  size: SIZE.MEDIUM,
  disabled: false,
  fullWidth: false,
};

export default Button;
