import CategoryGrid from "@/components/CategoryGrid";
import ProductCard from "@/components/ProductCard";
import SearchBar from "@/components/SearchBar";
import products from "@/data/products";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-white rounded-3xl p-10 mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          পুরাতন পণ্য বিক্রি করে দিন ☺️
        </h1>
        <SearchBar />
      </section>

      {/* Categories */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold mb-6">
          ক্যাটেগরির মাধ্যমে খুঁজুন
        </h2>
        <CategoryGrid />
      </section>

      {/* Products */}
      <section>
        <h2 className="text-xl font-semibold mb-6">লেটেস্ট প্রোডাক্ট</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}
