import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalCont } from './Modal.styled';

const Modal = ({ selectedImage, onClose }) => {
  useEffect(() => {
    const handleKey = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => {
      window.removeEventListener('keydown', handleKey);
    };
  }, [onClose]);

  const handleClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <Overlay onClick={handleClick}>
      <ModalCont>
        <img src={selectedImage.largeImgUrl} alt={selectedImage.tags} />
      </ModalCont>
    </Overlay>
  );
};

Modal.propTypes = {
  selectedImage: PropTypes.shape({
    tags: PropTypes.string.isRequired,
    largeImgUrl: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
