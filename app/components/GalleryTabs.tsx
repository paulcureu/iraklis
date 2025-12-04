"use client";

import { motion } from "framer-motion";
import { GalleryCategory } from "../data/galleryData";

interface GalleryTabsProps {
    activeCategory: GalleryCategory;
    onCategoryChange: (category: GalleryCategory) => void;
}

export default function GalleryTabs({ activeCategory, onCategoryChange }: GalleryTabsProps) {
    const tabs: GalleryCategory[] = ["Byzantine", "Modern"];

    return (
        <div className="flex justify-center mb-16">
            <div className="flex space-x-12">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => onCategoryChange(tab)}
                        className={`relative pb-2 text-lg tracking-widest uppercase transition-colors duration-300 ${activeCategory === tab ? "text-primary font-medium" : "text-muted hover:text-primary"
                            }`}
                    >
                        {tab} Art
                        {activeCategory === tab && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
}
