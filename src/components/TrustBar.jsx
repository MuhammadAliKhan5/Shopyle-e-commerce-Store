import { Truck, ShieldCheck, RefreshCw, Headphones } from 'lucide-react';

const UltraTrustBar = () => {
  const features = [
    {
      icon: <Truck size={28} />,
      title: "Global Shipping",
      desc: "Fast delivery to your doorstep",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Encrypted Pay",
      desc: "100% Secure transactions",
      gradient: "from-emerald-500 to-teal-400",
    },
    {
      icon: <RefreshCw size={28} />,
      title: "Free Returns",
      desc: "Within 30 days, no questions",
      gradient: "from-orange-500 to-yellow-400",
    },
    {
      icon: <Headphones size={28} />,
      title: "Expert Help",
      desc: "Chat with us anytime 24/7",
      gradient: "from-purple-600 to-pink-500",
    },
  ];

  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 -left-20 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 -right-20 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div 
              key={i} 
              className="group relative p-8 rounded-3xl bg-white/60 backdrop-blur-md border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Corner Accent Gradient */}
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${f.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-bl-[100px]`}></div>

              <div className="relative z-20">
                {/* Icon Circle */}
                <div className={`mb-6 flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${f.gradient} text-white shadow-lg shadow-inherit/50 transform group-hover:rotate-[10deg] transition-transform duration-500`}>
                  {f.icon}
                </div>
                
                <h3 className="text-xl font-extrabold text-gray-900 mb-2">
                  {f.title}
                </h3>
                <p className="text-gray-500 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {f.desc}
                </p>
              </div>

              {/* Bottom Animated Bar */}
              <div className={`absolute bottom-0 left-0 h-1.5 w-0 bg-gradient-to-r ${f.gradient} group-hover:w-full transition-all duration-500`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UltraTrustBar;