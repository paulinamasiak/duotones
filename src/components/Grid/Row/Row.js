import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';
import RowContext from './RowContext';

const baseStyles = {
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
};

const gutterStyles = ({ gutter }) => ({
  margin: `${gutter / -2}px`,
});

const StyledRow = styled.div(baseStyles, gutterStyles);

const Row = ({ gutter, children, ...other }) => {
  return (
    <RowContext.Provider value={{ gutter }}>
      <StyledRow gutter={gutter} {...other}>
        {children}
      </StyledRow>
    </RowContext.Provider>
  );
};

Row.propTypes = {
  gutter: PropTypes.number,
};

export default Row;
