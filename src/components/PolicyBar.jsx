import {
  FaFileAlt,
  FaUndoAlt,
  FaLifeRing,
  FaExclamationCircle,
} from "react-icons/fa";

const policies = [
  {
    icon: <FaFileAlt />,
    text: "Terms & conditions",
  },
  {
    icon: <FaUndoAlt />,
    text: "return policy",
  },
  {
    icon: <FaLifeRing />,
    text: "Support Policy",
  },
  {
    icon: <FaExclamationCircle />,
    text: "privacy policy",
  },
];

export default function PolicyBar() {
  return (
    <div className="bg-gray-50 border-t border-b mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
        {policies.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center gap-3 py-10 text-center
              hover:bg-gray-200 transition cursor-pointer
              ${index !== policies.length - 1 ? "md:border-r" : ""}
              border-gray-300`}
          >
            {/* Icon */}
            <div className="text-red-500 text-3xl">
              {item.icon}
            </div>

            {/* Text */}
            <p className="text-gray-800 font-medium capitalize">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
