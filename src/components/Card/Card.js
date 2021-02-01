import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';

const VARIANT = {
  ELEVATED: 'elevated',
  OUTLINED: 'outlined',
};

const basicStyles = ({ theme }) => ({
  borderRadius: theme.shape.borderRadius.sm,
});

const varaintStyles = ({ theme, variant = VARIANT.ELEVATED, elevation }) => ({
  ...(variant === VARIANT.ELEVATED && {
    backgroundColor: theme.colors.background.card,
    boxShadow: '0 8px 10px 0 rgb(0 0 0 / 5%)',
  }),
  ...(variant === VARIANT.OUTLINED && {
    border: `1px solid ${theme.colors.divider}`,
  }),
});

const Card = styled.div(basicStyles, varaintStyles);

Card.propTypes = {
  elevation: PropTypes.number,
  variant: PropTypes.oneOf([VARIANT.ELEVATED, VARIANT.OUTLINED]),
};

Card.defaultProps = {
  elevation: 0,
  variant: VARIANT.ELEVATED,
};

export default Card;
