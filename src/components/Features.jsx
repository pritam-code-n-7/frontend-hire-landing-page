import Button from "./Button";

function Features() {
  return (
    <div>
      <div className="h-24 p-2">
        <p className="leading-8 text-3xl font-extrabold text-white text-balance">
          Frontend Development Training <span className="text-yellow-400">+</span> Immediate Work experience So you Can get Hired Faster
        </p>
      </div>
      <div className="flex gap-2 ml-10 mt-2">  
        <Button name="Self-paced" />
        <Button name="On-Demand" />
        <Button name="Real Work Experience" />
        <Button name="1-on-1 Expert Training" />
      </div>
      <div className="mt-20">
        <p className="leading-6 text-white text-balance">
          Veniam nostrud minim dolore exercitation occaecat sunt laborum exercitation elit occaecat ut. Elit mollit irure ullamco voluptate. Sit amet adipisicing veniam occaecat. Magna velit veniam esse eu. Mollit officia labore laboris nulla magna do. Velit proident dolor ut consequat nisi consequat.
        </p>
      </div>
    </div>
  );
}

export default Features;
