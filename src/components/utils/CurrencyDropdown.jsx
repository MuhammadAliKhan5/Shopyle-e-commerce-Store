import React, { useState, useRef, useEffect } from "react";

const CurrencyDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState({
    name: "Euro",
    symbol: "€",
  });

  const dropdownRef = useRef(null);

  const currencies = [
    { name: "U.S. Dollar", symbol: "$" },
    { name: "Australian Dollar", symbol: "$" },
    { name: "Brazilian Real", symbol: "R$" },
    { name: "Canadian Dollar", symbol: "$" },
    { name: "Czech Koruna", symbol: "Kč" },
    { name: "Danish Krone", symbol: "kr" },
    { name: "Euro", symbol: "€" },
    { name: "Hong Kong Dollar", symbol: "$" },
    { name: "Hungarian Forint", symbol: "Ft" },
    { name: "Israeli New Sheqel", symbol: "₪" },
    { name: "Japanese Yen", symbol: "¥" },
    { name: "Malaysian Ringgit", symbol: "RM" },
    { name: "Mexican Peso", symbol: "$" },
    { name: "Norwegian Krone", symbol: "kr" },
    { name: "New Zealand Dollar", symbol: "$" },
    { name: "Philippine Peso", symbol: "₱" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block w-40" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 flex justify-between items-center hover:bg-gray-50 focus:outline-none shadow-sm transition-colors text-gray-700 text-sm"
      >
        <span className="truncate mr-1 font-medium">
          {selectedCurrency.name} ({selectedCurrency.symbol})
        </span>
        <svg
          className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu - No Scroll, All Options Visible */}
      {isOpen && (
        <ul className="absolute z-20 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-2xl overflow-hidden">
          {currencies.map((currency, index) => {
            const isSelected = selectedCurrency.name === currency.name;
            return (
              <li
                key={currency.name}
                onClick={() => {
                  setSelectedCurrency(currency);
                  setIsOpen(false);
                }}
                className={`px-3 py-2.5 cursor-pointer text-[12px] transition-colors flex items-center
                  ${index !== currencies.length - 1 ? "border-b border-gray-100" : ""} 
                  ${isSelected 
                    ? "bg-[#ef5331] text-white font-bold" 
                    : "text-gray-600 hover:bg-gray-50"
                  }`}
              >
                <span className="truncate">{currency.name} ({currency.symbol})</span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default CurrencyDropdown;