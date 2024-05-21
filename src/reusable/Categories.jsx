/* eslint-disable react/prop-types */
function Categories({ categories, experience }) {
  return (
    <div className="flex flex-col items-center p-2">
      <h1 className="font-bold">{categories}</h1>
      <ul className="p-2 text-pretty">
        <li>
          <a href="#1st link">{experience.levelone}</a>
        </li>
        <li>
          <a href="#2nd link">{experience.leveltwo}</a>
        </li>
        <li>
          <a href="#3rd link">{experience.levelthree}</a>
        </li>
      </ul>
    </div>
  );
}

export default Categories;
