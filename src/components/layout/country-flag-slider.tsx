
"use client";

import React, { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const countries = [
    { name: "Germany", code: "de" },
    { name: "France", code: "fr" },
    { name: "Italy", code: "it" },
    { name: "Malta", code: "mt" },
    { name: "Ireland", code: "ie" },
    { name: "UK", code: "gb" },
    { name: "USA", code: "us" },
    { name: "Australia", code: "au" },
    { name: "Canada", code: "ca" },
    { name: "New Zealand", code: "nz" },
    { name: "China", code: "cn" },
    { name: "Belgium", code: "be" },
    { name: "Sweden", code: "se" },
    { name: "Netherlands", code: "nl" },
    { name: "Finland", code: "fi" },
    { name: "Denmark", code: "dk" },
    { name: "Norway", code: "no" },
    { name: "Switzerland", code: "ch" },
    { name: "Spain", code: "es" },
    { name: "Portugal", code: "pt" },
    { name: "Austria", code: "at" },
];

export function CountryFlagSlider() {
  const plugin = useRef(Autoplay({ delay: 1500, stopOnInteraction: false, playOnInit: true }));

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
        {countries.map((country, index) => (
          <CarouselItem key={index} className="basis-1/4 md:basis-1/6 lg:basis-1/8">
            <div className="p-1">
                <div className="flex flex-col items-center justify-center p-2 bg-muted/50 rounded-lg text-center gap-2 h-24">
                    <div className="relative w-12 h-8">
                       <Image 
                         src={`https://flagicons.lipis.dev/flags/4x3/${country.code}.svg`} 
                         alt={`${country.name} flag`} 
                         layout="fill" 
                         objectFit="contain" 
                        />
                    </div>
                    <p className="font-semibold mt-1 text-xs text-muted-foreground">{country.name}</p>
                </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
