import React from 'react';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter, 
  FaLinkedinIn, 
  FaYoutube 
} from 'react-icons/fa'; 
const Footer = () => {
  return (
    <footer className="bg-[#0b1120] text-gray-400 py-12 px-6 md:px-16 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Logo and Newsletter Section */}
        <div className="space-y-6">
         <div className='bg-white rounded-md'>
           <img src="logo.png" alt="" />
         </div>

          {/* Email Subscription - High Visibility */}
          <div className="flex w-full mt-15 max-w-sm border border-gray-700 rounded-md overflow-hidden">
            <input 
              type="email" 
              placeholder="Your Email Address" 
              className="w-full p-3 bg-white text-gray-900 outline-none placeholder:text-gray-500"
            />
            <button className="bg-red-500 hover:bg-red-800 text-white px-5 py-3 font-bold transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h4 className="text-white font-bold border-b border-gray-800 pb-2">CONTACT INFO</h4>
          <div className="text-sm space-y-3 leading-relaxed">
            <p><span className="text-gray-300 block font-medium">Address:</span> Shopyle.com Global Ltd. 71-75 Shelton Street, Covent Gardens, United Kingdom WC2H 9JQ</p>
            <p><span className="text-gray-300 block font-medium">Phone:</span> +44 2035511517, +38669617351, +31648922026, +4915750350756</p>
            <p><span className="text-gray-300 block font-medium">Email:</span> Shop@shopyle.com</p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="text-white font-bold border-b border-gray-800 pb-2">QUICK LINKS</h4>
          <ul className="space-y-2 text-sm">
            {["Seller Policy", "Refund Policy", "Term Conditions", "Contact Us", "Privacy Policy"].map((link) => (
              <li key={link} className="hover:text-orange-500 cursor-pointer transition-colors">{link}</li>
            ))}
          </ul>
        </div>

        {/* My Account & Seller */}
        <div className="space-y-4">
          <h4 className="text-white font-bold border-b border-gray-800 pb-2">MY ACCOUNT</h4>
          <ul className="space-y-2 text-sm mb-6">
            {["Login", "Order History", "My Wishlist", "Track Order", "Be an affiliate partner"].map((link) => (
              <li key={link} className="hover:text-orange-500 cursor-pointer transition-colors">{link}</li>
            ))}
          </ul>
          
          <h4 className="text-white font-bold mb-3">BE A SELLER</h4>
          <button className="bg-red-500 text-white px-8 py-2 rounded shadow-lg font-bold hover:bg-red-800 transition-transform active:scale-95">
            Apply Now
          </button>
        </div>
      </div>

      {/* Bottom Footer Area */}
      <div className="mt-16 border-t border-gray-800 pt-8 flex flex-col lg:flex-row justify-between items-center gap-8">
        
        <p className="text-sm text-gray-500">All rights reserved@ Shopyle.com Global Ltd</p>
        
        {/* Expanded Social Icons */}
        <div className="flex space-x-3">
          {[
            { icon: <FaFacebookF />, color: 'bg-[#3b5998]' },
            { icon: <FaInstagram />, color: 'bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600' },
            { icon: <FaTwitter />, color: 'bg-[#1da1f2]' },
            { icon: <FaLinkedinIn />, color: 'bg-[#0077b5]' },
            { icon: <FaYoutube />, color: 'bg-[#ff0000]' }
          ].map((social, idx) => (
            <a key={idx} href="#" className={`${social.color} w-9 h-9 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform`}>
              {social.icon}
            </a>
          ))}
        </div>

        {/* Payment Methods (Matching Image) */}
        <div className="flex items-center space-x-4 bg-gray-900/50 p-2 rounded-lg">
          <span className="text-[#0070ba] font-bold text-xl italic tracking-tighter">PayPal</span>
          <span className="text-white font-black italic text-xl tracking-tighter">VISA</span>
          
          {/* Mastercard Logo Style */}
          <div className="flex -space-x-2">
            <div className="w-6 h-6 bg-[#eb001b] rounded-full opacity-90"></div>
            <div className="w-6 h-6 bg-[#f79e1b] rounded-full opacity-90"></div>
          </div>
          
          {/* Maestro Style */}
          <div className="flex -space-x-2">
            <div className="w-6 h-6 bg-[#0061a8] rounded-full opacity-90"></div>
            <div className="w-6 h-6 bg-[#eb001b] rounded-full opacity-90"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;