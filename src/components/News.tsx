import { ArrowRight } from "lucide-react";

const News = () => {
    return (
        <section className="py-20 px-6 border-t border-gray-100 bg-white">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <a
                        href="#"
                        className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-gray-900 mb-6 hover:gap-2 transition-all"
                    >
                        See announcement <ArrowRight size={14} />
                    </a>
                    <h2 className="font-serif text-4xl md:text-5xl mb-6 leading-tight">
                        We raised $6.5M from Peak XV, Base10, Y Combinator, and other
                        investors.
                    </h2>
                    <p className="text-gray-500 mb-8 leading-relaxed">
                        AI search is replacing traditional search, and we&apos;re building
                        the leading marketing engine for this platform shift.
                    </p>
                    <div className="inline-flex items-center gap-2 border border-orange-200 bg-orange-50 px-3 py-1.5 rounded-full">
                        <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                        <span className="text-xs font-medium text-orange-800">
                            We are hiring
                        </span>
                    </div>
                </div>

                <div className="relative h-[400px] w-full rounded-2xl overflow-hidden group">
                    <img
                        src="https://picsum.photos/800/800?random=10"
                        alt="Founders"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                        <div className="text-xs uppercase tracking-widest opacity-80 mb-1">
                            Prompting Company
                        </div>
                        <div className="text-2xl font-serif">$6.3M Seed Round</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default News;
