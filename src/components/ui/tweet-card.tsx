import { Heart, MessageCircle, Repeat, Share } from "lucide-react";

/* X Logo SVG */
const XLogo = () => (
    <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="w-5 h-5 fill-current text-black "
    >
        <g>
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
        </g>
    </svg>
);

/* Verified Badge SVG */
const VerifiedBadge = () => (
    <svg viewBox="0 0 24 24" aria-label="Verified account" className="w-5 h-5 text-blue-500 fill-current">
        <g>
            <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .495.083.965.238 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
        </g>
    </svg>
);

export const TweetCard = ({
    author,
    handle,
    avatarUrl,
    content,
    date,
    likes,
    retweets,
    replies,
}: {
    author: string;
    handle: string;
    avatarUrl?: string;
    content: React.ReactNode;
    date: string;
    likes: string;
    retweets: string;
    replies: string;
}) => {
    return (
        <div className="relative flex flex-col w-[300px] md:w-[400px] bg-white border border-gray-100/50 hover:border-gray-200 rounded-2xl p-6 shadow-[0_2px_40px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_40px_-4px_rgba(0,0,0,0.1)] transition-all duration-300">

            {/* X Logo in top right */}
            <div className="absolute top-6 right-6 opacity-30">
                <XLogo />
            </div>

            <div className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-linear-to-br from-indigo-500 to-purple-500 shrink-0 overflow-hidden relative shadow-sm">
                    {avatarUrl ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                            src={avatarUrl}
                            alt={author}
                            className="object-cover w-full h-full"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-white font-bold text-lg">
                            {author[0]}
                        </div>
                    )}
                </div>
                <div className="flex flex-col flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="font-bold text-[15px] text-gray-900 leading-tight truncate">
                            {author}
                        </span>
                        <VerifiedBadge />
                        <span className="text-gray-500 text-[14px] truncate">@{handle}</span>
                        <span className="text-gray-400 text-[14px]">· {date}</span>
                    </div>
                    {/* Content */}
                    <div className="mt-2 text-gray-900 text-[15px] leading-relaxed whitespace-pre-wrap font-medium">
                        {content}
                    </div>
                </div>
            </div>

            {/* Actions */}
            <div className="flex justify-between mt-5 text-gray-500 w-full pl-2">
                <div className="flex items-center gap-2 group cursor-pointer hover:text-blue-500 transition-colors">
                    <div className="p-2 rounded-full group-hover:bg-blue-500/10 transition-colors">
                        <MessageCircle className="w-[18px] h-[18px]" />
                    </div>
                    <span className="text-xs font-medium group-hover:text-blue-500">
                        {replies}
                    </span>
                </div>
                <div className="flex items-center gap-2 group cursor-pointer hover:text-green-500 transition-colors">
                    <div className="p-2 rounded-full group-hover:bg-green-500/10 transition-colors">
                        <Repeat className="w-[18px] h-[18px]" />
                    </div>
                    <span className="text-xs font-medium group-hover:text-green-500">
                        {retweets}
                    </span>
                </div>
                <div className="flex items-center gap-2 group cursor-pointer hover:text-pink-500 transition-colors">
                    <div className="p-2 rounded-full group-hover:bg-pink-500/10 transition-colors">
                        <Heart className="w-[18px] h-[18px]" />
                    </div>
                    <span className="text-xs font-medium group-hover:text-pink-500">
                        {likes}
                    </span>
                </div>
                <div className="flex items-center gap-2 group cursor-pointer hover:text-blue-500 transition-colors">
                    <div className="p-2 rounded-full group-hover:bg-blue-500/10 transition-colors">
                        <Share className="w-[18px] h-[18px]" />
                    </div>
                </div>
            </div>
        </div>
    );
};
