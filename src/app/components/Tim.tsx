import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import logo1 from "../../../public/Logo1.jpg";
import logo2 from "../../../public/Logo2.jpg";
import logo3 from "../../../public/Logo3.jpg";
import logo4 from "../../../public/Logo4.jpg";
import logo5 from "../../../public/Logo5.jpg";
import logo6 from "../../../public/Logo6.jpg";

export default function Tim() {
  return (
    <div className='bg-heroBg dark:bg-background w-full py-12 px-4 md:px-12'>
      <div className='lg:flex items-center'>
        <div className='relative w-full lg:w-[70rem] h-[250px] overflow-hidden'>
          <Image
            src="/image 9.jpg"
            alt="tesla"
            layout="fill"
            objectFit="cover"
            className='rounded-2xl'
          />
        </div>
        <div className='flex flex-col mt-6 lg:mt-0 lg:ml-4'>
          <p className='leading-7 font-light text-gray-500 mr-3'>
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <p className='text-green-600 font-semibold mt-2'>Tim Smith</p>
          <p className='text-gray-400'>British Dragon Boat Racing Association</p>
          <div className='flex flex-wrap gap-4 lg:gap-14 mt-4'>
            <Image
              src={logo1}
              alt='icon'
              width={48}
              height={48}
              className='rounded-full'
              unoptimized
            />
            <Image
              src={logo2}
              alt='icon'
              width={48}
              height={48}
              className='rounded-full'
            />
            <Image
              src={logo3}
              alt='icon'
              width={48}
              height={48}
              className='rounded-full'
            />
            <Image
              src={logo4}
              alt='icon'
              width={48}
              height={48}
              className='rounded-full'
            />
            <Image
              src={logo5}
              alt='icon'
              width={48}
              height={48}
              className='rounded-full'
            />
            <Image
              src={logo6}
              alt='icon'
              width={48}
              height={48}
              className='rounded-full'
            />
            <p className='text-green-600 font-semibold text-xl flex gap-1 items-center'>
              Meet all customers <ArrowRight />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
