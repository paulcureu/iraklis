"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2 relative"
                    >
                        <div className="relative aspect-[4/5] w-full max-w-md mx-auto md:mr-auto">
                            <Image
                                src="/artist.jpg"
                                alt="Sculptor Iraklis"
                                fill
                                className="object-cover rounded-sm shadow-2xl"
                            />
                            {/* Decorative element */}
                            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-accent/30 -z-10 rounded-sm" />
                        </div>
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2"
                    >
                        <h2 className="text-4xl md:text-5xl font-serif text-primary mb-8">
                            About the Artist
                        </h2>
                        <div className="space-y-6 text-lg text-muted leading-relaxed font-light">
                            <p>
                                <span className="text-primary font-medium">Iraklis</span> is a master sculptor renowned for his ability to breathe life into stone. With decades of experience, he transforms raw marble into breathtaking works of art that capture the essence of classical beauty and modern sensibility.
                            </p>
                            <p>
                                His dedication to craftsmanship and his profound understanding of form and texture are evident in every piece. Iraklis's sculptures often explore themes of mythology, human emotion, and the natural world, inviting viewers into a dialogue with timeless narratives.
                            </p>
                            <p>
                                From intricate bas-reliefs to monumental figures, his work stands as a testament to the enduring power of sculpture to inspire and move the human spirit.
                            </p>
                        </div>

                        <div className="mt-10">
                            <div className="h-px w-24 bg-accent" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
