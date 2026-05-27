import { products } from "../../utils/constants";
import OfferCard from "./OfferCard";

const OfferSection = () => {
  return (
    <div className="w-full h-fit relative rounded-t-[60px] pb-3 rounded-b-2xl mb-2 overflow-hidden bg-[#F97316]">
      <div className="w-fit h-fit absolute -top-1">
        <svg viewBox="0 0 200 200" className="w-32 h-32">
          <defs>
            <path
              id="circlePath1"
              d="
        M 100,100
        m -70,0
        a 70,70 0 1,1 140,0
        a 70,70 0 1,1 -140,0
      "
            />
          </defs>

          {/* Background Layer */}
          <text
            fill="#b86a1e"
            stroke="#b86a1e"
            strokeWidth="10"
            strokeLinejoin="round"
            className="text-lg font-bold tracking-[4px]"
          >
            <textPath href="#circlePath1" startOffset="2%">
              SPECIAL
            </textPath>
          </text>

          {/* Main Text */}
          <text fill="white" className="text-lg font-bold tracking-[4px]">
            <textPath href="#circlePath1" startOffset="2%">
              SPECIAL
            </textPath>
          </text>
        </svg>
      </div>
      <div className="w-fit h-fit absolute top-1 left-3">
        <svg viewBox="0 0 200 200" className="w-32 h-32">
          <defs>
            <path
              id="circlePath1"
              d="
        M 100,100
        m -70,0
        a 70,70 0 1,1 140,0
        a 70,70 0 1,1 -140,0
      "
            />
          </defs>

          {/* Background Layer */}
          <text
            fill="#b86a1e"
            stroke="#b86a1e"
            strokeWidth="10"
            strokeLinejoin="round"
            className="text-lg font-bold tracking-[4px]"
          >
            <textPath href="#circlePath1" startOffset="2%">
              Offers
            </textPath>
          </text>

          {/* Main Text */}
          <text fill="white" className="text-lg font-bold tracking-[4px]">
            <textPath href="#circlePath1" startOffset="2%">
              Offers
            </textPath>
          </text>
        </svg>
      </div>

      <div className="w-full left-0 overflow-x-auto scrollbar-hide mt-6">
        <div className="flex gap-4 px-4">
          {products.map((product) => (
            <OfferCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfferSection;
