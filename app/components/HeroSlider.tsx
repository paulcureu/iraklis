"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Autoplay } from "swiper/modules";
import Image from "next/image";

const slides = [
  {
    image: "/backgrounds/hero-background1.jpg",
  },
  {
    image: "/backgrounds/hero-background.jpg",
  },
  {
    image: "/backgrounds/hero-background2.jpg",
  },
];

export default function HeroSlider() {
  return (
    <div className='relative h-[calc(100vh-4rem)]'>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay]}
        className='mySwiper h-full'
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Image
              src={slide.image}
              alt={`Slide ${index + 1}`}
              fill // Aceasta o face să umple div-ul părinte (care trebuie să aibă position: relative/absolute)
              style={{
                objectFit: "cover", // Folosiți CSS-ul standard prin prop-ul style
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='absolute inset-0 flex flex-col items-center justify-center text-center z-10'>
        <div className='relative max-w-2xl'>
          <h1 className='text-5xl md:text-7xl font-bold tracking-tight text-white'>
            Iraklis
          </h1>
          <p className='mt-4 text-lg md:text-2xl text-gray-200'>
            Timeless Beauty, Carved in Stone
          </p>
          <Link
            href='/gallery'
            className='mt-8 inline-block bg-gray-800 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-gray-700 transition-colors duration-300'
          >
            View Gallery
          </Link>
        </div>
      </div>
    </div>
  );
}
