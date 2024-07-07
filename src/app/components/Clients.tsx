import Image from 'next/image'
import React from 'react'

export default function Clients() {
  return <>
  <div className=' text-center mt-8'>
    <div>
        <p className='text-[36px] font-semibold'>Our Clients</p>
        <p className='text-gray-400'>We have been working with some Fortune 500+ clients</p>
    </div>
    <div className='flex gap-28 mt-8'>
        <Image 
        src="/Logo1.jpg"
        alt="logo"
        height={48}
        width={48}
        className=''
        />
        <Image 
        src="/Logo2.jpg"
        alt="logo"
        height={48}
        width={48}
        className=''
        />
        <Image 
        src="/Logo3.jpg"
        alt="logo"
        height={48}
        width={48}
        className=''
        />
        <Image 
        src="/Logo4.jpg"
        alt="logo"
        height={48}
        width={48}
        className=''
        />
        <Image 
        src="/Logo5.jpg"
        alt="logo"
        height={48}
        width={48}
        className=''
        />
        <Image 
        src="/Logo6.jpg"
        alt="logo"
        height={48}
        width={48}
        className=''
        />
        <Image 
        src="/Logo7.jpg"
        alt="logo"
        height={48}
        width={48}
        className=''
        />
    </div>
  </div>
  </>
}
