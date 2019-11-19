import React from 'react';
import styled from 'styled-components';
import Flickity from 'react-flickity-component';
import Image from 'gatsby-image';

import { contentWidth, media } from './theme';

const flickityOptions = {
  arrowShape: {
    x0: 25,
    x1: 75,
    y1: 50,
    x2: 75,
    y2: 35,
    x3: 75,
  },
};

const Gallery = ({ images }) => {
  return (
    <GalleryStyles>
      <Flickity className="gallery" options={flickityOptions}>
        {images.map(({ _key, alt, asset }) => (
          <Image key={_key} fixed={asset.fixed} alt={alt} />
        ))}
      </Flickity>
    </GalleryStyles>
  );
};

const GalleryStyles = styled.div`
  width: 400px;
  max-width: 100%;

  ${media.break`
    margin: 3rem auto;
  `}

  .flickity-prev-next-button {
    background: black;
    border-radius: 0;
    transition: 0.25s;
    :disabled {
      opacity: 0.5;
    }
    &.next {
      right: 0;
    }
    &.previous {
      left: 0;
    }
    .flickity-button-icon {
      color: white;
    }
  }
  .flickity-page-dots {
    bottom: 10px;
    .dot {
      background: transparent;
      border: 2px solid white;
      opacity: 1;
      transition: 0.25s;
      &.is-selected {
        background: white;
      }
    }
  }
`;

export default Gallery;
