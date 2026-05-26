import type { eachCategory } from "../../types/products";

const Categories = ({ cat}: {cat:eachCategory,i:number}) => {
  return (
    <div className="w-fit shrink-0 flex flex-col items-center">
      
      <div
        className="w-10 h-10 rounded-full p-2 bg-[orange] flex items-center justify-center"
        dangerouslySetInnerHTML={{ __html: cat.icon }}
      />

      <p className="text-[black] font-bold text-xs mt-1">
        {cat.name}
      </p>

    </div>
  );
};

export default Categories;