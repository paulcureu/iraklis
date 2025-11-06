import HeroSlider from "./components/HeroSlider";
import PortfolioSlider from "./components/PortfolioSlider";
import ServicesSection from "./components/ServicesSection";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4 text-center'>
          <p className='text-2xl md:text-3xl text-gray-800'>
            "The essence of all beautiful art, all great art, is gratitude."
          </p>
          <p className='mt-4 text-lg text-gray-600'>- Friedrich Nietzsche</p>
        </div>
      </section>

      <section
        className='py-20 relative'
        style={{
          backgroundImage: "url('/gif/sculpture-img.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <div className='container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 relative z-10'>
          <div className='md:w-1/2'>
            <img
              src='/artist.jpg'
              alt='Sculptor Iraklis'
              className='rounded-lg shadow-lg w-full h-auto'
            />
          </div>
          <div className='md:w-1/2 text-center md:text-left'>
            <h2 className='text-4xl font-bold text-white mb-6'>
              About the artist
            </h2>
            <p className='text-lg text-white mb-4'>
              Iraklis is a master sculptor renowned for his ability to breathe
              life into stone. With decades of experience, he transforms raw
              marble into breathtaking works of art that capture the essence of
              classical beauty and modern sensibility.
            </p>
            <p className='text-lg text-white mb-4'>
              His dedication to craftsmanship and his profound understanding of
              form and texture are evident in every piece. Iraklis's sculptures
              often explore themes of mythology, human emotion, and the natural
              world, inviting viewers into a dialogue with timeless narratives.
            </p>
            <p className='text-lg text-white'>
              From intricate bas-reliefs to monumental figures, Iraklis's work
              stands as a testament to the enduring power of sculpture to
              inspire and move the human spirit.
            </p>
          </div>
        </div>
      </section>

      <PortfolioSlider />

      <ServicesSection />
    </>
  );
}
