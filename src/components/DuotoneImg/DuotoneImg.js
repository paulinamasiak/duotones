import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';
import duotone from 'utils/duotone';

const getCanvasPixels = (canvas) => {
  const context = canvas.getContext('2d');
  return context.getImageData(0, 0, canvas.width, canvas.height);
};

const StyledCanvas = styled.canvas(
  ({ fullWidth }) =>
    fullWidth && {
      width: '100%',
    },
);

const DuotoneImg = ({ src, lightTone, darkTone, ...other }) => {
  const canvasRef = useRef();

  useEffect(() => {
    const img = new Image();

    img.onload = () => {
      const context = canvasRef.current.getContext('2d');

      context.canvas.width = img.width;
      context.canvas.height = img.height;

      context.drawImage(img, 0, 0);
      context.putImageData(
        duotone(getCanvasPixels(canvasRef.current), lightTone, darkTone),
        0,
        0,
      );
    };

    img.src = src;
  }, [src, lightTone, darkTone]);

  return <StyledCanvas {...other} ref={canvasRef} />;
};

DuotoneImg.propTypes = {
  src: PropTypes.string,
  lightTone: PropTypes.string,
  darkTone: PropTypes.string,
  fullWidth: PropTypes.bool,
};

DuotoneImg.defaultProps = {
  lightTone: '#000000',
  darkTone: '#ffffff',
  fullWidth: false,
};

export default DuotoneImg;
