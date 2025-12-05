import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import HowItWorks from "@/components/HowItWorks";
import Products from "@/components/Products";
import Technology from "@/components/Technology";
import About from "@/components/About";

const Index = () => {
    return (
        <main id="main-content">
            <Hero/>
            <Vision/>
            <HowItWorks/>
            <Products/>
            <Technology/>
            <About/>
        </main>
    );
};

export default Index;
