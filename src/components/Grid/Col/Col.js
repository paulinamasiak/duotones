import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';
import RowContext from '../Row/RowContext';

const basicStyles = {
  boxSizing: 'border-box',
};

const gutterStyles = ({ gutter }) => ({
  padding: `${gutter / 2}px`,
});

const gridStyles = ({ theme, ...other }) => {
  const { breakpoints } = theme;
  const widths = breakpoints.keys.map((key) =>
    other[key] ? `${(100 / 12) * other[key]}%` : undefined,
  );

  return breakpoints.mq({
    flexGrow: 0,
    flexBasis: widths,
    maxWidth: widths,
  });
};

const StyledCol = styled.div(basicStyles, gutterStyles, gridStyles);

const Col = ({ children, ...other }) => {
  const { gutter } = React.useContext(RowContext);

  return (
    <StyledCol gutter={gutter} {...other}>
      {children}
    </StyledCol>
  );
};

Col.propTypes = {
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
};

export default Col;
