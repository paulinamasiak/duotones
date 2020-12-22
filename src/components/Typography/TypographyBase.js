import React from 'react';
import PropTypes from 'prop-types';

const defaultVariantMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body: 'p',
};

const TypographyBase = ({ className, component, variant, children }) => {
  const Component = component || defaultVariantMapping[variant] || 'span';

  return <Component className={className}>{children}</Component>;
};

TypographyBase.propTypes = {
  variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body']),
  component: PropTypes.elementType,
};

TypographyBase.defaultProps = {
  variant: 'body',
};

export default TypographyBase;
