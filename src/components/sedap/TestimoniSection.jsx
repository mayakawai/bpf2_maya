import testimonials from "../../assets/data/testimonials";

export default function TestimoniSection() {
    return (
        <section
            className="px-20 py-28 bg-white"
        >

            <div className="text-center">

                <p className="text-hijau tracking-[6px] uppercase">
                    Testimonials
                </p>

                <h2
                    className="text-5xl font-poppins-extrabold mt-4"
                >
                    Apa Kata Mereka
                </h2>

            </div>

            <div
                className="grid grid-cols-3 gap-8 mt-16"
            >

                {testimonials.map((item) => (
                    <div
                        key={item.id}
                        className="bg-[#f8f5f0] rounded-[30px] p-8"
                    >

                        <img
                            src={item.avatar}
                            alt={item.name}
                            className="w-20 h-20 rounded-full"
                        />

                        <h3
                            className="mt-6 text-2xl font-semibold"
                        >
                            {item.name}
                        </h3>

                        <p
                            className="mt-4 text-teks-samping leading-8"
                        >
                            {item.review}
                        </p>

                    </div>
                ))}

            </div>

        </section>
    );
}