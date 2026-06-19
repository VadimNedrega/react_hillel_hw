function Loader() {
  return (
    <div className="flex items-center justify-center min-h-[220px]">
      <div className="relative w-10 h-10">

        <div className="absolute inset-0 rounded-full border-4 border-gray-200" />

        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-600 border-r-blue-400 animate-spin" />

      </div>
    </div>
  );
}

export default Loader;