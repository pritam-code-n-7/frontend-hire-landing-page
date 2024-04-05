import { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Button from './Button';

function Features() {
  return (
    <Fragment>
      <Helmet>
        <title>Frontend Development Training + Immediate Work Experience</title>
        <meta
          name="description"
          content="Join our frontend development training program with immediate work experience. Gain practical skills and get hired faster. Self-paced, on-demand, real work experience, 1-on-1 expert training."
        />
        <meta
          name="keywords"
          content="frontend development, training, work experience, self-paced, on-demand, real work experience, 1-on-1 expert training"
        />
      </Helmet>
      <div>
        <div className="h-24 p-2">
          <p className="leading-8 text-3xl font-extrabold text-white text-balance">
            Frontend Development Training <span className="text-yellow-400">+</span> Immediate Work Experience
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
            Veniam nostrud minim dolore exercitation occaecat sunt laborum exercitation elit occaecat ut. Elit mollit irure
            ullamco voluptate. Sit amet adipisicing veniam occaecat. Magna velit veniam esse eu. Mollit officia labore
            laboris nulla magna do. Velit proident dolor ut consequat nisi consequat.
          </p>
        </div>
      </div>
    </Fragment>
  );
}

export default Features;
