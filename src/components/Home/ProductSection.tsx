import ProductCard from './ProductCard';
import { products } from '../../utils/constants';

const ProductSection = () => {
  return (

    <div className="w-full h-[calc(100vh-180px)] bg-linear-to-r from-[#a25100] via-[#e27508] to-[#f68617] p-3">

      <div className="w-full h-full bg-white rounded-2xl p-2 overflow-y-auto">

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </div>

    </div>

  )
}

export default ProductSection;