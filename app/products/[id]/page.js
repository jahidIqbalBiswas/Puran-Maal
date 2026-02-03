import products from "@/data/products";

export default async function ProductDetails({ params }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <p className="text-gray-500">Product not found.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Image */}
      <div className="bg-white rounded-card p-4">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-[320px] object-cover rounded-card"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">{product.title}</h1>

        <p className="text-3xl font-extrabold text-primary">
          ৳ {product.price}
        </p>

        <div className="flex gap-4 text-sm text-gray-600">
          <span>📍 {product.location}</span>
          <span>🗂 {product.category}</span>
        </div>

        <hr />

        <div>
          <h3 className="font-semibold mb-2">Description</h3>
          <p className="text-gray-700 leading-relaxed">
            This is a well-maintained second-hand product. Contact seller for
            more details and inspection.
          </p>
        </div>

        {/* Seller Info */}
        <div className="bg-muted rounded-card p-4 mt-4">
          <h4 className="font-semibold mb-1">Seller Information</h4>
          <p className="text-sm text-gray-600">Local Seller · Verified User</p>
        </div>

        {/* CTA */}
        <button className="bg-primary text-white rounded-button py-3 mt-4 text-lg font-semibold hover:opacity-90">
          Contact Seller
        </button>
      </div>
    </div>
  );
}
