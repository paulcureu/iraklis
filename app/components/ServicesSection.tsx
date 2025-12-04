"use client";

import { Hammer, Palette, PenTool } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: <Hammer size={40} strokeWidth={1} />,
      title: "Marble Sculpture",
      description: "Transforming raw stone into expressive forms through traditional carving techniques and modern precision.",
    },
    {
      icon: <PenTool size={40} strokeWidth={1} />,
      title: "Bespoke Design",
      description: "Conceptualizing unique pieces that harmonize with their intended space, from sketches to 3D models.",
    },
    {
      icon: <Palette size={40} strokeWidth={1} />,
      title: "Restoration & Detail",
      description: "Expert restoration of classical works and intricate detailing that brings depth and character to every piece.",
    },
  ];

  return (
    <section className='py-24 bg-secondary/30'>
      <div className='container mx-auto px-4'>
        <div className="text-center mb-16">
          <h2 className='text-4xl md:text-5xl font-serif text-primary mb-6'>
            Artistic Expertise
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            A dedication to the craft, spanning decades of mastery in stone and form.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
          {services.map((service, index) => (
            <div key={index} className='flex flex-col items-center text-center group'>
              <div className="mb-6 p-6 bg-white rounded-full shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                {service.icon}
              </div>
              <h3 className='text-2xl font-serif text-primary mb-4'>
                {service.title}
              </h3>
              <p className='text-muted leading-relaxed'>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
