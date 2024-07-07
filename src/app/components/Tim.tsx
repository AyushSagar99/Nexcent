import { ArrowBigRight, ArrowBigRightDash, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export default function Tim() {
  return (
    <div className='bg-heroBg dark:bg-background w-full py-12 px-4 md:px-12'>
      <div className='flex items-center'>
        <div className='relative w-[70rem] h-[250px]  overflow-hidden'>
          <Image
            src="/image 9.jpg"
            alt="tesla"
            layout="fill"
            objectFit="cover"
            className='rounded-2xl'
          />
        </div>
        <div className='flex flex-col ml-4'>
          <p className='leading-7 font-light text-gray-500 mr-3 ml-4'>
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <p className='text-green-600 font-semibold mt-2 ml-4'>Tim Smith</p>
          <p className='text-gray-400 ml-4'>British Dragon Boat Racing Association</p>
          <div className='flex lg:flex-row gap-14 mt-2 ml-4'>
            <Image
              src="/logo1.jpg"
              alt='icon'
              width={48}
              height={48}
              className='rounded-full'
            />
            <Image
              src="/logo2.jpg"
              alt='icon'
              width={48}
              height={48}
              className='rounded-full'
            />
            <Image
              src="/logo3.jpg"
              alt='icon'
              width={48}
              height={48}
              className='rounded-full'
            />
            <Image
              src="/logo4.jpg"
              alt='icon'
              width={48}
              height={48}
              className='rounded-full'
            />
            <Image
              src="/logo5.jpg"
              alt='icon'
              width={48}
              height={48}
              className='rounded-full'
            />
            <Image
              src="/logo6.jpg"
              alt='icon'
              width={48}
              height={48}
              className='rounded-full'
            />
            <p className='text-green-600 font-semibold text-xl flex gap-1 mt-2'>Meet all customers <ArrowRight className=''/> </p>
          </div>
        </div>
      </div>
    </div>
  );
}
