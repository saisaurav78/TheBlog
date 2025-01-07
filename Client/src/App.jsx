import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import BlogForm from './pages/BlogForm';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/post/:id' element={<PostPage />} />
      <Route path='/create' element={<BlogForm />} />
      <Route path='/edit/:id' element={<BlogForm />} />
    </Routes>
  </Router>
);

export default App;
