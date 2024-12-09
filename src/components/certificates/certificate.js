import React, { useState } from 'react';
import './certificate.css';
import Mycert_data from '../../assets/certifi';

const Certificate = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imgSrc) => {
    setSelectedImage(imgSrc);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className='MyCertificates'>
      <div className='CertName'>
        <h1>My Certificates</h1>
      </div>
      <div className='CertCont'>
        {Mycert_data.map((certi, index) => {
          return <img key={index} src={certi.c_img} alt="error" onClick={() => handleImageClick(certi.c_img)} />;
        })}
      </div>

      {selectedImage && (
        <div className="overlay" onClick={handleClose}>
          <img src={selectedImage} alt="Selected Certificate" className="largeImage" />
        </div>
      )}
    </div>
  );
}

export default Certificate;
