import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';

const baseStyles = ({ theme }) => ({
  width: '230px',
  height: '125px',
  borderRadius: theme.shape.borderRadius.sm,
});

const colorStyles = ({ background = '#fff' }) => ({
  background: `linear-gradient(rgba(0, 0, 0, 0), black), linear-gradient(to left, rgba(255, 255, 255, 0), white), ${background}`,
});

const ColorArea = styled.div(baseStyles, colorStyles);

ColorArea.propTypes = {
  background: PropTypes.string,
};

ColorArea.defaultProps = {
  background: '#D11F51',
};

export default ColorArea;
