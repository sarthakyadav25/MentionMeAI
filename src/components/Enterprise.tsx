import { Lock, UserCheck, Star } from "lucide-react";

const Enterprise = () => {
    return (
        <section className="py-20 px-6 max-w-7xl mx-auto border-t border-gray-100">
            <div className="mb-16">
                <h2 className="font-serif text-4xl text-gray-900 mb-4">
                    Built for <span className="italic">Enterprise</span>
                </h2>
                <p className="text-gray-500 max-w-md text-sm">
                    We deliver secure, AI-optimized systems with seamless access, precise
                    control, and dedicated support.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="p-8 border border-gray-100 rounded-2xl bg-white hover:shadow-xl transition-shadow duration-300">
                    <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center text-green-600 mb-6 mx-auto">
                        <Lock size={32} />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-center">
                        Single sign-on (SSO)
                    </h3>
                    <p className="text-sm text-gray-500 text-center leading-relaxed">
                        Secure, seamless access with SAML-based SSO integration for your
                        entire organization.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="p-8 border border-gray-100 rounded-2xl bg-white hover:shadow-xl transition-shadow duration-300">
                    <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-6 mx-auto">
                        <UserCheck size={32} />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-center">
                        Role-based access control
                    </h3>
                    <p className="text-sm text-gray-500 text-center leading-relaxed">
                        Granular permissions ensure the right people have the right access
                        to data and tools.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="p-8 border border-gray-100 rounded-2xl bg-white hover:shadow-xl transition-shadow duration-300">
                    <div className="w-16 h-16 rounded-full bg-yellow-50 flex items-center justify-center text-yellow-500 mb-6 mx-auto">
                        <Star size={32} fill="currentColor" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-center">Premium support</h3>
                    <p className="text-sm text-gray-500 text-center leading-relaxed">
                        Priority support via Slack or email to keep your teams moving and
                        your systems running smoothly.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Enterprise;
