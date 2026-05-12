export default function Hero() {
    return (
        <section
            className="flex items-center justify-between px-10 py-16 bg-latar"
        >

            <div className="max-w-xl">

                <h1
                    className="text-5xl font-poppins-extrabold text-teks"
                >
                    Makanan Lezat Favoritmu
                </h1>

                <p
                    className="mt-4 text-teks-samping"
                >
                    Pesan makanan favoritmu dengan mudah dan cepat hanya di Sedap.
                </p>

                <button
                    className="mt-6 px-6 py-3 bg-hijau text-white rounded-lg"
                >
                    Pesan Sekarang
                </button>

            </div>

            <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
                alt="hero"
                className="w-[450px] rounded-2xl"
            />

        </section>
    );
}