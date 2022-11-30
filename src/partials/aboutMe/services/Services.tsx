import React from 'react';

import { ServiceItem } from './ServiceItem';
import { TechList } from './TechList';

interface ServicesProps {
  list: {
    title: string;
    description: string;
    content: string;
  }[];
}

const Services = (props: ServicesProps) => {
  return (
    <div className="mt-12 text-center md:mt-0">
      <h1 className="mb-8 text-3xl font-bold">What I Do</h1>
      <ul className="px-10 md:px-0">
        {props.list ? (
          props.list.map((item) => (
            <li key={item.title}>
              <ServiceItem
                title={item.title}
                description={item.description}
                content={item.content}
              />
            </li>
          ))
        ) : (
          <div>I do nothing</div>
        )}
      </ul>
      <div style={{ height: '1rem' }}></div>
      <TechList />
    </div>
  );
};

export { Services };
