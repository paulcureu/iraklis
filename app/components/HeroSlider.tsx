"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import { motion } from "framer-motion";

const slides = [
  {
    image: "/backgrounds/hero-background1.jpg",
    title: "Timeless Beauty",
    subtitle: "Carved in Stone",
  },
  {
    image: "/backgrounds/hero-background3.jpg",
    title: "Eternal Form",
    subtitle: "Breathing Life into Marble",
  },
  {
    image: "/backgrounds/hero-background4.jpg",
    title: "Classical Mastery",
    subtitle: "A Tribute to Tradition",
  },
];

export default function HeroSlider() {
  return (
    <div className='relative h-screen w-full'>
      <Swiper
        spaceBetween={0}
        effect={"fade"}
        fadeEffect={{ crossFade: true }}
        speed={1500}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet !bg-white !opacity-50 !w-3 !h-3 !mx-2",
          bulletActiveClass: "!opacity-100 !bg-accent",
        }}
        modules={[EffectFade, Autoplay, Pagination]}
        className='h-full w-full'
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <div className="absolute inset-0 bg-black/40 z-10" />
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover"
              sizes="100vw"
            />

            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className='text-5xl md:text-7xl lg:text-8xl text-white font-serif font-medium tracking-tight mb-6'>
                  {slide.title}
                </h1>
                <p className='text-xl md:text-2xl text-gray-200 font-light tracking-wide mb-10 max-w-2xl mx-auto'>
                  {slide.subtitle}
                </p>
                <Link
                  href='/gallery'
                  className='inline-block bg-white text-primary font-medium py-4 px-10 rounded-full hover:bg-accent hover:text-white transition-all duration-300 transform hover:scale-105'
                >
                  View Collection
                </Link>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
