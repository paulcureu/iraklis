import Link from 'next/link';

export default function Home() {
  return (
    <main 
      className="relative flex flex-col items-center justify-center h-[calc(100vh-4rem)] text-center px-4 bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-background.jpg')" }}
    >
      <div className="relative max-w-2xl z-10">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900">Iraklis</h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-700">Timeless Beauty, Carved in Stone</p>
        <Link href="/gallery" className="mt-8 inline-block bg-gray-800 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-gray-700 transition-colors duration-300">
          View Gallery
        </Link>
      </div>
    </main>
  );
}
