"use client";

import React, { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import type { OtherEuropeScholarship } from "@/lib/types";
import Image from "next/image";

export function OtherEuropeSlider({ scholarships }: { scholarships: OtherEuropeScholarship[] }) {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: false, playOnInit: true }));

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      opts={{
        align: "start",
        loop: true,
      }}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.play}
    >
      <CarouselContent>
        {scholarships.map((scholarship, index) => (
          <CarouselItem key={index} className="basis-1/3 md:basis-1/4 lg:basis-1/6">
            <div className="p-1">
                <div className="flex flex-col aspect-square items-center justify-center p-4 bg-muted/50 rounded-lg text-center gap-2">
                    <div className="relative w-12 h-8">
                       <Image 
                         src={`https://flagicons.lipis.dev/flags/4x3/${scholarship.icon}.svg`} 
                         alt={`${scholarship.country} flag`} 
                         layout="fill" 
                         objectFit="contain" 
                        />
                    </div>
                    <p className="font-semibold mt-1 text-xs text-muted-foreground">{scholarship.country}</p>
                </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
