import { useEffect, useState } from 'react';
import './ImageGalleryItem.css';
import Modal from 'components/Modal';
import { createPortal } from 'react-dom';

const ImageGalleryItem = ({ image }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { webformatURL, largeImageURL } = image;

  useEffect(() => {
    const keyEscDown = evt => {
      if (evt.code === 'Escape' && modalIsOpen) {
        closeModal();
      }
    };

    window.addEventListener('keydown', keyEscDown);
    return () => {
      window.removeEventListener('keydown', keyEscDown);
    };
  }, [modalIsOpen]);

  const closeModal = () => {
    setModalIsOpen(prev => !prev);
  };

  return (
    <>
      <li className="gallery-item">
        <img
          loading="lazy"
          src={webformatURL}
          alt={webformatURL}
          className="gallery-item-image "
          onClick={() => closeModal()}
        />
      </li>
      {modalIsOpen &&
        // перевірка чи є елемент для відображення модалки
        document.getElementById('modal-root') &&
        createPortal(
          <Modal onClick={closeModal} url={largeImageURL} />,
          document.getElementById('modal-root')
        )}
    </>
  );
};

export default ImageGalleryItem;
