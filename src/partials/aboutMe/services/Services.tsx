import React from 'react';

import { ServiceItem } from './ServiceItem';
import { TechList } from './TechList';

interface ServicesProps {
  list: any;
}

const Services = (props: ServicesProps) => {
  return (
    <div className="mt-12 text-center md:mt-0">
      <h1 className="mb-8 text-3xl font-bold">What I Do</h1>
      <ul className="px-10 md:px-0">
        {props.list ? (
          props.list.map((item: any) => (
            <li>
              <ServiceItem
                title={item.frontmatter.title}
                description={item.frontmatter.description}
                content={item.rawContent()}
              />
            </li>
          ))
        ) : (
          <div>I do nothingg</div>
        )}
      </ul>
      <div style={{ height: '1rem' }}></div>
      <TechList />
    </div>
  );
};

export { Services };
