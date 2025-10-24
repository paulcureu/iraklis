'use client';

import { useState } from 'react';
import Image from 'next/image';

interface SculptureSliderProps {
  images: string[];
}

const SculptureSlider = ({ images }: SculptureSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full h-80 rounded-lg overflow-hidden group bg-gray-200">
      <Image
        src={images[currentIndex]}
        alt={`Sculpture image ${currentIndex + 1}`}
        layout="fill"
        objectFit="cover"
        className="transition-opacity duration-300"
      />
      <div className="absolute inset-0 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button onClick={goToPrevious} className="bg-black bg-opacity-40 text-white p-2 rounded-full ml-2 hover:bg-opacity-60">
          &#10094;
        </button>
        <button onClick={goToNext} className="bg-black bg-opacity-40 text-white p-2 rounded-full mr-2 hover:bg-opacity-60">
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default SculptureSlider;
