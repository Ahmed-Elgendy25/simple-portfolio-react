import React, { useState } from 'react';
import Header from './Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function Portfolio() {
  const [modal, setModal] = useState(false);
  const [src, setSrc] = useState('');

  const handleSource = (target) => {
    // Check if the clicked target is the layer, if so, propagate the click to the image
    if (target.classList.contains('layer')) {
      const imgElement = target.parentNode.querySelector('img');

      if (imgElement) {
        handleSource(imgElement);
      }
    } else {
      console.log(target);
      setSrc(target.src);
      setModal(true);
    }
  };

  return (
    <div style={{ backgroundColor: '#fff', minHeight: '80vh' }}>
      <div className="container my-5 h-100">
        <Header color={'text-dark'} backgroundColor={true} />
        <div className="row g-5 mt-2  mb-5">
          <div className="col-md-4">
            <div className="img-container rounded-3 overflow-hidden w-100 h-100 position-relative">
              <img
                src="/assets/port1.png"
                className="w-100 rounded-3"
                alt="1"
              />
              <div
                className="layer d-flex justify-content-center align-items-center"
                onClick={(e) => handleSource(e.target)}
              >
                <FontAwesomeIcon icon={faPlus} className=" fs-1 text-white" />
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="img-container rounded-3 overflow-hidden w-100 h-100 position-relative">
              <img
                src="/assets/port2.png"
                className="w-100 rounded-3"
                alt="1"
              />
              <div
                className="layer d-flex justify-content-center align-items-center"
                onClick={(e) => handleSource(e.target)}
              >
                <FontAwesomeIcon icon={faPlus} className=" fs-1 text-white" />
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="img-container rounded-3 overflow-hidden w-100 h-100 position-relative">
              <img
                src="/assets/port3.png"
                className="w-100 rounded-3"
                alt="1"
              />
              <div
                className="layer d-flex justify-content-center align-items-center"
                onClick={(e) => handleSource(e.target)}
              >
                <FontAwesomeIcon icon={faPlus} className=" fs-1 text-white" />
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="img-container rounded-3 overflow-hidden w-100 h-100 position-relative">
              <img
                src="/assets/port1.png"
                className="w-100 rounded-3"
                alt="1"
              />
              <div
                className="layer d-flex justify-content-center align-items-center"
                onClick={(e) => handleSource(e.target)}
              >
                <FontAwesomeIcon icon={faPlus} className=" fs-1 text-white" />
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="img-container rounded-3 overflow-hidden w-100 h-100 position-relative">
              <img
                src="/assets/port2.png"
                className="w-100 rounded-3"
                alt="1"
              />
              <div
                className="layer d-flex justify-content-center align-items-center"
                onClick={(e) => handleSource(e.target)}
              >
                <FontAwesomeIcon icon={faPlus} className=" fs-1 text-white" />
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="img-container rounded-3 overflow-hidden w-100 h-100 position-relative">
              <img
                src="/assets/port3.png"
                className="w-100 rounded-3"
                alt="1"
              />
              <div
                className="layer d-flex justify-content-center align-items-center"
                onClick={(e) => handleSource(e.target)}
              >
                <FontAwesomeIcon icon={faPlus} className=" fs-1 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {modal && (
        <div
          onClick={() => setModal(false)}
          className="d-flex position-fixed modal w-100 h-100  align-items-center justify-content-center top-0"
        >
          <img src={src} className="w-25 rounded-3" alt="1" />
        </div>
      )}
    </div>
  );
}

export default Portfolio;
