import { React } from 'react';
import ReactTypingEffect from 'react-typing-effect';

const Hero = () => (
  <div className="grid grid-cols-1 justify-items-center text-center">
    <img
      src="https://res.cloudinary.com/dq1ktd5ge/image/upload/v1669765799/portfolio/headshot_1_n3osrc.png"
      className="mb-4 w-64 saturate-50"
    />
    <h1 className="mb-4 text-4xl font-bold text-black">
      Hello, World - I'm Devin Kelly
    </h1>
    <h2 className="mb-2 text-3xl font-medium">
      <ReactTypingEffect
        text={[
          'Full-Stack Web Developer',
          'Software Engineer',
          'SEO Driven Content Writer',
        ]}
        speed={100}
        eraseSpeed={50}
        eraseDelay={2000}
        typingDelay={100}
      />
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
