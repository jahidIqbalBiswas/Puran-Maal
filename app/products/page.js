import FilterBar from "@/components/FilterBar";
import ProductCard from "@/components/ProductCard";
import products from "@/data/products";

export default function ProductsPage({ searchParams }) {
  const { category, location } = searchParams;

  const filteredProducts = products.filter((product) => {
    const matchCategory = category ? product.category === category : true;

    const matchLocation = location ? product.location === location : true;

    return matchCategory && matchLocation;
  });

  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Browse Products</h1>

      <FilterBar />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="text-gray-500">No products found.</p>
        )}
      </div>
    </>
  );
}
