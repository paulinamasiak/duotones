import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';
import ButtonBase from 'components/ButtonBase';

const baseStyles = ({ theme }) => ({
  width: '32px',
  height: '32px',
  borderRadius: theme.shape.borderRadius.sm,
});

const colorStyles = ({ color = '#fff' }) => ({
  backgroundColor: color,
  boxShadow: 'inset 0 0 0 1px rgba(0, 0, 0, 0.1)',
});

const ColorButton = styled(ButtonBase)(baseStyles, colorStyles);

ColorButton.propTypes = {
  color: PropTypes.string,
};

ColorButton.defaultProps = {
  color: '#fff',
};

export default ColorButton;
