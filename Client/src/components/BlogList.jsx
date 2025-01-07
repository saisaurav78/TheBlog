import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchPosts, deletePost } from '../api';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const loadBlogs = async () => {
      const data = await fetchPosts();
      setBlogs(data);
    };
    loadBlogs();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        await deletePost(id);
        alert('Post deleted successfully!');
        setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== id));
      } catch (error) {
        alert('Failed to delete the post. Please try again.');
      }
    }
  };

  return (
    <div>
      <h2>All Blogs</h2>
      <ul>
        {blogs.map((blog) => (
          <li key={blog._id}>
            <Link to={`/post/${blog._id}`}>
              <h3>{blog.title}</h3>
            </Link>
            <p>{blog.summary}</p>
            <button onClick={() => handleDelete(blog._id)}>Delete</button>
            <Link to={`/edit/${blog._id}`}>
              <button>Edit</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
