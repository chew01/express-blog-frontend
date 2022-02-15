import React, { useState, useEffect } from 'react';
import { HiOutlineBookmark, HiOutlineTag } from 'react-icons/hi';
import { getAllVisibleTags, getRecentVisiblePosts } from '../../api';
import Widget from '../Widget';

function Sidebar() {
  const [tags, setTags] = useState([]);
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    const fetchTags = async () => {
      const visibleTags = await getAllVisibleTags();
      setTags(visibleTags);
    };
    const fetchRecent = async () => {
      const visibleRecent = await getRecentVisiblePosts();
      setRecent(visibleRecent);
    };

    fetchTags();
    fetchRecent();
  }, []);

  return (
    <aside className="hidden border-l p-4 max-w-min md:flex md:flex-col md:gap-6">
      <section className="flex flex-col gap-4">
        <h4 className="text-xl font-medium">About Me</h4>
        <img
          src="https://via.placeholder.com/200"
          alt=""
          className="max-w-[200px]"
        />
        <p className="text-sm text-slate-600">
          Hi! I&apos;m currently unemployed and studying random code and
          computer shizzle kedaddles!
        </p>
      </section>
      <Widget
        title="Tags"
        array={tags}
        icon={<HiOutlineTag className="mt-1" />}
      />
      <Widget
        title="Recent posts"
        array={recent}
        icon={<HiOutlineBookmark className="mt-1" />}
      />
    </aside>
  );
}

export default Sidebar;
