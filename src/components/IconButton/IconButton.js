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
    height: '40px',
    width: '40px',
  }),
  ...(size === SIZE.MEDIUM && {
    height: '48px',
    width: '48px',
  }),
  ...(size === SIZE.LARGE && {
    height: '56px',
    width: '56px',
  }),
});

const disabledStyles = ({ theme, color = COLOR.PRIMARY, disabled = false }) =>
  disabled && {
    cursor: 'default',
    backgroundColor: rgba(
      theme.colors.default.main,
      theme.colors.action.disabledOpacity,
    ),
    color: rgba(
      theme.colors[color].contrastText,
      theme.colors.action.disabledOpacity,
    ),
  };

const IconButton = styled(ButtonBase)(
  baseStyles,
  colorStyles,
  sizeStyles,
  disabledStyles,
);

IconButton.propTypes = {
  color: PropTypes.oneOf([COLOR.PRIMARY, COLOR.SECONDARY]),
  size: PropTypes.oneOf([SIZE.SMALL, SIZE.MEDIUM, SIZE.LARGE]),
  disabled: PropTypes.bool,
};

IconButton.defaultProps = {
  color: COLOR.PRIMARY,
  size: SIZE.MEDIUM,
  disabled: false,
};

export default IconButton;
