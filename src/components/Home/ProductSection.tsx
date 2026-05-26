import ProductCard from "./ProductCard";
import { products } from "../../utils/constants";
import OfferCard from "./OfferCard";

const ProductSection = () => {
  return (
    <div className="w-full h-[calc(100vh-180px)] pt-5 bg-[white]">
      <div className="w-full h-full border border-[#f3c97c] bg-white rounded-t-[70px] p-2 overflow-y-auto">
        <div className="w-full h-fit relative rounded-t-[60px] pb-3 rounded-b-2xl mb-2 overflow-hidden bg-[orange]">
          <div className="w-fit h-fit absolute -top-1">
            <svg viewBox="0 0 200 200" className="w-32 h-32">
              <defs>
                <path
                  id="circlePath"
                  d="
          M 100, 100
          m -70, 0
          a 70,70 0 1,1 140,0
          a 70,70 0 1,1 -140,0
        "
                />
              </defs>

              <text fill="white" className="text-lg font-bold tracking-[4px]">
                <textPath href="#circlePath" startOffset="2%">
                  Special
                </textPath>
              </text>
            </svg>
          </div>
          <div className="w-fit h-fit absolute top-1 left-3">
            <svg viewBox="0 0 200 200" className="w-32 h-32">
              <defs>
                <path
                  id="circlePath"
                  d="
          M 100, 100
          m -70, 0
          a 70,70 0 1,1 140,0
          a 70,70 0 1,1 -140,0
        "
                />
              </defs>

              <text fill="white" className="text-lg font-bold tracking-[4px]">
                <textPath href="#circlePath" startOffset="2%">
                  Offers
                </textPath>
              </text>
            </svg>
          </div>

         <div className="w-full left-0 overflow-x-auto scrollbar-hide mt-6">

      <div className="flex gap-4 px-4">
            {products.map((product)=>(
            <OfferCard key={product.id} product={product} />
            ))}
        </div>
        </div>
</div>

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
