export default function Navbar() {
    return (
        <nav 
            id="navbar-container"
            className="flex items-center justify-between px-8 py-4 bg-white border-b border-garis"
        >

            <h1 
                id="navbar-logo"
                className="text-2xl font-poppins-extrabold text-hijau"
            >
                Sedap
            </h1>

            <ul 
                id="navbar-menu"
                className="flex items-center gap-6 text-teks font-medium"
            >
                <li>Home</li>
                <li>Produk</li>
                <li>Tentang</li>
                <li>Kontak</li>
            </ul>

            <div 
                id="navbar-button"
                className="flex items-center gap-3"
            >
                <button 
                    className="px-4 py-2 border border-hijau text-hijau rounded-lg"
                >
                    Login
                </button>

                <button 
                    className="px-4 py-2 bg-hijau text-white rounded-lg"
                >
                    Register
                </button>
            </div>

        </nav>
    );
}