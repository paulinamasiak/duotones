const grayscale = (pixels) => {
  const data = pixels.data;

  let min = 0;
  let max = 255;

  for (let i = 0; i < data.length; i += 4) {
    // Fetch maximum pixel value
    if (data[i] > max) {
      max = data[i];
    }

    // Fetch minimum pixel value
    if (data[i] < min) {
      min = data[i];
    }

    // Grayscale by averaging RGB values
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const v = 0.3333 * r + 0.3333 * g + 0.3333 * b;

    data[i] = data[i + 1] = data[i + 2] = v;
  }

  // Normalize each pixel to scale 0-255
  for (let i = 0; i < data.length; i += 4) {
    const v = ((data[i] - min) * 255) / (max - min);
    data[i] = data[i + 1] = data[i + 2] = v;
  }

  return pixels;
};

export default grayscale;
