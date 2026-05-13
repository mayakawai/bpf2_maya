export default function Footer() {
    return (
        <footer className="bg-[#0f0f0f] text-white px-20 pt-20 pb-10">

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

                {/* BRAND */}
                <div>
                    <h2 className="text-3xl font-bold">
                        <span className="text-white">Se</span>
                        <span className="text-green-500">dap</span>
                    </h2>

                    <p className="mt-5 text-gray-400 leading-7 text-sm">
                        Nikmati pengalaman pemesanan makanan modern
                        dengan pelayanan terbaik dan cepat sampai tujuan.
                    </p>

                    {/* SOCIAL ICONS */}
                    <div className="flex gap-3 mt-6">

                        {/* Instagram */}
                        <a className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-pink-500 transition">
                            <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24">
                                <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm-5 3a5 5 0 110 10 5 5 0 010-10z"/>
                            </svg>
                        </a>

                        {/* WhatsApp */}
                        <a className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-green-500 transition">
                            <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24">
                                <path d="M20.52 3.48A11.91 11.91 0 0012.06 0C5.47 0 .1 5.37.1 11.96c0 2.1.55 4.14 1.6 5.93L0 24l6.3-1.65a11.9 11.9 0 005.76 1.47c6.59 0 11.96-5.37 11.96-11.96 0-3.18-1.24-6.17-3.51-8.38z"/>
                            </svg>
                        </a>

                        {/* TikTok */}
                        <a className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white transition">
                            <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24">
                                <path d="M16 3c.5 2.5 2 4 4 4v3c-1.6 0-3.1-.5-4.5-1.5V15c0 3.9-3.1 7-7 7s-7-3.1-7-7 3.1-7 7-7c.5 0 1 .1 1.5.2v3.2z"/>
                            </svg>
                        </a>

                    </div>
                </div>

                {/* SERVICES */}
                <div>
                    <h3 className="text-lg font-semibold mb-5">
                        Services
                    </h3>

                    <ul className="space-y-3 text-gray-400 text-sm">
                        <li className="hover:text-white cursor-pointer">Delicious Food</li>
                        <li className="hover:text-white cursor-pointer">Fast Delivery</li>
                        <li className="hover:text-white cursor-pointer">Free Delivery</li>
                        <li className="hover:text-white cursor-pointer">Best Quality</li>
                    </ul>
                </div>

                {/* IMPORTANT LINK */}
                <div>
                    <h3 className="text-lg font-semibold mb-5">
                        Important Link
                    </h3>

                    <ul className="space-y-3 text-gray-400 text-sm">
                        <li className="hover:text-white cursor-pointer">About Us</li>
                        <li className="hover:text-white cursor-pointer">Menu</li>
                        <li className="hover:text-white cursor-pointer">Order Now</li>
                        <li className="hover:text-white cursor-pointer">Contact</li>
                    </ul>
                </div>

                {/* CONTACT */}
                <div>
                    <h3 className="text-lg font-semibold mb-5">
                        Contact
                    </h3>

                    <div className="space-y-4 text-gray-400 text-sm">

                        <p>📍 7 Green Lake Street, Indonesia</p>
                        <p>📞 +62 812 3456 7890</p>
                        <p>✉️ sedap@gmail.com</p>

                    </div>
                </div>

            </div>

            {/* BOTTOM */}
            <div className="mt-16 border-t border-white/10 pt-6 text-center text-gray-500 text-sm">
                © 2026 Sedap. All Rights Reserved.
            </div>

        </footer>
    );
}