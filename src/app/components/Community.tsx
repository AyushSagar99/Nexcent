import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'

export default function Community() {
  return <>
  <div className=''>
    <p className='font-semibold text-3xl text-center flex flex-col mt-8 mb-2'>Manage Your entire community <span> in a single system</span></p>
    <p className='text-gray-400 text-center'>Who is Nextcent suitable for?</p>
    <div className='flex gap-20 mt-8'>

        <Card className='h-[260px] w-[299px] items-center text-center justify-center flex gap-2 flex-col'>
            <Image 
            src="/comm.jpg"
            alt="community"
            width={65}
            height={56}
            className=''
            />
            <CardTitle className=''>
                Membership Organiztion
            </CardTitle>
            <CardDescription>
                Our Menbership management software provides full automation of membership renewals and payments
            </CardDescription>
        </Card>
        <Card className='h-[260px] w-[299px] items-center text-center justify-center flex gap-2 flex-col'>
            <Image 
            src="/comm2.jpg"
            alt="community"
            width={65}
            height={56}
            className=''
            />
            <CardTitle className=''>
                National Association
            </CardTitle>
            <CardDescription>
                Our Menbership management software provides full automation of membership renewals and payments
            </CardDescription>
        </Card>
        <Card className='h-[260px] w-[299px] items-center text-center justify-center flex gap-2 flex-col'>
            <Image 
            src="/comm3.jpg"
            alt="community"
            width={65}
            height={56}
            className=''
            />
            <CardTitle className=''>
                Clubs And Groups
            </CardTitle>
            <CardDescription>
                Our Menbership management software provides full automation of membership renewals and payments
            </CardDescription>
        </Card>
    </div>
  </div>
  </>
}
