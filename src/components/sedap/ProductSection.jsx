import products from "../../assets/data/products";

export default function ProductSection() {
    return (
        <section
            className="px-10 py-16 bg-latar"
        >

            <h2
                className="text-4xl font-poppins-extrabold text-hijau mb-10"
            >
                Produk Unggulan
            </h2>

            <div className="grid grid-cols-3 gap-6">

                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white rounded-2xl shadow-md overflow-hidden"
                    >

                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-52 object-cover"
                        />

                        <div className="p-4">

                            <h3
                                className="text-xl font-semibold"
                            >
                                {product.name}
                            </h3>

                            <p
                                className="mt-2 text-hijau font-bold"
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
