import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Header({ color = 'text-white', backgroundColor }) {
  return (
    <>
      <h2 className={`fw-bold ${color}  text-center fs-1`}>ABOUT COMPONENT</h2>
      <div
        className={` text-center ${
          backgroundColor === true ? 'details2' : 'details'
        }  w-100`}
      >
        <FontAwesomeIcon icon={faStar} className={`  ${color}`} />
      </div>
    </>
  );
}

export default Header;
{
  /* <>
<h2 className={`fw-bold ${color}  fs-1`}>ABOUT COMPONENT</h2>
<div
  className={` ${
    backgroundColor === true ? 'details2' : 'details'
  }  w-100`}
>
  <FontAwesomeIcon icon={faStar} className={`${color} `} />
</div>
</> */
}
