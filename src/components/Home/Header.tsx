import { useEffect, useState } from "react";
import CategorySection from "./CategorySection";
import { placeholders } from "../../utils/constants";

const Header = () => {
  const [itrated, setItreated] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setItreated((prev) => {
        if (prev === placeholders.length - 1) {
          return 0;
        }

        return prev + 1;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="w-[95%] pt-4 h-fit flex justify-between mx-auto">
        <div className="w-2/3 flex h-fit mb-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              fill="#ffc082"
              fill-rule="evenodd"
              d="M12.707 2.293a1 1 0 0 0-1.414 0l-7 7l-2 2a1 1 0 1 0 1.414 1.414L4 12.414V19a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-6.586l.293.293a1 1 0 0 0 1.414-1.414z"
              clip-rule="evenodd"
            />
          </svg>
          <div className="w-full h-fit overflow-hidden">
            <h3 className="font-extrabold text-white text-lg truncate">
              VRA 101 House{" "}
            </h3>
            <h3 className="-mt-1 truncate text-[#ffc082]">
              Cheranelloor, Friends road, edappally
            </h3>
          </div>
        </div>
        <div className="w-12 bg-[#cdcdcd] p-2 h-12 rounded-full float-right">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              fill="gray"
              fillRule="evenodd"
              d="M8 7a4 4 0 1 1 8 0a4 4 0 0 1-8 0m0 6a5 5 0 0 0-5 5a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3a5 5 0 0 0-5-5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div className="">
        <div className="w-[90%] mx-auto flex gap-2 h-14">
          <div className="w-full content-center bg-[white] rounded-2xl h-full p-3">
            <h3 className="text-[gray] font-bold text-sm">{`Search for ${placeholders[itrated]}`}</h3>
          </div>
          <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#b86a1e]"></div>
        </div>
        <CategorySection />
        {/* <ProductSection /> */}
      </div>
    {/* <div className="w-full bg-[red] relative p-2 pb-6 g-linear-to-tr from-[#a25100] via-[#e27508] to-[#f68617]">

    </div> */}
    </>
  );
};

export default Header;
