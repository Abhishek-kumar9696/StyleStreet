import React from 'react'
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <div className= "footer">
        <h1 className= "text-center ">All Rights Reserved &copy; abhi

        </h1> 
        <p className='text-center mt-3'>
            <Link to='/About'>About</Link>
            |
            <Link to='/Contact'>Contact</Link>
            |
            <Link to='/Policy'>Privacy Policyy</Link>
            |
        </p>
    </div>
  );
};

export default Footer