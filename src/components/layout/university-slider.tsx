
'use client';

import React, { useRef } from 'react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { universities as staticUniversities } from '@/lib/data.tsx';
import Image from 'next/image';

export function UniversitySlider() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: false, playOnInit: true }));
  const universities = staticUniversities;

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      opts={{
        align: 'start',
        loop: true,
      }}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.play}
    >
      <CarouselContent>
        {universities.map((uni, index) => (
          <CarouselItem key={uni.id || index} className="basis-1/3 md:basis-1/4 lg:basis-1/6">
            <div className="p-1">
              <div className="flex aspect-video items-center justify-center p-4 bg-muted/50 rounded-lg">
                {uni.logoUrl ? (
                  <Image
                    src={uni.logoUrl}
                    alt={uni.name}
                    width={100}
                    height={50}
                    className="object-contain"
                  />
                ) : (
                  <span className="text-xs text-center text-muted-foreground">
                    {uni.name}
                  </span>
                )}
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
