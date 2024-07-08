import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const cardData = [
  {
    imgSrc: '/image18.jpg',
    cardTitle: 'Creating Streamlined Safeguarding Processes with OneRen',
  },
  {
    imgSrc: '/image19.jpg',
    cardTitle: 'What are your safeguarding responsibilities and how can you manage them?',
  },
  {
    imgSrc: '/image20.jpg',
    cardTitle: 'Revamping the Membership Model with Triathlon Australia',
  },
];

export default function Caring() {
  return (
    <div className='py-12 px-4 md:px-12 mb-14'>
      <div className='flex flex-col justify-center items-center'>
        <p className='text-4xl font-semibold text-center'>Caring is the new marketing</p>
        <p className='text-gray-400 text-center lg:w-[40rem] leading-relaxed mt-3'>
          The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.
        </p>
        <div className='flex lg:flex-row flex-col lg:gap-4 gap-20 mt-4 relative'>
          {cardData.map((card, index) => (
            <div key={index} className='relative w-[368px] h-[286px]'>
              <Image
                src={card.imgSrc}
                alt='img'
                width={368}
                height={286}
                className='rounded-xl object-cover w-full'
              />
              <Card className='absolute -bottom-10 font-medium left-20 text-center w-[270px] h-[143px]'>
                <CardContent className='mt-2 w-[17rem]'>
                  {card.cardTitle}
                </CardContent>
                <p className='flex text-center justify-center text-green-500'>Read more <ArrowRight className='font-light' /> </p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
