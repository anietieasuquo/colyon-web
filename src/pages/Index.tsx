import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import Products from "@/components/Products";
import Technology from "@/components/Technology";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Vision />
        <Products />
        <Technology />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
