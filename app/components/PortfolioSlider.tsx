"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Autoplay } from "swiper/modules";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const portfolioImages = [
  { src: "/art/Basreliefs/1.jpg", alt: "Basrelief 1", category: "Bas-relief" },
  { src: "/art/ChurchGeorgia/1.jpg", alt: "Church Georgia 1", category: "Religious" },
  { src: "/art/IconsArt/1.jpg", alt: "Icons Art 1", category: "Icons" },
  { src: "/art/NewYork/1.jpg", alt: "New York 1", category: "Modern" },
  { src: "/art/Basreliefs/2.jpg", alt: "Basrelief 2", category: "Bas-relief" },
  { src: "/art/ChurchGeorgia/2.jpg", alt: "Church Georgia 2", category: "Religious" },
  { src: "/art/IconsArt/2.jpg", alt: "Icons Art 2", category: "Icons" },
  { src: "/art/NewYork/2.jpg", alt: "New York 2", category: "Modern" },
];

export default function PortfolioSlider() {
  return (
    <section className='py-24 bg-background'>
      <div className='container mx-auto px-4'>
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className='text-4xl md:text-5xl font-serif text-primary mb-4'>
              Selected Works
            </h2>
            <p className="text-muted max-w-md">
              A curation of sculptures exploring form, texture, and emotion.
            </p>
          </div>
          <Link
            href='/gallery'
            className="hidden md:flex items-center gap-2 text-primary hover:text-accent transition-colors group"
          >
            View All Works <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <Swiper
          slidesPerView={1.2}
          spaceBetween={20}
          freeMode={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2.2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3.5,
              spaceBetween: 40,
            },
          }}
          modules={[FreeMode, Autoplay]}
          className='!pb-12'
        >
          {portfolioImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className='group relative aspect-[3/4] overflow-hidden bg-secondary'>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className='object-cover transition-transform duration-700 group-hover:scale-110'
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 w-full bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white/80 text-sm uppercase tracking-wider">{image.category}</p>
                  <h3 className="text-white text-xl font-serif">{image.alt}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-8 text-center md:hidden">
          <Link
            href='/gallery'
            className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors"
          >
            View All Works <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
