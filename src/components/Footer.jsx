import {
  faFacebook,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
// , minHeight: '30vh'
function Footer() {
  return (
    <footer
      style={{ backgroundColor: '#2C3E50' }}
      className="d-flex align-items-center"
    >
      <div className="container-fluid">
        <div className="row text-center  text-white  ">
          <div className="col-md-4 p-5     ">
            <div className="p-5">
              <h2>LOCATION</h2>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
          </div>
          <div className="col-md-4 p-5   ">
            <div className="p-5">
              <h2>AROUND THE WEB</h2>
              <div className="d-flex justify-content-center align-items-center gap-3">
                <FontAwesomeIcon
                  icon={faFacebook}
                  style={{
                    border: '1px solid white',
                    borderRadius: '50%',
                    padding: '0.5rem',
                    fontSize: '1.3rem',
                  }}
                />
                <FontAwesomeIcon
                  icon={faTwitter}
                  style={{
                    border: '1px solid white',
                    borderRadius: '50%',
                    padding: '0.5rem',
                    fontSize: '1.3rem',
                  }}
                />
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  style={{
                    border: '1px solid white',
                    borderRadius: '50%',
                    padding: '0.5rem',
                    fontSize: '1.3rem',
                  }}
                />
                <FontAwesomeIcon
                  icon={faGlobe}
                  style={{
                    border: '1px solid white',
                    borderRadius: '50%',
                    padding: '0.5rem',
                    fontSize: '1.3rem',
                  }}
                />
              </div>
            </div>
          </div>

          <div className="col-md-4  p-5   ">
            <div className="p-5">
              <h2>ABOUT FREELANCER</h2>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>

          <div className="col  p-4" style={{ backgroundColor: '#1A252F' }}>
            Copyright © Your Website 2021
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
