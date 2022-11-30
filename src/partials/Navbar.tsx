import {
  NavbarTwoColumns,
  NavMenu,
  Section,
} from 'astro-boilerplate-components';
import React from 'react';

const Navbar = () => (
  <div>
    <Section>
      <NavbarTwoColumns>
        <NavMenu>
          <a href="/" className="text-black">
            Home
          </a>
          <a
            className="text-black"
            href="https://www.linkedin.com/in/devin-kelly-1603b5194/"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            className="text-black"
            href="https://github.com/ReOcelot/"
            target="_blank"
          >
            Git Hub
          </a>
          <a
            className="text-black"
            href="https://www.upwork.com/freelancers/~015cf5968d6091bf25/"
            target="_blank"
          >
            Upwork
          </a>
        </NavMenu>
      </NavbarTwoColumns>
    </Section>
    <div style={{ height: '4rem' }}></div>
  </div>
);

export { Navbar };
