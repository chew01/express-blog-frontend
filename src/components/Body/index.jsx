import React from 'react';

function Body(props) {
  const { children } = props;
  return (
    <main className="p-4 lg:max-w-2xl 2xl:max-w-4xl w-full flex flex-col gap-4">
      {children}
    </main>
  );
}

export default Body;
