export default function Hero() {
    return (
        <section
            className="relative h-screen"
        >

            <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
                alt="hero"
                className="w-full h-full object-cover brightness-50"
            />

            <div
                className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6"
            >

                <p className="tracking-[8px] uppercase text-sm">
                    Welcome To Sedap
                </p>

                <h1
                    className="text-7xl font-poppins-extrabold mt-6 max-w-4xl leading-tight"
                >
                    Nikmati Makanan Terbaik Dengan Cita Rasa Premium
                </h1>

                <p
                    className="mt-6 max-w-2xl text-lg text-gray-200"
                >
                    Temukan berbagai makanan favorit dengan kualitas terbaik
                    dan pelayanan tercepat hanya di Sedap.
                </p>

                <button
                    className="mt-10 bg-hijau text-black font-semibold px-8 py-4 rounded-full text-lg"
                >
                    Pesan Sekarang
                </button>

            </div>

        </section>
    );
}