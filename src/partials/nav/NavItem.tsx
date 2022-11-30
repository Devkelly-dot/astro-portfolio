import React from 'react';

interface ItemProps {
  name: String;
  href: string;
  target: string;
}

const NavItem = (props: ItemProps) => (
  <li>
    <a
      href={props.href}
      target={props.target}
      className="text-lg font-semibold text-slate-500 hover:text-black"
    >
      {props.name}
    </a>
  </li>
);
export { NavItem };
