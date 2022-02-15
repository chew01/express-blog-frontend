import React from 'react';
import { HiTag } from 'react-icons/hi';

function Post(props) {
  const { title, content, author, tags, createdAt, hyperlink } = props;

  const dateObj = new Date(createdAt);
  const date = dateObj.toLocaleDateString();

  return (
    <article className="p-4 bg-slate-50 border border-slate-300 rounded-xl flex flex-col gap-4">
      <a
        href={`/posts/${hyperlink}`}
        className="self-start hover:underline active:underline focus:underline"
      >
        <h3 className="font-medium text-2xl ">{title}</h3>
      </a>
      <p>{content}</p>
      <div className="flex justify-between">
        <div className="flex gap-6">
          <a
            href={`/users/${author.name}`}
            className="font-medium text-slate-800 hover:underline active:underline focus:underline"
          >
            {author.name}
          </a>
          <p className="text-slate-700">{date}</p>
        </div>
        <div className="flex gap-2 items-center">
          <HiTag size={20} className="fill-slate-700" />
          {tags.map((tag) => (
            <a
              href={`/tags/${tag.name}`}
              className="font-medium text-slate-800 hover:underline active:underline focus:underline"
            >
              {tag.name}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

export default Post;
