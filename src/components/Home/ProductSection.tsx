import ProductCard from "./ProductCard";
import { products } from "../../utils/constants";
import OfferSection from "./OfferSection";

const ProductSection = () => {
  return (
    <div className="w-full h-[calc(100vh-145px)] pt-5 bg-[white]">
      <div className="w-full h-full border border-[#f3c97c] bg-white rounded-t-[70px] p-2 overflow-y-auto">
        <OfferSection />
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
