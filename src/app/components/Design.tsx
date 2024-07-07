import Image from 'next/image';
import React from 'react';

export default function Design() {
  return (
    <div className=' py-12 px-4 md:px-12'>
      <div className='max-w-4xl mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8'>
        <div className='md:w-2/5'>
          <Image
            src="/images.jpg"
            alt="image"
            width={441}
            height={433}
            className='rounded-lg'
          />
        </div>
        <div className='md:w-3/5'>
          <p className='text-3xl font-bold mb-4'>How to design your site footer like <span >we did</span></p>
          <p className='text-gray-600 leading-relaxed'>
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
          </p>
          <button className='w-[151px] h-[52px] bg-green-600 rounded-md text-white mt-4 '>Learn More</button>
        </div>
      </div>
    </div>
  );
}
