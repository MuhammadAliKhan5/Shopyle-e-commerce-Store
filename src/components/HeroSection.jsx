import { useEffect, useState } from "react";
// Corrected Imports
import { FaChevronRight, FaChevronLeft, FaFire, FaGem } from "react-icons/fa6";
import { FaTools, FaBabyCarriage, FaShoppingCart } from "react-icons/fa";
import { FcElectronics, FcCommandLine, FcSportsMode, FcHome, FcAutomotive } from "react-icons/fc";
import { SiWappalyzer } from "react-icons/si";
import { GiLipstick, GiHighHeel, GiWatch, GiSmartphone } from "react-icons/gi";
import { MdOutlineHealthAndSafety, MdOutlinePets } from "react-icons/md";

const images = ["/shuffle1.png", "/shuffle2.png", "/shuffle3.png"];

// Reduced list to prevent overflow
const categories = [
  { icon: <FcElectronics />, name: "Consumer Electronics" },
  { icon: <GiSmartphone className="text-blue-500" />, name: "Mobiles & Tablets" },
  { icon: <FcCommandLine />, name: "Laptops & Computing" },
  { icon: <FcHome />, name: "Home & Kitchen" },
  { icon: <FcSportsMode />, name: "Sports & Outdoors" },
  { icon: <GiLipstick className="text-pink-500" />, name: "Beauty & Care" },
  { icon: <FcAutomotive />, name: "Vehicles & Parts" },
  { icon: <FaTools className="text-gray-600" />, name: "Tools & Hardware" },
  { icon: <FaBabyCarriage className="text-cyan-500" />, name: "Kids & Toys" },
  { icon: <GiHighHeel className="text-red-500" />, name: "Fashion & Shoes" },
  { icon: <FaGem className="text-blue-400" />, name: "Jewellery" },
  { icon: <GiWatch className="text-orange-600" />, name: "Watches" },
  { icon: <MdOutlineHealthAndSafety className="text-green-600" />, name: "Health" },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-12 gap-4 py-6 px-4 font-sans">

      {/* LEFT SECTION: Fixed Height Category Menu */}
      <div className="hidden lg:block lg:col-span-3 bg-white border border-gray-200 shadow-sm rounded-2xl flex flex-col h-[520px]">
        <div className="p-4 bg-gray-900 text-white rounded-t-2xl">
          <span className="font-bold text-sm tracking-wide italic">SHOP BY CATEGORY</span>
        </div>

        <div className="flex-1 overflow-hidden py-1">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="flex items-center justify-between px-4 py-2 hover:bg-red-50 cursor-pointer group transition-all"
            >
              <div className="flex items-center gap-3">
                <span className="text-lg group-hover:scale-110 transition-transform">{cat.icon}</span>
                <span className="text-[13px] font-medium text-gray-700 group-hover:text-red-600">{cat.name}</span>
              </div>
              <FaChevronRight className="text-[8px] text-gray-300 group-hover:text-red-400" />
            </div>
          ))}
        </div>
      </div>

      {/* CENTER SECTION: Slider */}
      <div className="col-span-12 lg:col-span-6 h-[520px]">
        <div className="relative h-full overflow-hidden rounded-2xl shadow-lg bg-gray-100">
          <div
            className="flex h-full transition-transform duration-1000 ease-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {images.map((img, index) => (
              <img key={index} src={img} alt="promo" className="w-full h-full object-cover flex-shrink-0" />
            ))}
          </div>

          <button onClick={() => setCurrent((prev) => (prev - 1 + images.length) % images.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-red-600 transition-all">
            <FaChevronLeft />
          </button>
          <button onClick={() => setCurrent((prev) => (prev + 1) % images.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-red-600 transition-all">
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* RIGHT SECTION: User & Mini Deals */}
      <div className="col-span-12 lg:col-span-3 flex flex-col gap-4 h-[520px]">
        <div className="bg-white border border-gray-200 rounded-2xl p-5 text-center shadow-sm">
          <div className="w-14 h-14 bg-red-100 rounded-full mx-auto mb-3 flex items-center justify-center text-red-600">
            <FaShoppingCart size={24} />
          </div>
          <p className="text-sm font-bold text-gray-800">Welcome to Shop!</p>
          <div className="grid grid-cols-2 gap-2 mt-4">
            <button className="py-2 bg-gray-900 text-white text-xs font-bold rounded-xl hover:bg-red-600 transition-colors">Join Free</button>
            <button className="py-2 bg-white border border-gray-200 text-gray-800 text-xs font-bold rounded-xl hover:bg-gray-50">Sign In</button>
          </div>
        </div>

        <div className="flex-1 bg-white border border-gray-200 rounded-2xl p-4 shadow-sm overflow-hidden">
          <h3 className="font-bold text-gray-900 text-sm mb-3 flex items-center gap-2">
            <FaFire className="text-orange-500" /> Super Deals
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {/* Image 1 */}
            <div className="group relative rounded-xl overflow-hidden bg-gray-50 border aspect-square cursor-pointer">
              <img src="hot1.webp" alt="Deal 1" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
            </div>

            {/* Image 2 */}
            <div className="group relative rounded-xl overflow-hidden bg-gray-50 border aspect-square cursor-pointer">
              <img src="mega.jpg" alt="Deal 2" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
            </div>

            {/* Image 3 */}
            <div className="group relative rounded-xl overflow-hidden bg-gray-50 border aspect-square cursor-pointer">
              <img src="focus.png" alt="Deal 3" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
            </div>

            {/* Image 4 */}
            <div className="group relative rounded-xl overflow-hidden bg-gray-50 border aspect-square cursor-pointer">
              <img src="prime.jpg" alt="Deal 4" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}