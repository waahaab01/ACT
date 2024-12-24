export default function Cards() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-5 px-4 py-8 z-20 h-[400px] relative z-30">
      <div className="w-full sm:w-[299px] h-[182px] bg-white shadow-xl flex justify-center items-center border-t-8 border-blue-500 text-center font-bold text-lg sm:text-xl rounded-xl">
        <h1>Process Management</h1>
      </div>

      <div className="w-full sm:w-[299px] h-[182px] bg-white shadow-xl flex justify-center items-center border-t-8 border-blue-500 text-center font-bold text-lg sm:text-xl rounded-xl">
        <h1>Information Technology Services</h1>
      </div>

      <div className="w-full sm:w-[299px] h-[182px] bg-white shadow-xl flex justify-center items-center border-t-8 border-blue-500 text-center font-bold text-lg sm:text-xl rounded-xl">
        <h1>Program & Project Management</h1>
      </div>
    </div>
  );
}
