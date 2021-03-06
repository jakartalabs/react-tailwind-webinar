import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navigation';
import HeaderBg from '../images/header_bg.png';
import Ilustration1 from '../images/ilustration_1.png';

function Header() {
  return (
    <div 
      style={{
        backgroundImage: `url(${HeaderBg})`,
        backgroundRepeat: 'no-repeat'
      }}
      // className="h-96"
    >
      <Navbar />
      <div className="flex justify-between items-center mt-20 ml-48">
        <div className="p-28">
          <h2 className="text-5xl w-full">
           Virtual healthcare
           for you
          </h2>
          <p className="mt-6 mb-10 text-custom-xl text-black text-opacity-50 Mulish">
            Trafalgar provides progressive, and affordable
            healthcare, accessible on mobile and online
            for everyone
          </p>
          <Link to='/' className='bg-blue-500 px-10 py-4 mt-10 text-white text-center text-full-button-l rounded-full Mulish'>
            Find a doctor
          </Link>
        </div>
        <div className="mr-48">
          <img src={Ilustration1} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Header;
