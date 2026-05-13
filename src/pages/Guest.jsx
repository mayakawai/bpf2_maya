import Navbar from "../components/sedap/Navbar";
import Hero from "../components/sedap/Hero";
import About from "../components/sedap/About";
import ProductSection from "../components/sedap/ProductSection";
import TestimoniSection from "../components/sedap/TestimoniSection";
import Footer from "../components/sedap/Footer";

export default function Guest() {
    return (
        <div className="bg-[#f8f5f0] overflow-x-hidden">
            <Navbar />
            <Hero />
            <About />
            <ProductSection />
            <TestimoniSection />
            <Footer />
        </div>
    );
}