import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Hero from "./Hero"
import Hero2 from "./Hero2"
import Hero3 from "./Hero3"
 
const arr=[<Hero/>,<Hero2/>,<Hero3/>]

export function CarouselDemo() {
  return (
    <section className="w-full max-w-[100vw] h-screen relative">
    <Carousel className="w-full">
      <CarouselContent>
        {arr.map((item, index) => (
          <CarouselItem key={index}>
            {
                item
            }
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </section>
  )
}
