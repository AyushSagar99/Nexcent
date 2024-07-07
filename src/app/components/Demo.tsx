import { ArrowRight } from 'lucide-react'
import React from 'react'

export default function Demo() {
  return <>
  <div className='bg-heroBg dark:bg-background w-full'>
    <div className='mt-10 flex flex-col justify-center items-center text-center'>
        <p className='flex flex-col text-center text-4xl font-medium leading-normal'>Pellentesque suscipit <span> fringilla libero eu.</span></p>
        <button className='bg-green-600 mt-4 flex justify-center items-center mb-10  text-white w-[175px] h-[52px] rounded-lg '>Get a Demo <ArrowRight className='font-thin'/> </button>
    </div>
  </div>
  </>
}
