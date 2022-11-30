import { React } from 'react';

const Hero = () => (
  <div className="grid grid-cols-1 justify-items-center py-20 text-center">
    <img
      src="https://res.cloudinary.com/dq1ktd5ge/image/upload/v1669765799/portfolio/headshot_1_n3osrc.png"
      className="mb-4 w-64 saturate-50"
    />
    <h1 className="mb-4 text-4xl font-bold text-black">
      Hello, World - I'm Devin Kelly
    </h1>
    <h2 className="text-xl font-medium text-black">
      Full-Stack Web Developer & Content Writer
    </h2>
    <h3 className="mb-4 text-lg text-black">ReactJS | NextJS | Django</h3>
    <a
      className="rounded border border-black bg-transparent py-2 px-4 font-semibold text-black duration-500 hover:border-transparent hover:bg-slate-900 hover:text-white"
      href="/about"
    >
      About Me
    </a>
  </div>
);

export { Hero };
