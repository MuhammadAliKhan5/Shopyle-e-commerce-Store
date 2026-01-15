import { FaStar, FaQuoteLeft, FaCheckCircle, FaArrowRight } from "react-icons/fa";

const testimonials = [
  { id: 1, name: "Alex Johnson", role: "Verified Buyer", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex", comment: "The delivery was incredibly fast! I ordered a Mercedes Benz model and it arrived in perfect condition.", rating: 5 },
  { id: 2, name: "Sarah Miller", role: "Product Designer", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah", comment: "I've been using their web development services for 3 months now. The quality of work is outstanding.", rating: 5 },
  { id: 3, name: "Michael Chen", role: "Tech Enthusiast", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael", comment: "Great prices on hosting and SEO. My website traffic has increased by 40% since I started.", rating: 4 },
  { id: 4, name: "Emma Wilson", role: "Store Owner", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma", comment: "The customer service is top-notch. They helped me set up my whole inventory system in one day.", rating: 5 },
  { id: 5, name: "David Rossi", role: "Luxury Buyer", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David", comment: "Premium quality across the board. The branding and packaging were very impressive.", rating: 5 },
  { id: 6, name: "Jessica Lee", role: "Fashion Blogger", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica", comment: "Found some amazing unique brands here that I couldn't find anywhere else. Truly a unique shop.", rating: 4 },
  { id: 7, name: "Ryan Parker", role: "Digital Marketer", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ryan", comment: "The analytics tools they provide for the SEO services are very detailed. Highly efficient.", rating: 5 },
];

export default function ClientReactions() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20 bg-white">
      {/* Header with clear border-bottom */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-gray-100 pb-6">
        <div>
          <h2 className="text-4xl font-black text-gray-900 uppercase tracking-tighter">
            User <span className="text-red-600">Feedback</span>
          </h2>
          <p className="text-gray-400 text-xs font-bold mt-1 tracking-[0.2em] uppercase">Trusted by 10k+ Customers</p>
        </div>
        <div className="flex items-center gap-3 text-red-600 font-bold text-sm bg-red-50 px-4 py-2 rounded-full border border-red-100">
          Swipe to explore <FaArrowRight className="animate-pulse" />
        </div>
      </div>

      {/* THE SCROLL AREA */}
      <div className="flex overflow-x-auto gap-8 pb-12 px-2 custom-scrollbar snap-x cursor-grab active:cursor-grabbing">
        {testimonials.map((item) => (
          <div 
            key={item.id} 
            className="flex-shrink-0 w-[300px] md:w-[380px] snap-center group relative bg-white p-8 rounded-[2rem] border-2 border-gray-50 hover:border-red-500 hover:shadow-[0_20px_50px_rgba(239,68,68,0.15)] transition-all duration-500"
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-red-50 rounded-bl-[5rem] -z-10 group-hover:bg-red-600 transition-colors duration-500 opacity-20"></div>

            <FaQuoteLeft className="text-red-600 mb-6 opacity-20 group-hover:opacity-100 transition-opacity" size={24} />

            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={`text-sm ${i < item.rating ? "text-yellow-400" : "text-gray-200"}`} />
              ))}
            </div>

            <p className="text-gray-700 font-medium text-sm leading-relaxed mb-10 h-20 line-clamp-4 italic">
              "{item.comment}"
            </p>

            <div className="flex items-center gap-4">
              <div className="relative">
                <img src={item.image} alt={item.name} className="w-14 h-14 rounded-2xl object-cover border-2 border-white shadow-lg shadow-gray-200" />
                <div className="absolute -bottom-1 -right-1 bg-blue-500 text-white p-1 rounded-full border-2 border-white">
                    <FaCheckCircle size={8} />
                </div>
              </div>
              <div>
                <h4 className="font-black text-gray-900 text-sm uppercase tracking-tight">{item.name}</h4>
                <p className="text-[10px] text-red-600 font-black uppercase tracking-widest">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}