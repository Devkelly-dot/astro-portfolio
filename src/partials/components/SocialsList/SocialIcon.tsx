import React from 'react';

interface Icon {
  img_url: string;
  name: string;
  href: string;
}

const SocialsIcon = (props: Icon) => (
  <div className="mr-4  grayscale duration-200 hover:scale-110">
    <a href={props.href} target="_blank">
      <img
        src={props.img_url}
        alt={props.name}
        style={{ maxHeight: '2rem' }}
      ></img>
    </a>
  </div>
);

export { SocialsIcon };
