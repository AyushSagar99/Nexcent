import Image from 'next/image';
import React from 'react';

export default function Pixel() {
  return (
    <div className=' py-12 flex justify-center items-center'>
      <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center md:space-x-8 space-y-8 md:space-y-0 p-4'>
        <div className='md:w-1/2 flex justify-center md:justify-start'>
          <Image
            src="/Frame 35.jpg"
            alt="frame"
            height={433}
            width={442}
            className='rounded-lg shadow-lg'
          />
        </div>
        <div className='md:w-1/2'>
          <p className='font-semibold text-4xl mb-4'>
            The unseen of spending three <span className='block'>years at Pixelgrade</span>
          </p>
          <p className='text-gray-600  leading-relaxed font-extralight text-md'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque 
            placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam 
            vitae, tempus sem. Donec elementum pulvinar odio.
          </p>
          <button className='bg-green-600 text-white w-[151px] h-[52px] rounded-md mt-7'>Learn More</button>
        </div>
      </div>
    </div>
  );
}
