import CardsSection from "@/components/home-page/cardsSection";
import Hero from "@/components/home-page/heroSection";


export default function HomePage() {

  return (
    <main className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-900">
      <Hero />
      <CardsSection />
    </main>
  );
}
