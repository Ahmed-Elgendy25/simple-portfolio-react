import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
//
function Home() {
  return (
    <div
      style={{ backgroundColor: '#1ABC9C', minHeight: '80vh' }}
      className="d-flex align-items-center h-100"
    >
      <div className="container">
        <div className="row">
          <div className="col    text-center">
            <img
              src="/assets/avataaars.svg"
              style={{ width: '250px' }}
              alt="person"
            />
            <h2 className="fw-bold  text-white fs-1">START FRAMEWORK</h2>
            <div className="details  w-100">
              <FontAwesomeIcon icon={faStar} className="  text-white" />
            </div>
            <p className="my-2 text-white">
              Graphic Artist - Web Designer - Illustrator
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

{
  /* <img src="/assets/avataaars.svg" className="w-25" />
<div className="bg-danger details  d-flex flex-md-column text-white p-5    h-100 justify-content-between  align-items-center ">
  <h2 className="fw-bold  fs-1">START FRAMEWORK</h2>

  <FontAwesomeIcon icon={faStar} className="fs-3" />
</div> */
}
