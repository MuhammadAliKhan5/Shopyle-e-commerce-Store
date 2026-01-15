import React, { useState, useRef, useEffect } from "react";

const LanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState({
    name: "English",
    flag: "🇬🇧",
  });

  const dropdownRef = useRef(null);

  // Updated list with matching flags
  const languages = [
    { name: "English", flag: "🇬🇧" },
    { name: "Spanish", flag: "🇪🇸" },
    { name: "French", flag: "🇫🇷" },
    { name: "German", flag: "🇩🇪" },
    { name: "Chinese", flag: "🇨🇳" },
    { name: "Arabic", flag: "🇸🇦" },
    { name: "Japanese", flag: "🇯🇵" },
    { name: "Portuguese", flag: "🇵🇹" },
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
        className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 flex justify-between items-center hover:bg-gray-100 focus:outline-none shadow-sm transition-colors"
      >
        <span className="flex items-center gap-2 text-gray-700 text-sm font-medium truncate">
          <span className="text-base leading-none">{selectedLanguage.flag}</span> 
          <span className="truncate">{selectedLanguage.name}</span>
        </span>
        <svg
          className={`w-4 h-4 text-gray-400 transition-transform duration-200 flex-shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu - No Scroll, with Lines */}
      {isOpen && (
        <ul className="absolute z-20 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-2xl overflow-hidden">
          {languages.map((lang, index) => {
            const isSelected = selectedLanguage.name === lang.name;
            return (
              <li
                key={lang.name}
                onClick={() => {
                  setSelectedLanguage(lang);
                  setIsOpen(false);
                }}
                className={`px-3 py-2.5 cursor-pointer text-[13px] flex items-center gap-2 transition-colors
                  ${index !== languages.length - 1 ? "border-b border-gray-100" : ""}
                  ${isSelected 
                    ? "bg-[#ef5331] text-white font-bold" 
                    : "text-gray-700 hover:bg-gray-50"
                  }`}
              >
                <span className="text-base leading-none">{lang.flag}</span>
                <span className="truncate">{lang.name}</span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default LanguageDropdown;