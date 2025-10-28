'use client';

export default function ServicesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Our Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Marble Worker */}
          <div className="bg-gray-100 rounded-lg shadow-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Marble Worker</h3>
            <p className="text-gray-600">Specializing in the intricate art of marble carving, bringing timeless beauty to life through skilled craftsmanship and precision.</p>
          </div>

          {/* Card 2: Designer */}
          <div className="bg-gray-100 rounded-lg shadow-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Designer</h3>
            <p className="text-gray-600">Creating bespoke designs that blend classical aesthetics with modern sensibilities, ensuring each piece is a unique masterpiece.</p>
          </div>

          {/* Card 3: Painter */}
          <div className="bg-gray-100 rounded-lg shadow-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Painter</h3>
            <p className="text-gray-600">Adding vibrant colors and intricate details to sculptures, enhancing their visual appeal and narrative depth with expert painting techniques.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
