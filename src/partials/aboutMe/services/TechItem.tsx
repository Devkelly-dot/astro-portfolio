import React from 'react';

interface Icon {
  img_url: string;
  name: string;
}

const TechItem = (props: Icon) => (
  <div className="mr-4 cursor-pointer justify-items-center grayscale duration-200 hover:scale-110">
    <img
      className="m-auto"
      src={props.img_url}
      alt={props.name}
      style={{ maxHeight: '3rem' }}
    ></img>
    <p className="text-center">{props.name}</p>
  </div>
);

export { TechItem };
