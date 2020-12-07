import React, { useState, useCallback } from 'react'
import { render } from 'react-dom'
import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from 'react-images'
import { photos } from 'components/Gallery/photos'
import { GalleryTitle } from 'components/Gallery/GalleryTitle'
import { Container } from 'reactstrap'

const PhotoGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightBox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <section className="section section-lg pt-lg-0 section-contact-us">
      <Container>
        <GalleryTitle />
        <Gallery photos={photos} onClick={openLightBox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map(x => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
        </Container>
    </section>
  )
}

export default PhotoGallery
