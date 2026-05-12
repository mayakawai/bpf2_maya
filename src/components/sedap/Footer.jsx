export default function Footer() {
    return (
        <footer
            className="px-10 py-10 bg-hijau text-white"
        >

            <h2
                className="text-3xl font-poppins-extrabold"
            >
                Sedap
            </h2>

            <p className="mt-4">
                Email : sedap@gmail.com
            </p>

            <p className="mt-2">
                Instagram : @sedap.id
            </p>

            <div className="flex gap-4 mt-6">

                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/92/GoFood_logo.svg"
                    alt="partner"
                    className="w-24 bg-white p-2 rounded-lg"
                />

                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/5e/GrabLogo.svg"
                    alt="partner"
                    className="w-24 bg-white p-2 rounded-lg"
                />

            </div>

        </footer>
    );
}