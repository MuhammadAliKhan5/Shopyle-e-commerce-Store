import CurrencyDropdown from "./utils/CurrencyDropdown";
import LanguageDropdown from "./utils/LanguageDropdown";
import IconMenu from "./utils/IconMenu";
import { BsSearch } from "react-icons/bs";
import { FaChevronDown, FaBolt, FaLayerGroup, FaTags, FaRss, FaFire, FaClock } from "react-icons/fa";

export default function Header() {
  return (
    /* 1. Removed overflow-hidden so dropdowns aren't cut off */
    <header className="w-full bg-gray-300 shadow-md mb-6 relative">

      {/* --- TOP HEADER (Currency, Language, Helpline, Buttons) --- */}
      {/* 2. Added z-50 to ensure this top layer stays above everything else */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between py-4 px-6 gap-6 md:gap-0 relative z-50">

        {/* Left side: Currency & Language */}
        <div className="flex gap-4">
          <CurrencyDropdown />
          <LanguageDropdown />
        </div>

        {/* Center: Helpline */}
        <div className="text-sm md:text-base text-gray-700 text-center md:text-left">
          Helpline:{" "}
          <span className="font-semibold">
            +44 2035511517, +386 69617351, +31 648922026, <br /> +31 642686048, +49 15750350756
          </span>
        </div>

        {/* Right side: Buttons */}
        <div className="flex gap-4">
          <button className="text-white text-base md:text-lg rounded-xl bg-black px-6 py-2 hover:bg-gray-700 transition">
            Login
          </button>
          <button className="text-white text-base md:text-lg rounded-xl bg-red-500 px-6 py-2 hover:bg-red-800 transition">
            Registration
          </button>
        </div>
      </div>

      {/* Gray Border Line */}
      <div className="border-t border-gray-700"></div>

      {/* --- MIDDLE HEADER (Logo, Search, Icons) --- */}
      {/* 3. Lower z-index (z-40) so the dropdowns from above fly over this section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between py-4 px-6 gap-4 relative z-40">
        {/* Logo Area */}
        <div className="flex-shrink-0">
          <img
            className="w-40 h-auto bg-transparent block"
            src="/logo.png"
            alt="Logo"
          />
        </div>

        {/* Search Bar */}
        <div className="flex-grow mx-4">
          <form className="flex w-full text-black bg-white border border-gray-300 shadow-sm">
            <input
              type="text"
              placeholder="Search products, currencies, or languages..."
              className="flex-grow px-4 py-3 outline-none"
            />
            <button
              type="submit"
              className="bg-red-500 text-white px-4 py-2 flex items-center justify-center"
            >
              <BsSearch />
            </button>
          </form>
        </div>

        {/* Icons Area */}
        <div className="flex-shrink-0">
          <IconMenu compare={0} wishlist={0} cart={3} />
        </div>
      </div>

      <div className="border-t border-gray-700"></div>

      {/* --- BOTTOM NAVIGATION (Sticky Nav) --- */}
      <nav className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center text-sm font-semibold justify-center py-4 gap-12 text-gray-700">

            {/* FLASH SALE */}
            <div className="relative group cursor-pointer py-2">
              <a className="flex items-center gap-2 group-hover:text-red-600 transition-colors uppercase tracking-tight">
                <FaBolt className="text-red-500 animate-pulse" /> Flash Sale
              </a>
              <div className="absolute left-0 top-full w-80 bg-white shadow-2xl rounded-2xl border border-gray-100 p-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-2 transition-all duration-300 z-[100]">
                <div className="flex justify-between items-center mb-4">
                  <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Hot Deals</p>
                  <span className="text-[10px] bg-red-100 text-red-600 px-2 py-0.5 rounded-full font-bold">Ends in 02h : 45m</span>
                </div>
                <div className="space-y-4">
                  {[
                    { name: "iPhone 15 Pro Max", discount: "-15%", price: "€999", img: "https://via.placeholder.com/50" },
                    { name: "Sony WH-1000XM5", discount: "-30%", price: "€280", img: "https://via.placeholder.com/50" },
                    { name: "MacBook Air M2", discount: "-20%", price: "€1,050", img: "https://via.placeholder.com/50" },
                    { name: "Nike Air Max 270", discount: "-50%", price: "€75", img: "https://via.placeholder.com/50" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 hover:bg-gray-50 p-2 rounded-xl transition-colors">
                      <img src={item.img} alt={item.name} className="w-12 h-12 rounded-lg bg-gray-100 object-cover" />
                      <div className="flex-1">
                        <p className="text-xs font-bold text-gray-800">{item.name}</p>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-black text-red-600">{item.discount}</span>
                          <span className="text-[10px] text-gray-400 line-through">{item.price}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-4 py-2 bg-red-600 text-white text-[10px] font-bold rounded-lg uppercase hover:bg-black transition-colors">View All Deals</button>
              </div>
            </div>

            {/* BLOGS */}
            <div className="relative group cursor-pointer py-2">
              <a className="flex items-center gap-2 group-hover:text-red-600 transition-colors uppercase tracking-tight">
                <FaRss className="text-orange-500" /> Blogs <FaChevronDown className="text-[10px]" />
              </a>
              <div className="absolute left-1/2 -translate-x-1/2 top-full w-[450px] bg-white shadow-2xl rounded-2xl border border-gray-100 p-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-2 transition-all duration-300 z-[100]">
                <h4 className="text-xs font-bold text-gray-400 uppercase mb-4 tracking-widest">Latest Updates</h4>
                <div className="grid gap-4">
                  {[
                    { title: "Top 10 Tech Gadgets for 2026", date: "Jan 12", read: "5 min", icon: "🚀" },
                    { title: "How to Style Your Summer Wardrobe", date: "Jan 10", read: "8 min", icon: "👗" },
                    { title: "Smart Home: The Future of Living", date: "Jan 08", read: "4 min", icon: "🏠" }
                  ].map((blog, i) => (
                    <div key={i} className="flex items-start gap-4 p-3 hover:bg-orange-50 rounded-xl transition-colors border border-transparent hover:border-orange-100">
                      <span className="text-2xl">{blog.icon}</span>
                      <div>
                        <h5 className="text-xs font-bold text-gray-800 mb-1">{blog.title}</h5>
                        <div className="flex items-center gap-3 text-[10px] text-gray-400">
                          <span className="flex items-center gap-1"><FaClock size={8} /> {blog.read} read</span>
                          <span>• {blog.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ALL BRANDS */}
            <div className="relative group cursor-pointer py-2">
              <a className="flex items-center gap-2 group-hover:text-red-600 transition-colors uppercase tracking-tight">
                <FaTags className="text-blue-500" /> All Brands <FaChevronDown className="text-[10px]" />
              </a>
              <div className="absolute left-1/2 -translate-x-1/2 top-full w-[400px] bg-white shadow-2xl rounded-2xl border border-gray-100 p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-2 transition-all duration-300 z-[100]">
                <div className="grid grid-cols-3 gap-4">
                  {["Apple", "Samsung", "Nike", "Sony", "Adidas", "Microsoft", "LG", "Puma", "Dell"].map((brand, i) => (
                    <div key={i} className="flex flex-col items-center justify-center p-4 border border-gray-50 rounded-xl hover:border-blue-200 hover:bg-blue-50 transition-all group/brand">
                      <div className="w-10 h-10 bg-gray-100 rounded-full mb-2 flex items-center justify-center font-black text-gray-400 group-hover/brand:text-blue-600 transition-colors italic">
                        {brand[0]}
                      </div>
                      <span className="text-[10px] font-bold text-gray-600">{brand}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-4 text-[10px] font-bold text-blue-600 hover:underline">View All 200+ Brands</button>
              </div>
            </div>

            {/* ALL CATEGORIES */}
            <div className="relative group cursor-pointer py-2">
              <a className="flex items-center gap-2 group-hover:text-red-600 transition-colors uppercase tracking-tight">
                <FaLayerGroup className="text-purple-500" /> All Categories <FaChevronDown className="text-[10px]" />
              </a>
              <div className="absolute left-1/2 -translate-x-1/2 top-full w-[700px] bg-white shadow-2xl rounded-3xl border border-gray-100 p-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-2 transition-all duration-300 z-[100] grid grid-cols-3 gap-12">
                <div>
                  <h4 className="flex items-center gap-2 text-red-600 font-black text-xs mb-6 uppercase tracking-widest border-b border-red-50 pb-2">
                    <FaFire size={10} /> Electronics
                  </h4>
                  <ul className="space-y-4 text-[13px] text-gray-500 font-semibold">
                    {["Smartphones", "Gaming Consoles", "Cameras", "Audio Gear", "Wearables"].map(item => (
                      <li key={item} className="hover:text-black hover:translate-x-2 transition-transform cursor-pointer flex items-center gap-2">
                        <div className="w-1 h-1 bg-gray-300 rounded-full"></div> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-blue-600 font-black text-xs mb-6 uppercase tracking-widest border-b border-blue-50 pb-2">Fashion & Style</h4>
                  <ul className="space-y-4 text-[13px] text-gray-500 font-semibold">
                    {["Men's Wear", "Women's Fashion", "Kid's Corner", "Watches", "Footwear"].map(item => (
                      <li key={item} className="hover:text-black hover:translate-x-2 transition-transform cursor-pointer flex items-center gap-2">
                        <div className="w-1 h-1 bg-gray-300 rounded-full"></div> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-green-600 font-black text-xs mb-6 uppercase tracking-widest border-b border-green-50 pb-2">Home & Living</h4>
                  <ul className="space-y-4 text-[13px] text-gray-500 font-semibold">
                    {["Kitchenware", "Modern Furniture", "Home Decor", "Bedding", "Garden Tools"].map(item => (
                      <li key={item} className="hover:text-black hover:translate-x-2 transition-transform cursor-pointer flex items-center gap-2">
                        <div className="w-1 h-1 bg-gray-300 rounded-full"></div> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </nav>
    </header>
  );
}