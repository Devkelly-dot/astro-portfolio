import React, { useState } from 'react';

import { NavItem } from './NavItem';

const Navbar = () => {
  const [visNav, setVisNav] = useState(false);
  const [navClass, setNavClass] = useState({
    leftHand:
      'grid-cols-1 md:flex md:list-none md:flex-row md:gap-4 invisible md:visible h-0',
    rightHand:
      'grid-cols-1 md:flex md:list-none md:flex-row md:gap-4 md:justify-self-end invisible md:visible h-0',
  });

  function handleNav() {
    setVisNav(!visNav);
    if (!visNav) {
      setNavClass({
        leftHand: 'grid-cols-1 md:flex md:list-none md:flex-row md:gap-4 ',
        rightHand:
          'grid-cols-1 md:flex md:list-none md:flex-row md:gap-4 md:justify-self-end',
      });
    } else {
      setNavClass({
        leftHand:
          'grid-cols-1 md:flex md:list-none md:flex-row md:gap-4 invisible md:visible h-0',
        rightHand:
          'grid-cols-1 md:flex md:list-none md:flex-row md:gap-4 md:justify-self-end invisible md:visible h-0',
      });
    }
  }
  return (
    <nav>
      <button
        onClick={handleNav}
        data-collapse-toggle="navbar-default"
        type="button"
        className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="h-6 w-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      <div className=" grid grid-cols-1 p-4 opacity-60 hover:bg-slate-100 hover:opacity-100  md:grid-cols-2 md:px-10">
        <ul className={navClass.leftHand}>
          <NavItem name="Home" href="/" target="" />
          <NavItem name="About" href="/about" target="" />
        </ul>
        <ul className={navClass.rightHand}>
          <NavItem
            name="LinkedIn"
            href="https://www.linkedin.com/in/devin-kelly-1603b5194/ "
            target="_blank"
          />
          <NavItem
            name="GitHub"
            href="https://github.com/ReOcelot"
            target="_blank"
          />
          <NavItem
            name="Upwork"
            href="https://www.upwork.com/freelancers/~015cf5968d6091bf25"
            target="_blank"
          />
        </ul>
      </div>
    </nav>
  );
};

export { Navbar };
