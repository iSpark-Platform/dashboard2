import React from 'react';
import { blog_data } from '@/data';
import Link from 'next/link';

// blog items
const blog_items = blog_data.filter(b => b.home_programming);

// single 
function SingleBlog({blog}) {
  return (
    <div className="edu-blog blog-style-1 programming-sytle">
      <div className="inner">
          <div className="thumbnail">
              <Link href={`/blog-details/${blog.id}`}>
                  <img src={blog.img} alt="Blog Images"/>
              </Link>
          </div>
          <div className="content">
              <div className="category-wrap">
                  <a href="#" className="blog-category">{blog.category}</a>
              </div>
              <h5 className="title">
                <Link href={`/blog-details/${blog.id}`}>{blog.title}</Link>
              </h5>
              <ul className="blog-meta">
                  <li><i className="icon-27"></i>{blog.date}</li>
                  <li><i className="icon-28"></i>Com {blog.comment}</li>
              </ul>
              <p>{blog.desc}</p>
          </div>
      </div>
  </div>
  )
}

const BlogArea = () => {
  return (
    <div className="edu-blog-area blog-area-1 edu-section-gap">
        <div className="container">
            <div className="section-title section-center" data-sal-delay="100" data-sal="slide-up" data-sal-duration="800">
                <span className="pre-title">Latest Articles</span>
                <h2 className="title">Get News with EduBlink</h2>
                <span className="shape-line"><i className="icon-19"></i></span>
            </div>
            <div className="row g-5">
                {blog_items.map((blog,i) => (
                <div key={i} className="col-lg-4 col-md-6 col-12" data-sal-delay={`${i+1}00`} data-sal="slide-up" data-sal-duration="800">
                    <SingleBlog blog={blog} />
                  </div>
                ))}
            </div>
        </div>
        <ul className="shape-group">
            <li className="shape-1 scene">
                <img data-depth="-1.4" src="/assets/images/about/shape-02.png" alt="Shape"/>
            </li>
            <li className="shape-2 scene">
                <span data-depth="2.5"></span>
            </li>
            <li className="shape-3 scene">
                <img data-depth="-2.3" src="/assets/images/counterup/shape-05.png" alt="Shape"/>
            </li>
        </ul>
    </div>
  );
};

export default BlogArea;