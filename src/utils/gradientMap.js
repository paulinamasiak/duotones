import hexToRgb from 'utils/hexToRgb';

const gradientMap = (tone1, tone2) => {
  const rgb1 = hexToRgb(tone1);
  const rgb2 = hexToRgb(tone2);
  const gradient = [];

  for (let i = 0; i < 256 * 4; i += 4) {
    gradient[i] = ((256 - i / 4) * rgb1.r + (i / 4) * rgb2.r) / 256;
    gradient[i + 1] = ((256 - i / 4) * rgb1.g + (i / 4) * rgb2.g) / 256;
    gradient[i + 2] = ((256 - i / 4) * rgb1.b + (i / 4) * rgb2.b) / 256;
    gradient[i + 3] = 255;
  }

  return gradient;
};

export default gradientMap;
