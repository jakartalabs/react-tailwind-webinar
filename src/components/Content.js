import React from 'react'
import { Link } from 'react-router-dom';
import ServiceBg from '../images/our_services_bg.png';
import Ilustration1 from '../images/ilustration_1.png';
import SearchIco from '../images/icon_1.png';

function Content() {
  return (
    <>
      <div className="mt-44 mb-44" style={{
        backgroundImage: `url(${ServiceBg})`,
        height: '1133px',
        backgroundSize: '1510px',
        backgroundRepeat: 'no-repeat'
      }}>
        <h2 className="text-center text-4xl">Our services</h2>
        <div className="flex flex-col flex-wrap justify-center items-center">
          <hr className="w-16  border-2 border-black my-8" />
          <p className="w-4/5 text-center text-xl">
            We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health
        </p>
        </div>
        <div className="flex flex-col flex-wrap space-y-6 items-center mt-20">
          <div className="flex flex-row flex-wrap space-x-6">
            <div className="w-85 h-85 rounded-md bg-white  flex flex-col justify-items-start ">
              <img className="w-28 h-28 pt-8 pl-8" src={SearchIco} />
              <h2 className="pt-8 pl-8 text-black text-2xl font-extrabold">Search doctor</h2>
              <p className="pt-8 pl-8 text-black text-xl text-opacity-30">Choose your doctor from thousands of specialist, general, and trusted hospitals</p>
            </div>
            <div className="w-85 h-85 rounded-md bg-black text-white flex items-center justify-center text-2xl font-extrabold">2</div>
            <div className="w-85 h-85 rounded-md bg-black text-white flex items-center justify-center text-2xl font-extrabold">3</div>
          </div>
          <div className="flex flex-row  flex-wrap space-x-6">
            <div className="w-85 h-85 rounded-md bg-black text-white flex items-center justify-center text-2xl font-extrabold">1</div>
            <div className="w-85 h-85 rounded-md bg-black text-white flex items-center justify-center text-2xl font-extrabold">2</div>
            <div className="w-85 h-85 rounded-md bg-black text-white flex items-center justify-center text-2xl font-extrabold">3</div>
          </div>
          <Link to='/' className='border-2 border-blue-500 px-10 py-4 mt-16 text-blue-500 text-center rounded-full'>
            Find a doctor
        </Link>
        </div>
      </div>
      <div className="flex justify-between items-center mt-20 ml-48">
        <div className="mr-48">
          <img src={Ilustration1} alt="" />
        </div>
        <div className="p-28">
          <h2 className="text-5xl w-full">
            Virtual healthcare
            for you
          </h2>
          <p className="mt-6 mb-10">
            Trafalgar provides progressive, and affordable
            healthcare, accessible on mobile and online
            for everyone
          </p>
          <Link to='/' className='bg-blue-500 px-10 py-4 mt-10 text-white text-center rounded-full'>
            Find a doctor
          </Link>
        </div>
      </div>
      <div className="flex justify-between items-center mt-20 ml-48">
        <div className="p-28">
          <h2 className="text-5xl w-full">
            Virtual healthcare
            for you
          </h2>
          <p className="mt-6 mb-10">
            Trafalgar provides progressive, and affordable
            healthcare, accessible on mobile and online
            for everyone
          </p>
          <Link to='/' className='bg-blue-500 px-10 py-4 mt-10 text-white text-center rounded-full'>
            Find a doctor
          </Link>
        </div>
        <div className="mr-48">
          <img src={Ilustration1} alt="" />
        </div>
      </div>
    </>
  )
}

export default Content;
