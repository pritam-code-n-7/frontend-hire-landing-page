import buttondata from "../data/DataOne.json";
import { Suspense, lazy } from "react";
import { FaReact } from "react-icons/fa";
const LazyButton = lazy(() => import("../reusable/BlackButton"));

function Features() {
  return (
    <div className="p-4">
      <div className="mb-4">
        <p className="text-2xl font-extrabold text-white text-center">
          Frontend Development Training
          <span className="text-yellow-400">+</span> Immediate Work Experience
        </p>
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        <Suspense fallback={<div><FaReact size="5px"/></div>}>
          {buttondata.map((items, index)=>(<LazyButton {...items} key={index}/>))}
        </Suspense>
      </div>
      <div className="mt-8">
        <p className="text-sm  text-center text-yellow-300">
          Veniam nostrud minim dolore exercitation occaecat sunt laborum
          exercitation elit occaecat ut. Elit mollit irure ullamco voluptate.
          Sit amet adipisicing veniam occaecat. Magna velit veniam esse eu.
          Mollit officia labore laboris nulla magna do. Velit proident dolor ut
          consequat nisi consequat.
        </p>
      </div>
    </div>
  );
}

export default Features;
