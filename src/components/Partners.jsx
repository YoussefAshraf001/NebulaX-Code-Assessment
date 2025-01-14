import C1 from "../../public/Partners/c1.png";
import C2 from "../../public/Partners/c2.png";
import C3 from "../../public/Partners/c3.png";
import C4 from "../../public/Partners/c4.png";
import C5 from "../../public/Partners/c5.png";

function Partners() {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-center items-center text-center py-[50px] lg:px-[100px]">
      {/* Text container */}
      <div className="flex-1">
        <h2 className="text-2xl font-semibold text-gray-400">
          Companies we've helped build
        </h2>
      </div>

      {/* Images container */}
      <div className="flex sm:flex-row flex-col space-x-4 sm:space-x-4 items-center grayscale">
        <img
          src={C1}
          alt="Partner 1"
          className="w-[160px] h-[100px] object-contain"
        />
        <img
          src={C2}
          alt="Partner 2"
          className="w-[160px] h-[100px] object-contain"
        />
        <img
          src={C3}
          alt="Partner 3"
          className="w-[160px] h-[100px] object-contain"
        />
        <img
          src={C4}
          alt="Partner 4"
          className="w-[160px] h-[100px] object-contain"
        />
        <img
          src={C5}
          alt="Partner 5"
          className="w-[160px] h-[100px] object-contain mb-2"
        />
      </div>
    </div>
  );
}

export default Partners;
