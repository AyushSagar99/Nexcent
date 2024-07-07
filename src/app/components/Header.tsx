import { Toggle } from '@/components/ui/toggle';
import { motion } from "framer-motion";
import Image from 'next/image';
import React from 'react';
import { ModeToggle } from './toggleMode';

export default function Header() {
  return (
    <header className='z-50 relative shadow-lg'>
      <div className='flex flex-wrap justify-between items-center bg-heroBg dark:bg-background p-4'>
        <div className='flex items-center'>
          <Image 
            src="/Icon.jpg"
            alt="icon"
            width={50}
            height={50}
            className='p-1'
          />
          <Image 
            src="/Nexcent.jpg"
            alt='logo'
            width={100}
            height={50}
            priority
          />
        </div>
        <div className='lg:hidden mt-4 flex w-full justify-center'>
          <nav className='flex space-x-6'>
            <p className='cursor-pointer hover:text-gray-300'>Home</p>
            <p className='cursor-pointer hover:text-gray-300'>Service</p>
            <p className='cursor-pointer hover:text-gray-300'>Feature</p>
            <p className='cursor-pointer hover:text-gray-300'>Product</p>
            <p className='cursor-pointer hover:text-gray-300'>Testimonial</p>
            <p className='cursor-pointer hover:text-gray-300'>FAQ</p>
          </nav>
        </div>
        <nav className='hidden lg:flex space-x-6 mt-4'>
          <p className='cursor-pointer hover:text-gray-300'>Home</p>
          <p className='cursor-pointer hover:text-gray-300'>Service</p>
          <p className='cursor-pointer hover:text-gray-300'>Feature</p>
          <p className='cursor-pointer hover:text-gray-300'>Product</p>
          <p className='cursor-pointer hover:text-gray-300'>Testimonial</p>
          <p className='cursor-pointer hover:text-gray-300'>FAQ</p>
        </nav>
        <div className='flex mt-4 lg:mt-0 space-x-4 w-full lg:w-auto justify-center lg:justify-end'>
          <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200'>
            Login
          </button>
          <button className='bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-200'>
            Sign Up
          </button>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
