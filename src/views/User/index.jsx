import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Body from '../../components/Body';
import Post from '../../components/Post';
import { getPostsFromUser } from '../../api';

function User() {
  const params = useParams();
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const postsFromUser = await getPostsFromUser(params.userName);
      setPosts(postsFromUser);
      document.title = `${params.userName} - Code Musings`;
    };
    fetchPosts();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex justify-center flex-grow">
        <Body>
          <h2 className="font-medium text-3xl">
            Posts made by &quot;{params.userName}&quot;
          </h2>
          <section className="flex flex-col gap-4">
            {posts
              ? posts.map((post) => (
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
                ))
              : ''}
          </section>
        </Body>
        <Sidebar />
      </div>
    </div>
  );
}

export default User;
