import Button from "./Button";

function Features() {
  return (
    <div className="p-4">
      <div className="mb-4">
        <p className="text-2xl font-extrabold text-white text-center">Frontend Development Training <span className="text-yellow-400">+</span> Immediate Work Experience</p>
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        <Button name="Self-paced" />
        <Button name="On-Demand" />
        <Button name="Real Work Experience" />
        <Button name="1-on-1 Expert Training" />
      </div>
      <div className="mt-8">
        <p className="text-sm  text-center text-yellow-300">Veniam nostrud minim dolore exercitation occaecat sunt laborum exercitation elit occaecat ut. Elit mollit irure ullamco voluptate. Sit amet adipisicing veniam occaecat. Magna velit veniam esse eu. Mollit officia labore laboris nulla magna do. Velit proident dolor ut consequat nisi consequat.</p>
      </div>
    </div>
  );
}

export default Features;
