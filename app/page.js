import CategoriesSection from "@/components/Home/CategoriesSection";
import Featured from "@/components/Home/Featured";
import Hero from "@/components/Home/Hero";


export default function Home() {
  return (
    <main>
      <Hero />
      <Featured />
      <CategoriesSection />
    </main>
  );
}
