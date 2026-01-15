import { FaStar, FaShoppingCart } from "react-icons/fa";

const products = [
  { id: 1, title: "Mercedes Benz", price: "€7,980.00", image: "/mercedes.jpg", rating: 4 },
  { id: 2, title: "Web Development", price: "€200.00", image: "/web.jpg", rating: 5 },
  { id: 3, title: "Premium Hosting", price: "€20.00", image: "/hosting.jpeg", rating: 3 },
  { id: 4, title: "SEO Optimization", price: "€150.00", image: "/seo.jpg", rating: 4 },
];

export default function NewProducts() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Section Header */}
      <div className="flex items-end justify-between mb-8 border-b border-gray-100 pb-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">New Arrivals</h2>
          <div className="w-10 h-1 bg-red-500 mt-1 rounded-full"></div>
        </div>
        <button className="text-sm font-semibold text-red-500 hover:underline">View All</button>
      </div>

      {/* Grid: 1 col (mobile), 2 (tablet), 4 (desktop) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {products.map((product) => (
          <div key={product.id} className="group relative bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
            
            {/* Image Container */}
            <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Quick Add Overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button className="bg-white text-gray-900 p-3 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <FaShoppingCart size={18} />
                </button>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-4">
              <div className="flex justify-between items-start mb-1">
                <p className="text-red-600 font-bold text-lg">{product.price}</p>
                <div className="flex text-yellow-400 text-xs mt-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < product.rating ? "fill-current" : "text-gray-200"} />
                  ))}
                </div>
              </div>

              <h3 className="text-gray-700 font-medium text-sm truncate group-hover:text-red-500 transition-colors">
                {product.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}