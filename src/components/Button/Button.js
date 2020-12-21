import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';
import { darken } from 'polished';
import ButtonBase from 'components/ButtonBase';

const baseStyles = ({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightBold,
  height: '48px',
  borderRadius: '16px/16px',
  padding: '0 20px',
  ...theme.transitions.create('background-color', {
    duration: theme.transitions.duration.short,
  }),
});

const colorStyles = ({ theme, color = 'default' }) => ({
  backgroundColor: theme.colors[color].main,
  color: theme.colors.common.white,

  '&:hover': {
    backgroundColor: darken(
      theme.colors.action.hoverDarken,
      theme.colors[color].main,
    ),
  },
});

const fullWidthStyles = ({ fullWidth }) =>
  fullWidth && {
    width: '100%',
  };

const Button = styled(ButtonBase)(baseStyles, colorStyles, fullWidthStyles);

Button.propTypes = {
  color: PropTypes.oneOf(['default', 'primary', 'secondary']),
  fullWidth: PropTypes.bool,
};

Button.defaultProps = {
  color: 'default',
  fullWidth: false,
};

export default Button;
