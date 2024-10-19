import AboutBody from "@/components/AboutBody";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function AboutUsPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8  bg-[#e5faf2] my-[-50px]">
        <AboutBody />
      </div>
      <Footer />
    </>
  );
}
