/* eslint-disable react/prop-types */
const YellowButton = ({ name, onClick, type }) => {
  return (
    <div className="flex">
      <button
        onClick={onClick}
        type={type}
        className="py-2 px-4 sm:py-2 sm:px-4 rounded-full bg-yellow-400 text-white text-xs sm:text-sm hover:bg-yellow-500 transition-colors duration-300 font-semibold"
      >
        {name}
      </button>
    </div>
  );
};

export default YellowButton;
