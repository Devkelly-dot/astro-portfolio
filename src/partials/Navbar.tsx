import {
  NavbarTwoColumns,
  NavMenu,
  Section,
} from 'astro-boilerplate-components';
import React from 'react';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <NavMenu>
        <a
          href="https://www.linkedin.com/in/devin-kelly-1603b5194/"
          target="_blank"
        >
          LinkedIn
        </a>
        <a href="https://github.com/ReOcelot/" target="_blank">
          Git Hub
        </a>
        <a
          href="https://www.upwork.com/freelancers/~015cf5968d6091bf25/"
          target="_blank"
        >
          Upwork
        </a>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
