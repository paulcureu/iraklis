'use client';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Autoplay } from "swiper/modules";
import Image from "next/image";

const portfolioImages = [
  { src: "/art/Basreliefs/1.jpg", alt: "Basrelief 1" },
  { src: "/art/ChurchGeorgia/1.jpg", alt: "Church Georgia 1" },
  { src: "/art/IconsArt/1.jpg", alt: "Icons Art 1" },
  { src: "/art/NewYork/1.jpg", alt: "New York 1" },
  { src: "/art/Basreliefs/2.jpg", alt: "Basrelief 2" },
  { src: "/art/ChurchGeorgia/2.jpg", alt: "Church Georgia 2" },
  { src: "/art/IconsArt/2.jpg", alt: "Icons Art 2" },
  { src: "/art/NewYork/2.jpg", alt: "New York 2" },
];

export default function PortfolioSlider() {
  return (
    <Link href="/gallery" passHref>
      <section className='py-16 bg-gray-800 cursor-pointer'>
        <div className='container mx-auto px-4'>
          <h2 className='text-4xl font-bold text-white text-center mb-12'>
            My Portfolio
          </h2>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            freeMode={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            modules={[FreeMode, Autoplay]}
            className='mySwiper'
          >
            {portfolioImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className='relative w-full h-64 rounded-lg overflow-hidden shadow-lg'>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    layout='fill'
                    objectFit='cover'
                    className='transition-transform duration-300 hover:scale-105'
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </Link>
  );
}
