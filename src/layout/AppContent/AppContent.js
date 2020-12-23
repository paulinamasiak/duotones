/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import DuotoneImg from 'components/DuotoneImg';
import photo from 'components/DuotoneImg/photo.jpg';

const AppContent = () => {
  return (
    <div css={{ padding: '64px' }}>
      <DuotoneImg src={photo} />
    </div>
  );
};

export default AppContent;
