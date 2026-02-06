"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

const BookMeet = () => {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({});
            cal("ui", {
                theme: "light",
                styles: { branding: { brandColor: "#000000" } },
                hideEventTypeDetails: false,
                layout: "month_view"
            });
        })();
    }, []);

    return (
        <section id="book-meet" className="py-24 bg-[#FDFCF8] relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-serif text-4xl md:text-5xl mb-6 text-gray-900">
                        Book a Strategy Call
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Schedule a 15-minute consultation to see how we can get your brand cited by AI search engines.
                    </p>
                </div>

                <div className="w-full max-w-5xl mx-auto h-[600px] bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                    {/* 
                    REPLACE "your-username/15min" WITH YOUR ACTUAL CAL.COM LINK
                    Example: data-cal-link="mentionmeai/discovery"
                */}
                    <iframe
                        src="https://cal.com/mentionmeai/book-a-demo-call-with-us?embed=true&theme=light"
                        style={{ width: "100%", height: "100%", overflow: "scroll" }}
                        frameBorder="0"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default BookMeet;
