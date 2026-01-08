
'use client';

import React, { useRef } from 'react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection, query, orderBy } from 'firebase/firestore';
import type { University } from '@/lib/types';
import { universities as staticUniversities } from '@/lib/data.tsx';
import { Skeleton } from '@/components/ui/skeleton';
import Image from 'next/image';

export function UniversitySlider() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: false, playOnInit: true }));
  const firestore = useFirestore();

  const universitiesQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'universities'), orderBy('createdAt', 'asc'));
  }, [firestore]);

  const { data: liveUniversities, isLoading } = useCollection<University>(universitiesQuery);

  const universities = liveUniversities && liveUniversities.length > 0 ? liveUniversities : staticUniversities;

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
        {isLoading &&
          Array.from({ length: 6 }).map((_, index) => (
            <CarouselItem key={index} className="basis-1/3 md:basis-1/4 lg:basis-1/6">
              <div className="p-1">
                <Skeleton className="flex aspect-video items-center justify-center p-4 rounded-lg" />
              </div>
            </CarouselItem>
          ))}
        {!isLoading && universities.map((uni, index) => (
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
