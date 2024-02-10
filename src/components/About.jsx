import React from 'react';
import Header from './Header';

function About() {
  return (
    <div
      style={{ backgroundColor: '#1ABC9C', minHeight: '80vh' }}
      className="d-flex align-items-center "
    >
      <div className="container p-5  text-center">
        <Header />
        <div className="row p-2  text-white    ">
          <div className="col-md-6 text-start p-2  ">
            <div className=" r">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>

          <div className="col-md-6 text-start p-2 ">
            <div className="">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
