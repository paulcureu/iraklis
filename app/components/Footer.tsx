import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-primary text-white py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <h3 className="text-3xl font-serif mb-6">Iraklis</h3>
                        <p className="text-gray-400 max-w-xs">
                            Timeless sculpture and design, bringing classical beauty into the modern world.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 uppercase tracking-wider text-gray-300">Navigation</h4>
                        <ul className="space-y-4">
                            <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="/gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 uppercase tracking-wider text-gray-300">Contact</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li>Athens, Greece</li>
                            <li>info@iraklis-sculptor.com</li>
                            <li>+30 210 123 4567</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Iraklis. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
