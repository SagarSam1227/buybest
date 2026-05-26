type ProductProps = {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
  };
};

const OfferCard = ({ product }: ProductProps) => {
  return (
    <div className="rounded-2xl w-26 shrink-0 p-2 border-white border ">

      <img
        src={product.image}
        alt={product.name}
        className="w-full h-24 object-cover rounded-xl"
      />

      <h3 className="font-bold mt-3 text-white text-sm truncate">
        {product.name}
      </h3>

<div className="w-fit flex gap-2 items-center">
      <p className="text-[#885601] line-through text-xs font-semibold">
        ₹ {product.price}
      </p>
       <p className="text-[#161615] text-sm font-semibold">
        ₹ {product.price}
      </p>
</div>

    </div>
  );
};

export default OfferCard;