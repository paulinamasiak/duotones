import React from 'react';
import PropTypes from 'prop-types';
import DuotoneImg from 'components/DuotoneImg';
import Row from 'components/Grid/Row';
import Col from 'components/Grid/Col';

const ImageDuotonesList = ({ src, colorPalletes }) => {
  return (
    <Row gutter={24}>
      {colorPalletes.map(({ id, lightTone, darkTone }) => (
        <Col key={id} md={12} lg={6} xl={4}>
          <DuotoneImg
            src={src}
            lightTone={lightTone}
            darkTone={darkTone}
            fullWidth
          />
        </Col>
      ))}
    </Row>
  );
};

ImageDuotonesList.propTypes = {
  src: PropTypes.string,
  colorPalletes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      lightTone: PropTypes.string.isRequired,
      darkTone: PropTypes.string.isRequired,
    }),
  ),
};

ImageDuotonesList.defaultProps = {
  colorPalletes: [],
};

export default ImageDuotonesList;
