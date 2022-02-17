/* eslint-disable no-underscore-dangle */
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Body from '../../components/Body';
import Post from '../../components/Post';
import { getCommentsFromLink, getPostFromLink } from '../../api';
import Composer from '../../components/Composer';
import Comment from '../../components/Comment';

function DetailedPost() {
  const params = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState(null);

  const fetchComments = async () => {
    const commentsFromLink = await getCommentsFromLink(params.postLink);
    setComments(commentsFromLink);
  };

  useEffect(() => {
    const fetchPost = async () => {
      const postFromLink = await getPostFromLink(params.postLink);
      setPost(postFromLink);
    };

    fetchPost();
    fetchComments();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex justify-center flex-grow">
        <Body>
          <section className="flex flex-col gap-4">
            {post ? (
              <Post
                title={post.title}
                content={post.content}
                author={post.author}
                tags={post.tags}
                createdAt={post.createdAt}
                hyperlink={post.hyperlink}
              />
            ) : (
              ''
            )}
          </section>
          <section className="bg-slate-50 border border-slate-300 rounded-xl flex flex-col">
            <Composer reloader={fetchComments} />
            {comments
              ? comments.map((comment) => (
                  <Comment
                    key={comment._id}
                    title={comment.title}
                    content={comment.content}
                    commenterName={comment.commenter_name}
                    commenterEmail={comment.commenter_email}
                    createdAt={comment.createdAt}
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

export default DetailedPost;
