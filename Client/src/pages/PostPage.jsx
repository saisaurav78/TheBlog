import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPost } from '../api';

const PostPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const loadPost = async () => {
      try {
        const data = await fetchPost(id);
        setBlog(data);
      } catch (error) {
        alert('Failed to load the post. Please try again.');
      }
    };
    loadPost();
  }, [id]);

  if (!blog) return <p>Loading...</p>;

  return (
    <div className='container'>
      <h1>{blog.title}</h1>
      <p>{blog.summary}</p>
      <p>{blog.content}</p>
    </div>
  );
};

export default PostPage;
