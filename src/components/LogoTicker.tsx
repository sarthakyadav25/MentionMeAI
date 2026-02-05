const logos = [
    { name: "Zapier", text: "zapier" },
    { name: "Rho", text: "Rho" },
    { name: "Rippling", text: "RIPPLING" },
    { name: "Invideo", text: "invideo" },
    { name: "Motion", text: "motion" },
    { name: "Vapi", text: "VAPI" },
    { name: "Kernel", text: "Kernel" },
    { name: "Fondo", text: "Fondo" },
];

const LogoTicker = () => {
    return (
        <section className="py-12 border-t border-b border-gray-100 bg-white">
            <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
                <h3 className="font-serif text-2xl text-gray-800">Trusted by</h3>
            </div>

            <div className="relative overflow-hidden">
                <div className="flex gap-16 items-center justify-center flex-wrap px-6 max-w-6xl mx-auto opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                    {logos.map((logo, idx) => (
                        <div
                            key={idx}
                            className="text-2xl md:text-3xl font-bold font-sans tracking-tighter select-none cursor-default"
                        >
                            {logo.text}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LogoTicker;
