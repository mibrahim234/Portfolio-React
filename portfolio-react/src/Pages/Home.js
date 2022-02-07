import React from 'react';
import { Link } from 'react-router-dom';
import About from '../components/About';

const Home = () => {
  return <div>
            <h1 className='page-title m-2 py-5'>Welcome to my Portfolio!</h1>

        <About></About>

            {/* add your picture here::
             <img src="/images/developer.jpg" alt="Developer Working on code" className='mb-4 .justify-space-between-sm'/> */}

  </div>;
};

export default Home;
