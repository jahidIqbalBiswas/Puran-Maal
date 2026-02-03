import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-48 w-full object-cover"
        />

        <div className="p-4">
          <h3 className="font-semibold text-lg truncate">{product.title}</h3>

          <p className="text-blue-600 font-bold mt-1">৳ {product.price}</p>

          <p className="text-sm text-gray-500 mt-1">{product.location}</p>
        </div>
      </div>
    </Link>
  );
}
