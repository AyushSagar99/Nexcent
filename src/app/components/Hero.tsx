import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

export default function Hero() {
  return (
    <div className='min-h-screen w-full flex items-center justify-center bg-heroBg dark:bg-background'>
      <div className='flex flex-col md:flex-row items-center md:items-start justify-between p-8 space-y-8 md:space-y-0 md:space-x-8 w-full max-w-6xl'>
        <div className='md:flex-1 text-center md:text-left'>
          <p className=' font-semibold text-5xl leading-[76px]'>
            Lesson and Insights <span className='block text-green-600'>from 8 years</span>
          </p>
          <p className='text-gray-400'>Where to grow your business as a photographer: site or social media?</p>
          <Button className='bg-green-600 mt-4 hover:bg-green-700'>Register</Button>
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

