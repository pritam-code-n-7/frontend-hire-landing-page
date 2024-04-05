/* eslint-disable react/prop-types */
function Button({ name }) {
  return (
    <div className="flex items-center bg-black text-white text-xs font-semibold px-4 py-2 rounded-md">
      <button>{name}</button>
    </div>
  );
}

export default Button;
