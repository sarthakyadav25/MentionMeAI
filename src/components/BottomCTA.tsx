import { Button } from "@/components/ui/button";

const BottomCTA = () => {
    return (
        <section className="relative py-32 px-6 overflow-hidden">
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
            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <h2 className="font-serif text-4xl md:text-6xl mb-6 text-gray-900 leading-tight">
                    Be the product cited by{" "}
                    <span className="inline-flex gap-3 align-middle ml-2">
                        {/* AI Brand Orbs */}
                        <div className="w-8 h-8 rounded-full bg-linear-to-br from-emerald-500 to-teal-600 shadow-lg" />
                        <div className="w-8 h-8 rounded-full bg-linear-to-br from-violet-500 to-purple-600 shadow-lg" />
                        <div className="w-8 h-8 rounded-full bg-linear-to-br from-sky-500 to-blue-600 shadow-lg" />
                    </span>
                </h2>

                <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-xl mx-auto leading-relaxed">
                    Search behavior has shifted to AI. Ensure your brand is the top recommendation.
                </p>

                <a href="#book-meet" className="inline-block">
                    <Button
                        size="lg"
                        className="
                rounded-full
                px-10
                h-14
                text-lg
                shadow-2xl
                hover:shadow-xl
                transition-all
                bg-black
                text-white
            "
                    >
                        Call To Action
                    </Button>
                </a>
            </div>
        </section>
    );
};

export default BottomCTA;
