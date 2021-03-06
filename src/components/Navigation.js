import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav
      className='flex justify-between items-center h-16 mt-16 mr-48 ml-48 bg-white relative Mulish'
      role='navigation'
    >
      <Link to='/' className='pl-8'>
        LOGO
      </Link>
      <div className='pr-8 md:block  hidden'>
        <Link to='/' className='px-10'>
          Home
        </Link>
        <Link to='/' className='pl-10 text-black text-opacity-50'>
          Find a doctor
        </Link>
        <Link to='/' className='pl-10 text-black text-opacity-50'>
          Apps
        </Link>
        <Link to='/' className='pl-10 text-black text-opacity-50'>
          Testimonial
        </Link>
        <Link to='/' className='pl-10 text-black text-opacity-50'>
          About us
        </Link>
      </div>
    </nav>
  )
}

export default Navigation;
