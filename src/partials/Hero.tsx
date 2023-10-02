import { React } from 'react';

const Hero = () => (
  <div className="grid grid-cols-1 justify-items-center text-center">
    <img
      src="https://i.ibb.co/T0r9Q59/Untitled-1.png"
      className="mb-4 w-64 saturate-50"
    />
    <h1 className="mb-4 text-4xl font-bold text-black">
      About Devin Kelly
    </h1>
    <h2 className="text-xl font-medium text-black">
      Full-Stack Web Developer
    </h2>
    <h3 className="mb-4 text-lg text-black">ReactJS | ExpressJS | MongoDB</h3>
    <a
      className="rounded border border-black bg-transparent py-2 px-4 font-semibold text-black duration-500 hover:border-transparent hover:bg-slate-900 hover:text-white"
      href="/about"
    >
      About Me
    </a>
  </div>
);

export { Hero };
