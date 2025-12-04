"use client";

import { useState, useMemo } from "react";
import { galleryItems, GalleryCategory } from "../data/galleryData";
import GalleryTabs from "../components/GalleryTabs";
import GalleryGrid from "../components/GalleryGrid";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("Byzantine");

  const filteredItems = useMemo(() => {
    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className='container mx-auto px-4 py-8 pt-24 min-h-screen'>
      <div className="text-center mb-12">
        <h1 className='text-4xl md:text-5xl font-serif text-primary mb-4'>
          Gallery
        </h1>
        <p className="text-muted max-w-md mx-auto">
          Explore the collection of works, ranging from traditional Byzantine art to modern sculptural forms.
        </p>
      </div>

      <GalleryTabs
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <GalleryGrid items={filteredItems} />
    </div>
  );
}
