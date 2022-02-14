import React from 'react';

function Body(props) {
  const { children } = props;
  return <main className="p-4 max-w-4xl">{children}</main>;
}

export default Body;
