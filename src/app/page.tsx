import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";
import PromotionBanner from "@/components/PromotionBanner";

export default function Home() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <PromotionBanner />
        <ProductGrid />
      </div>
      <Footer />
    </>
  );
}
