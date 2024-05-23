/* eslint-disable react/prop-types */
function BlackButton({ name, type, onClick }) {
  return (
    <div className="flex items-center bg-black text-white text-xs font-semibold px-4 py-2 rounded-md">
      <button  onClick={onClick} type={type}>
        {name}
      </button>
    </div>
  );
}

export default BlackButton;
