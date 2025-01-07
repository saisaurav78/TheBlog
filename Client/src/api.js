import axios from 'axios';

const API_URL = 'http://localhost:5000/api/posts';

export const fetchPosts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const fetchPost = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const createPost = async (data) => {
  const response = await axios.post(API_URL, data);
  return response.data;
};

export const updatePost = async (id, data) => {
  const response = await axios.put(`${API_URL}/${id}`, data);
  return response.data;
};

export const deletePost = async (id) => {
  return axios.delete(`${API_URL}/${id}`);
};
