// Photo.js
import React from 'react';

const Gallery = ({ url }) => {
  const photoStyle = {
    position: 'relative',
    margin: '1px',
    display: 'inline-block',
    overflow: 'hidden',
  };

  const overlayStyle = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: '0',
    transition: 'opacity 0.3s ease',
  };

  const overlayContentStyle = {
    color: 'white',
    textAlign: 'center',
  };

  return (
    <div style={photoStyle}>
      <img src={url} alt="Photograph" style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
      <div style={overlayStyle}>
        <div style={overlayContentStyle}>
          <p>Hovering Effect</p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
