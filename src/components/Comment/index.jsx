/* eslint-disable no-underscore-dangle */
import React from 'react';
import cryptoJs from 'crypto-js';

function Comment(props) {
  const { title, content, commenterName, commenterEmail, createdAt } = props;
  const emailHash = cryptoJs.MD5(commenterEmail);

  const dateObj = new Date(createdAt);
  const dateTime =
    // eslint-disable-next-line prefer-template
    dateObj.toLocaleDateString() + ' ' + dateObj.toLocaleTimeString();

  return (
    <article className="border-slate-300 border-t-2 flex">
      <div className="border-r-2 p-4">
        <img
          src={`https://www.gravatar.com/avatar/${emailHash}?s=50`}
          alt=""
          className="border-2 border-slate-600 rounded-full mb-2"
        />
        <p title={commenterEmail} className="font-bold text-sm text-center">
          {commenterName}
        </p>
      </div>
      <div className="p-4 flex-grow">
        <div className="flex justify-between items-baseline">
          <h4 className="font-medium text-lg">{title}</h4>
          <p className="text-sm text-slate-500">{dateTime}</p>
        </div>
        <p className="text-md text-slate-600">{content}</p>
      </div>
    </article>
  );
}

export default Comment;
