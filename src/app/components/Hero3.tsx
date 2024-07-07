import Image from 'next/image';
import React from 'react';

export default function Hero3() {
  return (
    <div className='min-h-screen w-full flex items-center justify-center bg-heroBg dark:bg-background'>
      <div className='flex flex-col md:flex-row items-center md:items-start justify-between p-8 space-y-8 md:space-y-0 md:space-x-8 w-full max-w-6xl'>
        <div className='md:flex-1 text-center md:text-left'>
          <p className=' font-semibold text-5xl leading-[76px]'>
            Learn from us experience <span className='block text-green-600'>of 8 years</span>
          </p>
          <p className='text-gray-400'>Where to grow your business as a photographer: site or social media?</p>
          
        </div>
        <div className='md:flex-1 flex justify-center md:justify-end'>
          <Image 
            src="/illustration.jpg"
            alt="carousel"
            width={391}
            height={407}
            priority
            className='rounded-lg shadow-lg'
          />
        </div>
      </div>
    </div>
  );
}

