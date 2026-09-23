import BestSellers from "@/components/BestSellers";
import HamperCategories from "@/components/layout/HamperCategories";
import HeroSlider from "@/components/layout/HeroSlider";
import PromotionalSection from "@/components/layout/PromotionalSection";

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <HamperCategories />
      <PromotionalSection />
      <BestSellers />
    </div>
  );
}
