import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createPost, updatePost, fetchPost } from '../api';

const BlogForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (id) {
      const loadPost = async () => {
        const data = await fetchPost(id);
        setTitle(data.title);
        setSummary(data.summary);
        setContent(data.content);
      };
      loadPost();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blogData = { title, summary, content };

    try {
      if (id) {
        await updatePost(id, blogData);
        alert('Post updated successfully!');
      } else {
        await createPost(blogData);
        alert('Post created successfully!');
      }
      navigate('/');
    } catch (error) {
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className='container'>
      <h2>{id ? 'Edit Post' : 'Create Post'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder='Summary'
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          required
        />
        <textarea
          placeholder='Content'
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button type='submit'>{id ? 'Update' : 'Create'} Post</button>
      </form>
    </div>
  );
};

export default BlogForm;
