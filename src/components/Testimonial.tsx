import { Marquee } from "./ui/marquee";
import { TweetCard } from "./ui/tweet-card";

const testimonials1 = [
    {
        author: "Sarah Chen",
        handle: "sarahchen_tech",
        avatarUrl: "https://i.pravatar.cc/150?u=sarahchen_tech",
        content: "GEO is the new SEO. It's fascinating to see how AI search engines are changing discovery. @MentionMeAI is ahead of the curve! 🚀",
        date: "2h",
        likes: "1.2K",
        retweets: "432",
        replies: "89",
    },
    {
        author: "Daisy Miller",
        handle: "dmiller_growth",
        avatarUrl: "https://i.pravatar.cc/150?u=shila",
        content: "Seeing our brand finally pop up in Perplexity answers is a game changer. This IS the future of organic traffic. #GEO",
        date: "4h",
        likes: "892",
        retweets: "156",
        replies: "34",
    },
    {
        author: "Elena Rodriguez",
        handle: "elena_marketing",
        avatarUrl: "https://i.pravatar.cc/150?u=elena_marketing",
        content: "Finally cracking the code on AI search visibility. The shift from keywords to entities is real.",
        date: "12m",
        likes: "2.5K",
        retweets: "890",
        replies: "120",
    },
    {
        author: "James Wilson",
        handle: "jamesw_seo",
        avatarUrl: "https://i.pravatar.cc/150?u=jamesw_seo",
        content: "Google SGE, Perplexity, Claude... you have to be optimized for all of them. It's not just about links anymore, it's about authority.",
        date: "1d",
        likes: "3.1K",
        retweets: "900",
        replies: "230",
    },
];

const testimonials2 = [
    {
        author: "Michael Chang",
        handle: "mchang_ai",
        avatarUrl: "https://i.pravatar.cc/150?u=mchang_ai",
        content: "MentionMeAI helped us dominate the AI-generated responses. It's about being part of the conversation, not just a search result.",
        date: "5h",
        likes: "1.8K",
        retweets: "320",
        replies: "95",
    },
    {
        author: "Lisa Park",
        handle: "lisa_p_founder",
        avatarUrl: "https://i.pravatar.cc/150?u=lisa_p_founder",
        content: "From zero mentions to top recommendation on Claude in 3 weeks. The ROI on Generative Engine Optimization is insane. 📈",
        date: "8h",
        likes: "4.2K",
        retweets: "1.1K",
        replies: "405",
    },
    {
        author: "Alex Thompson",
        handle: "alex_t_dev",
        avatarUrl: "https://i.pravatar.cc/150?u=alex_t_dev",
        content: "The future of search is conversational. Your optimization strategy needs to match that reality. Don't get left behind.",
        date: "2d",
        likes: "950",
        retweets: "120",
        replies: "45",
    },
    {
        author: "Rachel Green",
        handle: "rachel_g_cmo",
        avatarUrl: "https://i.pravatar.cc/150?u=rachel_g_cmo",
        content: "GEO isn't just a buzzword, it's a verifiable revenue stream. We're seeing higher intent traffic from AI mentions than traditional search.",
        date: "6h",
        likes: "2.1K",
        retweets: "540",
        replies: "180",
    },
];

const Testimonial = () => {
    return (
        <section className="relative py-24 bg-gray-50 overflow-hidden">
            <div className="max-w-4xl mx-auto text-center mb-16 px-6">
                <h2 className="font-serif text-3xl md:text-5xl text-gray-900 tracking-tight leading-tight">
                    Everyone is talking about <br />
                    <span className="italic text-gray-500">Generative Engine Optimization</span>
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                    Join the brands that are defining the future of search visibility.
                </p>
            </div>

            <div className="relative flex flex-col gap-8">
                <Marquee pauseOnHover className="[--duration:40s]">
                    {testimonials1.map((t, i) => (
                        <TweetCard key={i} {...t} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:40s]">
                    {testimonials2.map((t, i) => (
                        <TweetCard key={i} {...t} />
                    ))}
                </Marquee>

                {/* Fade edges */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-gray-50 via-gray-50/0 to-transparent z-10" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-linear-to-l from-gray-50 via-gray-50/0 to-transparent z-10" />
            </div>
        </section>
    );
};

export default Testimonial;
