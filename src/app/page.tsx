import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import Features from "@/components/Features";
import Testimonial from "@/components/Testimonial";
import Enterprise from "@/components/Enterprise";
import News from "@/components/News";
import BottomCTA from "@/components/BottomCTA";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground overflow-x-hidden selection:bg-orange-100 relative">
      {/* Global vertical lines structure */}


      <Navbar />
      <main className=" max-w-11/12  mx-auto pt-1 px-1 border-l border-r border-black/30 grow relative z-10">
        <Hero />
        <div className="border-b border-black/30 w-screen relative left-1/2 -translate-x-1/2 mt-1" />
        <div className="border-b border-black/30 w-screen relative left-1/2 -translate-x-1/2 mt-10" />
        {/* <LogoTicker />
        <div className="border-b border-black/30 w-screen relative left-1/2 -translate-x-1/2 " /> */}

        <Features />
        <div className="border-b border-black/30 w-screen relative left-1/2 -translate-x-1/2 " />

        <Testimonial />
        <div className="border-b border-black/30 w-screen relative left-1/2 -translate-x-1/2 " />

        <Enterprise />
        <div className="border-b border-black/30 w-screen relative left-1/2 -translate-x-1/2 " />

        {/* <News />
        <div className="border-b border-black/30 w-screen relative left-1/2 -translate-x-1/2 " /> */}

        <BottomCTA />
        <div className="border-b border-black/30 w-screen relative left-1/2 -translate-x-1/2 " />

        <FAQ />
        <div className="border-b border-black/30 w-screen relative left-1/2 -translate-x-1/2 " />
      </main>
      <Footer />
    </div>
  );
}
