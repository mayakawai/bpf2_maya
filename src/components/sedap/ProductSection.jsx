import products from "../../assets/data/products";

export default function ProductSection() {
    return (
        <section
            className="px-20 py-28 bg-[#f8f5f0]"
        >

            <div className="text-center">

                <p className="text-hijau tracking-[6px] uppercase">
                    Best Food
                </p>

                <h2
                    className="text-5xl font-poppins-extrabold mt-4"
                >
                    Produk Unggulan
                </h2>

            </div>

            <div
                className="grid grid-cols-3 gap-10 mt-16"
            >

                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white rounded-[30px] overflow-hidden shadow-lg"
                    >

                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-72 object-cover"
                        />

                        <div className="p-8">

                            <h3
                                className="text-2xl font-semibold"
                            >
                                {product.name}
                            </h3>

                            <p
                                className="mt-4 text-hijau text-xl font-bold"
                            >
                                Rp {product.price}
                            </p>

                        </div>

                    </div>
                ))}

            </div>

        </section>
    );
}