
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
    { name: "Germany", flag: "/flags/de.svg" },
    { name: "France", flag: "/flags/fr.svg" },
    { name: "Italy", flag: "/flags/it.svg" },
    { name: "Malta", flag: "/flags/mt.svg" },
    { name: "Ireland", flag: "/flags/ie.svg" },
    { name: "UK", flag: "/flags/gb.svg" },
    { name: "USA", flag: "/flags/us.svg" },
    { name: "Australia", flag: "/flags/au.svg" },
    { name: "Canada", flag: "/flags/ca.svg" },
    { name: "New Zealand", flag: "/flags/nz.svg" },
    { name: "China", flag: "/flags/cn.svg" },
    { name: "Belgium", flag: "/flags/be.svg" },
    { name: "Sweden", flag: "/flags/se.svg" },
    { name: "Netherlands", flag: "/flags/nl.svg" },
    { name: "Finland", flag: "/flags/fi.svg" },
    { name: "Denmark", flag: "/flags/dk.svg" },
    { name: "Norway", flag: "/flags/no.svg" },
    { name: "Switzerland", flag: "/flags/ch.svg" },
    { name: "Spain", flag: "/flags/es.svg" },
    { name: "Portugal", flag: "/flags/pt.svg" },
    { name: "Austria", flag: "/flags/at.svg" },
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
                       <Image src={country.flag} alt={`${country.name} flag`} layout="fill" objectFit="contain" />
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
