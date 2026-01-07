
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
    { name: "Germany", flag: "🇩🇪" },
    { name: "France", flag: "🇫🇷" },
    { name: "Italy", flag: "🇮🇹" },
    { name: "Malta", flag: "🇲🇹" },
    { name: "Ireland", flag: "🇮🇪" },
    { name: "UK", flag: "🇬🇧" },
    { name: "USA", flag: "🇺🇸" },
    { name: "Australia", flag: "🇦🇺" },
    { name: "Canada", flag: "🇨🇦" },
    { name: "New Zealand", flag: "🇳🇿" },
    { name: "China", flag: "🇨🇳" },
    { name: "Belgium", flag: "🇧🇪" },
    { name: "Sweden", flag: "🇸🇪" },
    { name: "Netherlands", flag: "🇳🇱" },
    { name: "Finland", flag: "🇫🇮" },
    { name: "Denmark", flag: "🇩🇰" },
    { name: "Norway", flag: "🇳🇴" },
    { name: "Switzerland", flag: "🇨🇭" },
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
                <div className="flex flex-col items-center justify-center p-2 bg-muted/50 rounded-lg text-center gap-2">
                    <div className="text-4xl">{country.flag}</div>
                    <p className="font-semibold mt-1 text-xs text-muted-foreground">{country.name}</p>
                </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
