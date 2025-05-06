import CardsSection from "@/components/home-page/cards-section";
import Hero from "@/components/home-page/hero-section";


export default function HomePage() {

  return (
    <main className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-900">
      <Hero />
      <CardsSection />
    </main>
  );
}
