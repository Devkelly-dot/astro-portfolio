import React from 'react';

interface ItemProps {
  name: String;
  desc: String;
  demo: string;
  git: string;
  tags: string[];
}

const MyProjectItem = (props: ItemProps) => (
  <div className="grid border-2 border-slate-300 px-4">
    <div>
      <h2 className="py-4 text-center text-2xl font-bold">{props.name}</h2>
      <div className="grid justify-items-center">
        <hr className=" h-0.5 w-10/12  bg-slate-800"></hr>
      </div>
    </div>

    <p className="py-4">{props.desc}</p>

    <ul className="grid grid-cols-3 gap-4 md:grid-cols-6">
      {props.tags.map((tag) => (
        <li key={props.name.concat(':', tag)} className="border-2 p-1">
          {tag}
        </li>
      ))}
    </ul>
    <div className="flex flex-row items-end justify-center gap-4 py-4">
      {props.demo ? (
        <a href={props.demo} target="_blank" className="font-semibold">
          <p>Demo</p>
        </a>
      ) : (
        <p></p>
      )}
      {props.git ? (
        <a href={props.git} target="_blank" className="font-semibold">
          <p>Github</p>
        </a>
      ) : (
        <p></p>
      )}
    </div>
  </div>
);

export { MyProjectItem };
