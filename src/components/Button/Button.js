import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';
import { shade, tint, rgba } from 'polished';
import ButtonBase from 'components/ButtonBase';

const COLORS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
};

const baseStyles = ({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightBold,
  borderRadius: theme.shape.borderRadius.md,
  height: '48px',
  padding: '0 20px',
  ...theme.transitions.create('background-color', {
    duration: theme.transitions.duration.short,
  }),
});

const colorStyles = ({ theme, color = COLORS.PRIMARY }) => ({
  backgroundColor: theme.colors[color].main,
  color: theme.colors[color].contrastText,

  '&:hover': {
    backgroundColor: tint(0.1, theme.colors[color].main),
  },

  '&:active': {
    backgroundColor: shade(0.1, theme.colors[color].main),
  },
});

const disabledStyles = ({ theme, color = COLORS.PRIMARY, disabled = false }) =>
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
  fullWidthStyles,
  disabledStyles,
);

Button.propTypes = {
  color: PropTypes.oneOf([COLORS.PRIMARY, COLORS.SECONDARY]),
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
};

Button.defaultProps = {
  color: COLORS.PRIMARY,
  disabled: false,
  fullWidth: false,
};

export default Button;
