import React from 'react';
import PropTypes from 'prop-types';
import ColorButton from 'components/ColorButton';

const ColorPicker = ({ value }) => {
  return <ColorButton />;
};

ColorPicker.propTypes = {
  value: PropTypes.string,
};

ColorPicker.defaultProps = {};

export default ColorPicker;
