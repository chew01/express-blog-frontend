import React from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Body from '../../components/Body';
import Feed from '../../components/Feed';

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex justify-center flex-grow">
        <Body>
          <Feed />
        </Body>
        <Sidebar />
      </div>
    </div>
  );
}

export default Home;
