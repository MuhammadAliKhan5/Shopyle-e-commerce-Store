import { FaStar, FaFire, FaCartPlus } from "react-icons/fa";

const products = [
  { id: 1, title: "Electronic Home Appliances", price: "€87,874.00", image: "/eletronics.jpg", rating: 3, sales: "1.2k sold" },
  { id: 2, title: "Health and Beauty", price: "€1,390.00", image: "/health.webp", rating: 2, sales: "850 sold" },
  { id: 3, title: "Kitchenware & Crockery", price: "€9,874.00", image: "/kitchen.webp", rating: 5, sales: "2.1k sold" },
  { id: 4, title: "Smart Home Tech", price: "€450.00", image: "/tech.jpg", rating: 4, sales: "1.5k sold" },
];

export default function BestSellingProducts() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 mt-20 bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50">
      
      {/* Dynamic Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-4">
        <div className="relative">
          <div className="flex items-center gap-2 mb-1">
            <FaFire className="text-orange-500 animate-pulse" />
            <span className="text-orange-500 font-bold text-xs uppercase tracking-widest">Customer Favorites</span>
          </div>
          <h2 className="text-3xl font-black text-gray-900 tracking-tight">
            Best Selling Products
          </h2>
          <div className="w-20 h-1.5 bg-red-600 mt-2 rounded-full"></div>
        </div>

        <button className="flex items-center justify-center gap-2 bg-red-600 hover:bg-gray-900 px-6 py-3 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg shadow-red-200">
          Explore Top 20
        </button>
      </div>

      {/* Grid: 4 in a row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="group flex flex-col h-full bg-white rounded-2xl transition-all duration-300 border border-gray-50 hover:border-red-100"
          >
            {/* Image Wrap */}
            <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-square">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              {/* Hot Badge */}
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-red-600 px-3 py-1 rounded-full text-[10px] font-black uppercase shadow-sm">
                Best Seller
              </div>
            </div>

            {/* Content Area */}
            <div className="p-4 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2">
                <p className="text-red-600 font-black text-xl leading-none">
                  {product.price}
                </p>
                <span className="text-[10px] text-gray-400 font-medium uppercase tracking-tighter bg-gray-50 px-2 py-0.5 rounded">
                  {product.sales}
                </span>
              </div>

              {/* Title - Fixed height for alignment */}
              <h3 className="text-gray-800 font-bold text-sm h-10 line-clamp-2 mb-2 group-hover:text-red-600 transition-colors">
                {product.title}
              </h3>

              {/* Footer of card */}
              <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-50">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-[10px] ${i < product.rating ? "text-yellow-400" : "text-gray-200"}`}
                    />
                  ))}
                </div>
                <button className="p-2 bg-gray-50 text-gray-900 rounded-lg hover:bg-red-600 hover:text-white transition-colors">
                  <FaCartPlus size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}