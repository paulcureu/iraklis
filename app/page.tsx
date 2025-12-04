import HeroSlider from "./components/HeroSlider";
import PortfolioSlider from "./components/PortfolioSlider";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <HeroSlider />

      <section className='py-24 bg-white'>
        <div className='container mx-auto px-4 text-center max-w-4xl'>
          <p className='text-3xl md:text-4xl font-serif text-primary leading-tight'>
            "The essence of all beautiful art, all great art, is gratitude."
          </p>
          <p className='mt-6 text-lg text-muted font-light tracking-wide'>- Friedrich Nietzsche</p>
        </div>
      </section>

      <AboutSection />

      <PortfolioSlider />

      <ServicesSection />
    </main>
  );
}
