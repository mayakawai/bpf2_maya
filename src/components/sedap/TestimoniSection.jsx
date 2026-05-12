import testimonials from "../../assets/data/testimonials";

export default function TestimoniSection() {
    return (
        <section
            className="px-10 py-16 bg-white"
        >

            <h2
                className="text-4xl font-poppins-extrabold text-hijau mb-10"
            >
                Testimoni Pengguna
            </h2>

            <div className="grid grid-cols-3 gap-6">

                {testimonials.map((item) => (
                    <div
                        key={item.id}
                        className="bg-latar p-6 rounded-2xl"
                    >

                        <img
                            src={item.avatar}
                            alt={item.name}
                            className="w-16 h-16 rounded-full"
                        />

                        <h3
                            className="mt-4 text-xl font-semibold"
                        >
                            {item.name}
                        </h3>

                        <p
                            className="mt-2 text-teks-samping"
                        >
                            {item.review}
                        </p>

                    </div>
                ))}

            </div>

        </section>
    );
}