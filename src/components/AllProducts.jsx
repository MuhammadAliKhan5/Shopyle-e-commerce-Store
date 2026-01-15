import React from "react";
import { 
  FaStar, FaShoppingCart, FaEye, FaHeart, 
  FaFire, FaCartPlus, FaArrowRight, FaGem, FaGift 
} from "react-icons/fa";

// --- DATA ---
const newProducts = [
  { id: 1, title: "Mercedes Benz", price: "€7,980.00", image: "mercedes.jpg", rating: 4 },
  { id: 2, title: "Web Development", price: "€200.00", image: "web development.jpg", rating: 5 },
  { id: 3, title: "Premium Hosting", price: "€20.00", image: "hoting.jpeg", rating: 3 },
  { id: 4, title: "SEO Optimization", price: "€150.00", image: "seo.webp ", rating: 4 },
];

const featuredProducts = [
  { id: 1, title: "Laptops", price: "€542.00", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80", rating: 4 },
  { id: 2, title: "Ladies Bags", price: "€168.00", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80", rating: 5 },
  { id: 3, title: "Mobile Phones", price: "€3,667.00", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80", rating: 3 },
  { id: 4, title: "Smart Watches", price: "€299.00", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80", rating: 5 },
];

const bestSelling = [
  { id: 1, title: "Electronic Home Appliances", price: "€87,874.00", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80", rating: 3, sales: "1.2k sold" },
  { id: 2, title: "Health and Beauty", price: "€1,390.00", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80", rating: 2, sales: "850 sold" },
  { id: 3, title: "Kitchenware & Crockery", price: "€9,874.00", image: "https://images.unsplash.com/photo-1584346133934-a3afd2a33c4c?auto=format&fit=crop&q=80", rating: 5, sales: "2.1k sold" },
  { id: 4, title: "Smart Home Tech", price: "€450.00", image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80", rating: 4, sales: "1.5k sold" },
];

// --- NEW DATA ---
const collections = [
  { id: 1, title: "Minimalist Office", items: "12 Items", image: "https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2?auto=format&fit=crop&q=80" },
  { id: 2, title: "Urban Fashion", items: "24 Items", image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80" },
  { id: 3, title: "Smart Living", items: "08 Items", image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80" },
];

export default function ProductPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-white">
      <div className="grid grid-cols-12 gap-8">
        
        {/* --- LEFT ASIDE: PROMO SIDEBAR --- */}
        <aside className="hidden lg:block lg:col-span-3">
          <div className="sticky top-10 space-y-6">
            <div className="relative h-[550px] rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80" 
                alt="Promo Banner" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-6 flex flex-col justify-end">
                <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-md mb-3 w-fit uppercase tracking-widest animate-bounce">
                  Limited Time
                </span>
                <h3 className="text-white text-3xl font-black leading-tight mb-2">
                  Mega Sale <br /> <span className="text-red-500">50% OFF</span>
                </h3>
                <p className="text-gray-300 text-sm mb-6">Upgrade your lifestyle with our premium collections.</p>
                <button className="flex items-center gap-2 bg-white text-black font-bold py-3 px-5 rounded-xl hover:bg-red-600 hover:text-white transition-all">
                  Shop Now <FaArrowRight size={14} />
                </button>
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl p-5 text-white border border-gray-800">
              <h4 className="font-bold text-sm mb-3 text-red-500">Why Shop With Us?</h4>
              <ul className="space-y-3 text-xs text-gray-400">
                <li className="flex items-center gap-2">✅ Free Shipping on €500+</li>
                <li className="flex items-center gap-2">✅ 24/7 Priority Support</li>
                <li className="flex items-center gap-2">✅ Secured Payment Gateway</li>
              </ul>
            </div>
          </div>
        </aside>

        {/* --- MAIN CONTENT --- */}
        <main className="col-span-12 lg:col-span-9 space-y-20">
          
          {/* Section 1: New Arrivals */}
          <section>
            <div className="flex items-end justify-between mb-8 border-b border-gray-100 pb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 tracking-tight uppercase">New Arrivals</h2>
                <div className="w-10 h-1 bg-red-500 mt-1 rounded-full"></div>
              </div>
              <button className="text-sm font-semibold text-red-500 hover:underline">View All</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
              {newProducts.map((product) => (
                <ProductCard1 key={product.id} product={product} />
              ))}
            </div>
          </section>

          {/* Section 2: Flash Sale */}
          <section className="relative overflow-hidden bg-gradient-to-br from-red-600 to-red-800 rounded-3xl p-8 text-white shadow-2xl">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full mb-4">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider">Live Flash Sale</span>
                </div>
                <h2 className="text-4xl font-black mb-2 uppercase italic">Don't Miss Out!</h2>
                <p className="text-red-100 max-w-md mb-6">Our fastest-selling items are at their lowest prices ever. Only for 24 hours.</p>
                <div className="flex gap-4 justify-center md:justify-start">
                  <div className="bg-black/20 backdrop-blur-md p-3 rounded-xl min-w-[60px] text-center">
                    <span className="block text-2xl font-bold">12</span>
                    <span className="text-[10px] uppercase opacity-70">Hrs</span>
                  </div>
                  <div className="bg-black/20 backdrop-blur-md p-3 rounded-xl min-w-[60px] text-center">
                    <span className="block text-2xl font-bold">45</span>
                    <span className="text-[10px] uppercase opacity-70">Min</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
                {featuredProducts.slice(0, 2).map(product => (
                  <ProductCard4 key={product.id} product={product} />
                ))}
              </div>
            </div>
            <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          </section>

          {/* Section 3: Popular Categories */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 uppercase">Popular Categories</h2>
              <div className="flex-grow h-px bg-gray-100"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <CategoryCard title="Electronics" icon="💻" color="bg-blue-50" />
              <CategoryCard title="Fashion" icon="👗" color="bg-pink-50" />
              <CategoryCard title="Home" icon="🏠" color="bg-orange-50" />
              <CategoryCard title="Beauty" icon="💄" color="bg-purple-50" />
              <CategoryCard title="Sports" icon="⚽" color="bg-green-50" />
              <CategoryCard title="Automotive" icon="🚗" color="bg-gray-50" />
            </div>
          </section>

          {/* NEW Section 4: Handpicked Collections */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <FaGem className="text-purple-600" />
              <h2 className="text-2xl font-bold text-gray-900 uppercase">Handpicked Collections</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {collections.map((col) => (
                <div key={col.id} className="group relative h-64 rounded-3xl overflow-hidden cursor-pointer">
                  <img src={col.image} alt={col.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex flex-col justify-end p-6">
                    <h4 className="text-white text-xl font-bold">{col.title}</h4>
                    <p className="text-gray-200 text-xs mb-3">{col.items}</p>
                    <button className="text-white text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                      Browse Gallery <FaArrowRight size={10} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* NEW Section 5: Special Bundle Deals */}
          <section className="bg-indigo-900 rounded-3xl p-10 text-white relative overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10">
              <div className="max-w-md">
                <div className="flex items-center gap-2 mb-4 text-indigo-300 font-bold uppercase text-xs tracking-widest">
                  <FaGift /> Gift Your Loved Ones
                </div>
                <h2 className="text-4xl font-black leading-tight mb-4">Save up to €200 on Premium Bundles</h2>
                <p className="text-indigo-200 text-sm mb-8">Combine tech gadgets with lifestyle accessories and get massive discounts.</p>
                <button className="bg-white text-indigo-900 px-8 py-4 rounded-2xl font-black uppercase text-xs hover:bg-indigo-100 transition-colors">
                  Create My Bundle
                </button>
              </div>
              <div className="flex -space-x-12 hover:space-x-4 transition-all duration-500">
                 {featuredProducts.slice(1, 4).map((p, i) => (
                   <div key={i} className="w-40 h-40 rounded-full border-4 border-indigo-900 overflow-hidden shadow-2xl">
                     <img src={p.image} className="w-full h-full object-cover" alt="Bundle" />
                   </div>
                 ))}
              </div>
            </div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl"></div>
          </section>

          {/* Section 6: Best Selling */}
          <section className="bg-white rounded-3xl border border-gray-100 shadow-xl p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <FaFire className="text-orange-500 animate-pulse" />
                  <span className="text-orange-500 font-bold text-xs uppercase">Customer Favorites</span>
                </div>
                <h2 className="text-3xl font-black text-gray-900 tracking-tight uppercase">Best Sellers</h2>
              </div>
              <button className="bg-red-600 hover:bg-gray-900 px-6 py-3 text-white font-bold rounded-2xl transition-all shadow-lg shadow-red-100">Explore Top 20</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
              {bestSelling.map((product) => (
                <ProductCard3 key={product.id} product={product} />
              ))}
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}

// --- SUB-COMPONENTS (CARDS) ---
// (Keeping your original card components)
function ProductCard1({ product }) {
  return (
    <div className="group relative bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <img src={product.image} alt={product.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button className="bg-white text-gray-900 p-3 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform"><FaShoppingCart size={18} /></button>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-1">
          <p className="text-red-600 font-bold text-lg">{product.price}</p>
          <div className="flex text-yellow-400 text-[10px] mt-1">
            {[...Array(5)].map((_, i) => <FaStar key={i} className={i < product.rating ? "fill-current" : "text-gray-200"} />)}
          </div>
        </div>
        <h3 className="text-gray-700 font-medium text-xs truncate group-hover:text-red-500 transition-colors">{product.title}</h3>
      </div>
    </div>
  );
}

function ProductCard2({ product }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-transparent hover:border-gray-200 hover:shadow-2xl transition-all duration-500 relative">
      <div className="relative h-48 overflow-hidden bg-gray-50">
        <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute top-3 right-[-50px] group-hover:right-3 transition-all flex flex-col gap-2">
          <button className="p-2 bg-white text-gray-600 rounded-full shadow-lg hover:bg-red-500 hover:text-white transition-colors"><FaHeart size={12} /></button>
          <button className="p-2 bg-white text-gray-600 rounded-full shadow-lg hover:bg-red-500 hover:text-white transition-colors"><FaEye size={12} /></button>
        </div>
      </div>
      <div className="p-4 text-center">
        <h3 className="text-gray-900 font-bold text-sm mb-1 truncate">{product.title}</h3>
        <div className="flex justify-center gap-0.5 mb-2">
          {[...Array(5)].map((_, i) => <FaStar key={i} className={`text-[10px] ${i < product.rating ? "text-yellow-400" : "text-gray-200"}`} />)}
        </div>
        <span className="text-lg font-black text-gray-900 block mb-3">{product.price}</span>
        <button className="w-full py-2 bg-gray-900 text-white text-[10px] font-bold rounded-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all hover:bg-red-600">Quick Shop</button>
      </div>
    </div>
  );
}

function ProductCard3({ product }) {
  return (
    <div className="group flex flex-col h-full bg-white rounded-2xl transition-all border border-gray-50 hover:border-red-100">
      <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-square">
        <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute top-2 left-2 bg-white/90 text-red-600 px-2 py-0.5 rounded-full text-[8px] font-black uppercase">Best Seller</div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-1">
          <p className="text-red-600 font-black text-lg leading-none">{product.price}</p>
          <span className="text-[8px] text-gray-400 font-medium uppercase bg-gray-50 px-1 py-0.5 rounded">{product.sales}</span>
        </div>
        <h3 className="text-gray-800 font-bold text-xs h-8 line-clamp-2 mb-2">{product.title}</h3>
        <div className="mt-auto pt-3 flex items-center justify-between border-t border-gray-50">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => <FaStar key={i} className={`text-[8px] ${i < product.rating ? "text-yellow-400" : "text-gray-200"}`} />)}
          </div>
          <button className="p-1.5 bg-gray-50 text-gray-900 rounded-lg hover:bg-red-600 hover:text-white transition-colors"><FaCartPlus size={14} /></button>
        </div>
      </div>
    </div>
  );
}

function ProductCard4({ product }) {
  return (
    <div className="bg-white rounded-2xl p-3 text-gray-900 group cursor-pointer shadow-lg hover:-translate-y-2 transition-transform">
      <div className="relative aspect-square rounded-xl overflow-hidden mb-3">
        <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
        <div className="absolute top-2 left-2 bg-red-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-full">Sale</div>
      </div>
      <h4 className="font-bold text-xs truncate mb-1">{product.title}</h4>
      <span className="text-red-600 font-black text-sm">{product.price}</span>
    </div>
  );
}

function CategoryCard({ title, icon, color }) {
  return (
    <div className={`${color} group p-6 rounded-3xl text-center cursor-pointer hover:shadow-inner transition-all border border-transparent hover:border-gray-200`}>
      <div className="text-3xl mb-3 group-hover:scale-125 transition-transform duration-300">{icon}</div>
      <span className="text-xs font-bold text-gray-700 uppercase tracking-wide">{title}</span>
    </div>
  );
}