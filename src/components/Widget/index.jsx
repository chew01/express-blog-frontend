/* eslint-disable no-underscore-dangle */
import React from 'react';

function Widget(props) {
  const { title, array, icon } = props;
  return (
    <section className="flex flex-col gap-2">
      <h4 className="text-xl font-medium">{title}</h4>
      <ul>
        {title === 'Tags'
          ? array.map((item) => (
              <li key={item._id}>
                <a
                  href={`/tags/${item.name}`}
                  className="text-slate-800 hover:underline active:underline focus:underline flex items-start gap-1"
                >
                  {icon}
                  {item.name}
                </a>
              </li>
            ))
          : ''}
        {title === 'Recent posts'
          ? array.map((item) => (
              <li key={item._id}>
                <a
                  href={`/posts/${item.hyperlink}`}
                  className="text-slate-800 hover:underline active:underline focus:underline flex items-start gap-1"
                >
                  {icon}
                  {item.title}
                </a>
              </li>
            ))
          : ''}
      </ul>
    </section>
  );
}

export default Widget;
