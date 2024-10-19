import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";

export default function ProductsPage() {
  return (
    <div className="container mx-auto bg-[#e5faf2]">
      <Header />
      <h1 className="text-4xl font-bold text-center mb-8">Nossos Produtos</h1>
      <div className="mx-4">
        <ProductGrid />
      </div>
      <Footer />
    </div>
  );
}
