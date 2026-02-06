import { Button } from "@/components/ui/button";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const aiBrands = [
    {
        id: 1,
        name: "Claude",
        designation: "Anthropic",
        image: "/logo/Claude.webp",
    },
    {
        id: 2,
        name: "ChatGPT",
        designation: "OpenAI",
        image: "/logo/chatgpt.png",
    },
    {
        id: 3,
        name: "Gemini",
        designation: "Google",
        image: "/logo/gemini.png",
    },
    {
        id: 4,
        name: "Grok",
        designation: "xAI",
        image: "/logo/grok.svg",
    },
    {
        id: 5,
        name: "Perplexity",
        designation: "Perplexity AI",
        image: "/logo/perplexity.png",
    },
];

const BottomCTA = () => {
    return (
        <section className="relative py-32 px-6 overflow-hidden ">
            {/* BACKGROUND */}
            <div className="absolute inset-0">
                <img
                    src="/Background_Images/gate_way_of_indian_styled.png"
                    alt="Golden Temple at dusk"
                    className="w-full h-full object-cover scale-105"
                />

                {/* SOFT OVERLAY */}
                <div className="absolute inset-0 bg-linear-to-t from-[#FDFCF8]/95 via-[#FDFCF8]/70 to-[#FDFCF8]/30" />
            </div>

            {/* CONTENT */}
            <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
                <h2 className="font-serif text-4xl md:text-6xl mb-8 text-gray-900 leading-tight flex flex-col md:flex-row items-center justify-center gap-6">
                    <span className="bg-clip-text text-transparent bg-linear-to-b from-neutral-600 via-neutral-800 to-black drop-shadow-sm tracking-tighter italic">
                        Be the product cited by
                    </span>
                    <div className="flex flex-row items-center justify-center">
                        <AnimatedTooltip items={aiBrands} />
                    </div>
                </h2>

                <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-xl mx-auto leading-relaxed">
                    Search behavior has shifted to AI. Ensure your brand is the top recommendation.
                </p>

                <a href="#book-meet">
                    <Button
                        size="lg"
                        className="group rounded-full flex items-center gap-2 cursor-pointer"
                    >
                        Book a Call
                        <p className="transition-transform group-hover:translate-x-2">
                            {"->"}
                        </p>
                    </Button>
                </a>
            </div>
        </section>
    );
};

export default BottomCTA;
