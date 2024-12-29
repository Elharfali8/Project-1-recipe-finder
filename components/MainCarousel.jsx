import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Link from "next/link"
import { featuredData } from "@/utils/constants"
import { MainCard } from "./global/MainCard"

export function MainCarousel() {
  return (
    <Carousel className="w-full max-w-[80%] lg:max-w-[90%]">
      <CarouselContent className="-ml-1">
              {featuredData.map((item) => {
                  return (
                    <CarouselItem key={item.id} className="pl-1 md:basis-1/2 lg:basis-1/4 xl:basis-1/5" >
                          <div className="p-1">
                              <MainCard {...item} />
                          </div>
                  </CarouselItem>
                  )
              }
        )}
      </CarouselContent>
      <CarouselPrevious className='dark:text-black' />
      <CarouselNext className='dark:text-black' />
    </Carousel>
  )
}
