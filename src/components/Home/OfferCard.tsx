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

      <h3 className="font-bold mt-3 text-white text truncate">
        {product.name}
      </h3>

      <p className="text-orange-500 font-semibold">
        ₹ {product.price}
      </p>

    </div>
  );
};

export default OfferCard;