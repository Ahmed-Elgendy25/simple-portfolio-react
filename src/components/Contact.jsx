import React from 'react';
import Header from './Header';

function Contact() {
  return (
    <div style={{ backgroundColor: '#fff', minHeight: '80vh' }}>
      <div className="container p-5">
        <Header color={'text-dark'} backgroundColor={true} />
        <div className="row  mt-5 g-3">
          <div className="col-md-12 ">
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                style={{ color: '#1abc9c' }}
                className="form-label "
              >
                userName
              </label>
              <input
                type="userName"
                className="form-control"
                id="userName"
                placeholder="userName"
              />
            </div>
          </div>

          <div className="col-md-12">
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                style={{ color: '#1abc9c' }}
                className="form-label"
              >
                userAge
              </label>
              <input
                type="userAge"
                className="form-control"
                id="userAge"
                placeholder="userAge"
              />
            </div>
          </div>

          <div className="col-md-12">
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                style={{ color: '#1abc9c' }}
                className="form-label"
              >
                userEmail
              </label>
              <input
                type="userEmail"
                className="form-control"
                id="userEmail"
                placeholder="userEmail"
              />
            </div>
          </div>

          <div className="col-md-12">
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                style={{ color: '#1abc9c' }}
                className="form-label"
              >
                userAge
              </label>
              <input
                type="userPassword"
                className="form-control"
                id="userPassword"
                placeholder="userPassword"
              />
            </div>
          </div>

          <div>
            <button
              className="btn btn-md text-white"
              style={{ backgroundColor: '#1abc9c' }}
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
