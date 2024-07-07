import Image from 'next/image';
import React from 'react';
import NumberTicker from "@/components/magicui/number-ticker";

export default function Count() {
  return (
    <div className='bg-heroBg dark:bg-background p-8 w-full'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
        <div className='text-center md:text-left'>
          <p className='text-3xl font-semibold space-x-6 flex flex-col'>
            Helping a local<span className='text-green-600'> business reinvent itself</span>
          </p>
          <p className='text-gray-600 mt-2'>We reached here with our work and dedication</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2 gap-8'>
          <div className='flex items-center space-x-4'>
            <Image
              src="/memb.jpg"
              alt="member"
              width={48}
              height={48}
              className='rounded-full'
            />
            
            <div className=" mb-14">
              <p className="whitespace-pre-wrap text-6xl md:text-8xl font-medium tracking-tighter text-black dark:text-white">
                <NumberTicker value={2245341} className='text-lg font-bold' />
              </p>
              <p className='text-sm'>Members</p>
            </div>
          </div>
          <div className='flex items-center space-x-4'>
            <Image
              src="/club.jpg"
              alt="club"
              width={48}
              height={48}
              className='rounded-full'
            />
            <div className="mb-14">
              <p className="whitespace-pre-wrap text-6xl md:text-8xl font-medium tracking-tighter text-black dark:text-white">
                <NumberTicker value={46328} className='text-lg font-bold' />
              </p>
              <p className='text-sm'>Clubs</p>
            </div>
          </div>
          <div className='flex items-center space-x-4'>
            <Image
              src="/book.jpg"
              alt="club"
              width={48}
              height={48}
              className=''
            />
            <div className="mb-14">
              <p className="whitespace-pre-wrap text-6xl md:text-8xl font-medium tracking-tighter text-black dark:text-white">
                <NumberTicker value={828867} className='text-lg font-bold' />
              </p>
              <p className='text-sm'>Event Bookings</p>
            </div>
          </div>
          <div className='flex items-center space-x-4'>
            <Image
              src="/pay.jpg"
              alt="club"
              width={48}
              height={48}
              className='rounded-md'
            />
            <div className="mb-14">
              <p className="whitespace-pre-wrap text-6xl md:text-8xl font-medium tracking-tighter text-black dark:text-white">
                <NumberTicker value={1926436} className='text-lg font-bold' />
              </p>
              <p className='text-sm'>Payments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
