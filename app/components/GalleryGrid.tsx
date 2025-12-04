"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { GalleryItem } from "../data/galleryData";

interface GalleryGridProps {
    items: GalleryItem[];
}

export default function GalleryGrid({ items }: GalleryGridProps) {
    const [index, setIndex] = useState(-1);

    return (
        <>
            <motion.div
                layout
                className="columns-1 sm:columns-2 lg:columns-3 gap-12 space-y-12"
            >
                <AnimatePresence>
                    {items.map((item, i) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            key={item.id}
                            className="break-inside-avoid"
                        >
                            <div
                                className="group cursor-zoom-in"
                                onClick={() => setIndex(i)}
                            >
                                <div className="relative overflow-hidden mb-4">
                                    <Image
                                        src={item.src}
                                        alt={item.title}
                                        width={600}
                                        height={800}
                                        className="w-full h-auto transition-transform duration-700 ease-in-out group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                                </div>

                                <div className="text-center">
                                    <h3 className="text-primary font-serif text-lg leading-snug group-hover:text-accent transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs text-muted uppercase tracking-widest mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        View Detail
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            <Lightbox
                index={index}
                slides={items.map((item) => ({
                    src: item.src,
                    alt: item.title,
                    title: item.title,
                    description: item.category
                }))}
                open={index >= 0}
                close={() => setIndex(-1)}
            />
        </>
    );
}
