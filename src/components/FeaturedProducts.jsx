import { FaStar, FaEye, FaHeart } from "react-icons/fa";

const featuredProducts = [
  { id: 1, title: "Laptops", price: "€542.00", image: "/laptop.avif", rating: 4 },
  { id: 2, title: "Ladies Bags", price: "€168.00", image: "/bag.jpg", rating: 5 },
  { id: 3, title: "Mobile Phones", price: "€3,667.00", image: "/mobile.webp", rating: 3 },
  { id: 4, title: "Smart Watches", price: "€299.00", image: "/watch.jpg", rating: 5 },
];

export default function FeaturedProducts() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 mt-10 bg-gray-50 rounded-3xl border border-gray-100 shadow-sm">
      
      {/* Header Section */}
      <div className="flex items-center justify-between mb-10 px-2">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Featured Products
          </h2>
          <div className="w-12 h-1.5 bg-red-500 mt-2 rounded-full"></div>
        </div>
        <div className="hidden sm:flex gap-2">
           <button className="px-4 py-2 border rounded-full text-sm font-medium hover:bg-white transition shadow-sm">Best Sellers</button>
           <button className="px-4 py-2 bg-red-500 text-white rounded-full text-sm font-medium shadow-md shadow-red-200">New arrivals</button>
        </div>
      </div>

      {/* Grid: 4 Items on Desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredProducts.map((product) => (
          <div
            key={product.id}
            className="group bg-white rounded-2xl overflow-hidden border border-transparent hover:border-gray-200 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 relative"
          >
            {/* Image & Quick Action Overlay */}
            <div className="relative h-56 overflow-hidden bg-gray-50">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Floating Interaction Buttons */}
              <div className="absolute top-3 right-[-50px] group-hover:right-3 transition-all duration-300 flex flex-col gap-2">
                <button className="p-2.5 bg-white text-gray-600 rounded-full shadow-lg hover:bg-red-500 hover:text-white transition-colors">
                  <FaHeart size={14} />
                </button>
                <button className="p-2.5 bg-white text-gray-600 rounded-full shadow-lg hover:bg-red-500 hover:text-white transition-colors">
                  <FaEye size={14} />
                </button>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-5 text-center">
              {/* Title with hover color change */}
              <h3 className="text-gray-900 font-bold text-lg mb-1 group-hover:text-red-500 transition-colors cursor-pointer">
                {product.title}
              </h3>

              {/* Star Rating Logic */}
              <div className="flex justify-center gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`text-xs ${i < product.rating ? "text-yellow-400" : "text-gray-200"}`}
                  />
                ))}
              </div>

              {/* Price & Buy Button */}
              <div className="flex flex-col items-center gap-3 mt-4">
                <span className="text-2xl font-black text-gray-900 leading-none">
                  {product.price}
                </span>
                <button className="w-full py-2.5 bg-gray-900 text-white text-sm font-bold rounded-xl opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-red-600">
                  Quick Shop
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}