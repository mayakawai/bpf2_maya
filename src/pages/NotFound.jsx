export default function NotFound() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-green-600 text-white overflow-hidden">
      
      {/* subtle glow hijau */}
      <div className="absolute w-[400px] h-[400px] bg-green-500 opacity-40 blur-3xl rounded-full top-[-120px] left-[-120px]"></div>
      <div className="absolute w-[300px] h-[300px] bg-green-700 opacity-30 blur-3xl rounded-full bottom-[-120px] right-[-120px]"></div>

      <div className="text-center z-10 px-6">
        <h1 className="text-[120px] md:text-[160px] font-extrabold tracking-widest">
          404
        </h1>

        <p className="text-xl md:text-2xl mt-2 font-medium">
          Halaman tidak ditemukan
        </p>

        <p className="mt-3 text-green-100">
          Sepertinya kamu nyasar. Yuk balik ke jalur yang benar.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="/"
            className="px-6 py-3 rounded-xl bg-white text-green-600 font-semibold hover:bg-green-100 transition"
          >
            Kembali ke Home
          </a>

          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 rounded-xl border border-white hover:bg-green-700 transition"
          >
            Go Back
          </button>
        </div>
      </div>

      {/* grid tipis */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
    </div>
  );
}