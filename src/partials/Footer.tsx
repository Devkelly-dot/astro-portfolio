import { Section } from 'astro-boilerplate-components';

const Footer = () => (
  <Section>
    <hr class="my-4 h-px border-0 bg-gray-200 dark:bg-gray-700"></hr>
    <div>
      © Copyright 2022 by Devin Kelly -{' '}
      <a
        href="https://github.com/ixartz/Astro-boilerplate"
        className="text-teal-400"
        target="_blank"
      >
        Boilerplate by ixartz
      </a>
    </div>
  </Section>
);

export { Footer };
