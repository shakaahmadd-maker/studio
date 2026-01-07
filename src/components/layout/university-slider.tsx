
"use client";

import React, { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { universities } from "@/lib/data";
import { Building2 } from "lucide-react";
import Image from "next/image";

export function UniversitySlider() {
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
        {universities.map((uni, index) => (
          <CarouselItem key={index} className="basis-1/3 md:basis-1/4 lg:basis-1/6">
            <div className="p-1">
                <div className="flex aspect-video items-center justify-center p-4 bg-muted/50 rounded-lg">
                    {uni.logoUrl ? (
                        <Image src={uni.logoUrl} alt={uni.name} width={100} height={50} className="object-contain" />
                    ) : (
                        <div className="flex flex-col items-center gap-2 text-center text-muted-foreground">
                            <Building2 className="h-8 w-8" />
                            <span className="text-xs">{uni.name}</span>
                        </div>
                    )}
                </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
