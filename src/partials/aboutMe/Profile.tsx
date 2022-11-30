import React from 'react';

const Profile = () => (
  <div>
    <img
      className="mx-auto mb-4 w-64 saturate-50"
      src="https://res.cloudinary.com/dq1ktd5ge/image/upload/v1669765799/portfolio/headshot_1_n3osrc.png"
      alt="Devin's Picture"
    ></img>
    <div className="flex-col content-center justify-items-center text-center">
      <h1 className="mb-8 text-3xl font-bold">A Little Bit About Me</h1>
      <div
        style={{
          width: '100%',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <p style={{ width: '60%' }} className="mb-4">
          Hi, I'm Devin Kelly. I'm a freelance web developer and content writer.
          I've worked remotedly (Midwest USA) for the last 5 years and have
          loved every minute of it.
        </p>
        <p style={{ width: '50%' }}>
          My favorite technologies are{' '}
          <span className="font-bold">ReactJS</span>,
          <span className="font-bold"> NextJS </span>, and Python's
          <span className="font-bold"> Django </span> Framework
        </p>
      </div>
    </div>
  </div>
);

export { Profile };
