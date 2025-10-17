import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './BlogDetail.css';
import Zahir from '../../routes/blogsDetails/zahir';
import WatArun from '../../routes/blogsDetails/watArun';
import MangoStickyRice from '../../routes/blogsDetails/mangoStickyRice';

const blogsMap = {
  'Zahir': Zahir,
  'Wat-Arun': WatArun,
  'Mango-Sticky-Rice': MangoStickyRice
};

// normalize URL
const normalizeBlogName = (name) => name.replace(/\s+/g, '-');

const BlogDetail = () => {
  const { b_name } = useParams();
  const navigate = useNavigate();

  const blog = blogsMap[normalizeBlogName(b_name)]; 

  if (!blog) return <div className="blog-detail"><h2>Blog not found</h2></div>;

  return (
    <div className="blog-detail">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button> 
      <h1>{blog.title}</h1>
      {blog.content.map((p, i) => (
        <p key={i} className="blog-intro">{p}</p>
      ))}
    </div>
  );
};

export default BlogDetail;
