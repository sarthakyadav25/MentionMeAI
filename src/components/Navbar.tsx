"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${isScrolled
                ? "bg-[#FDFCF8]/50 backdrop-blur-md py-3 border-gray-200"
                : "bg-transparent py-5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2 cursor-pointer group">
                    <div className="leading-none font-serif text-lg tracking-tight">
                        <span className="block text-[10px] uppercase tracking-widest text-muted-foreground">
                            Mention
                        </span>
                        <span className="font-semibold">Me</span>
                        <br />
                        <span className="font-semibold">AI</span>
                    </div>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    <a
                        href="#"
                        className="text-sm font-medium hover:text-black/70 transition-colors"
                    >
                        Pricing
                    </a>
                    <a
                        href="#"
                        className="text-sm font-medium hover:text-black/70 transition-colors"
                    >
                        Enterprise
                    </a>
                </div>

                {/* Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <a
                        href="#"
                        className="text-sm font-medium hover:text-black/70 transition-colors"
                    >
                        Sign in
                    </a>
                    <Button className="rounded-full">Start free trial</Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 p-6 flex flex-col gap-4 shadow-lg animate-in slide-in-from-top-2">
                    <a href="#" className="text-base font-medium">
                        Pricing
                    </a>
                    <a href="#" className="text-base font-medium">
                        Enterprise
                    </a>
                    <hr />
                    <a href="#" className="text-base font-medium">
                        Sign in
                    </a>
                    <Button className="w-full rounded-full">Start free trial</Button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
