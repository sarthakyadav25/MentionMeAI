"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="    relative w-full mt-[10vh]  h-[85vh] flex flex-col lg:flex-row overflow-hidden bg-white">
            {/* Left Column: Text Content */}
            <div className="w-full lg:w-1/2 flex items-center justify-center pl-3 pr-6 md:pr-12 lg:pr-24 py-20 lg:py-0 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-xl w-full"
                >


                    <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6 text-gray-900 tracking-tight">
                        Be the product cited by{" "}
                        <span className="italic font-light">Perplexity</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
                        Customers now get recommendations from AI, not Google. Be in those
                        answers.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Button
                            size="lg"
                            className="rounded-full bg-black text-white hover:bg-gray-800 px-8 h-12 text-base shadow-lg hover:shadow-xl transition-all"
                        >
                            Start free trial
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Right Column: Image */}
            <div className="w-full lg:w-1/2 relative h-full min-h-[50vh] bg-gray-50">
                <Image
                    src="/Background_Images/taj_styled.png"
                    alt="Hero Background"
                    fill
                    className="object-cover z-0"
                    priority
                />
                <div className="absolute z-10
                                left-1/2 top-[57%] -translate-x-1/2 -translate-y-1/2
                                w-[85%] sm:w-[70%] md:w-[60%] lg:w-[520px]
                                aspect-3/2
                                rounded-xl
                                bg-white/30 backdrop-blur-md
                                shadow-xl" />
                <Image
                    src="/Background_Images/source_final.png"
                    alt="Hero Chat"
                    width={500}
                    height={500}
                    unoptimized
                    className="absolute z-20
                                left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2
                                w-[80%] sm:w-[65%] md:w-[55%] lg:w-[500px]
                                h-auto rounded-xl hover:top-[58%] transition-all duration-300
                                drop-shadow-2xl"
                    loading="lazy"
                />
            </div>
        </section>
    );
};

export default Hero;
