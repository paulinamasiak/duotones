import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';
import RowContext from '../Row/RowContext';

const COL_SIZES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const COL_LIMIT = 12;

const calcColWidth = (span) => {
  return typeof span === 'number'
    ? `${((10e7 / COL_LIMIT) * span) / 10e5}%`
    : null;
};

const basicStyles = {
  boxSizing: 'border-box',
};

const gutterStyles = ({ gutter }) => ({
  padding: `${gutter / 2}px`,
});

const sizeStyles = ({ theme, ...other }) => {
  const { breakpoints } = theme;
  const widths = breakpoints.keys.map((key) => calcColWidth(other[key]));

  return breakpoints.mq({
    flexGrow: 0,
    flexBasis: widths,
    maxWidth: widths,
  });
};

const StyledCol = styled.div(basicStyles, gutterStyles, sizeStyles);

const Col = ({ children, ...other }) => {
  const { gutter } = React.useContext(RowContext);

  return (
    <StyledCol gutter={gutter} {...other}>
      {children}
    </StyledCol>
  );
};

Col.propTypes = {
  xs: PropTypes.oneOf(COL_SIZES),
  sm: PropTypes.oneOf(COL_SIZES),
  md: PropTypes.oneOf(COL_SIZES),
  lg: PropTypes.oneOf(COL_SIZES),
  xl: PropTypes.oneOf(COL_SIZES),
};

export default Col;
