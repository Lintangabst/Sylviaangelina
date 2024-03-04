import React from 'react';

const LoveLetter: React.FC = () => {
  return (
    <div id='loveLetter' className="flex flex-col justify-center items-center h-screen relative">
      <div className="flex flex-col justify-center items-center">
        <h1 className='text-3xl font-bold text-pink-500 mb-[60px]'>My Love Letter</h1>
        <div className="bg-white border-2 rounded-xl border-pink-500 p-8 md:w-[800px] h-[500px] lg: w-auto relative z-1">
          <p className="text-md text-black">The Love Letter from me, for you, Sylviaangelina💛. <br /><br /></p>
          <p className="text-md text-black">A girl so beautiful deserves a birthday so special. You are the star of my <br />
          sky, the melody of my song, the dream of my night. You make me happy <br /> 
          in every way, and I want to make you happy today. Happy birthday, my <br />sweet girl!</p>
          <div className='pb-[200px]'>
          <img src="img/letter1.png" alt="" className="absolute bottom-0 left-0 mt-[50px] ml-8 z-0" />
          <img src="img/letter2.png" alt="" className="absolute bottom-0 right-0 mt-[50px]  mr-4 z-0" />
          </div>
        </div>
      </div>
      {/* Gambar letter3.png di kiri layar */}
      <img src="img/letter3.png" alt="" className="absolute top-1/2 left-0 transform -translate-y-1/2 z-0" />
      {/* Gambar letter4.png di kanan layar */}
      <img src="img/letter4.png" alt="" className="absolute top-1/2 right-0 transform -translate-y-1/2 z-0" />
    </div>
  );
};

export default LoveLetter;
