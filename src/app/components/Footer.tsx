import { InstagramLogoIcon, PaperPlaneIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import React from 'react';
import { BsPlaystation, BsYoutube } from 'react-icons/bs';

export default function Footer() {
  return (
    <div className='bg-footerBg w-full flex flex-col items-center md:flex-row justify-between p-6'>
      <div className='flex flex-col  gap-2 mb-6 md:mb-0'>
        <div className='flex justify-center '>
          <Image 
            src="/Icon.jpg"
            alt="icon"
            width={43}
            height={29}
          />
          <Image 
            src="/Nexcent.jpg"
            alt="icon"
            width={43}
            height={29}
          />
        </div>
        <div className='flex flex-col mt-3 justify-center items-center'>
          <p className='text-gray-500'>Copyright © 2020 Nexcent ltd.</p>
          <p className='text-gray-500'>All rights reserved</p>
        </div>
        <div className='flex gap-4 mt-2 items-center justify-center'>
          <p className='rounded-full text-white'><InstagramLogoIcon /></p>
          <p className='rounded-full text-white'><TwitterLogoIcon /></p>
          <p className='rounded-full text-white'><BsYoutube /></p>
          <p className='rounded-full text-white'><BsPlaystation /></p>
        </div>
      </div>
      <div className='flex flex-col text-gray-500 mb-6 md:mb-0 justify-center items-center'>
        <p className='text-lg font-medium text-white'>Company</p>
        <p>About Us</p>
        <p>Blog</p>
        <p>Contact Us</p>
        <p>Pricing</p>
        <p>Testimonial</p>
      </div>
      <div className='flex flex-col text-gray-500 mb-6 md:mb-0 justify-center items-center'>
        <p className='text-lg font-medium text-white'>Support</p>
        <p>Help Center</p>
        <p>Terms of service</p>
        <p>Legal</p>
        <p>Privacy Policy</p>
        <p>Status</p>
      </div>
      <div className='text-white '>
        <p className='text-lg font-medium text-center'>Stay up to date</p>
        <div className='relative mt-2'>
          <input
            className='bg-slate-500 rounded-md h-10 w-full md:w-72 p-2 pr-10 focus-within:text-white focus-within:outline-none text-black'
            placeholder='Your Email Address'
          />
          <button className='absolute right-2 top-1/2 transform -translate-y-1/2 text-white'>
            <PaperPlaneIcon className='-rotate-45' />
          </button>
        </div>
      </div>
    </div>
  );
}
