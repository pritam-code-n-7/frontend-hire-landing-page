/* eslint-disable react/prop-types */
function WhiteButton({ name, type, onClick }) {
  return (
    <div className="flex">
      <button
        type={type}
        onClick={onClick}
        className="px-4 py-2 sm:py-1 sm:px-2  rounded-full border border-black text-xs sm:text-sm hover:bg-black hover:text-white transition-colors duration-300 font-semibold"
      >
        {name}
      </button>
    </div>
  );
}

export default WhiteButton;
