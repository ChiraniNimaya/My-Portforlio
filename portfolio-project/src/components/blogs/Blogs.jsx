import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Blogs.css'
import Blogs_Data from '../../assets/blogs_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Blogs = () => {
  const navigate = useNavigate();
  return (
    <div id='blogs' className='blogs'>
        <div className="blog-title">
            <h1>Personal Blogs</h1>
        </div>
        <div className="blogs-container">
            {Blogs_Data.map((blog,index)=>{
              return <img key={index} src={blog.b_img} alt='' onClick={() => navigate(`/blogs/${blog.b_name.replace(/\s+/g, '-')}`)}/>
            })}
        </div>
        <div className='blogs-showmore'>
          <p>Show More</p>
          <img src={arrow_icon} alt='arrow_icon'/>
        </div>
    </div>
  )
}

export default Blogs