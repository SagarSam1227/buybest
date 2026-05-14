import type { eachCategory } from "../../types/products";

const Categories = ({ cat}: {cat:eachCategory,i:number}) => {
  return (
    <div className="w-fit shrink-0 flex flex-col items-center">
      
      <div
        className="w-14 h-14 rounded-full p-2 bg-[#f8dbbe] flex items-center justify-center"
        dangerouslySetInnerHTML={{ __html: cat.icon }}
      />

      <p className="text-white font-bold text-sm mt-1">
        {cat.name}
      </p>

    </div>
  );
};

export default Categories;