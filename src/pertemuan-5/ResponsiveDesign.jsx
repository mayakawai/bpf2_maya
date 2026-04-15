function ResponsiveText() {
    return (
        <p className="text-sm md:text-lg lg:text-xl xl:text-2xl mb-4 bg-yellow-100 p-4 rounded">
            Coba lakukan zoom in atau zoom out. Perhatikan bahwa ukuran teks akan menyesuaikan dengan ukuran layar.<br/>
            Coba hapus class yang menggunakan prefix breakpoint (md:xxx, lg:xxx, xl:xxx) dan lihat perbedaannya!
        </p>
    );
}

function ResponsiveWidth(){
    return (
        <div className="mb-4">
            <div className="flex flex-col md:flex-row mb-4">
                <div className="bg-red-400 w-full md:w-1/2 p-4">Kolom 1</div>
                <div className="bg-blue-400 w-full md:w-1/2 p-4">Kolom 2</div>
            </div>
        </div>
    )
}

function ResponsiveLayout(){
    return (
        <div>
             
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                <div class="bg-blue-500 p-4">Box 1</div>
                <div class="bg-blue-500 p-4">Box 2</div>
                <div class="bg-blue-500 p-4">Box 3</div>
                <div class="bg-blue-500 p-4">Box 4</div>
            </div>
        </div>
    )
}

export default function ResponsiveDesign() {
    return (
        <div className="p-8 space-y-12">
            <h1 className="text-4xl font-black text-center text-gray-800 underline">
                Latihan Responsive Design
            </h1>

            <section>
                <h2 className="text-2xl font-bold mb-2">1. Responsive Text</h2>
                <ResponsiveText />
            </section>

            <hr />

            <section>
                <h2 className="text-2xl font-bold mb-2">2. Responsive Width (Flexbox)</h2>
                <ResponsiveWidth />
            </section>

            <hr />

            <section>
                <h2 className="text-2xl font-bold mb-2">3. Responsive Layout (Grid)</h2>
                <ResponsiveLayout />
            </section>
        </div>
    );
}