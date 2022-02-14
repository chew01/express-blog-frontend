import React from 'react';

function Sidebar() {
  return (
    <aside className="hidden md:block border-l p-4 max-w-xs">
      <h4>About Me</h4>
      <img src="https://via.placeholder.com/150" alt="" />
      <p>
        Hi! I&apos;m currently unemployed and studying random code and computer
        shizzle kedaddles!
      </p>
    </aside>
  );
}

export default Sidebar;
