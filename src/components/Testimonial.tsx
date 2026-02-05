const Testimonial = () => {
    return (
        <section className="relative py-32 px-6 overflow-hidden">
            {/* BACKGROUND IMAGE */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/Background_Images/golden_temple_styled.png"
                    alt="Golden Temple, Amritsar"
                    className="w-full h-full object-cover scale-105"
                />

                {/* OVERLAY FOR READABILITY */}
                <div className="absolute inset-0 bg-linear-to-b from-[#FDFCF8]/90 via-[#FDFCF8]/40 to-[#FDFCF8]/90" />
            </div>

            {/* CONTENT */}
            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <h2 className="font-serif font-medium text-2xl md:text-3xl lg:text-4xl leading-relaxed text-gray-900 tracking-tight">
                    “I have conquered kingdoms with the strength of my people, not with the
                    sword alone — for true power lies in justice, unity, and compassion.”
                </h2>

                <div className="mt-8 flex flex-col items-center gap-2">
                    <div className="w-12 h-1 bg-linear-to-r from-orange-400 to-yellow-500 rounded-full" />

                    <p className="text-sm font-semibold text-gray-900 mt-2">
                        Maharaja Ranjit Singh
                    </p>

                    <p className="text-xs text-gray-600 uppercase tracking-wide">
                        Founder of the Sikh Empire · “Sher-e-Punjab”
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
