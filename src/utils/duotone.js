import grayscale from 'utils/grayscale';
import gradientMap from 'utils/gradientMap';

const duotone = (pixels, lightTone, darkTone) => {
  const data = grayscale(pixels).data;
  const gradient = gradientMap(lightTone, darkTone);

  for (let i = 0; i < data.length; i += 4) {
    data[i] = gradient[data[i] * 4];
    data[i + 1] = gradient[data[i + 1] * 4 + 1];
    data[i + 2] = gradient[data[i + 2] * 4 + 2];
  }

  return pixels;
};

export default duotone;
