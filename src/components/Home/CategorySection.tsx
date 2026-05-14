import { categoryArray } from "../../utils/constants";
import Categories from "./Categories";

const CategorySection = () => {

  return (

    <div className="w-full left-0 overflow-x-auto scrollbar-hide mt-6">

      <div className="flex gap-4 w-max px-4">

        {categoryArray.map((cat, i) => (
          <Categories key={i} cat={cat} i={i} />
        ))}

      </div>

    </div>

  );
};

export default CategorySection;