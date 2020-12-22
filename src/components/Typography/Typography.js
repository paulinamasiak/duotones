import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';
import TypographyBase from './TypographyBase';

const baseStyles = ({ theme }) => ({
  margin: '0px',
});

const variantStyles = ({ theme, variant = 'body' }) => ({
  ...theme.typography[variant],
});

const colorStyles = ({ theme }) => ({
  // TODO
});

const Typography = styled(TypographyBase)(
  baseStyles,
  variantStyles,
  colorStyles,
);

Typography.propTypes = {
  variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body']),
  component: PropTypes.elementType,
};

Typography.defaultProps = {
  variant: 'body',
};

export default Typography;
