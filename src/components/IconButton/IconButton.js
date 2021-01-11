import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';
import ButtonBase from 'components/ButtonBase';

const baseStyles = ({ theme }) => ({
  // TODO
});

const colorStyles = ({ theme, color = 'default' }) => ({
  // TODO
});

const IconButton = styled(ButtonBase)(baseStyles, colorStyles);

IconButton.propTypes = {
  color: PropTypes.oneOf(['default', 'primary', 'secondary']),
};

IconButton.defaultProps = {
  color: 'default',
};

export default IconButton;
