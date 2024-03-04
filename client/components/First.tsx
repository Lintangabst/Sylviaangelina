import React from 'react';
import Link from 'next/link';

const First: React.FC = () => {
  return (
    <div className="container mx-auto pt-10 text-center bg-white relative">
      <div className="lg:flex lg:justify-between lg:items-center">
        <div className="lg:text-left">
          <h1 className="text-3xl font-bold text-pink-500 font-homemadeApple mb-8 pt-8 pb-8 lg:pt-0 lg:pb-0">Happy Birthday, Babe!</h1>
          <p className='mb-8'>Hello dear, what is here is not much, but I made it <br /> with love, and I wanna say this to you...</p>
          <div className='flex flex-col space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0 lg: ml-4 md:ml-0 pb-8'>
            <Link href="#loveLetter">
              <button className="bg-white text-black font-forum py-2 px-4 rounded-full border border-black flex items-center">
                <span>Read My Letter</span>
                <img src="/img/icon1.png" alt="" className="ml-2" />
              </button>
            </Link>
            <Link href="#Memories">
              <button className="bg-white text-black font-forum py-2 px-4 rounded-full border border-black flex items-center ">
                <span>See Our Memories</span>
                <img src="/img/icon2.png" alt="" className="ml-2" />
              </button>
            </Link>
          </div>
        </div>
        <div className=" lg:text-right pb-8">
          <img src="/img/first.png" alt="Image" className="mx-auto" />
        </div>
      </div>
      <img src="/img/firstV.png" alt="Background" className="mx-auto" />
    </div>
  );
};

export default First;
