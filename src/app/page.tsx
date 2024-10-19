import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";
import PromotionBanner from "@/components/PromotionBanner";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Header />
      <PromotionBanner />
      <ProductGrid />
      <Footer />
    </div>
  );
}
