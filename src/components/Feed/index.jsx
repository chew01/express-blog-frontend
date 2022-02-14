import React, { useEffect, useState } from 'react';
import { getAllVisiblePosts } from '../../api';
import Post from '../Post';

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const visiblePosts = await getAllVisiblePosts();
      setPosts(visiblePosts);
    };
    fetchPosts();
  }, []);

  return (
    <section className="flex flex-col gap-4">
      {posts.map((post) => (
        <Post
          // eslint-disable-next-line no-underscore-dangle
          key={post._id}
          title={post.title}
          content={post.content}
          author={post.author}
          tags={post.tags}
          createdAt={post.createdAt}
          hyperlink={post.hyperlink}
        />
      ))}
    </section>
  );
}

export default Feed;
