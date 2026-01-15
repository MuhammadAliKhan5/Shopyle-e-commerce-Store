export default function IconMenu({ compare = 0, wishlist = 0, cart = 0 }) {
  const Item = ({ children, label, count }) => (
    <div className="relative flex flex-col items-center gap-1 text-gray-600">
      {/* Badge */}
      <span className="absolute -top-1 right-3 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
        {count}
      </span>

      {/* Icon */}
      {children}

      {/* Text */}
      <span className="text-sm">{label}</span>
    </div>
  );

  return (
    <div className="flex items-center gap-8">
      {/* Compare */}
      <Item label="Compare" count={compare}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 4v6h6M20 20v-6h-6M4 10a8 8 0 0116 0M20 14a8 8 0 01-16 0"
          />
        </svg>
      </Item>

      {/* Wishlist */}
      <Item label="Wishlist" count={wishlist}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.682l-7.682-7.682a4.5 4.5 0 010-6.364z"
          />
        </svg>
      </Item>

      {/* Cart */}
      <Item label="Cart" count={cart}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9h14l-2-9"
          />
        </svg>
      </Item>
    </div>
  );
}
