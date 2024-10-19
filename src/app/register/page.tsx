import RegisterForm from "@/components/RegisterForm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function register() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <RegisterForm />
      </div>
      <Footer />
    </>
  );
}
