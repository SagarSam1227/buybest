type ProductProps = {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
  };
};

const ProductCard = ({ product }: ProductProps) => {
  return (
    <div className="rounded-2xl w-24 sm:w-32 p-1">

      <img
        src={product.image}
        alt={product.name}
        className="w-full h-32 sm:h-40 object-cover rounded-xl"
      />

      <h3 className="font-bold mt-3">
        {product.name}
      </h3>

      <p className="text-orange-500 font-semibold">
        ₹ {product.price}
      </p>

    </div>
  );
};

export default ProductCard;