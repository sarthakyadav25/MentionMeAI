const Footer = () => {
    return (
        <footer className="py-12 px-6 bg-[#FDFCF8] border-t border-gray-200 text-sm">
            <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
                <div className="col-span-2">
                    <div className="leading-none font-serif text-lg tracking-tight mb-4">
                        <span className="block text-[10px] uppercase tracking-widest text-muted-foreground">
                            The
                        </span>
                        <span className="font-semibold">Prompting</span>
                        <br />
                        <span className="font-semibold">Company</span>
                    </div>
                    <p className="text-gray-500 max-w-xs mt-4">
                        Customers now get recommendations from AI, not Google. Be in those
                        answers.
                    </p>
                </div>

                <div>
                    <h4 className="font-bold mb-4 text-gray-900 uppercase text-xs tracking-wider">
                        Company
                    </h4>
                    <ul className="space-y-3 text-gray-500">
                        <li>
                            <a href="#" className="hover:text-black">
                                Pricing
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-black">
                                Enterprise
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-black">
                                Careers
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-black">
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-black">
                                X/Twitter
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-4 text-gray-900 uppercase text-xs tracking-wider">
                        Legal
                    </h4>
                    <ul className="space-y-3 text-gray-500">
                        <li>
                            <a href="#" className="hover:text-black">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-black">
                                Terms of Use
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-100 text-gray-400 text-xs">
                &copy; 2024 The Prompting Company, Inc.
            </div>
        </footer>
    );
};

export default Footer;
