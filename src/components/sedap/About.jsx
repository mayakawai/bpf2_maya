export default function About() {
    return (
        <section
            className="grid grid-cols-2 gap-16 px-20 py-28 bg-white items-center"
        >

            <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5"
                alt="about"
                className="rounded-[40px] h-[500px] object-cover w-full"
            />

            <div>

                <p className="text-hijau tracking-[6px] uppercase">
                    About Us
                </p>

                <h2
                    className="text-5xl font-poppins-extrabold mt-4 leading-tight"
                >
                    Pengalaman Kuliner Modern dan Berkualitas
                </h2>

                <p
                    className="mt-8 text-teks-samping leading-9 text-lg"
                >
                    Sedap hadir untuk memberikan pengalaman pemesanan makanan
                    online yang cepat, nyaman, dan berkualitas premium
                    dengan berbagai pilihan menu terbaik.
                </p>

            </div>

        </section>
    );
}