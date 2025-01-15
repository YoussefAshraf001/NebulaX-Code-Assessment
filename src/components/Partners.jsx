function Partners() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-center items-center text-center py-[50px] lg:px-[100px]">
      {/* Text container */}
      <div className="flex-1">
        <h2 className="text-2xl font-semibold text-gray-400 pb-[20px] lg:pb-[0px]">
          Companies we've helped build
        </h2>
      </div>

      {/* Images container */}
      <div className="flex sm:flex-row flex-col space-x-4 sm:space-x-4 items-center grayscale">
        <img
          src="/Partners/Runway_2025-01-15T05_46_22.047Z_Upscale_Image_Upscaled_Image_1280_x_1280-removebg-preview.png"
          alt="Partner 1"
          className="w-[160px] h-[100px] object-contain"
        />
        <img
          src="/Partners/C2.png"
          alt="Partner 2"
          className="w-[160px] h-[100px] object-contain"
        />
        <img
          src="/Partners/C3.png"
          alt="Partner 3"
          className="w-[160px] h-[100px] object-contain"
        />
        <img
          src="/Partners/C4.png"
          alt="Partner 4"
          className="w-[160px] h-[100px] object-contain"
        />
        <img
          src="/Partners/C5.png"
          alt="Partner 5"
          className="w-[160px] h-[100px] object-contain mb-2"
        />
      </div>
    </div>
  );
}

export default Partners;
