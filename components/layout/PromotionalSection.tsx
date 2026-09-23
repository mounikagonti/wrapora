import PromoCard from "../common/PromoCard";

const PromotionalSection = () => {
  return (
    <section className="bg-[#f7f5f2] px-5 py-5">
      <div className="grid w-full grid-cols-1 gap-3 lg:grid-cols-2">
        <PromoCard
          title="BUILD YOUR OWN"
          highlight="PERFECT HAMPER"
          description="Choose from a wide range of premium products and build a hamper that's as unique as your loved ones."
          buttonText="START BUILDING"
          buttonLink="/build-your-hamper"
          image="/images/promocards/promocard-1.png"
          backgroundColor="#f8e6e3"
          buttonColor="#7f211d"
        />

        <PromoCard
          title="CORPORATE"
          highlight="GIFTING SOLUTIONS"
          description="Strengthen relationships and appreciate your clients & employees with our curated corporate hampers."
          buttonText="EXPLORE CORPORATE GIFTS"
          buttonLink="/shop"
          image="/images/promocards/promocard-2.png"
          backgroundColor="#eeeee9"
          buttonColor="#314936"
          mobileImageClassName="scale-[1.06]"
        />
      </div>
    </section>
  );
};

export default PromotionalSection;
