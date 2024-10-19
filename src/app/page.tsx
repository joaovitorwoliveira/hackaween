import ProductGrid from "../components/ProductGrid";
import PromotionBanner from "../components/PromotionBanner";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Ultima Chance</h1>
      <PromotionBanner />
      <ProductGrid />
    </div>
  );
}
