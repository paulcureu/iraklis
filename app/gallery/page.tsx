"use client";

import { galleryItems } from "../data/galleryData";
import GalleryGrid from "../components/GalleryGrid";

export default function GalleryPage() {
  return (
    <div className='container mx-auto px-4 py-8 pt-24 min-h-screen'>
      <div className="text-center mb-12">
        <h1 className='text-4xl md:text-5xl font-serif text-primary mb-4'>
          Gallery
        </h1>
        <p className="text-muted max-w-md mx-auto">
          Explore the collection of modern sculptural works.
        </p>
      </div>

      <GalleryGrid items={galleryItems} />
    </div>
  );
}
