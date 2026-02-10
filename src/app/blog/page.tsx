import { fetchPages } from '@/lib/notion';
import React from 'react';
import { BlogList } from '@/components/BlogList';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const dynamic = "force-static";
export const revalidate = false;

const page = async () => {
    const posts = await fetchPages();

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="min-h-screen bg-[#FDFCF8] py-24 md:py-32 flex-1">
                <div className="container mx-auto px-6 max-w-7xl">
                    <BlogList initialPosts={posts} />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default page;
