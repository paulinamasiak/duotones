import React from 'react';
import PropTypes from 'prop-types';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import Button from 'components/Button';

const UploadButton = ({ accept, multiple, onUpload, ...other }) => {
  const fileInputRef = React.useRef();

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleUpload = (event) => {
    if (onUpload) {
      onUpload(event.target.files);
    }
  };

  return (
    <>
      <input
        css={{ display: 'none' }}
        ref={fileInputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={handleUpload}
      />
      <Button {...other} onClick={handleClick} />
    </>
  );
};

UploadButton.propTypes = {
  accept: PropTypes.string,
  multiple: PropTypes.bool,
  onUpload: PropTypes.func,
};

UploadButton.defaultProps = {
  accept: '',
  multiple: false,
};

export default UploadButton;
