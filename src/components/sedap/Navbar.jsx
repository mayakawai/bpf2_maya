export default function Navbar() {
    return (
        <nav
            className="flex items-center justify-between px-14 py-6 bg-transparent absolute w-full z-50 text-white"
        >

            <h1
                className="text-4xl font-poppins-extrabold"
            >
                Sedap
            </h1>

            <ul
                className="flex gap-10 font-medium text-lg"
            >
                <li>Home</li>
                <li>Produk</li>
                <li>Tentang</li>
                <li>Testimoni</li>
            </ul>

            <div className="flex gap-4">

                <button
                    className="border border-white text-black bg-green-500 px-5 py-2 rounded-full font-medium">
                    Login
                </button>

                <button
                    className="bg-hijau text-black px-5 py-2 rounded-full font-medium">
                    Register
                </button>

            </div>

        </nav>
    );
}