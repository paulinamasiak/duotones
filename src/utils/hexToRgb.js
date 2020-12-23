const HEX_COLOR_REGEXP = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;

// supports only normal hex color notation
const hexToRgb = (hex) => {
  const result = HEX_COLOR_REGEXP.exec(hex);

  if (!result) {
    return null;
  }

  return {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  };
};

export default hexToRgb;
